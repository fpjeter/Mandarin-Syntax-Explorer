import type { SentenceData } from '../../types/grammar';

export const shDeConstruction: SentenceData[] = [
    {
        id: 's8',
        category: 'Shì–de Construction (是…的)',
        chinese: '我是昨天晚上在图书馆看到她的。',
        pinyin: 'Wǒ shì zuó tiān wǎn shang zài tú shū guǎn kàn dào tā de.',
        translation: 'It was last night in the library that I saw her.',
        explanation: '**我** ("I") sets the scene, think of it as "as for me…" The rest of the sentence uses the **是…的** pattern to zoom in on *when* and *where* something happened. **是** works like "was" in the English phrasing *"it was last night in the library that I saw her."* The focused details, **昨天晚上** ("last night") and **在图书馆** ("in the library"), sit between 是 and the verb. **的** at the end turns the whole action into a description: "the [saw-her-last-night-in-the-library] one." So the sentence literally reads something like: *As for me, (I) am the one who saw her last night in the library.* Without 是…的 you\'d just say 我昨天晚上在图书馆看到她, a plain statement. With 是…的, you\'re emphasizing the circumstances, typically in response to a question like "When and where did you see her?"',
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
                                    subRole: 'time · focused element (when)',
                                    text: { hanzi: '昨天晚上', pinyin: 'zuó tiān wǎn shang', translation: 'last night' }
                                },
                                {
                                    id: 'n8-p-vp-lp',
                                    role: 'Adjunct',
                                    subRole: 'location · focused element (where)',
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
                                        }
                                    ]
                                },
                                {
                                    id: 'n8-p-vp-obj',
                                    role: 'Object',
                                    text: { hanzi: '她', pinyin: 'tā', translation: 'her' }
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
        explanation: 'Compare this with s8: both use **是…的** to highlight one specific detail. In s8 the spotlight was on *when and where* something happened. Here it\'s on *where* the speaker grew up. The verb **长大** (grow up) is not in doubt; the speaker definitely grew up somewhere. **是** acts like "was" and **的** wraps the clause into "the one that [grew up in Shanghai]." Together they bracket the location **在上海** as the key piece of info. Strip away 是 and 的 and you get a plain sentence (我在上海长大); add them back and the sentence says "Shanghai is the answer you\'re looking for." This is one of the most useful frames for answering "where/when/how did you…?" questions in Mandarin.',
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
                                    subRole: 'location · focused element (where)',
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
        explanation: '**我** ("I") sets the scene: "as for me…" Then the **是…的** pattern highlights a specific detail about a past event. Here, **是** acts like "was" (*it was yesterday*) and **的** at the end wraps the action into a bundle: "the [arrived-yesterday] one." The focused detail is **昨天** ("yesterday"), answering a question like "When did you arrive?" Think of it as: *As for me, (I) am the one who arrived yesterday.* This is the simplest 是…的 shape: 是 + [the detail you want to stress] + verb + 的. Without 是…的 you\'d just say 我昨天到了, a straightforward statement with no special emphasis.',
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
                                    subRole: 'time · focused element (when)',
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
        explanation: '**这件衣服** (this item of clothing; 件 is the measure word for garments) sets the scene: "as for this clothing…" Notice the topic here is a *thing*, not a person. The **是…的** pattern then highlights *where* the buying happened. **是** acts like "was," and the focused detail is **在北京** ("in Beijing"). **的** at the end packages the action: "the [bought-in-Beijing] one." So the sentence reads: *As for this clothing, (it) is the one that was bought in Beijing.* This answers a question like "Where was it bought?" The buyer isn\'t stated; Mandarin often leaves it out when it\'s obvious from context. Compare: 这件衣服是谁买的？ (*Who* was it that bought this?) Same pattern, just swapping the focused detail.',
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
                                    subRole: 'location · focused element (where)',
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
        explanation: 'This modernizes the classical 師者所以傳道授業解惑也. Modern Mandarin uses the **是...的** construction to define the purpose of a teacher. *Grammatically,* 老师 (\"teacher\") is the Topic. The Comment uses 是 (\"is\") + a purpose phrase 用来 (\"used for\") + two verb-object pairs connected by 和 (\"and\"): 传授知识 (\"transmit knowledge\") and 解答疑惑 (\"resolve doubts\"). The 的 at the end turns the whole phrase into a noun.',
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
    }
];
