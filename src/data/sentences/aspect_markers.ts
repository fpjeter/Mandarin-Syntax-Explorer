import type { SentenceData } from '../../types/grammar';

export const aspectMarkers: SentenceData[] = [
    {
        id: 's62',
        category: 'Aspect Markers (着/过/了)',
        chinese: '门开着呢。',
        pinyin: 'Mén kāi zhe ne.',
        translation: 'The door is open (right now).',
        explanation: '**门** (door) is the Topic. The verb **开** (open) carries the durative aspect marker **着** (zhe). This doesn\'t mean "opening" (action in progress); it means the *state that resulted from opening* is still in effect. The door opened at some point and remains open now. The sentence-final **呢** (ne) reinforces the ongoing-state reading. This is **着** in its stative sense, one of its two primary functions. The other is the concurrent-action sense (V着 while doing something else, as in s59). Distinguishing these two is key: 坐着 can mean "is seated (state)" or "while sitting (concurrent)."',
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
                                    subRole: 'durative aspect: resulting state (着)',
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
        explanation: '**你** (you) is the Topic. The verb **去** (go) is followed by the experiential aspect marker **过** (guo). This doesn\'t ask "Did you go?" (specific past event) but "Have you ever gone?" (life experience). The difference between 了 and 过 is crucial: 我去了长城 means "I went to the Great Wall (at a specific time)"; 我去过长城 means "I\'ve been to the Great Wall (at some point in my life)." The **吗** makes it a question. To answer: 去过 (yes, I have) or 没去过 (no, never). Notice the negation uses 没, not 不. Experiential 过 always pairs with 没.',
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
                                    subRole: 'experiential aspect (过)',
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
        id: 's75',
        category: 'Aspect Markers (\u7740/\u8fc7/\u4e86)',
        chinese: '我每天都会反省自己三次。',
        pinyin: 'Wǒ měi tiān dōu huì fǎn xǐng zì jǐ sān cì.',
        translation: 'Every day I reflect on myself three times.',
        explanation: 'This modernizes the classical 吾日三省吾身. Modern Mandarin makes the frequency explicit with 每天 (\"every day\") and the habitual marker 都会 (\"always will\"), while classical Chinese compressed it into 日 (\"daily\"). *Grammatically,* 我 is the Topic. The Comment uses 每天 (time adverb) + 都会 (habitual marker, \"always will\") + 反省 (\"reflect on\") + 自己 (\"oneself\") + 三次 (\"three times,\" a verb complement showing frequency). The classical 吾身 (\"my person\") becomes reflexive 自己.',
        tree: {
            id: 's75-root', role: 'Sentence', children: [
                { id: 's75-t', role: 'Topic', text: { hanzi: '我', pinyin: 'wǒ', translation: 'I' } },
                { id: 's75-c', role: 'Comment', children: [
                    { id: 's75-mt', role: 'Adjunct', subRole: 'time', text: { hanzi: '每天', pinyin: 'měi tiān', translation: 'every day' } },
                    { id: 's75-dh', role: 'Adjunct', subRole: 'habitual', text: { hanzi: '都会', pinyin: 'dōu huì', translation: 'always will' } },
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
        explanation: 'This modernizes the classical 未之有也. The classical object-fronting pattern (之 before the verb 有) becomes standard modern word order. *Grammatically,* 从来 (\"ever/always\") + 没有 (\"have not\") + 过 (experiential aspect marker) together express \"have never experienced.\" The 过 marks that this negation covers all past experience, not just a single event. The object 这样的事 (\"this kind of thing\") uses 的 to nominalize the description.',
        tree: {
            id: 's81-root', role: 'Sentence', children: [
                { id: 's81-adv', role: 'Adjunct', subRole: 'time scope', text: { hanzi: '从来', pinyin: 'cóng lái', translation: 'ever/never' } },
                { id: 's81-neg', role: 'Adjunct', subRole: 'negation', text: { hanzi: '没有', pinyin: 'méi yǒu', translation: 'have not' } },
                { id: 's81-guo', role: 'Particle', subRole: 'experiential aspect', text: { hanzi: '过', pinyin: 'guò', translation: '(past experience)' } },
                { id: 's81-obj', role: 'Object', children: [
                    { id: 's81-attr', role: 'Attributive', text: { hanzi: '这样的', pinyin: 'zhè yàng de', translation: 'this kind of' } },
                    { id: 's81-shi', role: 'Head Noun', text: { hanzi: '事', pinyin: 'shì', translation: 'thing/matter' } },
                ]},
            ]
        }
    }
];
