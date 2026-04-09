import type { SentenceData } from '../../types/grammar';

export const beiPassive: SentenceData[] = [
    {
        id: 's6',
        category: 'BEI Passive (被字句)',
        chinese: '那只大象，鼻子被小孩儿拉了一下。',
        pinyin: 'Nà zhī dà xiàng, bí zi bèi xiǎo hái er lā le yī xià.',
        translation: 'As for that elephant, its trunk was pulled by a child.',

        explanation: 'This sentence has a **two-level structure**. The outer Topic **那只大象** ("that elephant") sets the big frame: "as for that elephant..." Then inside the Comment, a narrower topic appears: **鼻子** ("trunk"). The trunk is the one experiencing the event. The verb **被** is an active verb meaning "to undergo" or "to suffer." The trunk "underwent" an entire nested situation: a child pulling it. The tree shows this nesting clearly: the elephant contains the trunk, which undergoes the embedded event.',
        tree: {
            id: 'n6',
            role: 'Sentence',
            children: [
                {
                    id: 'n6-t',
                    role: 'Topic',
                    subRole: 'possessor / context',
                    semanticRole: 'Theme',
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
                            semanticRole: 'Patient',
                            text: { hanzi: '鼻子', pinyin: 'bí zi', translation: 'trunk/nose' }
                        },
                        {
                            id: 'n6-c-p',
                            role: 'Verb Phrase',
                            subRole: 'passive verbal',
                            children: [
                                {
                                    id: 'n6-c-p-bei-hv',
                                    role: 'Head Verb',
                                    subRole: 'passive marker',
                                    text: { hanzi: '被', pinyin: 'bèi', translation: 'suffer / undergo' }
                                },
                                {
                                    id: 'n6-c-p-embedded',
                                    role: 'Embedded Clause',
                                    subRole: 'situation object',
                                    children: [
                                        {
                                            id: 'n6-c-p-bei-agent',
                                            role: 'Subject',
                                            subRole: 'agent',
                                            semanticRole: 'Agent',
                                            text: { hanzi: '小孩儿', pinyin: 'xiǎo hái er', translation: 'child' }
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
                                                    subRole: 'aspect marker',
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
            ]
        }
    },
    {
        id: 's22',
        category: 'BEI Passive (被字句)',
        chinese: '我的钱包被人偷了。',
        pinyin: 'Wǒ de qián bāo bèi rén tōu le.',
        translation: 'My wallet was stolen.',

        explanation: 'The Topic is **我的钱包** ("my wallet"), the thing affected. Instead of a passive marker, **被** is an active verb meaning "to undergo/suffer." The wallet "underwent" a full situation: **人偷了** ("someone stole it"). Notice how the Matryoshka Principle creates a nested clause perfectly within the Comment. 被 does not always name a specific person; here the inner subject is just **人** ("someone").',
        tree: {
            id: 'n22',
            role: 'Sentence',
            children: [
                {
                    id: 'n22-t',
                    role: 'Topic',
                    semanticRole: 'Patient',
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
                            id: 'n22-c-vp-root',
                            role: 'Verb Phrase',
                            children: [
                                {
                                    id: 'n22-c-bei-hv',
                                    role: 'Head Verb',
                                    subRole: 'passive marker',
                                    text: { hanzi: '被', pinyin: 'bèi', translation: 'suffer / undergo' }
                                },
                                {
                                    id: 'n22-c-embedded',
                                    role: 'Embedded Clause',
                                    subRole: 'situation object',
                                    children: [
                                        {
                                            id: 'n22-c-bei-agent',
                                            role: 'Subject',
                                            subRole: 'agent',
                                            semanticRole: 'Agent',
                                            text: { hanzi: '人', pinyin: 'rén', translation: 'someone / a person' }
                                        },
                                        {
                                            id: 'n22-c-vp',
                                            role: 'Verb Phrase',
                                            children: [
                                                {
                                                    id: 'n22-c-hv',
                                                    role: 'Head Verb',
                                                    text: { hanzi: '偷', pinyin: 'tōu', translation: 'steal' }
                                                },
                                                {
                                                    id: 'n22-c-le',
                                                    role: 'Particle',
                                                    subRole: 'aspect marker',
                                                    text: { hanzi: '了', pinyin: 'le', translation: '(done)' }
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
        id: 's48',
        category: 'BEI Passive (被字句)',
        chinese: '那封信被他撕掉了。',
        pinyin: 'Nà fēng xìn bèi tā sī diào le.',
        translation: 'That letter was torn up by him.',
        explanation: '**那封信** ("that letter") is the Topic. The verb **被** actively means "to undergo." The letter underwent the situation of **他撕掉** ("he tore off/away"). The verb **撕** ("tear") is fused with the resultative complement **掉** ("off/away," signaling destruction). Using the internal logic of Mandarin, 被 sentences usually require a result or completion (like 了) in the nested clause because you can only "undergo" an action if it actually produced a result. A bare action without a result sounds incomplete.',
        tree: {
            id: 'n48',
            role: 'Sentence',
            children: [
                {
                    id: 'n48-t',
                    role: 'Topic',
                    semanticRole: 'Patient',
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
                            id: 'n48-vp-root',
                            role: 'Verb Phrase',
                            children: [
                                {
                                    id: 'n48-bei-hv',
                                    role: 'Head Verb',
                                    subRole: 'passive marker',
                                    text: { hanzi: '被', pinyin: 'bèi', translation: 'suffer / undergo' },
                                },
                                {
                                    id: 'n48-embedded',
                                    role: 'Embedded Clause',
                                    subRole: 'situation object',
                                    children: [
                                        {
                                            id: 'n48-agent',
                                            role: 'Subject',
                                            subRole: 'agent (doer)',
                                            semanticRole: 'Agent',
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
                                                    subRole: 'resultative',
                                                    text: { hanzi: '掉', pinyin: 'diào', translation: 'off / away (destroyed)' },
                                                },
                                                {
                                                    id: 'n48-le',
                                                    role: 'Particle',
                                                    subRole: 'aspect marker',
                                                    text: { hanzi: '了', pinyin: 'le', translation: '(done)' },
                                                },
                                            ],
                                        },
                                    ]
                                }
                            ],
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 's49',
        category: 'BEI Passive (被字句)',
        chinese: '小偷被警察抓住了。',
        pinyin: 'Xiǎo tōu bèi jǐng chá zhuā zhù le.',
        translation: 'The thief was caught by the police.',
        explanation: '**小偷** ("thief") is the Topic. The thief undergoes (the verb **被**) the nested situation of the police catching him. Inside that embedded clause, the verb **抓** ("grab/catch") is fused with the resultative complement **住** ("firmly, hold in place"). That **住** is important: it signals the catching stuck. He was not just grabbed momentarily; he was held fast. The pattern V+住 is very common for actions resulting in a fixed state. Experiencing an action+result is the most natural workflow for 被.',
        tree: {
            id: 'n49',
            role: 'Sentence',
            children: [
                {
                    id: 'n49-t',
                    role: 'Topic',
                    text: { hanzi: '小偷', pinyin: 'xiǎo tōu', translation: 'thief' },
                    semanticRole: 'Patient',
                },
                {
                    id: 'n49-c',
                    role: 'Comment',
                    children: [
                        {
                            id: 'n49-vp-root',
                            role: 'Verb Phrase',
                            children: [
                                {
                                    id: 'n49-bei-hv',
                                    role: 'Head Verb',
                                    subRole: 'passive marker',
                                    text: { hanzi: '被', pinyin: 'bèi', translation: 'suffer / undergo' },
                                },
                                {
                                    id: 'n49-embedded',
                                    role: 'Embedded Clause',
                                    subRole: 'situation object',
                                    children: [
                                        {
                                            id: 'n49-agent',
                                            role: 'Subject',
                                            subRole: 'agent (doer)',
                                            semanticRole: 'Agent',
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
                                                    subRole: 'resultative',
                                                    text: { hanzi: '住', pinyin: 'zhù', translation: 'firmly / hold in place' },
                                                },
                                                {
                                                    id: 'n49-le',
                                                    role: 'Particle',
                                                    subRole: 'aspect marker',
                                                    text: { hanzi: '了', pinyin: 'le', translation: '(done)' },
                                                },
                                            ],
                                        },
                                    ]
                                }
                            ],
                        },
                    ],
                },
            ],
        },
    },
    {
        id: 's80',
        category: 'BEI Passive (\u88ab\u5b57\u53e5)',
        chinese: '青色是从蓝草里提取出来的，但是比蓝草还要蓝。',
        pinyin: 'Qīng sè shì cóng lán cǎo lǐ tí qǔ chū lái de, dàn shì bǐ lán cǎo hái yào lán.',
        translation: 'Blue dye is extracted from the indigo plant, yet it is even bluer than indigo.',
        explanation: 'A modern take on 青取之於藍而青於藍 (from Xunzi: "Blue dye comes from the indigo plant, yet surpasses it in color"). Modern Mandarin uses 是...的 plus a directional complement for the extraction, and 比...还要 for the comparison. In the tree, **青色** ("blue color") is the Topic. The first Comment uses **是从...里提取出来的** ("is extracted from..."), where 提取出来 uses a directional complement (出来, "out"). The second clause uses the comparative pattern **比...还要** ("even more than") + **蓝** ("blue").',
        tree: {
            id: 's80-root', role: 'Sentence', children: [
                { id: 's80-t', role: 'Topic', semanticRole: 'Theme', text: { hanzi: '青色', pinyin: 'qīng sè', translation: 'blue dye' } },
                { id: 's80-c1', role: 'Comment', subRole: 'extraction clause', children: [
                    { id: 's80-shi', role: 'Copula', text: { hanzi: '是', pinyin: 'shì', translation: 'is' } },
                    { id: 's80-pp', role: 'Adjunct', subRole: 'location', text: { hanzi: '从蓝草里', pinyin: 'cóng lán cǎo lǐ', translation: 'from the indigo plant' } },
                    { id: 's80-tq', role: 'Head Verb', text: { hanzi: '提取', pinyin: 'tí qǔ', translation: 'extract' } },
                    { id: 's80-cl', role: 'Complement', subRole: 'directional', text: { hanzi: '出来', pinyin: 'chū lái', translation: 'out' } },
                    { id: 's80-de', role: 'Particle', text: { hanzi: '的', pinyin: 'de', translation: '(nominalizer)' } },
                ]},
                { id: 's80-c2', role: 'Comment', subRole: 'comparative clause', children: [
                    { id: 's80-ds', role: 'Adjunct', text: { hanzi: '但是', pinyin: 'dàn shì', translation: 'but' } },
                    { id: 's80-bi', role: 'Preposition', text: { hanzi: '比蓝草', pinyin: 'bǐ lán cǎo', translation: 'compared to indigo' } },
                    { id: 's80-hy', role: 'Adjunct', text: { hanzi: '还要', pinyin: 'hái yào', translation: 'even more' } },
                    { id: 's80-lan', role: 'Head Verb', subRole: 'adjectival', text: { hanzi: '蓝', pinyin: 'lán', translation: 'blue' } },
                ]},
            ]
        }
    },
    {
        id: 's102',
        category: 'BEI Passive (被字句)',
        chinese: '钱包被偷了。',
        pinyin: 'Qián bāo bèi tōu le.',
        translation: 'The wallet was stolen.',
        explanation: '**钱包** ("wallet") is the Topic. The Comment uses the verb **被** ("undergo"), but notice: there is no inner topic (agent) named inside the nested clause. Nobody is specified as the thief. This relies on the Train Metaphor—if the identity of the person doing the stealing isn\'t known or important, that specific "driver" car is left empty in the nested clause. This **agentless 被** train is extremely common in everyday casual speech.',
        tree: {
            id: 's102-n',
            role: 'Sentence',
            children: [
                {
                    id: 's102-t',
                    role: 'Topic',
                    text: { hanzi: '钱包', pinyin: 'qián bāo', translation: 'wallet' },
                    semanticRole: 'Patient',
                },
                {
                    id: 's102-c',
                    role: 'Comment',
                    children: [
                        {
                            id: 's102-bei',
                            role: 'Head Verb',
                            subRole: 'passive marker',
                            text: { hanzi: '被', pinyin: 'bèi', translation: 'to suffer/undergo' }
                        },
                        {
                            id: 's102-nested',
                            role: 'Embedded Clause',
                            children: [
                                {
                                    id: 's102-ghost-agent',
                                    role: 'Topic',
                                    subRole: 'implied topic',
                                    semanticRole: 'Agent',
                                    text: { hanzi: '[有人]', pinyin: 'yǒu rén', translation: 'someone' }
                                },
                                {
                                    id: 's102-inner-c',
                                    role: 'Comment',
                                    children: [
                                        { id: 's102-hv', role: 'Head Verb', text: { hanzi: '偷', pinyin: 'tōu', translation: 'steal' } },
                                        { id: 's102-le', role: 'Particle', subRole: 'aspect marker', text: { hanzi: '了', pinyin: 'le', translation: '(done)' } }
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
        id: 's103',
        category: 'BEI Passive (被字句)',
        chinese: '我的自行车让人骑走了。',
        pinyin: 'Wǒ de zì xíng chē ràng rén qí zǒu le.',
        translation: 'My bicycle was ridden away by someone.',
        explanation: '**我的自行车** ("my bicycle") is the Topic. The Comment uses **让** ("let/allow") instead of 被. This implies the bicycle "allowed" the situation to happen. In spoken Mandarin, treating a situation as something "allowed" rather than "suffered" is far more common for casual passives. The bicycle allowed a full nested event: **人骑走** ("someone riding it away"). Both follow the exact same Matryoshka nesting structure (Topic + Action Verb + Embedded Clause), but **让** creates a more natural, casual tone.',
        tree: {
            id: 's103-n',
            role: 'Sentence',
            children: [
                {
                    id: 's103-t',
                    role: 'Topic',
                    semanticRole: 'Patient',
                    children: [
                        { id: 's103-t-attr', role: 'Attributive', text: { hanzi: '我的', pinyin: 'wǒ de', translation: 'my' } },
                        { id: 's103-t-hn', role: 'Head Noun', text: { hanzi: '自行车', pinyin: 'zì xíng chē', translation: 'bicycle' } }
                    ]
                },
                {
                    id: 's103-c',
                    role: 'Comment',
                    children: [
                        {
                            id: 's103-rang',
                            role: 'Head Verb',
                            subRole: 'passive marker',
                            text: { hanzi: '让', pinyin: 'ràng', translation: 'to let/allow (passive experience)' }
                        },
                        {
                            id: 's103-nested',
                            role: 'Embedded Clause',
                            children: [
                                {
                                    id: 's103-inner-t',
                                    role: 'Topic',
                                    semanticRole: 'Agent',
                                    text: { hanzi: '人', pinyin: 'rén', translation: 'someone/people' }
                                },
                                {
                                    id: 's103-inner-c',
                                    role: 'Comment',
                                    children: [
                                        { id: 's103-hv', role: 'Head Verb', text: { hanzi: '骑', pinyin: 'qí', translation: 'ride' } },
                                        { id: 's103-comp', role: 'Complement', subRole: 'directional', text: { hanzi: '走', pinyin: 'zǒu', translation: 'away' } },
                                        { id: 's103-le', role: 'Particle', subRole: 'aspect marker', text: { hanzi: '了', pinyin: 'le', translation: '(done)' } }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }
];
