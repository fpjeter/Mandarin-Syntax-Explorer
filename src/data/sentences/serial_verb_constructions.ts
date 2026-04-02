import type { SentenceData } from '../../types/grammar';

export const serialVerbConstructions: SentenceData[] = [
    {
        id: 's14',
        category: 'Serial Verb Constructions (连动句)',
        chinese: '到了，找到了，吃完再走。',
        pinyin: 'Dào le , zhǎo dào le , chī wán zài zǒu .',
        translation: '(We\'ve) arrived, (we) found it, (we\'ll) leave after eating.',

        explanation: 'Three events flow in sequence: arriving, finding food, eating and then leaving. All three verbs chain smoothly from a single implied speaker (a Ghost Node **[我们]**, "we"). This is how serial verb constructions work in Mandarin: actions line up in chronological order with no connecting words like "and then." The language maps events purely by the order they happen.',
        tree: {
            id: 'n14',
            role: 'Sentence',
            children: [
                {
                    id: 'n14-s',
                    role: 'Topic',
                    isDropped: true,
                    impliedText: '我们',
                },
                {
                    id: 'n14-c',
                    role: 'Comment',
                    subRole: 'sequential clauses',
                    children: [
                        {
                            id: 'n14-vp1',
                            role: 'Verb Phrase',
                            subRole: 'clause 1',
                            children: [
                                {
                                    id: 'n14-vp1-hv',
                                    role: 'Head Verb',
                                    text: { hanzi: '到', pinyin: 'dào', translation: 'arrive' }
                                },
                                {
                                    id: 'n14-vp1-le',
                                    role: 'Particle',
                                    subRole: 'completion',
                                    text: { hanzi: '了', pinyin: 'le', translation: '(done)' }
                                }
                            ]
                        },
                        {
                            id: 'n14-vp2',
                            role: 'Verb Phrase',
                            subRole: 'clause 2',
                            children: [
                                {
                                    id: 'n14-vp2-hv',
                                    role: 'Head Verb',
                                    text: { hanzi: '找', pinyin: 'zhǎo', translation: 'find/look' }
                                },
                                {
                                    id: 'n14-vp2-comp',
                                    role: 'Complement',
                                    subRole: 'resultative',
                                    text: { hanzi: '到', pinyin: 'dào', translation: '(success)' }
                                },
                                {
                                    id: 'n14-vp2-le',
                                    role: 'Particle',
                                    subRole: 'completion',
                                    text: { hanzi: '了', pinyin: 'le', translation: '(done)' }
                                }
                            ]
                        },
                        {
                            id: 'n14-vp3',
                            role: 'Verb Phrase',
                            subRole: 'clause 3',
                            children: [
                                {
                                    id: 'n14-vp3-adv',
                                    role: 'Adjunct',
                                    text: { hanzi: '吃完', pinyin: 'chī wán', translation: 'after eating' }
                                },
                                {
                                    id: 'n14-vp3-then',
                                    role: 'Adjunct',
                                    text: { hanzi: '再', pinyin: 'zài', translation: 'then/before' }
                                },
                                {
                                    id: 'n14-vp3-hv',
                                    role: 'Head Verb',
                                    text: { hanzi: '走', pinyin: 'zǒu', translation: 'leave/go' }
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    {
        id: 's58',
        category: 'Serial Verb Constructions (连动句)',
        chinese: '他骑自行车去上班。',
        pinyin: 'Tā qí zì xíng chē qù shàng bān.',
        translation: 'He rides a bicycle to go to work.',

        explanation: 'The Topic is **他** ("he"). The Comment chains three actions: 骑自行车 ("ride a bicycle"), 去 ("go"), and 上班 ("go to work"). Rather than connecting these with words like "in order to," Mandarin places them in strict chronological sequence. The first action is the means, the second is the motion, and the third is the purpose. This is a perfectly natural way to express a chain of related events in everyday speech.',
        tree: {
            id: 'n58',
            role: 'Sentence',
            children: [
                {
                    id: 'n58-t',
                    role: 'Topic',
                    text: { hanzi: '他', pinyin: 'tā', translation: 'he' },
                },
                {
                    id: 'n58-c',
                    role: 'Comment',
                    subRole: 'serial verb construction (same subject)',
                    children: [
                        {
                            id: 'n58-vp1',
                            role: 'Verb Phrase',
                            subRole: 'VP1: manner/means',
                            children: [
                                {
                                    id: 'n58-hv1',
                                    role: 'Head Verb',
                                    text: { hanzi: '骑', pinyin: 'qí', translation: 'ride' },
                                },
                                {
                                    id: 'n58-obj1',
                                    role: 'Object',
                                    text: { hanzi: '自行车', pinyin: 'zì xíng chē', translation: 'bicycle' },
                                },
                            ],
                        },
                        {
                            id: 'n58-vp2',
                            role: 'Verb Phrase',
                            subRole: 'VP2: motion',
                            text: { hanzi: '去', pinyin: 'qù', translation: 'go' },
                        },
                        {
                            id: 'n58-vp3',
                            role: 'Verb Phrase',
                            subRole: 'VP3: purpose',
                            text: { hanzi: '上班', pinyin: 'shàng bān', translation: 'go to work' },
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 's59',
        category: 'Serial Verb Constructions (连动句)',
        chinese: '我拿着伞出门了。',
        pinyin: 'Wǒ ná zhe sǎn chū mén le.',
        translation: 'I took (was holding) an umbrella and went out.',
        explanation: 'The Topic is **我** ("I"), and the Comment triggers two actions that happen at the same time: **拿着伞** ("holding an umbrella") and **出门** ("go out the door"). The particle **着** locks the first action into a continuous background state, so it acts as the environment for the second action. Rather than a sequence (first hold, then leave), this produces a synchronized flow: "exiting the door while holding an umbrella."',
        tree: {
            id: 'n59',
            role: 'Sentence',
            children: [
                {
                    id: 'n59-t',
                    role: 'Topic',
                    text: { hanzi: '我', pinyin: 'wǒ', translation: 'I' },
                },
                {
                    id: 'n59-c',
                    role: 'Comment',
                    subRole: 'serial verb (V1着 concurrent with V2)',
                    children: [
                        {
                            id: 'n59-vp1',
                            role: 'Verb Phrase',
                            subRole: 'VP1: concurrent background action',
                            children: [
                                {
                                    id: 'n59-hv1',
                                    role: 'Head Verb',
                                    text: { hanzi: '拿', pinyin: 'ná', translation: 'take / hold' },
                                },
                                {
                                    id: 'n59-zhe',
                                    role: 'Particle',
                                    subRole: 'durative aspect (ongoing)',
                                    text: { hanzi: '着', pinyin: 'zhe', translation: '(ongoing)' },
                                },
                                {
                                    id: 'n59-obj1',
                                    role: 'Object',
                                    text: { hanzi: '伞', pinyin: 'sǎn', translation: 'umbrella' },
                                },
                            ],
                        },
                        {
                            id: 'n59-vp2',
                            role: 'Verb Phrase',
                            subRole: 'VP2: main action',
                            children: [
                                {
                                    id: 'n59-hv2',
                                    role: 'Head Verb',
                                    text: { hanzi: '出门', pinyin: 'chū mén', translation: 'go out / leave' },
                                },
                                {
                                    id: 'n59-le',
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
        id: 's68',
        category: 'Serial Verb Constructions (连动句)',
        chinese: '学了以后要经常练习，这样才会有收获。',
        pinyin: 'Xué le yǐ hòu yào jīng cháng liàn xí, zhè yàng cái huì yǒu shōu huò.',
        translation: 'After studying, you should practice regularly; only then will you gain something.',
        explanation: 'This is a modern version of the classical 學而時習之 (from the Analerta of Confucius: "Study and regularly practice what you have studied"). Instead of the terse classical connective 而, modern Chinese uses **以后** ("after") to sequence the two actions. The second clause uses the **才** pattern: only *then* will the result follow. The sentence chains two verb phrases under one implied subject (you): first 学了以后 ("after studying"), then 要经常练习 ("should regularly practice"). The second clause introduces a new frame with 这样 ("this way"), followed by 才会 ("only then will") and the result 有收获 ("have gains").',
        tree: {
            id: 's68-root', role: 'Sentence', children: [
                { id: 's68-c1', role: 'Topic', subRole: 'clause 1', children: [
                    { id: 's68-v1', role: 'Verb Phrase', children: [
                        { id: 's68-xue', role: 'Head Verb', text: { hanzi: '学', pinyin: 'xué', translation: 'study' } },
                        { id: 's68-le', role: 'Particle', subRole: 'aspect', text: { hanzi: '了', pinyin: 'le', translation: '(completion)' } },
                        { id: 's68-yihou', role: 'Adjunct', subRole: 'time', text: { hanzi: '以后', pinyin: 'yǐ hòu', translation: 'after' } },
                    ]},
                    { id: 's68-v2', role: 'Verb Phrase', children: [
                        { id: 's68-yao', role: 'Adjunct', text: { hanzi: '要', pinyin: 'yào', translation: 'should' } },
                        { id: 's68-jc', role: 'Adjunct', text: { hanzi: '经常', pinyin: 'jīng cháng', translation: 'regularly' } },
                        { id: 's68-lx', role: 'Head Verb', text: { hanzi: '练习', pinyin: 'liàn xí', translation: 'practice' } },
                    ]},
                ]},
                { id: 's68-c2', role: 'Comment', subRole: 'result clause', children: [
                    { id: 's68-zy', role: 'Adjunct', text: { hanzi: '这样', pinyin: 'zhè yàng', translation: 'this way' } },
                    { id: 's68-cai', role: 'Adjunct', text: { hanzi: '才会', pinyin: 'cái huì', translation: 'only then will' } },
                    { id: 's68-you', role: 'Head Verb', text: { hanzi: '有', pinyin: 'yǒu', translation: 'have' } },
                    { id: 's68-sh', role: 'Object', text: { hanzi: '收获', pinyin: 'shōu huò', translation: 'gains' } },
                ]},
            ]
        }
    },
    {
        id: 's91',
        category: 'Serial Verb Constructions (连动句)',
        chinese: '不要因为好事太小就不去做。',
        pinyin: 'Bú yào yīn wèi hǎo shì tài xiǎo jiù bú qù zuò.',
        translation: 'Do not refrain from doing good just because it is small.',
        explanation: 'This is a modern version of the classical 勿以善小而不為 (from Liu Bei: "Do not neglect to do good just because the good deed is small"). The classical 以 ("because of") becomes 因为, the classical 而 becomes 就, and the classical 勿 becomes 不要. The verb 不要 opens the prohibition. 因为好事太小 ("because the good deed is too small") gives the rejected reason. 就 ("then") introduces the consequence being negated: 不去做 ("not go and do it"). The serial verb 去做 ("go do") adds a purposeful flavor to the action.',
        tree: {
            id: 's91-root', role: 'Sentence', children: [
                {
                    id: 's91-t',
                    role: 'Topic',
                    isDropped: true,
                    impliedText: '你'
                },
                {
                    id: 's91-c',
                    role: 'Comment',
                    children: [
                        { id: 's91-by', role: 'Adjunct', subRole: 'prohibition', text: { hanzi: '不要', pinyin: 'bú yào', translation: 'do not' } },
                        { id: 's91-yw', role: 'Adjunct', subRole: 'causal', children: [
                            { id: 's91-yw-p', role: 'Preposition', text: { hanzi: '因为', pinyin: 'yīn wèi', translation: 'because' } },
                            { id: 's91-yw-clause', role: 'Object', children: [
                                { id: 's91-hs', role: 'Subject', text: { hanzi: '好事', pinyin: 'hǎo shì', translation: 'good deed' } },
                                { id: 's91-tx', role: 'Head Verb', text: { hanzi: '太小', pinyin: 'tài xiǎo', translation: 'too small' } },
                            ]},
                        ]},
                        { id: 's91-jiu', role: 'Adjunct', text: { hanzi: '就', pinyin: 'jiù', translation: 'then/so' } },
                        { id: 's91-vp', role: 'Verb Phrase', subRole: 'serial verbs', children: [
                            { id: 's91-bq', role: 'Adjunct', subRole: 'negation', text: { hanzi: '不', pinyin: 'bú', translation: 'not' } },
                            { id: 's91-vp1', role: 'Verb Phrase', children: [
                                { id: 's91-qu', role: 'Head Verb', subRole: 'motion verb', text: { hanzi: '去', pinyin: 'qù', translation: 'go' } }
                            ]},
                            { id: 's91-vp2', role: 'Verb Phrase', children: [
                                { id: 's91-zuo', role: 'Head Verb', subRole: 'purpose verb', text: { hanzi: '做', pinyin: 'zuò', translation: 'do' } }
                            ]}
                        ]},
                    ]
                }
            ]
        }
    }
];
