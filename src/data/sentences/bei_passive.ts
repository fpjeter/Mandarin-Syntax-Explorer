import type { SentenceData } from '../../types/grammar';

export const beiPassive: SentenceData[] = [
    {
        id: 's6',
        category: 'BEI Passive (被字句)',
        chinese: '那只大象，鼻子被小孩儿拉了一下。',
        pinyin: 'Nà zhī dà xiàng, bí zi bèi xiǎo hái er lā le yī xià.',
        translation: 'As for that elephant, its trunk was pulled by a child.',

        explanation: 'This sentence has a **two-level structure**. The outer Topic sets the stage with a big frame: *as for that elephant...* Then inside the Comment, a narrower subject appears: **鼻子** ("trunk"). The trunk is then described using **被** ("by"), which marks a passive construction: something was done *to* the trunk. So the elephant frames the scene, and the trunk is what actually acts as the subject of the passive event. English would say it more directly: "A child pulled the elephant\'s trunk." Mandarin works from the outside in.',
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
                            role: 'Verb Phrase',
                            subRole: 'passive verbal',
                            children: [
                                {
                                    id: 'n6-c-p-bei-hv',
                                    role: 'Head Verb',
                                    subRole: 'passive / undergo',
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
            ]
        }
    },
    {
        id: 's22',
        category: 'BEI Passive (被字句)',
        chinese: '我的钱包被人偷了。',
        pinyin: 'Wǒ de qián bāo bèi rén tōu le.',
        translation: 'My wallet was stolen.',

        explanation: 'The Topic is **我的钱包** ("my wallet"), the thing that was acted upon. Inside the Comment, **被** (bèi) introduces the agent: **人** (someone, literally "a person"). Then comes the verb **偷** ("steal") and completion marker **了**. This is a simpler, more everyday form of the BEI passive. Notice that 被 does not always name a specific agent; here it just says "by someone." The BEI frame always flips normal word order: instead of "person stole wallet," the wallet is foregrounded as Topic, and 被 marks that it is the *receiver* of the action.',
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
                            id: 'n22-c-vp-root',
                            role: 'Verb Phrase',
                            children: [
                                {
                                    id: 'n22-c-bei-hv',
                                    role: 'Head Verb',
                                    subRole: 'passive / undergo',
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
                                                    subRole: 'completion',
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
        explanation: '**那封信** ("that letter") is the Topic, the thing affected. **被** introduces the agent: **他** ("he/him"). The verb **撕** ("tear") is followed by the resultative complement **掉** ("off / away, signals destruction or removal"). BEI sentences almost always require a complement or 了 after the verb; bare *被+agent+verb* sounds incomplete. The **掉** tells you the letter didn\'t just get torn; it was torn *to pieces* or *away*. Compare: 撕破 (torn broken), 撕碎 (torn to shreds); each complement shades the result differently.',
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
                            id: 'n48-vp-root',
                            role: 'Verb Phrase',
                            children: [
                                {
                                    id: 'n48-bei-hv',
                                    role: 'Head Verb',
                                    subRole: 'passive / undergo',
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
        explanation: '**小偷** ("thief") is the Topic, the person affected. **被** marks the passive; **警察** ("police") is the agent. The verb **抓** ("grab/catch") is followed by the resultative complement **住** ("firmly / hold in place"). The **住** is key: it signals that the catching *stuck*: the thief didn\'t just get grabbed momentarily, he was held fast. The pattern V+住 is very common for actions that result in a fixed state: 记住 (remember firmly), 站住 (stand still / halt), 拿住 (hold onto). BEI + resultative is the most natural BEI pattern in speech.',
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
                            id: 'n49-vp-root',
                            role: 'Verb Phrase',
                            children: [
                                {
                                    id: 'n49-bei-hv',
                                    role: 'Head Verb',
                                    subRole: 'passive / undergo',
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
        explanation: 'This is a modern version of 青取之於藍而青於藍 (from Xunzi: "Blue dye comes from the indigo plant, yet surpasses it in color"). Modern Mandarin uses 是...的 plus a directional complement to express the extraction, and 比...还要 for the comparison. In the tree, 青色 ("blue color") is the Topic. The first Comment uses 是从...里提取出来的 ("is extracted from..."), where 提取出来 uses a directional complement (出来, "out"). The second clause uses the comparative pattern 比...还要 ("even more than") + 蓝 ("blue").',
        tree: {
            id: 's80-root', role: 'Sentence', children: [
                { id: 's80-t', role: 'Topic', text: { hanzi: '青色', pinyin: 'qīng sè', translation: 'blue dye' } },
                { id: 's80-c1', role: 'Comment', subRole: 'extraction clause', children: [
                    { id: 's80-shi', role: 'Copula', text: { hanzi: '是', pinyin: 'shì', translation: 'is' } },
                    { id: 's80-pp', role: 'Adjunct', subRole: 'source', text: { hanzi: '从蓝草里', pinyin: 'cóng lán cǎo lǐ', translation: 'from the indigo plant' } },
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
    }
];
