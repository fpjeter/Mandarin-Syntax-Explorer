import type { SentenceData } from '../../types/grammar';

export const pivotalConstructions: SentenceData[] = [
    {
        id: 's32',
        category: 'Pivotal Constructions (兼语句)',
        chinese: '老师让学生回答问题。',
        pinyin: 'Lǎo shī ràng xué sheng huí dá wèn tí.',
        translation: 'The teacher had the students answer questions.',
        explanation: 'The Topic is **老师** ("teacher"). The verb **让** ("let/make") creates a **pivotal construction**: it introduces a person who is simultaneously the object of 让 and the actor of what follows. Here, **我们** ("us") is the pivot. The teacher lets *us*, and *we* do what comes next: **写一篇作文** ("write an essay"). This pivot pattern is one of the most common ways Mandarin embeds one action inside another. Other pivotal verbs include 叫 ("tell/ask"), 请 ("invite"), and 派 ("send").',
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
        explanation: 'Here **妈妈** ("Mom") is the Topic. The verb **叫** ("tell/ask") creates another pivotal construction: **弟弟** ("little brother") is the pivot, simultaneously the object of 叫 and the actor of the next action, **去买菜** ("go buy groceries"). The tree shows 弟弟 sitting right at the hinge between the two verb phrases. Notice how the serial verb chain continues inside the embedded action: 去 ("go") + 买菜 ("buy groceries"), with the purpose following the motion verb naturally.',
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
        explanation: 'The Topic is **公司** ("company"). The verb **派** ("dispatch/send") creates a pivotal construction: **他** ("him") is the pivot. The company dispatches *him*, and *he* then goes to do something: **去上海出差** ("go to Shanghai on a business trip"). The tree shows the embedded action chain: 去 ("go") + 上海 (destination) + 出差 ("on a business trip"). This is a common pattern in professional and organizational language: someone in authority dispatches someone to do something.',
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
        explanation: 'Here **她** ("she") is the Topic. The verb **请** ("invite/treat") creates a pivotal construction: **朋友们** ("friends") is the pivot, both the object of 请 and the actors of what follows, **吃饭** ("eat"). But **请** has a special meaning here: it does not just mean "invite." 请吃饭 means "treat someone to a meal." The tree shows the pivotal structure neatly: she invites, friends eat, and the social meaning of treating is carried by the combination of 请 + 吃饭.',
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
        explanation: 'A modern take on 生於忧患死於安樂 (from Mencius: "Life springs from adversity; death comes from ease"). The classical coverb 於 becomes modern 在 or 从, and the compact classical phrasing expands into full modern clauses. The tree shows a pivotal structure where adversity and comfort are placed as the conditions that *make* people grow or decline. The modern version uses **使** ("cause, make") as the pivotal verb: hardship *causes* people to grow, comfort *causes* people to decline.',
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
