# Classical Phase B — Pedagogical Review

**Author:** Educational Publisher  
**Purpose:** Per-sentence verdict (Approve / Revise / Defer) for cc39–cc43  
**Audience:** Orchestrator + Data Linguist

---

## cc39 — Triple parallel topic-comment (《孟子》· 盡心下)

**民為貴，社稷次之，君為輕。**

**Verdict: ✅ APPROVE — with a strong disambiguation note on 為**

The Specialist's question: should the explanation strongly flag that this 為 is NOT modern 為 (for/because)? **Yes, absolutely.** This is a major disambiguation point. Suggested explanation framing:

> "為 here functions as a **quasi-copula** meaning 'counts as' or 'is valued as.' Do NOT confuse it with modern 为 (wèi, 'for/because/in order to'). Classical 為 has at least three readings: (1) copula 'is/counts as' (this sentence), (2) transformative 'become' (cc40: 白露為霜), and (3) passive marker (cc41: 信為人所笑). The tree marks each with a different subRole so you can see the distinction at a glance."

The triple parallel structure is beautiful — the tree will create a stunning three-way mirror. The sentence is also one of the most quoted in Chinese political philosophy, so learners will likely recognize it.

**Note for Data Linguist:** Tag 為 with `subRole: "quasi-copula"`. Tag 之 in 次之 with `subRole: "anaphoric pronoun"` and `refersToId` pointing back to the 民 Topic node.

---

## cc40 — Zero-copula predication (《詩經》· 蒹葭)

**蒹葭蒼蒼，白露為霜。**

**Verdict: ✅ APPROVE**

This sentence perfectly satisfies the accessibility requirement I flagged in my classical strategy review. 蒹葭蒼蒼 is one of the most widely memorized verses in Chinese education — it's the "To be or not to be" of classical Chinese. The vocabulary barrier is genuinely low because near-universal cultural familiarity compensates for archaic words.

**Is the zero-copula lesson clear enough?** Yes. The key insight — that classical Chinese predicates with a bare adjective (蒼蒼 = the comment, no verb needed) — is the single most important structural difference between classical and modern Chinese. Every learner hits this wall when they first read classical poetry. The tree makes it explicit: a Comment node containing only an adjective, no Head Verb at all.

**Note for Data Linguist:** Tag 蒼蒼 with `role: "Predicate"` and `subRole: "reduplicated stative"`. The Comment of clause 1 has NO Head Verb — this is intentional and pedagogically critical. Do NOT insert a hidden copula.

---

## cc41 — 為…所… passive (《史記》· 淮陰侯列傳)

**信為人所笑。**

**Verdict: ✅ APPROVE — with an AST framing caveat**

The Specialist describes the AST as: `Head Verb(為) → Embedded Clause`. This raises the exact same conflict we resolved with modern 把 sentences — the FLS position paper moved 把 from Head Verb to Adjunct/disposal-marker. We need to be consistent.

**However, the passive case is different from 把.** The 為 passive genuinely governs an embedded clause (the agent + 所-VP structure sits inside the 為 frame). Unlike 把 (which is a prepositional adjunct), 為 in the passive functions more like a verb: "underwent [X by Y]." The Head Verb framing is defensible here.

**My decision: APPROVE the Head Verb framing for 為-passive.** But the explanation must explicitly note the structural parallel to modern 被 AND the difference:
- 被 is treated as a passive marker (Adjunct in some analyses, Head Verb in others)
- 為…所… adds an extra 所-nominalization layer that modern 被 lacks
- The tree should make the 所 wrapper visible as a distinct node

**Note for Data Linguist:** The explanation should cross-reference cc37 (者-nominalization) and the modern BEI sentences (s128, s132) so learners see the evolutionary chain: classical 為…所… → modern 被.

---

## cc42 — Conditional synthesis (《左傳》· 僖公三十年)

**若亡鄭而有益於君，敢以煩執事。**

**Verdict: ✅ APPROVE — three-pattern synthesis is a feature, not a bug**

The Specialist asks: is three-pattern synthesis (若-conditional + 而-sequential + 於-coverb) too complex? **No — it's the entire pedagogical payoff of Phase B.**

By this point in the dataset, learners have seen each pattern individually:
- 若/苟 conditionals (cc31, cc32, cc34)
- 而-sequential linking (existing Sequential Actions category, 5 sentences)
- 於-coverb phrases (existing Coverbs category, 6 sentences)

A synthesis sentence proves that these patterns **compose**. It's the "final exam" moment: can you recognize all three layers simultaneously? The tree reveals each one as a distinct node at a different nesting level, which is exactly what makes the tool valuable.

**Source accessibility:** 燭之武退秦師 is universally taught in Chinese high schools. This is arguably the most accessible classical passage in the entire Chinese canon.

**One note:** The ghost node for implicit 我 in clause 2 should follow Convention 1 Addendum: `refersToId: null` (top-level ghost Topic, pro-drop). Tag with `subRole: "pro-drop"`.

---

## cc43 — Implicit causative (歐陽修《伶官傳序》)

**憂勞可以興國，逸豫可以亡身。**

**Verdict: ✅ APPROVE in Classical Causatives — with `subRole: "implicit causative"`**

The Specialist asks whether this should be flagged as implicit-causative the same way cc34 was flagged as implicit-conditional. **Yes, exactly.** Consistency is key. The rule I established in Phase A applies here too:

> When a sentence demonstrates a pattern through structural implication rather than an explicit marker, tag it with `subRole: "implicit [pattern]"` to distinguish it from explicitly marked examples.

So:
- cc33 (使-causative): `subRole: "explicit causative"` (has 使)
- cc43 (興/亡 used transitively): `subRole: "implicit causative"` (no 使/令 marker)

**Should it stay in Classical Causatives?** Yes. Unlike cc34 (which I moved to Conditionals because its structure was genuinely conditional), cc43 is genuinely causative: the transitive use of intransitive verbs IS the causative mechanism. It belongs in the Causatives category because the teaching point is "how does classical Chinese express causation?" — and the answer is "usually without 使/令."

The Specialist is correct that implicit causation is more frequent than explicit. The category now has the perfect pedagogical pair: explicit (cc33) + implicit (cc43). The contrast teaches learners that 使/令 is just one tool in a larger toolkit.

**Note for Data Linguist:** In the AST, the semantic role of 國 and 身 should be `Patient`, not `Theme`. They are the things being acted upon (caused to prosper / caused to perish). Tag 興 and 亡 as Head Verbs with `subRole: "causative intransitive"` to signal the transitivity shift.

---

## Summary

| ID | Verdict | Key Decision |
|---|---|---|
| cc39 | ✅ Approve | Strongly flag 為 ≠ modern 为; tag as quasi-copula |
| cc40 | ✅ Approve | Zero-copula is the core lesson; do NOT insert hidden copula |
| cc41 | ✅ Approve | Head Verb framing for 為 is correct (differs from 把 Adjunct model) |
| cc42 | ✅ Approve | Three-pattern synthesis is the Phase B payoff |
| cc43 | ✅ Approve | Tag `subRole: "implicit causative"`, consistent with cc34 precedent |

**5 approved, 0 revised, 0 deferred.** Phase B sentences are all strong. The classical dataset will reach 43 sentences across 9 categories upon completion.

### New Categories Required
1. **Topic-Comment (主題)** — for cc39, cc40
2. **Classical Passive (為…所…)** — for cc41

Both need entries in `classicalCategories.ts` with bilingual descriptions.
