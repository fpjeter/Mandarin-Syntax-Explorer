import type { SentenceData } from '../../types/grammar';

export const degreeComplements: SentenceData[] = [
    {
        id: 's36',
        category: 'Degree Complements (程度补语)',
        chinese: '她高兴得跳了起来。',
        pinyin: 'Tā gāo xìng de tiào le qǐ lái.',
        translation: 'She was so happy she jumped up.',
        explanation: '**她** ("she") is the Topic. The Comment uses a **degree complement** to describe how an action was performed. The pattern is: verb + **得** + description. Here, **唱** ("sing") + 得 + **非常好** ("extremely well"). The 得 is a bridge; everything after it tells you about the quality, manner, or extent of the action. This is different from a resultative complement (which says *what happened* as a result) or a potential complement (which says *whether something can happen*). The degree complement simply describes *how* the action went.',
        tree: {
            id: 'n36',
            role: 'Sentence',
            children: [
                {
                    id: 'n36-t',
                    role: 'Topic',
                    text: { hanzi: '她', pinyin: 'tā', translation: 'she' },
                },
                {
                    id: 'n36-c',
                    role: 'Comment',
                    children: [
                        {
                            id: 'n36-vp',
                            role: 'Verb Phrase',
                            children: [
                                {
                                    id: 'n36-pred',
                                    role: 'Adjective',
                                    subRole: 'predicate',
                                    text: { hanzi: '高兴', pinyin: 'gāo xìng', translation: 'happy' },
                                },
                                {
                                    id: 'n36-dc',
                                    role: 'Complement',
                                    subRole: 'degree complement',
                                    children: [
                                        {
                                            id: 'n36-de',
                                            role: 'Particle',
                                            subRole: 'degree complement linker',
                                            text: { hanzi: '得', pinyin: 'de', translation: '(links to degree/consequence)' },
                                        },
                                        {
                                            id: 'n36-comp',
                                            role: 'Verb Phrase',
                                            subRole: 'consequence clause',
                                            children: [
                                                {
                                                    id: 'n36-comp-hv',
                                                    role: 'Head Verb',
                                                    text: { hanzi: '跳', pinyin: 'tiào', translation: 'jump' },
                                                },
                                                {
                                                    id: 'n36-comp-le',
                                                    role: 'Particle',
                                                    subRole: 'completion',
                                                    text: { hanzi: '了', pinyin: 'le', translation: '(done)' },
                                                },
                                                {
                                                    id: 'n36-comp-dir',
                                                    role: 'Complement',
                                                    subRole: 'directional',
                                                    text: { hanzi: '起来', pinyin: 'qǐ lái', translation: 'up' },
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 's37',
        category: 'Degree Complements (程度补语)',
        chinese: '她跑得非常快。',
        pinyin: 'Tā pǎo de fēi cháng kuài.',
        translation: 'She runs very fast.',
        explanation: '**她** ("she") is the Topic again, but this time the degree complement is more elaborate. After **跑** ("run") + **得**, a full descriptive clause follows: **大家都追不上她** ("everyone cannot catch up with her"). The degree complement is not limited to a single word like 好 or 快; it can be an entire clause describing the consequence or extent of the action. The tree shows this clause nested inside the complement, with its own internal structure. This is one of the most flexible patterns in Mandarin.',
        tree: {
            id: 'n37',
            role: 'Sentence',
            children: [
                {
                    id: 'n37-t',
                    role: 'Topic',
                    text: { hanzi: '她', pinyin: 'tā', translation: 'she' },
                },
                {
                    id: 'n37-c',
                    role: 'Comment',
                    children: [
                        {
                            id: 'n37-vp',
                            role: 'Verb Phrase',
                            children: [
                                {
                                    id: 'n37-hv',
                                    role: 'Head Verb',
                                    text: { hanzi: '跑', pinyin: 'pǎo', translation: 'run' },
                                },
                                {
                                    id: 'n37-dc',
                                    role: 'Complement',
                                    subRole: 'degree complement',
                                    children: [
                                        {
                                            id: 'n37-de',
                                            role: 'Particle',
                                            subRole: 'degree complement linker',
                                            text: { hanzi: '得', pinyin: 'de', translation: '(links to degree)' },
                                        },
                                        {
                                            id: 'n37-comp',
                                            role: 'Adjective',
                                            subRole: 'degree complement (manner)',
                                            children: [
                                                {
                                                    id: 'n37-comp-adv',
                                                    role: 'Adjunct',
                                                    text: { hanzi: '非常', pinyin: 'fēi cháng', translation: 'very / extremely' },
                                                },
                                                {
                                                    id: 'n37-comp-adj',
                                                    role: 'Adjective',
                                                    text: { hanzi: '快', pinyin: 'kuài', translation: 'fast' },
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 's46',
        category: 'Degree Complements (程度补语)',
        chinese: '他气得说不出话来。',
        pinyin: 'Tā qì de shuō bu chū huà lái.',
        translation: 'He was so angry he couldn\'t get a word out.',
        explanation: '**他** ("he") is the Topic. This sentence elegantly stacks two constructions together. First, the **比** comparison sets up the reference: **比以前** ("compared to before"). Then the degree complement fills in the detail: **进步得很快** ("has improved very quickly," verb + 得 + adverb). Mandarin handles this combination cleanly because the 比 phrase and the degree complement occupy different slots in the sentence. The 比 phrase modifies the overall comparison, while 得 links the verb to its description.',
        tree: {
            id: 'n46',
            role: 'Sentence',
            children: [
                {
                    id: 'n46-t',
                    role: 'Topic',
                    text: { hanzi: '他', pinyin: 'tā', translation: 'he' },
                },
                {
                    id: 'n46-c',
                    role: 'Comment',
                    children: [
                        {
                            id: 'n46-vp',
                            role: 'Verb Phrase',
                            children: [
                                {
                                    id: 'n46-pred',
                                    role: 'Adjective',
                                    subRole: 'predicate',
                                    text: { hanzi: '气', pinyin: 'qì', translation: 'angry / furious' },
                                },
                                {
                                    id: 'n46-dc',
                                    role: 'Complement',
                                    subRole: 'degree complement',
                                    children: [
                                        {
                                            id: 'n46-de',
                                            role: 'Particle',
                                            subRole: 'degree complement linker',
                                            text: { hanzi: '得', pinyin: 'de', translation: '(links to consequence)' },
                                        },
                                        {
                                            id: 'n46-comp',
                                            role: 'Verb Phrase',
                                            subRole: 'degree: consequence (itself a negative potential complement)',
                                            children: [
                                                {
                                                    id: 'n46-comp-hv',
                                                    role: 'Head Verb',
                                                    text: { hanzi: '说', pinyin: 'shuō', translation: 'speak / say' },
                                                },
                                                {
                                                    id: 'n46-comp-neg',
                                                    role: 'Particle',
                                                    subRole: 'potential negator',
                                                    text: { hanzi: '不', pinyin: 'bù', translation: 'cannot (potential)' },
                                                },
                                                {
                                                    id: 'n46-comp-out',
                                                    role: 'Complement',
                                                    subRole: 'direction morpheme (exit/out)',
                                                    text: { hanzi: '出', pinyin: 'chū', translation: 'out / exit' },
                                                },
                                                {
                                                    id: 'n46-comp-obj',
                                                    role: 'Object',
                                                    text: { hanzi: '话', pinyin: 'huà', translation: 'words / speech' },
                                                },
                                                {
                                                    id: 'n46-comp-lai',
                                                    role: 'Complement',
                                                    subRole: 'orientation: toward speaker (coming out)',
                                                    text: { hanzi: '来', pinyin: 'lái', translation: 'come (complete the exit)' },
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 's47',
        category: 'Degree Complements (程度补语)',
        chinese: '她把房间打扫得干干净净。',
        pinyin: 'Tā bǎ fáng jiān dǎ sǎo de gān gān jìng jìng.',
        translation: 'She cleaned the room spotlessly.',
        explanation: '**她** ("she") is the Topic. This sentence combines two constructions: a **把** construction and a **degree complement**. First, **把房间** ("the room") is spotlighted as the thing affected. Then the verb **打扫** ("clean") is linked by **得** to the description **干干净净的** ("spotlessly clean," a reduplicated adjective for emphasis). The tree shows the 把 phrase and the degree complement occupying their respective positions. This combination is very natural in Mandarin: 把 says *what* was acted on, and 得 says *how well* it was done.',
        tree: {
            id: 'n47',
            role: 'Sentence',
            children: [
                {
                    id: 'n47-t',
                    role: 'Topic',
                    text: { hanzi: '她', pinyin: 'tā', translation: 'she' },
                },
                {
                    id: 'n47-c',
                    role: 'Comment',
                    children: [
                        {
                            id: 'n47-ba',
                            role: 'Preposition',
                            subRole: 'ba-construction',
                            children: [
                                {
                                    id: 'n47-ba-prep',
                                    role: 'Preposition',
                                    text: { hanzi: '把', pinyin: 'bǎ', translation: '(object fronting)' },
                                },
                                {
                                    id: 'n47-ba-obj',
                                    role: 'Object',
                                    text: { hanzi: '房间', pinyin: 'fáng jiān', translation: 'room' },
                                },
                            ],
                        },
                        {
                            id: 'n47-vp',
                            role: 'Verb Phrase',
                            children: [
                                {
                                    id: 'n47-hv',
                                    role: 'Head Verb',
                                    text: { hanzi: '打扫', pinyin: 'dǎ sǎo', translation: 'clean / sweep' },
                                },
                                {
                                    id: 'n47-dc',
                                    role: 'Complement',
                                    subRole: 'degree complement',
                                    children: [
                                        {
                                            id: 'n47-de',
                                            role: 'Particle',
                                            subRole: 'degree complement linker',
                                            text: { hanzi: '得', pinyin: 'de', translation: '(links to degree)' },
                                        },
                                        {
                                            id: 'n47-comp',
                                            role: 'Adjective',
                                            subRole: 'degree (reduplicated adjective)',
                                            text: { hanzi: '干干净净', pinyin: 'gān gān jìng jìng', translation: 'spotlessly clean (reduplicated)' },
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 's77',
        category: 'Degree Complements (\u7a0b\u5ea6\u8865\u8bed)',
        chinese: '时间过得就像流水一样快，日夜不停。',
        pinyin: 'Shí jiān guò de jiù xiàng liú shuǐ yí yàng kuài, rì yè bù tíng.',
        translation: 'Time passes as swiftly as flowing water, never ceasing day or night.',
        explanation: 'A modern take on 逝者如斯夫，不舍晝夜 (from Confucius, standing by a river: "What passes is like this, never ceasing day or night"). The modern version uses a degree complement to capture the simile: **时间过得像流水一样快** ("time passes as fast as flowing water"). The verb **过** ("pass") is linked by **得** to the simile **像流水一样快** ("like flowing water, equally fast"). The classical 逝者如斯 ("what passes is like this") becomes the degree complement pattern: V+得+像...一样, one of the most vivid patterns for comparing actions in modern Mandarin.',
        tree: {
            id: 's77-root', role: 'Sentence', children: [
                { id: 's77-t', role: 'Topic', text: { hanzi: '时间', pinyin: 'shí jiān', translation: 'time' } },
                { id: 's77-c', role: 'Comment', children: [
                    { id: 's77-vp', role: 'Verb Phrase', children: [
                        { id: 's77-guo', role: 'Head Verb', text: { hanzi: '过', pinyin: 'guò', translation: 'pass' } },
                        { id: 's77-dc', role: 'Complement', subRole: 'degree complement', children: [
                            { id: 's77-de', role: 'Particle', subRole: 'degree complement marker', text: { hanzi: '得', pinyin: 'de', translation: '(how)' } },
                            { id: 's77-comp', role: 'Adjective', subRole: 'degree (simile)', children: [
                                { id: 's77-jx', role: 'Adjunct', text: { hanzi: '就像流水一样', pinyin: 'jiù xiàng liú shuǐ yí yàng', translation: 'just like flowing water' } },
                                { id: 's77-kuai', role: 'Adjective', text: { hanzi: '快', pinyin: 'kuài', translation: 'fast' } },
                            ]},
                        ]},
                    ]},
                    { id: 's77-c2', role: 'Adjunct', subRole: 'supplementary clause', text: { hanzi: '日夜不停', pinyin: 'rì yè bù tíng', translation: 'never ceasing day or night' } },
                ]},
            ]
        }
    }
];
