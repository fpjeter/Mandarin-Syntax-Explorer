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
                    These trees use a <strong className="text-slate-300">teaching-oriented framework</strong>, not
                    standard generative syntax (X-bar theory / Minimalism). This follows the Chinese
                    pedagogical tradition (赵元任, 朱德熙) which treats Mandarin as a{' '}
                    <em>topic-prominent</em> language.
                </p>
                <ul className="mt-2 space-y-1 text-[10px] text-slate-400 leading-relaxed list-disc list-inside marker:text-slate-600">
                    <li><strong className="text-slate-300">Topic–Comment</strong> is the primary structural split, not Subject–Predicate</li>
                    <li><strong className="text-slate-300">Adjunct</strong> maps directly to 状语, the pre-verbal modifier slot central to Chinese grammar</li>
                    <li><strong className="text-slate-300">Complement subtypes</strong> (结果补语, 趋向补语, etc.) are shown as badges, not separate structural positions</li>
                    <li><strong className="text-slate-300">Separable verbs</strong> (离合词) are explicitly decomposed into verb and object halves</li>
                    <li><strong className="text-slate-300">Dropped pronouns</strong> appear as visible ghost nodes with coreference links, rather than abstract empty categories</li>
                </ul>
                <p className="mt-2 text-[10px] text-slate-500 leading-relaxed italic">
                    Role names like 状语, 补语, and 兼语 map directly to the terms learners encounter
                    in Chinese-language textbooks.
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
                        Every Mandarin sentence starts with the same move: name what you are talking about, then say something about it.
                        The first part is the <GlossaryLink role="Topic" onOpenGlossary={onOpenGlossary}><span className="text-fuchsia-400 font-bold">Topic</span></GlossaryLink>,
                        and the second is the <GlossaryLink role="Comment" onOpenGlossary={onOpenGlossary}><span className="text-blue-400 font-bold">Comment</span></GlossaryLink>.
                        This Topic-Comment pair is the building block of the entire language.
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

                {/* ── 2. Nesting and Embedding ── */}
                <section>
                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-violet-400 mb-1.5">2. Nesting and Embedding</h3>
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                        Because a Topic-Comment unit is self-contained, an entire sentence can shrink down and fit completely inside another one. 
                        These are called <strong className="text-violet-300">Embedded Clauses</strong>. 
                        For example, a causative verb like 让 ("let") or 叫 ("tell") does not just act on a person; it introduces a whole new clause where that person does something.
                    </p>
                </section>

                {/* ── 3. Word Order Rules ── */}
                <section>
                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 mb-1.5">3. Word Order Rules</h3>
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                        Inside the Comment, modifiers follow a strict order. 
                        Time, place, and manner information must come <strong className="text-emerald-300">before</strong> the verb, not after it. This is one of the biggest differences from English, and the tree makes it visible by stacking these elements in order.
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
                        When Mandarin compares or contrasts two independent thoughts ("Hardship makes you grow, comfort makes you regress"), they sit side by side as <strong className="text-orange-300">Parallel Sentences</strong>. No connecting words like "and" or "but" are needed. Watch out: if a sentence consists of two independent, contrasting ideas, the first half is not the "Topic" of the second. They are equals.
                    </p>
                </section>

                {/* ── 5. Dropped Subjects ── */}
                <section>
                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-rose-400 mb-1.5">Why subjects disappear</h3>
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                        Once the Topic is set, the listener knows who is being talked about.
                        So Mandarin often skips the subject inside the Comment entirely.
                        This is called{' '}
                        <span className="text-rose-400 font-bold">subject omission</span>.
                        The tree shows missing words as faded{' '}
                        <span className="text-rose-300 font-mono text-[10px]">[ghost]</span> nodes.
                    </p>
                </section>

                {/* ── 8. Tree Labels Explained ── */}
                <section>
                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-amber-400 mb-2">Tree labels at a glance</h3>
                    <div className="space-y-1.5">
                        {([
                            ['Adjunct', 'Pre-verbal modifier: time, place, manner, or construction (把/被)'],
                            ['Attributive', 'A word modifying a noun, always placed before it'],
                            ['Complement', 'Extra info after the verb: result, direction, degree, or possibility'],
                            ['Pivot', 'A noun acting as object of one verb and subject of the next'],
                            ['Copula', 'The linking verb 是 (is/was)'],
                            ['Head Verb', 'The core verb, marked with a thick bottom border'],
                            ['Head Noun', 'The core noun in a noun phrase, also thick-bordered'],
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
            Select a sentence from the list, then explore the tree by clicking{' '}
            <span className="text-fuchsia-400 not-italic font-bold">TOPIC</span> and{' '}
            <span className="text-blue-400 not-italic font-bold">COMMENT</span>.
            Hover any label for a plain-English explanation.
        </p>
    );
};
