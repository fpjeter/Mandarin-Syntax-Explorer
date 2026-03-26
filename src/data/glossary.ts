import type { GrammarRole } from '../types/grammar';

/**
 * Plain-English definitions for every grammar role, written for
 * Mandarin learners with no linguistics background.
 * Updated for the Universal Mandarin Sentence Model (UMSM).
 */
export const glossary: Record<GrammarRole, { headline: string; detail: string }> = {
    // ── Architecture ──────────────────────────────────────────────────────────
    Sentence: {
        headline: 'The whole sentence',
        detail: 'The complete statement. Every other part in the tree lives inside here. Even the simplest sentence has the same shape: a topic (what you\'re talking about) plus a comment (what you say about it).',
    },
    Topic: {
        headline: 'What the sentence is about',
        detail:
            'Mandarin almost always starts by naming what you\'re talking about: the Topic. Think of it as saying "As for X..." before anything else. Once the topic is set, the rest of the sentence talks about it without repeating it.',
    },
    Comment: {
        headline: 'What is said about the topic',
        detail:
            'After the topic is set, the Comment says something about it. The Comment can contain its own subject (often dropped) and one or more actions. In complex sentences, Comments can nest inside each other.',
    },
    Subject: {
        headline: 'Older term — see Topic instead',
        detail:
            'In this model, we call the subject a "Topic" because Mandarin grammar is topic-driven. When the subject is dropped (very common), the tree shows a ghost node to mark where it would be.',
    },
    VP: {
        headline: 'Verb phrase — one action or a chain of actions',
        detail:
            'A container for the action(s) in a sentence. A simple VP has one verb and its object. A compound VP chains several actions in time order (a serial verb construction). In the tree, chained actions sit side by side.',
    },
    'VP-Chain': {
        headline: 'Older term — see VP instead',
        detail:
            'In the current model, a VP covers both single actions and multi-action chains. You may see this label in older data.',
    },
    'Action Node': {
        headline: 'Older term — see VP instead',
        detail:
            'A single action unit. In the current model this is labeled VP (shown in emerald in the tree). You may see this label in older data.',
    },
    'Verb Package': {
        headline: 'A verb and everything attached to it',
        detail:
            'The full verb unit: the main verb, plus any result (打碎), direction (走进来), or aspect marker (了/着/过) attached to it. Insert 得 or 不 between the verb and its result to say whether the outcome can or cannot happen.',
    },
    // ── Existing roles ────────────────────────────────────────────────────────
    'Noun Phrase': {
        headline: 'A noun and its description',
        detail:
            'A group of words built around a noun. For example, 那只大象 ("that elephant") is a noun phrase: 那只 describes 大象.',
    },
    Object: {
        headline: 'What receives the action',
        detail:
            'What the verb acts on. In "她看书", 书 (book) is the object.',
    },
    Adjunct: {
        headline: 'Scene-setting word or phrase before the verb',
        detail:
            'Anything that appears before the verb to set the scene: when (昨天), where (在图书馆), how (快速地), or with what (用手机). Some adjuncts apply to the whole sentence; others apply to just one action.',
    },
    Coverb: {
        headline: 'A linking word like 把, 被, 在, or 用',
        detail:
            'Words that work like prepositions in English but originally come from verbs. 把 (take/handle) marks the object being affected. 被 (suffer) marks the passive. 在 (be at) marks location. 用 (use) marks the tool.',
    },
    Particle: {
        headline: 'A small grammatical word',
        detail:
            'Short words added to sentences or verbs to show tense, mood, or grammatical role. E.g. 了 (completion), 的 (possession), 吗 (yes/no question), 过 (past experience). In Verb Packages, aspect particles (了/着/过) are suffixes.',
    },
    Adjective: {
        headline: 'A describing word',
        detail:
            'Describes a quality of a noun, like 大 (big), 简单 (simple), 高 (tall).',
    },
    Noun: {
        headline: 'A person, place, or thing',
        detail:
            'The name of something. E.g. 书 (book), 图书馆 (library), 大象 (elephant).',
    },
    Pronoun: {
        headline: 'A stand-in for a noun',
        detail:
            'Words like 我 (I/me), 你 (you), 她 (she/her), 我们 (we/us) that refer to people without naming them.',
    },
    Attributive: {
        headline: 'A word or phrase modifying a noun',
        detail:
            'In Mandarin, descriptors always come BEFORE the noun and are usually followed by 的. E.g. 那只 ("that [measure word]") before 大象.',
    },
    Complement: {
        headline: 'Post-verbal result, direction, or degree',
        detail:
            'Inside a Verb Package, the Complement comes after the Verb Head to express what the action achieved (resultative), which direction it went (directional), whether it\'s possible (potential), or how intensely it was done (degree).',
    },
    'Head Noun': {
        headline: 'The main noun in a noun phrase',
        detail:
            'The core noun that all the other descriptive words in the phrase are modifying.',
    },
    'Head Verb': {
        headline: 'The core verb in a Verb Package',
        detail:
            'The central verb around which complements, aspect markers, and objects are grouped. This is the heart of the VP (Primitive).',
    },
    'Measure Word': {
        headline: 'A counting or classifying word',
        detail:
            'Mandarin requires a special word between a number/demonstrative and a noun. E.g. 只 for animals (那只猫), 个 for general things, 座 for mountains.',
    },
    'Verb Morpheme': {
        headline: 'The verb half of a separable verb (离合词)',
        detail:
            'The action half of a separable verb (离合词). E.g. 见 in 见面, 睡 in 睡觉, 散 in 散步. When the verb splits, particles and other words insert between this half and the object half.',
    },
    'Object Morpheme': {
        headline: 'The object half of a separable verb (离合词)',
        detail:
            'The noun half of a separable verb (离合词), the "thing" the verb acts on internally. E.g. 面 in 见面, 觉 in 睡觉, 步 in 散步. When the verb splits, this half moves to the end.',
    },
    Pivot: {
        headline: 'A noun that plays two roles at once',
        detail:
            'In a pivotal construction (兼语句), one noun is simultaneously the object of one verb and the subject of the next. For example, in 让学生回答, 学生 is both who the teacher acts on and who does the answering.',
    },
    Copula: {
        headline: 'The linking verb "to be"',
        detail:
            'The linking verb 是 ("to be"). In the 是…的 pattern, 是 opens the focus and 的 closes it, like saying "it WAS [yesterday] that…"',
    },
    // ── Legacy roles (backward compat) ────────────────────────────────────────
    'Verb Phrase': {
        headline: 'Older term — see VP',
        detail:
            'In the current model, this is labeled VP. You may see this label in older data.',
    },
    Predicate: {
        headline: 'Older term — see Comment',
        detail:
            'In this model, the predicate is part of the Comment. You may see this label in older data.',
    },
    Verb: {
        headline: 'Older term — see Head Verb',
        detail:
            'Use Head Verb for the main verb inside a verb phrase. You may see this label in older data.',
    },
    Preposition: {
        headline: 'Older term — see Coverb',
        detail:
            'Mandarin linking words like 把, 被, 在, 用 are labeled Coverb in this model because they come from verbs. You may see this label in older data.',
    },
};
