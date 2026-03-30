import React, { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { Eye, ChevronDown, Palette, MousePointer2, Layers } from 'lucide-react';
import type { GrammarRole } from '../types/grammar';

// ── Color legend data ──────────────────────────────────────────────────────────

interface RoleSwatchEntry {
    role: GrammarRole;
    label: string;
    bg: string;
    border: string;
    text: string;
    glow?: string;
}

const ROLE_SWATCHES: RoleSwatchEntry[] = [
    { role: 'Sentence', label: 'Sentence (root)', bg: 'bg-slate-800/80', border: 'border-purple-400/60', text: 'text-slate-100', glow: 'shadow-[0_0_16px_rgba(139,92,246,0.3)]' },
    { role: 'Topic', label: 'Topic', bg: 'bg-fuchsia-900/40', border: 'border-fuchsia-500/50', text: 'text-fuchsia-200', glow: 'shadow-[0_0_10px_rgba(217,70,239,0.2)]' },
    { role: 'Comment', label: 'Comment', bg: 'bg-blue-900/40', border: 'border-blue-500/50', text: 'text-blue-200', glow: 'shadow-[0_0_10px_rgba(59,130,246,0.2)]' },
    { role: 'Subject', label: 'Subject', bg: 'bg-indigo-900/40', border: 'border-indigo-600/50', text: 'text-indigo-300' },
    { role: 'Predicate', label: 'Predicate', bg: 'bg-cyan-900/40', border: 'border-cyan-500/50', text: 'text-cyan-200' },
    { role: 'Verb Phrase', label: 'Verb Phrase', bg: 'bg-teal-900/40', border: 'border-teal-500/50', text: 'text-teal-200' },
    { role: 'Object', label: 'Object', bg: 'bg-amber-900/40', border: 'border-amber-600/50', text: 'text-amber-200' },
    { role: 'Adjunct', label: 'Adjunct (modifier)', bg: 'bg-rose-900/40', border: 'border-rose-600/50', text: 'text-rose-300' },
    { role: 'Complement', label: 'Complement', bg: 'bg-violet-900/40', border: 'border-violet-600/50', text: 'text-violet-300' },
];

// ── Stagger animation config ──────────────────────────────────────────────────

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.04,
            delayChildren: 0.1,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, x: -8 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
    },
};

const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 8 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
    },
};

// ── Mini node preview ─────────────────────────────────────────────────────────

const MiniNode: React.FC<{
    bg: string;
    border: string;
    text: string;
    glow?: string;
    label: string;
    dashed?: boolean;
    thickBottom?: boolean;
    faded?: boolean;
}> = ({ bg, border, text, glow, label, dashed, thickBottom, faded }) => (
    <div
        className={`
            inline-flex items-center justify-center rounded-lg px-2.5 py-1
            text-[9px] font-bold uppercase tracking-wide
            border transition-all duration-300
            ${bg} ${text} ${dashed ? 'border-dashed' : ''} ${border}
            ${glow ?? ''}
            ${thickBottom ? 'border-b-2' : ''}
            ${faded ? 'opacity-50' : ''}
        `}
    >
        {label}
    </div>
);

// ── Collapsible section wrapper ───────────────────────────────────────────────

