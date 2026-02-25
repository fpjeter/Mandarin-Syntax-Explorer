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
];
