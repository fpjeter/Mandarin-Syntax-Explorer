/**
 * Canonical list of sentence categories used in the example databank.
 * `SentenceCategory` is derived from this array so the type automatically
 * stays in sync — no need to update grammar.ts when adding a new category.
 */
export const SENTENCE_CATEGORIES = [
    'Basic Topic–Comment (主题评论)',
    'BA Construction (把字句)',
    'BEI Passive (被字句)',
    'Comparatives (比较句)',
    'Correlative Patterns (越…越…)',
    'Shì–de Construction (是…的)',
    'Resultative Complements (结果补语)',
    'Directional Complements (趋向补语)',
    'Potential Complements (可能补语)',
    'Degree Complements (程度补语)',
    'Aspect Markers (着/过/了)',
    'Pivotal Constructions (兼语句)',
    'Serial Verb Constructions (连动句)',
    'Separable Verbs (离合词)',
    'Double Topic (双主题)',
    'Conditional Sentences (如果…就…)',
    'Rhetorical Questions (反问句)',
    'Even (连…都/也)',
    'Discourse Context (跨句语境)',
] as const;

export type SentenceCategory = (typeof SENTENCE_CATEGORIES)[number];

/**
 * One-line descriptions shown in the sidebar accordion for each category.
 */
export const CATEGORY_DESCRIPTIONS: Record<SentenceCategory, string> = {
    'Basic Topic–Comment (主题评论)': 'Name what you\'re talking about, then say something about it.',
    'BA Construction (把字句)': 'Use 把 to move the object before the verb, showing it\'s being acted on.',
    'BEI Passive (被字句)': 'Flip the sentence so the receiver of the action comes first, using 被.',
    'Comparatives (比较句)': 'Compare two things with 比 (more than) or 跟…一样 (equally).',
    'Correlative Patterns (越…越…)': 'Pair two clauses to express "the more X, the more Y" or "as soon as X, then Y."',
    'Shì–de Construction (是…的)': 'Use 是…的 to emphasize when, where, or how something happened.',
    'Resultative Complements (结果补语)': 'Add a result word after the verb to show what the action achieved.',
    'Directional Complements (趋向补语)': 'Add 来/去 or a direction word after the verb to show which way something moves.',
    'Potential Complements (可能补语)': 'Insert 得/不 between verb and result to say whether the outcome is possible.',
    'Degree Complements (程度补语)': 'Use verb + 得 + description to say how well or intensely an action was done.',
    'Aspect Markers (着/过/了)': 'Mark ongoing state (着), past experience (过), or completed action (了) on the verb.',
    'Pivotal Constructions (兼语句)': 'The person you act on becomes the doer of the next action.',
    'Serial Verb Constructions (连动句)': 'String multiple actions together under one subject — no "and" needed.',
    'Separable Verbs (离合词)': 'Some verbs can split in two, letting other words slip in between.',
    'Double Topic (双主题)': 'Start with the big picture, then zoom in to talk about a specific part.',
    'Conditional Sentences (如果…就…)': 'Use if…then patterns (如果…就…, 只要…就…) for conditional reasoning.',
    'Rhetorical Questions (反问句)': 'Use 难道 or 非…不可 to express disbelief or strong necessity.',
    'Even (连…都/也)': 'Use 连…都 or 连…也 to express "even X…" for emphasis or surprise.',
    'Discourse Context (跨句语境)': 'When context from a previous sentence lets Mandarin drop subjects entirely.',
};

/**
 * Long-form pedagogical explanations that completely eliminate Eurocentric terminology
 * and utilize the FLS Train Metaphor and Matryoshka Principle rules.
 */
