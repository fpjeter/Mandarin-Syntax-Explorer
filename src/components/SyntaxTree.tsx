import React, { useMemo, useState, useEffect, useCallback, useRef } from 'react';
import { ReactFlow, Background, useReactFlow, type Node, type NodeMouseHandler } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { ZoomIn, ZoomOut, Scan, Maximize2, Minimize2 } from 'lucide-react';
import { X } from 'lucide-react';

import type { GrammarNodeData as AppGrammarNodeData, GrammarRole } from '../types/grammar';
import { GrammarNode, type GrammarNodeViewData } from './GrammarNode';
import { BadgeLegend } from './BadgeLegend';
import { GlossaryPanel } from './GlossaryPanel';
import { TreeToolbar } from './TreeToolbar';
import { OnboardingHint } from './OnboardingHint';
import { glossary } from '../data/glossary';
import { classicalGlossary } from '../data/classicalGlossary';
import { useIsClassical } from '../contexts/AppModeContext';
import { hasProDrop, parseTreeToFlow, getFitViewPadding } from './treeTransforms';

const nodeTypes = {
    grammarNode: GrammarNode,
};

/** Inner component: imperatively calls fitView() after nodes settle, fixing
 *  the mobile over-zoom-out where the declarative fitView prop fires too early.
 */
const FitViewOnChange: React.FC<{ nodes: Node[]; isVisible?: boolean }> = ({ nodes, isVisible }) => {
    const { fitView } = useReactFlow();

    // Re-fit whenever the node layout changes (e.g. sentence switch)
    useEffect(() => {
        const id = setTimeout(() => fitView({ padding: getFitViewPadding(), duration: 350 }), 50);
        return () => clearTimeout(id);
    }, [nodes, fitView]);

    // Re-fit when the pane transitions from hidden → visible on mobile.
    useEffect(() => {
        if (!isVisible) return;
        const id = setTimeout(() => fitView({ padding: getFitViewPadding(), duration: 350 }), 100);
        return () => clearTimeout(id);
    }, [isVisible, fitView]);

    return null;
};

/** Custom zoom controls that match the app's glassmorphism aesthetic. */
const ZoomControls: React.FC<{ onExpandAll: () => void; onCollapseAll: () => void }> = ({ onExpandAll, onCollapseAll }) => {
    const { zoomIn, zoomOut, fitView } = useReactFlow();
    const btn = 'flex items-center justify-center rounded-xl transition-all duration-200 bg-slate-800/60 text-slate-400 hover:bg-slate-700/80 hover:text-slate-100 w-8 h-8 lg:w-10 lg:h-10';
    const iconCls = 'w-4 h-4 lg:w-5 lg:h-5';
    return (
        <div className="absolute bottom-2 left-2 lg:bottom-6 lg:left-4 z-20 pointer-events-auto">
            <div className="glass-panel rounded-2xl border border-slate-700/60 p-1 lg:p-1.5 flex flex-row lg:flex-col gap-1 shadow-2xl">
                <button onClick={() => zoomIn({ duration: 250 })} className={btn} title="Zoom in">
                    <ZoomIn className={iconCls} />
                </button>
                <button onClick={() => zoomOut({ duration: 250 })} className={btn} title="Zoom out">
                    <ZoomOut className={iconCls} />
                </button>
                <div className="w-px h-full lg:w-full lg:h-px bg-slate-700/60" />
                <button onClick={() => fitView({ padding: getFitViewPadding(), duration: 350 })} className={btn} title="Fit to view">
                    <Scan className={iconCls} />
                </button>
                <div className="w-px h-full lg:w-full lg:h-px bg-slate-700/60" />
                <button onClick={onExpandAll} className={btn} title="Expand all">
                    <Maximize2 className={iconCls} />
                </button>
                <button onClick={onCollapseAll} className={btn} title="Collapse all">
                    <Minimize2 className={iconCls} />
                </button>
            </div>
        </div>
    );
};

