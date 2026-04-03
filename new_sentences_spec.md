# New Sentences Spec: Coverage Gap Sentences

This spec provides all sentence content for the Data Linguist to generate AST trees. Each entry fills a specific structural gap identified in `coverage_gap_analysis.md`.

---

## 1. Basic Topic-Comment — Patient-Topic Structure
**Gap**: No example where the Topic is the thing acted upon, not the actor.

- **Chinese**: 苹果我已经吃了。
- **Pinyin**: Píng guǒ wǒ yǐ jīng chī le.
- **Translation**: The apple, I've already eaten it.
- **Explanation**: Here, **苹果** ("apple") sits as the Topic, but notice something different: the apple is not the one doing anything. It is the thing being acted upon. Inside the Comment, **我** ("I") is the actual actor, followed by **已经吃了** ("already ate"). This is a **patient-topic** sentence: the Topic is not the doer but the thing being discussed. English signals this with word order ("I ate the apple"), but Mandarin can freely place the patient first as a frame: "As for the apple, I already ate it." This flexibility is one of the most distinctive features of Mandarin's Topic-Comment system.
- **Structural Notes**: Patient-topic: the Topic NP is the semantic patient (受事), not the agent. 我 appears as a secondary Subject/Actor inside the Comment. Ghost node [它] optional reference arc back to Topic.

---

## 2. Basic Topic-Comment — Time/Location as Topic
**Gap**: No example where a time or location phrase serves as the sentence's Topic.

- **Chinese**: 墙上挂着一幅画。
- **Pinyin**: Qiáng shàng guà zhe yī fú huà.
- **Translation**: On the wall hangs a painting.
- **Explanation**: **墙上** ("on the wall") is the Topic. It is not a person or thing but a *location* serving as the frame for what follows. The Comment uses **挂着** ("is hanging"), with the durative aspect marker **着** indicating an ongoing state: something is currently hanging there. The painting (**一幅画**, where 幅 is the measure word for paintings and posters) is the thing existing in that location. This sentence type is called an "existential" or "presentative" pattern: it introduces something by first naming where it exists. English uses inverted word order for the same effect: "On the wall hangs a painting."
- **Structural Notes**: Location-topic: 墙上 is a locative NP functioning as Topic, not an Adjunct. The verb 挂 carries 着 for stative aspect. 一幅画 is the Subject of the existential clause inside the Comment.

---

## 3. BA Construction — Negative BA (没把)
**Gap**: No example showing negation placement before 把.

- **Chinese**: 他没把门关上。
- **Pinyin**: Tā méi bǎ mén guān shàng.
- **Translation**: He didn't close the door.
- **Explanation**: **他** ("he") is the Topic. The Comment introduces a critical rule about 把 sentences: the negation word **没** ("didn't") must come *before* 把, never after it. The pattern is 没 + 把 + object + verb + result. Here, **没把门关上** means "didn't close the door," where 关 ("close") + 上 ("shut") form the verb-result pair. If you tried to put 没 after 把 (把门没关上), native speakers would find it unnatural. This ordering rule also applies to 别 ("don't") and 不: they always precede 把.
- **Structural Notes**: Negation 没 is an Adjunct preceding the 把 phrase. Same internal structure as affirmative BA but with the negation marker placed above 把 in the tree. The complement 上 is a directional result.

---

## 4. BA Construction — Negative Command BA (别把)
**Gap**: No imperative/prohibition form of BA.

- **Chinese**: 别把它弄坏了。
- **Pinyin**: Bié bǎ tā nòng huài le.
- **Translation**: Don't break it.
- **Explanation**: This is a prohibition using 把. **别** ("don't") opens the sentence as a command marker, placed before 把 just like 没 in negative statements. The implied topic ([你], "you") is dropped because commands naturally omit the listener. Inside the 把 phrase, **它** ("it") is the spotlighted object, and **弄坏** (nòng huài, "mess up, break") is the verb-result compound: 弄 ("do/make") + 坏 ("broken"). The **了** signals that the breaking would result in a completed change of state. The pattern 别把...弄坏了 is one of the most common warnings in everyday Mandarin.
- **Structural Notes**: 别 is a prohibition adverb (Adjunct) preceding 把. The implied topic [你] is a ghost node. 弄坏 is a V+Result compound. 了 marks anticipated completion.

