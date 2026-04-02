/**
 * Categories for the Classical Chinese explorer.
 * Mirrors the structure of categories.ts for consistency and scalability.
 */
export const CLASSICAL_CATEGORIES = [
    'Rhetorical Patterns (反問)',
    'Nominalizers (者/所)',
    'Classical Negation (非/勿/莫)',
    'Coverbs & Prepositions (於/以/焉)',
    'Sequential Actions (而)',
    'Genitive & Modification (之)',
] as const;

export type ClassicalCategory = (typeof CLASSICAL_CATEGORIES)[number];

/**
 * One-line descriptions for each classical category, shown in the sidebar accordion.
 */
export const CLASSICAL_CATEGORY_DESCRIPTIONS: Record<ClassicalCategory, string> = {
    'Rhetorical Patterns (反問)': 'Classical questions that assert rather than ask, using particles like 乎 and frames like 不亦…乎.',
    'Nominalizers (者/所)': 'Turn verbs into nouns: 者 creates "the one who..." and 所 creates "that which..."',
    'Classical Negation (非/勿/莫)': 'Three flavors of negation: 非 ("is not"), 勿 ("do not!"), and 莫 ("nobody / nothing").',
    'Coverbs & Prepositions (於/以/焉)': 'Classical words for location, instrument, and direction. 焉 is especially fun: it packs a preposition and pronoun into one character.',
    'Sequential Actions (而)': 'The classical connective 而 chains actions ("and then"), marks contrast ("but"), or signals consequence ("and so").',
    'Genitive & Modification (之)': 'The classical equivalent of 的: 之 links nouns ("X 之 Y" = "X\'s Y") and creates modifier structures.',
};
