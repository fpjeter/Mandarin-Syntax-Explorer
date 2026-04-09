import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Eye, EyeOff, Maximize2, Minimize2, BookOpen, Shuffle, Printer, ImageDown, Settings, Atom } from 'lucide-react';
import { useIsClassical } from '../contexts/AppModeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { i18n } from '../i18n/strings';

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
    /** Semantic mode toggle — only shown for modern Mandarin */
    isSemanticMode?: boolean;
    onToggleSemanticMode?: () => void;
}

/**
 * Collapsible tree toolbar.
 *
 * - Collapsed: a single floating ⚙ button in the top-right corner.
 * - Expanded: a glassmorphism pill-menu fans out horizontally (desktop)
 *   or drops down vertically (mobile < 640px).
 */
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
    isSemanticMode,
    onToggleSemanticMode,
}) => {
    const isClassical = useIsClassical();
    const { language } = useLanguage();
    const [isExpanded, setIsExpanded] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Close the toolbar when clicking outside
    const handleClickOutside = useCallback((e: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
            setIsExpanded(false);
        }
    }, []);

    useEffect(() => {
        if (isExpanded) {
            document.addEventListener('mousedown', handleClickOutside);
            return () => document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [isExpanded, handleClickOutside]);

    const btnBase = 'flex items-center gap-1.5 px-2 py-1.5 rounded-xl text-[11px] font-semibold tracking-wide transition-all duration-200';
    const btnDefault = `${btnBase} bg-slate-800/60 text-slate-400 hover:bg-slate-700/80 hover:text-slate-200`;

    return (
        <div ref={containerRef} className="absolute top-3 right-3 z-20 pointer-events-auto">
            {/* Collapsed: floating trigger button */}
            <button
                onClick={() => setIsExpanded(e => !e)}
                className={`flex items-center justify-center w-9 h-9 rounded-xl transition-all duration-300 border shadow-lg ${
                    isExpanded
                        ? isClassical
                            ? 'bg-amber-900/60 border-amber-500/50 text-amber-300 rotate-90 shadow-[0_0_12px_rgba(245,158,11,0.3)]'
                            : 'bg-purple-900/60 border-purple-500/50 text-purple-300 rotate-90 shadow-[0_0_12px_rgba(168,85,247,0.3)]'
                        : 'glass-panel border-slate-700/60 text-slate-400 hover:text-slate-200 hover:bg-slate-700/80'
                }`}
                title={isExpanded ? 'Close toolbar' : 'Open toolbar'}
            >
                <Settings className="w-4 h-4 transition-transform duration-300" />
            </button>

            {/* Expanded: pill-menu */}
            <div
                className={`
                    absolute right-0 mt-2
                    glass-panel rounded-2xl border border-slate-700/60 shadow-2xl
                    transition-all duration-300 ease-out origin-top-right
                    ${isExpanded
                        ? 'opacity-100 scale-100 pointer-events-auto'
                        : 'opacity-0 scale-90 pointer-events-none'
                    }
                    /* Horizontal on sm+, vertical on mobile */
                    flex sm:flex-row flex-col
                    p-1.5 gap-1
                `}
            >
                {/* Expand / Collapse */}
                <button onClick={onExpandAll} className={btnDefault} title={i18n.TOOLBAR_EXPAND[language]}>
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span className="hidden xl:inline">{i18n.TOOLBAR_EXPAND[language]}</span>
                </button>
                <button onClick={onCollapseAll} className={btnDefault} title={i18n.TOOLBAR_COLLAPSE[language]}>
                    <Minimize2 className="w-3.5 h-3.5" />
                    <span className="hidden xl:inline">{i18n.TOOLBAR_COLLAPSE[language]}</span>
                </button>

                {/* Semantic Mode — only for modern Mandarin */}
                {!isClassical && onToggleSemanticMode && (
                    <button
                        onClick={onToggleSemanticMode}
                        className={`${btnBase} ${
                            isSemanticMode
                                ? 'bg-cyan-900/60 text-cyan-300 ring-1 ring-cyan-500/30'
                                : 'bg-slate-800/60 text-slate-400 hover:bg-slate-700/80 hover:text-slate-200'
                        }`}
                        title={i18n.TOOLBAR_SEMANTIC[language]}
                    >
                        <Atom className={`w-3.5 h-3.5 ${isSemanticMode ? 'text-cyan-400' : ''}`} />
                        <span className="hidden xl:inline">{isSemanticMode ? 'θ On' : 'θ Off'}</span>
                    </button>
                )}

                {/* Implied Subject toggle */}
                {treeHasProDrop && (
                    <button
                        onClick={onToggleGhost}
                        className={`${btnBase} ${
                            showGhost
                                ? isClassical ? 'bg-stone-700/80 text-amber-300' : 'bg-slate-700/80 text-purple-300'
                                : 'bg-slate-800/60 text-slate-400 hover:bg-slate-800/80'
                        }`}
                        title={i18n.TOOLBAR_GHOST[language]}
                    >
                        {showGhost ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
                        <span className="hidden xl:inline">{i18n.TOOLBAR_GHOST[language]}</span>
                    </button>
                )}

                {/* Divider */}
                <div className="sm:w-px sm:h-5 sm:self-center w-full h-px bg-slate-700/60 mx-0.5" />

                {/* Random sentence */}
                <button onClick={onRandom} className={btnDefault} title="Random sentence">
                    <Shuffle className="w-3.5 h-3.5" />
                    <span className="hidden xl:inline">Random</span>
                </button>

                {/* Print */}
                <button onClick={onPrint} className={btnDefault} title={i18n.TOOLBAR_PRINT[language]}>
                    <Printer className="w-3.5 h-3.5" />
                    <span className="hidden xl:inline">{i18n.TOOLBAR_PRINT[language]}</span>
                </button>

                {/* Download PNG */}
                <button onClick={onDownloadPNG} className={btnDefault} title={i18n.TOOLBAR_PNG[language]}>
                    <ImageDown className="w-3.5 h-3.5" />
                    <span className="hidden xl:inline">{i18n.TOOLBAR_PNG[language]}</span>
                </button>

                {/* Divider */}
                <div className="sm:w-px sm:h-5 sm:self-center w-full h-px bg-slate-700/60 mx-0.5" />

                {/* Glossary */}
                <button
                    onClick={onOpenGlossary}
                    className={`${btnBase} ${isClassical ? 'bg-amber-900/30 text-amber-300 hover:bg-amber-900/50' : 'bg-fuchsia-900/30 text-fuchsia-300 hover:bg-fuchsia-900/50'}`}
                    title={i18n.NAV_GLOSSARY[language]}
                >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span className="hidden xl:inline">{i18n.NAV_GLOSSARY[language]}</span>
                </button>
            </div>
        </div>
    );
};
