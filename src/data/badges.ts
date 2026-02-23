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
    {
        label: '离合词',
        color: 'text-amber-300 bg-amber-900/40 border-amber-500/50',
        headline: 'Separable verb',
        detail: 'A V-O compound that can be split by particles or other words (e.g. 见面 → 见过面)',
        match: (role, subRole) =>
            (role === 'Head Verb' || role === 'Verb Phrase') &&
            !!subRole?.includes('separable verb'),
    },
    {
        label: '结果补语',
        color: 'text-violet-300 bg-violet-900/40 border-violet-500/50',
        headline: 'Resultative complement',
        detail: 'Expresses the result achieved by the verb (e.g. 碎 in 打碎 = hit→shatter)',
        match: (role, subRole) =>
            role === 'Complement' && !!subRole?.includes('resultative'),
    },
    {
        label: '可能补语',
        color: 'text-sky-300 bg-sky-900/40 border-sky-500/50',
        headline: 'Potential complement',
        detail: 'V+得/不+RC — expresses ability or possibility (e.g. 看不了 = unable to finish reading)',
        match: (role, subRole) =>
            (role === 'Complement' || role === 'Particle') &&
            !!subRole?.includes('potential'),
    },
    {
        label: '把字句',
        color: 'text-orange-300 bg-orange-900/40 border-orange-500/50',
        headline: 'BĂ construction',
        detail: "Fronts the object before the verb to emphasise the action's effect on it",
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
        detail: '是 and 的 bracket the verb phrase to focus on how, when, or where a past event happened',
        match: (_role, subRole) =>
            subRole === 'emphatic copula' ||
            subRole === 'emphatic copula (是…的)' ||
            subRole === 'emphatic closure',
    },
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
        detail: '连 (even) and 都 (all/even) surround the focused element to stress that it holds without exception',
        match: (_role, subRole) => !!subRole?.includes('lián'),
    },
];
