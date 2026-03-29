import type { SentenceData } from '../../types/grammar';

export const pivotalConstructions: SentenceData[] = [
    {
        id: 's32',
        category: 'Pivotal Constructions (兼语句)',
        chinese: '老师让学生回答问题。',
        pinyin: 'Lǎo shī ràng xué sheng huí dá wèn tí.',
        translation: 'The teacher had the students answer questions.',
        explanation: '**老师** (teacher) is the Topic. This is a **pivotal construction** (兼语句). The verb **让** (let/have) takes **学生** (students) as its object. But then, crucially, 学生 immediately becomes the *subject* of the next verb **回答** (answer). It plays both roles at once: object of 让, subject of 回答. The tree shows this double-function node as a **Pivot**. Verbs that create pivotal structures include 让 (let/have), 叫 (tell), 请 (invite), 使 (cause), 帮 (help). In English: "The teacher *had* the students *answer*"; the structure is the same, just without a special grammatical label.',
        tree: {
            id: 'n32',
            role: 'Sentence',
            children: [
                {
                    id: 'n32-t',
                    role: 'Topic',
                    text: { hanzi: '老师', pinyin: 'lǎo shī', translation: 'teacher' },
                },
                {
                    id: 'n32-c',
                    role: 'Comment',
                    children: [
                        {
                            id: 'n32-vp',
                            role: 'Verb Phrase',
                            subRole: 'pivotal construction (兼语句)',
                            children: [
                                {
                                    id: 'n32-hv',
                                    role: 'Head Verb',
                                    subRole: 'causative verb (lets/has)',
                                    text: { hanzi: '让', pinyin: 'ràng', translation: 'let / have' },
                                },
                                {
                                    id: 'n32-pivot',
                                    role: 'Pivot',
                                    subRole: 'object of 让, subject of 回答',
                                    text: { hanzi: '学生', pinyin: 'xué sheng', translation: 'students' },
                                },
                                {
                                    id: 'n32-embedded',
                                    role: 'Verb Phrase',
                                    subRole: 'embedded predicate of pivot',
                                    children: [
                                        {
                                            id: 'n32-embedded-hv',
                                            role: 'Head Verb',
                                            text: { hanzi: '回答', pinyin: 'huí dá', translation: 'answer' },
                                        },
                                        {
                                            id: 'n32-embedded-obj',
                                            role: 'Object',
                                            text: { hanzi: '问题', pinyin: 'wèn tí', translation: 'questions' },
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
        id: 's33',
        category: 'Pivotal Constructions (兼语句)',
        chinese: '妈妈叫我去买牛奶。',
        pinyin: 'Māma jiào wǒ qù mǎi niú nǎi.',
        translation: 'Mom told me to go buy milk.',
        explanation: '**妈妈** (Mom) is the Topic. The verb **叫** (call/tell) creates a pivotal structure: **我** (me) serves as both the object of 叫 *and* the subject of what follows. After the pivot, there is a **serial verb construction**: **去买**: go in order to buy. Two advanced patterns stack together here, which is completely natural in everyday speech. This sentence shows why pivotal constructions matter: English hides the double-function behind \"told me to\"; Mandarin makes it visible by placing 我 at the hinge point between two verb phrases.',
        tree: {
            id: 'n33',
            role: 'Sentence',
            children: [
                {
                    id: 'n33-t',
                    role: 'Topic',
                    text: { hanzi: '妈妈', pinyin: 'māma', translation: 'Mom' },
                },
                {
                    id: 'n33-c',
                    role: 'Comment',
                    children: [
                        {
                            id: 'n33-vp',
                            role: 'Verb Phrase',
                            subRole: 'pivotal construction (兼语句)',
                            children: [
                                {
                                    id: 'n33-hv',
                                    role: 'Head Verb',
                                    subRole: 'causative verb (tells)',
                                    text: { hanzi: '叫', pinyin: 'jiào', translation: 'call / tell' },
                                },
                                {
                                    id: 'n33-pivot',
                                    role: 'Pivot',
                                    subRole: 'object of 叫, subject of 去买',
                                    text: { hanzi: '我', pinyin: 'wǒ', translation: 'me' },
                                },
                                {
                                    id: 'n33-serial',
                                    role: 'Verb Phrase',
                                    subRole: 'serial verb construction (purpose chain)',
                                    children: [
                                        {
                                            id: 'n33-serial-v1',
                                            role: 'Head Verb',
                                            subRole: 'motion verb',
                                            text: { hanzi: '去', pinyin: 'qù', translation: 'go' },
                                        },
                                        {
                                            id: 'n33-serial-v2',
                                            role: 'Verb Phrase',
                                            subRole: 'purpose clause',
                                            children: [
                                                {
                                                    id: 'n33-serial-v2-hv',
                                                    role: 'Head Verb',
                                                    text: { hanzi: '买', pinyin: 'mǎi', translation: 'buy' },
                                                },
                                                {
                                                    id: 'n33-serial-v2-obj',
                                                    role: 'Object',
                                                    text: { hanzi: '牛奶', pinyin: 'niú nǎi', translation: 'milk' },
                                                },
                                            ],
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
        id: 's52',
        category: 'Pivotal Constructions (兼语句)',
        chinese: '公司派他去谈判。',
        pinyin: 'Gōng sī pài tā qù tán pàn.',
        translation: 'The company sent him to negotiate.',
        explanation: '**公司** (company) is the Topic. The verb **派** (dispatch/send) takes **他** (him) as its object, but 他 simultaneously becomes the subject of what follows: **去谈判** (go negotiate). This is the pivot. Unlike s32 and s33 where the pivot verbs were 让/叫 (permission/command), here **派** implies authority and assignment: the company dispatched him. The embedded predicate uses a serial verb: 去 (go) + 谈判 (negotiate), showing purpose chaining inside a pivotal frame. Mandarin layers these patterns with ease.',
        tree: {
            id: 'n52',
            role: 'Sentence',
            children: [
                {
                    id: 'n52-t',
                    role: 'Topic',
                    text: { hanzi: '公司', pinyin: 'gōng sī', translation: 'company' },
                },
                {
                    id: 'n52-c',
                    role: 'Comment',
                    children: [
                        {
                            id: 'n52-vp',
                            role: 'Verb Phrase',
                            subRole: 'pivotal construction (兼语句)',
                            children: [
                                {
                                    id: 'n52-hv',
                                    role: 'Head Verb',
                                    subRole: 'causative verb (dispatches)',
                                    text: { hanzi: '派', pinyin: 'pài', translation: 'send / dispatch' },
                                },
                                {
                                    id: 'n52-pivot',
                                    role: 'Pivot',
                                    subRole: 'object of 派, subject of 去谈判',
                                    text: { hanzi: '他', pinyin: 'tā', translation: 'him' },
                                },
                                {
                                    id: 'n52-embedded',
                                    role: 'Verb Phrase',
                                    subRole: 'serial verb (go + negotiate)',
                                    children: [
                                        {
                                            id: 'n52-embedded-v1',
                                            role: 'Head Verb',
                                            subRole: 'motion verb',
                                            text: { hanzi: '去', pinyin: 'qù', translation: 'go' },
                                        },
                                        {
                                            id: 'n52-embedded-v2',
                                            role: 'Head Verb',
                                            subRole: 'purpose verb',
                                            text: { hanzi: '谈判', pinyin: 'tán pàn', translation: 'negotiate' },
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
        id: 's53',
        category: 'Pivotal Constructions (兼语句)',
        chinese: '她请我吃饭。',
        pinyin: 'Tā qǐng wǒ chī fàn.',
        translation: 'She invited me to eat (out / to dinner).',
        explanation: '**她** (she) is the Topic. **请** (invite/treat) creates the pivotal structure: **我** (me) is both the object of 请 and the subject of **吃饭** (eat a meal). The verb 请 has a special cultural weight in Mandarin. 请你吃饭 often implies treating someone to a meal (paying for them). The embedded predicate 吃饭 is itself a simple VO compound. This sentence is a good contrast with s32 (让) and s33 (叫): 请 implies hospitality and courtesy, while 让/叫 imply permission or command, same syntactic frame, very different social register.',
        tree: {
            id: 'n53',
            role: 'Sentence',
            children: [
                {
                    id: 'n53-t',
                    role: 'Topic',
                    text: { hanzi: '她', pinyin: 'tā', translation: 'she' },
                },
                {
                    id: 'n53-c',
                    role: 'Comment',
                    children: [
                        {
                            id: 'n53-vp',
                            role: 'Verb Phrase',
                            subRole: 'pivotal construction (兼语句)',
                            children: [
                                {
                                    id: 'n53-hv',
                                    role: 'Head Verb',
                                    subRole: 'social verb (invites/treats)',
                                    text: { hanzi: '请', pinyin: 'qǐng', translation: 'invite / treat' },
                                },
                                {
                                    id: 'n53-pivot',
                                    role: 'Pivot',
                                    subRole: 'object of 请, subject of 吃饭',
                                    text: { hanzi: '我', pinyin: 'wǒ', translation: 'me' },
                                },
                                {
                                    id: 'n53-embedded',
                                    role: 'Verb Phrase',
                                    subRole: 'embedded predicate of pivot',
                                    children: [
                                        {
                                            id: 'n53-embedded-hv',
                                            role: 'Head Verb',
                                            text: { hanzi: '吃', pinyin: 'chī', translation: 'eat' },
                                        },
                                        {
                                            id: 'n53-embedded-obj',
                                            role: 'Object',
                                            text: { hanzi: '饭', pinyin: 'fàn', translation: 'meal / rice' },
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
        id: 's89',
        category: 'Pivotal Constructions (\u517c\u8bed\u53e5)',
        chinese: '困难让人成长，安逸让人退步。',
        pinyin: 'Kùn nan ràng rén chéng zhǎng, ān yì ràng rén tuì bù.',
        translation: 'Hardship makes people grow; comfort makes people regress.',
        explanation: 'This modernizes the classical 生於憂患死於安樂. The abstract classical 於 (\"from/in\") construction becomes a concrete **pivotal construction** with 让 (\"make/let\"). *Grammatically,* each clause follows the pivotal pattern: Topic (困难/安逸) + 让 (\"makes\") + pivot (人, \"people\") + result verb. The person 人 is simultaneously the object of 让 and the subject of the following verb (成长/退步). This double role is the defining feature of pivotal constructions.',
        tree: {
            id: 's89-root', role: 'Sentence', children: [
                { id: 's89-c1', role: 'Topic', subRole: 'first pivotal', children: [
                    { id: 's89-kn', role: 'Subject', text: { hanzi: '困难', pinyin: 'kùn nan', translation: 'hardship' } },
                    { id: 's89-rang1', role: 'Head Verb', subRole: 'causative', text: { hanzi: '让', pinyin: 'ràng', translation: 'makes' } },
                    { id: 's89-ren1', role: 'Object', subRole: 'pivot', text: { hanzi: '人', pinyin: 'rén', translation: 'people' } },
                    { id: 's89-cz', role: 'Complement', text: { hanzi: '成长', pinyin: 'chéng zhǎng', translation: 'grow' } },
                ]},
                { id: 's89-c2', role: 'Comment', subRole: 'second pivotal', children: [
                    { id: 's89-ay', role: 'Subject', text: { hanzi: '安逸', pinyin: 'ān yì', translation: 'comfort' } },
                    { id: 's89-rang2', role: 'Head Verb', subRole: 'causative', text: { hanzi: '让', pinyin: 'ràng', translation: 'makes' } },
                    { id: 's89-ren2', role: 'Object', subRole: 'pivot', text: { hanzi: '人', pinyin: 'rén', translation: 'people' } },
                    { id: 's89-tb', role: 'Complement', text: { hanzi: '退步', pinyin: 'tuì bù', translation: 'regress' } },
                ]},
            ]
        }
    }
];
