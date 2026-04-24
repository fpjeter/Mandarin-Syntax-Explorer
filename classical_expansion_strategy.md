# Classical Expansion Strategy

**Author:** Linguistics Specialist  
**Purpose:** Strategic meta-review for expanding `classical_sentences.json` from 30 to ~45 sentences  
**Constraint:** Prioritize structures where the visual AST tree provides maximum explanatory value for modern learners approaching classical Chinese

---

## Current Coverage Analysis

### Category Distribution (6 categories, 30 sentences)

| Category | Count | Key Patterns Covered |
|---|---|---|
| Coverbs & Prepositions (於/以/焉) | 6 | 於-locative, 以-instrumental, 焉 fusional, 以-purpose, 使…以-pivotal |
| Rhetorical Patterns (反問) | 5 | 不亦…乎, 寧…乎, 可矣 assertions, interrogative fronting |
| Classical Negation (非/勿/莫) | 5 | 非-identity, 勿-prohibitive, 莫-indefinite, 未-temporal, 不-standard |
| Sequential Actions (而) | 5 | 而-sequential, 而-contrastive, 而-concessive, 則-consequent |
| Genitive & Modification (之) | 5 | 之-genitive, 之-nominalization, 之-anaphoric pronoun, 之-object |
| Nominalizers (者/所) | 4 | 者-nominalization, 所-nominalization, 所以-means, 者…也 definition |

### Source Distribution (21 sources, heavy 《論語》 concentration)

| Source | Count | % |
|---|---|---|
| 《論語》(all chapters) | 14 | **47%** |
| 《道德經》 | 3 | 10% |
| 《孟子》 | 3 | 10% |
| 《荀子》 | 2 | 7% |
| 《史記》 | 1 | 3% |
| 韓愈《師說》 | 1 | 3% |
| 《左傳》 | 1 | 3% |
| 《三國志》 | 1 | 3% |
| **Missing entirely** | — | 《莊子》, 《戰國策》, 《詩經》, 《禮記》, Tang/Song prose, 諸子百家 others |

---

## Dimension 1: Structural Gaps

### Gap S1: Classical Conditionals (若/苟/則) — **NEW CATEGORY NEEDED**

**What's missing:** Classical Chinese has a rich conditional system (若…則…, 苟…則…, 使…) that is entirely absent from the dataset. Modern learners need to recognize these patterns when reading any classical text.

**Tree value:** ★★★★★ — Conditional frames create the same nesting power as modern 如果…就… but with an additional layer: the conditional marker (若/苟) is often separated from its consequence (則) by multiple embedded clauses. The tree makes the long-distance dependency visible.

**Recommended additions:** 3 sentences
- 若/如 conditional (most common form)
- 苟 conditional (formal/literary register)
- 使/令 counterfactual conditional

### Gap S2: Causative Constructions (使/令/讓) — **NEW CATEGORY NEEDED**

**What's missing:** Classical causatives (使人為, 令X不得) are a major structural pattern absent from the dataset. These create pivotal constructions where the object of the causative verb becomes the subject of the embedded clause — identical to modern 兼語句 but with different markers.

**Tree value:** ★★★★★ — Causative pivotals produce the deepest nesting in classical Chinese: `使 → Pivot(person) → Embedded Clause → VP`. The tree reveals the shared noun between the two clauses (the "pivot"), which is invisible in linear text.

**Recommended additions:** 2 sentences
- 使-causative (most canonical form)
- 令-causative (Han dynasty legal/military register)

### Gap S3: Passive Constructions (為…所…/見…/被…)

**What's missing:** Classical Chinese has at least three passive markers (為…所…, 見, 被) that are entirely unrepresented. The modern BEI passive evolved FROM these classical forms — showing learners the ancestor structures would create powerful cross-dataset connections.

**Tree value:** ★★★★★ — The 為…所… frame creates a distinctive tree shape: `為 → Agent → 所 → VP`. This is structurally parallel to the modern 被 tree but with an extra nominalizer (所) wrapping the verb phrase. The tree makes this historical evolution visible.

**Recommended additions:** 2 sentences
- 為…所… passive (most common classical passive)
- 見-passive (pre-Han, frequently encountered in 《戰國策》)

### Gap S4: Topic-Comment in Classical Chinese (無標記主題)

**What's missing:** While modern Topic-Comment is well-covered, classical Chinese topic-comment has unique features: zero-copula predication (X也), topic chains with 者…也 definitions, and contrastive topic pairs. Only 2 of the current 30 sentences demonstrate these specifically.

**Tree value:** ★★★★ — The zero-copula pattern (学者，所以传道也) creates a minimal but powerful tree: just `Topic → Comment(也)`. Adding more examples helps learners see that classical Chinese is *even more* topic-prominent than modern Mandarin.

