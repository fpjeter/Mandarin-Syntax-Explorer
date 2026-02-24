import type { GrammarRole } from '../types/grammar';

/**
 * Plain-English definitions for every grammar role, written for
 * Mandarin learners with no linguistics background.
 */
export const glossary: Record<GrammarRole, { headline: string; detail: string }> = {
    Sentence: {
        headline: 'The whole sentence',
        detail: 'The complete statement. Every other part in the tree lives inside here.',
    },
    Topic: {
        headline: 'What the sentence is about',
        detail:
            'Mandarin almost always starts by naming what you\'re talking about — the topic. It\'s like saying "As for the elephant…" before you say anything else.',
    },
    Comment: {
        headline: 'What is said about the topic',
        detail:
            'After the topic is set, the comment says something about it. The comment is the "punchline" — the real information the speaker wants to give.',
    },
    Subject: {
        headline: 'Who does the action',
        detail:
            'The person or thing performing the verb, inside a comment clause. Often the same as the topic, but not always.',
    },
    Predicate: {
        headline: 'The action or description',
        detail:
            'Everything that is said about the subject: the verb, its object, and any extras like time, place, or result.',
    },
    'Verb Phrase': {
        headline: 'A verb and its extras',
        detail:
            'A group of words built around a verb — including any object, direction, result, or length it comes with.',
    },
    'Noun Phrase': {
        headline: 'A noun and its description',
        detail:
            'A group of words built around a noun. For example, 那只大象 ("that elephant") is a noun phrase: 那只 describes 大象.',
    },
    Verb: {
        headline: 'The action or state word',
        detail:
            'The core word expressing what happens: 打 (hit), 看 (look), 喜欢 (like), etc.',
    },
    Object: {
        headline: 'What receives the action',
        detail:
            'The thing the verb acts on. In "她看书", 书 (book) is the object.',
    },
    Adjunct: {
        headline: 'Pre-verbal modifier (状语 zhuàngyǔ)',
        detail:
            'Anything that appears before the verb to set the scene — how, when, where, how often, or to what degree. Chinese grammar calls this position 状语 (zhuàngyǔ). It covers not just classic adverbs like 都 (all) or 很 (very), but also location phrases like 在厨房里 ("in the kitchen") and manner phrases like 生气地 ("angrily").',
    },
    Preposition: {
        headline: 'A linking word showing relationship',
        detail:
            'Comes before a noun to show direction, location, or who is affected. E.g. 把 (marks what\'s being done to), 被 (marks the doer in a passive).',
    },
    Particle: {
        headline: 'A small grammatical word',
        detail:
            'Short words added to sentences or verbs to show tense, mood, or grammatical role. E.g. 了 (completion), 的 (possession), 吗 (yes/no question), 过 (past experience).',
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
        headline: 'Extra info completing a verb',
        detail:
            'Comes after the verb to add info about the result, direction, possibility, or degree of the action. Look for specific complement badges (结果补语, 方向补语, etc.) for details on each type.',
    },
    'Head Noun': {
        headline: 'The main noun in a noun phrase',
        detail:
            'The core noun that all the other descriptive words in the phrase are modifying.',
    },
    'Head Verb': {
        headline: 'The main verb in a verb phrase',
        detail:
            'The core verb around which complements, objects, and particles are grouped.',
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
            'The noun half of a separable verb (离合词) — the "thing" the verb acts on internally. E.g. 面 in 见面, 觉 in 睡觉, 步 in 散步. When the verb splits, this half moves to the end.',
    },
    Pivot: {
        headline: 'A noun that plays two grammatical roles at once',
        detail:
            'In a pivotal construction (兼语句), one noun is simultaneously the object of the first verb and the subject of the second. E.g. in 老师让学生回答 (the teacher had the students answer), 学生 is the object of 让 and the subject of 回答.',
    },
    Copula: {
        headline: 'The linking verb "to be"',
        detail:
            'The linking verb 是 ("to be"). In the 是…的 pattern, 是 opens the focus and 的 closes it, like saying "it WAS [yesterday] that…"',
    },
};