/** One-time pinch-to-zoom hint for touch devices */
const PinchHint: React.FC = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        // Only show on touch devices, and only once per session
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        const alreadyShown = sessionStorage.getItem('pinchHintShown');
        if (isTouchDevice && !alreadyShown) {
            queueMicrotask(() => setShow(true));
            sessionStorage.setItem('pinchHintShown', '1');
            const timer = setTimeout(() => setShow(false), 3500);
            return () => clearTimeout(timer);
        }
    }, []);

    if (!show) return null;

    return (
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-30 pointer-events-none animate-in fade-in slide-in-from-bottom-4 duration-300">
            <div className="glass-panel rounded-2xl border border-slate-600/50 px-4 py-2.5 shadow-2xl flex items-center gap-2 text-[11px] text-slate-300 font-medium whitespace-nowrap">
                <span className="text-lg">👌</span>
                Pinch to zoom · Drag to pan
            </div>
        </div>
    );
};

/** true only on devices with a real hover capability (mouse / trackpad) */
const canHover = typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches;

/** Info bar shown on mobile when a node is tapped */
const NodeInfoBar: React.FC<{
    info: { role: string; hanzi: string; headline: string; detail: string } | null;
    onClose: () => void;
}> = ({ info, onClose }) => {
    const isClassical = useIsClassical();
    if (!info) return null;
    return (
        <div className="absolute bottom-14 left-1/2 -translate-x-1/2 w-[calc(100%-1rem)] max-w-[360px] z-30 pointer-events-auto animate-in fade-in slide-in-from-bottom-2 duration-200">
            <div className="glass-panel rounded-xl border border-slate-600/60 px-3 py-2.5 shadow-2xl flex items-start gap-2">
                <div className="flex-1 min-w-0">
                    <p className={`text-[10px] font-bold uppercase tracking-widest mb-0.5 ${isClassical ? 'text-amber-300' : 'text-purple-300'}`}>
                        {info.role}{info.hanzi && <span className="normal-case tracking-normal text-slate-300 ml-1.5 font-chinese-ui">· {info.hanzi}</span>}
                    </p>
                    <p className="text-[11px] font-semibold text-slate-100 leading-tight">{info.headline}</p>
                    <p className="text-[10px] text-slate-400 leading-snug mt-0.5">{info.detail}</p>
                </div>
                <button
                    onClick={(e) => { e.stopPropagation(); onClose(); }}
                    className="shrink-0 p-1 text-slate-500 hover:text-slate-300 transition-colors"
                >
                    <X className="w-3.5 h-3.5" />
                </button>
            </div>
        </div>
    );
};

// ── Main SyntaxTree Component ────────────────────────────────────────────────

interface SyntaxTreeProps {
    tree?: AppGrammarNodeData;
    isVisible?: boolean;
    onRandom?: () => void;
    onPrint?: () => void;
    onDownloadPNG?: () => void;
}

