import React, { useState, useRef } from 'react';
import type { SentenceData } from '../types/grammar';
import type { GrammarRole } from '../types/grammar';
import { glossary } from '../data/glossary';
import { renderExplanation } from '../utils/renderExplanation';
import { TreeVisualKey } from './TreeVisualKey';

interface GlossaryLinkProps {
    role: GrammarRole;
    onOpenGlossary?: (role: GrammarRole) => void;
    children: React.ReactNode;
}

/** Clickable glossary term: opens glossary panel if handler is provided */
const GlossaryLink: React.FC<GlossaryLinkProps> = ({ role, onOpenGlossary, children }) => {
    if (!onOpenGlossary) return <>{children}</>;
    const entry = glossary[role];
    if (!entry) return <>{children}</>;
    return (
        <button
            onClick={() => onOpenGlossary(role)}
            className="underline decoration-dotted underline-offset-2 hover:text-white transition-colors"
            title={`${entry.headline}: tap to open glossary`}
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
                    A note on this grammar model
                </span>
            </button>
            <div ref={contentRef} className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-[500px] opacity-100 mt-2.5' : 'max-h-0 opacity-0'}`}>
                <p className="text-[10px] text-slate-400 leading-relaxed">
                    These trees use a <strong className="text-slate-300">Topic-Comment system</strong>, which is how Chinese linguists have traditionally described their own language. It is different from the grammar systems you might have seen in Western linguistics textbooks.
                </p>
                <ul className="mt-2 space-y-1 text-[10px] text-slate-400 leading-relaxed list-disc list-inside marker:text-slate-600">
                    <li><strong className="text-slate-300">Topic and Comment</strong> is the core structural split. Every sentence names what it is about (Topic), then says something about it (Comment).</li>
                    <li><strong className="text-slate-300">Why 把 and 被 are labeled "Head Verb."</strong> You may have learned that 把 and 被 are prepositions or markers. That is a valid description. In our trees, we label them as Head Verbs because it lets us show 把, 被, 让, and 叫 sentences using the same consistent tree shape. You do not need to pick sides; the grammar works the same way regardless of the label.</li>
                    <li><strong className="text-slate-300">Ghost nodes.</strong> When Mandarin drops a pronoun because the listener already knows who is being discussed, the tree shows a faded "ghost" node where that word would have been. This makes the underlying logic visible without cluttering the sentence.</li>
                    <li><strong className="text-slate-300">Complement subtypes</strong> (result, direction, degree, potential) are shown as badges on the tree nodes, so you can tell them apart at a glance.</li>
                </ul>
                <p className="mt-2 text-[10px] text-slate-500 leading-relaxed italic">
                    The labels in these trees (Topic, Comment, Adjunct, Complement) correspond to terms used in Chinese-language grammar textbooks (主题, 评论, 状语, 补语), so what you learn here transfers directly to Chinese-medium study materials.
                </p>
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
                {/* ── 1. Topic and Comment ── */}
                <section>
                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-fuchsia-400 mb-1.5">1. Topic and Comment</h3>
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                        Mandarin sentences follow one simple pattern: first, name what you want to talk about. Then, say something about it.
                        The first part is the <GlossaryLink role="Topic" onOpenGlossary={onOpenGlossary}><span className="text-fuchsia-400 font-bold">Topic</span></GlossaryLink> (the frame),
                        and everything that follows is the <GlossaryLink role="Comment" onOpenGlossary={onOpenGlossary}><span className="text-blue-400 font-bold">Comment</span></GlossaryLink> (what you say about it).
                        Once you see this split, every sentence in the app starts to make sense.
                    </p>
                    {/* Mini example */}
                    <div className="mt-3 bg-slate-800/50 border border-slate-700/40 rounded-xl px-3 py-2.5">
                        <div className="flex items-baseline gap-2 flex-wrap">
                            <span className="text-fuchsia-300 font-bold text-sm font-chinese-ui">这只大象，</span>
                            <span className="text-blue-300 font-bold text-sm font-chinese-ui">鼻子很长。</span>
                        </div>
                        <p className="text-[10px] text-slate-400 mt-1.5 italic">
                            <span className="text-fuchsia-400 not-italic font-semibold">As for this elephant,</span>{' '}
                            <span className="text-blue-400 not-italic font-semibold">the trunk is very long.</span>
                        </p>
                    </div>
                </section>

                {/* ── 2. Nesting and Embedding ── */}
                <section>
                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-violet-400 mb-1.5">2. Nesting and Embedding</h3>
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                        A Topic-Comment pair is a complete unit, which means an entire sentence can shrink down and fit inside another sentence as an <strong className="text-violet-300">Embedded Clause</strong>.
                        You will see this with verbs like 让 ("let"), 叫 ("tell"), and 被 (passive): they do not just act on a person, they open up a whole mini-sentence where that person does something. The tree shows this nesting clearly.
                    </p>
                </section>

                {/* ── 3. Word Order Rules ── */}
                <section>
                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 mb-1.5">3. Word Order Rules</h3>
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                        Inside the Comment, modifiers line up in a fixed order: time first, then place, then manner, then the verb. Everything that sets the scene comes <strong className="text-emerald-300">before</strong> the action, not after it. If you have ever wondered why Mandarin word order feels backwards compared to English, this is why. The tree stacks these elements so you can see the order at a glance.
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
                </section>

                {/* ── 4. Parallel Sentences (Parataxis) ── */}
                <section>
                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-orange-400 mb-1.5">4. Parallel Sentences</h3>
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                        Sometimes Mandarin places two complete thoughts side by side with no connecting word at all: "Hardship makes you grow, comfort makes you decline." These are <strong className="text-orange-300">Parallel Sentences</strong>. Neither half is the "Topic" of the other; they are equal partners. You will see this pattern especially in proverbs and classical-bridge sentences.
                    </p>
                </section>

                {/* ── 5. Dropped Subjects ── */}
                <section>
                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-rose-400 mb-1.5">Why words disappear</h3>
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                        Once everyone knows who or what is being discussed, Mandarin freely drops the word from the sentence. This happens constantly in natural speech:
                        "Have you eaten?" "Eaten." (No "I" needed.) In the tree, these missing words appear as faded{' '}
                        <span className="text-rose-300 font-mono text-[10px]">[ghost]</span>{' '}
                        nodes, so you can see where they would have been.
                    </p>
                </section>

                {/* ── 8. Tree Labels Explained ── */}
                <section>
                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-amber-400 mb-2">Tree labels at a glance</h3>
                    <div className="space-y-1.5">
                        {([
                            ['Adjunct', 'Sets the scene before the verb: time, place, manner, or condition'],
                            ['Attributive', 'Describes or limits a noun, always placed before it'],
                            ['Complement', 'Follows the verb to add detail: result, direction, degree, or potential'],
                            ['Pivot', 'A person who is the object of one verb and the actor of the next'],
                            ['Copula', 'The linking verb 是 ("is")'],
                            ['Head Verb', 'The main action word, marked with a thick bottom border'],
                            ['Head Noun', 'The main noun in a noun phrase, also thick-bordered'],
                        ] as const).map(([label, desc]) => (
                            <div key={label} className="flex items-baseline gap-2">
                                <GlossaryLink role={label as GrammarRole} onOpenGlossary={onOpenGlossary}>
                                    <span className="text-[10px] font-bold text-slate-200 whitespace-nowrap">{label}</span>
                                </GlossaryLink>
                                <span className="text-[10px] text-slate-400 leading-snug">{desc}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── 2. How to Read the Tree (interactive visual key) ── */}
                <section>
                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-violet-400 mb-2">How to read the tree</h3>
                    <TreeVisualKey />
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
            Pick a sentence from the list to see its tree. Tap any{' '}
            <span className="text-fuchsia-400 not-italic font-bold">TOPIC</span> or{' '}
            <span className="text-blue-400 not-italic font-bold">COMMENT</span>{' '}
            node to expand it, and hover any label for a quick explanation.
        </p>
    );
};
