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
    'Correlative Patterns (关联句型)',
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
    'Basic Topic–Comment (主题评论)': 'Name what you\'re talking about, then say something about it. This is the foundation of every Mandarin sentence.',
    'BA Construction (把字句)': 'Use 把 to move a specific object before the verb, spotlighting what is being acted on.',
    'BEI Passive (被字句)': 'Place the receiver of the action first, then use 被 to introduce who or what caused it.',
    'Comparatives (比较句)': 'Compare two things using 比 ("more than") or 跟…一样 ("equally").',
    'Correlative Patterns (关联句型)': 'Pair two clauses to express "the more X, the more Y" or "as soon as X, then Y."',
    'Shì–de Construction (是…的)': 'Use 是…的 to highlight when, where, or how a past event happened.',
    'Resultative Complements (结果补语)': 'Attach a result word directly after the verb to show what the action accomplished.',
    'Directional Complements (趋向补语)': 'Add a direction word (来/去, 上/下, 进/出) after the verb to show which way something moves.',
    'Potential Complements (可能补语)': 'Insert 得 or 不 between a verb and its result to express whether the outcome is achievable.',
    'Degree Complements (程度补语)': 'Use verb + 得 + description to say how well, how fast, or how intensely an action was done.',
    'Aspect Markers (着/过/了)': 'Mark ongoing state (着), past experience (过), or completed action (了) on the verb.',
    'Pivotal Constructions (兼语句)': 'The person you act on becomes the doer of the next action, creating a chain.',
    'Serial Verb Constructions (连动句)': 'String multiple actions together under one subject in sequence. No "and" needed.',
    'Separable Verbs (离合词)': 'Some verbs can split in two, letting aspect markers or time phrases slip in between.',
    'Double Topic (双主题)': 'Start with the big-picture topic, then zoom in to talk about a specific part of it.',
    'Conditional Sentences (如果…就…)': 'Set up "if...then" reasoning with patterns like 如果…就…, 只要…就…, or 要是…就…',
    'Rhetorical Questions (反问句)': 'Use 难道 or 非…不可 to make a strong point rather than ask for information.',
    'Even (连…都/也)': 'Use 连…都 or 连…也 to express "even X" for emphasis, surprise, or disappointment.',
    'Discourse Context (跨句语境)': 'When context from a previous sentence lets Mandarin leave out the subject entirely.',
};

/**
 * Long-form pedagogical explanations for each sentence category.
 * These appear in the Grammar Guide panel.
 *
 * Rules: warm tutor tone, learner-familiar vocabulary, no FLS jargon,
 * no em-dashes, no "Think of it like..." metaphors.
 */