export const FULL_CATEGORY_EXPLANATIONS: Record<SentenceCategory, string> = {
    'Basic Topic–Comment (主题评论)': 'Forget subjects and verbs. The atomic unit of the Mandarin Train is the **Topic-Comment Pair**. You first establish *what* you wish to talk about (the Topic car), and then simply state a fact about it (the Comment car). If the context is utterly obvious, the Topic can just be a Ghost Node referencing the physical environment.',
    'BA Construction (把字句)': 'The BA construction uses the **Logic Zone** to lock an object\'s physical identity *before* the action hits it. To visualize this: you take the object you wish to mentally highlight, wrap it with the preposition 把 into an Adjunct, and place it mathematically in front of the verb. The action that follows must physically manipulate that specific object, changing its state or location.',
    'BEI Passive (被字句)': 'When an adverse event happens, Mandarin promotes the victim to the front of the train as the **Global Topic**. The attacker (or the source of the misfortune) is then trapped inside the Logic Zone by the preposition 被. This perfectly isolates the impact on the victim before the resulting action unfolds.',
    'Comparatives (比较句)': 'Instead of relying on clunky comparative adjectives, Mandarin handles comparisons sequentially. The standard you are using to judge (e.g., "than him") is packaged into the Logic Zone with 比, sitting squarely before the evaluative state. You benchmark first, then you conclude.',
    'Correlative Patterns (越…越…)': 'This is parataxis in action—the **Waterfall cascade**. Two independent segments sit perfectly side-by-side as a Parallel Sentence. The completion of the first condition inherently generates the momentum for the second. You don\'t need connecting cars ("and," "but"); the sequential flow creates the logic mathematically.',
    'Shì–de Construction (是…的)': 'Think of this as the **Refocused Scope Sandwich**. The event has already happened, but you want to fiercely highlight the Time, Place, or Manner of the action. You sandwich the crucial detail inside the Comment using 是 at the front and 的 at the back. Everything outside the sandwich is old information; everything inside is the emphasized truth.',
    'Resultative Complements (结果补语)': 'Mandarin shuns abstract tense markers in favor of flat, hard consequences. A Resultative Complement sits right next to the Head Verb inside the active verb phrase. First comes the action, immediately followed by the fossilized result (e.g., wash-clean, hit-broken).',
    'Directional Complements (趋向补语)': 'Location tracking in Mandarin is explicit. A Directional Complement acts exactly like a Resultative, sitting as a flat sibling to the verb. It strictly maps the spatial vector of an action—whether the energy is moving towards the speaker (来) or away into the distance (去).',
    'Potential Complements (可能补语)': 'This is the **Hardware Toggle**. By wedging either 得 (able to) or 不 (unable to) directly between an action and its complement, you flip a binary switch indicating whether the resulting state or vector is mechanically or environmentally possible.',
    'Degree Complements (程度补语)': 'Unlike the flat fusion of potential or resultative Complements, Degree Complements trigger the **Recursive Hinge**. The particle 得 opens an entirely new nested architectural space—an embedded descriptive zone—allowing a simple verb to cascade into elaborate, vivid evaluations.',
    'Aspect Markers (着/过/了)': 'Instead of shifting tense, Mandarin marks the current temporal boundary of the action itself. The Aspect Particle behaves like a tag pinned immediately to the Head Verb—marking continuous state (着), historical experience (过), or the crossing of a completed boundary (了).',
    'Pivotal Constructions (兼语句)': 'This is a pure demonstration of the **Matryoshka Principle**. When a causative verb like "request" or "let" acts upon a person, it doesn\'t just hit them as an object. It triggers an entirely self-contained **Situation Object**, a fully embedded clause that houses the person as a new, nested Topic enacting their own action.',
    'Serial Verb Constructions (连动句)': 'This is the **Stream**. Multiple actions flow seamlessly outward from a single Global Topic. Instead of endlessly repeating "and," the consecutive Verb Phrases stack horizontally inside the Comment slot, conveying a chronological sequence of actions executed in a single breath.',
    'Separable Verbs (离合词)': 'Many "words" in Mandarin are actually disguised Topic-Comment micro-structures (e.g., "eat-meal", "sleep-觉"). Because they are logically severed into a Verb Morpheme and an Object Morpheme, you can slip tracking data, duration counters, or directional tags directly into the gap between them.',
    'Double Topic (双主题)': 'Here, the **Matryoshka Principle** governs the noun universe. The speaker establishes a massive Global Discourse Frame (The Outer Topic). Then, diving perfectly inside the Comment, they spawn an entirely new Local Topic. It is the grammatical equivalent of zooming a camera lens from the whole down to the part.',
    'Conditional Sentences (如果…就…)': 'A conditional structure splits the sentence frame into hypothetical boundary testing. The "If" establishes the foundational premise housed primarily in the Topic slot, while the "Then" fulfills the resulting consequence in the Comment.',
    'Rhetorical Questions (反问句)': 'Rhetorical scaffolding does not warp the outermost sentence structure. Instead of flipping verbs as English does, words like 难道 or 吗 behave as contained logic markers deep within the Adjunct and Particle slots of the Comment. The fundamental Train architecture stays intact.',
    'Even (连…都/也)': 'When emphasizing extreme scenarios, you violently drag the targeted noun into the front of the Train, pairing it with 连. This displaces standard adverbs (都/也) deep into the subsequent Logic Zone, signaling to the listener that the threshold of expectation has been structurally broken.',
    'Discourse Context (跨句语境)': 'Mandarin demands that you rely on the environment, not on pronoun crutches. When the identity of the actor or victim is already established by previous sentences or the physical room, Mandarin uses **Identity Binding**. The Topic car appears completely invisible (a Ghost Node), pulling its structural gravity silently from the conversation itself.',
};
