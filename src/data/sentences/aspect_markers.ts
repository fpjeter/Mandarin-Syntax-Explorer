import type { SentenceData } from '../../types/grammar';

export const aspectMarkers: SentenceData[] = [
    {
        id: 's62',
        category: 'Aspect Markers (着/过/了)',
        chinese: '门开着呢。',
        pinyin: 'Mén kāi zhe ne.',
        translation: 'The door is open (right now).',
        explanation: 'Notice **门** ("door") at the top of the tree as the Topic. The verb **开** ("open") carries the aspect marker **着** (zhe), which here marks an ongoing *state*, not an action in progress. The door opened at some point and remains open now. The sentence-final **呢** (ne) reinforces this: it is still the case. This stative use of 着 is one of its two main functions. The other is the concurrent-action sense (doing something *while* in a position). Distinguishing these two is key: 坐着 can mean "is seated" (state) or "while sitting" (concurrent).',
        tree: {
            id: 'n62',
            role: 'Sentence',
            children: [
                {
                    id: 'n62-t',
                    role: 'Topic',
                    text: { hanzi: '门', pinyin: 'mén', translation: 'door' },
                },
                {
                    id: 'n62-c',
                    role: 'Comment',
                    children: [
                        {
                            id: 'n62-vp',
                            role: 'Verb Phrase',
                            children: [
                                {
                                    id: 'n62-hv',
                                    role: 'Head Verb',
                                    text: { hanzi: '开', pinyin: 'kāi', translation: 'open' },
                                },
                                {
                                    id: 'n62-zhe',
                                    role: 'Particle',
                                    subRole: 'aspect marker',
                                    text: { hanzi: '着', pinyin: 'zhe', translation: '(ongoing state)' },
                                },
                                {
                                    id: 'n62-ne',
                                    role: 'Particle',
                                    subRole: 'ongoing-state emphasis',
                                    text: { hanzi: '呢', pinyin: 'ne', translation: '(still the case)' },
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 's63',
        category: 'Aspect Markers (着/过/了)',
        chinese: '你去过长城吗？',
        pinyin: 'Nǐ qù guo Cháng Chéng ma?',
        translation: 'Have you been to the Great Wall?',
        explanation: '**你** ("you") is the Topic. The verb **去** ("go") is followed by the experiential aspect marker **过** (guo). This does not ask "Did you go?" (a specific past event); it asks "Have you *ever* gone?" (life experience). The difference between 了 and 过 is crucial: 我去了长城 means "I went to the Great Wall (at a specific time)"; 我去过长城 means "I have been there at some point in my life." The **吗** at the end makes it a yes-or-no question. To answer: 去过 ("yes, I have") or 没去过 ("no, never"). Notice the negation uses 没, not 不.',
        tree: {
            id: 'n63',
            role: 'Sentence',
            children: [
                {
                    id: 'n63-t',
                    role: 'Topic',
                    text: { hanzi: '你', pinyin: 'nǐ', translation: 'you' },
                },
                {
                    id: 'n63-c',
                    role: 'Comment',
                    children: [
                        {
                            id: 'n63-vp',
                            role: 'Verb Phrase',
                            children: [
                                {
                                    id: 'n63-hv',
                                    role: 'Head Verb',
                                    text: { hanzi: '去', pinyin: 'qù', translation: 'go' },
                                },
                                {
                                    id: 'n63-guo',
                                    role: 'Particle',
                                    subRole: 'aspect marker',
                                    text: { hanzi: '过', pinyin: 'guo', translation: '(have ever)' },
                                },
                                {
                                    id: 'n63-obj',
                                    role: 'Object',
                                    text: { hanzi: '长城', pinyin: 'Cháng Chéng', translation: 'Great Wall' },
                                },
                                {
                                    id: 'n63-ma',
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
        id: 's75',
        category: 'Aspect Markers (\u7740/\u8fc7/\u4e86)',
        chinese: '我每天都会反省自己三次。',
        pinyin: 'Wǒ měi tiān dōu huì fǎn xǐng zì jǐ sān cì.',
        translation: 'Every day I reflect on myself three times.',
        explanation: 'A modern take on 吾日三省吾身 (from Zengzi, in the Analects: "Each day I examine myself on three points"). Modern Mandarin makes the frequency explicit with **每天** ("every day") and the habitual marker **都会** ("always will"), while classical Chinese compressed it into the single character 日 ("daily"). The Topic is **我** ("I"). The Comment lines up: 每天 + 都会 + **反省** ("reflect on") + **自己** ("oneself") + **三次** ("three times," a frequency complement). The classical 吾身 ("my person") becomes the modern reflexive 自己.',
        tree: {
            id: 's75-root', role: 'Sentence', children: [
                { id: 's75-t', role: 'Topic', text: { hanzi: '我', pinyin: 'wǒ', translation: 'I' } },
                { id: 's75-c', role: 'Comment', children: [
                    { id: 's75-mt', role: 'Adjunct', subRole: 'time', text: { hanzi: '每天', pinyin: 'měi tiān', translation: 'every day' } },
                    { id: 's75-dh', role: 'Adjunct', subRole: 'frequency', text: { hanzi: '都会', pinyin: 'dōu huì', translation: 'always will' } },
                    { id: 's75-fx', role: 'Head Verb', text: { hanzi: '反省', pinyin: 'fǎn xǐng', translation: 'reflect on' } },
                    { id: 's75-zj', role: 'Object', text: { hanzi: '自己', pinyin: 'zì jǐ', translation: 'oneself' } },
                    { id: 's75-sc', role: 'Complement', subRole: 'frequency', text: { hanzi: '三次', pinyin: 'sān cì', translation: 'three times' } },
                ]},
            ]
        }
    },
    {
        id: 's81',
        category: 'Aspect Markers (\u7740/\u8fc7/\u4e86)',
        chinese: '从来没有过这样的事。',
        pinyin: 'Cóng lái méi yǒu guò zhè yàng de shì.',
        translation: 'There has never been such a thing.',
        explanation: 'A modern take on 未之有也 (a classical expression meaning "such a thing has never existed"). The classical object-fronting pattern (之 placed before the verb 有) becomes standard modern word order. The key combination is **从来** ("ever") + **没有** ("have not") + **过** (experiential aspect marker): together they mean "have never experienced." The 过 signals that this negation covers all of past experience, not just a single event. The object **这样的事** ("this kind of thing") uses 的 to turn the description into a noun phrase.',
        tree: {
            id: 's81-root', role: 'Sentence', children: [
                { id: 's81-t', role: 'Topic', isDropped: true, impliedText: '[现场]' },
                { id: 's81-c', role: 'Comment', children: [
                    { id: 's81-adv', role: 'Adjunct', subRole: 'time', text: { hanzi: '从来', pinyin: 'cóng lái', translation: 'ever/never' } },
                    { id: 's81-neg', role: 'Adjunct', subRole: 'negation', text: { hanzi: '没有', pinyin: 'méi yǒu', translation: 'have not' } },
                    { id: 's81-guo', role: 'Particle', subRole: 'aspect marker', text: { hanzi: '过', pinyin: 'guò', translation: '(past experience)' } },
                    { id: 's81-obj', role: 'Object', children: [
                        { id: 's81-attr', role: 'Attributive', text: { hanzi: '这样的', pinyin: 'zhè yàng de', translation: 'this kind of' } },
                        { id: 's81-shi', role: 'Head Noun', text: { hanzi: '事', pinyin: 'shì', translation: 'thing/matter' } },
                    ]},
                ]},
            ]
        }
    },
    {
        id: 's110',
        category: 'Aspect Markers (着/过/了)',
        chinese: '我学了三年中文了。',
        pinyin: 'Wǒ xué le sān nián Zhōng wén le.',
        translation: 'I\'ve been studying Chinese for three years (and still am).',
        explanation: '**我** ("I") is the Topic. This sentence uses **two separate 了**, and the difference between them matters. The first **了** (after the verb 学) marks that the action of studying has accumulated. The second **了** (at the end of the sentence) signals that this situation continues up to the present moment. Together, they mean: "I have studied for three years *and I\'m still studying*." If you removed the final 了, the sentence would mean "I studied for three years (and then stopped)." This double-了 pattern is one of the trickiest but most important aspect distinctions in Mandarin.',
        tree: {
            id: 's110-n',
            role: 'Sentence',
            children: [
                { id: 's110-t', role: 'Topic', text: { hanzi: '我', pinyin: 'wǒ', translation: 'I' } },
                {
                    id: 's110-c',
                    role: 'Comment',
                    children: [
                        { id: 's110-hv', role: 'Head Verb', text: { hanzi: '学', pinyin: 'xué', translation: 'study' } },
                        { id: 's110-le1', role: 'Particle', subRole: 'aspect marker', text: { hanzi: '了', pinyin: 'le', translation: '(completed)' } },
                        { 
                            id: 's110-dur', 
                            role: 'Complement', 
                            subRole: 'duration',
                            children: [
                                { id: 's110-dur-num', role: 'Attributive', text: { hanzi: '三', pinyin: 'sān', translation: 'three' } },
                                { id: 's110-dur-mw', role: 'Measure Word', text: { hanzi: '年', pinyin: 'nián', translation: 'years' } }
                            ]
                        },
                        { id: 's110-obj', role: 'Object', text: { hanzi: '中文', pinyin: 'Zhōng wén', translation: 'Chinese (language)' } },
                        { id: 's110-le2', role: 'Particle', subRole: 'change of state / ongoing', text: { hanzi: '了', pinyin: 'le', translation: '(up to now)' } }
                    ]
                }
            ]
        }
    },
    {
        id: 's111',
        category: 'Aspect Markers (着/过/了)',
        chinese: '他笑着说："没关系。"',
        pinyin: 'Tā xiào zhe shuō: "Méi guān xi."',
        translation: 'He said with a smile: "It\'s fine."',
        explanation: '**他** ("he") is the Topic. The Comment chains two actions happening at the same time: **笑着** ("smiling") and **说** ("said"). The **着** after 笑 is the concurrent-action marker: it tells you that the smiling was happening while the speaking occurred. This is the *other* major use of 着, different from the stative use (门开着, "the door is open"). Stative 着 describes a lasting state; concurrent 着 describes a manner or background action. Think of it as: [verb1 + 着] sets the backdrop, then [verb2] is the main event. Other examples: 站着吃 ("eat while standing"), 哭着跑 ("run while crying").',
        tree: {
            id: 's111-n',
            role: 'Sentence',
            children: [
                { id: 's111-t', role: 'Topic', text: { hanzi: '他', pinyin: 'tā', translation: 'he' } },
                {
                    id: 's111-c',
                    role: 'Comment',
                    children: [
                        {
                            id: 's111-manner',
                            role: 'Adjunct',
                            subRole: 'manner',
                            children: [
                                { id: 's111-vp-hv', role: 'Head Verb', text: { hanzi: '笑', pinyin: 'xiào', translation: 'smile/laugh' } },
                                { id: 's111-vp-zhe', role: 'Particle', subRole: 'concurrent action', text: { hanzi: '着', pinyin: 'zhe', translation: '(ongoing background)' } }
                            ]
                        },
                        { id: 's111-hv', role: 'Head Verb', text: { hanzi: '说', pinyin: 'shuō', translation: 'say' } },
                        { id: 's111-obj', role: 'Object', subRole: 'quoted speech', text: { hanzi: '没关系', pinyin: 'méi guān xi', translation: 'it\'s fine' } }
                    ]
                }
            ]
        }
    }
];
