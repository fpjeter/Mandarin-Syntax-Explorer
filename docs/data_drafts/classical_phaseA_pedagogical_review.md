# Classical Phase A — Pedagogical Review

**Author:** Educational Publisher  
**Purpose:** Per-sentence verdict (Approve / Revise / Defer) for cc31–cc38  
**Audience:** Orchestrator + Data Linguist

---

## cc31 — 若/如 conditional (《莊子》· 逍遙遊)

**且夫水之積也不厚，則其負大舟也無力。**

**Verdict: ✅ APPROVE**

The complexity is appropriate for Phase A. Yes, the sentence is long by classical standards, but:
1. The vocabulary is concrete and imageable (water, boat, strength) — no abstract philosophical jargon.
2. The 則 conditional structure is crystal clear: "if X, then Y." Learners already know 如果…就… from the modern dataset.
3. The 之-nominalization inside the Topic (水之積 = "the water's accumulation") reinforces an existing pattern from the Genitive category.
4. The cross-reference arc from 其 back to 水 is a beautiful visual payoff in the tree.

**Note for Data Linguist:** Ensure 也 is tagged as `Particle` with `subRole: "topic pause"` (not as an assertion marker). In this position it marks the boundary between Topic and Comment within each clause.

---

## cc32 — 苟 conditional (《戰國策》· 齊策)

**苟無民，何以有君？**

**Verdict: ✅ APPROVE — the double showcase is a feature, not a bug**

The Specialist asks whether the conditional frame (苟) plus object fronting (何以) dilutes both lessons. My answer: **absolutely not.** This sentence is only 7 characters long. The brevity means each structural layer gets full attention — there's nothing else competing for cognitive bandwidth. The tree will show two clear, nested phenomena in a tiny space, which is the ideal case for our visual tool.

Pedagogically, the sentence also teaches a third lesson for free: the **null Topic** in the conditional clause. 苟 opens a hypothetical frame without any subject — "if [there were] no people..." This is a natural reinforcement of ghost nodes and pro-drop.

**Note for Data Linguist:** This sentence should be dual-tagged: primary category = Classical Conditionals, but the explanation should explicitly cross-reference Object Fronting. Do NOT dual-categorize in the JSON — keep it in Conditionals, reference fronting in the explanation text.

---

## cc33 — 使-causative (《戰國策》· 趙策)

**秦王使人謂安陵君曰。**

**Verdict: ✅ APPROVE**

Clean, canonical pivotal construction. The AST description is accurate. No issues with the structural analysis.

**Two pedagogical notes for the Data Linguist:**
1. The **explanation** should explicitly mention the modern parallel: "This is exactly the same structure as modern 妈妈让我去买牛奶 — the person being sent (人) is the pivot noun playing two roles." Cross-reference s77 or another modern pivotal.
2. The serial verb chain 謂…曰 is unusual — most modern learners know 曰 but not 謂. The explanation should gloss both clearly: 謂 = "say to / address", 曰 = "say / spoke thus".

---

## cc34 — Implicit causative (韓愈《師說》)

**惑而不從師，其為惑也終不解矣。**

**Verdict: ⚠️ REVISE — move to Classical Conditionals, not Causatives**

The Specialist correctly acknowledges this sentence has NO explicit 使/令 marker. Classifying it as a "Causative" teaches learners the wrong lesson — they'll look for 使/令 and not find it, then wonder what makes it causative.

**The sentence is structurally a conditional.** "If [one] is confused but does not follow a teacher, then those confusions will never be resolved." The 而-linked first clause is the condition; the second clause is the consequence. This is functionally identical to cc31's 則 pattern, just with implicit 則 (the consequence is juxtaposed rather than marked).

**Recommendation:**
- **Move to Classical Conditionals** as a third example: "implicit conditional (no 若/苟/則 markers)"
- **Add `subRole: "implicit conditional"`** to distinguish it from cc31 (marked with 則) and cc32 (marked with 苟)
- This gives the Conditionals category 3 examples showing a **gradient**: explicit marker (則) → question-form (苟…何以…) → juxtaposed without marker. That gradient is powerful pedagogy.

**Note:** This also makes the Causatives category a clean 1-sentence category for now (just cc33). That's fine — the Specialist's own plan had 2 causatives, and moving cc34 still leaves the category with a canonical example. Phase B can add a second causative with an explicit 令.

---

## cc35 (revised) — 是 as demonstrative pronoun (《莊子》· 秋水)

**牛馬四足，是謂天。**

**Verdict: ✅ APPROVE — with an explanation caveat**

