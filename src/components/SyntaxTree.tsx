import React, { useMemo, useState, useEffect, useCallback } from 'react';
import { ReactFlow, Controls, Background, Position, MarkerType, useReactFlow, type Edge, type Node, type NodeMouseHandler } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { Eye, EyeOff, Maximize2, Minimize2, BookOpen } from 'lucide-react';

import type { GrammarNodeData as AppGrammarNodeData, GrammarRole } from '../types/grammar';
import { GrammarNode } from './GrammarNode';
import { CoRefEdge } from './CoRefEdge';
import { BadgeLegend } from './BadgeLegend';
import { GlossaryPanel } from './GlossaryPanel';

const nodeTypes = {
    grammarNode: GrammarNode,
};

const edgeTypes = {
    coref: CoRefEdge,
};

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
const RANK_SEP = 160; // vertical gap between rank rows
const LEAF_GAP = 60;  // horizontal gap between leaf nodes

// ── Theme constants ──────────────────────────────────────────────────────────
const TREE_EDGE_COLOR = '#94a3b8';
const COREF_ARC_COLOR = '#f43f5e';

// ── Edge color by source role (tweak #8) ─────────────────────────────────────
const TOP_LEVEL_ROLES = new Set<GrammarRole>(['Sentence']);
const MID_LEVEL_ROLES = new Set<GrammarRole>(['Topic', 'Comment', 'Subject', 'Predicate']);

const getEdgeColor = (sourceRole?: GrammarRole): string => {
    if (sourceRole && TOP_LEVEL_ROLES.has(sourceRole)) return '#a78bfa'; // purple
    if (sourceRole && MID_LEVEL_ROLES.has(sourceRole)) return '#60a5fa'; // blue
    return TREE_EDGE_COLOR; // slate
};

