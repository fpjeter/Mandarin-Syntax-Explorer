import type { SentenceData } from '../../types/grammar';

export const potentialComplements: SentenceData[] = [
    {
        id: 's34',
        category: 'Potential Complements (可能补语)',
        chinese: '这道题太难，我做不出来。',
        pinyin: 'Zhè dào tí tài nán, wǒ zuò bù chū lái.',
        translation: 'This question is too hard; I can\'t work it out.',
        explanation: 'This sentence has two clauses. First, **这道题太难** ("this question is too hard") sets the context. Then a second clause follows: **我做不出来** ("I cannot work it out"). The verb **做** ("do") + **不** + **出来** ("come out") relies on the **Internal Switch Metaphor**. The Fused Verb Package (做出来) has been split open, and the internal switch has been toggled to **不** (off). This means the result (coming out with an answer) *cannot* be achieved. Flipping the switch inside the package is how Mandarin expresses "can" or "cannot."',
        tree: {
            id: 'n34',
            role: 'Sentence',
            children: [
                {
                    id: 'n34-t',
                    role: 'Topic',
                    subRole: 'outer frame',
                    children: [
                        {
                            id: 'n34-t-attr',
                            role: 'Attributive',
                            text: { hanzi: '这道', pinyin: 'zhè dào', translation: 'this (question-measure)' },
                        },
                        {
                            id: 'n34-t-hn',
                            role: 'Head Noun',
                            text: { hanzi: '题', pinyin: 'tí', translation: 'question/problem' },
                        },
                    ],
                },
                {
                    id: 'n34-c',
                    role: 'Comment',
                    subRole: 'two sequential clauses',
                    children: [
                        {
                            id: 'n34-cl1',
                            role: 'Verb Phrase',
                            subRole: 'clause 1',
                            children: [
                                {
                                    id: 'n34-cl1-adv',
                                    role: 'Adjunct',
                                    text: { hanzi: '太', pinyin: 'tài', translation: 'too' },
                                },
                                {
                                    id: 'n34-cl1-adj',
                                    role: 'Adjective',
                                    text: { hanzi: '难', pinyin: 'nán', translation: 'hard/difficult' },
                                },
                            ],
                        },
                        {
                            id: 'n34-cl2',
                            role: 'Verb Phrase',
                            subRole: 'potential',
                            children: [
                                {
                                    id: 'n34-cl2-t',
                                    role: 'Subject',
                                    text: { hanzi: '我', pinyin: 'wǒ', translation: 'I' },
                                },
                                {
                                    id: 'n34-cl2-vp',
                                    role: 'Verb Phrase',
                                    children: [
                                        {
                                            id: 'n34-cl2-hv',
                                            role: 'Head Verb',
                                            text: { hanzi: '做', pinyin: 'zuò', translation: 'do / work' },
                                        },
                                        {
                                            id: 'n34-cl2-neg',
                                            role: 'Particle',
                                            subRole: 'potential',
                                            text: { hanzi: '不', pinyin: 'bù', translation: 'cannot (potential)' },
                                        },
                                        {
                                            id: 'n34-cl2-comp',
                                            role: 'Complement',
                                            subRole: 'directional',
                                            text: { hanzi: '出来', pinyin: 'chū lái', translation: 'come out / work out' },
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
        id: 's35',
        category: 'Potential Complements (可能补语)',
        chinese: '你放心，一个小时就写得完。',
        pinyin: 'Nǐ fàng xīn, yī gè xiǎo shí jiù xiě de wán.',
        translation: 'Don\'t worry, (you) can finish writing it in an hour.',
        explanation: '**你放心** ("don\'t worry") is a reassurance opener. The main clause is **一个小时就写得完**: within one hour, the writing *can* be finished. The verb **写** ("write") + **得** + **完** ("finish") relies on the **Internal Switch Metaphor**. Inside the Fused Verb Package (写完), the switch is flipped to **得** (on): the result (finishing) *can* be achieved! The **得** inserted into the package acts as a toggle: compare 写得完 ("can finish writing") with 写不完 ("cannot finish writing/switch off"). The **就** ("just") emphasizes how quickly it can be done.',
        tree: {
            id: 'n35',
            role: 'Sentence',
            children: [
                {
                    id: 'n35-addr',
                    role: 'Topic',
                    subRole: 'addressee',
                    text: { hanzi: '你', pinyin: 'nǐ', translation: 'you' },
                },
                {
                    id: 'n35-c',
                    role: 'Comment',
                    subRole: 'two sequential clauses',
                    children: [
                        {
                            id: 'n35-cl1',
                            role: 'Verb Phrase',
                            subRole: 'clause 1',
                            children: [
                                {
                                    id: 'n35-cl1-hv',
                                    role: 'Head Verb',
                                    text: { hanzi: '放心', pinyin: 'fàng xīn', translation: 'relax / don\'t worry' },
                                },
                            ],
                        },
                        {
                            id: 'n35-cl2',
                            role: 'Verb Phrase',
                            subRole: 'potential',
                            children: [
                                {
                                    id: 'n35-cl2-tp',
                                    role: 'Adjunct',
                                    subRole: 'time',
                                    text: { hanzi: '一个小时', pinyin: 'yī gè xiǎo shí', translation: 'one hour' },
                                },
                                {
                                    id: 'n35-cl2-adv',
                                    role: 'Adjunct',
                                    text: { hanzi: '就', pinyin: 'jiù', translation: 'just / then' },
                                },
                                {
                                    id: 'n35-cl2-vp',
                                    role: 'Verb Phrase',
                                    children: [
                                        {
                                            id: 'n35-cl2-hv',
                                            role: 'Head Verb',
                                            text: { hanzi: '写', pinyin: 'xiě', translation: 'write' },
                                        },
                                        {
                                            id: 'n35-cl2-de',
                                            role: 'Particle',
                                            subRole: 'potential',
                                            text: { hanzi: '得', pinyin: 'de', translation: 'can (potential)' },
                                        },
                                        {
                                            id: 'n35-cl2-comp',
                                            role: 'Complement',
                                            subRole: 'resultative',
                                            text: { hanzi: '完', pinyin: 'wán', translation: 'finish / complete' },
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
        id: 's44',
        category: 'Potential Complements (可能补语)',
        chinese: '这本书你看得懂吗？',
        pinyin: 'Zhè běn shū nǐ kàn de dǒng ma？',
        translation: 'Can you understand this book?',
        explanation: 'A **double-Topic** structure with a potential complement question. The outer Topic **这本书** ("this book") sets the frame: "as for this book..." Inside, **你** ("you") is the actor. The verb **看** ("read") and result **懂** ("understand") are a Fused Verb Package with its internal switch flipped to **得** (on): can the understanding be achieved? The **吗** at the end asks the listener about the state of this switch. Compare 看得懂 (switch on: "can understand") with 看不懂 (switch off: "cannot understand"). The tree shows the book as the Topic and the potential package nested inside.',
        tree: {
            id: 'n44',
            role: 'Sentence',
            children: [
                {
                    id: 'n44-outer-t',
                    role: 'Topic',
                    subRole: 'outer topic',
                    children: [
                        {
                            id: 'n44-outer-t-attr',
                            role: 'Attributive',
                            text: { hanzi: '这本', pinyin: 'zhè běn', translation: 'this (book-measure)' },
                        },
                        {
                            id: 'n44-outer-t-hn',
                            role: 'Head Noun',
                            text: { hanzi: '书', pinyin: 'shū', translation: 'book' },
                        },
                    ],
                },
                {
                    id: 'n44-c',
                    role: 'Comment',
                    children: [
                        {
                            id: 'n44-inner-t',
                            role: 'Topic',
                            subRole: 'inner topic',
                            text: { hanzi: '你', pinyin: 'nǐ', translation: 'you' },
                        },
                        {
                            id: 'n44-vp',
                            role: 'Verb Phrase',
                            children: [
                                {
                                    id: 'n44-hv',
                                    role: 'Head Verb',
                                    text: { hanzi: '看', pinyin: 'kàn', translation: 'read / look' },
                                },
                                {
                                    id: 'n44-de',
                                    role: 'Particle',
                                    subRole: 'potential',
                                    text: { hanzi: '得', pinyin: 'de', translation: 'can (potential)' },
                                },
                                {
                                    id: 'n44-comp',
                                    role: 'Complement',
                                    subRole: 'resultative',
                                    text: { hanzi: '懂', pinyin: 'dǒng', translation: 'understand / grasp' },
                                },
                                {
                                    id: 'n44-ma',
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
        id: 's45',
        category: 'Potential Complements (可能补语)',
        chinese: '昨晚我睡不着，一直到天亮。',
        pinyin: 'Zuó wǎn wǒ shuì bu zháo, yī zhí dào tiān liàng.',
        translation: 'Last night I couldn\'t fall asleep, right up until dawn.',
        explanation: 'Framed by **昨晚** ("last night"), the Topic is **我** ("I"). The verb **睡** ("sleep") and result **着** ("settle into") form a package where the internal switch is toggled to **不** (off). **睡不着** means the internal capability of falling asleep *cannot* be achieved. The continuation **一直到天亮** ("all the way until dawn") extends the scene. This is one of the most common toggled packages in daily life.',
        tree: {
            id: 'n45',
            role: 'Sentence',
            children: [
                {
                    id: 'n45-tp',
                    role: 'Adjunct',
                    subRole: 'time',
                    text: { hanzi: '昨晚', pinyin: 'zuó wǎn', translation: 'last night' },
                },
                {
                    id: 'n45-t',
                    role: 'Topic',
                    text: { hanzi: '我', pinyin: 'wǒ', translation: 'I' },
                },
                {
                    id: 'n45-c',
                    role: 'Comment',
                    children: [
                        {
                            id: 'n45-cl1',
                            role: 'Verb Phrase',
                            subRole: 'potential',
                            children: [
                                {
                                    id: 'n45-hv',
                                    role: 'Head Verb',
                                    text: { hanzi: '睡', pinyin: 'shuì', translation: 'sleep' },
                                },
                                {
                                    id: 'n45-neg',
                                    role: 'Particle',
                                    subRole: 'potential',
                                    text: { hanzi: '不', pinyin: 'bù', translation: 'cannot (potential)' },
                                },
                                {
                                    id: 'n45-comp',
                                    role: 'Complement',
                                    subRole: 'resultative',
                                    text: { hanzi: '着', pinyin: 'zháo', translation: 'catch / latch onto (state of sleep)' },
                                },
                            ],
                        },
                        {
                            id: 'n45-cl2',
                            role: 'Verb Phrase',
                            subRole: 'clause 2',
                            children: [
                                {
                                    id: 'n45-adv',
                                    role: 'Adjunct',
                                    text: { hanzi: '一直', pinyin: 'yī zhí', translation: 'straight through / all the way' },
                                },
                                {
                                    id: 'n45-prep',
                                    role: 'Preposition',
                                    text: { hanzi: '到', pinyin: 'dào', translation: 'until / up to' },
                                },
                                {
                                    id: 'n45-endpoint',
                                    role: 'Noun',
                                    text: { hanzi: '天亮', pinyin: 'tiān liàng', translation: 'dawn / daybreak' },
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 's120',
        category: 'Potential Complements (可能补语)',
        chinese: '我实在受不了了。',
        pinyin: 'Wǒ shí zài shòu bù liǎo le.',
        translation: 'I really can\'t stand it anymore.',
        explanation: '**我** ("I") is the Topic. The **不了** (bù liǎo) acts almost like a fixed phrase. It uses the **Internal Switch Metaphor**. The verb **受** ("endure") and result **了** (finish/happen) have their internal capability dial turned to **不** (off). It doesn\'t literally mean "cannot finish"; it means "unable to bear." Notice how the potential toggle (不) is trapped *inside* the verb package, fully integrating them. The final change-of-state **了** (le) concludes the sentence outside the package.',
        tree: {
            id: 's120-n',
            role: 'Sentence',
            children: [
                { id: 's120-t', role: 'Topic', text: { hanzi: '我', pinyin: 'wǒ', translation: 'I' } },
                {
                    id: 's120-c',
                    role: 'Comment',
                    children: [
                        { id: 's120-adv', role: 'Adjunct', subRole: 'degree', text: { hanzi: '实在', pinyin: 'shí zài', translation: 'really/truly' } },
                        {
                            id: 's120-pot',
                            role: 'Complement',
                            subRole: 'potential',
                            children: [
                                { id: 's120-pot-hv', role: 'Head Verb', text: { hanzi: '受', pinyin: 'shòu', translation: 'endure' } },
                                { id: 's120-pot-bu', role: 'Particle', subRole: 'potential', text: { hanzi: '不', pinyin: 'bù', translation: 'cannot' } },
                                { id: 's120-pot-liao', role: 'Particle', subRole: 'result', text: { hanzi: '了', pinyin: 'liǎo', translation: 'finish/bare' } }
                            ]
                        },
                        { id: 's120-le', role: 'Particle', subRole: 'change of state', text: { hanzi: '了', pinyin: 'le', translation: '(anymore)' } }
                    ]
                }
            ]
        }
    }
];
