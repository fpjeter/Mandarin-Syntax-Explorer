# Queued Informational Audits — Results

**Run date:** 2026-04-27  
**Dataset:** 133 modern sentences, 43 classical sentences (176 total)

---

## Audit 3: Cross-Reference Coverage

### Finding: 100% orphan rate — `relatedIds` is universally empty

Every single sentence in both datasets has zero `relatedIds` entries.

| Dataset | Orphans | Total |
|---|---|---|
| Modern | **133** | 133 |
| Classical | **43** | 43 |

No cross-category `relatedIds` mismatches found (trivially, since none exist).

### Impact
The `relatedIds` field was designed to power a "See Also" navigation feature that helps learners find related sentence patterns. With 0% coverage, that feature is entirely dead.

### Recommendation (MEDIUM priority)
This is a **Data Linguist task**: wire up `relatedIds` systematically within each category. The pattern is clear — sentences within the same category are natural cross-references. A scripted first pass could auto-populate `relatedIds` for intra-category pairs, then the LS could prune any that are not pedagogically related.

Rough scope: 19 modern categories × avg 7 sentences = ~133 links to add. 11 classical categories × avg 4 sentences = ~43 links.

---

## Audit 4: Category Balance

### Modern (133 sentences, 19 categories)

| Count | Category | Flag |
|---|---|---|
| 5 | Serial Verb Constructions (连动句) | — |
| 5 | Discourse Context (跨句语境) | — |
| 5 | Even (连…都/也) | — |
| 6 | Rhetorical Questions (反问句) | — |
| 6 | Separable Verbs (离合词) | — |
| 6 | Resultative Complements (结果补语) | — |
| 6 | Double Topic (双主题) | — |
| 6 | Degree Complements (程度补语) | — |
| 6 | Directional Complements (趋向补语) | — |
| 6 | Aspect Markers (着/过/了) | — |
| 7 | BA Construction (把字句) | — |
| 7 | Comparatives (比较句) | — |
| 7 | Potential Complements (可能补语) | — |
| 8 | BEI Passive (被字句) | — |
| 8 | Shì–de Construction (是…的) | — |
| 8 | Pivotal Constructions (兼语句) | — |
| 8 | Correlative Patterns (关联句型) | — |
| 8 | Conditional Sentences (如果…就…) | — |
| **15** | **Basic Topic–Comment (主题评论)** | **📦 DENSE** |

**Finding:** Modern dataset is well-balanced (5–8 range) except for **Basic Topic–Comment** at 15 sentences. This category is the foundation of the FLS framework so density is expected, but it could be a candidate for splitting into sub-categories (e.g., "Simple Topic–Comment" vs "Embedded Topic–Comment").

### Classical (43 sentences, 11 categories)

| Count | Category | Flag |
|---|---|---|
| **1** | **Classical Passive (為…所…)** | **⚠️ THIN** |
| **2** | **Classical Causatives (使/令)** | **⚠️ THIN** |
| **2** | **Object Fronting (賓語前置)** | **⚠️ THIN** |
| **2** | **Topic-Comment (主題)** | **⚠️ THIN** |
| 4 | Classical Conditionals (若/苟/則) | — |
| 5 | Rhetorical Patterns (反問) | — |
| 5 | Classical Negation (非/勿/莫) | — |
| 5 | Genitive & Modification (之) | — |
| 5 | Sequential Actions (而) | — |
| 6 | Nominalizers (者/所) | — |
| 6 | Coverbs & Prepositions (於/以/焉) | — |

**Finding:** 4 of 11 classical categories are thin (< 3 sentences). This is Phase C expansion territory:
- **Classical Passive** (1 sentence) — most urgently thin; 為…所… has many canonical examples
- **Classical Causatives** (2) — 使/令 constructions with object-fronted objects, coverb combinations
- **Object Fronting** (2) — 之/是 fronting, interrogative fronting, 唯…是… pattern
- **Topic-Comment (Classical)** (2) — complex nested TC structures

---

## Audit 5: Source Citation Format

### Finding: Two distinct issues across 14 entries

**Issue A — Author-before-title format (non-standard):** 3 entries use `韓愈《師說》` or `歐陽修《伶官傳序》` (author name embedded in source string instead of `author` field).

