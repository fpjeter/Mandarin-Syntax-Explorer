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
    'Correlative Patterns (越…越…)',
    'Shì–de Construction',
    'Resultative Complements',
    'Directional Complements',
    'Potential Complements',
    'Degree Complements',
    'Aspect Markers (着/过/了)',
    'Pivotal Constructions',
    'Serial Verb Constructions (连动句)',
    'Separable Verbs (离合词)',
    'Double Topic / Embedded Comment',
    'Conditional Sentences (如果…就…)',
    'Rhetorical Questions',
    '连…都/也 ("even X")',
    'Discourse Context (跨句语境)',
] as const;

export type SentenceCategory = (typeof SENTENCE_CATEGORIES)[number];

/**
 * One-line descriptions shown in the sidebar accordion for each category.
 */
export const CATEGORY_DESCRIPTIONS: Record<SentenceCategory, string> = {
    'Basic Topic–Comment': 'Name what you\'re talking about, then say something about it.',
    'BA Construction': 'Spotlight the object before the verb using 把 to show what gets affected.',
    'BEI (Passive)': 'Foreground what was acted upon; use 被 to mark who did it.',
    'Comparatives (Bǐ)': 'Compare two things with 比 (more than) or 跟…一样 (equally).',
    'Correlative Patterns (越…越…)': 'Pair two clauses to express "the more X, the more Y" or "as soon as X, then Y."',
    'Shì–de Construction': 'Use 是…的 to emphasize when, where, or how something happened.',
    'Resultative Complements': 'Stack a result morpheme onto the verb to show what the action achieved.',
    'Directional Complements': 'Add 来/去 (± direction verb) after the main verb to show the path of movement.',
    'Potential Complements': 'Insert 得/不 between verb and result to say whether the outcome is possible.',
    'Degree Complements': 'Use verb + 得 + description to say how well or intensely an action was done.',
    'Aspect Markers (着/过/了)': 'Mark ongoing state (着), past experience (过), or completed action (了) on the verb.',
    'Pivotal Constructions': 'One noun serves as object of the first verb and subject of the second.',
    'Serial Verb Constructions (连动句)': 'Chain two or more VPs sharing the same subject — no conjunction needed.',
    'Separable Verbs (离合词)': 'Verbs that split apart to let aspect markers and complements slot in.',
    'Double Topic / Embedded Comment': 'Whole–part nesting: set a frame, then make statements about its pieces.',
    'Conditional Sentences (如果…就…)': 'Use if…then patterns (如果…就…, 只要…就…) for conditional reasoning.',
    'Rhetorical Questions': 'Use 难道 or 非…不可 to express disbelief or strong necessity.',
    '连…都/也 ("even X")': 'Use 连…都 or 连…也 to express "even X…" for emphasis or surprise.',
    'Discourse Context (跨句语境)': 'When context from a previous sentence lets Mandarin drop subjects entirely.',
};
