import type { SentenceData } from '../../types/grammar';

export const conditionalSentences: SentenceData[] = [
    {
        id: 's64',
        category: 'Conditional Sentences (如果…就…)',
        chinese: '如果明天下雨，我们就不去了。',
        pinyin: 'Rú guǒ míng tiān xià yǔ, wǒ men jiù bù qù le.',
        translation: 'If it rains tomorrow, we won\'t go.',
        explanation: 'The **如果…就…** frame is Mandarin\'s "if...then..." construction. **如果你明天有空** ("if you have time tomorrow") sets the condition; **就来我家吧** ("then come to my place") states the consequence. The 如果 clause always comes first. The **就** in the result clause is important; it signals that this outcome follows naturally from the condition. The sentence-final **吧** softens the invitation, making it a suggestion rather than a command. The tree shows the 如果 clause as a conditional Adjunct to the main Comment.',
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
                            subRole: 'conditional marker',
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
                            subRole: 'consequence marker (就)',
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
        explanation: 'The **只要…就…** frame is a close cousin of 如果...就..., but with a crucial difference: it expresses a *sufficient* condition. "As long as this one thing is true, the result is guaranteed." **只要你努力** ("as long as you work hard") is the minimum requirement; **就一定能成功** ("then you will definitely succeed") is the assured result. The tree shows the 只要 clause as a conditional Adjunct. Compare with 只有...才 ("only if...only then"), which states a *necessary* condition and is much stricter.',
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
                            subRole: 'conditional marker (as long as)',
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
                            subRole: 'consequence marker (就)',
                            text: { hanzi: '就', pinyin: 'jiù', translation: 'then' },
                        },
                        {
                            id: 'n65-modal',
                            role: 'Adjunct',
                            subRole: 'modal verb (ability)',
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
        explanation: 'A modern take on 道可道，非常道 (from the Dao De Jing: "The Way that can be spoken of is not the eternal Way"). The classical sentence uses extreme compression: each clause is just three characters. Modern Mandarin expands this with a conditional: **如果道理可以用语言说清楚** ("if the principle can be explained clearly with words") + **那就不是真正的道理** ("then it is not a real principle"). The 如果...那就... frame replaces the classical\'s implicit logic. The classical 非 ("is not") becomes 不是, and the abstract 常道 ("eternal Way") becomes 真正的道理 ("real principle").',
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
        explanation: 'A modern take on 溫故而知新 (from Confucius: "Review the old and learn the new"). The classical sentence compresses the thought into five characters using 而 to link the actions. Modern Mandarin uses a full conditional: **如果能复习旧的知识** ("if you can review old knowledge") + **就能学到新的东西** ("then you can learn new things"). The 如果...就... frame makes the logical connection explicit. The classical 故 ("the old") becomes 旧的知识, and 新 ("the new") becomes 新的东西.',
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
        explanation: 'A modern take on 朝聞道夕死可矣 (from Confucius: "If one hears the Way in the morning, one can die content that evening"). The classical compression is extreme: just seven characters for a complete conditional. Modern Mandarin spells it out: **如果早上能明白道理** ("if in the morning you can understand the principle") + **晚上死了也值得** ("dying in the evening would also be worthwhile"). The 如果 replaces the implicit "if" of the classical placement of 朝 and 夕, and 值得 ("worthwhile") replaces 可矣 ("is acceptable").',
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
        explanation: 'A modern take on 知彼知己百戰不殆 (from Sun Tzu: "Know the enemy and know yourself, and you will not be defeated in a hundred battles"). The classical sentence is pure Topic-Comment: the conditions (知彼知己) precede the result (百戰不殆) with no explicit connector. Modern Mandarin uses **如果…就…**: **如果了解对方也了解自己** ("if you understand the other side and also understand yourself") + **就不会在任何战斗中失败** ("you will not fail in any battle"). The parallel 知 ("know") becomes the fuller 了解 ("understand").',
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
    }
];
