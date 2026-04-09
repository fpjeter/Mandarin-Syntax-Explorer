import type { SentenceData } from '../../types/grammar';

export const doubleTopic: SentenceData[] = [
    {
        id: 's25',
        category: 'Double Topic (双主题)',
        chinese: '那家饭馆，菜很好吃，价钱也不贵。',
        pinyin: 'Nà jiā fàn guǎn, cài hěn hǎo chī, jià qián yě bù guì.',
        translation: 'That restaurant, the food is delicious and the price is not expensive either.',
        explanation: 'This sentence has **two layers of Topic**. The outer Topic, **那家饭馆** ("that restaurant"), sets the general frame: "as for that restaurant..." Inside the Comment, two parallel sub-comments share this frame: **菜很好吃** ("the food is delicious") and **价钱也不贵** ("the price is also not expensive"). The **也** ("also") links the two points. The tree shows the restaurant as the outer Topic, with the two parallel evaluations branching from the Comment.',
        tree: {
            id: 'n25',
            role: 'Sentence',
            children: [
                {
                    id: 'n25-t',
                    role: 'Topic', semanticRole: 'Agent',
                    subRole: 'outer topic',
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
                            role: 'Topic', semanticRole: 'Agent',
                            subRole: 'inner topic',
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
                            role: 'Topic', semanticRole: 'Agent',
                            subRole: 'inner topic',
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
        explanation: 'The classic whole-part double Topic pattern. **大象** ("elephant") is the outer Topic, setting the frame: "as for elephants..." Inside, two body parts serve as inner Topics with their own Comments: **鼻子长** ("trunk is long") and **耳朵大** ("ears are big"). No verb "is" is needed; the adjectives **长** and **大** serve directly as predicates. The tree shows the elephant as the outer frame, with the two body-part descriptions as parallel branches underneath.',
        tree: {
            id: 'n26',
            role: 'Sentence',
            children: [
                {
                    id: 'n26-t',
                    role: 'Topic', semanticRole: 'Agent',
                    subRole: 'outer topic',
                    text: { hanzi: '大象', pinyin: 'dà xiàng', translation: 'elephant' }
                },
                {
                    id: 'n26-c',
                    role: 'Comment',
                    subRole: 'two embedded topic–comment clauses',
                    children: [
                        {
                            id: 'n26-c-t1',
                            role: 'Topic', semanticRole: 'Agent',
                            subRole: 'inner topic',
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
                            role: 'Topic', semanticRole: 'Experiencer',
                            subRole: 'inner topic',
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
        explanation: 'This sentence has **three layers of nesting**. The outermost Topic, **这件事** ("this matter"), sets the frame. Inside the Comment, **我** ("I") appears, and then **觉得** ("think/feel") opens an embedded clause: **你的想法很有道理** ("your idea makes a lot of sense"). The tree shows 这件事 as the outer Topic, with 我觉得 introducing the inner clause as an Embedded Clause, and 你的想法 as yet another Topic inside that clause.',
        tree: {
            id: 'n27',
            role: 'Sentence',
            children: [
                {
                    id: 'n27-t',
                    role: 'Topic', semanticRole: 'Experiencer',
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
                                                    role: 'Topic', semanticRole: 'Theme',
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
        explanation: 'A modern take on 人之过也，各于其党 (from Confucius). The Topic is a complex noun phrase: **一个人犯的错** ("the mistakes a person makes"), where **犯的** is a relative clause modifying **错** ("mistakes"). The Comment uses a **跟** comparison and a negative potential complement: **跟他的性格是分不开的** ("are inseparable from his character"). The **分不开** is a potential complement: the result of separating *cannot* be achieved. The tree shows the relative clause inside the Topic and the comparison frame inside the Comment.',
        tree: {
            id: 's92-root', role: 'Sentence', children: [
                { id: 's92-t', role: 'Topic', semanticRole: 'Theme', children: [
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
                    { id: 's92-fbk', role: 'Head Verb', subRole: 'potential', text: { hanzi: '分不开', pinyin: 'fēn bù kāi', translation: 'inseparable' } },
                    { id: 's92-de', role: 'Particle', text: { hanzi: '的', pinyin: 'de', translation: '(nominalizer)' } },
                ]},
            ]
        }
    }
];
