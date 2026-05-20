# AUDIT-4: Category Balance

**Auditor:** Linguistics Specialist  
**Date:** 2026-05-20  
**Scope:** 133 modern sentences across 19 categories; 52 classical sentences across 11 categories  
**Status:** ✅ Complete — informational report, no edits made

---

## 1. Summary

| Metric | Modern | Classical |
|---|---|---|
| Total sentences | 133 | 52 |
| Total categories | 19 | 11 |
| Mean sentences/category | 7.0 | 4.7 |
| Median sentences/category | 6 | 5 |
| **Thin** (< 3 sentences) | **0** | **0** |
| **Dense** (> 12 sentences) | **1** | **0** |

**Overall assessment:** The corpus is well-balanced. No category falls below the "thin" threshold of 3. One modern category exceeds the "dense" threshold of 12. Three modern categories sit at the lower end (5 each) and would benefit from modest expansion.

---

## 2. Modern Sentence Distribution (19 categories)

Sorted by count, descending. Flagged rows are highlighted.

| # | Category | Count | Flag |
|---|---|---|---|
| 1 | Basic Topic–Comment (主题评论) | 15 | 🔴 **DENSE** |
| 2 | BEI Passive (被字句) | 8 | |
| 3 | Shì–de Construction (是…的) | 8 | |
| 4 | Pivotal Constructions (兼语句) | 8 | |
| 5 | Correlative Patterns (关联句型) | 8 | |
| 6 | Conditional Sentences (如果…就…) | 8 | |
| 7 | BA Construction (把字句) | 7 | |
| 8 | Comparatives (比较句) | 7 | |
| 9 | Potential Complements (可能补语) | 7 | |
| 10 | Rhetorical Questions (反问句) | 6 | |
| 11 | Separable Verbs (离合词) | 6 | |
| 12 | Resultative Complements (结果补语) | 6 | |
| 13 | Double Topic (双主题) | 6 | |
| 14 | Degree Complements (程度补语) | 6 | |
| 15 | Directional Complements (趋向补语) | 6 | |
| 16 | Aspect Markers (着/过/了) | 6 | |
| 17 | Serial Verb Constructions (连动句) | 5 | 🟡 low |
| 18 | Discourse Context (跨句语境) | 5 | 🟡 low |
| 19 | Even (连…都/也) | 5 | 🟡 low |

### Modern distribution chart (text histogram)

```
Basic Topic–Comment     ████████████████ 15  🔴
BEI Passive             █████████        8
Shì–de Construction     █████████        8
Pivotal Constructions   █████████        8
Correlative Patterns    █████████        8
Conditional Sentences   █████████        8
BA Construction         ████████         7
Comparatives            ████████         7
Potential Complements   ████████         7
Rhetorical Questions    ███████          6
Separable Verbs         ███████          6
Resultative Complements ███████          6
Double Topic            ███████          6
Degree Complements      ███████          6
Directional Complements ███████          6
Aspect Markers          ███████          6
Serial Verb Constr.     ██████           5  🟡
Discourse Context       ██████           5  🟡
Even (连…都/也)          ██████           5  🟡
```

---

## 3. Classical Sentence Distribution (11 categories)

| # | Category | Count | Flag |
|---|---|---|---|
| 1 | Nominalizers (者/所) | 6 | |
| 2 | Coverbs & Prepositions (於/以/焉) | 6 | |
| 3 | Rhetorical Patterns (反問) | 5 | |
| 4 | Classical Negation (非/勿/莫) | 5 | |
| 5 | Genitive & Modification (之) | 5 | |
| 6 | Sequential Actions (而) | 5 | |
| 7 | Classical Conditionals (若/苟/則) | 4 | |
| 8 | Classical Causatives (使/令) | 4 | |
| 9 | Object Fronting (賓語前置) | 4 | |
| 10 | Topic-Comment (主題) | 4 | |
| 11 | Classical Passive (為…所…) | 4 | |

### Classical distribution chart

```
Nominalizers (者/所)     ███████  6
Coverbs & Prep. (於/以/焉) ███████  6
Rhetorical (反問)        ██████   5
Classical Negation       ██████   5
Genitive & Mod. (之)     ██████   5
Sequential Actions (而)  ██████   5
Classical Conditionals   █████    4
Classical Causatives     █████    4
Object Fronting          █████    4
Topic-Comment (主題)     █████    4
Classical Passive        █████    4
```

**No classical category is flagged.** The range is 4–6, which is tight and healthy for 52 sentences across 11 categories.

---

## 4. Dense Category Analysis

### 🔴 Basic Topic–Comment (主题评论) — 15 sentences

This category is 25% larger than the next-largest group (8) and nearly 3× the smallest (5). At 15, it is well above the 12-sentence "dense" threshold.

**Current members:**

