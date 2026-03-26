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
    // ── Verb Package components ──────────────────────────────────────────────
    {
        label: '结果补语',
        color: 'text-violet-300 bg-violet-900/40 border-violet-500/50',
        headline: 'Resultative (RVC)',
        detail: 'A suffix fused to the Verb Head showing the result of the action (e.g. 碎 in 打碎 = hit→shatter). Part of the Verb Package.',
        match: (role, subRole) =>
            role === 'Complement' && !!subRole?.includes('resultative'),
    },
    {
        label: '方向补语',
        color: 'text-sky-200 bg-sky-900/40 border-sky-400/50',
        headline: 'Directional (VD)',
        detail: 'A directional suffix (上/下/进/出… + 来/去) fused to the Verb Head, showing which way the action moves. Part of the Verb Package.',
        match: (role, subRole) =>
            role === 'Complement' && !!subRole?.includes('directional'),
    },
    {
        label: '可能补语',
        color: 'text-sky-300 bg-sky-900/40 border-sky-500/50',
        headline: 'Potential (De-Infix)',
        detail: 'The 得/不 toggle inserted into the Verb Package to say whether the outcome can or can\'t happen (e.g. 看不了 = can\'t finish reading).',
        match: (role, subRole) =>
            (role === 'Complement' || role === 'Particle') &&
            !!subRole?.includes('potential'),
    },
    {
        label: '程度补语',
        color: 'text-purple-300 bg-purple-900/40 border-purple-500/50',
        headline: 'Degree complement',
        detail: 'V+得+description: how well or how intensely the action was done. For example, 跑得很快 = runs very fast.',
        match: (role, subRole) =>
            role === 'Complement' && !!subRole?.includes('degree'),
    },
    // ── Morphology ──────────────────────────────────────────────────────────
    {
        label: '离合词',
        color: 'text-amber-300 bg-amber-900/40 border-amber-500/50',
        headline: 'Separable verb',
        detail: 'A V-O compound that can be split by particles or other words (e.g. 见面 → 见过面)',
        match: (role, subRole) =>
            (role === 'Head Verb' || role === 'Verb Phrase' || role === 'VP' || role === 'VP-Chain' || role === 'Action Node') &&
            !!subRole?.includes('separable verb'),
    },
    // ── Architecture markers ────────────────────────────────────────────────
    {
        label: '连动',
        color: 'text-teal-300 bg-teal-900/40 border-teal-500/50',
        headline: 'Serial Verb Chain',
        detail: 'Multiple actions in this verb phrase follow time order (V₁ → V₂ → V₃). This is the serial verb construction, one of the most common patterns in Mandarin.',
        match: (role, subRole) =>
            (role === 'VP' || role === 'VP-Chain' || role === 'Verb Phrase') &&
            !!subRole?.includes('serial'),
    },
];
