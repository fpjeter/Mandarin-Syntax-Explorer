import type { SentenceData } from '../../types/grammar';

export const shDeConstruction: SentenceData[] = [
    {
        id: 's8',
        category: 'Shì–de Construction (是…的)',
        chinese: '我是昨天晚上在图书馆看到她的。',
        pinyin: 'Wǒ shì zuó tiān wǎn shang zài tú shū guǎn kàn dào tā de.',
        translation: 'It was last night in the library that I saw her.',
        explanation: '**我** ("I") is the Topic. The **是…的** frame wraps the entire Comment to spotlight *when* the action happened. 是 marks the start of the focused information, and 的 closes it. Here, **是去年来的** highlights **去年** ("last year") as the key detail. Without 是...的, the sentence would be 我去年来了 ("I came last year"), which simply reports the event. With 是...的, the sentence says: "It was *last year* that I came." The tree shows 是 and 的 bracketing the focused clause.',
        tree: {
            id: 'n8',
            role: 'Sentence',
            children: [
                {
                    id: 'n8-t',
                    role: 'Topic',
                    subRole: 'left-dislocation (as for me)',
                    text: { hanzi: '我', pinyin: 'wǒ', translation: 'I / as for me' }
                },
                {
                    id: 'n8-c',
                    role: 'Comment',
                    subRole: 'pseudo-cleft frame (是…的)',
                    children: [
                        {
                            id: 'n8-p-shi',
                            role: 'Copula',
                            subRole: 'cleft opener: it was…',
                            text: { hanzi: '是', pinyin: 'shì', translation: '(it was…)' }
                        },
                        {
                            id: 'n8-p-vp',
                            role: 'Verb Phrase',
                            subRole: 'focused constituents + embedded predicate',
                            children: [
                                {
                                    id: 'n8-p-vp-tp',
                                    role: 'Adjunct',
                                    subRole: 'time',
                                    text: { hanzi: '昨天晚上', pinyin: 'zuó tiān wǎn shang', translation: 'last night' }
                                },
                                {
                                    id: 'n8-p-vp-lp',
                                    role: 'Adjunct',
                                    subRole: 'location',
                                    children: [
                                        {
                                            id: 'n8-p-vp-lp-prep',
                                            role: 'Preposition',
                                            text: { hanzi: '在', pinyin: 'zài', translation: 'in / at' }
                                        },
                                        {
                                            id: 'n8-p-vp-lp-n',
                                            role: 'Noun',
                                            text: { hanzi: '图书馆', pinyin: 'tú shū guǎn', translation: 'library' }
                                        }
                                    ]
                                },
                                {
                                    id: 'n8-p-vp-verb',
                                    role: 'Verb Phrase',
                                    subRole: 'embedded predicate (null subject = 我)',
                                    children: [
                                        {
                                            id: 'n8-p-vp-verb-hv',
                                            role: 'Head Verb',
                                            text: { hanzi: '看', pinyin: 'kàn', translation: 'look / see' }
                                        },
                                        {
                                            id: 'n8-p-vp-verb-comp',
                                            role: 'Complement',
                                            subRole: 'resultative (arrive at → succeed in seeing)',
                                            text: { hanzi: '到', pinyin: 'dào', translation: '(resultative: managed to see)' }
                                        },
                                        {
                                            id: 'n8-p-vp-obj',
                                            role: 'Object',
                                            text: { hanzi: '她', pinyin: 'tā', translation: 'her' }
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'n8-p-de',
                            role: 'Particle',
                            subRole: 'nominalizer (creates "the one that [verb]ed")',
                            text: { hanzi: '的', pinyin: 'de', translation: '(nominalizer)' }
                        }
                    ]
                }
            ]
        }
    },
    {
        id: 's23',
        category: 'Shì–de Construction (是…的)',
        chinese: '我是在上海长大的。',
        pinyin: 'Wǒ shì zài Shàng hǎi zhǎng dà de.',
        translation: 'It was in Shanghai that I grew up.',
        explanation: 'This is another **是…的** sentence, this time spotlighting *where* something happened. **她是在北京出生的** highlights **在北京** ("in Beijing") as the focused detail. Again, without 是...的, it would be a neutral report: 她在北京出生了. With 是...的, it answers a specific question: "Where was she born?" The 是...的 frame can focus on time, place, manner, or means. The tree shows 是 and 的 wrapping the location phrase and the verb.',
        tree: {
            id: 'n23',
            role: 'Sentence',
            children: [
                {
                    id: 'n23-t',
                    role: 'Topic',
                    text: { hanzi: '我', pinyin: 'wǒ', translation: 'I' }
                },
                {
                    id: 'n23-c',
                    role: 'Comment',
                    subRole: 'shì–de focus construction',
                    children: [
                        {
                            id: 'n23-shi',
                            role: 'Copula',
                            subRole: 'cleft opener: it was…',
                            text: { hanzi: '是', pinyin: 'shì', translation: '(it was…)' }
                        },
                        {
                            id: 'n23-p-vp',
                            role: 'Verb Phrase',
                            subRole: 'focused constituents + embedded predicate',
                            children: [
                                {
                                    id: 'n23-lp',
                                    role: 'Adjunct',
                                    subRole: 'location',
                                    children: [
                                        {
                                            id: 'n23-lp-prep',
                                            role: 'Preposition',
                                            text: { hanzi: '在', pinyin: 'zài', translation: 'in/at' }
                                        },
                                        {
                                            id: 'n23-lp-n',
                                            role: 'Noun',
                                            text: { hanzi: '上海', pinyin: 'Shàng hǎi', translation: 'Shanghai' }
                                        }
                                    ]
                                },
                                {
                                    id: 'n23-vp',
                                    role: 'Verb Phrase',
                                    children: [
                                        {
                                            id: 'n23-vp-hv',
                                            role: 'Head Verb',
                                            text: { hanzi: '长大', pinyin: 'zhǎng dà', translation: 'grow up' }
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'n23-de',
                            role: 'Particle',
                            subRole: 'nominalizer (creates "the one that [verb]ed")',
                            text: { hanzi: '的', pinyin: 'de', translation: '(nominalizer)' }
                        }
                    ]
                }
            ]
        }
    },
    {
        id: 's50',
        category: 'Shì–de Construction (是…的)',
        chinese: '我是昨天到的。',
        pinyin: 'Wǒ shì zuó tiān dào de.',
        translation: 'It was yesterday that I arrived.',
        explanation: '**我** ("I") is the Topic. This 是…的 sentence spotlights *how* the action was done. **是坐飞机来的** highlights **坐飞机** ("by plane") as the focused detail. The question being answered is "How did you come?" not "Did you come?" The tree shows the manner phrase 坐飞机 inside the 是...的 bracket. Notice that the 的 goes at the very end, after the verb 来. This fixed position is a defining feature of the construction: 是 opens, the focused detail comes next, the verb follows, and 的 closes.',
        tree: {
            id: 'n50',
            role: 'Sentence',
            children: [
                {
                    id: 'n50-t',
                    role: 'Topic',
                    subRole: 'left-dislocation (as for me)',
                    text: { hanzi: '我', pinyin: 'wǒ', translation: 'I / as for me' },
                },
                {
                    id: 'n50-c',
                    role: 'Comment',
                    subRole: 'pseudo-cleft frame (是…的)',
                    children: [
                        {
                            id: 'n50-shi',
                            role: 'Copula',
                            subRole: 'cleft opener: it was…',
                            text: { hanzi: '是', pinyin: 'shì', translation: '(it was…)' },
                        },
                        {
                            id: 'n50-p-vp',
                            role: 'Verb Phrase',
                            subRole: 'focused constituents + embedded predicate',
                            children: [
                                {
                                    id: 'n50-focus',
                                    role: 'Adjunct',
                                    subRole: 'time',
                                    text: { hanzi: '昨天', pinyin: 'zuó tiān', translation: 'yesterday' },
                                },
                                {
                                    id: 'n50-hv',
                                    role: 'Head Verb',
                                    subRole: 'embedded predicate (null subject = 我)',
                                    text: { hanzi: '到', pinyin: 'dào', translation: 'arrive' },
                                }
                            ]
                        },
                        {
                            id: 'n50-de',
                            role: 'Particle',
                            subRole: 'nominalizer (creates "the one that [verb]ed")',
                            text: { hanzi: '的', pinyin: 'de', translation: '(nominalizer)' },
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 's51',
        category: 'Shì–de Construction (是…的)',
        chinese: '这件衣服是在北京买的。',
        pinyin: 'Zhè jiàn yī fu shì zài Běi jīng mǎi de.',
        translation: 'This item of clothing was bought in Beijing.',
        explanation: '**这件衣服** ("this item of clothing"; 件 is the measure word for garments) is the Topic. The **是…的** frame here spotlights *what material* something is made of: **是纯棉的** ("is pure cotton"). This is a slightly different use: instead of focusing on a past action, it identifies a property. The 的 at the end nominalizes the phrase: "is [a] pure-cotton [one]." The tree shows 是 as the copula (linking verb) and 纯棉的 as the identification. This property-identification pattern is very common in shopping and product descriptions.',
        tree: {
            id: 'n51',
            role: 'Sentence',
            children: [
                {
                    id: 'n51-t',
                    role: 'Topic',
                    subRole: 'left-dislocation (as for this clothing)',
                    children: [
                        {
                            id: 'n51-t-attr',
                            role: 'Attributive',
                            text: { hanzi: '这件', pinyin: 'zhè jiàn', translation: 'this (garment-measure)' },
                        },
                        {
                            id: 'n51-t-hn',
                            role: 'Head Noun',
                            text: { hanzi: '衣服', pinyin: 'yī fu', translation: 'clothing' },
                        },
                    ],
                },
                {
                    id: 'n51-c',
                    role: 'Comment',
                    subRole: 'pseudo-cleft frame (是…的)',
                    children: [
                        {
                            id: 'n51-shi',
                            role: 'Copula',
                            subRole: 'cleft opener: it was…',
                            text: { hanzi: '是', pinyin: 'shì', translation: '(it was…)' },
                        },
                        {
                            id: 'n51-p-vp',
                            role: 'Verb Phrase',
                            subRole: 'focused constituents + embedded predicate',
                            children: [
                                {
                                    id: 'n51-focus',
                                    role: 'Adjunct',
                                    subRole: 'location',
                                    children: [
                                        {
                                            id: 'n51-focus-prep',
                                            role: 'Preposition',
                                            text: { hanzi: '在', pinyin: 'zài', translation: 'at / in' },
                                        },
                                        {
                                            id: 'n51-focus-n',
                                            role: 'Noun',
                                            text: { hanzi: '北京', pinyin: 'Běi jīng', translation: 'Beijing' },
                                        },
                                    ],
                                },
                                {
                                    id: 'n51-hv',
                                    role: 'Head Verb',
                                    subRole: 'embedded predicate (null subject = contextual)',
                                    text: { hanzi: '买', pinyin: 'mǎi', translation: 'buy' },
                                }
                            ]
                        },
                        {
                            id: 'n51-de',
                            role: 'Particle',
                            subRole: 'nominalizer (creates "the one that [verb]ed")',
                            text: { hanzi: '的', pinyin: 'de', translation: '(nominalizer)' },
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 's79',
        category: 'Sh\u00ec\u2013de Construction (\u662f\u2026\u7684)',
        chinese: '老师是用来传授知识和解答疑惑的。',
        pinyin: 'Lǎo shī shì yòng lái chuán shòu zhī shi hé jiě dá yí huò de.',
        translation: 'A teacher is someone used to transmit knowledge and resolve doubts.',
        explanation: 'A modern take on 師者所以傳道授業解惑也 (from Han Yu\'s famous essay: "A teacher is one whose purpose is to transmit the Way, teach skills, and resolve doubts"). The classical 者...也 identification becomes modern **是...的**, and the classical 所以 ("the means by which") becomes **用来** ("used for"). The tree shows **老师** ("teacher") as the Topic, with the Comment using 是...的 to define the role: 是用来传授知识、教授技能、解答疑惑的 ("is for transmitting knowledge, teaching skills, and answering questions"). The parallel structure echoes the classical original.',
        tree: {
            id: 's79-root', role: 'Sentence', children: [
                { id: 's79-t', role: 'Topic', text: { hanzi: '老师', pinyin: 'lǎo shī', translation: 'teacher' } },
                { id: 's79-c', role: 'Comment', subRole: 'shi-de definition', children: [
                    { id: 's79-shi', role: 'Copula', text: { hanzi: '是', pinyin: 'shì', translation: 'is' } },
                    { id: 's79-vp', role: 'Verb Phrase', children: [
                        { id: 's79-yl', role: 'Adjunct', text: { hanzi: '用来', pinyin: 'yòng lái', translation: 'used for' } },
                        { id: 's79-v1', role: 'Head Verb', text: { hanzi: '传授', pinyin: 'chuán shòu', translation: 'transmit' } },
                        { id: 's79-o1', role: 'Object', text: { hanzi: '知识', pinyin: 'zhī shi', translation: 'knowledge' } },
                        { id: 's79-he', role: 'Particle', text: { hanzi: '和', pinyin: 'hé', translation: 'and' } },
                        { id: 's79-v2', role: 'Head Verb', text: { hanzi: '解答', pinyin: 'jiě dá', translation: 'resolve' } },
                        { id: 's79-o2', role: 'Object', text: { hanzi: '疑惑', pinyin: 'yí huò', translation: 'doubts' } },
                    ]},
                    { id: 's79-de', role: 'Particle', subRole: 'nominalizer', text: { hanzi: '的', pinyin: 'de', translation: '(nominalizer)' } },
                ]},
            ]
        }
    },
    {
        id: 's104',
        category: 'Shì–de Construction (是…的)',
        chinese: '我不是故意打碎的。',
        pinyin: 'Wǒ bú shì gù yì dǎ suì de.',
        translation: 'I didn\'t break it on purpose.',
        explanation: '**我** ("I") is the Topic. The **是…的** frame here spotlights the *manner* of the action, but in negative form. **不是** negates the focus: it was not *on purpose* that I broke it. The focused detail **故意** ("on purpose") sits between 是 and the verb. The verb-result compound **打碎** ("hit-shatter," meaning "broke") and the closing 的 complete the frame. Without 是...的, the sentence would be 我不是故意的 ("it wasn\'t on purpose"), which is vaguer. With the full frame, the sentence specifies *what* was not on purpose: the breaking. The negation 不 always goes before 是, never after it.',
        tree: {
            id: 's104-n',
            role: 'Sentence',
            children: [
                { id: 's104-t', role: 'Topic', text: { hanzi: '我', pinyin: 'wǒ', translation: 'I' } },
                {
                    id: 's104-c',
                    role: 'Comment',
                    children: [
                        { id: 's104-c-neg', role: 'Adjunct', subRole: 'negation', text: { hanzi: '不', pinyin: 'bù', translation: 'not' } },
                        { id: 's104-shi', role: 'Copula', subRole: 'focus marker', text: { hanzi: '是', pinyin: 'shì', translation: '(it is that)' } },
                        { id: 's104-manner', role: 'Adjunct', subRole: 'manner', text: { hanzi: '故意', pinyin: 'gù yì', translation: 'on purpose' } },
                        { id: 's104-hv', role: 'Head Verb', text: { hanzi: '打', pinyin: 'dǎ', translation: 'hit' } },
                        { id: 's104-comp', role: 'Complement', subRole: 'result', text: { hanzi: '碎', pinyin: 'suì', translation: 'shatter' } },
                        { id: 's104-de', role: 'Particle', subRole: 'focus closure', text: { hanzi: '的', pinyin: 'de', translation: '(the one that)' } }
                    ]
                }
            ]
        }
    },
    {
        id: 's105',
        category: 'Shì–de Construction (是…的)',
        chinese: '我是坐火车来的。',
        pinyin: 'Wǒ shì zuò huǒ chē lái de.',
        translation: 'I came by train.',
        explanation: '**我** ("I") is the Topic. The **是…的** frame spotlights *how* the speaker came: **坐火车** ("by train," literally "sit-train"). The 是 opens the focused information, and the 的 at the end closes it. The question being answered is "How did you come?" not "Did you come?" Without 是...的, the sentence would simply be 我坐火车来了 ("I took the train here"), which reports the event. With 是...的, the emphasis shifts to the method of travel. This is one of the most practical uses of the construction: answering how, when, or where questions about past events.',
        tree: {
            id: 's105-n',
            role: 'Sentence',
            children: [
                { id: 's105-t', role: 'Topic', text: { hanzi: '我', pinyin: 'wǒ', translation: 'I' } },
                {
                    id: 's105-c',
                    role: 'Comment',
                    children: [
                        { id: 's105-shi', role: 'Copula', subRole: 'focus marker', text: { hanzi: '是', pinyin: 'shì', translation: '(it is that)' } },
                        { 
                            id: 's105-method', 
                            role: 'Adjunct', 
                            subRole: 'instrument', 
                            children: [
                                { id: 's105-vp-hv', role: 'Head Verb', text: { hanzi: '坐', pinyin: 'zuò', translation: 'sit/take' } },
                                { id: 's105-vp-obj', role: 'Object', text: { hanzi: '火车', pinyin: 'huǒ chē', translation: 'train' } }
                            ]
                        },
                        { id: 's105-hv', role: 'Head Verb', text: { hanzi: '来', pinyin: 'lái', translation: 'come' } },
                        { id: 's105-de', role: 'Particle', subRole: 'focus closure', text: { hanzi: '的', pinyin: 'de', translation: '(the one that)' } }
                    ]
                }
            ]
        }
    }
];
