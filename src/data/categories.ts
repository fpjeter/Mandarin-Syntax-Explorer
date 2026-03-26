/**
 * Canonical list of sentence categories used in the example databank.
 * `SentenceCategory` is derived from this array so the type automatically
 * stays in sync — no need to update grammar.ts when adding a new category.
 *
 * Reorganised under the Universal Mandarin Sentence Model (UMSM):
 *   • Serial Verbs, Double Topic, Aspect Markers, Discourse Context
 *     → absorbed into Basic Topic–Comment (the foundational pattern)
 *   • Correlative Patterns → merged into Conditional & Correlative
 *   • Even (连…都/也) → merged into Emphasis & Rhetoric
 */
export const SENTENCE_CATEGORIES = [
    'Basic Topic–Comment (主题评论)',
    'BA Construction (把字句)',
    'BEI Passive (被字句)',
    'Comparatives (比较句)',
    'Shì–de Construction (是…的)',
    'Resultative Complements (结果补语)',
    'Directional Complements (趋向补语)',
    'Potential Complements (可能补语)',
    'Degree Complements (程度补语)',
    'Pivotal Constructions (兼语句)',
    'Separable Verbs (离合词)',
    'Conditional & Correlative (条件句)',
    'Emphasis & Rhetoric (强调句)',
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
    'Shì–de Construction (是…的)': 'Use 是…的 to emphasize when, where, or how something happened.',
    'Resultative Complements (结果补语)': 'Add a result word after the verb to show what the action achieved.',
    'Directional Complements (趋向补语)': 'Add 来/去 or a direction word after the verb to show which way something moves.',
    'Potential Complements (可能补语)': 'Insert 得/不 between verb and result to say whether the outcome is possible.',
    'Degree Complements (程度补语)': 'Use verb + 得 + description to say how well or intensely an action was done.',
    'Pivotal Constructions (兼语句)': 'The person you act on becomes the doer of the next action.',
    'Separable Verbs (离合词)': 'Some verbs can split in two, letting other words slip in between.',
    'Conditional & Correlative (条件句)': 'If X then Y, the more X the more Y, and other patterns for logical reasoning.',
    'Emphasis & Rhetoric (强调句)': 'Patterns that add surprise, disbelief, or absolute certainty to a statement.',
};
