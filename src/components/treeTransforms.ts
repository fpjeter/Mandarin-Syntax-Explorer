import type { Edge, Node } from '@xyflow/react';
import type { GrammarNodeData as AppGrammarNodeData } from '../types/grammar';
import { getLayoutedElements, getEdgeColor } from './treeLayout';

// ── Aggregate text for collapsed nodes ───────────────────────────────────────

export const getAggregateText = (node: AppGrammarNodeData): AppGrammarNodeData['text'] | undefined => {
    if (node.text) return node.text;
    if (!node.children || node.children.length === 0) return undefined;

    let hanzi = '';
    let pinyin = '';
    let translation = '';

    const processChildren = (children: AppGrammarNodeData[]) => {
        children.forEach(child => {
            const childText = getAggregateText(child);
            if (childText) {
                hanzi += childText.hanzi;
                pinyin += (pinyin ? ' ' : '') + childText.pinyin;
                translation += (translation ? ' ' : '') + (childText.translation || '');
            } else if (child.children) {
                processChildren(child.children);
            }
        });
    };

    processChildren(node.children);

    return hanzi ? { hanzi, pinyin, translation: translation.trim() } : undefined;
};

// ── Dropped subject detection ────────────────────────────────────────────────

/** Returns true if any node in the tree has isDropped=true */
export const hasProDrop = (node: AppGrammarNodeData): boolean => {
    if (node.isDropped) return true;
    return (node.children ?? []).some(hasProDrop);
};

// ── Tree → React Flow conversion ─────────────────────────────────────────────

export const parseTreeToFlow = (root: AppGrammarNodeData | undefined, expandedIds: Set<string>, showGhost: boolean, classical?: boolean) => {
    if (!root) return { nodes: [], edges: [], corefPairs: new Map<string, string>() };

    const nodes: Node[] = [];
    const treeEdges: Edge[] = [];
    const nodeDataMap = new Map<string, AppGrammarNodeData>();
    /** Maps ghost node ID → referent ID and vice versa, for hover highlighting */
    const corefPairs = new Map<string, string>();

    const traverse = (node: AppGrammarNodeData, parentId: string | null = null, depth = 0) => {
        // Skip ghost nodes when the toggle is off
        if (node.isDropped && !showGhost) return;

        const hasChildren = !!node.children && node.children.length > 0;
        const isExpanded = expandedIds.has(node.id);

        let displayText = node.text;
        if (hasChildren && !isExpanded) {
            displayText = getAggregateText(node);
        }

        const displayData: AppGrammarNodeData = {
            ...node,
            text: displayText,
        };

        nodes.push({
            id: node.id,
            type: 'grammarNode',
            position: { x: 0, y: 0 },
            data: {
                role: node.role,
                subRole: node.subRole,
                isDropped: node.isDropped,
                impliedText: node.impliedText,
                refersToId: node.refersToId,
                text: displayText,
                isRoot: parentId === null,
                hasChildren,
                isExpanded,
            },
        });

        nodeDataMap.set(node.id, displayData);

        // Build co-ref pair map for hover highlighting
        if (node.isDropped && node.refersToId && showGhost) {
            corefPairs.set(node.id, node.refersToId);
            corefPairs.set(node.refersToId, node.id);
        }

        if (parentId !== null) {
            const parentData = nodeDataMap.get(parentId);
            const edgeColor = getEdgeColor(parentData?.role, classical);
            treeEdges.push({
                id: `e-${parentId}-${node.id}`,
                source: parentId,
                target: node.id,
                type: 'smoothstep',
                animated: true,
                style: {
                    stroke: edgeColor,
                    strokeWidth: 2,
                    filter: `drop-shadow(0 0 5px ${edgeColor}99)`,
                },
                data: { sourceRole: parentData?.role },
            });
        }

        if (hasChildren && isExpanded) {
            node.children?.forEach(child => traverse(child, node.id, depth + 1));
        }
    };

    traverse(root);

    const layouted = getLayoutedElements(nodes, treeEdges, nodeDataMap);
    return {
        nodes: layouted.nodes,
        edges: layouted.edges,
        corefPairs,
    };
};

// ── Viewport-aware padding ───────────────────────────────────────────────────

/** Viewport-aware padding for fitView — tighter on small screens */
export const getFitViewPadding = () => {
    const w = window.innerWidth;
    if (w < 768) return 0.03;
    if (w < 1280) return 0.08;
    return 0.15;
};