**Recommended additions:** 2 sentences
- Zero-copula identification (X也)
- Contrastive topic pair (X者Y也，非Z也)

### Gap S5: Object Fronting (賓語前置)

**What's missing:** We have one example (cc14: 未之有也, cc27: 吾誰欺) but the pattern is far richer in classical Chinese. Object fronting occurs in negated contexts, interrogative contexts, and with specific markers like 是/之. This is one of the most disorienting features for modern learners.

**Tree value:** ★★★★★ — The tree shows the Object node *before* the Head Verb, with an annotation showing its canonical post-verbal position. This structural displacement is the #1 reason classical Chinese feels "backwards" to modern learners. The tree makes the movement explicit.

**Recommended additions:** 2 sentences
- 之-marked object fronting in affirmative context
- Interrogative fronting with 何/安

### Gap S6: Nominalizers — Expand Existing Category

**What's missing:** The weakest current category (4 sentences). Missing patterns: 所+V as object, 者 in conditional ("…者" = "if one…"), and the important 之所以 ("the reason why") construction.

**Tree value:** ★★★★ — Nominalizers create distinctive tree shapes where a VP is wrapped inside a NP node. More examples solidify this pattern recognition.

**Recommended additions:** 2 sentences
- 之所以 ("the reason why") construction  
- 者 in conditional/generic sense

---

## Dimension 2: Source Diversity

### Priority D1: Reduce 《論語》 concentration from 47% to ~30%
The current 14/30 Confucius ratio creates two problems:
1. **Stylistic homogeneity** — learners only see the 論語's distinctive terse aphoristic style, missing narrative prose, philosophical argument, and historical chronicle styles.
2. **Vocabulary bias** — 論語 overrepresents moral/ethical vocabulary (仁、義、禮) at the expense of military, political, and natural-world terminology.

**Target:** No new 《論語》 additions. All 13-15 new sentences should come from other sources.

### Priority D2: Introduce narrative prose sources

| Source | Why Essential | Recommended Count |
|---|---|---|
| 《莊子》 | Philosophical parables with rich metaphor; highly distinctive style. Fills the "literary prose" gap completely absent from the dataset. | 3 sentences |
| 《戰國策》 | Political rhetoric and dialogue; complex argument structures with nested conditionals and rhetorical questions. Best source for the new Conditional category. | 2 sentences |
| 《史記》 (expand) | Narrative history; currently only 1 sentence. The narrative mode introduces temporal sequencing (而、乃、遂) in ways aphorisms cannot. | 2 sentences |
| 《禮記》 | Ritual and social philosophy; fills the "institutional" register gap. | 1 sentence |

### Priority D3: Introduce pre-Qin poetry and post-Han prose

| Source | Why | Count |
|---|---|---|
| 《詩經》 | Oldest Chinese poetry; introduces paired/parallel structure and formulaic language. The tree shows the symmetry beautifully. | 1 sentence |
| Tang/Song prose (柳宗元, 歐陽修, 蘇軾) | Bridges classical and literary Chinese; more accessible vocabulary for modern learners. Good for causative and conditional examples. | 1-2 sentences |

---

## Combined Priority Ranking

| Rank | Gap | Category | Tree Value | New Sentences | Source Priority |
|---|---|---|---|---|---|
| 1 | Causative (使/令) | **NEW** | ★★★★★ | 2 | 《戰國策》, 《史記》 |
| 2 | Conditional (若/苟/則) | **NEW** | ★★★★★ | 3 | 《莊子》, 《戰國策》, 《左傳》 |
| 3 | Passive (為…所…/見) | **NEW** | ★★★★★ | 2 | 《史記》, 《戰國策》 |
| 4 | Object fronting | Expand existing | ★★★★★ | 2 | 《莊子》, Tang prose |
| 5 | Nominalizers (者/所) | Expand existing | ★★★★ | 2 | 《莊子》, 《禮記》 |
| 6 | Topic-Comment | Expand existing | ★★★★ | 2 | 《詩經》, 《孟子》 |

**Total: 13 new sentences → 43 total**

---

## Structural Design Principles

1. **Cross-dataset resonance:** Every new classical sentence should have a structural echo in the modern dataset. If we add a classical causative (使人不得), learners should be able to compare its tree with a modern pivotal (让他去).

2. **Nesting depth over vocabulary difficulty:** Prioritize sentences with 3+ levels of nesting over sentences with rare vocabulary. The tree is most useful when it reveals structure that linear parsing cannot.

3. **Balanced granularity:** New categories (Conditional, Causative, Passive) should launch with 2-3 sentences each — enough to show pattern variation but not so many that they dominate the sidebar.

4. **Source as pedagogy:** Each new source should be introduced with at least 2 sentences so learners get enough exposure to recognize its stylistic register. A single 《莊子》 sentence teaches nothing about 莊子's style; three sentences reveal the pattern.
