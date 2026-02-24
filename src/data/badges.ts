import type { GrammarRole } from '../types/grammar';

export interface BadgeSpec {
    /** The Chinese label displayed on the badge pill */
    label: string;
    /** Tailwind classes for the badge colour */
    color: string;
    /** Short English name shown in the legend */
    headline: string;
    /** Longer description shown in the legend */
    detail: string;
    /** Returns true when this badge should appear on a given node */
    match: (role: GrammarRole, subRole?: string) => boolean;
}

export const BADGES: BadgeSpec[] = [
    // ── Core constructions ──────────────────────────────────────────────────────
    {
        label: '把字句',
        color: 'text-orange-300 bg-orange-900/40 border-orange-500/50',
        headline: 'BĂ construction',
        detail: "Moves the object before the verb to highlight what's being affected.",
        match: (role, subRole) =>
            role === 'Preposition' &&
            (!!subRole?.includes('bǎ') || !!subRole?.includes('ba-')),
    },
    {
        label: '被字句',
        color: 'text-rose-300 bg-rose-900/40 border-rose-500/50',
        headline: 'BÈI passive',
        detail: 'Marks a passive construction; the subject receives rather than performs the action',
        match: (role, subRole) =>
            role === 'Preposition' && !!subRole?.includes('bei'),
    },
    {
        label: '是…的',
        color: 'text-cyan-300 bg-cyan-900/40 border-cyan-500/50',
        headline: 'Shì-de construction',
        detail: '是 and 的 wrap around the verb to highlight how, when, or where something happened.',
        match: (_role, subRole) =>
            !!subRole?.match(/emphatic (copula|closure)|focus (opener|closer)/),
    },
    {
        label: '比字句',
        color: 'text-yellow-300 bg-yellow-900/40 border-yellow-500/50',
        headline: 'Bǐ comparative',
        detail: 'Uses 比 to compare: "A 比 B + adjective" means A is more [adjective] than B.',
        match: (_role, subRole) =>
            !!subRole?.includes('comparative bǐ') || !!subRole?.includes('adjectival / comparative'),
    },
    // ── Chained / shared-subject VP patterns ───────────────────────────────────
    {
        label: '连动句',
        color: 'text-teal-300 bg-teal-900/40 border-teal-500/50',
        headline: 'Serial verb construction',
        detail: 'Two or more actions share the same subject with no "and" — the second action shows purpose, manner, or result.',
        match: (_role, subRole) =>
            !!subRole?.includes('serial verb'),
    },
    {
        label: '兼语句',
        color: 'text-orange-200 bg-orange-900/40 border-orange-400/50',
        headline: 'Pivotal construction',
        detail: 'One noun serves double duty: object of the first verb and subject of the second (e.g. 请他吃饭 — invite him [to] eat)',
        match: (role) => role === 'Pivot',
    },
    // ── Complement family ───────────────────────────────────────────────────────
    {
        label: '结果补语',
        color: 'text-violet-300 bg-violet-900/40 border-violet-500/50',
        headline: 'Resultative complement',
        detail: 'Expresses the result achieved by the verb (e.g. 碎 in 打碎 = hit→shatter)',
        match: (role, subRole) =>
            role === 'Complement' && !!subRole?.includes('resultative'),
    },
    {
        label: '方向补语',
        color: 'text-sky-200 bg-sky-900/40 border-sky-400/50',
        headline: 'Directional complement',
        detail: 'Verb + direction word (上/下/进/出…) + 来/去 — shows which way something moves and whether it\'s toward or away from the speaker.',
        match: (role, subRole) =>
            role === 'Complement' && !!subRole?.includes('directional'),
    },
    {
        label: '可能补语',
        color: 'text-sky-300 bg-sky-900/40 border-sky-500/50',
        headline: 'Potential complement',
        detail: 'V + 得/不 + result — says whether the outcome can or can\'t happen (e.g. 看不了 = can\'t finish reading).',
        match: (role, subRole) =>
            (role === 'Complement' || role === 'Particle') &&
            !!subRole?.includes('potential'),
    },
    {
        label: '程度补语',
        color: 'text-purple-300 bg-purple-900/40 border-purple-500/50',
        headline: 'Degree complement',
        detail: 'V+得+description — describes the manner, extent, or consequence of an action (e.g. 跑得很快 = runs very fast)',
        match: (role, subRole) =>
            role === 'Complement' && !!subRole?.includes('degree'),
    },
    // ── Morphology ──────────────────────────────────────────────────────────────
    {
        label: '离合词',
        color: 'text-amber-300 bg-amber-900/40 border-amber-500/50',
        headline: 'Separable verb',
        detail: 'A V-O compound that can be split by particles or other words (e.g. 见面 → 见过面)',
        match: (role, subRole) =>
            (role === 'Head Verb' || role === 'Verb Phrase') &&
            !!subRole?.includes('separable verb'),
    },
    // ── Advanced emphasis ───────────────────────────────────────────────────────
    {
        label: '双重否定',
        color: 'text-indigo-300 bg-indigo-900/40 border-indigo-500/50',
        headline: 'Double negation',
        detail: '非…不可 = "absolutely must"; two negatives combine to express strong necessity',
        match: (_role, subRole) => !!subRole?.includes('double-negation'),
    },
    {
        label: '连…都',
        color: 'text-lime-300 bg-lime-900/40 border-lime-500/50',
        headline: 'Emphatic bracket',
        detail: '连 (even) and 都 (all) surround a word to stress "even this is true."',
        match: (_role, subRole) => !!subRole?.includes('even-marker'),
    },
];
