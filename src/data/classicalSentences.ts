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
        translation: 'To study and regularly practice it — is that not a joy?',
        explanation: 'This is the very first sentence of the **Analects** and one of the most famous in all of Chinese literature. It demonstrates two core classical grammar features at once. First, **而** (ér) links two actions sequentially — study, *then* practice — working exactly like a serial-verb connector. Second, the **不亦…乎** frame is a rhetorical question pattern meaning "is it not…?" that *asserts* rather than asks. In modern Mandarin, you would need explicit connectors and question particles; here, 而 and 乎 handle everything elegantly in just ten characters. The **之** (zhī) pronoun — "it" — refers back to what was studied, a very common classical anaphoric device.',
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
        explanation: 'This sentence showcases the classical **者** (zhě) nominalizer — it turns a verb phrase into "the one who [verb]s." The sentence builds a **rising chain**: knowing < loving < delighting, using the **不如** comparative pattern ("is not as good as"). Each clause follows the same template: **[verb] 之 者 不如 [verb] 之 者**. The **之** (zhī) in each phrase is an object pronoun ("it"), placed between the verb and 者. This repetitive parallel structure is a hallmark of classical rhetoric — it builds rhythm and emphasis while making the grammar crystal clear.',
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
        explanation: 'This beloved proverb illustrates the classical coverb **焉** (yān), a fusional word that packs "in/among them" into a single character — it combines a preposition ("among") with its pronoun object ("them"). The sentence opens with a conditional clause: **三人行** ("three people walk") sets the scene, then the Comment asserts **必有** ("certainly there exists") **我師** ("my teacher"). The **焉** at the end simultaneously points back to the three walkers and says "among that group." In modern Mandarin, you would need a full phrase like 在其中 ("among them"); classical Chinese compresses this into one elegant syllable.',
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
        explanation: 'The opening line of the **Tao Te Ching** is a masterclass in classical Chinese concision. The same character **道** (dào) appears three times with three different grammatical roles: first as a noun ("the Way"), then as a verb ("to speak/articulate"), and finally as a noun again ("the [true] Way"). The **可** (kě) before the verb means "can be" — similar to the modern potential complement pattern. The predicate **非** (fēi) is the classical copula negator, meaning "is not" — it negates the entire identity of the subject. **常** (cháng) means "constant/eternal." The sentence splits into a Topic ("the Way that can be spoken") and a Comment that denies its identity with the eternal Way.',
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
        explanation: 'This proverb demonstrates the two most important classical function words in a single line. **之** (zhī) serves as a genitive marker — "千里之行" literally reads "a thousand lǐ *\'s* journey." It works like English "of" or the possessive "\'s". Then **於** (yú) acts as a locative preposition meaning "at/from" — "始於足下" reads "begins at foot-below," i.e., "begins beneath one\'s feet." In modern Mandarin, 之 has been almost entirely replaced by 的, and 於 by 在 or 从. The classical versions are more compact and carry a literary weight that modern particles lack.',
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
        translation: 'To review the old and understand the new — with this one can be a teacher.',
        explanation: 'The first clause shows **而** (ér) at its most elegant: it chains two actions — **溫故** ("review the old") and **知新** ("understand the new") — in sequence. The 而 doesn\'t just mean "and"; it implies that the second action *arises from* the first. The verbs **溫** and **知** take adjective-turned-nouns as objects: **故** (old things) and **新** (new things) — classical Chinese freely converts adjectives to nouns without any morphological change. The second clause introduces **可以** (kě yǐ, "can thereby") and **為** (wéi, "serve as"), followed by **矣** (yǐ), a sentence-final particle expressing a settled conclusion.',
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
        explanation: 'The Confucian "Golden Rule" demonstrates two powerful classical devices. First, **所** (suǒ) is a nominalizer that works from the *object* side — "所不欲" means "that which (one) does not desire." Combined with **己** (jǐ, "oneself"), the Topic becomes "what oneself does not desire." Second, the Comment uses **勿** (wù), the classical prohibitive negator meaning "do not!" — it is stronger and more formal than 不. The verb **施** (shī, "impose/inflict") takes a **於** (yú) prepositional phrase — "upon others." This sentence packs an entire ethical principle into just eight characters through classical compression.',
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

    /* ───────── Sequential Actions (而) — reflexive ───────── */
    {
        id: 'cc8',
        category: 'Rhetorical Patterns (反問)',
        source: '《論語》· 學而篇',
        author: 'Zengzi (Confucius\'s disciple)',
        chinese: '吾日三省吾身。',
        pinyin: 'Wú rì sān xǐng wú shēn.',
        translation: 'Each day I examine myself on three points.',
        explanation: 'This compact sentence by **Zengzi** (曾子) demonstrates several signature classical Chinese grammar features in just six characters. **吾** (wú) is the archaic first-person pronoun — more literary than 我. **日** (rì, "daily") functions as a time adverb directly before the predicate without any preposition — classical Chinese can freely repurpose nouns as modifiers. **三** (sān, "three / three times") acts as a frequency adverb modifying the verb **省** (xǐng, "examine/reflect"). The object **吾身** ("my person/self") is a reflexive construction. The whole sentence achieves in six characters what English needs eleven words to express.',
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

    /* ───────── Rhetorical Patterns (反問) — 豈…哉 ───────── */
    {
        id: 'cc9',
        category: 'Rhetorical Patterns (反問)',
        source: '《孟子》· 梁惠王上',
        author: 'Mencius',
        chinese: '王侯將相，寧有種乎？',
        pinyin: 'Wáng hóu jiàng xiàng, nìng yǒu zhǒng hū?',
        translation: 'Are kings, lords, generals, and ministers such by birth?',
        explanation: 'This rallying cry attributed to **Chen Sheng** (陳勝) during the first peasant uprising against the Qin dynasty uses the rhetorical frame **寧…乎** (nìng…hū), meaning "could it really be that…?" The **寧** (nìng) is a rhetorical adverb that challenges probability — it expects the answer "no." The compound subject **王侯將相** (kings, lords, generals, ministers) is a four-character coordination of nouns without any connecting particles — classical Chinese relies on juxtaposition where modern Chinese would need 和 or commas. The verb **有種** means "have seed/lineage," questioning whether noble status is hereditary. The final **乎** (hū) seals the rhetorical force.',
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

    /* ───────── Rhetorical Patterns (反問) — 何…之有 ───────── */
    {
        id: 'cc10',
        category: 'Rhetorical Patterns (反問)',
        source: '《論語》· 子罕篇',
        author: 'Confucius',
        chinese: '逝者如斯夫，不舍晝夜。',
        pinyin: 'Shì zhě rú sī fú, bù shě zhòu yè.',
        translation: 'That which passes is like this — it does not cease day or night.',
        explanation: 'Standing beside a river, Confucius delivers this meditation on time. The sentence opens with a **者**-nominalization: **逝者** means "that which passes" — the nominalizer 者 turns the verb 逝 (pass away) into a noun. **如** (rú) means "is like," and **斯** (sī) is a demonstrative pronoun meaning "this" (referring to the flowing river). **夫** (fú) is an exclamatory particle conveying the speaker\'s emotion. The second clause uses **不舍** (does not cease) with the pair **晝夜** (day and night) acting as a time adverbial — the river flows continuously, just as time never stops.',
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
        explanation: 'This sentence from Mencius demonstrates the **所**-nominalization pattern in a predicate context. **生** (shēng, "life") is the Topic. The Comment uses **所欲** (suǒ yù), where **所** turns the verb **欲** (desire) into a noun: "that which is desired." With the subject **我** (wǒ, "I"), it reads "what I desire." The **亦** (yì) means "also," and **也** (yě) is a sentence-final assertive particle confirming identity — the whole structure is "Life is *also* what I desire." This **[Topic], [Subject] 所 [Verb] 也** pattern is one of the most common classical sentence templates for making identity statements.',
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
        source: '《韓愈》· 師說',
        author: 'Han Yu',
        chinese: '師者，所以傳道受業解惑也。',
        pinyin: 'Shī zhě, suǒ yǐ chuán dào shòu yè jiě huò yě.',
        translation: 'A teacher is the means by which the Way is transmitted, knowledge imparted, and confusion resolved.',
        explanation: 'Han Yu\'s famous essay on teaching showcases the most powerful nominalization in classical Chinese: **所以** (suǒ yǐ). While modern 所以 means "therefore," in classical Chinese it means "the means by which" or "the reason why." Here, **師者** (shī zhě, "a teacher" — 者 marks the definition) is the Topic, and the Comment **所以傳道受業解惑也** lists three purposes using a triple-verb series: **傳道** (transmit the Way), **受業** (impart knowledge), **解惑** (resolve confusion). The final **也** asserts identity. This is the classic **X 者, Y 也** definitional pattern: "X *is* Y."',
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
                                    text: { hanzi: '受', pinyin: 'shòu', translation: 'impart' }
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

    /* ───────── Classical Negation (非/勿/莫) — 莫 negative pronoun ───────── */
    {
        id: 'cc13',
        category: 'Classical Negation (非/勿/莫)',
        source: '《荀子》· 勸學篇',
        author: 'Xunzi',
        chinese: '青，取之於藍，而青於藍。',
        pinyin: 'Qīng, qǔ zhī yú lán, ér qīng yú lán.',
        translation: 'Blue dye comes from the indigo plant, yet it is bluer than indigo.',
        explanation: 'This famous proverb from **Xunzi\'s** essay on learning uses multiple classical devices. **青** (qīng, "blue") is the Topic. The first clause uses **取之於藍** where **之** is an object pronoun ("it"), and **於** is a source coverb ("from") — "takes it from indigo." The **而** (ér) then creates a *contrastive* link: "yet/but." The second clause **青於藍** shows **於** in its comparative function — "bluer *than* indigo." Notice how 於 carries two different meanings (source vs. comparison) in the same sentence. The metaphor means students can surpass their teachers — a complementary thought to 溫故而知新.',
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
        explanation: 'This extremely terse sentence demonstrates two advanced classical features. First, **未** (wèi) is the "not yet / never" negator — different from 不 (general negation) and 非 (identity negation). 未 negates *temporal* completion: something has *not yet* happened or has *never* occurred. Second, the word order is **inverted**: the object **之** (zhī, "it/such a thing") is placed *before* the verb **有** (yǒu, "exist"). This **object fronting** triggered by negation is a hallmark of classical Chinese — in negated clauses with pronominal objects, the pronoun moves ahead of the verb. Modern Mandarin has completely lost this inversion.',
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

    /* ───────── Coverbs & Prepositions (於/以/焉) — 以 instrumental ───────── */
    {
        id: 'cc15',
        category: 'Coverbs & Prepositions (於/以/焉)',
        source: '《論語》· 里仁篇',
        author: 'Confucius',
        chinese: '朝聞道，夕死可矣。',
        pinyin: 'Zhāo wén dào, xī sǐ kě yǐ.',
        translation: 'If in the morning one hears the Way, one could die that evening without regret.',
        explanation: 'This famous saying on the urgency of truth uses **朝** (zhāo, "morning") and **夕** (xī, "evening") as bare time adverbs — no preposition needed. Classical Chinese freely repurposes nouns as temporal modifiers by placing them before the verb. The first clause **朝聞道** follows a simple S-V-O pattern with the subject dropped (pro-drop): "(if one) hears the Way in the morning." The second clause **夕死可矣** uses **可** (kě, "acceptable/permissible") as a predicate of the implied "dying" — "dying in the evening is acceptable." The final **矣** (yǐ) is a sentence-final particle expressing a settled, satisfied conclusion.',
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

    /* ───────── Coverbs & Prepositions (於/以/焉) — 以 purpose ───────── */
    {
        id: 'cc16',
        category: 'Coverbs & Prepositions (於/以/焉)',
        source: '《孫子兵法》· 謀攻篇',
        author: 'Sun Tzu',
        chinese: '知彼知己，百戰不殆。',
        pinyin: 'Zhī bǐ zhī jǐ, bǎi zhàn bù dài.',
        translation: 'Know the enemy, know yourself — a hundred battles, no peril.',
        explanation: 'Sun Tzu\'s most famous maxim demonstrates classical **parallel structure** and **pro-drop** at their finest. The first clause pairs two verb-object phrases: **知彼** ("know the other/enemy") and **知己** ("know oneself"), with the same verb **知** repeated for rhetorical balance. No conjunction — classical Chinese relies on juxtaposition. The second clause **百戰不殆** is equally compressed: **百戰** ("a hundred battles") is a noun phrase acting as a topic-like conditional, and **不殆** ("not perilous") is the predicate. The whole sentence achieves maximum impact through extreme terseness — eight characters convey an entire military philosophy.',
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
        explanation: 'This perfectly balanced sentence demonstrates **而** in its *contrastive* role — meaning "but/without" — and introduces **則** (zé), the classical conditional marker meaning "then/leads to." Each half follows the same template: **[Verb] 而 不 [Verb] 則 [Result]**. In the first clause, 學而不思 means "study *but* not think," and 則罔 means "then (one is) confused." The parallel second clause swaps the verbs. The **而** here carries an adversative sense — it doesn\'t link sequential actions but opposing ones. **則** (zé) marks inevitable consequence, stronger than modern 就.',
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
        translation: 'If others do not recognize you, yet you are not resentful — is that not the mark of a noble person?',
        explanation: 'This sentence — the third line of the Analects\' opening passage — combines **而** in its *concessive* sense ("yet/even so") with the **不亦…乎** rhetorical question pattern. The first clause **人不知** means "others do not know/recognize (you)" — with pro-dropped object. **而** then introduces a surprising contrast: **不慍** ("not resentful") — the expected reaction would be frustration, but the noble person (君子) transcends it. The second half uses the same 不亦…乎 frame from the passage\'s first line (cc1), creating a structural bookend. **君子** (jūnzǐ) is not a verb but a noun acting as a *predicate nominal* — "is a noble person."',
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
        explanation: 'This Daoist aphorism uses the **者** nominalizer twice to create balanced definitions. **知人者** means "one who knows others" — **知** (know) takes **人** (others) as its object, and **者** turns the clause into a noun. The predicates are bare adjectives: **智** (wise) and **明** (enlightened/clear-sighted). The second clause introduces **自** (zì, "self") as a reflexive object — **自知** means "know oneself." The parallel structure **X 者 Y** (one who X, is Y) is one of the most common definitional patterns in classical prose. Notice that no copula (是) is needed — the juxtaposition alone asserts identity.',
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
        explanation: 'Mencius builds a **rising chain** using the classical comparative pattern **A 不如 B** ("A is not as good as B"). Each element is a compound noun: **天時** (heaven + time = favorable timing), **地利** (earth + advantage = geographical advantage), and **人和** (people + harmony = human unity). The structure climbs from nature to social bonds, asserting that human cooperation trumps all other advantages. **不如** (bù rú) is the standard classical comparative — literally "not equal to." The repetition creates the same rhythmic, escalating effect as the 知之者 sentence (cc2), a signature classical rhetorical device.',
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
];