export const SyntaxTree: React.FC<SyntaxTreeProps> = ({ tree, isVisible, onRandom, onPrint, onDownloadPNG }) => {
    const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());
    const [showGhost, setShowGhost] = useState(true);
    const [isGlossaryOpen, setIsGlossaryOpen] = useState(false);
    const [isSemanticMode, setIsSemanticMode] = useState(false);
    const isClassical = useIsClassical();
    const activeGlossary = isClassical ? classicalGlossary : glossary;

    const treeHasProDrop = useMemo(() => tree ? hasProDrop(tree) : false, [tree]);

    // Mobile tap-to-show info bar state
    const [tappedNodeInfo, setTappedNodeInfo] = useState<{ role: string; hanzi: string; headline: string; detail: string } | null>(null);
    const infoDismissTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

    // Reset state whenever the sentence changes.
    useEffect(() => {
        queueMicrotask(() => {
            setExpandedIds(tree ? new Set([tree.id]) : new Set());
            setShowGhost(true);
        });
    }, [tree]);

    const { nodes: rawNodes, edges, corefPairs } = useMemo(() => parseTreeToFlow(tree, expandedIds, showGhost, isClassical), [tree, expandedIds, showGhost, isClassical]);

    // Co-ref hover highlight: when a ghost or its referent is hovered, both glow
    const [corefHoveredId, setCorefHoveredId] = useState<string | null>(null);

    // Patch nodes: coref glow + semantic mode flag
    const nodes = useMemo(() => {
        return rawNodes.map(n => {
            const inPair = corefPairs.has(n.id);
            const partnerId = corefPairs.get(n.id);
            const isGlowing = !!corefHoveredId && (corefHoveredId === n.id || corefHoveredId === partnerId);
            // Always inject isSemanticMode; conditionally add coref flags
            return {
                ...n,
                data: {
                    ...n.data,
                    isSemanticMode: !!isSemanticMode,
                    ...(inPair && { isCorefNode: true }),
                    ...(isGlowing && { corefGlow: true }),
                },
            };
        });
    }, [rawNodes, corefHoveredId, corefPairs, isSemanticMode]);

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

        // Mobile: show role info bar on tap
        if (!canHover) {
            const entry = activeGlossary[node.data.role as GrammarRole];
            if (entry) {
                setTappedNodeInfo({ role: String(node.data.role), hanzi: String((node.data as GrammarNodeViewData).text?.hanzi ?? ''), headline: entry.headline, detail: entry.detail });
                if (infoDismissTimer.current) clearTimeout(infoDismissTimer.current);
                infoDismissTimer.current = setTimeout(() => setTappedNodeInfo(null), 4000);
            }
        }
    }, [activeGlossary]);

    const onNodeMouseEnter: NodeMouseHandler = useCallback((_event, node) => {
        const partnerId = corefPairs.get(node.id);
        if (partnerId) setCorefHoveredId(node.id);
    }, [corefPairs]);

    const onNodeMouseLeave: NodeMouseHandler = useCallback(() => {
        setCorefHoveredId(null);
    }, []);

    // Listen for long-press co-ref events from GrammarNode (mobile)
    useEffect(() => {
        const handler = (e: Event) => {
            const nodeId = (e as CustomEvent).detail?.nodeId;
            if (nodeId && corefPairs.has(nodeId)) {
                setCorefHoveredId(nodeId);
                // Auto-dismiss on next touch
                const dismiss = () => {
                    setCorefHoveredId(null);
                    document.removeEventListener('touchstart', dismiss);
                };
                setTimeout(() => document.addEventListener('touchstart', dismiss, { once: true }), 0);
            }
        };
        document.addEventListener('coref-longpress', handler);
        return () => document.removeEventListener('coref-longpress', handler);
    }, [corefPairs]);


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

            <TreeToolbar
                showGhost={showGhost}
                onToggleGhost={() => setShowGhost(g => !g)}
                treeHasProDrop={treeHasProDrop}
                onOpenGlossary={() => setIsGlossaryOpen(true)}
                onRandom={onRandom ?? (() => {})}
                onPrint={onPrint ?? (() => {})}
                onDownloadPNG={onDownloadPNG ?? (() => {})}
                isSemanticMode={isSemanticMode}
                onToggleSemanticMode={() => setIsSemanticMode(s => !s)}
            />

            <ReactFlow
                nodes={nodes}
                edges={edges}
                nodeTypes={nodeTypes}
                onNodeClick={onNodeClick}
                onPaneClick={() => setTappedNodeInfo(null)}
                onNodeMouseEnter={onNodeMouseEnter}
                onNodeMouseLeave={onNodeMouseLeave}
                minZoom={0.3}
                maxZoom={1.5}
                proOptions={{ hideAttribution: true }}
                nodesDraggable={true}
                nodesConnectable={false}
            >
                <Background color="#1e293b" gap={24} size={1} />
                <ZoomControls onExpandAll={handleExpandAll} onCollapseAll={handleCollapseAll} />
                <PinchHint />
                <FitViewOnChange nodes={nodes} isVisible={isVisible} />
            </ReactFlow>

            <GlossaryPanel isOpen={isGlossaryOpen} onClose={() => setIsGlossaryOpen(false)} />
            <BadgeLegend />
            <NodeInfoBar info={tappedNodeInfo} onClose={() => setTappedNodeInfo(null)} />
            <OnboardingHint />
        </div>
    );
};
