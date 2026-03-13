import type { SentenceData } from '../types/grammar';

/**
 * Classical Chinese (文言文) example quotes for the easter-egg explorer.
 * Each quote reuses the same SentenceData / GrammarNodeData types as the
 * modern Mandarin databank, so all existing components (SyntaxTree,
 * SentenceHeader, SentenceSidebar) render them unchanged.
 */
export const classicalSentences: SentenceData[] = [
    /* ───────── Rhetorical Patterns (反問) ───────── */
    {
        id: 'cc1',
        category: 'Rhetorical Patterns (反問)',
        source: '《論語》· 學而篇',
        author: 'Confucius',
        chinese: '學而時習之，不亦說乎？',
        pinyin: 'Xué ér shí xí zhī, bù yì yuè hū?',
        translation: 'To study and regularly practice it, is that not a joy?',
        relatedIds: ['s14'],
        explanation: 'The very first line of the **Analects** proclaims that the deepest satisfaction comes from putting learning into practice. Knowledge is not passive but something to be lived and revisited. Confucius frames this as a rhetorical question, gently insisting that the listener already knows the answer: of course it is a joy. *Grammatically,* **而** (ér) links two actions sequentially: study, *then* practice. It works exactly like a serial-verb connector. The **不亦…乎** frame is a rhetorical question pattern meaning "is it not…?" that *asserts* rather than asks. In modern Mandarin, you would need explicit connectors and question particles; here, 而 and 乎 handle everything elegantly in just ten characters. The **之** (zhī) pronoun ("it") refers back to what was studied, a very common classical anaphoric device.',
        tree: {
            id: 'cc1-root',
            role: 'Sentence',
            children: [
                {
                    id: 'cc1-clause1',
                    role: 'Topic',
                    subRole: 'conditional clause',
                    children: [
                        {
                            id: 'cc1-c1-v1',
                            role: 'Head Verb',
                            text: { hanzi: '學', pinyin: 'xué', translation: 'study' }
                        },
                        {
                            id: 'cc1-c1-er',
                            role: 'Particle',
                            subRole: 'sequential connective',
                            text: { hanzi: '而', pinyin: 'ér', translation: 'and then' }
                        },
                        {
                            id: 'cc1-c1-adv',
                            role: 'Adjunct',
                            subRole: 'time / frequency',
                            text: { hanzi: '時', pinyin: 'shí', translation: 'regularly' }
                        },
                        {
                            id: 'cc1-c1-v2',
                            role: 'Head Verb',
                            text: { hanzi: '習', pinyin: 'xí', translation: 'practice' }
                        },
                        {
                            id: 'cc1-c1-obj',
                            role: 'Object',
                            subRole: 'anaphoric pronoun',
                            text: { hanzi: '之', pinyin: 'zhī', translation: 'it' }
                        }
                    ]
                },
                {
                    id: 'cc1-clause2',
                    role: 'Comment',
                    subRole: 'rhetorical question (不亦…乎)',
                    children: [
                        {
                            id: 'cc1-c2-neg',
                            role: 'Adjunct',
                            subRole: 'negation',
                            text: { hanzi: '不', pinyin: 'bù', translation: 'not' }
                        },
                        {
                            id: 'cc1-c2-yi',
                            role: 'Adjunct',
                            subRole: 'rhetorical intensifier',
                            text: { hanzi: '亦', pinyin: 'yì', translation: 'also / indeed' }
                        },
                        {
                            id: 'cc1-c2-pred',
                            role: 'Head Verb',
                            subRole: 'adjectival predicate',
                            text: { hanzi: '說', pinyin: 'yuè', translation: 'joyful' }
                        },
                        {
                            id: 'cc1-c2-hu',
                            role: 'Particle',
                            subRole: 'interrogative (rhetorical)',
                            text: { hanzi: '乎', pinyin: 'hū', translation: '(rhetorical question marker)' }
                        }
                    ]
                }
            ]
        }
    },

    /* ───────── Nominalizers (者/所) ───────── */
    {
        id: 'cc2',
        category: 'Nominalizers (者/所)',
        source: '《論語》· 雍也篇',
        author: 'Confucius',
        chinese: '知之者不如好之者，好之者不如樂之者。',
        pinyin: 'Zhī zhī zhě bù rú hào zhī zhě, hào zhī zhě bù rú lè zhī zhě.',
        translation: 'One who knows it is not as good as one who loves it; one who loves it is not as good as one who delights in it.',
        relatedIds: ['s15'],
        explanation: 'Confucius argues that **genuine engagement** surpasses mere knowledge: loving what you study is better than simply knowing it, and finding joy in it is the highest form of mastery. The progression from knowing → loving → delighting maps out a hierarchy of learning that remains influential in Chinese pedagogy today. *Grammatically,* the sentence showcases the classical **者** (zhě) nominalizer, which turns a verb phrase into "the one who [verb]s." The **不如** comparative pattern ("is not as good as") builds a rising chain, and each clause follows the same template: **[verb] 之 者 不如 [verb] 之 者**. The **之** (zhī) in each phrase is an object pronoun ("it"), placed between the verb and 者. This repetitive parallel structure is a hallmark of classical rhetoric: it builds rhythm and emphasis while making the grammar crystal clear.',
        tree: {
            id: 'cc2-root',
            role: 'Sentence',
            children: [
                {
                    id: 'cc2-clause1',
                    role: 'Topic',
                    subRole: 'first comparison',
                    children: [
                        {
                            id: 'cc2-c1-subj',
                            role: 'Subject',
                            subRole: '者-nominalization',
                            children: [
                                {
                                    id: 'cc2-c1-subj-v',
                                    role: 'Head Verb',
                                    text: { hanzi: '知', pinyin: 'zhī', translation: 'know' }
                                },
                                {
                                    id: 'cc2-c1-subj-obj',
                                    role: 'Object',
                                    text: { hanzi: '之', pinyin: 'zhī', translation: 'it' }
                                },
                                {
                                    id: 'cc2-c1-subj-zhe',
                                    role: 'Particle',
                                    subRole: 'nominalizer',
                                    text: { hanzi: '者', pinyin: 'zhě', translation: '(the one who…)' }
                                }
                            ]
                        },
                        {
                            id: 'cc2-c1-pred',
                            role: 'Predicate',
                            subRole: 'comparative (不如)',
                            children: [
                                {
                                    id: 'cc2-c1-pred-neg',
                                    role: 'Adjunct',
                                    subRole: 'negation',
                                    text: { hanzi: '不如', pinyin: 'bù rú', translation: 'is not equal to' }
                                },
                                {
                                    id: 'cc2-c1-pred-obj',
                                    role: 'Object',
                                    subRole: '者-nominalization',
                                    children: [
                                        {
                                            id: 'cc2-c1-pred-obj-v',
                                            role: 'Head Verb',
                                            text: { hanzi: '好', pinyin: 'hào', translation: 'love' }
                                        },
                                        {
                                            id: 'cc2-c1-pred-obj-o',
                                            role: 'Object',
                                            text: { hanzi: '之', pinyin: 'zhī', translation: 'it' }
                                        },
                                        {
                                            id: 'cc2-c1-pred-obj-zhe',
                                            role: 'Particle',
                                            subRole: 'nominalizer',
                                            text: { hanzi: '者', pinyin: 'zhě', translation: '(the one who…)' }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'cc2-clause2',
                    role: 'Comment',
                    subRole: 'second comparison (climax)',
                    children: [
                        {
                            id: 'cc2-c2-subj',
                            role: 'Subject',
                            subRole: '者-nominalization',
                            children: [
                                {
                                    id: 'cc2-c2-subj-v',
                                    role: 'Head Verb',
                                    text: { hanzi: '好', pinyin: 'hào', translation: 'love' }
                                },
                                {
                                    id: 'cc2-c2-subj-obj',
                                    role: 'Object',
                                    text: { hanzi: '之', pinyin: 'zhī', translation: 'it' }
                                },
                                {
                                    id: 'cc2-c2-subj-zhe',
                                    role: 'Particle',
                                    subRole: 'nominalizer',
                                    text: { hanzi: '者', pinyin: 'zhě', translation: '(the one who…)' }
                                }
                            ]
                        },
                        {
                            id: 'cc2-c2-pred',
                            role: 'Predicate',
                            subRole: 'comparative (不如)',
                            children: [
                                {
                                    id: 'cc2-c2-pred-neg',
                                    role: 'Adjunct',
                                    subRole: 'negation',
                                    text: { hanzi: '不如', pinyin: 'bù rú', translation: 'is not equal to' }
                                },
                                {
                                    id: 'cc2-c2-pred-obj',
                                    role: 'Object',
                                    subRole: '者-nominalization',
                                    children: [
                                        {
                                            id: 'cc2-c2-pred-obj-v',
                                            role: 'Head Verb',
                                            text: { hanzi: '樂', pinyin: 'lè', translation: 'delight in' }
                                        },
                                        {
                                            id: 'cc2-c2-pred-obj-o',
                                            role: 'Object',
                                            text: { hanzi: '之', pinyin: 'zhī', translation: 'it' }
                                        },
                                        {
                                            id: 'cc2-c2-pred-obj-zhe',
                                            role: 'Particle',
                                            subRole: 'nominalizer',
                                            text: { hanzi: '者', pinyin: 'zhě', translation: '(the one who…)' }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },

    /* ───────── Coverbs & Prepositions (於/以/焉) ───────── */
    {
        id: 'cc3',
        category: 'Coverbs & Prepositions (於/以/焉)',
        source: '《論語》· 述而篇',
        author: 'Confucius',
        chinese: '三人行，必有我師焉。',
        pinyin: 'Sān rén xíng, bì yǒu wǒ shī yān.',
        translation: 'When three people walk together, there is certainly my teacher among them.',
        explanation: 'Confucius teaches radical intellectual humility: **everyone you encounter has something to teach you**. Even in a group as small as three, there is always someone whose strengths you can learn from (and whose faults you can learn to avoid). This attitude of perpetual openness to learning remains a core Confucian value. *Grammatically,* the proverb illustrates the classical coverb **焉** (yān), a fusional word that packs "in/among them" into a single character , combining a preposition ("among") with its pronoun object ("them"). The sentence opens with a conditional clause: **三人行** ("three people walk") sets the scene, then the Comment asserts **必有** ("certainly there exists") **我師** ("my teacher"). In modern Mandarin, you would need a full phrase like 在其中 ("among them"); classical Chinese compresses this into one elegant syllable.',
        tree: {
            id: 'cc3-root',
            role: 'Sentence',
            children: [
                {
                    id: 'cc3-topic',
                    role: 'Topic',
                    subRole: 'conditional clause',
                    children: [
                        {
                            id: 'cc3-t-subj',
                            role: 'Subject',
                            children: [
                                {
                                    id: 'cc3-t-subj-num',
                                    role: 'Attributive',
                                    text: { hanzi: '三', pinyin: 'sān', translation: 'three' }
                                },
                                {
                                    id: 'cc3-t-subj-n',
                                    role: 'Head Noun',
                                    text: { hanzi: '人', pinyin: 'rén', translation: 'people' }
                                }
                            ]
                        },
                        {
                            id: 'cc3-t-v',
                            role: 'Head Verb',
                            text: { hanzi: '行', pinyin: 'xíng', translation: 'walk / travel' }
                        }
                    ]
                },
                {
                    id: 'cc3-comment',
                    role: 'Comment',
                    children: [
                        {
                            id: 'cc3-c-adv',
                            role: 'Adjunct',
                            subRole: 'certainty',
                            text: { hanzi: '必', pinyin: 'bì', translation: 'certainly' }
                        },
                        {
                            id: 'cc3-c-v',
                            role: 'Head Verb',
                            subRole: 'existential',
                            text: { hanzi: '有', pinyin: 'yǒu', translation: 'there is' }
                        },
                        {
                            id: 'cc3-c-obj',
                            role: 'Object',
                            children: [
                                {
                                    id: 'cc3-c-obj-attr',
                                    role: 'Attributive',
                                    text: { hanzi: '我', pinyin: 'wǒ', translation: 'my' }
                                },
                                {
                                    id: 'cc3-c-obj-n',
                                    role: 'Head Noun',
                                    text: { hanzi: '師', pinyin: 'shī', translation: 'teacher' }
                                }
                            ]
                        },
                        {
                            id: 'cc3-c-yan',
                            role: 'Particle',
                            subRole: 'fusional coverb (= 於 + 之)',
                            text: { hanzi: '焉', pinyin: 'yān', translation: '(among them)' }
                        }
                    ]
                }
            ]
        }
    },

    /* ───────── Classical Negation (非/勿/莫) ───────── */
    {
        id: 'cc4',
        category: 'Classical Negation (非/勿/莫)',
        source: '《道德經》· 第一章',
        author: 'Laozi',
        chinese: '道可道，非常道。',
        pinyin: 'Dào kě dào, fēi cháng dào.',
        translation: 'The Way that can be spoken of is not the constant Way.',
        relatedIds: ['s10', 's11'],
        explanation: 'The famous opening of the **Tao Te Ching** announces that ultimate reality, the Dao, **transcends language**. Any "Way" that can be captured in words is, by definition, not the eternal, unchanging Way. Laozi is warning the reader at the outset that his entire text is a paradox: words pointing toward something beyond words. *Grammatically,* the same character **道** (dào) appears three times with three different roles: first as a noun ("the Way"), then as a verb ("to speak/articulate"), and finally as a noun again ("the [true] Way"). **可** (kě) before the verb means "can be," similar to the modern potential complement pattern. **非** (fēi) is the classical copula negator, meaning "is not," negating the entire identity of the subject. **常** (cháng) means "constant/eternal."',
        tree: {
            id: 'cc4-root',
            role: 'Sentence',
            children: [
                {
                    id: 'cc4-topic',
                    role: 'Topic',
                    subRole: 'relative clause (the Way that can be spoken)',
                    children: [
                        {
                            id: 'cc4-t-subj',
                            role: 'Head Noun',
                            text: { hanzi: '道', pinyin: 'dào', translation: 'the Way' }
                        },
                        {
                            id: 'cc4-t-pred',
                            role: 'Verb Phrase',
                            subRole: 'potential complement',
                            children: [
                                {
                                    id: 'cc4-t-pred-ke',
                                    role: 'Adjunct',
                                    subRole: 'potential marker',
                                    text: { hanzi: '可', pinyin: 'kě', translation: 'can be' }
                                },
                                {
                                    id: 'cc4-t-pred-v',
                                    role: 'Head Verb',
                                    text: { hanzi: '道', pinyin: 'dào', translation: 'spoken / articulated' }
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'cc4-comment',
                    role: 'Comment',
                    subRole: 'negated identity (非…)',
                    children: [
                        {
                            id: 'cc4-c-fei',
                            role: 'Copula',
                            subRole: 'negative copula',
                            text: { hanzi: '非', pinyin: 'fēi', translation: 'is not' }
                        },
                        {
                            id: 'cc4-c-obj',
                            role: 'Noun Phrase',
                            children: [
                                {
                                    id: 'cc4-c-obj-attr',
                                    role: 'Attributive',
                                    text: { hanzi: '常', pinyin: 'cháng', translation: 'constant / eternal' }
                                },
                                {
                                    id: 'cc4-c-obj-n',
                                    role: 'Head Noun',
                                    text: { hanzi: '道', pinyin: 'dào', translation: 'the Way' }
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },

    /* ───────── Genitive & Modification (之) ───────── */
    {
        id: 'cc5',
        category: 'Genitive & Modification (之)',
        source: '《道德經》· 第六十四章',
        author: 'Laozi',
        chinese: '千里之行，始於足下。',
        pinyin: 'Qiān lǐ zhī xíng, shǐ yú zú xià.',
        translation: 'A journey of a thousand miles begins beneath one\'s feet.',
        explanation: 'Laozi reminds us that **every great endeavor starts with a single, humble step**. No matter how daunting the goal, the journey begins right where you stand. This is one of the most universally quoted pieces of Chinese wisdom, used to encourage perseverance and to demystify large ambitions. *Grammatically,* the proverb demonstrates the two most important classical function words in a single line. **之** (zhī) serves as a genitive marker: "千里之行" literally reads "a thousand lǐ *\'s* journey." Then **於** (yú) acts as a locative preposition meaning "at/from." "始於足下" reads "begins at foot-below," i.e., "begins beneath one\'s feet." In modern Mandarin, 之 has been replaced by 的, and 於 by 在 or 从.',
        tree: {
            id: 'cc5-root',
            role: 'Sentence',
            children: [
                {
                    id: 'cc5-topic',
                    role: 'Topic',
                    children: [
                        {
                            id: 'cc5-t-attr',
                            role: 'Attributive',
                            children: [
                                {
                                    id: 'cc5-t-attr-num',
                                    role: 'Noun',
                                    text: { hanzi: '千里', pinyin: 'qiān lǐ', translation: 'a thousand miles' }
                                },
                                {
                                    id: 'cc5-t-attr-zhi',
                                    role: 'Particle',
                                    subRole: 'genitive marker',
                                    text: { hanzi: '之', pinyin: 'zhī', translation: '(of / \'s)' }
                                }
                            ]
                        },
                        {
                            id: 'cc5-t-n',
                            role: 'Head Noun',
                            text: { hanzi: '行', pinyin: 'xíng', translation: 'journey' }
                        }
                    ]
                },
                {
                    id: 'cc5-comment',
                    role: 'Comment',
                    children: [
                        {
                            id: 'cc5-c-v',
                            role: 'Head Verb',
                            text: { hanzi: '始', pinyin: 'shǐ', translation: 'begins' }
                        },
                        {
                            id: 'cc5-c-pp',
                            role: 'Adjunct',
                            subRole: 'locative (於-phrase)',
                            children: [
                                {
                                    id: 'cc5-c-pp-prep',
                                    role: 'Preposition',
                                    text: { hanzi: '於', pinyin: 'yú', translation: 'at / from' }
                                },
                                {
                                    id: 'cc5-c-pp-n',
                                    role: 'Noun Phrase',
                                    children: [
                                        {
                                            id: 'cc5-c-pp-n1',
                                            role: 'Head Noun',
                                            text: { hanzi: '足', pinyin: 'zú', translation: 'foot' }
                                        },
                                        {
                                            id: 'cc5-c-pp-n2',
                                            role: 'Particle',
                                            subRole: 'localizer',
                                            text: { hanzi: '下', pinyin: 'xià', translation: 'below / beneath' }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },

    /* ───────── Sequential Actions (而) ───────── */
    {
        id: 'cc6',
        category: 'Sequential Actions (而)',
        source: '《論語》· 為政篇',
        author: 'Confucius',
        chinese: '溫故而知新，可以為師矣。',
        pinyin: 'Wēn gù ér zhī xīn, kě yǐ wéi shī yǐ.',
        translation: 'To review the old and understand the new, with this one can be a teacher.',
        explanation: 'Confucius defines the essence of good teaching: a true teacher does not merely memorize the past but **gains fresh insight from revisiting old material**. The ability to draw new understanding from familiar knowledge is what qualifies someone to guide others. This idea shaped the Chinese educational tradition of repeated, reflective study. *Grammatically,* **而** (ér) chains two actions: **溫故** ("review the old") and **知新** ("understand the new"), implying the second *arises from* the first. The verbs **溫** and **知** take adjective-turned-nouns as objects: **故** (old things) and **新** (new things); classical Chinese freely converts adjectives to nouns without morphological change. The second clause introduces **可以** (kě yǐ, "can thereby") and **為** (wéi, "serve as"), followed by **矣** (yǐ), a sentence-final particle expressing a settled conclusion.',
        tree: {
            id: 'cc6-root',
            role: 'Sentence',
            children: [
                {
                    id: 'cc6-topic',
                    role: 'Topic',
                    subRole: 'sequential actions (而)',
                    children: [
                        {
                            id: 'cc6-t-vp1',
                            role: 'Verb Phrase',
                            children: [
                                {
                                    id: 'cc6-t-vp1-v',
                                    role: 'Head Verb',
                                    text: { hanzi: '溫', pinyin: 'wēn', translation: 'review / warm up' }
                                },
                                {
                                    id: 'cc6-t-vp1-obj',
                                    role: 'Object',
                                    subRole: 'adj → noun',
                                    text: { hanzi: '故', pinyin: 'gù', translation: 'the old / past learning' }
                                }
                            ]
                        },
                        {
                            id: 'cc6-t-er',
                            role: 'Particle',
                            subRole: 'sequential connective',
                            text: { hanzi: '而', pinyin: 'ér', translation: 'and thereby' }
                        },
                        {
                            id: 'cc6-t-vp2',
                            role: 'Verb Phrase',
                            children: [
                                {
                                    id: 'cc6-t-vp2-v',
                                    role: 'Head Verb',
                                    text: { hanzi: '知', pinyin: 'zhī', translation: 'understand' }
                                },
                                {
                                    id: 'cc6-t-vp2-obj',
                                    role: 'Object',
                                    subRole: 'adj → noun',
                                    text: { hanzi: '新', pinyin: 'xīn', translation: 'the new / new insight' }
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'cc6-comment',
                    role: 'Comment',
                    children: [
                        {
                            id: 'cc6-c-keyi',
                            role: 'Adjunct',
                            subRole: 'potential',
                            text: { hanzi: '可以', pinyin: 'kě yǐ', translation: 'can thereby' }
                        },
                        {
                            id: 'cc6-c-v',
                            role: 'Head Verb',
                            subRole: 'copulative',
                            text: { hanzi: '為', pinyin: 'wéi', translation: 'serve as / become' }
                        },
                        {
                            id: 'cc6-c-obj',
                            role: 'Object',
                            text: { hanzi: '師', pinyin: 'shī', translation: 'teacher' }
                        },
                        {
                            id: 'cc6-c-yi',
                            role: 'Particle',
                            subRole: 'conclusive',
                            text: { hanzi: '矣', pinyin: 'yǐ', translation: '(conclusion / new state)' }
                        }
                    ]
                }
            ]
        }
    },

    /* ───────── Classical Negation (非/勿/莫) — 勿 prohibitive ───────── */
    {
        id: 'cc7',
        category: 'Classical Negation (非/勿/莫)',
        source: '《論語》· 衛靈公篇',
        author: 'Confucius',
        chinese: '己所不欲，勿施於人。',
        pinyin: 'Jǐ suǒ bù yù, wù shī yú rén.',
        translation: 'What you yourself do not desire, do not impose upon others.',
        explanation: 'This is the Confucian **"Golden Rule"**, a universal ethical principle stated in the negative: **do not do to others what you would not want done to yourself**. It remains one of the most quoted moral maxims in Chinese culture and bears striking similarity to formulations in other world traditions. *Grammatically,* **所** (suǒ) is a nominalizer that works from the *object* side: "所不欲" means "that which (one) does not desire." Combined with **己** (jǐ, "oneself"), the Topic becomes "what oneself does not desire." The Comment uses **勿** (wù), the classical prohibitive negator meaning "do not!", stronger and more formal than 不. The verb **施** (shī, "impose/inflict") takes a **於** (yú) prepositional phrase: "upon others." Eight characters encode an entire ethical system.',
        tree: {
            id: 'cc7-root',
            role: 'Sentence',
            children: [
                {
                    id: 'cc7-topic',
                    role: 'Topic',
                    subRole: '所-nominalization (that which…)',
                    children: [
                        {
                            id: 'cc7-t-self',
                            role: 'Subject',
                            text: { hanzi: '己', pinyin: 'jǐ', translation: 'oneself' }
                        },
                        {
                            id: 'cc7-t-suo',
                            role: 'Particle',
                            subRole: 'object nominalizer',
                            text: { hanzi: '所', pinyin: 'suǒ', translation: '(that which…)' }
                        },
                        {
                            id: 'cc7-t-neg',
                            role: 'Adjunct',
                            subRole: 'negation',
                            text: { hanzi: '不', pinyin: 'bù', translation: 'not' }
                        },
                        {
                            id: 'cc7-t-v',
                            role: 'Head Verb',
                            text: { hanzi: '欲', pinyin: 'yù', translation: 'desire' }
                        }
                    ]
                },
                {
                    id: 'cc7-comment',
                    role: 'Comment',
                    subRole: 'prohibitive command',
                    children: [
                        {
                            id: 'cc7-c-wu',
                            role: 'Adjunct',
                            subRole: 'prohibitive negation',
                            text: { hanzi: '勿', pinyin: 'wù', translation: 'do not!' }
                        },
                        {
                            id: 'cc7-c-v',
                            role: 'Head Verb',
                            text: { hanzi: '施', pinyin: 'shī', translation: 'impose / inflict' }
                        },
                        {
                            id: 'cc7-c-pp',
                            role: 'Adjunct',
                            subRole: 'target (於-phrase)',
                            children: [
                                {
                                    id: 'cc7-c-pp-prep',
                                    role: 'Preposition',
                                    text: { hanzi: '於', pinyin: 'yú', translation: 'upon' }
                                },
                                {
                                    id: 'cc7-c-pp-obj',
                                    role: 'Noun',
                                    text: { hanzi: '人', pinyin: 'rén', translation: 'others / people' }
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },

    /* ───────── Sequential Actions (而) — classical concision ───────── */
    {
        id: 'cc8',
        category: 'Sequential Actions (而)',
        source: '《論語》· 學而篇',
        author: 'Zengzi (Confucius\'s disciple)',
        chinese: '吾日三省吾身。',
        pinyin: 'Wú rì sān xǐng wú shēn.',
        translation: 'Each day I examine myself on three points.',
        explanation: '**Zengzi** (曾子), a disciple of Confucius, describes his daily practice of rigorous **self-examination**: reflecting on whether he has been loyal to others, trustworthy with friends, and diligent in study. It captures the Confucian emphasis on constant moral self-cultivation rather than outward judgment. *Grammatically,* this compact sentence demonstrates several signature classical features in just six characters. **吾** (wú) is the archaic first-person pronoun, more literary than 我. **日** (rì, "daily") functions as a time adverb directly before the predicate without any preposition; classical Chinese freely repurposes nouns as modifiers. **三** (sān, "three / three times") acts as a frequency adverb modifying the verb **省** (xǐng, "examine/reflect"). The object **吾身** ("my person/self") is a reflexive construction.',
        tree: {
            id: 'cc8-root',
            role: 'Sentence',
            children: [
                {
                    id: 'cc8-topic',
                    role: 'Topic',
                    text: { hanzi: '吾', pinyin: 'wú', translation: 'I' }
                },
                {
                    id: 'cc8-comment',
                    role: 'Comment',
                    children: [
                        {
                            id: 'cc8-c-time',
                            role: 'Adjunct',
                            subRole: 'time (noun → adverb)',
                            text: { hanzi: '日', pinyin: 'rì', translation: 'daily' }
                        },
                        {
                            id: 'cc8-c-freq',
                            role: 'Adjunct',
                            subRole: 'frequency',
                            text: { hanzi: '三', pinyin: 'sān', translation: 'three times' }
                        },
                        {
                            id: 'cc8-c-v',
                            role: 'Head Verb',
                            text: { hanzi: '省', pinyin: 'xǐng', translation: 'examine / reflect' }
                        },
                        {
                            id: 'cc8-c-obj',
                            role: 'Object',
                            subRole: 'reflexive',
                            children: [
                                {
                                    id: 'cc8-c-obj-attr',
                                    role: 'Attributive',
                                    text: { hanzi: '吾', pinyin: 'wú', translation: 'my' }
                                },
                                {
                                    id: 'cc8-c-obj-n',
                                    role: 'Head Noun',
                                    text: { hanzi: '身', pinyin: 'shēn', translation: 'person / self' }
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },

    /* ═══════════════════════════════════════════════════════════
       NEW QUOTES — expanding each category to 3–4 examples
       ═══════════════════════════════════════════════════════════ */

    /* ───────── Rhetorical Patterns (反問) — 寧…乎 ───────── */
    {
        id: 'cc9',
        category: 'Rhetorical Patterns (反問)',
        source: '《史記》· 陳涉世家',
        author: 'Sima Qian (recording Chen Sheng)',
        chinese: '王侯將相，寧有種乎？',
        pinyin: 'Wáng hóu jiàng xiàng, nìng yǒu zhǒng hū?',
        translation: 'Are kings, lords, generals, and ministers such by birth?',
        explanation: 'This is the battle cry of **Chen Sheng** (陳勝), leader of the first peasant uprising against the Qin dynasty in 209 BC. He challenges the very idea of hereditary nobility: **greatness is not determined by bloodline**. The line became a symbol of egalitarian rebellion throughout Chinese history. *Grammatically,* the rhetorical frame **寧…乎** (nìng…hū) means "could it really be that…?" **寧** (nìng) is a rhetorical adverb that challenges probability and expects the answer "no." The compound subject **王侯將相** (kings, lords, generals, ministers) is a four-character coordination without any connecting particles; classical Chinese relies on juxtaposition where modern Chinese would need 和. The verb **有種** means "have seed/lineage," questioning whether noble status is hereditary. The final **乎** (hū) seals the rhetorical force.',
        tree: {
            id: 'cc9-root',
            role: 'Sentence',
            children: [
                {
                    id: 'cc9-topic',
                    role: 'Topic',
                    subRole: 'compound subject',
                    children: [
                        {
                            id: 'cc9-t-n1',
                            role: 'Noun',
                            text: { hanzi: '王侯', pinyin: 'wáng hóu', translation: 'kings and lords' }
                        },
                        {
                            id: 'cc9-t-n2',
                            role: 'Noun',
                            text: { hanzi: '將相', pinyin: 'jiàng xiàng', translation: 'generals and ministers' }
                        }
                    ]
                },
                {
                    id: 'cc9-comment',
                    role: 'Comment',
                    subRole: 'rhetorical question (寧…乎)',
                    children: [
                        {
                            id: 'cc9-c-adv',
                            role: 'Adjunct',
                            subRole: 'rhetorical challenge',
                            text: { hanzi: '寧', pinyin: 'nìng', translation: 'could it be that' }
                        },
                        {
                            id: 'cc9-c-v',
                            role: 'Head Verb',
                            subRole: 'existential',
                            text: { hanzi: '有', pinyin: 'yǒu', translation: 'have / possess' }
                        },
                        {
                            id: 'cc9-c-obj',
                            role: 'Object',
                            text: { hanzi: '種', pinyin: 'zhǒng', translation: 'seed / lineage' }
                        },
                        {
                            id: 'cc9-c-hu',
                            role: 'Particle',
                            subRole: 'interrogative (rhetorical)',
                            text: { hanzi: '乎', pinyin: 'hū', translation: '(rhetorical question marker)' }
                        }
                    ]
                }
            ]
        }
    },

    /* ───────── Rhetorical Patterns (反問) — 者 + 如 analogy ───────── */
    {
        id: 'cc10',
        category: 'Rhetorical Patterns (反問)',
        source: '《論語》· 子罕篇',
        author: 'Confucius',
        chinese: '逝者如斯夫，不舍晝夜。',
        pinyin: 'Shì zhě rú sī fú, bù shě zhòu yè.',
        translation: 'That which passes is like this; it does not cease day or night.',
        explanation: 'Standing beside a river, Confucius reflects on the **relentless passage of time**: everything flows on ceaselessly, day and night, like the water before him. It is a moment of profound melancholy and philosophical wonder, an early meditation on impermanence that resonates across cultures. *Grammatically,* the sentence opens with a **者**-nominalization: **逝者** means "that which passes." The nominalizer 者 turns the verb 逝 (pass away) into a noun. **如** (rú) means "is like," and **斯** (sī) is a demonstrative pronoun meaning "this" (referring to the flowing river). **夫** (fú) is an exclamatory particle conveying the speaker\'s emotion. The second clause uses **不舍** (does not cease) with **晝夜** (day and night) as a time adverbial.',
        tree: {
            id: 'cc10-root',
            role: 'Sentence',
            children: [
                {
                    id: 'cc10-clause1',
                    role: 'Topic',
                    subRole: 'analogy',
                    children: [
                        {
                            id: 'cc10-c1-subj',
                            role: 'Subject',
                            subRole: '者-nominalization',
                            children: [
                                {
                                    id: 'cc10-c1-subj-v',
                                    role: 'Head Verb',
                                    text: { hanzi: '逝', pinyin: 'shì', translation: 'pass away' }
                                },
                                {
                                    id: 'cc10-c1-subj-zhe',
                                    role: 'Particle',
                                    subRole: 'nominalizer',
                                    text: { hanzi: '者', pinyin: 'zhě', translation: '(that which…)' }
                                }
                            ]
                        },
                        {
                            id: 'cc10-c1-pred',
                            role: 'Predicate',
                            children: [
                                {
                                    id: 'cc10-c1-pred-v',
                                    role: 'Head Verb',
                                    subRole: 'simile',
                                    text: { hanzi: '如', pinyin: 'rú', translation: 'is like' }
                                },
                                {
                                    id: 'cc10-c1-pred-obj',
                                    role: 'Object',
                                    text: { hanzi: '斯', pinyin: 'sī', translation: 'this (the river)' }
                                },
                                {
                                    id: 'cc10-c1-pred-fu',
                                    role: 'Particle',
                                    subRole: 'exclamatory',
                                    text: { hanzi: '夫', pinyin: 'fú', translation: '(exclamation)' }
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'cc10-clause2',
                    role: 'Comment',
                    subRole: 'elaboration',
                    children: [
                        {
                            id: 'cc10-c2-neg',
                            role: 'Adjunct',
                            subRole: 'negation',
                            text: { hanzi: '不', pinyin: 'bù', translation: 'not' }
                        },
                        {
                            id: 'cc10-c2-v',
                            role: 'Head Verb',
                            text: { hanzi: '舍', pinyin: 'shě', translation: 'cease / stop' }
                        },
                        {
                            id: 'cc10-c2-time',
                            role: 'Adjunct',
                            subRole: 'time span',
                            children: [
                                {
                                    id: 'cc10-c2-time-d',
                                    role: 'Noun',
                                    text: { hanzi: '晝', pinyin: 'zhòu', translation: 'day' }
                                },
                                {
                                    id: 'cc10-c2-time-n',
                                    role: 'Noun',
                                    text: { hanzi: '夜', pinyin: 'yè', translation: 'night' }
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },

    /* ───────── Nominalizers (者/所) — 所以 compound ───────── */
    {
        id: 'cc11',
        category: 'Nominalizers (者/所)',
        source: '《孟子》· 告子上',
        author: 'Mencius',
        chinese: '生，亦我所欲也。',
        pinyin: 'Shēng, yì wǒ suǒ yù yě.',
        translation: 'Life is also what I desire.',
        explanation: 'Mencius declares that **life itself is something deeply desired**; but, as the passage continues, he argues that righteousness (義) is desired even more. When people must choose between survival and moral principle, the truly virtuous choose principle. This sentence sets up one of the most famous ethical dilemmas in Chinese philosophy. *Grammatically,* the sentence demonstrates the **所**-nominalization in a predicate context. **生** (shēng, "life") is the Topic. The Comment uses **所欲** (suǒ yù), where **所** turns the verb **欲** (desire) into a noun: "that which is desired." With the subject **我** (wǒ, "I"), it reads "what I desire." **亦** (yì) means "also," and **也** (yě) is a sentence-final assertive particle confirming identity. The **[Topic], [Subject] 所 [Verb] 也** pattern is one of the most common classical templates for identity statements.',
        tree: {
            id: 'cc11-root',
            role: 'Sentence',
            children: [
                {
                    id: 'cc11-topic',
                    role: 'Topic',
                    text: { hanzi: '生', pinyin: 'shēng', translation: 'life' }
                },
                {
                    id: 'cc11-comment',
                    role: 'Comment',
                    subRole: 'identity statement (…也)',
                    children: [
                        {
                            id: 'cc11-c-adv',
                            role: 'Adjunct',
                            text: { hanzi: '亦', pinyin: 'yì', translation: 'also' }
                        },
                        {
                            id: 'cc11-c-subj',
                            role: 'Subject',
                            text: { hanzi: '我', pinyin: 'wǒ', translation: 'I / my' }
                        },
                        {
                            id: 'cc11-c-pred',
                            role: 'Predicate',
                            subRole: '所-nominalization',
                            children: [
                                {
                                    id: 'cc11-c-pred-suo',
                                    role: 'Particle',
                                    subRole: 'object nominalizer',
                                    text: { hanzi: '所', pinyin: 'suǒ', translation: '(that which…)' }
                                },
                                {
                                    id: 'cc11-c-pred-v',
                                    role: 'Head Verb',
                                    text: { hanzi: '欲', pinyin: 'yù', translation: 'desire' }
                                }
                            ]
                        },
                        {
                            id: 'cc11-c-ye',
                            role: 'Particle',
                            subRole: 'assertive (identity)',
                            text: { hanzi: '也', pinyin: 'yě', translation: '(assertion: "is")' }
                        }
                    ]
                }
            ]
        }
    },

    /* ───────── Nominalizers (者/所) — 所以 "the reason" ───────── */
    {
        id: 'cc12',
        category: 'Nominalizers (者/所)',
        source: '韓愈《師說》',
        author: 'Han Yu',
        chinese: '師者，所以傳道授業解惑也。',
        pinyin: 'Shī zhě, suǒ yǐ chuán dào shòu yè jiě huò yě.',
        translation: 'A teacher is the means by which the Way is transmitted, knowledge imparted, and confusion resolved.',
        explanation: 'Han Yu\'s famous essay defends the dignity of the teaching profession, arguing that **a teacher\'s purpose is threefold: to transmit moral truth, to impart practical knowledge, and to clear up confusion**. Written in 802 AD when seeking a teacher was stigmatized, this sentence became a cornerstone of Chinese educational philosophy. *Grammatically,* it showcases the most powerful nominalization in classical Chinese: **所以** (suǒ yǐ). While modern 所以 means "therefore," in classical Chinese it means "the means by which" or "the reason why." **師者** (shī zhě, "a teacher," where 者 marks the definition) is the Topic, and the Comment lists three purposes using a triple-verb series: **傳道** (transmit the Way), **授業** (impart knowledge), **解惑** (resolve confusion). The final **也** asserts identity. This is the classic **X 者, Y 也** definitional pattern: "X *is* Y."',
        tree: {
            id: 'cc12-root',
            role: 'Sentence',
            children: [
                {
                    id: 'cc12-topic',
                    role: 'Topic',
                    subRole: '者-definition',
                    children: [
                        {
                            id: 'cc12-t-n',
                            role: 'Head Noun',
                            text: { hanzi: '師', pinyin: 'shī', translation: 'teacher' }
                        },
                        {
                            id: 'cc12-t-zhe',
                            role: 'Particle',
                            subRole: 'definitional nominalizer',
                            text: { hanzi: '者', pinyin: 'zhě', translation: '(one who is… / as for…)' }
                        }
                    ]
                },
                {
                    id: 'cc12-comment',
                    role: 'Comment',
                    subRole: 'identity (所以…也)',
                    children: [
                        {
                            id: 'cc12-c-suoyi',
                            role: 'Particle',
                            subRole: 'means nominalizer',
                            text: { hanzi: '所以', pinyin: 'suǒ yǐ', translation: 'the means by which' }
                        },
                        {
                            id: 'cc12-c-vp1',
                            role: 'Verb Phrase',
                            children: [
                                {
                                    id: 'cc12-c-vp1-v',
                                    role: 'Head Verb',
                                    text: { hanzi: '傳', pinyin: 'chuán', translation: 'transmit' }
                                },
                                {
                                    id: 'cc12-c-vp1-obj',
                                    role: 'Object',
                                    text: { hanzi: '道', pinyin: 'dào', translation: 'the Way' }
                                }
                            ]
                        },
                        {
                            id: 'cc12-c-vp2',
                            role: 'Verb Phrase',
                            children: [
                                {
                                    id: 'cc12-c-vp2-v',
                                    role: 'Head Verb',
                                    text: { hanzi: '授', pinyin: 'shòu', translation: 'impart' }
                                },
                                {
                                    id: 'cc12-c-vp2-obj',
                                    role: 'Object',
                                    text: { hanzi: '業', pinyin: 'yè', translation: 'knowledge / craft' }
                                }
                            ]
                        },
                        {
                            id: 'cc12-c-vp3',
                            role: 'Verb Phrase',
                            children: [
                                {
                                    id: 'cc12-c-vp3-v',
                                    role: 'Head Verb',
                                    text: { hanzi: '解', pinyin: 'jiě', translation: 'resolve' }
                                },
                                {
                                    id: 'cc12-c-vp3-obj',
                                    role: 'Object',
                                    text: { hanzi: '惑', pinyin: 'huò', translation: 'confusion / doubt' }
                                }
                            ]
                        },
                        {
                            id: 'cc12-c-ye',
                            role: 'Particle',
                            subRole: 'assertive (identity)',
                            text: { hanzi: '也', pinyin: 'yě', translation: '(assertion: "is")' }
                        }
                    ]
                }
            ]
        }
    },

    /* ───────── Coverbs & Prepositions (於/以/焉) — 於 dual-function ───────── */
    {
        id: 'cc13',
        category: 'Coverbs & Prepositions (於/以/焉)',
        source: '《荀子》· 勸學篇',
        author: 'Xunzi',
        chinese: '青，取之於藍，而青於藍。',
        pinyin: 'Qīng, qǔ zhī yú lán, ér qīng yú lán.',
        translation: 'Blue dye comes from the indigo plant, yet it is bluer than indigo.',
        explanation: 'Xunzi uses this vivid metaphor to argue that **students can surpass their teachers**: just as blue dye, extracted from the indigo plant, is ultimately more intense than the plant itself. The proverb (青出於藍) became one of the most beloved Chinese idioms for someone who outstrips their mentor. *Grammatically,* **青** (qīng, "blue") is the Topic. The first clause uses **取之於藍** where **之** is an object pronoun ("it") and **於** is a source coverb ("from"), meaning "takes it from indigo." **而** (ér) then creates a *contrastive* link: "yet/but." The second clause **青於藍** shows **於** in its comparative function: "bluer *than* indigo." Notice how 於 carries two different meanings (source vs. comparison) in the same sentence.',
        tree: {
            id: 'cc13-root',
            role: 'Sentence',
            children: [
                {
                    id: 'cc13-topic',
                    role: 'Topic',
                    text: { hanzi: '青', pinyin: 'qīng', translation: 'blue (dye)' }
                },
                {
                    id: 'cc13-comment',
                    role: 'Comment',
                    children: [
                        {
                            id: 'cc13-c-clause1',
                            role: 'Verb Phrase',
                            subRole: 'source clause',
                            children: [
                                {
                                    id: 'cc13-c-c1-v',
                                    role: 'Head Verb',
                                    text: { hanzi: '取', pinyin: 'qǔ', translation: 'extracted / taken' }
                                },
                                {
                                    id: 'cc13-c-c1-obj',
                                    role: 'Object',
                                    subRole: 'anaphoric pronoun',
                                    text: { hanzi: '之', pinyin: 'zhī', translation: 'it' }
                                },
                                {
                                    id: 'cc13-c-c1-pp',
                                    role: 'Adjunct',
                                    subRole: 'source (於-phrase)',
                                    children: [
                                        {
                                            id: 'cc13-c-c1-pp-prep',
                                            role: 'Preposition',
                                            text: { hanzi: '於', pinyin: 'yú', translation: 'from' }
                                        },
                                        {
                                            id: 'cc13-c-c1-pp-obj',
                                            role: 'Noun',
                                            text: { hanzi: '藍', pinyin: 'lán', translation: 'indigo plant' }
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'cc13-c-er',
                            role: 'Particle',
                            subRole: 'contrastive connective',
                            text: { hanzi: '而', pinyin: 'ér', translation: 'yet / but' }
                        },
                        {
                            id: 'cc13-c-clause2',
                            role: 'Verb Phrase',
                            subRole: 'comparison clause',
                            children: [
                                {
                                    id: 'cc13-c-c2-pred',
                                    role: 'Head Verb',
                                    subRole: 'adjectival predicate',
                                    text: { hanzi: '青', pinyin: 'qīng', translation: 'is blue / bluer' }
                                },
                                {
                                    id: 'cc13-c-c2-pp',
                                    role: 'Complement',
                                    subRole: 'comparative (於-phrase)',
                                    children: [
                                        {
                                            id: 'cc13-c-c2-pp-prep',
                                            role: 'Preposition',
                                            text: { hanzi: '於', pinyin: 'yú', translation: 'than' }
                                        },
                                        {
                                            id: 'cc13-c-c2-pp-obj',
                                            role: 'Noun',
                                            text: { hanzi: '藍', pinyin: 'lán', translation: 'indigo' }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },

    /* ───────── Classical Negation (非/勿/莫) — 未 "not yet" ───────── */
    {
        id: 'cc14',
        category: 'Classical Negation (非/勿/莫)',
        source: '《論語》· 學而篇',
        author: 'Confucius',
        chinese: '未之有也。',
        pinyin: 'Wèi zhī yǒu yě.',
        translation: 'There has never been such a thing.',
        relatedIds: ['s10', 's56'],
        explanation: 'This extremely terse expression conveys emphatic denial: **such a thing has never happened, and it simply does not exist**. It is typically used as the conclusion of an argument, asserting that the scenario just described is without precedent. *Grammatically,* **未** (wèi) is the "not yet / never" negator, different from 不 (general negation) and 非 (identity negation). 未 negates *temporal* completion: something has *not yet* happened or has *never* occurred. The word order is **inverted**: the object **之** (zhī, "it/such a thing") is placed *before* the verb **有** (yǒu, "exist"). This **object fronting** triggered by negation is a hallmark of classical Chinese: in negated clauses with pronominal objects, the pronoun moves ahead of the verb. Modern Mandarin has completely lost this inversion.',
        tree: {
            id: 'cc14-root',
            role: 'Sentence',
            children: [
                {
                    id: 'cc14-neg',
                    role: 'Adjunct',
                    subRole: 'temporal negation',
                    text: { hanzi: '未', pinyin: 'wèi', translation: 'never / not yet' }
                },
                {
                    id: 'cc14-obj',
                    role: 'Object',
                    subRole: 'fronted pronoun (negation inversion)',
                    text: { hanzi: '之', pinyin: 'zhī', translation: 'such a thing' }
                },
                {
                    id: 'cc14-v',
                    role: 'Head Verb',
                    subRole: 'existential',
                    text: { hanzi: '有', pinyin: 'yǒu', translation: 'exist / occur' }
                },
                {
                    id: 'cc14-ye',
                    role: 'Particle',
                    subRole: 'assertive',
                    text: { hanzi: '也', pinyin: 'yě', translation: '(emphatic assertion)' }
                }
            ]
        }
    },

    /* ───────── Rhetorical Patterns (反問) — 矣 emphatic declaration ───────── */
    {
        id: 'cc15',
        category: 'Rhetorical Patterns (反問)',
        source: '《論語》· 里仁篇',
        author: 'Confucius',
        chinese: '朝聞道，夕死可矣。',
        pinyin: 'Zhāo wén dào, xī sǐ kě yǐ.',
        translation: 'If in the morning one hears the Way, one could die that evening without regret.',
        explanation: 'Confucius expresses the **supreme value of truth**: understanding the Dao is so important that even death the same day would be worthwhile. It speaks to the urgency of moral and philosophical clarity; a life without understanding the Way is not truly lived. *Grammatically,* **朝** (zhāo, "morning") and **夕** (xī, "evening") are bare time adverbs, with no preposition needed. Classical Chinese freely repurposes nouns as temporal modifiers by placing them before the verb. The first clause **朝聞道** follows a simple S-V-O pattern with the subject dropped (pro-drop): "(if one) hears the Way in the morning." The second clause uses **可** (kě, "acceptable/permissible") as a predicate, and **矣** (yǐ) is a sentence-final particle expressing a settled, satisfied conclusion.',
        tree: {
            id: 'cc15-root',
            role: 'Sentence',
            children: [
                {
                    id: 'cc15-topic',
                    role: 'Topic',
                    subRole: 'conditional clause',
                    children: [
                        {
                            id: 'cc15-t-time',
                            role: 'Adjunct',
                            subRole: 'time (noun → adverb)',
                            text: { hanzi: '朝', pinyin: 'zhāo', translation: 'in the morning' }
                        },
                        {
                            id: 'cc15-t-v',
                            role: 'Head Verb',
                            text: { hanzi: '聞', pinyin: 'wén', translation: 'hear / learn of' }
                        },
                        {
                            id: 'cc15-t-obj',
                            role: 'Object',
                            text: { hanzi: '道', pinyin: 'dào', translation: 'the Way' }
                        }
                    ]
                },
                {
                    id: 'cc15-comment',
                    role: 'Comment',
                    children: [
                        {
                            id: 'cc15-c-time',
                            role: 'Adjunct',
                            subRole: 'time (noun → adverb)',
                            text: { hanzi: '夕', pinyin: 'xī', translation: 'in the evening' }
                        },
                        {
                            id: 'cc15-c-v',
                            role: 'Head Verb',
                            text: { hanzi: '死', pinyin: 'sǐ', translation: 'die' }
                        },
                        {
                            id: 'cc15-c-pred',
                            role: 'Complement',
                            subRole: 'acceptability',
                            text: { hanzi: '可', pinyin: 'kě', translation: 'is acceptable' }
                        },
                        {
                            id: 'cc15-c-yi',
                            role: 'Particle',
                            subRole: 'conclusive',
                            text: { hanzi: '矣', pinyin: 'yǐ', translation: '(settled conclusion)' }
                        }
                    ]
                }
            ]
        }
    },

    /* ───────── Sequential Actions (而) — parallel juxtaposition ───────── */
    {
        id: 'cc16',
        category: 'Sequential Actions (而)',
        source: '《孫子兵法》· 謀攻篇',
        author: 'Sun Tzu',
        chinese: '知彼知己，百戰不殆。',
        pinyin: 'Zhī bǐ zhī jǐ, bǎi zhàn bù dài.',
        translation: 'Know the enemy, know yourself, a hundred battles, no peril.',
        relatedIds: ['s14', 's58'],
        explanation: 'Sun Tzu\'s most famous maxim distills an entire military philosophy into eight characters: **victory comes from understanding both your opponent and yourself**. The parallel structure emphasizes that self-knowledge is equally as important as intelligence-gathering. This principle has been applied far beyond warfare, extending into business, diplomacy, and personal growth. *Grammatically,* the sentence demonstrates classical **parallel structure** and **pro-drop**. The first clause pairs two verb-object phrases: **知彼** ("know the other/enemy") and **知己** ("know oneself"), with the same verb **知** repeated for rhetorical balance and no conjunction; classical Chinese relies on juxtaposition. The second clause **百戰不殆** is equally compressed: **百戰** ("a hundred battles") acts as a topic-like conditional, and **不殆** ("not perilous") is the predicate.',
        tree: {
            id: 'cc16-root',
            role: 'Sentence',
            children: [
                {
                    id: 'cc16-topic',
                    role: 'Topic',
                    subRole: 'parallel conditions',
                    children: [
                        {
                            id: 'cc16-t-vp1',
                            role: 'Verb Phrase',
                            children: [
                                {
                                    id: 'cc16-t-vp1-v',
                                    role: 'Head Verb',
                                    text: { hanzi: '知', pinyin: 'zhī', translation: 'know' }
                                },
                                {
                                    id: 'cc16-t-vp1-obj',
                                    role: 'Object',
                                    text: { hanzi: '彼', pinyin: 'bǐ', translation: 'the other / enemy' }
                                }
                            ]
                        },
                        {
                            id: 'cc16-t-vp2',
                            role: 'Verb Phrase',
                            children: [
                                {
                                    id: 'cc16-t-vp2-v',
                                    role: 'Head Verb',
                                    text: { hanzi: '知', pinyin: 'zhī', translation: 'know' }
                                },
                                {
                                    id: 'cc16-t-vp2-obj',
                                    role: 'Object',
                                    text: { hanzi: '己', pinyin: 'jǐ', translation: 'oneself' }
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'cc16-comment',
                    role: 'Comment',
                    children: [
                        {
                            id: 'cc16-c-subj',
                            role: 'Subject',
                            subRole: 'quantity phrase',
                            children: [
                                {
                                    id: 'cc16-c-subj-num',
                                    role: 'Attributive',
                                    text: { hanzi: '百', pinyin: 'bǎi', translation: 'a hundred' }
                                },
                                {
                                    id: 'cc16-c-subj-n',
                                    role: 'Head Noun',
                                    text: { hanzi: '戰', pinyin: 'zhàn', translation: 'battles' }
                                }
                            ]
                        },
                        {
                            id: 'cc16-c-neg',
                            role: 'Adjunct',
                            subRole: 'negation',
                            text: { hanzi: '不', pinyin: 'bù', translation: 'not' }
                        },
                        {
                            id: 'cc16-c-pred',
                            role: 'Head Verb',
                            subRole: 'adjectival predicate',
                            text: { hanzi: '殆', pinyin: 'dài', translation: 'perilous / in danger' }
                        }
                    ]
                }
            ]
        }
    },

    /* ───────── Sequential Actions (而) — contrastive ───────── */
    {
        id: 'cc17',
        category: 'Sequential Actions (而)',
        source: '《論語》· 為政篇',
        author: 'Confucius',
        chinese: '學而不思則罔，思而不學則殆。',
        pinyin: 'Xué ér bù sī zé wǎng, sī ér bù xué zé dài.',
        translation: 'To study without thinking leads to confusion; to think without studying leads to peril.',
        explanation: 'Confucius warns that **study and reflection must go hand in hand**: learning without critical thinking produces shallow confusion, while pure speculation without grounding in knowledge leads to dangerous error. This became a foundational principle of Chinese education, balancing book learning with independent thought. *Grammatically,* **而** appears in its *contrastive* role, meaning "but/without," and **則** (zé) is the classical conditional marker meaning "then/leads to." Each half follows the same template: **[Verb] 而 不 [Verb] 則 [Result]**. In the first clause, 學而不思 means "study *but* not think," and 則罔 means "then (one is) confused." The parallel second clause swaps the verbs. **則** marks inevitable consequence, stronger than modern 就.',
        tree: {
            id: 'cc17-root',
            role: 'Sentence',
            children: [
                {
                    id: 'cc17-clause1',
                    role: 'Topic',
                    subRole: 'first conditional',
                    children: [
                        {
                            id: 'cc17-c1-cond',
                            role: 'Adjunct',
                            subRole: 'condition (而-contrastive)',
                            children: [
                                {
                                    id: 'cc17-c1-v1',
                                    role: 'Head Verb',
                                    text: { hanzi: '學', pinyin: 'xué', translation: 'study' }
                                },
                                {
                                    id: 'cc17-c1-er',
                                    role: 'Particle',
                                    subRole: 'contrastive connective',
                                    text: { hanzi: '而', pinyin: 'ér', translation: 'but / without' }
                                },
                                {
                                    id: 'cc17-c1-neg',
                                    role: 'Adjunct',
                                    subRole: 'negation',
                                    text: { hanzi: '不', pinyin: 'bù', translation: 'not' }
                                },
                                {
                                    id: 'cc17-c1-v2',
                                    role: 'Head Verb',
                                    text: { hanzi: '思', pinyin: 'sī', translation: 'think' }
                                }
                            ]
                        },
                        {
                            id: 'cc17-c1-result',
                            role: 'Predicate',
                            subRole: 'consequence (則)',
                            children: [
                                {
                                    id: 'cc17-c1-ze',
                                    role: 'Particle',
                                    subRole: 'conditional marker',
                                    text: { hanzi: '則', pinyin: 'zé', translation: 'then / leads to' }
                                },
                                {
                                    id: 'cc17-c1-adj',
                                    role: 'Head Verb',
                                    subRole: 'adjectival predicate',
                                    text: { hanzi: '罔', pinyin: 'wǎng', translation: 'confused / bewildered' }
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'cc17-clause2',
                    role: 'Comment',
                    subRole: 'second conditional (parallel)',
                    children: [
                        {
                            id: 'cc17-c2-cond',
                            role: 'Adjunct',
                            subRole: 'condition (而-contrastive)',
                            children: [
                                {
                                    id: 'cc17-c2-v1',
                                    role: 'Head Verb',
                                    text: { hanzi: '思', pinyin: 'sī', translation: 'think' }
                                },
                                {
                                    id: 'cc17-c2-er',
                                    role: 'Particle',
                                    subRole: 'contrastive connective',
                                    text: { hanzi: '而', pinyin: 'ér', translation: 'but / without' }
                                },
                                {
                                    id: 'cc17-c2-neg',
                                    role: 'Adjunct',
                                    subRole: 'negation',
                                    text: { hanzi: '不', pinyin: 'bù', translation: 'not' }
                                },
                                {
                                    id: 'cc17-c2-v2',
                                    role: 'Head Verb',
                                    text: { hanzi: '學', pinyin: 'xué', translation: 'study' }
                                }
                            ]
                        },
                        {
                            id: 'cc17-c2-result',
                            role: 'Predicate',
                            subRole: 'consequence (則)',
                            children: [
                                {
                                    id: 'cc17-c2-ze',
                                    role: 'Particle',
                                    subRole: 'conditional marker',
                                    text: { hanzi: '則', pinyin: 'zé', translation: 'then / leads to' }
                                },
                                {
                                    id: 'cc17-c2-adj',
                                    role: 'Head Verb',
                                    subRole: 'adjectival predicate',
                                    text: { hanzi: '殆', pinyin: 'dài', translation: 'imperiled / lost' }
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },

    /* ───────── Sequential Actions (而) — concessive ───────── */
    {
        id: 'cc18',
        category: 'Sequential Actions (而)',
        source: '《論語》· 學而篇',
        author: 'Confucius',
        chinese: '人不知而不慍，不亦君子乎？',
        pinyin: 'Rén bù zhī ér bù yùn, bù yì jūnzǐ hū?',
        translation: 'If others do not recognize you, yet you are not resentful, is that not the mark of a noble person?',
        explanation: 'The third and final line of the Analects\' famous opening passage defines the **jūnzǐ (君子, noble person)**: someone who remains serene even when their merits go unrecognized by others. True virtue, Confucius implies, is **its own reward**: it does not depend on external validation. *Grammatically,* the sentence combines **而** in its *concessive* sense ("yet/even so") with the **不亦…乎** rhetorical question pattern. The first clause **人不知** means "others do not know/recognize (you)," with pro-dropped object. **而** then introduces a surprising contrast: **不慍** ("not resentful"). The second half uses the same 不亦…乎 frame from the passage\'s first line (cc1), creating a structural bookend. **君子** (jūnzǐ) is a noun acting as a *predicate nominal*: "is a noble person."',
        tree: {
            id: 'cc18-root',
            role: 'Sentence',
            children: [
                {
                    id: 'cc18-topic',
                    role: 'Topic',
                    subRole: 'concessive clause (而)',
                    children: [
                        {
                            id: 'cc18-t-clause1',
                            role: 'Verb Phrase',
                            children: [
                                {
                                    id: 'cc18-t-c1-subj',
                                    role: 'Subject',
                                    text: { hanzi: '人', pinyin: 'rén', translation: 'others / people' }
                                },
                                {
                                    id: 'cc18-t-c1-neg',
                                    role: 'Adjunct',
                                    subRole: 'negation',
                                    text: { hanzi: '不', pinyin: 'bù', translation: 'not' }
                                },
                                {
                                    id: 'cc18-t-c1-v',
                                    role: 'Head Verb',
                                    text: { hanzi: '知', pinyin: 'zhī', translation: 'know / recognize' }
                                }
                            ]
                        },
                        {
                            id: 'cc18-t-er',
                            role: 'Particle',
                            subRole: 'concessive connective',
                            text: { hanzi: '而', pinyin: 'ér', translation: 'yet / even so' }
                        },
                        {
                            id: 'cc18-t-clause2',
                            role: 'Verb Phrase',
                            children: [
                                {
                                    id: 'cc18-t-c2-neg',
                                    role: 'Adjunct',
                                    subRole: 'negation',
                                    text: { hanzi: '不', pinyin: 'bù', translation: 'not' }
                                },
                                {
                                    id: 'cc18-t-c2-v',
                                    role: 'Head Verb',
                                    subRole: 'adjectival predicate',
                                    text: { hanzi: '慍', pinyin: 'yùn', translation: 'resentful / upset' }
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'cc18-comment',
                    role: 'Comment',
                    subRole: 'rhetorical question (不亦…乎)',
                    children: [
                        {
                            id: 'cc18-c-neg',
                            role: 'Adjunct',
                            subRole: 'negation',
                            text: { hanzi: '不', pinyin: 'bù', translation: 'not' }
                        },
                        {
                            id: 'cc18-c-yi',
                            role: 'Adjunct',
                            subRole: 'rhetorical intensifier',
                            text: { hanzi: '亦', pinyin: 'yì', translation: 'also / indeed' }
                        },
                        {
                            id: 'cc18-c-pred',
                            role: 'Head Verb',
                            subRole: 'nominal predicate',
                            text: { hanzi: '君子', pinyin: 'jūnzǐ', translation: 'a noble person' }
                        },
                        {
                            id: 'cc18-c-hu',
                            role: 'Particle',
                            subRole: 'interrogative (rhetorical)',
                            text: { hanzi: '乎', pinyin: 'hū', translation: '(rhetorical question marker)' }
                        }
                    ]
                }
            ]
        }
    },

    /* ───────── Genitive & Modification (之) — object pronoun ───────── */
    {
        id: 'cc19',
        category: 'Genitive & Modification (之)',
        source: '《道德經》· 第三十三章',
        author: 'Laozi',
        chinese: '知人者智，自知者明。',
        pinyin: 'Zhī rén zhě zhì, zì zhī zhě míng.',
        translation: 'One who knows others is wise; one who knows himself is enlightened.',
        explanation: 'Laozi draws a powerful distinction between **outward intelligence and inner wisdom**: knowing others requires cleverness, but knowing yourself requires the deeper courage of honest self-examination. True enlightenment (明) is not about the external world but about seeing oneself clearly. *Grammatically,* the sentence uses the **者** nominalizer twice to create balanced definitions. **知人者** means "one who knows others": **知** (know) takes **人** (others) as its object, and **者** turns the clause into a noun. The predicates are bare adjectives: **智** (wise) and **明** (enlightened/clear-sighted). The second clause introduces **自** (zì, "self") as a reflexive object: **自知** means "know oneself." The parallel structure **X 者 Y** (one who X, is Y) is one of the most common definitional patterns in classical prose.',
        tree: {
            id: 'cc19-root',
            role: 'Sentence',
            children: [
                {
                    id: 'cc19-clause1',
                    role: 'Topic',
                    children: [
                        {
                            id: 'cc19-c1-subj',
                            role: 'Subject',
                            subRole: '者-nominalization',
                            children: [
                                {
                                    id: 'cc19-c1-subj-v',
                                    role: 'Head Verb',
                                    text: { hanzi: '知', pinyin: 'zhī', translation: 'know' }
                                },
                                {
                                    id: 'cc19-c1-subj-obj',
                                    role: 'Object',
                                    text: { hanzi: '人', pinyin: 'rén', translation: 'others' }
                                },
                                {
                                    id: 'cc19-c1-subj-zhe',
                                    role: 'Particle',
                                    subRole: 'nominalizer',
                                    text: { hanzi: '者', pinyin: 'zhě', translation: '(one who…)' }
                                }
                            ]
                        },
                        {
                            id: 'cc19-c1-pred',
                            role: 'Predicate',
                            subRole: 'bare adjective',
                            text: { hanzi: '智', pinyin: 'zhì', translation: 'wise' }
                        }
                    ]
                },
                {
                    id: 'cc19-clause2',
                    role: 'Comment',
                    subRole: 'parallel clause',
                    children: [
                        {
                            id: 'cc19-c2-subj',
                            role: 'Subject',
                            subRole: '者-nominalization (reflexive)',
                            children: [
                                {
                                    id: 'cc19-c2-subj-refl',
                                    role: 'Adjunct',
                                    subRole: 'reflexive',
                                    text: { hanzi: '自', pinyin: 'zì', translation: 'self' }
                                },
                                {
                                    id: 'cc19-c2-subj-v',
                                    role: 'Head Verb',
                                    text: { hanzi: '知', pinyin: 'zhī', translation: 'know' }
                                },
                                {
                                    id: 'cc19-c2-subj-zhe',
                                    role: 'Particle',
                                    subRole: 'nominalizer',
                                    text: { hanzi: '者', pinyin: 'zhě', translation: '(one who…)' }
                                }
                            ]
                        },
                        {
                            id: 'cc19-c2-pred',
                            role: 'Predicate',
                            subRole: 'bare adjective',
                            text: { hanzi: '明', pinyin: 'míng', translation: 'enlightened / clear-sighted' }
                        }
                    ]
                }
            ]
        }
    },

    /* ───────── Genitive & Modification (之) — structural filler ───────── */
    {
        id: 'cc20',
        category: 'Genitive & Modification (之)',
        source: '《孟子》· 公孫丑上',
        author: 'Mencius',
        chinese: '天時不如地利，地利不如人和。',
        pinyin: 'Tiān shí bù rú dì lì, dì lì bù rú rén hé.',
        translation: 'Favorable weather is not as good as advantageous terrain; advantageous terrain is not as good as harmony among people.',
        relatedIds: ['s9', 's20'],
        explanation: 'Mencius builds a hierarchy of strategic advantage: **favorable weather matters less than good terrain, and good terrain matters less than unity among people**. The ultimate message is that human cooperation and social harmony are the most decisive factors in any endeavor. This is a deeply Confucian prioritization of human bonds over material circumstances. *Grammatically,* the sentence uses the classical comparative pattern **A 不如 B** ("A is not as good as B") in a rising chain. Each element is a compound noun: **天時** (heaven + time = favorable timing), **地利** (earth + advantage = geographical advantage), and **人和** (people + harmony = human unity). **不如** (bù rú) is the standard classical comparative, literally "not equal to." The repetition creates the same rhythmic, escalating effect as the 知之者 sentence (cc2), a signature classical rhetorical device.',
        tree: {
            id: 'cc20-root',
            role: 'Sentence',
            children: [
                {
                    id: 'cc20-clause1',
                    role: 'Topic',
                    subRole: 'first comparison',
                    children: [
                        {
                            id: 'cc20-c1-subj',
                            role: 'Subject',
                            children: [
                                {
                                    id: 'cc20-c1-subj-attr',
                                    role: 'Attributive',
                                    text: { hanzi: '天', pinyin: 'tiān', translation: 'heaven / weather' }
                                },
                                {
                                    id: 'cc20-c1-subj-n',
                                    role: 'Head Noun',
                                    text: { hanzi: '時', pinyin: 'shí', translation: 'timing / season' }
                                }
                            ]
                        },
                        {
                            id: 'cc20-c1-pred',
                            role: 'Predicate',
                            subRole: 'comparative (不如)',
                            children: [
                                {
                                    id: 'cc20-c1-pred-v',
                                    role: 'Adjunct',
                                    subRole: 'comparative negation',
                                    text: { hanzi: '不如', pinyin: 'bù rú', translation: 'is not as good as' }
                                },
                                {
                                    id: 'cc20-c1-pred-obj',
                                    role: 'Object',
                                    children: [
                                        {
                                            id: 'cc20-c1-pred-obj-attr',
                                            role: 'Attributive',
                                            text: { hanzi: '地', pinyin: 'dì', translation: 'earth / terrain' }
                                        },
                                        {
                                            id: 'cc20-c1-pred-obj-n',
                                            role: 'Head Noun',
                                            text: { hanzi: '利', pinyin: 'lì', translation: 'advantage' }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'cc20-clause2',
                    role: 'Comment',
                    subRole: 'second comparison (climax)',
                    children: [
                        {
                            id: 'cc20-c2-subj',
                            role: 'Subject',
                            children: [
                                {
                                    id: 'cc20-c2-subj-attr',
                                    role: 'Attributive',
                                    text: { hanzi: '地', pinyin: 'dì', translation: 'terrain' }
                                },
                                {
                                    id: 'cc20-c2-subj-n',
                                    role: 'Head Noun',
                                    text: { hanzi: '利', pinyin: 'lì', translation: 'advantage' }
                                }
                            ]
                        },
                        {
                            id: 'cc20-c2-pred',
                            role: 'Predicate',
                            subRole: 'comparative (不如)',
                            children: [
                                {
                                    id: 'cc20-c2-pred-v',
                                    role: 'Adjunct',
                                    subRole: 'comparative negation',
                                    text: { hanzi: '不如', pinyin: 'bù rú', translation: 'is not as good as' }
                                },
                                {
                                    id: 'cc20-c2-pred-obj',
                                    role: 'Object',
                                    children: [
                                        {
                                            id: 'cc20-c2-pred-obj-attr',
                                            role: 'Attributive',
                                            text: { hanzi: '人', pinyin: 'rén', translation: 'people / human' }
                                        },
                                        {
                                            id: 'cc20-c2-pred-obj-n',
                                            role: 'Head Noun',
                                            text: { hanzi: '和', pinyin: 'hé', translation: 'harmony / unity' }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },

    /* ───────── Coverbs & Prepositions (於/以/焉) — additional ─────── */
    {
        id: 'cc21',
        category: 'Coverbs & Prepositions (於/以/焉)',
        source: '《論語》· 憲問篇',
        author: 'Confucius',
        chinese: '以德報怨。',
        pinyin: 'Yǐ dé bào yuàn.',
        translation: 'Repay resentment with virtue.',
        relatedIds: ['s3', 's4'],
        explanation: 'This phrase captures a Confucian ideal of **moral generosity**: rather than retaliating against those who wrong you, respond with kindness. It is often contrasted with the follow-up question in the same passage, where Confucius actually recommends repaying resentment with *justice* (直) and reserving virtue (德) for virtue. The phrase has become proverbial in Chinese culture for turning the other cheek. *Grammatically,* **以** (yǐ) is the instrumental coverb meaning \"using\" or \"with.\" It takes **德** (dé, \"virtue\") as its object, forming a prepositional phrase that precedes the main verb. The main verb **報** (bào, \"repay/reciprocate\") takes **怨** (yuàn, \"resentment/grudge\") as its direct object. The word order is: [以 + instrument] + [verb] + [object]. The subject is dropped (pro-drop); the instruction is general, addressed to anyone.',
        tree: {
            id: 'cc21-root',
            role: 'Sentence',
            children: [
                {
                    id: 'cc21-pp',
                    role: 'Adjunct',
                    subRole: '以-construction (instrumental)',
                    children: [
                        {
                            id: 'cc21-yi',
                            role: 'Preposition',
                            subRole: 'instrumental coverb',
                            text: { hanzi: '以', pinyin: 'yǐ', translation: 'with / using' }
                        },
                        {
                            id: 'cc21-de',
                            role: 'Object',
                            text: { hanzi: '德', pinyin: 'dé', translation: 'virtue' }
                        }
                    ]
                },
                {
                    id: 'cc21-vp',
                    role: 'Verb Phrase',
                    children: [
                        {
                            id: 'cc21-bao',
                            role: 'Head Verb',
                            text: { hanzi: '報', pinyin: 'bào', translation: 'repay / reciprocate' }
                        },
                        {
                            id: 'cc21-yuan',
                            role: 'Object',
                            text: { hanzi: '怨', pinyin: 'yuàn', translation: 'resentment' }
                        }
                    ]
                }
            ]
        }
    },

    {
        id: 'cc22',
        category: 'Coverbs & Prepositions (於/以/焉)',
        source: '《孟子》· 告子下',
        author: 'Mencius',
        chinese: '生於憂患，死於安樂。',
        pinyin: 'Shēng yú yōu huàn, sǐ yú ān lè.',
        translation: 'Life springs from adversity; death comes from complacency.',
        relatedIds: ['s6', 's22'],
        explanation: 'Mencius argues that **hardship and struggle are the crucibles of greatness**, while comfort and ease lead to decline. This aphorism concludes a famous passage listing historical figures who rose to power from humble or difficult origins. It has become one of the most quoted lines in Chinese literature on the value of resilience. *Grammatically,* the sentence uses **於** (yú) twice as a source/cause coverb meaning \"from\" or \"out of.\" In the first clause, **生** (shēng, \"to live/be born\") is the verb and **於憂患** (\"from worry and hardship\") is the prepositional phrase indicating the source. The second clause mirrors this structure exactly: **死** (sǐ, \"to die\") + **於安樂** (\"from comfort and ease\"). The parallel construction creates a tight antithesis: 生 vs 死, 憂患 vs 安樂. Both subjects are dropped, making these general truths rather than statements about specific people.',
        tree: {
            id: 'cc22-root',
            role: 'Sentence',
            children: [
                {
                    id: 'cc22-c1',
                    role: 'Topic',
                    subRole: 'first clause (thesis)',
                    children: [
                        {
                            id: 'cc22-c1-v',
                            role: 'Head Verb',
                            text: { hanzi: '生', pinyin: 'shēng', translation: 'live / arise' }
                        },
                        {
                            id: 'cc22-c1-pp',
                            role: 'Complement',
                            subRole: '於-phrase (source/cause)',
                            children: [
                                {
                                    id: 'cc22-c1-yu',
                                    role: 'Preposition',
                                    subRole: 'source coverb',
                                    text: { hanzi: '於', pinyin: 'yú', translation: 'from / out of' }
                                },
                                {
                                    id: 'cc22-c1-obj',
                                    role: 'Object',
                                    text: { hanzi: '憂患', pinyin: 'yōu huàn', translation: 'worry and hardship' }
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'cc22-c2',
                    role: 'Comment',
                    subRole: 'second clause (antithesis)',
                    children: [
                        {
                            id: 'cc22-c2-v',
                            role: 'Head Verb',
                            text: { hanzi: '死', pinyin: 'sǐ', translation: 'perish / decline' }
                        },
                        {
                            id: 'cc22-c2-pp',
                            role: 'Complement',
                            subRole: '於-phrase (source/cause)',
                            children: [
                                {
                                    id: 'cc22-c2-yu',
                                    role: 'Preposition',
                                    subRole: 'source coverb',
                                    text: { hanzi: '於', pinyin: 'yú', translation: 'from / out of' }
                                },
                                {
                                    id: 'cc22-c2-obj',
                                    role: 'Object',
                                    text: { hanzi: '安樂', pinyin: 'ān lè', translation: 'comfort and ease' }
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },

    /* ───────── Nominalizers (者/所) — additional ─────── */
    {
        id: 'cc23',
        category: 'Nominalizers (者/所)',
        source: '《孟子》· 公孫丑下',
        author: 'Mencius',
        chinese: '得道者多助，失道者寡助。',
        pinyin: 'Dé dào zhě duō zhù, shī dào zhě guǎ zhù.',
        translation: 'One who follows the Way gains much support; one who abandons it finds little.',
        relatedIds: ['s15'],
        explanation: 'Mencius makes a political argument: **a ruler who governs justly will attract allies, while a tyrant will be abandoned**. The \"Way\" (道) here refers to moral governance, not abstract philosophy. This line follows directly from the 天時不如地利 passage (cc20), building toward the conclusion that human unity is the decisive factor in statecraft. *Grammatically,* **者** (zhě) nominalizes each clause: **得道者** means \"one who attains the Way\" (得 = attain, 道 = the Way, 者 = one who). The predicate for each nominalized subject is an adjective-noun compound: **多助** (much help) and **寡助** (little help). The parallel structure **X 者 Y, Z 者 W** creates a balanced couplet. Notice that 助 (\"help/support\") functions as a noun here, not a verb, a flexibility that classical Chinese exploits frequently.',
        tree: {
            id: 'cc23-root',
            role: 'Sentence',
            children: [
                {
                    id: 'cc23-c1',
                    role: 'Topic',
                    subRole: 'thesis clause',
                    children: [
                        {
                            id: 'cc23-c1-subj',
                            role: 'Subject',
                            subRole: '者 nominalization',
                            children: [
                                {
                                    id: 'cc23-c1-de',
                                    role: 'Head Verb',
                                    text: { hanzi: '得', pinyin: 'dé', translation: 'attain / follow' }
                                },
                                {
                                    id: 'cc23-c1-dao',
                                    role: 'Object',
                                    text: { hanzi: '道', pinyin: 'dào', translation: 'the Way' }
                                },
                                {
                                    id: 'cc23-c1-zhe',
                                    role: 'Particle',
                                    subRole: 'nominalizer',
                                    text: { hanzi: '者', pinyin: 'zhě', translation: '(one who…)' }
                                }
                            ]
                        },
                        {
                            id: 'cc23-c1-pred',
                            role: 'Predicate',
                            children: [
                                {
                                    id: 'cc23-c1-duo',
                                    role: 'Adjunct',
                                    subRole: 'quantity',
                                    text: { hanzi: '多', pinyin: 'duō', translation: 'much / many' }
                                },
                                {
                                    id: 'cc23-c1-zhu',
                                    role: 'Head Verb',
                                    subRole: 'nominal predicate',
                                    text: { hanzi: '助', pinyin: 'zhù', translation: 'support / help' }
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'cc23-c2',
                    role: 'Comment',
                    subRole: 'antithesis clause',
                    children: [
                        {
                            id: 'cc23-c2-subj',
                            role: 'Subject',
                            subRole: '者 nominalization',
                            children: [
                                {
                                    id: 'cc23-c2-shi',
                                    role: 'Head Verb',
                                    text: { hanzi: '失', pinyin: 'shī', translation: 'lose / abandon' }
                                },
                                {
                                    id: 'cc23-c2-dao',
                                    role: 'Object',
                                    text: { hanzi: '道', pinyin: 'dào', translation: 'the Way' }
                                },
                                {
                                    id: 'cc23-c2-zhe',
                                    role: 'Particle',
                                    subRole: 'nominalizer',
                                    text: { hanzi: '者', pinyin: 'zhě', translation: '(one who…)' }
                                }
                            ]
                        },
                        {
                            id: 'cc23-c2-pred',
                            role: 'Predicate',
                            children: [
                                {
                                    id: 'cc23-c2-gua',
                                    role: 'Adjunct',
                                    subRole: 'quantity',
                                    text: { hanzi: '寡', pinyin: 'guǎ', translation: 'few / little' }
                                },
                                {
                                    id: 'cc23-c2-zhu',
                                    role: 'Head Verb',
                                    subRole: 'nominal predicate',
                                    text: { hanzi: '助', pinyin: 'zhù', translation: 'support / help' }
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },

    /* ───────── Classical Negation (非/勿/莫) — additional ─────── */
    {
        id: 'cc24',
        category: 'Classical Negation (非/勿/莫)',
        source: '《三國志》· 蜀書',
        author: 'Liu Bei (attr.)',
        chinese: '勿以善小而不為。',
        pinyin: 'Wù yǐ shàn xiǎo ér bù wéi.',
        translation: 'Do not fail to do good just because it is small.',
        relatedIds: ['s3'],
        explanation: 'Attributed to Liu Bei as a deathbed instruction to his son, this maxim teaches that **no act of kindness is too small to matter**. It is one of the most beloved moral aphorisms in Chinese culture, often paired with its complement: \"Do not commit an evil just because it is small\" (勿以惡小而為之). Together they define a life of moral attention to every moment. *Grammatically,* **勿** (wù) is the classical prohibitive negator meaning \"do not!\" (stronger and more direct than 不). **以** (yǐ) here means \"because of\" or \"on account of,\" forming a causal phrase: 以善小 = \"because the good deed is small.\" **而** (ér) acts as a concessive connector (\"and yet/and thereby\"), linking the reason clause to the main prohibition. **不為** (bù wéi, \"not act/not do\") completes the sentence. The double negation (勿 + 不) creates the positive force: \"you must still do it.\"',
        tree: {
            id: 'cc24-root',
            role: 'Sentence',
            children: [
                {
                    id: 'cc24-wu',
                    role: 'Adjunct',
                    subRole: 'prohibitive negation',
                    text: { hanzi: '勿', pinyin: 'wù', translation: 'do not!' }
                },
                {
                    id: 'cc24-reason',
                    role: 'Adjunct',
                    subRole: '以-clause (causal)',
                    children: [
                        {
                            id: 'cc24-yi',
                            role: 'Preposition',
                            subRole: 'causal coverb',
                            text: { hanzi: '以', pinyin: 'yǐ', translation: 'because of' }
                        },
                        {
                            id: 'cc24-shan',
                            role: 'Noun Phrase',
                            children: [
                                {
                                    id: 'cc24-shan-n',
                                    role: 'Head Noun',
                                    text: { hanzi: '善', pinyin: 'shàn', translation: 'a good deed' }
                                },
                                {
                                    id: 'cc24-xiao',
                                    role: 'Complement',
                                    subRole: 'adjectival predicate',
                                    text: { hanzi: '小', pinyin: 'xiǎo', translation: 'small' }
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'cc24-er',
                    role: 'Particle',
                    subRole: 'concessive connective',
                    text: { hanzi: '而', pinyin: 'ér', translation: 'and thereby' }
                },
                {
                    id: 'cc24-vp',
                    role: 'Verb Phrase',
                    children: [
                        {
                            id: 'cc24-bu',
                            role: 'Adjunct',
                            subRole: 'negation',
                            text: { hanzi: '不', pinyin: 'bù', translation: 'not' }
                        },
                        {
                            id: 'cc24-wei',
                            role: 'Head Verb',
                            text: { hanzi: '為', pinyin: 'wéi', translation: 'do / act' }
                        }
                    ]
                }
            ]
        }
    },

    /* ───────── Genitive & Modification (之) — additional ─────── */
    {
        id: 'cc25',
        category: 'Genitive & Modification (之)',
        source: '《論語》· 為政篇',
        author: 'Confucius',
        chinese: '人之過也，各於其黨。',
        pinyin: 'Rén zhī guò yě, gè yú qí dǎng.',
        translation: 'The faults of a person each belong to the type of person they are.',
        explanation: 'Confucius observes that **a person\'s mistakes reveal their character**: the errors of a compassionate person differ in nature from those of a selfish one. Faults are not random; they cluster according to the kind of person you are. By studying someone\'s mistakes, you can understand their deeper nature. This passage is often cited in discussions of character assessment. *Grammatically,* **之** (zhī) appears in its genitive function, linking **人** (rén, \"person\") to **過** (guò, \"faults/errors\") to form \"a person\'s faults.\" **也** (yě) marks the end of the topic phrase, creating a pause: \"As for a person\'s faults...\" The comment clause uses **各** (gè, \"each\") as an adverb, **於** (yú) as a locative coverb meaning \"to/at,\" and **其黨** (qí dǎng, \"their type/group\") as the complement. The structure is a classic Topic-Comment frame: [noun 之 noun 也], [comment].',
        tree: {
            id: 'cc25-root',
            role: 'Sentence',
            children: [
                {
                    id: 'cc25-topic',
                    role: 'Topic',
                    subRole: '之 genitive phrase',
                    children: [
                        {
                            id: 'cc25-ren',
                            role: 'Attributive',
                            subRole: 'possessor',
                            text: { hanzi: '人', pinyin: 'rén', translation: 'a person' }
                        },
                        {
                            id: 'cc25-zhi',
                            role: 'Particle',
                            subRole: 'genitive marker',
                            text: { hanzi: '之', pinyin: 'zhī', translation: '(\'s / of)' }
                        },
                        {
                            id: 'cc25-guo',
                            role: 'Head Noun',
                            text: { hanzi: '過', pinyin: 'guò', translation: 'faults / errors' }
                        },
                        {
                            id: 'cc25-ye',
                            role: 'Particle',
                            subRole: 'topic pause marker',
                            text: { hanzi: '也', pinyin: 'yě', translation: '(as for…)' }
                        }
                    ]
                },
                {
                    id: 'cc25-comment',
                    role: 'Comment',
                    children: [
                        {
                            id: 'cc25-ge',
                            role: 'Adjunct',
                            subRole: 'distributive adverb',
                            text: { hanzi: '各', pinyin: 'gè', translation: 'each' }
                        },
                        {
                            id: 'cc25-pp',
                            role: 'Verb Phrase',
                            subRole: '於-phrase (locative)',
                            children: [
                                {
                                    id: 'cc25-yu',
                                    role: 'Preposition',
                                    subRole: 'locative coverb',
                                    text: { hanzi: '於', pinyin: 'yú', translation: 'to / at' }
                                },
                                {
                                    id: 'cc25-qidang',
                                    role: 'Object',
                                    children: [
                                        {
                                            id: 'cc25-qi',
                                            role: 'Attributive',
                                            text: { hanzi: '其', pinyin: 'qí', translation: 'their' }
                                        },
                                        {
                                            id: 'cc25-dang',
                                            role: 'Head Noun',
                                            text: { hanzi: '黨', pinyin: 'dǎng', translation: 'type / group' }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
];
