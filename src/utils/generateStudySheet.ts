import type { SentenceData, GrammarNodeData } from '../types/grammar';

// ─────────────────────────────────────────────────────────────────────────────
// Visual SVG tree renderer
// ─────────────────────────────────────────────────────────────────────────────

interface PrintNode {
    id: string;
    data: GrammarNodeData;
    depth: number;
    cx: number;   // centre-x
    cy: number;   // centre-y (top of node box)
    w: number;
    h: number;
    parentId?: string;
}

// Layout constants
const ROW_H = 88;         // vertical distance between rank rows — tighter for print
const NODE_H_FULL = 88;   // height of a node box with text content
const NODE_H_LABEL = 32;  // height of a label-only (non-leaf) node
const LEAF_GAP = 24;      // horizontal gap between adjacent leaf nodes
const PAD = 36;           // canvas padding
const MIN_W = 110;        // minimum node width

// Role colors matching the app
const ROLE_HEADER_COLORS: Record<string, string> = {
    'Sentence': '#7c3aed',
    'Topic': '#16a34a',
    'Subject': '#16a34a',
    'Comment': '#2563eb',
    'Predicate': '#2563eb',
    'Verb Phrase': '#1d4ed8',
    'VP': '#0d9488',
    'VP-Chain': '#0d9488',
    'Action Node': '#059669',
    'Verb Package': '#16a34a',
    'Head Verb': '#3b82f6',
    'Object': '#c2410c',
    'Head Noun': '#ea580c',
    'Noun Phrase': '#c2410c',
    'Attributive': '#d97706',
    'Complement': '#7c3aed',
    'Particle': '#57534e',
    'Pronoun': '#0891b2',
    'Noun': '#854d0e',
    'Verb': '#1e40af',
    'Adjective': '#15803d',
    'Adjunct': '#0e7490',
    'Preposition': '#0e7490',
    'Coverb': '#0e7490',
    'Measure Word': '#92400e',
    'Verb Morpheme': '#1e40af',
    'Object Morpheme': '#c2410c',
    'Pivot': '#6d28d9',
    'Copula': '#6d28d9',
};

function getRoleHeaderColor(role: string, subRole?: string): string {
    if (role === 'VP' && subRole?.includes('primitive')) return '#059669';
    return ROLE_HEADER_COLORS[role] ?? '#475569';
}

// Classical role colors (amber/stone palette)
const ROLE_HEADER_COLORS_CLASSICAL: Record<string, string> = {
    'Sentence': '#b45309',
    'Topic': '#166534',
    'Subject': '#166534',
    'Comment': '#1d4ed8',
    'Predicate': '#1d4ed8',
    'Verb Phrase': '#1d4ed8',
    'VP': '#0d9488',
    'VP-Chain': '#0d9488',
    'Action Node': '#059669',
    'Verb Package': '#166534',
    'Head Verb': '#2563eb',
    'Object': '#92400e',
    'Head Noun': '#b45309',
    'Noun Phrase': '#92400e',
    'Attributive': '#78350f',
    'Complement': '#6b21a8',
    'Particle': '#44403c',
    'Pronoun': '#0e7490',
    'Noun': '#78350f',
    'Verb': '#1e40af',
    'Adjective': '#14532d',
    'Adjunct': '#0c4a6e',
    'Preposition': '#0c4a6e',
    'Coverb': '#0c4a6e',
    'Measure Word': '#78350f',
};

function getClassicalRoleHeaderColor(role: string, subRole?: string): string {
    if (role === 'VP' && subRole?.includes('primitive')) return '#059669';
    return ROLE_HEADER_COLORS_CLASSICAL[role] ?? '#78716c';
}

function nodeHeight(node: GrammarNodeData): number {
    return node.text || node.isDropped || node.isNull ? NODE_H_FULL : NODE_H_LABEL;
}

function estimatePrintNodeWidth(node: GrammarNodeData): number {
    const label = node.subRole ? `${node.role} (${node.subRole})` : node.role;
    const labelW = label.length * 6.8 + 28;
    if (!node.text) return Math.max(MIN_W, Math.min(labelW, 260));
    const hanziW = Array.from(node.text.hanzi).length * 21 + 28;
    const pinyinW = node.text.pinyin.length * 6.5 + 28;
    return Math.max(MIN_W, Math.min(Math.max(labelW, hanziW, pinyinW), 260));
}

