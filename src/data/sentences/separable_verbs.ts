import type { SentenceData } from '../../types/grammar';

export const separableVerbs: SentenceData[] = [
    {
        id: 's12',
        category: 'Separable Verbs (离合词)',
        chinese: '我们见过好几次面了。',
        pinyin: 'Wǒ men jiàn guo hǎo jǐ cì miàn le.',
        translation: 'We have met quite a few times already.',
        explanation: '**我们** ("we") is the Topic. The Comment uses a **separable verb**: **见面** ("meet") is normally one word, but Mandarin can split it apart when something needs to go in between. Here, **见了一次面** separates 见 and 面, inserting **了一次** ("once," a frequency complement) in the middle. Think of separable verbs as having a built-in gap that opens up when modifiers need to slip in. Other separable verbs that work the same way: 吃饭 (eat a meal), 睡觉 (sleep), 游泳 (swim). Each can split to insert duration, frequency, or other details.',
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
                                    role: 'Verb Morpheme',
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
                                            subRole: 'degree',
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
                                    role: 'Object Morpheme',
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
        explanation: '**散步** ("take a walk") is another separable verb: 散 ("scatter/relax") + 步 ("steps"). Like 见面, Mandarin splits this verb when a modifier goes inside. Here, **散了三次步** inserts **了三次** ("three times") between the two halves. The Topic is implied (an "I" or "we" dropped from context). The tree shows the verb split clearly: the first half 散 acts as the Head Verb, and the second half 步 appears as the Object separated by the frequency complement. This splitting pattern is unique to Mandarin and has no English equivalent.',
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
                                    role: 'Verb Morpheme',
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
                                    role: 'Object Morpheme',
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
        explanation: '**他们** ("they") is the Topic. **分手** ("break up") is a separable verb: 分 ("divide") + 手 ("hands"). The sentence inserts **了** between the two halves: **分了手**. The 了 marks that the breaking up actually happened. The tree splits the verb to show this insertion. What makes separable verbs interesting is that they look like regular two-character words until you need to add aspect markers, frequency, or duration. Then they reveal their internal structure by splitting apart.',
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
        explanation: '**他** ("he") is the Topic. The separable verb **毕业** ("graduate") is split to insert a duration: **毕了三年的业** ("graduated over three years," where 三年的 specifies the duration). The 的 links the duration to the second half of the verb. The tree shows 毕 ("complete") as the Head Verb and 业 ("studies/profession") as the Object, with the duration and 的 inserted between them. This is one of the most complex separable verb patterns, where both a duration and the possessive 的 fill the gap.',
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
    },
    {
        id: 's116',
        category: 'Separable Verbs (离合词)',
        chinese: '你生什么气？',
        pinyin: 'Nǐ shēng shén me qì?',
        translation: 'What are you angry about?',
        explanation: '**你** ("you") is the Topic. The separable verb **生气** ("be angry") splits to insert the question word **什么** ("what"). The verb half 生 stays in position, and the noun half 气 ("anger/temper") moves after the question word: 生什么气 = "produce what anger?" This proves that the noun half of a separable verb is a real, functioning object, not just a syllable glued to the verb. You can modify it, question it, or quantify it. Other examples: 你跳什么舞 ("What dance are you doing?"), 他帮什么忙 ("What help is he providing?"). The tree splits 生 and 气 with 什么 inserted between them.',
        tree: {
            id: 's116-n',
            role: 'Sentence',
            children: [
                { id: 's116-t', role: 'Topic', text: { hanzi: '你', pinyin: 'nǐ', translation: 'you' } },
                {
                    id: 's116-c',
                    role: 'Comment',
                    children: [
                        { id: 's116-hv', role: 'Verb Morpheme', subRole: 'separable verb half', text: { hanzi: '生', pinyin: 'shēng', translation: 'produce' } },
                        { id: 's116-q', role: 'Attributive', subRole: 'interrogative', text: { hanzi: '什么', pinyin: 'shén me', translation: 'what' } },
                        { id: 's116-obj', role: 'Object Morpheme', subRole: 'separable noun half', text: { hanzi: '气', pinyin: 'qì', translation: 'anger/air' } }
                    ]
                }
            ]
        }
    },
    {
        id: 's117',
        category: 'Separable Verbs (离合词)',
        chinese: '我们去散散步吧。',
        pinyin: 'Wǒ men qù sàn san bù ba.',
        translation: 'Let\'s go take a stroll.',
        explanation: '**我们** ("we") is the Topic. The Comment chains two verb phrases: **去** ("go") followed by **散散步** ("take a stroll"). The interesting part is **散散步**: the verb half 散 is *reduplicated* (散散) while the noun half 步 stays single. This **AAB pattern** is unique to separable verbs and signals a casual, brief, or easy action. You cannot reduplicate the noun half. Compare: 见见面 ("meet up briefly"), 聊聊天 ("have a little chat"), 跑跑步 ("go for a quick jog"). The sentence-final **吧** makes this a suggestion. The tree shows the serial verb chain (去 + 散散步) with the reduplication visible in the verb node.',
        tree: {
            id: 's117-n',
            role: 'Sentence',
            children: [
                { id: 's117-t', role: 'Topic', text: { hanzi: '我们', pinyin: 'wǒ men', translation: 'we' } },
                {
                    id: 's117-c',
                    role: 'Comment',
                    subRole: 'serial verb chain',
                    children: [
                        { id: 's117-v1', role: 'Head Verb', subRole: 'action 1', text: { hanzi: '去', pinyin: 'qù', translation: 'go' } },
                        { id: 's117-v2', role: 'Verb Morpheme', subRole: 'reduplicated verb (AAB)', text: { hanzi: '散散', pinyin: 'sàn san', translation: 'casually scatter' } },
                        { id: 's117-obj', role: 'Object Morpheme', subRole: 'separable noun half', text: { hanzi: '步', pinyin: 'bù', translation: 'steps' } },
                        { id: 's117-ba', role: 'Particle', subRole: 'suggestion', text: { hanzi: '吧', pinyin: 'ba', translation: '(let\'s)' } }
                    ]
                }
            ]
        }
    }
];
