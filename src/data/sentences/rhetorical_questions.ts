import type { SentenceData } from '../../types/grammar';

export const rhetoricalQuestions: SentenceData[] = [

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
    },
    {
        id: 's100',
        category: 'Rhetorical Questions (反问句)',
        chinese: '难道你连这么重要的事都忘了吗？',
        pinyin: 'Nán dào nǐ lián zhè me zhòng yào de shì dōu wàng le ma?',
        translation: 'Could it be that you forgot even such an important thing?',
        explanation: 'The sentence opens with **难道** ("could it be that / don\'t tell me") as a rhetorical marker of disbelief. **你** (you) is the Topic. The Comment uses the emphatic **连...都** ("even... [all]") bracket to surround the object ("such an important thing"). Finally, the verb **忘** (forget) with aspect **了** is followed by the interrogative particle **吗**. The speaker uses this structure not to ask for information, but to express shock at the forgetting.',
        tree: {
            id: 'n100-root', role: 'Sentence', children: [
                { id: 'n100-t', role: 'Topic', isDropped: true, impliedText: '这' },
                { id: 'n100-c', role: 'Comment', children: [
                    { id: 'n100-nd', role: 'Adjunct', subRole: 'rhetorical marker', text: { hanzi: '难道', pinyin: 'nán dào', translation: 'could it be' } },
                    { id: 'n100-subj', role: 'Subject', text: { hanzi: '你', pinyin: 'nǐ', translation: 'you' } },
                    { id: 'n100-lian-phrase', role: 'Preposition', subRole: '连...都 bracket', children: [
                        { id: 'n100-lian', role: 'Preposition', text: { hanzi: '连', pinyin: 'lián', translation: 'even' } },
                        { id: 'n100-obj', role: 'Object', children: [
                            { id: 'n100-attr', role: 'Attributive', text: { hanzi: '这么重要的', pinyin: 'zhè me zhòng yào de', translation: 'so important' } },
                            { id: 'n100-hn', role: 'Head Noun', text: { hanzi: '事', pinyin: 'shì', translation: 'thing' } }
                        ]}
                    ]},
                    { id: 'n100-dou', role: 'Adjunct', text: { hanzi: '都', pinyin: 'dōu', translation: 'all / even' } },
                    { id: 'n100-vp', role: 'Verb Phrase', children: [
                        { id: 'n100-hv', role: 'Head Verb', text: { hanzi: '忘', pinyin: 'wàng', translation: 'forget' } },
                        { id: 'n100-le', role: 'Particle', subRole: 'completion aspect', text: { hanzi: '了', pinyin: 'le', translation: '(done)' } },
                        { id: 'n100-ma', role: 'Particle', subRole: 'question marker', text: { hanzi: '吗', pinyin: 'ma', translation: '(?)' } }
                    ]}
                ]}
            ]
        }
    },
    {
        id: 's101',
        category: 'Rhetorical Questions (反问句)',
        chinese: '大家都同意了，难道我还能反对吗？',
        pinyin: 'Dà jiā dōu tóng yì le, nán dào wǒ hái néng fǎn duì ma?',
        translation: 'Everyone has agreed, how could I still object?',
        explanation: 'A classic defensive rhetorical question set within a `Parallel Sentence`. The first clause (大家都同意了) establishes the inescapable context. The second clause (难道我还能反对吗) uses **难道** to assert the absurdity of doing the opposite. The sequence `还能` ("still can") sits alongside `难道` as adjuncts modifying the core verb `反对` (object/oppose).',
        tree: {
            id: 'n101-root', role: 'Sentence', children: [
                { id: 'n101-ps', role: 'Parallel Sentence', children: [
                    { id: 'n101-cl1', role: 'Embedded Clause', children: [
                        { id: 'n101-t1', role: 'Subject', text: { hanzi: '大家', pinyin: 'dà jiā', translation: 'everyone' } },
                        { id: 'n101-vp1', role: 'Verb Phrase', children: [
                            { id: 'n101-dou', role: 'Adjunct', text: { hanzi: '都', pinyin: 'dōu', translation: 'all' } },
                            { id: 'n101-hv1', role: 'Head Verb', text: { hanzi: '同意', pinyin: 'tóng yì', translation: 'agree' } },
                            { id: 'n101-le', role: 'Particle', subRole: 'completion', text: { hanzi: '了', pinyin: 'le', translation: '(done)' } }
                        ]}
                    ]},
                    { id: 'n101-cl2', role: 'Embedded Clause', subRole: 'rhetorical question', children: [
                        { id: 'n101-vp2', role: 'Verb Phrase', children: [
                            { id: 'n101-nd', role: 'Adjunct', subRole: 'rhetorical marker', text: { hanzi: '难道', pinyin: 'nán dào', translation: 'could it be' } },
                            { id: 'n101-t2', role: 'Subject', text: { hanzi: '我', pinyin: 'wǒ', translation: 'I' } },
                            { id: 'n101-hai', role: 'Adjunct', text: { hanzi: '还', pinyin: 'hái', translation: 'still' } },
                            { id: 'n101-neng', role: 'Adjunct', text: { hanzi: '能', pinyin: 'néng', translation: 'can' } },
                            { id: 'n101-hv2', role: 'Head Verb', text: { hanzi: '反对', pinyin: 'fǎn duì', translation: 'object / oppose' } },
                            { id: 'n101-ma', role: 'Particle', subRole: 'question marker', text: { hanzi: '吗', pinyin: 'ma', translation: '(?)' } }
                        ]}
                    ]}
                ]}
            ]
        }
    }
];
