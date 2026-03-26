import React, { useState, useRef } from 'react';
import type { SentenceData } from '../types/grammar';
import type { GrammarRole } from '../types/grammar';
import { glossary } from '../data/glossary';
import { renderExplanation } from '../utils/renderExplanation';

interface GlossaryLinkProps {
    role: GrammarRole;
    onOpenGlossary?: (role: GrammarRole) => void;
    children: React.ReactNode;
}

/** Clickable glossary term — opens glossary panel if handler is provided */
const GlossaryLink: React.FC<GlossaryLinkProps> = ({ role, onOpenGlossary, children }) => {
    if (!onOpenGlossary) return <>{children}</>;
    const entry = glossary[role];
    if (!entry) return <>{children}</>;
    return (
        <button
            onClick={() => onOpenGlossary(role)}
            className="underline decoration-dotted underline-offset-2 hover:text-white transition-colors"
            title={`${entry.headline} — tap to open glossary`}
        >
            {children}
        </button>
    );
};

/** Collapsible footnote on the grammar model's linguistic choices */
const LinguisticFootnote: React.FC = () => {
    const [open, setOpen] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);
    const handleToggle = () => {
        const willOpen = !open;
        setOpen(willOpen);
        if (willOpen) {
            setTimeout(() => {
                contentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }, 350);
        }
    };
    return (
        <section className="border-t border-slate-700/40 pt-4 mt-1">
            <button
                onClick={handleToggle}
                className="flex items-center gap-1.5 group w-full text-left"
            >
                <span className={`text-[9px] text-slate-500 transition-transform duration-200 ${open ? 'rotate-90' : ''}`}>▶</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-300 transition-colors">
                    A note on this model
                </span>
            </button>
            <div ref={contentRef} className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-[500px] opacity-100 mt-2.5' : 'max-h-0 opacity-0'}`}>
                <p className="text-[10px] text-slate-400 leading-relaxed">
                    This explorer uses a <strong className="text-slate-300">topic-first</strong> grammar model
                    designed for Mandarin learners. It treats every sentence as a topic (what you're talking about)
                    plus a comment (what you say about it), and shows how actions chain together.
                </p>
                <ul className="mt-2 space-y-1 text-[10px] text-slate-400 leading-relaxed list-disc list-inside marker:text-slate-600">
                    <li><strong className="text-slate-300">Topic + Comment</strong> is the basic building block of every sentence</li>
                    <li><strong className="text-slate-300">VP</strong> means verb phrase, covering both single actions and chains</li>
                    <li>Linking words like <strong className="text-slate-300">把, 被, 在, 用</strong> are grouped as Coverbs</li>
                    <li>Dropped subjects appear as <strong className="text-slate-300">ghost nodes</strong> so you can see the hidden structure</li>
                </ul>
            </div>
        </section>
    );
};

interface GrammarGuideProps {
    tab: 'framework' | 'sentence';
    selectedSentence?: SentenceData;
    onOpenGlossary?: (role: GrammarRole) => void;
}

/**
 * Shared content for the "Framework" and "This Sentence" tabs.
 * Rendered in both the desktop sidebar Explainer and the mobile Guide pane.
 */
