import type { SentenceData } from '../../types/grammar';

export const baConstruction: SentenceData[] = [
    {
        id: 's3',
        category: 'BA Construction (把字句)',
        chinese: '她昨天把我的钱包忘在出租车上了。',
        pinyin: 'Tā zuó tiān bǎ wǒ de qián bāo wàng zài chū zū chē shàng le.',
        translation: 'She forgot my wallet in the taxi yesterday.',

        explanation: '**她** ("she") is the Topic. The Comment opens with a time stamp, **昨天** ("yesterday"), because in Mandarin, time and place come before the verb, not after it. Then comes a special pattern: **把** moves the object (my wallet) in front of the verb. This is called the **把 construction**: it is used when something specific is being acted upon and something notable happens to it. Think of 把 as a spotlight on the wallet: *"as for the wallet, she forgot it in the taxi."* The tree shows 把 and the wallet grouped together before the verb.',
        tree: {
            id: 'n3',
            role: 'Sentence',
            children: [
                {
                    id: 'n3-t',
                    role: 'Topic',
                    text: { hanzi: '她', pinyin: 'tā', translation: 'she' }
                },
                {
                    id: 'n3-c',
                    role: 'Comment',
                    subRole: 'bǎ-construction',
                    children: [
                        {
                            id: 'n3-p-tp',
                            role: 'Adjunct',
                            subRole: 'time',
                            text: { hanzi: '昨天', pinyin: 'zuó tiān', translation: 'yesterday' }
                        },
                        {
                            id: 'n3-p-ba',
                            role: 'Adjunct',
                            subRole: 'bǎ-construction',
                            children: [
                                {
                                    id: 'n3-p-ba-prep',
                                    role: 'Preposition',
                                    text: { hanzi: '把', pinyin: 'bǎ', translation: '(object fronting)' }
                                },
                                {
                                    id: 'n3-p-ba-obj',
                                    role: 'Object',
                                    children: [
                                        {
                                            id: 'n3-p-ba-obj-attr',
                                            role: 'Attributive',
                                            text: { hanzi: '我的', pinyin: 'wǒ de', translation: 'my' }
                                        },
                                        {
                                            id: 'n3-p-ba-obj-hn',
                                            role: 'Head Noun',
                                            text: { hanzi: '钱包', pinyin: 'qián bāo', translation: 'wallet' }
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'n3-p-vp',
                            role: 'Verb Phrase',
                            children: [
                                {
                                    id: 'n3-p-vp-hv',
                                    role: 'Head Verb',
                                    text: { hanzi: '忘', pinyin: 'wàng', translation: 'forget' }
                                },
                                {
                                    id: 'n3-p-vp-comp',
                                    role: 'Complement',
                                    subRole: 'result location',
                                    children: [
                                        {
                                            id: 'n3-p-vp-comp-prep',
                                            role: 'Preposition',
                                            text: { hanzi: '在', pinyin: 'zài', translation: 'in/at' }
                                        },
                                        {
                                            id: 'n3-p-vp-comp-n',
                                            role: 'Noun',
                                            text: { hanzi: '出租车', pinyin: 'chū zū chē', translation: 'taxi' }
                                        },
                                        {
                                            id: 'n3-p-vp-comp-loc',
                                            role: 'Particle',
                                            subRole: 'localizer',
                                            text: { hanzi: '上', pinyin: 'shàng', translation: '(on/in, localizer)' }
                                        }
                                    ]
                                },
                                {
                                    id: 'n3-p-vp-part',
                                    role: 'Particle',
                                    subRole: 'aspect',
                                    text: { hanzi: '了', pinyin: 'le', translation: '(completion)' }
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    {
        id: 's4',
        category: 'BA Construction (把字句)',
        chinese: '那只猫在厨房里生气地用爪子把我的杯子弄倒地上了。',
        pinyin: 'Nà zhī māo zài chú fáng lǐ shēng qì de yòng zhuǎ zi bǎ wǒ de bēi zi nòng dào dì shàng le.',
        translation: 'That cat angrily knocked my cup to the floor with its claws.',

        explanation: '**那只猫** ("that cat") is the Topic. 只 is a **measure word**, a counting word specific to cats and certain animals. Before the main action even appears, Mandarin layers up the scene inside the Comment: **how** the cat acted (angrily), then **with what** (its claws), then **把** spotlights the cup as the thing being affected. Only after all that setup does the verb **弄** ("knock/move") appear. In English, you would lead with the verb much earlier. This sentence shows how Mandarin packs rich detail around the verb systematically.',
        tree: {
            id: 'n4',
            role: 'Sentence',
            children: [
                {
                    id: 'n4-t',
                    role: 'Topic',
                    children: [
                        {
                            id: 'n4-s-attr',
                            role: 'Attributive',
                            text: { hanzi: '那只', pinyin: 'nà zhī', translation: 'that (measure)' }
                        },
                        {
                            id: 'n4-s-hn',
                            role: 'Head Noun',
                            text: { hanzi: '猫', pinyin: 'māo', translation: 'cat' }
                        }
                    ]
                },
                {
                    id: 'n4-c',
                    role: 'Comment',
                    subRole: 'bǎ + manner + instrument',
                    children: [
                        {
                            id: 'n4-p-loc',
                            role: 'Adjunct',
                            subRole: 'location',
                            children: [
                                {
                                    id: 'n4-p-loc-prep',
                                    role: 'Preposition',
                                    text: { hanzi: '在', pinyin: 'zài', translation: 'at' }
                                },
                                {
                                    id: 'n4-p-loc-n',
                                    role: 'Noun',
                                    text: { hanzi: '厨房', pinyin: 'chú fáng', translation: 'kitchen' }
                                }
                            ]
                        },
                        {
                            id: 'n4-p-adv1',
                            role: 'Adjunct',
                            subRole: 'manner',
                            text: { hanzi: '生气地', pinyin: 'shēng qì de', translation: 'angrily' }
                        },
                        {
                            id: 'n4-p-adv2',
                            role: 'Adjunct',
                            subRole: 'instrument',
                            children: [
                                {
                                    id: 'n4-p-adv2-prep',
                                    role: 'Preposition',
                                    text: { hanzi: '用', pinyin: 'yòng', translation: 'with' }
                                },
                                {
                                    id: 'n4-p-adv2-n',
                                    role: 'Noun',
                                    text: { hanzi: '爪子', pinyin: 'zhuǎ zi', translation: 'claws' }
                                }
                            ]
                        },
                        {
                            id: 'n4-p-ba',
                            role: 'Adjunct',
                            subRole: 'bǎ-construction',
                            children: [
                                {
                                    id: 'n4-p-ba-prep',
                                    role: 'Preposition',
                                    text: { hanzi: '把', pinyin: 'bǎ', translation: '(object fronting)' }
                                },
                                {
                                    id: 'n4-p-ba-obj',
                                    role: 'Object',
                                    children: [
                                        {
                                            id: 'n4-p-ba-obj-attr',
                                            role: 'Attributive',
                                            text: { hanzi: '我的', pinyin: 'wǒ de', translation: 'my' }
                                        },
                                        {
                                            id: 'n4-p-ba-obj-hn',
                                            role: 'Head Noun',
                                            text: { hanzi: '杯子', pinyin: 'bēi zi', translation: 'cup' }
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'n4-p-vp',
                            role: 'Verb Phrase',
                            children: [
                                {
                                    id: 'n4-p-vp-hv',
                                    role: 'Head Verb',
                                    text: { hanzi: '弄', pinyin: 'nòng', translation: 'make/do/knock' }
                                },
                                {
                                    id: 'n4-p-vp-comp',
                                    role: 'Complement',
                                    subRole: 'directional · result location',
                                    text: { hanzi: '到地上', pinyin: 'dào dì shàng', translation: 'to the floor' }
                                },
                                {
                                    id: 'n4-p-vp-part',
                                    role: 'Particle',
                                    subRole: 'aspect',
                                    text: { hanzi: '了', pinyin: 'le', translation: '(completed action)' }
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    {
        id: 's28',
        category: 'BA Construction (把字句)',
        chinese: '请把窗户关上。',
        pinyin: 'Qǐng bǎ chuāng hu guān shàng.',
        translation: 'Please close the window.',
        explanation: 'A minimal, everyday BA sentence. **请** ("please") is a politeness adverb. Then **把** spotlights **窗户** ("the window") before the verb; this is the classic BA move: take the object and bring it in front of the verb to show it will be *affected*. The verb **关** ("close") is followed by the directional complement **上** (up/onto, here meaning "shut"). The pattern **把 [thing] [verb]+[result]** is the standard template for giving instructions or describing a deliberate act with a clear outcome on an object. Notice that the subject **[你]** ("you") is heavily implied, appearing as a ghost node in the tree.',
        tree: {
            id: 'n28',
            role: 'Sentence',
            children: [
                {
                    id: 'n28-t',
                    role: 'Topic',
                    isDropped: true,
                    impliedText: '你',
                },
                {
                    id: 'n28-c',
                    role: 'Comment',
                    children: [
                        {
                            id: 'n28-adv',
                            role: 'Adjunct',
                            subRole: 'politeness',
                            text: { hanzi: '请', pinyin: 'qǐng', translation: 'please' },
                        },
                        {
                            id: 'n28-ba',
                            role: 'Adjunct',
                            subRole: 'bǎ-construction',
                            children: [
                                {
                                    id: 'n28-ba-prep',
                                    role: 'Preposition',
                                    text: { hanzi: '把', pinyin: 'bǎ', translation: '(object fronting)' },
                                },
                                {
                                    id: 'n28-ba-obj',
                                    role: 'Object',
                                    text: { hanzi: '窗户', pinyin: 'chuāng hu', translation: 'window' },
                                },
                            ],
                        },
                        {
                            id: 'n28-vp',
                            role: 'Verb Phrase',
                            children: [
                                {
                                    id: 'n28-vp-hv',
                                    role: 'Head Verb',
                                    text: { hanzi: '关', pinyin: 'guān', translation: 'close' },
                                },
                                {
                                    id: 'n28-vp-comp',
                                    role: 'Complement',
                                    subRole: 'directional (sealed/shut)',
                                    text: { hanzi: '上', pinyin: 'shàng', translation: 'up / shut' },
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 's29',
        category: 'BA Construction (把字句)',
        chinese: '她把那封信藏在枕头下面了。',
        pinyin: 'Tā bǎ nà fēng xìn cáng zài zhěn tou xià miàn le.',
        translation: 'She hid that letter under the pillow.',
        explanation: '**她** ("she") is the Topic. The Comment uses **把** to spotlight **那封信** (that letter, where 封 is the measure word for letters and envelopes. The verb **藏** ("hide") is then followed by a location phrase: **在枕头下面** ("under the pillow"). This location tells you *where the object ended up*: the final resting state after the action. This shows BA\'s core job: once you\'ve fronted the object, the verb naturally attaches a result or destination. Compare with English: "She hid the letter under the pillow"; Mandarin and English are parallel here, but Mandarin uses 把 to mark the intent and outcome much more explicitly.',
        tree: {
            id: 'n29',
            role: 'Sentence',
            children: [
                {
                    id: 'n29-t',
                    role: 'Topic',
                    text: { hanzi: '她', pinyin: 'tā', translation: 'she' },
                },
                {
                    id: 'n29-c',
                    role: 'Comment',
                    children: [
                        {
                            id: 'n29-ba',
                            role: 'Adjunct',
                            subRole: 'bǎ-construction',
                            children: [
                                {
                                    id: 'n29-ba-prep',
                                    role: 'Preposition',
                                    text: { hanzi: '把', pinyin: 'bǎ', translation: '(object fronting)' },
                                },
                                {
                                    id: 'n29-ba-obj',
                                    role: 'Object',
                                    children: [
                                        {
                                            id: 'n29-ba-obj-attr',
                                            role: 'Attributive',
                                            text: { hanzi: '那封', pinyin: 'nà fēng', translation: 'that (letter-measure)' },
                                        },
                                        {
                                            id: 'n29-ba-obj-hn',
                                            role: 'Head Noun',
                                            text: { hanzi: '信', pinyin: 'xìn', translation: 'letter' },
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            id: 'n29-vp',
                            role: 'Verb Phrase',
                            children: [
                                {
                                    id: 'n29-vp-hv',
                                    role: 'Head Verb',
                                    text: { hanzi: '藏', pinyin: 'cáng', translation: 'hide' },
                                },
                                {
                                    id: 'n29-vp-lp',
                                    role: 'Complement',
                                    subRole: 'result location',
                                    children: [
                                        {
                                            id: 'n29-vp-lp-prep',
                                            role: 'Preposition',
                                            text: { hanzi: '在', pinyin: 'zài', translation: 'at/in' },
                                        },
                                        {
                                            id: 'n29-vp-lp-n',
                                            role: 'Noun',
                                            text: { hanzi: '枕头', pinyin: 'zhěn tou', translation: 'pillow' },
                                        },
                                        {
                                            id: 'n29-vp-lp-loc',
                                            role: 'Particle',
                                            subRole: 'localizer',
                                            text: { hanzi: '下面', pinyin: 'xià miàn', translation: 'underneath' },
                                        },
                                    ],
                                },
                                {
                                    id: 'n29-vp-le',
                                    role: 'Particle',
                                    subRole: 'completion',
                                    text: { hanzi: '了', pinyin: 'le', translation: '(done)' },
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 's74',
        category: 'BA Construction (\u628a\u5b57\u53e5)',
        chinese: '不要把自己不想要的东西强加给别人。',
        pinyin: 'Bú yào bǎ zì jǐ bù xiǎng yào de dōng xi qiáng jiā gěi bié rén.',
        translation: 'Do not force upon others what you yourself do not want.',
        explanation: 'This modernizes the classical 己所不欲勿施於人. Modern Mandarin uses the **把** construction to front the object before the verb, just as classical Chinese used fronted objects but with different mechanisms. *Grammatically,* 不要 ("do not") opens the prohibition. 把 then fronts the complex object: 自己不想要的东西 ("things you yourself don\'t want"). The verb phrase 强加给别人 ("force upon others") completes the action. The classical 勿 becomes 不要, 所不欲 becomes 不想要的东西, and 施於人 becomes 强加给别人.',
        tree: {
            id: 's74-root', role: 'Sentence', children: [
                { id: 's74-neg', role: 'Adjunct', subRole: 'prohibition', text: { hanzi: '不要', pinyin: 'bú yào', translation: 'do not' } },
                { id: 's74-ba', role: 'Adjunct', subRole: 'ba-construction', children: [
                    { id: 's74-ba-p', role: 'Preposition', text: { hanzi: '把', pinyin: 'bǎ', translation: '(object fronting)' } },
                    { id: 's74-ba-obj', role: 'Object', children: [
                        { id: 's74-attr', role: 'Attributive', text: { hanzi: '自己不想要的', pinyin: 'zì jǐ bù xiǎng yào de', translation: 'that you yourself don\'t want' } },
                        { id: 's74-dx', role: 'Head Noun', text: { hanzi: '东西', pinyin: 'dōng xi', translation: 'things' } },
                    ]},
                ]},
                { id: 's74-vp', role: 'Verb Phrase', children: [
                    { id: 's74-qj', role: 'Head Verb', text: { hanzi: '强加', pinyin: 'qiáng jiā', translation: 'force upon' } },
                    { id: 's74-gei', role: 'Complement', text: { hanzi: '给', pinyin: 'gěi', translation: 'to/for' } },
                    { id: 's74-br', role: 'Object', text: { hanzi: '别人', pinyin: 'bié rén', translation: 'others' } },
                ]},
            ]
        }
    },
    {
        id: 's88',
        category: 'BA Construction (\u628a\u5b57\u53e5)',
        chinese: '要用善良把怨恨化解掉。',
        pinyin: 'Yào yòng shàn liáng bǎ yuàn hèn huà jiě diào.',
        translation: 'One should use kindness to resolve resentment.',
        explanation: 'This modernizes the classical 以德報怨. The classical instrumental coverb 以 ("with/using") becomes 用 ("use"), while the disposal construction uses 把 to highlight the affected object. *Grammatically,* 要 ("should") sets the advisory tone. 用善良 ("using kindness") is an instrumental adjunct. 把怨恨 fronts the object (resentment) before the verb. 化解掉 uses a resultative complement: 化解 ("dissolve/resolve") + 掉 ("away, gone"), indicating complete removal.',
        tree: {
            id: 's88-root', role: 'Sentence', children: [
                { id: 's88-yao', role: 'Adjunct', text: { hanzi: '要', pinyin: 'yào', translation: 'should' } },
                { id: 's88-yong', role: 'Adjunct', subRole: 'instrument', text: { hanzi: '用善良', pinyin: 'yòng shàn liáng', translation: 'using kindness' } },
                { id: 's88-ba', role: 'Adjunct', subRole: 'ba-construction', children: [
                    { id: 's88-ba-p', role: 'Preposition', text: { hanzi: '把', pinyin: 'bǎ', translation: '(object fronting)' } },
                    { id: 's88-yh', role: 'Object', text: { hanzi: '怨恨', pinyin: 'yuàn hèn', translation: 'resentment' } },
                ]},
                { id: 's88-vp', role: 'Verb Phrase', children: [
                    { id: 's88-hj', role: 'Head Verb', text: { hanzi: '化解', pinyin: 'huà jiě', translation: 'resolve' } },
                    { id: 's88-diao', role: 'Complement', subRole: 'resultative', text: { hanzi: '掉', pinyin: 'diào', translation: 'away (completed removal)' } },
                ]},
            ]
        }
    }
];
