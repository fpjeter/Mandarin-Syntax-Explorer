import type { BadgeSpec } from './badges';

/**
 * Badge definitions for Classical Chinese (文言文) mode.
 *
 * These target the subRoles used in classicalSentences.ts: classical
 * function words like 者, 所, 而, 非, 勿, 於, 焉, 之 that have no
 * counterpart in the modern badge set.
 */
export const CLASSICAL_BADGES: BadgeSpec[] = [
    // ── Nominalizers ────────────────────────────────────────────────────────
    {
        label: '者 名詞化',
        color: 'text-amber-200 bg-amber-900/40 border-amber-500/50',
        headline: '者-nominalizer',
        detail: 'Turns a verb phrase into "the one who [verbs]." For example, 知之者 = one who knows it.',
        match: (_role, subRole) =>
            subRole === 'nominalizer' || subRole === 'definitional nominalizer',
    },
    {
        label: '所 名詞化',
        color: 'text-yellow-200 bg-yellow-900/40 border-yellow-500/50',
        headline: '所-nominalizer',
        detail: 'Turns a verb into "that which is [verbed]." For example, 所不欲 = that which (one) does not desire.',
        match: (_role, subRole) =>
            subRole === 'object nominalizer' || subRole === 'means nominalizer',
    },
    // ── Connectives ─────────────────────────────────────────────────────────
    {
        label: '而 連詞',
        color: 'text-sky-200 bg-sky-900/40 border-sky-500/50',
        headline: '而-connective',
        detail: 'Chains actions sequentially, adds contrast, or marks concession. The classical all-purpose conjunction.',
        match: (_role, subRole) =>
            !!subRole && (
                subRole.includes('sequential connective') ||
                subRole.includes('contrastive connective') ||
                subRole.includes('concessive connective')
            ),
    },
    // ── Negation ────────────────────────────────────────────────────────────
    {
        label: '非 否定',
        color: 'text-rose-200 bg-rose-900/40 border-rose-500/50',
        headline: 'Negative copula (非)',
        detail: '"Is not." Negates identity or classification. Stronger than 不, it denies the very nature of the subject.',
        match: (_role, subRole) => subRole === 'negative copula',
    },
    {
        label: '勿 禁止',
        color: 'text-red-200 bg-red-900/40 border-red-500/50',
        headline: 'Prohibitive negation (勿)',
        detail: '"Do not!" A formal prohibition, more imperative than 不. Used in commands and moral injunctions.',
        match: (_role, subRole) => subRole === 'prohibitive negation',
    },
    // ── Coverbs & Prepositions ──────────────────────────────────────────────
    {
        label: '於 介詞',
        color: 'text-teal-200 bg-teal-900/40 border-teal-500/50',
        headline: 'Coverb (於)',
        detail: 'Marks location, source, direction, or comparison. The classical equivalent of 在, 从, and 比 combined.',
        match: (_role, subRole) =>
            !!subRole && (
                subRole.includes('locative coverb') ||
                subRole.includes('source coverb') ||
                subRole.includes('causal coverb')
            ),
    },
    {
        label: '焉 融合',
        color: 'text-emerald-200 bg-emerald-900/40 border-emerald-500/50',
        headline: 'Fused preposition + pronoun (焉)',
        detail: '焉 packs a preposition and a pronoun into one character (焉 ≈ 於 + 之 = "in/among them"). It is one of the most compact words in classical Chinese.',
        match: (_role, subRole) =>
            !!subRole && subRole.includes('fusional coverb'),
    },
    // ── 之 ──────────────────────────────────────────────────────────────────
    {
        label: '之 助詞',
        color: 'text-orange-200 bg-orange-900/40 border-orange-500/50',
        headline: 'Particle (之)',
        detail: 'As a genitive marker: "of / \'s". As a pronoun: "it / him / them". The most versatile classical particle.',
        match: (_role, subRole) =>
            subRole === 'genitive marker' || subRole === 'anaphoric pronoun',
    },
];
