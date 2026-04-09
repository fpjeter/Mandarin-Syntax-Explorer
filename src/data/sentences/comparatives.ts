import type { SentenceData } from '../../types/grammar';

export const comparatives: SentenceData[] = [
    {
        id: 's9',
        category: 'Comparatives (比较句)',
        chinese: '那座山比这座山高得多。',
        pinyin: 'Nà zuò shān bǐ zhè zuò shān gāo de duō.',
        translation: 'That mountain is much taller than this mountain.',

        explanation: '**那座山** ("that mountain") is the Topic, where 座 is the measure word for mountains and large structures. The Comment makes a comparison using **比** ("compared to"), which always comes before the reference point. The pattern is: Topic, 比, reference, quality, degree. Here: that mountain, compared to this mountain, tall, by a lot. The **得多** at the end means "by a great amount" and always follows the quality word, never precedes it. This fixed word order is one of the clearest differences from English comparisons.',
        tree: {
            id: 'n9',
            role: 'Sentence',
            children: [
                {
                    id: 'n9-t',
                    role: 'Topic',
                    children: [
                        {
                            id: 'n9-s-attr',
                            role: 'Attributive',
                            text: { hanzi: '那座', pinyin: 'nà zuò', translation: 'that (measure)' }
                        },
                        {
                            id: 'n9-s-hn',
                            role: 'Head Noun',
                            text: { hanzi: '山', pinyin: 'shān', translation: 'mountain' }
                        }
                    ]
                },
                {
                    id: 'n9-c',
                    role: 'Comment',
                    subRole: 'adjectival / comparative',
                    children: [
                        {
                            id: 'n9-p-bi',
                            role: 'Preposition',
                            subRole: 'comparative bǐ clause',
                            children: [
                                {
                                    id: 'n9-p-bi-prep',
                                    role: 'Preposition',
                                    text: { hanzi: '比', pinyin: 'bǐ', translation: 'compared to' }
                                },
                                {
                                    id: 'n9-p-bi-obj',
                                    role: 'Object',
                                    subRole: 'reference point',
                                    children: [
                                        {
                                            id: 'n9-p-bi-obj-attr',
                                            role: 'Attributive',
                                            text: { hanzi: '这座', pinyin: 'zhè zuò', translation: 'this (measure)' }
                                        },
                                        {
                                            id: 'n9-p-bi-obj-hn',
                                            role: 'Head Noun',
                                            text: { hanzi: '山', pinyin: 'shān', translation: 'mountain' }
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'n9-p-adj',
                            role: 'Adjective',
                            text: { hanzi: '高', pinyin: 'gāo', translation: 'tall/high' }
                        },
                        {
                            id: 'n9-p-part',
                            role: 'Particle',
                            subRole: 'degree',
                            text: { hanzi: '得', pinyin: 'de', translation: '(links degree)' }
                        },
                        {
                            id: 'n9-p-comp',
                            role: 'Complement',
                            subRole: 'degree',
                            text: { hanzi: '多', pinyin: 'duō', translation: 'much/many' }
                        }
                    ]
                }
            ]
        }
    },
    {
        id: 's20',
        category: 'Comparatives (比较句)',
        chinese: '她写的汉字跟老师写的一样漂亮。',
        pinyin: 'Tā xiě de hàn zì gēn lǎo shī xiě de yī yàng piāo liang.',
        translation: 'The hanzi she writes is just as beautiful as the teacher\'s.',

        explanation: 'The equality comparison in Mandarin uses a specific frame: **A 跟 B 一样 [adjective]**, meaning "A is equally [adjective] as B." **跟** ("compared with") marks the reference, and **一样** ("the same") confirms equality. Both sides of this sentence describe full noun phrases: **她写的汉字** ("the Chinese characters she writes") versus **老师写的** ("what the teacher writes"). This construction never uses 比 (which signals one side surpasses the other). 跟...一样 means they are equal.',
        tree: {
            id: 'n20',
            role: 'Sentence',
            children: [
                {
                    id: 'n20-t',
                    role: 'Topic',
                    children: [
                        {
                            id: 'n20-t-subj',
                            role: 'Attributive',
                            subRole: 'relative clause',
                            children: [
                                {
                                    id: 'n20-t-subj-pro',
                                    role: 'Pronoun',
                                    text: { hanzi: '她', pinyin: 'tā', translation: 'she' }
                                },
                                {
                                    id: 'n20-t-subj-v',
                                    role: 'Head Verb',
                                    text: { hanzi: '写', pinyin: 'xiě', translation: 'write' }
                                },
                                {
                                    id: 'n20-t-subj-de',
                                    role: 'Particle',
                                    subRole: 'relativizer',
                                    text: { hanzi: '的', pinyin: 'de', translation: '(relative clause marker)' }
                                }
                            ]
                        },
                        {
                            id: 'n20-t-hn',
                            role: 'Head Noun',
                            text: { hanzi: '汉字', pinyin: 'hàn zì', translation: 'Chinese characters' }
                        }
                    ]
                },
                {
                    id: 'n20-c',
                    role: 'Comment',
                    subRole: 'comparison',
                    children: [
                        {
                            id: 'n20-c-pp',
                            role: 'Preposition',
                            subRole: 'comparison',
                            children: [
                                {
                                    id: 'n20-c-pp-prep',
                                    role: 'Preposition',
                                    text: { hanzi: '跟', pinyin: 'gēn', translation: 'compared with / as … as' }
                                },
                                {
                                    id: 'n20-c-pp-np',
                                    role: 'Noun Phrase',
                                    subRole: 'standard noun phrase',
                                    children: [
                                        {
                                            id: 'n20-c-pp-np-attr',
                                            role: 'Attributive',
                                            subRole: 'relative clause',
                                            children: [
                                                {
                                                    id: 'n20-c-pp-np-attr-n',
                                                    role: 'Noun',
                                                    text: { hanzi: '老师', pinyin: 'lǎo shī', translation: 'teacher' }
                                                },
                                                {
                                                    id: 'n20-c-pp-np-attr-v',
                                                    role: 'Head Verb',
                                                    text: { hanzi: '写', pinyin: 'xiě', translation: 'write' }
                                                },
                                                {
                                                    id: 'n20-c-pp-np-attr-de',
                                                    role: 'Particle',
                                                    subRole: 'relativizer',
                                                    text: { hanzi: '的', pinyin: 'de', translation: '(relative clause marker)' }
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'n20-c-eq',
                            role: 'Adjunct',
                            subRole: 'equality marker',
                            text: { hanzi: '一样', pinyin: 'yī yàng', translation: 'equally / the same' }
                        },
                        {
                            id: 'n20-c-adj',
                            role: 'Adjective',
                            text: { hanzi: '漂亮', pinyin: 'piāo liang', translation: 'beautiful' }
                        }
                    ]
                }
            ]
        }
    },
    {
        id: 's21',
        category: 'Comparatives (比较句)',
        chinese: '他跑得像风一样快。',
        pinyin: 'Tā pǎo de xiàng fēng yī yàng kuài.',
        translation: 'He runs as fast as the wind.',
        explanation: '**他** ("he") is the Topic. The verb **跑** ("run") is linked by **得** to a **degree complement** that describes how he runs. Inside that complement, **像风一样快** uses a simile: 像 ("like") + 风 ("the wind") + 一样 ("equally") + 快 ("fast"). English says "as fast as the wind." Unlike 跟...一样, which compares two real things, **像...一样** introduces a figurative or poetic reference: the wind, a tiger, a machine. The tree shows the simile nested inside the degree complement.',
        tree: {
            id: 'n21',
            role: 'Sentence',
            children: [
                {
                    id: 'n21-t',
                    role: 'Topic',
                    text: { hanzi: '他', pinyin: 'tā', translation: 'he' }
                },
                {
                    id: 'n21-c',
                    role: 'Comment',
                    subRole: 'comparison',
                    children: [
                        {
                            id: 'n21-vp',
                            role: 'Verb Phrase',
                            children: [
                                {
                                    id: 'n21-hv',
                                    role: 'Head Verb',
                                    text: { hanzi: '跑', pinyin: 'pǎo', translation: 'run' }
                                },
                                {
                                    id: 'n21-de',
                                    role: 'Particle',
                                    subRole: 'degree',
                                    text: { hanzi: '得', pinyin: 'de', translation: '(links verb to degree)' }
                                },
                                {
                                    id: 'n21-comp',
                                    role: 'Complement',
                                    subRole: 'degree',
                                    children: [
                                        {
                                            id: 'n21-comp-pp',
                                            role: 'Preposition',
                                            subRole: 'simile frame (像…)',
                                            children: [
                                                {
                                                    id: 'n21-comp-pp-prep',
                                                    role: 'Preposition',
                                                    text: { hanzi: '像', pinyin: 'xiàng', translation: 'like / as' }
                                                },
                                                {
                                                    id: 'n21-comp-pp-n',
                                                    role: 'Noun',
                                                    text: { hanzi: '风', pinyin: 'fēng', translation: 'wind' }
                                                }
                                            ]
                                        },
                                        {
                                            id: 'n21-comp-eq',
                                            role: 'Adjunct',
                                            subRole: 'equality marker',
                                            text: { hanzi: '一样', pinyin: 'yī yàng', translation: 'equally / the same' }
                                        },
                                        {
                                            id: 'n21-comp-adj',
                                            role: 'Adjective',
                                            text: { hanzi: '快', pinyin: 'kuài', translation: 'fast' }
                                        }
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
        id: 's69',
        category: 'Comparatives (比较句)',
        chinese: '知道的人比不上喜欢的人，喜欢的人比不上乐在其中的人。',
        pinyin: 'Zhī dào de rén bǐ bù shàng xǐ huān de rén, xǐ huān de rén bǐ bù shàng lè zài qí zhōng de rén.',
        translation: 'Those who merely know cannot compare to those who love it; those who love it cannot compare to those who delight in it.',
        explanation: 'A modern take on 知之者不如好之者 (from Confucius: "One who knows it is not as good as one who loves it"). The classical 者 particle becomes **的人** ("the person who..."), and the classical comparative 不如 becomes **比不上** ("cannot compare to"). The tree shows the 比 comparative used twice in parallel. Each clause follows the same pattern: [verb+的+人] + 比不上 + [verb+的+人]. The 的 particle turns verb phrases into noun phrases, working exactly like the classical 者.',
        tree: {
            id: 's69-root', role: 'Sentence', children: [
                { id: 's69-t', role: 'Topic', isDropped: true, impliedText: '规律' },
                { id: 's69-c', role: 'Comment', subRole: 'comparison', children: [
                    { id: 's69-c1', role: 'Verb Phrase', subRole: 'comparison', children: [
                        { id: 's69-s1', role: 'Subject', children: [
                            { id: 's69-zd', role: 'Attributive', text: { hanzi: '知道的', pinyin: 'zhī dào de', translation: 'who know' } },
                            { id: 's69-r1', role: 'Head Noun', text: { hanzi: '人', pinyin: 'rén', translation: 'people' } },
                        ]},
                        { id: 's69-bbs1', role: 'Head Verb', text: { hanzi: '比不上', pinyin: 'bǐ bù shàng', translation: 'cannot compare to' } },
                        { id: 's69-o1', role: 'Object', children: [
                            { id: 's69-xh', role: 'Attributive', text: { hanzi: '喜欢的', pinyin: 'xǐ huān de', translation: 'who love' } },
                            { id: 's69-r2', role: 'Head Noun', text: { hanzi: '人', pinyin: 'rén', translation: 'people' } },
                        ]},
                    ]},
                    { id: 's69-c2', role: 'Verb Phrase', subRole: 'comparison', children: [
                        { id: 's69-s2', role: 'Subject', children: [
                            { id: 's69-xh2', role: 'Attributive', text: { hanzi: '喜欢的', pinyin: 'xǐ huān de', translation: 'who love' } },
                            { id: 's69-r3', role: 'Head Noun', text: { hanzi: '人', pinyin: 'rén', translation: 'people' } },
                        ]},
                        { id: 's69-bbs2', role: 'Head Verb', text: { hanzi: '比不上', pinyin: 'bǐ bù shàng', translation: 'cannot compare to' } },
                        { id: 's69-o2', role: 'Object', children: [
                            { id: 's69-le', role: 'Attributive', text: { hanzi: '乐在其中的', pinyin: 'lè zài qí zhōng de', translation: 'who delight in it' } },
                            { id: 's69-r4', role: 'Head Noun', text: { hanzi: '人', pinyin: 'rén', translation: 'people' } },
                        ]},
                    ]},
                ]}
            ]
        }
    },
    {
        id: 's87',
        category: 'Comparatives (\u6bd4\u8f83\u53e5)',
        chinese: '好的时机不如好的地形，好的地形不如人心齐。',
        pinyin: 'Hǎo de shí jī bù rú hǎo de dì xíng, hǎo de dì xíng bù rú rén xīn qí.',
        translation: 'Favorable timing is not as good as advantageous terrain; advantageous terrain is not as good as unity among people.',
        explanation: 'A modern take on 天時不如地利，地利不如人和 (from Mencius: "Good timing is not as good as good terrain; good terrain is not as good as unity among people"). The classical four-character parallelism is preserved in modern form using **不如** ("not as good as"), one of the few classical comparative structures that survives directly into modern Mandarin. Each clause follows: Topic + 不如 + Object. Modern 的 is added to make descriptive phrases (好的时机, "good timing") where classical Chinese needed no marker. The final comparison uses **人心齐** ("people\'s hearts aligned") to modernize the classical 人和.',
        tree: {
            id: 's87-root', role: 'Sentence', children: [
                { id: 's87-t', role: 'Topic', isDropped: true, impliedText: '规律' },
                { id: 's87-c', role: 'Comment', subRole: 'comparison', children: [
                    { id: 's87-c1', role: 'Verb Phrase', subRole: 'comparison', children: [
                        { id: 's87-s1', role: 'Subject', children: [
                            { id: 's87-a1', role: 'Attributive', text: { hanzi: '好的', pinyin: 'hǎo de', translation: 'good' } },
                            { id: 's87-sj', role: 'Head Noun', text: { hanzi: '时机', pinyin: 'shí jī', translation: 'timing' } },
                        ]},
                        { id: 's87-br1', role: 'Head Verb', text: { hanzi: '不如', pinyin: 'bù rú', translation: 'not as good as' } },
                        { id: 's87-o1', role: 'Object', children: [
                            { id: 's87-a2', role: 'Attributive', text: { hanzi: '好的', pinyin: 'hǎo de', translation: 'good' } },
                            { id: 's87-dx', role: 'Head Noun', text: { hanzi: '地形', pinyin: 'dì xíng', translation: 'terrain' } },
                        ]},
                    ]},
                    { id: 's87-c2', role: 'Verb Phrase', subRole: 'comparison', children: [
                        { id: 's87-s2', role: 'Subject', children: [
                            { id: 's87-a3', role: 'Attributive', text: { hanzi: '好的', pinyin: 'hǎo de', translation: 'good' } },
                            { id: 's87-dx2', role: 'Head Noun', text: { hanzi: '地形', pinyin: 'dì xíng', translation: 'terrain' } },
                        ]},
                        { id: 's87-br2', role: 'Head Verb', text: { hanzi: '不如', pinyin: 'bù rú', translation: 'not as good as' } },
                        { id: 's87-o2', role: 'Object', text: { hanzi: '人心齐', pinyin: 'rén xīn qí', translation: 'unity among people' } },
                    ]},
                ]}
            ]
        }
    },
    {
        id: 's112',
        category: 'Comparatives (比较句)',
        chinese: '我没有他高。',
        pinyin: 'Wǒ méi yǒu tā gāo.',
        translation: 'I am not as tall as him.',
        explanation: '**我** ("I") is the Topic. The Comment uses the **没有** comparison frame, which is Mandarin\'s way of saying "A is not as [adjective] as B." The pattern is: A + 没有 + B + adjective. Here: I + 没有 + him + tall. This is the counterpart to the 比 comparison (which says "more than"). You cannot say 我不比他高 for this meaning; 没有 is the standard frame for "less than" or "not as much as." The tree shows 没有 linking the two people being compared, with the adjective 高 ("tall") as the quality being measured.',
        tree: {
            id: 's112-n',
            role: 'Sentence',
            children: [
                { id: 's112-t', role: 'Topic', subRole: 'item A', text: { hanzi: '我', pinyin: 'wǒ', translation: 'I' } },
                {
                    id: 's112-c',
                    role: 'Comment',
                    children: [
                        { id: 's112-hv', role: 'Head Verb', subRole: 'comparative verb', text: { hanzi: '没有', pinyin: 'méi yǒu', translation: 'not as (literally: not have)' } },
                        { id: 's112-obj', role: 'Object', subRole: 'item B', text: { hanzi: '他', pinyin: 'tā', translation: 'he' } },
                        { id: 's112-comp', role: 'Predicate', subRole: 'compared quality', text: { hanzi: '高', pinyin: 'gāo', translation: 'tall' } }
                    ]
                }
            ]
        }
    },
    {
        id: 's113',
        category: 'Comparatives (比较句)',
        chinese: '他比我大三岁。',
        pinyin: 'Tā bǐ wǒ dà sān suì.',
        translation: 'He is three years older than me.',
        explanation: '**他** ("he") is the Topic. The Comment uses the **比** comparison with a specific number: **大三岁** ("older by three years"). The pattern is: Topic + 比 + reference + adjective + quantity. Here: he + compared to me + older + by three years. The number slips in right after the adjective, specifying the exact gap. This is how Mandarin expresses precise differences: 高两厘米 ("taller by two centimeters"), 贵十块钱 ("more expensive by ten yuan"), 早一个小时 ("earlier by one hour"). The quantity always follows the adjective, never precedes it.',
        tree: {
            id: 's113-n',
            role: 'Sentence',
            children: [
                { id: 's113-t', role: 'Topic', subRole: 'item A', text: { hanzi: '他', pinyin: 'tā', translation: 'he' } },
                {
                    id: 's113-c',
                    role: 'Comment',
                    children: [
                        {
                            id: 's113-comp-phrase',
                            role: 'Adjunct',
                            subRole: 'comparison',
                            children: [
                                { id: 's113-bi', role: 'Preposition', text: { hanzi: '比', pinyin: 'bǐ', translation: 'compared to' } },
                                { id: 's113-bi-obj', role: 'Object', subRole: 'item B', text: { hanzi: '我', pinyin: 'wǒ', translation: 'me' } }
                            ]
                        },
                        { id: 's113-pred', role: 'Predicate', subRole: 'quality', text: { hanzi: '大', pinyin: 'dà', translation: 'old(er) / big' } },
                        {
                            id: 's113-qty',
                            role: 'Complement',
                            subRole: 'quantity disparity',
                            children: [
                                { id: 's113-qty-num', role: 'Attributive', text: { hanzi: '三', pinyin: 'sān', translation: 'three' } },
                                { id: 's113-qty-mw', role: 'Measure Word', text: { hanzi: '岁', pinyin: 'suì', translation: 'years of age' } }
                            ]
                        }
                    ]
                }
            ]
        }
    }
];