| ID | Chinese |
|---|---|
| s1 | 他打碎了那个花瓶。 |
| s2 | 我喜欢在图书馆看书。 |
| s5 | 他决定开始学开车。 |
| s7 | 我看了半天，还是看不了，就不看了。 |
| s15 | 那本书，放在桌子上了。 |
| s16 | 张三，爱唱歌。 |
| s19 | 他学中文学了五年了。 |
| s70 | 几个人一起走，里面肯定有值得我学习的人。 |
| s78 | 生命也是我想要的东西。 |
| s86 | 了解别人的人算聪明，了解自己的人才算高明。 |
| s90 | 做事正义的人，帮助他的人就多…… |
| s11 | 这件事非你亲自去办不可。 |
| s57 | 这件事非解决不可。 |
| s124 | 苹果我已经吃了。 |
| s125 | 墙上挂着一幅画。 |

**Linguistic rationale for potential split:**

"Basic Topic–Comment" is the catch-all root category. By design every Mandarin sentence is Topic–Comment, so any sentence that doesn't exhibit a more specific structural pattern lands here. The 15 sentences above actually illustrate at least three distinguishable sub-patterns:

1. **Existential / Locative sentences** (e.g. s125 墙上挂着一幅画) — location-as-topic with an existential verb + 着. This is a well-recognized sub-type in pedagogical grammars.
2. **Object-fronting (topicalized object)** (e.g. s124 苹果我已经吃了) — the object moves to sentence-initial position for discourse focus. This overlaps with the classical "Object Fronting" category.
3. **Plain Topic–Comment with pro-drop** (e.g. s15, s16) — the simplest illustration of the core pattern.

**Recommendation:** Consider creating an **Existential / Locative** sub-category or migrating s124 to a modern "Object Fronting" category. This would bring Basic Topic–Comment back toward the 8–10 range. However, since the category is intentionally foundational, a split should only proceed if the pedagogical value is clear. This warrants discussion with the Educational Publisher and Orchestrator.

---

## 5. Low-End Categories — Expansion Suggestions

While no modern category is "thin" (< 3), three sit at 5 — notably below the 7.0 mean. Adding 1–2 sentences each would improve balance.

### 🟡 Serial Verb Constructions (连动句) — 5 sentences

Current coverage focuses on motion + purpose (骑自行车去上班) and sequential events (到了，找到了…). Under-represented patterns:

| # | Suggested sentence | Rationale |
|---|---|---|
| 1 | **我去超市买了些菜回来做饭。** ("I went to the supermarket, bought some vegetables, came back and cooked.") | Chain of 4 sequential verbs with directional complement 回来, demonstrating both SVC length and directional layering. |
| 2 | **她站起来走到窗边看外面的风景。** ("She stood up, walked to the window, and looked at the scenery outside.") | Illustrates a postural verb (站起来) initiating a motion chain — a common everyday pattern absent from the current set. |

### 🟡 Discourse Context (跨句语境) — 5 sentences

All 5 current sentences are short, pro-dropped follow-up clauses. Missing patterns:

| # | Suggested sentence | Rationale |
|---|---|---|
| 1 | **没关系，下次注意就好了。** ("It's okay, just be careful next time.") | Pro-dropped subject + topic inferred from prior conversational exchange; illustrates discourse-level ellipsis in a reassurance context. |
| 2 | **听说了，可是不太相信。** ("I heard, but don't really believe it.") | Both the subject (我) and the object (the thing heard) are dropped, requiring two separate discourse referents — a more complex ellipsis pattern than the current examples. |

### 🟡 Even (连…都/也) — 5 sentences

Good variety exists (连…都, 连…也, scalar emphasis). Slightly under-served:

| # | Suggested sentence | Rationale |
|---|---|---|
| 1 | **他连一口水都没喝就走了。** ("He left without even drinking a single sip of water.") | Combines 连…都 with negation (没) and a serial-verb tail (就走了), showing how "even" interacts with other constructions. |
| 2 | **连老师也被他问住了。** ("Even the teacher was stumped by his question.") | 连…也 with 被-passive — a natural cross-construction blend that demonstrates how "even" can frame a passive recipient. |

---

## 6. Recommendations Summary

| Priority | Action | Owner |
|---|---|---|
| Medium | Evaluate whether to split Basic Topic–Comment (15 → e.g. 10 + 5) by carving out "Existential/Locative" or "Modern Object Fronting" | Orchestrator + Educational Publisher |
| Low | Add 1–2 sentences to Serial Verb Constructions (5 → 6–7) | Corpus Engineer |
| Low | Add 1–2 sentences to Discourse Context (5 → 6–7) | Corpus Engineer |
| Low | Add 1–2 sentences to Even (连…都/也) (5 → 6–7) | Corpus Engineer |
| None | Classical dataset — no action needed; distribution is healthy (4–6 per category) | — |

---

*This audit is informational only. No JSON data was modified. Suggested sentences are candidates for discussion and would need full FLS tree annotation before inclusion.*
