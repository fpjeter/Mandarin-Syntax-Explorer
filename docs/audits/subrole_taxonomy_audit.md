# subRole Taxonomy Consistency Audit

**Author:** Linguistics Specialist  
**Scope:** All 176 sentences (133 modern + 43 classical)  
**Date:** 2026-04-27

---

## Methodology

Extracted all role+subRole combinations across both datasets. Identified clusters of semantically identical labels with inconsistent naming. Each cluster below includes the canonical label recommendation, affected nodes, rationale, and priority.

---

## HEAD VERB subRole Clusters

### Cluster HV-1: `adjectival predicate` vs `adjectival`

| Current Label | Count | Dataset | Example Nodes |
|---|---|---|---|
| `adjectival predicate` | 6 | classical | cc1, cc13, cc16, cc17×2, cc18 |
| `adjectival` | 5 | modern | s80, s95, s98, s99×2 |

**Canonical label:** `adjectival predicate`  
**Rationale:** "adjectival" alone is ambiguous — it could modify any part of speech. "adjectival predicate" explicitly states that an adjective IS the predicate. This is the pedagogical teaching point.  
**Fix:** Rename the 5 modern `adjectival` → `adjectival predicate`  
**Priority:** HIGH — learners see these labels directly

---

### Cluster HV-2: `purpose` vs `purpose verb`

| Current Label | Count | Nodes |
|---|---|---|
| `purpose` | 1 | s134:s134-hv3 |
| `purpose verb` | 2 | s91:s91-zuo, s52:n52-embedded-v2 |

**Canonical label:** `purpose`  
**Rationale:** The "verb" suffix is redundant — the node role is already `Head Verb`. All subRoles should describe the *function*, not restate the part of speech.  
**Fix:** Rename 2× `purpose verb` → `purpose`  
**Priority:** LOW — cosmetic

---

### Cluster HV-3: `action 1` — orphan label

| Current Label | Count | Nodes |
|---|---|---|
| `action 1` | 1 | s117:s117-v1 |

**Canonical label:** Remove subRole entirely (use `(none)`)  
**Rationale:** "action 1" is a temp label left over from serial verb construction drafting. The default Head Verb with no subRole is appropriate for a plain action verb. If a sequential label is needed, use `serial verb 1` to match the SVC convention, but this is likely unnecessary.  
**Fix:** Remove `subRole: "action 1"` from s117:s117-v1  
**Priority:** MEDIUM — confusing to learners

---

### Cluster HV-4: `embedded predicate` — review

| Current Label | Count | Nodes |
|---|---|---|
| `embedded predicate` | 2 | s50:n50-hv, s51:n51-hv |

**Canonical label:** Keep or rename to `(none)`  
**Rationale:** These are Head Verbs inside Embedded Clauses. The fact that they're embedded is already clear from the tree structure — the parent node IS an Embedded Clause. The subRole adds no information. However, removing it is low priority since it's not misleading.  
**Fix:** Optional — remove subRole if cleaning up, or keep for now  
**Priority:** LOW

---

## ADJUNCT subRole Clusters

### Cluster ADJ-1: Time variants

| Current Label | Count | Nodes |
|---|---|---|
| `time` | 15 | s3, s8, s50, etc. |
| `time (noun → adverb)` | 3 | cc8, cc15×2 |
| `time span` | 1 | cc10 |
| `time / frequency` | 1 | cc1 |

**Canonical labels:** Two variants maximum:
- `time` — for all simple temporal adjuncts (昨天, 今天, 明年, etc.)
- `time span` — ONLY for duration phrases (三年, 一辈子) that indicate length rather than point-in-time

**Fix:**
- Rename 3× `time (noun → adverb)` → `time`. The derivation info belongs in the explanation, not the subRole.
- Rename 1× `time / frequency` → `time`
- Keep 1× `time span`
- The existing `frequency` subRole (2 instances) is appropriate for dedicated frequency adverbs (经常, 常常) and should remain separate.

**Priority:** HIGH — time adjuncts are among the most common labels learners see

---

### Cluster ADJ-2: Rhetorical variants

| Current Label | Count | Nodes |
|---|---|---|
| `rhetorical` | 5 | s56, s76, s100, etc. |
| `rhetorical intensifier` | 2 | cc1, cc18 |
| `rhetorical challenge` | 1 | cc9 |

**Canonical label:** `rhetorical`  
**Rationale:** The sub-distinctions (intensifier vs challenge) are semantic nuances that belong in the explanation text, not the tree label. A learner seeing three different "rhetorical" labels will wonder what the difference is — and the tree can't show it.  
**Fix:** Rename 2× `rhetorical intensifier` → `rhetorical`, rename 1× `rhetorical challenge` → `rhetorical`  
**Priority:** MEDIUM

---

### Cluster ADJ-3: Conditional variants

| Current Label | Count | Nodes |
|---|---|---|
| `conditional` | 5 | s61, s84×2, etc. |
| `conditional marker` | 2 | cc32, cc42 |
| `condition (而-contrastive)` | 2 | cc17×2 |

**Canonical labels:** Two variants:
- `conditional` — for the adverb/conjunction itself (若, 苟, 如果)
- `conditional consequence` — for the consequence marker (則, 就). Already exists (1 instance in cc31).

**Fix:**
- Rename 2× `conditional marker` → `conditional`
- Rename 2× `condition (而-contrastive)` → `conditional`. The 而-contrastive detail belongs in the explanation.

**Priority:** MEDIUM

---

### Cluster ADJ-4: Instrumental variants

