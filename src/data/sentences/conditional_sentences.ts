import type { SentenceData } from '../../types/grammar';

export const conditionalSentences: SentenceData[] = [
    {
        id: 's64',
        category: 'Conditional Sentences (如果…就…)',
        chinese: '如果明天下雨，我们就不去了。',
        pinyin: 'Rú guǒ míng tiān xià yǔ, wǒ men jiù bù qù le.',
        translation: 'If it rains tomorrow, we won\'t go.',
        explanation: 'A classic **如果...就** conditional. The condition clause **如果明天下雨** ("if it rains tomorrow") sets the premise: **如果** opens the condition, **明天** is the time, **下雨** ("rain") is the action. The consequence clause: **我们就不去了** ("we then won\'t go"). The **就** marks the consequence, **不** negates the verb, and **了** signals the change of plans. The tree shows the 如果 clause and the 就 clause as two halves of the conditional frame.',
        tree: {
            id: 'n64',
            role: 'Sentence',
            children: [
                {
                    id: 'n64-cl1',
                    role: 'Topic',
                    subRole: 'condition clause (如果…)',
                    children: [
                        {
                            id: 'n64-ruguo',
                            role: 'Adjunct',
                            subRole: 'conditional',
                            text: { hanzi: '如果', pinyin: 'rú guǒ', translation: 'if' },
                        },
                        {
                            id: 'n64-tp',
                            role: 'Adjunct',
                            subRole: 'time',
                            text: { hanzi: '明天', pinyin: 'míng tiān', translation: 'tomorrow' },
                        },
                        {
                            id: 'n64-hv1',
                            role: 'Head Verb',
                            text: { hanzi: '下雨', pinyin: 'xià yǔ', translation: 'rain' },
                        },
                    ],
                },
                {
                    id: 'n64-cl2',
                    role: 'Comment',
                    subRole: 'consequence clause (…就…)',
                    children: [
                        {
                            id: 'n64-subj',
                            role: 'Subject',
                            text: { hanzi: '我们', pinyin: 'wǒ men', translation: 'we' },
                        },
                        {
                            id: 'n64-jiu',
                            role: 'Adjunct',
                            subRole: 'consequence',
                            text: { hanzi: '就', pinyin: 'jiù', translation: 'then' },
                        },
                        {
                            id: 'n64-neg',
                            role: 'Adjunct',
                            subRole: 'negation',
                            text: { hanzi: '不', pinyin: 'bù', translation: 'not' },
                        },
                        {
                            id: 'n64-hv2',
                            role: 'Head Verb',
                            text: { hanzi: '去', pinyin: 'qù', translation: 'go' },
                        },
                        {
                            id: 'n64-le',
                            role: 'Particle',
                            subRole: 'change of state',
                            text: { hanzi: '了', pinyin: 'le', translation: '(change of plan)' },
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 's65',
        category: 'Conditional Sentences (如果…就…)',
        chinese: '只要你努力，就能成功。',
        pinyin: 'Zhǐ yào nǐ nǔ lì, jiù néng chéng gōng.',
        translation: 'As long as you work hard, you can succeed.',
        explanation: 'A **只要...就** conditional: "as long as" + consequence. The condition **只要你努力** ("as long as you work hard") uses **只要** to set a minimal condition. The consequence **就能成功** ("then you can succeed") uses **就** to mark the result and **能** for ability. This pattern is more optimistic than 如果: it says the condition is *sufficient*, not just possible. The tree shows the two halves balanced around the 只要/就 frame.',
        tree: {
            id: 'n65',
            role: 'Sentence',
            children: [
                {
                    id: 'n65-cl1',
                    role: 'Topic',
                    subRole: 'condition clause (只要…)',
                    children: [
                        {
                            id: 'n65-zhiyao',
                            role: 'Adjunct',
                            subRole: 'conditional',
                            text: { hanzi: '只要', pinyin: 'zhǐ yào', translation: 'as long as / provided that' },
                        },
                        {
                            id: 'n65-subj1',
                            role: 'Subject',
                            text: { hanzi: '你', pinyin: 'nǐ', translation: 'you' },
                        },
                        {
                            id: 'n65-hv1',
                            role: 'Head Verb',
                            text: { hanzi: '努力', pinyin: 'nǔ lì', translation: 'work hard / make an effort' },
                        },
                    ],
                },
                {
                    id: 'n65-cl2',
                    role: 'Comment',
                    subRole: 'consequence clause (…就…)',
                    children: [
                        {
                            id: 'n65-jiu',
                            role: 'Adjunct',
                            subRole: 'consequence',
                            text: { hanzi: '就', pinyin: 'jiù', translation: 'then' },
                        },
                        {
                            id: 'n65-modal',
                            role: 'Adjunct',
                            subRole: 'modal',
                            text: { hanzi: '能', pinyin: 'néng', translation: 'can / able to' },
                        },
                        {
                            id: 'n65-hv2',
                            role: 'Head Verb',
                            text: { hanzi: '成功', pinyin: 'chéng gōng', translation: 'succeed' },
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 's71',
        category: 'Conditional Sentences (\u5982\u679c\u2026\u5c31\u2026)',
        chinese: '如果一个道理能用语言说清楚，那它就不是永恒的道理。',
        pinyin: 'Rú guǒ yí gè dào lǐ néng yòng yǔ yán shuō qīng chǔ, nà tā jiù bú shì yǒng héng de dào lǐ.',
        translation: 'If a truth can be expressed clearly in words, then it is not an eternal truth.',
        explanation: 'A complex conditional about the limits of language. **如果一个道理能用语言说清楚** ("if a principle can be explained clearly in language") is the condition, with the potential complement **说清楚** ("speak clearly") showing achievability. The tree nests the potential complement inside the conditional clause, showing how these patterns layer naturally. The **能** ("can") adds the modal dimension: can it be done?',
        tree: {
            id: 's71-root', role: 'Sentence', children: [
                { id: 's71-cond', role: 'Topic', subRole: 'conditional (如果)', children: [
                    { id: 's71-rg', role: 'Adjunct', text: { hanzi: '如果', pinyin: 'rú guǒ', translation: 'if' } },
                    { id: 's71-subj', role: 'Subject', text: { hanzi: '一个道理', pinyin: 'yí gè dào lǐ', translation: 'a truth' } },
                    { id: 's71-neng', role: 'Adjunct', text: { hanzi: '能', pinyin: 'néng', translation: 'can' } },
                    { id: 's71-yy', role: 'Adjunct', subRole: 'instrument', text: { hanzi: '用语言', pinyin: 'yòng yǔ yán', translation: 'using language' } },
                    { id: 's71-sqc', role: 'Head Verb', text: { hanzi: '说清楚', pinyin: 'shuō qīng chǔ', translation: 'speak clearly' } },
                ]},
                { id: 's71-result', role: 'Comment', subRole: 'consequence (就)', children: [
                    { id: 's71-na', role: 'Adjunct', text: { hanzi: '那', pinyin: 'nà', translation: 'then' } },
                    { id: 's71-ta', role: 'Subject', text: { hanzi: '它', pinyin: 'tā', translation: 'it' } },
                    { id: 's71-jiu', role: 'Adjunct', text: { hanzi: '就', pinyin: 'jiù', translation: '(consequence)' } },
                    { id: 's71-bushi', role: 'Head Verb', text: { hanzi: '不是', pinyin: 'bú shì', translation: 'is not' } },
                    { id: 's71-obj', role: 'Object', children: [
                        { id: 's71-yh', role: 'Attributive', text: { hanzi: '永恒的', pinyin: 'yǒng héng de', translation: 'eternal' } },
                        { id: 's71-dl', role: 'Head Noun', text: { hanzi: '道理', pinyin: 'dào lǐ', translation: 'truth' } },
                    ]},
                ]},
            ]
        }
    },
    {
        id: 's73',
        category: 'Conditional Sentences (\u5982\u679c\u2026\u5c31\u2026)',
        chinese: '如果你经常复习学过的东西，就能发现新的道理。',
        pinyin: 'Rú guǒ nǐ jīng cháng fù xí xué guò de dōng xi, jiù néng fā xiàn xīn de dào lǐ.',
        translation: 'If you regularly review what you have learned, you can discover new insights.',
        explanation: 'A modern version of 温故而知新 ("review the old, learn the new"). The conditional frame: **如果你经常复习学过的东西** ("if you often review things you have studied") sets the premise, where **学过的** is a relative clause ("that you have studied," with experiential 过). The consequence follows with the result of this habit. The tree shows the relative clause nested inside the conditional, with the 如果/就 frame organizing the two halves.',
        tree: {
            id: 's73-root', role: 'Sentence', children: [
                { id: 's73-cond', role: 'Topic', subRole: 'conditional (如果)', children: [
                    { id: 's73-rg', role: 'Adjunct', text: { hanzi: '如果', pinyin: 'rú guǒ', translation: 'if' } },
                    { id: 's73-ni', role: 'Subject', text: { hanzi: '你', pinyin: 'nǐ', translation: 'you' } },
                    { id: 's73-jc', role: 'Adjunct', text: { hanzi: '经常', pinyin: 'jīng cháng', translation: 'regularly' } },
                    { id: 's73-fx', role: 'Head Verb', text: { hanzi: '复习', pinyin: 'fù xí', translation: 'review' } },
                    { id: 's73-obj', role: 'Object', children: [
                        { id: 's73-xg', role: 'Attributive', text: { hanzi: '学过的', pinyin: 'xué guò de', translation: 'previously learned' } },
                        { id: 's73-dx', role: 'Head Noun', text: { hanzi: '东西', pinyin: 'dōng xi', translation: 'things' } },
                    ]},
                ]},
                { id: 's73-result', role: 'Comment', subRole: 'consequence (就)', children: [
                    { id: 's73-jn', role: 'Adjunct', text: { hanzi: '就能', pinyin: 'jiù néng', translation: 'then can' } },
                    { id: 's73-faxian', role: 'Head Verb', text: { hanzi: '发现', pinyin: 'fā xiàn', translation: 'discover' } },
                    { id: 's73-obj2', role: 'Object', children: [
                        { id: 's73-xin', role: 'Attributive', text: { hanzi: '新的', pinyin: 'xīn de', translation: 'new' } },
                        { id: 's73-dl', role: 'Head Noun', text: { hanzi: '道理', pinyin: 'dào lǐ', translation: 'insights' } },
                    ]},
                ]},
            ]
        }
    },
    {
        id: 's82',
        category: 'Conditional Sentences (\u5982\u679c\u2026\u5c31\u2026)',
        chinese: '如果早上能明白人生的道理，晚上死了也值得。',
        pinyin: 'Rú guǒ zǎo shang néng míng bai rén shēng de dào lǐ, wǎn shang sǐ le yě zhí de.',
        translation: 'If in the morning you grasp the truths of life, dying that evening would still be worthwhile.',
        explanation: 'A modern rendering of 朝闻道夕死可矣 ("Hear the Way in the morning, die content in the evening"). The conditional: **如果早上能明白人生的道理** ("if in the morning you can understand the principles of life"). The **能** gives modal possibility, **明白** ("understand") is the verb, and **人生的道理** ("the principles of life") is the object with a possessive 的 phrase. The tree shows the time adjunct 早上 and the modal 能 layered inside the conditional clause.',
        tree: {
            id: 's82-root', role: 'Sentence', children: [
                { id: 's82-cond', role: 'Topic', subRole: 'conditional', children: [
                    { id: 's82-rg', role: 'Adjunct', text: { hanzi: '如果', pinyin: 'rú guǒ', translation: 'if' } },
                    { id: 's82-zs', role: 'Adjunct', subRole: 'time', text: { hanzi: '早上', pinyin: 'zǎo shang', translation: 'in the morning' } },
                    { id: 's82-neng', role: 'Adjunct', text: { hanzi: '能', pinyin: 'néng', translation: 'can' } },
                    { id: 's82-mb', role: 'Head Verb', text: { hanzi: '明白', pinyin: 'míng bai', translation: 'understand' } },
                    { id: 's82-obj', role: 'Object', children: [
                        { id: 's82-rs', role: 'Attributive', text: { hanzi: '人生的', pinyin: 'rén shēng de', translation: 'of life' } },
                        { id: 's82-dl', role: 'Head Noun', text: { hanzi: '道理', pinyin: 'dào lǐ', translation: 'truths' } },
                    ]},
                ]},
                { id: 's82-result', role: 'Comment', children: [
                    { id: 's82-ws', role: 'Adjunct', subRole: 'time', text: { hanzi: '晚上', pinyin: 'wǎn shang', translation: 'in the evening' } },
                    { id: 's82-si', role: 'Head Verb', text: { hanzi: '死了', pinyin: 'sǐ le', translation: 'die (completed)' } },
                    { id: 's82-ye', role: 'Adjunct', text: { hanzi: '也', pinyin: 'yě', translation: 'still/also' } },
                    { id: 's82-zd', role: 'Complement', text: { hanzi: '值得', pinyin: 'zhí de', translation: 'worthwhile' } },
                ]},
            ]
        }
    },
    {
        id: 's83',
        category: 'Conditional Sentences (\u5982\u679c\u2026\u5c31\u2026)',
        chinese: '了解敌人又了解自己，打一百场仗也不会有危险。',
        pinyin: 'Liǎo jiě dí rén yòu liǎo jiě zì jǐ, dǎ yì bǎi chǎng zhàng yě bú huì yǒu wéi xiǎn.',
        translation: 'If you understand the enemy and understand yourself, a hundred battles will bring no peril.',
        explanation: 'A modern take on 知己知彼百战不殆 ("know yourself, know your enemy, a hundred battles without danger"). The sentence uses parallel verbs: **了解敌人** ("understand the enemy") **又** ("and also") **了解自己** ("understand yourself"). The **又** links two equal verb phrases. The conditional consequence follows: knowing both sides means never losing. The tree shows the two 了解 phrases connected by 又 in a correlative structure.',
        tree: {
            id: 's83-root', role: 'Sentence', children: [
                { id: 's83-cond', role: 'Topic', subRole: 'conditional premise', children: [
                    { id: 's83-v1', role: 'Verb Phrase', children: [
                        { id: 's83-lj1', role: 'Head Verb', text: { hanzi: '了解', pinyin: 'liǎo jiě', translation: 'understand' } },
                        { id: 's83-dr', role: 'Object', text: { hanzi: '敌人', pinyin: 'dí rén', translation: 'enemy' } },
                    ]},
                    { id: 's83-you', role: 'Adjunct', text: { hanzi: '又', pinyin: 'yòu', translation: 'and also' } },
                    { id: 's83-v2', role: 'Verb Phrase', children: [
                        { id: 's83-lj2', role: 'Head Verb', text: { hanzi: '了解', pinyin: 'liǎo jiě', translation: 'understand' } },
                        { id: 's83-zj', role: 'Object', text: { hanzi: '自己', pinyin: 'zì jǐ', translation: 'yourself' } },
                    ]},
                ]},
                { id: 's83-result', role: 'Comment', children: [
                    { id: 's83-da', role: 'Verb Phrase', children: [
                        { id: 's83-da-v', role: 'Head Verb', text: { hanzi: '打', pinyin: 'dǎ', translation: 'fight' } },
                        { id: 's83-ybcz', role: 'Object', text: { hanzi: '一百场仗', pinyin: 'yì bǎi chǎng zhàng', translation: 'a hundred battles' } },
                    ]},
                    { id: 's83-ybh', role: 'Adjunct', text: { hanzi: '也不会', pinyin: 'yě bú huì', translation: 'still will not' } },
                    { id: 's83-you2', role: 'Head Verb', text: { hanzi: '有', pinyin: 'yǒu', translation: 'have' } },
                    { id: 's83-wx', role: 'Object', text: { hanzi: '危险', pinyin: 'wéi xiǎn', translation: 'danger' } },
                ]},
            ]
        }
    },
    {
        id: 's122',
        category: 'Conditional Sentences (如果…就…)',
        chinese: '即使下雨，我也要去。',
        pinyin: 'Jí shǐ xià yǔ, wǒ yě yào qù.',
        translation: 'Even if it rains, I\'m still going to go.',
        explanation: 'This is a concessive conditional pattern: "Even if A, still B." The first clause introduces the hypothetical extreme case using **即使** ("even if"). The second clause delivers the unwavering result, linked by **也** ("also / still"). The 也 is mandatory in Mandarin for this pattern. It anchors the second half, showing that despite the condition set by 即使, the outcome remains the same. The Topic of the first clause is implied (the weather context), while **我** ("I") is the Topic of the second.',
        tree: {
            id: 's122-n',
            role: 'Sentence',
            children: [
                {
                    id: 's122-cond',
                    role: 'Topic',
                    subRole: 'condition clause',
                    children: [
                        { id: 's122-cond-conj', role: 'Adjunct', subRole: 'conjunction', text: { hanzi: '即使', pinyin: 'jí shǐ', translation: 'even if' } },
                        { id: 's122-cond-hv', role: 'Head Verb', text: { hanzi: '下雨', pinyin: 'xià yǔ', translation: 'rain' } }
                    ]
                },
                {
                    id: 's122-c',
                    role: 'Comment',
                    subRole: 'result clause',
                    children: [
                        { id: 's122-c-t', role: 'Topic', text: { hanzi: '我', pinyin: 'wǒ', translation: 'I' } },
                        { id: 's122-c-adv', role: 'Adjunct', subRole: 'correlative', text: { hanzi: '也', pinyin: 'yě', translation: 'still/also' } },
                        { id: 's122-c-mod', role: 'Adjunct', subRole: 'modal', text: { hanzi: '要', pinyin: 'yào', translation: 'want to / will' } },
                        { id: 's122-c-hv', role: 'Head Verb', text: { hanzi: '去', pinyin: 'qù', translation: 'go' } }
                    ]
                }
            ]
        }
    },
    {
        id: 's123',
        category: 'Conditional Sentences (如果…就…)',
        chinese: '除非你道歉，否则我不会原谅你。',
        pinyin: 'Chú fēi nǐ dào qiàn, fǒu zé wǒ bú huì yuán liàng nǐ.',
        translation: 'Unless you apologize, (otherwise) I won\'t forgive you.',
        explanation: 'This is the "unless" pattern. The first clause uses **除非** ("unless") to state the only condition that will change the outcome. The second clause uses **否则** ("otherwise") to show what happens if that condition isn\'t met. English just says "unless A, B", but Mandarin explicitly balances it: "unless A, *otherwise* B." As always with conditionals, the condition clause (除非你道歉) acts as the broad Topic, setting the stage, while the outcome (否则我不会原谅你) acts as the Comment.',
        tree: {
            id: 's123-n',
            role: 'Sentence',
            children: [
                {
                    id: 's123-cond',
                    role: 'Topic',
                    subRole: 'condition clause',
                    children: [
                        { id: 's123-cond-conj', role: 'Adjunct', subRole: 'conjunction', text: { hanzi: '除非', pinyin: 'chú fēi', translation: 'unless' } },
                        { id: 's123-cond-t', role: 'Topic', subRole: 'inner topic', text: { hanzi: '你', pinyin: 'nǐ', translation: 'you' } },
                        { id: 's123-cond-hv', role: 'Head Verb', text: { hanzi: '道歉', pinyin: 'dào qiàn', translation: 'apologize' } }
                    ]
                },
                {
                    id: 's123-c',
                    role: 'Comment',
                    subRole: 'result clause',
                    children: [
                        { id: 's123-c-conj', role: 'Adjunct', subRole: 'conjunction', text: { hanzi: '否则', pinyin: 'fǒu zé', translation: 'otherwise' } },
                        { id: 's123-c-subj', role: 'Subject', subRole: 'actor', text: { hanzi: '我', pinyin: 'wǒ', translation: 'I' } },
                        { id: 's123-c-neg', role: 'Adjunct', subRole: 'negation', text: { hanzi: '不', pinyin: 'bú', translation: 'not' } },
                        { id: 's123-c-mod', role: 'Adjunct', subRole: 'modal', text: { hanzi: '会', pinyin: 'huì', translation: 'will' } },
                        { id: 's123-c-hv', role: 'Head Verb', text: { hanzi: '原谅', pinyin: 'yuán liàng', translation: 'forgive' } },
                        { id: 's123-c-obj', role: 'Object', text: { hanzi: '你', pinyin: 'nǐ', translation: 'you' } }
                    ]
                }
            ]
        }
    }
];
