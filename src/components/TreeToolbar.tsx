import React from 'react';
import { Eye, EyeOff, Maximize2, Minimize2, BookOpen, Shuffle, Printer, ImageDown } from 'lucide-react';
import { useIsClassical } from '../contexts/AppModeContext';

interface TreeToolbarProps {
    onExpandAll: () => void;
    onCollapseAll: () => void;
    showGhost: boolean;
    onToggleGhost: () => void;
    treeHasProDrop: boolean;
    onOpenGlossary: () => void;
    onRandom: () => void;
    onPrint: () => void;
    onDownloadPNG: () => void;
}

/** Toolbar with expand/collapse, ghost toggle, glossary, random, and print buttons. */
export const TreeToolbar: React.FC<TreeToolbarProps> = ({
    onExpandAll,
    onCollapseAll,
    showGhost,
    onToggleGhost,
    treeHasProDrop,
    onOpenGlossary,
    onRandom,
    onPrint,
    onDownloadPNG,
}) => {
    const isClassical = useIsClassical();

    return (
        <div className="absolute top-3 right-3 z-20 pointer-events-auto">
            <div className="glass-panel rounded-2xl border border-slate-700/60 p-1.5 flex items-center gap-1 shadow-2xl">
                <button
                    onClick={onExpandAll}
                    className="flex items-center gap-1.5 px-2 py-1.5 rounded-xl text-[11px] font-semibold tracking-wide transition-all duration-200 bg-slate-800/60 text-slate-400 hover:bg-slate-700/80 hover:text-slate-200"
                    title="Expand all nodes"
                >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span className="hidden xl:inline">Expand All</span>
                </button>
                <button
                    onClick={onCollapseAll}
                    className="flex items-center gap-1.5 px-2 py-1.5 rounded-xl text-[11px] font-semibold tracking-wide transition-all duration-200 bg-slate-800/60 text-slate-400 hover:bg-slate-700/80 hover:text-slate-200"
                    title="Collapse to root"
                >
                    <Minimize2 className="w-3.5 h-3.5" />
                    <span className="hidden xl:inline">Collapse All</span>
                </button>

                {/* Pro-drop toggle */}
                {treeHasProDrop && (
                    <button
                        onClick={onToggleGhost}
                        className={`
                            flex items-center gap-1.5 px-2 py-1.5 rounded-xl
                            text-[11px] font-semibold tracking-wide transition-all duration-200
                            ${showGhost
                                ? isClassical ? 'bg-stone-700/80 text-amber-300' : 'bg-slate-700/80 text-purple-300'
                                : 'bg-slate-800/60 text-slate-400 hover:bg-slate-800/80'
                            }
                        `}
                        title={showGhost ? 'Hide implied (pro-dropped) subjects' : 'Show implied (pro-dropped) subjects'}
                    >
                        {showGhost ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
                        <span className="hidden xl:inline">{showGhost ? 'Implied On' : 'Implied Off'}</span>
                    </button>
                )}

                {/* Random sentence */}
                <button
                    onClick={onRandom}
                    className="flex items-center gap-1.5 px-2 py-1.5 rounded-xl text-[11px] font-semibold tracking-wide transition-all duration-200 bg-slate-800/60 text-slate-400 hover:bg-slate-700/80 hover:text-slate-200"
                    title="Random sentence"
                >
                    <Shuffle className="w-3.5 h-3.5" />
                    <span className="hidden xl:inline">Random</span>
                </button>

                {/* Print */}
                <button
                    onClick={onPrint}
                    className="flex items-center gap-1.5 px-2 py-1.5 rounded-xl text-[11px] font-semibold tracking-wide transition-all duration-200 bg-slate-800/60 text-slate-400 hover:bg-slate-700/80 hover:text-slate-200"
                    title="Open printable study sheet"
                >
                    <Printer className="w-3.5 h-3.5" />
                    <span className="hidden xl:inline">Print</span>
                </button>

                {/* Download PNG */}
                <button
                    onClick={onDownloadPNG}
                    className="flex items-center gap-1.5 px-2 py-1.5 rounded-xl text-[11px] font-semibold tracking-wide transition-all duration-200 bg-slate-800/60 text-slate-400 hover:bg-slate-700/80 hover:text-slate-200"
                    title="Download tree as PNG image"
                >
                    <ImageDown className="w-3.5 h-3.5" />
                    <span className="hidden xl:inline">PNG</span>
                </button>
                {/* Divider */}
                <div className="w-px h-5 bg-slate-700/60 mx-0.5" />

                {/* Glossary */}
                <button
                    onClick={onOpenGlossary}
                    className={`flex items-center gap-1.5 px-2 py-1.5 rounded-xl text-[11px] font-semibold tracking-wide transition-all duration-200 ${isClassical ? 'bg-amber-900/30 text-amber-300 hover:bg-amber-900/50' : 'bg-fuchsia-900/30 text-fuchsia-300 hover:bg-fuchsia-900/50'}`}
                    title="Open Grammar Glossary"
                >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span className="hidden xl:inline">Glossary</span>
                </button>
            </div>
        </div>
    );
};
