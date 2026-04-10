import { useState, useMemo, useCallback, useRef, lazy, Suspense, useEffect } from 'react';
import { Info, Network, List, PanelLeftClose, PanelLeftOpen, Scroll, Loader2, Languages } from 'lucide-react';
import { Analytics } from '@vercel/analytics/react';
import { SENTENCE_CATEGORIES, CATEGORY_DESCRIPTIONS } from './data/categories';
import { CLASSICAL_CATEGORIES, CLASSICAL_CATEGORY_DESCRIPTIONS } from './data/classicalCategories';
import { loadModernSentences, loadClassicalSentences, type SentenceDataset } from './data/sentenceLoader';
import { SyntaxTree } from './components/SyntaxTree';
import { SentenceSidebar } from './components/SentenceSidebar';
import { SentenceHeader } from './components/SentenceHeader';
import { ClassicalThemeProvider } from './components/ClassicalThemeProvider';
import { AppModeProvider } from './contexts/AppModeContext';
import { useLanguage } from './contexts/LanguageContext';
import { i18n } from './i18n/strings';
import { generatePrintSheet, downloadTreePNG } from './utils/generateStudySheet';

// ── Lazy-loaded components (code-split into separate chunks) ──
const GrammarGuide = lazy(() => import('./components/GrammarGuide').then(m => ({ default: m.GrammarGuide })));
const ClassicalGrammarGuide = lazy(() => import('./components/ClassicalGrammarGuide').then(m => ({ default: m.ClassicalGrammarGuide })));
const InkWashTransition = lazy(() => import('./components/InkWashTransition'));

// ── Empty dataset placeholder (used while loading) ──
const EMPTY_DATASET: SentenceDataset = {
  sentences: [],
  byId: new Map(),
  sorted: [],
  indexById: new Map(),
};

