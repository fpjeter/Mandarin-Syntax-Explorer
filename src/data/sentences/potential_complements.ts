import type { SentenceData } from '../../types/grammar';

export const potentialComplements: SentenceData[] = [
    {
        id: 's34',
        category: 'Potential Complements (可能补语)',
        chinese: '这道题太难，我做不出来。',
        pinyin: 'Zhè dào tí tài nán, wǒ zuò bù chū lái.',
        translation: 'This question is too hard; I can\'t work it out.',
        explanation: '**你放心** ("don\'t worry") sets a reassuring tone at the start. The main event follows: **我一定做得到** = 做 ("do") + 得 (able) + 到 ("arrive at, achieve"). This is the positive form of the potential complement: I *can* achieve it. Compare with the negative: 做不到 ("cannot achieve it"). The 得 signals ability; the complement 到 describes the result (reaching the goal). This pattern is extremely common for expressing confidence or doubt: 看得见/看不见 ("can see / cannot see"), 听得清/听不清 ("can hear clearly / cannot hear clearly").',
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
                            subRole: 'clause 1: adjectival predicate',
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
                            subRole: 'clause 2: potential complement (negative)',
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
                                            subRole: 'potential negator (V + 不 + result)',
                                            text: { hanzi: '不', pinyin: 'bù', translation: 'cannot (potential)' },
                                        },
                                        {
                                            id: 'n34-cl2-comp',
                                            role: 'Complement',
                                            subRole: 'directional (potential)',
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
        explanation: '**你放心** ("don\'t worry") sets a reassuring tone. The main event features a positive potential complement: **写得完** ("can finish writing"). By inserting **得** between the verb 写 ("write") and the result 完 ("finish"), you confirm that the writing *can* reach completion. Flipping the switch to **不** would block it: 写不完 ("cannot finish writing"). One tiny syllable changes the entire meaning. This is the same internal switch you see in all potential complement sentences.',
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
                            subRole: 'clause 1: fixed expression',
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
                            subRole: 'clause 2: potential complement (affirmative)',
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
                                            subRole: 'potential affirmative marker (V + 得 + result)',
                                            text: { hanzi: '得', pinyin: 'de', translation: 'can (potential)' },
                                        },
                                        {
                                            id: 'n35-cl2-comp',
                                            role: 'Complement',
                                            subRole: 'resultative (potential)',
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
        explanation: 'A **double-Topic** structure with a potential complement question. The outer Topic **这个字** ("this character") sets the frame: "as for this character..." The inner Topic zooms in on a specific aspect: what about reading it? The potential complement **看得出来看不出来** repeats the positive and negative forms back-to-back to form a question: "can you make it out, or not?" This is the A-not-A question pattern applied to potential complements. The tree shows both halves of the question nested inside the Comment.',
        tree: {
            id: 'n44',
            role: 'Sentence',
            children: [
                {
                    id: 'n44-outer-t',
                    role: 'Topic',
                    subRole: 'outer topic (frame)',
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
                            subRole: 'inner topic (subject)',
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
                                    subRole: 'potential affirmative marker',
                                    text: { hanzi: '得', pinyin: 'de', translation: 'can (potential)' },
                                },
                                {
                                    id: 'n44-comp',
                                    role: 'Complement',
                                    subRole: 'resultative (potential)',
                                    text: { hanzi: '懂', pinyin: 'dǒng', translation: 'understand / grasp' },
                                },
                                {
                                    id: 'n44-ma',
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
        id: 's45',
        category: 'Potential Complements (可能补语)',
        chinese: '昨晚我睡不着，一直到天亮。',
        pinyin: 'Zuó wǎn wǒ shuì bu zháo, yī zhí dào tiān liàng.',
        translation: 'Last night I couldn\'t fall asleep, right up until dawn.',
        explanation: 'Framed by **昨晚** ("last night"), the Topic is **我** ("I"). The Comment describes a failed attempt using two potential complements. First, **睡不着** = 睡 ("sleep") + 不 + 着 ("achieve the state"), meaning "unable to fall asleep." Then, after tossing and turning, **怎么也睡不着**: the 怎么也 ("no matter what") emphasizes the impossibility. The 着 complement specifically means "achieving or entering a state." Compare: 找着 ("found it, achieved finding") versus 找不着 ("cannot find it"). The tree shows both potential complements in sequence.',
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
                            subRole: 'clause 1: potential complement (negative)',
                            children: [
                                {
                                    id: 'n45-hv',
                                    role: 'Head Verb',
                                    text: { hanzi: '睡', pinyin: 'shuì', translation: 'sleep' },
                                },
                                {
                                    id: 'n45-neg',
                                    role: 'Particle',
                                    subRole: 'potential negator',
                                    text: { hanzi: '不', pinyin: 'bù', translation: 'cannot (potential)' },
                                },
                                {
                                    id: 'n45-comp',
                                    role: 'Complement',
                                    subRole: 'resultative · potential (catch/settle into state)',
                                    text: { hanzi: '着', pinyin: 'zháo', translation: 'catch / latch onto (state of sleep)' },
                                },
                            ],
                        },
                        {
                            id: 'n45-cl2',
                            role: 'Verb Phrase',
                            subRole: 'clause 2: extent',
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
        explanation: '**我** ("I") is the Topic. The verb is **受** ("to endure"). The **不了** (bù liǎo) is a highly common potential complement that acts almost like a fixed phrase. It doesn\'t literally mean "cannot finish"; it means "unable to bear/unable to happen." So 受不了 means "cannot endure." Notice how the potential marker (不) is trapped *between* the verb and the complement (了), fully integrating them. The final **了** (le) is a change-of-state marker, signaling "it has reached the point where I can\'t stand it anymore."',
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
                            subRole: 'lexicalized potential phrase',
                            children: [
                                { id: 's120-pot-hv', role: 'Head Verb', text: { hanzi: '受', pinyin: 'shòu', translation: 'endure' } },
                                { id: 's120-pot-bu', role: 'Particle', subRole: 'potential negation', text: { hanzi: '不', pinyin: 'bù', translation: 'cannot' } },
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
