import type { SentenceData } from '../../types/grammar';

export const even: SentenceData[] = [
    {
        id: 's66',
        category: 'Even (连…都/也)',
        chinese: '他连自己的名字都不会写。',
        pinyin: 'Tā lián zì jǐ de míng zi dōu bù huì xiě.',
        translation: 'He can\'t even write his own name.',
        explanation: '**他** ("he") is the Topic. The **连…都…** frame emphasizes an extreme case: 连 ("even") + **自己的名字** ("his own name") + **都** ("all / even") + **不会写** (can\'t write). The structure says: "Even something as basic as his own name: he can\'t write it." 连 picks out the extreme item; 都 reinforces the "even" emphasis. The implied logic: if he can\'t do this simple thing, he certainly can\'t do harder things. This pattern always implies surprise, disappointment, or emphasis. Other examples: 连饭都没吃 (didn\'t even eat), 连一块钱都没有 (doesn\'t even have one yuan).',
        tree: {
            id: 'n66',
            role: 'Sentence',
            children: [
                {
                    id: 'n66-t',
                    role: 'Topic',
                    text: { hanzi: '他', pinyin: 'tā', translation: 'he' },
                },
                {
                    id: 'n66-c',
                    role: 'Comment',
                    subRole: '连…都… (even X)',
                    children: [
                        {
                            id: 'n66-lian',
                            role: 'Adjunct',
                            subRole: 'even-marker opener (连)',
                            text: { hanzi: '连', pinyin: 'lián', translation: 'even' },
                        },
                        {
                            id: 'n66-focus',
                            role: 'Object',
                            subRole: 'emphasized extreme case',
                            children: [
                                {
                                    id: 'n66-focus-attr',
                                    role: 'Attributive',
                                    text: { hanzi: '自己的', pinyin: 'zì jǐ de', translation: 'his own' },
                                },
                                {
                                    id: 'n66-focus-hn',
                                    role: 'Head Noun',
                                    text: { hanzi: '名字', pinyin: 'míng zi', translation: 'name' },
                                },
                            ],
                        },
                        {
                            id: 'n66-dou',
                            role: 'Adjunct',
                            subRole: 'even-marker reinforcer (都)',
                            text: { hanzi: '都', pinyin: 'dōu', translation: 'even / all' },
                        },
                        {
                            id: 'n66-vp',
                            role: 'Verb Phrase',
                            children: [
                                {
                                    id: 'n66-neg',
                                    role: 'Adjunct',
                                    subRole: 'negation',
                                    text: { hanzi: '不', pinyin: 'bù', translation: 'not' },
                                },
                                {
                                    id: 'n66-modal',
                                    role: 'Adjunct',
                                    subRole: 'modal verb (learned ability)',
                                    text: { hanzi: '会', pinyin: 'huì', translation: 'know how to' },
                                },
                                {
                                    id: 'n66-hv',
                                    role: 'Head Verb',
                                    text: { hanzi: '写', pinyin: 'xiě', translation: 'write' },
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 's67',
        category: 'Even (连…都/也)',
        chinese: '连小孩子也能做到。',
        pinyin: 'Lián xiǎo hái zi yě néng zuò dào.',
        translation: 'Even children can do it.',
        explanation: 'This sentence uses **连…也…** (the 也 variant of the "even" construction). **连** picks out the extreme example: **小孩子** ("children, the least expected group to succeed"). **也** ("also/even") + **能做到** ("can accomplish it"). The implied logic: if even children can do it, then anyone can. The difference between 都 and 也 in this pattern is subtle. 都 emphasizes exhaustive inclusion ("every single one"), while 也 emphasizes unexpected inclusion ("even this group too"). In practice, they\'re largely interchangeable. Notice this sentence has no separate Topic; 连 fronts the entire construction.',
        tree: {
            id: 'n67',
            role: 'Sentence',
            children: [
                {
                    id: 'n67-c',
                    role: 'Comment',
                    subRole: '连…也… (even X)',
                    children: [
                        {
                            id: 'n67-lian',
                            role: 'Adjunct',
                            subRole: 'even-marker opener (连)',
                            text: { hanzi: '连', pinyin: 'lián', translation: 'even' },
                        },
                        {
                            id: 'n67-focus',
                            role: 'Subject',
                            subRole: 'emphasized extreme case',
                            text: { hanzi: '小孩子', pinyin: 'xiǎo hái zi', translation: 'children / little kids' },
                        },
                        {
                            id: 'n67-ye',
                            role: 'Adjunct',
                            subRole: 'even-marker reinforcer (也)',
                            text: { hanzi: '也', pinyin: 'yě', translation: 'also / even' },
                        },
                        {
                            id: 'n67-vp',
                            role: 'Verb Phrase',
                            children: [
                                {
                                    id: 'n67-modal',
                                    role: 'Adjunct',
                                    subRole: 'modal verb (ability)',
                                    text: { hanzi: '能', pinyin: 'néng', translation: 'can' },
                                },
                                {
                                    id: 'n67-hv',
                                    role: 'Head Verb',
                                    text: { hanzi: '做', pinyin: 'zuò', translation: 'do' },
                                },
                                {
                                    id: 'n67-comp',
                                    role: 'Complement',
                                    subRole: 'resultative (reach target)',
                                    text: { hanzi: '到', pinyin: 'dào', translation: 'reach / accomplish' },
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 's72',
        category: 'Even (\u8fde\u2026\u90fd/\u4e5f)',
        chinese: '连一千里的路，也要从第一步开始走。',
        pinyin: 'Lián yī qiān lǐ de lù, yě yào cóng dì yī bù kāi shǐ zǒu.',
        translation: 'Even a journey of a thousand miles must begin with the first step.',
        explanation: 'This modernizes the classical 千里之行始於足下. Modern Mandarin uses the **连...也** pattern for "even," turning the classical observation into an emphatic statement. *Grammatically,* **连** fronts the emphasized noun phrase (一千里的路, "a thousand-mile road"), and **也** in the Comment says "even so, you still must..." The classical 之 ("possession or linking marker") becomes 的, 始 ("begin") becomes 开始, and 於足下 ("from beneath one\'s feet") becomes 从第一步 ("from the first step").',
        tree: {
            id: 's72-root', role: 'Sentence', children: [
                { id: 's72-topic', role: 'Topic', subRole: '连-construction (even)', children: [
                    { id: 's72-lian', role: 'Particle', subRole: 'emphatic fronting', text: { hanzi: '连', pinyin: 'lián', translation: 'even' } },
                    { id: 's72-np', role: 'Object', children: [
                        { id: 's72-yql', role: 'Attributive', text: { hanzi: '一千里的', pinyin: 'yī qiān lǐ de', translation: 'thousand-mile' } },
                        { id: 's72-lu', role: 'Head Noun', text: { hanzi: '路', pinyin: 'lù', translation: 'road/journey' } },
                    ]},
                ]},
                { id: 's72-comment', role: 'Comment', children: [
                    { id: 's72-ye', role: 'Adjunct', text: { hanzi: '也', pinyin: 'yě', translation: 'also/still' } },
                    { id: 's72-yao', role: 'Adjunct', text: { hanzi: '要', pinyin: 'yào', translation: 'must' } },
                    { id: 's72-cong', role: 'Adjunct', subRole: 'source', text: { hanzi: '从第一步', pinyin: 'cóng dì yī bù', translation: 'from the first step' } },
                    { id: 's72-ks', role: 'Head Verb', text: { hanzi: '开始', pinyin: 'kāi shǐ', translation: 'begin' } },
                    { id: 's72-zou', role: 'Complement', text: { hanzi: '走', pinyin: 'zǒu', translation: 'walk' } },
                ]},
            ]
        }
    },
    {
        id: 's85',
        category: 'Even (\u8fde\u2026\u90fd/\u4e5f)',
        chinese: '连别人不了解你，你都不生气，这才是有修养的人。',
        pinyin: 'Lián bié rén bù liǎo jiě nǐ, nǐ dōu bù shēng qì, zhè cái shì yǒu xiū yǎng de rén.',
        translation: 'Even when others do not understand you, you are not resentful; this is truly the mark of a cultivated person.',
        explanation: 'This modernizes the classical 人不知而不慍不亦君子乎. The classical rhetorical question becomes a declarative statement using the **连...都** emphatic pattern. *Grammatically,* 连 fronts the extreme scenario (others not understanding you), then 都不生气 ("still not angry") completes the emphasis. The final clause 这才是 ("only this is") adds the judgment: 有修养的人 ("a person of cultivation"). The classical 君子 ("noble person") becomes the more modern 有修养的人.',
        tree: {
            id: 's85-root', role: 'Sentence', children: [
                { id: 's85-lian', role: 'Topic', subRole: 'lian-construction', children: [
                    { id: 's85-l', role: 'Particle', text: { hanzi: '连', pinyin: 'lián', translation: 'even' } },
                    { id: 's85-clause', role: 'Object', text: { hanzi: '别人不了解你', pinyin: 'bié rén bù liǎo jiě nǐ', translation: 'others don\'t understand you' } },
                ]},
                { id: 's85-result', role: 'Comment', children: [
                    { id: 's85-ni', role: 'Subject', text: { hanzi: '你', pinyin: 'nǐ', translation: 'you' } },
                    { id: 's85-dou', role: 'Adjunct', text: { hanzi: '都', pinyin: 'dōu', translation: 'still/all' } },
                    { id: 's85-bsq', role: 'Head Verb', text: { hanzi: '不生气', pinyin: 'bù shēng qì', translation: 'not angry' } },
                ]},
                { id: 's85-judge', role: 'Comment', subRole: 'judgment clause', children: [
                    { id: 's85-zhe', role: 'Subject', text: { hanzi: '这', pinyin: 'zhè', translation: 'this' } },
                    { id: 's85-cai', role: 'Adjunct', text: { hanzi: '才', pinyin: 'cái', translation: 'only then' } },
                    { id: 's85-shi', role: 'Copula', text: { hanzi: '是', pinyin: 'shì', translation: 'is' } },
                    { id: 's85-obj', role: 'Object', children: [
                        { id: 's85-attr', role: 'Attributive', text: { hanzi: '有修养的', pinyin: 'yǒu xiū yǎng de', translation: 'cultivated' } },
                        { id: 's85-ren', role: 'Head Noun', text: { hanzi: '人', pinyin: 'rén', translation: 'person' } },
                    ]},
                ]},
            ]
        }
    }
];
