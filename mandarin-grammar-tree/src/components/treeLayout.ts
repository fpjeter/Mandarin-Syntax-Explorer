import type { Edge, Node } from '@xyflow/react';
import { Position } from '@xyflow/react';
import type { GrammarNodeData as AppGrammarNodeData, GrammarRole } from '../types/grammar';

// ── Layout constants ─────────────────────────────────────────────────────────
export const RANK_SEP = 160; // vertical gap between rank rows
export const LEAF_GAP = 60;  // horizontal gap between leaf nodes

// ── Theme constants ──────────────────────────────────────────────────────────
export const TREE_EDGE_COLOR = '#94a3b8';

// ── Edge color by source role ────────────────────────────────────────────────
const TOP_LEVEL_ROLES = new Set<GrammarRole>(['Sentence']);
const MID_LEVEL_ROLES = new Set<GrammarRole>(['Topic', 'Comment', 'Subject', 'Predicate']);

export const getEdgeColor = (sourceRole?: GrammarRole, classical?: boolean): string => {
    if (classical) {
        if (sourceRole && TOP_LEVEL_ROLES.has(sourceRole)) return '#d4a574'; // amber
        if (sourceRole && MID_LEVEL_ROLES.has(sourceRole)) return '#d97706'; // warm orange
        return '#78716c'; // stone
    }
    if (sourceRole && TOP_LEVEL_ROLES.has(sourceRole)) return '#a78bfa'; // purple
    if (sourceRole && MID_LEVEL_ROLES.has(sourceRole)) return '#60a5fa'; // blue
    return TREE_EDGE_COLOR; // slate
};

// ── Node width estimation ────────────────────────────────────────────────────

/** Estimate a node's rendered pixel width from its text content. */
export const estimateNodeWidth = (data: AppGrammarNodeData): number => {
    const MIN_WIDTH = 160;

    // Header label: "ROLE (subRole)" — rendered at ~7px per char
    const headerLabel = data.subRole
        ? `${data.role} (${data.subRole})`
        : data.role;
    const headerWidth = headerLabel.length * 7 + 32; // padding

    const text = data.text;
    if (!text) return Math.max(MIN_WIDTH, Math.min(headerWidth, 520));

    const hanziChars = Array.from(text.hanzi).length;
    const pinyinChars = text.pinyin.length;
    const contentWidth = Math.max(hanziChars * 28, pinyinChars * 8) + 80;
    return Math.max(MIN_WIDTH, Math.min(Math.max(headerWidth, contentWidth), 520));
};

// ── Tree layout algorithm ────────────────────────────────────────────────────

/**
 * Custom tree layout with leaf alignment.
 *
 * Algorithm:
 *  1. DFS to collect leaves in left-to-right (sentence) order and compute depths.
 *  2. Assign leaves sequential x positions, sized to their node width + gap.
 *  3. Assign interior nodes x = midpoint of leftmost..rightmost leaf descendant.
 *  4. All leaves share y = maxDepth * RANK_SEP (same bottom row).
 *     Interior nodes get y = depth * RANK_SEP.
 *
 * This ensures collapsed siblings of an expanded node always appear beside
 * that node's children on the bottom row, preserving sentence reading order.
 */
export const getLayoutedElements = (
    nodes: Node[],
    edges: Edge[],
    nodeDataMap: Map<string, AppGrammarNodeData>
) => {
    if (nodes.length === 0) return { nodes, edges };

    // ── Build adjacency ───────────────────────────────────────────────────
    const childrenOf = new Map<string, string[]>();
    const parentOf = new Map<string, string>();
    nodes.forEach(n => childrenOf.set(n.id, []));
    edges.forEach(e => {
        childrenOf.get(e.source)?.push(e.target);
        parentOf.set(e.target, e.source);
    });
    const root = nodes.find(n => !parentOf.has(n.id))?.id;
    if (!root) return { nodes, edges };

    // ── Pass 1: depth + leaf order (DFS preserves sentence order) ────────
    const depth = new Map<string, number>();
    const leaves: string[] = [];

    const walkDepth = (id: string, d: number) => {
        depth.set(id, d);
        const kids = childrenOf.get(id) ?? [];
        if (kids.length === 0) leaves.push(id);
        else kids.forEach(kid => walkDepth(kid, d + 1));
    };
    walkDepth(root, 0);


    // ── Pass 2: assign leaf x centres, then bubble up to interior nodes ──
    const nodeW = (id: string) => {
        const data = nodeDataMap.get(id);
        return data ? estimateNodeWidth(data) : 160;
    };

    const cx = new Map<string, number>(); // centre-x for each node

    // Accumulate leaf centres left-to-right
    let cursor = 0;
    leaves.forEach(id => {
        const w = nodeW(id);
        cx.set(id, cursor + w / 2);
        cursor += w + LEAF_GAP;
    });

    // Bottom-up: interior node centre = midpoint of leftmost/rightmost child centre
    const assignInteriorX = (id: string): number => {
        const kids = childrenOf.get(id) ?? [];
        if (kids.length === 0) return cx.get(id) ?? 0;
        const centres = kids.map(assignInteriorX);
        const mid = (Math.min(...centres) + Math.max(...centres)) / 2;
        cx.set(id, mid);
        return mid;
    };
    assignInteriorX(root);

    // ── Pass 3: emit React Flow nodes with final positions ────────────────
    const layoutedNodes = nodes.map(node => {
        const d = depth.get(node.id) ?? 0;
        const w = nodeW(node.id);
        const centreX = cx.get(node.id) ?? 0;
        // All nodes stay at their structural depth row; x positions are
        // already aligned to sentence order by the bottom-up leaf algorithm.
        const y = d * RANK_SEP;

        return {
            ...node,
            targetPosition: Position.Top,
            sourcePosition: Position.Bottom,
            position: {
                x: centreX - w / 2,
                y,
            },
        };
    });

    return { nodes: layoutedNodes, edges };
};