function layoutPrintTree(root: GrammarNodeData): { nodes: PrintNode[]; totalW: number; totalH: number } {
    // Pass 1: collect leaves in order, compute depths
    const depthMap = new Map<string, number>();
    const leaves: GrammarNodeData[] = [];
    let maxDepth = 0;

    const walk = (node: GrammarNodeData, d: number) => {
        depthMap.set(node.id, d);
        if (d > maxDepth) maxDepth = d;
        if (!node.children || node.children.length === 0) {
            leaves.push(node);
        } else {
            node.children.forEach(c => walk(c, d + 1));
        }
    };
    walk(root, 0);

    // Pass 2: assign leaf cx left-to-right
    const nodeWidths = new Map<string, number>();
    const cxMap = new Map<string, number>();

    const allNodes: GrammarNodeData[] = [];
    const collectAll = (n: GrammarNodeData) => { allNodes.push(n); n.children?.forEach(collectAll); };
    collectAll(root);
    allNodes.forEach(n => nodeWidths.set(n.id, estimatePrintNodeWidth(n)));

    let cursor = PAD;
    leaves.forEach(leaf => {
        const w = nodeWidths.get(leaf.id)!;
        cxMap.set(leaf.id, cursor + w / 2);
        cursor += w + LEAF_GAP;
    });
    const totalW = cursor - LEAF_GAP + PAD;

    // Pass 3: bubble up interior cx as midpoint of children
    const assignInteriorCx = (node: GrammarNodeData): number => {
        if (!node.children || node.children.length === 0) return cxMap.get(node.id)!;
        const centres = node.children.map(assignInteriorCx);
        const mid = (Math.min(...centres) + Math.max(...centres)) / 2;
        cxMap.set(node.id, mid);
        return mid;
    };
    assignInteriorCx(root);

    // Pass 4: emit PrintNode list with variable heights and cumulative y positions
    // We need a proper y-pass because nodes at the same depth may have different heights
    // (label-only vs full), but we keep depth-based rows for visual alignment.
    const result: PrintNode[] = [];
    const parentIdMap = new Map<string, string>();
    const bfs = (node: GrammarNodeData) => {
        const d = depthMap.get(node.id)!;
        const w = nodeWidths.get(node.id)!;
        const cx = cxMap.get(node.id)!;
        const h = nodeHeight(node);
        result.push({
            id: node.id,
            data: node,
            depth: d,
            cx,
            cy: PAD + d * ROW_H,
            w,
            h,
            parentId: parentIdMap.get(node.id),
        });
        node.children?.forEach(c => {
            parentIdMap.set(c.id, node.id);
            bfs(c);
        });
    };
    bfs(root);

    const totalH = PAD + maxDepth * ROW_H + NODE_H_FULL + PAD;
    return { nodes: result, totalW, totalH };
}

