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
    'Rhetorical Patterns (反問)': 'Use particles like 乎 and frames like 不亦…乎 to pose questions that assert rather than ask.',
    'Nominalizers (者/所)': 'Turn verbs into nouns with 者 (the one who…) and 所 (that which…) to build abstract subjects.',
    'Classical Negation (非/勿/莫)': 'Negate predicates with 非 (is not), prohibit actions with 勿 (do not), and deny existence with 莫.',
    'Coverbs & Prepositions (於/以/焉)': 'Mark location, source, instrument, or direction with 於, 以, and the fusional coverb 焉.',
    'Sequential Actions (而)': 'Chain actions or contrasts together with 而, the classical connective that replaces conjunctions.',
    'Genitive & Modification (之)': 'Link nouns with 之 (of/\'s) and create modifier-head structures that mirror English possessives.',
};
