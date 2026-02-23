import type { SentenceData } from '../types/grammar';

interface GrammarGuideProps {
    tab: 'framework' | 'sentence';
    selectedSentence?: SentenceData;
    renderExplanation: (text: string) => React.ReactNode;
}

/**
 * Shared content for the "Framework" and "This Sentence" tabs.
 * Rendered in both the desktop sidebar Explainer and the mobile Guide pane.
 */
export const GrammarGuide: React.FC<GrammarGuideProps> = ({ tab, selectedSentence, renderExplanation }) => {
    if (tab === 'framework') {
        return (
            <div className="space-y-4">
                <section>
                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-fuchsia-400 mb-1.5">The big idea</h3>
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                        In English, you build a sentence around a <em>subject</em> — the person or thing doing the action.
                        Mandarin works differently: you first say <em>what you want to talk about</em>,
                        then say something about it. That opening word or phrase is the{' '}
                        <span className="text-fuchsia-400 font-bold">Topic</span>, and everything
                        said about it is the{' '}
                        <span className="text-blue-400 font-bold">Comment</span>.
                    </p>
                </section>

                <section>
                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-blue-400 mb-2">Topic vs. Comment</h3>
                    <div className="grid grid-cols-2 gap-2">
                        <div className="bg-fuchsia-900/20 border border-fuchsia-600/30 rounded-xl p-2.5">
                            <p className="text-[10px] font-bold text-fuchsia-300 uppercase tracking-wider mb-1">Topic</p>
                            <p className="text-[10px] text-slate-300 leading-snug">
                                Sets the scene. Roughly: <em>"As for X…"</em><br />
                                Can be a person, a thing, a time, or a place.
                            </p>
                        </div>
                        <div className="bg-blue-900/20 border border-blue-600/30 rounded-xl p-2.5">
                            <p className="text-[10px] font-bold text-blue-300 uppercase tracking-wider mb-1">Comment</p>
                            <p className="text-[10px] text-slate-300 leading-snug">
                                The actual statement about the topic. Contains the main verb and everything around it.
                            </p>
                        </div>
                    </div>
                </section>

                <section>
                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-rose-400 mb-1.5">Why subjects disappear</h3>
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                        Once the Topic is set, the listener knows who is being talked about.
                        So Mandarin often skips the subject inside the Comment entirely —
                        this is called <span className="text-rose-400 font-bold">pro-drop</span>.
                        The tree shows missing words as faded{' '}
                        <span className="text-rose-300 font-mono text-[10px]">[ghost]</span> nodes.
                        Toggle <em>"Show implied subjects"</em> to reveal them.
                    </p>
                </section>

                <section>
                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1.5">The red arcs</h3>
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                        When a dropped pronoun refers back to the Topic,
                        a <span className="text-rose-400 font-bold">red dashed arc</span> draws
                        the invisible link — connecting the ghost node to the word it stands for.
                    </p>
                </section>

                <p className="text-[10px] text-slate-500 italic">
                    💡 Hover any node label in the tree for a quick explanation.
                </p>
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
