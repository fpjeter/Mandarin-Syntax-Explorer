import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, BookOpen } from 'lucide-react';
import { glossary } from '../data/glossary';
import { RoleTooltip } from './RoleTooltip';
import type { GrammarRole } from '../types/grammar';

interface GlossaryPanelProps {
    isOpen: boolean;
    onClose: () => void;
}

export const GlossaryPanel: React.FC<GlossaryPanelProps> = ({ isOpen, onClose }) => {
    // Sort terms alphabetically for easy browsing
    const terms = (Object.keys(glossary) as GrammarRole[]).sort((a, b) => a.localeCompare(b));

    // Group terms conceptually (e.g., Phrases vs core roles vs modifiers) could be another option, 
    // but alphabetical is often easiest for a quick reference glossary.

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm z-40"
                    />

                    {/* Sliding Panel */}
                    <motion.div
                        initial={{ x: '100%', opacity: 0.5 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: '100%', opacity: 0.5 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="absolute top-0 right-0 h-full w-full sm:w-[400px] sm:border-l border-slate-700/50 bg-slate-900/95 shadow-2xl z-50 flex flex-col pt-safe-top pb-safe-bottom"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-700/50 bg-slate-800/40">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-fuchsia-500/20 text-fuchsia-400 rounded-lg">
                                    <BookOpen className="w-5 h-5" />
                                </div>
                                <div>
                                    <h2 className="text-sm font-bold text-slate-100 uppercase tracking-widest">Grammar Glossary</h2>
                                    <p className="text-[10px] text-slate-400">Plain-English definitions</p>
                                </div>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-slate-700/50 rounded-full transition-colors text-slate-400 hover:text-slate-200"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-6">
                            {terms.map((term) => {
                                const entry = glossary[term];
                                return (
                                    <div key={term} className="group">
                                        <div className="flex items-baseline gap-2 mb-1.5">
                                            <h3 className="text-sm font-bold text-slate-200">
                                                <RoleTooltip role={term}>{term}</RoleTooltip>
                                            </h3>
                                            <span className="text-[10px] uppercase tracking-wide text-fuchsia-400 font-semibold">— {entry.headline}</span>
                                        </div>
                                        <p className="text-[11px] text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                                            {entry.detail}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
