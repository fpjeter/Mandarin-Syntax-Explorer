# Topic/Comment subRole Taxonomy Audit

## Background
A second-pass audit of `Topic` and `Comment` node `subRole` labels across the full dataset (133 modern + 43 classical sentences). The `VALID_SUBROLES` whitelist contains many sentence-specific and highly editorial labels added during early classical sentence authoring (cc1–cc30). 

This audit groups these labels by the grammatical function they describe, recommends single canonical terms for each cluster, and flags highly sentence-specific labels that should simply be removed rather than normalized.

## Summary of Findings

| Priority | Clusters | Total SubRoles to Fix/Remove |
|---|---|---|
| HIGH | Conditionals, Topic/Comment Layering, Focus | ~45 |
| MEDIUM | Sequential/Serial, Rhetorical Questions | ~25 |
| LOW | Comparisons, Classical Rhetoric, Identities | ~20 |

---

## SubRole Clusters

### Cluster TC-1: Condition / Consequence Clauses

| Current Label | Count | Role |
|---|---|---|
| `conditional clause` | 8 | Topic |
| `conditional` | 4 | Topic |
| `condition clause` | 2 | Topic |
| `condition clause (如果…)` | 1 | Topic |
| `condition clause (只要…)` | 1 | Topic |
| `first conditional` | 1 | Topic |
| `parallel conditions` | 1 | Topic |
| `negated condition (非…)` | 1 | Topic |
| `consequence` | 4 | Comment |
| `result clause` | 3 | Comment |
| `consequent realization` | 1 | Comment |
| `negative consequence` | 1 | Comment |
| `second conditional (parallel)` | 1 | Comment |

**Canonical labels:**
- Topic: `conditional clause`
- Comment: `consequence clause`

**Rationale:** The tree already shows the structural relationship. Parenthetical markers (如果, 只要, 非) and numbering (first/second) belong in the node text or explanation, not the subRole label. "Result clause" and "consequence" represent the same functional half of a conditional pairing.

**Fix:** Standardize all Topic conditional labels to `conditional clause`. Standardize all Comment consequence/result labels to `consequence clause`.

**Priority:** HIGH

---

### Cluster TC-2: Focus Constructions

| Current Label | Count | Role |
|---|---|---|
| `pseudo-cleft frame (是…的)` | 3 | Comment |
| `shì–de focus construction` | 1 | Comment |
| `是…的 focus` | 1 | Comment |
| `shi-de definition` | 1 | Comment |
| `连…都… (even X)` | 2 | Comment |
| `连…也… (even X)` | 1 | Comment |
| `连-construction (even)` | 1 | Topic |
| `lian-construction` | 1 | Topic |

**Canonical labels:**
- 是…的 Comment: `shi-de focus`
- 连… Topic: `lian-construction topic`
- 连… Comment: `lian-construction comment`

**Rationale:** Highly fragmented spelling/casing (shì-de, shi-de, 是…的) and parenthetical additions. 

**Fix:** Standardize to English pinyin without tone marks or characters to ensure consistency and readability in the UI. 

**Priority:** HIGH

---

### Cluster TC-3: Topic / Comment Layering (Inner/Outer)

| Current Label | Count | Role |
|---|---|---|
| `inner topic` | 11 | Topic |
| `outer topic` | 9 | Topic |
| `inner comment` | 1 | Comment |
| `inner comment 1` | 1 | Comment |
| `inner comment 2` | 1 | Comment |
| `inner comment 1: adjectival predicate` | 1 | Comment |
| `inner comment 2: adjectival predicate` | 1 | Comment |
| `outer discourse frame` | 1 | Topic |
| `outer frame` | 1 | Topic |
| `sentence topic` | 1 | Topic |
| `situational frame` | 1 | Topic |
| `possessor / context` | 1 | Topic |
| `Location` | 1 | Topic |

**Canonical labels:** 
- Topic: Keep `inner topic`, `outer topic`. Remove all sentence-specific or POS-based topic labels.
- Comment: Keep `inner comment`.

**Rationale:** The core concept is inner/outer layering. Labels like `inner comment 1: adjectival predicate` mix sequence, function, and part-of-speech into one unwieldy string. Labels like `Location` or `possessor / context` act as semantic roles rather than syntactic subRoles.

