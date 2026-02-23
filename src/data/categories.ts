/**
 * Canonical list of sentence categories used in the example databank.
 * `SentenceCategory` is derived from this array so the type automatically
 * stays in sync — no need to update grammar.ts when adding a new category.
 */
export const SENTENCE_CATEGORIES = [
    'Basic Topic–Comment',
    'BA Construction',
    'BEI (Passive)',
    'Comparatives (Bǐ)',
    'Shì–de Construction',
    'Resultative Complements',
    'Potential Complements',
    'Degree Complements',
    'Pivotal Constructions',
    'Separable Verbs (离合词)',
    'Double Topic / Embedded Comment',
    'Rhetorical Questions',
    'Pro-drop & Co-reference',
] as const;

export type SentenceCategory = (typeof SENTENCE_CATEGORIES)[number];

/**
 * One-line descriptions shown in the sidebar accordion for each category.
 */
export const CATEGORY_DESCRIPTIONS: Record<SentenceCategory, string> = {
    'Basic Topic–Comment': 'Name what you\'re talking about, then say something about it.',
    'Double Topic / Embedded Comment': 'Whole–part nesting: set a frame, then make statements about its pieces.',
    'BA Construction': 'Spotlight the object before the verb using 把 to show what gets affected.',
    'BEI (Passive)': 'Foreground what was acted upon; use 被 to mark who did it.',
    'Resultative Complements': 'Stack a result morpheme onto the verb to show what the action achieved.',
    'Potential Complements': 'Insert 得/不 between verb and result to say whether the outcome is possible.',
    'Degree Complements': 'Use verb + 得 + description to say how well or intensely an action was done.',
    'Pivotal Constructions': 'One noun serves as object of the first verb and subject of the second.',
    'Pro-drop & Co-reference': 'Omit obvious subjects — Mandarin lets context do the work.',
    'Shì–de Construction': 'Use 是…的 to emphasize when, where, or how something happened.',
    'Comparatives (Bǐ)': 'Compare two things with 比 (more than) or 跟…一样 (equally).',
    'Rhetorical Questions': 'Use 难道 or 非…不可 to express disbelief or strong necessity.',
    'Separable Verbs (离合词)': 'Verbs that split apart to let aspect markers and complements slot in.',
};
