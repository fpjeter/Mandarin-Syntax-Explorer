import type { SentenceData } from '../../types/grammar';

export const basicTopicComment: SentenceData[] = [
    {
        id: 's1',
        category: 'Basic Topic–Comment (主题评论)',
        chinese: '他打碎了那个花瓶。',
        pinyin: 'Tā dǎ suì le nà ge huā píng.',
        translation: 'He broke that vase.',
        explanation: 'This is the most basic Mandarin sentence pattern: first say **who or what you are talking about**, then say **what happened**. Here, **他** ("he") is what the sentence is about; this is called the **Topic**. Everything that follows (the breaking, the vase) is the **Comment**: the actual event. The tree splits directly at that boundary. Notice that **打碎** is a compound action: 打 means "hit" and 碎 means "shatter," stacked together they mean "smash to pieces". The **了** after it marks that the action is done and complete.',
        tree: {
            id: 'n1',
            role: 'Sentence',
            children: [
                {
                    id: 'n1-t',
                    role: 'Topic',
                    text: { hanzi: '他', pinyin: 'tā', translation: 'he' }
                },
                {
                    id: 'n1-c',
                    role: 'Comment',
                    children: [
                        {
                            id: 'n1-p-vp',
                            role: 'Verb Phrase',
                            children: [
                                {
                                    id: 'n1-p-vp-hv',
                                    role: 'Head Verb',
                                    text: { hanzi: '打', pinyin: 'dǎ', translation: 'hit/strike' }
                                },
                                {
                                    id: 'n1-p-vp-comp',
                                    role: 'Complement',
                                    subRole: 'resultative',
                                    text: { hanzi: '碎', pinyin: 'suì', translation: 'shatter' }
                                },
                                {
                                    id: 'n1-p-vp-part',
                                    role: 'Particle',
                                    subRole: 'aspect',
                                    text: { hanzi: '了', pinyin: 'le', translation: '(completion)' }
                                },
                                {
                                    id: 'n1-p-vp-obj',
                                    role: 'Object',
                                    children: [
                                        {
                                            id: 'n1-p-vp-obj-attr',
                                            role: 'Attributive',
                                            text: { hanzi: '那个', pinyin: 'nà ge', translation: 'that' }
                                        },
                                        {
                                            id: 'n1-p-vp-obj-hn',
                                            role: 'Head Noun',
                                            text: { hanzi: '花瓶', pinyin: 'huā píng', translation: 'vase' }
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
        id: 's2',
        category: 'Basic Topic–Comment (主题评论)',
        chinese: '我喜欢在图书馆看书。',
        pinyin: 'Wǒ xǐ huān zài tú shū guǎn kàn shū.',
        translation: 'I like reading books in the library.',
        explanation: '**我** ("I") is the Topic. The Comment strings two verb phrases together without repeating the subject. Mandarin can chain actions like this naturally. First **喜欢** ("like"), then the thing being liked: **going to the library and reading**. Notice how the location (在图书馆) comes *before* the verb (看), not after it the way English does. In Mandarin, where something happens is set up as background context before the action is named.',
        tree: {
            id: 'n2',
            role: 'Sentence',
            children: [
                {
                    id: 'n2-t',
                    role: 'Topic',
                    text: { hanzi: '我', pinyin: 'wǒ', translation: 'I' }
                },
                {
                    id: 'n2-c',
                    role: 'Comment',
                    subRole: 'serial verb construction',
                    children: [
                        {
                            id: 'n2-p-vp1',
                            role: 'Verb Phrase',
                            subRole: 'matrix verb',
                            children: [
                                {
                                    id: 'n2-p-vp1-v',
                                    role: 'Head Verb',
                                    text: { hanzi: '喜欢', pinyin: 'xǐ huān', translation: 'like' }
                                }
                            ]
                        },
                        {
                            id: 'n2-p-vp2',
                            role: 'Verb Phrase',
                            subRole: 'complement / purpose',
                            children: [
                                {
                                    id: 'n2-p-vp2-lp',
                                    role: 'Adjunct',
                                    subRole: 'location',
                                    children: [
                                        {
                                            id: 'n2-p-vp2-lp-prep',
                                            role: 'Preposition',
                                            text: { hanzi: '在', pinyin: 'zài', translation: 'in/at' }
                                        },
                                        {
                                            id: 'n2-p-vp2-lp-n',
                                            role: 'Noun',
                                            text: { hanzi: '图书馆', pinyin: 'tú shū guǎn', translation: 'library' }
                                        }
                                    ]
                                },
                                {
                                    id: 'n2-p-vp2-v',
                                    role: 'Head Verb',
                                    text: { hanzi: '看', pinyin: 'kàn', translation: 'read/look' }
                                },
                                {
                                    id: 'n2-p-vp2-obj',
                                    role: 'Object',
                                    text: { hanzi: '书', pinyin: 'shū', translation: 'book' }
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    {
        id: 's5',
        category: 'Basic Topic–Comment (主题评论)',
        chinese: '他决定开始学开车。',
        pinyin: 'Tā jué dìng kāi shǐ xué kāi chē.',
        translation: 'He decided to start learning to drive a car.',
        explanation: '**他** ("he") is the Topic. The Comment stacks **four verb phrases** one inside the other like Russian dolls, with no connecting word between them, with no equivalent of English "to". Each verb is the object of the one before it: decided → [to start → [to learn → [to drive a car]]]. This pattern, where verbs chain together without joining words, is completely natural in Mandarin and very common in everyday speech. The tree expands outward to show all four nested layers.',
        tree: {
            id: 'n5',
            role: 'Sentence',
            children: [
                {
                    id: 'n5-t',
                    role: 'Topic',
                    text: { hanzi: '他', pinyin: 'tā', translation: 'he' }
                },
                {
                    id: 'n5-c',
                    role: 'Comment',
                    subRole: 'serial verb construction',
                    children: [
                        {
                            id: 'n5-p-vp1',
                            role: 'Verb Phrase',
                            subRole: 'matrix verb',
                            children: [
                                {
                                    id: 'n5-p-vp1-v',
                                    role: 'Head Verb',
                                    text: { hanzi: '决定', pinyin: 'jué dìng', translation: 'decide' }
                                }
                            ]
                        },
                        {
                            id: 'n5-p-vp2',
                            role: 'Verb Phrase',
                            subRole: 'nested complement 1',
                            children: [
                                {
                                    id: 'n5-p-vp2-v',
                                    role: 'Head Verb',
                                    text: { hanzi: '开始', pinyin: 'kāi shǐ', translation: 'start' }
                                }
                            ]
                        },
                        {
                            id: 'n5-p-vp3',
                            role: 'Verb Phrase',
                            subRole: 'nested complement 2',
                            children: [
                                {
                                    id: 'n5-p-vp3-v',
                                    role: 'Head Verb',
                                    text: { hanzi: '学', pinyin: 'xué', translation: 'learn' }
                                }
                            ]
                        },
                        {
                            id: 'n5-p-vp4',
                            role: 'Verb Phrase',
                            subRole: 'nested complement 3',
                            children: [
                                {
                                    id: 'n5-p-vp4-v',
                                    role: 'Head Verb',
                                    text: { hanzi: '开', pinyin: 'kāi', translation: 'drive' }
                                },
                                {
                                    id: 'n5-p-vp4-obj',
                                    role: 'Object',
                                    text: { hanzi: '车', pinyin: 'chē', translation: 'car' }
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    {
        id: 's7',
        category: 'Basic Topic–Comment (主题评论)',
        chinese: '我看了半天，还是看不了，就不看了。',
        pinyin: 'Wǒ kàn le bàn tiān, hái shì kàn bù liǎo, jiù bù kàn le.',
        translation: 'I looked at it for a long time, still couldn\'t finish, so I gave up looking.',
        explanation: '**我** ("I") is the Topic once, and then acts as the unstated subject of **three separate clauses** in a row. Mandarin does not repeat the subject between clauses. The Comment chains three events: tried for a long time → still couldn\'t finish → so gave up. The middle clause **看不了** is especially interesting: sandwiching **不** (not) between the verb and its result means *"unable to achieve"*; here, unable to finish reading. This is called a **potential complement** and is a very common pattern in Mandarin.',
        tree: {
            id: 'n7',
            role: 'Sentence',
            children: [
                {
                    id: 'n7-t',
                    role: 'Topic',
                    text: { hanzi: '我', pinyin: 'wǒ', translation: 'I' }
                },
                {
                    id: 'n7-c',
                    role: 'Comment',
                    subRole: 'sequential clauses',
                    children: [
                        {
                            id: 'n7-p-vp1',
                            role: 'Verb Phrase',
                            subRole: 'clause 1',
                            children: [
                                {
                                    id: 'n7-p-vp1-hv',
                                    role: 'Head Verb',
                                    text: { hanzi: '看', pinyin: 'kàn', translation: 'look' }
                                },
                                {
                                    id: 'n7-p-vp1-part',
                                    role: 'Particle',
                                    subRole: 'aspect',
                                    text: { hanzi: '了', pinyin: 'le', translation: '(completion)' }
                                },
                                {
                                    id: 'n7-p-vp1-comp',
                                    role: 'Complement',
                                    subRole: 'duration',
                                    text: { hanzi: '半天', pinyin: 'bàn tiān', translation: 'half a day/long time' }
                                }
                            ]
                        },
                        {
                            id: 'n7-p-vp2',
                            role: 'Verb Phrase',
                            subRole: 'clause 2',
                            children: [
                                {
                                    id: 'n7-p-vp2-adv',
                                    role: 'Adjunct',
                                    text: { hanzi: '还是', pinyin: 'hái shì', translation: 'still' }
                                },
                                {
                                    id: 'n7-p-vp2-hv',
                                    role: 'Head Verb',
                                    text: { hanzi: '看', pinyin: 'kàn', translation: 'look' }
                                },
                                {
                                    id: 'n7-p-vp2-part',
                                    role: 'Particle',
                                    subRole: 'potential negator',
                                    text: { hanzi: '不', pinyin: 'bù', translation: 'cannot' }
                                },
                                {
                                    id: 'n7-p-vp2-comp',
                                    role: 'Complement',
                                    subRole: 'potential',
                                    text: { hanzi: '了', pinyin: 'liǎo', translation: 'finish (potential)' }
                                }
                            ]
                        },
                        {
                            id: 'n7-p-vp3',
                            role: 'Verb Phrase',
                            subRole: 'clause 3',
                            children: [
                                {
                                    id: 'n7-p-vp3-adv1',
                                    role: 'Adjunct',
                                    subRole: 'consequence',
                                    text: { hanzi: '就', pinyin: 'jiù', translation: 'then/so' }
                                },
                                {
                                    id: 'n7-p-vp3-adv2',
                                    role: 'Adjunct',
                                    subRole: 'negation',
                                    text: { hanzi: '不', pinyin: 'bù', translation: 'not' }
                                },
                                {
                                    id: 'n7-p-vp3-hv',
                                    role: 'Head Verb',
                                    text: { hanzi: '看', pinyin: 'kàn', translation: 'look' }
                                },
                                {
                                    id: 'n7-p-vp3-part',
                                    role: 'Particle',
                                    subRole: 'change of state',
                                    text: { hanzi: '了', pinyin: 'le', translation: '(new situation)' }
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    {
        id: 's15',
        category: 'Basic Topic–Comment (主题评论)',
        chinese: '那本书，放在桌子上了。',
        pinyin: 'Nà běn shū , fàng zài zhuō zi shàng le .',
        translation: 'That book, (it\'s been) put on the table.',

        explanation: '**那本书** ("that book") is the Topic. Inside the Comment, the actual subject (whoever placed the book) is never stated. But there\'s something more: the dropped **[它]** (it) clearly refers *back* to the book in the Topic. The Topic is not just setting the scene; it is literally acting as the hidden subject of the action that follows. The **red arc** in the tree draws a connecting line from the ghost node back to the Topic, making this invisible link visible. This is one of the most common patterns in Mandarin: name a topic, then silently use it as the subject.',
        tree: {
            id: 'n15',
            role: 'Sentence',
            children: [
                {
                    id: 'n15-t',
                    role: 'Topic',
                    children: [
                        {
                            id: 'n15-t-attr',
                            role: 'Attributive',
                            text: { hanzi: '那本', pinyin: 'nà běn', translation: 'that (book)' }
                        },
                        {
                            id: 'n15-t-hn',
                            role: 'Head Noun',
                            text: { hanzi: '书', pinyin: 'shū', translation: 'book' }
                        }
                    ]
                },
                {
                    id: 'n15-c',
                    role: 'Comment',
                    children: [
                        {
                            id: 'n15-subj',
                            role: 'Subject',
                            isDropped: true,
                            impliedText: '它',
                            refersToId: 'n15-t',  // anaphoric link back to Topic
                        },
                        {
                            id: 'n15-vp',
                            role: 'Verb Phrase',
                            children: [
                                {
                                    id: 'n15-vp-hv',
                                    role: 'Head Verb',
                                    text: { hanzi: '放', pinyin: 'fàng', translation: 'place/put' }
                                },
                                {
                                    id: 'n15-vp-lp',
                                    role: 'Complement',
                                    subRole: 'result location',
                                    children: [
                                        {
                                            id: 'n15-vp-lp-prep',
                                            role: 'Preposition',
                                            text: { hanzi: '在', pinyin: 'zài', translation: 'at/on' }
                                        },
                                        {
                                            id: 'n15-vp-lp-np',
                                            role: 'Noun Phrase',
                                            children: [
                                                {
                                                    id: 'n15-vp-lp-np-hn',
                                                    role: 'Head Noun',
                                                    text: { hanzi: '桌子上', pinyin: 'zhuō zi shàng', translation: 'on the table' }
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    id: 'n15-vp-le',
                                    role: 'Particle',
                                    subRole: 'completion',
                                    text: { hanzi: '了', pinyin: 'le', translation: '(done)' }
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    {
        id: 's16',
        category: 'Basic Topic–Comment (主题评论)',
        chinese: '张三，爱唱歌。',
        pinyin: 'Zhāng Sān , ài chàng gē .',
        translation: 'Zhang San, (he) loves singing.',
        explanation: '**张三** ("Zhang San, a personal name") is the Topic. The Comment describes what he does: loves singing. But the grammatical subject of "loves" (爱唱歌) is never stated; the listener understands it is the same Zhang San who was just named. The **red arc** in the tree runs from the invisible **[他]** node back to 张三, making that link visible. Naming someone as the Topic and then talking about them without repeating the name is one of the most natural patterns in everyday Mandarin conversation.',
        tree: {
            id: 'n16',
            role: 'Sentence',
            children: [
                {
                    id: 'n16-t',
                    role: 'Topic',
                    text: { hanzi: '张三', pinyin: 'Zhāng Sān', translation: 'Zhang San (name)' }
                },
                {
                    id: 'n16-c',
                    role: 'Comment',
                    children: [
                        {
                            id: 'n16-subj',
                            role: 'Subject',
                            isDropped: true,
                            impliedText: '他',
                            refersToId: 'n16-t',  // anaphoric link back to Topic
                        },
                        {
                            id: 'n16-vp',
                            role: 'Verb Phrase',
                            children: [
                                {
                                    id: 'n16-vp-hv',
                                    role: 'Head Verb',
                                    text: { hanzi: '爱', pinyin: 'ài', translation: 'love' }
                                },
                                {
                                    id: 'n16-vp-obj',
                                    role: 'Object',
                                    children: [
                                        {
                                            id: 'n16-vp-obj-hv',
                                            role: 'Verb Phrase',
                                            subRole: 'separable verb (离合词): 唱歌',
                                            children: [
                                                {
                                                    id: 'n16-vp-obj-hv-vm',
                                                    role: 'Verb Morpheme',
                                                    text: { hanzi: '唱', pinyin: 'chàng', translation: 'sing' },
                                                },
                                                {
                                                    id: 'n16-vp-obj-hv-om',
                                                    role: 'Object Morpheme',
                                                    text: { hanzi: '歌', pinyin: 'gē', translation: 'song(s)' },
                                                },
                                            ],
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
        id: 's19',
        category: 'Basic Topic–Comment (主题评论)',
        chinese: '他学中文学了五年了。',
        pinyin: 'Tā xué Zhōng wén xué le wǔ nián le.',
        translation: 'He has been studying Chinese for five years now.',
        explanation: 'When a Mandarin verb has both an **object** ("the thing acted on") and a **duration** ("how long"), you cannot place them side by side; the verb must be **repeated**. First: **学中文** (study Chinese, verb + object). Then: **学了五年** ("studied for five years, same verb again, now followed by the time"). In English we just say "studied Chinese for five years": one verb, no repetition. Mandarin separates the two ideas into two verb phrases, glued by repeating the verb. The final **了** signals that the studying is still ongoing up to this moment.',
        tree: {
            id: 'n19',
            role: 'Sentence',
            children: [
                {
                    id: 'n19-t',
                    role: 'Topic',
                    text: { hanzi: '他', pinyin: 'tā', translation: 'he' }
                },
                {
                    id: 'n19-c',
                    role: 'Comment',
                    subRole: 'duration complement (verb repetition)',
                    children: [
                        {
                            id: 'n19-vp1',
                            role: 'Verb Phrase',
                            subRole: 'verb + object (first mention)',
                            children: [
                                {
                                    id: 'n19-vp1-v',
                                    role: 'Head Verb',
                                    text: { hanzi: '学', pinyin: 'xué', translation: 'study/learn' }
                                },
                                {
                                    id: 'n19-vp1-obj',
                                    role: 'Object',
                                    text: { hanzi: '中文', pinyin: 'Zhōng wén', translation: 'Chinese (language)' }
                                }
                            ]
                        },
                        {
                            id: 'n19-vp2',
                            role: 'Verb Phrase',
                            subRole: 'verb repeated + duration complement',
                            children: [
                                {
                                    id: 'n19-vp2-v',
                                    role: 'Head Verb',
                                    subRole: 'repeated verb',
                                    text: { hanzi: '学', pinyin: 'xué', translation: 'study (repeated)' }
                                },
                                {
                                    id: 'n19-vp2-asp',
                                    role: 'Particle',
                                    subRole: 'aspect',
                                    text: { hanzi: '了', pinyin: 'le', translation: '(marks duration)' }
                                },
                                {
                                    id: 'n19-vp2-comp',
                                    role: 'Complement',
                                    subRole: 'duration',
                                    children: [
                                        {
                                            id: 'n19-vp2-comp-num',
                                            role: 'Attributive',
                                            text: { hanzi: '五', pinyin: 'wǔ', translation: 'five' }
                                        },
                                        {
                                            id: 'n19-vp2-comp-mw',
                                            role: 'Measure Word',
                                            text: { hanzi: '年', pinyin: 'nián', translation: 'year(s)' }
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'n19-part',
                            role: 'Particle',
                            subRole: 'current relevance (still ongoing)',
                            text: { hanzi: '了', pinyin: 'le', translation: '(up to now / still ongoing)' }
                        }
                    ]
                }
            ]
        }
    },
    {
        id: 's70',
        category: 'Basic Topic\u2013Comment (\u4e3b\u9898\u8bc4\u8bba)',
        chinese: '几个人一起走，里面肯定有值得我学习的人。',
        pinyin: 'Jǐ gè rén yì qǐ zǒu, lǐ miàn kěn dìng yǒu zhí de wǒ xué xí de rén.',
        translation: 'When a few people walk together, there is surely someone worth learning from among them.',
        explanation: 'This modernizes the classical 三人行必有我師焉. The classical construction compresses the entire idea into eight characters; modern Mandarin spells it out with a Topic-Comment frame. *Grammatically,* the Topic (几个人一起走) sets up a situation: "when a few people walk together." The Comment then asserts: 里面 ("among them") + 肯定有 ("surely there is") + a complex noun phrase. The noun phrase 值得我学习的人 ("a person worth my studying") uses a nested 的 descriptive noun phrase.',
        tree: {
            id: 's70-root', role: 'Sentence', children: [
                { id: 's70-topic', role: 'Topic', subRole: 'situational frame', children: [
                    { id: 's70-jgr', role: 'Subject', text: { hanzi: '几个人', pinyin: 'jǐ gè rén', translation: 'a few people' } },
                    { id: 's70-yq', role: 'Adjunct', text: { hanzi: '一起', pinyin: 'yì qǐ', translation: 'together' } },
                    { id: 's70-zou', role: 'Head Verb', text: { hanzi: '走', pinyin: 'zǒu', translation: 'walk' } },
                ]},
                { id: 's70-comment', role: 'Comment', children: [
                    { id: 's70-lm', role: 'Adjunct', subRole: 'location', text: { hanzi: '里面', pinyin: 'lǐ miàn', translation: 'among them' } },
                    { id: 's70-kd', role: 'Adjunct', text: { hanzi: '肯定', pinyin: 'kěn dìng', translation: 'surely' } },
                    { id: 's70-you', role: 'Head Verb', text: { hanzi: '有', pinyin: 'yǒu', translation: 'there is' } },
                    { id: 's70-obj', role: 'Object', children: [
                        { id: 's70-zd', role: 'Attributive', text: { hanzi: '值得我学习的', pinyin: 'zhí de wǒ xué xí de', translation: 'worth my learning from' } },
                        { id: 's70-ren', role: 'Head Noun', text: { hanzi: '人', pinyin: 'rén', translation: 'person' } },
                    ]},
                ]},
            ]
        }
    },
    {
        id: 's78',
        category: 'Basic Topic\u2013Comment (\u4e3b\u9898\u8bc4\u8bba)',
        chinese: '生命也是我想要的东西。',
        pinyin: 'Shēng mìng yě shì wǒ xiǎng yào de dōng xi.',
        translation: 'Life is also something I desire.',
        explanation: 'This modernizes the classical 生亦我所欲也. The classical 所欲 ("that which is desired") becomes 想要的东西 ("things I want to"); the classical linking verb-like 也 at the end becomes the modern linking verb 是. *Grammatically,* 生命 ("life") is the Topic. The Comment uses 也 ("also") as an adverb before 是 ("is"), then a 的 descriptive noun phrase: 我想要的东西 ("the thing I want"). This is a straightforward Topic-Comment identification sentence.',
        tree: {
            id: 's78-root', role: 'Sentence', children: [
                { id: 's78-t', role: 'Topic', text: { hanzi: '生命', pinyin: 'shēng mìng', translation: 'life' } },
                { id: 's78-c', role: 'Comment', children: [
                    { id: 's78-ye', role: 'Adjunct', text: { hanzi: '也', pinyin: 'yě', translation: 'also' } },
                    { id: 's78-shi', role: 'Copula', text: { hanzi: '是', pinyin: 'shì', translation: 'is' } },
                    { id: 's78-obj', role: 'Object', children: [
                        { id: 's78-attr', role: 'Attributive', text: { hanzi: '我想要的', pinyin: 'wǒ xiǎng yào de', translation: 'that I desire' } },
                        { id: 's78-dx', role: 'Head Noun', text: { hanzi: '东西', pinyin: 'dōng xi', translation: 'thing' } },
                    ]},
                ]},
            ]
        }
    },
    {
        id: 's86',
        category: 'Basic Topic\u2013Comment (\u4e3b\u9898\u8bc4\u8bba)',
        chinese: '了解别人的人算聪明，了解自己的人才算高明。',
        pinyin: 'Liǎo jiě bié rén de rén suàn cōng míng, liǎo jiě zì jǐ de rén cái suàn gāo míng.',
        translation: 'Those who understand others are clever; those who understand themselves are truly wise.',
        explanation: 'This modernizes the classical 知人者智自知者明. The classical 者 particle becomes 的人, and the classical terse predication becomes 算 ("counts as") + quality. *Grammatically,* two parallel Topic-Comment clauses share the same structure. Each Topic is a 的 descriptive noun phrase: 了解别人的人 ("people who understand others"). Each Comment uses 算 ("counts as") as the linking verb. The second clause adds 才 ("only then") for emphasis, distinguishing mere cleverness from true wisdom.',
        tree: {
            id: 's86-root', role: 'Sentence', children: [
                { id: 's86-c1', role: 'Topic', subRole: 'first clause', children: [
                    { id: 's86-s1', role: 'Subject', children: [
                        { id: 's86-a1', role: 'Attributive', text: { hanzi: '了解别人的', pinyin: 'liǎo jiě bié rén de', translation: 'who understand others' } },
                        { id: 's86-r1', role: 'Head Noun', text: { hanzi: '人', pinyin: 'rén', translation: 'people' } },
                    ]},
                    { id: 's86-suan1', role: 'Head Verb', text: { hanzi: '算', pinyin: 'suàn', translation: 'count as' } },
                    { id: 's86-cm', role: 'Complement', text: { hanzi: '聪明', pinyin: 'cōng míng', translation: 'clever' } },
                ]},
                { id: 's86-c2', role: 'Comment', subRole: 'second clause', children: [
                    { id: 's86-s2', role: 'Subject', children: [
                        { id: 's86-a2', role: 'Attributive', text: { hanzi: '了解自己的', pinyin: 'liǎo jiě zì jǐ de', translation: 'who understand themselves' } },
                        { id: 's86-r2', role: 'Head Noun', text: { hanzi: '人', pinyin: 'rén', translation: 'people' } },
                    ]},
                    { id: 's86-cai', role: 'Adjunct', text: { hanzi: '才', pinyin: 'cái', translation: 'only then' } },
                    { id: 's86-suan2', role: 'Head Verb', text: { hanzi: '算', pinyin: 'suàn', translation: 'count as' } },
                    { id: 's86-gm', role: 'Complement', text: { hanzi: '高明', pinyin: 'gāo míng', translation: 'truly wise' } },
                ]},
            ]
        }
    },
    {
        id: 's90',
        category: 'Basic Topic\u2013Comment (\u4e3b\u9898\u8bc4\u8bba)',
        chinese: '做事正义的人，帮助他的人就多；做事不正义的人，帮助他的人就少。',
        pinyin: 'Zuò shì zhèng yì de rén, bāng zhù tā de rén jiù duō; zuò shì bú zhèng yì de rén, bāng zhù tā de rén jiù shǎo.',
        translation: 'Those who act justly gain much support; those who act unjustly find little.',
        explanation: 'This modernizes the classical 得道者多助失道者寡助. The classical 者 particle becomes 的人, and the terse two-character predicates expand into full modern clauses. *Grammatically,* two parallel Topic-Comment pairs share the same structure. Each Topic is a 的 descriptive noun phrase: 做事正义的人 ("people who do things justly"). Each Comment is also a 的 descriptive noun phrase used as subject: 帮助他的人 ("people who help them") + 就 + quality (多/少). This showcases how modern Mandarin builds complex subjects through nested 的 phrases.',
        tree: {
            id: 's90-root', role: 'Sentence', children: [
                { id: 's90-c1', role: 'Topic', subRole: 'first clause', children: [
                    { id: 's90-t1', role: 'Subject', children: [
                        { id: 's90-a1', role: 'Attributive', text: { hanzi: '做事正义的', pinyin: 'zuò shì zhèng yì de', translation: 'who act justly' } },
                        { id: 's90-r1', role: 'Head Noun', text: { hanzi: '人', pinyin: 'rén', translation: 'people' } },
                    ]},
                    { id: 's90-s1', role: 'Subject', children: [
                        { id: 's90-bz1', role: 'Attributive', text: { hanzi: '帮助他的', pinyin: 'bāng zhù tā de', translation: 'who help them' } },
                        { id: 's90-r2', role: 'Head Noun', text: { hanzi: '人', pinyin: 'rén', translation: 'people' } },
                    ]},
                    { id: 's90-jiu1', role: 'Adjunct', text: { hanzi: '就', pinyin: 'jiù', translation: 'then' } },
                    { id: 's90-duo', role: 'Head Verb', text: { hanzi: '多', pinyin: 'duō', translation: 'many' } },
                ]},
                { id: 's90-c2', role: 'Comment', subRole: 'second clause', children: [
                    { id: 's90-t2', role: 'Subject', children: [
                        { id: 's90-a2', role: 'Attributive', text: { hanzi: '做事不正义的', pinyin: 'zuò shì bú zhèng yì de', translation: 'who act unjustly' } },
                        { id: 's90-r3', role: 'Head Noun', text: { hanzi: '人', pinyin: 'rén', translation: 'people' } },
                    ]},
                    { id: 's90-s2', role: 'Subject', children: [
                        { id: 's90-bz2', role: 'Attributive', text: { hanzi: '帮助他的', pinyin: 'bāng zhù tā de', translation: 'who help them' } },
                        { id: 's90-r4', role: 'Head Noun', text: { hanzi: '人', pinyin: 'rén', translation: 'people' } },
                    ]},
                    { id: 's90-jiu2', role: 'Adjunct', text: { hanzi: '就', pinyin: 'jiù', translation: 'then' } },
                    { id: 's90-shao', role: 'Head Verb', text: { hanzi: '少', pinyin: 'shǎo', translation: 'few' } },
                ]},
            ]
        }
    },
    {
        id: 's11',
        category: 'Basic Topic–Comment (主题评论)',
        chinese: '这件事非你亲自去办不可。',
        pinyin: 'Zhè jiàn shì fēi nǐ qīn zì qù bàn bù kě.',
        translation: 'This matter absolutely must be handled by you yourself; there is no way around it.',

        explanation: 'The outer Topic **这件事** ("this matter") sets the frame. The Comment uses a paired framing structure: **非** at the start and **不可** at the end lock together to express absolute necessity, literally *"it is not the case that it can be avoided"*. Between them: who must act (you), how (personally, **亲自**), and what the action is (go handle it). This double negative is a fixed expression: 非...不可 roughly means *"must, without exception"*. You\'ll encounter the same pattern in Chinese proverbs and formal writing.',
        tree: {
            id: 'n11',
            role: 'Sentence',
            children: [
                {
                    id: 'n11-t',
                    role: 'Topic',
                    subRole: 'sentence topic',
                    children: [
                        {
                            id: 'n11-t-attr',
                            role: 'Attributive',
                            text: { hanzi: '这件', pinyin: 'zhè jiàn', translation: 'this (matter-measure)' }
                        },
                        {
                            id: 'n11-t-hn',
                            role: 'Head Noun',
                            text: { hanzi: '事', pinyin: 'shì', translation: 'matter/affair' }
                        }
                    ]
                },
                {
                    id: 'n11-c',
                    role: 'Comment',
                    children: [
                        {
                            id: 'n11-c-fei',
                            role: 'Adjunct',
                            subRole: 'double-negation opener (fēi...bùkě)',
                            text: { hanzi: '非', pinyin: 'fēi', translation: 'must / it must be that' }
                        },
                        {
                            id: 'n11-c-s',
                            role: 'Subject',
                            text: { hanzi: '你', pinyin: 'nǐ', translation: 'you' }
                        },
                        {
                            id: 'n11-c-p',
                            role: 'Predicate',
                            children: [
                                {
                                    id: 'n11-c-p-adv',
                                    role: 'Adjunct',
                                    subRole: 'manner',
                                    text: { hanzi: '亲自', pinyin: 'qīn zì', translation: 'personally/yourself' }
                                },
                                {
                                    id: 'n11-c-p-vp',
                                    role: 'Verb Phrase',
                                    subRole: 'serial verb (purpose chain)',
                                    children: [
                                        {
                                            id: 'n11-c-p-vp-v1',
                                            role: 'Head Verb',
                                            subRole: 'motion verb',
                                            text: { hanzi: '去', pinyin: 'qù', translation: 'go' }
                                        },
                                        {
                                            id: 'n11-c-p-vp-v2',
                                            role: 'Verb Phrase',
                                            subRole: 'purpose clause',
                                            children: [
                                                {
                                                    id: 'n11-c-p-vp-v2-hv',
                                                    role: 'Head Verb',
                                                    text: { hanzi: '办', pinyin: 'bàn', translation: 'handle/do' }
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    id: 'n11-c-p-buke',
                                    role: 'Adjunct',
                                    subRole: 'double-negation closure (fēi...bùkě)',
                                    text: { hanzi: '不可', pinyin: 'bù kě', translation: 'cannot avoid / must' }
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    {
        id: 's57',
        category: 'Basic Topic–Comment (主题评论)',
        chinese: '这件事非解决不可。',
        pinyin: 'Zhè jiàn shì fēi jiě jué bù kě.',
        translation: 'This matter absolutely must be resolved.',
        explanation: '**这件事** (this matter; 件 is the measure word for affairs/items) is the Topic. The Comment uses the double-negative pattern **非…不可**: 非 ("must / unless") + verb + 不可 ("not acceptable"). The two negatives produce a strong affirmative: "it is not acceptable to NOT resolve it" → "it must be resolved." This is one of Mandarin\'s most emphatic constructions for expressing necessity. Unlike 难道 which questions, 非…不可 *demands*. The pattern is formulaic: 非 + [verb phrase] + 不可. You can slot any action inside: 非去不可 (must go), 非说清楚不可 (must explain clearly).',
        tree: {
            id: 'n57',
            role: 'Sentence',
            children: [
                {
                    id: 'n57-t',
                    role: 'Topic',
                    children: [
                        {
                            id: 'n57-t-attr',
                            role: 'Attributive',
                            text: { hanzi: '这件', pinyin: 'zhè jiàn', translation: 'this (matter-measure)' },
                        },
                        {
                            id: 'n57-t-hn',
                            role: 'Head Noun',
                            text: { hanzi: '事', pinyin: 'shì', translation: 'matter / affair' },
                        },
                    ],
                },
                {
                    id: 'n57-c',
                    role: 'Comment',
                    subRole: 'double-negation necessity (非…不可)',
                    children: [
                        {
                            id: 'n57-fei',
                            role: 'Adjunct',
                            subRole: 'necessity marker (非)',
                            text: { hanzi: '非', pinyin: 'fēi', translation: 'must / unless' },
                        },
                        {
                            id: 'n57-hv',
                            role: 'Head Verb',
                            text: { hanzi: '解决', pinyin: 'jiě jué', translation: 'resolve / settle' },
                        },
                        {
                            id: 'n57-buke',
                            role: 'Complement',
                            subRole: 'double-negation closure (不可)',
                            text: { hanzi: '不可', pinyin: 'bù kě', translation: 'not acceptable (closing negation)' },
                        },
                    ],
                },
            ],
        },
    }
];
