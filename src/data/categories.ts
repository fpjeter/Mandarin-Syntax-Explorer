/**
 * Canonical list of sentence categories used in the example databank.
 * `SentenceCategory` is derived from this array so the type automatically
 * stays in sync — no need to update grammar.ts when adding a new category.
 */
export const SENTENCE_CATEGORIES = [
    'Basic Topic–Comment',
    'BA Construction',
    'BEI (Passive)',
    'Pro-drop & Co-reference',
    'Shì–de Construction',
    'Comparatives (Bǐ)',
    'Rhetorical Questions',
    'Separable Verbs (离合词)',
] as const;

export type SentenceCategory = (typeof SENTENCE_CATEGORIES)[number];
