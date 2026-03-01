import { useState, useMemo, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LibraryBig, ChevronDown, Search, X } from 'lucide-react';
import { sampleSentences } from '../data/sentences';
import { SENTENCE_CATEGORIES, CATEGORY_DESCRIPTIONS } from '../data/categories';
import type { SentenceCategory } from '../types/grammar';

interface SentenceSidebarProps {
    selectedId: string;
    onSelectSentence: (id: string) => void;
}

export const SentenceSidebar: React.FC<SentenceSidebarProps> = ({
    selectedId,
    onSelectSentence,
}) => {
    const [openGroup, setOpenGroup] = useState<SentenceCategory | null>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [highlightedId, setHighlightedId] = useState<string | null>(null);
    const highlightedRef = useRef<HTMLButtonElement | null>(null);
    const groupRefs = useRef<Map<SentenceCategory, HTMLDivElement>>(new Map());

    // Group sentences by category, preserving declaration order
    const groupedSentences = useMemo(() => {
        const map = new Map<SentenceCategory, typeof sampleSentences>();
        sampleSentences.forEach(s => {
            if (!map.has(s.category)) map.set(s.category, []);
            map.get(s.category)!.push(s);
        });
        return [...map.entries()].sort(
            ([a], [b]) => SENTENCE_CATEGORIES.indexOf(a) - SENTENCE_CATEGORIES.indexOf(b)
        );
    }, []);

    // Filtered sentence groups — when a query is active, only show matching sentences
    const filteredGroupedSentences = useMemo(() => {
        if (!searchQuery.trim()) return groupedSentences;
        const q = searchQuery.toLowerCase().trim();
        return groupedSentences
            .map(([category, sentences]) => [
                category,
                sentences.filter(s =>
                    s.chinese.includes(q) ||
                    s.pinyin.toLowerCase().includes(q) ||
                    s.translation.toLowerCase().includes(q)
                ),
            ] as const)
            .filter(([, sentences]) => sentences.length > 0);
    }, [groupedSentences, searchQuery]);

    // Flat list of currently visible sentences — used for keyboard navigation
    const flatFiltered = useMemo(
        () => filteredGroupedSentences.flatMap(([, sentences]) => sentences),
        [filteredGroupedSentences]
    );

    // Clear highlight whenever the query text changes
    useEffect(() => { setHighlightedId(null); }, [searchQuery]);

    // Scroll highlighted sentence card into view
    useEffect(() => {
        const el = highlightedRef.current;
        if (!el) return;
        try {
            el.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
        } catch {
            el.scrollIntoView({ block: 'nearest' });
        }
    }, [highlightedId]);

    const toggleGroup = (cat: SentenceCategory) => {
        setOpenGroup(prev => {
            const next = prev === cat ? null : cat;
            if (next) {
                // Scroll the opened category into view after animation starts
                setTimeout(() => {
                    const el = groupRefs.current.get(next);
                    if (!el) return;
                    try {
                        el.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
                    } catch {
                        el.scrollIntoView({ block: 'nearest' });
                    }
                }, 50);
            }
            return next;
        });
    };

    // Ensure selected sentence's group is open when selected externally
    // (skip on initial mount so all categories start minimized)
    const hasMounted = useRef(false);
    useEffect(() => {
        if (!hasMounted.current) { hasMounted.current = true; return; }
        const s = sampleSentences.find(x => x.id === selectedId);
        if (s) setOpenGroup(s.category);
    }, [selectedId]);

    const handleSelect = useCallback((id: string) => {
        onSelectSentence(id);
        setSearchQuery('');
        setHighlightedId(null);
    }, [onSelectSentence]);

    const handleSearchKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
        if (flatFiltered.length === 0) return;
        const idx = flatFiltered.findIndex(s => s.id === highlightedId);
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            setHighlightedId(flatFiltered[idx < flatFiltered.length - 1 ? idx + 1 : 0].id);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setHighlightedId(flatFiltered[idx > 0 ? idx - 1 : flatFiltered.length - 1].id);
        } else if (e.key === 'Enter' && highlightedId) {
            handleSelect(highlightedId);
        } else if (e.key === 'Escape') {
            setSearchQuery('');
            setHighlightedId(null);
        }
    }, [flatFiltered, highlightedId, handleSelect]);

    return (
        <div className="glass-panel rounded-3xl p-5 flex flex-col h-full overflow-hidden border border-slate-700/50 shadow-2xl relative">

            {/* Ambient glow inside sidebar */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-3xl rounded-full" />

            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-5 flex items-center">
                <LibraryBig className="w-4 h-4 mr-2" />
                Sentence Library
            </h2>

            {/* Search input */}
            <div className="relative mb-3 flex-shrink-0">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-500 pointer-events-none" />
                <input
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    onKeyDown={handleSearchKeyDown}
                    placeholder="Search sentences…"
                    aria-label="Search sentences"
                    className="w-full bg-slate-800/60 border border-slate-700/60 rounded-xl pl-8 pr-7 py-2 text-[11px] text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-purple-500/70 focus:ring-2 focus:ring-purple-500/40 transition-all duration-200"
                />
                {searchQuery && (
                    <button
                        onClick={() => { setSearchQuery(''); setHighlightedId(null); }}
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
                        aria-label="Clear search"
                    >
                        <X className="w-3 h-3" />
                    </button>
                )}
            </div>

            <div className="flex-1 min-h-0 overflow-y-auto pr-2 space-y-2 custom-scrollbar">
                {filteredGroupedSentences.length === 0 && (
                    <p className="text-[11px] text-slate-500 italic text-center py-6">
                        No sentences match <span className="text-slate-400 not-italic">"{searchQuery}"</span>
                    </p>
                )}

                {filteredGroupedSentences.map(([category, sentences]) => {
                    const isOpen = searchQuery.trim() ? true : openGroup === category;
                    return (
                        <div key={category} ref={el => { if (el) groupRefs.current.set(category, el); }} className="rounded-2xl border border-slate-700/40 overflow-hidden">
                            {/* Category header */}
                            <button
                                onClick={() => toggleGroup(category)}
                                aria-expanded={isOpen}
                                className="w-full flex items-center justify-between px-4 py-2.5 bg-slate-800/70 hover:bg-slate-700/60 transition-colors text-left relative overflow-hidden"
                            >
                                <span className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-purple-500/70 to-blue-500/70 rounded-r-full" />
                                <span className="flex flex-col gap-0.5 pl-1 min-w-0">
                                    <span className="text-[11px] font-bold uppercase tracking-widest text-slate-200 leading-none">{category}</span>
                                </span>
                                <div className="flex items-center gap-2">
                                    <span className="text-[10px] text-slate-400 font-bold bg-slate-700/60 border border-slate-600/40 px-2 py-0.5 rounded-full min-w-[22px] text-center">{sentences.length}</span>
                                    <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                                </div>
                            </button>

                            {/* Sentence cards + description */}
                            <AnimatePresence initial={false}>
                                {isOpen && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.2, ease: 'easeInOut' }}
                                        className="overflow-hidden"
                                    >
                                        <p className="px-4 pt-2 pb-1 text-[10px] text-slate-400 italic leading-relaxed">
                                            {CATEGORY_DESCRIPTIONS[category]}
                                        </p>
                                        <div className="p-2 space-y-2">
                                            {sentences.map(sentence => {
                                                const isSelected = selectedId === sentence.id;
                                                const isHighlighted = highlightedId === sentence.id;
                                                return (
                                                    <motion.button
                                                        key={sentence.id}
                                                        ref={isHighlighted ? highlightedRef : null}
                                                        onClick={() => handleSelect(sentence.id)}
                                                        whileHover={{ scale: 1.015, y: -1 }}
                                                        whileTap={{ scale: 0.98 }}
                                                        className={`w-full text-left p-3 rounded-xl transition-all duration-300 border relative overflow-hidden
                                                            ${isSelected
                                                                ? 'bg-gradient-to-br from-blue-900/40 to-purple-900/40 border-purple-500/50 shadow-[0_4px_20px_rgba(168,85,247,0.15)] ring-1 ring-purple-500/20'
                                                                : isHighlighted
                                                                    ? 'bg-slate-800/60 border-purple-500/40 ring-1 ring-purple-500/20'
                                                                    : 'bg-slate-800/30 border-slate-700/30 hover:bg-slate-800/70 hover:border-slate-600/50 hover:shadow-lg'
                                                            }`}
                                                    >
                                                        {isSelected && (
                                                            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-400 to-blue-400" />
                                                        )}
                                                        <div className="text-lg font-semibold text-slate-100 mb-1 tracking-wide font-chinese-ui">{sentence.chinese}</div>
                                                        <div className={`text-[10px] text-[var(--color-mandarin-gold)] mb-2 font-medium tracking-wide transition-all duration-200 ${isSelected ? '' : 'text-[9px] opacity-70'}`}>{sentence.pinyin}</div>
                                                        <div className={`text-xs text-slate-400 italic leading-relaxed ${isSelected ? 'line-clamp-2' : 'line-clamp-1'}`}>"{sentence.translation}"</div>
                                                    </motion.button>
                                                );
                                            })}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
