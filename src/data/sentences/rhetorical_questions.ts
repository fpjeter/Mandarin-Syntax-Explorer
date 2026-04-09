import type { SentenceData } from '../../types/grammar';

export const rhetoricalQuestions: SentenceData[] = [

    {
        id: 's56',
        category: 'Rhetorical Questions (反问句)',
        chinese: '你难道不知道吗？',
        pinyin: 'Nǐ nán dào bù zhī dào ma?',
        translation: 'Don\'t you know? (Surely you must know!)',

        explanation: '**你** ("you") is the Topic. **难道** ("could it be that / don\'t tell me") opens the Comment and signals a rhetorical question: the speaker already knows the answer and is challenging the listener. The expected response is denial: "Of course not." The **吗** at the end confirms this is a question, but 难道 makes it rhetorical rather than genuine. The tree shows 难道 as a mood marker wrapping the entire Comment. This pattern is extremely common in arguments and emotional speech: 难道你不知道吗 ("Don\'t you know?"), 难道这不对吗 ("Isn\'t this right?").',
        tree: {
            id: 'n56',
            role: 'Sentence',
            children: [
                {
                    id: 'n56-t',
                    role: 'Topic', semanticRole: 'Experiencer',
                    text: { hanzi: '你', pinyin: 'nǐ', translation: 'you' },
                },
                {
                    id: 'n56-c',
                    role: 'Comment',
                    children: [
                        {
                            id: 'n56-rhet',
                            role: 'Adjunct',
                            subRole: 'rhetorical',
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
                                    subRole: 'question particle',
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
        explanation: 'A modern take on 王侯將相寧有種乎 (from the Shiji: "Are kings and generals born to their station?"). The classical rhetorical marker 寧...乎 becomes modern **难道...吗**. The tree shows 难道 at the start of the Comment, framing the entire clause as a challenge. The modern version spells out: **难道当官的人就天生比别人强吗** ("Could it be that those in power are inherently stronger than others?"). The expected answer is "no," just as in the original. This is one of the most famous lines in Chinese history, used to justify rebellion.',
        tree: {
            id: 's76-root', role: 'Sentence', children: [
                { id: 's76-t', role: 'Topic', semanticRole: 'Theme', text: { hanzi: '王侯将相', pinyin: 'wáng hóu jiàng xiàng', translation: 'kings, lords, generals' } },
                { id: 's76-c', role: 'Comment', subRole: 'rhetorical', children: [
                    { id: 's76-nd', role: 'Adjunct', subRole: 'rhetorical', text: { hanzi: '难道', pinyin: 'nán dào', translation: 'don\'t tell me' } },
                    { id: 's76-shi', role: 'Copula', text: { hanzi: '是', pinyin: 'shì', translation: 'is' } },
                    { id: 's76-ts', role: 'Complement', text: { hanzi: '天生的', pinyin: 'tiān shēng de', translation: 'innate/born' } },
                    { id: 's76-ma', role: 'Particle', subRole: 'question particle', text: { hanzi: '吗', pinyin: 'ma', translation: '(?)' } },
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
        explanation: 'The sentence opens with **难道** ("could it be that"), immediately signaling a rhetorical question. The **不** inside the clause creates a double negative effect with the rhetorical frame: 难道不知道 = "don\'t tell me you don\'t know" = "surely you know." The expected answer is "yes, you do know." The tree shows 难道 wrapping the Comment, with the negation 不 inside the verb phrase. Rhetorical questions with 难道 are one of Mandarin\'s strongest tools for expressing disbelief or mild accusation.',
        tree: {
            id: 'n100-root', role: 'Sentence', children: [
                { id: 'n100-t', role: 'Topic', semanticRole: 'Experiencer', isDropped: true, impliedText: '这' },
                { id: 'n100-c', role: 'Comment', children: [
                    { id: 'n100-nd', role: 'Adjunct', subRole: 'rhetorical', text: { hanzi: '难道', pinyin: 'nán dào', translation: 'could it be' } },
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
                        { id: 'n100-le', role: 'Particle', subRole: 'aspect marker', text: { hanzi: '了', pinyin: 'le', translation: '(done)' } },
                        { id: 'n100-ma', role: 'Particle', subRole: 'question particle', text: { hanzi: '吗', pinyin: 'ma', translation: '(?)' } }
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
        explanation: 'A classic defensive rhetorical question. The **难道** signals the speaker is pushing back: "Could it be that this is my fault?" The expected answer is "no, of course not." The tree shows the rhetorical frame wrapping the entire Comment. The **是** links the topic to the blame (是我的错), and 吗 confirms it as a question. Notice that without 难道, the sentence would be a genuine question ("Is this my fault?"). With 难道, it becomes a challenge: the speaker already believes the answer is no.',
        tree: {
            id: 'n101-root', role: 'Sentence', children: [
                { id: 'n101-ps', role: 'Parallel Sentence', children: [
                    { id: 'n101-cl1', role: 'Embedded Clause', children: [
                        { id: 'n101-t1', role: 'Subject', text: { hanzi: '大家', pinyin: 'dà jiā', translation: 'everyone' } },
                        { id: 'n101-vp1', role: 'Verb Phrase', children: [
                            { id: 'n101-dou', role: 'Adjunct', text: { hanzi: '都', pinyin: 'dōu', translation: 'all' } },
                            { id: 'n101-hv1', role: 'Head Verb', text: { hanzi: '同意', pinyin: 'tóng yì', translation: 'agree' } },
                            { id: 'n101-le', role: 'Particle', subRole: 'aspect marker', text: { hanzi: '了', pinyin: 'le', translation: '(done)' } }
                        ]}
                    ]},
                    { id: 'n101-cl2', role: 'Embedded Clause', subRole: 'rhetorical', children: [
                        { id: 'n101-vp2', role: 'Verb Phrase', children: [
                            { id: 'n101-nd', role: 'Adjunct', subRole: 'rhetorical', text: { hanzi: '难道', pinyin: 'nán dào', translation: 'could it be' } },
                            { id: 'n101-t2', role: 'Subject', text: { hanzi: '我', pinyin: 'wǒ', translation: 'I' } },
                            { id: 'n101-hai', role: 'Adjunct', text: { hanzi: '还', pinyin: 'hái', translation: 'still' } },
                            { id: 'n101-neng', role: 'Adjunct', text: { hanzi: '能', pinyin: 'néng', translation: 'can' } },
                            { id: 'n101-hv2', role: 'Head Verb', text: { hanzi: '反对', pinyin: 'fǎn duì', translation: 'object / oppose' } },
                            { id: 'n101-ma', role: 'Particle', subRole: 'question particle', text: { hanzi: '吗', pinyin: 'ma', translation: '(?)' } }
                        ]}
                    ]}
                ]}
            ]
        }
    },
    {
        id: 's114',
        category: 'Rhetorical Questions (反问句)',
        chinese: '你不是已经吃过了吗？',
        pinyin: 'Nǐ bú shì yǐ jīng chī guò le ma?',
        translation: 'Didn\'t you already eat?',
        explanation: '**你** ("you") is the Topic. The Comment uses the **不是…吗** rhetorical frame, which is far more common in casual conversation than the intense 难道 pattern. **不是** ("isn\'t it that") opens the challenge, and **吗** closes the question. The expected answer is "yes, you did eat." The speaker is not genuinely asking; they are pushing back, perhaps because the listener is reaching for more food. The verb phrase **已经吃过了** ("already ate," with 过 marking past experience and 了 marking completion) sits inside the frame. This 不是...吗 pattern is one of the most natural ways to express mild surprise or gentle challenge in everyday speech.',
        tree: {
            id: 's114-n',
            role: 'Sentence',
            children: [
                { id: 's114-t', role: 'Topic', semanticRole: 'Theme', text: { hanzi: '你', pinyin: 'nǐ', translation: 'you' } },
                {
                    id: 's114-c',
                    role: 'Comment',
                    children: [
                        { id: 's114-cop', role: 'Copula', subRole: 'rhetorical', text: { hanzi: '不是', pinyin: 'bú shì', translation: 'is it not that' } },
                        { id: 's114-adv', role: 'Adjunct', text: { hanzi: '已经', pinyin: 'yǐ jīng', translation: 'already' } },
                        { id: 's114-hv', role: 'Head Verb', text: { hanzi: '吃', pinyin: 'chī', translation: 'eat' } },
                        { id: 's114-guo', role: 'Particle', subRole: 'experiential', text: { hanzi: '过', pinyin: 'guò', translation: '(experienced)' } },
                        { id: 's114-le', role: 'Particle', subRole: 'aspect marker', text: { hanzi: '了', pinyin: 'le', translation: '(done)' } },
                        { id: 's114-ma', role: 'Particle', subRole: 'question particle', text: { hanzi: '吗', pinyin: 'ma', translation: '?' } }
                    ]
                }
            ]
        }
    },
    {
        id: 's115',
        category: 'Rhetorical Questions (反问句)',
        chinese: '我怎么知道？',
        pinyin: 'Wǒ zěn me zhī dào?',
        translation: 'How would I know?',
        explanation: '**我** ("I") is the Topic. The Comment uses **怎么** ("how") before the verb **知道** ("know") to form a rhetorical question. The speaker is not genuinely asking "by what method would I know?" They are pushing back: "There is no way I would know." Rhetorical 怎么 is one of the most common ways to express frustration or deflect responsibility in spoken Mandarin. It is much lighter than 难道 and much more natural in casual speech. The tree shows a simple structure: just Topic + 怎么 + verb. Other examples: 我怎么会忘 ("How could I forget?"), 你怎么能这样 ("How can you be like this?").',
        tree: {
            id: 's115-n',
            role: 'Sentence',
            children: [
                { id: 's115-t', role: 'Topic', semanticRole: 'Experiencer', text: { hanzi: '我', pinyin: 'wǒ', translation: 'I' } },
                {
                    id: 's115-c',
                    role: 'Comment',
                    children: [
                        { id: 's115-adv', role: 'Adjunct', subRole: 'rhetorical', text: { hanzi: '怎么', pinyin: 'zěn me', translation: 'how could' } },
                        { id: 's115-hv', role: 'Head Verb', text: { hanzi: '知道', pinyin: 'zhī dào', translation: 'know' } }
                    ]
                }
            ]
        }
    }
];
