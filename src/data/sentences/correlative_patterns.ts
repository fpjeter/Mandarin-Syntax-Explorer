import type { SentenceData } from '../../types/grammar';

export const correlativePatterns: SentenceData[] = [
    {
        id: 's60',
        category: 'Correlative Patterns (越…越…)',
        chinese: '中文越学越有意思。',
        pinyin: 'Zhōng wén yuè xué yuè yǒu yì si.',
        translation: 'The more you study Chinese, the more interesting it gets.',
        explanation: '**中文** (Chinese) is the Topic. The **越…越…** (yuè…yuè…) frame pairs two clauses: **越学** (the more you study) and **越有意思** (the more interesting). The pattern is: 越 A 越 B: as A increases, B increases. The subject of 学 is dropped (pro-drop, the general "you"). This correlative frame is one of the most elegant in Mandarin: no conjunction, no relative clause, just the repeated 越 linking cause and effect. Other examples: 越吃越胖 (the more you eat, the fatter you get), 越想越难过 (the more you think about it, the sadder you feel).',
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
        explanation: '**他** (he) is the Topic. The **一…就…** (yī…jiù…) frame expresses "as soon as A, immediately B." **一说话** (as soon as he speaks) triggers **就脸红** (immediately blushes). The 一 + verb signals the trigger event; the 就 signals instantaneous consequence. 脸红 is a subject-predicate compound: 脸 (face) + 红 (turns red). This pattern is extremely common in everyday speech: 一下雨就堵车 (as soon as it rains, traffic jams), 一看见她就笑 (the moment he sees her, he smiles). The two clauses share the same subject here, but they don\'t have to.',
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
        category: 'Correlative Patterns (\u8d8a\u2026\u8d8a\u2026)',
        chinese: '只学习不思考，越学越糊涂；只思考不学习，越想越危险。',
        pinyin: 'Zhǐ xué xí bù sī kǎo, yuè xué yuè hú tu; zhǐ sī kǎo bù xué xí, yuè xiǎng yuè wéi xiǎn.',
        translation: 'If you only study without thinking, the more you study the more confused you get; if you only think without studying, the more you think the more perilous it becomes.',
        explanation: 'This modernizes the classical 學而不思則罔思而不學則殆. The classical conditional pattern 則 (\"then\") becomes the modern correlative **越...越...** (\"the more X, the more Y\"). *Grammatically,* each half follows the same pattern: 只A不B (\"only A, not B\") sets up the flawed approach, then 越A越B gives the escalating consequence. The 越...越 pattern shows that two changes happen together: as one increases, so does the other.',
        tree: {
            id: 's84-root', role: 'Sentence', children: [
                { id: 's84-c1', role: 'Topic', subRole: 'first correlative', children: [
                    { id: 's84-premise1', role: 'Adjunct', subRole: 'condition', text: { hanzi: '只学习不思考', pinyin: 'zhǐ xué xí bù sī kǎo', translation: 'only study, not think' } },
                    { id: 's84-yue1a', role: 'Adjunct', text: { hanzi: '越学', pinyin: 'yuè xué', translation: 'the more you study' } },
                    { id: 's84-yue1b', role: 'Head Verb', text: { hanzi: '越糊涂', pinyin: 'yuè hú tu', translation: 'the more confused' } },
                ]},
                { id: 's84-c2', role: 'Comment', subRole: 'second correlative', children: [
                    { id: 's84-premise2', role: 'Adjunct', subRole: 'condition', text: { hanzi: '只思考不学习', pinyin: 'zhǐ sī kǎo bù xué xí', translation: 'only think, not study' } },
                    { id: 's84-yue2a', role: 'Adjunct', text: { hanzi: '越想', pinyin: 'yuè xiǎng', translation: 'the more you think' } },
                    { id: 's84-yue2b', role: 'Head Verb', text: { hanzi: '越危险', pinyin: 'yuè wéi xiǎn', translation: 'the more perilous' } },
                ]},
            ]
        }
    }
];