---

## 5. BEI Passive — Agentless BEI
**Gap**: No example showing that the agent after 被 can be omitted entirely.

- **Chinese**: 钱包被偷了。
- **Pinyin**: Qián bāo bèi tōu le.
- **Translation**: The wallet was stolen.
- **Explanation**: **钱包** ("wallet") is the Topic. The Comment uses **被** to mark a passive, but notice: there is no agent named between 被 and the verb. Nobody is specified as the thief. The sentence simply says the wallet *was stolen*, without caring by whom. This **agentless 被** pattern is extremely common in everyday Mandarin, especially when the agent is unknown or unimportant. Compare with the agent-specified version: 钱包被人偷了 ("the wallet was stolen by someone"). Both are natural, but the agentless form is shorter and more common in casual speech.
- **Structural Notes**: Agentless passive: no agent NP appears between 被 and the verb 偷. The 被 marks passive voice with an empty agent slot. 了 marks completion.

---

## 6. BEI Passive — Colloquial Passive with 让
**Gap**: No example of 让/叫 used as a passive marker instead of formal 被.

- **Chinese**: 我的自行车让人骑走了。
- **Pinyin**: Wǒ de zì xíng chē ràng rén qí zǒu le.
- **Translation**: My bicycle was ridden away by someone.
- **Explanation**: **我的自行车** ("my bicycle") is the Topic. The Comment uses **让** instead of 被 to mark the passive. In spoken Mandarin, 让 (and its cousin 叫) is far more common than 被 for passives, especially in casual conversation. **人** ("someone") is the agent, and **骑走** ("rode away") is a verb-directional compound: 骑 ("ride") + 走 ("away"). The meaning is identical to 被人骑走了, but 让 sounds more natural and colloquial. Think of 被 as the "formal" passive and 让 as the "casual" one. Both follow the same structure: Topic + passive marker + agent + verb.
- **Structural Notes**: 让 functions identically to 被 in passive structure. Agent 人 appears between 让 and the verb. 骑走 is a V+directional compound. 了 marks completion.

---

## 7. Shì-de Construction — Negative Shì-de
**Gap**: No example showing negation in the 是…的 frame.

- **Chinese**: 我不是故意打碎的。
- **Pinyin**: Wǒ bú shì gù yì dǎ suì de.
- **Translation**: I didn't break it on purpose.
- **Explanation**: **我** ("I") is the Topic. The **是…的** frame here spotlights the *manner* of the action, but in negative form. **不是** negates the focus: it was not *on purpose* that I broke it. The focused detail **故意** ("on purpose") sits between 是 and the verb. The verb-result compound **打碎** ("hit-shatter," meaning "broke") and the closing 的 complete the frame. Without 是...的, the sentence would be 我不是故意的 ("it wasn't on purpose"), which is vaguer. With the full frame, the sentence specifies *what* was not on purpose: the breaking. The negation 不 always goes before 是, never after it.
- **Structural Notes**: Negative 是...的: 不 precedes 是 as a negation Adjunct. 故意 is the focused manner adverb. 打碎 is a V+Result compound inside the frame. 的 closes the cleft.

---

## 8. Shì-de Construction — Pure Method/Means Focus
**Gap**: Need an unambiguous method/means 是…的 example.

- **Chinese**: 我是坐火车来的。
- **Pinyin**: Wǒ shì zuò huǒ chē lái de.
- **Translation**: I came by train.
- **Explanation**: **我** ("I") is the Topic. The **是…的** frame spotlights *how* the speaker came: **坐火车** ("by train," literally "sit-train"). The 是 opens the focused information, and the 的 at the end closes it. The question being answered is "How did you come?" not "Did you come?" Without 是...的, the sentence would simply be 我坐火车来了 ("I took the train here"), which reports the event. With 是...的, the emphasis shifts to the method of travel. This is one of the most practical uses of the construction: answering how, when, or where questions about past events.
- **Structural Notes**: 是...的 cleft focusing on method. 坐火车 is a serial verb phrase (sit + train = "take a train") inside the 是...的 bracket. 来 is the main verb. 的 closes the frame.

