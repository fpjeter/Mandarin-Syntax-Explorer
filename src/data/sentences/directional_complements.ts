import type { SentenceData } from '../../types/grammar';

export const directionalComplements: SentenceData[] = [
    {
        id: 's38',
        category: 'Directional Complements (趋向补语)',
        chinese: '他走进来了。',
        pinyin: 'Tā zǒu jìn lái le.',
        translation: 'He walked in.',
        explanation: '**他** ("he") is the Topic. The verb **走** ("walk") pairs with the directional complement **出来** ("out toward the speaker") to form **走出来** ("walk out"). The 出 ("out") indicates direction of movement; the 来 ("toward the speaker") adds perspective. Together they tell you someone walked out of somewhere and toward the speaker. This two-part directional complement (direction + perspective) is one of the most common patterns in Mandarin. Other examples: 走进去 ("walk in, away from speaker"), 跑上来 ("run up, toward speaker").',
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
        explanation: '**她** ("she") is the Topic. This sentence stacks two constructions: a location phrase and a directional complement. First, **从楼上** ("from upstairs") sets the starting point. Then the verb **跑** ("run") combines with **下来** ("down toward the speaker") to form **跑下来** ("run downstairs"). The 从 ("from") marks the origin, and the directional complement marks both the direction (下, "down") and the perspective (来, "toward speaker"). The tree shows the location phrase as an Adjunct before the verb, with the directional complement after it.',
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
        explanation: '**她** ("she") is the Topic. The directional complement here is **回来** ("return, come back"): the verb **跑** ("run") + **回来** ("back toward the speaker") = "ran back." But notice the added twist: the object **书** ("book") is inserted *between* the direction and the perspective: 拿回书来. This is a special feature of directional complements. When there is an object, it can be placed between the two parts of the complement. The tree shows this split clearly, with the object nestled inside the directional structure.',
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
        explanation: '**他** ("he") is the Topic. The location phrase **从树上** ("from the tree") sets the starting point. The verb **跳** ("jump") combines with the directional complement **下来** ("down toward the speaker") to form **跳下来** ("jump down"). This is a straightforward direction + perspective complement. The tree shows 从树上 as an Adjunct (setting background), followed by the verb with its directional result. Compare: 跳上去 ("jump up, away from speaker"), 跳进去 ("jump in, away from speaker"). The direction word and perspective word each add a layer of meaning.',
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
    },
    {
        id: 's106',
        category: 'Directional Complements (趋向补语)',
        chinese: '我突然想起来了。',
        pinyin: 'Wǒ tū rán xiǎng qǐ lái le.',
        translation: 'I suddenly remembered.',
        explanation: '**我** ("I") is the Topic. The adverb **突然** ("suddenly") sets the timing. The verb **想** ("think") combines with the directional complement **起来** ("up, come out") to form **想起来** ("recall, remember"). But nobody is physically moving upward here. The directional complement has shifted from a literal physical direction to a figurative meaning: a memory "rises up" into consciousness. This metaphorical use of directional complements is extremely common: 看出来 ("figure out," literally "see-out"), 坚持下去 ("keep going," literally "persist-down-go"), 醒过来 ("wake up," literally "awake-cross-come"). The **了** marks the moment of remembering as completed.',
        tree: {
            id: 's106-n',
            role: 'Sentence',
            children: [
                { id: 's106-t', role: 'Topic', text: { hanzi: '我', pinyin: 'wǒ', translation: 'I' } },
                {
                    id: 's106-c',
                    role: 'Comment',
                    children: [
                        { id: 's106-adv', role: 'Adjunct', text: { hanzi: '突然', pinyin: 'tū rán', translation: 'suddenly' } },
                        { id: 's106-hv', role: 'Head Verb', text: { hanzi: '想', pinyin: 'xiǎng', translation: 'think' } },
                        {
                            id: 's106-comp',
                            role: 'Complement',
                            subRole: 'figurative directional',
                            children: [
                                { id: 's106-comp-dir', role: 'Particle', subRole: 'direction', text: { hanzi: '起', pinyin: 'qǐ', translation: 'rise' } },
                                { id: 's106-comp-pers', role: 'Particle', subRole: 'perspective', text: { hanzi: '来', pinyin: 'lái', translation: 'come' } }
                            ]
                        },
                        { id: 's106-le', role: 'Particle', subRole: 'completion', text: { hanzi: '了', pinyin: 'le', translation: '(done)' } }
                    ]
                }
            ]
        }
    },
    {
        id: 's107',
        category: 'Directional Complements (趋向补语)',
        chinese: '你要坚持下去。',
        pinyin: 'Nǐ yào jiān chí xià qù.',
        translation: 'You need to keep going.',
        explanation: '**你** ("you") is the Topic. The Comment uses **要** ("need to, should") followed by **坚持** ("persist, hold firm") and the directional complement **下去** ("down-go," meaning "onward, continuing"). Nobody is physically going downward. The complement 下去 has shifted to an abstract meaning: keep something going into the future. This is one of the most common figurative directionals: 说下去 ("keep talking"), 活下去 ("keep living"), 学下去 ("keep studying"). The direction word 下 ("down") maps to the idea of extending forward through time, and 去 ("go, away from speaker") reinforces that the action stretches into the future.',
        tree: {
            id: 's107-n',
            role: 'Sentence',
            children: [
                { id: 's107-t', role: 'Topic', text: { hanzi: '你', pinyin: 'nǐ', translation: 'you' } },
                {
                    id: 's107-c',
                    role: 'Comment',
                    children: [
                        { id: 's107-mod', role: 'Adjunct', subRole: 'modal auxiliary', text: { hanzi: '要', pinyin: 'yào', translation: 'need to' } },
                        { id: 's107-hv', role: 'Head Verb', text: { hanzi: '坚持', pinyin: 'jiān chí', translation: 'persist' } },
                        {
                            id: 's107-comp',
                            role: 'Complement',
                            subRole: 'figurative directional (continuation)',
                            children: [
                                { id: 's107-comp-dir', role: 'Particle', subRole: 'direction', text: { hanzi: '下', pinyin: 'xià', translation: 'down' } },
                                { id: 's107-comp-pers', role: 'Particle', subRole: 'perspective', text: { hanzi: '去', pinyin: 'qù', translation: 'go' } }
                            ]
                        }
                    ]
                }
            ]
        }
    }
];
