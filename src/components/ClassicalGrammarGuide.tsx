import React from 'react';

/**
 * Grammar guide for Classical Chinese (古文) mode.
 * Mirrors the structure and visual density of the modern GrammarGuide
 * but with content tailored to classical Chinese grammar patterns.
 */
export const ClassicalGrammarGuide: React.FC = () => {
    return (
        <div className="space-y-5">
            {/* ── 1. The Big Idea ── */}
            <section>
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-amber-400 mb-1.5">The big idea</h3>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                    Classical Chinese (文言文 <em>wényánwén</em>) is the literary language used across China
                    for over two thousand years, from roughly the 5th century BC to the early 1900s. It is incredibly <strong className="text-amber-300">compact</strong>: one character
                    often does the work of an entire modern phrase. Grammar is carried by
                    word order, a small set of <em>function words</em> (虚词), and context.
                </p>
                {/* Mini example */}
                <div className="mt-3 bg-stone-800/50 border border-stone-700/40 rounded-xl px-3 py-2.5">
                    <div className="flex items-baseline gap-2 flex-wrap">
                        <span className="text-amber-300 font-bold text-sm font-chinese-ui">學而時習之，</span>
                        <span className="text-orange-300 font-bold text-sm font-chinese-ui">不亦說乎？</span>
                    </div>
                    <p className="text-[10px] text-slate-400 mt-1.5 italic">
                        <span className="text-amber-400 not-italic font-semibold">To study and regularly practice it,</span>{' '}
                        <span className="text-orange-400 not-italic font-semibold">is that not a joy?</span>
                    </p>
                    <p className="text-[9px] text-stone-500 mt-1">— Confucius,《論語》</p>
                </div>
            </section>

            {/* ── 2. Shared Structure with Modern Mandarin ── */}
            <section>
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-blue-400 mb-1.5">Shared Structure with Modern Mandarin</h3>
                <p className="text-[11px] text-slate-300 leading-relaxed mb-2">
                    Despite the compact surface, classical Chinese uses the same <strong>Topic-Comment</strong> backbone as modern Mandarin. Every sentence names what it is about, then comments on it.
                </p>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                    Modifiers still come before the verb, sentences still nest inside each other as <strong className="text-violet-300">Embedded Clauses</strong>, and balanced ideas sit side by side as <strong className="text-orange-300">Parallel Sentences</strong> without any connecting words. The deep structure is the same; only the surface is more compressed.
                </p>
            </section>

            {/* ── 3. Classical vs. Modern ── */}
            <section>
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-orange-400 mb-2">Classical vs. Modern</h3>
                <div className="grid grid-cols-2 gap-2">
                    <div className="bg-amber-900/20 border border-amber-600/30 rounded-xl p-2.5">
                        <p className="text-[10px] font-bold text-amber-300 uppercase tracking-wider mb-1">Classical 文言</p>
                        <ul className="space-y-1 text-[10px] text-slate-300 leading-snug list-disc list-inside marker:text-amber-500/50">
                            <li>One character = one word</li>
                            <li>Function words (之/乎/者/也) carry grammar</li>
                            <li>Word classes are flexible</li>
                            <li>Extremely context-heavy</li>
                        </ul>
                    </div>
                    <div className="bg-blue-900/20 border border-blue-600/30 rounded-xl p-2.5">
                        <p className="text-[10px] font-bold text-blue-300 uppercase tracking-wider mb-1">Modern 白话</p>
                        <ul className="space-y-1 text-[10px] text-slate-300 leading-snug list-disc list-inside marker:text-blue-500/50">
                            <li>Multi-character words and compounds</li>
                            <li>Structural particles (的/了/着) do the grammar</li>
                            <li>Word order is more fixed</li>
                            <li>Tense and aspect are marked explicitly</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* ── 3. Key Function Words (虚词) ── */}
            <section>
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-yellow-400 mb-2">Key function words · 虛詞</h3>
                <p className="text-[10px] text-slate-400 mb-2 italic">
                    These small words carry all the grammatical weight. Learning them is the key to reading classical texts.
                </p>
                <div className="space-y-1.5">
                    {([
                        ['之 zhī', 'The Swiss army knife: possession ("\'s"), object pronoun ("it"), or structural filler'],
                        ['者 zhě', 'Marks a person or thing: "the one who..." or "that which..."'],
                        ['所 suǒ', 'Points to what receives the action: "that which is (done)"'],
                        ['而 ér', 'Links actions or ideas: "and then," "but," or "yet"'],
                        ['乎 hū', 'Turns a statement into a question, often rhetorical'],
                        ['也 yě', 'Closes a statement with an assertion: "X is Y." Declarative, not a question marker'],
                        ['於 yú', 'Marks location, source, or comparison: "at, in, from, to"'],
                        ['以 yǐ', 'Introduces a tool or purpose: "using, by means of, in order to"'],
                        ['非 fēi', 'Negates identity: "is not X" (different from 不, which negates actions)'],
                        ['莫 mò', 'A blanket negative: "no one" or "nothing"'],
                    ] as const).map(([word, desc]) => (
                        <div key={word} className="flex items-baseline gap-2">
                            <span className="text-[11px] font-bold text-amber-200 whitespace-nowrap font-chinese-ui min-w-[52px]">{word}</span>
                            <span className="text-[10px] text-slate-400 leading-snug">{desc}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── 4. The 之 System (Possession & Description) ── */}
            <section>
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-amber-400 mb-1.5">之: the backbone particle</h3>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                    之 is probably the most common character in all of classical Chinese. What it means depends entirely on where it appears:
                </p>
                <div className="mt-2 space-y-1.5">
                    <div className="bg-stone-800/40 border border-stone-700/30 rounded-lg px-3 py-2">
                        <p className="text-[10px] text-amber-300 font-bold">Showing possession ('s)</p>
                        <p className="text-[10px] text-slate-300 mt-0.5">
                            <span className="text-amber-200 font-chinese-ui">師者，所以傳道授業解惑<strong className="text-amber-400">之</strong>者也。</span>
                        </p>
                        <p className="text-[9px] text-slate-500 italic mt-0.5">之 = "of", linking "transmitting the Way" to 者 "one who"</p>
                    </div>
                    <div className="bg-stone-800/40 border border-stone-700/30 rounded-lg px-3 py-2">
                        <p className="text-[10px] text-amber-300 font-bold">Object pronoun</p>
                        <p className="text-[10px] text-slate-300 mt-0.5">
                            <span className="text-amber-200 font-chinese-ui">學而時習<strong className="text-amber-400">之</strong></span>
                        </p>
                        <p className="text-[9px] text-slate-500 italic mt-0.5">之 = "it", a direct object referring to what was previously studied</p>
                    </div>
                </div>
            </section>

            {/* ── 5. Rhetorical Patterns ── */}
            <section>
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-orange-400 mb-1.5">Rhetorical questions · 反問</h3>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                    Classical Chinese forms rhetorical questions with sentence-final particles.
                    The most famous pattern is <span className="text-orange-300 font-bold">不亦…乎</span>:
                </p>
                <div className="mt-2 bg-stone-800/40 border border-stone-700/30 rounded-lg px-3 py-2">
                    <div className="flex items-center gap-1.5 flex-wrap">
                        {['不亦', '(adj)', '乎？'].map((part, i) => (
                            <span key={i} className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${i === 1
                                    ? 'bg-teal-900/40 text-teal-200 border-teal-500/50'
                                    : 'bg-orange-900/30 text-orange-300 border-orange-500/40'
                                }`}>
                                {part}
                            </span>
                        ))}
                    </div>
                    <p className="text-[9px] text-slate-500 italic mt-1.5">"Is that not also (adj)?" Expects agreement from the listener</p>
                </div>
                <p className="text-[10px] text-slate-400 mt-2">
                    Other question markers: <span className="text-orange-300 font-chinese-ui not-italic">哉</span> (exclamatory),
                    {' '}<span className="text-orange-300 font-chinese-ui not-italic">焉</span> (where/how),
                    {' '}<span className="text-orange-300 font-chinese-ui not-italic">邪/耶</span> (yé, question particle).
                </p>
            </section>

            {/* ── 6. Negation ── */}
            <section>
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-rose-400 mb-1.5">Negation · 否定</h3>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                    Classical Chinese has several different negators, each with its own scope and flavor:
                </p>
                <div className="mt-2 grid grid-cols-3 gap-1.5">
                    {([
                        ['不 bù', 'The everyday negator for actions and qualities', 'bg-rose-900/20 border-rose-600/30'],
                        ['非 fēi', 'Negates identity: "is not X"', 'bg-red-900/20 border-red-600/30'],
                        ['莫 mò', 'Universal negation: "no one" or "nothing at all"', 'bg-pink-900/20 border-pink-600/30'],
                    ] as const).map(([word, desc, cls]) => (
                        <div key={word} className={`${cls} border rounded-xl p-2`}>
                            <p className="text-[11px] font-bold text-slate-200 font-chinese-ui">{word}</p>
                            <p className="text-[9px] text-slate-400 mt-0.5 leading-snug">{desc}</p>
                        </div>
                    ))}
                </div>
                <p className="text-[10px] text-slate-400 mt-2 italic">
                    You will also see: <span className="text-rose-300 not-italic font-chinese-ui">勿</span> (a command: "do not!"),
                    and <span className="text-rose-300 not-italic font-chinese-ui">未</span> ("not yet, has not").
                </p>
            </section>

            {/* ── 7. Coverbs (於/以) ── */}
            <section>
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 mb-1.5">Coverbs · 介詞</h3>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                    Classical Chinese uses <strong className="text-emerald-300">coverbs</strong> (介詞), action words that function like prepositions ('at', 'with', 'from'). Some come before the verb, others follow it.
                </p>
                <div className="mt-2 space-y-1.5">
                    <div className="bg-stone-800/40 border border-stone-700/30 rounded-lg px-3 py-2">
                        <p className="text-[10px] text-emerald-300 font-bold">於: usually after the verb</p>
                        <div className="flex items-center gap-1.5 flex-wrap mt-1">
                            {['Verb', '→', '於 + NP'].map((part, i) => (
                                <span key={i} className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${i === 1 ? 'text-slate-500' :
                                        i === 2 ? 'bg-emerald-900/30 text-emerald-300 border border-emerald-500/40'
                                            : 'bg-teal-900/40 text-teal-200 border border-teal-500/50'
                                    }`}>
                                    {part}
                                </span>
                            ))}
                        </div>
                        <p className="text-[9px] text-slate-500 italic mt-1">
                            於 = at/in/from/to. <span className="not-italic font-chinese-ui text-emerald-300">生<strong>於</strong>憂患</span> "born <strong>from</strong> hardship" (於 follows the verb 生)
                        </p>
                    </div>
                    <div className="bg-stone-800/40 border border-stone-700/30 rounded-lg px-3 py-2">
                        <p className="text-[10px] text-emerald-300 font-bold">以: usually before the verb</p>
                        <div className="flex items-center gap-1.5 flex-wrap mt-1">
                            {['以 + NP', '→', 'Verb'].map((part, i) => (
                                <span key={i} className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${i === 1 ? 'text-slate-500' :
                                        i === 0 ? 'bg-emerald-900/30 text-emerald-300 border border-emerald-500/40'
                                            : 'bg-teal-900/40 text-teal-200 border border-teal-500/50'
                                    }`}>
                                    {part}
                                </span>
                            ))}
                        </div>
                        <p className="text-[9px] text-slate-500 italic mt-1">
                            以 = using/by means of. <span className="not-italic font-chinese-ui text-emerald-300"><strong>以</strong>德報怨</span> "<strong>with</strong> virtue repay resentment"
                        </p>
                    </div>
                </div>
            </section>

            {/* ── 8. 而 — Sequential & Contrastive Connector ── */}
            <section>
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-violet-400 mb-1.5">而: the connective</h3>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                    而 is the all-purpose connector. It links two actions or states, and the exact relationship depends on context:
                </p>
                <div className="mt-2 space-y-1">
                    {([
                        ['Sequential', '學而時習之', '"study and then practice it"'],
                        ['Contrastive', '學而不思則罔', '"study but not think = lost"'],
                        ['Conditional', '人不知而不慍', '"others don\'t know, yet not upset"'],
                    ] as const).map(([type, example, meaning]) => (
                        <div key={type} className="flex items-baseline gap-2">
                            <span className="text-[9px] font-bold text-violet-300 uppercase tracking-wider min-w-[72px]">{type}</span>
                            <span className="text-[10px] text-amber-200 font-chinese-ui">{example}</span>
                            <span className="text-[9px] text-slate-500 italic">{meaning}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── 9. Tree Labels (same visual as modern) ── */}
            <section>
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-amber-400 mb-2">Tree labels at a glance</h3>
                <div className="space-y-1.5">
                    {([
                        ['Topic', 'What the sentence is about, just like modern Mandarin'],
                        ['Comment', 'Everything said about the Topic'],
                        ['Head Verb', 'The main action word, marked with a thick bottom border'],
                        ['Adjunct', 'Pre-verbal modifier: coverbs, negation, or adverbs'],
                        ['Complement', 'Post-verbal element: result, direction, or continuation'],
                        ['Connective', 'Linking particles like 而, 則, 故'],
                        ['Particle', 'Function words: 之/乎/者/也/焉'],
                    ] as const).map(([label, desc]) => (
                        <div key={label} className="flex items-baseline gap-2">
                            <span className="text-[10px] font-bold text-slate-200 whitespace-nowrap">{label}</span>
                            <span className="text-[10px] text-slate-400 leading-snug">{desc}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── 10. Reading the tree ── */}
            <section>
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-1.5">Using the tree</h3>
                <ul className="space-y-1.5 text-[11px] text-slate-300 leading-relaxed list-disc list-inside marker:text-stone-500">
                    <li>
                        <strong>Hover</strong> (desktop) or <strong>long-press</strong> (mobile) any node
                        to see what it does.
                    </li>
                    <li>
                        <strong>Expand and collapse</strong>: tap the pulsing dot to drill into
                        nested clauses.
                    </li>
                    <li>
                        <strong>Pinch</strong> to zoom, <strong>drag</strong> to pan.
                        Use the <strong>+/−</strong> buttons for precise zoom.
                    </li>
                    <li>
                        Classical trees tend to be <strong>wider and flatter</strong> than modern ones,
                        with more parallel structures and fewer deeply nested clauses.
                    </li>
                </ul>
            </section>
        </div>
    );
};
