import type { SentenceData } from '../../types/grammar';

export const discourseContext: SentenceData[] = [
    {
        id: 's17',
        category: 'Discourse Context (跨句语境)',
        chinese: '说想学中文。',
        pinyin: 'Shuō xiǎng xué Zhōng wén .',
        translation: '(He) said (he) wants to learn Chinese.',
        explanation: 'Mandarin rarely repeats information that is already obvious. Instead of saying the person\'s name or "he" again, the sentence leaves an invisible footprint: a Ghost Node that points back to whoever was established in the **preceding sentence** (shown in the grey card above). Because the context has not shifted, the sentence flows perfectly without needing to say "he" again.',
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
        explanation: 'Just four words, and the subject is an invisible Ghost Node. This node points back to the **book** mentioned in the previous sentence (shown in the grey card above). Once a Topic has been introduced in conversation, Mandarin avoids repeating it. The listener tracks the invisible thread through context, and the tree makes this connection visible with a reference arc.',
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
        explanation: 'A common short answer to the frequent greeting "Have you eaten?" The speaker and the meal are completely silent because the immediate context makes them obvious. The Ghost Node references the speaker, who is clear from the conversation. Inside the Comment, **已经** ("already") modifies the verb **吃** ("eat"), cleanly confirming the event is done.',
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
        explanation: 'In conversational Mandarin, the speaker relies on the immediate situation to make their identity clear. The "I" is not awkwardly "dropped" but rather occupies an invisible Ghost Topic that the listener fills in naturally. The time phrase **今天** ("today") frames the Comment, while **特别** ("especially") intensifies the adjectival verb **累** ("tired").',
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
        explanation: 'When someone asks where a person is, the reply uses an invisible Ghost Topic. The person\'s identity ("he" or "she") lives purely in the conversational flow, so it does not need to be spoken. The sentence begins seamlessly with **早就** ("long ago"), flowing into the verb phrase **回家了** which marks the completed return home.',
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
