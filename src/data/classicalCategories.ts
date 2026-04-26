/**
 * Categories for the Classical Chinese explorer.
 * Mirrors the structure of categories.ts for consistency and scalability.
 */
import type { BilingualString } from '../i18n/strings';

export const CLASSICAL_CATEGORIES = [
    'Rhetorical Patterns (反問)',
    'Nominalizers (者/所)',
    'Classical Negation (非/勿/莫)',
    'Coverbs & Prepositions (於/以/焉)',
    'Sequential Actions (而)',
    'Genitive & Modification (之)',
    'Classical Conditionals (若/苟/則)',
    'Classical Causatives (使/令)',
    'Object Fronting (賓語前置)',
    'Topic-Comment (主題)',
    'Classical Passive (為…所…)',
] as const;

export type ClassicalCategory = (typeof CLASSICAL_CATEGORIES)[number];

/**
 * One-line descriptions for each classical category, shown in the sidebar accordion.
 * Values are BilingualString — zh fields are filled in by the Educational Publisher.
 */
export const CLASSICAL_CATEGORY_DESCRIPTIONS: Record<ClassicalCategory, BilingualString> = {
    'Rhetorical Patterns (反問)': {
        en: 'Classical questions that assert rather than ask, using particles like 乎 and frames like 不亦…乎.',
        zh: '用"乎""不亦……乎"等虚词构成的反问，重在断言而非提问。',
    },
    'Nominalizers (者/所)': {
        en: 'Turn verbs into nouns: 者 creates "the one who..." and 所 creates "that which..."',
        zh: '把动词变成名词："者"="……的人"，"所"="所……的事物"。',
    },
    'Classical Negation (非/勿/莫)': {
        en: 'Three flavors of negation: 非 ("is not"), 勿 ("do not!"), and 莫 ("nobody / nothing").',
        zh: '三种否定色彩：非（"不是"）、勿（"不要！"）、莫（"没有人/没有什么"）。',
    },
    'Coverbs & Prepositions (於/以/焉)': {
        en: 'Classical words for location, instrument, and direction. 焉 is especially fun: it packs a preposition and pronoun into one character.',
        zh: '表示地点、工具和方向的文言词。"焉"尤其有趣：一个字包含了介词和代词。',
    },
    'Sequential Actions (而)': {
        en: 'The classical connective 而 chains actions ("and then"), marks contrast ("but"), or signals consequence ("and so").',
        zh: '"而"是万能连词：顺承（"然后"）、转折（"但是"）或因果（"于是"）。',
    },
    'Genitive & Modification (之)': {
        en: 'The classical equivalent of 的: 之 links nouns ("X 之 Y" = "X\'s Y") and creates modifier structures.',
        zh: '"之"是文言版的"的"：连接名词（"X之Y"="X的Y"），构建修饰结构。',
    },
    'Classical Conditionals (若/苟/則)': {
        en: 'If-then logic in classical Chinese. 若/如/苟 open the condition; 則 marks the consequence. Includes implicit conditionals where the logic is juxtaposed without an explicit marker.',
        zh: '文言假设句：「若/如/苟」引导条件，「则」标明结果。也包含无显式标记、靠语序表达的隐性假设句。',
    },
    'Classical Causatives (使/令)': {
        en: 'Pivotal constructions where one person causes another to act. 使 and 令 are explicit markers; classical Chinese also expresses causation implicitly through transitivity shift.',
        zh: '使役兼语句：「使」「令」显式表达致使，古汉语也常用动词的使动用法隐性表达。',
    },
    'Object Fronting (賓語前置)': {
        en: 'Classical word order where the object moves before the verb — the opposite of modern Chinese. Common with interrogative words (何/安) and the demonstrative 是.',
        zh: '宾语前置是文言特有语序：宾语移至动词前，常见于疑问词（何/安）和「是」字结构。',
    },
    'Topic-Comment (主題)': {
        en: 'Classical predication without a copula. A topic is stated, then a bare adjective or nominal comment follows — no 是, no 很, no linking verb needed.',
        zh: '文言判断句：话题在前，直接以形容词或名词作谓语，无需「是」或「很」。',
    },
    'Classical Passive (為…所…)': {
        en: 'The classical passive: 為 introduces the agent, 所 nominalizes the verb. Together they form the ancestor of modern 被.',
        zh: '文言被动句：「为」引出施事，「所」名词化动词，合为「为……所……」，是现代「被」字句的前身。',
    },
};
