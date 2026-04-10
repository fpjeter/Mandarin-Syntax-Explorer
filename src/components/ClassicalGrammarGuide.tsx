import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

/**
 * Grammar guide for Classical Chinese (古文) mode.
 * Mirrors the structure and visual density of the modern GrammarGuide
 * but with content tailored to classical Chinese grammar patterns.
 */
export const ClassicalGrammarGuide: React.FC = () => {
    const { language } = useLanguage();
    const isZh = language === 'zh';

    return (
        <div className="space-y-5">
            {/* ── 1. The Big Idea ── */}
            <section>
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-amber-400 mb-1.5">
                    {isZh ? '总览' : 'The big idea'}
                </h3>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                    {isZh
                        ? <>文言文（wényánwén）是中国使用了两千多年的书面语言，从大约公元前5世纪一直延续到20世纪初。它极其<strong className="text-amber-300">精练</strong>：一个字往往承载整个现代短语的信息量。语法主要靠语序、一小套<em>虚词</em>和上下文来表达。</>
                        : <>Classical Chinese (文言文 <em>wényánwén</em>) is the literary language used across China
                        for over two thousand years, from roughly the 5th century BC to the early 1900s. It is incredibly <strong className="text-amber-300">compact</strong>: one character
                        often does the work of an entire modern phrase. Grammar is carried by
                        word order, a small set of <em>function words</em> (虚词), and context.</>
                    }
                </p>
                {/* Mini example */}
                <div className="mt-3 bg-stone-800/50 border border-stone-700/40 rounded-xl px-3 py-2.5">
                    <div className="flex items-baseline gap-2 flex-wrap">
                        <span className="text-amber-300 font-bold text-sm font-chinese-ui">學而時習之，</span>
                        <span className="text-orange-300 font-bold text-sm font-chinese-ui">不亦說乎？</span>
                    </div>
                    <p className="text-[10px] text-slate-400 mt-1.5 italic">
                        <span className="text-amber-400 not-italic font-semibold">{isZh ? '学习并按时实践它，' : 'To study and regularly practice it,'}</span>{' '}
                        <span className="text-orange-400 not-italic font-semibold">{isZh ? '难道不快乐吗？' : 'is that not a joy?'}</span>
                    </p>
                    <p className="text-[9px] text-stone-500 mt-1">— {isZh ? '孔子，《論語》' : 'Confucius,《論語》'}</p>
                </div>
            </section>

            {/* ── 2. Shared Structure with Modern Mandarin ── */}
            <section>
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-blue-400 mb-1.5">
                    {isZh ? '与现代汉语共享的结构' : 'Shared Structure with Modern Mandarin'}
                </h3>
                <p className="text-[11px] text-slate-300 leading-relaxed mb-2">
                    {isZh
                        ? <>尽管表面极为精练，文言文使用的是与现代汉语相同的<strong>话题—评论</strong>骨架。每个句子先点明讨论对象，再对其评论。</>
                        : <>Despite the compact surface, classical Chinese uses the same <strong>Topic-Comment</strong> backbone as modern Mandarin. Every sentence names what it is about, then comments on it.</>
                    }
                </p>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                    {isZh
                        ? <>修饰语仍然在动词之前，句子仍然可以嵌套为<strong className="text-violet-300">嵌套从句</strong>，对称的思想仍然以<strong className="text-orange-300">并列句</strong>的形式并排出现，不需要任何连接词。深层结构是一样的，只是表面更加压缩。</>
                        : <>Modifiers still come before the verb, sentences still nest inside each other as <strong className="text-violet-300">Embedded Clauses</strong>, and balanced ideas sit side by side as <strong className="text-orange-300">Parallel Sentences</strong> without any connecting words. The deep structure is the same; only the surface is more compressed.</>
                    }
                </p>
            </section>

            {/* ── 3. Classical vs. Modern ── */}
            <section>
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-orange-400 mb-2">
                    {isZh ? '文言 vs 白话' : 'Classical vs. Modern'}
                </h3>
                <div className="grid grid-cols-2 gap-2">
                    <div className="bg-amber-900/20 border border-amber-600/30 rounded-xl p-2.5">
                        <p className="text-[10px] font-bold text-amber-300 uppercase tracking-wider mb-1">{isZh ? '文言 文言' : 'Classical 文言'}</p>
                        <ul className="space-y-1 text-[10px] text-slate-300 leading-snug list-disc list-inside marker:text-amber-500/50">
                            {isZh ? (
                                <>
                                    <li>一字即一词</li>
                                    <li>虚词（之/乎/者/也）承载语法</li>
                                    <li>词类灵活多变</li>
                                    <li>极度依赖上下文</li>
                                </>
                            ) : (
                                <>
                                    <li>One character = one word</li>
                                    <li>Function words (之/乎/者/也) carry grammar</li>
                                    <li>Word classes are flexible</li>
                                    <li>Extremely context-heavy</li>
                                </>
                            )}
                        </ul>
                    </div>
                    <div className="bg-blue-900/20 border border-blue-600/30 rounded-xl p-2.5">
                        <p className="text-[10px] font-bold text-blue-300 uppercase tracking-wider mb-1">{isZh ? '白话 白话' : 'Modern 白话'}</p>
                        <ul className="space-y-1 text-[10px] text-slate-300 leading-snug list-disc list-inside marker:text-blue-500/50">
                            {isZh ? (
                                <>
                                    <li>多字词语和复合词</li>
                                    <li>结构助词（的/了/着）承载语法</li>
                                    <li>语序更为固定</li>
                                    <li>时态和体貌有显性标记</li>
                                </>
                            ) : (
                                <>
                                    <li>Multi-character words and compounds</li>
                                    <li>Structural particles (的/了/着) do the grammar</li>
                                    <li>Word order is more fixed</li>
                                    <li>Tense and aspect are marked explicitly</li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </section>

            {/* ── 3. Key Function Words (虚词) ── */}
            <section>
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-yellow-400 mb-2">
                    {isZh ? '核心虚词 · 虛詞' : 'Key function words · 虛詞'}
                </h3>
                <p className="text-[10px] text-slate-400 mb-2 italic">
                    {isZh
                        ? '这些小字承载了所有语法重量。学会它们是阅读文言文的关键。'
                        : 'These small words carry all the grammatical weight. Learning them is the key to reading classical texts.'
                    }
                </p>
                <div className="space-y-1.5">
                    {(isZh ? [
                        ['之 zhī', '万能工具：表领属（"的"）、代词宾语（"它"）、或结构填充词'],
                        ['者 zhě', '标记人或事物："……的人"或"……的事物"'],
                        ['所 suǒ', '指向动作的承受者："所……的"'],
                        ['而 ér', '连接动作或想法："然后"、"但是"、"却"'],
                        ['乎 hū', '把陈述句变成疑问句，常用于反问'],
                        ['也 yě', '以断言收束陈述："X是Y。"表判断，不是疑问'],
                        ['於 yú', '标记地点、来源或比较："在、从、到、比"'],
                        ['以 yǐ', '引入工具或目的："用、凭借、为了"'],
                        ['非 fēi', '否定身份："不是X"（不同于"不"否定动作）'],
                        ['莫 mò', '全面否定："没有人"或"没有任何事物"'],
                    ] : [
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
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-amber-400 mb-1.5">
                    {isZh ? '之：骨干虚词' : '之: the backbone particle'}
                </h3>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                    {isZh
                        ? '"之"可能是整个文言文中出现频率最高的字。它的含义完全取决于出现的位置：'
                        : '之 is probably the most common character in all of classical Chinese. What it means depends entirely on where it appears:'
                    }
                </p>
                <div className="mt-2 space-y-1.5">
                    <div className="bg-stone-800/40 border border-stone-700/30 rounded-lg px-3 py-2">
                        <p className="text-[10px] text-amber-300 font-bold">{isZh ? '表示领属（"的"）' : "Showing possession ('s)"}</p>
                        <p className="text-[10px] text-slate-300 mt-0.5">
                            <span className="text-amber-200 font-chinese-ui">師者，所以傳道授業解惑<strong className="text-amber-400">之</strong>者也。</span>
                        </p>
                        <p className="text-[9px] text-slate-500 italic mt-0.5">
                            {isZh ? '之 = "的"，连接"传道授业解惑"和"者"（……的人）' : '之 = "of", linking "transmitting the Way" to 者 "one who"'}
                        </p>
                    </div>
                    <div className="bg-stone-800/40 border border-stone-700/30 rounded-lg px-3 py-2">
                        <p className="text-[10px] text-amber-300 font-bold">{isZh ? '代词宾语' : 'Object pronoun'}</p>
                        <p className="text-[10px] text-slate-300 mt-0.5">
                            <span className="text-amber-200 font-chinese-ui">學而時習<strong className="text-amber-400">之</strong></span>
                        </p>
                        <p className="text-[9px] text-slate-500 italic mt-0.5">
                            {isZh ? '之 = "它"，做直接宾语，指代前文学过的内容' : '之 = "it", a direct object referring to what was previously studied'}
                        </p>
                    </div>
                </div>
            </section>

            {/* ── 5. Rhetorical Patterns ── */}
            <section>
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-orange-400 mb-1.5">
                    {isZh ? '反问句 · 反問' : 'Rhetorical questions · 反問'}
                </h3>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                    {isZh
                        ? <>文言文用句末虚词构成反问句。最经典的句式是<span className="text-orange-300 font-bold">不亦…乎</span>：</>
                        : <>Classical Chinese forms rhetorical questions with sentence-final particles.
                        The most famous pattern is <span className="text-orange-300 font-bold">不亦…乎</span>:</>
                    }
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
                    <p className="text-[9px] text-slate-500 italic mt-1.5">
                        {isZh ? '"难道不也是（形容词）吗？" 期望听者表示认同' : '"Is that not also (adj)?" Expects agreement from the listener'}
                    </p>
                </div>
                <p className="text-[10px] text-slate-400 mt-2 italic">
                    {isZh ? (
                        <>其他疑问标记：<span className="text-orange-300 not-italic font-chinese-ui">哉</span>（感叹式），
                        {' '}<span className="text-orange-300 not-italic font-chinese-ui">焉</span>（何处/怎样），
                        {' '}<span className="text-orange-300 not-italic font-chinese-ui">邪/耶</span>（yé，疑问语气词）。</>
                    ) : (
                        <>Other question markers: <span className="text-orange-300 not-italic font-chinese-ui">哉</span> (exclamatory),
                        {' '}<span className="text-orange-300 not-italic font-chinese-ui">焉</span> (where/how),
                        {' '}<span className="text-orange-300 not-italic font-chinese-ui">邪/耶</span> (yé, question particle).</>
                    )}
                </p>
            </section>

            {/* ── 6. Negation ── */}
            <section>
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-rose-400 mb-1.5">
                    {isZh ? '否定 · 否定' : 'Negation · 否定'}
                </h3>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                    {isZh
                        ? '文言文有几个不同的否定词，各有其作用范围和语感色彩：'
                        : 'Classical Chinese has several different negators, each with its own scope and flavor:'
                    }
                </p>
                <div className="mt-2 grid grid-cols-3 gap-1.5">
                    {(isZh ? [
                        ['不 bù', '日常否定词，否定动作和性质', 'bg-rose-900/20 border-rose-600/30'],
                        ['非 fēi', '否定身份："不是X"', 'bg-red-900/20 border-red-600/30'],
                        ['莫 mò', '全面否定："没有人"或"没有任何"', 'bg-pink-900/20 border-pink-600/30'],
                    ] : [
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
                    {isZh ? (
                        <>你还会看到：<span className="text-rose-300 not-italic font-chinese-ui">勿</span>（祈使否定："不要！"），
                        以及<span className="text-rose-300 not-italic font-chinese-ui">未</span>（"尚未、还没有"）。</>
                    ) : (
                        <>You will also see: <span className="text-rose-300 not-italic font-chinese-ui">勿</span> (a command: "do not!"),
                        and <span className="text-rose-300 not-italic font-chinese-ui">未</span> ("not yet, has not").</>
                    )}
                </p>
            </section>

            {/* ── 7. Coverbs (於/以) ── */}
            <section>
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 mb-1.5">
                    {isZh ? '介词 · 介詞' : 'Coverbs · 介詞'}
                </h3>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                    {isZh
                        ? <>文言文使用<strong className="text-emerald-300">介词</strong>（介詞），即具有介词功能的动作词（"在"、"用"、"从"）。有些出现在动词前，有些在动词后。</>
                        : <>Classical Chinese uses <strong className="text-emerald-300">coverbs</strong> (介詞), action words that function like prepositions ('at', 'with', 'from'). Some come before the verb, others follow it.</>
                    }
                </p>
                <div className="mt-2 space-y-1.5">
                    <div className="bg-stone-800/40 border border-stone-700/30 rounded-lg px-3 py-2">
                        <p className="text-[10px] text-emerald-300 font-bold">{isZh ? '於：通常在动词之后' : '於: usually after the verb'}</p>
                        <div className="flex items-center gap-1.5 flex-wrap mt-1">
                            {[isZh ? '动词' : 'Verb', '→', '於 + NP'].map((part, i) => (
                                <span key={i} className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${i === 1 ? 'text-slate-500' :
                                        i === 2 ? 'bg-emerald-900/30 text-emerald-300 border border-emerald-500/40'
                                            : 'bg-teal-900/40 text-teal-200 border border-teal-500/50'
                                    }`}>
                                    {part}
                                </span>
                            ))}
                        </div>
                        <p className="text-[9px] text-slate-500 italic mt-1">
                            {isZh
                                ? <>於 = 在/从/到。<span className="not-italic font-chinese-ui text-emerald-300">生<strong>於</strong>憂患</span> "兴盛<strong>于</strong>忧患"（於在动词"生"之后）</>
                                : <>於 = at/in/from/to. <span className="not-italic font-chinese-ui text-emerald-300">生<strong>於</strong>憂患</span> "born <strong>from</strong> hardship" (於 follows the verb 生)</>
                            }
                        </p>
                    </div>
                    <div className="bg-stone-800/40 border border-stone-700/30 rounded-lg px-3 py-2">
                        <p className="text-[10px] text-emerald-300 font-bold">{isZh ? '以：通常在动词之前' : '以: usually before the verb'}</p>
                        <div className="flex items-center gap-1.5 flex-wrap mt-1">
                            {['以 + NP', '→', isZh ? '动词' : 'Verb'].map((part, i) => (
                                <span key={i} className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${i === 1 ? 'text-slate-500' :
                                        i === 0 ? 'bg-emerald-900/30 text-emerald-300 border border-emerald-500/40'
                                            : 'bg-teal-900/40 text-teal-200 border border-teal-500/50'
                                    }`}>
                                    {part}
                                </span>
                            ))}
                        </div>
                        <p className="text-[9px] text-slate-500 italic mt-1">
                            {isZh
                                ? <>以 = 用/凭借。<span className="not-italic font-chinese-ui text-emerald-300"><strong>以</strong>德報怨</span> "<strong>以</strong>美德回报怨恨"</>
                                : <>以 = using/by means of. <span className="not-italic font-chinese-ui text-emerald-300"><strong>以</strong>德報怨</span> "<strong>with</strong> virtue repay resentment"</>
                            }
                        </p>
                    </div>
                </div>
            </section>

            {/* ── 8. 而 — Sequential & Contrastive Connector ── */}
            <section>
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-violet-400 mb-1.5">
                    {isZh ? '而：连接词' : '而: the connective'}
                </h3>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                    {isZh
                        ? '"而"是万能连接词。它连接两个动作或状态，具体关系取决于语境：'
                        : '而 is the all-purpose connector. It links two actions or states, and the exact relationship depends on context:'
                    }
                </p>
                <div className="mt-2 space-y-1">
                    {(isZh ? [
                        ['顺承', '學而時習之', '"学习然后实践它"'],
                        ['转折', '學而不思則罔', '"学习却不思考就迷惘"'],
                        ['让步', '人不知而不慍', '"别人不了解却不恼怒"'],
                    ] : [
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
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-amber-400 mb-2">
                    {isZh ? '树标签速览' : 'Tree labels at a glance'}
                </h3>
                <div className="space-y-1.5">
                    {(isZh ? [
                        ['Topic', '句子讨论的对象，和现代汉语一样'],
                        ['Comment', '对话题的全部描述'],
                        ['Head Verb', '核心动词，以粗底边标记'],
                        ['Adjunct', '动词前修饰语：介词、否定词或副词'],
                        ['Complement', '动词后成分：结果、趋向或延续'],
                        ['Connective', '连接虚词如而、则、故'],
                        ['Particle', '虚词：之/乎/者/也/焉'],
                    ] : [
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
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-1.5">
                    {isZh ? '使用语法树' : 'Using the tree'}
                </h3>
                <ul className="space-y-1.5 text-[11px] text-slate-300 leading-relaxed list-disc list-inside marker:text-stone-500">
                    {isZh ? (
                        <>
                            <li><strong>悬停</strong>（桌面端）或<strong>长按</strong>（移动端）任何节点来查看其功能。</li>
                            <li><strong>展开和折叠</strong>：点击脉冲圆点来深入嵌套从句。</li>
                            <li><strong>双指缩放</strong>来放大缩小，<strong>拖拽</strong>来平移。使用<strong>+/−</strong>按钮精确缩放。</li>
                            <li>文言文语法树通常比现代汉语的<strong>更宽更扁</strong>，有更多并列结构，嵌套较浅。</li>
                        </>
                    ) : (
                        <>
                            <li><strong>Hover</strong> (desktop) or <strong>long-press</strong> (mobile) any node to see what it does.</li>
                            <li><strong>Expand and collapse</strong>: tap the pulsing dot to drill into nested clauses.</li>
                            <li><strong>Pinch</strong> to zoom, <strong>drag</strong> to pan. Use the <strong>+/−</strong> buttons for precise zoom.</li>
                            <li>Classical trees tend to be <strong>wider and flatter</strong> than modern ones, with more parallel structures and fewer deeply nested clauses.</li>
                        </>
                    )}
                </ul>
            </section>
        </div>
    );
};