// Estimate a node's rendered pixel width from its text content.
const estimateNodeWidth = (data: AppGrammarNodeData): number => {
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

const getLayoutedElements = (
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
        childrenOf.get(e.source)!.push(e.target);
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
        if (kids.length === 0) return cx.get(id)!;
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


const getAggregateText = (node: AppGrammarNodeData): AppGrammarNodeData['text'] | undefined => {
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

/** Returns true if any node in the tree has isDropped=true */
const hasProDrop = (node: AppGrammarNodeData): boolean => {
    if (node.isDropped) return true;
    return (node.children ?? []).some(hasProDrop);
};

const parseTreeToFlow = (root: AppGrammarNodeData | undefined, expandedIds: Set<string>, showGhost: boolean) => {
    if (!root) return { nodes: [], edges: [], nodeDataMap: new Map<string, AppGrammarNodeData>() };

    const nodes: Node[] = [];
    const treeEdges: Edge[] = [];       // structural edges – used for layout
    const corefEdges: Edge[] = [];      // co-reference arcs – added AFTER layout
    const nodeDataMap = new Map<string, AppGrammarNodeData>();

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

        if (parentId !== null) {
            const parentData = nodeDataMap.get(parentId);
            const edgeColor = getEdgeColor(parentData?.role);
            treeEdges.push({
                id: `e-${parentId}-${node.id}`,
                source: parentId,
                target: node.id,
                type: 'smoothstep',
                animated: true,
                style: { stroke: edgeColor, strokeWidth: 2 },
                data: { sourceRole: parentData?.role },
            });
        }

        // Co-reference arc: custom 'coref' edge. We draw it FROM the antecedent
        // (topic) TO the ghost so the arrowhead points at the ghost from above,
        // and the arc bows upward without intersecting the ghost node.
        if (node.isDropped && node.refersToId && showGhost) {
            corefEdges.push({
                id: `coref-${node.id}`,
                source: node.refersToId,   // antecedent (Topic)
                target: node.id,           // ghost [他]
                sourceHandleId: 'coref-source', // exit from the top of Topic
                type: 'coref',
                animated: false,
                style: {
                    stroke: COREF_ARC_COLOR,
                    strokeWidth: 1.5,
                    strokeDasharray: '6 3',
                },
                markerEnd: {
                    type: MarkerType.ArrowClosed,
                    color: COREF_ARC_COLOR,
                    width: 14,
                    height: 14,
                },
                label: 'co-ref',
                labelStyle: { fill: COREF_ARC_COLOR, fontSize: 8, fontWeight: 600 },
                labelBgStyle: { fill: 'rgba(15, 23, 42, 0.9)', fillOpacity: 1 },
            } as Edge);
        }


        if (hasChildren && isExpanded) {
            node.children!.forEach(child => traverse(child, node.id, depth + 1));
        }
    };

    traverse(root);

    // Layout uses only tree edges; co-ref arcs are appended afterward.
    // Patch each coref edge with the source node's top-y so CoRefEdge can
    // start the arc precisely at the top of the antecedent node.
    const layouted = getLayoutedElements(nodes, treeEdges, nodeDataMap);
    const nodePositionMap = new Map(layouted.nodes.map(n => [n.id, n.position]));
    const patchedCorefEdges = corefEdges.map(edge => ({
        ...edge,
        data: {
            ...((edge.data as Record<string, unknown>) ?? {}),
            sourceNodeTopY: nodePositionMap.get(edge.source)?.y ?? 0,
            sourceNodeX: nodePositionMap.get(edge.source)?.x ?? 0,
        },
    }));
    return {
        nodes: layouted.nodes,
        edges: [...layouted.edges, ...patchedCorefEdges],
        nodeDataMap,
    };
};

/** Inner component: imperatively calls fitView() after nodes settle, fixing
 *  the mobile over-zoom-out where the declarative fitView prop fires too early.
 */
const FitViewOnChange: React.FC<{ nodes: Node[]; isVisible?: boolean }> = ({ nodes, isVisible }) => {
    const { fitView } = useReactFlow();

    // Re-fit whenever the node layout changes (e.g. sentence switch)
    useEffect(() => {
        const id = setTimeout(() => fitView({ padding: 0.15, duration: 350 }), 50);
        return () => clearTimeout(id);
    }, [nodes, fitView]);

    // Re-fit when the pane transitions from hidden → visible on mobile.
    useEffect(() => {
        if (!isVisible) return;
        const id = setTimeout(() => fitView({ padding: 0.15, duration: 350 }), 100);
        return () => clearTimeout(id);
    }, [isVisible, fitView]);

    return null;
};

interface SyntaxTreeProps {
    tree?: AppGrammarNodeData;
    isVisible?: boolean;
}

export const SyntaxTree: React.FC<SyntaxTreeProps> = ({ tree, isVisible }) => {
    const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());
    const [showGhost, setShowGhost] = useState(true);
    const [isGlossaryOpen, setIsGlossaryOpen] = useState(false);

    const treeHasProDrop = useMemo(() => tree ? hasProDrop(tree) : false, [tree]);

    // Reset both expandedIds and showGhost together whenever the sentence changes.
    useEffect(() => {
        setExpandedIds(tree ? new Set([tree.id]) : new Set());
        setShowGhost(true);
    }, [tree]);

    const { nodes, edges } = useMemo(() => parseTreeToFlow(tree, expandedIds, showGhost), [tree, expandedIds, showGhost]);

    const onNodeClick: NodeMouseHandler = useCallback((_event, node) => {
        if (node.data.hasChildren) {
            setExpandedIds(prev => {
                const newSet = new Set(prev);
                if (newSet.has(node.id)) {
                    newSet.delete(node.id);
                } else {
                    newSet.add(node.id);
                }
                return newSet;
            });
        }
    }, []);


    const handleExpandAll = useCallback(() => {
        if (!tree) return;
        setExpandedIds(prev => {
            const next = new Set(prev);
            const walk = (node: AppGrammarNodeData) => {
                if (node.children && node.children.length > 0) {
                    next.add(node.id);
                    node.children.forEach(walk);
                }
            };
            walk(tree);
            return next;
        });
    }, [tree]);

    const handleCollapseAll = useCallback(() => {
        if (!tree) return;
        // Keep only root expanded
        setExpandedIds(new Set([tree.id]));
    }, [tree]);


    if (!tree) {
        return (
            <div className="w-full h-full border border-slate-700/50 rounded-2xl flex items-center justify-center glass-panel">
                <p className="text-slate-400 tracking-wide">Select a sentence to visualize</p>
            </div>
        );
    }

    return (
        <div className="w-full h-full border border-slate-700/50 rounded-2xl overflow-hidden glass-panel shadow-2xl relative">

            {/* ── Toolbar ── */}
            <div className="absolute top-4 right-4 z-20 pointer-events-auto">
                <div className="glass-panel rounded-2xl border border-slate-700/60 p-2 flex flex-wrap items-center gap-1.5 shadow-2xl">
                    <button
                        onClick={handleExpandAll}
                        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-[11px] font-semibold tracking-wide transition-all duration-200 bg-slate-800/60 text-slate-400 hover:bg-slate-700/80 hover:text-slate-200"
                        title="Expand all nodes"
                    >
                        <Maximize2 className="w-3.5 h-3.5" />
                        Expand All
                    </button>
                    <button
                        onClick={handleCollapseAll}
                        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-[11px] font-semibold tracking-wide transition-all duration-200 bg-slate-800/60 text-slate-400 hover:bg-slate-700/80 hover:text-slate-200"
                        title="Collapse to root"
                    >
                        <Minimize2 className="w-3.5 h-3.5" />
                        Collapse All
                    </button>

                    {/* Pro-drop toggle */}
                    {treeHasProDrop && (
                        <button
                            onClick={() => setShowGhost(g => !g)}
                            className={`
                                flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl
                                text-[11px] font-semibold tracking-wide transition-all duration-200
                                ${showGhost
                                    ? 'bg-slate-700/80 text-purple-300'
                                    : 'bg-slate-800/60 text-slate-400 hover:bg-slate-800/80'
                                }
                            `}
                            title={showGhost ? 'Hide implied (pro-dropped) subjects' : 'Show implied (pro-dropped) subjects'}
                        >
                            {showGhost ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
                            {showGhost ? 'Implied On' : 'Implied Off'}
                        </button>
                    )}

                    {/* Divider */}
                    <div className="w-px h-5 bg-slate-700/60 mx-0.5" />

                    {/* Glossary */}
                    <button
                        onClick={() => setIsGlossaryOpen(true)}
                        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-[11px] font-semibold tracking-wide transition-all duration-200 bg-fuchsia-900/30 text-fuchsia-300 hover:bg-fuchsia-900/50"
                        title="Open Grammar Glossary"
                    >
                        <BookOpen className="w-3.5 h-3.5" />
                        Glossary
                    </button>
                </div>
            </div>

            <ReactFlow
                nodes={nodes}
                edges={edges}
                nodeTypes={nodeTypes}
                edgeTypes={edgeTypes}
                onNodeClick={onNodeClick}
                minZoom={0.3}
                maxZoom={1.5}
                proOptions={{ hideAttribution: true }}
                nodesDraggable={true}
                nodesConnectable={false}
            >
                <Background color="#1e293b" gap={24} size={1} />
                <Controls position="bottom-right" className="!bg-slate-800 !border-slate-700 !text-slate-300 !fill-slate-300 !mb-8" />
                <FitViewOnChange nodes={nodes} isVisible={isVisible} />
            </ReactFlow>

            <GlossaryPanel isOpen={isGlossaryOpen} onClose={() => setIsGlossaryOpen(false)} />
            <BadgeLegend />
        </div>
    );
};
