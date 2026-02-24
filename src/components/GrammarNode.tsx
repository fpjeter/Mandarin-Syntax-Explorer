import React from 'react';
import { Handle, Position, type NodeProps, type Node } from '@xyflow/react';
import { PlusCircle, MinusCircle } from 'lucide-react';
import type { GrammarRole, MandarinWord } from '../types/grammar';
import { RubyText } from './RubyText';
import { RoleTooltip } from './RoleTooltip';
import { BADGES } from '../data/badges';

export type GrammarNodeViewData = {
    role: GrammarRole;
    subRole?: string;
    isDropped?: boolean;
    impliedText?: string;
    refersToId?: string;   // when set, this ghost node has a co-ref arc to that node
    text?: MandarinWord;
    isRoot?: boolean;
    hasChildren?: boolean;
    isExpanded?: boolean;
};

export type GrammarNodeType = Node<GrammarNodeViewData, 'grammarNode'>;

const GrammarNodeInner = ({ data, isConnectable }: NodeProps<GrammarNodeType>) => {
    const getRoleColorClass = (role: GrammarRole) => {
        switch (role) {
            case 'Sentence': return 'bg-slate-800/80 text-slate-100 border-purple-400/60 shadow-[0_0_28px_rgba(139,92,246,0.45),inset_0_1px_0_rgba(255,255,255,0.08)]';
            case 'Topic': return 'bg-fuchsia-900/40 text-fuchsia-200 border-fuchsia-500/50 shadow-[0_0_15px_rgba(217,70,239,0.3)]';
            case 'Comment': return 'bg-blue-900/40 text-blue-200 border-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.3)]';
            case 'Subject': return 'bg-indigo-900/40 text-indigo-300 border-indigo-600/50';
            case 'Predicate': return 'bg-cyan-900/40 text-cyan-200 border-cyan-500/50';
            case 'Verb Phrase': return 'bg-teal-900/40 text-teal-200 border-teal-500/50';
            case 'Noun Phrase': return 'bg-orange-900/40 text-orange-200 border-orange-600/50';
            case 'Location Phrase': return 'bg-sky-900/40 text-sky-200 border-sky-500/50 shadow-[0_0_12px_rgba(14,165,233,0.1)]';
            case 'Time Phrase': return 'bg-yellow-900/40 text-yellow-200 border-yellow-600/50 shadow-[0_0_12px_rgba(234,179,8,0.1)]';
            case 'Verb': return 'bg-green-900/40 text-green-300 border-green-600/50';
            case 'Object': return 'bg-amber-900/40 text-amber-200 border-amber-600/50';
            case 'Adverb': return 'bg-rose-900/40 text-rose-300 border-rose-600/50';
            case 'Adjective': return 'bg-pink-900/40 text-pink-200 border-pink-600/50 shadow-[0_0_12px_rgba(236,72,153,0.15)]';
            case 'Attributive': return 'bg-lime-900/40 text-lime-300 border-lime-600/50 shadow-[0_0_15px_rgba(132,204,22,0.15)]';
            case 'Complement': return 'bg-violet-900/40 text-violet-300 border-violet-600/50 shadow-[0_0_15px_rgba(139,92,246,0.15)]';
            case 'Head Noun': return 'bg-orange-800/60 text-orange-100 border-orange-500/70 border-b-2';
            case 'Head Verb': return 'bg-teal-800/60 text-teal-100 border-teal-500/70 border-b-2';
            case 'Measure Word': return 'bg-cyan-900/40 text-cyan-200 border-cyan-500/50';
            case 'Verb Morpheme': return 'bg-green-900/50 text-green-200 border-green-500/60 shadow-[0_0_12px_rgba(34,197,94,0.2)]';
            case 'Object Morpheme': return 'bg-amber-900/50 text-amber-200 border-amber-500/60 shadow-[0_0_12px_rgba(245,158,11,0.2)]';
            case 'Pivot': return 'bg-orange-800/50 text-orange-100 border-orange-400/70 shadow-[0_0_16px_rgba(251,146,60,0.35)] border-b-2';
            case 'Copula': return 'bg-indigo-800/50 text-indigo-100 border-indigo-400/60 shadow-[0_0_14px_rgba(99,102,241,0.3)] border-b-2';
            default: return 'bg-slate-900/60 text-slate-300 border-slate-700/50';
        }
    };

    const isGhost = !!data.isDropped;

    const isCollapsedWithChildren = data.hasChildren && !data.isExpanded && !isGhost;

    return (
        <RoleTooltip role={data.role}>
            <div
                className={`
                glass-panel rounded-xl px-4 py-3 min-w-[140px] flex flex-col items-center justify-center
                border transition-all duration-300 overflow-visible relative
                ${data.hasChildren && !isGhost ? 'cursor-pointer hover:border-slate-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:-translate-y-0.5' : ''}
                ${isGhost
                        ? 'border-dashed border-rose-500/50 bg-slate-900/30 opacity-60'
                        : getRoleColorClass(data.role)
                    }
            `}
            >
                {!data.isRoot && (
                    <Handle
                        type="target"
                        position={Position.Top}
                        isConnectable={isConnectable}
                        className={`!w-2 !h-2 !border-slate-800 ${isGhost ? '!bg-rose-400/50' : '!bg-slate-400'}`}
                    />
                )}

                {/* Role label row */}
                <div
                    className={`text-[11px] font-bold uppercase tracking-wide mb-2 whitespace-nowrap flex items-center gap-1 ${isGhost ? 'text-rose-400/80' : 'opacity-90'}`}
                >
                    {data.role}
                    {data.subRole && <span className="text-[9px] opacity-75 lowercase tracking-normal">({data.subRole})</span>}
                    {isGhost && (
                        <span className="ml-1 text-[9px] text-rose-400 font-bold bg-rose-900/30 border border-rose-500/40 px-1 py-0.5 rounded tracking-normal normal-case">
                            pro-drop
                        </span>
                    )}
                    {BADGES.filter(b => b.match(data.role, data.subRole)).map(b => (
                        <span
                            key={b.label}
                            className={`ml-1 text-[9px] font-bold border px-1 py-0.5 rounded tracking-normal normal-case ${b.color}`}
                        >
                            {b.label}
                        </span>
                    ))}
                </div>

                {/* Ghost placeholder: bracketed implied pronoun */}
                {isGhost && data.impliedText && (
                    <div className="mt-1 flex flex-col items-center">
                        <span className="text-2xl font-bold text-rose-400/60 tracking-wide font-chinese-ui">
                            [{data.impliedText}]
                        </span>
                        <span className="text-[9px] text-rose-400/50 italic mt-0.5">implied</span>
                        {data.refersToId && (
                            <span className="text-[9px] text-rose-500/70 font-semibold mt-1 tracking-wide">
                                ↑ co-ref
                            </span>
                        )}
                        {!data.refersToId && (
                            <span className="text-[9px] text-rose-400/50 italic mt-1 tracking-wide">
                                no overt pronoun
                            </span>
                        )}
                    </div>
                )}

                {/* Normal text content for non-ghost nodes */}
                {!isGhost && data.text && (
                    <div className="mt-1 flex flex-col items-center pointer-events-none">
                        <RubyText
                            hanzi={data.text.hanzi}
                            pinyin={data.text.pinyin}
                            large={!(data.role.includes('Phrase') || data.role === 'Topic' || data.role === 'Comment' || data.role === 'Predicate')}
                        />
                        {data.text.translation && (
                            <div className="text-[10px] text-slate-400 mt-2 italic text-center leading-tight max-w-[160px] line-clamp-2 overflow-hidden">
                                "{data.text.translation}"
                            </div>
                        )}
                    </div>
                )}

                {/* Expand/collapse button + pulse ring on collapsed nodes */}
                {data.hasChildren && !isGhost && (
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-10">
                        {isCollapsedWithChildren && (
                            <span className="absolute inset-0 rounded-full bg-slate-400/30 animate-ping" />
                        )}
                        <div className="relative bg-slate-800 rounded-full text-slate-400 hover:text-white transition-colors shadow-lg border border-slate-600">
                            {data.isExpanded ? <MinusCircle className="w-5 h-5" /> : <PlusCircle className="w-5 h-5" />}
                        </div>
                    </div>
                )}

                <Handle type="source" position={Position.Bottom} isConnectable={isConnectable} className="!w-2 !h-2 !bg-transparent !border-transparent" />
                {/* Named top-source handle used by the co-reference arc so it exits from the top of the node */}
                <Handle id="coref-source" type="source" position={Position.Top} isConnectable={false} className="!w-1 !h-1 !bg-transparent !border-transparent !opacity-0" />

            </div>
        </RoleTooltip>
    );
};

export const GrammarNode = React.memo(GrammarNodeInner);
