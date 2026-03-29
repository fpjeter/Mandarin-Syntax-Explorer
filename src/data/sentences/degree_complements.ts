import type { SentenceData } from '../../types/grammar';

export const degreeComplements: SentenceData[] = [
    {
        id: 's36',
        category: 'Degree Complements (程度补语)',
        chinese: '她高兴得跳了起来。',
        pinyin: 'Tā gāo xìng de tiào le qǐ lái.',
        translation: 'She was so happy she jumped up.',
        explanation: '**她** (she) is the Topic. The Comment uses a **degree complement**: **高兴** (happy, acting as predicate) + **得** (the degree linker) + **跳了起来** (jumped up). The 得 here is not the potential marker; it is a *linker* that connects the predicate to a clause describing *the degree or consequence* of that state. The consequence of her happiness was that she jumped. This structure, [predicate] + 得 + [what happened as a result], is one of Mandarin\'s most expressive frames: 忙得忘了吃饭 (busy-to-the-point-of-forgetting-to-eat), 累得说不出话 (tired-to-the-point-of-being-speechless).',
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
                    subRole: 'degree complement (consequence)',
                    children: [
                        {
                            id: 'n36-pred',
                            role: 'Adjective',
                            subRole: 'predicate',
                            text: { hanzi: '高兴', pinyin: 'gāo xìng', translation: 'happy' },
                        },
                        {
                            id: 'n36-de',
                            role: 'Particle',
                            subRole: 'degree complement linker',
                            text: { hanzi: '得', pinyin: 'de', translation: '(links to degree/consequence)' },
                        },
                        {
                            id: 'n36-comp',
                            role: 'Complement',
                            subRole: 'degree complement (consequence clause)',
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
    },
    {
        id: 's37',
        category: 'Degree Complements (程度补语)',
        chinese: '她跑得非常快。',
        pinyin: 'Tā pǎo de fēi cháng kuài.',
        translation: 'She runs very fast.',
        explanation: '**她** (she) is the Topic. The Comment uses the most common form of degree complement: **verb + 得 + description**. The verb **跑** (run) is linked by **得** to the description **非常快** (very fast); this tells you *how well or how fast* the running was done. This is fundamentally different from a resultative complement (which says what *outcome* was achieved). The degree complement says *how the action was performed*. Compare: 跑**完**了 (finished the run, resultative) vs 跑**得**很快 (ran very fast, degree). One describes the outcome; the other rates the quality of the action.',
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
                    subRole: 'degree complement (manner)',
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
                                    id: 'n37-de',
                                    role: 'Particle',
                                    subRole: 'degree complement linker',
                                    text: { hanzi: '得', pinyin: 'de', translation: '(links to degree)' },
                                },
                                {
                                    id: 'n37-comp',
                                    role: 'Complement',
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
    },
    {
        id: 's46',
        category: 'Degree Complements (程度补语)',
        chinese: '他气得说不出话来。',
        pinyin: 'Tā qì de shuō bu chū huà lái.',
        translation: 'He was so angry he couldn\'t get a word out.',
        explanation: '**他** (he) is the Topic. This sentence elegantly stacks two complement types within one structure. The degree complement frame: **气** (be angry) + **得** (degree linker) + [consequence clause]. The consequence clause is itself a *negative potential complement*: **说不出话来** (speak + 不 + exit + words + come = "couldn\'t speak words out." So we have: degree complement whose consequence is expressed via a potential complement. This kind of nesting is entirely natural in Mandarin and shows how these complement types interact. The sentence tells you both *how intense* the anger was and *what its consequence* was.',
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
                    subRole: 'degree complement (consequence)',
                    children: [
                        {
                            id: 'n46-pred',
                            role: 'Adjective',
                            subRole: 'predicate',
                            text: { hanzi: '气', pinyin: 'qì', translation: 'angry / furious' },
                        },
                        {
                            id: 'n46-de',
                            role: 'Particle',
                            subRole: 'degree complement linker',
                            text: { hanzi: '得', pinyin: 'de', translation: '(links to consequence)' },
                        },
                        {
                            id: 'n46-comp',
                            role: 'Complement',
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
    },
    {
        id: 's47',
        category: 'Degree Complements (程度补语)',
        chinese: '她把房间打扫得干干净净。',
        pinyin: 'Tā bǎ fáng jiān dǎ sǎo de gān gān jìng jìng.',
        translation: 'She cleaned the room spotlessly.',
        explanation: '**她** (she) is the Topic. This sentence combines two constructions: the BA object-fronting pattern and a degree complement. **把房间** spotlights the room as the thing that gets cleaned. The verb **打扫** (clean/sweep) is followed by **得** and then **干干净净** (spotlessly clean, a reduplicated form of 干净 for emphasis). The degree complement here rates the *quality of the action*: how cleanly she cleaned. Note that with BA + a transitive verb, the degree complement attaches after 得 at the end; the word order is: 把 + [object] + [verb] + 得 + [degree description].',
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
                            subRole: 'degree complement (manner)',
                            children: [
                                {
                                    id: 'n47-hv',
                                    role: 'Head Verb',
                                    text: { hanzi: '打扫', pinyin: 'dǎ sǎo', translation: 'clean / sweep' },
                                },
                                {
                                    id: 'n47-de',
                                    role: 'Particle',
                                    subRole: 'degree complement linker',
                                    text: { hanzi: '得', pinyin: 'de', translation: '(links to degree)' },
                                },
                                {
                                    id: 'n47-comp',
                                    role: 'Complement',
                                    subRole: 'degree complement (reduplicated adjective)',
                                    text: { hanzi: '干干净净', pinyin: 'gān gān jìng jìng', translation: 'spotlessly clean (reduplicated)' },
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
        explanation: 'This modernizes the classical 逝者如斯夫不舍晝夜. The classical metaphor is preserved but expressed with modern comparative grammar. *Grammatically,* 时间 (\"time\") is the Topic. The Comment uses a **degree complement**: 过得 (verb + 得) introduces a description of *how* time passes. The simile 就像流水一样快 (\"as fast as flowing water\") uses the 像...一样 (\"like...the same\") comparison pattern. The second clause 日夜不停 (\"day and night, not stopping\") mirrors the classical 不舍晝夜.',
        tree: {
            id: 's77-root', role: 'Sentence', children: [
                { id: 's77-t', role: 'Topic', text: { hanzi: '时间', pinyin: 'shí jiān', translation: 'time' } },
                { id: 's77-c', role: 'Comment', children: [
                    { id: 's77-vp', role: 'Verb Phrase', children: [
                        { id: 's77-guo', role: 'Head Verb', text: { hanzi: '过', pinyin: 'guò', translation: 'pass' } },
                        { id: 's77-de', role: 'Particle', subRole: 'degree complement marker', text: { hanzi: '得', pinyin: 'de', translation: '(how)' } },
                    ]},
                    { id: 's77-comp', role: 'Complement', subRole: 'degree (simile)', children: [
                        { id: 's77-jx', role: 'Adjunct', text: { hanzi: '就像流水一样', pinyin: 'jiù xiàng liú shuǐ yí yàng', translation: 'just like flowing water' } },
                        { id: 's77-kuai', role: 'Head Verb', subRole: 'adjectival', text: { hanzi: '快', pinyin: 'kuài', translation: 'fast' } },
                    ]},
                    { id: 's77-c2', role: 'Adjunct', subRole: 'supplementary clause', text: { hanzi: '日夜不停', pinyin: 'rì yè bù tíng', translation: 'never ceasing day or night' } },
                ]},
            ]
        }
    }
];
