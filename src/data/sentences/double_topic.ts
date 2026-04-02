import type { SentenceData } from '../../types/grammar';

export const doubleTopic: SentenceData[] = [
    {
        id: 's25',
        category: 'Double Topic (双主题)',
        chinese: '那家饭馆，菜很好吃，价钱也不贵。',
        pinyin: 'Nà jiā fàn guǎn, cài hěn hǎo chī, jià qián yě bù guì.',
        translation: 'That restaurant, the food is delicious and the price is not expensive either.',
        explanation: 'This sentence has **two layers of Topic**. The outer Topic, **这道菜** ("this dish"), sets the general frame: "as for this dish..." Then inside the Comment, a second Topic appears: **味道** ("the flavor"). Only after both Topics are in place does the actual Comment arrive: **好极了** ("is absolutely wonderful"). English would merge this into one sentence ("This dish tastes wonderful"), but Mandarin separates the frame from the focus. The tree shows this nesting clearly: the outer Topic contains the inner Topic, which contains the final Comment. This double-Topic pattern is very natural in spoken Mandarin.',
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
        explanation: 'The classic whole-part double Topic pattern. **大象** ("elephant") is the outer Topic, setting the frame: "as for elephants..." Inside the Comment, a second Topic narrows the focus to a specific part: **鼻子** ("trunk/nose"). Only then comes the actual description: **很长** ("is very long"). English would say "Elephants have long trunks" or "An elephant\'s trunk is very long." Mandarin first states the whole, then zooms into the part, then comments on it. The tree nests the inner Topic inside the outer one\'s Comment.',
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
        explanation: 'This sentence has **three layers of nesting**. The outermost Topic **他** ("he") sets the person. Inside the Comment, a second Topic narrows to **中文** ("Chinese language"). Inside that Comment, the actual evaluation arrives: **说得很好** ("speaks very well"), which itself uses a degree complement (得 + 很好). The tree shows each layer: he > Chinese > speaks well. English compresses this into "He speaks Chinese very well," with normal SVO order. But Mandarin separates each frame, stacking them from general to specific.',
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
        explanation: 'A modern take on 人之过也，各于其党 (from Confucius: "A person\'s faults belong to their category"). The classical 之 (possessive) and 也 (assertive) become modern 的 and 是. The tree shows a double Topic structure: the outer Topic **一个人** ("a person") sets the frame, and an inner Topic **他的错误** ("his mistakes") narrows the focus. The Comment then delivers the judgment using 是...的: **是跟他的性格有关的** ("are related to his character"). This nesting is how Mandarin builds complex judgments: set the big frame, narrow to the specific, then comment.',
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
