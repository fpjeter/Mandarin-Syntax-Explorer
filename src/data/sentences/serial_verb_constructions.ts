import type { SentenceData } from '../../types/grammar';

export const serialVerbConstructions: SentenceData[] = [
    {
        id: 's14',
        category: 'Serial Verb Constructions (连动句)',
        chinese: '到了，找到了，吃完再走。',
        pinyin: 'Dào le , zhǎo dào le , chī wán zài zǒu .',
        translation: '(We\'ve) arrived, (we) found it, (we\'ll) leave after eating.',

        explanation: 'Here we see the **Train Metaphor** in action. Three mini-clauses act like connected train cars rolling down the track in sequence: car 1 **到了** ("arrived"), car 2 **找到了** ("found it"), car 3 **吃完再走** ("finish eating, then go"). The Topic is an occupied silence (implied driver). There are no messy connecting words like "and"; Mandarin simply hitches the verb phrases together chronologically. The tree shows three parallel verb cars lined up inside the Comment.',
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
                                    subRole: 'aspect marker',
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
                                    subRole: 'aspect marker',
                                    text: { hanzi: '了', pinyin: 'le', translation: '(done)' }
                                }
                            ]
                        },
                        {
                            id: 'n14-vp3',
                            role: 'Verb Phrase',
                            subRole: 'serial verb 3',
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

        explanation: 'The Topic is **他** ("he"). The Comment uses the **Train Metaphor** to hitch two action cars together chronologically: **骑自行车** ("rides a bicycle") and **去上班** ("to go to work"). The first car is the method, and the second car is the purpose. You don\'t need connecting words like "to" or "in order to"; the sequence of the cars handles the logic. The tree shows these two verb phrases connected smoothly across the physical timeline.',
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
                            subRole: 'serial verb 1',
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
                            subRole: 'serial verb 2',
                            text: { hanzi: '去', pinyin: 'qù', translation: 'go' },
                        },
                        {
                            id: 'n58-vp3',
                            role: 'Verb Phrase',
                            subRole: 'serial verb 3',
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
        explanation: 'The Topic is **我** ("I"). The Train Metaphor connects two action cars: **拿着伞** ("holding an umbrella") and **出门** ("go out"). The first car uses the state dial **着** to lock the "holding" action into the background while the train rolls forward. The second car is the foreground event. Hitched together naturally, the physical sequence of the words maps directly to the physical reality of the event. The **了** marks the entire connected journey as completed.',
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
                            subRole: 'serial verb 1',
                            children: [
                                {
                                    id: 'n59-hv1',
                                    role: 'Head Verb',
                                    text: { hanzi: '拿', pinyin: 'ná', translation: 'take / hold' },
                                },
                                {
                                    id: 'n59-zhe',
                                    role: 'Particle',
                                    subRole: 'aspect marker',
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
                            subRole: 'serial verb 2',
                            children: [
                                {
                                    id: 'n59-hv2',
                                    role: 'Head Verb',
                                    text: { hanzi: '出门', pinyin: 'chū mén', translation: 'go out / leave' },
                                },
                                {
                                    id: 'n59-le',
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
        id: 's68',
        category: 'Serial Verb Constructions (连动句)',
        chinese: '学了以后要经常练习，这样才会有收获。',
        pinyin: 'Xué le yǐ hòu yào jīng cháng liàn xí, zhè yàng cái huì yǒu shōu huò.',
        translation: 'After studying, you should practice regularly; only then will you gain something.',
        explanation: 'A modern take on the classical 學而時習之 (from the Analects of Confucius: "Study and regularly practice what you have studied"). Instead of the terse classical connective 而, modern Chinese uses **以后** ("after") to sequence the two actions. The sentence opens with an implied topic ("you") and chains two ideas: first **学了以后** ("after studying"), then **要经常练习** ("should regularly practice"). The second clause introduces a new frame with **这样** ("this way"), followed by **才会** ("only then will") and the result **有收获** ("have gains"). The 才 emphasizes that the result only comes if you follow through.',
        tree: {
            id: 's68-root', role: 'Sentence', children: [
                { id: 's68-c1', role: 'Topic', subRole: 'clause 1', children: [
                    { id: 's68-v1', role: 'Verb Phrase', children: [
                        { id: 's68-xue', role: 'Head Verb', text: { hanzi: '学', pinyin: 'xué', translation: 'study' } },
                        { id: 's68-le', role: 'Particle', subRole: 'aspect marker', text: { hanzi: '了', pinyin: 'le', translation: '(completion)' } },
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
        explanation: 'A modern Chinese take on the idiom 勿以善小而不为 ("do not refrain from doing good because it is small"). The sentence uses a causal frame: **不要** ("do not") + **因为** ("because") + **好事太小** ("good deeds are too small") + **就不去做** ("then not go do them"). The **因为...就** pattern links the cause (smallness) to the action (not doing). The tree shows the negation wrapping around the causal frame, creating a double negative that urges action.',
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
                        { id: 's91-by', role: 'Adjunct', subRole: 'negation', text: { hanzi: '不要', pinyin: 'bú yào', translation: 'do not' } },
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
