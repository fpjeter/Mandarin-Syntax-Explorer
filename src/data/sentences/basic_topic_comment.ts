import type { SentenceData } from '../../types/grammar';

export const basicTopicComment: SentenceData[] = [
    {
        id: 's1',
        category: 'Basic Topic–Comment (主题评论)',
        chinese: '他打碎了那个花瓶。',
        pinyin: 'Tā dǎ suì le nà ge huā píng.',
        translation: 'He broke that vase.',
        explanation: 'The tree shows the most fundamental pattern in Mandarin. At the very top, **他** ("he") sits as the **Topic**: the thing the sentence is about. Everything underneath is the **Comment**: what actually happened. Look inside the Comment and you will see **打碎**, a tight verb-result pair where 打 ("hit") and 碎 ("shatter") fuse together to mean "smash to pieces." The **了** right after it marks the action as completed. Finally, the object **那个花瓶** ("that vase") tells us what got smashed. This Topic-Comment split is the backbone of every Mandarin sentence.',
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
        explanation: 'Here, **我** ("I") opens the sentence as the Topic. The Comment chains two verb phrases without repeating who is doing them: first **喜欢** ("like"), and then the activity being liked, **在图书馆看书** ("reading books in the library"). Notice where the location lands in the tree: **在图书馆** ("in the library") comes *before* the verb **看** ("read"), not after. Mandarin sets the scene first, then names the action. This "scene before action" ordering is one of the clearest differences from English.',
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
        explanation: 'The Topic **他** ("he") anchors the top of the tree. Then look at the Comment: it stacks **four verb phrases** one inside the other with no connecting word between them. decided → start → learn → drive a car. There is no word for "to" the way English needs one. Each verb takes the next verb phrase as its object, and the tree expands outward to show all four nested layers. This kind of serial verb chaining is completely natural in Mandarin and very common in everyday speech.',
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
        explanation: '**我** ("I") appears once as the Topic, then becomes the implied actor for **three separate clauses** in a row. Mandarin does not repeat who is acting between clauses. The Comment chains three events: tried for a long time, still could not finish, so gave up. The middle clause **看不了** is especially interesting: sandwiching **不** between the verb and its result means "unable to achieve the outcome." Here, unable to finish reading. This is called a **potential complement**, and it is one of Mandarin\'s most common patterns.',
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

        explanation: 'Notice the comma in the Chinese text. **那本书** ("that book") is set apart as the Topic. Inside the Comment, the real actor (whoever placed the book) is never stated, and the dropped **[它]** ("it") clearly refers back to the book just named. The **red arc** in the tree draws a visible line from the ghost node back to the Topic, showing this invisible link. This is one of the most natural patterns in Mandarin: name a topic, then talk about it without repeating it.',
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
        explanation: 'The sentence names **张三** ("Zhang San") as the Topic, then the Comment says what he does: loves singing. But look at who the actor of **爱唱歌** ("loves singing") is. It is never stated explicitly. The listener just knows it is the same Zhang San from a moment ago. The **red arc** in the tree runs from the invisible ghost node **[他]** back to 张三 at the top, making this connection visible. Dropping the actor when it matches the Topic is one of the most natural moves in everyday Mandarin conversation.',
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
        explanation: 'When a Mandarin verb has both an **object** (the thing acted on) and a **duration** (how long), they cannot sit side by side. The verb must be **repeated**. The tree shows this clearly: first **学中文** ("study Chinese," verb + object), then **学了五年** ("studied for five years," same verb again, now paired with the duration). English just says "studied Chinese for five years" with one verb. Mandarin splits the information into two verb phrases, connected by repeating 学. The final **了** signals that the studying continues up to this moment.',
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
        explanation: 'A modern take on 三人行必有我師焉 (from the Analects of Confucius: "Among three people walking, there is surely my teacher"). Classical Chinese packed the whole idea into eight characters. Modern Mandarin spells it out in a clear Topic-Comment frame. The Topic (**几个人一起走**, "a few people walk together") sets the situation. The Comment then declares: **里面** ("among them") + **肯定有** ("surely there is") + a noun phrase built with 的: **值得我学习的人** ("a person worth learning from").',
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
        explanation: 'A modern take on 生亦我所欲也 (from Mencius: "Life is also what I desire"). The classical 所欲 ("that which is desired") becomes **想要的东西** ("things I want"), and the classical sentence-final 也 becomes the modern linking verb **是** ("is"). In the tree, **生命** ("life") sits as the Topic. The Comment uses **也** ("also") before 是, followed by a noun phrase built with 的: **我想要的东西** ("the thing I want"). A clean identification sentence.',
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
        explanation: 'A modern take on 知人者智，自知者明 (from the Dao De Jing: "Those who know others are wise; those who know themselves are enlightened"). The classical 者 ("the one who") becomes **的人** in modern Mandarin. The tree shows two parallel clauses with matching structure: each Topic is a noun phrase built with 的 (**了解别人的人**, "people who understand others"), and each Comment uses **算** ("counts as") to assign a quality. The second clause adds **才** ("only then") for emphasis, drawing a distinction between cleverness and true wisdom.',
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
        explanation: 'A modern take on 得道者多助，失道者寡助 (from Mencius: "The just gain much support; the unjust find little"). The classical 者 becomes **的人**, and the compact classical predicates expand into full modern clauses. The tree shows two parallel Topic-Comment pairs. Each Topic is a noun phrase built with 的: **做事正义的人** ("people who act justly"). Each Comment nests another 的 phrase: **帮助他的人** ("people who help them"), followed by **就** and a quality (**多** "many" or **少** "few"). Notice how 的 phrases stack inside each other to build complex meanings.',
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

        explanation: 'The outer Topic **这件事** ("this matter") sets the frame. The Comment uses a paired structure: **非** at the start and **不可** at the end lock together to express absolute necessity, literally "it is not the case that it can be avoided." Between them: who must act (you, **你**), how (personally, **亲自**), and the action itself (go handle it, **去办**). This double negative is a fixed expression: 非...不可 roughly means "must, without exception." You will encounter the same pattern in Chinese proverbs and formal writing.',
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
                            subRole: 'negation',
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
                                    subRole: 'negation',
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
        explanation: '**这件事** ("this matter"; 件 is a measure word for affairs) is the Topic. The Comment uses the double-negative pattern **非…不可**: 非 ("must/unless") + verb + 不可 ("not acceptable"). The two negatives produce a strong affirmative: "it is not acceptable NOT to resolve it," meaning "it must be resolved." This is one of Mandarin\'s most emphatic ways to express necessity. The pattern is formulaic: 非 + verb phrase + 不可. You can slot any action inside: 非去不可 ("must go"), 非说清楚不可 ("must explain clearly").',
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
                            subRole: 'negation',
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
    },
    {
        id: 's124',
        category: 'Basic Topic–Comment (主题评论)',
        chinese: '苹果我已经吃了。',
        pinyin: 'Píng guǒ wǒ yǐ jīng chī le.',
        translation: 'The apple, I\'ve already eaten it.',
        explanation: 'Here, **苹果** ("apple") sits as the Topic, but notice something different: the apple is not the one doing anything. It is the thing being acted upon. Inside the Comment, **我** ("I") is the actual actor, followed by **已经吃了** ("already ate"). This is a **patient-topic** sentence: the Topic is not the doer but the thing being discussed. English signals this with word order ("I ate the apple"), but Mandarin can freely place the patient first as a frame: "As for the apple, I already ate it." This flexibility is one of the most distinctive features of Mandarin\'s Topic-Comment system.',
        tree: {
            id: 's124-n',
            role: 'Sentence',
            children: [
                {
                    id: 's124-t',
                    role: 'Topic',
                    subRole: 'Patient-Topic',
                    text: { hanzi: '苹果', pinyin: 'píng guǒ', translation: 'apple' }
                },
                {
                    id: 's124-c',
                    role: 'Comment',
                    children: [
                        {
                            id: 's124-c-subj',
                            role: 'Subject',
                            text: { hanzi: '我', pinyin: 'wǒ', translation: 'I' }
                        },
                        {
                            id: 's124-c-adj',
                            role: 'Adjunct',
                            text: { hanzi: '已经', pinyin: 'yǐ jīng', translation: 'already' }
                        },
                        {
                            id: 's124-c-hv',
                            role: 'Head Verb',
                            text: { hanzi: '吃', pinyin: 'chī', translation: 'eat' }
                        },
                        {
                            id: 's124-c-le',
                            role: 'Particle',
                            subRole: 'completion',
                            text: { hanzi: '了', pinyin: 'le', translation: '(done)' }
                        }
                    ]
                }
            ]
        }
    },
    {
        id: 's125',
        category: 'Basic Topic–Comment (主题评论)',
        chinese: '墙上挂着一幅画。',
        pinyin: 'Qiáng shàng guà zhe yī fú huà.',
        translation: 'On the wall hangs a painting.',
        explanation: '**墙上** ("on the wall") is the Topic. It is not a person or thing but a *location* serving as the frame for what follows. The Comment uses **挂着** ("is hanging"), with the durative aspect marker **着** indicating an ongoing state: something is currently hanging there. The painting (**一幅画**, where 幅 is the measure word for paintings and posters) is the thing existing in that location. This sentence type is called an "existential" or "presentative" pattern: it introduces something by first naming where it exists. English uses inverted word order for the same effect: "On the wall hangs a painting."',
        tree: {
            id: 's125-n',
            role: 'Sentence',
            children: [
                {
                    id: 's125-t',
                    role: 'Topic',
                    subRole: 'Location',
                    children: [
                        { id: 's125-t-hn', role: 'Head Noun', text: { hanzi: '墙', pinyin: 'qiáng', translation: 'wall' } },
                        { id: 's125-t-loc', role: 'Particle', subRole: 'localizer', text: { hanzi: '上', pinyin: 'shàng', translation: 'on/above' } }
                    ]
                },
                {
                    id: 's125-c',
                    role: 'Comment',
                    children: [
                        { id: 's125-c-hv', role: 'Head Verb', text: { hanzi: '挂', pinyin: 'guà', translation: 'hang' } },
                        { id: 's125-c-zhe', role: 'Particle', subRole: 'durative', text: { hanzi: '着', pinyin: 'zhe', translation: '(ongoing state)' } },
                        {
                            id: 's125-c-subj',
                            role: 'Subject',
                            subRole: 'existential subject',
                            children: [
                                { id: 's125-c-subj-num', role: 'Attributive', text: { hanzi: '一', pinyin: 'yī', translation: 'one' } },
                                { id: 's125-c-subj-mw', role: 'Attributive', subRole: 'measure word', text: { hanzi: '幅', pinyin: 'fú', translation: '(measure word)' } },
                                { id: 's99-c-subj-hn', role: 'Head Noun', text: { hanzi: '画', pinyin: 'huà', translation: 'painting' } }
                            ]
                        }
                    ]
                }
            ]
        }
    }
];
