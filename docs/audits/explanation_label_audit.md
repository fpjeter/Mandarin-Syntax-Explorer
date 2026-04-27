# Tree Label vs Explanation Consistency Audit

**Author:** Educational Publisher  
**Scope:** All 43 classical sentences (`src/data/classical_sentences.json`)  
**Method:** Programmatic scan + manual review of flagged sentences  
**Issues found:** 10

---

## cc2 — Missing: Embedded Clause not mentioned

**Issue type:** Missing label reference  
**Problem:** The tree contains two `Embedded Clause` nodes (one per comparison tier), but the explanation never uses the term "embedded clause" or explains the nesting structure. The learner sees "Embedded Clause" boxes in the tree with no explanation of what they mean.

**Recommended fix:** Add to the end of the explanation:  
> "In the tree, each comparison tier (知之 vs 好之, 好之 vs 樂之) is wrapped in an **Embedded Clause** node — a mini-sentence nested inside the larger parallel frame. The 者…不如…者 pattern naturally creates this nesting: each 者-phrase and its comparator form a self-contained clause."

---

## cc4 — Mismatched: "subject" vs Topic

**Issue type:** Mismatched role name  
**Problem:** The explanation says *"Any \"Way\" that can be captured in words is, by definition, not the eternal, unchanging Way"* — this is fine pedagogically, but later in the grammatical section it refers to "the subject 道" when the tree labels 道 as `Topic`, not `Subject`.

**Recommended fix:** Replace any occurrence of "the subject 道" with "the **Topic** 道." The tree uses Topic-Comment framing, not Subject-Predicate.

---

## cc6 — Missing: copulative subRole not mentioned

**Issue type:** Missing label reference  
**Problem:** The tree tags 為 as `Head Verb (copulative)` but the explanation never mentions this copulative function. The explanation discusses 而-chaining and the overall meaning but skips the key structural label that appears in the tree.

**Recommended fix:** Add to the grammatical section:  
> "The verb **為** is tagged `Head Verb (copulative)` in the tree — it functions as a linking verb here, connecting 師 to the preceding clause. This is one of 為's several classical functions (also seen as a quasi-copula in cc39 and a passive marker in cc41)."

---

## cc8 — Mismatched: "predicate" vs tree label

**Issue type:** Mismatched role name  
**Problem:** The explanation mentions "the predicate" but the tree has no `Predicate` node — the structure uses `Comment` containing `Head Verb` + `Adjunct` nodes. Learners will look for a "Predicate" box and not find one.

**Recommended fix:** Replace "the predicate" with "the **Comment**" — the grammatical assertion about the topic is wrapped in a Comment node in the tree.

---

## cc15 — Mismatched: "subject" vs Topic + "predicate" vs Comment

**Issue type:** Mismatched role name (double)  
**Problem:** The explanation uses "the subject" for 朝/夕 and "predicate" for 聞道/死 — but the tree uses `Topic` and `Comment` respectively. This is a systematic mismatch between Western grammar terminology in the explanation and Chinese-linguistics terminology in the tree.

**Recommended fix:**  
- Replace "the subject" → "the **Topic**"  
- Replace "predicate" → "**Comment**"  
- Add a brief note: "Classical Chinese uses Topic-Comment structure rather than Subject-Predicate — the Topic sets the scene, and the Comment delivers the assertion."

---

## cc16 — Mismatched: "predicate" vs tree label

**Issue type:** Mismatched role name  
**Problem:** The explanation says "predicate" but the tree uses `Comment` for the assertion about each clause. Same systematic issue as cc15.

**Recommended fix:** Replace "predicate" with "**Comment**" where it refers to the tree structure.

---

## cc18 — Mismatched: "predicate" vs tree label

**Issue type:** Mismatched role name  
**Problem:** Same issue — explanation uses "predicate" but tree labels use `Comment`.

**Recommended fix:** Replace "predicate" with "**Comment**."

---

## cc26 — Stale: mentions "copula" but tree has no Copula node

**Issue type:** Stale label  
**Problem:** The explanation mentions "copula" in the context of *"寒 is a standalone adjective; no copula needed"* — this is pedagogically fine (explaining zero-copula predication), but the specific phrasing may confuse learners looking for a `Copula` node in the tree that doesn't exist. The tree has zero copula nodes.

**Recommended fix:** Minor — keep the zero-copula pedagogical point but clarify:  
> "寒 is a standalone **adjectival predicate** — the tree shows it directly inside the Comment with no `Copula` or `Head Verb` node. Classical Chinese can predicate with a bare adjective."

---

## cc33 — Missing: causative subRole not surfaced

**Issue type:** Missing label reference  
**Problem:** The tree tags 使 as `Head Verb (causative)` but the explanation, while correctly explaining the causative meaning, never uses the specific term "causative" as a structural label. The learner sees "Head Verb (causative)" in the tree badge but the explanation only says "send/cause."

**Recommended fix:** Add the label explicitly:  
> "使 is tagged as `Head Verb (causative)` in the tree — it is the verb that initiates the entire causative chain."

---

## cc34 — Missing: copulative subRole not mentioned

**Issue type:** Missing label reference  
**Problem:** The tree tags 為 in 其為惑也 as `Head Verb (copulative)` but the explanation says "為惑也(being confusion)" without ever mentioning the copulative label. Same issue as cc6.

**Recommended fix:** Add:  
> "為 is tagged `Head Verb (copulative)` in the tree — here it functions as a linking verb meaning 'is / constitutes.'"

---

## cc39–cc43: New sentence check (per ticket requirement)

| ID | Quasi-copula | Triple parallel | Zero-copula | 為…所… frame | 所-nominalization | Ghost node | Implicit causative |
|---|---|---|---|---|---|---|---|
| cc39 | ✅ mentioned | ✅ mentioned | n/a | n/a | n/a | n/a | n/a |
| cc40 | n/a | n/a | ✅ mentioned | n/a | n/a | n/a | n/a |
| cc41 | n/a | n/a | n/a | ✅ mentioned | ✅ mentioned | n/a | n/a |
| cc42 | n/a | n/a | n/a | n/a | n/a | ✅ mentioned | n/a |
| cc43 | n/a | n/a | n/a | n/a | n/a | n/a | ✅ mentioned |

**cc41 note:** The explanation mentions the 為…所… frame and the 所-nominalization layer but does NOT use the term "Embedded Clause" — the tree has an `Embedded Clause` node wrapping 人所笑. Recommend adding: *"The tree wraps 人所笑 in an **Embedded Clause** node inside the passive 為 frame."*

---

## Summary

| Issue Type | Count | Sentences |
|---|---|---|
| Mismatched role name (Topic/Subject/Comment/Predicate) | 5 | cc4, cc8, cc15, cc16, cc18 |
| Missing label reference | 4 | cc2, cc6, cc33, cc34 |
| Stale label | 1 | cc26 |
| Tone | 0 | — |

**Pattern:** The most systematic issue is **"predicate" vs "Comment"** — 4 of the 10 issues are the same mismatch where the explanation uses Western "predicate" terminology but the tree uses Chinese-linguistics "Comment" terminology. A single find-and-replace audit targeting this pattern would fix half the issues.

**No tone issues found.** All 43 explanations maintain a consistent learner-friendly voice.
