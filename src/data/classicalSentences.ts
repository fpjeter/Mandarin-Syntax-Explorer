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
];