export const FULL_CATEGORY_EXPLANATIONS: Record<SentenceCategory, string> = {
    'Basic Topic–Comment (主题评论)': 'Every Mandarin sentence follows the same core pattern: first, name what you want to talk about (the **Topic**), then say something about it (the **Comment**). "That restaurant, the food is great" is perfectly natural Mandarin because 那家餐厅 sets the topic, and 菜很好吃 delivers the comment. Once you see this split, you will notice it everywhere.',
    'BA Construction (把字句)': 'When you want to say what happened to a specific thing, Mandarin uses **把** to move that thing in front of the verb. "I 把 the cup broke" tells you: this cup, something happened to it. **把** always signals that the object is specific and that some change, movement, or result is about to be described. If nothing changes ("I 把 the book liked" sounds wrong), 把 does not fit.',
    'BEI Passive (被字句)': 'When the focus is on *who was affected* rather than who did the acting, Mandarin uses **被**. The receiver goes first as the Topic, then 被 introduces who caused it. "The vase 被 the cat knocked over" puts the vase front and center. In everyday speech, 被 often has a slightly negative or unfortunate feel, though modern usage is loosening that.',
    'Comparatives (比较句)': 'To compare two things, put the first item as the Topic, use **比** ("compared to") followed by the second item, then state the difference. "I 比 you tall" is the basic shape. You can also add degree words: 比你高**得多** ("taller by a lot"). For equality, use **跟…一样** ("the same as").',
    'Correlative Patterns (关联句型)': 'These patterns link two clauses, showing how one change drives another. The most common are **越…越…** ("the more X, the more Y") and **一…就…** ("as soon as X, immediately Y"). No conjunction is needed between the clauses. Just the repeated marker does all the work: 越吃越胖, "the more you eat, the fatter you get."',
    'Shì–de Construction (是…的)': 'When you already know an action happened and want to highlight a specific detail about it, use **是…的**. It puts a spotlight on *when*, *where*, or *how* the event took place. "I 是 yesterday in the library 的 saw her" zooms in on the time and place. Without 是…的, the sentence is a plain statement; with it, you are answering a question like "when did you see her?"',
    'Resultative Complements (结果补语)': 'Mandarin loves to fuse an action with its result into a tight pair. 听**懂** means "listen and understand"; 洗**干净** means "wash clean." The first part says what you did; the second part says how it turned out. This pairing is one of the most common structures in the language. If you can name the result, you can attach it right after the verb.',
    'Directional Complements (趋向补语)': 'When you need to say *which way* an action goes, add a direction word after the verb. **来** (toward the speaker) and **去** (away from the speaker) are the foundation. You can also add specific directions: 进 (in), 出 (out), 上 (up), 下 (down). These combine into compounds like 走**进来** ("walk in toward me") or 跑**上去** ("run up and away").',
    'Potential Complements (可能补语)': 'Potential complements tell you whether an action *can* reach its result. They work like a switch inside a verb-result pair: insert **得** ("can") or **不** ("cannot") between the verb and the result. 听**得**懂 means "can understand by listening"; 听**不**懂 means "cannot understand." One syllable flips the entire meaning.',
    'Degree Complements (程度补语)': 'When you want to describe *how well or how intensely* an action was performed, use **得** after the verb, followed by a descriptive phrase. 跑**得**很快 means "runs very fast." 忙**得**忘了吃饭 means "so busy that I forgot to eat." The 得 links the verb to a rating of its quality or consequence.',
    'Aspect Markers (着/过/了)': 'Mandarin does not have tenses like past or future. Instead, small particles attach to the verb to describe *how* the action relates to time. **着** marks an ongoing state (门开着, "the door is open"). **过** marks life experience (我去过中国, "I have been to China"). **了** marks completion (我吃了, "I ate / I have eaten").',
    'Pivotal Constructions (兼语句)': 'In a pivotal construction, the object of the first verb becomes the subject of the second. "Mom 让 me go buy milk" has "me" playing two roles: I am the person Mom is directing, and I am the person who goes. Verbs like 让 (let), 叫 (tell), 请 (invite), and 派 (send) all create this pivot.',
    'Serial Verb Constructions (连动句)': 'Mandarin lets you line up multiple actions in sequence under one subject, with no connecting words needed. "I take the bus go to school buy lunch" is three actions in a row, and each one flows naturally into the next. The order of the verbs matches the chronological order of the events.',
    'Separable Verbs (离合词)': 'Some common verbs are actually two-character compounds that can be pulled apart. **见面** ("meet": see + face) becomes 见**了三次**面 ("met three times") when you insert a frequency count between the halves. **睡觉** ("sleep") becomes 睡**了一个小时的**觉 when you insert a duration. Knowing which verbs are separable is part of building fluency.',
    'Double Topic (双主题)': 'Sometimes a sentence has two layers of topic. First you name the big picture (the whole), then you zoom in on a detail (the part). "That elephant, its nose is very long" uses 那只大象 as the outer topic and 鼻子 as the inner topic. This whole-then-part pattern is very natural in Mandarin.',
    'Conditional Sentences (如果…就…)': 'Conditional sentences set up an "if...then" relationship. The most common pattern is **如果…就…**, but you will also see **只要…就…** ("as long as...then...") and **要是…就…** (a more colloquial "if...then"). The condition clause acts as the Topic, and the result clause is the Comment.',
    'Rhetorical Questions (反问句)': 'Rhetorical questions in Mandarin are not really questions; they are emphatic statements in disguise. **难道** ("could it really be that...") signals that the speaker expects the opposite of what the sentence literally says. **非…不可** ("must") uses double negation to express absolute necessity.',
    'Even (连…都/也)': 'The **连…都** and **连…也** patterns express "even" by fronting the extreme or surprising item with 连, then reinforcing it with 都 or 也. "连小孩都知道" means "even children know." The implied logic: if even the extreme case is true, everything else certainly is too.',
    'Discourse Context (跨句语境)': 'Mandarin is very comfortable leaving out information that the listener can infer from context. If the previous sentence already named the subject, the next sentence can drop it entirely. The tree visualization uses **Ghost Nodes** to show where these omitted words would go, and red arcs to trace what they refer back to.',
};
