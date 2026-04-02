import type { SentenceData } from '../../types/grammar';

export const correlativePatterns: SentenceData[] = [
    {
        id: 's60',
        category: 'Correlative Patterns (越…越…)',
        chinese: '中文越学越有意思。',
        pinyin: 'Zhōng wén yuè xué yuè yǒu yì si.',
        translation: 'The more you study Chinese, the more interesting it gets.',
        explanation: '**中文** ("Chinese") is the Topic. The **越…越…** (yuè…yuè…) frame pairs two clauses: **越学** ("the more you study") and **越有意思** ("the more interesting"). The pattern is: 越 A 越 B: as A increases, B increases. The subject of 学 is omitted (an implied general "you"). This correlative frame is one of the most elegant in Mandarin: no conjunction, no relative clause, just the repeated 越 linking cause and effect. Other examples: 越吃越胖 ("the more you eat, the fatter you get"), 越想越难过 ("the more you think about it, the sadder you feel").',
        tree: {
            id: 'n60',
            role: 'Sentence',
            children: [
                {
                    id: 'n60-t',
                    role: 'Topic',
                    text: { hanzi: '中文', pinyin: 'zhōng wén', translation: 'Chinese (language)' },
                },
                {
                    id: 'n60-c',
                    role: 'Comment',
                    subRole: 'correlative 越…越…',
                    children: [
                        {
                            id: 'n60-cl1',
                            role: 'Verb Phrase',
                            subRole: 'clause A: condition',
                            children: [
                                {
                                    id: 'n60-yue1',
                                    role: 'Adjunct',
                                    subRole: 'correlative marker (越)',
                                    text: { hanzi: '越', pinyin: 'yuè', translation: 'the more' },
                                },
                                {
                                    id: 'n60-hv1',
                                    role: 'Head Verb',
                                    text: { hanzi: '学', pinyin: 'xué', translation: 'study' },
                                },
                            ],
                        },
                        {
                            id: 'n60-cl2',
                            role: 'Verb Phrase',
                            subRole: 'clause B: consequence',
                            children: [
                                {
                                    id: 'n60-yue2',
                                    role: 'Adjunct',
                                    subRole: 'correlative marker (越)',
                                    text: { hanzi: '越', pinyin: 'yuè', translation: 'the more' },
                                },
                                {
                                    id: 'n60-pred',
                                    role: 'Adjective',
                                    text: { hanzi: '有意思', pinyin: 'yǒu yì si', translation: 'interesting' },
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 's61',
        category: 'Correlative Patterns (越…越…)',
        chinese: '他一说话就脸红。',
        pinyin: 'Tā yī shuō huà jiù liǎn hóng.',
        translation: 'The moment he speaks, he blushes.',
        explanation: '**他** ("he") is the Topic. The **一…就…** (yī…jiù…) frame expresses "as soon as A, immediately B." **一说话** ("as soon as he speaks") triggers **就脸红** ("immediately blushes"). The 一 + verb signals the trigger event; the 就 signals instantaneous consequence. 脸红 is a subject-predicate compound: 脸 ("face") + 红 ("turns red"). This pattern is extremely common in everyday speech: 一下雨就堵车 ("as soon as it rains, traffic jams"), 一看见她就笑 ("the moment he sees her, he smiles"). The two clauses share the same subject here, but they don\'t have to.',
        tree: {
            id: 'n61',
            role: 'Sentence',
            children: [
                {
                    id: 'n61-t',
                    role: 'Topic',
                    text: { hanzi: '他', pinyin: 'tā', translation: 'he' },
                },
                {
                    id: 'n61-c',
                    role: 'Comment',
                    subRole: 'correlative 一…就…',
                    children: [
                        {
                            id: 'n61-cl1',
                            role: 'Verb Phrase',
                            subRole: 'trigger clause (一 + V)',
                            children: [
                                {
                                    id: 'n61-yi',
                                    role: 'Adjunct',
                                    subRole: 'trigger marker (一)',
                                    text: { hanzi: '一', pinyin: 'yī', translation: 'as soon as' },
                                },
                                {
                                    id: 'n61-hv1',
                                    role: 'Head Verb',
                                    text: { hanzi: '说话', pinyin: 'shuō huà', translation: 'speak / talk' },
                                },
                            ],
                        },
                        {
                            id: 'n61-cl2',
                            role: 'Verb Phrase',
                            subRole: 'consequence clause (就 + V)',
                            children: [
                                {
                                    id: 'n61-jiu',
                                    role: 'Adjunct',
                                    subRole: 'immediate consequence marker (就)',
                                    text: { hanzi: '就', pinyin: 'jiù', translation: 'immediately / then' },
                                },
                                {
                                    id: 'n61-pred',
                                    role: 'Adjective',
                                    subRole: 'subject-predicate compound',
                                    text: { hanzi: '脸红', pinyin: 'liǎn hóng', translation: 'blush (face turns red)' },
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 's84',
        category: 'Correlative Patterns (越…越…)',
        chinese: '只学习不思考，越学越糊涂；只思考不学习，越想越危险。',
        pinyin: 'Zhǐ xué xí bù sī kǎo, yuè xué yuè hú tu; zhǐ sī kǎo bù xué xí, yuè xiǎng yuè wéi xiǎn.',
        translation: 'If you only study without thinking, the more you study the more confused you get; if you only think without studying, the more you think the more perilous it becomes.',
        explanation: 'This is a modern version of 學而不思則罔，思而不學則殆 (from Confucius: "Learning without thinking leads to confusion; thinking without learning leads to peril"). The classical conditional pattern 則 ("then") becomes the modern correlative **越...越...** ("the more X, the more Y"). Each half follows the same pattern: 只A不B ("only A, not B") sets up the flawed approach, then 越A越B gives the escalating consequence. The 越...越 pattern shows that two changes happen together: as one increases, so does the other.',
        tree: {
            id: 's84-root', role: 'Sentence', children: [
                { id: 's84-c1', role: 'Topic', subRole: 'first correlative', children: [
                    { id: 's84-premise1', role: 'Adjunct', subRole: 'condition', text: { hanzi: '只学习不思考', pinyin: 'zhǐ xué xí bù sī kǎo', translation: 'only study, not think' } },
                    { id: 's84-yue1a', role: 'Adjunct', subRole: 'correlative marker', text: { hanzi: '越', pinyin: 'yuè', translation: 'the more' } },
                    { id: 's84-xue', role: 'Head Verb', text: { hanzi: '学', pinyin: 'xué', translation: 'study' } },
                    { id: 's84-yue1b', role: 'Adjunct', subRole: 'correlative marker', text: { hanzi: '越', pinyin: 'yuè', translation: 'the more' } },
                    { id: 's84-hutu', role: 'Head Verb', text: { hanzi: '糊涂', pinyin: 'hú tu', translation: 'confused' } },
                ]},
                { id: 's84-c2', role: 'Comment', subRole: 'second correlative', children: [
                    { id: 's84-premise2', role: 'Adjunct', subRole: 'condition', text: { hanzi: '只思考不学习', pinyin: 'zhǐ sī kǎo bù xué xí', translation: 'only think, not study' } },
                    { id: 's84-yue2a', role: 'Adjunct', subRole: 'correlative marker', text: { hanzi: '越', pinyin: 'yuè', translation: 'the more' } },
                    { id: 's84-xiang', role: 'Head Verb', text: { hanzi: '想', pinyin: 'xiǎng', translation: 'think' } },
                    { id: 's84-yue2b', role: 'Adjunct', subRole: 'correlative marker', text: { hanzi: '越', pinyin: 'yuè', translation: 'the more' } },
                    { id: 's84-weixian', role: 'Head Verb', text: { hanzi: '危险', pinyin: 'wéi xiǎn', translation: 'perilous' } },
                ]},
            ]
        }
    },
    {
        id: 's97',
        category: 'Correlative Patterns (越…越…)',
        chinese: '一个人读书越多，他就越能理解世界。',
        pinyin: 'Yī ge rén dú shū yuè duō, tā jiù yuè néng lǐ jiě shì jiè.',
        translation: 'The more a person reads, the more they can understand the world.',
        explanation: 'This sentence links two complete clauses together in a **Parallel Sentence** framework, bound by the **越...越...** (the more... the more) correlative pattern. The first `Embedded Clause` establishes the condition: "a person reads more". The second `Embedded Clause` provides the escalating consequence: "he can increasingly understand the world". The `越` adjuncts sit inside their respective predicates to formally tie the "waterfall" cascade together.',
        tree: {
            id: 'n97-root', role: 'Sentence', children: [
                { id: 'n97-ps', role: 'Parallel Sentence', children: [
                    { id: 'n97-cl1', role: 'Embedded Clause', subRole: 'condition', children: [
                        { id: 'n97-subj1', role: 'Subject', text: { hanzi: '一个人', pinyin: 'yī ge rén', translation: 'a person' } },
                        { id: 'n97-vp1', role: 'Verb Phrase', children: [
                            { id: 'n97-hv1', role: 'Head Verb', text: { hanzi: '读书', pinyin: 'dú shū', translation: 'read books' } },
                            { id: 'n97-yue1', role: 'Adjunct', text: { hanzi: '越', pinyin: 'yuè', translation: 'the more' } },
                            { id: 'n97-duo', role: 'Complement', text: { hanzi: '多', pinyin: 'duō', translation: 'much/many' } }
                        ]}
                    ]},
                    { id: 'n97-cl2', role: 'Embedded Clause', subRole: 'consequence', children: [
                        { id: 'n97-subj2', role: 'Subject', text: { hanzi: '他', pinyin: 'tā', translation: 'he / they' } },
                        { id: 'n97-vp2', role: 'Verb Phrase', children: [
                            { id: 'n97-jiu', role: 'Adjunct', text: { hanzi: '就', pinyin: 'jiù', translation: 'then' } },
                            { id: 'n97-yue2', role: 'Adjunct', text: { hanzi: '越', pinyin: 'yuè', translation: 'the more' } },
                            { id: 'n97-neng', role: 'Adjunct', text: { hanzi: '能', pinyin: 'néng', translation: 'can/able to' } },
                            { id: 'n97-hv2', role: 'Head Verb', text: { hanzi: '理解', pinyin: 'lǐ jiě', translation: 'understand' } },
                            { id: 'n97-obj', role: 'Object', text: { hanzi: '世界', pinyin: 'shì jiè', translation: 'world' } }
                        ]}
                    ]}
                ]}
            ]
        }
    },
    {
        id: 's98',
        category: 'Correlative Patterns (越…越…)',
        chinese: '天气越冷，大家越不想出门。',
        pinyin: 'Tiān qì yuè lěng, dà jiā yuè bù xiǎng chū mén.',
        translation: 'The colder the weather gets, the less people want to go out.',
        explanation: 'Another beautiful "waterfall" cascade spanning two clauses. The first clause handles the environment: The weather gets increasingly cold. The second clause handles human action: everyone increasingly doesn\'t want to go out. The formal AST groups these two halves as `Embedded Clauses` bound inside a `Parallel Sentence`.',
        tree: {
            id: 'n98-root', role: 'Sentence', children: [
                { id: 'n98-ps', role: 'Parallel Sentence', children: [
                    { id: 'n98-cl1', role: 'Embedded Clause', children: [
                        { id: 'n98-t1', role: 'Subject', text: { hanzi: '天气', pinyin: 'tiān qì', translation: 'weather' } },
                        { id: 'n98-vp1', role: 'Verb Phrase', children: [
                            { id: 'n98-yue1', role: 'Adjunct', text: { hanzi: '越', pinyin: 'yuè', translation: 'the more' } },
                            { id: 'n98-hv1', role: 'Head Verb', subRole: 'adjectival', text: { hanzi: '冷', pinyin: 'lěng', translation: 'cold' } }
                        ]}
                    ]},
                    { id: 'n98-cl2', role: 'Embedded Clause', children: [
                        { id: 'n98-t2', role: 'Subject', text: { hanzi: '大家', pinyin: 'dà jiā', translation: 'everyone' } },
                        { id: 'n98-vp2', role: 'Verb Phrase', children: [
                            { id: 'n98-yue2', role: 'Adjunct', text: { hanzi: '越', pinyin: 'yuè', translation: 'the more' } },
                            { id: 'n98-neg', role: 'Adjunct', text: { hanzi: '不', pinyin: 'bù', translation: 'not' } },
                            { id: 'n98-xiang', role: 'Adjunct', text: { hanzi: '想', pinyin: 'xiǎng', translation: 'want' } },
                            { id: 'n98-hv2', role: 'Head Verb', text: { hanzi: '出门', pinyin: 'chū mén', translation: 'go out' } }
                        ]}
                    ]}
                ]}
            ]
        }
    },
    {
        id: 's99',
        category: 'Correlative Patterns (越…越…)',
        chinese: '期望越高，失望往往也就越大。',
        pinyin: 'Qī wàng yuè gāo, shī wàng wǎng wǎng yě jiù yuè dà.',
        translation: 'The higher the expectations, the greater the disappointment often is.',
        explanation: 'The classic "the higher they climb, the harder they fall" correlative cascade. Look at the deep adverbial stack in the second clause: 往往 (often) + 也 (also) + 就 (then) + 越 (increasingly). Mandarin stacks these adjunct modifiers elegantly before the adjectival verb 大 (big/great) without ever feeling grammatically clunky.',
        tree: {
            id: 'n99-root', role: 'Sentence', children: [
                { id: 'n99-ps', role: 'Parallel Sentence', children: [
                    { id: 'n99-cl1', role: 'Embedded Clause', children: [
                        { id: 'n99-t1', role: 'Subject', text: { hanzi: '期望', pinyin: 'qī wàng', translation: 'expectation' } },
                        { id: 'n99-vp1', role: 'Verb Phrase', children: [
                            { id: 'n99-yue1', role: 'Adjunct', text: { hanzi: '越', pinyin: 'yuè', translation: 'the more' } },
                            { id: 'n99-hv1', role: 'Head Verb', subRole: 'adjectival', text: { hanzi: '高', pinyin: 'gāo', translation: 'high' } }
                        ]}
                    ]},
                    { id: 'n99-cl2', role: 'Embedded Clause', children: [
                        { id: 'n99-t2', role: 'Subject', text: { hanzi: '失望', pinyin: 'shī wàng', translation: 'disappointment' } },
                        { id: 'n99-vp2', role: 'Verb Phrase', children: [
                            { id: 'n99-wang', role: 'Adjunct', text: { hanzi: '往往', pinyin: 'wǎng wǎng', translation: 'often' } },
                            { id: 'n99-ye', role: 'Adjunct', text: { hanzi: '也', pinyin: 'yě', translation: 'also' } },
                            { id: 'n99-jiu', role: 'Adjunct', text: { hanzi: '就', pinyin: 'jiù', translation: 'then' } },
                            { id: 'n99-yue2', role: 'Adjunct', text: { hanzi: '越', pinyin: 'yuè', translation: 'the more' } },
                            { id: 'n99-hv2', role: 'Head Verb', subRole: 'adjectival', text: { hanzi: '大', pinyin: 'dà', translation: 'big / great' } }
                        ]}
                    ]}
                ]}
            ]
        }
    }
];
