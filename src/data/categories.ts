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
    'Basic Topic–Comment (主题评论)': 'In Mandarin, you first name the big picture of what you want to talk about (the Topic). Then, you say something about it (the Comment). Think of it like a search bar: type the subject, then hit enter to give the results!',
    'BA Construction (把字句)': 'Instead of saying "I drank the water", Mandarin uses "BA" to grab the water first: "I BA the water drank." It puts a spotlight on the object before explaining what happened to it.',
    'BEI Passive (被字句)': 'When something happens TO someone, you put the victim first. Then use "BEI" to point to whoever caused it. Think of it like saying: "The mouse BEI the cat eaten."',
    'Comparatives (比较句)': 'Comparing things is straightforward. You state the first item, use "BI" (compared to) with the second item, and then give the verdict. Structurally: "I BI you tall."',
    'Correlative Patterns (越…越…)': 'This connects two ideas easily without needing words like "and" or "so". Just put "YUE" (more) before both actions to link them: "The more you eat, the more you grow."',
    'Shì–de Construction (是…的)': 'When we already know an action happened, we use SHI...DE to emphasize the juicy details—like *when*, *where*, or *how* it happened. It puts the spotlight purely on the circumstances.',
    'Resultative Complements (结果补语)': 'Chinese verbs often come in pairs: the action, followed immediately by the result. "Look-see" or "Wash-clean". The first word is what you did, and the second is how it ended up.',
    'Directional Complements (趋向补语)': 'Verbs often get a directional tag added to them so you know exactly where things are moving. Are they coming towards you (lai) or going away (qu)?',
    'Potential Complements (可能补语)': 'This adds a simple "can" or "cannot" right into the middle of a verb. By wedging "DE" (can) or "BU" (cannot) inside, you show whether an action is physically able to reach its goal.',
    'Degree Complements (程度补语)': 'When you want to describe *how well* or *how intensely* someone does something, use the particle "DE" (得). "He runs DE very fast". It links the action directly to the descriptive rating.',
    'Aspect Markers (着/过/了)': 'Mandarin doesn\'t have tense. Instead, we pin little tags to the verb exactly when needed: "ZHE" for ongoing actions, "GUO" for past experiences, and "LE" for completed boundaries.',
    'Pivotal Constructions (兼语句)': 'One person\'s object is another person\'s subject! When you ask someone to do something, they sit in the middle: "I ask HIM, HE goes". They pivot between the two actions.',
    'Serial Verb Constructions (连动句)': 'You can just string multiple actions together consecutively if they happen in chronological order. No need for "and"! Like: "I take a train go to Beijing see a friend".',
    'Separable Verbs (离合词)': 'Some verbs are actually two glued words (like "eat-meal" or "sleep-sleep"). Mandarin lets you split them apart to stuff extra details—like "eat-THREE-meals"—right in the middle!',
    'Double Topic (双主题)': 'Start by mentioning the big picture (the whole), then zoom in to talk about a specific detail (the part). Like: "That elephant, its nose is very long".',
    'Conditional Sentences (如果…就…)': 'Simple "If... Then..." patterns. You set up the condition first ("If it rains"), and then follow up with the result ("Then I will stay home").',
    'Rhetorical Questions (反问句)': 'Used not to ask for information, but to make a strong point. Adding "NANDAO" is like saying "Could it really be that...?!" to show your absolute disbelief.',
    'Even (连…都/也)': 'When you want to emphasize something extreme, use "LIAN... DOU/YE". It translates perfectly to "Even X is Y". For example: "Even a child knows that!"',
    'Discourse Context (跨句语境)': 'Mandarin loves efficiency. If we already know who or what we\'re talking about from the previous sentence or the room we are in, we just drop the word completely. No need to repeat it!',
};