function xmlEscape(s: string): string {
    return s
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

function renderTreeSVG(root: GrammarNodeData, isClassical: boolean): string {
    const { nodes, totalW, totalH } = layoutPrintTree(root);
    const nodeMap = new Map(nodes.map(n => [n.id, n]));
    const getColor = isClassical ? getClassicalRoleHeaderColor : getRoleHeaderColor;

    const edgeLines: string[] = [];
    const nodeBoxes: string[] = [];
    const HEADER_H = 24;
    const CORNER_R = 7;

    // Draw edges first (behind nodes)
    nodes.forEach(n => {
        if (!n.parentId) return;
        const parent = nodeMap.get(n.parentId);
        if (!parent) return;
        // Connect from parent bottom-centre to child top-centre
        const x1 = parent.cx;
        const y1 = parent.cy + parent.h;
        const x2 = n.cx;
        const y2 = n.cy;
        const color = getColor(parent.data.role, parent.data.subRole);
        // Cubic bezier for smooth branching
        const cy1 = y1 + (y2 - y1) * 0.45;
        const cy2 = y1 + (y2 - y1) * 0.55;
        edgeLines.push(
            `<path d="M${x1},${y1} C${x1},${cy1} ${x2},${cy2} ${x2},${y2}" ` +
            `fill="none" stroke="${color}" stroke-width="2.2" stroke-opacity="0.85" stroke-linecap="round"/>`
        );
    });

    // Draw nodes
    nodes.forEach(n => {
        const { cx, cy, w, h, data } = n;
        const x = cx - w / 2;
        const color = getColor(data.role, data.subRole);
        const label = data.subRole ? `${data.role} (${data.subRole})` : data.role;
        const isDropped = data.isDropped;
        const isNull = data.isNull;
        const hasContent = !!(data.text || data.isDropped || data.isNull);

        nodeBoxes.push(`<g class="tree-node" filter="url(#shadow)">`);

        if (hasContent) {
            // Full node: white body + colored header band
            nodeBoxes.push(
                // Outer rounded rect
                `<rect x="${x}" y="${cy}" width="${w}" height="${h}" rx="${CORNER_R}" ` +
                `fill="${isDropped || isNull ? '#f8fafc' : '#ffffff'}" stroke="${color}" stroke-width="1.5"${isNull ? ' stroke-dasharray="6,3" opacity="0.7"' : ''}/>`,
                // Colored header band — clipPath has matching rx so corners align with outer box
                `<clipPath id="cp-${data.id}"><rect x="${x}" y="${cy}" width="${w}" height="${HEADER_H + CORNER_R}" rx="${CORNER_R}"/></clipPath>`,
                `<rect x="${x}" y="${cy}" width="${w}" height="${HEADER_H + CORNER_R * 2}" clip-path="url(#cp-${data.id})" fill="${color}"/>`,
                // Separator line between header and body
                `<line x1="${x}" y1="${cy + HEADER_H}" x2="${x + w}" y2="${cy + HEADER_H}" stroke="${color}" stroke-width="0.5" stroke-opacity="0.3"/>`,
                // Role label in header — centred vertically in band
                `<text x="${cx}" y="${cy + HEADER_H - 7}" text-anchor="middle" ` +
                `font-family="Inter,Segoe UI,system-ui,sans-serif" font-size="8.5" font-weight="700" ` +
                `fill="rgba(255,255,255,0.97)" letter-spacing="0.06em">${xmlEscape(label.toUpperCase())}</text>`
            );

            if (data.text) {
                const hanzi = data.text.hanzi;
                const pinyin = data.text.pinyin;
                const trans = data.text.translation ?? '';
                const hanziFont = isClassical
                    ? 'Noto Serif SC,Noto Sans SC,sans-serif'
                    : 'Noto Sans SC,sans-serif';

                // Hanzi — large, prominent
                nodeBoxes.push(
                    `<text x="${cx}" y="${cy + HEADER_H + 25}" text-anchor="middle" ` +
                    `font-family="${hanziFont}" font-size="16" font-weight="600" fill="#111827">${xmlEscape(hanzi)}</text>`
                );
                // Pinyin — readable size
                nodeBoxes.push(
                    `<text x="${cx}" y="${cy + HEADER_H + 40}" text-anchor="middle" ` +
                    `font-family="Inter,Segoe UI,sans-serif" font-size="10" fill="#b45309" font-style="italic">${xmlEscape(pinyin)}</text>`
                );
                // Translation — readable size, truncated
                if (trans) {
                    const truncated = trans.length > 20 ? trans.slice(0, 19) + '\u2026' : trans;
                    nodeBoxes.push(
                        `<text x="${cx}" y="${cy + HEADER_H + 56}" text-anchor="middle" ` +
                        `font-family="Georgia,Palatino,serif" font-size="9" fill="#6b7280" font-style="italic">"${xmlEscape(truncated)}"</text>`
                    );
                }
            } else if (isNull) {
                const impliedLabel = data.impliedText ? `Ø ${data.impliedText}` : 'Ø';
                nodeBoxes.push(
                    `<text x="${cx}" y="${cy + HEADER_H + 24}" text-anchor="middle" ` +
                    `font-family="Inter,Segoe UI,sans-serif" font-size="11" fill="#94a3b8" font-style="italic">⟨${xmlEscape(impliedLabel)}⟩</text>`
                );
            } else if (isDropped) {
                nodeBoxes.push(
                    `<text x="${cx}" y="${cy + HEADER_H + 24}" text-anchor="middle" ` +
                    `font-family="Inter,Segoe UI,sans-serif" font-size="9.5" fill="#94a3b8" font-style="italic">⟨implied⟩</text>`
                );
            }
        } else {
            // Label-only node: compact pill style — just the colored band, no white body
            nodeBoxes.push(
                `<rect x="${x}" y="${cy}" width="${w}" height="${h}" rx="${CORNER_R}" fill="${color}" stroke="${color}" stroke-width="1"/>`,
                `<text x="${cx}" y="${cy + h / 2 + 4}" text-anchor="middle" ` +
                `font-family="Inter,Segoe UI,system-ui,sans-serif" font-size="8.5" font-weight="700" ` +
                `fill="rgba(255,255,255,0.97)" letter-spacing="0.06em">${xmlEscape(label.toUpperCase())}</text>`
            );
        }

        nodeBoxes.push(`</g>`);
    });

    return `<svg xmlns="http://www.w3.org/2000/svg" width="${totalW}" height="${totalH}" viewBox="0 0 ${totalW} ${totalH}" style="max-width:100%;height:auto;display:block;">
  <defs>
    <filter id="shadow" x="-12%" y="-12%" width="124%" height="140%">
      <feDropShadow dx="0" dy="1.5" stdDeviation="2.5" flood-color="#0006"/>
    </filter>
    <style>
      @media print { .tree-node { filter: none !important; } }
    </style>
  </defs>
  ${edgeLines.join('\n  ')}
  ${nodeBoxes.join('\n  ')}
</svg>`;
}

/**
 * Opens a new window with a visual SVG syntax tree for the given sentence.
 * Preserves the same print-page UX as generateStudySheet().
 */
export function generateVisualTreeSheet(sentence: SentenceData, isClassical: boolean): void {
    const svgHtml = renderTreeSVG(sentence.tree, isClassical);
    const accent = isClassical ? '#d4a574' : '#7c3aed';
    const accentLight = isClassical ? '#fef3c7' : '#ede9fe';
    const accentMid = isClassical ? '#92400e' : '#5b21b6';
    const dateStr = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });

    const explanationHtml = sentence.explanation
        ? sentence.explanation.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>')
        : '';

    const html = `<!DOCTYPE html>
<html lang="zh">
<head>
<meta charset="utf-8">
<title>Visual Tree — ${sentence.chinese}</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;600;700&family=Noto+Serif+SC:wght@400;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
    color: #1a1a1a;
    max-width: 900px;
    margin: 0 auto;
    padding: 0 1.5cm 2cm;
    line-height: 1.6;
    background: #fff;
  }
  @media print {
    body { padding: 0; }
    @page { margin: 1cm; size: landscape; }
    .no-print { display: none !important; }
  }
  .accent-bar { width: 100%; height: 4px; background: linear-gradient(90deg, ${accent}, ${accentMid}, ${accent}); margin-bottom: 1.5rem; }
  .controls { display: flex; justify-content: flex-end; padding: 0.8rem 0; gap: 0.5rem; }
  .print-btn {
    display: inline-flex; align-items: center; gap: 0.4rem;
    padding: 0.35rem 1rem; font-size: 0.75rem; font-weight: 600;
    font-family: 'Inter', sans-serif; color: ${accentMid};
    background: ${accentLight}; border: 1px solid ${accent}40;
    border-radius: 6px; cursor: pointer; transition: all 0.15s;
  }
  .print-btn:hover { background: ${accent}; color: white; border-color: ${accent}; }
  .header { text-align: center; margin-bottom: 1.6rem; padding-bottom: 1.2rem; border-bottom: 1.5px solid #e5e7eb; }
  .category {
    display: inline-block; font-size: 0.65rem; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.18em;
    color: ${accentMid}; background: ${accentLight};
    padding: 0.2em 0.9em; border-radius: 999px; margin-bottom: 0.8rem;
  }
  .chinese {
    font-size: 2.2rem; font-weight: 700; letter-spacing: 0.06em;
    margin: 0.4rem 0 0.2rem;
    font-family: ${isClassical ? "'Noto Serif SC'" : "'Noto Sans SC'"}, sans-serif;
    color: #111;
  }
  .pinyin-header { font-size: 0.9rem; color: #b45309; font-style: italic; margin-bottom: 0.35rem; }
  .translation { font-size: 1rem; color: #6b7280; font-style: italic; font-family: 'Georgia', serif; }
  .attribution { margin-top: 0.5rem; font-size: 0.78rem; color: ${accent}; font-style: italic; }
  .section { margin-top: 1.4rem; }
  .section-title {
    font-size: 0.65rem; font-weight: 700; text-transform: uppercase;
    letter-spacing: 0.18em; color: ${accentMid};
    border-bottom: 1px solid #e5e7eb; padding-bottom: 0.35rem; margin-bottom: 0.9rem;
  }
  .tree-wrap { overflow-x: auto; padding: 0.5rem 0; }
  .explanation { font-size: 0.88rem; line-height: 1.75; color: #374151; font-family: 'Georgia', serif; }
  .explanation strong { color: #111; font-weight: 700; }
  .footer {
    margin-top: 2rem; padding-top: 0.8rem; border-top: 1px solid #e5e7eb;
    display: flex; justify-content: space-between; align-items: center;
    font-size: 0.65rem; color: #9ca3af;
  }
  .footer-right { font-family: 'Cascadia Code', monospace; }
</style>
</head>
<body>
  <div class="accent-bar"></div>
  <div class="controls no-print">
    <button class="print-btn" onclick="window.print()">🖨️ Print</button>
  </div>
  <div class="header">
    <div class="category">${sentence.category}</div>
    <div class="chinese">${sentence.chinese}</div>
    <div class="pinyin-header">${sentence.pinyin}</div>
    <div class="translation">"${sentence.translation}"</div>
    ${sentence.source || sentence.author ? `<div class="attribution">${sentence.source ?? ''}${sentence.source && sentence.author ? ' · ' : ''}${sentence.author ?? ''}</div>` : ''}
  </div>

  <div class="section">
    <div class="section-title">Syntax Tree</div>
    <div class="tree-wrap">${svgHtml}</div>
  </div>

  ${explanationHtml ? `
  <div class="section">
    <div class="section-title">Grammar Note</div>
    <div class="explanation">${explanationHtml}</div>
  </div>` : ''}

  <div class="footer">
    <div>Mandarin Syntax Explorer — ${isClassical ? '古文探秘' : 'Generative Grammar'}<br>${window.location.origin}/#${sentence.id}</div>
    <div class="footer-right">${sentence.id} · ${dateStr}</div>
  </div>
</body>
</html>`;

    const w = window.open('', '_blank');
    if (w) {
        w.document.write(html);
        w.document.close();
    }
}