**Fix:** 
- Rename numbered/adjectival inner comments to `inner comment`.
- Change `outer discourse frame`, `outer frame`, `sentence topic` to `outer topic` (if part of a layered sentence) or remove the subRole entirely (if it's the only topic).
- Remove the `Location` and `possessor / context` subRoles entirely.

**Priority:** HIGH

---

### Cluster TC-4: Sequential / Serial Verbs & Clauses

| Current Label | Count | Role |
|---|---|---|
| `clause 1` | 5 | Topic, Comment |
| `clause 2` | 3 | Comment |
| `clause 3` | 1 | Comment |
| `sequential clauses` | 5 | Comment |
| `two sequential clauses` | 2 | Comment |
| `sequential actions (而)` | 1 | Topic |
| `serial verb construction` | 2 | Comment |
| `serial verb 1` | 2 | Topic |
| `serial verb 2` | 2 | Comment |
| `serial verb chain` | 1 | Comment |
| `serial verb construction (same subject)` | 1 | Comment |
| `serial verb (V1着 concurrent with V2)` | 1 | Comment |
| `duration complement (verb repetition)` | 1 | Comment |

**Canonical labels:**
- Comment: `sequential clauses`
- Comment: `serial verb construction`

**Rationale:** Sequence is inherent in the top-to-bottom rendering of the grammar tree. We do not need `clause 1` and `clause 2` as subRoles. Similarly, `(V1着 concurrent with V2)` is a tooltip masquerading as a label.

**Fix:**
- Remove all `clause N` and `serial verb N` subRoles entirely.
- Normalize all remaining sequential/serial variations to either `sequential clauses` or `serial verb construction`.
- Remove `duration complement (verb repetition)` from the Comment level (this is a predicate-level detail).

**Priority:** MEDIUM

---

### Cluster TC-5: Rhetorical Questions

| Current Label | Count | Role |
|---|---|---|
| `rhetorical question` | 2 | Comment |
| `rhetorical question (不亦…乎)` | 2 | Comment |
| `rhetorical question (寧…乎)` | 1 | Comment |
| `escalating rhetorical question` | 1 | Comment |
| `rhetorical` | 1 | Comment |
| `first rhetorical question` | 1 | Topic |

**Canonical label:** `rhetorical question`

**Rationale:** Parentheticals showing the specific classical Chinese particle belong in the explanation text. "Escalating" and "first" describe discourse structure, which is visually apparent in the tree layout.

**Fix:** Standardize all variations to `rhetorical question`.

**Priority:** MEDIUM

---

### Cluster TC-6: Comparisons

| Current Label | Count | Role |
|---|---|---|
| `comparison` | 4 | Comment |
| `comparative clause` | 1 | Comment |
| `adjectival / comparative` | 1 | Comment |
| `second comparison (climax)` | 1 | Comment |
| `item A` | 2 | Topic |
| `first comparison` | 1 | Topic |

**Canonical labels:** 
- Topic: Remove (or `comparative topic`)
- Comment: `comparison clause`

**Rationale:** `item A` is unhelpful outside of the specific sentence's context.

**Fix:** Change all Comment variations to `comparison clause`. Remove Topic-level comparative labels entirely.

**Priority:** LOW

---

### Cluster TC-7: Classical Rhetoric (Thesis/Antithesis)

| Current Label | Count | Role |
|---|---|---|
| `thesis clause` | 2 | Topic, Comment |
| `first clause (thesis)` | 1 | Topic |
| `antithesis clause` | 1 | Comment |
| `second clause (antithesis)` | 1 | Comment |

**Canonical labels:**
- Topic: `thesis clause`
- Comment: `antithesis clause`

**Fix:** Remove the redundant "first clause" / "second clause" wrappers.

**Priority:** LOW

---

### Cluster TC-8: Identities & Definitions

| Current Label | Count | Role |
|---|---|---|
| `identity statement (…也)` | 1 | Comment |
| `identity (所以…也)` | 1 | Comment |
| `negated identity (非…)` | 1 | Comment |
| `judgment clause` | 1 | Comment |
| `者-definition` | 1 | Topic |
| `relative clause (the Way that can be spoken)` | 1 | Topic |
| `所-nominalization (that which…)` | 1 | Topic |
| `之 genitive phrase` | 1 | Topic |
| `compound subject` | 1 | Topic |

**Canonical labels:**
- Comment: `identity statement`
- Topic: Remove highly specific labels

**Rationale:** `relative clause (the Way that can be spoken)` is practically a translation, not a subRole. `compound subject` and `之 genitive phrase` describe POS and phrase structure, which the tree nodes already depict via standard roles.

**Fix:** Normalize Comments to `identity statement`. Remove the specific Topic subRoles (except perhaps standardizing `者-definition` to `definition topic`).

**Priority:** LOW
