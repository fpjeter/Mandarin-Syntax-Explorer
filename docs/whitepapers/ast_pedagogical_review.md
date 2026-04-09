# AST Pedagogical Review: Learner Impact Assessment

**Reviewer:** Educational Publisher
**Input:** `ast_type_audit.md` (Linguistics Specialist)
**Scope:** Evaluating each structural issue from the learner's perspective, plus independent scan of learner-facing surfaces.

---

## Issue 1: Dead Type — `Verb` is declared but never used

**Learner Impact:** None

A learner will never encounter this. The `Verb` role exists in the type system and has a glossary entry and rendering color, but no tree in the app uses it. Since learners cannot click on or hover something that does not exist, there is zero confusion risk.

**Recommendation:** Agree with the Specialist: keep the type for potential future use, but **remove the glossary entry** (line 42-46 of `glossary.ts`). A glossary entry for a role that never appears in a tree is clutter. If `Verb` is ever added to actual trees, restore the entry then.

---

## Issue 2: `Preposition` has no dedicated rendering color

**Learner Impact:** Medium

31 nodes across 21 sentences render as Preposition, and they all fall through to default gray styling. This is the same gray used for any unrecognized role. A learner who clicks on a gray node and reads "Preposition" will wonder why it looks different from every other labeled role. More importantly, Preposition nodes for 比, 跟, 像, 在, and 连 sit right next to colorful Adjunct, Head Verb, and Object nodes, making them look like they are broken or unfinished.

**What the learner sees:** A dull gray box labeled "PREPOSITION" surrounded by vivid, color-coded siblings. It looks like a rendering bug.

**Recommendation:** The Frontend Engineer should add a dedicated color for `Preposition` in both modern and classical themes. A warm, muted color (e.g., stone/slate-brown tones) would distinguish it from Adjunct (rose) and Head Verb (teal) without being too prominent. Prepositions are supporting players, not stars.

---

## Issue 3: `Preposition` vs `Head Verb` inconsistency for 把/被

**Learner Impact:** High

This is the single most confusing issue from a learner's perspective. If a learner explores a 把 sentence from the original batch, they see 把 labeled as "Preposition." If they then explore a 把 sentence from the coverage-gap batch, they see the exact same word labeled "Head Verb." The grammar guide footnote now explicitly explains *why* we label 把 and 被 as Head Verbs, so seeing "Preposition" in older trees directly contradicts the guide.

**What the learner sees:** The same Chinese character (把 or 被) with two different role labels in two different sentences. The guide says these are Head Verbs. Some trees say they are Prepositions. The learner concludes the app is inconsistent or wrong.

**Recommendation:** Agree with the Specialist that this is **HIGH priority**. The Data Linguist should migrate all older 把/被 Preposition nodes to `Head Verb` with appropriate subRole tags (`BA marker`, `passive marker (BEI)`). This should be a focused, bounded refactor: only the role label changes, not the tree structure itself.

---

## Issue 4: 319 uncontrolled subRole strings

**Learner Impact:** Medium (selectively High for Adjunct subRoles)

SubRoles surface in two ways:
1. **On Adjunct nodes:** The subRole appears as a visible colored pill (rose badge) that learners read. These ARE high-impact: a learner sees `bǎ-construction` on one tree and `ba-construction` on another. They see `conditional marker` on one tree and `conditional marker (as long as)` on another. The inconsistency undermines trust.
2. **On non-Adjunct nodes:** The subRole appears in small, low-contrast parenthetical text beside the role label. Most learners will not focus on these, but advanced learners browsing multiple trees will notice that the same concept has different labels.

The most confusing categories are:
- **Completion aspect** has 4 variants (completion, completion aspect, completion (inserted), completion aspect (inserted into split verb)). A learner comparing trees sees different labels for the same grammar concept.
- **Conditional** has 8 variants. This is chaos from a learner's perspective.
- **Consequence** has 7 variants. Same issue.
- **Passive** has 4 variants (passive / undergo, passive marker (BEI), passive marker (RANG), passive verbal). Since we teach passive as a unified concept, the labels should be unified too.

**What the learner sees:** Different label text for the same grammatical concept across different sentences. It looks unpolished and makes the learner wonder if they are actually different things.

**Recommendation:** Agree this is HIGH priority. However, I recommend a **two-phase approach** to keep scope manageable:

**Phase 1 (immediate):** Normalize the ~15 Adjunct subRoles that appear as visible pills. These are the learner-facing labels and should use a controlled vocabulary:
`time`, `location`, `manner`, `negation`, `degree`, `ba-construction`, `bei-construction`, `scope`, `frequency`, `conditional`, `consequence`, `concession`, `correlative`, `instrument`, `rhetorical`

