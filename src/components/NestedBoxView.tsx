import React, { useState, useEffect, useCallback } from 'react';
import type { GrammarNodeData, GrammarRole } from '../types/grammar';
import { useIsClassical } from '../contexts/AppModeContext';

// ── Role-based border/bg colors (simplified from GrammarNode.tsx) ──────────

function getRoleBoxClasses(role: GrammarRole, subRole?: string, isClassical?: boolean): string {
    if (isClassical) return getClassicalBoxClasses(role, subRole);
    switch (role) {
        case 'Sentence': return 'border-purple-500/60 bg-purple-950/20';
        case 'Topic': return 'border-fuchsia-500/50 bg-fuchsia-950/20';
        case 'Comment': return 'border-blue-500/50 bg-blue-950/20';
        case 'VP': return subRole?.includes('primitive')
            ? 'border-emerald-500/50 bg-emerald-950/20'
            : 'border-teal-500/50 bg-teal-950/20';
        case 'Verb Package': return 'border-green-500/50 bg-green-950/20';
        case 'Noun Phrase': return 'border-orange-500/50 bg-orange-950/15';
        case 'Object': return 'border-amber-500/50 bg-amber-950/15';
        case 'Adjunct': return 'border-rose-500/50 bg-rose-950/15';
        case 'Coverb': return 'border-pink-500/50 bg-pink-950/15';
        case 'Adjective': return 'border-fuchsia-500/50 bg-fuchsia-950/15';
        case 'Attributive': return 'border-lime-500/50 bg-lime-950/15';
        case 'Complement': return 'border-violet-500/50 bg-violet-950/15';
        case 'Head Noun': return 'border-orange-500/60 bg-orange-950/25';
        case 'Head Verb': return 'border-teal-500/60 bg-teal-950/25';
        case 'Measure Word': return 'border-cyan-500/50 bg-cyan-950/15';
        case 'Verb Morpheme': return 'border-green-500/50 bg-green-950/20';
        case 'Object Morpheme': return 'border-amber-500/50 bg-amber-950/20';
        case 'Pivot': return 'border-orange-400/60 bg-orange-950/25';
        case 'Copula': return 'border-indigo-400/50 bg-indigo-950/20';
        case 'Particle': return 'border-slate-500/50 bg-slate-900/30';
        case 'Noun': return 'border-slate-500/40 bg-slate-900/20';
        case 'Pronoun': return 'border-slate-500/40 bg-slate-900/20';
        default: return 'border-slate-600/40 bg-slate-900/20';
    }
}

function getClassicalBoxClasses(role: GrammarRole, subRole?: string): string {
    switch (role) {
        case 'Sentence': return 'border-amber-500/60 bg-amber-950/20';
        case 'Topic': return 'border-amber-500/50 bg-amber-950/15';
        case 'Comment': return 'border-orange-500/50 bg-orange-950/15';
        case 'VP': return subRole?.includes('primitive')
            ? 'border-emerald-500/50 bg-emerald-950/20'
            : 'border-stone-500/40 bg-stone-900/20';
        default: return 'border-stone-500/40 bg-stone-900/20';
    }
}

function getRoleLabelColor(role: GrammarRole, subRole?: string, isClassical?: boolean): string {
    if (isClassical) {
        switch (role) {
            case 'Sentence': return 'text-amber-300';
            case 'Topic': return 'text-amber-300';
            case 'Comment': return 'text-orange-300';
            default: return 'text-stone-300';
        }
    }
    switch (role) {
        case 'Sentence': return 'text-purple-300';
        case 'Topic': return 'text-fuchsia-300';
        case 'Comment': return 'text-blue-300';
        case 'VP': return subRole?.includes('primitive') ? 'text-emerald-300' : 'text-teal-300';
        case 'Verb Package': return 'text-green-300';
        case 'Noun Phrase': return 'text-orange-300';
        case 'Object': return 'text-amber-300';
        case 'Adjunct': return 'text-rose-300';
        case 'Coverb': return 'text-pink-300';
        case 'Complement': return 'text-violet-300';
        case 'Head Noun': return 'text-orange-200';
        case 'Head Verb': return 'text-teal-200';
        case 'Pivot': return 'text-orange-200';
        case 'Copula': return 'text-indigo-200';
        case 'Particle': return 'text-slate-300';
        case 'Attributive': return 'text-lime-300';
        case 'Measure Word': return 'text-cyan-300';
        case 'Verb Morpheme': return 'text-green-300';
        case 'Object Morpheme': return 'text-amber-300';
        default: return 'text-slate-300';
    }
}

// ── Recursive Box Component ────────────────────────────────────────────────

interface BoxNodeProps {
    node: GrammarNodeData;
    expandedIds: Set<string>;
    showGhost: boolean;
    onToggle: (id: string) => void;
    depth: number;
    isClassical: boolean;
}

