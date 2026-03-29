/**
 * Canonical list of sentence categories used in the example databank.
 * `SentenceCategory` is derived from this array so the type automatically
 * stays in sync — no need to update grammar.ts when adding a new category.
 *
 * Reorganised under the Universal Mandarin Sentence Model (UMSM):
 *   • Serial Verbs, Double Topic, Aspect Markers, Discourse Context
 *     → absorbed into Basic Topic–Comment (the foundational pattern)
 *   • Correlative Patterns → merged into Conditional & Correlative
 *   • Even (连…都/也) → merged into Emphasis & Rhetoric
 */
export const SENTENCE_CATEGORIES = [
    'Basic Topic–Comment (主题评论)',
    'BA Construction (把字句)',
    'BEI Passive (被字句)',
    'Comparatives (比较句)',
    'Shì–de Construction (是…的)',
    'Resultative Complements (结果补语)',
    'Directional Complements (趋向补语)',
    'Potential Complements (可能补语)',
    'Degree Complements (程度补语)',
    'Pivotal Constructions (兼语句)',
    'Separable Verbs (离合词)',
    'Conditional & Correlative (条件句)',
    'Emphasis & Rhetoric (强调句)',
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
    'Shì–de Construction (是…的)': 'Use 是…的 to emphasize when, where, or how something happened.',
    'Resultative Complements (结果补语)': 'Add a result word after the verb to show what the action achieved.',
    'Directional Complements (趋向补语)': 'Add 来/去 or a direction word after the verb to show which way something moves.',
    'Potential Complements (可能补语)': 'Insert 得/不 between verb and result to say whether the outcome is possible.',
    'Degree Complements (程度补语)': 'Use verb + 得 + description to say how well or intensely an action was done.',
    'Pivotal Constructions (兼语句)': 'The person you act on becomes the doer of the next action.',
    'Separable Verbs (离合词)': 'Some verbs can split in two, letting other words slip in between.',
    'Conditional & Correlative (条件句)': 'If X then Y, the more X the more Y, and other patterns for logical reasoning.',
    'Emphasis & Rhetoric (强调句)': 'Patterns that add surprise, disbelief, or absolute certainty to a statement.',
};

/**
 * Extended, multi-paragraph explanations for each category.
 * Written for Mandarin learners with no linguistics background.
 * These go deeper than the one-line CATEGORY_DESCRIPTIONS above.
 */
