import type { SentenceData } from '../../types/grammar';

export const potentialComplements: SentenceData[] = [
    {
        id: 's34',
        category: 'Potential Complements (可能补语)',
        chinese: '这道题太难，我做不出来。',
        pinyin: 'Zhè dào tí tài nán, wǒ zuò bù chū lái.',
        translation: 'This question is too hard; I can\'t work it out.',
        explanation: 'The outer Topic is **这道题** (this question; 道 is the measure word for questions and paths). The Comment plays out in two clauses: the first says *it\'s too hard*; the second says *I can\'t manage it*. The key is **做不出来**: the verb **做** (do/work) + the potential negator **不** + the directional complement **出来** (come out). Inserting **不** between the verb and its result says: *unable to achieve that result*. Swap 不 for **得** and you get 做**得**出来, meaning *can* work it out. This V + 得/不 + complement slot is how Mandarin expresses possibility and impossibility for almost any action.',
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
        explanation: '**你放心** (don\'t worry, literally "you release heart") is a fixed opening phrase. The main clause shows the **affirmative potential complement**: **写得完**: write + **得** (can) + 完 (finish). Inserting **得** between the verb and its result says: *able to achieve that outcome*. The time phrase **一个小时** (one hour) and adverb **就** (just/only) add "in just one hour." Compare with the negative: 写**不**完 would mean *can\'t finish writing*. The only difference is that tiny 得/不 slot; one syllable switches the meaning between possible and impossible.',
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
        explanation: 'A **double-topic** structure with a potential complement question. **这本书** (this book; 本 is the measure word for books) is the outer Topic. **你** (you) is the inner Topic. The potential complement **看得懂** uses **看** (read/look) + **得** + **懂** (understand): *can read-to-the-point-of-understanding*. The **吗** at the end turns it into a yes/no question. To answer yes: 看**得**懂 (can understand). To answer no: 看**不**懂 (can\'t understand). This is a natural question form when politely checking comprehension.',
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
        explanation: 'The time phrase **昨晚** (last night) sets the scene. **我** (I) is the Topic. The potential complement **睡不着**: **睡** (sleep) + **不** + **着** (着 here means "catch / latch onto": the state of being asleep was unreachable), conveys the inability to *reach* the state of sleep. This is a uniquely vivid potential complement: 着 as a result morpheme expresses "catching" or "settling into" a state. Compare: 找得着 (can find / manage to locate), 猜不着 (can\'t guess). The second clause **一直到天亮** (straight until dawn) extends the picture.',
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
    }
];