**Phase 2 (later):** Normalize the ~300 non-Adjunct subRoles. These are lower visibility but still important for consistency. The Linguistics Specialist should define the canonical palette.

---

## Issue 5: Glossary entry for `Preposition` cites 把/被 as examples

**Learner Impact:** High

The glossary is directly accessible: learners click a tree label and see the definition. The current Preposition entry says: *"E.g. 把 (marks what's being done to), 被 (marks the doer in a passive)."* But the grammar guide footnote now says 把 and 被 are Head Verbs. A learner who reads one and then the other will see a direct contradiction.

**What the learner sees:** The guide says "we label 把 and 被 as Head Verbs." The glossary says "Preposition: e.g. 把, 被." The learner cannot reconcile these.

**Recommendation:** **Immediate fix.** Rewrite the Preposition glossary entry to use only true preposition examples from our data: 比 (comparison), 跟 (with), 像 (like), 在 (at/in). Remove all mention of 把 and 被. Suggested rewrite:

> **Headline:** A linking word that shows relationship
> **Detail:** Comes before a noun to show direction, location, comparison, or accompaniment. Common examples: 比 (compared to), 跟 (with/and), 像 (like/resembling), 在 (at/in).

---

## Issue 6: Grammar Guide "Tree labels at a glance" omits common roles

**Learner Impact:** Low-Medium

The guide currently lists 7 roles. Learners will encounter at least 4 additional high-frequency roles that are not explained there: `Particle` (103 nodes), `Subject` (45 nodes), `Embedded Clause` (31 nodes), and `Preposition` (31 nodes). However, each of these roles *does* have a glossary entry that appears on hover/tap, so learners are not completely left in the dark. The guide omission just means they have to discover the tooltips instead of being introduced upfront.

**What the learner sees:** A tree with a node labeled "PARTICLE" or "SUBJECT" that is not listed in the guide's "Tree labels at a glance" reference. The learner might wonder if they missed something, but hovering reveals the tooltip.

**Recommendation:** Add at minimum `Particle`, `Subject`, and `Embedded Clause` to the "Tree labels at a glance" section. `Preposition` should also be added once Issue 2 gives it a proper color. Suggested additions:

| Label | Description |
|---|---|
| Particle | Small grammar words like 了, 吗, 的, 着 that show tense, mood, or structure |
| Subject | The person or thing doing the action inside a comment |
| Embedded Clause | A complete mini-sentence nested inside a larger one |

---

## Independent Scan: Additional Learner-Facing Observations

### Observation A: Adjunct subRole tooltips are excellent

The `GrammarNode.tsx` file (lines 154-174) contains a comprehensive set of Adjunct subRole tooltips with clear Chinese grammar terms (时间状语, 地点状语, etc.). These are well-written, pedagogically sound, and provide genuine value to learners. This is a strong feature that should be preserved and extended.

### Observation B: Non-Adjunct subRoles display as raw technical text

For non-Adjunct roles, the subRole appears as plain text in parentheses: e.g., `HEAD VERB (passive / undergo)` or `COMPLEMENT (resultative (reach target))`. Some of these read well, but others are jargon-heavy or redundant:
- `completion aspect (inserted into split verb)` — what does "inserted into split verb" mean to a learner?
- `resultative · potential (catch/settle into state)` — too many concepts packed into one label
- `embedded predicate (null subject = contextual)` — pure linguistics jargon

**Recommendation:** As part of the Phase 2 subRole normalization, ensure that all learner-visible subRole strings use plain language. The parenthetical clarifications should be removed or simplified. For example: `completion (inserted)` → `completion`, `resultative (reach target)` → `result`.

### Observation C: `Parallel Sentence` and `Embedded Clause` roles are well-supported

Both have glossary entries, both appear in the guide prose (though not in the "labels at a glance" table). The explanations are clear and the tree rendering makes them visually distinct. No learner confusion expected from these.

---

## Priority Summary for Orchestrator

| Priority | Issue | Action | Owner |
|---|---|---|---|
| **Immediate** | Issue 5: Glossary contradicts guide on 把/被 | Rewrite `Preposition` glossary entry | Educational Publisher |
| **High** | Issue 3: Same word, different labels | Migrate 把/被 from Preposition to Head Verb | Data Linguist |
| **High** | Issue 4 Phase 1: Visible Adjunct subRole pills | Normalize ~15 Adjunct subRoles | Data Linguist |
| **Medium** | Issue 2: Preposition has no color | Add rendering color | Frontend Engineer |
| **Medium** | Issue 6: Guide omits common labels | Add Particle, Subject, Embedded Clause | Educational Publisher |
| **Low** | Issue 1: Dead Verb type | Remove glossary entry | Educational Publisher |
| **Deferred** | Issue 4 Phase 2: All subRoles | Define canonical palette, bulk migrate | Linguistics Specialist + Data Linguist |