/** Map grammar roles to color categories for the tree outline */
const ROLE_COLORS: Record<string, string> = {
    // Subject / Topic family
    'Sentence': '#6366f1',       // indigo
    'Topic': '#16a34a',          // green
    'Subject': '#16a34a',
    // Predicate / Verb family
    'Comment': '#2563eb',        // blue
    'Verb Phrase': '#2563eb',
    'VP': '#0d9488',       // teal
    'VP-Chain': '#0d9488',   // teal (legacy)
    'Action Node': '#059669',    // emerald
    'Verb Package': '#16a34a',   // green
    'Head Verb': '#3b82f6',
    'Auxiliary': '#60a5fa',
    // Objects / Nouns
    'Object': '#ea580c',         // orange
    'Head Noun': '#f97316',
    'Attributive': '#fb923c',
    'Noun Phrase': '#ea580c',
    // Complements
    'Complement': '#8b5cf6',     // purple
    'Degree Complement': '#8b5cf6',
    'Resultative Complement': '#8b5cf6',
    'Directional Complement': '#8b5cf6',
    'Potential Complement': '#8b5cf6',
    // Particles / Functional
    'Particle': '#78716c',       // stone
    'Adverbial': '#0891b2',      // cyan
    'Adverb': '#0891b2',
    'Preposition': '#0891b2',
    'Coverb': '#0891b2',
    'Prepositional Phrase': '#0891b2',
    'Conjunction': '#78716c',
    'Connector': '#78716c',
    // Pivotal
    'Pivot': '#6d28d9',
};

function getRoleColor(role: string, subRole?: string): string {
    if (role === 'VP' && subRole?.includes('primitive')) return '#059669';
    if (ROLE_COLORS[role]) return ROLE_COLORS[role];
    // Fuzzy match
    for (const [key, color] of Object.entries(ROLE_COLORS)) {
        if (role.toLowerCase().includes(key.toLowerCase())) return color;
    }
    return '#64748b'; // slate default
}

/**
 * Recursively render a grammar tree as an indented text outline
 * with color-coded roles and lighter connectors.
 */