export const GrammarGuide: React.FC<GrammarGuideProps> = ({ tab, selectedSentence, onOpenGlossary }) => {

    if (tab === 'framework') {
        return (
            <div className="space-y-5">
                {/* ── 1. The Logic Machine ── */}
                <section>
                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-fuchsia-400 mb-1.5">Topic + Comment</h3>
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                        Every Mandarin sentence starts by naming what you're talking about (the topic),
                        then says something about it (the comment).
                    </p>
                    <div className="mt-2 bg-slate-800/50 border border-slate-700/40 rounded-xl px-3 py-2">
                        <p className="text-[10px] text-slate-400 font-mono">
                            <span className="text-fuchsia-300">[Topic]</span>{' '}
                            <span className="text-slate-500">+</span>{' '}
                            <span className="text-blue-300">[Comment]</span>
                        </p>
                    </div>
                </section>

                {/* ── 2. Matryoshka Principle ── */}
                <section>
                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-blue-400 mb-2">Nesting: topics inside topics</h3>
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                        Sentences can nest like Russian dolls. The{' '}
                        <GlossaryLink role="Topic" onOpenGlossary={onOpenGlossary}><span className="text-fuchsia-400 font-bold">Topic</span></GlossaryLink>{' '}
                        sets the anchor. Inside the{' '}
                        <GlossaryLink role="Comment" onOpenGlossary={onOpenGlossary}><span className="text-blue-400 font-bold">Comment</span></GlossaryLink>,
                        there can be a full sub-sentence with its own{' '}
                        <GlossaryLink role="Topic" onOpenGlossary={onOpenGlossary}><span className="text-fuchsia-400 font-bold">inner topic</span></GlossaryLink>{' '}
                        and actions.
                    </p>
                    {/* Formula */}
                    <div className="mt-2 bg-slate-800/50 border border-slate-700/40 rounded-xl px-3 py-2">
                        <p className="text-[10px] text-slate-400 font-mono">
                            S = <span className="text-fuchsia-300">[Topic]</span>{' '}
                            + <span className="text-blue-300">[</span>{' '}
                            <span className="text-fuchsia-300">[inner topic]</span>{' '}
                            + <span className="text-teal-300">[Actions]</span>{' '}
                            <span className="text-blue-300">]</span>
                        </p>
                    </div>
                    {/* Mini example */}
                    <div className="mt-2 bg-slate-800/50 border border-slate-700/40 rounded-xl px-3 py-2.5">
                        <div className="flex items-baseline gap-2 flex-wrap">
                            <span className="text-fuchsia-300 font-bold text-sm font-chinese-ui">这只大象，</span>
                            <span className="text-blue-300 font-bold text-sm font-chinese-ui">鼻子很长。</span>
                        </div>
                        <p className="text-[10px] text-slate-400 mt-1.5 italic">
                            <span className="text-fuchsia-400 not-italic font-semibold">As for this elephant,</span>{' '}
                            <span className="text-blue-400 not-italic font-semibold">its nose is long.</span>
                        </p>
                    </div>
                </section>

                {/* ── Mini tree diagram ── */}
                <section>
                    <div className="flex justify-center">
                        <div className="flex flex-col items-center text-[9px]">
                            {/* Sentence root */}
                            <div className="bg-slate-800/80 text-slate-100 border border-purple-400/60 rounded-lg px-3 py-1.5 font-bold uppercase tracking-wide shadow-[0_0_16px_rgba(139,92,246,0.3)]">
                                Sentence
                            </div>
                            {/* Branches */}
                            <div className="flex items-start gap-0 mt-0">
                                {/* Left: Topic */}
                                <div className="flex flex-col items-center">
                                    <div className="w-px h-4 bg-slate-600" />
                                    <div className="bg-fuchsia-900/40 text-fuchsia-200 border border-fuchsia-500/50 rounded-lg px-2.5 py-1 font-bold uppercase tracking-wide shadow-[0_0_10px_rgba(217,70,239,0.2)]">
                                        Topic
                                    </div>
                                    <div className="w-px h-3 bg-slate-600" />
                                    <div className="bg-slate-800/60 text-slate-300 border border-slate-600/50 rounded-lg px-2 py-1 text-[10px] font-chinese-ui">
                                        这只大象
                                    </div>
                                </div>
                                <div className="w-8 h-px bg-slate-600 mt-4 self-start" />
                                {/* Right: Comment → Topic(Ø) + VP */}
                                <div className="flex flex-col items-center">
                                    <div className="w-px h-4 bg-slate-600" />
                                    <div className="bg-blue-900/40 text-blue-200 border border-blue-500/50 rounded-lg px-2.5 py-1 font-bold uppercase tracking-wide shadow-[0_0_10px_rgba(59,130,246,0.2)]">
                                        Comment
                                    </div>
                                    <div className="w-px h-3 bg-slate-600" />
                                    <div className="flex items-start gap-0">
                                        <div className="flex flex-col items-center">
                                            <div className="border-dashed border border-rose-500/50 bg-slate-900/30 opacity-70 rounded-lg px-2 py-1 text-[9px] text-rose-300">
                                            Ø (dropped subject)
                                            </div>
                                        </div>
                                        <div className="w-4 h-px bg-slate-600 mt-3 self-start" />
                                        <div className="flex flex-col items-center">
                                            <div className="bg-teal-900/40 text-teal-200 border border-teal-500/50 rounded-lg px-2 py-1 text-[9px] font-bold uppercase">
                                                VP
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── 3. VP (Fractal VP) ── */}
                <section>
                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-teal-400 mb-1.5">Verb phrases: single or chained</h3>
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                        Inside the Comment sits a{' '}
                        <GlossaryLink role="VP" onOpenGlossary={onOpenGlossary}><span className="text-teal-300 font-bold">VP</span></GlossaryLink>
                        {' '}(verb phrase). A simple VP is one action; a compound VP
                        chains several actions in time order (a serial verb construction).
                        In the tree, chained actions sit side by side.
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1.5 items-center">
                        {['VP₁', 'VP₂', 'VP₃'].map((label, i) => (
                            <span key={label} className="flex items-center gap-1.5">
                                <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border bg-emerald-900/40 text-emerald-200 border-emerald-500/50">
                                    {label}
                                </span>
                                {i < 2 && <span className="text-slate-500 text-[9px]">→</span>}
                            </span>
                        ))}
                    </div>
                </section>

                {/* ── 4. Adjunct Altitude ── */}
                <section>
                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-rose-400 mb-1.5">Scene-setting: before the verb</h3>
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                        <GlossaryLink role="Adjunct" onOpenGlossary={onOpenGlossary}><span className="text-rose-300 font-bold">Adjuncts</span></GlossaryLink>{' '}
                        are words or phrases that set the scene before the verb. They can apply to the whole sentence or just one action:
                    </p>
                    <div className="mt-2 space-y-1.5">
                        {([
                            ['High', 'Whole sentence', 'Time (昨天), Probability (也许)'],
                            ['Low', 'Single action', 'Tool (用手机), Manner (快速地), Location (在图书馆)'],
                        ] as const).map(([alt, target, examples]) => (
                            <div key={alt} className="flex items-baseline gap-2">
                                <span className="text-[9px] font-bold text-rose-300 bg-rose-900/30 border border-rose-500/30 px-1.5 py-0.5 rounded whitespace-nowrap">{alt}</span>
                                <span className="text-[10px] text-slate-400">
                                    <span className="text-slate-300">{target}</span>: {examples}
                                </span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── 5. Verb Package ── */}
                <section>
                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-green-400 mb-1.5">Inside an action: the verb package</h3>
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                        Each{' '}
                        <GlossaryLink role="VP" onOpenGlossary={onOpenGlossary}><span className="text-emerald-300 font-bold">VP (Primitive)</span></GlossaryLink>
                        {' '}contains a{' '}
                        <GlossaryLink role="Verb Package" onOpenGlossary={onOpenGlossary}><span className="text-green-300 font-bold">Verb Package</span></GlossaryLink>:
                        the full verb unit, including the main verb, any result or direction suffix,
                        and aspect markers.
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1.5 items-center">
                        {[
                            { label: 'Verb Head', color: 'bg-teal-900/40 text-teal-200 border-teal-500/50' },
                            { label: '+ RVC', color: 'bg-violet-900/40 text-violet-300 border-violet-500/50' },
                            { label: '+ VD', color: 'bg-sky-900/40 text-sky-200 border-sky-400/50' },
                            { label: '+ Aspect', color: 'bg-slate-800/50 text-slate-300 border-slate-500/50' },
                        ].map(({ label, color }) => (
                            <span key={label} className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${color}`}>
                                {label}
                            </span>
                        ))}
                    </div>
                    <p className="text-[10px] text-slate-400 mt-2 italic">
                        Insert <strong className="text-sky-300 not-italic">得/不</strong> to toggle potential (can/can't).
                        Use <strong className="text-purple-300 not-italic">得+description</strong> for degree complements.
                    </p>
                </section>

                {/* ── 6. Null (Ø) Identity Flow ── */}
                <section>
                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-rose-400 mb-1.5">Dropped subjects: ghost nodes</h3>
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                        Once the topic is set, Mandarin often drops the subject if it refers to the same person.
                        The tree shows these dropped subjects as dashed{' '}
                        <span className="text-rose-300 font-mono text-[10px]">[ghost]</span>{' '}
                        nodes, so you can see the hidden structure.
                    </p>
                    <div className="mt-2 bg-slate-800/50 border border-slate-700/40 rounded-xl px-3 py-2">
                        <p className="text-[10px] text-slate-400 font-mono">
                            <span className="text-fuchsia-300">[我]</span>{' '}
                            <span className="text-slate-500">→</span>{' '}
                            <span className="text-rose-400 opacity-70">[Ø 我]</span>{' '}
                            <span className="text-slate-500">→</span>{' '}
                            <span className="text-teal-300">[吃饭]</span>
                        </p>
                    </div>
                </section>

                {/* ── Tree Reading (color legend) ── */}
                <section>
                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-violet-400 mb-2">Reading the tree</h3>
                    <div className="space-y-1.5 text-[10px] text-slate-300">
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-sm bg-fuchsia-900/40 border border-fuchsia-500/50 flex-shrink-0" />
                            <span><strong className="text-fuchsia-300">Fuchsia</strong> = Topic (Anchor)</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-sm bg-blue-900/40 border border-blue-500/50 flex-shrink-0" />
                            <span><strong className="text-blue-300">Blue</strong> = Comment (Logic Zone)</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-sm bg-teal-900/40 border border-teal-500/50 flex-shrink-0" />
                            <span><strong className="text-teal-300">Teal</strong> = VP (Fractal VP)</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-sm bg-emerald-900/40 border border-emerald-500/50 flex-shrink-0" />
                            <span><strong className="text-emerald-300">Emerald</strong> = VP (Primitive)</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-sm bg-amber-900/40 border border-amber-600/50 flex-shrink-0" />
                            <span><strong className="text-amber-200">Amber</strong> = Object</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-sm bg-rose-900/40 border border-rose-600/50 flex-shrink-0" />
                            <span><strong className="text-rose-300">Rose</strong> = Adjunct (modifier)</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-sm bg-violet-900/40 border border-violet-600/50 flex-shrink-0" />
                            <span><strong className="text-violet-300">Violet</strong> = Complement</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="relative w-4 h-4 flex-shrink-0">
                                <span className="absolute inset-0 rounded-full bg-slate-400/20 animate-ping" />
                                <span className="absolute inset-[3px] rounded-full bg-slate-500" />
                            </div>
                            <span><strong className="text-slate-200">Pulsing dot</strong> = tap to expand/collapse</span>
                        </div>
                    </div>
                </section>

                {/* ── Using the tree (UI tips) ── */}
                <section>
                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1.5">Using the tree</h3>
                    <ul className="space-y-1.5 text-[11px] text-slate-300 leading-relaxed list-disc list-inside marker:text-slate-500">
                        <li>
                            <strong>Hover</strong> (desktop) or <strong>long-press</strong> (mobile) any node
                            for a plain-English explanation.
                        </li>
                        <li>
                            <strong>Co-reference glow</strong> — when a Null (Ø) node refers back to the
                            Topic, hover either one and both light up with a{' '}
                            <span className="text-rose-400 font-bold">rose glow</span>.
                        </li>
                        <li>
                            <strong>Ghost toggle</strong> — tap the ghost icon in the tree controls
                            to show or hide Null (Ø) subjects.
                        </li>
                        <li>
                            <strong>Pinch</strong> to zoom, <strong>drag</strong> to pan.
                            Use <strong>+/−</strong> buttons for precise zoom.
                        </li>
                    </ul>
                </section>

                {/* ── Linguistic footnote (collapsible) ── */}
                <LinguisticFootnote />
            </div>
        );
    }

    // 'sentence' tab
    if (selectedSentence?.explanation) {
        return (
            <>
                <div className="mb-2.5">
                    <p className="text-base font-semibold text-slate-100">{selectedSentence.chinese}</p>
                    <p className="text-[10px] text-slate-400 italic mt-0.5">"{selectedSentence.translation}"</p>
                </div>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                    {renderExplanation(selectedSentence.explanation)}
                </p>
            </>
        );
    }

    return (
        <p className="text-[11px] text-slate-400 leading-relaxed italic">
            Select a sentence from the list, then explore the tree by clicking{' '}
            <span className="text-fuchsia-400 not-italic font-bold">TOPIC</span> and{' '}
            <span className="text-blue-400 not-italic font-bold">COMMENT</span>.
            Hover any label for a plain-English explanation.
        </p>
    );
};
