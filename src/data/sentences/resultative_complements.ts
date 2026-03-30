import type { SentenceData } from '../../types/grammar';

export const resultativeComplements: SentenceData[] = [
    {
        id: 's13',
        category: 'Resultative Complements (结果补语)',
        chinese: '吃饱了，想睡觉。',
        pinyin: 'Chī bǎo le , xiǎng shuì jiào .',
        translation: '(I\'m) full, (I) want to sleep.',
        explanation: 'The key pattern here is the **resultative complement** **吃饱**: **吃** ("eat") stacked with **饱** ("full"). Eating *resulted in* fullness: that\'s the result morpheme at work, just like 听懂 (listen-understand) or 找到 (look-find). The sentence then chains a second event: 想睡觉 (want to sleep). Notice there is **no stated subject**; the speaker is obvious from context, so Mandarin leaves it out. The tree shows a ghost **[我]** node that you can reveal or hide with the toggle. This silent-subject pattern happens constantly in natural speech.',
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
        explanation: '**我** ("I") is the Topic. The key is **听懂**: the verb **听** ("listen") is stacked directly with the result morpheme **懂** ("understand"). Together they form a single unit meaning "listened-to-the-point-of-understanding." The **了** after them confirms the result was achieved. This is the core pattern of **resultative complements**: verb + result, no linking word, no pause. If you just said 我听了 ("I listened"), there\'s no guarantee of understanding. 听懂 asserts the outcome. The object **他说的话** (what he said) is a relative clause: 他说 (he said) + 的 + 话 (words).',
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
        explanation: '**她** ("she") is the Topic. The verb **哭** ("cry") stacks with the adjective **红** ("red"), meaning the crying *caused* a result: the eyes turned red. The object **眼睛** ("eyes") is the thing that changed, not what was cried. Compare with the English phrasing: "She cried her eyes red"; both languages use the same compact pattern. This kind of verb + result stacking is found everywhere in Mandarin: 笑哭了 ("laugh until you cry"), 吃撑了 ("eat until stuffed"), 写累了 ("write until tired"); any action that causes a change of state can use this frame.',
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
        explanation: '**我** ("I") is the Topic. The resultative compound **找到** is one of the most useful in the language: **找** ("look for") + **到** ("arrive at / reach"). The result morpheme 到 means "reached the destination of searching," which is exactly what finding something is. This **V+到** pattern is extremely productive: 买到 ("buy and obtain"), 拿到 ("get hold of"), 看到 (look and perceive = see), 听到 (listen and perceive = hear). The 到 always signals that the action reached its target. **了** confirms the action is complete.',
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
        explanation: '**他** ("he") is the Topic. The resultative compound **写错**: **写** ("write") + **错** ("wrong/mistaken"), means "wrote and the result was wrong." This is a very natural everyday pattern: you don\'t need separate words for "make a mistake writing"; one compact verb covers it. Other V+错 compounds: 说错 (say wrongly), 听错 (mishear), 拿错 (pick up the wrong thing), 走错 (go the wrong way). The object **字** (character/word) comes *after* the resultative compound; this is standard for resultatives with a regular (non-BA) object.',
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
    },
    {
        id: 's91',
        category: 'Resultative Complements (\u7ed3\u679c\u8865\u8bed)',
        chinese: '不要因为好事太小就不去做。',
        pinyin: 'Bú yào yīn wèi hǎo shì tài xiǎo jiù bú qù zuò.',
        translation: 'Do not refrain from doing good just because it is small.',
        explanation: 'This modernizes the classical 勿以善小而不為. The classical 以 ("because of") becomes 因为, the concessive 而 becomes 就, and the prohibitive 勿 becomes 不要. *Grammatically,* 不要 opens the prohibition. 因为好事太小 ("because the good deed is too small") gives the rejected reason, using the stative predicate 太小 ("too small"). 就 ("then/so") introduces the consequence being negated: 不去做 ("not go and do it"). The serial verb 去做 ("go do") adds purposive flavor to the action.',
        tree: {
            id: 's91-root', role: 'Sentence', children: [
                { id: 's91-by', role: 'Adjunct', subRole: 'prohibition', text: { hanzi: '不要', pinyin: 'bú yào', translation: 'do not' } },
                { id: 's91-yw', role: 'Adjunct', subRole: 'causal', children: [
                    { id: 's91-yw-p', role: 'Preposition', text: { hanzi: '因为', pinyin: 'yīn wèi', translation: 'because' } },
                    { id: 's91-yw-clause', role: 'Object', children: [
                        { id: 's91-hs', role: 'Subject', text: { hanzi: '好事', pinyin: 'hǎo shì', translation: 'good deed' } },
                        { id: 's91-tx', role: 'Head Verb', text: { hanzi: '太小', pinyin: 'tài xiǎo', translation: 'too small' } },
                    ]},
                ]},
                { id: 's91-jiu', role: 'Adjunct', text: { hanzi: '就', pinyin: 'jiù', translation: 'then/so' } },
                { id: 's91-vp', role: 'Verb Phrase', children: [
                    { id: 's91-bq', role: 'Adjunct', subRole: 'negation', text: { hanzi: '不', pinyin: 'bú', translation: 'not' } },
                    { id: 's91-qu', role: 'Head Verb', text: { hanzi: '去', pinyin: 'qù', translation: 'go' } },
                    { id: 's91-zuo', role: 'Complement', text: { hanzi: '做', pinyin: 'zuò', translation: 'do' } },
                ]},
            ]
        }
    }
];