---

## 9. Directional Complements — Figurative/Idiomatic Directional
**Gap**: No example of directional complements used metaphorically rather than physically.

- **Chinese**: 我突然想起来了。
- **Pinyin**: Wǒ tū rán xiǎng qǐ lái le.
- **Translation**: I suddenly remembered.
- **Explanation**: **我** ("I") is the Topic. The adverb **突然** ("suddenly") sets the timing. The verb **想** ("think") combines with the directional complement **起来** ("up, come out") to form **想起来** ("recall, remember"). But nobody is physically moving upward here. The directional complement has shifted from a literal physical direction to a figurative meaning: a memory "rises up" into consciousness. This metaphorical use of directional complements is extremely common: 看出来 ("figure out," literally "see-out"), 坚持下去 ("keep going," literally "persist-down-go"), 醒过来 ("wake up," literally "awake-cross-come"). The **了** marks the moment of remembering as completed.
- **Structural Notes**: Figurative directional complement: 起来 is not literal movement but metaphorical emergence. 想 is the Head Verb. 起来 is a compound directional complement (direction 起 + perspective 来). 突然 is a manner Adjunct. 了 marks completion.

---

## 10. Directional Complements — Abstract Continuation
**Gap**: Second example of figurative directional, showing "continuing onward."

- **Chinese**: 你要坚持下去。
- **Pinyin**: Nǐ yào jiān chí xià qù.
- **Translation**: You need to keep going.
- **Explanation**: **你** ("you") is the Topic. The Comment uses **要** ("need to, should") followed by **坚持** ("persist, hold firm") and the directional complement **下去** ("down-go," meaning "onward, continuing"). Nobody is physically going downward. The complement 下去 has shifted to an abstract meaning: keep something going into the future. This is one of the most common figurative directionals: 说下去 ("keep talking"), 活下去 ("keep living"), 学下去 ("keep studying"). The direction word 下 ("down") maps to the idea of extending forward through time, and 去 ("go, away from speaker") reinforces that the action stretches into the future.
- **Structural Notes**: Figurative directional: 下去 means "continuing onward" not literal downward movement. 要 is a modal auxiliary (Adjunct). 坚持 is the Head Verb. 下去 is a compound directional (direction 下 + perspective 去).

---

## 11. Correlative Patterns — 不但…而且… (Not Only...But Also)
**Gap**: Missing foundational conjunctive correlative patterns.

- **Chinese**: 他不但会说英语，而且还会说法语。
- **Pinyin**: Tā bú dàn huì shuō Yīng yǔ, ér qiě hái huì shuō Fǎ yǔ.
- **Translation**: He not only speaks English, but also speaks French.
- **Explanation**: **他** ("he") is the Topic. The **不但…而且…** frame builds an escalating pair: the first clause states something already impressive (speaks English), and the second clause tops it (also speaks French). **不但** ("not only") opens the first half, and **而且** ("but also") opens the second. The **还** ("additionally, still") inside the second clause reinforces the escalation. Both clauses share the same Topic, so 他 appears only once. This correlative pattern is one of the most useful in Mandarin for building emphasis and expressing that something exceeds expectations.
- **Structural Notes**: Correlative frame: 不但 marks the first clause as Adjunct/setup, 而且 introduces the escalating main Comment. Both clauses share the Topic 他. 还 is an adverb reinforcing the addition. 会 is a modal auxiliary.

---

## 12. Correlative Patterns — 虽然…但是… (Although...But)
**Gap**: Missing concessive correlative pattern.

