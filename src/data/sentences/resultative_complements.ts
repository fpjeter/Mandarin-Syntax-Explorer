import type { SentenceData } from '../../types/grammar';

export const resultativeComplements: SentenceData[] = [
    {
        id: 's13',
        category: 'Resultative Complements (结果补语)',
        chinese: '吃饱了，想睡觉。',
        pinyin: 'Chī bǎo le , xiǎng shuì jiào .',
        translation: '(I\'m) full, (I) want to sleep.',
        explanation: 'The key pattern here is the **resultative complement** **吃饱**: the verb **吃** ("eat") completely seals with the result **饱** ("full") to create a single **Fused Verb Package**. In Mandarin, you don\'t use linking words like "until" or "so that." The action and its outcome are welded together into a single un-splittable package. The **了** after the package seals it, marking completion. The **没有** at the end asks a follow-up question: "or not?" This V-not-V pattern (吃饱了没有) is the standard way to ask about completed results.',
        tree: {
            id: 'n13',
            role: 'Sentence',
            children: [
                {
                    id: 'n13-s',
                    role: 'Topic',
                    isDropped: true,
                    impliedText: '我',
                },
                {
                    id: 'n13-c',
                    role: 'Comment',
                    subRole: 'sequential clauses',
                    children: [
                        {
                            id: 'n13-vp1',
                            role: 'Verb Phrase',
                            subRole: 'clause 1',
                            children: [
                                {
                                    id: 'n13-vp1-hv',
                                    role: 'Head Verb',
                                    text: { hanzi: '吃', pinyin: 'chī', translation: 'eat' }
                                },
                                {
                                    id: 'n13-vp1-comp',
                                    role: 'Complement',
                                    subRole: 'resultative',
                                    text: { hanzi: '饱', pinyin: 'bǎo', translation: 'full/satiated' }
                                },
                                {
                                    id: 'n13-vp1-le',
                                    role: 'Particle',
                                    subRole: 'completion',
                                    text: { hanzi: '了', pinyin: 'le', translation: '(done)' }
                                }
                            ]
                        },
                        {
                            id: 'n13-vp2',
                            role: 'Verb Phrase',
                            subRole: 'clause 2',
                            children: [
                                {
                                    id: 'n13-vp2-hv',
                                    role: 'Head Verb',
                                    text: { hanzi: '想', pinyin: 'xiǎng', translation: 'want to / feel like' }
                                },
                                {
                                    id: 'n13-vp2-obj',
                                    role: 'Object',
                                    children: [
                                        {
                                            id: 'n13-vp2-obj-hv',
                                            role: 'Verb Phrase',
                                            subRole: 'separable verb (离合词): 睡觉',
                                            children: [
                                                {
                                                    id: 'n13-vp2-obj-hv-vm',
                                                    role: 'Verb Morpheme',
                                                    text: { hanzi: '睡', pinyin: 'shuì', translation: 'sleep (verb)' },
                                                },
                                                {
                                                    id: 'n13-vp2-obj-hv-om',
                                                    role: 'Object Morpheme',
                                                    text: { hanzi: '觉', pinyin: 'jiào', translation: 'sleep (noun)' },
                                                },
                                            ],
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
        id: 's30',
        category: 'Resultative Complements (结果补语)',
        chinese: '我听懂了他说的话。',
        pinyin: 'Wǒ tīng dǒng le tā shuō de huà.',
        translation: 'I understood what he said.',
        explanation: 'The Topic is **我** ("I"). The verb **听** ("listen") tightly seals with the result **懂** ("understand") to form the **Fused Verb Package** **听懂**: listened and understood. The **了** confirms it happened. After this package, the object is a relative clause: **他说的话** ("the words he said"), where **的** links the clause **他说** ("he said") to the noun **话** ("words"). The tree shows the package 听+懂 fused tightly together, with the complex object branching off to the right.',
        tree: {
            id: 'n30',
            role: 'Sentence',
            children: [
                {
                    id: 'n30-t',
                    role: 'Topic',
                    text: { hanzi: '我', pinyin: 'wǒ', translation: 'I' },
                },
                {
                    id: 'n30-c',
                    role: 'Comment',
                    children: [
                        {
                            id: 'n30-vp',
                            role: 'Verb Phrase',
                            children: [
                                {
                                    id: 'n30-hv',
                                    role: 'Head Verb',
                                    text: { hanzi: '听', pinyin: 'tīng', translation: 'listen' },
                                },
                                {
                                    id: 'n30-comp',
                                    role: 'Complement',
                                    subRole: 'resultative',
                                    text: { hanzi: '懂', pinyin: 'dǒng', translation: 'understand / grasp' },
                                },
                                {
                                    id: 'n30-le',
                                    role: 'Particle',
                                    subRole: 'completion',
                                    text: { hanzi: '了', pinyin: 'le', translation: '(done)' },
                                },
                                {
                                    id: 'n30-obj',
                                    role: 'Object',
                                    children: [
                                        {
                                            id: 'n30-obj-attr',
                                            role: 'Attributive',
                                            subRole: 'relative clause',
                                            children: [
                                                {
                                                    id: 'n30-obj-attr-pro',
                                                    role: 'Pronoun',
                                                    text: { hanzi: '他', pinyin: 'tā', translation: 'he' },
                                                },
                                                {
                                                    id: 'n30-obj-attr-v',
                                                    role: 'Head Verb',
                                                    text: { hanzi: '说', pinyin: 'shuō', translation: 'say' },
                                                },
                                                {
                                                    id: 'n30-obj-attr-de',
                                                    role: 'Particle',
                                                    subRole: 'relativizer',
                                                    text: { hanzi: '的', pinyin: 'de', translation: '(relative clause marker)' },
                                                },
                                            ],
                                        },
                                        {
                                            id: 'n30-obj-hn',
                                            role: 'Head Noun',
                                            text: { hanzi: '话', pinyin: 'huà', translation: 'words / speech' },
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
        id: 's31',
        category: 'Resultative Complements (结果补语)',
        chinese: '她哭红了眼睛。',
        pinyin: 'Tā kū hóng le yǎn jing.',
        translation: 'She cried her eyes red.',
        explanation: 'The Topic is **她** ("she"). The verb **哭** ("cry") bonds with the resultative complement **红** ("red") to form the **Fused Verb Package** **哭红**: cried until (her eyes turned) red. Then **了** seals the package, and **眼睛** ("eyes") acts as the object. Mandarin loves these un-splittable packages: cry+red, eat+full, run+tired. Each result is permanently attached to the action that caused it. The tree shows 哭 and 红 sealed together permanently.',
        tree: {
            id: 'n31',
            role: 'Sentence',
            children: [
                {
                    id: 'n31-t',
                    role: 'Topic',
                    text: { hanzi: '她', pinyin: 'tā', translation: 'she' },
                },
                {
                    id: 'n31-c',
                    role: 'Comment',
                    children: [
                        {
                            id: 'n31-vp',
                            role: 'Verb Phrase',
                            subRole: 'causative resultative',
                            children: [
                                {
                                    id: 'n31-hv',
                                    role: 'Head Verb',
                                    text: { hanzi: '哭', pinyin: 'kū', translation: 'cry' },
                                },
                                {
                                    id: 'n31-comp',
                                    role: 'Complement',
                                    subRole: 'resultative (state change)',
                                    text: { hanzi: '红', pinyin: 'hóng', translation: 'red (result state)' },
                                },
                                {
                                    id: 'n31-le',
                                    role: 'Particle',
                                    subRole: 'completion',
                                    text: { hanzi: '了', pinyin: 'le', translation: '(done)' },
                                },
                                {
                                    id: 'n31-obj',
                                    role: 'Object',
                                    subRole: 'patient (thing that changed state)',
                                    text: { hanzi: '眼睛', pinyin: 'yǎn jing', translation: 'eyes' },
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 's40',
        category: 'Resultative Complements (结果补语)',
        chinese: '我找到钥匙了。',
        pinyin: 'Wǒ zhǎo dào yào shi le.',
        translation: 'I found the key.',
        explanation: 'The Topic is **我** ("I"). The verb **找** ("search for") welds with the result **到** ("arrive at, reach") to form the **Fused Verb Package** **找到**: searched and found. The result 到 tells you the search reached its target. The **了** marks completion: the package is complete. Compare with 找不到 ("cannot find") where 不 toggles the internal switch. The tree shows 找 and 到 sealed inside one package, with **钥匙** ("key") as the object.',
        tree: {
            id: 'n40',
            role: 'Sentence',
            children: [
                {
                    id: 'n40-t',
                    role: 'Topic',
                    text: { hanzi: '我', pinyin: 'wǒ', translation: 'I' },
                },
                {
                    id: 'n40-c',
                    role: 'Comment',
                    children: [
                        {
                            id: 'n40-vp',
                            role: 'Verb Phrase',
                            children: [
                                {
                                    id: 'n40-hv',
                                    role: 'Head Verb',
                                    text: { hanzi: '找', pinyin: 'zhǎo', translation: 'look for / search' },
                                },
                                {
                                    id: 'n40-comp',
                                    role: 'Complement',
                                    subRole: 'resultative (reach target)',
                                    text: { hanzi: '到', pinyin: 'dào', translation: 'arrive at / reach' },
                                },
                                {
                                    id: 'n40-obj',
                                    role: 'Object',
                                    text: { hanzi: '钥匙', pinyin: 'yào shi', translation: 'key' },
                                },
                                {
                                    id: 'n40-le',
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
        id: 's41',
        category: 'Resultative Complements (结果补语)',
        chinese: '他写错字了。',
        pinyin: 'Tā xiě cuò zì le.',
        translation: 'He wrote a character incorrectly.',
        explanation: 'The Topic is **他** ("he"). The verb **写** ("write") fuses with the result **错** ("wrong") to form the **Fused Verb Package** **写错**: wrote incorrectly. The result tells you the outcome was an error. The **了** seals the package, and **字** ("character") is the object that was written wrong. This is a classic Fused Package: the action (writing) produced an attached, unintended outcome (wrongness). Other examples: 听错 ("heard wrong"), 看错 ("misread").',
        tree: {
            id: 'n41',
            role: 'Sentence',
            children: [
                {
                    id: 'n41-t',
                    role: 'Topic',
                    text: { hanzi: '他', pinyin: 'tā', translation: 'he' },
                },
                {
                    id: 'n41-c',
                    role: 'Comment',
                    children: [
                        {
                            id: 'n41-vp',
                            role: 'Verb Phrase',
                            children: [
                                {
                                    id: 'n41-hv',
                                    role: 'Head Verb',
                                    text: { hanzi: '写', pinyin: 'xiě', translation: 'write' },
                                },
                                {
                                    id: 'n41-comp',
                                    role: 'Complement',
                                    subRole: 'resultative (error)',
                                    text: { hanzi: '错', pinyin: 'cuò', translation: 'wrong / mistaken' },
                                },
                                {
                                    id: 'n41-obj',
                                    role: 'Object',
                                    text: { hanzi: '字', pinyin: 'zì', translation: 'character / word' },
                                },
                                {
                                    id: 'n41-le',
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

    }
];
