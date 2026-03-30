import type { SentenceData } from '../../types/grammar';

export const doubleTopic: SentenceData[] = [
    {
        id: 's25',
        category: 'Double Topic (双主题)',
        chinese: '那家饭馆，菜很好吃，价钱也不贵。',
        pinyin: 'Nà jiā fàn guǎn, cài hěn hǎo chī, jià qián yě bù guì.',
        translation: 'That restaurant, the food is delicious and the price is not expensive either.',
        explanation: 'This sentence has **two layers of topic**. The outer Topic, **那家饭馆** ("that restaurant"), sets the scene for the whole sentence. Then, inside the Comment, Mandarin doesn\'t switch to English-style subject+verb sentences. Instead it uses *two mini-topics* in sequence: **菜** (food) and **价钱** (price). Each one is followed by its own comment. This "whole–part" structure, where you name a container and then make statements about its parts, is extremely common and natural in Mandarin. The tree shows the nesting: Sentence → [outer Topic | Comment → [inner Topic–Comment 1 | inner Topic–Comment 2]].',
        tree: {
            id: 'n25',
            role: 'Sentence',
            children: [
                {
                    id: 'n25-t',
                    role: 'Topic',
                    subRole: 'outer topic (whole)',
                    children: [
                        {
                            id: 'n25-t-attr',
                            role: 'Attributive',
                            text: { hanzi: '那家', pinyin: 'nà jiā', translation: 'that (measure)' }
                        },
                        {
                            id: 'n25-t-hn',
                            role: 'Head Noun',
                            text: { hanzi: '饭馆', pinyin: 'fàn guǎn', translation: 'restaurant' }
                        }
                    ]
                },
                {
                    id: 'n25-c',
                    role: 'Comment',
                    subRole: 'two embedded topic–comment clauses',
                    children: [
                        {
                            id: 'n25-c-s1',
                            role: 'Topic',
                            subRole: 'inner topic 1 (part)',
                            text: { hanzi: '菜', pinyin: 'cài', translation: 'food/dishes' }
                        },
                        {
                            id: 'n25-c-p1',
                            role: 'Comment',
                            subRole: 'inner comment 1',
                            children: [
                                {
                                    id: 'n25-c-p1-adv',
                                    role: 'Adjunct',
                                    text: { hanzi: '很', pinyin: 'hěn', translation: 'very' }
                                },
                                {
                                    id: 'n25-c-p1-adj',
                                    role: 'Adjective',
                                    text: { hanzi: '好吃', pinyin: 'hǎo chī', translation: 'delicious' }
                                }
                            ]
                        },
                        {
                            id: 'n25-c-s2',
                            role: 'Topic',
                            subRole: 'inner topic 2 (part)',
                            text: { hanzi: '价钱', pinyin: 'jià qián', translation: 'price' }
                        },
                        {
                            id: 'n25-c-p2',
                            role: 'Comment',
                            subRole: 'inner comment 2',
                            children: [
                                {
                                    id: 'n25-c-p2-adv1',
                                    role: 'Adjunct',
                                    text: { hanzi: '也', pinyin: 'yě', translation: 'also' }
                                },
                                {
                                    id: 'n25-c-p2-adv2',
                                    role: 'Adjunct',
                                    text: { hanzi: '不', pinyin: 'bù', translation: 'not' }
                                },
                                {
                                    id: 'n25-c-p2-adj',
                                    role: 'Adjective',
                                    text: { hanzi: '贵', pinyin: 'guì', translation: 'expensive' }
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    {
        id: 's26',
        category: 'Double Topic (双主题)',
        chinese: '大象，鼻子长，耳朵大。',
        pinyin: 'Dà xiàng, bí zi cháng, ěr duo dà.',
        translation: 'Elephants, their trunk is long and their ears are big.',
        explanation: 'The classic **whole–part double topic** pattern. **大象** ("elephant") is the outer Topic; it frames everything. Inside the Comment, the sentence doesn\'t give the elephant a verb straightaway. Instead it picks two parts of the elephant, **鼻子** (trunk) and **耳朵** (ears), and uses each as an inner Topic, followed by a simple adjective Comment. This is a very common approach in Mandarin: name the big thing first, then describe its parts one by one. No verb like 是 (is) is needed; Mandarin adjectives can directly act as descriptions on their own.',
        tree: {
            id: 'n26',
            role: 'Sentence',
            children: [
                {
                    id: 'n26-t',
                    role: 'Topic',
                    subRole: 'outer topic (whole)',
                    text: { hanzi: '大象', pinyin: 'dà xiàng', translation: 'elephant' }
                },
                {
                    id: 'n26-c',
                    role: 'Comment',
                    subRole: 'two embedded topic–comment clauses',
                    children: [
                        {
                            id: 'n26-c-t1',
                            role: 'Topic',
                            subRole: 'inner topic 1 (body part)',
                            text: { hanzi: '鼻子', pinyin: 'bí zi', translation: 'trunk/nose' }
                        },
                        {
                            id: 'n26-c-p1',
                            role: 'Comment',
                            subRole: 'inner comment 1: adjectival predicate',
                            children: [
                                {
                                    id: 'n26-c-p1-adj',
                                    role: 'Adjective',
                                    text: { hanzi: '长', pinyin: 'cháng', translation: 'long' }
                                }
                            ]
                        },
                        {
                            id: 'n26-c-t2',
                            role: 'Topic',
                            subRole: 'inner topic 2 (body part)',
                            text: { hanzi: '耳朵', pinyin: 'ěr duo', translation: 'ears' }
                        },
                        {
                            id: 'n26-c-p2',
                            role: 'Comment',
                            subRole: 'inner comment 2: adjectival predicate',
                            children: [
                                {
                                    id: 'n26-c-p2-adj',
                                    role: 'Adjective',
                                    text: { hanzi: '大', pinyin: 'dà', translation: 'big' }
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    {
        id: 's27',
        category: 'Double Topic (双主题)',
        chinese: '这件事，我觉得你的想法很有道理。',
        pinyin: 'Zhè jiàn shì, wǒ jué de nǐ de xiǎng fǎ hěn yǒu dào lǐ.',
        translation: 'As for this matter, I think your idea makes a lot of sense.',
        explanation: 'This sentence has **three layers of embedding**. The outermost Topic, **这件事** ("this matter"), establishes the discourse frame. Then the Comment is itself a full clause: **我觉得** ("I think"), where **我** ("I") is the subject and **觉得** is the verb. But the object of 觉得 is *yet another* clause: **你的想法很有道理** ("your idea is very reasonable"), and even inside that clause, **你的想法** ("your idea") acts as an inner topic before the comment **很有道理**. This chain of embedded clauses is perfectly natural in spoken Mandarin and is far more transparent in a tree than in a linear translation.',
        tree: {
            id: 'n27',
            role: 'Sentence',
            children: [
                {
                    id: 'n27-t',
                    role: 'Topic',
                    subRole: 'outer discourse frame',
                    children: [
                        {
                            id: 'n27-t-attr',
                            role: 'Attributive',
                            text: { hanzi: '这件', pinyin: 'zhè jiàn', translation: 'this (measure)' }
                        },
                        {
                            id: 'n27-t-hn',
                            role: 'Head Noun',
                            text: { hanzi: '事', pinyin: 'shì', translation: 'matter/thing' }
                        }
                    ]
                },
                {
                    id: 'n27-c',
                    role: 'Comment',
                    subRole: 'opinion clause',
                    children: [
                        {
                            id: 'n27-c-s',
                            role: 'Subject',
                            text: { hanzi: '我', pinyin: 'wǒ', translation: 'I' }
                        },
                        {
                            id: 'n27-c-p',
                            role: 'Predicate',
                            children: [
                                {
                                    id: 'n27-c-p-vp',
                                    role: 'Verb Phrase',
                                    children: [
                                        {
                                            id: 'n27-c-p-vp-hv',
                                            role: 'Head Verb',
                                            text: { hanzi: '觉得', pinyin: 'jué de', translation: 'think/feel' }
                                        },
                                        {
                                            id: 'n27-c-p-vp-obj',
                                            role: 'Object',
                                            subRole: 'embedded topic–comment clause',
                                            children: [
                                                {
                                                    id: 'n27-c-p-vp-obj-t',
                                                    role: 'Topic',
                                                    subRole: 'inner topic',
                                                    children: [
                                                        {
                                                            id: 'n27-c-p-vp-obj-t-attr',
                                                            role: 'Attributive',
                                                            text: { hanzi: '你的', pinyin: 'nǐ de', translation: 'your' }
                                                        },
                                                        {
                                                            id: 'n27-c-p-vp-obj-t-hn',
                                                            role: 'Head Noun',
                                                            text: { hanzi: '想法', pinyin: 'xiǎng fǎ', translation: 'idea' }
                                                        }
                                                    ]
                                                },
                                                {
                                                    id: 'n27-c-p-vp-obj-c',
                                                    role: 'Comment',
                                                    subRole: 'inner comment',
                                                    children: [
                                                        {
                                                            id: 'n27-c-p-vp-obj-c-adv',
                                                            role: 'Adjunct',
                                                            text: { hanzi: '很', pinyin: 'hěn', translation: 'very' }
                                                        },
                                                        {
                                                            id: 'n27-c-p-vp-obj-c-adj',
                                                            role: 'Adjective',
                                                            text: { hanzi: '有道理', pinyin: 'yǒu dào lǐ', translation: 'make sense / reasonable' }
                                                        }
                                                    ]
                                                }
                                            ]
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
        id: 's92',
        category: 'Double Topic (\u53cc\u4e3b\u9898)',
        chinese: '一个人犯的错，跟他的性格是分不开的。',
        pinyin: 'Yí gè rén fàn de cuò, gēn tā de xìng gé shì fēn bù kāi de.',
        translation: 'The mistakes a person makes are inseparable from their character.',
        explanation: 'This modernizes the classical 人之過也各於其黨. Modern Mandarin uses a double Topic structure to convey that faults and character are linked. *Grammatically,* the outer Topic is a descriptive noun phrase: 一个人犯的错 (\"the mistakes a person makes\"). The inner Comment uses 跟...是分不开的 (\"with...are inseparable\"). The potential complement 分不开 (分 + 不 + 开, \"separate + cannot + apart\") is a negative potential form expressing inherent inability to separate the two.',
        tree: {
            id: 's92-root', role: 'Sentence', children: [
                { id: 's92-t', role: 'Topic', children: [
                    { id: 's92-attr', role: 'Attributive', text: { hanzi: '一个人犯的', pinyin: 'yí gè rén fàn de', translation: 'that a person commits' } },
                    { id: 's92-cuo', role: 'Head Noun', text: { hanzi: '错', pinyin: 'cuò', translation: 'mistakes' } },
                ]},
                { id: 's92-c', role: 'Comment', children: [
                    { id: 's92-gen', role: 'Adjunct', subRole: 'comitative', children: [
                        { id: 's92-gen-p', role: 'Preposition', text: { hanzi: '跟', pinyin: 'gēn', translation: 'with' } },
                        { id: 's92-xg', role: 'Object', children: [
                            { id: 's92-ta', role: 'Attributive', text: { hanzi: '他的', pinyin: 'tā de', translation: 'their' } },
                            { id: 's92-xg-n', role: 'Head Noun', text: { hanzi: '性格', pinyin: 'xìng gé', translation: 'character' } },
                        ]},
                    ]},
                    { id: 's92-shi', role: 'Copula', text: { hanzi: '是', pinyin: 'shì', translation: 'is' } },
                    { id: 's92-fbk', role: 'Head Verb', subRole: 'potential complement', text: { hanzi: '分不开', pinyin: 'fēn bù kāi', translation: 'inseparable' } },
                    { id: 's92-de', role: 'Particle', text: { hanzi: '的', pinyin: 'de', translation: '(nominalizer)' } },
                ]},
            ]
        }
    }
];
