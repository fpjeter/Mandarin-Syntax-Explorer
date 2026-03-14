import type { SentenceData, GrammarNodeData } from '../types/grammar';

/** Map grammar roles to color categories for the tree outline */
const ROLE_COLORS: Record<string, string> = {
    // Subject / Topic family
    'Sentence': '#6366f1',       // indigo
    'Topic': '#16a34a',          // green
    'Subject': '#16a34a',
    // Predicate / Verb family
    'Comment': '#2563eb',        // blue
    'Verb Phrase': '#2563eb',
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
    'Prepositional Phrase': '#0891b2',
    'Conjunction': '#78716c',
    'Connector': '#78716c',
};

function getRoleColor(role: string): string {
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
    const roleColor = getRoleColor(node.role);

    const text = node.text
        ? `: <span class="hanzi">${node.text.hanzi}</span> <span class="pinyin">(${node.text.pinyin})</span>${node.text.translation ? ` <span class="dash">—</span> <span class="trans">"${node.text.translation}"</span>` : ''}`
        : '';

    const dropped = node.isDropped ? ' <span class="dropped">⟨implied⟩</span>' : '';

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
