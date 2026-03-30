import type { SentenceData } from '../../types/grammar';

export const separableVerbs: SentenceData[] = [
    {
        id: 's12',
        category: 'Separable Verbs (离合词)',
        chinese: '我们见过好几次面了。',
        pinyin: 'Wǒ men jiàn guo hǎo jǐ cì miàn le.',
        translation: 'We have met quite a few times already.',
        explanation: '**我们** ("we") is the Topic. The Comment shows one of Mandarin\'s most surprising quirks: **见面** (meet) is a two-part word that can be split apart so other words insert between the halves. 见 means "see" and 面 means "face." In this sentence, the aspect marker 过 (done before) and the frequency count 好几次 (quite a few times) are inserted directly between 见 and 面. Think of it like inserting words into the middle of a single English word. These are called **separable verbs** (离合词), and they\'re common in everyday Mandarin.',
        tree: {
            id: 'n12',
            role: 'Sentence',
            children: [
                {
                    id: 'n12-t',
                    role: 'Topic',
                    text: { hanzi: '我们', pinyin: 'wǒ men', translation: 'we' }
                },
                {
                    id: 'n12-c',
                    role: 'Comment',
                    subRole: 'separable verb construction (离合词)',
                    children: [
                        {
                            id: 'n12-p-verb-root',
                            role: 'Verb Phrase',
                            subRole: 'split separable verb (见…面)',
                            children: [
                                {
                                    id: 'n12-p-verb-v',
                                    role: 'Head Verb',
                                    subRole: 'separable verb (离合词): verb morpheme of 见面',
                                    text: { hanzi: '见', pinyin: 'jiàn', translation: 'see / meet' },
                                },
                                {
                                    id: 'n12-p-verb-asp',
                                    role: 'Particle',
                                    subRole: 'experiential aspect (inserted into split verb)',
                                    text: { hanzi: '过', pinyin: 'guò', translation: '(has-done / experiential)' }
                                },
                                {
                                    id: 'n12-p-verb-freq',
                                    role: 'Complement',
                                    subRole: 'frequency (inserted into split verb)',
                                    children: [
                                        {
                                            id: 'n12-p-verb-freq-adv',
                                            role: 'Adjunct',
                                            subRole: 'approximate quantity',
                                            text: { hanzi: '好几', pinyin: 'hǎo jǐ', translation: 'quite a few' }
                                        },
                                        {
                                            id: 'n12-p-verb-freq-mw',
                                            role: 'Measure Word',
                                            text: { hanzi: '次', pinyin: 'cì', translation: 'times (measure)' }
                                        }
                                    ]
                                },
                                {
                                    id: 'n12-p-verb-obj',
                                    role: 'Object',
                                    subRole: 'noun morpheme of 见面 (split to end)',
                                    text: { hanzi: '面', pinyin: 'miàn', translation: 'face (→ meet)' }
                                }
                            ]
                        },
                        {
                            id: 'n12-p-le',
                            role: 'Particle',
                            subRole: 'change of state / current relevance',
                            text: { hanzi: '了', pinyin: 'le', translation: '(already/new situation)' }
                        }
                    ]
                }
            ]
        }
    },
    {
        id: 's24',
        category: 'Separable Verbs (离合词)',
        chinese: '她早上散了一个小时的步。',
        pinyin: 'Tā zǎo shàng sàn le yī gè xiǎo shí de bù.',
        translation: 'She took a one-hour walk this morning.',
        explanation: '**散步** ("walk/stroll") is another separable verb: 散 (scatter, disperse → take a stroll) and 步 ("step/pace"). Here, **了一个小时的** ("one hour of") is inserted directly between the two halves. In English you would just say "walked for an hour": one verb, duration at the end. Mandarin must insert the duration *inside* the verb because 步 acts as an internal object. The 的 before 步 is a special linker that glues the duration phrase to the noun morpheme. This insertion pattern (verb + aspect/duration + 的 + object morpheme) is the standard template for separable verbs with time complements.',
        tree: {
            id: 'n24',
            role: 'Sentence',
            children: [
                {
                    id: 'n24-t',
                    role: 'Topic',
                    text: { hanzi: '她', pinyin: 'tā', translation: 'she' }
                },
                {
                    id: 'n24-c',
                    role: 'Comment',
                    children: [
                        {
                            id: 'n24-tp',
                            role: 'Adjunct',
                            subRole: 'time',
                            text: { hanzi: '早上', pinyin: 'zǎo shàng', translation: 'in the morning' }
                        },
                        {
                            id: 'n24-vp',
                            role: 'Verb Phrase',
                            subRole: 'split separable verb (散…步)',
                            children: [
                                {
                                    id: 'n24-vp-v',
                                    role: 'Head Verb',
                                    subRole: 'separable verb (离合词): verb morpheme of 散步',
                                    text: { hanzi: '散', pinyin: 'sàn', translation: 'stroll / disperse' },
                                },
                                {
                                    id: 'n24-vp-le',
                                    role: 'Particle',
                                    subRole: 'completion aspect (inserted into split verb)',
                                    text: { hanzi: '了', pinyin: 'le', translation: '(completion)' }
                                },
                                {
                                    id: 'n24-vp-dur',
                                    role: 'Complement',
                                    subRole: 'duration (inserted into split verb)',
                                    children: [
                                        {
                                            id: 'n24-vp-dur-num',
                                            role: 'Attributive',
                                            text: { hanzi: '一', pinyin: 'yī', translation: 'one' }
                                        },
                                        {
                                            id: 'n24-vp-dur-mw',
                                            role: 'Measure Word',
                                            text: { hanzi: '个', pinyin: 'gè', translation: '(measure word)' }
                                        },
                                        {
                                            id: 'n24-vp-dur-n',
                                            role: 'Noun',
                                            text: { hanzi: '小时', pinyin: 'xiǎo shí', translation: 'hour' }
                                        }
                                    ]
                                },
                                {
                                    id: 'n24-vp-de',
                                    role: 'Particle',
                                    subRole: 'linker between duration and noun morpheme',
                                    text: { hanzi: '的', pinyin: 'de', translation: '(links duration to object morpheme)' }
                                },
                                {
                                    id: 'n24-vp-obj',
                                    role: 'Object',
                                    subRole: 'noun morpheme of 散步 (split to end)',
                                    text: { hanzi: '步', pinyin: 'bù', translation: 'step / pace (→ stroll)' }
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    {
        id: 's54',
        category: 'Separable Verbs (离合词)',
        chinese: '他们分了手。',
        pinyin: 'Tā men fēn le shǒu.',
        translation: 'They broke up.',
        explanation: '**他们** ("they") is the Topic. **分手** ("break up") is a separable verb: **分** ("split") is the verb morpheme and **手** ("hand") is the object morpheme. When you insert the completion particle **了** between them, the compound splits: 分**了**手. This is the simplest split: just 了 slotting in. The separable verb frame works exactly the same way as in 见面, 散步, and 睡觉; any particle, duration phrase, or frequency word goes between the verb half and the object half. Both 分了手 ("split") and 分手了 ("unsplit") are natural. The split form emphasizes the completion of the breakup; the unsplit form is more neutral.',
        tree: {
            id: 'n54',
            role: 'Sentence',
            children: [
                {
                    id: 'n54-t',
                    role: 'Topic',
                    text: { hanzi: '他们', pinyin: 'tā men', translation: 'they' },
                },
                {
                    id: 'n54-c',
                    role: 'Comment',
                    children: [
                        {
                            id: 'n54-vp',
                            role: 'Verb Phrase',
                            subRole: 'separable verb: split by 了',
                            children: [
                                {
                                    id: 'n54-vm',
                                    role: 'Verb Morpheme',
                                    text: { hanzi: '分', pinyin: 'fēn', translation: 'split / separate' },
                                },
                                {
                                    id: 'n54-le',
                                    role: 'Particle',
                                    subRole: 'completion (inserted)',
                                    text: { hanzi: '了', pinyin: 'le', translation: '(done)' },
                                },
                                {
                                    id: 'n54-om',
                                    role: 'Object Morpheme',
                                    text: { hanzi: '手', pinyin: 'shǒu', translation: 'hand (object half)' },
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 's55',
        category: 'Separable Verbs (离合词)',
        chinese: '他毕了业就出国了。',
        pinyin: 'Tā bì le yè jiù chū guó le.',
        translation: 'As soon as he graduated, he went abroad.',
        explanation: '**他** ("he") is the Topic. The separable verb **毕业** ("graduate"): **毕** ("finish") + **业** ("studies/profession"), is split by **了** to mark completion: 毕**了**业. What follows is a serial clause: **就** ("then, immediately") + **出国** ("go abroad") + **了**. The sentence has a "once X, then Y" flow. Notice 毕业 and 出国 are *both* Verb-Object compounds, but only 毕业 is truly "separable" here; 出国 stays intact because nothing needs to insert. This illustrates that not every VO compound is a 离合词; separability depends on whether the grammar *forces* something between V and O.',
        tree: {
            id: 'n55',
            role: 'Sentence',
            children: [
                {
                    id: 'n55-t',
                    role: 'Topic',
                    text: { hanzi: '他', pinyin: 'tā', translation: 'he' },
                },
                {
                    id: 'n55-c',
                    role: 'Comment',
                    subRole: 'sequential clauses',
                    children: [
                        {
                            id: 'n55-cl1',
                            role: 'Verb Phrase',
                            subRole: 'clause 1: separable verb split',
                            children: [
                                {
                                    id: 'n55-vm',
                                    role: 'Verb Morpheme',
                                    text: { hanzi: '毕', pinyin: 'bì', translation: 'finish / complete' },
                                },
                                {
                                    id: 'n55-le1',
                                    role: 'Particle',
                                    subRole: 'completion (inserted)',
                                    text: { hanzi: '了', pinyin: 'le', translation: '(done)' },
                                },
                                {
                                    id: 'n55-om',
                                    role: 'Object Morpheme',
                                    text: { hanzi: '业', pinyin: 'yè', translation: 'studies / profession' },
                                },
                            ],
                        },
                        {
                            id: 'n55-cl2',
                            role: 'Verb Phrase',
                            subRole: 'clause 2: sequential result',
                            children: [
                                {
                                    id: 'n55-adv',
                                    role: 'Adjunct',
                                    text: { hanzi: '就', pinyin: 'jiù', translation: 'then / immediately' },
                                },
                                {
                                    id: 'n55-hv',
                                    role: 'Head Verb',
                                    text: { hanzi: '出国', pinyin: 'chū guó', translation: 'go abroad' },
                                },
                                {
                                    id: 'n55-le2',
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