| Current Label | Count | Nodes |
|---|---|---|
| `instrument` | 3 | s4, s105, s71 |
| `instrumental` | 1 | cc42 |
| `instrumental (以)` | 1 | cc28 |
| `以-construction (instrumental)` | 1 | cc21 |

**Canonical label:** `instrumental`  
**Rationale:** "instrument" and "instrumental" mean the same thing. The classical-specific annotations (以) belong in the node text or explanation, not the subRole. Standardize to the adjective form to match the grammatical terminology convention (locative, temporal, instrumental).  
**Fix:** Rename 3× `instrument` → `instrumental`, rename 1× `instrumental (以)` → `instrumental`, rename 1× `以-construction (instrumental)` → `instrumental`  
**Priority:** HIGH — these are common and the inconsistency is visible

---

### Cluster ADJ-5: Sequential variants

| Current Label | Count | Nodes |
|---|---|---|
| `sequential` | 1 | cc42 |
| `sequential adverb` | 1 | cc26 |
| `sequence` | 1 | cc38 |

**Canonical label:** `sequential`  
**Rationale:** Shortest, most standard. "adverb" suffix is redundant (role is Adjunct). "sequence" is a noun, not an adjective.  
**Fix:** Rename 1× `sequential adverb` → `sequential`, rename 1× `sequence` → `sequential`  
**Priority:** LOW — only 3 instances

---

### Cluster ADJ-6: Potential variants

| Current Label | Count | Nodes |
|---|---|---|
| `potential` | 1 | cc6 |
| `potential marker` | 1 | cc4 |

**Canonical label:** `potential`  
**Rationale:** "marker" suffix is inconsistent with how other Adjunct subRoles are named (we say `conditional`, not `conditional marker`). The Adjunct role already implies it's a marker.  
**Fix:** Rename 1× `potential marker` → `potential`  
**Priority:** LOW

---

## PARTICLE subRole Clusters

### Cluster P-1: Nominalizer variants

| Current Label | Count | Nodes |
|---|---|---|
| `nominalizer` | 12 | s79, cc2×3, cc11, cc19, cc23×2, cc37, etc. |
| `nominalizer (creates "the one that [verb]ed")` | 4 | s8, s23, s50, etc. |
| `definitional nominalizer` | 1 | cc12 |
| `means nominalizer` | 1 | cc12 |
| `conditional nominalizer` | 1 | cc38 |
| `object nominalizer` | 2 | cc7, cc11 |

**Canonical labels:** Two variants:
- `nominalizer` — for all uses of 者/所/的 that nominalize verbs
- `nominalizer (所)` and `nominalizer (者)` — ONLY if we want to distinguish the specific morpheme. But this info is already in the node's text field.

**Recommendation:** Collapse ALL to `nominalizer`. The specific function (definitional, means, conditional, object) should be documented in the explanation text. The parenthetical description in "creates the one that [verb]ed" is a tooltip-style explanation masquerading as a label — it belongs in the glossary.  
**Fix:** Rename all 9 non-standard variants → `nominalizer`  
**Priority:** HIGH — nominalizers are a core pedagogical concept and label fragmentation is confusing

---

### Cluster P-2: Assertive variants

| Current Label | Count | Nodes |
|---|---|---|
| `assertive` | 2 | cc14, cc26 |
| `assertive (identity)` | 2 | cc11, cc12 |
| `assertion` | 2 | cc34, cc37 |

**Canonical label:** `assertive`  
**Rationale:** "assertion" is a noun; "assertive" is the adjective matching our convention. The "(identity)" qualifier belongs in the explanation.  
**Fix:** Rename 2× `assertion` → `assertive`, rename 2× `assertive (identity)` → `assertive`  
**Priority:** MEDIUM

---

### Cluster P-3: Genitive variants

| Current Label | Count | Nodes |
|---|---|---|
| `genitive marker` | 3 | cc5, cc25, cc26 |
| `genitive` | 1 | cc31 |

**Canonical label:** `genitive`  
**Rationale:** "marker" suffix inconsistent. Shorter is better for tree labels.  
**Fix:** Rename 3× `genitive marker` → `genitive`  
**Priority:** LOW

---

### Cluster P-4: Degree variants

| Current Label | Count | Nodes |
|---|---|---|
| `degree` | 7 | s9, s21, s36, etc. |
| `degree marker` | 2 | s121, s128 |

**Canonical label:** `degree`  
**Fix:** Rename 2× `degree marker` → `degree`  
**Priority:** LOW

---

### Cluster P-5: Change of state variants

| Current Label | Count | Nodes |
|---|---|---|
| `change of state` | 3 | s7, s120, s64 |
| `change of state / current relevance` | 1 | s12 |
| `change of state / ongoing` | 1 | s110 |

**Canonical label:** `change of state`  
**Rationale:** The sub-distinctions (current relevance, ongoing) are linguistically valid but pedagogically unhelpful at this level. The core teaching point is that 了 marks change of state. Nuances belong in the explanation.  
**Fix:** Rename 2 variants → `change of state`  
**Priority:** MEDIUM

---

## Summary

| Priority | # Clusters | Total Nodes to Fix |
|---|---|---|
| HIGH | 4 (HV-1, ADJ-1, ADJ-4, P-1) | ~30 |
| MEDIUM | 4 (HV-3, ADJ-2, ADJ-3, P-2, P-5) | ~12 |
| LOW | 5 (HV-2, HV-4, ADJ-5, ADJ-6, P-3, P-4) | ~12 |

**Guiding principle applied throughout:** subRole labels should describe *grammatical function*, not restate the part of speech, provide tooltip-style explanations, or embed source-language annotations. Detailed distinctions belong in the `explanation` text, not in tree labels that learners compare across sentences.