export const CATEGORY_EXPLANATIONS: Record<SentenceCategory, string> = {
    'Basic Topic–Comment (主题评论)':
        'Every Mandarin sentence follows one simple rule: first say **what you\'re talking about** (the topic), then **say something about it** (the comment). Think of it like starting every sentence with "As for X…" In English, we lead with the subject and verb ("He broke the vase"). In Mandarin, you name the topic and then pile on everything else — actions, descriptions, even whole nested sentences — without ever needing to repeat it.\n\n' +
        'Once the topic is set, Mandarin often drops it entirely in later sentences. If the context is clear, you just skip the pronoun — no "he," no "it," nothing. This is completely natural and happens constantly in everyday speech.\n\n' +
        'The sentences in this category show the full range: simple topic + action pairs, serial verb chains (multiple actions listed one after another with no connecting words), double-topic structures (naming a big thing, then describing its parts), dropped subjects recovered from earlier context, and deeply nested clauses where Comments contain their own inner Topic–Comment pairs.',

    'BA Construction (把字句)':
        'The 把 pattern takes the object — the thing being affected — and moves it **before the verb** instead of after it. In English, this feels backward: instead of "She forgot the wallet on the taxi," Mandarin says something like "She *took* the wallet, forgot-it on the taxi." The 把 signals: pay attention, something specific is about to happen to this thing.\n\n' +
        'You use 把 when the action has a clear **outcome or destination**: the object gets changed, moved, broken, cleaned, or put somewhere. A plain verb-object sentence just states the action; a 把 sentence emphasizes that the object was deliberately affected.\n\n' +
        'The sentences here show 把 in combination with different kinds of results: location results (forgetting something *on* the taxi), directional results (closing a window *shut*), hiding something *under* the pillow, and cleaning a room *spotlessly*.',

    'BEI Passive (被字句)':
        'The 被 pattern flips the normal word order so the **receiver** of the action comes first. Instead of "Someone stole my wallet," Mandarin says "My wallet 被 someone stole." The 被 introduces whoever did the action (or leaves them unnamed if it doesn\'t matter).\n\n' +
        'In English, passives are common and neutral ("The cake was eaten"). In Mandarin, 被 often carries a sense that something **happened to** someone in a way they didn\'t want. Being stolen from, being pulled, being tricked — these are natural 被 situations. More neutral passives are appearing in modern Mandarin, but the slight feeling of "suffering" still lingers.\n\n' +
        'Across the sentences here you\'ll see 被 with named agents, unnamed agents, and layered with other patterns like double topics (the elephant → its trunk → 被 the child pulled).',

    'Comparatives (比较句)':
        'Mandarin has two main comparison frames. **比** (bǐ) says one thing beats another: "A 比 B [quality]" means A is *more* [quality] than B. **跟…一样** (gēn…yīyàng) says two things are equal: "A 跟 B 一样 [quality]" means A is *equally* [quality] as B. There\'s also **像…一样** (xiàng…yīyàng), which draws a vivid simile: "like the wind, equally fast."\n\n' +
        'The word order is rigid in all three frames — you cannot shuffle the pieces around the way English sometimes allows. The comparison word always comes before the standard (the thing you\'re comparing against), and the quality word always comes after.\n\n' +
        'The sentences illustrate: 比 with a quantity gap ("taller by a lot"), 跟…一样 comparing two noun phrases ("her handwriting is as good as the teacher\'s"), and 像…一样 with a figurative simile ("runs like the wind").',

    'Shì–de Construction (是…的)':
        'The 是…的 pattern zooms in on **one specific detail** of a past event — usually *when*, *where*, or *how* it happened. The action itself isn\'t in question; everyone knows it happened. What 是…的 highlights is the circumstance.\n\n' +
        'Think of it as answering a question like "Where did you grow up?" or "When did you see her?" 是 opens the spotlight, the focused detail sits in the middle, and 的 closes it. Without 是…的, you\'d have a plain statement. With it, you\'re saying "the answer you\'re looking for is *this*."\n\n' +
        'The sentences range from spotlighting a time and place together, to focusing on a single location ("I grew up *in Shanghai*"), to emphasizing a reason or method.',

    'Resultative Complements (结果补语)':
        'Mandarin loves to compress an action and its result into a single tight unit. **听懂** doesn\'t just mean "listen" — it means "listened *and understood*." **打碎** doesn\'t just mean "hit" — it means "hit *and shattered*." The second part tells you what *outcome* the action achieved.\n\n' +
        'In English, we often need extra words: "listened and understood," "hit it so it broke." Mandarin stacks them directly: verb + result, no connector, no pause. If you only say the verb without the result (我听了 — "I listened"), there\'s no guarantee the outcome happened. Add the result (我听懂了 — "I listened-understood") and the outcome is asserted.\n\n' +
        'The sentences show various result pairings: 听懂 (listen-understand), 打碎 (hit-shatter), 哭红 (cry-red, as in "cried her eyes red"), 找到 (search-find), 吃饱 (eat-full), and more. Each one demonstrates a different kind of outcome: understanding, physical change, completion, or state change.',

    'Directional Complements (趋向补语)':
        'After a verb, you can add direction words like **来** (toward the speaker), **去** (away from the speaker), **上** (up/onto), **下** (down/off), **进** (into), **出** (out of), **回** (back), **过** (across), or **起来** (up from below). These tell you *which way* the action moves.\n\n' +
        'You can also stack two direction words: **走进来** = walk + into + toward-speaker = "walk in (toward me)." The first direction word gives the path; the second gives the orientation relative to the speaker.\n\n' +
        'The sentences cover simple directions (走进来 — walk in this way), compound directions (跑出去 — run out away from the speaker), metaphorical directions (想起来 — "think-rise" meaning "recall"), and multi-layered stacking.',

    'Potential Complements (可能补语)':
        'Mandarin expresses "can" and "can\'t" by inserting **得** (can) or **不** (cannot) between a verb and its result. 看**得**懂 means "can read-and-understand." 看**不**懂 means "can\'t read-and-understand." The only difference is one syllable, but it flips the meaning entirely.\n\n' +
        'This is different from using 能 or 可以 (which express permission or general ability). The 得/不 slot specifically says whether a particular *outcome* is achievable. It answers questions like: "Can you work this out?" (做得出来 vs 做不出来) or "Can you finish writing it?" (写得完 vs 写不完).\n\n' +
        'The sentences show both affirmative and negative potential forms, with different result types: directional results (出来 — come out), resultative results (懂 — understand, 完 — finish), and state results (着 — catch/settle into, as in 睡不着 "can\'t fall asleep").',

    'Degree Complements (程度补语)':
        'The degree complement uses **verb + 得** to open a whole new descriptive clause that tells you *how well*, *how intensely*, or *to what extent* the action was done. Unlike potential complements (where 得/不 is a tiny switch between verb and result), degree 得 opens the door to a full description.\n\n' +
        'After 得, you can put almost anything: a simple adjective (跑得很快 — "runs very fast"), a simile (跑得像风一样快 — "runs as fast as the wind"), or even a consequence clause (气得说不出话来 — "so angry that he couldn\'t speak").\n\n' +
        'The sentences illustrate the range: simple adjectival ratings (非常快 — very fast), vivid similes (像流水一样 — like flowing water), consequence descriptions (jumped up from happiness), and nested structures where the consequence itself contains another complement pattern.',

    'Pivotal Constructions (兼语句)':
        'In a pivotal sentence, **one noun plays two roles at once**. It\'s the object of the first verb and simultaneously the subject of the second verb. In "老师让学生回答" (the teacher made the student answer), 学生 (the student) is both the person the teacher acted on and the person who does the answering.\n\n' +
        'Common trigger verbs include 让 (let/make), 请 (ask/invite), 叫 (tell/call), and 使 (cause). The pivot noun is the hinge that connects the two actions.\n\n' +
        'The sentences show different pivot verbs, including causative constructions where the first verb compels an action, and polite request forms.',

    'Separable Verbs (离合词)':
        'Some Mandarin verbs are actually **two-part words** that can be split apart to let other words slip in between. 见面 (meet: "see" + "face"), 睡觉 (sleep: "sleep" + "nap"), 散步 (stroll: "scatter" + "steps") — these look like single verbs, but when you need to add a time duration, a frequency, or an aspect marker, the verb cracks open and the extra words insert in the middle.\n\n' +
        'For example, 见过好几次面 inserts "experienced + quite a few times" between 见 and 面. In English you would just say "met quite a few times" — one verb, no splitting. Mandarin must insert the modifying words *inside* the verb because the second half functions as an internal object.\n\n' +
        'The sentences demonstrate different insertion patterns: aspect markers slipping in (见过面), time durations slipping in (散了一个小时的步), and frequency counts.',

    'Conditional & Correlative (条件句)':
        'These patterns express logical relationships: **if X then Y**, **the more X the more Y**, **as long as X then Y**, and other chains of cause and consequence. They often use paired framing words that bracket the two halves of the sentence.\n\n' +
        'Common pairs include: 如果…就… (if…then…), 只要…就… (as long as…then…), 越…越… (the more…the more…), 虽然…但是… (although…but…). The framing words sit at the front of their respective clauses and signal how the two halves relate to each other.\n\n' +
        'The sentences illustrate different conditional and correlative patterns, showing how Mandarin layers scene-setting and consequence systematically.',

    'Emphasis & Rhetoric (强调句)':
        'These patterns are designed to add **emotional punch**: surprise, disbelief, insistence, or absolute certainty. They use special framing words or paired structures that amplify meaning beyond a plain statement.\n\n' +
        '连…都/也 (even…) wraps around whatever is being emphasized, expressing incredulity: "you can\'t answer *even* this simple question?" 非…不可 uses a double negative to express absolute necessity: "it\'s not the case that it can be avoided" = "it absolutely must be done." 难道 signals a rhetorical question: "don\'t tell me…?"\n\n' +
        'The sentences show these emphasis patterns in different configurations, from incredulous questions to unshakable commands.',
};
