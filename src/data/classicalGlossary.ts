import type { GrammarRole } from '../types/grammar';

/**
 * Plain-English definitions for grammar roles, written for
 * Classical Chinese (文言文) learners. Same keys as the modern
 * glossary but with classical examples and descriptions.
 */
export const classicalGlossary: Record<GrammarRole, { headline: string; detail: string }> = {
    Sentence: {
        headline: 'The whole sentence',
        detail: 'The complete classical statement. Every other part in the tree lives inside here.',
    },
    Topic: {
        headline: 'What the sentence is about',
        detail:
            'Classical Chinese, like modern Mandarin, is topic-prominent. The topic sets the scene before the comment delivers the point — e.g. 千里之行 ("a journey of a thousand miles") in 千里之行，始於足下.',
    },
    Comment: {
        headline: 'What is said about the topic',
        detail:
            'The assertion or judgment made about the topic. In 學而時習之，不亦說乎, the comment 不亦說乎 delivers the rhetorical punch.',
    },
    Subject: {
        headline: 'Who does the action',
        detail:
            'The agent of the verb. Often the same as the topic, but in classical Chinese the subject is frequently omitted (dropped) when recoverable from context.',
    },
    Predicate: {
        headline: 'The action or description',
        detail:
            'Everything said about the subject: the verb, its object, and any modifiers. Classical predicates are often strikingly compact — a single character can carry the full predicate.',
    },
    'Verb Phrase': {
        headline: 'A verb and its dependents',
        detail:
            'A group of words built around a verb, including its object, coverb phrases, and complements.',
    },
    'Noun Phrase': {
        headline: 'A noun and its modifiers',
        detail:
            'A group of words built around a noun. In classical Chinese, modifiers precede the head noun, often linked by 之 — e.g. 千里之行 ("a thousand miles\' journey").',
    },
    Verb: {
        headline: 'The action or state word',
        detail:
            'The core word expressing what happens. Classical verbs are highly flexible — the same character often serves as verb, noun, or adjective depending on position.',
    },
    Object: {
        headline: 'What receives the action',
        detail:
            'The thing the verb acts on. In classical Chinese, pronouns like 之 ("it/him") often serve as objects — e.g. 知之 ("know it").',
    },
    Adjunct: {
        headline: 'Pre-verbal modifier',
        detail:
            'Anything that modifies the verb from before: negation (不, 非, 勿), certainty (必), time (日), frequency (三), or rhetorical intensifiers (亦). Classical adjuncts tend to be single characters.',
    },
    Preposition: {
        headline: 'A linking word showing relationship',
        detail:
            'Linking words (often called "coverbs") like 於 (at/from/than), 以 (by means of/with), and 自 (from) that mark the relationship between a verb and a noun. These are the ancestors of modern 在, 从, 用.',
    },
    Particle: {
        headline: 'A grammatical function word',
        detail:
            'Small words with purely grammatical roles: 者 (turns verbs into nouns like "the one who"), 所 (marks "that which is done"), 乎 (question marker), 矣 (conclusion), 焉 (fused location word), 而 (connective), 之 (possession marker/pronoun).',
    },
    Adjective: {
        headline: 'A describing word',
        detail:
            'Describes a quality. In classical Chinese, adjectives freely function as nouns (故 = "the old", 新 = "the new") or predicates (說/悅 = "joyful") without changing their written form.',
    },
    Noun: {
        headline: 'A person, place, or thing',
        detail:
            'The name of something. Classical nouns can also function as verbs or adverbs based on context — e.g. 日 ("day") used as "daily".',
    },
    Pronoun: {
        headline: 'A stand-in for a noun',
        detail:
            'Words like 吾 (I, archaic), 己 (oneself), 之 (it/him/them), 我 (I/me). Classical Chinese has more pronoun distinctions than modern Mandarin.',
    },
    Attributive: {
        headline: 'A word or phrase modifying a noun',
        detail:
            'Descriptors that come BEFORE the head noun, often linked by 之 (similar to modern 的). E.g. 常 ("constant") in 常道 ("the constant Way").',
    },
    Complement: {
        headline: 'Extra info completing a verb',
        detail:
            'Post-verbal information, less common in classical Chinese than in modern Mandarin. When present, it often indicates result or potential (e.g. 可道 = "can be spoken").',
    },
    'Head Noun': {
        headline: 'The main noun in a noun phrase',
        detail:
            'The core noun that all modifiers point to — e.g. 道 ("the Way") in 常道, or 師 ("teacher") in 我師.',
    },
    'Head Verb': {
        headline: 'The main verb in a verb phrase',
        detail:
            'The core verb around which objects, coverb phrases, and particles are grouped — e.g. 學 ("study"), 知 ("know"), 施 ("impose").',
    },
    'Measure Word': {
        headline: 'A counting or classifying word',
        detail:
            'Rare in classical Chinese. The measure-word system developed mainly in later periods; classical texts often place numbers directly before nouns (三人 = "three people").',
    },
    'Verb Morpheme': {
        headline: 'The verb half of a compound',
        detail:
            'Separable verbs (离合词) are a modern Mandarin phenomenon. In classical Chinese, this role is uncommon.',
    },
    'Object Morpheme': {
        headline: 'The object half of a compound',
        detail:
            'The noun half of a separable verb. Like Verb Morpheme, this is primarily a modern construct.',
    },
    Pivot: {
        headline: 'A noun playing two roles at once',
        detail:
            'In a pivotal construction, one noun is simultaneously the object of the first verb and the subject of the second — a pattern that exists in both classical and modern Chinese.',
    },
    Copula: {
        headline: 'The linking verb "to be"',
        detail:
            'In classical Chinese, the linking word "is" or "are" is often absent. 非 (fēi) means "is not", while saying "A is B" is often done by just placing them side by side, or with 為 (wéi).',
    },
    'Parallel Sentence': {
        headline: 'Side-by-side independent statements',
        detail:
            'Very common in classical syntax. A compound sentence where two or more independent clauses are placed neatly side-by-side to compare or contrast, without coordinating conjunctions.',
    },
    'Embedded Clause': {
        headline: 'A sentence hiding inside a sentence',
        detail:
            'A fully-formed mini-sentence that is nested inside a larger structure. Crucial for understanding classical structures like 所-nominalizations where entire clauses act as nouns.',
    },
};
