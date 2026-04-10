import React, { useState, useRef } from 'react';
import type { SentenceData } from '../types/grammar';
import type { GrammarRole } from '../types/grammar';
import { glossary } from '../data/glossary';
import { renderExplanation } from '../utils/renderExplanation';
import { TreeVisualKey } from './TreeVisualKey';
import { useLanguage } from '../contexts/LanguageContext';

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
    const { language } = useLanguage();
    const isZh = language === 'zh';
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
                    {isZh ? '关于本语法模型' : 'A note on this grammar model'}
                </span>
            </button>
            <div ref={contentRef} className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-[500px] opacity-100 mt-2.5' : 'max-h-0 opacity-0'}`}>
                <p className="text-[10px] text-slate-400 leading-relaxed">
                    {isZh
                        ? <>这些语法树使用<strong className="text-slate-300">话题—评论体系</strong>，这是中国语言学家历来分析自身语言的方式。它与你可能在西方语言学教科书中见过的语法体系有所不同。</>
                        : <>These trees use a <strong className="text-slate-300">Topic-Comment system</strong>, which is how Chinese linguists have traditionally described their own language. It is different from the grammar systems you might have seen in Western linguistics textbooks.</>
                    }
                </p>
                <ul className="mt-2 space-y-1 text-[10px] text-slate-400 leading-relaxed list-disc list-inside marker:text-slate-600">
                    {isZh ? (
                        <>
                            <li><strong className="text-slate-300">话题和评论</strong>是核心结构划分。每个句子先说明讨论的对象（话题），再对其进行描述（评论）。</li>
                            <li><strong className="text-slate-300">为什么把"把"和"被"标记为"核心动词"？</strong>你可能学过把和被是介词或标记词，这也是有效的描述。在我们的树中标记为核心动词，是因为这样可以让把、被、让、叫字句使用相同的树形结构。你不需要选边站——无论怎么标记，语法的运作方式都是一样的。</li>
                            <li><strong className="text-slate-300">幽灵节点</strong>。当中文因为听话人已知而省略代词时，树中会显示一个淡化的"幽灵"节点来标示该词省略的位置。这让底层逻辑清晰可见，同时不会干扰句子的表层呈现。</li>
                            <li><strong className="text-slate-300">补语子类型</strong>（结果、趋向、程度、可能）以徽章形式显示在树节点上，让你一目了然地区分它们。</li>
                        </>
                    ) : (
                        <>
                            <li><strong className="text-slate-300">Topic and Comment</strong> is the core structural split. Every sentence names what it is about (Topic), then says something about it (Comment).</li>
                            <li><strong className="text-slate-300">Why 把 and 被 are labeled "Head Verb."</strong> You may have learned that 把 and 被 are prepositions or markers. That is a valid description. In our trees, we label them as Head Verbs because it lets us show 把, 被, 让, and 叫 sentences using the same consistent tree shape. You do not need to pick sides; the grammar works the same way regardless of the label.</li>
                            <li><strong className="text-slate-300">Ghost nodes.</strong> When Mandarin drops a pronoun because the listener already knows who is being discussed, the tree shows a faded "ghost" node where that word would have been. This makes the underlying logic visible without cluttering the sentence.</li>
                            <li><strong className="text-slate-300">Complement subtypes</strong> (result, direction, degree, potential) are shown as badges on the tree nodes, so you can tell them apart at a glance.</li>
                        </>
                    )}
                </ul>
                <p className="mt-2 text-[10px] text-slate-500 leading-relaxed italic">
                    {isZh
                        ? '这些树中的标签（话题、评论、状语、补语）对应中文语法教科书中的术语（主题、评论、状语、补语），所以你在这里学到的内容可以直接迁移到中文教材中。'
                        : 'The labels in these trees (Topic, Comment, Adjunct, Complement) correspond to terms used in Chinese-language grammar textbooks (主题, 评论, 状语, 补语), so what you learn here transfers directly to Chinese-medium study materials.'
                    }
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
    const { language } = useLanguage();
    const isZh = language === 'zh';

    if (tab === 'framework') {
        return (
            <div className="space-y-5">
                {/* ── 1. Topic and Comment ── */}
                <section>
                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-fuchsia-400 mb-1.5">
                        {isZh ? '1. 话题与评论' : '1. Topic and Comment'}
                    </h3>
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                        {isZh ? (
                            <>
                                中文句子遵循一个简单的模式：先说你要谈论的对象，再对它做出描述。
                                前半部分是<GlossaryLink role="Topic" onOpenGlossary={onOpenGlossary}><span className="text-fuchsia-400 font-bold">话题</span></GlossaryLink>（框架），
                                后面的一切都是<GlossaryLink role="Comment" onOpenGlossary={onOpenGlossary}><span className="text-blue-400 font-bold">评论</span></GlossaryLink>（对话题的描述）。
                                一旦你看清了这个划分，本应用中每个句子都会变得清晰可懂。
                            </>
                        ) : (
                            <>
                                Mandarin sentences follow one simple pattern: first, name what you want to talk about. Then, say something about it.
                                The first part is the <GlossaryLink role="Topic" onOpenGlossary={onOpenGlossary}><span className="text-fuchsia-400 font-bold">Topic</span></GlossaryLink> (the frame),
                                and everything that follows is the <GlossaryLink role="Comment" onOpenGlossary={onOpenGlossary}><span className="text-blue-400 font-bold">Comment</span></GlossaryLink> (what you say about it).
                                Once you see this split, every sentence in the app starts to make sense.
                            </>
                        )}
                    </p>
                    {/* Mini example */}
                    <div className="mt-3 bg-slate-800/50 border border-slate-700/40 rounded-xl px-3 py-2.5">
                        <div className="flex items-baseline gap-2 flex-wrap">
                            <span className="text-fuchsia-300 font-bold text-sm font-chinese-ui">这只大象，</span>
                            <span className="text-blue-300 font-bold text-sm font-chinese-ui">鼻子很长。</span>
                        </div>
                        <p className="text-[10px] text-slate-400 mt-1.5 italic">
                            <span className="text-fuchsia-400 not-italic font-semibold">{isZh ? '说到这只大象，' : 'As for this elephant,'}</span>{' '}
                            <span className="text-blue-400 not-italic font-semibold">{isZh ? '鼻子很长。' : 'the trunk is very long.'}</span>
                        </p>
                    </div>
                </section>

                {/* ── 1.5. Syntax vs Semantics (Semantic Roles Toggle) ── */}
                <section>
                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-cyan-400 mb-1.5 flex items-center gap-2">
                        {isZh ? '1.5. 句法 vs 语义' : '1.5. Syntax vs Semantics'}
                        <span className="bg-cyan-900/40 text-cyan-400 px-1.5 py-0.5 rounded text-[8px] border border-cyan-700/50 flex gap-1 items-center">
                           <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                           TOGGLE
                        </span>
                    </h3>
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                        {isZh
                            ? <>有时候，英文翻译会让我们误以为某个词是"施事者"（Agent），而中文语法实际上将其视为<strong className="text-fuchsia-300">话题</strong>。这在被字句和把字句中尤其容易混淆。在顶部菜单中，你会看到一个<strong className="text-cyan-300">语义角色</strong>切换按钮。点击它会临时揭去结构标签（话题/评论），展示底层的真实角色（施事/受事），帮你看到事件本身从未改变——只是句法的焦点发生了转移！</>
                            : <>Sometimes, an English translation tricks us into thinking a word is the "doer" (Agent) when Chinese grammar treats it as a <strong className="text-fuchsia-300">Topic</strong>. This is notoriously tricky in 被 (Passive) and 把 (Disposal) sentences. In the header menu, you will see a <strong className="text-cyan-300">Semantic Roles</strong> toggle button.
                            Clicking it will temporarily peel back the structural labels (Topic/Comment) to reveal the underlying reality (Agent/Patient), helping you see that the actual event never changed—only the syntactic focal point shifted!</>
                        }
                    </p>
                </section>

                {/* ── 2. Nesting and Embedding ── */}
                <section>
                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-violet-400 mb-1.5">
                        {isZh ? '2. 嵌套与从句' : '2. Nesting and Embedding'}
                    </h3>
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                        {isZh
                            ? <>话题—评论结构是一个完整单元，这意味着一个完整的句子可以缩小并嵌入另一个句子内部，成为一个<strong className="text-violet-300">嵌套从句</strong>。你会在让（"让"）、叫（"叫"）、被（被动）等动词中看到这种现象：它们不仅仅作用于一个人，而是打开一个完整的小句子，让那个人在其中做某件事。语法树清晰地展示了这种嵌套关系。</>
                            : <>A Topic-Comment pair is a complete unit, which means an entire sentence can shrink down and fit inside another sentence as an <strong className="text-violet-300">Embedded Clause</strong>.
                            You will see this with verbs like 让 ("let"), 叫 ("tell"), and 被 (passive): they do not just act on a person, they open up a whole mini-sentence where that person does something. The tree shows this nesting clearly.</>
                        }
                    </p>
                </section>

                {/* ── 3. Word Order Rules ── */}
                <section>
                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 mb-1.5">
                        {isZh ? '3. 语序规则' : '3. Word Order Rules'}
                    </h3>
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                        {isZh
                            ? <>在评论内部，修饰语按固定顺序排列：先时间，再地点，再方式，最后是动词。所有设定场景的成分都出现在动作<strong className="text-emerald-300">之前</strong>。如果你曾经感到中文语序和英文"相反"，这就是原因。语法树将这些成分层层堆叠，让你一目了然地看到排列顺序。</>
                            : <>Inside the Comment, modifiers line up in a fixed order: time first, then place, then manner, then the verb. Everything that sets the scene comes <strong className="text-emerald-300">before</strong> the action, not after it. If you have ever wondered why Mandarin word order feels backwards compared to English, this is why. The tree stacks these elements so you can see the order at a glance.</>
                        }
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1.5 items-center">
                        {(isZh ? ['时间', '地点', '方式', '动词'] : ['Time', 'Place', 'Manner', 'Verb']).map((label, i) => (
                            <span key={label} className="flex items-center gap-1.5">
                                <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${(isZh ? label === '动词' : label === 'Verb')
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
                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-orange-400 mb-1.5">
                        {isZh ? '4. 并列句' : '4. Parallel Sentences'}
                    </h3>
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                        {isZh
                            ? <>有时中文会把两个完整的想法并列放在一起，中间没有任何连接词："困难使人成长，安逸使人退步。"这就是<strong className="text-orange-300">并列句</strong>。两半互不从属，而是平等对照。你会在谚语和文言桥梁句中经常看到这种句型。</>
                            : <>Sometimes Mandarin places two complete thoughts side by side with no connecting word at all: "Hardship makes you grow, comfort makes you decline." These are <strong className="text-orange-300">Parallel Sentences</strong>. Neither half is the "Topic" of the other; they are equal partners. You will see this pattern especially in proverbs and classical-bridge sentences.</>
                        }
                    </p>
                </section>

                {/* ── 5. Dropped Subjects ── */}
                <section>
                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-rose-400 mb-1.5">
                        {isZh ? '词语为什么会"消失"' : 'Why words disappear'}
                    </h3>
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                        {isZh
                            ? <>一旦大家都知道在谈论谁或什么，中文就会自由地省略该词。这在日常口语中极为常见："吃了吗？""吃了。"（不需要说"我"。）在语法树中，这些被省略的词以淡化的{' '}<span className="text-rose-300 font-mono text-[10px]">[幽灵]</span>{' '}节点出现，让你看到它们原本应该在的位置。</>
                            : <>Once everyone knows who or what is being discussed, Mandarin freely drops the word from the sentence. This happens constantly in natural speech:
                            "Have you eaten?" "Eaten." (No "I" needed.) In the tree, these missing words appear as faded{' '}
                            <span className="text-rose-300 font-mono text-[10px]">[ghost]</span>{' '}
                            nodes, so you can see where they would have been.</>
                        }
                    </p>
                </section>

                {/* ── 8. Tree Labels Explained ── */}
                <section>
                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-amber-400 mb-2">
                        {isZh ? '树标签速览' : 'Tree labels at a glance'}
                    </h3>
                    <div className="space-y-1.5">
                        {(isZh ? [
                            ['Adjunct', '动词前的场景铺垫：时间、地点、方式或条件'],
                            ['Attributive', '描述或限定名词，总是放在名词前面'],
                            ['Complement', '动词后的补充信息：结果、趋向、程度或可能'],
                            ['Embedded Clause', '嵌套在大句子内部的完整小句子'],
                            ['Head Noun', '名词短语的核心名词，同样带有粗边框'],
                            ['Head Verb', '核心动词，以粗底边标记'],
                            ['Particle', '小的语法词如了、吗、的、着，表示时态、语气或结构关系'],
                            ['Pivot', '同时充当前一动词宾语和后一动词主语的人'],
                            ['Subject', '评论内部执行动作的人或事物'],
                        ] : [
                            ['Adjunct', 'Sets the scene before the verb: time, place, manner, or condition'],
                            ['Attributive', 'Describes or limits a noun, always placed before it'],
                            ['Complement', 'Follows the verb to add detail: result, direction, degree, or potential'],
                            ['Embedded Clause', 'A complete mini-sentence nested inside a larger one'],
                            ['Head Noun', 'The main noun in a noun phrase, also thick-bordered'],
                            ['Head Verb', 'The main action word, marked with a thick bottom border'],
                            ['Particle', 'Small grammar words like \u4e86, \u5417, \u7684, \u7740 that show tense, mood, or structure'],
                            ['Pivot', 'A person who is the object of one verb and the actor of the next'],
                            ['Subject', 'The person or thing doing the action inside a comment'],
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
                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-violet-400 mb-2">
                        {isZh ? '如何阅读语法树' : 'How to read the tree'}
                    </h3>
                    <TreeVisualKey />
                </section>

                {/* ── Linguistic footnote (collapsible) ── */}
                <LinguisticFootnote />
            </div>
        );
    }

    // 'sentence' tab
    if (selectedSentence?.explanation) {
        const explanationText = typeof selectedSentence.explanation === 'string'
            ? selectedSentence.explanation
            : (isZh && selectedSentence.explanation?.zh)
                ? selectedSentence.explanation.zh
                : (selectedSentence.explanation?.en ?? '');
        return (
            <>
                <div className="mb-2.5">
                    <p className="text-base font-semibold text-slate-100">{selectedSentence.chinese}</p>
                    <p className="text-[10px] text-slate-400 italic mt-0.5">"{selectedSentence.translation}"</p>
                </div>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                    {renderExplanation(explanationText)}
                </p>
            </>
        );
    }

    return (
        <p className="text-[11px] text-slate-400 leading-relaxed italic">
            {isZh
                ? <>从列表中选择一个句子来查看它的语法树。点击任何{' '}<span className="text-fuchsia-400 not-italic font-bold">话题</span>或{' '}<span className="text-blue-400 not-italic font-bold">评论</span>{' '}节点来展开它，将鼠标悬停在标签上可以看到快速说明。</>
                : <>Pick a sentence from the list to see its tree. Tap any{' '}
                <span className="text-fuchsia-400 not-italic font-bold">TOPIC</span> or{' '}
                <span className="text-blue-400 not-italic font-bold">COMMENT</span>{' '}
                node to expand it, and hover any label for a quick explanation.</>
            }
        </p>
    );
};