function App() {
  const [appMode, setAppMode] = useState<'modern' | 'classical'>('modern');
  const [modernSelectedId, setModernSelectedId] = useState<string>('');
  const [classicalSelectedId, setClassicalSelectedId] = useState<string>('');
  const [notesOpen, setNotesOpen] = useState(false);
  const [mobileView, setMobileView] = useState<'list' | 'tree' | 'guide'>('tree');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [sidebarTab, setSidebarTab] = useState<'sentences' | 'guide'>('sentences');

  // ── Lazy-loaded sentence datasets ──
  const [modernData, setModernData] = useState<SentenceDataset>(EMPTY_DATASET);
  const [classicalData, setClassicalData] = useState<SentenceDataset>(EMPTY_DATASET);
  const [modernLoaded, setModernLoaded] = useState(false);
  const [classicalLoaded, setClassicalLoaded] = useState(false);

  // ── Ink wash transition state ──
  const [inkTransitionActive, setInkTransitionActive] = useState(false);
  const [inkTargetMode, setInkTargetMode] = useState<'modern' | 'classical'>('classical');
  const transitionLock = useRef(false);

  // ── Track whether hash has been processed ──
  const hashProcessed = useRef(false);

  const isClassical = appMode === 'classical';
  const { language, toggleLanguage } = useLanguage();

  // ── Load modern data on mount ──
  useEffect(() => {
    loadModernSentences().then(data => {
      setModernData(data);
      // Set default selected ID only if one hasn't been set (e.g. by hash restore)
      setModernSelectedId(prev => prev || data.sentences[0]?.id || '');
      setModernLoaded(true);
    });
  }, []);

  // ── Load classical data on first switch to classical mode ──
  useEffect(() => {
    if (isClassical && !classicalLoaded) {
      loadClassicalSentences().then(data => {
        setClassicalData(data);
        setClassicalSelectedId(prev => prev || data.sentences[0]?.id || '');
        setClassicalLoaded(true);
      });
    }
  }, [isClassical, classicalLoaded]);

  // ── URL hash sync ──
  // On mount + after data loads: restore selectedId from hash if valid
  useEffect(() => {
    if (hashProcessed.current) return;
    const hash = window.location.hash.slice(1);
    if (!hash) return;

    // If modern data is loaded, check it
    if (modernLoaded && modernData.byId.has(hash)) {
      setModernSelectedId(hash);
      if (appMode !== 'modern') setAppMode('modern');
      hashProcessed.current = true;
      return;
    }

    // If classical data isn't loaded yet, load it to check
    if (!classicalLoaded) {
      loadClassicalSentences().then(data => {
        setClassicalData(data);
        setClassicalSelectedId(prev => prev || data.sentences[0]?.id || '');
        setClassicalLoaded(true);
        if (data.byId.has(hash)) {
          setClassicalSelectedId(hash);
          setAppMode('classical');
          hashProcessed.current = true;
        }
      });
      return;
    }

    // Classical is already loaded
    if (classicalData.byId.has(hash)) {
      setClassicalSelectedId(hash);
      if (appMode !== 'classical') setAppMode('classical');
      hashProcessed.current = true;
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modernLoaded, classicalLoaded]);

  // Active data based on mode
  const activeData = isClassical ? classicalData : modernData;
  const dataLoaded = isClassical ? classicalLoaded : modernLoaded;
  const selectedId = isClassical ? classicalSelectedId : modernSelectedId;
  const setSelectedId = isClassical ? setClassicalSelectedId : setModernSelectedId;
  const activeCategories = isClassical ? CLASSICAL_CATEGORIES : SENTENCE_CATEGORIES;
  const activeCategoryDescriptions = isClassical ? CLASSICAL_CATEGORY_DESCRIPTIONS : CATEGORY_DESCRIPTIONS;

  const selectedSentence = useMemo(() => activeData.byId.get(selectedId), [activeData, selectedId]);

  // On every selectedId change: update hash
  useEffect(() => {
    if (selectedId) window.location.hash = selectedId;
  }, [selectedId]);

  // Category-local position for the n / N counter in the header
  const { sentenceIndex, categoryTotal } = useMemo(() => {
    if (!selectedSentence) return { sentenceIndex: 1, categoryTotal: 1 };
    const catSentences = activeData.sorted.filter(s => s.category === selectedSentence.category);
    const idx = catSentences.findIndex(s => s.id === selectedSentence.id);
    return { sentenceIndex: idx + 1, categoryTotal: catSentences.length };
  }, [selectedSentence, activeData.sorted]);

  // Global boundary checks for prev/next button enabled state
  const globalIdx = activeData.indexById.get(selectedId) ?? 0;
  const hasPrev = globalIdx > 0;
  const hasNext = globalIdx < activeData.sorted.length - 1;

  const handleSelectSentence = useCallback((id: string) => {
    setSelectedId(id);
    setMobileView('tree');
    setSidebarTab('sentences');
  }, [setSelectedId]);

  const handleSwipePrev = useCallback(() => {
    const idx = activeData.indexById.get(selectedId) ?? -1;
    if (idx > 0) setSelectedId(activeData.sorted[idx - 1].id);
  }, [selectedId, activeData, setSelectedId]);

  const handleSwipeNext = useCallback(() => {
    const idx = activeData.indexById.get(selectedId) ?? -1;
    if (idx !== -1 && idx < activeData.sorted.length - 1) setSelectedId(activeData.sorted[idx + 1].id);
  }, [selectedId, activeData, setSelectedId]);

  const handleRandom = useCallback(() => {
    if (activeData.sorted.length <= 1) return;
    const currentIdx = activeData.indexById.get(selectedId) ?? 0;
    let nextIdx: number;
    do { nextIdx = Math.floor(Math.random() * activeData.sorted.length); } while (nextIdx === currentIdx);
    setSelectedId(activeData.sorted[nextIdx].id);
  }, [selectedId, activeData, setSelectedId]);

  const handlePrint = useCallback(() => {
    if (!selectedSentence) return;
    generatePrintSheet(selectedSentence, isClassical);
  }, [selectedSentence, isClassical]);

  const handleDownloadPNG = useCallback(() => {
    if (!selectedSentence) return;
    downloadTreePNG(selectedSentence, isClassical);
  }, [selectedSentence, isClassical]);

  const toggleMode = useCallback(() => {
    if (transitionLock.current) return;
    transitionLock.current = true;
    const nextMode = appMode === 'modern' ? 'classical' : 'modern';
    setInkTargetMode(nextMode);
    setInkTransitionActive(true);

    // Pre-load classical data during the transition animation
    if (nextMode === 'classical' && !classicalLoaded) {
      loadClassicalSentences().then(data => {
        setClassicalData(data);
        setClassicalSelectedId(prev => prev || data.sentences[0]?.id || '');
        setClassicalLoaded(true);
      });
    }

    // Switch mode while overlay is fully opaque (fade-in is 450ms).
    // Extra buffer lets React Flow re-render + fitView settle before reveal.
    setTimeout(() => {
      setAppMode(nextMode);
      setNotesOpen(false);
    }, 700);

    // Begin exit: deactivate overlay so AnimatePresence runs exit animation
    setTimeout(() => {
      setInkTransitionActive(false);
    }, 1200);

    // Release lock after exit animation completes (exit duration: 550ms)
    setTimeout(() => {
      transitionLock.current = false;
    }, 1800);
  }, [appMode, classicalLoaded]);

  return (
    <>
      <Suspense fallback={null}>
        <InkWashTransition active={inkTransitionActive} targetMode={inkTargetMode} />
      </Suspense>
      <AppModeProvider value={isClassical}>
      <ClassicalThemeProvider active={isClassical}>
        <div className={`h-dvh-safe text-slate-100 flex flex-col font-sans relative overflow-hidden ${isClassical ? 'bg-stone-950' : 'bg-slate-950'}`}>
        {/* Background gradients */}
        {isClassical ? (
          <>
            <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-amber-900/10 blur-[150px] pointer-events-none" />
            <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-orange-900/10 blur-[150px] pointer-events-none" />
          </>
        ) : (
          <>
            <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-900/10 blur-[150px] pointer-events-none" />
            <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-900/10 blur-[150px] pointer-events-none" />
          </>
        )}

        {/* Header */}
        <header className={`glass-panel z-10 border-b px-6 py-4 flex items-center justify-between sticky top-0 ${isClassical ? 'border-stone-700/50 bg-stone-900/40' : 'border-slate-700/50 bg-slate-900/40'}`}>
          <div className="flex items-center space-x-4">
            <div className={`p-2.5 rounded-xl shadow-lg ring-1 ring-white/20 ${isClassical ? 'bg-gradient-to-br from-amber-500 to-orange-600' : 'bg-gradient-to-br from-purple-500 to-blue-600'}`}>
              {isClassical ? (
                <Scroll className="w-6 h-6 text-white" />
              ) : (
                <Network className="w-6 h-6 text-white" />
              )}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className={`text-xl font-extrabold bg-clip-text text-transparent tracking-tight ${isClassical ? 'bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400 font-chinese-display' : 'bg-gradient-to-r from-purple-400 via-blue-400 to-emerald-400'}`}>
                  {isClassical ? '古文探秘 · Classical Texts' : 'Mandarin Syntax Explorer'}
                </h1>
                <button
                  onClick={toggleMode}
                  className={`p-1.5 rounded-lg transition-all duration-300 ${isClassical
                    ? 'text-amber-400/60 hover:text-amber-300 hover:bg-amber-500/10'
                    : 'text-slate-500/40 hover:text-amber-400 hover:bg-amber-500/10'
                    }`}
                  title={isClassical ? 'Return to Modern Mandarin' : 'Explore Classical Chinese'}
                >
                  <Scroll className="w-4 h-4" />
                </button>
              </div>
              <p className={`text-xs font-medium ${isClassical ? 'text-stone-400' : 'text-slate-400'}`}>
                {isClassical ? i18n.NAV_CLASSICAL[language] : i18n.NAV_MODERN[language]}
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={toggleLanguage}
              className={`hidden sm:flex items-center text-xs font-semibold tracking-wide text-white px-4 py-2 rounded-full border shadow-inner cursor-pointer transition-colors ${
                isClassical 
                  ? 'bg-amber-900/60 border-amber-600/50 hover:bg-amber-800/80 hover:border-amber-500/70' 
                  : 'bg-slate-700/60 border-slate-600/50 hover:bg-slate-600/80 hover:border-slate-500/70'
              }`}
              title="Toggle Language"
            >
              <Languages className={`w-4 h-4 mr-2 ${isClassical ? 'text-amber-400' : 'text-slate-300'}`} />
              {i18n.TOGGLE_LANGUAGE[language]}
            </button>
          </div>
        </header>

        {/* Mobile tab bar — only visible on < lg screens */}
        <div className="lg:hidden flex border-b border-slate-700/50 bg-slate-900/60 z-10">
          <button
            onClick={() => setMobileView('tree')}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-[11px] font-bold uppercase tracking-widest transition-colors border-b-2 ${mobileView === 'tree'
              ? isClassical ? 'text-amber-300 border-amber-500 bg-amber-500/10' : 'text-purple-300 border-purple-500 bg-purple-500/10'
              : 'text-slate-400 border-transparent hover:text-slate-200'
              }`}
          >
            <Network className="w-3.5 h-3.5" />
            Tree
          </button>
          <button
            onClick={() => setMobileView('list')}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-[11px] font-bold uppercase tracking-widest transition-colors border-b-2 ${mobileView === 'list'
              ? isClassical ? 'text-amber-300 border-amber-500 bg-amber-500/10' : 'text-purple-300 border-purple-500 bg-purple-500/10'
              : 'text-slate-400 border-transparent hover:text-slate-200'
              }`}
          >
            <List className="w-3.5 h-3.5" />
            Sentences
          </button>
          <button
            onClick={() => setMobileView('guide')}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-[11px] font-bold uppercase tracking-widest transition-colors border-b-2 ${mobileView === 'guide'
              ? isClassical ? 'text-amber-300 border-amber-500 bg-amber-500/10' : 'text-blue-300 border-blue-500 bg-blue-500/10'
              : 'text-slate-400 border-transparent hover:text-slate-200'
              }`}
          >
            <Info className="w-3.5 h-3.5" />
            Guide
          </button>
        </div>

        {/* Main Layout */}
        <main className="flex-1 min-h-0 flex flex-col lg:flex-row p-4 sm:p-6 pb-8 gap-6 z-10 overflow-hidden">

          {/* Sidebar — hidden on mobile when tree or guide is active */}
          <div
            className={`flex flex-col gap-4 flex-shrink-0 h-full transition-all duration-300 ease-in-out ${mobileView !== 'list' ? 'hidden lg:flex' : 'flex'} ${sidebarOpen ? 'lg:w-96' : 'lg:w-0 lg:overflow-hidden lg:opacity-0'}`}
          >
            {/* Desktop sidebar tabs */}
            <div className="hidden lg:flex border-b border-slate-700/50 mb-3 gap-1">
              <button
                onClick={() => setSidebarTab('sentences')}
                className={`flex-1 flex items-center justify-center gap-1.5 py-2 text-[10px] font-bold uppercase tracking-widest transition-colors border-b-2 rounded-t-lg ${sidebarTab === 'sentences'
                  ? isClassical ? 'text-amber-300 border-amber-500 bg-amber-500/10' : 'text-purple-300 border-purple-500 bg-purple-500/10'
                  : 'text-slate-400 border-transparent hover:text-slate-200'
                  }`}
              >
                <List className="w-3.5 h-3.5" />
                {isClassical ? 'Quotes' : 'Sentences'}
              </button>
              <button
                onClick={() => setSidebarTab('guide')}
                className={`flex-1 flex items-center justify-center gap-1.5 py-2 text-[10px] font-bold uppercase tracking-widest transition-colors border-b-2 rounded-t-lg ${sidebarTab === 'guide'
                  ? isClassical ? 'text-amber-300 border-amber-500 bg-amber-500/10' : 'text-blue-300 border-blue-500 bg-blue-500/10'
                  : 'text-slate-400 border-transparent hover:text-slate-200'
                  }`}
              >
                <Info className="w-3.5 h-3.5" />
                Guide
              </button>
            </div>

            {/* Tab content */}
            {sidebarTab === 'sentences' ? (
              dataLoaded ? (
                <SentenceSidebar
                  selectedId={selectedId}
                  onSelectSentence={handleSelectSentence}
                  sentences={activeData.sentences}
                  categories={activeCategories}
                  categoryDescriptions={activeCategoryDescriptions}
                />
              ) : (
                <div className="glass-panel rounded-3xl p-5 flex flex-col items-center justify-center h-full border border-slate-700/50 shadow-2xl">
                  <Loader2 className={`w-6 h-6 animate-spin ${isClassical ? 'text-amber-400' : 'text-purple-400'}`} />
                  <p className="text-xs text-slate-400 mt-3">Loading sentences…</p>
                </div>
              )
            ) : (
              <div className="glass-panel rounded-3xl p-5 flex flex-col h-full overflow-hidden border border-slate-700/50 shadow-2xl relative">
                <div className={`absolute top-0 right-0 w-32 h-32 blur-3xl rounded-full ${isClassical ? 'bg-amber-500/10' : 'bg-blue-500/10'}`} />
                <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-5 flex items-center">
                  {isClassical ? <Scroll className="w-4 h-4 mr-2" /> : <BookA className="w-4 h-4 mr-2" />}
                  {isClassical ? 'Classical Grammar Guide' : 'Framework Guide'}
                </h2>
                <div className="flex-1 min-h-0 overflow-y-auto pr-2 custom-scrollbar">
                  <Suspense fallback={<div className="text-xs text-slate-500 animate-pulse">Loading guide…</div>}>
                    {isClassical ? <ClassicalGrammarGuide /> : <GrammarGuide tab="framework" />}
                  </Suspense>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar toggle — desktop only */}
          <button
            onClick={() => setSidebarOpen(o => !o)}
            className="hidden lg:flex items-center justify-center w-6 h-12 self-center -ml-4 rounded-r-xl bg-slate-800/80 border border-l-0 border-slate-700/60 text-slate-400 hover:text-slate-200 hover:bg-slate-700/80 transition-all duration-200 z-10 flex-shrink-0"
            title={sidebarOpen ? 'Collapse sidebar' : 'Expand sidebar'}
          >
            {sidebarOpen ? <PanelLeftClose className="w-3.5 h-3.5" /> : <PanelLeftOpen className="w-3.5 h-3.5" />}
          </button>

          {/* Visualization Pane — hidden on mobile when list or guide is active */}
          <div className={`flex-1 flex flex-col min-h-0 gap-2 touch-pan-y ${mobileView !== 'tree' ? 'hidden lg:flex' : 'flex'}`}>

            {/* ── Sentence header card + Persistent Notes  ── */}
            {selectedSentence && (
              <SentenceHeader
                sentence={selectedSentence}
                notesOpen={notesOpen}
                onToggleNotes={() => setNotesOpen(o => !o)}
                onSwipePrev={handleSwipePrev}
                onSwipeNext={handleSwipeNext}
                sentenceIndex={sentenceIndex}
                categoryTotal={categoryTotal}
                hasPrev={hasPrev}
                hasNext={hasNext}
              />
            )}

            {/* Canvas */}
            <div className="flex-1 min-h-0 w-full relative z-0">
              {dataLoaded ? (
                <SyntaxTree tree={selectedSentence?.tree} isVisible={mobileView === 'tree'} onRandom={handleRandom} onPrint={handlePrint} onDownloadPNG={handleDownloadPNG} />
              ) : (
                <div className="flex items-center justify-center h-full">
                  <Loader2 className={`w-8 h-8 animate-spin ${isClassical ? 'text-amber-400/50' : 'text-purple-400/50'}`} />
                </div>
              )}
            </div>
          </div>

          {/* ── Mobile Guide Pane ── */}
          {mobileView === 'guide' && (
            <div className="lg:hidden flex-1 min-h-0 overflow-y-auto custom-scrollbar glass-panel rounded-3xl border border-slate-700/50 shadow-2xl p-5">
              <div className="mb-4 flex items-center gap-2">
                {isClassical ? <Scroll className="w-5 h-5 text-amber-400" /> : <BookA className="w-5 h-5 text-fuchsia-400" />}
                <h3 className="text-sm font-bold text-slate-100 uppercase tracking-widest">
                  {isClassical ? 'Classical Grammar' : 'The Framework'}
                </h3>
              </div>
              <Suspense fallback={<div className="text-xs text-slate-500 animate-pulse">Loading guide…</div>}>
                {isClassical ? <ClassicalGrammarGuide /> : <GrammarGuide tab="framework" />}
              </Suspense>
            </div>
          )}

        </main>
        <Analytics />
      </div>
      </ClassicalThemeProvider>
      </AppModeProvider>
    </>
  );
}

export default App;