The self-correction from the original (which wasn't actually object fronting) to this revised version is good. The distinction between classical 是 (demonstrative: "this") and modern 是 (copula: "is") is one of the most important lessons in classical Chinese and is **critically undertaught** in standard curricula.

**Is the distinction clearly flagged for learners?** The Specialist's AST notes are excellent, but the learner-facing **explanation** must hit this point hard. Suggested framing:

> "In modern Chinese, 是 means 'is' — a linking verb. But in classical Chinese, 是 is a **demonstrative pronoun** meaning 'this.' Here, 是 points back to the entire proposition 牛馬四足 ('cattle and horses have four feet') and says: '**This** is called natural.' The tree shows 是 sitting in the Object slot *before* the verb 謂, not as a linking verb between subject and predicate."

**Note for Data Linguist:** Tag 是 with `subRole: "demonstrative pronoun"` and add a note in the AST that this is NOT the modern copula.

---

## cc36 — 安 interrogative fronting (《史記》· 項羽本紀)

**大丈夫不能自食，安能食人？**

**Verdict: ✅ APPROVE**

Excellent sentence. The parallel structure (不能自食 vs 安能食人) makes the fronted 安 visible by contrast with the normally-positioned 不. The vocabulary is accessible (food/eating), the rhetoric is memorable, and the source (Xiang Yu's story) is one of the most iconic in Chinese literature.

**One note:** The AST describes 安 as a "fronted Adjunct (interrogative manner adverb)." This is accurate, but the explanation should also mention that 安 is the classical ancestor of modern 怎么. Learners who know 怎么能… will immediately understand what 安能… means.

---

## cc37 — 者 wrapping full clause (《莊子》· 秋水)

**井蛙不可以語於海者，拘於虛也。**

**Verdict: ✅ APPROVE — "FLS Matryoshka Principle" framing is accessible**

The "Matryoshka Principle" metaphor — a sentence hiding inside a sentence — is exactly the kind of vivid framing that makes abstract grammar tangible. The well-frog parable is one of the most famous classical Chinese stories, so learners will likely recognize it, which lowers the vocabulary barrier.

**Pedagogical framing is accessible.** The key insight — that 者 converts an entire complex clause into a single Topic noun — is the same insight we teach with modern nominalizers. The tree makes this vivid: a massive, deeply-nested subtree all sitting inside one Topic node.

**One caution:** The explanation should mention that 者 here is NOT the "whoever/if one" function (that's cc38). Here 者 means "the fact that / the reason why." Make the functional distinction between cc37-者 and cc38-者 explicit in both explanations.

---

## cc38 — 者 conditional/generic (《禮記》· 大學)

**欲治其國者，先齊其家。**

**Verdict: ✅ APPROVE**

The Specialist is correct that this 者 has a different semantic function from the definitional 者 in existing sentences. The conditional/generic reading ("whoever wishes to…") is frequent in classical Chinese and is a genuine gap in the dataset.

**Confirm `subRole: "conditional nominalizer"`** — this is the right label. It distinguishes from:
- `subRole: "definitional"` (者 in 者…也 definitions, e.g., cc2)
- `subRole: "agentive"` (者 meaning "the person who…", e.g., cc12)

**Note for Data Linguist:** The 其 in both 其國 and 其家 creates a co-reference chain. Both 其 pronouns refer back to the generic person denoted by the 者-nominalized Topic. Tag both with `refersToId` pointing to the Topic node, and ensure the tree renders the arcs.

---

## Summary

| ID | Verdict | Action |
|---|---|---|
| cc31 | ✅ Approve | Tag 也 as topic pause |
| cc32 | ✅ Approve | Dual-showcase is a feature; cross-reference Object Fronting in explanation |
| cc33 | ✅ Approve | Add modern parallel cross-reference; gloss 謂 and 曰 |
| cc34 | ⚠️ **Revise** | **Move to Classical Conditionals** with `subRole: "implicit conditional"` |
| cc35 | ✅ Approve | Explanation must strongly flag 是 ≠ modern copula |
| cc36 | ✅ Approve | Mention 安 = ancestor of modern 怎么 |
| cc37 | ✅ Approve | Distinguish cc37-者 (fact/reason) from cc38-者 (conditional/generic) |
| cc38 | ✅ Approve | Confirm `subRole: "conditional nominalizer"`; tag 其 co-references |

**7 approved, 1 revised (recategorized, not dropped).** Total Phase A: still 8 sentences. Classical Conditionals gains a third example (implicit conditional gradient). Causatives becomes a clean 1-sentence category pending Phase B expansion.
