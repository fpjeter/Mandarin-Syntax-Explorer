import type { SentenceData } from '../../types/grammar';

export const pivotalConstructions: SentenceData[] = [
    {
        id: 's32',
        category: 'Pivotal Constructions (兼语句)',
        chinese: '老师让学生回答问题。',
        pinyin: 'Lǎo shī ràng xué sheng huí dá wèn tí.',
        translation: 'The teacher had the students answer questions.',
        explanation: 'The Topic is **老师** ("teacher"). The verb **让** ("let/make") is a Situation-Taking Verb. It doesn\'t just act on the students; it acts on the entire situation. This is the **Matryoshka Principle**: the whole **Embedded Clause** (学生回答问题, "students answer questions") is nested perfectly inside the main sentence as the object of 让. Inside that nested mini-sentence, **学生** ("students") is simply the inner topic performing the action.',
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
        explanation: 'Here **妈妈** ("Mom") is the Topic. The verb **叫** ("tell/ask") acts on an entire situation: me going to buy milk. Using the **Matryoshka Principle**, the whole nested event (**我去买牛奶**) acts as the object of 叫. Inside this embedded clause, **我** ("me") is just the inner topic. Notice how the train of connected cars continues inside the embedded action: 去 ("go") + 买牛奶 ("buy milk"), with the purpose following the motion naturally.',
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
        explanation: 'The Topic is **公司** ("company"). The verb **派** ("dispatch/send") takes a whole situation as its object using the **Matryoshka Principle**. The company isn\'t just sending "him"; they are initiating the entire nested event of "him going to negotiate" (**他去谈判**). Inside that embedded clause, going and negotiating happen sequentially like connected train cars. The tree shows **他** securely inside the nested boundary.',
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
        explanation: 'Here **她** ("she") is the Topic. The verb **请** ("invite/treat") takes the entire situation (**我吃饭**, "me eating a meal") as its object under the **Matryoshka Principle**. She is bringing about that nested event. Inside the embedded clause, **我** is simply the inner topic performing the eating. This is a very common social phrase in Chinese: 请人吃饭 means to treat someone to a meal.',
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
        explanation: 'This is a **Parallel Sentence** with two matched halves. Neither half is the Topic of the other; rather, like two trains on parallel tracks, they are equal partners placed side by side for contrast. Both use **让** ("make/let"), which takes a nested situation as its object. In the first half, the object of 让 is the entire **Matryoshka** clause **人成长** ("people grow"). In the second, it is **人退步** ("people regress"). The tree shows both halves as parallel independent branches.',
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
        explanation: '**王老板** ("Boss Wang") is the initial Topic. This sentence beautifully demonstrates double nesting using the **Matryoshka Principle**. The verb **让** ("let/ask") contains a nested situation: **他派人去处理** ("he sends someone to handle it"). Inside that, the verb **派** ("send") contains *another* nested situation: **人去处理** ("someone goes to handle it"). Mandarin can stack these embedded clauses indefinitely to build complex delegations without needing messy connectors like "to" or "that".',
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
        explanation: 'In Mandarin, a sentence shouldn\'t start with an indefinite topic like "someone." Instead, Mandarin uses **有** ("there exists") to introduce them first. Using the **Matryoshka Principle**, the verb 有 acts on the entire situation: **人找你** ("someone looking for you"). 有 establishes their existence, and inside the nested clause, **人** serves as the proper inner topic completing the action. This nested existential structure is exactly how Mandarin translates English sentences starting with "Someone..."',
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
