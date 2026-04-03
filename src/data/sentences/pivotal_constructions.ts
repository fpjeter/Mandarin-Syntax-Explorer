import type { SentenceData } from '../../types/grammar';

export const pivotalConstructions: SentenceData[] = [
    {
        id: 's32',
        category: 'Pivotal Constructions (兼语句)',
        chinese: '老师让学生回答问题。',
        pinyin: 'Lǎo shī ràng xué sheng huí dá wèn tí.',
        translation: 'The teacher had the students answer questions.',
        explanation: 'The Topic is **老师** ("teacher"). The verb **让** ("let/make") creates a **pivotal construction**: it introduces a person who is simultaneously the object of 让 and the actor of the next verb. Here, **学生** ("students") is the pivot: they are the ones being made to do something AND the ones performing the action. The embedded clause is **回答问题** ("answer questions"). The tree shows 学生 sitting at the junction between the two verbs, bridging them.',
        tree: {
            id: 'n32',
            role: 'Sentence',
            children: [
                {
                    id: 'n32-t',
                    role: 'Topic',
                    text: { hanzi: '老师', pinyin: 'lǎo shī', translation: 'teacher' },
                },
                {
                    id: 'n32-c',
                    role: 'Comment',
                    children: [
                        {
                            id: 'n32-vp',
                            role: 'Verb Phrase',
                            subRole: 'pivotal construction (兼语句)',
                            children: [
                                {
                                    id: 'n32-hv',
                                    role: 'Head Verb',
                                    subRole: 'causative verb (lets/has)',
                                    text: { hanzi: '让', pinyin: 'ràng', translation: 'let / have' },
                                },
                                {
                                    id: 'n32-embedded-clause',
                                    role: 'Embedded Clause',
                                    children: [
                                        {
                                            id: 'n32-pivot',
                                            role: 'Pivot',
                                            subRole: 'object of 让, subject of 回答',
                                            text: { hanzi: '学生', pinyin: 'xué sheng', translation: 'students' },
                                        },
                                        {
                                            id: 'n32-embedded',
                                            role: 'Verb Phrase',
                                            subRole: 'embedded predicate of pivot',
                                            children: [
                                                {
                                                    id: 'n32-embedded-hv',
                                                    role: 'Head Verb',
                                                    text: { hanzi: '回答', pinyin: 'huí dá', translation: 'answer' },
                                                },
                                                {
                                                    id: 'n32-embedded-obj',
                                                    role: 'Object',
                                                    text: { hanzi: '问题', pinyin: 'wèn tí', translation: 'questions' },
                                                },
                                            ],
                                        },
                                    ]
                                }
                            ],
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 's33',
        category: 'Pivotal Constructions (兼语句)',
        chinese: '妈妈叫我去买牛奶。',
        pinyin: 'Mā ma jiào wǒ qù mǎi niúnǎi.',
        translation: 'Mom told me to go buy milk.',
        explanation: 'Here **妈妈** ("Mom") is the Topic. The verb **叫** ("tell/ask") creates a pivotal construction: **我** ("me") is the pivot, simultaneously the object of 叫 and the actor of the next action, **去买牛奶** ("go buy milk"). The tree shows 我 sitting right at the hinge between the two verb phrases. Notice how the serial verb chain continues inside the embedded action: 去 ("go") + 买牛奶 ("buy milk"), with the purpose following the motion verb naturally.',
        tree: {
            id: 'n33',
            role: 'Sentence',
            children: [
                {
                    id: 'n33-t',
                    role: 'Topic',
                    text: { hanzi: '妈妈', pinyin: 'mā ma', translation: 'Mom' },
                },
                {
                    id: 'n33-c',
                    role: 'Comment',
                    children: [
                        {
                            id: 'n33-vp',
                            role: 'Verb Phrase',
                            subRole: 'pivotal construction (兼语句)',
                            children: [
                                {
                                    id: 'n33-hv',
                                    role: 'Head Verb',
                                    subRole: 'causative verb (tells)',
                                    text: { hanzi: '叫', pinyin: 'jiào', translation: 'call / tell' },
                                },
                                {
                                    id: 'n33-embedded-clause',
                                    role: 'Embedded Clause',
                                    subRole: 'situation object',
                                    children: [
                                        {
                                            id: 'n33-pivot',
                                            role: 'Pivot',
                                            subRole: 'object of 叫, subject of 去买',
                                            text: { hanzi: '我', pinyin: 'wǒ', translation: 'me' },
                                        },
                                        {
                                            id: 'n33-serial',
                                            role: 'Verb Phrase',
                                            subRole: 'serial verb construction (purpose chain)',
                                            children: [
                                                {
                                                    id: 'n33-serial-v1',
                                                    role: 'Head Verb',
                                                    subRole: 'motion verb',
                                                    text: { hanzi: '去', pinyin: 'qù', translation: 'go' },
                                                },
                                                {
                                                    id: 'n33-serial-v2',
                                                    role: 'Verb Phrase',
                                                    subRole: 'purpose clause',
                                                    children: [
                                                        {
                                                            id: 'n33-serial-v2-hv',
                                                            role: 'Head Verb',
                                                            text: { hanzi: '买', pinyin: 'mǎi', translation: 'buy' },
                                                        },
                                                        {
                                                            id: 'n33-serial-v2-obj',
                                                            role: 'Object',
                                                            text: { hanzi: '牛奶', pinyin: 'niú nǎi', translation: 'milk' },
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ]
                                }
                            ],
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 's52',
        category: 'Pivotal Constructions (兼语句)',
        chinese: '公司派他去谈判。',
        pinyin: 'Gōng sī pài tā qù tán pàn.',
        translation: 'The company sent him to negotiate.',
        explanation: 'The Topic is **公司** ("company"). The verb **派** ("dispatch/send") creates a pivotal construction: **他** ("him") is the pivot, simultaneously the person being sent and the actor of the next action. The embedded clause is **去谈判** ("go negotiate"), a serial verb chain where going and negotiating happen in sequence. The tree shows 他 at the pivot point, with the serial verbs branching from his action.',
        tree: {
            id: 'n52',
            role: 'Sentence',
            children: [
                {
                    id: 'n52-t',
                    role: 'Topic',
                    text: { hanzi: '公司', pinyin: 'gōng sī', translation: 'company' },
                },
                {
                    id: 'n52-c',
                    role: 'Comment',
                    children: [
                        {
                            id: 'n52-vp',
                            role: 'Verb Phrase',
                            subRole: 'pivotal construction (兼语句)',
                            children: [
                                {
                                    id: 'n52-hv',
                                    role: 'Head Verb',
                                    subRole: 'causative verb (dispatches)',
                                    text: { hanzi: '派', pinyin: 'pài', translation: 'send / dispatch' },
                                },
                                {
                                    id: 'n52-embedded-clause',
                                    role: 'Embedded Clause',
                                    subRole: 'situation object',
                                    children: [
                                        {
                                            id: 'n52-pivot',
                                            role: 'Pivot',
                                            subRole: 'object of 派, subject of 去谈判',
                                            text: { hanzi: '他', pinyin: 'tā', translation: 'him' },
                                        },
                                        {
                                            id: 'n52-embedded',
                                            role: 'Verb Phrase',
                                            subRole: 'serial verb (go + negotiate)',
                                            children: [
                                                {
                                                    id: 'n52-embedded-v1',
                                                    role: 'Head Verb',
                                                    subRole: 'motion verb',
                                                    text: { hanzi: '去', pinyin: 'qù', translation: 'go' },
                                                },
                                                {
                                                    id: 'n52-embedded-v2',
                                                    role: 'Head Verb',
                                                    subRole: 'purpose verb',
                                                    text: { hanzi: '谈判', pinyin: 'tán pàn', translation: 'negotiate' },
                                                },
                                            ],
                                        },
                                    ]
                                }
                            ],
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 's53',
        category: 'Pivotal Constructions (兼语句)',
        chinese: '她请我吃饭。',
        pinyin: 'Tā qǐng wǒ chī fàn.',
        translation: 'She invited me to eat (out / to dinner).',
        explanation: 'Here **她** ("she") is the Topic. The verb **请** ("invite/treat") creates a pivotal construction: **我** ("me") is the pivot, simultaneously the person being invited and the one who will eat. The embedded action is **吃饭** ("eat a meal"). The tree shows 我 at the junction between 请 and 吃饭. This is a very common social phrase in Chinese: 请人吃饭 means to treat someone to a meal.',
        tree: {
            id: 'n53',
            role: 'Sentence',
            children: [
                {
                    id: 'n53-t',
                    role: 'Topic',
                    text: { hanzi: '她', pinyin: 'tā', translation: 'she' },
                },
                {
                    id: 'n53-c',
                    role: 'Comment',
                    children: [
                        {
                            id: 'n53-vp',
                            role: 'Verb Phrase',
                            subRole: 'pivotal construction (兼语句)',
                            children: [
                                {
                                    id: 'n53-hv',
                                    role: 'Head Verb',
                                    subRole: 'social verb (invites/treats)',
                                    text: { hanzi: '请', pinyin: 'qǐng', translation: 'invite / treat' },
                                },
                                {
                                    id: 'n53-embedded-clause',
                                    role: 'Embedded Clause',
                                    subRole: 'situation object',
                                    children: [
                                        {
                                            id: 'n53-pivot',
                                            role: 'Pivot',
                                            subRole: 'object of 请, subject of 吃饭',
                                            text: { hanzi: '我', pinyin: 'wǒ', translation: 'me' },
                                        },
                                        {
                                            id: 'n53-embedded',
                                            role: 'Verb Phrase',
                                            subRole: 'embedded predicate of pivot',
                                            children: [
                                                {
                                                    id: 'n53-embedded-hv',
                                                    role: 'Head Verb',
                                                    text: { hanzi: '吃', pinyin: 'chī', translation: 'eat' },
                                                },
                                                {
                                                    id: 'n53-embedded-obj',
                                                    role: 'Object',
                                                    text: { hanzi: '饭', pinyin: 'fàn', translation: 'meal / rice' },
                                                },
                                            ],
                                        },
                                    ]
                                }
                            ],
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 's89',
        category: 'Pivotal Constructions (\u517c\u8bed\u53e5)',
        chinese: '困难让人成长，安逸让人退步。',
        pinyin: 'Kùn nan ràng rén chéng zhǎng, ān yì ràng rén tuì bù.',
        translation: 'Hardship makes people grow; comfort makes people regress.',
        explanation: 'A **Parallel Sentence** with two matched halves. The first: **困难让人成长** ("hardship makes people grow"), where **让** creates a pivotal construction with **人** as the pivot. The second: **安逸让人退步** ("comfort makes people regress"), with the same structure. Neither half is the Topic of the other; they are equal partners placed side by side for contrast. Both use **让** ("make/let") as the pivotal verb. The tree shows both halves as parallel branches at the top level.',
        tree: {
            id: 's89-root', role: 'Sentence', children: [
                { id: 's89-parallel', role: 'Parallel Sentence', children: [
                    { id: 's89-c1', role: 'Embedded Clause', subRole: 'first pivotal', children: [
                        { id: 's89-kn', role: 'Subject', text: { hanzi: '困难', pinyin: 'kùn nan', translation: 'hardship' } },
                        { id: 's89-vp1', role: 'Verb Phrase', children: [
                            { id: 's89-rang1', role: 'Head Verb', subRole: 'causative', text: { hanzi: '让', pinyin: 'ràng', translation: 'makes' } },
                            { id: 's89-embedded1', role: 'Embedded Clause', subRole: 'situation object', children: [
                                { id: 's89-ren1', role: 'Pivot', subRole: 'pivot', text: { hanzi: '人', pinyin: 'rén', translation: 'people' } },
                                { id: 's89-vp1-pred', role: 'Verb Phrase', children: [
                                    { id: 's89-cz', role: 'Head Verb', text: { hanzi: '成长', pinyin: 'chéng zhǎng', translation: 'grow' } }
                                ]}
                            ]}
                        ]}
                    ]},
                    { id: 's89-c2', role: 'Embedded Clause', subRole: 'second pivotal', children: [
                        { id: 's89-ay', role: 'Subject', text: { hanzi: '安逸', pinyin: 'ān yì', translation: 'comfort' } },
                        { id: 's89-vp2', role: 'Verb Phrase', children: [
                            { id: 's89-rang2', role: 'Head Verb', subRole: 'causative', text: { hanzi: '让', pinyin: 'ràng', translation: 'makes' } },
                            { id: 's89-embedded2', role: 'Embedded Clause', subRole: 'situation object', children: [
                                { id: 's89-ren2', role: 'Pivot', subRole: 'pivot', text: { hanzi: '人', pinyin: 'rén', translation: 'people' } },
                                { id: 's89-vp2-pred', role: 'Verb Phrase', children: [
                                    { id: 's89-tb', role: 'Head Verb', text: { hanzi: '退步', pinyin: 'tuì bù', translation: 'regress' } }
                                ]}
                            ]}
                        ]}
                    ]}
                ]}
            ]
        }
    },
    {
        id: 's118',
        category: 'Pivotal Constructions (兼语句)',
        chinese: '王老板让他派人去处理。',
        pinyin: 'Wáng lǎo bǎn ràng tā pài rén qù chǔ lǐ.',
        translation: 'Boss Wang asked him to send someone to handle it.',
        explanation: '**王老板** ("Boss Wang") is the initial Topic. This sentence chains **two pivots** together. Pivot 1: **他** ("him"). Boss Wang tells him to do something, and he is the one who sends someone. Pivot 2: **人** ("someone"). He sends someone, and that someone goes to handle it. The verbs line up in a causal chain: 让 (let/ask) → 派 (send) → 去处理 (go handle). This shows how Mandarin can stack pivotal structures indefinitely to build complex commands or delegations without needing words like "to" or "that".',
        tree: {
            id: 's118-n',
            role: 'Sentence',
            children: [
                { id: 's118-t', role: 'Topic', text: { hanzi: '王老板', pinyin: 'Wáng lǎo bǎn', translation: 'Boss Wang' } },
                {
                    id: 's118-c',
                    role: 'Comment',
                    children: [
                        {
                            id: 's118-vp',
                            role: 'Verb Phrase',
                            subRole: 'pivotal chain',
                            children: [
                                { id: 's118-v1', role: 'Head Verb', subRole: 'causative', text: { hanzi: '让', pinyin: 'ràng', translation: 'ask/let' } },
                                {
                                    id: 's118-emb1',
                                    role: 'Embedded Clause',
                                    children: [
                                        { id: 's118-pivot1', role: 'Topic', subRole: 'pivot', text: { hanzi: '他', pinyin: 'tā', translation: 'him' } },
                                        {
                                            id: 's118-c1',
                                            role: 'Comment',
                                            children: [
                                                { id: 's118-v2', role: 'Head Verb', subRole: 'causative', text: { hanzi: '派', pinyin: 'pài', translation: 'send' } },
                                                {
                                                    id: 's118-emb2',
                                                    role: 'Embedded Clause',
                                                    children: [
                                                        { id: 's118-pivot2', role: 'Topic', subRole: 'pivot', text: { hanzi: '人', pinyin: 'rén', translation: 'person' } },
                                                        {
                                                            id: 's118-c2',
                                                            role: 'Comment',
                                                            children: [
                                                                { id: 's118-v3-dir', role: 'Adjunct', subRole: 'direction', text: { hanzi: '去', pinyin: 'qù', translation: 'go' } },
                                                                { id: 's118-v3-hv', role: 'Head Verb', text: { hanzi: '处理', pinyin: 'chǔ lǐ', translation: 'handle' } }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
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
    {
        id: 's119',
        category: 'Pivotal Constructions (兼语句)',
        chinese: '有人找你。',
        pinyin: 'Yǒu rén zhǎo nǐ.',
        translation: 'Someone is looking for you.',
        explanation: 'In Mandarin, a sentence cannot easily start with an indefinite noun like "a person" or "someone." Instead, Mandarin uses **有** ("to have / there exists") to introduce the indefinite noun first. Here, **有人** means "there exists a person." This person (**人**) serves as the **pivot**: they are the object of 有 (which brings them into existence for the conversation) and the subject of **找你** (looking for you). This existential pivot is how Mandarin translates English sentences that start with "Someone..." or "A guy..."',
        tree: {
            id: 's119-n',
            role: 'Sentence',
            children: [
                { id: 's119-ghost', role: 'Topic', subRole: 'Ghost Node', text: { hanzi: '[这里]', pinyin: 'zhè lǐ', translation: '(here context)' } },
                {
                    id: 's119-c',
                    role: 'Comment',
                    children: [
                        {
                            id: 's119-vp',
                            role: 'Verb Phrase',
                            subRole: 'existential pivot',
                            children: [
                                { id: 's119-hv', role: 'Head Verb', subRole: 'existential trigger', text: { hanzi: '有', pinyin: 'yǒu', translation: 'there is' } },
                                {
                                    id: 's119-emb',
                                    role: 'Embedded Clause',
                                    children: [
                                        { id: 's119-pivot', role: 'Topic', subRole: 'pivot', text: { hanzi: '人', pinyin: 'rén', translation: 'person/someone' } },
                                        {
                                            id: 's119-c2',
                                            role: 'Comment',
                                            children: [
                                                { id: 's119-action-hv', role: 'Head Verb', text: { hanzi: '找', pinyin: 'zhǎo', translation: 'look for' } },
                                                { id: 's119-action-obj', role: 'Object', text: { hanzi: '你', pinyin: 'nǐ', translation: 'you' } }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }
];
