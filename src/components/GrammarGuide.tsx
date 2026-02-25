import type { SentenceData } from '../types/grammar';
import type { GrammarRole } from '../types/grammar';
import { glossary } from '../data/glossary';

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

    /** Clickable glossary term — opens glossary panel if handler is provided */
    const GlossaryLink = ({ role, children }: { role: GrammarRole; children: React.ReactNode }) => {
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

    if (tab === 'framework') {
        return (
            <div className="space-y-5">
                {/* ── 1. The Big Idea ── */}
                <section>
                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-fuchsia-400 mb-1.5">The big idea</h3>
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                        In English, you build a sentence around a <em>subject</em> — the person or thing doing the action.
                        Mandarin works differently: you first say <em>what you want to talk about</em>,
                        then say something about it. That opening word or phrase is the{' '}
                        <GlossaryLink role="Topic"><span className="text-fuchsia-400 font-bold">Topic</span></GlossaryLink>, and everything
                        said about it is the{' '}
                        <GlossaryLink role="Comment"><span className="text-blue-400 font-bold">Comment</span></GlossaryLink>.
                    </p>
                    {/* Mini example */}
                    <div className="mt-3 bg-slate-800/50 border border-slate-700/40 rounded-xl px-3 py-2.5">
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
                                {/* Left branch */}
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
                                {/* Connector line */}
                                <div className="w-8 h-px bg-slate-600 mt-4 self-start" />
                                {/* Right branch */}
                                <div className="flex flex-col items-center">
                                    <div className="w-px h-4 bg-slate-600" />
                                    <div className="bg-blue-900/40 text-blue-200 border border-blue-500/50 rounded-lg px-2.5 py-1 font-bold uppercase tracking-wide shadow-[0_0_10px_rgba(59,130,246,0.2)]">
                                        Comment
                                    </div>
                                    <div className="w-px h-3 bg-slate-600" />
                                    <div className="bg-slate-800/60 text-slate-300 border border-slate-600/50 rounded-lg px-2 py-1 text-[10px] font-chinese-ui">
                                        鼻子很长
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── 2. Topic vs. Comment ── */}
                <section>
                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-blue-400 mb-2">Topic vs. Comment</h3>
                    <div className="grid grid-cols-2 gap-2">
                        <div className="bg-fuchsia-900/20 border border-fuchsia-600/30 rounded-xl p-2.5">
                            <p className="text-[10px] font-bold text-fuchsia-300 uppercase tracking-wider mb-1">
                                <GlossaryLink role="Topic">Topic</GlossaryLink>
                            </p>
                            <p className="text-[10px] text-slate-300 leading-snug">
                                Sets the scene. Roughly: <em>"As for X…"</em><br />
                                Can be a person, a thing, a time, or a place.
                            </p>
                        </div>
                        <div className="bg-blue-900/20 border border-blue-600/30 rounded-xl p-2.5">
                            <p className="text-[10px] font-bold text-blue-300 uppercase tracking-wider mb-1">
                                <GlossaryLink role="Comment">Comment</GlossaryLink>
                            </p>
                            <p className="text-[10px] text-slate-300 leading-snug">
                                The actual statement about the topic. Contains the main verb and everything around it.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ── 3. Word Order ── */}
                <section>
                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 mb-1.5">Word order</h3>
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                        In English, <em>when</em>, <em>where</em>, and <em>how</em> can go after the verb.
                        In Mandarin, they always go <strong className="text-emerald-300">before</strong> it.
                        The order is typically:
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1.5 items-center">
                        {['Time', 'Place', 'Manner', 'Verb'].map((label, i) => (
                            <span key={label} className="flex items-center gap-1.5">
                                <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${label === 'Verb'
                                    ? 'bg-teal-900/40 text-teal-200 border-teal-500/50'
                                    : 'bg-rose-900/30 text-rose-300 border-rose-500/40'
                                    }`}>
                                    {label}
                                </span>
                                {i < 3 && <span className="text-slate-500 text-[9px]">→</span>}
                            </span>
                        ))}
                    </div>
                    <p className="text-[10px] text-slate-400 mt-2 italic">
                        Example: <span className="text-rose-300 not-italic">昨天</span>{' '}
                        <span className="text-rose-300 not-italic">在图书馆</span>{' '}
                        <span className="text-rose-300 not-italic">安静地</span>{' '}
                        <span className="text-teal-300 not-italic">看书</span>{' '}
                        — "Yesterday, in the library, quietly, read."
                    </p>
                </section>

                {/* ── 4. Pro-drop ── */}
                <section>
                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-rose-400 mb-1.5">Why subjects disappear</h3>
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                        Once the Topic is set, the listener knows who is being talked about.
                        So Mandarin often skips the subject inside the Comment entirely —
                        this is called{' '}
                        <span className="text-rose-400 font-bold">pro-drop</span>.
                        The tree shows missing words as faded{' '}
                        <span className="text-rose-300 font-mono text-[10px]">[ghost]</span> nodes.
                    </p>
                </section>

                {/* ── 8. Tree Labels Explained ── */}
                <section>
                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-amber-400 mb-2">Tree labels at a glance</h3>
                    <div className="space-y-1.5">
                        {([
                            ['Adjunct', 'Pre-verbal modifier — time, place, manner, or construction (把/被)'],
                            ['Attributive', 'A word modifying a noun, always placed before it'],
                            ['Complement', 'Extra info after the verb — result, direction, degree, or possibility'],
                            ['Pivot', 'A noun acting as object of one verb and subject of the next'],
                            ['Copula', 'The linking verb 是 (is/was)'],
                            ['Head Verb', 'The core verb, marked with a thick bottom border'],
                            ['Head Noun', 'The core noun in a noun phrase, also thick-bordered'],
                        ] as const).map(([label, desc]) => (
                            <div key={label} className="flex items-baseline gap-2">
                                <GlossaryLink role={label as GrammarRole}>
                                    <span className="text-[10px] font-bold text-slate-200 whitespace-nowrap">{label}</span>
                                </GlossaryLink>
                                <span className="text-[10px] text-slate-400 leading-snug">{desc}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── 2. How to read the tree ── */}
                <section>
                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-violet-400 mb-2">Reading the tree</h3>
                    <div className="space-y-1.5 text-[10px] text-slate-300">
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-sm bg-fuchsia-900/40 border border-fuchsia-500/50 flex-shrink-0" />
                            <span><strong className="text-fuchsia-300">Fuchsia</strong> = Topic</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-sm bg-blue-900/40 border border-blue-500/50 flex-shrink-0" />
                            <span><strong className="text-blue-300">Blue</strong> = Comment</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-sm bg-indigo-900/40 border border-indigo-600/50 flex-shrink-0" />
                            <span><strong className="text-indigo-300">Indigo</strong> = Subject</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-sm bg-cyan-900/40 border border-cyan-500/50 flex-shrink-0" />
                            <span><strong className="text-cyan-200">Cyan</strong> = Predicate</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-sm bg-teal-900/40 border border-teal-500/50 flex-shrink-0" />
                            <span><strong className="text-teal-300">Teal</strong> = Verb Phrase</span>
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

                {/* ── 4b. Using the tree (UI tips) ── */}
                <section>
                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1.5">Using the tree</h3>
                    <ul className="space-y-1.5 text-[11px] text-slate-300 leading-relaxed list-disc list-inside marker:text-slate-500">
                        <li>
                            <strong>Hover</strong> (desktop) or <strong>long-press</strong> (mobile) any node
                            for a plain-English explanation.
                        </li>
                        <li>
                            <strong>Co-reference glow</strong> — when a ghost node refers back to the
                            Topic, hover (desktop) or long-press (mobile) either one and both
                            light up with a{' '}
                            <span className="text-rose-400 font-bold">rose glow</span>.
                        </li>
                        <li>
                            <strong>Ghost toggle</strong> — tap the ghost icon in the tree controls
                            to show or hide implied (pro-dropped) subjects.
                        </li>
                        <li>
                            <strong>Pinch</strong> to zoom, <strong>drag</strong> to pan.
                            Use <strong>+/−</strong> buttons for precise zoom.
                        </li>
                    </ul>
                </section>
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
