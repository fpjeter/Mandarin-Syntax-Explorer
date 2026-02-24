import { useState } from 'react';
import { Tag, ChevronDown, ChevronUp } from 'lucide-react';
import { BADGES } from '../data/badges';

export const BadgeLegend = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="absolute bottom-4 left-4 z-20 flex flex-col items-start gap-0">
            {open && (
                <div className="mb-2 glass-panel border border-slate-700/60 rounded-xl shadow-2xl p-3 w-60 lg:w-72 max-h-[50vh] overflow-y-auto custom-scrollbar flex flex-col gap-2 animate-in fade-in slide-in-from-bottom-2 duration-150">
                    <p className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold mb-1 sticky top-0 bg-slate-900/90 -mt-1 pt-1 pb-1 -mx-1 px-1 z-10">Badge glossary</p>
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
                {open ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
            </button>
        </div>
    );
};
