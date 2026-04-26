# Classical Batch Structural Review — cc31 through cc43

**Author:** Linguistics Specialist  
**Scope:** 13 sentences across 5 categories  
**Date:** 2026-04-25

---

## Review Summary

| Verdict | Count |
|---|---|
| ✅ Clean (no issues) | 8 |
| ⚠️ Minor issues | 4 |
| 🔴 Structural error | 1 |

---

## Issue 1 — cc34: 為 tagged as `Copula` but should be `Head Verb`

**Sentence:** 惑而不從師，其為惑也終不解矣。  
**Node:** `cc34-wei` (為)  
**Current:** `role: "Copula"`  
**Problem:** In this sentence, 為 means "to be / constitute" — it's a full lexical verb functioning as the head of the comment's inner Topic phrase (其為惑也 = "those being confusions"). The `Copula` role is used elsewhere for identity statements (e.g., cc39's quasi-copula 民為貴), but here 為 is actually part of a nominalized phrase ("those-being-confusions") serving as the Topic. It should be `Head Verb` with `subRole: "copulative"` to distinguish it from the true quasi-copula usage in cc39.

**Recommended fix:**
- Node `cc34-wei`: change `role: "Copula"` → `role: "Head Verb"`, add `subRole: "copulative"`

**Severity:** ⚠️ Minor — the visual tree is correct but the role label is misleading

---

## Issue 2 — cc39: Parallel clauses wrapped in `Comment` but missing root `Sentence`

**Sentence:** 民為貴，社稷次之，君為輕。  
**Problem:** The root node's children are three `Comment (clause N)` nodes with no sibling `Topic`. This breaks the FLS atomic rule ($S = T + C$). While the sentence IS a series of parallel independent clauses, the root should be a `Parallel Sentence` node (matching the convention used in cc31, cc34, and cc43), not bare `Comment` children hanging off the `Sentence` root.

**Current tree:**
```
Sentence
├── Comment (clause 1): 民為貴
├── Comment (clause 2): 社稷次之
└── Comment (clause 3): 君為輕
```

**Recommended fix:** Change root role to `Parallel Sentence` or wrap in proper structure:
```
Parallel Sentence
├── Comment (clause 1)
│   ├── Topic: 民
│   └── ...
├── Comment (clause 2)
│   ├── Topic: 社稷
│   └── ...
└── Comment (clause 3)
    ├── Topic: 君
    └── ...
```

**Severity:** ⚠️ Minor — the data is all there, just the root role should be `Parallel Sentence` for consistency with cc31/cc34/cc43

---

## Issue 3 — cc41: 為 as `Head Verb (passive marker)` — JUSTIFIED

**Sentence:** 信為人所笑。  
**Node:** `cc41-wei` (為)  
**Current:** `role: "Head Verb"`, `subRole: "passive marker"`

**Ticket asked:** Is this justified vs. the 把 Adjunct precedent?

**Ruling:** YES, this is correct and consistent with the FLS position paper.
- 為 in the passive introduces a **new actor** (人 = the agent doing the laughing). This is exactly the criterion for the `Head Verb → Embedded Clause` model: the marker opens a genuine embedded situation with a different subject.
- This parallels modern 被 (which we also tag as Head Verb per FLS §2.5).
- 把 does NOT introduce a new actor, which is why 把 gets the Adjunct treatment per the amended §2.7.
- The tree correctly shows: `Head Verb(為) → Embedded Clause[Subject(人) + VP(所笑)]`

**Severity:** ✅ No issue — structurally sound

---

## Issue 4 — cc42: Ghost node conventions

**Sentence:** 若亡鄭而有益於君，敢以煩執事。  
**Node:** `cc42-ghost`  
**Current:** `isDropped: true`, `role: "Topic"`, `subRole: "pro-drop"`, `semanticRole: "Agent"`, `refersToId: null`

**Ticket asked:** Confirm `refersToId: null` and `subRole: "pro-drop"` per ghost node conventions.

**Ruling:** Correct. This ghost node represents 燭之武 (the speaker), who is identifiable from discourse context but not from within the sentence itself. Per FLS §2.3, discourse-bound null positions should have `refersToId: null` (no intra-sentential referent). The `subRole: "pro-drop"` is consistent with cc34's ghost node.

**Severity:** ✅ No issue

---

## Issue 5 — cc34 vs cc43: Implicit pattern subRole consistency

**Ticket asked:** Are cc34 (implicit conditional) and cc43 (implicit causative) tagged consistently?

**cc34:** Has `Adjunct (implicit conditional)` as an empty node marking the implicit conditional logic between the two clauses.  
**cc43:** Has NO equivalent marker — the implicit causative is expressed purely through the `subRole: "causative intransitive"` on the Head Verbs (興, 亡).

**Problem:** Inconsistent representation of implicit patterns. cc34 uses an explicit empty Adjunct node to mark the implicit conditional; cc43 relies only on subRole tags on the verbs. Both approaches work, but they should be uniform.

**Recommended fix:** Either:
- (A) Add an `Adjunct (implicit causative)` empty node to cc43 between Topic and VP, matching cc34's pattern, OR
- (B) Remove cc34's empty `Adjunct (implicit conditional)` node and rely solely on the subRole tags

Option (B) is cleaner — empty "marker" nodes for implicit relationships add visual noise without teaching value. The subRole tag on the Head Verb is sufficient.

**Severity:** ⚠️ Minor — consistency issue, not a structural error

---

## Issue 6 — cc40: Bare adjective predication (蒼蒼)

**Sentence:** 蒹葭蒼蒼，白露為霜。  
**Node:** `cc40-cc` (蒼蒼)  
**Current:** `role: "Predicate"`, `subRole: "reduplicated stative"`

**Ticket asked:** Confirm the Comment of clause 1 has no Head Verb.

**Ruling:** Correct. Clause 1 has `Topic(蒹葭) + Predicate(蒼蒼)` — no Head Verb, no Copula. This correctly represents classical zero-copula predication where a stative adjective directly comments on the topic. The `Predicate` role (not `Head Verb`) is the right choice here because 蒼蒼 is an adjective, not a verb. This is consistent with cc19 which also uses `Predicate (bare adjective)` for 智 and 明.

**Severity:** ✅ No issue — correctly implemented

---

## Issue 7 — cc33: Serial verb 曰 should be nested, not sibling

**Sentence:** 秦王使人謂安陵君曰。  
**Node:** `cc33-vp`  
**Current:** 
```
Verb Phrase (serial verbs)
├── Head Verb: 謂
├── Object: 安陵君
└── Head Verb: 曰
```

**Problem:** 曰 ("say/quote") is tagged as a sibling Head Verb to 謂 ("address/say to"), but structurally 曰 is a serial verb continuation that should introduce a quotation clause. In the source text, 曰 is followed by the quoted speech. Having two flat `Head Verb` siblings inside one VP is ambiguous — a learner can't tell which verb governs which object.

**Recommended fix:** Make 曰 a separate VP or mark it with `subRole: "quotative"`:
```
Verb Phrase (serial verbs)
├── Head Verb: 謂
├── Object: 安陵君
└── Head Verb (quotative): 曰
```
The subRole addition is the minimal fix. Alternatively, if the source text includes quoted speech that was truncated, the sentence might need to be extended or 曰 treated as a sentence-final marker.

**Severity:** 🔴 Structural — the flat sibling structure is misleading for learners

---

## Clean Sentences (no issues found)

| ID | Sentence | Notes |
|---|---|---|
| cc31 | 且夫水之積也不厚，則其負大舟也無力。 | Conditional structure clean. 則 correctly as Adjunct. Cross-reference arc from 其→水 correct. |
| cc32 | 苟無民，何以有君？ | Conditional + fronted 何 correct. |
| cc35 | 牛馬四足，是謂天。 | Fronted demonstrative 是 correctly tagged with ref arc. |
| cc36 | 大丈夫不能自食，安能食人？ | Fronted 安 correctly as Adjunct. Parallel structure clean. |
| cc37 | 井蛙不可以語於海者，拘於虛也。 | 者-nominalization wrapping full clause correct. |
| cc38 | 欲治其國者，先齊其家。 | Conditional 者 correct. 其 cross-references clean. |

---

## Recommendations Summary

| # | Sentence | Fix | Severity | Owner |
|---|---|---|---|---|
| 1 | cc34 | Change 為 from `Copula` → `Head Verb (copulative)` | ⚠️ Minor | Data Linguist |
| 2 | cc39 | Change root from `Sentence` → `Parallel Sentence` | ⚠️ Minor | Data Linguist |
| 3 | cc34/cc43 | Remove cc34's empty implicit Adjunct node OR add one to cc43 — standardize | ⚠️ Minor | Data Linguist |
| 4 | cc33 | Add `subRole: "quotative"` to 曰 Head Verb | 🔴 Structural | Data Linguist |
