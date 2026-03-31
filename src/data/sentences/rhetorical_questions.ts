import type { SentenceData } from '../../types/grammar';

export const rhetoricalQuestions: SentenceData[] = [
    {
        id: 's10',
        category: 'Rhetorical Questions (反问句)',
        chinese: '难道你连这么简单的问题都不会吗？',
        pinyin: 'Nán dào nǐ lián zhè me jiǎn dān de wèn tí dōu bù huì ma?',
        translation: 'Don\'t tell me you can\'t even (do) such a simple question?',

        explanation: 'This sentence opens with **难道**, a word that signals a rhetorical question is coming, roughly translatable as *"don\'t tell me..."* or *"surely... not?"*. After that, **你** (you) is the Topic. The Comment uses a paired structure: **连...** and **都** work as a team, bracketing whatever is being emphasized. Here they wrap around *"even such a simple question"*, adding disbelief and emphasis. The **吗** at the end is a yes/no question marker. Together, the whole sentence expresses incredulous disbelief: you really can\'t do *even* this?',
        tree: {
            id: 'n10',
            role: 'Sentence',
            children: [
                {
                    id: 'n10-t-dropped',
                    role: 'Topic',
                    isDropped: true,
                    impliedText: '这'
                },
                {
                    id: 'n10-c',
                    role: 'Comment',
                    children: [
                        {
                            id: 'n10-adv',
                            role: 'Adjunct',
                            subRole: 'rhetorical question marker',
                            text: { hanzi: '难道', pinyin: 'nán dào', translation: 'don\'t tell me (...)?' }
                        },
                        {
                            id: 'n10-subj',
                            role: 'Subject',
                            text: { hanzi: '你', pinyin: 'nǐ', translation: 'you' }
                        },
                        {
                            id: 'n10-p-lian-phrase',
                            role: 'Preposition',
                            subRole: 'emphatic lián/dōu surround',
                            children: [
                                {
                                    id: 'n10-p-lian-prep',
                                    role: 'Preposition',
                                    subRole: 'lián opener (连…都 bracket)',
                                    text: { hanzi: '连', pinyin: 'lián', translation: 'even' }
                                },
                                {
                                    id: 'n10-p-lian-obj',
                                    role: 'Object',
                                    children: [
                                        {
                                            id: 'n10-p-lian-obj-attr1',
                                            role: 'Attributive',
                                            subRole: 'extent',
                                            text: { hanzi: '这么', pinyin: 'zhè me', translation: 'so/such' }
                                        },
                                        {
                                            id: 'n10-p-lian-obj-attr2',
                                            role: 'Attributive',
                                            subRole: 'descriptive',
                                            children: [
                                                {
                                                    id: 'n10-p-lian-obj-attr2-adj',
                                                    role: 'Adjective',
                                                    text: { hanzi: '简单', pinyin: 'jiǎn dān', translation: 'simple' }
                                                },
                                                {
                                                    id: 'n10-p-lian-obj-attr2-de',
                                                    role: 'Particle',
                                                    text: { hanzi: '的', pinyin: 'de', translation: '(adj marker)' }
                                                }
                                            ]
                                        },
                                        {
                                            id: 'n10-p-lian-obj-hn',
                                            role: 'Head Noun',
                                            text: { hanzi: '问题', pinyin: 'wèn tí', translation: 'question' }
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'n10-p-dou',
                            role: 'Adjunct',
                            subRole: 'emphatic closure (paired with lián)',
                            text: { hanzi: '都', pinyin: 'dōu', translation: 'all/even' }
                        },
                        {
                            id: 'n10-p-vp',
                            role: 'Verb Phrase',
                            children: [
                                {
                                    id: 'n10-p-vp-adv',
                                    role: 'Adjunct',
                                    subRole: 'negation',
                                    text: { hanzi: '不', pinyin: 'bù', translation: 'not' }
                                },
                                {
                                    id: 'n10-p-vp-hv',
                                    role: 'Head Verb',
                                    subRole: 'auxiliary / ability',
                                    text: { hanzi: '会', pinyin: 'huì', translation: 'can/know how to' }
                                }
                            ]
                        },
                        {
                            id: 'n10-part',
                            role: 'Particle',
                            subRole: 'yes/no question marker',
                            text: { hanzi: '吗', pinyin: 'ma', translation: '(?)' }
                        }
                    ]
                }
            ]
        }
    },

    {
        id: 's56',
        category: 'Rhetorical Questions (反问句)',
        chinese: '你难道不知道吗？',
        pinyin: 'Nǐ nán dào bù zhī dào ma?',
        translation: 'Don\'t you know? (Surely you must know!)',

        explanation: '**你** ("you") is the Topic. **难道** (don\'t tell me / could it be that) is the rhetorical marker: it signals that the speaker expects the opposite of what the sentence literally says. The negation **不知道** (don\'t know) combined with 难道 produces: "You couldn\'t possibly not know" → "Of course you know!" The sentence-final **吗** reinforces the questioning tone but the expected answer is already baked in. 难道 always implies surprise, disbelief, or reproach. It\'s one of the most emotionally loaded adverbs in Mandarin.',
        tree: {
            id: 'n56',
            role: 'Sentence',
            children: [
                {
                    id: 'n56-t',
                    role: 'Topic',
                    text: { hanzi: '你', pinyin: 'nǐ', translation: 'you' },
                },
                {
                    id: 'n56-c',
                    role: 'Comment',
                    children: [
                        {
                            id: 'n56-rhet',
                            role: 'Adjunct',
                            subRole: 'rhetorical marker (难道)',
                            text: { hanzi: '难道', pinyin: 'nán dào', translation: 'don\'t tell me / could it be' },
                        },
                        {
                            id: 'n56-vp',
                            role: 'Verb Phrase',
                            children: [
                                {
                                    id: 'n56-neg',
                                    role: 'Adjunct',
                                    subRole: 'negation',
                                    text: { hanzi: '不', pinyin: 'bù', translation: 'not' },
                                },
                                {
                                    id: 'n56-hv',
                                    role: 'Head Verb',
                                    text: { hanzi: '知道', pinyin: 'zhī dào', translation: 'know' },
                                },
                                {
                                    id: 'n56-ma',
                                    role: 'Particle',
                                    subRole: 'question marker',
                                    text: { hanzi: '吗', pinyin: 'ma', translation: '(question)' },
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    },

    {
        id: 's76',
        category: 'Rhetorical Questions (\u53cd\u95ee\u53e5)',
        chinese: '王侯将相难道是天生的吗？',
        pinyin: 'Wáng hóu jiàng xiàng nán dào shì tiān shēng de ma?',
        translation: 'Are kings and generals really born into their roles?',
        explanation: 'This modernizes the classical 王侯將相寧有種乎. The rhetorical question pattern shifts from the classical 寧...乎 frame to the modern **难道...吗** frame. *Grammatically,* the Topic 王侯将相 ("kings, lords, generals, ministers") remains identical to the classical version. The Comment uses 难道 ("don\'t tell me") to signal disbelief, then 是...的 to focus on the quality "天生的" ("innate/born that way"), closed by 吗 (yes/no question marker). The rhetorical force is the same: the expected answer is "of course not!"',
        tree: {
            id: 's76-root', role: 'Sentence', children: [
                { id: 's76-t', role: 'Topic', text: { hanzi: '王侯将相', pinyin: 'wáng hóu jiàng xiàng', translation: 'kings, lords, generals' } },
                { id: 's76-c', role: 'Comment', subRole: 'rhetorical question', children: [
                    { id: 's76-nd', role: 'Adjunct', subRole: 'rhetorical marker', text: { hanzi: '难道', pinyin: 'nán dào', translation: 'don\'t tell me' } },
                    { id: 's76-shi', role: 'Copula', text: { hanzi: '是', pinyin: 'shì', translation: 'is' } },
                    { id: 's76-ts', role: 'Complement', text: { hanzi: '天生的', pinyin: 'tiān shēng de', translation: 'innate/born' } },
                    { id: 's76-ma', role: 'Particle', subRole: 'question marker', text: { hanzi: '吗', pinyin: 'ma', translation: '(?)' } },
                ]},
            ]
        }
    }
];