- **Chinese**: 虽然很累，但是很开心。
- **Pinyin**: Suī rán hěn lèi, dàn shì hěn kāi xīn.
- **Translation**: Although tired, (I'm) very happy.
- **Explanation**: The Topic is an implied general actor (dropped "I" or "one"), which is very natural in Mandarin. The **虽然…但是…** frame expresses concession: "although A, but B." The first clause concedes: 虽然很累 ("although very tired"). The second clause counters: 但是很开心 ("but very happy"). In Mandarin, both markers are typically required. English uses "although" alone, but Mandarin pairs 虽然 with 但是 (or 可是, 不过). The tree shows two parallel Comment clauses joined by this concessive frame. This is one of the most essential structures for expressing contrast.
- **Structural Notes**: Concessive correlative: 虽然 marks the conceding clause as a conditional Adjunct. 但是 introduces the main Comment. Implied Topic is a ghost node. Both clauses contain adjectival predicates (很累, 很开心).

---

## 13. Aspect Markers — Double 了 (了…了)
**Gap**: No example of the double-了 pattern for ongoing duration up to now.

- **Chinese**: 我学了三年中文了。
- **Pinyin**: Wǒ xué le sān nián Zhōng wén le.
- **Translation**: I've been studying Chinese for three years (and still am).
- **Explanation**: **我** ("I") is the Topic. This sentence uses **two separate 了**, and the difference between them matters. The first **了** (after the verb 学) marks that the action of studying has accumulated. The second **了** (at the end of the sentence) signals that this situation continues up to the present moment. Together, they mean: "I have studied for three years *and I'm still studying*." If you removed the final 了, the sentence would mean "I studied for three years (and then stopped)." This double-了 pattern is one of the trickiest but most important aspect distinctions in Mandarin.
- **Structural Notes**: Double 了: first 了 is a verb-suffix aspect marker (completion of accumulated time), second 了 is a sentence-final particle (current relevance/change of state). 三年 is a duration complement. 中文 is the retained object.

---

## 14. Aspect Markers — Simultaneous Action 着 (V着V)
**Gap**: Only stative 着 is demonstrated; no concurrent-action 着.

- **Chinese**: 他笑着说："没关系。"
- **Pinyin**: Tā xiào zhe shuō: "Méi guān xi."
- **Translation**: He said with a smile: "It's fine."
- **Explanation**: **他** ("he") is the Topic. The Comment chains two actions happening at the same time: **笑着** ("smiling") and **说** ("said"). The **着** after 笑 is the concurrent-action marker: it tells you that the smiling was happening while the speaking occurred. This is the *other* major use of 着, different from the stative use (门开着, "the door is open"). Stative 着 describes a lasting state; concurrent 着 describes a manner or background action. Think of it as: [verb1 + 着] sets the backdrop, then [verb2] is the main event. Other examples: 站着吃 ("eat while standing"), 哭着跑 ("run while crying").
- **Structural Notes**: Concurrent 着: 笑着 is a manner Adjunct (V1+着) modifying the main verb 说. The quoted speech 没关系 is the Object of 说. This is a serial verb construction with 着 marking simultaneity rather than sequence.

---

## 15. Comparatives — Negative Comparison (没有)
**Gap**: No example of the "A is less than B" comparison pattern.

- **Chinese**: 我没有他高。
- **Pinyin**: Wǒ méi yǒu tā gāo.
- **Translation**: I am not as tall as him.
- **Explanation**: **我** ("I") is the Topic. The Comment uses the **没有** comparison frame, which is Mandarin's way of saying "A is not as [adjective] as B." The pattern is: A + 没有 + B + adjective. Here: I + 没有 + him + tall. This is the counterpart to the 比 comparison (which says "more than"). You cannot say 我不比他高 for this meaning; 没有 is the standard frame for "less than" or "not as much as." The tree shows 没有 linking the two people being compared, with the adjective 高 ("tall") as the quality being measured.
- **Structural Notes**: Negative comparative: 没有 functions as the comparative verb (Head Verb). 他 is the Object (reference point). 高 is a predicative adjective (Complement or Adjective node). No 比 appears in this construction.

---

## 16. Comparatives — Specific Quantity Disparity
**Gap**: No example showing a number inside a 比 comparison.

- **Chinese**: 他比我大三岁。
- **Pinyin**: Tā bǐ wǒ dà sān suì.
- **Translation**: He is three years older than me.
- **Explanation**: **他** ("he") is the Topic. The Comment uses the **比** comparison with a specific number: **大三岁** ("older by three years"). The pattern is: Topic + 比 + reference + adjective + quantity. Here: he + compared to me + older + by three years. The number slips in right after the adjective, specifying the exact gap. This is how Mandarin expresses precise differences: 高两厘米 ("taller by two centimeters"), 贵十块钱 ("more expensive by ten yuan"), 早一个小时 ("earlier by one hour"). The quantity always follows the adjective, never precedes it.
- **Structural Notes**: 比 comparative with quantified difference. 比我 is the comparative Adjunct. 大 is the Adjective. 三岁 is a quantity Complement specifying the degree of difference.

---

## 17. Rhetorical Questions — Casual Pushback (不是…吗？)
**Gap**: All rhetorical questions use formal 难道; no casual 不是…吗 pattern.

- **Chinese**: 你不是已经吃过了吗？
- **Pinyin**: Nǐ bú shì yǐ jīng chī guò le ma?
- **Translation**: Didn't you already eat?
- **Explanation**: **你** ("you") is the Topic. The Comment uses the **不是…吗** rhetorical frame, which is far more common in casual conversation than the intense 难道 pattern. **不是** ("isn't it that") opens the challenge, and **吗** closes the question. The expected answer is "yes, you did eat." The speaker is not genuinely asking; they are pushing back, perhaps because the listener is reaching for more food. The verb phrase **已经吃过了** ("already ate," with 过 marking past experience and 了 marking completion) sits inside the frame. This 不是...吗 pattern is one of the most natural ways to express mild surprise or gentle challenge in everyday speech.
- **Structural Notes**: 不是...吗 rhetorical frame: 不是 is a negated copula functioning as a mood/focus marker. 已经 is a time Adjunct. 吃过了 uses experiential 过 + completion 了. 吗 is the question particle.

---

## 18. Rhetorical Questions — 怎么 (How Could...)
**Gap**: No example of 怎么-based rhetorical questions.

- **Chinese**: 我怎么知道？
- **Pinyin**: Wǒ zěn me zhī dào?
- **Translation**: How would I know?
- **Explanation**: **我** ("I") is the Topic. The Comment uses **怎么** ("how") before the verb **知道** ("know") to form a rhetorical question. The speaker is not genuinely asking "by what method would I know?" They are pushing back: "There is no way I would know." Rhetorical 怎么 is one of the most common ways to express frustration or deflect responsibility in spoken Mandarin. It is much lighter than 难道 and much more natural in casual speech. The tree shows a simple structure: just Topic + 怎么 + verb. Other examples: 我怎么会忘 ("How could I forget?"), 你怎么能这样 ("How can you be like this?").
- **Structural Notes**: Rhetorical 怎么: functions as a manner/reason Adjunct before the verb. No 吗 or 呢 needed at the end; the intonation carries the question. 知道 is the Head Verb with no explicit Object.

---

## 19. Separable Verbs — Question Word Insertion
**Gap**: No example showing a question word splitting a separable verb.

- **Chinese**: 你生什么气？
- **Pinyin**: Nǐ shēng shén me qì?
- **Translation**: What are you angry about?
- **Explanation**: **你** ("you") is the Topic. The separable verb **生气** ("be angry") splits to insert the question word **什么** ("what"). The verb half 生 stays in position, and the noun half 气 ("anger/temper") moves after the question word: 生什么气 = "produce what anger?" This proves that the noun half of a separable verb is a real, functioning object, not just a syllable glued to the verb. You can modify it, question it, or quantify it. Other examples: 你跳什么舞 ("What dance are you doing?"), 他帮什么忙 ("What help is he providing?"). The tree splits 生 and 气 with 什么 inserted between them.
- **Structural Notes**: Separable verb 生气 split by interrogative. 生 is the Head Verb. 什么 is an interrogative Attributive modifying 气 (the Object). 气 is the Object noun.

---

## 20. Separable Verbs — Verb Reduplication (AAB)
**Gap**: No example of the reduplication pattern unique to separable verbs.

- **Chinese**: 我们去散散步吧。
- **Pinyin**: Wǒ men qù sàn san bù ba.
- **Translation**: Let's go take a stroll.
- **Explanation**: **我们** ("we") is the Topic. The Comment chains two verb phrases: **去** ("go") followed by **散散步** ("take a stroll"). The interesting part is **散散步**: the verb half 散 is *reduplicated* (散散) while the noun half 步 stays single. This **AAB pattern** is unique to separable verbs and signals a casual, brief, or easy action. You cannot reduplicate the noun half. Compare: 见见面 ("meet up briefly"), 聊聊天 ("have a little chat"), 跑跑步 ("go for a quick jog"). The sentence-final **吧** makes this a suggestion. The tree shows the serial verb chain (去 + 散散步) with the reduplication visible in the verb node.
- **Structural Notes**: AAB reduplication: 散散 is a reduplicated Head Verb (casual/diminutive aspect). 步 is the Object. 去 + 散散步 forms a serial verb chain (go + stroll). 吧 is a suggestion particle.

---

## 21. Pivotal Constructions — Chained Pivots
**Gap**: No example of nested/chained pivotal constructions.

- **Chinese**: 老板叫我请他吃饭。
- **Pinyin**: Lǎo bǎn jiào wǒ qǐng tā chī fàn.
- **Translation**: The boss told me to treat him to a meal.
- **Explanation**: **老板** ("boss") is the Topic. The Comment uses **two pivotal verbs** chained together. First pivot: **叫** ("tell/order") makes **我** ("me") the pivot. I am both the object of "tell" and the actor of what comes next. Second pivot: **请** ("invite/treat") makes **他** ("him") the next pivot. He is the object of "invite" and the actor of the final action: **吃饭** ("eat a meal"). The tree shows two levels of embedding: the boss tells me, I invite him, he eats. Each pivotal verb creates a new layer, and each pivot person sits at the hinge between two actions. This chaining can go even deeper in complex sentences.
- **Structural Notes**: Double pivot: 叫 is the first pivotal verb with 我 as pivot. 请 is the second pivotal verb with 他 as pivot. 吃饭 is the innermost V+O pair. Three levels of embedding in the tree.

---

## 22. Pivotal Constructions — Existential/Descriptive Pivot (有)
**Gap**: No example of 有 as a pivotal verb introducing someone who then does something.

- **Chinese**: 有个朋友来看我。
- **Pinyin**: Yǒu gè péng yǒu lái kàn wǒ.
- **Translation**: A friend came to see me.
- **Explanation**: This sentence has no explicit Topic; the implied frame is a general "there is..." The verb **有** ("there is/exists") introduces **一个朋友** ("a friend," with the measure word 个), who then becomes the actor of the next action: **来看我** ("came to see me"). This is a **descriptive pivot**: 有 introduces a new character onto the scene, and that character immediately acts. The tree shows 有 as the pivotal verb, with 朋友 at the hinge. This pattern is extremely common for narrating events: 有人敲门 ("someone is knocking"), 有个同学问我 ("a classmate asked me"). It is one of the most natural ways to introduce new information.
- **Structural Notes**: Existential pivot: 有 is the pivotal verb introducing a new referent. 个 is a measure word (Attributive). 朋友 is the pivot: Object of 有 and Subject/Actor of 来看我. 来看我 is a serial verb chain (come + see + me).

---

## 23. Potential Complements — Lexicalized Potential (对不起)
**Gap**: No example showing that common vocabulary words are structurally potential complements.

- **Chinese**: 对不起，我来晚了。
- **Pinyin**: Duì bù qǐ, wǒ lái wǎn le.
- **Translation**: Sorry, I arrived late.
- **Explanation**: The word **对不起** ("sorry") is so common that most learners never think about its internal structure. But look at it through the tree: 对 ("face, match") + 不 ("not") + 起 ("rise, worthy"). It literally means "cannot face up to," or "am not worthy of facing you." This is a **lexicalized potential complement**: a potential complement pattern (V + 不 + result) that has solidified into a fixed vocabulary word. The positive form 对得起 ("can face, am worthy of") still exists. Other examples: 了不起 (liǎo bù qǐ, "amazing," literally "cannot finish rising"), 来不及 (lái bù jí, "too late," literally "cannot come in time"). The rest of the sentence, **我来晚了** ("I came late"), uses the resultative compound 来晚 ("arrived late").
- **Structural Notes**: Lexicalized potential complement: 对不起 = V(对) + potential negation(不) + complement(起). Structurally identical to productive potential complements but frozen as vocabulary. 我来晚了 = Topic + V(来) + resultative complement(晚) + 了.

---

## 24. Degree Complements — Negative Degree (得+不)
**Gap**: No example showing negation inside a degree complement.

- **Chinese**: 他跑得不快。
- **Pinyin**: Tā pǎo de bú kuài.
- **Translation**: He doesn't run fast.
- **Explanation**: **他** ("he") is the Topic. The verb **跑** ("run") is linked by **得** to the degree complement **不快** ("not fast"). The negation 不 goes *after* 得, inside the complement, not before the verb. This is the key rule: 跑得不快 ("runs not fast") is correct; 不跑得快 is wrong. The 得 bridges the verb to its description, and all the descriptive content (including negation) lives on the complement side. Compare with the positive: 跑得快 ("runs fast"). The negation simply flips the quality. The tree shows 不快 as a single negated adjective phrase inside the Complement node.
- **Structural Notes**: Negative degree complement: 不 appears inside the Complement, after 得, not before the verb. 跑 is the Head Verb. 得 is the degree complement linker. 不快 is the negated adjective (Complement).

---

## 25. Conditional Sentences — Concessive Conditional (即使…也…)
**Gap**: No concessive conditional pattern.

- **Chinese**: 即使下雨，我也要去。
- **Pinyin**: Jí shǐ xià yǔ, wǒ yě yào qù.
- **Translation**: Even if it rains, I'm still going.
- **Explanation**: The **即使…也…** frame expresses a concessive conditional: "even if A happens, B will still happen." **即使下雨** ("even if it rains") states the hypothetical obstacle. **我也要去** ("I still want to go") states the determination to proceed regardless. The key difference from 如果...就 is that 即使...也 signals the speaker's resolve: the condition does not matter. The 也 ("also/still") in the result clause reinforces the defiance. The tree shows the 即使 clause as a concessive Adjunct before the main Comment. Other similar patterns: 就算...也 ("even if"), 哪怕...也 ("even if, no matter what").
- **Structural Notes**: Concessive conditional: 即使 marks the concessive clause as an Adjunct. 也 appears in the main clause as a reinforcing adverb. 要 is a modal auxiliary. 下雨 is a V+O compound ("fall rain").

---

## 26. Conditional Sentences — Unless Conditional (除非…否则…)
**Gap**: No negative conditional pattern.

- **Chinese**: 除非你请客，否则我不去。
- **Pinyin**: Chú fēi nǐ qǐng kè, fǒu zé wǒ bú qù.
- **Translation**: Unless you treat, I'm not going.
- **Explanation**: The **除非…否则…** frame expresses a negative conditional: "unless A, otherwise B." **除非你请客** ("unless you treat/pay") states the one and only condition that would change the outcome. **否则我不去** ("otherwise I'm not going") states what happens if the condition is not met. This is the reverse of 只要...就: instead of saying "as long as X, then Y," it says "only if X; otherwise, not Y." The tree shows the 除非 clause as a conditional Adjunct, with 否则 introducing the default-case Comment. 请客 is itself an interesting compound: 请 ("invite") + 客 ("guest"), meaning "treat someone to a meal."
- **Structural Notes**: Negative conditional: 除非 marks the exception clause as a conditional Adjunct. 否则 introduces the default outcome Comment. 请客 is a V+O compound. 不去 contains the negation 不 + verb 去.
