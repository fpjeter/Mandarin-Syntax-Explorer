import { useState, useMemo, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookA, Info, PlayCircle, ChevronDown, ChevronRight, Lightbulb, Network, List, Search, X } from 'lucide-react';
import { Analytics } from '@vercel/analytics/react';
import { sampleSentences } from './data/sentences';
import { SENTENCE_CATEGORIES } from './data/categories';
// import { CATEGORY_DESCRIPTIONS } from './data/categories'; // re-enable with category description span
import type { SentenceCategory } from './types/grammar';
import { SyntaxTree } from './components/SyntaxTree';
import { RubyText } from './components/RubyText';
import { GrammarGuide } from './components/GrammarGuide';

function App() {
  const [selectedId, setSelectedId] = useState<string>(sampleSentences[0].id);
  const [explainerOpen, setExplainerOpen] = useState(false);
  const [notesOpen, setNotesOpen] = useState(false);
  const [mobileView, setMobileView] = useState<'list' | 'tree' | 'guide'>('guide');

  // Group sentences by category, preserving declaration order
  const groupedSentences = useMemo(() => {
    const map = new Map<SentenceCategory, typeof sampleSentences>();
    sampleSentences.forEach(s => {
      if (!map.has(s.category)) map.set(s.category, []);
      map.get(s.category)!.push(s);
    });
    // Sort entries by the canonical SENTENCE_CATEGORIES order
    return [...map.entries()].sort(
      ([a], [b]) => SENTENCE_CATEGORIES.indexOf(a) - SENTENCE_CATEGORIES.indexOf(b)
    );
  }, []);

  const [openGroups, setOpenGroups] = useState<Set<SentenceCategory>>(new Set());
  const [searchQuery, setSearchQuery] = useState('');
  const [highlightedId, setHighlightedId] = useState<string | null>(null);
  const highlightedRef = useRef<HTMLButtonElement | null>(null);

  const toggleGroup = (cat: SentenceCategory) =>
    setOpenGroups(prev => {
      const next = new Set(prev);
      next.has(cat) ? next.delete(cat) : next.add(cat);
      return next;
    });

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
    highlightedRef.current?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }, [highlightedId]);

  const handleSelectSentence = useCallback((id: string) => {
    setSelectedId(id);
    const s = sampleSentences.find(x => x.id === id);
    // Ensure the group containing this sentence is open
    if (s) setOpenGroups(prev => new Set([...prev, s.category]));
    // On mobile, auto-switch to the tree view
    setMobileView('tree');
  }, []);

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
      handleSelectSentence(highlightedId);
      setSearchQuery('');
      setHighlightedId(null);
    } else if (e.key === 'Escape') {
      setSearchQuery('');
      setHighlightedId(null);
    }
  }, [flatFiltered, highlightedId, handleSelectSentence]);

  const selectedSentence = sampleSentences.find(s => s.id === selectedId);

  // Helper for rendering bold/italic in notes
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

  return (
    <div className="h-[100dvh] bg-slate-950 text-slate-100 flex flex-col font-sans relative overflow-hidden">
      {/* Background gradients */}
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-900/10 blur-[150px] pointer-events-none" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-900/10 blur-[150px] pointer-events-none" />

      {/* Header */}
      <header className="glass-panel z-10 border-b border-slate-700/50 px-6 py-4 flex items-center justify-between sticky top-0 bg-slate-900/40">
        <div className="flex items-center space-x-4">
          <div className="p-2.5 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl shadow-lg ring-1 ring-white/20">
            <Network className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-emerald-400 tracking-tight">
              Mandarin Syntax Explorer
            </h1>
            <p className="text-xs text-slate-400 font-medium">Generative Grammar Visualization</p>
          </div>
        </div>
        <div
          onClick={() => { setExplainerOpen(true); }}
          className="hidden sm:flex items-center text-xs font-semibold tracking-wide text-slate-300 bg-slate-800/80 px-4 py-2 rounded-full border border-slate-600/50 shadow-inner cursor-pointer hover:bg-slate-700/80 hover:border-slate-500/70 transition-colors"
        >
          <BookA className="w-4 h-4 mr-2 text-purple-400" />
          Topic-Prominent Framework
        </div>
      </header>

      {/* Mobile tab bar — only visible on < lg screens */}
      <div className="lg:hidden flex border-b border-slate-700/50 bg-slate-900/60 backdrop-blur-sm z-10">
        <button
          onClick={() => setMobileView('list')}
          className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-[11px] font-bold uppercase tracking-widest transition-colors border-b-2 ${mobileView === 'list'
            ? 'text-purple-300 border-purple-500 bg-purple-500/10'
            : 'text-slate-400 border-transparent hover:text-slate-200'
            }`}
        >
          <List className="w-3.5 h-3.5" />
          Sentences
        </button>
        <button
          onClick={() => setMobileView('tree')}
          className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-[11px] font-bold uppercase tracking-widest transition-colors border-b-2 ${mobileView === 'tree'
            ? 'text-purple-300 border-purple-500 bg-purple-500/10'
            : 'text-slate-400 border-transparent hover:text-slate-200'
            }`}
        >
          <Network className="w-3.5 h-3.5" />
          Tree
          {selectedId && mobileView === 'list' && (
            <span className="ml-1 w-1.5 h-1.5 rounded-full bg-purple-400 inline-block" />
          )}
        </button>
        <button
          onClick={() => setMobileView('guide')}
          className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-[11px] font-bold uppercase tracking-widest transition-colors border-b-2 ${mobileView === 'guide'
            ? 'text-blue-300 border-blue-500 bg-blue-500/10'
            : 'text-slate-400 border-transparent hover:text-slate-200'
            }`}
        >
          <Info className="w-3.5 h-3.5" />
          Guide
        </button>
      </div>

      {/* Main Layout */}
      <main className="flex-1 min-h-0 flex flex-col lg:flex-row p-4 sm:p-6 pb-safe gap-6 z-10 overflow-hidden">

        {/* Sidebar — hidden on mobile when tree or guide is active */}
        <div className={`lg:w-96 flex flex-col gap-4 flex-shrink-0 h-full ${mobileView !== 'list' ? 'hidden lg:flex' : 'flex'}`}>
          <div className="glass-panel rounded-3xl p-5 flex flex-col h-full overflow-hidden border border-slate-700/50 shadow-2xl relative">

            {/* Ambient glow inside sidebar */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-3xl rounded-full" />

            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-5 flex items-center">
              <PlayCircle className="w-4 h-4 mr-2" />
              Example Databank
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
                className="w-full bg-slate-800/60 border border-slate-700/60 rounded-xl pl-8 pr-7 py-2 text-[11px] text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-purple-500/60 focus:ring-1 focus:ring-purple-500/30 transition-colors"
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
                // While a search is active, auto-expand every group that has results
                const isOpen = searchQuery.trim() ? true : openGroups.has(category);
                return (
                  <div key={category} className="rounded-2xl border border-slate-700/40 overflow-hidden">
                    {/* Category header */}
                    <button
                      onClick={() => toggleGroup(category)}
                      className="w-full flex items-center justify-between px-4 py-2.5 bg-slate-800/70 hover:bg-slate-700/60 transition-colors text-left relative overflow-hidden"
                    >
                      <span className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-purple-500/70 to-blue-500/70 rounded-r-full" />
                      <span className="flex flex-col gap-0.5 pl-1 min-w-0">
                        <span className="text-[11px] font-bold uppercase tracking-widest text-slate-200 leading-none">{category}</span>
                        {/* Description hidden for now — re-enable by uncommenting: */}
                        {/* <span className="text-[10px] text-slate-500 font-normal normal-case tracking-normal leading-tight pr-2">{CATEGORY_DESCRIPTIONS[category]}</span> */}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-slate-500 font-medium">{sentences.length}</span>
                        <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                      </div>
                    </button>

                    {/* Sentence cards */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="p-2 space-y-2">
                            {sentences.map(sentence => {
                              const isSelected = selectedId === sentence.id;
                              const isHighlighted = highlightedId === sentence.id;
                              return (
                                <motion.button
                                  key={sentence.id}
                                  ref={isHighlighted ? highlightedRef : null}
                                  onClick={() => { handleSelectSentence(sentence.id); setSearchQuery(''); setHighlightedId(null); }}
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

            {/* ── Explainer Card (Framework Only) ─────────────────────────────── */}
            <div className="hidden sm:block mt-5 rounded-2xl bg-slate-900/60 border border-slate-700/50 overflow-hidden flex-shrink-0">
              <button
                onClick={() => setExplainerOpen(o => !o)}
                className="w-full flex items-center gap-3 px-4 py-3 hover:bg-slate-800/40 transition-colors"
              >
                <div className="p-1.5 bg-fuchsia-500/20 rounded-lg flex-shrink-0">
                  <BookA className="w-4 h-4 text-fuchsia-400" />
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-medium text-left flex-1">
                  <strong className="text-slate-100">The Framework</strong>
                  {' '}— Why Topic-Prominent?
                </p>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 flex-shrink-0 transition-transform duration-300 ${explainerOpen ? 'rotate-180' : ''}`}
                />
              </button>

              <AnimatePresence initial={false}>
                {explainerOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 pt-2">
                      <GrammarGuide tab="framework" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            {/* ─────────────────────────────────────────────────────────── */}

          </div>
        </div>

        {/* Visualization Pane — hidden on mobile when list or guide is active */}
        <div className={`flex-1 flex flex-col min-h-0 gap-2 ${mobileView !== 'tree' ? 'hidden lg:flex' : 'flex'}`}>

          {/* ── Sentence header card + Persistent Notes  ── */}
          {selectedSentence && (
            <div className="flex flex-col items-center gap-0 flex-shrink-0 px-2 pt-2 pb-0 z-10 w-full relative">

              {/* Discourse context sentence (faded, smaller) */}
              {selectedSentence.discourseContext && (
                <>
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    key={`ctx-${selectedSentence.id}`}
                    className="glass-panel px-6 py-3 rounded-2xl flex flex-col items-center shadow-lg border border-slate-600/25 bg-slate-900/50 backdrop-blur-md w-full max-w-xl pointer-events-none"
                  >
                    <span className="text-[9px] uppercase tracking-[0.18em] font-bold text-slate-500 mb-1.5">
                      preceding context
                    </span>
                    <RubyText
                      hanzi={selectedSentence.discourseContext.chinese}
                      pinyin={selectedSentence.discourseContext.pinyin}
                      className="opacity-60 !text-xl"
                    />
                    <div className="mt-1.5 text-[11px] text-slate-500 italic">
                      "{selectedSentence.discourseContext.translation}"
                    </div>
                  </motion.div>

                  {/* Connector: arrow indicating discourse flow */}
                  <div className="flex flex-col items-center gap-0.5 my-1 opacity-40 pointer-events-none">
                    <div className="w-px h-3 bg-rose-400" />
                    <svg width="10" height="6" viewBox="0 0 10 6" className="text-rose-400 fill-current">
                      <path d="M5 6 L0 0 L10 0 Z" />
                    </svg>
                    <span className="text-[8px] text-rose-400 font-semibold tracking-widest uppercase -mt-0.5">
                      pro-drop
                    </span>
                  </div>
                </>
              )}

              {/* Main sentence card */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                key={`card-${selectedSentence.id}`}
                className={`glass-panel px-6 sm:px-10 py-5 flex flex-col items-center shadow-2xl border border-slate-500/30 bg-slate-900/80 backdrop-blur-xl w-full max-w-2xl pointer-events-none transition-all duration-300 ${selectedSentence.explanation ? 'rounded-t-3xl rounded-b-none' : 'rounded-3xl'}`}
              >
                <RubyText hanzi={selectedSentence.chinese} pinyin={selectedSentence.pinyin} large displayFont className="!text-2xl sm:!text-4xl shadow-sm" />
                <div className="mt-3 text-sm sm:text-base text-slate-300 italic font-medium tracking-wide">"{selectedSentence.translation}"</div>
              </motion.div>

              {/* Persistent Sentence Notes Drawer */}
              {selectedSentence.explanation && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  key={`notes-${selectedSentence.id}`}
                  className="w-full max-w-2xl"
                >
                  <button
                    onClick={() => setNotesOpen(!notesOpen)}
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
                        className="overflow-hidden border-x border-b border-emerald-500/20 rounded-b-2xl shadow-xl backdrop-blur-md bg-slate-900/60"
                      >
                        <div className="p-6 text-sm text-slate-300 leading-relaxed font-serif bg-gradient-to-b from-slate-900/40 to-transparent">
                          {renderExplanation(selectedSentence.explanation)}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )}

              {/* Connector arrow pointing down toward tree root */}
              <div className="flex flex-col items-center gap-0 mt-3 opacity-30 pointer-events-none">
                <div className="w-px h-6 bg-gradient-to-b from-purple-400 to-transparent" />
                <svg width="10" height="6" viewBox="0 0 10 6" className="fill-purple-400">
                  <path d="M5 6 L0 0 L10 0 Z" />
                </svg>
              </div>
            </div>
          )}

          {/* Canvas */}
          <div className="flex-1 min-h-0 w-full relative z-0">
            <SyntaxTree tree={selectedSentence?.tree} isVisible={mobileView === 'tree'} />
          </div>
        </div>

        {/* ── Mobile Guide Pane (Framework Only) ── */}
        {mobileView === 'guide' && (
          <div className="lg:hidden flex-1 min-h-0 overflow-y-auto custom-scrollbar glass-panel rounded-3xl border border-slate-700/50 shadow-2xl p-5">
            <div className="mb-4 flex items-center gap-2">
              <BookA className="w-5 h-5 text-fuchsia-400" />
              <h3 className="text-sm font-bold text-slate-100 uppercase tracking-widest">The Framework</h3>
            </div>
            <GrammarGuide tab="framework" />
          </div>
        )}

      </main>
      <Analytics />
    </div>
  );
}

export default App;

