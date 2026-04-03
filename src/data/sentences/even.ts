import type { SentenceData } from '../../types/grammar';

export const even: SentenceData[] = [
    {
        id: 's66',
        category: 'Even (连…都/也)',
        chinese: '他连自己的名字都不会写。',
        pinyin: 'Tā lián zì jǐ de míng zi dōu bù huì xiě.',
        translation: 'He can\'t even write his own name.',
        explanation: '**他** ("he") is the Topic. The **连…都…** frame singles out the most extreme or surprising case to make a point. Here, **连最简单的题** ("even the simplest questions") is marked by 连 as the unexpected case, and **都不会** ("cannot even do") confirms it with 都. The logic is: if he cannot do even the *easiest* ones, he certainly cannot do harder ones. This "even" construction always uses 连 to pick out the extreme, and 都 or 也 to drive the point home. The tree groups the 连 phrase and 都 together, showing how they bracket the surprising fact.',
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
                            subRole: 'scope',
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
                            subRole: 'scope',
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
                                    subRole: 'modal',
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
        explanation: 'This sentence uses **连…也…**, the 也 variant of the "even" construction. **连一口水** ("even one sip of water") is marked by 连 as something minimal, and **也没喝** ("didn\'t even drink") confirms the extreme with 也. The logic is the same as 连...都: by highlighting the smallest possible amount, it emphasizes total absence. The tree shows 连 wrapping the focused noun phrase, with 也 reinforcing the all-or-nothing claim. Both 都 and 也 work in this frame; 也 is slightly softer.',
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
                            subRole: 'scope',
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
                            subRole: 'scope',
                            text: { hanzi: '也', pinyin: 'yě', translation: 'also / even' },
                        },
                        {
                            id: 'n67-vp',
                            role: 'Verb Phrase',
                            children: [
                                {
                                    id: 'n67-modal',
                                    role: 'Adjunct',
                                    subRole: 'modal',
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
        explanation: 'A modern take on 千里之行始於足下 (from the Dao De Jing: "A journey of a thousand miles begins beneath your feet"). The classical 之 (possessive/structural) becomes 的, and the classical coverb 於 ("at/from") is replaced by modern 从 ("from"). The modern version reads: **就连千里的路** ("even a thousand-mile road") + **也是从脚下开始的** ("also starts from beneath your feet"). The 连...也 "even" frame wraps the whole thought, giving it an emphatic feel: even something this vast starts from a single step.',
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
                    { id: 's72-cong', role: 'Adjunct', subRole: 'location', text: { hanzi: '从第一步', pinyin: 'cóng dì yī bù', translation: 'from the first step' } },
                    { id: 's72-ks', role: 'Head Verb', text: { hanzi: '开始', pinyin: 'kāi shǐ', translation: 'begin' } },
                    { id: 's72-zou', role: 'Complement', text: { hanzi: '走', pinyin: 'zǒu', translation: 'walk' } },
                ]},
            ]
        }
    },
    {
        id: 's85',
        category: 'Even (连…都/也)',
        chinese: '连别人不了解你，你都不生气，这才是有修养的人。',
        pinyin: 'Lián bié rén bù liǎo jiě nǐ, nǐ dōu bù shēng qì, zhè cái shì yǒu xiū yǎng de rén.',
        translation: 'Even when others do not understand you, you are not resentful; this is truly the mark of a cultivated person.',
        explanation: 'A modern take on 人不知而不愠，不亦君子乎 (from Confucius: "If others do not understand you and you are not upset, is that not the mark of a true person?"). The classical rhetorical question marker 不亦...乎 becomes the modern 难道不是...吗. The 连...也 "even" frame reshapes the sentence: **连别人不理解你这件事** ("even the matter of others not understanding you") + **你也不生气** ("you are also not upset"). The rhetorical question then drives the point home: 难道不是真正有修养的人吗 ("is that not a truly cultivated person?").',
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