const CollapsibleSection: React.FC<{
    title: string;
    icon: React.ReactNode;
    accentColor: string;
    defaultOpen?: boolean;
    children: React.ReactNode;
}> = ({ title, icon, accentColor, defaultOpen = true, children }) => {
    const [open, setOpen] = useState(defaultOpen);

    return (
        <div className="border border-slate-700/30 rounded-xl overflow-hidden">
            <button
                onClick={() => setOpen(o => !o)}
                className="w-full flex items-center gap-2 px-3 py-2 bg-slate-800/30 hover:bg-slate-800/50 transition-colors group"
            >
                <span className={accentColor}>{icon}</span>
                <span className={`text-[10px] font-bold uppercase tracking-widest flex-1 text-left ${accentColor}`}>
                    {title}
                </span>
                <motion.span
                    animate={{ rotate: open ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="text-slate-500 group-hover:text-slate-300"
                >
                    <ChevronDown className="w-3 h-3" />
                </motion.span>
            </button>
            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="overflow-hidden"
                    >
                        <div className="px-3 py-2.5">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

// ── Ghost node demo ───────────────────────────────────────────────────────────

const GhostNodeDemo: React.FC = () => {
    const [glowing, setGlowing] = useState(false);

    return (
        <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
                <div
                    className={`
                        inline-flex flex-col items-center rounded-lg px-2.5 py-1.5
                        border border-dashed transition-all duration-500 cursor-pointer
                        ${glowing
                            ? 'border-rose-400 shadow-[0_0_24px_rgba(244,63,94,0.5)] opacity-100 ring-2 ring-rose-400/60 bg-slate-900/50'
                            : 'border-rose-500/50 bg-slate-900/30 opacity-60'
                        }
                    `}
                    onMouseEnter={() => setGlowing(true)}
                    onMouseLeave={() => setGlowing(false)}
                    onClick={() => setGlowing(g => !g)}
                >
                    <span className="text-[8px] font-bold uppercase tracking-wide text-rose-400/80 flex items-center gap-1">
                        Subject
                        <span className="text-[7px] font-bold bg-rose-900/30 border border-rose-500/40 px-1 py-0.5 rounded normal-case">
                            implied
                        </span>
                    </span>
                    <span className="text-sm font-bold text-rose-400/60 font-chinese-ui mt-0.5">[我]</span>
                    <span className="text-[7px] text-rose-400/50 italic">implied</span>
                </div>
                <div className="flex-1">
                    <p className="text-[10px] text-slate-300 leading-snug">
                        <strong className="text-rose-300">Dashed border</strong> = dropped pronoun.
                        Hover to see the <strong className="text-rose-300">co-reference glow</strong> linking it to the Topic.
                    </p>
                </div>
            </div>
        </div>
    );
};

// ── Expand/collapse demo ──────────────────────────────────────────────────────

const ExpandCollapseDot: React.FC = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="flex items-center gap-3">
            <div className="flex flex-col items-center gap-1.5">
                {/* Mini node with a pulse dot */}
                <div className="relative inline-flex items-center justify-center rounded-lg px-2.5 py-1 bg-teal-900/40 text-teal-200 border border-teal-500/50 text-[9px] font-bold uppercase tracking-wide cursor-pointer"
                    onClick={() => setExpanded(e => !e)}
                >
                    Verb Phrase
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
                        {!expanded && (
                            <span className="absolute inset-0 rounded-full bg-slate-400/30 animate-ping" style={{ width: 12, height: 12, top: -1, left: -1 }} />
                        )}
                        <div className="relative w-[10px] h-[10px] bg-slate-800 rounded-full border border-slate-500 flex items-center justify-center">
                            <span className="text-[7px] text-slate-300 leading-none">{expanded ? '−' : '+'}</span>
                        </div>
                    </div>
                </div>
                {/* Expanded children preview */}
                <AnimatePresence>
                    {expanded && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="flex gap-1 mt-2"
                        >
                            <div className="rounded px-1.5 py-0.5 bg-green-900/40 text-green-300 border border-green-600/50 text-[7px] font-bold uppercase">
                                Verb
                            </div>
                            <div className="rounded px-1.5 py-0.5 bg-amber-900/40 text-amber-200 border border-amber-600/50 text-[7px] font-bold uppercase">
                                Object
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            <div className="flex-1">
                <p className="text-[10px] text-slate-300 leading-snug">
                    <strong className="text-slate-200">Pulsing dot</strong> = tap to reveal children.
                    Click the mini node to try it!
                </p>
            </div>
        </div>
    );
};

// ── Main TreeVisualKey component ──────────────────────────────────────────────

export const TreeVisualKey: React.FC = () => {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-3"
        >
            {/* ── 1. Color Legend ── */}
            <motion.div variants={sectionVariants}>
                <CollapsibleSection
                    title="Node Colors"
                    icon={<Palette className="w-3.5 h-3.5" />}
                    accentColor="text-violet-400"
                    defaultOpen={true}
                >
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-wrap gap-1.5"
                    >
                        {ROLE_SWATCHES.map(swatch => (
                            <motion.div key={swatch.role} variants={itemVariants}>
                                <MiniNode
                                    bg={swatch.bg}
                                    border={swatch.border}
                                    text={swatch.text}
                                    glow={swatch.glow}
                                    label={swatch.label}
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                    <p className="text-[9px] text-slate-500 mt-2 italic">
                        Each role has a unique color so you can scan the tree structure at a glance.
                    </p>
                </CollapsibleSection>
            </motion.div>

            {/* ── 2. Special Nodes ── */}
            <motion.div variants={sectionVariants}>
                <CollapsibleSection
                    title="Special Nodes"
                    icon={<Layers className="w-3.5 h-3.5" />}
                    accentColor="text-amber-400"
                    defaultOpen={true}
                >
                    <div className="space-y-3">
                        {/* Head nodes */}
                        <div className="flex items-center gap-3">
                            <div className="flex gap-1.5">
                                <MiniNode bg="bg-teal-800/60" border="border-teal-500/70" text="text-teal-100" label="Head Verb" thickBottom />
                                <MiniNode bg="bg-orange-800/60" border="border-orange-500/70" text="text-orange-100" label="Head Noun" thickBottom />
                            </div>
                            <p className="text-[10px] text-slate-300 leading-snug flex-1">
                                <strong className="text-slate-200">Thick bottom border</strong> = core word in its phrase.
                            </p>
                        </div>

                        {/* Pivot node */}
                        <div className="flex items-center gap-3">
                            <MiniNode
                                bg="bg-orange-800/50"
                                border="border-orange-400/70"
                                text="text-orange-100"
                                glow="shadow-[0_0_16px_rgba(251,146,60,0.35)]"
                                label="Pivot"
                                thickBottom
                            />
                            <p className="text-[10px] text-slate-300 leading-snug flex-1">
                                Object of one verb <em>and</em> subject of the next — warm glow.
                            </p>
                        </div>

                        {/* Ghost node demo */}
                        <GhostNodeDemo />
                    </div>
                </CollapsibleSection>
            </motion.div>

            {/* ── 3. Interactive Controls ── */}
            <motion.div variants={sectionVariants}>
                <CollapsibleSection
                    title="Interact"
                    icon={<MousePointer2 className="w-3.5 h-3.5" />}
                    accentColor="text-emerald-400"
                    defaultOpen={false}
                >
                    <div className="space-y-3">
                        <ExpandCollapseDot />

                        <div className="flex items-start gap-3">
                            <div className="shrink-0 mt-0.5">
                                <Eye className="w-4 h-4 text-slate-400" />
                            </div>
                            <div className="space-y-1">
                                <p className="text-[10px] text-slate-300 leading-snug">
                                    <strong className="text-slate-200">Hover</strong> (desktop) or <strong className="text-slate-200">long-press</strong> (mobile) any node for a plain-English definition.
                                </p>
                                <p className="text-[10px] text-slate-300 leading-snug">
                                    <strong className="text-slate-200">Pinch</strong> to zoom · <strong className="text-slate-200">Drag</strong> to pan · <strong className="text-slate-200">+/−</strong> buttons for precise zoom.
                                </p>
                            </div>
                        </div>
                    </div>
                </CollapsibleSection>
            </motion.div>
        </motion.div>
    );
};
