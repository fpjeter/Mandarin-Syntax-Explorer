import type { SentenceData } from '../../types/grammar';

export const discourseContext: SentenceData[] = [
    {
        id: 's17',
        category: 'Discourse Context (跨句语境)',
        chinese: '说想学中文。',
        pinyin: 'Shuō xiǎng xué Zhōng wén .',
        translation: '(He) said (he) wants to learn Chinese.',
        explanation: 'Mandarin rarely repeats information the listener already knows. This pair of dialogue cards sets up a conversation about borrowing a book, and the sentences that follow show how the book gradually disappears from the text while remaining the invisible thread connecting everything. The first speaker asks 你借到那本书了吗 ("Did you manage to borrow that book?"). The reply 借到了 ("Got it") already drops the book. Pay attention to how the tree\'s Ghost Nodes track what is left unspoken.',
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
        explanation: 'Just four words, and the Topic is an invisible **Ghost Node**. This ghost node points back to the **book** mentioned in the previous sentence (shown in the grey card above). Once a Topic has been introduced in conversation, Mandarin avoids repeating it. The listener tracks this invisible thread through context, and the tree makes the connection visible with a reference arc.',
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
        explanation: 'A common short answer. The Topic is again implied (the book, still carried from the earlier context). The Comment is just **也想看** ("also wants to read it"), where **也** ("also") subtly references the first speaker without naming them. The object of 看 ("read") is dropped entirely. Both speakers know what is being read. The tree shows a compact structure with a ghost node standing in for the book.',
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
        explanation: 'In conversational Mandarin, the speaker often drops both the topic and the object when context makes them obvious. Here, the implied topic ("I") and the implied object (the book) are both ghost nodes. The Comment uses **告诉** ("tell") to create a pivotal construction: **他** ("him") is simultaneously the object of "tell" and the actor of what follows. The instruction **看完了就给我** ("when you finish reading, give it to me") chains two more actions, all still referencing the invisible book.',
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
        explanation: 'When someone asks where a person is, the reply often drops the person entirely. The Topic **他** ("he") is stated just once. The Comment uses **让** to create a pivotal construction: **弟弟** ("little brother") is the object of 让 and the actor of what follows. The instruction is **先看** ("read first"). The book is completely absent from the sentence. Five exchanges in, and the book has been named only once, at the very start. Mandarin threads context silently through discourse, and the tree\'s ghost nodes make that thread visible.',
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
