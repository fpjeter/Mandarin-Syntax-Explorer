# Audit Report: Splitting "Basic Topic-Comment (主题评论)"

**Date:** 2026-05-20
**Reviewer:** Linguistics Specialist

## 1. Evaluation of Proposed Split
Carving out **Existential/Locative (存现句)** and **Object-Fronting** from the "Basic Topic-Comment" category is an excellent, theoretically sound decision.
- **Existential / Locative (存现句)** (e.g., s125: 墙上挂着一幅画): These are structurally highly distinct. They universally feature a locative phrase in the topic position, a verb of posture/emergence/disappearance, and an indefinite post-verbal noun phrase. They behave very differently from canonical agent-action sentences. 
- **Object-Fronting** (e.g., s15, s124): These are canonical examples where the semantic patient (the object) is promoted to the topic position. Separating these helps learners differentiate between default SVO word order and O-SV / OS-V structures.

## 2. Terminology for "Object-Fronting"
You noted that the classical set uses "賓語前置" (Object Fronting), while modern pedagogical grammars often use "受事主语" (Patient Subject). 

From a strict linguistic perspective—especially given your project's **Fractal Logic Stream (FLS)** framework which emphasizes the Topic-Comment dichotomy—calling it a "Subject" is theoretically problematic. The fronted object functions as the **Topic**, not the grammatical Subject (which is often dropped or appears after the topic).

**Recommendation:** 
Use **Patient-Topic (受事话题)**. 
- It perfectly aligns with your FLS architecture (where "Topic" is a core structural node).
- It is more accurate than "Patient Subject" (受事主语), which conflates syntactic roles with pragmatic ones.
- If you prefer to stick closer to common pedagogical terms while remaining structurally accurate, **Object as Topic (宾语作话题)** or simply **Object-Fronting (宾语提前)** is also highly acceptable for modern Mandarin.

## 3. Further Recommendations for the Remaining Sentences

Looking at the remaining sentences currently in "Basic Topic-Comment", here are a few more structural adjustments you should consider:

### The `非...不可` Sentences (s11, s57)
The phrase `非...不可` forms an emphatic double negation expressing strong necessity ("must").
- **Observation:** Your current `src/data/categories.ts` file actually lists `非...不可` in the description for **"Rhetorical Questions (反问句)"**.
- **Theoretical Issue:** `非...不可` is a declarative statement of absolute necessity, not a rhetorical question.
- **Action:** I recommend renaming the "Rhetorical Questions" category to **"Emphatic & Rhetorical (强调与反问)"** to comfortably house both `难道` and `非...不可`, and then move s11 and s57 into this category. Alternatively, create a distinct **Emphatic Constructions (强调句)** category.

### Verb-Copying Construction (动词拷贝句)
- **Sentence:** s19 (他学中文学了五年了)
- **Action:** This is a classic Verb-Copying construction. You currently do not have a category for this. If you don't want to create a new category, consider whether it belongs in a new **Verb-Copying (动词拷贝句)** category, as this is a major pain point for learners and structurally distinct.

### Misclassified Complements
- **Sentence:** s7 (我看了半天，还是看不了，就不看了)
- **Action:** This sentence prominently features `看不了`, which is a **Potential Complement (可能补语)**. It should be moved to that existing category.

---
**Summary of Recommended New Categories:**
1. `Existential / Locative (存现句)`
2. `Patient-Topic (受事话题)`

**Summary of Re-categorizations:**
- Move s11, s57 to `Rhetorical Questions (反问句)` (and consider renaming it).
- Move s7 to `Potential Complements (可能补语)`.
