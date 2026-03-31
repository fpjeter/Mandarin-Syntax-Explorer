import type { SentenceData } from '../../types/grammar';

export const directionalComplements: SentenceData[] = [
    {
        id: 's38',
        category: 'Directional Complements (趋向补语)',
        chinese: '他走进来了。',
        pinyin: 'Tā zǒu jìn lái le.',
        translation: 'He walked in.',
        explanation: '**他** ("he") is the Topic. The Comment\'s verb **走** (walk) is followed by a **compound directional complement**: **进** (enter) + **来** (come). Together, 进来 means entering toward the speaker\'s location. The three-part structure (main verb + direction morpheme + **来/去**) is the full directional complement frame. **来** signals movement toward the speaker; **去** signals movement away. So 走**出去** would mean "walk out (away)." These complements answer the question: *which direction did the action take?* The **了** confirms the action is complete.',
        tree: {
            id: 'n38',
            role: 'Sentence',
            children: [
                {
                    id: 'n38-t',
                    role: 'Topic',
                    text: { hanzi: '他', pinyin: 'tā', translation: 'he' },
                },
                {
                    id: 'n38-c',
                    role: 'Comment',
                    children: [
                        {
                            id: 'n38-vp',
                            role: 'Verb Phrase',
                            children: [
                                {
                                    id: 'n38-hv',
                                    role: 'Head Verb',
                                    text: { hanzi: '走', pinyin: 'zǒu', translation: 'walk' },
                                },
                                {
                                    id: 'n38-comp',
                                    role: 'Complement',
                                    subRole: 'directional compound (V + dir + 来)',
                                    children: [
                                        {
                                            id: 'n38-comp-dir',
                                            role: 'Complement',
                                            subRole: 'direction morpheme (enter)',
                                            text: { hanzi: '进', pinyin: 'jìn', translation: 'enter / in' },
                                        },
                                        {
                                            id: 'n38-comp-lai',
                                            role: 'Complement',
                                            subRole: 'orientation: toward speaker',
                                            text: { hanzi: '来', pinyin: 'lái', translation: 'come (toward speaker)' },
                                        },
                                    ],
                                },
                                {
                                    id: 'n38-le',
                                    role: 'Particle',
                                    subRole: 'completion',
                                    text: { hanzi: '了', pinyin: 'le', translation: '(done)' },
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 's39',
        category: 'Directional Complements (趋向补语)',
        chinese: '她把书拿出去了。',
        pinyin: 'Tā bǎ shū ná chū qù le.',
        translation: 'She took the book out (and away).',
        explanation: '**她** ("she") is the Topic. This sentence stacks two constructions: the BA front-object pattern and a directional complement. **把书** spotlights the book as the affected object. Then **拿** ("take/carry") is followed by the directional complement **出去**: **出** ("exit/out") + **去** ("go"). The **去** marks movement *away from the speaker*. Contrast with 拿进**来** ("carry in, toward speaker"). When BA is combined with a directional complement, the structure is: 把 + [object] + [verb] + [direction] + 来/去. The object slots before the verb; the direction slots after.',
        tree: {
            id: 'n39',
            role: 'Sentence',
            children: [
                {
                    id: 'n39-t',
                    role: 'Topic',
                    text: { hanzi: '她', pinyin: 'tā', translation: 'she' },
                },
                {
                    id: 'n39-c',
                    role: 'Comment',
                    children: [
                        {
                            id: 'n39-ba',
                            role: 'Preposition',
                            subRole: 'ba-construction',
                            children: [
                                {
                                    id: 'n39-ba-prep',
                                    role: 'Preposition',
                                    text: { hanzi: '把', pinyin: 'bǎ', translation: '(object fronting)' },
                                },
                                {
                                    id: 'n39-ba-obj',
                                    role: 'Object',
                                    text: { hanzi: '书', pinyin: 'shū', translation: 'book' },
                                },
                            ],
                        },
                        {
                            id: 'n39-vp',
                            role: 'Verb Phrase',
                            children: [
                                {
                                    id: 'n39-hv',
                                    role: 'Head Verb',
                                    text: { hanzi: '拿', pinyin: 'ná', translation: 'take / carry' },
                                },
                                {
                                    id: 'n39-comp',
                                    role: 'Complement',
                                    subRole: 'directional compound (V + dir + 去)',
                                    children: [
                                        {
                                            id: 'n39-comp-dir',
                                            role: 'Complement',
                                            subRole: 'direction morpheme (exit)',
                                            text: { hanzi: '出', pinyin: 'chū', translation: 'exit / out' },
                                        },
                                        {
                                            id: 'n39-comp-qu',
                                            role: 'Complement',
                                            subRole: 'orientation: away from speaker',
                                            text: { hanzi: '去', pinyin: 'qù', translation: 'go (away from speaker)' },
                                        },
                                    ],
                                },
                                {
                                    id: 'n39-le',
                                    role: 'Particle',
                                    subRole: 'completion',
                                    text: { hanzi: '了', pinyin: 'le', translation: '(done)' },
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 's42',
        category: 'Directional Complements (趋向补语)',
        chinese: '她跑上楼去了。',
        pinyin: 'Tā pǎo shàng lóu qù le.',
        translation: 'She ran upstairs (away from the speaker).',
        explanation: '**她** ("she") is the Topic. The directional complement here is **上去**: 上 ("up") + 去 ("away"). But notice something: the object **楼** ("stairs/floor") slots *between* 上 and 去. This is a key rule: when a directional complement has an object and uses a compound form (direction + 来/去), the object inserts between them: V + direction + *object* + 来/去. Compare s38 where there was no object: 走进来 ("no insertion"). The **上** signals upward movement; the **去** confirms it was *away* from the speaker\'s vantage.',
        tree: {
            id: 'n42',
            role: 'Sentence',
            children: [
                {
                    id: 'n42-t',
                    role: 'Topic',
                    text: { hanzi: '她', pinyin: 'tā', translation: 'she' },
                },
                {
                    id: 'n42-c',
                    role: 'Comment',
                    children: [
                        {
                            id: 'n42-vp',
                            role: 'Verb Phrase',
                            children: [
                                {
                                    id: 'n42-hv',
                                    role: 'Head Verb',
                                    text: { hanzi: '跑', pinyin: 'pǎo', translation: 'run' },
                                },
                                {
                                    id: 'n42-comp',
                                    role: 'Complement',
                                    subRole: 'split directional',
                                    children: [
                                        {
                                            id: 'n42-comp-dir',
                                            role: 'Complement',
                                            subRole: 'direction morpheme (upward)',
                                            text: { hanzi: '上', pinyin: 'shàng', translation: 'up' },
                                        },
                                        {
                                            id: 'n42-obj',
                                            role: 'Object',
                                            subRole: 'inserted between direction and 去',
                                            text: { hanzi: '楼', pinyin: 'lóu', translation: 'stairs / floor' },
                                        },
                                        {
                                            id: 'n42-comp-qu',
                                            role: 'Complement',
                                            subRole: 'orientation: away from speaker',
                                            text: { hanzi: '去', pinyin: 'qù', translation: 'go (away)' },
                                        },
                                    ]
                                },
                                {
                                    id: 'n42-le',
                                    role: 'Particle',
                                    subRole: 'completion',
                                    text: { hanzi: '了', pinyin: 'le', translation: '(done)' },
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 's43',
        category: 'Directional Complements (趋向补语)',
        chinese: '他从树上摘下来一个苹果。',
        pinyin: 'Tā cóng shù shàng zhāi xià lái yī gè píng guǒ.',
        translation: 'He plucked an apple down from the tree.',
        explanation: '**他** ("he") is the Topic. The location phrase **从树上** ("from the tree") sets the scene. The verb **摘** ("pluck/pick") is followed by the directional compound **下来**: 下 ("down") + 来 ("toward speaker"). After 下来 comes the indefinite object **一个苹果** ("one apple"). When the object is indefinite (not "the apple" but "an apple"), it typically slots *after* the full directional compound, not inside it. Compare with s42 where a definite place word (楼) slots inside. This difference (definite/place words inside vs indefinite nouns after) is one of the trickier positional rules for directional complements.',
        tree: {
            id: 'n43',
            role: 'Sentence',
            children: [
                {
                    id: 'n43-t',
                    role: 'Topic',
                    text: { hanzi: '他', pinyin: 'tā', translation: 'he' },
                },
                {
                    id: 'n43-c',
                    role: 'Comment',
                    children: [
                        {
                            id: 'n43-lp',
                            role: 'Adjunct',
                            subRole: 'source location',
                            children: [
                                {
                                    id: 'n43-lp-prep',
                                    role: 'Preposition',
                                    text: { hanzi: '从', pinyin: 'cóng', translation: 'from' },
                                },
                                {
                                    id: 'n43-lp-n',
                                    role: 'Noun',
                                    text: { hanzi: '树', pinyin: 'shù', translation: 'tree' },
                                },
                                {
                                    id: 'n43-lp-loc',
                                    role: 'Particle',
                                    subRole: 'localizer',
                                    text: { hanzi: '上', pinyin: 'shàng', translation: 'on top / above' },
                                },
                            ],
                        },
                        {
                            id: 'n43-vp',
                            role: 'Verb Phrase',
                            children: [
                                {
                                    id: 'n43-hv',
                                    role: 'Head Verb',
                                    text: { hanzi: '摘', pinyin: 'zhāi', translation: 'pluck / pick' },
                                },
                                {
                                    id: 'n43-comp',
                                    role: 'Complement',
                                    subRole: 'directional compound (downward, toward speaker)',
                                    children: [
                                        {
                                            id: 'n43-comp-dir',
                                            role: 'Complement',
                                            subRole: 'direction morpheme (downward)',
                                            text: { hanzi: '下', pinyin: 'xià', translation: 'down' },
                                        },
                                        {
                                            id: 'n43-comp-lai',
                                            role: 'Complement',
                                            subRole: 'orientation: toward speaker',
                                            text: { hanzi: '来', pinyin: 'lái', translation: 'come (toward speaker)' },
                                        },
                                    ],
                                },
                                {
                                    id: 'n43-obj',
                                    role: 'Object',
                                    subRole: 'indefinite object: follows full complement',
                                    children: [
                                        {
                                            id: 'n43-obj-attr',
                                            role: 'Attributive',
                                            text: { hanzi: '一个', pinyin: 'yī gè', translation: 'one (measure)' },
                                        },
                                        {
                                            id: 'n43-obj-hn',
                                            role: 'Head Noun',
                                            text: { hanzi: '苹果', pinyin: 'píng guǒ', translation: 'apple' },
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    }
];
