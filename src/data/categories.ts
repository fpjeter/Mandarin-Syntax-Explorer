/**
 * Canonical list of sentence categories used in the example databank.
 * `SentenceCategory` is derived from this array so the type automatically
 * stays in sync — no need to update grammar.ts when adding a new category.
 */
import type { BilingualString } from '../i18n/strings';

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
 * Values are BilingualString — zh fields are filled in by the Educational Publisher.
 */
export const CATEGORY_DESCRIPTIONS: Record<SentenceCategory, BilingualString> = {
    'Basic Topic–Comment (主题评论)': {
        en: 'Name what you\'re talking about, then say something about it. This is the foundation of every Mandarin sentence.',
        zh: '先点明你要谈的对象，再对它做出评论。这是每个中文句子的基础。',
    },
    'BA Construction (把字句)': {
        en: 'Use 把 to move a specific object before the verb, spotlighting what is being acted on.',
        zh: '用"把"把宾语提到动词前面，聚焦于"它怎么了"。',
    },
    'BEI Passive (被字句)': {
        en: 'Place the receiver of the action first, then use 被 to introduce who or what caused it.',
        zh: '把受影响的对象放在前面，用"被"引出施事者。',
    },
    'Comparatives (比较句)': {
        en: 'Compare two things using 比 ("more than") or 跟…一样 ("equally").',
        zh: '用"比"（更）或"跟……一样"（等同）来比较两个事物。',
    },
    'Correlative Patterns (关联句型)': {
        en: 'Pair two clauses to express "the more X, the more Y" or "as soon as X, then Y."',
        zh: '用关联词配对两个分句，表达"越……越……"或"一……就……"。',
    },
    'Shì–de Construction (是…的)': {
        en: 'Use 是…的 to highlight when, where, or how a past event happened.',
        zh: '用"是……的"聚焦过去事件发生的时间、地点或方式。',
    },
    'Resultative Complements (结果补语)': {
        en: 'Attach a result word directly after the verb to show what the action accomplished.',
        zh: '在动词后面直接接一个结果词，表示动作达成了什么效果。',
    },
    'Directional Complements (趋向补语)': {
        en: 'Add a direction word (来/去, 上/下, 进/出) after the verb to show which way something moves.',
        zh: '在动词后面加上方向词（来/去、上/下、进/出），表示动作的方向。',
    },
    'Potential Complements (可能补语)': {
        en: 'Insert 得 or 不 between a verb and its result to express whether the outcome is achievable.',
        zh: '在动词和结果之间插入"得"或"不"，表达结果能否实现。',
    },
    'Degree Complements (程度补语)': {
        en: 'Use verb + 得 + description to say how well, how fast, or how intensely an action was done.',
        zh: '用"动词+得+描述"来说明动作完成得怎么样、有多快或多强烈。',
    },
    'Aspect Markers (着/过/了)': {
        en: 'Mark ongoing state (着), past experience (过), or completed action (了) on the verb.',
        zh: '用"着"标记持续状态，"过"标记经历，"了"标记完成。',
    },
    'Pivotal Constructions (兼语句)': {
        en: 'The person you act on becomes the doer of the next action, creating a chain.',
        zh: '前一个动词的宾语变成后一个动词的主语，形成连锁。',
    },
    'Serial Verb Constructions (连动句)': {
        en: 'String multiple actions together under one subject in sequence. No "and" needed.',
        zh: '同一主语下依次串联多个动作，不需要"和"字连接。',
    },
    'Separable Verbs (离合词)': {
        en: 'Some verbs can split in two, letting aspect markers or time phrases slip in between.',
        zh: '有些动词可以拆成两半，中间插入体标记或时间成分。',
    },
    'Double Topic (双主题)': {
        en: 'Start with the big-picture topic, then zoom in to talk about a specific part of it.',
        zh: '先点明大范围话题，再聚焦到具体部分来说。',
    },
    'Conditional Sentences (如果…就…)': {
        en: 'Set up "if...then" reasoning with patterns like 如果…就…, 只要…就…, or 要是…就…',
        zh: '用"如果……就……""只要……就……"等句式建立条件关系。',
    },
    'Rhetorical Questions (反问句)': {
        en: 'Use 难道 or 非…不可 to make a strong point rather than ask for information.',
        zh: '用"难道"或"非……不可"来强调观点，而非真正提问。',
    },
    'Even (连…都/也)': {
        en: 'Use 连…都 or 连…也 to express "even X" for emphasis, surprise, or disappointment.',
        zh: '用"连……都"或"连……也"表达"连X都……"的强调、惊讶或遗憾。',
    },
    'Discourse Context (跨句语境)': {
        en: 'When context from a previous sentence lets Mandarin leave out the subject entirely.',
        zh: '当前句的语境让中文可以完全省略主语时的情况。',
    },
};