| ID | Source (current) | Should be |
|---|---|---|
| cc12 | `韓愈《師說》` | `《師說》` + author: `Han Yu` |
| cc34 | `韓愈《師說》` | `《師說》` + author: `Han Yu` |
| cc43 | `歐陽修《伶官傳序》` | `《伶官傳序》` + author: `Ouyang Xiu` |

**Issue B — Missing `author` field (cc31–cc43):** All 13 sentences added in the Phase B expansion are missing the `author` field entirely.

| IDs | Author to add |
|---|---|
| cc31, cc35, cc37 | Zhuangzi |
| cc32, cc33 | Anonymous (Warring States period) |
| cc34 | Han Yu |
| cc36, cc41 | Sima Qian |
| cc38 | Anonymous (ritual compilation) |
| cc39 | Mencius |
| cc40 | Anonymous (folk poetry) |
| cc42 | Zuoqiu Ming |
| cc43 | Ouyang Xiu |

**No issues:** All 43 source fields use `《》` bracket style and `·` chapter separator (ignoring the author-prefix cases above).

### Recommendation (LOW priority, easy fix)
**Data Linguist task:** 13 `author` field additions + 3 source string corrections. Mechanical, ~1hr work.

---

## Audit 6: Tree Depth Outliers

### Summary

| | Modern | Classical |
|---|---|---|
| Average depth | **3.6** | **3.0** |
| Max depth found | 7 | 5 |
| Shallow (< 3) | 17 sentences | 11 sentences |
| Deep (> 7) | 0 | 0 |

### Depth distribution (all 176 sentences)

| Depth | Count |
|---|---|
| 1 | 1 |
| 2 | 27 |
| 3 | 79 |
| 4 | 41 |
| 5 | 23 |
| 6 | 4 |
| 7 | 1 |

### Shallow sentences (depth = 1)
`cc14` — depth 1. This is the only depth-1 sentence in the dataset and warrants manual review.

### Shallow sentences (depth = 2) — likely fine
The 27 depth-2 sentences are expected for simple classical 4-character phrases or minimal Topic–Comment structures. Examples: `cc1`, `cc9`, `cc15`, `cc27`, `cc32`. Classical sentences structurally tend to be shallower (avg 3.0 vs 3.6 modern) because they encode more meaning in fewer characters.

**The one genuine concern is `cc14` at depth 1.** All other shallow sentences appear structurally intentional.

### Recommendation
**Manual review of `cc14` only.** No evidence of systematic under-annotation. No action needed for depth-2 sentences.

---

## Audit 7: Explanation Length

### Summary

| | Modern | Classical |
|---|---|---|
| Average length | **79 words** | **110 words** |
| Missing explanations | 0 | 0 |
| Too terse (< 50 words) | **8** | 0 |
| Too long (> 400 words) | 0 | 0 |

### Word count distribution

| Range | Count |
|---|---|
| 26–50 words | 8 |
| 51–100 words | 131 |
| 101–200 words | 37 |

### Terse explanations (all modern, s129–s137)

These 8 sentences are s129–s137, the newest additions to the modern dataset. They are consistently short (36–48 words) compared to the 79-word average.

| ID | Words |
|---|---|
| s131 | 36 |
| s135 | 36 |
| s129 | 38 |
| s134 | 42 |
| s136 | 44 |
| s130 | 41 |
| s137 | 43 |
| s132 | 48 |

### Finding
The terse cluster is a clear **recency pattern** — the last 9 modern sentences (s129–s137) were written with shorter explanations than established. All 43 classical explanations are well within range (avg 110w), as expected from the more detailed Phase B work.

### Recommendation (LOW priority)
**Educational Publisher task:** expand s129–s137 explanations to ~75-word target. Not pedagogically broken but lacks the nuance of the rest of the dataset.

---

## Priority Matrix

| Audit | Finding | Severity | Owner | Est. Effort |
|---|---|---|---|---|
| #3 Cross-ref | 0% `relatedIds` coverage — "See Also" feature is dead | MEDIUM | Data Linguist | 2–3 hrs |
| #4 Category balance | 4 thin classical categories (Phase C candidates) | MEDIUM | LS + EP | Phase C planning |
| #5 Source citations | 13 missing authors, 3 malformed source strings | LOW | Data Linguist | 1 hr |
| #6 Tree depth | `cc14` at depth 1 — needs manual review | LOW | LS | 15 min |
| #7 Explanation length | s129–s137 explanations ~half avg length | LOW | Ed. Publisher | 1 hr |
