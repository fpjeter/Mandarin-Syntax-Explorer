import type { SentenceData } from '../../types/grammar';

export const conditionalSentences: SentenceData[] = [
    {
        id: 's64',
        category: 'Conditional Sentences (如果…就…)',
        chinese: '如果明天下雨，我们就不去了。',
        pinyin: 'Rú guǒ míng tiān xià yǔ, wǒ men jiù bù qù le.',
        translation: 'If it rains tomorrow, we won\'t go.',
        explanation: 'The **如果…就…** frame is Mandarin\'s if–then construction. **如果** (if) heads the condition clause: **明天下雨** (tomorrow rains). **就** (then) heads the consequence: **不去了** (won\'t go). The two clauses share no explicit conjunction beyond 如果 and 就. In casual speech, 如果 is often dropped entirely; 就 alone can carry the conditional sense: 明天下雨就不去了. The **了** at the end signals a change of plan (we were going to go, now we won\'t). Notice the condition clause has no subject; the weather "rains" without an explicit "it."',
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
        explanation: 'The **只要…就…** frame is a close cousin of 如果…就…, but with a different nuance: "as long as / provided that" (lighter condition, stronger confidence in the result). **只要** ("as long as") heads the condition: **你努力** ("you work hard"). **就** ("then") introduces the guaranteed consequence: **能成功** ("can succeed"). The modal verb **能** ("can / able to") signals capability/possibility. Unlike 如果, which is neutral ("if X, then Y"), 只要 implies the speaker is confident that the condition is sufficient: *all you need is to try hard*. Other 只要 examples: 只要有钱就行 (as long as there\'s money, it\'s fine).',
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
        explanation: 'This modernizes the classical 道可道，非常道. The terse classical parallelism becomes a full conditional sentence with 如果...那...就... *Grammatically,* the first clause uses **如果** to introduce the condition: "if a truth can be spoken clearly." The 能 ("can") + 用语言 ("using language") + 说清楚 ("speak clearly") spells out what classical Chinese compressed into 可道 ("can be spoken"). The second clause uses **那它就不是** ("then it is not") as the consequence.',
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
        explanation: 'This modernizes the classical 溫故而知新. The classical sentence packs two sequential actions into four characters; modern Mandarin unpacks them into a conditional frame with 如果...就... *Grammatically,* the condition clause uses 经常 ("regularly") + 复习 ("review") + a descriptive noun phrase (学过的东西, "things you have studied"). The consequence clause uses 就能 ("then can") + 发现 ("discover") + 新的道理 ("new insights"). The aspect marker 过 marks past experience.',
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
        explanation: 'This modernizes the classical 朝聞道夕死可矣. The stark four-character classical rhythm is expanded into a 如果...也值得 conditional. *Grammatically,* the condition clause uses 如果 + time (早上) + 能明白 ("can understand") + 人生的道理 ("the truths of life"). The result clause uses 晚上 ("time") + 死了 (die + completion marker) + 也值得 ("would also be worthwhile"). The concessive 也 ("even so, still") softens what would otherwise be a blunt assertion.',
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
        explanation: 'This modernizes the classical 知彼知己百戰不殆. The classical four-character parallel (知彼知己) becomes a pair of modern verb phrases linked by 又 ("and also"). *Grammatically,* the Topic frames the condition with two parallel verb phrases: 了解敌人 ("understand the enemy") + 又 + 了解自己 ("understand yourself"). The Comment gives the result: 打一百场仗 ("fight a hundred battles") + 也不会有 ("also will not have") + 危险 ("danger"). The pattern 也不会 ("still won\'t") expresses certainty about the outcome.',
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
