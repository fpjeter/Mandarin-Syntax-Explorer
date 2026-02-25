import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Lightbulb } from 'lucide-react';
import { useRef } from 'react';
import { RubyText } from './RubyText';
import type { SentenceData } from '../types/grammar';

const springTransition = { type: 'spring' as const, stiffness: 300, damping: 28 };

// Module-level helper — no React state dependency (item #4)
const renderExplanation = (text: string) => {
    const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
    return parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**'))
            return <strong key={i} className="text-slate-100 font-semibold">{part.slice(2, -2)}</strong>;
        if (part.startsWith('*') && part.endsWith('*'))
            return <em key={i} className="italic text-slate-300">{part.slice(1, -1)}</em>;
        return <span key={i}>{part}</span>;
    });
};

interface SentenceHeaderProps {
    sentence: SentenceData;
    notesOpen: boolean;
    onToggleNotes: () => void;
    onSwipePrev?: () => void;
    onSwipeNext?: () => void;
}

export const SentenceHeader: React.FC<SentenceHeaderProps> = ({
    sentence,
    notesOpen,
    onToggleNotes,
    onSwipePrev,
    onSwipeNext,
}) => {
    // Swipe detection
    const touchStart = useRef<{ x: number; y: number } | null>(null);

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };
    const handleTouchEnd = (e: React.TouchEvent) => {
        if (!touchStart.current) return;
        const dx = e.changedTouches[0].clientX - touchStart.current.x;
        const dy = e.changedTouches[0].clientY - touchStart.current.y;
        touchStart.current = null;
        // Only fire if horizontal swipe is dominant and distance ≥ 60px
        if (Math.abs(dx) < 60 || Math.abs(dx) < Math.abs(dy)) return;
        if (dx > 0) onSwipePrev?.();
        else onSwipeNext?.();
    };

    return (
        <div
            className="flex flex-col items-center gap-0 flex-shrink-0 px-2 pt-2 pb-0 z-10 w-full relative"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >

            {/* Discourse context sentence (faded, smaller) */}
            {sentence.discourseContext && (
                <>
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={springTransition}
                        key={`ctx-${sentence.id}`}
                        className="glass-panel px-3 py-1.5 xl:px-4 xl:py-2 rounded-2xl flex flex-col items-center shadow-lg border border-slate-600/25 bg-slate-900/50 w-full max-w-xl pointer-events-none"
                    >
                        <span className="text-[8px] xl:text-[9px] uppercase tracking-[0.18em] font-bold text-slate-500 mb-1">
                            preceding context
                        </span>
                        <RubyText
                            hanzi={sentence.discourseContext.chinese}
                            pinyin={sentence.discourseContext.pinyin}
                            className="opacity-60 !text-base xl:!text-xl"
                        />
                        <div className="mt-1 text-[10px] xl:text-[11px] text-slate-500 italic">
                            "{sentence.discourseContext.translation}"
                        </div>
                    </motion.div>

                    {/* Connector: arrow indicating discourse flow */}
                    <div className="flex flex-col items-center gap-0.5 my-0.5 xl:my-1 opacity-40 pointer-events-none">
                        <div className="w-px h-2 xl:h-3 bg-rose-400" />
                        <svg width="10" height="6" viewBox="0 0 10 6" className="text-rose-400 fill-current">
                            <path d="M5 6 L0 0 L10 0 Z" />
                        </svg>
                        <span className="text-[7px] xl:text-[8px] text-rose-400 font-semibold tracking-widest uppercase -mt-0.5">
                            pro-drop
                        </span>
                    </div>
                </>
            )}

            {/* Main sentence card */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={springTransition}
                key={`card-${sentence.id}`}
                className={`glass-panel px-4 sm:px-6 xl:px-10 py-3 xl:py-5 flex flex-col items-center shadow-2xl border border-slate-500/30 bg-slate-900/80 w-full max-w-2xl transition-all duration-300 ${sentence.explanation ? 'rounded-t-3xl rounded-b-none' : 'rounded-3xl'}`}
            >
                <RubyText hanzi={sentence.chinese} pinyin={sentence.pinyin} large displayFont className="!text-xl sm:!text-2xl xl:!text-4xl shadow-sm" />
                <div className="mt-2 xl:mt-3 text-xs sm:text-sm xl:text-base text-slate-300 italic font-medium tracking-wide">"{sentence.translation}"</div>


            </motion.div>

            {/* Persistent Sentence Notes Drawer */}
            {sentence.explanation && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    key={`notes-${sentence.id}`}
                    className="w-full max-w-2xl"
                >
                    <button
                        onClick={onToggleNotes}
                        className={`w-full flex items-center justify-between px-6 py-2.5 bg-emerald-900/30 hover:bg-emerald-800/40 border-x border-t border-emerald-500/25 transition-all duration-300 ${notesOpen ? 'border-b-0 rounded-b-none' : 'border-b border-emerald-500/20 rounded-b-2xl'}`}
                    >
                        <div className="flex items-center gap-2">
                            <Lightbulb className={`w-3.5 h-3.5 ${notesOpen ? 'text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]' : 'text-emerald-500'}`} />
                            <span className={`text-[11px] font-bold uppercase tracking-widest ${notesOpen ? 'text-emerald-200' : 'text-emerald-400/80'}`}>Grammar Note</span>
                        </div>
                        <ChevronRight className={`w-4 h-4 text-emerald-500 transition-transform duration-300 ${notesOpen ? 'rotate-90' : ''}`} />
                    </button>

                    <AnimatePresence initial={false}>
                        {notesOpen && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                className="overflow-hidden border-x border-b border-emerald-500/20 rounded-b-2xl shadow-xl bg-slate-900/60"
                            >
                                <div className="p-6 text-sm text-slate-300 leading-relaxed font-serif bg-gradient-to-b from-slate-900/40 to-transparent">
                                    {renderExplanation(sentence.explanation)}


                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            )}

            {/* Connector arrow pointing down toward tree root */}
            <div className="flex flex-col items-center gap-0 mt-2 xl:mt-3 opacity-30 pointer-events-none">
                <div className="w-px h-4 xl:h-6 bg-gradient-to-b from-purple-400 to-transparent" />
                <svg width="10" height="6" viewBox="0 0 10 6" className="fill-purple-400">
                    <path d="M5 6 L0 0 L10 0 Z" />
                </svg>
            </div>
        </div>
    );
};
