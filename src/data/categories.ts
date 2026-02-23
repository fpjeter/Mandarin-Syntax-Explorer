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
    'Double Topic / Embedded Comment',
    'Separable Verbs (离合词)',
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
    'Pro-drop & Co-reference': 'Omit obvious subjects — Mandarin lets context do the work.',
    'Shì–de Construction': 'Use 是…的 to emphasize when, where, or how something happened.',
    'Comparatives (Bǐ)': 'Compare two things with 比 (more than) or 跟…一样 (equally).',
    'Rhetorical Questions': 'Use 难道 or 非…不可 to express disbelief or strong necessity.',
    'Separable Verbs (离合词)': 'Verbs that split apart to let aspect markers and complements slot in.',
};
