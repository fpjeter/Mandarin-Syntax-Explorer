/**
 * Canonical list of sentence categories used in the example databank.
 * `SentenceCategory` is derived from this array so the type automatically
 * stays in sync — no need to update grammar.ts when adding a new category.
 */
export const SENTENCE_CATEGORIES = [
    'Basic Topic–Comment (主题评论)',
    'BA Construction (把字句)',
    'BEI Passive (被字句)',
    'Comparatives (比较句)',
    'Correlative Patterns (越…越…)',
    'Shì–de Construction (是…的)',
    'Resultative Complements (结果补语)',
    'Directional Complements (趋向补语)',
    'Potential Complements (可能补语)',
    'Degree Complements (程度补语)',
    'Aspect Markers (着/过/了)',
    'Pivotal Constructions (兼语句)',
    'Serial Verb Constructions (连动句)',
    'Separable Verbs (离合词)',
    'Double Topic (双主题)',
    'Conditional Sentences (如果…就…)',
    'Rhetorical Questions (反问句)',
    'Even (连…都/也)',
    'Discourse Context (跨句语境)',
] as const;

export type SentenceCategory = (typeof SENTENCE_CATEGORIES)[number];

/**
 * One-line descriptions shown in the sidebar accordion for each category.
 */
export const CATEGORY_DESCRIPTIONS: Record<SentenceCategory, string> = {
    'Basic Topic–Comment (主题评论)': 'Name what you\'re talking about, then say something about it.',
    'BA Construction (把字句)': 'Use 把 to move the object before the verb, showing it\'s being acted on.',
    'BEI Passive (被字句)': 'Flip the sentence so the receiver of the action comes first, using 被.',
    'Comparatives (比较句)': 'Compare two things with 比 (more than) or 跟…一样 (equally).',
    'Correlative Patterns (越…越…)': 'Pair two clauses to express "the more X, the more Y" or "as soon as X, then Y."',
    'Shì–de Construction (是…的)': 'Use 是…的 to emphasize when, where, or how something happened.',
    'Resultative Complements (结果补语)': 'Add a result word after the verb to show what the action achieved.',
    'Directional Complements (趋向补语)': 'Add 来/去 or a direction word after the verb to show which way something moves.',
    'Potential Complements (可能补语)': 'Insert 得/不 between verb and result to say whether the outcome is possible.',
    'Degree Complements (程度补语)': 'Use verb + 得 + description to say how well or intensely an action was done.',
    'Aspect Markers (着/过/了)': 'Mark ongoing state (着), past experience (过), or completed action (了) on the verb.',
    'Pivotal Constructions (兼语句)': 'The person you act on becomes the doer of the next action.',
    'Serial Verb Constructions (连动句)': 'String multiple actions together under one subject — no "and" needed.',
    'Separable Verbs (离合词)': 'Some verbs can split in two, letting other words slip in between.',
    'Double Topic (双主题)': 'Start with the big picture, then zoom in to talk about a specific part.',
    'Conditional Sentences (如果…就…)': 'Use if…then patterns (如果…就…, 只要…就…) for conditional reasoning.',
    'Rhetorical Questions (反问句)': 'Use 难道 or 非…不可 to express disbelief or strong necessity.',
    'Even (连…都/也)': 'Use 连…都 or 连…也 to express "even X…" for emphasis or surprise.',
    'Discourse Context (跨句语境)': 'When context from a previous sentence lets Mandarin drop subjects entirely.',
};
