import { useState, useMemo, useCallback } from 'react';
import { BookA, Info, Network, List, PanelLeftClose, PanelLeftOpen } from 'lucide-react';
import { Analytics } from '@vercel/analytics/react';
import { sampleSentences } from './data/sentences';
import { SyntaxTree } from './components/SyntaxTree';
import { GrammarGuide } from './components/GrammarGuide';
import { SentenceSidebar } from './components/SentenceSidebar';
import { SentenceHeader } from './components/SentenceHeader';

// O(1) sentence lookup — replaces scattered .find() calls (item #1)
const sentenceById = new Map(sampleSentences.map(s => [s.id, s]));

function App() {
  const [selectedId, setSelectedId] = useState<string>(sampleSentences[0].id);
  const [notesOpen, setNotesOpen] = useState(false);
  const [mobileView, setMobileView] = useState<'list' | 'tree' | 'guide'>('guide');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const selectedSentence = useMemo(() => sentenceById.get(selectedId), [selectedId]);

  const handleSelectSentence = useCallback((id: string) => {
    setSelectedId(id);
    // On mobile, auto-switch to the tree view
    setMobileView('tree');
  }, []);

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
      <main className="flex-1 min-h-0 flex flex-col lg:flex-row p-4 sm:p-6 pb-8 gap-6 z-10 overflow-hidden">

        {/* Sidebar — hidden on mobile when tree or guide is active */}
        <div
          className={`flex flex-col gap-4 flex-shrink-0 h-full transition-all duration-300 ease-in-out ${mobileView !== 'list' ? 'hidden lg:flex' : 'flex'} ${sidebarOpen ? 'lg:w-96' : 'lg:w-0 lg:overflow-hidden lg:opacity-0'}`}
        >
          <SentenceSidebar
            selectedId={selectedId}
            onSelectSentence={handleSelectSentence}
          />
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
        <div className={`flex-1 flex flex-col min-h-0 gap-2 ${mobileView !== 'tree' ? 'hidden lg:flex' : 'flex'}`}>

          {/* ── Sentence header card + Persistent Notes  ── */}
          {selectedSentence && (
            <SentenceHeader
              sentence={selectedSentence}
              notesOpen={notesOpen}
              onToggleNotes={() => setNotesOpen(o => !o)}
            />
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