const BoxNode: React.FC<BoxNodeProps> = ({ node, expandedIds, showGhost, onToggle, depth, isClassical }) => {
    // Skip null/ghost nodes if hidden
    if ((node.isNull || node.isDropped) && !showGhost) return null;

    const isGhost = node.isNull || node.isDropped;
    const hasChildren = !!(node.children && node.children.length > 0);
    const isExpanded = expandedIds.has(node.id);
    const isLeaf = !hasChildren;

    const boxClasses = getRoleBoxClasses(node.role, node.subRole, isClassical);
    const labelColor = getRoleLabelColor(node.role, node.subRole, isClassical);

    // Build the display label
    let roleLabel = node.role;
    if (node.role === 'VP' && node.subRole?.includes('primitive')) roleLabel = 'VP';
    if (node.role === 'VP' && node.subRole?.includes('serial')) roleLabel = 'VP';

    return (
        <div
            className={`
                rounded-lg border transition-all duration-200
                ${boxClasses}
                ${isGhost ? 'border-dashed opacity-60' : ''}
                ${depth === 0 ? 'min-w-full' : ''}
            `}
        >
            {/* Role label bar */}
            <button
                onClick={() => hasChildren && onToggle(node.id)}
                className={`
                    w-full flex items-center gap-1.5 px-2 py-1
                    ${hasChildren ? 'cursor-pointer hover:bg-white/5' : 'cursor-default'}
                    rounded-t-lg transition-colors
                `}
            >
                <span className={`text-[9px] font-bold uppercase tracking-widest ${labelColor}`}>
                    {roleLabel}
                </span>
                {isGhost && node.impliedText && (
                    <span className="text-[9px] text-rose-400/70 font-mono">[{node.impliedText}]</span>
                )}
                {node.role === 'VP' && node.subRole?.includes('primitive') && (
                    <span className="text-[8px] text-emerald-400/60 font-normal tracking-normal">(single)</span>
                )}
                {node.role === 'VP' && node.subRole?.includes('serial') && (
                    <span className="text-[8px] text-teal-400/60 font-normal tracking-normal">(chain)</span>
                )}
                {hasChildren && (
                    <span className="text-[9px] text-slate-500 ml-auto">
                        {isExpanded ? '−' : `+${node.children!.length}`}
                    </span>
                )}
            </button>

            {/* Leaf content: show text */}
            {isLeaf && node.text && (
                <div className="px-2 pb-1.5 pt-0.5">
                    <p className="text-sm font-bold text-slate-100 font-chinese-ui">{node.text.hanzi}</p>
                    <p className="text-[9px] text-slate-400">{node.text.pinyin}</p>
                    {node.text.translation && (
                        <p className="text-[9px] text-slate-500 italic">"{node.text.translation}"</p>
                    )}
                </div>
            )}

            {/* Leaf with no text (e.g. label-only nodes) */}
            {isLeaf && !node.text && isGhost && node.impliedText && (
                <div className="px-2 pb-1.5 pt-0.5">
                    <p className="text-[10px] text-rose-400/50 font-mono">Ø {node.impliedText}</p>
                </div>
            )}

            {/* Children: nested boxes */}
            {hasChildren && isExpanded && (
                <div className="px-1.5 pb-1.5 pt-0.5 flex flex-wrap gap-1.5">
                    {node.children!.map(child => (
                        <BoxNode
                            key={child.id}
                            node={child}
                            expandedIds={expandedIds}
                            showGhost={showGhost}
                            onToggle={onToggle}
                            depth={depth + 1}
                            isClassical={isClassical}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

// ── Main NestedBoxView ─────────────────────────────────────────────────────

interface NestedBoxViewProps {
    tree?: GrammarNodeData;
    showGhost: boolean;
}

export const NestedBoxView: React.FC<NestedBoxViewProps> = ({ tree, showGhost }) => {
    const isClassical = useIsClassical();

    // Expand state: start with root + its direct children expanded
    const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());

    // Reset when tree changes: expand all by default for the box view
    useEffect(() => {
        if (!tree) { setExpandedIds(new Set()); return; }
        const ids = new Set<string>();
        const walk = (node: GrammarNodeData) => {
            if (node.children && node.children.length > 0) {
                ids.add(node.id);
                node.children.forEach(walk);
            }
        };
        walk(tree);
        setExpandedIds(ids);
    }, [tree]);

    const handleToggle = useCallback((id: string) => {
        setExpandedIds(prev => {
            const next = new Set(prev);
            if (next.has(id)) next.delete(id);
            else next.add(id);
            return next;
        });
    }, []);

    if (!tree) {
        return (
            <div className="w-full h-full flex items-center justify-center">
                <p className="text-slate-400 tracking-wide">Select a sentence to visualize</p>
            </div>
        );
    }

    return (
        <div className="w-full h-full overflow-auto p-4">
            <BoxNode
                node={tree}
                expandedIds={expandedIds}
                showGhost={showGhost}
                onToggle={handleToggle}
                depth={0}
                isClassical={isClassical}
            />
        </div>
    );
};
