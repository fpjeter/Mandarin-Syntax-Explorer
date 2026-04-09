import type { SentenceData } from '../../types/grammar';

export const correlativePatterns: SentenceData[] = [
    {
        id: 's60',
        category: 'Correlative Patterns (关联句型)',
        chinese: '中文越学越有意思。',
        pinyin: 'Zhōng wén yuè xué yuè yǒu yì si.',
        translation: 'The more you study Chinese, the more interesting it gets.',
        explanation: '**中文** ("Chinese") is the Topic, sitting at the top of the tree. The **越…越…** (yuè…yuè…) frame pairs two clauses: **越学** ("the more you study") and **越有意思** ("the more interesting it gets"). The pattern works like this: 越 A 越 B means "as A increases, B increases." The actor of 学 is left out here (an implied general "you"). This correlative frame is one of the most elegant in Mandarin: no conjunction, no relative clause, just the repeated 越 linking cause and effect. Other examples: 越吃越胖 ("the more you eat, the fatter you get"), 越想越难过 ("the more you think, the sadder you feel").',
        tree: {
            id: 'n60',
            role: 'Sentence',
            children: [
                {
                    id: 'n60-t',
                    role: 'Topic', semanticRole: 'Agent',
                    text: { hanzi: '中文', pinyin: 'zhōng wén', translation: 'Chinese (language)' },
                },
                {
                    id: 'n60-c',
                    role: 'Comment',
                    subRole: 'correlative',
                    children: [
                        {
                            id: 'n60-cl1',
                            role: 'Verb Phrase',
                            subRole: 'serial verb 1',
                            children: [
                                {
                                    id: 'n60-yue1',
                                    role: 'Adjunct',
                                    subRole: 'correlative',
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
                            subRole: 'serial verb 2',
                            children: [
                                {
                                    id: 'n60-yue2',
                                    role: 'Adjunct',
                                    subRole: 'correlative',
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
        category: 'Correlative Patterns (关联句型)',
        chinese: '他一说话就脸红。',
        pinyin: 'Tā yī shuō huà jiù liǎn hóng.',
        translation: 'The moment he speaks, he blushes.',
        explanation: '**他** ("he") is the Topic. The **一…就…** (yī…jiù…) frame expresses "as soon as A, immediately B." **一说话** ("as soon as he speaks") is the trigger; **就脸红** ("immediately blushes") is the consequence. The 一 + verb signals the trigger event, and 就 signals the instant result. 脸红 is itself a compact compound: 脸 ("face") + 红 ("turns red"). This pattern is extremely common in everyday speech: 一下雨就堵车 ("as soon as it rains, traffic jams up"), 一看见她就笑 ("the moment he sees her, he smiles"). The two clauses are anchored by the same Topic here, but they do not have to be.',
        tree: {
            id: 'n61',
            role: 'Sentence',
            children: [
                {
                    id: 'n61-t',
                    role: 'Topic', semanticRole: 'Agent',
                    text: { hanzi: '他', pinyin: 'tā', translation: 'he' },
                },
                {
                    id: 'n61-c',
                    role: 'Comment',
                    subRole: 'correlative',
                    children: [
                        {
                            id: 'n61-cl1',
                            role: 'Verb Phrase',
                            subRole: 'trigger clause (一 + V)',
                            children: [
                                {
                                    id: 'n61-yi',
                                    role: 'Adjunct',
                                    subRole: 'conditional',
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
                            subRole: 'consequence',
                            children: [
                                {
                                    id: 'n61-jiu',
                                    role: 'Adjunct',
                                    subRole: 'consequence',
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
        category: 'Correlative Patterns (关联句型)',
        chinese: '只学习不思考，越学越糊涂；只思考不学习，越想越危险。',
        pinyin: 'Zhǐ xué xí bù sī kǎo, yuè xué yuè hú tu; zhǐ sī kǎo bù xué xí, yuè xiǎng yuè wéi xiǎn.',
        translation: 'If you only study without thinking, the more you study the more confused you get; if you only think without studying, the more you think the more perilous it becomes.',
        explanation: 'A modern take on 學而不思則罔，思而不學則殆 (from the Analects: "To study without thinking is wasteful; to think without studying is dangerous"). The classical 而 ("but/and") and 則 ("then") are replaced by modern **如果...就...** ("if...then..."). The tree shows two parallel conditional clauses. Each has the same shape: 如果 + condition, 就 + consequence. The first clause warns 如果只学习不思考 ("if you only study without thinking"), result: 就会迷茫 ("you will be lost"). The second warns 如果只思考不学习 ("if you only think without studying"), result: 就很危险 ("it is very dangerous").',
        tree: {
            id: 's84-root', role: 'Sentence', children: [
                { id: 's84-c1', role: 'Topic', subRole: 'correlative', children: [
                    { id: 's84-premise1', role: 'Adjunct', subRole: 'conditional', text: { hanzi: '只学习不思考', pinyin: 'zhǐ xué xí bù sī kǎo', translation: 'only study, not think' } },
                    { id: 's84-yue1a', role: 'Adjunct', subRole: 'correlative', text: { hanzi: '越', pinyin: 'yuè', translation: 'the more' } },
                    { id: 's84-xue', role: 'Head Verb', text: { hanzi: '学', pinyin: 'xué', translation: 'study' } },
                    { id: 's84-yue1b', role: 'Adjunct', subRole: 'correlative', text: { hanzi: '越', pinyin: 'yuè', translation: 'the more' } },
                    { id: 's84-hutu', role: 'Head Verb', text: { hanzi: '糊涂', pinyin: 'hú tu', translation: 'confused' } },
                ]},
                { id: 's84-c2', role: 'Comment', subRole: 'correlative', children: [
                    { id: 's84-premise2', role: 'Adjunct', subRole: 'conditional', text: { hanzi: '只思考不学习', pinyin: 'zhǐ sī kǎo bù xué xí', translation: 'only think, not study' } },
                    { id: 's84-yue2a', role: 'Adjunct', subRole: 'correlative', text: { hanzi: '越', pinyin: 'yuè', translation: 'the more' } },
                    { id: 's84-xiang', role: 'Head Verb', text: { hanzi: '想', pinyin: 'xiǎng', translation: 'think' } },
                    { id: 's84-yue2b', role: 'Adjunct', subRole: 'correlative', text: { hanzi: '越', pinyin: 'yuè', translation: 'the more' } },
                    { id: 's84-weixian', role: 'Head Verb', text: { hanzi: '危险', pinyin: 'wéi xiǎn', translation: 'perilous' } },
                ]},
            ]
        }
    },
    {
        id: 's97',
        category: 'Correlative Patterns (关联句型)',
        chinese: '一个人读书越多，他就越能理解世界。',
        pinyin: 'Yī ge rén dú shū yuè duō, tā jiù yuè néng lǐ jiě shì jiè.',
        translation: 'The more a person reads, the more they can understand the world.',
        explanation: 'The **越...越** correlative frame: the more X, the more Y. The first half: **一个人读书越多** ("the more a person reads"). The second half: **他就越能理解世界** ("the more he can understand the world"). The **越** markers bracket each half, and **就** in the consequence reinforces the link. The tree shows the two halves as parallel branches connected by the correlative frame. This pattern is one of the most elegant ways to express proportional change in Mandarin.',
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
        category: 'Correlative Patterns (关联句型)',
        chinese: '天气越冷，大家越不想出门。',
        pinyin: 'Tiān qì yuè lěng, dà jiā yuè bù xiǎng chū mén.',
        translation: 'The colder the weather gets, the less people want to go out.',
        explanation: 'Another **越...越** correlative, this time with a cause-and-effect feel. The first half: **天气越冷** ("the colder the weather gets"). The second half: **大家越不想出门** ("the less everyone wants to go out"). The **越** markers link the two: as coldness increases, willingness decreases. Notice the negation **不想** sits inside the second 越 clause. The tree shows the two balanced halves, each with its own 越 marker.',
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
        category: 'Correlative Patterns (关联句型)',
        chinese: '期望越高，失望往往也就越大。',
        pinyin: 'Qī wàng yuè gāo, shī wàng wǎng wǎng yě jiù yuè dà.',
        translation: 'The higher the expectations, the greater the disappointment often is.',
        explanation: 'The classic "the higher something goes, the harder it falls" idea. The first half: **期望越高** ("the higher the expectations"). The second half: **失望往往也就越大** ("the greater the disappointment tends to be"). The **往往** ("often/tend to") and **也** ("also") add softening nuance. The tree shows the two halves of the 越...越 frame as balanced branches, with the adverbs 往往 and 也 layered inside the consequence clause.',
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
    },
    {
        id: 's108',
        category: 'Correlative Patterns (关联句型)',
        chinese: '他不但会说英语，而且还会说法语。',
        pinyin: 'Tā bú dàn huì shuō Yīng yǔ, ér qiě hái huì shuō Fǎ yǔ.',
        translation: 'He not only speaks English, but also speaks French.',
        explanation: '**他** ("he") is the Topic. The **不但…而且…** frame builds an escalating pair: the first clause states something already impressive (speaks English), and the second clause tops it (also speaks French). **不但** ("not only") opens the first half, and **而且** ("but also") opens the second. The **还** ("additionally, still") inside the second clause reinforces the escalation. Both clauses share the same Topic, so 他 appears only once. This correlative pattern is one of the most useful in Mandarin for building emphasis and expressing that something exceeds expectations.',
        tree: {
            id: 's108-n',
            role: 'Sentence',
            children: [
                { id: 's108-t', role: 'Topic', semanticRole: 'Agent', text: { hanzi: '他', pinyin: 'tā', translation: 'he' } },
                {
                    id: 's108-c',
                    role: 'Comment',
                    subRole: 'correlative',
                    children: [
                        {
                            id: 's108-clause1',
                            role: 'Embedded Clause',
                            subRole: 'not only...',
                            children: [
                                { id: 's108-c1-conj', role: 'Adjunct', subRole: 'conjunction', text: { hanzi: '不但', pinyin: 'bú dàn', translation: 'not only' } },
                                { id: 's108-c1-mod', role: 'Adjunct', subRole: 'modal', text: { hanzi: '会', pinyin: 'huì', translation: 'can' } },
                                { id: 's108-c1-hv', role: 'Head Verb', text: { hanzi: '说', pinyin: 'shuō', translation: 'speak' } },
                                { id: 's108-c1-obj', role: 'Object', text: { hanzi: '英语', pinyin: 'Yīng yǔ', translation: 'English' } }
                            ]
                        },
                        {
                            id: 's108-clause2',
                            role: 'Embedded Clause',
                            subRole: '...but also',
                            children: [
                                { id: 's108-c2-conj', role: 'Adjunct', subRole: 'conjunction', text: { hanzi: '而且', pinyin: 'ér qiě', translation: 'but also' } },
                                { id: 's108-c2-adv', role: 'Adjunct', subRole: 'correlative', text: { hanzi: '还', pinyin: 'hái', translation: 'additionally' } },
                                { id: 's108-c2-mod', role: 'Adjunct', subRole: 'modal', text: { hanzi: '会', pinyin: 'huì', translation: 'can' } },
                                { id: 's108-c2-hv', role: 'Head Verb', text: { hanzi: '说', pinyin: 'shuō', translation: 'speak' } },
                                { id: 's108-c2-obj', role: 'Object', text: { hanzi: '法语', pinyin: 'Fǎ yǔ', translation: 'French' } }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    {
        id: 's109',
        category: 'Correlative Patterns (关联句型)',
        chinese: '虽然很累，但是很开心。',
        pinyin: 'Suī rán hěn lèi, dàn shì hěn kāi xīn.',
        translation: 'Although tired, (I\'m) very happy.',
        explanation: 'The Topic is an implied general actor (dropped "I" or "one"), which is very natural in Mandarin. The **虽然…但是…** frame expresses concession: "although A, but B." The first clause concedes: 虽然很累 ("although very tired"). The second clause counters: 但是很开心 ("but very happy"). In Mandarin, both markers are typically required. English uses "although" alone, but Mandarin pairs 虽然 with 但是 (or 可是, 不过). The tree shows two parallel Comment clauses joined by this concessive frame. This is one of the most essential structures for expressing contrast.',
        tree: {
            id: 's109-n',
            role: 'Sentence',
            children: [
                { id: 's109-ghost', role: 'Topic', semanticRole: 'Agent', subRole: 'implied topic', text: { hanzi: '[我]', pinyin: 'wǒ', translation: 'I(implied)' } },
                {
                    id: 's109-c',
                    role: 'Comment',
                    subRole: 'correlative',
                    children: [
                        {
                            id: 's109-clause1',
                            role: 'Embedded Clause',
                            subRole: 'concession',
                            children: [
                                { id: 's109-c1-conj', role: 'Adjunct', subRole: 'conjunction', text: { hanzi: '虽然', pinyin: 'suī rán', translation: 'although' } },
                                { id: 's109-c1-adv', role: 'Adjunct', subRole: 'degree', text: { hanzi: '很', pinyin: 'hěn', translation: 'very' } },
                                { id: 's109-c1-adj', role: 'Adjective', text: { hanzi: '累', pinyin: 'lèi', translation: 'tired' } }
                            ]
                        },
                        {
                            id: 's109-clause2',
                            role: 'Embedded Clause',
                            subRole: 'contrast',
                            children: [
                                { id: 's109-c2-conj', role: 'Adjunct', subRole: 'conjunction', text: { hanzi: '但是', pinyin: 'dàn shì', translation: 'but' } },
                                { id: 's109-c2-adv', role: 'Adjunct', subRole: 'degree', text: { hanzi: '很', pinyin: 'hěn', translation: 'very' } },
                                { id: 's109-c2-adj', role: 'Adjective', text: { hanzi: '开心', pinyin: 'kāi xīn', translation: 'happy' } }
                            ]
                        }
                    ]
                }
            ]
        }
    }
];