/**
 * Long-form pedagogical explanations for each sentence category.
 * These appear in the Grammar Guide panel.
 *
 * Rules: warm tutor tone, learner-familiar vocabulary, no FLS jargon,
 * no em-dashes, no "Think of it like..." metaphors.
 */
export const FULL_CATEGORY_EXPLANATIONS: Record<SentenceCategory, BilingualString> = {
    'Basic Topic–Comment (主题评论)': {
        en: 'Every Mandarin sentence follows the same core pattern: first, name what you want to talk about (the **Topic**), then say something about it (the **Comment**). "That restaurant, the food is great" is perfectly natural Mandarin because 那家餐厅 sets the topic, and 菜很好吃 delivers the comment. Once you see this split, you will notice it everywhere.',
        zh: '每个中文句子都遵循相同的核心模式：先说你要谈论什么（**话题**），再对它做出评述（**评论**）。"那家餐厅，菜很好吃"是完全自然的中文，因为"那家餐厅"设定了话题，"菜很好吃"传递了评论。一旦你看懂了这个划分，就会发现它无处不在。',
    },
    'BA Construction (把字句)': {
        en: 'When you want to say what happened to a specific thing, Mandarin uses **把** to move that thing in front of the verb. "I 把 the cup broke" tells you: this cup, something happened to it. **把** always signals that the object is specific and that some change, movement, or result is about to be described. If nothing changes ("I 把 the book liked" sounds wrong), 把 does not fit.',
        zh: '当你想说某个特定东西发生了什么事时，中文用**把**把它提到动词前面。"我把杯子打碎了"告诉你：这个杯子，它发生了变化。**把**总是意味着宾语是确定的、具体的，并且接下来会描述某种变化、移动或结果。如果没有变化（"我把那本书喜欢了"听起来就不对），把字就用不上。',
    },
    'BEI Passive (被字句)': {
        en: 'When the focus is on *who was affected* rather than who did the acting, Mandarin uses **被**. The receiver goes first as the Topic, then 被 introduces who caused it. "The vase 被 the cat knocked over" puts the vase front and center. In everyday speech, 被 often has a slightly negative or unfortunate feel, though modern usage is loosening that.',
        zh: '当重点是*谁受到了影响*而不是谁做了这件事时，中文用**被**字句。受影响的对象先作为话题出现，然后"被"引出施事者。"花瓶被猫打碎了"把花瓶放在最前面。在日常口语中，"被"往往带有一点不幸或消极的色彩，不过现代用法正在变得更加灵活。',
    },
    'Comparatives (比较句)': {
        en: 'To compare two things, put the first item as the Topic, use **比** ("compared to") followed by the second item, then state the difference. "I 比 you tall" is the basic shape. You can also add degree words: 比你高**得多** ("taller by a lot"). For equality, use **跟…一样** ("the same as").',
        zh: '比较两个事物时，把第一项作为话题，用**比**（"跟……相比"）加上第二项，然后说出差异。"我比你高"是最基本的结构。还可以加程度词：比你高**得多**（"高很多"）。表示相同则用**跟……一样**。',
    },
    'Correlative Patterns (关联句型)': {
        en: 'These patterns link two clauses, showing how one change drives another. The most common are **越…越…** ("the more X, the more Y") and **一…就…** ("as soon as X, immediately Y"). No conjunction is needed between the clauses. Just the repeated marker does all the work: 越吃越胖, "the more you eat, the fatter you get."',
        zh: '关联句型把两个分句连接起来，展示一个变化如何驱动另一个变化。最常见的是**越……越……**（"越X越Y"）和**一……就……**（"X一发生，Y立刻跟上"）。分句之间不需要连词，重复的标记词就完成了所有工作：越吃越胖，"吃得越多就越胖"。',
    },
    'Shì–de Construction (是…的)': {
        en: 'When you already know an action happened and want to highlight a specific detail about it, use **是…的**. It puts a spotlight on *when*, *where*, or *how* the event took place. "I 是 yesterday in the library 的 saw her" zooms in on the time and place. Without 是…的, the sentence is a plain statement; with it, you are answering a question like "when did you see her?"',
        zh: '当你已经知道某件事发生了、想聚焦于它的某个细节时，用**是……的**。它把注意力集中在事件发生的*时间*、*地点*或*方式*上。"我是昨天在图书馆看到她的"把焦点对准了时间和地点。去掉是……的就是普通陈述；加上它，你回答的就是"你什么时候看到她的？"这样的问题。',
    },
    'Resultative Complements (结果补语)': {
        en: 'Mandarin loves to fuse an action with its result into a tight pair. 听**懂** means "listen and understand"; 洗**干净** means "wash clean." The first part says what you did; the second part says how it turned out. This pairing is one of the most common structures in the language. If you can name the result, you can attach it right after the verb.',
        zh: '中文特别擅长把动作和结果融合成紧密的组合。听**懂**="听了并且理解了"；洗**干净**="洗到干净为止"。前半部分说你做了什么，后半部分说结果如何。这种搭配是中文里最常见的结构之一。只要你能说出结果，就可以直接接在动词后面。',
    },
    'Directional Complements (趋向补语)': {
        en: 'When you need to say *which way* an action goes, add a direction word after the verb. **来** (toward the speaker) and **去** (away from the speaker) are the foundation. You can also add specific directions: 进 (in), 出 (out), 上 (up), 下 (down). These combine into compounds like 走**进来** ("walk in toward me") or 跑**上去** ("run up and away").',
        zh: '需要说明动作朝*哪个方向*进行时，在动词后面加上方向词。**来**（朝说话者方向）和**去**（远离说话者）是基础。还可以加上具体方向：进（向内）、出（向外）、上（向上）、下（向下）。它们组合成复合词，如走**进来**（"走进来，朝我这边"）或跑**上去**（"跑上去，离我远去"）。',
    },
    'Potential Complements (可能补语)': {
        en: 'Potential complements tell you whether an action *can* reach its result. They work like a switch inside a verb-result pair: insert **得** ("can") or **不** ("cannot") between the verb and the result. 听**得**懂 means "can understand by listening"; 听**不**懂 means "cannot understand." One syllable flips the entire meaning.',
        zh: '可能补语告诉你一个动作*能不能*达到它的结果。它们就像动词和结果之间的开关：插入**得**（能）或**不**（不能）。听**得**懂="听得懂"；听**不**懂="听不懂"。一个字就翻转了整句话的含义。',
    },
    'Degree Complements (程度补语)': {
        en: 'When you want to describe *how well or how intensely* an action was performed, use **得** after the verb, followed by a descriptive phrase. 跑**得**很快 means "runs very fast." 忙**得**忘了吃饭 means "so busy that I forgot to eat." The 得 links the verb to a rating of its quality or consequence.',
        zh: '想描述动作完成得*多好或多强烈*时，在动词后面加**得**，再跟上描述短语。跑**得**很快="跑得非常快"。忙**得**忘了吃饭="忙到忘了吃饭"。"得"把动词和对它质量或后果的评价连接起来。',
    },
    'Aspect Markers (着/过/了)': {
        en: 'Mandarin does not have tenses like past or future. Instead, small particles attach to the verb to describe *how* the action relates to time. **着** marks an ongoing state (门开着, "the door is open"). **过** marks life experience (我去过中国, "I have been to China"). **了** marks completion (我吃了, "I ate / I have eaten").',
        zh: '中文没有像过去时、将来时那样的时态变化。取而代之的是，小的助词附着在动词上，描述动作与时间的*关系*。**着**标记持续状态（门开着，"门开着"）。**过**标记人生经历（我去过中国，"我曾经去过中国"）。**了**标记完成（我吃了，"我吃过了"）。',
    },
    'Pivotal Constructions (兼语句)': {
        en: 'In a pivotal construction, the object of the first verb becomes the subject of the second. "Mom 让 me go buy milk" has "me" playing two roles: I am the person Mom is directing, and I am the person who goes. Verbs like 让 (let), 叫 (tell), 请 (invite), and 派 (send) all create this pivot.',
        zh: '在兼语句中，前一个动词的宾语变成后一个动词的主语。"妈妈让我去买牛奶"中的"我"扮演双重角色：我是妈妈指派的对象，也是去买牛奶的人。让、叫、请、派等动词都能构成这种枢纽结构。',
    },
    'Serial Verb Constructions (连动句)': {
        en: 'Mandarin lets you line up multiple actions in sequence under one subject, with no connecting words needed. "I take the bus go to school buy lunch" is three actions in a row, and each one flows naturally into the next. The order of the verbs matches the chronological order of the events.',
        zh: '中文允许在同一主语下按顺序排列多个动作，不需要连接词。"我坐公交去学校买午饭"是三个动作依次排开，每一个都自然地引向下一个。动词的排列顺序和事件发生的时间顺序完全一致。',
    },
    'Separable Verbs (离合词)': {
        en: 'Some common verbs are actually two-character compounds that can be pulled apart. **见面** ("meet": see + face) becomes 见**了三次**面 ("met three times") when you insert a frequency count between the halves. **睡觉** ("sleep") becomes 睡**了一个小时的**觉 when you insert a duration. Knowing which verbs are separable is part of building fluency.',
        zh: '有些常见动词其实是两个字的复合词，可以被拆开。**见面**（见+面）变成见**了三次**面（"见了三次面"），中间插入了次数。**睡觉**变成睡**了一个小时的**觉，中间插入了时长。知道哪些动词是离合词，是提高流利度的一部分。',
    },
    'Double Topic (双主题)': {
        en: 'Sometimes a sentence has two layers of topic. First you name the big picture (the whole), then you zoom in on a detail (the part). "That elephant, its nose is very long" uses 那只大象 as the outer topic and 鼻子 as the inner topic. This whole-then-part pattern is very natural in Mandarin.',
        zh: '有时候一个句子有两层话题。先说大范围（整体），再聚焦到细节（部分）。"那只大象，鼻子很长"用"那只大象"做外层话题，"鼻子"做内层话题。这种从整体到部分的模式在中文里非常自然。',
    },
    'Conditional Sentences (如果…就…)': {
        en: 'Conditional sentences set up an "if...then" relationship. The most common pattern is **如果…就…**, but you will also see **只要…就…** ("as long as...then...") and **要是…就…** (a more colloquial "if...then"). The condition clause acts as the Topic, and the result clause is the Comment.',
        zh: '条件句建立"如果……那么……"的关系。最常见的句式是**如果……就……**，你还会看到**只要……就……**（"只要……就……"）和**要是……就……**（更口语化的"如果……就……"）。条件分句充当话题，结果分句充当评论。',
    },
    'Rhetorical Questions (反问句)': {
        en: 'Rhetorical questions in Mandarin are not really questions; they are emphatic statements in disguise. **难道** ("could it really be that...") signals that the speaker expects the opposite of what the sentence literally says. **非…不可** ("must") uses double negation to express absolute necessity.',
        zh: '中文的反问句并不是真正的提问，而是伪装成问题的强调性陈述。**难道**（"难道……"）表示说话人期待的答案与字面意思相反。**非……不可**（"非……不可"）用双重否定表达绝对必要性。',
    },
    'Even (连…都/也)': {
        en: 'The **连…都** and **连…也** patterns express "even" by fronting the extreme or surprising item with 连, then reinforcing it with 都 or 也. "连小孩都知道" means "even children know." The implied logic: if even the extreme case is true, everything else certainly is too.',
        zh: '**连……都**和**连……也**通过用"连"把最极端或最出人意料的事物提前，再用"都"或"也"加强，来表达"连……都……"。"连小孩都知道"="连小孩子都知道"。隐含的逻辑是：如果连最极端的情况都成立，其他的就更不用说了。',
    },
    'Discourse Context (跨句语境)': {
        en: 'Mandarin is very comfortable leaving out information that the listener can infer from context. If the previous sentence already named the subject, the next sentence can drop it entirely. The tree visualization uses **Ghost Nodes** to show where these omitted words would go, and red arcs to trace what they refer back to.',
        zh: '中文非常习惯省略听话人能从上下文推知的信息。如果前一句已经说明了主语，下一句就可以完全省略。语法树用**幽灵节点**来标示这些被省略的词原本所在的位置，用红色弧线追溯它们指代的对象。',
    },
};
