import type { SentenceData } from '../types/grammar';

export const sampleSentences: SentenceData[] = [
    {
        id: 's1',
        category: 'Basic Topic–Comment',
        chinese: '他打碎了那个花瓶。',
        pinyin: 'Tā dǎ suì le nà ge huā píng.',
        translation: 'He broke that vase.',
        explanation: 'This is the most basic Mandarin sentence pattern: first say **who or what you are talking about**, then say **what happened**. Here, **他** (he) is what the sentence is about — this is called the **Topic**. Everything that follows — the breaking, the vase — is the **Comment**: the actual event. The tree splits directly at that boundary. Notice that **打碎** is a compound action: 打 means "hit" and 碎 means "shatter" — stacked together they mean "smash to pieces". The **了** after it marks that the action is done and complete.',
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
        category: 'Basic Topic–Comment',
        chinese: '我喜欢在图书馆看书。',
        pinyin: 'Wǒ xǐ huān zài tú shū guǎn kàn shū.',
        translation: 'I like reading books in the library.',
        explanation: '**我** (I) is the Topic. The Comment strings two verb phrases together without repeating the subject — Mandarin can chain actions like this naturally. First **喜欢** (like), then the thing being liked: **going to the library and reading**. Notice how the location (在图书馆) comes *before* the verb (看), not after it the way English does. In Mandarin, where something happens is set up as background context before the action is named.',
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
                                    role: 'Location Phrase',
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
        id: 's3',
        category: 'BA Construction',
        chinese: '她昨天把我的钱包忘在出租车上了。',
        pinyin: 'Tā zuó tiān bǎ wǒ de qián bāo wàng zài chū zū chē shàng le.',
        translation: 'She forgot my wallet in the taxi yesterday.',
        explanation: '**她** (she) is the Topic. The Comment opens with a time stamp — **昨天** (yesterday) — because in Mandarin, time and place come before the verb, not after it. Then comes a special pattern: **把** moves the object (my wallet) in front of the verb. This is called the **把 construction** — it is used when something specific is being acted upon and something notable happens to it. Think of 把 as a spotlight on the wallet: *"as for the wallet — she forgot it in the taxi."* The tree shows 把 and the wallet grouped together before the verb.',
        tree: {
            id: 'n3',
            role: 'Sentence',
            children: [
                {
                    id: 'n3-t',
                    role: 'Topic',
                    text: { hanzi: '她', pinyin: 'tā', translation: 'she' }
                },
                {
                    id: 'n3-c',
                    role: 'Comment',
                    subRole: 'bǎ-construction',
                    children: [
                        {
                            id: 'n3-p-tp',
                            role: 'Adverb',
                            subRole: 'time',
                            text: { hanzi: '昨天', pinyin: 'zuó tiān', translation: 'yesterday' }
                        },
                        {
                            id: 'n3-p-ba',
                            role: 'Preposition',
                            subRole: 'bǎ-construction',
                            children: [
                                {
                                    id: 'n3-p-ba-prep',
                                    role: 'Preposition',
                                    text: { hanzi: '把', pinyin: 'bǎ', translation: '(object fronting)' }
                                },
                                {
                                    id: 'n3-p-ba-obj',
                                    role: 'Object',
                                    children: [
                                        {
                                            id: 'n3-p-ba-obj-attr',
                                            role: 'Attributive',
                                            text: { hanzi: '我的', pinyin: 'wǒ de', translation: 'my' }
                                        },
                                        {
                                            id: 'n3-p-ba-obj-hn',
                                            role: 'Head Noun',
                                            text: { hanzi: '钱包', pinyin: 'qián bāo', translation: 'wallet' }
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'n3-p-vp',
                            role: 'Verb Phrase',
                            children: [
                                {
                                    id: 'n3-p-vp-hv',
                                    role: 'Head Verb',
                                    text: { hanzi: '忘', pinyin: 'wàng', translation: 'forget' }
                                },
                                {
                                    id: 'n3-p-vp-comp',
                                    role: 'Complement',
                                    subRole: 'location',
                                    children: [
                                        {
                                            id: 'n3-p-vp-comp-prep',
                                            role: 'Preposition',
                                            text: { hanzi: '在', pinyin: 'zài', translation: 'in/at' }
                                        },
                                        {
                                            id: 'n3-p-vp-comp-n',
                                            role: 'Noun',
                                            text: { hanzi: '出租车', pinyin: 'chū zū chē', translation: 'taxi' }
                                        },
                                        {
                                            id: 'n3-p-vp-comp-loc',
                                            role: 'Particle',
                                            subRole: 'localizer',
                                            text: { hanzi: '上', pinyin: 'shàng', translation: '(on/in — localizer)' }
                                        }
                                    ]
                                },
                                {
                                    id: 'n3-p-vp-part',
                                    role: 'Particle',
                                    subRole: 'aspect',
                                    text: { hanzi: '了', pinyin: 'le', translation: '(completion)' }
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    {
        id: 's4',
        category: 'BA Construction',
        chinese: '那只猫在厨房里生气地用爪子把我的杯子弄倒地上了。',
        pinyin: 'Nà zhī māo zài chú fáng lǐ shēng qì de yòng zhuǎ zi bǎ wǒ de bēi zi nòng dào dì shàng le.',
        translation: 'That cat angrily knocked my cup to the floor with its claws.',
        explanation: '**那只猫** (that cat) is the Topic — 只 is a **measure word**, a counting word specific to cats and certain animals. Before the main action even appears, Mandarin layers up the scene inside the Comment: **how** the cat acted (angrily), then **with what** (its claws), then **把** spotlights the cup as the thing being affected. Only after all that setup does the verb **弄** (knock/move) appear. In English, you would lead with the verb much earlier. This sentence shows how Mandarin packs rich detail around the verb systematically.',
        tree: {
            id: 'n4',
            role: 'Sentence',
            children: [
                {
                    id: 'n4-t',
                    role: 'Topic',
                    children: [
                        {
                            id: 'n4-s-attr',
                            role: 'Attributive',
                            text: { hanzi: '那只', pinyin: 'nà zhī', translation: 'that (measure)' }
                        },
                        {
                            id: 'n4-s-hn',
                            role: 'Head Noun',
                            text: { hanzi: '猫', pinyin: 'māo', translation: 'cat' }
                        }
                    ]
                },
                {
                    id: 'n4-c',
                    role: 'Comment',
                    subRole: 'bǎ + manner + instrument',
                    children: [
                        {
                            id: 'n4-p-loc',
                            role: 'Adverb',
                            subRole: 'location',
                            children: [
                                {
                                    id: 'n4-p-loc-prep',
                                    role: 'Preposition',
                                    text: { hanzi: '在', pinyin: 'zài', translation: 'at' }
                                },
                                {
                                    id: 'n4-p-loc-n',
                                    role: 'Noun',
                                    text: { hanzi: '厨房', pinyin: 'chú fáng', translation: 'kitchen' }
                                }
                            ]
                        },
                        {
                            id: 'n4-p-adv1',
                            role: 'Adverb',
                            subRole: 'manner',
                            text: { hanzi: '生气地', pinyin: 'shēng qì de', translation: 'angrily' }
                        },
                        {
                            id: 'n4-p-adv2',
                            role: 'Adverb',
                            subRole: 'instrument',
                            children: [
                                {
                                    id: 'n4-p-adv2-prep',
                                    role: 'Preposition',
                                    text: { hanzi: '用', pinyin: 'yòng', translation: 'with' }
                                },
                                {
                                    id: 'n4-p-adv2-n',
                                    role: 'Noun',
                                    text: { hanzi: '爪子', pinyin: 'zhuǎ zi', translation: 'claws' }
                                }
                            ]
                        },
                        {
                            id: 'n4-p-ba',
                            role: 'Preposition',
                            subRole: 'ba-construction',
                            children: [
                                {
                                    id: 'n4-p-ba-prep',
                                    role: 'Preposition',
                                    text: { hanzi: '把', pinyin: 'bǎ', translation: '(object fronting)' }
                                },
                                {
                                    id: 'n4-p-ba-obj',
                                    role: 'Object',
                                    children: [
                                        {
                                            id: 'n4-p-ba-obj-attr',
                                            role: 'Attributive',
                                            text: { hanzi: '我的', pinyin: 'wǒ de', translation: 'my' }
                                        },
                                        {
                                            id: 'n4-p-ba-obj-hn',
                                            role: 'Head Noun',
                                            text: { hanzi: '杯子', pinyin: 'bēi zi', translation: 'cup' }
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'n4-p-vp',
                            role: 'Verb Phrase',
                            children: [
                                {
                                    id: 'n4-p-vp-hv',
                                    role: 'Head Verb',
                                    text: { hanzi: '弄', pinyin: 'nòng', translation: 'make/do/knock' }
                                },
                                {
                                    id: 'n4-p-vp-comp',
                                    role: 'Complement',
                                    subRole: 'directional / location',
                                    text: { hanzi: '到地上', pinyin: 'dào dì shàng', translation: 'to the floor' }
                                },
                                {
                                    id: 'n4-p-vp-part',
                                    role: 'Particle',
                                    subRole: 'aspect',
                                    text: { hanzi: '了', pinyin: 'le', translation: '(completed action)' }
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
        category: 'Basic Topic–Comment',
        chinese: '他决定开始学开车。',
        pinyin: 'Tā jué dìng kāi shǐ xué kāi chē.',
        translation: 'He decided to start learning to drive a car.',
        explanation: '**他** (he) is the Topic. The Comment stacks **four verb phrases** one inside the other like Russian dolls, with no connecting word between them — no equivalent of English "to". Each verb is the object of the one before it: decided → [to start → [to learn → [to drive a car]]]. This pattern, where verbs chain together without joining words, is completely natural in Mandarin and very common in everyday speech. The tree expands outward to show all four nested layers.',
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
        id: 's6',
        category: 'BEI (Passive)',
        chinese: '那只大象，鼻子被小孩儿拉了一下。',
        pinyin: 'Nà zhī dà xiàng, bí zi bèi xiǎo hái er lā le yī xià.',
        translation: 'As for that elephant, its trunk was pulled by a child.',
        explanation: 'This sentence has a **two-level structure**. The outer Topic sets the stage with a big frame: *as for that elephant...* Then inside the Comment, a narrower subject appears — **鼻子** (trunk). The trunk is then described using **被** (by), which marks a passive construction: something was done *to* the trunk. So the elephant frames the scene, and the trunk is what actually acts as the subject of the passive event. English would say it more directly: "A child pulled the elephant\'s trunk." Mandarin works from the outside in.',
        tree: {
            id: 'n6',
            role: 'Sentence',
            children: [
                {
                    id: 'n6-t',
                    role: 'Topic',
                    subRole: 'possessor / context',
                    children: [
                        {
                            id: 'n6-t-np',
                            role: 'Noun Phrase',
                            children: [
                                {
                                    id: 'n6-t-np-attr',
                                    role: 'Attributive',
                                    text: { hanzi: '那只', pinyin: 'nà zhī', translation: 'that (measure)' }
                                },
                                {
                                    id: 'n6-t-np-hn',
                                    role: 'Head Noun',
                                    text: { hanzi: '大象', pinyin: 'dà xiàng', translation: 'elephant' }
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'n6-c',
                    role: 'Comment',
                    children: [
                        {
                            id: 'n6-c-s',
                            role: 'Subject',
                            subRole: 'patient',
                            text: { hanzi: '鼻子', pinyin: 'bí zi', translation: 'trunk/nose' }
                        },
                        {
                            id: 'n6-c-p',
                            role: 'Predicate',
                            subRole: 'passive verbal',
                            children: [
                                {
                                    id: 'n6-c-p-bei',
                                    role: 'Preposition',
                                    subRole: 'bei-construction (passive)',
                                    children: [
                                        {
                                            id: 'n6-c-p-bei-prep',
                                            role: 'Preposition',
                                            text: { hanzi: '被', pinyin: 'bèi', translation: 'by' }
                                        },
                                        {
                                            id: 'n6-c-p-bei-agent',
                                            role: 'Noun',
                                            subRole: 'agent',
                                            text: { hanzi: '小孩儿', pinyin: 'xiǎo hái er', translation: 'child' }
                                        }
                                    ]
                                },
                                {
                                    id: 'n6-c-p-vp',
                                    role: 'Verb Phrase',
                                    children: [
                                        {
                                            id: 'n6-c-p-vp-hv',
                                            role: 'Head Verb',
                                            text: { hanzi: '拉', pinyin: 'lā', translation: 'pull' }
                                        },
                                        {
                                            id: 'n6-c-p-vp-part',
                                            role: 'Particle',
                                            subRole: 'aspect',
                                            text: { hanzi: '了', pinyin: 'le', translation: '(completion)' }
                                        },
                                        {
                                            id: 'n6-c-p-vp-comp',
                                            role: 'Complement',
                                            subRole: 'quantity / brief action',
                                            text: { hanzi: '一下', pinyin: 'yī xià', translation: 'a bit/once' }
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
        id: 's7',
        category: 'Basic Topic–Comment',
        chinese: '我看了半天，还是看不了，就不看了。',
        pinyin: 'Wǒ kàn le bàn tiān, hái shì kàn bù liǎo, jiù bù kàn le.',
        translation: 'I looked at it for a long time, still couldn\'t finish, so I gave up looking.',
        explanation: '**我** (I) is the Topic once — and then acts as the unstated subject of **three separate clauses** in a row. Mandarin does not repeat the subject between clauses. The Comment chains three events: tried for a long time → still couldn\'t finish → so gave up. The middle clause **看不了** is especially interesting: sandwiching **不** (not) between the verb and its result means *"unable to achieve"* — here, unable to finish reading. This is called a **potential complement** and is a very common pattern in Mandarin.',
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
                                    role: 'Adverb',
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
                                    role: 'Adverb',
                                    subRole: 'consequence',
                                    text: { hanzi: '就', pinyin: 'jiù', translation: 'then/so' }
                                },
                                {
                                    id: 'n7-p-vp3-adv2',
                                    role: 'Adverb',
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
        id: 's8',
        category: 'Shì–de Construction',
        chinese: '我是昨天晚上在图书馆看到她的。',
        pinyin: 'Wǒ shì zuó tiān wǎn shang zài tú shū guǎn kàn dào tā de.',
        translation: 'It was last night in the library that I saw her.',
        explanation: '**我** (I) is the **Topic** — a left-dislocated element that sets the frame: *as for me…* Mandarin is a topic-prominent language, so 我 here is not the subject of a copula clause the way English "I" would be. The **Comment** is the 是…的 cleft frame. This is a **pseudo-cleft** (分裂句 fēn liè jù): **是** opens the focus bracket and **的** closes it, together meaning *"it was [these circumstances] that…"* The focused constituents are **昨天晚上** (last night) and **在图书馆** (in the library) — both the *when* and the *where* are highlighted at once. Inside the cleft, the subject of **看到** (see) is pro-dropped — recoverable from the topic 我. Full logical reading: *As for me, it was last night in the library that (I) saw her.* Without 是…的, 我昨天晚上在图书馆看到她 would be a neutral statement; the cleft frame signals that the speaker is correcting or stressing the circumstances of an already-known event.',
        tree: {
            id: 'n8',
            role: 'Sentence',
            children: [
                {
                    id: 'n8-t',
                    role: 'Topic',
                    subRole: 'left-dislocation (as for me)',
                    text: { hanzi: '我', pinyin: 'wǒ', translation: 'I / as for me' }
                },
                {
                    id: 'n8-c',
                    role: 'Comment',
                    subRole: 'pseudo-cleft frame (是…的)',
                    children: [
                        {
                            id: 'n8-p-shi',
                            role: 'Particle',
                            subRole: 'cleft opener — it was…',
                            text: { hanzi: '是', pinyin: 'shì', translation: '(it was…)' }
                        },
                        {
                            id: 'n8-p-vp',
                            role: 'Verb Phrase',
                            subRole: 'focused constituents + embedded predicate',
                            children: [
                                {
                                    id: 'n8-p-vp-tp',
                                    role: 'Time Phrase',
                                    subRole: 'focused element (when)',
                                    text: { hanzi: '昨天晚上', pinyin: 'zuó tiān wǎn shang', translation: 'last night' }
                                },
                                {
                                    id: 'n8-p-vp-lp',
                                    role: 'Location Phrase',
                                    subRole: 'focused element (where)',
                                    children: [
                                        {
                                            id: 'n8-p-vp-lp-prep',
                                            role: 'Preposition',
                                            text: { hanzi: '在', pinyin: 'zài', translation: 'in / at' }
                                        },
                                        {
                                            id: 'n8-p-vp-lp-n',
                                            role: 'Noun',
                                            text: { hanzi: '图书馆', pinyin: 'tú shū guǎn', translation: 'library' }
                                        }
                                    ]
                                },
                                {
                                    id: 'n8-p-vp-verb',
                                    role: 'Verb Phrase',
                                    subRole: 'embedded predicate (null subject = 我)',
                                    children: [
                                        {
                                            id: 'n8-p-vp-verb-hv',
                                            role: 'Head Verb',
                                            text: { hanzi: '看', pinyin: 'kàn', translation: 'look / see' }
                                        },
                                        {
                                            id: 'n8-p-vp-verb-comp',
                                            role: 'Complement',
                                            subRole: 'resultative (arrive at → succeed in seeing)',
                                            text: { hanzi: '到', pinyin: 'dào', translation: '(resultative: managed to see)' }
                                        }
                                    ]
                                },
                                {
                                    id: 'n8-p-vp-obj',
                                    role: 'Object',
                                    text: { hanzi: '她', pinyin: 'tā', translation: 'her' }
                                }
                            ]
                        },
                        {
                            id: 'n8-p-de',
                            role: 'Particle',
                            subRole: 'cleft closer — …that [verb]',
                            text: { hanzi: '的', pinyin: 'de', translation: '(cleft closure)' }
                        }
                    ]
                }
            ]
        }
    },
    {
        id: 's9',
        category: 'Comparatives (Bǐ)',
        chinese: '那座山比这座山高得多。',
        pinyin: 'Nà zuò shān bǐ zhè zuò shān gāo de duō.',
        translation: 'That mountain is much taller than this mountain.',
        explanation: '**那座山** (that mountain) is the Topic — 座 is the measure word for mountains and large structures. The Comment makes a comparison using **比** (compared to), which always comes before the thing being compared against. The pattern is: Topic → 比 → [reference] → [quality] → [how much]. Here: that mountain → compared to this mountain → tall → by a lot. The **得多** at the end means "by a great amount" and is always placed after the quality, never before it. English has flexibility in word order here; Mandarin does not.',
        tree: {
            id: 'n9',
            role: 'Sentence',
            children: [
                {
                    id: 'n9-t',
                    role: 'Topic',
                    children: [
                        {
                            id: 'n9-s-attr',
                            role: 'Attributive',
                            text: { hanzi: '那座', pinyin: 'nà zuò', translation: 'that (measure)' }
                        },
                        {
                            id: 'n9-s-hn',
                            role: 'Head Noun',
                            text: { hanzi: '山', pinyin: 'shān', translation: 'mountain' }
                        }
                    ]
                },
                {
                    id: 'n9-c',
                    role: 'Comment',
                    subRole: 'adjectival / comparative',
                    children: [
                        {
                            id: 'n9-p-bi',
                            role: 'Preposition',
                            subRole: 'comparative bǐ clause',
                            children: [
                                {
                                    id: 'n9-p-bi-prep',
                                    role: 'Preposition',
                                    text: { hanzi: '比', pinyin: 'bǐ', translation: 'compared to' }
                                },
                                {
                                    id: 'n9-p-bi-obj',
                                    role: 'Object',
                                    subRole: 'reference point',
                                    children: [
                                        {
                                            id: 'n9-p-bi-obj-attr',
                                            role: 'Attributive',
                                            text: { hanzi: '这座', pinyin: 'zhè zuò', translation: 'this (measure)' }
                                        },
                                        {
                                            id: 'n9-p-bi-obj-hn',
                                            role: 'Head Noun',
                                            text: { hanzi: '山', pinyin: 'shān', translation: 'mountain' }
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'n9-p-adj',
                            role: 'Adjective',
                            text: { hanzi: '高', pinyin: 'gāo', translation: 'tall/high' }
                        },
                        {
                            id: 'n9-p-part',
                            role: 'Particle',
                            subRole: 'degree complement linker',
                            text: { hanzi: '得', pinyin: 'de', translation: '(links degree)' }
                        },
                        {
                            id: 'n9-p-comp',
                            role: 'Complement',
                            subRole: 'degree extent',
                            text: { hanzi: '多', pinyin: 'duō', translation: 'much/many' }
                        }
                    ]
                }
            ]
        }
    },
    {
        id: 's10',
        category: 'Rhetorical Questions',
        chinese: '难道你连这么简单的问题都不会吗？',
        pinyin: 'Nán dào nǐ lián zhè me jiǎn dān de wèn tí dōu bù huì ma?',
        translation: 'Don\'t tell me you can\'t even (do) such a simple question?',
        explanation: 'This sentence opens with **难道** — a word that signals a rhetorical question is coming, roughly translatable as *"don\'t tell me..."* or *"surely... not?"*. After that, **你** (you) is the Topic. The Comment uses a paired structure: **连...** and **都** work as a team, bracketing whatever is being emphasized. Here they wrap around *"even such a simple question"*, adding disbelief and emphasis. The **吗** at the end is a yes/no question marker. Together, the whole sentence expresses incredulous disbelief: you really can\'t do *even* this?',
        tree: {
            id: 'n10',
            role: 'Sentence',
            children: [
                {
                    id: 'n10-adv',
                    role: 'Adverb',
                    subRole: 'rhetorical question marker',
                    text: { hanzi: '难道', pinyin: 'nán dào', translation: 'don\'t tell me (...)?' }
                },
                {
                    id: 'n10-t',
                    role: 'Topic',
                    text: { hanzi: '你', pinyin: 'nǐ', translation: 'you' }
                },
                {
                    id: 'n10-c',
                    role: 'Comment',
                    children: [
                        {
                            id: 'n10-p-lian-phrase',
                            role: 'Preposition',
                            subRole: 'emphatic lián/dōu surround',
                            children: [
                                {
                                    id: 'n10-p-lian-prep',
                                    role: 'Preposition',
                                    subRole: 'lián opener (连…都 bracket)',
                                    text: { hanzi: '连', pinyin: 'lián', translation: 'even' }
                                },
                                {
                                    id: 'n10-p-lian-obj',
                                    role: 'Object',
                                    children: [
                                        {
                                            id: 'n10-p-lian-obj-attr1',
                                            role: 'Attributive',
                                            subRole: 'extent',
                                            text: { hanzi: '这么', pinyin: 'zhè me', translation: 'so/such' }
                                        },
                                        {
                                            id: 'n10-p-lian-obj-attr2',
                                            role: 'Attributive',
                                            subRole: 'descriptive',
                                            children: [
                                                {
                                                    id: 'n10-p-lian-obj-attr2-adj',
                                                    role: 'Adjective',
                                                    text: { hanzi: '简单', pinyin: 'jiǎn dān', translation: 'simple' }
                                                },
                                                {
                                                    id: 'n10-p-lian-obj-attr2-de',
                                                    role: 'Particle',
                                                    text: { hanzi: '的', pinyin: 'de', translation: '(adj marker)' }
                                                }
                                            ]
                                        },
                                        {
                                            id: 'n10-p-lian-obj-hn',
                                            role: 'Head Noun',
                                            text: { hanzi: '问题', pinyin: 'wèn tí', translation: 'question' }
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'n10-p-dou',
                            role: 'Adverb',
                            subRole: 'emphatic closure (paired with lián)',
                            text: { hanzi: '都', pinyin: 'dōu', translation: 'all/even' }
                        },
                        {
                            id: 'n10-p-vp',
                            role: 'Verb Phrase',
                            children: [
                                {
                                    id: 'n10-p-vp-adv',
                                    role: 'Adverb',
                                    subRole: 'negation',
                                    text: { hanzi: '不', pinyin: 'bù', translation: 'not' }
                                },
                                {
                                    id: 'n10-p-vp-hv',
                                    role: 'Head Verb',
                                    subRole: 'auxiliary / ability',
                                    text: { hanzi: '会', pinyin: 'huì', translation: 'can/know how to' }
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'n10-part',
                    role: 'Particle',
                    subRole: 'yes/no question marker',
                    text: { hanzi: '吗', pinyin: 'ma', translation: '(?)' }
                }
            ]
        }
    },
    {
        id: 's11',
        category: 'Rhetorical Questions',
        chinese: '这件事非你亲自去办不可。',
        pinyin: 'Zhè jiàn shì fēi nǐ qīn zì qù bàn bù kě.',
        translation: 'This matter absolutely must be handled by you yourself — there is no way around it.',
        explanation: 'The outer Topic **这件事** (this matter) sets the frame. The Comment uses a paired framing structure: **非** at the start and **不可** at the end lock together to express absolute necessity — literally *"it is not the case that it can be avoided"*. Between them: who must act (you), how (personally, **亲自**), and what the action is (go handle it). This double negative is a fixed expression: 非...不可 roughly means *"must, without exception"*. You\'ll encounter the same pattern in Chinese proverbs and formal writing.',
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
                            role: 'Adverb',
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
                                    role: 'Adverb',
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
                                    role: 'Adverb',
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
        id: 's12',
        category: 'Separable Verbs (离合词)',
        chinese: '我们见过好几次面了。',
        pinyin: 'Wǒ men jiàn guo hǎo jǐ cì miàn le.',
        translation: 'We have met quite a few times already.',
        explanation: '**我们** (we) is the Topic. The Comment shows one of Mandarin\'s most surprising quirks: **见面** (meet) is a two-part word that can be split apart so other words insert between the halves. 见 means "see" and 面 means "face." In this sentence, the aspect marker 过 (done before) and the frequency count 好几次 (quite a few times) are inserted directly between 见 and 面. Think of it like inserting words into the middle of a single English word. These are called **separable verbs** (离合词), and they\'re common in everyday Mandarin.',
        tree: {
            id: 'n12',
            role: 'Sentence',
            children: [
                {
                    id: 'n12-t',
                    role: 'Topic',
                    text: { hanzi: '我们', pinyin: 'wǒ men', translation: 'we' }
                },
                {
                    id: 'n12-c',
                    role: 'Comment',
                    subRole: 'separable verb construction (离合词)',
                    children: [
                        {
                            id: 'n12-p-verb-root',
                            role: 'Verb Phrase',
                            subRole: 'split separable verb (见…面)',
                            children: [
                                {
                                    id: 'n12-p-verb-v',
                                    role: 'Head Verb',
                                    subRole: 'separable verb (离合词) — verb morpheme of 见面',
                                    text: { hanzi: '见', pinyin: 'jiàn', translation: 'see / meet' },
                                },
                                {
                                    id: 'n12-p-verb-asp',
                                    role: 'Particle',
                                    subRole: 'experiential aspect (inserted into split verb)',
                                    text: { hanzi: '过', pinyin: 'guò', translation: '(has-done / experiential)' }
                                },
                                {
                                    id: 'n12-p-verb-freq',
                                    role: 'Complement',
                                    subRole: 'frequency complement (inserted into split verb)',
                                    children: [
                                        {
                                            id: 'n12-p-verb-freq-adv',
                                            role: 'Adverb',
                                            subRole: 'approximate quantity',
                                            text: { hanzi: '好几', pinyin: 'hǎo jǐ', translation: 'quite a few' }
                                        },
                                        {
                                            id: 'n12-p-verb-freq-mw',
                                            role: 'Measure Word',
                                            text: { hanzi: '次', pinyin: 'cì', translation: 'times (measure)' }
                                        }
                                    ]
                                },
                                {
                                    id: 'n12-p-verb-obj',
                                    role: 'Object',
                                    subRole: 'noun morpheme of 见面 (split to end)',
                                    text: { hanzi: '面', pinyin: 'miàn', translation: 'face (→ meet)' }
                                }
                            ]
                        },
                        {
                            id: 'n12-p-le',
                            role: 'Particle',
                            subRole: 'change of state / current relevance',
                            text: { hanzi: '了', pinyin: 'le', translation: '(already/new situation)' }
                        }
                    ]
                }
            ]
        }
    },
    // ── Pro-drop examples ─────────────────────────────────────────────────
    {
        id: 's13',
        category: 'Pro-drop & Co-reference',
        chinese: '吃饱了，想睡觉。',
        pinyin: 'Chī bǎo le , xiǎng shuì jiào .',
        translation: '(I\'m) full, (I) want to sleep.',
        explanation: 'This sentence has **no stated subject at all**. In Mandarin, if it\'s obvious from context who is speaking — usually the speaker themselves — the subject can simply vanish. The tree shows a ghosted **[我]** node (use the **"Show/hide pro-drop"** toggle button to reveal or hide it) to indicate that grammatically there *is* a subject, it\'s just unsaid. The Comment then chains two events: ate-until-full → want-to-sleep. The word **饱** stacked after **吃** is a **result complement**: eating *resulted in* fullness. This silent-subject feature is called **pro-drop** and happens constantly in natural Mandarin speech.',
        tree: {
            id: 'n13',
            role: 'Sentence',
            children: [
                {
                    id: 'n13-s',
                    role: 'Topic',
                    isDropped: true,
                    impliedText: '我',
                },
                {
                    id: 'n13-c',
                    role: 'Comment',
                    subRole: 'sequential clauses',
                    children: [
                        {
                            id: 'n13-vp1',
                            role: 'Verb Phrase',
                            subRole: 'clause 1',
                            children: [
                                {
                                    id: 'n13-vp1-hv',
                                    role: 'Head Verb',
                                    text: { hanzi: '吃', pinyin: 'chī', translation: 'eat' }
                                },
                                {
                                    id: 'n13-vp1-comp',
                                    role: 'Complement',
                                    subRole: 'resultative',
                                    text: { hanzi: '饱', pinyin: 'bǎo', translation: 'full/satiated' }
                                },
                                {
                                    id: 'n13-vp1-le',
                                    role: 'Particle',
                                    subRole: 'completion',
                                    text: { hanzi: '了', pinyin: 'le', translation: '(done)' }
                                }
                            ]
                        },
                        {
                            id: 'n13-vp2',
                            role: 'Verb Phrase',
                            subRole: 'clause 2',
                            children: [
                                {
                                    id: 'n13-vp2-hv',
                                    role: 'Head Verb',
                                    text: { hanzi: '想', pinyin: 'xiǎng', translation: 'want to / feel like' }
                                },
                                {
                                    id: 'n13-vp2-obj',
                                    role: 'Object',
                                    children: [
                                        {
                                            id: 'n13-vp2-obj-hv',
                                            role: 'Verb Phrase',
                                            subRole: 'separable verb (离合词) — 睡觉',
                                            children: [
                                                {
                                                    id: 'n13-vp2-obj-hv-vm',
                                                    role: 'Verb Morpheme',
                                                    text: { hanzi: '睡', pinyin: 'shuì', translation: 'sleep (verb)' },
                                                },
                                                {
                                                    id: 'n13-vp2-obj-hv-om',
                                                    role: 'Object Morpheme',
                                                    text: { hanzi: '觉', pinyin: 'jiào', translation: 'sleep (noun)' },
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
        id: 's14',
        category: 'Pro-drop & Co-reference',
        chinese: '到了，找到了，吃完再走。',
        pinyin: 'Dào le , zhǎo dào le , chī wán zài zǒu .',
        translation: '(We\'ve) arrived, (we) found it, (we\'ll) leave after eating.',
        explanation: 'Three complete events — and **no subject stated in any of them**. The shared subject **[我们]** (we) is dropped silently across all three clauses; the listener infers it from the surrounding conversation. This shows why pro-drop is so natural in Mandarin narrative: once everyone knows who is acting, there\'s no need to even say the pronoun. Each clause is a step in sequence: arrived → found it → will leave after eating. The phrase **吃完再走** (eat-finish-then-leave) is a classic Mandarin sequence: finish one action before doing the next.',
        tree: {
            id: 'n14',
            role: 'Sentence',
            children: [
                {
                    id: 'n14-s',
                    role: 'Topic',
                    isDropped: true,
                    impliedText: '我们',
                },
                {
                    id: 'n14-c',
                    role: 'Comment',
                    subRole: 'sequential clauses',
                    children: [
                        {
                            id: 'n14-vp1',
                            role: 'Verb Phrase',
                            subRole: 'clause 1',
                            children: [
                                {
                                    id: 'n14-vp1-hv',
                                    role: 'Head Verb',
                                    text: { hanzi: '到', pinyin: 'dào', translation: 'arrive' }
                                },
                                {
                                    id: 'n14-vp1-le',
                                    role: 'Particle',
                                    subRole: 'completion',
                                    text: { hanzi: '了', pinyin: 'le', translation: '(done)' }
                                }
                            ]
                        },
                        {
                            id: 'n14-vp2',
                            role: 'Verb Phrase',
                            subRole: 'clause 2',
                            children: [
                                {
                                    id: 'n14-vp2-hv',
                                    role: 'Head Verb',
                                    text: { hanzi: '找', pinyin: 'zhǎo', translation: 'find/look' }
                                },
                                {
                                    id: 'n14-vp2-comp',
                                    role: 'Complement',
                                    subRole: 'resultative',
                                    text: { hanzi: '到', pinyin: 'dào', translation: '(success)' }
                                },
                                {
                                    id: 'n14-vp2-le',
                                    role: 'Particle',
                                    subRole: 'completion',
                                    text: { hanzi: '了', pinyin: 'le', translation: '(done)' }
                                }
                            ]
                        },
                        {
                            id: 'n14-vp3',
                            role: 'Verb Phrase',
                            subRole: 'clause 3',
                            children: [
                                {
                                    id: 'n14-vp3-adv',
                                    role: 'Adverb',
                                    text: { hanzi: '吃完', pinyin: 'chī wán', translation: 'after eating' }
                                },
                                {
                                    id: 'n14-vp3-then',
                                    role: 'Adverb',
                                    text: { hanzi: '再', pinyin: 'zài', translation: 'then/before' }
                                },
                                {
                                    id: 'n14-vp3-hv',
                                    role: 'Head Verb',
                                    text: { hanzi: '走', pinyin: 'zǒu', translation: 'leave/go' }
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    // ── Anaphoric pro-drop: Subject inside Comment co-refers with Topic ──────
    {
        id: 's15',
        category: 'Pro-drop & Co-reference',
        chinese: '那本书，放在桌子上了。',
        pinyin: 'Nà běn shū , fàng zài zhuō zi shàng le .',
        translation: 'That book — (it\'s been) put on the table.',
        explanation: '**那本书** (that book) is the Topic. Inside the Comment, the actual subject — whoever placed the book — is never stated. But there\'s something more: the dropped **[它]** (it) clearly refers *back* to the book in the Topic. This is called **anaphoric pro-drop**: the Topic is not just setting a scene, it is literally acting as the hidden subject of the action that follows. The **red arc** in the tree draws a connecting line from the ghost node back to the Topic, making this invisible link visible. This is one of the most common patterns in Mandarin: name a topic, then silently use it as the subject.',
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
                                    role: 'Location Phrase',
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
        category: 'Pro-drop & Co-reference',
        chinese: '张三，爱唱歌。',
        pinyin: 'Zhāng Sān , ài chàng gē .',
        translation: 'Zhang San — (he) loves singing.',
        explanation: '**张三** (Zhang San, a personal name) is the Topic. The Comment describes what he does — loves singing. But the grammatical subject of "loves" (爱唱歌) is never stated; the listener understands it is the same Zhang San who was just named. The **red arc** in the tree runs from the invisible **[他]** node back to 张三, making that link visible. Naming someone as the Topic and then talking about them without repeating the name is one of the most natural patterns in everyday Mandarin conversation.',
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
                                            subRole: 'separable verb (离合词) — 唱歌',
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
    // ── Discourse pairs: pro-drop where referent is established by preceding sentence ──
    {
        id: 's17',
        category: 'Pro-drop & Co-reference',
        chinese: '说想学中文。',
        pinyin: 'Shuō xiǎng xué Zhōng wén .',
        translation: '(He) said (he) wants to learn Chinese.',
        explanation: 'This sentence drops **two subjects**: the outer one (who said it) and the inner one (who wants to learn) — both are **[他]** (he), shown as ghost nodes in the tree. But here is the twist: these pronouns refer to someone in the **preceding sentence** (the grey card above), not anyone named in this sentence\'s own tree. This is called **discourse-level pro-drop**: the referent was established one sentence earlier, so Mandarin simply omits it here. It sounds incomplete in English, but it is completely natural in Mandarin when the context is clear.',
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
                    // no refersToId — the referent is established in the preceding sentence,
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
                                    role: 'Complement',
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
                                                    role: 'Adverb',
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
        category: 'Pro-drop & Co-reference',
        chinese: '非常有意思。',
        pinyin: 'Fēi cháng yǒu yì si .',
        translation: '(It\'s) really interesting.',
        explanation: 'Just four words — and the subject is completely silent. The tree shows a ghost **[它]** (it) as the dropped topic, but the thing it refers to is the **book from the previous sentence**, shown in the grey card above. Once a topic is introduced in conversation, Mandarin can go several sentences without repeating it. What sounds like an incomplete fragment in English ("really interesting") is a perfectly formed, natural sentence in Mandarin. It is a vivid example of how much work context does in the language.',
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
                            role: 'Adverb',
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
    // ── Duration complement ────────────────────────────────────────────────
    {
        id: 's19',
        category: 'Basic Topic–Comment',
        chinese: '他学中文学了五年了。',
        pinyin: 'Tā xué Zhōng wén xué le wǔ nián le.',
        translation: 'He has been studying Chinese for five years now.',
        explanation: 'When a Mandarin verb has both an **object** (the thing acted on) and a **duration** (how long), you cannot place them side by side — the verb must be **repeated**. First: **学中文** (study Chinese — verb + object). Then: **学了五年** (studied for five years — same verb again, now followed by the time). In English we just say "studied Chinese for five years" — one verb, no repetition. Mandarin separates the two ideas into two verb phrases, glued by repeating the verb. The final **了** signals that the studying is still ongoing up to this moment.',
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
    // ── Equality & Similarity comparatives ────────────────────────────────
    {
        id: 's20',
        category: 'Comparatives (Bǐ)',
        chinese: '她写的汉字跟老师写的一样漂亮。',
        pinyin: 'Tā xiě de hàn zì gēn lǎo shī xiě de yī yàng piāo liang.',
        translation: 'The hanzi she writes is just as beautiful as the teacher\'s.',
        explanation: 'Mandarin\'s equality comparison places **跟** (gēn — "compared with") before the standard being compared, and **一样** (yīyàng — "the same") before the adjective. The frame is: **A 跟 B 一样 [adj]** — "A is equally [adj] as B". Notice that both sides describe a whole noun phrase: 她写的汉字 (the hanzi she writes) vs 老师写的 (what the teacher writes). This construction never uses **比** (bǐ — the word for "more than"); 比 means one side beats the other, while 跟…一样 means they are *equal*.',
        tree: {
            id: 'n20',
            role: 'Sentence',
            children: [
                {
                    id: 'n20-t',
                    role: 'Topic',
                    children: [
                        {
                            id: 'n20-t-subj',
                            role: 'Attributive',
                            subRole: 'relative clause',
                            children: [
                                {
                                    id: 'n20-t-subj-pro',
                                    role: 'Pronoun',
                                    text: { hanzi: '她', pinyin: 'tā', translation: 'she' }
                                },
                                {
                                    id: 'n20-t-subj-v',
                                    role: 'Head Verb',
                                    text: { hanzi: '写', pinyin: 'xiě', translation: 'write' }
                                },
                                {
                                    id: 'n20-t-subj-de',
                                    role: 'Particle',
                                    subRole: 'relativizer',
                                    text: { hanzi: '的', pinyin: 'de', translation: '(relative clause marker)' }
                                }
                            ]
                        },
                        {
                            id: 'n20-t-hn',
                            role: 'Head Noun',
                            text: { hanzi: '汉字', pinyin: 'hàn zì', translation: 'Chinese characters' }
                        }
                    ]
                },
                {
                    id: 'n20-c',
                    role: 'Comment',
                    subRole: 'equality comparison (跟…一样)',
                    children: [
                        {
                            id: 'n20-c-pp',
                            role: 'Preposition',
                            subRole: 'standard of comparison (跟…)',
                            children: [
                                {
                                    id: 'n20-c-pp-prep',
                                    role: 'Preposition',
                                    text: { hanzi: '跟', pinyin: 'gēn', translation: 'compared with / as … as' }
                                },
                                {
                                    id: 'n20-c-pp-np',
                                    role: 'Noun Phrase',
                                    subRole: 'standard noun phrase',
                                    children: [
                                        {
                                            id: 'n20-c-pp-np-attr',
                                            role: 'Attributive',
                                            subRole: 'relative clause',
                                            children: [
                                                {
                                                    id: 'n20-c-pp-np-attr-n',
                                                    role: 'Noun',
                                                    text: { hanzi: '老师', pinyin: 'lǎo shī', translation: 'teacher' }
                                                },
                                                {
                                                    id: 'n20-c-pp-np-attr-v',
                                                    role: 'Head Verb',
                                                    text: { hanzi: '写', pinyin: 'xiě', translation: 'write' }
                                                },
                                                {
                                                    id: 'n20-c-pp-np-attr-de',
                                                    role: 'Particle',
                                                    subRole: 'relativizer',
                                                    text: { hanzi: '的', pinyin: 'de', translation: '(relative clause marker)' }
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'n20-c-eq',
                            role: 'Adverb',
                            subRole: 'equality marker',
                            text: { hanzi: '一样', pinyin: 'yī yàng', translation: 'equally / the same' }
                        },
                        {
                            id: 'n20-c-adj',
                            role: 'Adjective',
                            text: { hanzi: '漂亮', pinyin: 'piāo liang', translation: 'beautiful' }
                        }
                    ]
                }
            ]
        }
    },
    {
        id: 's21',
        category: 'Comparatives (Bǐ)',
        chinese: '他跑得像风一样快。',
        pinyin: 'Tā pǎo de xiàng fēng yī yàng kuài.',
        translation: 'He runs as fast as the wind.',
        explanation: 'This sentence uses **像…一样** (xiàng…yīyàng) to draw a vivid simile — literally "like [something], the same [quality]". The structure **verb + 得** links the verb to how well or how much the action was done; everything after 得 is the **degree complement**. Inside that complement: **像风** (like the wind) sets up the image, **一样** says "equally," and **快** (fast) is the adjective being compared. In English we use "as … as": "as fast as the wind." Unlike 跟…一样 (which compares two real things), 像…一样 often introduces a poetic or figurative standard — the wind, a tiger, a machine.',
        tree: {
            id: 'n21',
            role: 'Sentence',
            children: [
                {
                    id: 'n21-t',
                    role: 'Topic',
                    text: { hanzi: '他', pinyin: 'tā', translation: 'he' }
                },
                {
                    id: 'n21-c',
                    role: 'Comment',
                    subRole: 'similarity comparison (像…一样)',
                    children: [
                        {
                            id: 'n21-vp',
                            role: 'Verb Phrase',
                            children: [
                                {
                                    id: 'n21-hv',
                                    role: 'Head Verb',
                                    text: { hanzi: '跑', pinyin: 'pǎo', translation: 'run' }
                                },
                                {
                                    id: 'n21-de',
                                    role: 'Particle',
                                    subRole: 'degree complement linker',
                                    text: { hanzi: '得', pinyin: 'de', translation: '(links verb to degree)' }
                                },
                                {
                                    id: 'n21-comp',
                                    role: 'Complement',
                                    subRole: 'degree complement',
                                    children: [
                                        {
                                            id: 'n21-comp-pp',
                                            role: 'Preposition',
                                            subRole: 'simile frame (像…)',
                                            children: [
                                                {
                                                    id: 'n21-comp-pp-prep',
                                                    role: 'Preposition',
                                                    text: { hanzi: '像', pinyin: 'xiàng', translation: 'like / as' }
                                                },
                                                {
                                                    id: 'n21-comp-pp-n',
                                                    role: 'Noun',
                                                    text: { hanzi: '风', pinyin: 'fēng', translation: 'wind' }
                                                }
                                            ]
                                        },
                                        {
                                            id: 'n21-comp-eq',
                                            role: 'Adverb',
                                            subRole: 'equality marker',
                                            text: { hanzi: '一样', pinyin: 'yī yàng', translation: 'equally / the same' }
                                        },
                                        {
                                            id: 'n21-comp-adj',
                                            role: 'Adjective',
                                            text: { hanzi: '快', pinyin: 'kuài', translation: 'fast' }
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
    // ── BEI (Passive) – second example ────────────────────────────────────
    {
        id: 's22',
        category: 'BEI (Passive)',
        chinese: '我的钱包被人偷了。',
        pinyin: 'Wǒ de qián bāo bèi rén tōu le.',
        translation: 'My wallet was stolen.',
        explanation: 'The Topic is **我的钱包** (my wallet) — the thing that was acted upon. Inside the Comment, **被** (bèi) introduces the agent: **人** (someone, literally "a person"). Then comes the verb **偷** (steal) and completion marker **了**. Compared to s6, this is a simpler and more everyday form of the BEI passive. Notice that 被 does not always name a specific agent; here it just says "by someone." The BEI frame always flips normal word order: instead of "person stole wallet," the wallet is foregrounded as Topic, and 被 marks that it is the *receiver* of the action.',
        tree: {
            id: 'n22',
            role: 'Sentence',
            children: [
                {
                    id: 'n22-t',
                    role: 'Topic',
                    children: [
                        {
                            id: 'n22-t-attr',
                            role: 'Attributive',
                            text: { hanzi: '我的', pinyin: 'wǒ de', translation: 'my' }
                        },
                        {
                            id: 'n22-t-hn',
                            role: 'Head Noun',
                            text: { hanzi: '钱包', pinyin: 'qián bāo', translation: 'wallet' }
                        }
                    ]
                },
                {
                    id: 'n22-c',
                    role: 'Comment',
                    children: [
                        {
                            id: 'n22-c-bei',
                            role: 'Preposition',
                            subRole: 'bei-construction (passive)',
                            children: [
                                {
                                    id: 'n22-c-bei-prep',
                                    role: 'Preposition',
                                    text: { hanzi: '被', pinyin: 'bèi', translation: 'by (passive marker)' }
                                },
                                {
                                    id: 'n22-c-bei-agent',
                                    role: 'Noun',
                                    subRole: 'agent',
                                    text: { hanzi: '人', pinyin: 'rén', translation: 'someone / a person' }
                                }
                            ]
                        },
                        {
                            id: 'n22-c-hv',
                            role: 'Head Verb',
                            text: { hanzi: '偷', pinyin: 'tōu', translation: 'steal' }
                        },
                        {
                            id: 'n22-c-le',
                            role: 'Particle',
                            subRole: 'completion',
                            text: { hanzi: '了', pinyin: 'le', translation: '(done)' }
                        }
                    ]
                }
            ]
        }
    },
    // ── Shì–de Construction – second example ──────────────────────────────
    {
        id: 's23',
        category: 'Shì–de Construction',
        chinese: '我是在上海长大的。',
        pinyin: 'Wǒ shì zài Shàng hǎi zhǎng dà de.',
        translation: 'It was in Shanghai that I grew up.',
        explanation: 'Compare this with s8: both use **是…的** to put a spotlight on one piece of information. In s8 the focus was *when and where* an event happened. Here the focus is *where* the speaker grew up. The verb **长大** (grow up) is not in doubt — the speaker definitely grew up somewhere — so 是 and 的 bracket the location **在上海** as the emphasized new information. Strip away 是 and 的 and you get a plain sentence; add them back and the sentence says "Shanghai is the answer you\'re looking for." This is one of the most useful frames for answering "where/when/how did you…?" questions in Mandarin.',
        tree: {
            id: 'n23',
            role: 'Sentence',
            children: [
                {
                    id: 'n23-t',
                    role: 'Topic',
                    text: { hanzi: '我', pinyin: 'wǒ', translation: 'I' }
                },
                {
                    id: 'n23-c',
                    role: 'Comment',
                    subRole: 'shì–de focus construction',
                    children: [
                        {
                            id: 'n23-shi',
                            role: 'Particle',
                            subRole: 'emphatic copula (是…的)',
                            text: { hanzi: '是', pinyin: 'shì', translation: 'is (it was …)' }
                        },
                        {
                            id: 'n23-lp',
                            role: 'Location Phrase',
                            subRole: 'focused element (where)',
                            children: [
                                {
                                    id: 'n23-lp-prep',
                                    role: 'Preposition',
                                    text: { hanzi: '在', pinyin: 'zài', translation: 'in/at' }
                                },
                                {
                                    id: 'n23-lp-n',
                                    role: 'Noun',
                                    text: { hanzi: '上海', pinyin: 'Shàng hǎi', translation: 'Shanghai' }
                                }
                            ]
                        },
                        {
                            id: 'n23-vp',
                            role: 'Verb Phrase',
                            children: [
                                {
                                    id: 'n23-vp-hv',
                                    role: 'Head Verb',
                                    text: { hanzi: '长大', pinyin: 'zhǎng dà', translation: 'grow up' }
                                }
                            ]
                        },
                        {
                            id: 'n23-de',
                            role: 'Particle',
                            subRole: 'assertion marker (closes 是…的)',
                            text: { hanzi: '的', pinyin: 'de', translation: '(assertion marker)' }
                        }
                    ]
                }
            ]
        }
    },
    // ── Separable Verbs – second example ──────────────────────────────────
    {
        id: 's24',
        category: 'Separable Verbs (离合词)',
        chinese: '她早上散了一个小时的步。',
        pinyin: 'Tā zǎo shàng sàn le yī gè xiǎo shí de bù.',
        translation: 'She took a one-hour walk this morning.',
        explanation: '**散步** (walk/stroll) is another separable verb: 散 (scatter, disperse → take a stroll) and 步 (step/pace). Here, **了一个小时的** (one hour of) is inserted directly between the two halves. In English you would just say "walked for an hour" — one verb, duration at the end. Mandarin must insert the duration *inside* the verb because 步 acts as an internal object. The 的 before 步 is a special linker that glues the duration phrase to the noun morpheme. This insertion pattern — verb + aspect/duration + 的 + object morpheme — is the standard template for separable verbs with time complements.',
        tree: {
            id: 'n24',
            role: 'Sentence',
            children: [
                {
                    id: 'n24-t',
                    role: 'Topic',
                    text: { hanzi: '她', pinyin: 'tā', translation: 'she' }
                },
                {
                    id: 'n24-c',
                    role: 'Comment',
                    children: [
                        {
                            id: 'n24-tp',
                            role: 'Time Phrase',
                            text: { hanzi: '早上', pinyin: 'zǎo shàng', translation: 'in the morning' }
                        },
                        {
                            id: 'n24-vp',
                            role: 'Verb Phrase',
                            subRole: 'split separable verb (散…步)',
                            children: [
                                {
                                    id: 'n24-vp-v',
                                    role: 'Head Verb',
                                    subRole: 'separable verb (离合词) — verb morpheme of 散步',
                                    text: { hanzi: '散', pinyin: 'sàn', translation: 'stroll / disperse' },
                                },
                                {
                                    id: 'n24-vp-le',
                                    role: 'Particle',
                                    subRole: 'completion aspect (inserted into split verb)',
                                    text: { hanzi: '了', pinyin: 'le', translation: '(completion)' }
                                },
                                {
                                    id: 'n24-vp-dur',
                                    role: 'Complement',
                                    subRole: 'duration complement (inserted into split verb)',
                                    children: [
                                        {
                                            id: 'n24-vp-dur-num',
                                            role: 'Attributive',
                                            text: { hanzi: '一', pinyin: 'yī', translation: 'one' }
                                        },
                                        {
                                            id: 'n24-vp-dur-mw',
                                            role: 'Measure Word',
                                            text: { hanzi: '个', pinyin: 'gè', translation: '(measure word)' }
                                        },
                                        {
                                            id: 'n24-vp-dur-n',
                                            role: 'Noun',
                                            text: { hanzi: '小时', pinyin: 'xiǎo shí', translation: 'hour' }
                                        }
                                    ]
                                },
                                {
                                    id: 'n24-vp-de',
                                    role: 'Particle',
                                    subRole: 'linker between duration and noun morpheme',
                                    text: { hanzi: '的', pinyin: 'de', translation: '(links duration to object morpheme)' }
                                },
                                {
                                    id: 'n24-vp-obj',
                                    role: 'Object',
                                    subRole: 'noun morpheme of 散步 (split to end)',
                                    text: { hanzi: '步', pinyin: 'bù', translation: 'step / pace (→ stroll)' }
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },

    // ── Double Topic / Embedded Comment ──────────────────────────────────────
    {
        id: 's25',
        category: 'Double Topic / Embedded Comment',
        chinese: '那家饭馆，菜很好吃，价钱也不贵。',
        pinyin: 'Nà jiā fàn guǎn, cài hěn hǎo chī, jià qián yě bù guì.',
        translation: 'That restaurant — the food is delicious and the price is not expensive either.',
        explanation: 'This sentence has **two layers of topic**. The outer Topic — **那家饭馆** (that restaurant) — sets the scene for the whole sentence. Then, inside the Comment, Mandarin doesn\'t switch to English-style subject+verb sentences. Instead it uses *two mini-topics* in sequence: **菜** (food) and **价钱** (price). Each one is followed by its own comment. This "whole–part" structure, where you name a container and then make statements about its parts, is extremely common and natural in Mandarin. The tree shows the nesting: Sentence → [outer Topic | Comment → [inner Topic–Comment 1 | inner Topic–Comment 2]].',
        tree: {
            id: 'n25',
            role: 'Sentence',
            children: [
                {
                    id: 'n25-t',
                    role: 'Topic',
                    subRole: 'outer topic (whole)',
                    children: [
                        {
                            id: 'n25-t-attr',
                            role: 'Attributive',
                            text: { hanzi: '那家', pinyin: 'nà jiā', translation: 'that (measure)' }
                        },
                        {
                            id: 'n25-t-hn',
                            role: 'Head Noun',
                            text: { hanzi: '饭馆', pinyin: 'fàn guǎn', translation: 'restaurant' }
                        }
                    ]
                },
                {
                    id: 'n25-c',
                    role: 'Comment',
                    subRole: 'two embedded topic–comment clauses',
                    children: [
                        {
                            id: 'n25-c-s1',
                            role: 'Topic',
                            subRole: 'inner topic 1 (part)',
                            text: { hanzi: '菜', pinyin: 'cài', translation: 'food/dishes' }
                        },
                        {
                            id: 'n25-c-p1',
                            role: 'Comment',
                            subRole: 'inner comment 1',
                            children: [
                                {
                                    id: 'n25-c-p1-adv',
                                    role: 'Adverb',
                                    text: { hanzi: '很', pinyin: 'hěn', translation: 'very' }
                                },
                                {
                                    id: 'n25-c-p1-adj',
                                    role: 'Adjective',
                                    text: { hanzi: '好吃', pinyin: 'hǎo chī', translation: 'delicious' }
                                }
                            ]
                        },
                        {
                            id: 'n25-c-s2',
                            role: 'Topic',
                            subRole: 'inner topic 2 (part)',
                            text: { hanzi: '价钱', pinyin: 'jià qián', translation: 'price' }
                        },
                        {
                            id: 'n25-c-p2',
                            role: 'Comment',
                            subRole: 'inner comment 2',
                            children: [
                                {
                                    id: 'n25-c-p2-adv1',
                                    role: 'Adverb',
                                    text: { hanzi: '也', pinyin: 'yě', translation: 'also' }
                                },
                                {
                                    id: 'n25-c-p2-adv2',
                                    role: 'Adverb',
                                    text: { hanzi: '不', pinyin: 'bù', translation: 'not' }
                                },
                                {
                                    id: 'n25-c-p2-adj',
                                    role: 'Adjective',
                                    text: { hanzi: '贵', pinyin: 'guì', translation: 'expensive' }
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    {
        id: 's26',
        category: 'Double Topic / Embedded Comment',
        chinese: '大象，鼻子长，耳朵大。',
        pinyin: 'Dà xiàng, bí zi cháng, ěr duo dà.',
        translation: 'Elephants — their trunk is long and their ears are big.',
        explanation: 'The classic **whole–part double topic** pattern. **大象** (elephant) is the outer Topic — it frames everything. Inside the Comment, the sentence doesn\'t give the elephant a verb straightaway. Instead it picks two parts of the elephant — **鼻子** (trunk) and **耳朵** (ears) — and uses each as an inner Topic, followed by a simple adjective Comment. This is the fundamental "A, B adj, C adj" pattern that learners encounter early but linguists call "double topic" or "nested topic-comment". No copula verb (是) is needed — Mandarin adjectives can directly serve as predicates.',
        tree: {
            id: 'n26',
            role: 'Sentence',
            children: [
                {
                    id: 'n26-t',
                    role: 'Topic',
                    subRole: 'outer topic (whole)',
                    text: { hanzi: '大象', pinyin: 'dà xiàng', translation: 'elephant' }
                },
                {
                    id: 'n26-c',
                    role: 'Comment',
                    subRole: 'two embedded topic–comment clauses',
                    children: [
                        {
                            id: 'n26-c-t1',
                            role: 'Topic',
                            subRole: 'inner topic 1 (body part)',
                            text: { hanzi: '鼻子', pinyin: 'bí zi', translation: 'trunk/nose' }
                        },
                        {
                            id: 'n26-c-p1',
                            role: 'Comment',
                            subRole: 'inner comment 1 — adjectival predicate',
                            children: [
                                {
                                    id: 'n26-c-p1-adj',
                                    role: 'Adjective',
                                    text: { hanzi: '长', pinyin: 'cháng', translation: 'long' }
                                }
                            ]
                        },
                        {
                            id: 'n26-c-t2',
                            role: 'Topic',
                            subRole: 'inner topic 2 (body part)',
                            text: { hanzi: '耳朵', pinyin: 'ěr duo', translation: 'ears' }
                        },
                        {
                            id: 'n26-c-p2',
                            role: 'Comment',
                            subRole: 'inner comment 2 — adjectival predicate',
                            children: [
                                {
                                    id: 'n26-c-p2-adj',
                                    role: 'Adjective',
                                    text: { hanzi: '大', pinyin: 'dà', translation: 'big' }
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    {
        id: 's27',
        category: 'Double Topic / Embedded Comment',
        chinese: '这件事，我觉得你的想法很有道理。',
        pinyin: 'Zhè jiàn shì, wǒ jué de nǐ de xiǎng fǎ hěn yǒu dào lǐ.',
        translation: 'As for this matter, I think your idea makes a lot of sense.',
        explanation: 'This sentence has **three layers of embedding**. The outermost Topic — **这件事** (this matter) — establishes the discourse frame. Then the Comment is itself a full clause: **我觉得** (I think), where **我** (I) is the subject and **觉得** is the verb. But the object of 觉得 is *yet another* clause: **你的想法很有道理** (your idea is very reasonable) — and even inside that clause, **你的想法** (your idea) acts as an inner topic before the comment **很有道理**. This chain of embedded clauses is perfectly natural in spoken Mandarin and is far more transparent in a tree than in a linear translation.',
        tree: {
            id: 'n27',
            role: 'Sentence',
            children: [
                {
                    id: 'n27-t',
                    role: 'Topic',
                    subRole: 'outer discourse frame',
                    children: [
                        {
                            id: 'n27-t-attr',
                            role: 'Attributive',
                            text: { hanzi: '这件', pinyin: 'zhè jiàn', translation: 'this (measure)' }
                        },
                        {
                            id: 'n27-t-hn',
                            role: 'Head Noun',
                            text: { hanzi: '事', pinyin: 'shì', translation: 'matter/thing' }
                        }
                    ]
                },
                {
                    id: 'n27-c',
                    role: 'Comment',
                    subRole: 'opinion clause',
                    children: [
                        {
                            id: 'n27-c-s',
                            role: 'Subject',
                            text: { hanzi: '我', pinyin: 'wǒ', translation: 'I' }
                        },
                        {
                            id: 'n27-c-p',
                            role: 'Predicate',
                            children: [
                                {
                                    id: 'n27-c-p-vp',
                                    role: 'Verb Phrase',
                                    children: [
                                        {
                                            id: 'n27-c-p-vp-hv',
                                            role: 'Head Verb',
                                            text: { hanzi: '觉得', pinyin: 'jué de', translation: 'think/feel' }
                                        },
                                        {
                                            id: 'n27-c-p-vp-obj',
                                            role: 'Object',
                                            subRole: 'embedded topic–comment clause',
                                            children: [
                                                {
                                                    id: 'n27-c-p-vp-obj-t',
                                                    role: 'Topic',
                                                    subRole: 'inner topic',
                                                    children: [
                                                        {
                                                            id: 'n27-c-p-vp-obj-t-attr',
                                                            role: 'Attributive',
                                                            text: { hanzi: '你的', pinyin: 'nǐ de', translation: 'your' }
                                                        },
                                                        {
                                                            id: 'n27-c-p-vp-obj-t-hn',
                                                            role: 'Head Noun',
                                                            text: { hanzi: '想法', pinyin: 'xiǎng fǎ', translation: 'idea' }
                                                        }
                                                    ]
                                                },
                                                {
                                                    id: 'n27-c-p-vp-obj-c',
                                                    role: 'Comment',
                                                    subRole: 'inner comment',
                                                    children: [
                                                        {
                                                            id: 'n27-c-p-vp-obj-c-adv',
                                                            role: 'Adverb',
                                                            text: { hanzi: '很', pinyin: 'hěn', translation: 'very' }
                                                        },
                                                        {
                                                            id: 'n27-c-p-vp-obj-c-adj',
                                                            role: 'Adjective',
                                                            text: { hanzi: '有道理', pinyin: 'yǒu dào lǐ', translation: 'make sense / reasonable' }
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

    // ── BA Construction – additional examples ────────────────────────────────
    {
        id: 's28',
        category: 'BA Construction',
        chinese: '请把窗户关上。',
        pinyin: 'Qǐng bǎ chuāng hu guān shàng.',
        translation: 'Please close the window.',
        explanation: 'A minimal, everyday BA sentence. **请** (please) is a politeness adverb. Then **把** spotlights **窗户** (the window) before the verb — this is the classic BA move: take the object and bring it in front of the verb to show it will be *affected*. The verb **关** (close) is followed by the directional complement **上** (up/onto — here meaning "shut"). The pattern **把 [thing] [verb]+[result]** is the standard template for giving instructions or describing a deliberate act with a clear outcome on an object.',
        tree: {
            id: 'n28',
            role: 'Sentence',
            children: [
                {
                    id: 'n28-t',
                    role: 'Topic',
                    isDropped: true,
                    impliedText: '你',
                },
                {
                    id: 'n28-c',
                    role: 'Comment',
                    children: [
                        {
                            id: 'n28-adv',
                            role: 'Adverb',
                            subRole: 'politeness',
                            text: { hanzi: '请', pinyin: 'qǐng', translation: 'please' },
                        },
                        {
                            id: 'n28-ba',
                            role: 'Preposition',
                            subRole: 'ba-construction',
                            children: [
                                {
                                    id: 'n28-ba-prep',
                                    role: 'Preposition',
                                    text: { hanzi: '把', pinyin: 'bǎ', translation: '(object fronting)' },
                                },
                                {
                                    id: 'n28-ba-obj',
                                    role: 'Object',
                                    text: { hanzi: '窗户', pinyin: 'chuāng hu', translation: 'window' },
                                },
                            ],
                        },
                        {
                            id: 'n28-vp',
                            role: 'Verb Phrase',
                            children: [
                                {
                                    id: 'n28-vp-hv',
                                    role: 'Head Verb',
                                    text: { hanzi: '关', pinyin: 'guān', translation: 'close' },
                                },
                                {
                                    id: 'n28-vp-comp',
                                    role: 'Complement',
                                    subRole: 'directional (sealed/shut)',
                                    text: { hanzi: '上', pinyin: 'shàng', translation: 'up / shut' },
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 's29',
        category: 'BA Construction',
        chinese: '她把那封信藏在枕头下面了。',
        pinyin: 'Tā bǎ nà fēng xìn cáng zài zhěn tou xià miàn le.',
        translation: 'She hid that letter under the pillow.',
        explanation: '**她** (she) is the Topic. The Comment uses **把** to spotlight **那封信** (that letter) — 封 is the measure word for letters and envelopes. The verb **藏** (hide) is then followed by a location phrase: **在枕头下面** (under the pillow). This location tells you *where the object ended up* — the final resting state after the action. This shows BA\'s core job: once you\'ve fronted the object, the verb naturally attaches a result or destination. Compare with English: "She hid the letter under the pillow" — Mandarin and English are parallel here, but Mandarin uses 把 to mark the intent and outcome much more explicitly.',
        tree: {
            id: 'n29',
            role: 'Sentence',
            children: [
                {
                    id: 'n29-t',
                    role: 'Topic',
                    text: { hanzi: '她', pinyin: 'tā', translation: 'she' },
                },
                {
                    id: 'n29-c',
                    role: 'Comment',
                    children: [
                        {
                            id: 'n29-ba',
                            role: 'Preposition',
                            subRole: 'ba-construction',
                            children: [
                                {
                                    id: 'n29-ba-prep',
                                    role: 'Preposition',
                                    text: { hanzi: '把', pinyin: 'bǎ', translation: '(object fronting)' },
                                },
                                {
                                    id: 'n29-ba-obj',
                                    role: 'Object',
                                    children: [
                                        {
                                            id: 'n29-ba-obj-attr',
                                            role: 'Attributive',
                                            text: { hanzi: '那封', pinyin: 'nà fēng', translation: 'that (letter-measure)' },
                                        },
                                        {
                                            id: 'n29-ba-obj-hn',
                                            role: 'Head Noun',
                                            text: { hanzi: '信', pinyin: 'xìn', translation: 'letter' },
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            id: 'n29-vp',
                            role: 'Verb Phrase',
                            children: [
                                {
                                    id: 'n29-vp-hv',
                                    role: 'Head Verb',
                                    text: { hanzi: '藏', pinyin: 'cáng', translation: 'hide' },
                                },
                                {
                                    id: 'n29-vp-lp',
                                    role: 'Location Phrase',
                                    subRole: 'result / final location',
                                    children: [
                                        {
                                            id: 'n29-vp-lp-prep',
                                            role: 'Preposition',
                                            text: { hanzi: '在', pinyin: 'zài', translation: 'at/in' },
                                        },
                                        {
                                            id: 'n29-vp-lp-n',
                                            role: 'Noun',
                                            text: { hanzi: '枕头', pinyin: 'zhěn tou', translation: 'pillow' },
                                        },
                                        {
                                            id: 'n29-vp-lp-loc',
                                            role: 'Particle',
                                            subRole: 'localizer',
                                            text: { hanzi: '下面', pinyin: 'xià miàn', translation: 'underneath' },
                                        },
                                    ],
                                },
                                {
                                    id: 'n29-vp-le',
                                    role: 'Particle',
                                    subRole: 'completion',
                                    text: { hanzi: '了', pinyin: 'le', translation: '(done)' },
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    },

    // ── Resultative Complements ───────────────────────────────────────────────
    {
        id: 's30',
        category: 'Resultative Complements',
        chinese: '我听懂了他说的话。',
        pinyin: 'Wǒ tīng dǒng le tā shuō de huà.',
        translation: 'I understood what he said.',
        explanation: '**我** (I) is the Topic. The key is **听懂**: the verb **听** (listen) is stacked directly with the result morpheme **懂** (understand). Together they form a single unit meaning "listened-to-the-point-of-understanding." The **了** after them confirms the result was achieved. This is the core pattern of **resultative complements**: verb + result, no linking word, no pause. If you just said 我听了 (I listened), there\'s no guarantee of understanding. 听懂 asserts the outcome. The object **他说的话** (what he said) is a relative clause: 他说 (he said) + 的 + 话 (words).',
        tree: {
            id: 'n30',
            role: 'Sentence',
            children: [
                {
                    id: 'n30-t',
                    role: 'Topic',
                    text: { hanzi: '我', pinyin: 'wǒ', translation: 'I' },
                },
                {
                    id: 'n30-c',
                    role: 'Comment',
                    children: [
                        {
                            id: 'n30-vp',
                            role: 'Verb Phrase',
                            children: [
                                {
                                    id: 'n30-hv',
                                    role: 'Head Verb',
                                    text: { hanzi: '听', pinyin: 'tīng', translation: 'listen' },
                                },
                                {
                                    id: 'n30-comp',
                                    role: 'Complement',
                                    subRole: 'resultative',
                                    text: { hanzi: '懂', pinyin: 'dǒng', translation: 'understand / grasp' },
                                },
                                {
                                    id: 'n30-le',
                                    role: 'Particle',
                                    subRole: 'completion',
                                    text: { hanzi: '了', pinyin: 'le', translation: '(done)' },
                                },
                                {
                                    id: 'n30-obj',
                                    role: 'Object',
                                    children: [
                                        {
                                            id: 'n30-obj-attr',
                                            role: 'Attributive',
                                            subRole: 'relative clause',
                                            children: [
                                                {
                                                    id: 'n30-obj-attr-pro',
                                                    role: 'Pronoun',
                                                    text: { hanzi: '他', pinyin: 'tā', translation: 'he' },
                                                },
                                                {
                                                    id: 'n30-obj-attr-v',
                                                    role: 'Head Verb',
                                                    text: { hanzi: '说', pinyin: 'shuō', translation: 'say' },
                                                },
                                                {
                                                    id: 'n30-obj-attr-de',
                                                    role: 'Particle',
                                                    subRole: 'relativizer',
                                                    text: { hanzi: '的', pinyin: 'de', translation: '(relative clause marker)' },
                                                },
                                            ],
                                        },
                                        {
                                            id: 'n30-obj-hn',
                                            role: 'Head Noun',
                                            text: { hanzi: '话', pinyin: 'huà', translation: 'words / speech' },
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
        id: 's31',
        category: 'Resultative Complements',
        chinese: '她哭红了眼睛。',
        pinyin: 'Tā kū hóng le yǎn jing.',
        translation: 'She cried her eyes red.',
        explanation: '**她** (she) is the Topic. This sentence uses a **causative resultative**: the verb **哭** (cry) stacks with the adjective **红** (red). The action of crying *caused* a state change — the eyes turned red. Crucially, the object **眼睛** (eyes) is what underwent the change, not (directly) what was cried. Compare with English: "She cried her eyes red" — both languages use the same elegantly compact pattern here. This kind of stacking is wonderfully productive: any action that causes a change of state can use this frame: 笑哭了 (laugh-cry), 吃撑了 (eat-stuffed), 写累了 (write-tired).',
        tree: {
            id: 'n31',
            role: 'Sentence',
            children: [
                {
                    id: 'n31-t',
                    role: 'Topic',
                    text: { hanzi: '她', pinyin: 'tā', translation: 'she' },
                },
                {
                    id: 'n31-c',
                    role: 'Comment',
                    children: [
                        {
                            id: 'n31-vp',
                            role: 'Verb Phrase',
                            subRole: 'causative resultative',
                            children: [
                                {
                                    id: 'n31-hv',
                                    role: 'Head Verb',
                                    text: { hanzi: '哭', pinyin: 'kū', translation: 'cry' },
                                },
                                {
                                    id: 'n31-comp',
                                    role: 'Complement',
                                    subRole: 'resultative (state change)',
                                    text: { hanzi: '红', pinyin: 'hóng', translation: 'red (result state)' },
                                },
                                {
                                    id: 'n31-le',
                                    role: 'Particle',
                                    subRole: 'completion',
                                    text: { hanzi: '了', pinyin: 'le', translation: '(done)' },
                                },
                                {
                                    id: 'n31-obj',
                                    role: 'Object',
                                    subRole: 'patient (thing that changed state)',
                                    text: { hanzi: '眼睛', pinyin: 'yǎn jing', translation: 'eyes' },
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    },

    // ── Pivotal Constructions (兼语句) ────────────────────────────────────────
    {
        id: 's32',
        category: 'Pivotal Constructions',
        chinese: '老师让学生回答问题。',
        pinyin: 'Lǎo shī ràng xué sheng huí dá wèn tí.',
        translation: 'The teacher had the students answer questions.',
        explanation: '**老师** (teacher) is the Topic. This is a **pivotal construction** (兼语句). The verb **让** (let/have) takes **学生** (students) as its object. But then — and this is the key — 学生 immediately becomes the *subject* of the next verb **回答** (answer). It plays both roles at once: object of 让, subject of 回答. The tree shows this double-function node as a **Pivot**. Verbs that create pivotal structures include 让 (let/have), 叫 (tell), 请 (invite), 使 (cause), 帮 (help). In English: "The teacher *had* the students *answer*" — the structure is the same, just without a special grammatical label.',
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
        category: 'Pivotal Constructions',
        chinese: '妈妈叫我去买牛奶。',
        pinyin: 'Māma jiào wǒ qù mǎi niú nǎi.',
        translation: 'Mom told me to go buy milk.',
        explanation: '**妈妈** (Mom) is the Topic. The verb **叫** (call/tell) creates a pivotal structure: **我** (me) serves as both the object of 叫 *and* the subject of what follows. After the pivot, there is a **serial verb construction**: **去买** — go in order to buy. Two advanced patterns stack together here, which is completely natural in everyday speech. This sentence shows why pivotal constructions matter: English hides the double-function behind \"told me to\"; Mandarin makes it visible by placing 我 at the hinge point between two verb phrases.',
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
    // ── Potential Complements ─────────────────────────────────────────────────
    {
        id: 's34',
        category: 'Potential Complements',
        chinese: '这道题太难，我做不出来。',
        pinyin: 'Zhè dào tí tài nán, wǒ zuò bù chū lái.',
        translation: 'This question is too hard; I can\'t work it out.',
        explanation: 'The outer Topic is **这道题** (this question — 道 is the measure word for questions and paths). The Comment plays out in two clauses: the first says *it\'s too hard*; the second says *I can\'t manage it*. The key is **做不出来**: the verb **做** (do/work) + the potential negator **不** + the directional complement **出来** (come out). Inserting **不** between the verb and its result says: *unable to achieve that result*. Swap 不 for **得** and you get 做**得**出来 — *can* work it out. This V + 得/不 + complement slot is how Mandarin expresses possibility and impossibility for almost any action.',
        tree: {
            id: 'n34',
            role: 'Sentence',
            children: [
                {
                    id: 'n34-t',
                    role: 'Topic',
                    subRole: 'outer frame',
                    children: [
                        {
                            id: 'n34-t-attr',
                            role: 'Attributive',
                            text: { hanzi: '这道', pinyin: 'zhè dào', translation: 'this (question-measure)' },
                        },
                        {
                            id: 'n34-t-hn',
                            role: 'Head Noun',
                            text: { hanzi: '题', pinyin: 'tí', translation: 'question/problem' },
                        },
                    ],
                },
                {
                    id: 'n34-c',
                    role: 'Comment',
                    subRole: 'two sequential clauses',
                    children: [
                        {
                            id: 'n34-cl1',
                            role: 'Verb Phrase',
                            subRole: 'clause 1 — adjectival predicate',
                            children: [
                                {
                                    id: 'n34-cl1-adv',
                                    role: 'Adverb',
                                    text: { hanzi: '太', pinyin: 'tài', translation: 'too' },
                                },
                                {
                                    id: 'n34-cl1-adj',
                                    role: 'Adjective',
                                    text: { hanzi: '难', pinyin: 'nán', translation: 'hard/difficult' },
                                },
                            ],
                        },
                        {
                            id: 'n34-cl2',
                            role: 'Verb Phrase',
                            subRole: 'clause 2 — potential complement (negative)',
                            children: [
                                {
                                    id: 'n34-cl2-t',
                                    role: 'Subject',
                                    text: { hanzi: '我', pinyin: 'wǒ', translation: 'I' },
                                },
                                {
                                    id: 'n34-cl2-vp',
                                    role: 'Verb Phrase',
                                    children: [
                                        {
                                            id: 'n34-cl2-hv',
                                            role: 'Head Verb',
                                            text: { hanzi: '做', pinyin: 'zuò', translation: 'do / work' },
                                        },
                                        {
                                            id: 'n34-cl2-neg',
                                            role: 'Particle',
                                            subRole: 'potential negator (V + 不 + result)',
                                            text: { hanzi: '不', pinyin: 'bù', translation: 'cannot (potential)' },
                                        },
                                        {
                                            id: 'n34-cl2-comp',
                                            role: 'Complement',
                                            subRole: 'directional (potential)',
                                            text: { hanzi: '出来', pinyin: 'chū lái', translation: 'come out / work out' },
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
        id: 's35',
        category: 'Potential Complements',
        chinese: '你放心，一个小时就写得完。',
        pinyin: 'Nǐ fàng xīn, yī gè xiǎo shí jiù xiě de wán.',
        translation: 'Don\'t worry — (you) can finish writing it in an hour.',
        explanation: '**你放心** (don\'t worry, literally "you release heart") is a fixed opening phrase. The main clause shows the **affirmative potential complement**: **写得完** — write + **得** (can) + 完 (finish). Inserting **得** between the verb and its result says: *able to achieve that outcome*. The time phrase **一个小时** (one hour) and adverb **就** (just/only) add "in just one hour." Compare with the negative: 写**不**完 would mean *can\'t finish writing*. The only difference is that tiny 得/不 slot — one syllable switches the meaning between possible and impossible.',
        tree: {
            id: 'n35',
            role: 'Sentence',
            children: [
                {
                    id: 'n35-addr',
                    role: 'Topic',
                    subRole: 'addressee',
                    text: { hanzi: '你', pinyin: 'nǐ', translation: 'you' },
                },
                {
                    id: 'n35-c',
                    role: 'Comment',
                    subRole: 'two sequential clauses',
                    children: [
                        {
                            id: 'n35-cl1',
                            role: 'Verb Phrase',
                            subRole: 'clause 1 — fixed expression',
                            children: [
                                {
                                    id: 'n35-cl1-hv',
                                    role: 'Head Verb',
                                    text: { hanzi: '放心', pinyin: 'fàng xīn', translation: 'relax / don\'t worry' },
                                },
                            ],
                        },
                        {
                            id: 'n35-cl2',
                            role: 'Verb Phrase',
                            subRole: 'clause 2 — potential complement (affirmative)',
                            children: [
                                {
                                    id: 'n35-cl2-tp',
                                    role: 'Time Phrase',
                                    text: { hanzi: '一个小时', pinyin: 'yī gè xiǎo shí', translation: 'one hour' },
                                },
                                {
                                    id: 'n35-cl2-adv',
                                    role: 'Adverb',
                                    text: { hanzi: '就', pinyin: 'jiù', translation: 'just / then' },
                                },
                                {
                                    id: 'n35-cl2-vp',
                                    role: 'Verb Phrase',
                                    children: [
                                        {
                                            id: 'n35-cl2-hv',
                                            role: 'Head Verb',
                                            text: { hanzi: '写', pinyin: 'xiě', translation: 'write' },
                                        },
                                        {
                                            id: 'n35-cl2-de',
                                            role: 'Particle',
                                            subRole: 'potential affirmative marker (V + 得 + result)',
                                            text: { hanzi: '得', pinyin: 'de', translation: 'can (potential)' },
                                        },
                                        {
                                            id: 'n35-cl2-comp',
                                            role: 'Complement',
                                            subRole: 'resultative (potential)',
                                            text: { hanzi: '完', pinyin: 'wán', translation: 'finish / complete' },
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

    // ── Degree Complements ────────────────────────────────────────────────────
    {
        id: 's36',
        category: 'Degree Complements',
        chinese: '她高兴得跳了起来。',
        pinyin: 'Tā gāo xìng de tiào le qǐ lái.',
        translation: 'She was so happy she jumped up.',
        explanation: '**她** (she) is the Topic. The Comment uses a **degree complement**: **高兴** (happy, acting as predicate) + **得** (the degree linker) + **跳了起来** (jumped up). The 得 here is not the potential marker — it is a *linker* that connects the predicate to a clause describing *the degree or consequence* of that state. The consequence of her happiness was that she jumped. This structure — [predicate] + 得 + [what happened as a result] — is one of Mandarin\'s most expressive frames: 忙得忘了吃饭 (busy-to-the-point-of-forgetting-to-eat), 累得说不出话 (tired-to-the-point-of-being-speechless).',
        tree: {
            id: 'n36',
            role: 'Sentence',
            children: [
                {
                    id: 'n36-t',
                    role: 'Topic',
                    text: { hanzi: '她', pinyin: 'tā', translation: 'she' },
                },
                {
                    id: 'n36-c',
                    role: 'Comment',
                    subRole: 'degree complement (consequence)',
                    children: [
                        {
                            id: 'n36-pred',
                            role: 'Adjective',
                            subRole: 'predicate',
                            text: { hanzi: '高兴', pinyin: 'gāo xìng', translation: 'happy' },
                        },
                        {
                            id: 'n36-de',
                            role: 'Particle',
                            subRole: 'degree complement linker',
                            text: { hanzi: '得', pinyin: 'de', translation: '(links to degree/consequence)' },
                        },
                        {
                            id: 'n36-comp',
                            role: 'Complement',
                            subRole: 'degree complement (consequence clause)',
                            children: [
                                {
                                    id: 'n36-comp-hv',
                                    role: 'Head Verb',
                                    text: { hanzi: '跳', pinyin: 'tiào', translation: 'jump' },
                                },
                                {
                                    id: 'n36-comp-le',
                                    role: 'Particle',
                                    subRole: 'completion',
                                    text: { hanzi: '了', pinyin: 'le', translation: '(done)' },
                                },
                                {
                                    id: 'n36-comp-dir',
                                    role: 'Complement',
                                    subRole: 'directional',
                                    text: { hanzi: '起来', pinyin: 'qǐ lái', translation: 'up' },
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 's37',
        category: 'Degree Complements',
        chinese: '她跑得非常快。',
        pinyin: 'Tā pǎo de fēi cháng kuài.',
        translation: 'She runs very fast.',
        explanation: '**她** (she) is the Topic. The Comment uses the most common form of degree complement: **verb + 得 + description**. The verb **跑** (run) is linked by **得** to the description **非常快** (very fast) — this tells you *how well or how fast* the running was done. This is fundamentally different from a resultative complement (which says what *outcome* was achieved). The degree complement says *how the action was performed*. Compare: 跑**完**了 (finished the run — resultative) vs 跑**得**很快 (ran very fast — degree). One describes the outcome; the other rates the quality of the action.',
        tree: {
            id: 'n37',
            role: 'Sentence',
            children: [
                {
                    id: 'n37-t',
                    role: 'Topic',
                    text: { hanzi: '她', pinyin: 'tā', translation: 'she' },
                },
                {
                    id: 'n37-c',
                    role: 'Comment',
                    subRole: 'degree complement (manner)',
                    children: [
                        {
                            id: 'n37-vp',
                            role: 'Verb Phrase',
                            children: [
                                {
                                    id: 'n37-hv',
                                    role: 'Head Verb',
                                    text: { hanzi: '跑', pinyin: 'pǎo', translation: 'run' },
                                },
                                {
                                    id: 'n37-de',
                                    role: 'Particle',
                                    subRole: 'degree complement linker',
                                    text: { hanzi: '得', pinyin: 'de', translation: '(links to degree)' },
                                },
                                {
                                    id: 'n37-comp',
                                    role: 'Complement',
                                    subRole: 'degree complement (manner)',
                                    children: [
                                        {
                                            id: 'n37-comp-adv',
                                            role: 'Adverb',
                                            text: { hanzi: '非常', pinyin: 'fēi cháng', translation: 'very / extremely' },
                                        },
                                        {
                                            id: 'n37-comp-adj',
                                            role: 'Adjective',
                                            text: { hanzi: '快', pinyin: 'kuài', translation: 'fast' },
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
    // ── Directional Complements ───────────────────────────────────────────────
    {
        id: 's38',
        category: 'Directional Complements',
        chinese: '他走进来了。',
        pinyin: 'Tā zǒu jìn lái le.',
        translation: 'He walked in.',
        explanation: '**他** (he) is the Topic. The Comment\'s verb **走** (walk) is followed by a **compound directional complement**: **进** (enter) + **来** (come). Together, 进来 means entering toward the speaker\'s location. The three-part structure — main verb + direction morpheme + **来/去** — is the full directional complement frame. **来** signals movement toward the speaker; **去** signals movement away. So 走**出去** would mean "walk out (away)." These complements answer the question: *which direction did the action take?* The **了** confirms the action is complete.',
        tree: {
            id: 'n38',
            role: 'Sentence',
            children: [
                {
                    id: 'n38-t',
                    role: 'Topic',
                    text: { hanzi: '他', pinyin: 'tā', translation: 'he' },
                },
                {
                    id: 'n38-c',
                    role: 'Comment',
                    children: [
                        {
                            id: 'n38-vp',
                            role: 'Verb Phrase',
                            children: [
                                {
                                    id: 'n38-hv',
                                    role: 'Head Verb',
                                    text: { hanzi: '走', pinyin: 'zǒu', translation: 'walk' },
                                },
                                {
                                    id: 'n38-comp',
                                    role: 'Complement',
                                    subRole: 'directional compound (V + dir + 来)',
                                    children: [
                                        {
                                            id: 'n38-comp-dir',
                                            role: 'Complement',
                                            subRole: 'direction morpheme (enter)',
                                            text: { hanzi: '进', pinyin: 'jìn', translation: 'enter / in' },
                                        },
                                        {
                                            id: 'n38-comp-lai',
                                            role: 'Complement',
                                            subRole: 'orientation — toward speaker',
                                            text: { hanzi: '来', pinyin: 'lái', translation: 'come (toward speaker)' },
                                        },
                                    ],
                                },
                                {
                                    id: 'n38-le',
                                    role: 'Particle',
                                    subRole: 'completion',
                                    text: { hanzi: '了', pinyin: 'le', translation: '(done)' },
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 's39',
        category: 'Directional Complements',
        chinese: '她把书拿出去了。',
        pinyin: 'Tā bǎ shū ná chū qù le.',
        translation: 'She took the book out (and away).',
        explanation: '**她** (she) is the Topic. This sentence stacks two constructions: the BA front-object pattern and a directional complement. **把书** spotlights the book as the affected object. Then **拿** (take/carry) is followed by the directional complement **出去**: **出** (exit/out) + **去** (go). The **去** marks movement *away from the speaker* — contrast with 拿进**来** (carry in, toward speaker). When BA is combined with a directional complement, the structure is: 把 + [object] + [verb] + [direction] + 来/去. The object slots before the verb; the direction slots after.',
        tree: {
            id: 'n39',
            role: 'Sentence',
            children: [
                {
                    id: 'n39-t',
                    role: 'Topic',
                    text: { hanzi: '她', pinyin: 'tā', translation: 'she' },
                },
                {
                    id: 'n39-c',
                    role: 'Comment',
                    children: [
                        {
                            id: 'n39-ba',
                            role: 'Preposition',
                            subRole: 'ba-construction',
                            children: [
                                {
                                    id: 'n39-ba-prep',
                                    role: 'Preposition',
                                    text: { hanzi: '把', pinyin: 'bǎ', translation: '(object fronting)' },
                                },
                                {
                                    id: 'n39-ba-obj',
                                    role: 'Object',
                                    text: { hanzi: '书', pinyin: 'shū', translation: 'book' },
                                },
                            ],
                        },
                        {
                            id: 'n39-vp',
                            role: 'Verb Phrase',
                            children: [
                                {
                                    id: 'n39-hv',
                                    role: 'Head Verb',
                                    text: { hanzi: '拿', pinyin: 'ná', translation: 'take / carry' },
                                },
                                {
                                    id: 'n39-comp',
                                    role: 'Complement',
                                    subRole: 'directional compound (V + dir + 去)',
                                    children: [
                                        {
                                            id: 'n39-comp-dir',
                                            role: 'Complement',
                                            subRole: 'direction morpheme (exit)',
                                            text: { hanzi: '出', pinyin: 'chū', translation: 'exit / out' },
                                        },
                                        {
                                            id: 'n39-comp-qu',
                                            role: 'Complement',
                                            subRole: 'orientation — away from speaker',
                                            text: { hanzi: '去', pinyin: 'qù', translation: 'go (away from speaker)' },
                                        },
                                    ],
                                },
                                {
                                    id: 'n39-le',
                                    role: 'Particle',
                                    subRole: 'completion',
                                    text: { hanzi: '了', pinyin: 'le', translation: '(done)' },
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    },
    // ── Resultative Complements — additional examples ─────────────────────────
    {
        id: 's40',
        category: 'Resultative Complements',
        chinese: '我找到钥匙了。',
        pinyin: 'Wǒ zhǎo dào yào shi le.',
        translation: 'I found the key.',
        explanation: '**我** (I) is the Topic. The resultative compound **找到** is one of the most useful in the language: **找** (look for) + **到** (arrive at / reach). The result morpheme 到 means "reached the destination of searching" — which is exactly what finding something is. This **V+到** pattern is extremely productive: 买到 (buy and obtain), 拿到 (get hold of), 看到 (look and perceive = see), 听到 (listen and perceive = hear). The 到 always signals that the action reached its target. **了** confirms the action is complete.',
        tree: {
            id: 'n40',
            role: 'Sentence',
            children: [
                {
                    id: 'n40-t',
                    role: 'Topic',
                    text: { hanzi: '我', pinyin: 'wǒ', translation: 'I' },
                },
                {
                    id: 'n40-c',
                    role: 'Comment',
                    children: [
                        {
                            id: 'n40-vp',
                            role: 'Verb Phrase',
                            children: [
                                {
                                    id: 'n40-hv',
                                    role: 'Head Verb',
                                    text: { hanzi: '找', pinyin: 'zhǎo', translation: 'look for / search' },
                                },
                                {
                                    id: 'n40-comp',
                                    role: 'Complement',
                                    subRole: 'resultative (reach target)',
                                    text: { hanzi: '到', pinyin: 'dào', translation: 'arrive at / reach' },
                                },
                                {
                                    id: 'n40-obj',
                                    role: 'Object',
                                    text: { hanzi: '钥匙', pinyin: 'yào shi', translation: 'key' },
                                },
                                {
                                    id: 'n40-le',
                                    role: 'Particle',
                                    subRole: 'completion',
                                    text: { hanzi: '了', pinyin: 'le', translation: '(done)' },
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 's41',
        category: 'Resultative Complements',
        chinese: '他写错字了。',
        pinyin: 'Tā xiě cuò zì le.',
        translation: 'He wrote a character incorrectly.',
        explanation: '**他** (he) is the Topic. The resultative compound **写错** — **写** (write) + **错** (wrong/mistaken) — means "wrote and the result was wrong." This is a very natural everyday pattern: you don\'t need separate words for "make a mistake writing"; one compact verb covers it. Other V+错 compounds: 说错 (say wrongly), 听错 (mishear), 拿错 (pick up the wrong thing), 走错 (go the wrong way). The object **字** (character/word) comes *after* the resultative compound — this is standard for resultatives with a regular (non-BA) object.',
        tree: {
            id: 'n41',
            role: 'Sentence',
            children: [
                {
                    id: 'n41-t',
                    role: 'Topic',
                    text: { hanzi: '他', pinyin: 'tā', translation: 'he' },
                },
                {
                    id: 'n41-c',
                    role: 'Comment',
                    children: [
                        {
                            id: 'n41-vp',
                            role: 'Verb Phrase',
                            children: [
                                {
                                    id: 'n41-hv',
                                    role: 'Head Verb',
                                    text: { hanzi: '写', pinyin: 'xiě', translation: 'write' },
                                },
                                {
                                    id: 'n41-comp',
                                    role: 'Complement',
                                    subRole: 'resultative (error)',
                                    text: { hanzi: '错', pinyin: 'cuò', translation: 'wrong / mistaken' },
                                },
                                {
                                    id: 'n41-obj',
                                    role: 'Object',
                                    text: { hanzi: '字', pinyin: 'zì', translation: 'character / word' },
                                },
                                {
                                    id: 'n41-le',
                                    role: 'Particle',
                                    subRole: 'completion',
                                    text: { hanzi: '了', pinyin: 'le', translation: '(done)' },
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    },

    // ── Directional Complements — additional examples ─────────────────────────
    {
        id: 's42',
        category: 'Directional Complements',
        chinese: '她跑上楼去了。',
        pinyin: 'Tā pǎo shàng lóu qù le.',
        translation: 'She ran upstairs (away from the speaker).',
        explanation: '**她** (she) is the Topic. The directional complement here is **上去**: 上 (up) + 去 (away). But notice something: the object **楼** (stairs/floor) slots *between* 上 and 去. This is a key rule — when a directional complement has an object and uses a compound form (direction + 来/去), the object inserts between them: V + direction + *object* + 来/去. Compare s38 where there was no object: 走进来 (no insertion). The **上** signals upward movement; the **去** confirms it was *away* from the speaker\'s vantage.',
        tree: {
            id: 'n42',
            role: 'Sentence',
            children: [
                {
                    id: 'n42-t',
                    role: 'Topic',
                    text: { hanzi: '她', pinyin: 'tā', translation: 'she' },
                },
                {
                    id: 'n42-c',
                    role: 'Comment',
                    children: [
                        {
                            id: 'n42-vp',
                            role: 'Verb Phrase',
                            children: [
                                {
                                    id: 'n42-hv',
                                    role: 'Head Verb',
                                    text: { hanzi: '跑', pinyin: 'pǎo', translation: 'run' },
                                },
                                {
                                    id: 'n42-comp-dir',
                                    role: 'Complement',
                                    subRole: 'direction morpheme (upward)',
                                    text: { hanzi: '上', pinyin: 'shàng', translation: 'up' },
                                },
                                {
                                    id: 'n42-obj',
                                    role: 'Object',
                                    subRole: 'inserted between direction and 去',
                                    text: { hanzi: '楼', pinyin: 'lóu', translation: 'stairs / floor' },
                                },
                                {
                                    id: 'n42-comp-qu',
                                    role: 'Complement',
                                    subRole: 'orientation — away from speaker',
                                    text: { hanzi: '去', pinyin: 'qù', translation: 'go (away)' },
                                },
                                {
                                    id: 'n42-le',
                                    role: 'Particle',
                                    subRole: 'completion',
                                    text: { hanzi: '了', pinyin: 'le', translation: '(done)' },
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 's43',
        category: 'Directional Complements',
        chinese: '他从树上摘下来一个苹果。',
        pinyin: 'Tā cóng shù shàng zhāi xià lái yī gè píng guǒ.',
        translation: 'He plucked an apple down from the tree.',
        explanation: '**他** (he) is the Topic. The location phrase **从树上** (from the tree) sets the scene. The verb **摘** (pluck/pick) is followed by the directional compound **下来**: 下 (down) + 来 (toward speaker). After 下来 comes the indefinite object **一个苹果** (one apple). When the object is indefinite (not "the apple" but "an apple"), it typically slots *after* the full directional compound, not inside it. Compare with s42 where a definite place word (楼) slots inside. This difference — definite/place words inside vs indefinite nouns after — is one of the trickier positional rules for directional complements.',
        tree: {
            id: 'n43',
            role: 'Sentence',
            children: [
                {
                    id: 'n43-t',
                    role: 'Topic',
                    text: { hanzi: '他', pinyin: 'tā', translation: 'he' },
                },
                {
                    id: 'n43-c',
                    role: 'Comment',
                    children: [
                        {
                            id: 'n43-lp',
                            role: 'Location Phrase',
                            subRole: 'source location',
                            children: [
                                {
                                    id: 'n43-lp-prep',
                                    role: 'Preposition',
                                    text: { hanzi: '从', pinyin: 'cóng', translation: 'from' },
                                },
                                {
                                    id: 'n43-lp-n',
                                    role: 'Noun',
                                    text: { hanzi: '树', pinyin: 'shù', translation: 'tree' },
                                },
                                {
                                    id: 'n43-lp-loc',
                                    role: 'Particle',
                                    subRole: 'localizer',
                                    text: { hanzi: '上', pinyin: 'shàng', translation: 'on top / above' },
                                },
                            ],
                        },
                        {
                            id: 'n43-vp',
                            role: 'Verb Phrase',
                            children: [
                                {
                                    id: 'n43-hv',
                                    role: 'Head Verb',
                                    text: { hanzi: '摘', pinyin: 'zhāi', translation: 'pluck / pick' },
                                },
                                {
                                    id: 'n43-comp',
                                    role: 'Complement',
                                    subRole: 'directional compound (downward, toward speaker)',
                                    children: [
                                        {
                                            id: 'n43-comp-dir',
                                            role: 'Complement',
                                            subRole: 'direction morpheme (downward)',
                                            text: { hanzi: '下', pinyin: 'xià', translation: 'down' },
                                        },
                                        {
                                            id: 'n43-comp-lai',
                                            role: 'Complement',
                                            subRole: 'orientation — toward speaker',
                                            text: { hanzi: '来', pinyin: 'lái', translation: 'come (toward speaker)' },
                                        },
                                    ],
                                },
                                {
                                    id: 'n43-obj',
                                    role: 'Object',
                                    subRole: 'indefinite object — follows full complement',
                                    children: [
                                        {
                                            id: 'n43-obj-attr',
                                            role: 'Attributive',
                                            text: { hanzi: '一个', pinyin: 'yī gè', translation: 'one (measure)' },
                                        },
                                        {
                                            id: 'n43-obj-hn',
                                            role: 'Head Noun',
                                            text: { hanzi: '苹果', pinyin: 'píng guǒ', translation: 'apple' },
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

    // ── Potential Complements — additional examples ───────────────────────────
    {
        id: 's44',
        category: 'Potential Complements',
        chinese: '这本书你看得懂吗？',
        pinyin: 'Zhè běn shū nǐ kàn de dǒng ma？',
        translation: 'Can you understand this book?',
        explanation: 'A **double-topic** structure with a potential complement question. **这本书** (this book — 本 is the measure word for books) is the outer Topic. **你** (you) is the inner Topic. The potential complement **看得懂** uses **看** (read/look) + **得** + **懂** (understand): *can read-to-the-point-of-understanding*. The **吗** at the end turns it into a yes/no question. To answer yes: 看**得**懂 (can understand). To answer no: 看**不**懂 (can\'t understand). This is a natural question form when politely checking comprehension.',
        tree: {
            id: 'n44',
            role: 'Sentence',
            children: [
                {
                    id: 'n44-outer-t',
                    role: 'Topic',
                    subRole: 'outer topic (frame)',
                    children: [
                        {
                            id: 'n44-outer-t-attr',
                            role: 'Attributive',
                            text: { hanzi: '这本', pinyin: 'zhè běn', translation: 'this (book-measure)' },
                        },
                        {
                            id: 'n44-outer-t-hn',
                            role: 'Head Noun',
                            text: { hanzi: '书', pinyin: 'shū', translation: 'book' },
                        },
                    ],
                },
                {
                    id: 'n44-c',
                    role: 'Comment',
                    children: [
                        {
                            id: 'n44-inner-t',
                            role: 'Topic',
                            subRole: 'inner topic (subject)',
                            text: { hanzi: '你', pinyin: 'nǐ', translation: 'you' },
                        },
                        {
                            id: 'n44-vp',
                            role: 'Verb Phrase',
                            children: [
                                {
                                    id: 'n44-hv',
                                    role: 'Head Verb',
                                    text: { hanzi: '看', pinyin: 'kàn', translation: 'read / look' },
                                },
                                {
                                    id: 'n44-de',
                                    role: 'Particle',
                                    subRole: 'potential affirmative marker',
                                    text: { hanzi: '得', pinyin: 'de', translation: 'can (potential)' },
                                },
                                {
                                    id: 'n44-comp',
                                    role: 'Complement',
                                    subRole: 'resultative (potential)',
                                    text: { hanzi: '懂', pinyin: 'dǒng', translation: 'understand / grasp' },
                                },
                                {
                                    id: 'n44-ma',
                                    role: 'Particle',
                                    subRole: 'question marker',
                                    text: { hanzi: '吗', pinyin: 'ma', translation: '(question)' },
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 's45',
        category: 'Potential Complements',
        chinese: '昨晚我睡不着，一直到天亮。',
        pinyin: 'Zuó wǎn wǒ shuì bu zháo, yī zhí dào tiān liàng.',
        translation: 'Last night I couldn\'t fall asleep — right up until dawn.',
        explanation: 'The time phrase **昨晚** (last night) sets the scene. **我** (I) is the Topic. The potential complement **睡不着** — **睡** (sleep) + **不** + **着** (着 here means "catch / latch onto": the state of being asleep was unreachable) — conveys the inability to *reach* the state of sleep. This is a uniquely vivid potential complement: 着 as a result morpheme expresses "catching" or "settling into" a state. Compare: 找得着 (can find / manage to locate), 猜不着 (can\'t guess). The second clause **一直到天亮** (straight until dawn) extends the picture.',
        tree: {
            id: 'n45',
            role: 'Sentence',
            children: [
                {
                    id: 'n45-tp',
                    role: 'Time Phrase',
                    text: { hanzi: '昨晚', pinyin: 'zuó wǎn', translation: 'last night' },
                },
                {
                    id: 'n45-t',
                    role: 'Topic',
                    text: { hanzi: '我', pinyin: 'wǒ', translation: 'I' },
                },
                {
                    id: 'n45-c',
                    role: 'Comment',
                    children: [
                        {
                            id: 'n45-cl1',
                            role: 'Verb Phrase',
                            subRole: 'clause 1 — potential complement (negative)',
                            children: [
                                {
                                    id: 'n45-hv',
                                    role: 'Head Verb',
                                    text: { hanzi: '睡', pinyin: 'shuì', translation: 'sleep' },
                                },
                                {
                                    id: 'n45-neg',
                                    role: 'Particle',
                                    subRole: 'potential negator',
                                    text: { hanzi: '不', pinyin: 'bù', translation: 'cannot (potential)' },
                                },
                                {
                                    id: 'n45-comp',
                                    role: 'Complement',
                                    subRole: 'resultative — catch/settle into state',
                                    text: { hanzi: '着', pinyin: 'zháo', translation: 'catch / latch onto (state of sleep)' },
                                },
                            ],
                        },
                        {
                            id: 'n45-cl2',
                            role: 'Verb Phrase',
                            subRole: 'clause 2 — extent',
                            children: [
                                {
                                    id: 'n45-adv',
                                    role: 'Adverb',
                                    text: { hanzi: '一直', pinyin: 'yī zhí', translation: 'straight through / all the way' },
                                },
                                {
                                    id: 'n45-prep',
                                    role: 'Preposition',
                                    text: { hanzi: '到', pinyin: 'dào', translation: 'until / up to' },
                                },
                                {
                                    id: 'n45-endpoint',
                                    role: 'Noun',
                                    text: { hanzi: '天亮', pinyin: 'tiān liàng', translation: 'dawn / daybreak' },
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    },

    // ── Degree Complements — additional examples ──────────────────────────────
    {
        id: 's46',
        category: 'Degree Complements',
        chinese: '他气得说不出话来。',
        pinyin: 'Tā qì de shuō bu chū huà lái.',
        translation: 'He was so angry he couldn\'t get a word out.',
        explanation: '**他** (he) is the Topic. This sentence elegantly stacks two complement types within one structure. The degree complement frame: **气** (be angry) + **得** (degree linker) + [consequence clause]. The consequence clause is itself a *negative potential complement*: **说不出话来** — speak + 不 + exit + words + come = "couldn\'t speak words out." So we have: degree complement whose consequence is expressed via a potential complement. This kind of nesting is entirely natural in Mandarin and shows how these complement types interact. The sentence tells you both *how intense* the anger was and *what its consequence* was.',
        tree: {
            id: 'n46',
            role: 'Sentence',
            children: [
                {
                    id: 'n46-t',
                    role: 'Topic',
                    text: { hanzi: '他', pinyin: 'tā', translation: 'he' },
                },
                {
                    id: 'n46-c',
                    role: 'Comment',
                    subRole: 'degree complement (consequence)',
                    children: [
                        {
                            id: 'n46-pred',
                            role: 'Adjective',
                            subRole: 'predicate',
                            text: { hanzi: '气', pinyin: 'qì', translation: 'angry / furious' },
                        },
                        {
                            id: 'n46-de',
                            role: 'Particle',
                            subRole: 'degree complement linker',
                            text: { hanzi: '得', pinyin: 'de', translation: '(links to consequence)' },
                        },
                        {
                            id: 'n46-comp',
                            role: 'Complement',
                            subRole: 'degree — consequence (itself a negative potential complement)',
                            children: [
                                {
                                    id: 'n46-comp-hv',
                                    role: 'Head Verb',
                                    text: { hanzi: '说', pinyin: 'shuō', translation: 'speak / say' },
                                },
                                {
                                    id: 'n46-comp-neg',
                                    role: 'Particle',
                                    subRole: 'potential negator',
                                    text: { hanzi: '不', pinyin: 'bù', translation: 'cannot (potential)' },
                                },
                                {
                                    id: 'n46-comp-out',
                                    role: 'Complement',
                                    subRole: 'direction morpheme (exit/out)',
                                    text: { hanzi: '出', pinyin: 'chū', translation: 'out / exit' },
                                },
                                {
                                    id: 'n46-comp-obj',
                                    role: 'Object',
                                    text: { hanzi: '话', pinyin: 'huà', translation: 'words / speech' },
                                },
                                {
                                    id: 'n46-comp-lai',
                                    role: 'Complement',
                                    subRole: 'orientation — toward speaker (coming out)',
                                    text: { hanzi: '来', pinyin: 'lái', translation: 'come (complete the exit)' },
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 's47',
        category: 'Degree Complements',
        chinese: '她把房间打扫得干干净净。',
        pinyin: 'Tā bǎ fáng jiān dǎ sǎo de gān gān jìng jìng.',
        translation: 'She cleaned the room spotlessly.',
        explanation: '**她** (she) is the Topic. This sentence combines two constructions: the BA object-fronting pattern and a degree complement. **把房间** spotlights the room as the thing that gets cleaned. The verb **打扫** (clean/sweep) is followed by **得** and then **干干净净** (spotlessly clean — a reduplicated form of 干净 for emphasis). The degree complement here rates the *quality of the action*: how cleanly she cleaned. Note that with BA + a transitive verb, the degree complement attaches after 得 at the end — the word order is: 把 + [object] + [verb] + 得 + [degree description].',
        tree: {
            id: 'n47',
            role: 'Sentence',
            children: [
                {
                    id: 'n47-t',
                    role: 'Topic',
                    text: { hanzi: '她', pinyin: 'tā', translation: 'she' },
                },
                {
                    id: 'n47-c',
                    role: 'Comment',
                    children: [
                        {
                            id: 'n47-ba',
                            role: 'Preposition',
                            subRole: 'ba-construction',
                            children: [
                                {
                                    id: 'n47-ba-prep',
                                    role: 'Preposition',
                                    text: { hanzi: '把', pinyin: 'bǎ', translation: '(object fronting)' },
                                },
                                {
                                    id: 'n47-ba-obj',
                                    role: 'Object',
                                    text: { hanzi: '房间', pinyin: 'fáng jiān', translation: 'room' },
                                },
                            ],
                        },
                        {
                            id: 'n47-vp',
                            role: 'Verb Phrase',
                            subRole: 'degree complement (manner)',
                            children: [
                                {
                                    id: 'n47-hv',
                                    role: 'Head Verb',
                                    text: { hanzi: '打扫', pinyin: 'dǎ sǎo', translation: 'clean / sweep' },
                                },
                                {
                                    id: 'n47-de',
                                    role: 'Particle',
                                    subRole: 'degree complement linker',
                                    text: { hanzi: '得', pinyin: 'de', translation: '(links to degree)' },
                                },
                                {
                                    id: 'n47-comp',
                                    role: 'Complement',
                                    subRole: 'degree complement (reduplicated adjective)',
                                    text: { hanzi: '干干净净', pinyin: 'gān gān jìng jìng', translation: 'spotlessly clean (reduplicated)' },
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    },
    // ── BEI (Passive) — additional examples ────────────────────────────────────
    {
        id: 's48',
        category: 'BEI (Passive)',
        chinese: '那封信被他撕掉了。',
        pinyin: 'Nà fēng xìn bèi tā sī diào le.',
        translation: 'That letter was torn up by him.',
        explanation: '**那封信** (that letter) is the Topic — the thing affected. **被** introduces the agent: **他** (he/him). The verb **撕** (tear) is followed by the resultative complement **掉** (off / away — signals destruction or removal). BEI sentences almost always require a complement or 了 after the verb; bare *被+agent+verb* sounds incomplete. The **掉** tells you the letter didn\'t just get torn — it was torn *to pieces* or *away*. Compare: 撕破 (torn broken), 撕碎 (torn to shreds) — each complement shades the result differently.',
        tree: {
            id: 'n48',
            role: 'Sentence',
            children: [
                {
                    id: 'n48-t',
                    role: 'Topic',
                    children: [
                        {
                            id: 'n48-t-attr',
                            role: 'Attributive',
                            text: { hanzi: '那封', pinyin: 'nà fēng', translation: 'that (letter-measure)' },
                        },
                        {
                            id: 'n48-t-hn',
                            role: 'Head Noun',
                            text: { hanzi: '信', pinyin: 'xìn', translation: 'letter' },
                        },
                    ],
                },
                {
                    id: 'n48-c',
                    role: 'Comment',
                    children: [
                        {
                            id: 'n48-bei',
                            role: 'Preposition',
                            subRole: 'passive marker',
                            text: { hanzi: '被', pinyin: 'bèi', translation: '(passive)' },
                        },
                        {
                            id: 'n48-agent',
                            role: 'Noun',
                            subRole: 'agent (doer)',
                            text: { hanzi: '他', pinyin: 'tā', translation: 'he / him' },
                        },
                        {
                            id: 'n48-vp',
                            role: 'Verb Phrase',
                            children: [
                                {
                                    id: 'n48-hv',
                                    role: 'Head Verb',
                                    text: { hanzi: '撕', pinyin: 'sī', translation: 'tear' },
                                },
                                {
                                    id: 'n48-comp',
                                    role: 'Complement',
                                    subRole: 'resultative (removal/destruction)',
                                    text: { hanzi: '掉', pinyin: 'diào', translation: 'off / away (destroyed)' },
                                },
                                {
                                    id: 'n48-le',
                                    role: 'Particle',
                                    subRole: 'completion',
                                    text: { hanzi: '了', pinyin: 'le', translation: '(done)' },
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 's49',
        category: 'BEI (Passive)',
        chinese: '小偷被警察抓住了。',
        pinyin: 'Xiǎo tōu bèi jǐng chá zhuā zhù le.',
        translation: 'The thief was caught by the police.',
        explanation: '**小偷** (thief) is the Topic — the person affected. **被** marks the passive; **警察** (police) is the agent. The verb **抓** (grab/catch) is followed by the resultative complement **住** (firmly / hold in place). The **住** is key — it signals that the catching *stuck*: the thief didn\'t just get grabbed momentarily, he was held fast. The pattern V+住 is very common for actions that result in a fixed state: 记住 (remember firmly), 站住 (stand still / halt), 拿住 (hold onto). BEI + resultative is the most natural BEI pattern in speech.',
        tree: {
            id: 'n49',
            role: 'Sentence',
            children: [
                {
                    id: 'n49-t',
                    role: 'Topic',
                    text: { hanzi: '小偷', pinyin: 'xiǎo tōu', translation: 'thief' },
                },
                {
                    id: 'n49-c',
                    role: 'Comment',
                    children: [
                        {
                            id: 'n49-bei',
                            role: 'Preposition',
                            subRole: 'passive marker',
                            text: { hanzi: '被', pinyin: 'bèi', translation: '(passive)' },
                        },
                        {
                            id: 'n49-agent',
                            role: 'Noun',
                            subRole: 'agent (doer)',
                            text: { hanzi: '警察', pinyin: 'jǐng chá', translation: 'police' },
                        },
                        {
                            id: 'n49-vp',
                            role: 'Verb Phrase',
                            children: [
                                {
                                    id: 'n49-hv',
                                    role: 'Head Verb',
                                    text: { hanzi: '抓', pinyin: 'zhuā', translation: 'grab / catch' },
                                },
                                {
                                    id: 'n49-comp',
                                    role: 'Complement',
                                    subRole: 'resultative (firmly held)',
                                    text: { hanzi: '住', pinyin: 'zhù', translation: 'firmly / hold in place' },
                                },
                                {
                                    id: 'n49-le',
                                    role: 'Particle',
                                    subRole: 'completion',
                                    text: { hanzi: '了', pinyin: 'le', translation: '(done)' },
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    },

    // ── Shì–de Construction — additional examples ─────────────────────────────
    {
        id: 's50',
        category: 'Shì–de Construction',
        chinese: '我是昨天到的。',
        pinyin: 'Wǒ shì zuó tiān dào de.',
        translation: 'It was yesterday that I arrived.',
        explanation: '**我** (I) is the **Topic** — a left-dislocated element setting the frame: *as for me…* Mandarin is topic-prominent; 我 is not the subject of a copula but the aboutness anchor of the whole sentence. The **Comment** is a **pseudo-cleft** (是…的 cleft frame): **是** opens the bracket and **的** closes it, together meaning *"it was [X] that…"* The focused constituent is **昨天** (yesterday) — the *when* is being highlighted as new or corrective information, answering a question like "When did you arrive?" Inside the cleft, the subject of **到** (arrive) is pro-dropped, recoverable from the topic. Full logical reading: *As for me, it was yesterday that (I) arrived.* Without 是…的, 我昨天到了 would be a neutral past-tense statement. The cleft is the minimal, elegant form: 是 + [focused element] + verb + 的.',
        tree: {
            id: 'n50',
            role: 'Sentence',
            children: [
                {
                    id: 'n50-t',
                    role: 'Topic',
                    subRole: 'left-dislocation (as for me)',
                    text: { hanzi: '我', pinyin: 'wǒ', translation: 'I / as for me' },
                },
                {
                    id: 'n50-c',
                    role: 'Comment',
                    subRole: 'pseudo-cleft frame (是…的)',
                    children: [
                        {
                            id: 'n50-shi',
                            role: 'Particle',
                            subRole: 'cleft opener — it was…',
                            text: { hanzi: '是', pinyin: 'shì', translation: '(it was…)' },
                        },
                        {
                            id: 'n50-focus',
                            role: 'Time Phrase',
                            subRole: 'focused element (when)',
                            text: { hanzi: '昨天', pinyin: 'zuó tiān', translation: 'yesterday' },
                        },
                        {
                            id: 'n50-hv',
                            role: 'Head Verb',
                            subRole: 'embedded predicate (null subject = 我)',
                            text: { hanzi: '到', pinyin: 'dào', translation: 'arrive' },
                        },
                        {
                            id: 'n50-de',
                            role: 'Particle',
                            subRole: 'cleft closer — …that [verb]',
                            text: { hanzi: '的', pinyin: 'de', translation: '(cleft closure)' },
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 's51',
        category: 'Shì–de Construction',
        chinese: '这件衣服是在北京买的。',
        pinyin: 'Zhè jiàn yī fu shì zài Běi jīng mǎi de.',
        translation: 'This item of clothing was bought in Beijing.',
        explanation: '**这件衣服** (this item of clothing — 件 is the measure word for garments) is the **Topic** — the aboutness anchor of the sentence. Unlike the first-person topics in s8 and s50, here the topic is a *thing*, not a person. The **Comment** is again a **pseudo-cleft**: **是** opens the focus bracket and **的** closes it. The focused constituent is **在北京** (in Beijing) — the *where* is the new information, answering "Where was it bought?" Inside the cleft, the subject of **买** (buy) is fully pro-dropped — the buyer is contextually understood, not stated. Full logical reading: *As for this item of clothing, it was in Beijing that (someone) bought it.* This shows how 是…的 works equally well with non-person topics and with location focus — the construction is productive across time (s50), place (here), manner, and agent. Compare: 这件衣服是谁买的？(It was *who* that bought this?) — just swapping the focused slot.',
        tree: {
            id: 'n51',
            role: 'Sentence',
            children: [
                {
                    id: 'n51-t',
                    role: 'Topic',
                    subRole: 'left-dislocation (as for this clothing)',
                    children: [
                        {
                            id: 'n51-t-attr',
                            role: 'Attributive',
                            text: { hanzi: '这件', pinyin: 'zhè jiàn', translation: 'this (garment-measure)' },
                        },
                        {
                            id: 'n51-t-hn',
                            role: 'Head Noun',
                            text: { hanzi: '衣服', pinyin: 'yī fu', translation: 'clothing' },
                        },
                    ],
                },
                {
                    id: 'n51-c',
                    role: 'Comment',
                    subRole: 'pseudo-cleft frame (是…的)',
                    children: [
                        {
                            id: 'n51-shi',
                            role: 'Particle',
                            subRole: 'cleft opener — it was…',
                            text: { hanzi: '是', pinyin: 'shì', translation: '(it was…)' },
                        },
                        {
                            id: 'n51-focus',
                            role: 'Location Phrase',
                            subRole: 'focused element (where)',
                            children: [
                                {
                                    id: 'n51-focus-prep',
                                    role: 'Preposition',
                                    text: { hanzi: '在', pinyin: 'zài', translation: 'at / in' },
                                },
                                {
                                    id: 'n51-focus-n',
                                    role: 'Noun',
                                    text: { hanzi: '北京', pinyin: 'Běi jīng', translation: 'Beijing' },
                                },
                            ],
                        },
                        {
                            id: 'n51-hv',
                            role: 'Head Verb',
                            subRole: 'embedded predicate (null subject = contextual)',
                            text: { hanzi: '买', pinyin: 'mǎi', translation: 'buy' },
                        },
                        {
                            id: 'n51-de',
                            role: 'Particle',
                            subRole: 'cleft closer — …that [verb]',
                            text: { hanzi: '的', pinyin: 'de', translation: '(cleft closure)' },
                        },
                    ],
                },
            ],
        },
    },

    // ── Pivotal Constructions — additional examples ───────────────────────────
    {
        id: 's52',
        category: 'Pivotal Constructions',
        chinese: '公司派他去谈判。',
        pinyin: 'Gōng sī pài tā qù tán pàn.',
        translation: 'The company sent him to negotiate.',
        explanation: '**公司** (company) is the Topic. The verb **派** (dispatch/send) takes **他** (him) as its object — but 他 simultaneously becomes the subject of what follows: **去谈判** (go negotiate). This is the pivot. Unlike s32 and s33 where the pivot verbs were 让/叫 (permission/command), here **派** implies authority and assignment — the company dispatched him. The embedded predicate uses a serial verb: 去 (go) + 谈判 (negotiate), showing purpose chaining inside a pivotal frame. Mandarin layers these patterns with ease.',
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
        category: 'Pivotal Constructions',
        chinese: '她请我吃饭。',
        pinyin: 'Tā qǐng wǒ chī fàn.',
        translation: 'She invited me to eat (out / to dinner).',
        explanation: '**她** (she) is the Topic. **请** (invite/treat) creates the pivotal structure: **我** (me) is both the object of 请 and the subject of **吃饭** (eat a meal). The verb 请 has a special cultural weight in Mandarin — 请你吃饭 often implies treating someone to a meal (paying for them). The embedded predicate 吃饭 is itself a simple VO compound. This sentence is a good contrast with s32 (让) and s33 (叫): 请 implies hospitality and courtesy, while 让/叫 imply permission or command — same syntactic frame, very different social register.',
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

    // ── Separable Verbs — additional examples ─────────────────────────────────
    {
        id: 's54',
        category: 'Separable Verbs (离合词)',
        chinese: '他们分了手。',
        pinyin: 'Tā men fēn le shǒu.',
        translation: 'They broke up.',
        explanation: '**他们** (they) is the Topic. **分手** (break up) is a separable verb: **分** (split) is the verb morpheme and **手** (hand) is the object morpheme. When you insert the completion particle **了** between them, the compound splits: 分**了**手. This is the simplest split: just 了 slotting in. The separable verb frame works exactly the same way as in 见面, 散步, and 睡觉 — any particle, duration phrase, or frequency word goes between the verb half and the object half. Both 分了手 (split) and 分手了 (unsplit) are natural. The split form emphasizes the completion of the breakup; the unsplit form is more neutral.',
        tree: {
            id: 'n54',
            role: 'Sentence',
            children: [
                {
                    id: 'n54-t',
                    role: 'Topic',
                    text: { hanzi: '他们', pinyin: 'tā men', translation: 'they' },
                },
                {
                    id: 'n54-c',
                    role: 'Comment',
                    children: [
                        {
                            id: 'n54-vp',
                            role: 'Verb Phrase',
                            subRole: 'separable verb — split by 了',
                            children: [
                                {
                                    id: 'n54-vm',
                                    role: 'Verb Morpheme',
                                    text: { hanzi: '分', pinyin: 'fēn', translation: 'split / separate' },
                                },
                                {
                                    id: 'n54-le',
                                    role: 'Particle',
                                    subRole: 'completion (inserted)',
                                    text: { hanzi: '了', pinyin: 'le', translation: '(done)' },
                                },
                                {
                                    id: 'n54-om',
                                    role: 'Object Morpheme',
                                    text: { hanzi: '手', pinyin: 'shǒu', translation: 'hand (object half)' },
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 's55',
        category: 'Separable Verbs (离合词)',
        chinese: '他毕了业就出国了。',
        pinyin: 'Tā bì le yè jiù chū guó le.',
        translation: 'As soon as he graduated, he went abroad.',
        explanation: '**他** (he) is the Topic. The separable verb **毕业** (graduate) — **毕** (finish) + **业** (studies/profession) — is split by **了** to mark completion: 毕**了**业. What follows is a serial clause: **就** (then, immediately) + **出国** (go abroad) + **了**. The sentence has a "once X, then Y" flow. Notice 毕业 and 出国 are *both* Verb-Object compounds, but only 毕业 is truly "separable" here — 出国 stays intact because nothing needs to insert. This illustrates that not every VO compound is a 离合词; separability depends on whether the grammar *forces* something between V and O.',
        tree: {
            id: 'n55',
            role: 'Sentence',
            children: [
                {
                    id: 'n55-t',
                    role: 'Topic',
                    text: { hanzi: '他', pinyin: 'tā', translation: 'he' },
                },
                {
                    id: 'n55-c',
                    role: 'Comment',
                    subRole: 'sequential clauses',
                    children: [
                        {
                            id: 'n55-cl1',
                            role: 'Verb Phrase',
                            subRole: 'clause 1 — separable verb split',
                            children: [
                                {
                                    id: 'n55-vm',
                                    role: 'Verb Morpheme',
                                    text: { hanzi: '毕', pinyin: 'bì', translation: 'finish / complete' },
                                },
                                {
                                    id: 'n55-le1',
                                    role: 'Particle',
                                    subRole: 'completion (inserted)',
                                    text: { hanzi: '了', pinyin: 'le', translation: '(done)' },
                                },
                                {
                                    id: 'n55-om',
                                    role: 'Object Morpheme',
                                    text: { hanzi: '业', pinyin: 'yè', translation: 'studies / profession' },
                                },
                            ],
                        },
                        {
                            id: 'n55-cl2',
                            role: 'Verb Phrase',
                            subRole: 'clause 2 — sequential result',
                            children: [
                                {
                                    id: 'n55-adv',
                                    role: 'Adverb',
                                    text: { hanzi: '就', pinyin: 'jiù', translation: 'then / immediately' },
                                },
                                {
                                    id: 'n55-hv',
                                    role: 'Head Verb',
                                    text: { hanzi: '出国', pinyin: 'chū guó', translation: 'go abroad' },
                                },
                                {
                                    id: 'n55-le2',
                                    role: 'Particle',
                                    subRole: 'completion',
                                    text: { hanzi: '了', pinyin: 'le', translation: '(done)' },
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    },

    // ── Rhetorical Questions — additional examples ────────────────────────────
    {
        id: 's56',
        category: 'Rhetorical Questions',
        chinese: '你难道不知道吗？',
        pinyin: 'Nǐ nán dào bù zhī dào ma?',
        translation: 'Don\'t you know? (Surely you must know!)',
        explanation: '**你** (you) is the Topic. **难道** (don\'t tell me / could it be that) is the rhetorical marker — it signals that the speaker expects the opposite of what the sentence literally says. The negation **不知道** (don\'t know) combined with 难道 produces: "You couldn\'t possibly not know" → "Of course you know!" The sentence-final **吗** reinforces the questioning tone but the expected answer is already baked in. 难道 always implies surprise, disbelief, or reproach. It\'s one of the most emotionally loaded adverbs in Mandarin.',
        tree: {
            id: 'n56',
            role: 'Sentence',
            children: [
                {
                    id: 'n56-t',
                    role: 'Topic',
                    text: { hanzi: '你', pinyin: 'nǐ', translation: 'you' },
                },
                {
                    id: 'n56-c',
                    role: 'Comment',
                    children: [
                        {
                            id: 'n56-rhet',
                            role: 'Adverb',
                            subRole: 'rhetorical marker (难道)',
                            text: { hanzi: '难道', pinyin: 'nán dào', translation: 'don\'t tell me / could it be' },
                        },
                        {
                            id: 'n56-vp',
                            role: 'Verb Phrase',
                            children: [
                                {
                                    id: 'n56-neg',
                                    role: 'Adverb',
                                    subRole: 'negation',
                                    text: { hanzi: '不', pinyin: 'bù', translation: 'not' },
                                },
                                {
                                    id: 'n56-hv',
                                    role: 'Head Verb',
                                    text: { hanzi: '知道', pinyin: 'zhī dào', translation: 'know' },
                                },
                                {
                                    id: 'n56-ma',
                                    role: 'Particle',
                                    subRole: 'question marker',
                                    text: { hanzi: '吗', pinyin: 'ma', translation: '(question)' },
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 's57',
        category: 'Rhetorical Questions',
        chinese: '这件事非解决不可。',
        pinyin: 'Zhè jiàn shì fēi jiě jué bù kě.',
        translation: 'This matter absolutely must be resolved.',
        explanation: '**这件事** (this matter — 件 is the measure word for affairs/items) is the Topic. The Comment uses the double-negation frame **非…不可**: 非 (must / unless) + verb + 不可 (not acceptable). The two negatives produce a strong affirmative: "it is not acceptable to NOT resolve it" → "it must be resolved." This is one of Mandarin\'s most emphatic constructions for expressing necessity. Unlike 难道 which questions, 非…不可 *demands*. The pattern is formulaic: 非 + [verb phrase] + 不可. You can slot any VP inside: 非去不可 (must go), 非说清楚不可 (must explain clearly).',
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
                            role: 'Adverb',
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
    },
    // ── Serial Verb Constructions (连动句) ──────────────────────────────────────
    {
        id: 's58',
        category: 'Serial Verb Constructions (连动句)',
        chinese: '他骑自行车去上班。',
        pinyin: 'Tā qí zì xíng chē qù shàng bān.',
        translation: 'He rides a bicycle to go to work.',
        explanation: '**他** (he) is the Topic. The Comment chains three VPs sharing the same subject: **骑自行车** (ride a bicycle) → **去** (go) → **上班** (go to work). No conjunctions link them — in Mandarin, serial verb constructions simply stack VPs in chronological or purpose order. VP1 describes the manner/means (riding), VP2 the motion (going), VP3 the purpose (working). This pattern is pervasive: Chinese rarely uses "and then" or "in order to" — the sequence says it all. Compare with pivotal constructions where the subject changes at the pivot; here, the subject stays the same throughout.',
        tree: {
            id: 'n58',
            role: 'Sentence',
            children: [
                {
                    id: 'n58-t',
                    role: 'Topic',
                    text: { hanzi: '他', pinyin: 'tā', translation: 'he' },
                },
                {
                    id: 'n58-c',
                    role: 'Comment',
                    subRole: 'serial verb construction (same subject)',
                    children: [
                        {
                            id: 'n58-vp1',
                            role: 'Verb Phrase',
                            subRole: 'VP1 — manner/means',
                            children: [
                                {
                                    id: 'n58-hv1',
                                    role: 'Head Verb',
                                    text: { hanzi: '骑', pinyin: 'qí', translation: 'ride' },
                                },
                                {
                                    id: 'n58-obj1',
                                    role: 'Object',
                                    text: { hanzi: '自行车', pinyin: 'zì xíng chē', translation: 'bicycle' },
                                },
                            ],
                        },
                        {
                            id: 'n58-vp2',
                            role: 'Verb Phrase',
                            subRole: 'VP2 — motion',
                            text: { hanzi: '去', pinyin: 'qù', translation: 'go' },
                        },
                        {
                            id: 'n58-vp3',
                            role: 'Verb Phrase',
                            subRole: 'VP3 — purpose',
                            text: { hanzi: '上班', pinyin: 'shàng bān', translation: 'go to work' },
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 's59',
        category: 'Serial Verb Constructions (连动句)',
        chinese: '我拿着伞出门了。',
        pinyin: 'Wǒ ná zhe sǎn chū mén le.',
        translation: 'I took (was holding) an umbrella and went out.',
        explanation: '**我** (I) is the Topic. Two VPs are chained: **拿着伞** (holding an umbrella) → **出门** (go out the door). The **着** on the first verb is the durative aspect marker — it means the umbrella-holding is *ongoing* while the second action happens. This is a very common serial verb pattern: V1着 + object + V2 = "while doing V1, do V2." Examples: 听着音乐跑步 (run while listening to music), 笑着说 (say while laughing). The 着 on V1 turns it into a concurrent background action rather than a sequential step.',
        tree: {
            id: 'n59',
            role: 'Sentence',
            children: [
                {
                    id: 'n59-t',
                    role: 'Topic',
                    text: { hanzi: '我', pinyin: 'wǒ', translation: 'I' },
                },
                {
                    id: 'n59-c',
                    role: 'Comment',
                    subRole: 'serial verb (V1着 concurrent with V2)',
                    children: [
                        {
                            id: 'n59-vp1',
                            role: 'Verb Phrase',
                            subRole: 'VP1 — concurrent background action',
                            children: [
                                {
                                    id: 'n59-hv1',
                                    role: 'Head Verb',
                                    text: { hanzi: '拿', pinyin: 'ná', translation: 'take / hold' },
                                },
                                {
                                    id: 'n59-zhe',
                                    role: 'Particle',
                                    subRole: 'durative aspect (ongoing)',
                                    text: { hanzi: '着', pinyin: 'zhe', translation: '(ongoing)' },
                                },
                                {
                                    id: 'n59-obj1',
                                    role: 'Object',
                                    text: { hanzi: '伞', pinyin: 'sǎn', translation: 'umbrella' },
                                },
                            ],
                        },
                        {
                            id: 'n59-vp2',
                            role: 'Verb Phrase',
                            subRole: 'VP2 — main action',
                            children: [
                                {
                                    id: 'n59-hv2',
                                    role: 'Head Verb',
                                    text: { hanzi: '出门', pinyin: 'chū mén', translation: 'go out / leave' },
                                },
                                {
                                    id: 'n59-le',
                                    role: 'Particle',
                                    subRole: 'completion',
                                    text: { hanzi: '了', pinyin: 'le', translation: '(done)' },
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    },

    // ── Correlative Patterns (越…越…) ─────────────────────────────────────────
    {
        id: 's60',
        category: 'Correlative Patterns (越…越…)',
        chinese: '中文越学越有意思。',
        pinyin: 'Zhōng wén yuè xué yuè yǒu yì si.',
        translation: 'The more you study Chinese, the more interesting it gets.',
        explanation: '**中文** (Chinese) is the Topic. The **越…越…** (yuè…yuè…) frame pairs two clauses: **越学** (the more you study) and **越有意思** (the more interesting). The pattern is: 越 A 越 B — as A increases, B increases. The subject of 学 is dropped (pro-drop — the general "you"). This correlative frame is one of the most elegant in Mandarin: no conjunction, no relative clause — just the repeated 越 linking cause and effect. Other examples: 越吃越胖 (the more you eat, the fatter you get), 越想越难过 (the more you think about it, the sadder you feel).',
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
                            subRole: 'clause A — condition',
                            children: [
                                {
                                    id: 'n60-yue1',
                                    role: 'Adverb',
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
                            subRole: 'clause B — consequence',
                            children: [
                                {
                                    id: 'n60-yue2',
                                    role: 'Adverb',
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
                                    role: 'Adverb',
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
                                    role: 'Adverb',
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

    // ── Aspect Markers (着/过/了) ─────────────────────────────────────────────
    {
        id: 's62',
        category: 'Aspect Markers (着/过/了)',
        chinese: '门开着呢。',
        pinyin: 'Mén kāi zhe ne.',
        translation: 'The door is open (right now).',
        explanation: '**门** (door) is the Topic. The verb **开** (open) carries the durative aspect marker **着** (zhe) — this doesn\'t mean "opening" (action in progress); it means the *state that resulted from opening* is still in effect. The door opened at some point and remains open now. The sentence-final **呢** (ne) reinforces the ongoing-state reading. This is **着** in its stative sense — one of its two primary functions. The other is the concurrent-action sense (V着 while doing something else, as in s59). Distinguishing these two is key: 坐着 can mean "is seated (state)" or "while sitting (concurrent)."',
        tree: {
            id: 'n62',
            role: 'Sentence',
            children: [
                {
                    id: 'n62-t',
                    role: 'Topic',
                    text: { hanzi: '门', pinyin: 'mén', translation: 'door' },
                },
                {
                    id: 'n62-c',
                    role: 'Comment',
                    children: [
                        {
                            id: 'n62-vp',
                            role: 'Verb Phrase',
                            children: [
                                {
                                    id: 'n62-hv',
                                    role: 'Head Verb',
                                    text: { hanzi: '开', pinyin: 'kāi', translation: 'open' },
                                },
                                {
                                    id: 'n62-zhe',
                                    role: 'Particle',
                                    subRole: 'durative aspect — resulting state (着)',
                                    text: { hanzi: '着', pinyin: 'zhe', translation: '(ongoing state)' },
                                },
                                {
                                    id: 'n62-ne',
                                    role: 'Particle',
                                    subRole: 'ongoing-state emphasis',
                                    text: { hanzi: '呢', pinyin: 'ne', translation: '(still the case)' },
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 's63',
        category: 'Aspect Markers (着/过/了)',
        chinese: '你去过长城吗？',
        pinyin: 'Nǐ qù guo Cháng Chéng ma?',
        translation: 'Have you been to the Great Wall?',
        explanation: '**你** (you) is the Topic. The verb **去** (go) is followed by the experiential aspect marker **过** (guo) — this doesn\'t ask "Did you go?" (specific past event) but "Have you ever gone?" (life experience). The difference between 了 and 过 is crucial: 我去了长城 means "I went to the Great Wall (at a specific time)"; 我去过长城 means "I\'ve been to the Great Wall (at some point in my life)." The **吗** makes it a question. To answer: 去过 (yes, I have) or 没去过 (no, never). Notice the negation uses 没, not 不 — experiential 过 always pairs with 没.',
        tree: {
            id: 'n63',
            role: 'Sentence',
            children: [
                {
                    id: 'n63-t',
                    role: 'Topic',
                    text: { hanzi: '你', pinyin: 'nǐ', translation: 'you' },
                },
                {
                    id: 'n63-c',
                    role: 'Comment',
                    children: [
                        {
                            id: 'n63-vp',
                            role: 'Verb Phrase',
                            children: [
                                {
                                    id: 'n63-hv',
                                    role: 'Head Verb',
                                    text: { hanzi: '去', pinyin: 'qù', translation: 'go' },
                                },
                                {
                                    id: 'n63-guo',
                                    role: 'Particle',
                                    subRole: 'experiential aspect (过)',
                                    text: { hanzi: '过', pinyin: 'guo', translation: '(have ever)' },
                                },
                                {
                                    id: 'n63-obj',
                                    role: 'Object',
                                    text: { hanzi: '长城', pinyin: 'Cháng Chéng', translation: 'Great Wall' },
                                },
                                {
                                    id: 'n63-ma',
                                    role: 'Particle',
                                    subRole: 'question marker',
                                    text: { hanzi: '吗', pinyin: 'ma', translation: '(question)' },
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    },

    // ── Conditional Sentences (如果…就…) ──────────────────────────────────────
    {
        id: 's64',
        category: 'Conditional Sentences (如果…就…)',
        chinese: '如果明天下雨，我们就不去了。',
        pinyin: 'Rú guǒ míng tiān xià yǔ, wǒ men jiù bù qù le.',
        translation: 'If it rains tomorrow, we won\'t go.',
        explanation: 'The **如果…就…** frame is Mandarin\'s if–then construction. **如果** (if) heads the condition clause: **明天下雨** (tomorrow rains). **就** (then) heads the consequence: **不去了** (won\'t go). The two clauses share no explicit conjunction beyond 如果 and 就. In casual speech, 如果 is often dropped entirely — 就 alone can carry the conditional sense: 明天下雨就不去了. The **了** at the end signals a change of plan (we were going to go, now we won\'t). Notice the condition clause has no subject — the weather "rains" without an explicit "it."',
        tree: {
            id: 'n64',
            role: 'Sentence',
            children: [
                {
                    id: 'n64-cl1',
                    role: 'Verb Phrase',
                    subRole: 'condition clause (如果…)',
                    children: [
                        {
                            id: 'n64-ruguo',
                            role: 'Adverb',
                            subRole: 'conditional marker',
                            text: { hanzi: '如果', pinyin: 'rú guǒ', translation: 'if' },
                        },
                        {
                            id: 'n64-tp',
                            role: 'Time Phrase',
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
                    role: 'Verb Phrase',
                    subRole: 'consequence clause (…就…)',
                    children: [
                        {
                            id: 'n64-subj',
                            role: 'Topic',
                            text: { hanzi: '我们', pinyin: 'wǒ men', translation: 'we' },
                        },
                        {
                            id: 'n64-jiu',
                            role: 'Adverb',
                            subRole: 'consequence marker (就)',
                            text: { hanzi: '就', pinyin: 'jiù', translation: 'then' },
                        },
                        {
                            id: 'n64-neg',
                            role: 'Adverb',
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
        explanation: 'The **只要…就…** frame is a close cousin of 如果…就…, but with a different nuance: "as long as / provided that" (lighter condition, stronger confidence in the result). **只要** (as long as) heads the condition: **你努力** (you work hard). **就** (then) introduces the guaranteed consequence: **能成功** (can succeed). The modal verb **能** (can / able to) signals capability/possibility. Unlike 如果, which is neutral ("if X, then Y"), 只要 implies the speaker is confident that the condition is sufficient: *all you need is to try hard*. Other 只要 examples: 只要有钱就行 (as long as there\'s money, it\'s fine).',
        tree: {
            id: 'n65',
            role: 'Sentence',
            children: [
                {
                    id: 'n65-cl1',
                    role: 'Verb Phrase',
                    subRole: 'condition clause (只要…)',
                    children: [
                        {
                            id: 'n65-zhiyao',
                            role: 'Adverb',
                            subRole: 'conditional marker (as long as)',
                            text: { hanzi: '只要', pinyin: 'zhǐ yào', translation: 'as long as / provided that' },
                        },
                        {
                            id: 'n65-subj1',
                            role: 'Topic',
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
                    role: 'Verb Phrase',
                    subRole: 'consequence clause (…就…)',
                    children: [
                        {
                            id: 'n65-jiu',
                            role: 'Adverb',
                            subRole: 'consequence marker (就)',
                            text: { hanzi: '就', pinyin: 'jiù', translation: 'then' },
                        },
                        {
                            id: 'n65-modal',
                            role: 'Adverb',
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

    // ── 连…都/也 ("even X") ──────────────────────────────────────────────────
    {
        id: 's66',
        category: '连…都/也 ("even X")',
        chinese: '他连自己的名字都不会写。',
        pinyin: 'Tā lián zì jǐ de míng zi dōu bù huì xiě.',
        translation: 'He can\'t even write his own name.',
        explanation: '**他** (he) is the Topic. The **连…都…** frame emphasizes an extreme case: 连 (even) + **自己的名字** (his own name) + **都** (all / even) + **不会写** (can\'t write). The structure says: "Even something as basic as his own name — he can\'t write it." 连 picks out the extreme item; 都 reinforces the "even" emphasis. The implied logic: if he can\'t do this simple thing, he certainly can\'t do harder things. This pattern always implies surprise, disappointment, or emphasis. Other examples: 连饭都没吃 (didn\'t even eat), 连一块钱都没有 (doesn\'t even have one yuan).',
        tree: {
            id: 'n66',
            role: 'Sentence',
            children: [
                {
                    id: 'n66-t',
                    role: 'Topic',
                    text: { hanzi: '他', pinyin: 'tā', translation: 'he' },
                },
                {
                    id: 'n66-c',
                    role: 'Comment',
                    subRole: '连…都… (even X)',
                    children: [
                        {
                            id: 'n66-lian',
                            role: 'Adverb',
                            subRole: 'even-marker opener (连)',
                            text: { hanzi: '连', pinyin: 'lián', translation: 'even' },
                        },
                        {
                            id: 'n66-focus',
                            role: 'Object',
                            subRole: 'emphasized extreme case',
                            children: [
                                {
                                    id: 'n66-focus-attr',
                                    role: 'Attributive',
                                    text: { hanzi: '自己的', pinyin: 'zì jǐ de', translation: 'his own' },
                                },
                                {
                                    id: 'n66-focus-hn',
                                    role: 'Head Noun',
                                    text: { hanzi: '名字', pinyin: 'míng zi', translation: 'name' },
                                },
                            ],
                        },
                        {
                            id: 'n66-dou',
                            role: 'Adverb',
                            subRole: 'even-marker reinforcer (都)',
                            text: { hanzi: '都', pinyin: 'dōu', translation: 'even / all' },
                        },
                        {
                            id: 'n66-vp',
                            role: 'Verb Phrase',
                            children: [
                                {
                                    id: 'n66-neg',
                                    role: 'Adverb',
                                    subRole: 'negation',
                                    text: { hanzi: '不', pinyin: 'bù', translation: 'not' },
                                },
                                {
                                    id: 'n66-modal',
                                    role: 'Adverb',
                                    subRole: 'modal verb (learned ability)',
                                    text: { hanzi: '会', pinyin: 'huì', translation: 'know how to' },
                                },
                                {
                                    id: 'n66-hv',
                                    role: 'Head Verb',
                                    text: { hanzi: '写', pinyin: 'xiě', translation: 'write' },
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 's67',
        category: '连…都/也 ("even X")',
        chinese: '连小孩子也能做到。',
        pinyin: 'Lián xiǎo hái zi yě néng zuò dào.',
        translation: 'Even children can do it.',
        explanation: 'This sentence uses **连…也…** (the 也 variant of the "even" construction). **连** picks out the extreme example: **小孩子** (children — the least expected group to succeed). **也** (also/even) + **能做到** (can accomplish it). The implied logic: if even children can do it, then anyone can. The difference between 都 and 也 in this pattern is subtle — 都 emphasizes exhaustive inclusion ("every single one"), while 也 emphasizes unexpected inclusion ("even this group too"). In practice, they\'re largely interchangeable. Notice this sentence has no separate Topic — 连 fronts the entire construction.',
        tree: {
            id: 'n67',
            role: 'Sentence',
            children: [
                {
                    id: 'n67-c',
                    role: 'Comment',
                    subRole: '连…也… (even X)',
                    children: [
                        {
                            id: 'n67-lian',
                            role: 'Adverb',
                            subRole: 'even-marker opener (连)',
                            text: { hanzi: '连', pinyin: 'lián', translation: 'even' },
                        },
                        {
                            id: 'n67-focus',
                            role: 'Subject',
                            subRole: 'emphasized extreme case',
                            text: { hanzi: '小孩子', pinyin: 'xiǎo hái zi', translation: 'children / little kids' },
                        },
                        {
                            id: 'n67-ye',
                            role: 'Adverb',
                            subRole: 'even-marker reinforcer (也)',
                            text: { hanzi: '也', pinyin: 'yě', translation: 'also / even' },
                        },
                        {
                            id: 'n67-vp',
                            role: 'Verb Phrase',
                            children: [
                                {
                                    id: 'n67-modal',
                                    role: 'Adverb',
                                    subRole: 'modal verb (ability)',
                                    text: { hanzi: '能', pinyin: 'néng', translation: 'can' },
                                },
                                {
                                    id: 'n67-hv',
                                    role: 'Head Verb',
                                    text: { hanzi: '做', pinyin: 'zuò', translation: 'do' },
                                },
                                {
                                    id: 'n67-comp',
                                    role: 'Complement',
                                    subRole: 'resultative (reach target)',
                                    text: { hanzi: '到', pinyin: 'dào', translation: 'reach / accomplish' },
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    },
];

// ── Cross-reference patching ─────────────────────────────────────────────────
// Populates relatedIds on sentences that share or contrast constructions.
// Done after the array definition so we don't clutter the per-sentence objects.
const byId = new Map(sampleSentences.map(s => [s.id, s]));
function addRelated(id: string, relatedIds: string[]) {
    const s = byId.get(id);
    if (s) s.relatedIds = relatedIds;
}

// BA ↔ BEI pairs (same-action active vs passive)
addRelated('s3', ['s6', 's29']);     // BA ↔ BEI, BA + resultative
addRelated('s6', ['s3', 's48']);     // BEI ↔ BA, BEI + result
addRelated('s29', ['s3', 's39']);     // BA + resultative ↔ BA + directional
addRelated('s39', ['s29', 's43']);    // BA + directional ↔ directional compound

// Complement cluster (resultative ↔ potential ↔ degree)
addRelated('s30', ['s34', 's40']);    // result (听懂) ↔ potential (做不出来), result (找到)
addRelated('s34', ['s30', 's44']);    // potential ↔ result, potential (看得懂)
addRelated('s36', ['s37', 's46']);    // degree (高兴得跳) ↔ degree (跑得快), degree+potential
addRelated('s46', ['s36', 's34']);    // degree+potential ↔ degree, potential
addRelated('s47', ['s29', 's36']);    // BA+degree ↔ BA, degree
addRelated('s49', ['s48', 's6']);     // BEI (抓住) ↔ BEI (撕掉), BEI (被打碎)

// Directional complements
addRelated('s42', ['s38', 's43']);    // directional (跑上楼去) ↔ (走进来), (摘下来)
addRelated('s43', ['s42', 's39']);    // directional (摘下来) ↔ (跑上楼去), BA+directional

// Pivotal ↔ Serial verb
addRelated('s32', ['s52', 's58']);    // pivot (让) ↔ pivot (派), serial verb (骑去)
addRelated('s52', ['s32', 's58']);    // pivot (派) ↔ pivot (让), serial verb
addRelated('s58', ['s52', 's59']);    // serial (骑去) ↔ pivot, serial (拿着出门)

// Correlative ↔ Conditional
addRelated('s60', ['s61', 's64']);    // 越…越… ↔ 一…就…, 如果…就…
addRelated('s61', ['s60', 's64']);    // 一…就… ↔ 越…越…, 如果…就…
addRelated('s64', ['s65', 's61']);    // 如果…就… ↔ 只要…就…, 一…就…

// Aspect marker connections
addRelated('s62', ['s59', 's63']);    // 着 (state) ↔ 着 (serial verb concurrent), 过
addRelated('s59', ['s62', 's58']);    // serial+着 ↔ 着 (state), serial (骑去)

// Shì-de ↔ focus constructions
addRelated('s50', ['s51', 's8']);     // 是…的 (time focus) ↔ (place focus), (original shi-de)
addRelated('s51', ['s50', 's23']);    // 是…的 (place focus) ↔ (time focus), (original shi-de 2)

// Separable verbs
addRelated('s54', ['s55', 's12']);    // 分手 ↔ 毕业, 见面
addRelated('s55', ['s54', 's24']);    // 毕业 ↔ 分手, 散步

// 连…都/也 ↔ Rhetorical
addRelated('s66', ['s67', 's56']);    // 连…都 ↔ 连…也, 难道
addRelated('s67', ['s66', 's10']);    // 连…也 ↔ 连…都, 难道…非…不可










