import type { SentenceData } from '../../types/grammar';

export const serialVerbConstructions: SentenceData[] = [
    {
        id: 's14',
        category: 'Serial Verb Constructions (连动句)',
        chinese: '到了，找到了，吃完再走。',
        pinyin: 'Dào le , zhǎo dào le , chī wán zài zǒu .',
        translation: '(We\'ve) arrived, (we) found it, (we\'ll) leave after eating.',

        explanation: 'Three complete events chained in sequence, the hallmark of a **serial verb construction**. VP1: 到了 (arrived). VP2: 找到了 (found it, with the resultative 到 meaning "reached the target"). VP3: 吃完再走 (eat-finish-then-leave, a classic "finish X before Y" sequence). All three VPs share the same unnamed subject **[我们]** (we); the listener infers it from the surrounding conversation. This is why serial verbs feel so natural in Mandarin: once the actor is clear, you just stack events one after another, no conjunctions needed.',
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

        explanation: '**他** (he) is the Topic. The Comment chains three VPs sharing the same subject: **骑自行车** (ride a bicycle) → **去** (go) → **上班** (go to work). No conjunctions link them. In Mandarin, serial verb constructions simply stack VPs in chronological or purpose order. VP1 describes the manner/means (riding), VP2 the motion (going), VP3 the purpose (working). This pattern is pervasive: Chinese rarely uses "and then" or "in order to"; the sequence says it all. Compare with pivotal constructions where the subject changes at the pivot; here, the subject stays the same throughout.',
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
        explanation: '**我** (I) is the Topic. Two VPs are chained: **拿着伞** (holding an umbrella) → **出门** (go out the door). The **着** on the first verb is the durative aspect marker, meaning the umbrella-holding is *ongoing* while the second action happens. This is a very common serial verb pattern: V1着 + object + V2 = "while doing V1, do V2." Examples: 听着音乐跑步 (run while listening to music), 笑着说 (say while laughing). The 着 on V1 turns it into a concurrent background action rather than a sequential step.',
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
        explanation: 'This is the modern Mandarin way of expressing the classical 學而時習之. Instead of the terse classical connective 而, modern Chinese uses **以后** (after) to sequence the two actions "study" and "practice." The second clause uses the **才** pattern: only *then* will the result follow. *Grammatically,* the sentence chains two verb phrases under one implied subject (you): first 学了以后 (after studying), then 要经常练习 (should regularly practice). The second clause introduces a new frame with 这样 (\"this way\"), followed by 才会 (\"only then will\") and the result 有收获 (\"have gains\").',
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
    }
];
