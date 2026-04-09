import type { SentenceData } from '../../types/grammar';

export const baConstruction: SentenceData[] = [
    {
        id: 's3',
        category: 'BA Construction (把字句)',
        chinese: '她昨天把我的钱包忘在出租车上了。',
        pinyin: 'Tā zuó tiān bǎ wǒ de qián bāo wàng zài chū zū chē shàng le.',
        translation: 'She forgot my wallet in the taxi yesterday.',

        explanation: '**她** ("she") opens the sentence as the Topic. The Comment starts with a time word, **昨天** ("yesterday"), placed before the verb because Mandarin always sets the scene before the action. Then comes the **把 construction**: 把 pulls the object **我的钱包** ("my wallet") in front of the verb to signal that something is about to happen to it. The verb **忘** ("forget") follows, with location phrase **在出租车上** ("in the taxi") showing where the wallet ended up. 把 works like a spotlight on the object: "as for the wallet, she forgot it in the taxi." The tree groups 把 and the wallet together before the verb, making this front-loading visible.',
        tree: {
            id: 'n3',
            role: 'Sentence',
            children: [
                {
                    id: 'n3-t',
                    role: 'Topic',
                    text: { hanzi: '她', pinyin: 'tā', translation: 'she' },
                    semanticRole: 'Agent'
                },
                {
                    id: 'n3-c',
                    role: 'Comment',
                    subRole: 'disposal marker',
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
                            subRole: 'disposal marker',
                            children: [
                                {
                                    id: 'n3-p-ba-prep',
                                    role: 'Head Verb',
                                    subRole: 'disposal marker',
                                    text: { hanzi: '把', pinyin: 'bǎ', translation: '(object fronting)' }
                                },
                                {
                                    id: 'n3-p-ba-obj',
                                    role: 'Object',
                                    semanticRole: 'Patient',
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
                                    subRole: 'aspect marker',
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

        explanation: 'The Topic is **那只猫** ("that cat"), where 只 is the **measure word** for cats and certain animals. Before the main action appears, Mandarin layers up the scene inside the Comment: first **where** (在厨房里, "in the kitchen"), then **how** (生气地, "angrily"), then **with what** (用爪子, "with its claws"), and finally **把** spotlights the cup as the thing being affected. Only after all that does the verb **弄** ("knock/move") arrive. English would lead with the verb much earlier. The tree makes this rich layering visible: every modifier stacks above the verb in strict order.',
        tree: {
            id: 'n4',
            role: 'Sentence',
            children: [
                {
                    id: 'n4-t',
                    role: 'Topic',
                    semanticRole: 'Agent',
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
                    subRole: 'disposal marker',
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
                            semanticRole: 'Instrument',
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
                            subRole: 'disposal marker',
                            children: [
                                {
                                    id: 'n4-p-ba-prep',
                                    role: 'Head Verb',
                                    subRole: 'disposal marker',
                                    text: { hanzi: '把', pinyin: 'bǎ', translation: '(object fronting)' }
                                },
                                {
                                    id: 'n4-p-ba-obj',
                                    role: 'Object',
                                    semanticRole: 'Patient',
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
                                    subRole: 'directional',
                                    text: { hanzi: '到地上', pinyin: 'dào dì shàng', translation: 'to the floor' }
                                },
                                {
                                    id: 'n4-p-vp-part',
                                    role: 'Particle',
                                    subRole: 'aspect marker',
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
        explanation: 'A short, everyday 把 sentence. **请** ("please") sits at the front as a politeness word. Then **把** spotlights **窗户** ("the window") before the verb, signaling it is about to be affected. The verb **关** ("close") comes next, followed by the directional complement **上** ("shut," literally "up/onto"). This **把 [thing] [verb]+[result]** template is the standard way to give instructions or describe a deliberate act with a clear outcome. Notice that the implied topic **[你]** ("you") appears as a ghost node in the tree; in commands like this, Mandarin typically drops it.',
        tree: {
            id: 'n28',
            role: 'Sentence',
            children: [
                {
                    id: 'n28-t',
                    role: 'Topic',
                    isDropped: true,
                    impliedText: '你',
                    semanticRole: 'Agent',
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
                            subRole: 'disposal marker',
                            children: [
                                {
                                    id: 'n28-ba-prep',
                                    role: 'Head Verb',
                                    subRole: 'disposal marker',
                                    text: { hanzi: '把', pinyin: 'bǎ', translation: '(object fronting)' },
                                },
                                {
                                    id: 'n28-ba-obj',
                                    role: 'Object',
                                    text: { hanzi: '窗户', pinyin: 'chuāng hu', translation: 'window' },
                                    semanticRole: 'Patient',
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
                                    subRole: 'directional',
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
        explanation: '**她** ("she") is the Topic. The Comment uses **把** to pull **那封信** ("that letter"; 封 is the measure word for letters and envelopes) in front of the verb. The verb **藏** ("hide") is then followed by a location phrase: **在枕头下面** ("under the pillow"). This location tells you where the object ended up as a result of the action. That is the core job of 把: once the object has been fronted, the verb naturally attaches a result, destination, or outcome. The final **了** confirms the action is complete.',
        tree: {
            id: 'n29',
            role: 'Sentence',
            children: [
                {
                    id: 'n29-t',
                    role: 'Topic',
                    text: { hanzi: '她', pinyin: 'tā', translation: 'she' },
                    semanticRole: 'Agent',
                },
                {
                    id: 'n29-c',
                    role: 'Comment',
                    children: [
                        {
                            id: 'n29-ba',
                            role: 'Adjunct',
                            subRole: 'disposal marker',
                            children: [
                                {
                                    id: 'n29-ba-prep',
                                    role: 'Head Verb',
                                    subRole: 'disposal marker',
                                    text: { hanzi: '把', pinyin: 'bǎ', translation: '(object fronting)' },
                                },
                                {
                                    id: 'n29-ba-obj',
                                    role: 'Object',
                                    semanticRole: 'Patient',
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
                                    subRole: 'aspect marker',
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
        id: 's126',
        category: 'BA Construction (把字句)',
        chinese: '他没把门关上。',
        pinyin: 'Tā méi bǎ mén guān shàng.',
        translation: 'He didn\'t close the door.',
        explanation: '**他** ("he") is the Topic. The Comment introduces a critical rule about 把 sentences: the negation word **没** ("didn\'t") must come *before* 把, never after it. The pattern is 没 + 把 + object + verb + result. Here, **没把门关上** means "didn\'t close the door," where 关 ("close") + 上 ("shut") form the verb-result pair. If you tried to put 没 after 把 (把门没关上), native speakers would find it unnatural. This ordering rule also applies to 别 ("don\'t") and 不: they always precede 把.',
        tree: {
            id: 's126-n',
            role: 'Sentence',
            children: [
                { id: 's126-t', role: 'Topic', semanticRole: 'Agent', text: { hanzi: '他', pinyin: 'tā', translation: 'he' } },
                {
                    id: 's126-c',
                    role: 'Comment',
                    children: [
                        { id: 's126-c-neg', role: 'Adjunct', subRole: 'negation', text: { hanzi: '没', pinyin: 'méi', translation: 'didn\'t' } },
                        {
                            id: 's126-ba-phrase',
                            role: 'Head Verb',
                            subRole: 'disposal marker',
                            text: { hanzi: '把', pinyin: 'bǎ', translation: 'take hold of' }
                        },
                        {
                            id: 's126-nested',
                            role: 'Embedded Clause',
                            children: [
                                { id: 's126-inner-t', role: 'Topic', semanticRole: 'Patient', text: { hanzi: '门', pinyin: 'mén', translation: 'door' } },
                                {
                                    id: 's126-inner-c',
                                    role: 'Comment',
                                    children: [
                                        { id: 's126-hv', role: 'Head Verb', text: { hanzi: '关', pinyin: 'guān', translation: 'close' } },
                                        { id: 's126-comp', role: 'Complement', subRole: 'directional', text: { hanzi: '上', pinyin: 'shàng', translation: 'shut/up' } }
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
        id: 's127',
        category: 'BA Construction (把字句)',
        chinese: '别把它弄坏了。',
        pinyin: 'Bié bǎ tā nòng huài le.',
        translation: 'Don\'t break it.',
        explanation: 'This is a prohibition using 把. **别** ("don\'t") opens the sentence as a command marker, placed before 把 just like 没 in negative statements. The implied topic ([你], "you") is dropped because commands naturally omit the listener. Inside the 把 phrase, **它** ("it") is the spotlighted object, and **弄坏** (nòng huài, "mess up, break") is the verb-result compound: 弄 ("do/make") + 坏 ("broken"). The **了** signals that the breaking would result in a completed change of state. The pattern 别把...弄坏了 is one of the most common warnings in everyday Mandarin.',
        tree: {
            id: 's127-n',
            role: 'Sentence',
            children: [
                { id: 's127-ghost', role: 'Topic', subRole: 'implied topic', semanticRole: 'Agent', text: { hanzi: '[你]', pinyin: 'nǐ', translation: 'you(implied)' } },
                {
                    id: 's127-c',
                    role: 'Comment',
                    children: [
                        { id: 's127-c-neg', role: 'Adjunct', subRole: 'negation', text: { hanzi: '别', pinyin: 'bié', translation: 'don\'t' } },
                        {
                            id: 's127-ba-phrase',
                            role: 'Head Verb',
                            subRole: 'disposal marker',
                            text: { hanzi: '把', pinyin: 'bǎ', translation: 'take hold of' }
                        },
                        {
                            id: 's127-nested',
                            role: 'Embedded Clause',
                            children: [
                                { id: 's127-inner-t', role: 'Topic', semanticRole: 'Patient', text: { hanzi: '它', pinyin: 'tā', translation: 'it' } },
                                {
                                    id: 's127-inner-c',
                                    role: 'Comment',
                                    children: [
                                        { id: 's127-hv', role: 'Head Verb', text: { hanzi: '弄', pinyin: 'nòng', translation: 'do/make' } },
                                        { id: 's127-comp', role: 'Complement', subRole: 'result', text: { hanzi: '坏', pinyin: 'huài', translation: 'broken' } },
                                        { id: 's127-le', role: 'Particle', subRole: 'aspect marker', text: { hanzi: '了', pinyin: 'le', translation: '(done)' } }
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
