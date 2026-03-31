import type { SentenceData } from '../../types/grammar';

export const discourseContext: SentenceData[] = [
    {
        id: 's17',
        category: 'Discourse Context (跨句语境)',
        chinese: '说想学中文。',
        pinyin: 'Shuō xiǎng xué Zhōng wén .',
        translation: '(He) said (he) wants to learn Chinese.',
        explanation: 'This sentence drops **two subjects**: the outer one (who said it) and the inner one (who wants to learn), both are **[他]** ("he"), shown as ghost nodes in the tree. But here is the twist: these pronouns refer to someone in the **preceding sentence** (the grey card above), not anyone named in this sentence\'s own tree. The person was mentioned one sentence earlier, so Mandarin simply leaves them out here. It sounds incomplete in English, but it is completely natural in Mandarin when the context is clear.',
        discourseContext: {
            chinese: '张三昨天来找我了。',
            pinyin: 'Zhāng Sān zuó tiān lái zhǎo wǒ le .',
            translation: 'Zhang San came looking for me yesterday.',
        },
        tree: {
            id: 'n17',
            role: 'Sentence',
            children: [
                {
                    id: 'n17-topic',
                    role: 'Topic',
                    isDropped: true,
                    impliedText: '他',
                    // no refersToId: the referent is established in the preceding sentence,
                    // not within this tree (discourse-level, not sentence-level)
                },
                {
                    id: 'n17-c',
                    role: 'Comment',
                    children: [
                        {
                            id: 'n17-vp1',
                            role: 'Verb Phrase',
                            subRole: 'matrix clause',
                            children: [
                                {
                                    id: 'n17-hv',
                                    role: 'Head Verb',
                                    text: { hanzi: '说', pinyin: 'shuō', translation: 'say' }
                                },
                                {
                                    id: 'n17-comp',
                                    role: 'Object',
                                    subRole: 'embedded clause',
                                    children: [
                                        {
                                            id: 'n17-comp-subj',
                                            role: 'Subject',
                                            isDropped: true,
                                            impliedText: '他',
                                        },
                                        {
                                            id: 'n17-comp-vp',
                                            role: 'Verb Phrase',
                                            children: [
                                                {
                                                    id: 'n17-comp-modal',
                                                    role: 'Adjunct',
                                                    text: { hanzi: '想', pinyin: 'xiǎng', translation: 'want to' }
                                                },
                                                {
                                                    id: 'n17-comp-hv',
                                                    role: 'Head Verb',
                                                    text: { hanzi: '学', pinyin: 'xué', translation: 'learn/study' }
                                                },
                                                {
                                                    id: 'n17-comp-obj',
                                                    role: 'Object',
                                                    children: [
                                                        {
                                                            id: 'n17-comp-obj-hn',
                                                            role: 'Head Noun',
                                                            text: { hanzi: '中文', pinyin: 'Zhōng wén', translation: 'Chinese (language)' }
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    {
        id: 's18',
        category: 'Discourse Context (跨句语境)',
        chinese: '非常有意思。',
        pinyin: 'Fēi cháng yǒu yì si .',
        translation: '(It\'s) really interesting.',
        explanation: 'Just four words, and the subject is completely silent. The tree shows a ghost **[它]** ("it") as the dropped topic, but the thing it refers to is the **book from the previous sentence**, shown in the grey card above. Once a topic is introduced in conversation, Mandarin can go several sentences without repeating it. What sounds like an incomplete fragment in English ("really interesting") is a perfectly formed, natural sentence in Mandarin. It is a vivid example of how much work context does in the language.',
        discourseContext: {
            chinese: '我买了一本新书。',
            pinyin: 'Wǒ mǎi le yī běn xīn shū .',
            translation: 'I bought a new book.',
        },
        tree: {
            id: 'n18',
            role: 'Sentence',
            children: [
                {
                    id: 'n18-topic',
                    role: 'Topic',
                    isDropped: true,
                    impliedText: '它',
                },
                {
                    id: 'n18-c',
                    role: 'Comment',
                    children: [
                        {
                            id: 'n18-adv',
                            role: 'Adjunct',
                            text: { hanzi: '非常', pinyin: 'fēi cháng', translation: 'extremely / really' }
                        },
                        {
                            id: 'n18-pred',
                            role: 'Predicate',
                            children: [
                                {
                                    id: 'n18-hv',
                                    role: 'Head Verb',
                                    text: { hanzi: '有', pinyin: 'yǒu', translation: 'have/possess' }
                                },
                                {
                                    id: 'n18-obj',
                                    role: 'Object',
                                    children: [
                                        {
                                            id: 'n18-obj-hn',
                                            role: 'Head Noun',
                                            text: { hanzi: '意思', pinyin: 'yì si', translation: 'meaning / interest' }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    {
        id: 's94',
        category: 'Discourse Context (跨句语境)',
        chinese: '已经吃过了。',
        pinyin: 'Yǐ jīng chī guò le.',
        translation: '(I) have already eaten.',
        explanation: 'A common short answer to the frequent greeting "Have you eaten?". The subject (I) and object (the meal) are both completely dropped because context naturally binds them. The tree relies on a ghost Topic node for the speaker. Inside the Comment, the adjunct **已经** ("already") modifies the verb **吃** ("eat"), followed by the experiential aspect **过** and completion particle **了**.',
        discourseContext: {
            chinese: '你吃饭了吗？',
            pinyin: 'Nǐ chī fàn le ma?',
            translation: 'Have you eaten?',
        },
        tree: {
            id: 'n94-root', role: 'Sentence', children: [
                { id: 'n94-t', role: 'Topic', isDropped: true, impliedText: '我' },
                { id: 'n94-c', role: 'Comment', children: [
                    { id: 'n94-adv', role: 'Adjunct', text: { hanzi: '已经', pinyin: 'yǐ jīng', translation: 'already' } },
                    { id: 'n94-vp', role: 'Verb Phrase', children: [
                        { id: 'n94-hv', role: 'Head Verb', text: { hanzi: '吃', pinyin: 'chī', translation: 'eat' } },
                        { id: 'n94-guo', role: 'Particle', subRole: 'experiential', text: { hanzi: '过', pinyin: 'guò', translation: '(experienced)' } },
                        { id: 'n94-le', role: 'Particle', subRole: 'completion', text: { hanzi: '了', pinyin: 'le', translation: '(done)' } }
                    ]}
                ]}
            ]
        }
    },
    {
        id: 's95',
        category: 'Discourse Context (跨句语境)',
        chinese: '今天特别累。',
        pinyin: 'Jīn tiān tè bié lèi.',
        translation: '(I am) especially tired today.',
        explanation: 'In conversational Mandarin, when someone asks how you are, answering directly with "Today is especially tired" sounds natural, with the Topic ("I") being entirely dropped. The time noun **今天** ("today") sits inside the Comment framing the predicate. The adverb **特别** ("especially") intensifies the adjectival verb **累** ("tired").',
        discourseContext: {
            chinese: '你今天感觉怎么样？',
            pinyin: 'Nǐ jīn tiān gǎn jué zěn me yàng?',
            translation: 'How are you feeling today?',
        },
        tree: {
            id: 'n95-root', role: 'Sentence', children: [
                { id: 'n95-t', role: 'Topic', isDropped: true, impliedText: '我' },
                { id: 'n95-c', role: 'Comment', children: [
                    { id: 'n95-time', role: 'Adjunct', subRole: 'time', text: { hanzi: '今天', pinyin: 'jīn tiān', translation: 'today' } },
                    { id: 'n95-vp', role: 'Verb Phrase', children: [
                        { id: 'n95-adv', role: 'Adjunct', text: { hanzi: '特别', pinyin: 'tè bié', translation: 'especially' } },
                        { id: 'n95-hv', role: 'Head Verb', subRole: 'adjectival', text: { hanzi: '累', pinyin: 'lèi', translation: 'tired' } }
                    ]}
                ]}
            ]
        }
    },
    {
        id: 's96',
        category: 'Discourse Context (跨句语境)',
        chinese: '早就回家了。',
        pinyin: 'Zǎo jiù huí jiā le.',
        translation: '(He) went home a long time ago.',
        explanation: 'When someone asks where a person is, the reply drops the pronoun entirely. The subject ("he" or "she") lives purely in the external discourse context. The Comment begins with **早就** ("early on / long ago"), emphasizing the completion of the action long before the speaker asked. The verb phrase **回家了** describes the returned state.',
        discourseContext: {
            chinese: '他去哪儿了？',
            pinyin: 'Tā qù nǎ er le?',
            translation: 'Where did he go?',
        },
        tree: {
            id: 'n96-root', role: 'Sentence', children: [
                { id: 'n96-t', role: 'Topic', isDropped: true, impliedText: '他' },
                { id: 'n96-c', role: 'Comment', children: [
                    { id: 'n96-adv', role: 'Adjunct', text: { hanzi: '早就', pinyin: 'zǎo jiù', translation: 'long ago' } },
                    { id: 'n96-vp', role: 'Verb Phrase', children: [
                        { id: 'n96-hv', role: 'Head Verb', text: { hanzi: '回家', pinyin: 'huí jiā', translation: 'return home' } },
                        { id: 'n96-le', role: 'Particle', subRole: 'completion', text: { hanzi: '了', pinyin: 'le', translation: '(done)' } }
                    ]}
                ]}
            ]
        }
    }
];
