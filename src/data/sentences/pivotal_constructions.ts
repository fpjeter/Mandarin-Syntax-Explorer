import type { SentenceData } from '../../types/grammar';

export const pivotalConstructions: SentenceData[] = [
    {
        id: 's32',
        category: 'Pivotal Constructions (兼语句)',
        chinese: '老师让学生回答问题。',
        pinyin: 'Lǎo shī ràng xué sheng huí dá wèn tí.',
        translation: 'The teacher had the students answer questions.',
        explanation: 'The Topic is **老师** ("teacher"). The verb **让** ("let/make") does not just act on a single word; it introduces an entire scene: **学生回答** ("students answer"). Inside that scene, the students are the ones doing the answering. Verbs like 让, 叫, and 请 all work this way: they introduce a complete event with its own characters and actions. Look at how the tree nests that event inside the Comment.',
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
        pinyin: 'Māma jiào wǒ qù mǎi niú nǎi.',
        translation: 'Mom told me to go buy milk.',
        explanation: 'Here **妈妈** ("Mom") is the Topic. The verb **叫** ("tell/ask") introduces an embedded scene: **我去买** ("I go buy"). Inside that scene, 我 ("I") performs two chained actions: going and buying. English hides this with a connecting word ("told me *to* go"), but Mandarin just places the entire scene directly after 叫. If you compare this tree to the 让 sentence above, you will notice the exact same structure.',
        tree: {
            id: 'n33',
            role: 'Sentence',
            children: [
                {
                    id: 'n33-t',
                    role: 'Topic',
                    text: { hanzi: '妈妈', pinyin: 'māma', translation: 'Mom' },
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
        explanation: 'The Topic is **公司** ("company"). The verb **派** ("dispatch/send") introduces the embedded scene: **他去谈判** ("he goes to negotiate"). Inside that scene, going naturally flows into negotiating without any connecting words. If you compare the tree here to the 让 and 叫 sentences, you will see that 派 works the exact same way: all of these verbs introduce a complete event with its own characters.',
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
        explanation: 'Here **她** ("she") is the Topic. The verb **请** ("invite/treat") introduces the scene: **我吃饭** ("I eat a meal"). Rather than a simple transaction between two things, 请 sets up a social situation where the guest performs an action. Culturally, 请 often implies hospitality and paying the bill. But structurally, it works the exact same way as 让 or 叫: it introduces a complete event nested inside the Comment.',
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
        explanation: 'This is a modern version of the classical 生於忧患死於安樂 (from Mencius: "Born of hardship, perished in comfort"). The sentence uses a beautifully balanced structure: two Topics (困难, "hardship" and 安逸, "comfort") each trigger the same verb **让** ("make/let"). In both halves, 让 introduces a complete event (**人成长**, "people grow" and **人退步**, "people regress"). The people inside each event are simply the characters performing the action. This parallel structure makes the contrast vivid and balanced.',
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
    }
];
