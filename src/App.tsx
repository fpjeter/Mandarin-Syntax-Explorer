import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookA, Info, PlayCircle, ChevronDown, Network, List } from 'lucide-react';
import { sampleSentences } from './data/sentences';
import type { SentenceCategory } from './types/grammar';
import { SyntaxTree } from './components/SyntaxTree';
import { RubyText } from './components/RubyText';

function App() {
  const [selectedId, setSelectedId] = useState<string>(sampleSentences[0].id);
  const [explainerOpen, setExplainerOpen] = useState(false);
  const [explainerTab, setExplainerTab] = useState<'framework' | 'sentence'>('framework');
  const [mobileView, setMobileView] = useState<'list' | 'tree'>('list');

  // Group sentences by category, preserving declaration order
  const groupedSentences = useMemo(() => {
    const map = new Map<SentenceCategory, typeof sampleSentences>();
    sampleSentences.forEach(s => {
      if (!map.has(s.category)) map.set(s.category, []);
      map.get(s.category)!.push(s);
    });
    return [...map.entries()]; // [category, sentences][]
  }, []);

  const [openGroups, setOpenGroups] = useState<Set<SentenceCategory>>(new Set());

  const toggleGroup = (cat: SentenceCategory) =>
    setOpenGroups(prev => {
      const next = new Set(prev);
      next.has(cat) ? next.delete(cat) : next.add(cat);
      return next;
    });

  const handleSelectSentence = (id: string) => {
    setSelectedId(id);
    const s = sampleSentences.find(x => x.id === id);
    setExplainerTab(s?.explanation ? 'sentence' : 'framework');
    // Ensure the group containing this sentence is open
    if (s) setOpenGroups(prev => new Set([...prev, s.category]));
    // On mobile, auto-switch to the tree view
    setMobileView('tree');
  };

  // Renders **bold** and *italic* markdown markers into styled JSX spans.
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

  const selectedSentence = sampleSentences.find(s => s.id === selectedId);


  return (
    <div className="h-screen bg-slate-950 text-slate-100 flex flex-col font-sans relative overflow-hidden">
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
          onClick={() => { setExplainerOpen(true); setExplainerTab('framework'); }}
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
          {selectedSentence && mobileView === 'list' && (
            <span className="ml-1 w-1.5 h-1.5 rounded-full bg-purple-400 inline-block" />
          )}
        </button>
      </div>

      {/* Main Layout */}
      <main className="flex-1 min-h-0 flex flex-col lg:flex-row p-4 sm:p-6 gap-6 z-10 overflow-hidden">

        {/* Sidebar — hidden on mobile when tree is active */}
        <div className={`lg:w-96 flex flex-col gap-4 flex-shrink-0 h-full ${mobileView === 'tree' ? 'hidden lg:flex' : 'flex'}`}>
          <div className="glass-panel rounded-3xl p-5 flex flex-col h-full overflow-hidden border border-slate-700/50 shadow-2xl relative">

            {/* Ambient glow inside sidebar */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-3xl rounded-full" />

            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-5 flex items-center">
              <PlayCircle className="w-4 h-4 mr-2" />
              Example Databank
            </h2>

            <div className="flex-1 min-h-0 overflow-y-auto pr-2 space-y-2 custom-scrollbar">
              {groupedSentences.map(([category, sentences]) => {
                const isOpen = openGroups.has(category);
                return (
                  <div key={category} className="rounded-2xl border border-slate-700/40 overflow-hidden">
                    {/* Category header */}
                    <button
                      onClick={() => toggleGroup(category)}
                      className="w-full flex items-center justify-between px-4 py-2.5 bg-slate-800/70 hover:bg-slate-700/60 transition-colors text-left relative overflow-hidden"
                    >
                      <span className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-purple-500/70 to-blue-500/70 rounded-r-full" />
                      <span className="text-[11px] font-bold uppercase tracking-widest text-slate-200 pl-1">{category}</span>
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
                            {sentences.map(sentence => (
                              <motion.button
                                key={sentence.id}
                                onClick={() => handleSelectSentence(sentence.id)}
                                whileHover={{ scale: 1.015, y: -1 }}
                                whileTap={{ scale: 0.98 }}
                                className={`w-full text-left p-3 rounded-xl transition-all duration-300 border relative overflow-hidden ${selectedId === sentence.id
                                  ? 'bg-gradient-to-br from-blue-900/40 to-purple-900/40 border-purple-500/50 shadow-[0_4px_20px_rgba(168,85,247,0.15)] ring-1 ring-purple-500/20'
                                  : 'bg-slate-800/30 border-slate-700/30 hover:bg-slate-800/70 hover:border-slate-600/50 hover:shadow-lg'
                                  }`}
                              >
                                {selectedId === sentence.id && (
                                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-400 to-blue-400" />
                                )}
                                <div className="text-lg font-semibold text-slate-100 mb-1 tracking-wide font-chinese-ui">{sentence.chinese}</div>
                                <div className={`text-[10px] text-[var(--color-mandarin-gold)] mb-2 font-medium tracking-wide transition-all duration-200 ${selectedId === sentence.id ? '' : 'text-[9px] opacity-70'}`}>{sentence.pinyin}</div>
                                <div className={`text-xs text-slate-400 italic leading-relaxed ${selectedId === sentence.id ? 'line-clamp-2' : 'line-clamp-1'}`}>"{sentence.translation}"</div>
                              </motion.button>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* ── Explainer Card (two-tab) ─────────────────────────────── */}
            <div className="hidden sm:block mt-5 rounded-2xl bg-slate-900/60 border border-slate-700/50 overflow-hidden flex-shrink-0">

              {/* Toggle header */}
              <button
                onClick={() => setExplainerOpen(o => !o)}
                className="w-full flex items-center gap-3 px-4 py-3 hover:bg-slate-800/40 transition-colors"
              >
                <div className="p-1.5 bg-blue-500/20 rounded-lg flex-shrink-0">
                  <Info className="w-4 h-4 text-blue-400" />
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-medium text-left flex-1">
                  <strong className="text-slate-100">How does this work?</strong>
                  {' '}— Grammar guide & sentence notes
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
                    {/* Tab bar */}
                    <div className="flex border-t border-slate-700/50">
                      <button
                        onClick={() => setExplainerTab('framework')}
                        className={`flex-1 py-2 text-[10px] font-bold uppercase tracking-widest transition-colors ${explainerTab === 'framework'
                          ? 'text-fuchsia-300 bg-fuchsia-900/20 border-b-2 border-fuchsia-400'
                          : 'text-slate-400 hover:text-slate-200 border-b-2 border-transparent'
                          }`}
                      >
                        The Framework
                      </button>
                      <button
                        onClick={() => setExplainerTab('sentence')}
                        className={`flex-1 py-2 text-[10px] font-bold uppercase tracking-widest transition-colors ${explainerTab === 'sentence'
                          ? 'text-emerald-300 bg-emerald-900/20 border-b-2 border-emerald-400'
                          : 'text-slate-400 hover:text-slate-200 border-b-2 border-transparent'
                          }`}
                      >
                        This Sentence
                      </button>
                    </div>

                    {/* ── Framework tab ───────────────────────────────── */}
                    {explainerTab === 'framework' && (
                      <div className="px-4 pb-4 pt-3 space-y-4">

                        <section>
                          <h3 className="text-[10px] font-bold uppercase tracking-widest text-fuchsia-400 mb-1.5">The big idea</h3>
                          <p className="text-[11px] text-slate-300 leading-relaxed">
                            In English, you build a sentence around a <em>subject</em> — the person or thing doing the action.
                            Mandarin works differently: you first say <em>what you want to talk about</em>,
                            then say something about it. That opening word or phrase is the{' '}
                            <span className="text-fuchsia-400 font-bold">Topic</span>, and everything
                            said about it is the{' '}
                            <span className="text-blue-400 font-bold">Comment</span>.
                          </p>
                        </section>

                        <section>
                          <h3 className="text-[10px] font-bold uppercase tracking-widest text-blue-400 mb-2">Topic vs. Comment</h3>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="bg-fuchsia-900/20 border border-fuchsia-600/30 rounded-xl p-2.5">
                              <p className="text-[10px] font-bold text-fuchsia-300 uppercase tracking-wider mb-1">Topic</p>
                              <p className="text-[10px] text-slate-300 leading-snug">
                                Sets the scene. Roughly: <em>"As for X…"</em><br />
                                Can be a person, a thing, a time, or a place.
                              </p>
                            </div>
                            <div className="bg-blue-900/20 border border-blue-600/30 rounded-xl p-2.5">
                              <p className="text-[10px] font-bold text-blue-300 uppercase tracking-wider mb-1">Comment</p>
                              <p className="text-[10px] text-slate-300 leading-snug">
                                The actual statement about the topic. Contains the main verb and everything around it.
                              </p>
                            </div>
                          </div>
                        </section>

                        <section>
                          <h3 className="text-[10px] font-bold uppercase tracking-widest text-rose-400 mb-1.5">Why subjects disappear</h3>
                          <p className="text-[11px] text-slate-300 leading-relaxed">
                            Once the Topic is set, the listener knows who is being talked about.
                            So Mandarin often skips the subject inside the Comment entirely —
                            this is called <span className="text-rose-400 font-bold">pro-drop</span>.
                            The tree shows missing words as faded{' '}
                            <span className="text-rose-300 font-mono text-[10px]">[ghost]</span> nodes.
                            Toggle <em>"Show implied subjects"</em> to reveal them.
                          </p>
                        </section>

                        <section>
                          <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1.5">The red arcs</h3>
                          <p className="text-[11px] text-slate-300 leading-relaxed">
                            When a dropped pronoun refers back to the Topic,
                            a <span className="text-rose-400 font-bold">red dashed arc</span> draws
                            the invisible link — connecting the ghost node to the word it stands for.
                          </p>
                        </section>

                        <p className="text-[10px] text-slate-500 italic">
                          💡 Hover any node label in the tree for a quick explanation.
                        </p>
                      </div>
                    )}

                    {/* ── This Sentence tab ───────────────────────────── */}
                    {explainerTab === 'sentence' && (
                      <div className="px-4 pb-4 pt-3">
                        {selectedSentence?.explanation ? (
                          <>
                            <div className="mb-2.5">
                              <p className="text-base font-semibold text-slate-100">{selectedSentence.chinese}</p>
                              <p className="text-[10px] text-slate-400 italic mt-0.5">"{selectedSentence.translation}"</p>
                            </div>
                            <p className="text-[11px] text-slate-300 leading-relaxed">
                              {renderExplanation(selectedSentence.explanation)}
                            </p>
                          </>
                        ) : (
                          <p className="text-[11px] text-slate-400 leading-relaxed italic">
                            Select a sentence from the list, then explore the tree by clicking{' '}
                            <span className="text-fuchsia-400 not-italic font-bold">TOPIC</span> and{' '}
                            <span className="text-blue-400 not-italic font-bold">COMMENT</span>.
                            Hover any label for a plain-English explanation.
                          </p>
                        )}
                      </div>
                    )}

                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            {/* ─────────────────────────────────────────────────────────── */}

          </div>
        </div>

        {/* Visualization Pane — hidden on mobile when list is active */}
        <div className={`flex-1 flex flex-col min-h-0 gap-2 ${mobileView === 'list' ? 'hidden lg:flex' : 'flex'}`}>

          {/* ── Sentence header card (in-flow, not absolute) ── */}
          {selectedSentence && (
            <div className="flex flex-col items-center gap-0 pointer-events-none flex-shrink-0 px-2 pt-2">

              {/* Discourse context sentence (faded, smaller) */}
              {selectedSentence.discourseContext && (
                <>
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    key={`ctx-${selectedSentence.id}`}
                    className="glass-panel px-6 py-3 rounded-2xl flex flex-col items-center shadow-lg border border-slate-600/25 bg-slate-900/50 backdrop-blur-md w-full max-w-xl"
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
                  <div className="flex flex-col items-center gap-0.5 my-1 opacity-40">
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
                key={selectedSentence.id}
                className="glass-panel px-6 sm:px-10 py-4 sm:py-5 rounded-3xl flex flex-col items-center shadow-2xl border border-slate-500/30 bg-slate-900/80 backdrop-blur-xl w-full max-w-xl"
              >
                <RubyText hanzi={selectedSentence.chinese} pinyin={selectedSentence.pinyin} large displayFont className="!text-2xl sm:!text-4xl shadow-sm" />
                <div className="mt-3 text-xs sm:text-sm text-slate-300 italic font-medium tracking-wide">"{selectedSentence.translation}"</div>
              </motion.div>

              {/* Connector arrow pointing down toward tree root */}
              <div className="flex flex-col items-center gap-0 mt-1 opacity-30">
                <div className="w-px h-5 bg-gradient-to-b from-purple-400 to-transparent" />
                <svg width="10" height="6" viewBox="0 0 10 6" className="fill-purple-400">
                  <path d="M5 6 L0 0 L10 0 Z" />
                </svg>
              </div>
            </div>
          )}

          {/* Canvas */}
          <div className="flex-1 min-h-0 w-full relative z-0">
            <SyntaxTree tree={selectedSentence?.tree} />
          </div>
        </div>

      </main>
    </div>
  );
}

export default App;