function renderTreeOutline(node: GrammarNodeData, depth = 0, isLast = true): string {
    // Connector lines in light gray
    const connector = depth === 0
        ? ''
        : '<span class="connector">' + '│  '.repeat(depth - 1) + (isLast ? '└─ ' : '├─ ') + '</span>';

    const role = node.subRole ? `${node.role} (${node.subRole})` : node.role;
    const roleColor = getRoleColor(node.role, node.subRole);

    const text = node.text
        ? `: <span class="hanzi">${node.text.hanzi}</span> <span class="pinyin">(${node.text.pinyin})</span>${node.text.translation ? ` <span class="dash">—</span> <span class="trans">"${node.text.translation}"</span>` : ''}`
        : '';

    const dropped = node.isNull
        ? ` <span class="dropped">⟨Ø ${node.impliedText ?? ''}⟩</span>`
        : node.isDropped ? ' <span class="dropped">⟨implied⟩</span>' : '';

    let html = `<div class="tree-line">${connector}<span class="role" style="color:${roleColor}">${role}</span>${text}${dropped}</div>\n`;

    if (node.children) {
        node.children.forEach((child, i) => {
            html += renderTreeOutline(child, depth + 1, i === node.children!.length - 1);
        });
    }
    return html;
}

/** Convert **bold** markdown to <strong> tags */
function parseBold(text: string): string {
    return text.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
}

/**
 * Opens a new window containing a clean, printable study sheet
 * for the given sentence.
 */
export function generateStudySheet(sentence: SentenceData, isClassical: boolean): void {
    const treeHtml = renderTreeOutline(sentence.tree);
    const accent = isClassical ? '#d4a574' : '#7c3aed';
    const accentLight = isClassical ? '#fef3c7' : '#ede9fe';
    const accentMid = isClassical ? '#92400e' : '#5b21b6';
    const dateStr = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });

    const explanationHtml = sentence.explanation
        ? parseBold(sentence.explanation).replace(/\n/g, '<br>')
        : '';

    const html = `<!DOCTYPE html>
<html lang="zh">
<head>
<meta charset="utf-8">
<title>Study Sheet — ${sentence.chinese}</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;700&family=Noto+Serif+SC:wght@400;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
    color: #1a1a1a;
    max-width: 680px;
    margin: 0 auto;
    padding: 0 1.5cm 2cm;
    line-height: 1.6;
    background: #fff;
  }

  @media print {
    body { padding: 0; }
    @page { margin: 1.5cm; }
    .no-print { display: none !important; }
    .accent-bar { position: fixed; top: 0; left: 0; }
  }

  /* ── Accent bar ── */
  .accent-bar {
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, ${accent}, ${accentMid}, ${accent});
    margin-bottom: 1.5rem;
  }

  /* ── Top controls ── */
  .controls {
    display: flex;
    justify-content: flex-end;
    padding: 0.8rem 0;
  }
  .print-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.35rem 1rem;
    font-size: 0.75rem;
    font-weight: 600;
    font-family: 'Inter', sans-serif;
    color: ${accentMid};
    background: ${accentLight};
    border: 1px solid ${accent}40;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.15s;
  }
  .print-btn:hover {
    background: ${accent};
    color: white;
    border-color: ${accent};
  }

  /* ── Header ── */
  .header {
    text-align: center;
    margin-bottom: 1.8rem;
    padding-bottom: 1.4rem;
    border-bottom: 1.5px solid #e5e7eb;
  }
  .category {
    display: inline-block;
    font-size: 0.65rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.18em;
    color: ${accentMid};
    background: ${accentLight};
    padding: 0.2em 0.9em;
    border-radius: 999px;
    margin-bottom: 0.8rem;
  }
  .chinese {
    font-size: 2.2rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    margin: 0.4rem 0 0.2rem;
    font-family: ${isClassical ? "'Noto Serif SC'" : "'Noto Sans SC'"}, serif;
    color: #111;
  }
  .pinyin-header {
    font-size: 0.9rem;
    color: #b8860b;
    font-style: italic;
    margin-bottom: 0.35rem;
    letter-spacing: 0.02em;
  }
  .translation {
    font-size: 1rem;
    color: #6b7280;
    font-style: italic;
    font-family: 'Georgia', 'Palatino', serif;
  }
  .attribution {
    margin-top: 0.5rem;
    font-size: 0.78rem;
    color: ${accent};
    font-style: italic;
  }

  /* ── Section layout ── */
  .section { margin-top: 1.6rem; }
  .section-title {
    font-size: 0.65rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.18em;
    color: ${accentMid};
    border-bottom: 1px solid #e5e7eb;
    padding-bottom: 0.35rem;
    margin-bottom: 0.7rem;
  }

  /* ── Tree outline ── */
  .tree-outline {
    font-family: 'Cascadia Code', 'Fira Code', 'Fira Mono', 'Consolas', monospace;
    font-size: 0.78rem;
    line-height: 1.55;
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 0.8rem 1rem;
    white-space: pre;
    overflow-x: auto;
  }
  .tree-line {
    white-space: pre;
    padding: 1px 0;
  }
  .tree-line .connector { color: #d1d5db; }
  .tree-line .role { font-weight: 700; font-size: 0.8rem; }
  .tree-line .hanzi {
    color: #1a1a1a;
    font-weight: 600;
    font-family: 'Noto Sans SC', sans-serif;
    font-size: 0.88rem;
  }
  .tree-line .pinyin { color: #b8860b; font-size: 0.72rem; }
  .tree-line .dash { color: #d1d5db; margin: 0 0.15em; }
  .tree-line .trans { color: #9ca3af; font-style: italic; font-size: 0.72rem; }
  .tree-line .dropped {
    color: #d1d5db;
    font-size: 0.68rem;
    font-style: italic;
    border: 1px dashed #e5e7eb;
    padding: 0 0.3em;
    border-radius: 3px;
    margin-left: 0.3em;
  }

  /* ── Grammar note ── */
  .explanation {
    font-size: 0.88rem;
    line-height: 1.75;
    color: #374151;
    font-family: 'Georgia', 'Palatino', serif;
  }
  .explanation strong {
    color: #111;
    font-weight: 700;
  }

  /* ── Footer ── */
  .footer {
    margin-top: 2rem;
    padding-top: 0.8rem;
    border-top: 1px solid #e5e7eb;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.65rem;
    color: #9ca3af;
  }
  .footer-left { text-align: left; }
  .footer-right { text-align: right; font-family: 'Cascadia Code', monospace; }
</style>
</head>
<body>
  <div class="accent-bar"></div>

  <div class="controls no-print">
    <button class="print-btn" onclick="window.print()">🖨️ Print</button>
  </div>

  <div class="header">
    <div class="category">${sentence.category}</div>
    <div class="chinese">${sentence.chinese}</div>
    <div class="pinyin-header">${sentence.pinyin}</div>
    <div class="translation">"${sentence.translation}"</div>
    ${sentence.source || sentence.author ? `<div class="attribution">${sentence.source ?? ''}${sentence.source && sentence.author ? ' · ' : ''}${sentence.author ?? ''}</div>` : ''}
  </div>

  <div class="section">
    <div class="section-title">Syntax Tree</div>
    <div class="tree-outline">${treeHtml}</div>
  </div>

  ${explanationHtml ? `
  <div class="section">
    <div class="section-title">Grammar Note</div>
    <div class="explanation">${explanationHtml}</div>
  </div>
  ` : ''}

  <div class="footer">
    <div class="footer-left">
      Mandarin Syntax Explorer — ${isClassical ? '古文探秘 Classical Chinese' : 'Generative Grammar'}
      <br>${window.location.origin}/#${sentence.id}
    </div>
    <div class="footer-right">
      ${sentence.id} · ${dateStr}
    </div>
  </div>
</body>
</html>`;

    const w = window.open('', '_blank');
    if (w) {
        w.document.write(html);
        w.document.close();
    }
}

