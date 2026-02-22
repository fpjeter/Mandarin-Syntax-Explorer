import { useState } from 'react';
import { Tag, ChevronDown, ChevronUp } from 'lucide-react';

const BADGES = [
    {
        label: '离合词',
        color: 'text-amber-300 bg-amber-900/40 border-amber-500/50',
        headline: 'Separable verb',
        detail: 'A V-O compound that can be split by particles or other words (e.g. 见面 → 见过面)',
    },
    {
        label: '结果补语',
        color: 'text-violet-300 bg-violet-900/40 border-violet-500/50',
        headline: 'Resultative complement',
        detail: 'Expresses the result achieved by the verb (e.g. 碎 in 打碎 = hit→shatter)',
    },
    {
        label: '可能补语',
        color: 'text-sky-300 bg-sky-900/40 border-sky-500/50',
        headline: 'Potential complement',
        detail: 'V+得/不+RC — expresses ability or possibility (e.g. 看不了 = unable to finish reading)',
    },
    {
        label: '把字句',
        color: 'text-orange-300 bg-orange-900/40 border-orange-500/50',
        headline: 'BĂ construction',
        detail: 'Fronts the object before the verb to emphasise the action\'s effect on it',
    },
    {
        label: '被字句',
        color: 'text-rose-300 bg-rose-900/40 border-rose-500/50',
        headline: 'BÈI passive',
        detail: 'Marks a passive construction; the subject receives rather than performs the action',
    },
    {
        label: '是…的',
        color: 'text-cyan-300 bg-cyan-900/40 border-cyan-500/50',
        headline: 'Shì-de construction',
        detail: '是 and 的 bracket the verb phrase to focus on how, when, or where a past event happened',
    },
    {
        label: '双重否定',
        color: 'text-indigo-300 bg-indigo-900/40 border-indigo-500/50',
        headline: 'Double negation',
        detail: '非…不可 = "absolutely must"; two negatives combine to express strong necessity',
    },
    {
        label: '连…都',
        color: 'text-lime-300 bg-lime-900/40 border-lime-500/50',
        headline: 'Emphatic bracket',
        detail: '连 (even) and 都 (all/even) surround the focused element to stress that it holds without exception',
    },
];

export const BadgeLegend = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="absolute bottom-4 left-4 z-20 flex flex-col items-start gap-0">
            {open && (
                <div className="mb-2 glass-panel border border-slate-700/60 rounded-xl shadow-2xl p-3 w-72 flex flex-col gap-2 animate-in fade-in slide-in-from-bottom-2 duration-150">
                    <p className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold mb-1">Badge glossary</p>
                    {BADGES.map((b) => (
                        <div key={b.label} className="flex items-start gap-2">
                            <span className={`shrink-0 text-[9px] font-bold border px-1.5 py-0.5 rounded ${b.color}`}>
                                {b.label}
                            </span>
                            <div className="flex flex-col leading-tight">
                                <span className="text-[10px] text-slate-200 font-semibold">{b.headline}</span>
                                <span className="text-[9px] text-slate-400 leading-snug mt-0.5">{b.detail}</span>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            <button
                onClick={() => setOpen(o => !o)}
                className={`
                    flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-wide border
                    transition-all duration-200 shadow-lg
                    ${open
                        ? 'bg-slate-700/80 border-slate-500/60 text-slate-200 hover:bg-slate-600/80'
                        : 'bg-slate-800/70 border-slate-600/50 text-slate-400 hover:bg-slate-700/70 hover:text-slate-300'
                    }
                `}
                title="Toggle badge legend"
            >
                <Tag className="w-3 h-3" />
                Legend
                {open ? <ChevronDown className="w-3 h-3" /> : <ChevronUp className="w-3 h-3" />}
            </button>
        </div>
    );
};
