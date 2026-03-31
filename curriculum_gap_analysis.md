# Curriculum Gap Analysis
**Author**: Educational Publisher
**Audience**: Orchestrator, Data Linguist
**Status**: Ready for Data Generation

This document evaluates our current database of 92 parsed sentences against the Fractal Logic Stream (FLS) learning objectives defined in `category_linguistics_demonstrations.md`. 

Our goal is to ensure that the grammar tree visualizations successfully map abstract theoretical mechanics to accessible, intuitive examples for beginners. The following gaps must be addressed immediately via new databank entries.

---

## 1. High-Priority Deficits (URGENT)
The following categories lack sufficient examples to demonstrate their FLS mechanics, with fewer than 4 total sentences.

### A. Discourse Context (跨句语境) — 2 sentences total
- **The FLS Objective**: Demonstrate *Identity Binding*, where a dropped `Topic` relies entirely on a Ghost Node referencing an external conversation.
- **The Gap**: Two sentences cannot convey this core Mandarin law: "Rely on environmental context, not pronouns."
- **Data Linguist Constraints**: 
  - Generate exactly **3** new sentences.
  - *Vocabulary constraint*: Use conversational answers or immediate situational reactions (e.g., "Already eaten.", "Very tired today.").
  - *Structural constraint*: Force the root `Topic` into an `isDropped` Ghost Node targeting an external referent.

### B. Correlative Patterns (越…越…) — 3 sentences total
- **The FLS Objective**: Demonstrate *The Waterfall*, where the first complete thought naturally triggers the second thought as a chained, parallel paratactic transition.
- **The Gap**: We require high-level abstract logic here, not just "The more I eat, the fatter I get."
- **Data Linguist Constraints**: 
  - Generate exactly **3** new sentences.
  - *Vocabulary constraint*: Use HSK 3-4 abstract concepts related to learning, environment, or psychology (e.g., "The more you study, the more you understand").
  - *Structural constraint*: Map these as `Parallel Sentence` nodes or sequential Subject-Verb cascades.

### C. Rhetorical Questions (反问句) — 3 sentences total
- **The FLS Objective**: Demonstrate that rhetorical frameworks (难道...吗) belong deeply inside the `Comment` as `Adjuncts` and `Particles`, never wrapping the root `Topic`.
- **The Gap**: Lack of emotional scale.
- **Data Linguist Constraints**: 
  - Generate exactly **2** new sentences.
  - *Vocabulary constraint*: Use emotionally charged disbelief or defensive reactions (e.g., "Could it be that you forgot?", "How could I not know?").

---

## 2. Structural Tuning (Moderate Priority)
The following categories have healthy sentence counts (5-6) but run the risk of failing the **Completeness Constraint** or **Matryoshka Principle** if not carefully curated.

### A. BA (把) and BEI (被)
- **The FLS Objective**: Adherence to the *Completeness Constraint*. The Comment cannot end in a bare verb (e.g., "我把他打"). It must be "finished" by a span, result, or aspect.
- **Data Linguist Constraints**:
  - Review the 11 combined sentences. If any terminate in just `-了`, flag for adjustment.
  - *Vocabulary constraint (BEI)*: Ensure exactly ONE sentence features a non-adverse outcome (e.g., "was elected", "was named"). The rest must use adverse physical verbs (shattered, stolen, bitten).
  - *Vocabulary constraint (BA)*: Verbs must strictly be objects manipulating position or state (e.g., placing, throwing, washing).

### B. Pivotal Constructions (兼语句)
- **The FLS Objective**: Explicitly demonstrate the *Matryoshka Principle*. The causative verb operates on an entirely self-contained `Situation Object` (Embedded Clause) containing its own Pivot Topic and resulting Comment.
- **Data Linguist Constraints**:
  - *Vocabulary constraint*: Ensure a mix of strong causatives (让 "make/let", 逼 "force") and polite requests (请 "invite/request"). Do not rely entirely on "The teacher made the student...".

### C. Shì–de Scope Sandwich (是…的)
- **The FLS Objective**: The `Comment` must perfectly bracket the emphasized action. 
- **Data Linguist Constraints**:
  - *Vocabulary constraint*: Focus strictly on past-tense investigations—emphasizing *Time*, *Place*, or *Manner* (e.g., "Where did you buy this?", "I came by train").

---

## Next Steps
The **Data Linguist** should receive this document as their blueprint for Phase 5 (Data Gen). They must ensure all new syntax trees map precisely to these vocabulary contexts, generating the exact quantity requested above.