/**
 * Opens a single print window with both views (visual SVG tree + text outline),
 * switchable via a toggle. The selected view is printed.
 */
export function generatePrintSheet(sentence: SentenceData, isClassical: boolean): void {
    const svgHtml = renderTreeSVG(sentence.tree, isClassical);
    const outlineHtml = renderTreeOutline(sentence.tree);

    const accent = isClassical ? '#d4a574' : '#7c3aed';
    const accentLight = isClassical ? '#fef3c7' : '#ede9fe';
    const accentMid = isClassical ? '#92400e' : '#5b21b6';
    const dateStr = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });

    const explanationHtml = sentence.explanation
        ? sentence.explanation.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>')
        : '';

    const html = `<!DOCTYPE html>
<html lang="zh">
<head>
<meta charset="utf-8">
<title>Study Sheet — ${sentence.chinese}</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;600;700&family=Noto+Serif+SC:wght@400;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
    color: #1a1a1a;
    max-width: 900px;
    margin: 0 auto;
    padding: 0 1.5cm 2cm;
    line-height: 1.6;
    background: #fff;
  }
  @media print {
    body { padding: 0; }
    @page { margin: 1cm; size: landscape; }
    .no-print { display: none !important; }
    body.view-simplified { max-width: 680px; }
    body.view-simplified .tree-view { display: none !important; }
    body.view-visual .simplified-view { display: none !important; }
  }
  .accent-bar { width: 100%; height: 4px; background: linear-gradient(90deg, ${accent}, ${accentMid}, ${accent}); margin-bottom: 1.5rem; }

  /* Controls row */
  .controls {
    display: flex; justify-content: space-between; align-items: center;
    padding: 0.8rem 0; gap: 1rem;
  }
  .view-toggle {
    display: inline-flex; border-radius: 8px; overflow: hidden;
    border: 1px solid ${accent}50; background: #f8fafc;
  }
  .view-toggle button {
    padding: 0.3rem 0.9rem; font-size: 0.72rem; font-weight: 600;
    font-family: 'Inter', sans-serif; border: none; cursor: pointer;
    transition: all 0.15s; color: #64748b; background: transparent;
    letter-spacing: 0.02em;
  }
  .view-toggle button.active {
    background: ${accent}; color: #fff;
  }
  .print-btn {
    display: inline-flex; align-items: center; gap: 0.4rem;
    padding: 0.35rem 1rem; font-size: 0.75rem; font-weight: 600;
    font-family: 'Inter', sans-serif; color: ${accentMid};
    background: ${accentLight}; border: 1px solid ${accent}40;
    border-radius: 6px; cursor: pointer; transition: all 0.15s;
  }
  .print-btn:hover { background: ${accent}; color: white; border-color: ${accent}; }

  /* Header */
  .header { text-align: center; margin-bottom: 1.6rem; padding-bottom: 1.2rem; border-bottom: 1.5px solid #e5e7eb; }
  .category {
    display: inline-block; font-size: 0.65rem; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.18em;
    color: ${accentMid}; background: ${accentLight};
    padding: 0.2em 0.9em; border-radius: 999px; margin-bottom: 0.8rem;
  }
  .chinese {
    font-size: 2.2rem; font-weight: 700; letter-spacing: 0.06em;
    margin: 0.4rem 0 0.2rem;
    font-family: ${isClassical ? "'Noto Serif SC'" : "'Noto Sans SC'"}, sans-serif; color: #111;
  }
  .pinyin-header { font-size: 0.9rem; color: #b45309; font-style: italic; margin-bottom: 0.35rem; }
  .translation { font-size: 1rem; color: #6b7280; font-style: italic; font-family: 'Georgia', serif; }
  .attribution { margin-top: 0.5rem; font-size: 0.78rem; color: ${accent}; font-style: italic; }

  /* Sections */
  .section { margin-top: 1.4rem; }
  .section-title {
    font-size: 0.65rem; font-weight: 700; text-transform: uppercase;
    letter-spacing: 0.18em; color: ${accentMid};
    border-bottom: 1px solid #e5e7eb; padding-bottom: 0.35rem; margin-bottom: 0.9rem;
  }

  /* Visual tree */
  .tree-wrap { overflow-x: auto; padding: 0.5rem 0; }

  /* Simplified outline */
  .simplified-view .tree-outline {
    font-family: 'Cascadia Code', 'Fira Code', 'Consolas', monospace;
    font-size: 0.78rem; line-height: 1.55;
    background: #f8fafc; border: 1px solid #e2e8f0;
    border-radius: 8px; padding: 0.8rem 1rem;
    white-space: pre; overflow-x: auto;
  }
  .tree-line { white-space: pre; padding: 1px 0; }
  .tree-line .connector { color: #d1d5db; }
  .tree-line .role { font-weight: 700; font-size: 0.8rem; }
  .tree-line .hanzi { color: #1a1a1a; font-weight: 600; font-family: 'Noto Sans SC', sans-serif; font-size: 0.88rem; }
  .tree-line .pinyin { color: #b8860b; font-size: 0.72rem; }
  .tree-line .dash { color: #d1d5db; margin: 0 0.15em; }
  .tree-line .trans { color: #9ca3af; font-style: italic; font-size: 0.72rem; }
  .tree-line .dropped { color: #d1d5db; font-size: 0.68rem; font-style: italic; border: 1px dashed #e5e7eb; padding: 0 0.3em; border-radius: 3px; margin-left: 0.3em; }

  /* Grammar note */
  .explanation { font-size: 0.88rem; line-height: 1.75; color: #374151; font-family: 'Georgia', serif; }
  .explanation strong { color: #111; font-weight: 700; }

  /* Footer */
  .footer {
    margin-top: 2rem; padding-top: 0.8rem; border-top: 1px solid #e5e7eb;
    display: flex; justify-content: space-between; align-items: center;
    font-size: 0.65rem; color: #9ca3af;
  }
  .footer-right { font-family: 'Cascadia Code', monospace; }

  .dl-btn {
    display: inline-flex; align-items: center; gap: 0.4rem;
    padding: 0.35rem 0.8rem; font-size: 0.72rem; font-weight: 600;
    font-family: 'Inter', sans-serif; color: #475569;
    background: #f1f5f9; border: 1px solid #cbd5e1;
    border-radius: 6px; cursor: pointer; transition: all 0.15s;
  }
  .dl-btn:hover { background: #0f172a; color: #fff; border-color: #0f172a; }
  /* Hide PNG button when simplified view is active */
  body.view-simplified #btn-dl-png { display: none; }

  /* Default: show visual, hide simplified */
  .simplified-view { display: none; }
  .tree-view { display: block; }
</style>
</head>
<body class="view-visual">

  <div class="accent-bar"></div>

  <div class="controls no-print">
    <div class="view-toggle">
      <button id="btn-visual" class="active" onclick="switchView('visual')">🌳 Visual Tree</button>
      <button id="btn-simplified" onclick="switchView('simplified')">≡ Simplified</button>
    </div>
    <div style="display:flex;gap:0.5rem;align-items:center;">
      <button id="btn-dl-png" class="dl-btn" onclick="downloadPNG()" title="Download tree as PNG image">⬇ PNG</button>
      <button class="print-btn" onclick="window.print()">🖨️ Print</button>
    </div>
  </div>

  <div class="header">
    <div class="category">${sentence.category}</div>
    <div class="chinese">${sentence.chinese}</div>
    <div class="pinyin-header">${sentence.pinyin}</div>
    <div class="translation">"${sentence.translation}"</div>
    ${sentence.source || sentence.author ? `<div class="attribution">${sentence.source ?? ''}${sentence.source && sentence.author ? ' · ' : ''}${sentence.author ?? ''}</div>` : ''}
  </div>

  <!-- Visual Tree view -->
  <div class="tree-view section">
    <div class="section-title">Syntax Tree</div>
    <div class="tree-wrap">${svgHtml}</div>
  </div>

  <!-- Simplified (text outline) view -->
  <div class="simplified-view section">
    <div class="section-title">Syntax Tree</div>
    <div class="tree-outline">${outlineHtml}</div>
  </div>

  ${explanationHtml ? `
  <div class="section">
    <div class="section-title">Grammar Note</div>
    <div class="explanation">${explanationHtml}</div>
  </div>` : ''}

  <div class="footer">
    <div>Mandarin Syntax Explorer — ${isClassical ? '古文探秘' : 'Generative Grammar'}<br>${window.location.origin}/#${sentence.id}</div>
    <div class="footer-right">${sentence.id} · ${dateStr}</div>
  </div>

  <script>
    function switchView(view) {
      var body = document.body;
      var treeView = document.querySelector('.tree-view');
      var simplifiedView = document.querySelector('.simplified-view');
      var btnVisual = document.getElementById('btn-visual');
      var btnSimplified = document.getElementById('btn-simplified');
      if (view === 'visual') {
        body.className = 'view-visual';
        treeView.style.display = 'block';
        simplifiedView.style.display = 'none';
        btnVisual.className = 'active';
        btnSimplified.className = '';
      } else {
        body.className = 'view-simplified';
        treeView.style.display = 'none';
        simplifiedView.style.display = 'block';
        btnVisual.className = '';
        btnSimplified.className = 'active';
      }
    }

    function downloadPNG() {
      var svg = document.querySelector('.tree-view svg');
      if (!svg) return;
      var scale = 2;
      var vb = svg.viewBox.baseVal;
      var w = (vb.width  || svg.getBoundingClientRect().width)  * scale;
      var h = (vb.height || svg.getBoundingClientRect().height) * scale;
      var svgData = new XMLSerializer().serializeToString(svg);
      var svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
      var url = URL.createObjectURL(svgBlob);
      var img = new Image();
      img.onload = function () {
        var canvas = document.createElement('canvas');
        canvas.width  = w;
        canvas.height = h;
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, w, h);
        ctx.scale(scale, scale);
        ctx.drawImage(img, 0, 0);
        URL.revokeObjectURL(url);
        // Use toBlob + blob URL so the browser honours the filename on about:blank pages
        canvas.toBlob(function(blob) {
          var blobUrl = URL.createObjectURL(blob);
          var a = document.createElement('a');
          a.download = 'syntax-tree-${xmlEscape(sentence.id)}.png';
          a.href = blobUrl;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          setTimeout(function() { URL.revokeObjectURL(blobUrl); }, 2000);
        }, 'image/png');
      };
      img.src = url;
    }
  </script>
</body>
</html>`;

    const w = window.open('', '_blank');
    if (w) {
        w.document.write(html);
        w.document.close();
    }
}

/**
 * Downloads the syntax tree for the given sentence as a 2× PNG file.
 * Uses the File System Access API (showSaveFilePicker) for reliable filename control,
 * with a blob URL fallback for browsers that don't support it.
 */
export async function downloadTreePNG(sentence: SentenceData, isClassical: boolean): Promise<void> {
    const svgString = renderTreeSVG(sentence.tree, isClassical);

    // Parse viewBox dimensions synchronously
    const parser = new DOMParser();
    const svgDoc = parser.parseFromString(svgString, 'image/svg+xml');
    const svgEl = svgDoc.documentElement;
    const vbParts = (svgEl.getAttribute('viewBox') ?? '').split(' ').map(Number);
    const svgW = vbParts[2] > 0 ? vbParts[2] : 800;
    const svgH = vbParts[3] > 0 ? vbParts[3] : 600;

    // Base64 data URI — reliable cross-browser SVG image loading
    const svgBase64 = btoa(unescape(encodeURIComponent(svgString)));
    const svgDataUrl = `data:image/svg+xml;base64,${svgBase64}`;

    const scale = 2;
    const canvas = document.createElement('canvas');
    canvas.width  = svgW * scale;
    canvas.height = svgH * scale;
    const ctx = canvas.getContext('2d')!;

    // Load SVG image onto canvas
    const img = await new Promise<HTMLImageElement>((resolve, reject) => {
        const image = new Image();
        image.onload = () => resolve(image);
        image.onerror = (e) => reject(e);
        image.src = svgDataUrl;
    });

    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.scale(scale, scale);
    ctx.drawImage(img, 0, 0);

    // Get PNG blob from canvas
    const blob = await new Promise<Blob>((resolve, reject) => {
        canvas.toBlob((b) => {
            if (b) resolve(b);
            else reject(new Error('Canvas toBlob returned null'));
        }, 'image/png');
    });

    const filename = `syntax-tree-${sentence.id}.png`;

    // Primary: File System Access API — proper Save As dialog
    if ('showSaveFilePicker' in window) {
        try {
            const handle = await (window as any).showSaveFilePicker({
                suggestedName: filename,
                types: [{
                    description: 'PNG Image',
                    accept: { 'image/png': ['.png'] },
                }],
            });
            const writable = await handle.createWritable();
            await writable.write(blob);
            await writable.close();
            return;
        } catch (e: any) {
            // User cancelled the save dialog — not an error
            if (e?.name === 'AbortError') return;
            console.warn('[downloadTreePNG] showSaveFilePicker failed, falling back:', e);
        }
    }

    // Fallback: blob URL download
    const blobUrl = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.download = filename;
    a.href = blobUrl;
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
        document.body.removeChild(a);
        URL.revokeObjectURL(blobUrl);
    }, 500);
}
