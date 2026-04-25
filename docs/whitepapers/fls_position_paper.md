# Position Paper: Adopting the Fractal Logic Stream as Our Structural Foundation

**Author:** Linguistics Specialist
**Target Audience:** Orchestrator, Data Linguist, Educational Publisher, Frontend Engineer
**Status:** Ratified (Implemented)

---

## 1. Introduction: The Failure of the Cathedral

This paper formally adopts **The Fractal Logic Stream** (FLS) as the theoretical backbone of the Mandarin Syntax Explorer. Traditional linguistic frameworks often attempt to parse Mandarin using a "Cathedral" architecture—rigid, vertical hierarchies of main and subordinate clauses characterized by hypotaxis and morphological "ink" (inflection, case, agreement). In this old paradigm, Mandarin is often viewed as "deficient" due to its lack of explicit grammatical markers.

In contrast, Mandarin is fundamentally a "Train" architecture: a linear, paratactic sequence of autonomous logic units. The FLS, grounded in the foundational work of Chao (1968), Li & Thompson (1976), and Huang (1984), describes the language in its native state: a high-efficiency Logic Machine where meaning is derived from **Scope** (structural positioning) rather than morphological redundancy.

> [!IMPORTANT]
> This paper does **not** propose changing the plain-language labels our learners see in the app (Topic, Comment, Verb Phrase, Adjunct, etc.). Those remain as they are. The FLS operates *behind* the interface, providing formal mathematical justification for the structural decisions the Data Linguist must make when building syntax trees.

---

## 2. Core Concepts and Logic Formulas

The FLS introduces standard mathematical formulas to prove structural constancy across the language. Below, each principle is translated into what it means concretely for our tree data.

### 2.1. The Atomic Unit: $S = T + C$

**FLS Principle:** The indivisible atom of Mandarin is the Topic-Comment unit. 
$$\text{Structural Law: } S = T + C$$
- **Topic ($T$)**: The Anchor or Scope. It establishes the "World" of the utterance.
- **Comment ($C$)**: The Remark or Result. It provides the data within that established world. 

**What this means for us:**
This is the formal justification for our existing "root rule"—every `Sentence` node must split into a `Topic` (which may be null) and a `Comment`. The FLS defines the Comment not as a "verb phrase," but as a **Logic Zone / Predicative Slot**. Any information can be anchored here to create a valid truth-claim. 

### 2.2. The Matryoshka Principle: Recursion

**FLS Principle:** Mandarin logic is fractal. The Comment is a recursive container holding a Nested Sentence Structure.
$$\text{The Fractal Blueprint: } S_1 = T_1 + C_1[S_2] = T_1 + C_1[T_2 + C_2]$$

**What this means for us:**
The Comment is a **container**, not a constituent. Every predicative unit in Mandarin is technically a complete sentence nested within the macro-comment slot. A `Comment` node must always *wrap* its Verb Phrase contents, never *be replaced by* them.

### 2.3. Asymmetric Identity Subscription and the GCR

**FLS Principle:** To maintain efficiency, nested topics ($T_2$) are often set to Null ($\emptyset$). The FLS identifies an asymmetry in how these empty slots bind to identities:
- **Subject Subscription (pro)**: Null subjects follow C.T. James Huang's (1984) Generalized Control Rule (GCR), co-indexing with the closest nominal element—usually the Global Anchor ($T_1$).
- **Object Mapping (Variable)**: Null objects are parsed as variables bound by a Null Discourse Operator, mapped to the established "Topic Window" of the conversation rather than directly appending to $T_1$.

**What this means for us:**
Our ghost nodes (`isDropped: true`) are structurally mandatory null positions. 
- *Subjects* require a ghost node with `refersToId` pointing to the main Topic node.
- *Objects* require a ghost node *without* `refersToId`, tying into the broader Discourse Context category.

### 2.4. The Relay Hypothesis (Mixed-Mode Chains)

**FLS Principle:** What traditional grammar calls "Serial Verb Constructions" (SVCs) are modeled in the FLS as Atomic Sequences—streams of individual $S$ units ($T+C$). Most Chinese linguists analyze SVCs as multi-verb predicates sharing a single subject within one clause; the FLS reframes them as chained $T+C$ units where subsequent verbs "subscribe" back to the original Topic via null positions. This reframing is a modeling choice that keeps our trees structurally consistent, not a claim that SVCs cannot be analyzed as single-clause phenomena.
- **Parallel Transitions (The Stream):** `Logic: S_1 + S_2`. Subsequent units "subscribe" back to the Global Anchor ($T_1$) via a Null Topic. Same actor chronologically.
- **Chained Transitions (The Waterfall):** `Logic: C_1 \rightarrow \text{becomes Topic for} \rightarrow [C_2]`. A subsequent unit uses the entirety of the previous $S$ unit as its Topic, creating causal/resultative fusion.

**Structural guidance for the Data Linguist:**
> For Parallel transitions (e.g., 骑自行车去上班), map as parallel sibling `Verb Phrase` nodes inside one `Comment`.

### 2.5. Recursive Situational Objects (Pivotal & Passive)

**FLS Principle:** One of the most powerful proofs of the model's consistency is the **structural identity of causative (pivotal) and passive (bèi) constructions.** Both utilize a Situational Object Slot.

- **The Causative Pivot (Initiated Situation)**: `$T_1 \text{ [Anchor]} + V_{cause} \text{ [Action]} + C_1[T_2 + V_{nested}]$`. $T_1$ is the "Source" of the energy that triggers the situation.
- **The Passive Pivot (Affected Situation)**: `$T_1 \text{ [Anchor]} + \text{被 } [V_{undergo}] + C_1[T_2 + V_{nested}]$`. $T_1$ is the "Target" affected by the situation.

> [!IMPORTANT]
> **Modeling Decision: 被 as Head Verb**
>
> **The case against (linguistic reality):**
> Modern consensus (Shi Yuzhi, Peyraube, et al.) holds that 被 has **grammaticalized** from a full lexical verb ("to suffer / to be covered by") into a preposition or passive marker. The evidence is clear:
> - 被 cannot stand alone as a predicate. 我让 ("I yield") is valid; 我被 is meaningless.
> - 被 carries no independent lexical meaning in modern usage. It functions purely as a structural signal.
> - In agentless passives (钱包被偷了), there is no agent NP between 被 and the verb. Forcing a ghost node into the "empty agent" slot props up a structural model rather than reflecting native speaker intuition.
> - Mainstream Chinese linguists classify 被 as a grammaticalized preposition, not a verb.
>
> **The case for (modeling elegance):**
> - Causative verbs (让/叫/请/派) are undisputed verbs. The surface structure `NP₁ + marker + NP₂ + VP` is identical for both causatives and passives. Giving 被 the same `Head Verb → Embedded Clause` blueprint means learners see one consistent tree shape instead of two.
> - 被 retains verbal residue: it is negated with 没 preceding it (没被打), and in the literary 被...所... construction, 所 typically marks the object of a verb.
> - The alternative requires introducing a third structural role ("Passive Marker" or "Prepositional Adjunct") that applies to only 2-3 words. This fractures the template for what is functionally the same nesting relationship.
> - Historical etymology supports the verb reading: 被 was unambiguously verbal in Classical Chinese, and its grammaticalization path is a continuum, not a binary switch.
>
> **Our decision:** The FLS maps 被 as a `Head Verb`. **This is a structural modeling decision, not a linguistic claim about the word's synchronic category.** We accept the agentless ghost node as the cost of template unification. All agents should understand that `Head Verb` for 被 is a role label within our model, not an assertion that 被 is a verb in modern Mandarin.

**What this means for us:**
By treating the object slot as a "Situation Container" (`Embedded Clause`), we eliminate the need for a separate passive rule. The structural blueprint (`Sentence > Topic & Comment > Verb & Object Clause`) remains identical; only the semantic direction changes between *ràng* (let/make) and *bèi* (undergo).

### 2.6. Fossilization and Hardware Toggles

**FLS Principle:** Modern compound verbs are **fossilized records** of ancient SVCs where horizontal chains of Cause + Result collapsed vertically into a single Verb Package ($V + R$). Formats like the Potential Complement (得/不) are merely **hardware toggles** inserted into this fossilized stack to indicate the ability to reach a result.

### 2.7. Focused Scope and Completeness Constraints

**FLS Principle:** 
1. **The Shì...de Pointer**: The word 是 acts as a "Pointer," promoting a circumstance (Time, Place, Manner) to the status of a Small Topic ($T_2$).
2. **Bǎ (把) Completeness**: 把 reorganizes the Comment's internal logic, spotlighting the object and forcing a result-bearing completion. A unique feature of this construction is the Completeness Constraint: it forces a Chained Transition that must terminate in a result node (aspect, complement, reduplication) to close the logic loop.

> [!IMPORTANT]
> **Modeling Decision: 把 as Adjunct (Preposition)**
>
> **Why 把 does NOT follow the 被/让/叫 Embedded Clause template:**
>
> The FLS unifies 被, 让, and 叫 under the `Head Verb → Embedded Clause` blueprint (§2.5) because all three **introduce a new actor** into the sentence, creating a genuine embedded situation with its own subject. 把 does not share this property:
> - In 他被**老板**骂, the agent *changes* — 老板 is a new actor doing the scolding. There IS an embedded event.
> - In 她让**他**去, the agent *changes* — 他 is a new actor doing the going. There IS an embedded event.
> - In 她把**杯子**打碎, the agent does NOT change — 她 is still doing the 打碎. There is NO embedded event with a different subject. 杯子 is the patient being repositioned, not the subject of an inner clause.
>
> 把+NP functions as a **pre-verbal adjunct** — structurally parallel to other adverbial phrases like 在厨房里 (location), 用爪子 (instrument), and 不小心 (manner). All are siblings modifying the main VP. The main verb of a 把 sentence is the action verb (打碎), not 把 itself.
>
> **Our decision:** The FLS maps 把 as an `Adjunct (disposal marker)` containing a `Head Verb: 把` + `Object: NP`. The main `Verb Phrase` remains a sibling of the 把-adjunct inside the Comment, preserving the VP as the true predicate. This aligns with mainstream Chinese grammar (Lü Shuxiang, Zhu Dexi) and pedagogical grammars (HSK, NPCR), which classify 把 as a preposition/coverb.
>
> **Amendment note (2026-04-25):** An earlier version of this paper incorrectly included 把 in the §2.5 template unification with 被/让/叫. This was an overextension of the Recursive Situational Object principle. The surface syntax `NP₁ + marker + NP₂ + VP` is shared, but the semantics are fundamentally different: 被/让/叫 introduce new actors; 把 does not. Template unification applies only to situation-taking verbs that open genuine embedded events.

### 2.8. Thetic Logic: The Spatiotemporal Anchor

**FLS Principle:** Topic-less presentative sentences (下雨了 "It's raining") rely on an **Implicit Situational Topic** ($T_{\emptyset}$). The "Current Space/Time Context" acts as the invisible Global Anchor. This grounding lets the entire phonetic utterance function as a Comment on the "here and now."

**What this means for us:**
For true thetic/weather sentences, use a dropped Topic set to a situational marker like `'[现场]'` (the current environment).

---

## 3. Summary: Terminology Mapping (FLS → Our plain language)

| FLS Concept | Our App's Plain Language equivalent |
|---|---|
| Atomic Unit ($T+C$) | Topic–Comment |
| Matryoshka Principle | Nesting (Comment contains a sentence) |
| Occupied Silence / Identity Subscription | Ghost node (pro-drop) |
| Parallel Transition (The Stream) | Serial Verb Construction (same subject) |
| Chained Transition (The Waterfall) | Resultative Compound / Verb + Result |
| Hardware Toggle | Potential Complement particle (得/不) |
| Refocused Scope / Pointer | 是…的 construction |
| Situational Object Slot | Embedded Clause |
| Implicit Spatiotemporal Anchor | Dropped topic (`[现场]`) |

---

## 4. Conclusion: Occupied Silence

The Fractal Logic Stream reveals a language of profound Structural Constancy. It also aligns perfectly with modern Recursive Language Models (RLMs), which utilize recursive interactions with input context to parse infinite strings without "context rot."

By establishing the $T+C$ unit as the universal building block, we see that complexity is achieved not through new grammatical rules, but through infinite recursion. Mandarin is the art of **Occupied Silence**: it builds a vast logical architecture using Null Topics and Implicit Relays, allowing "Verb-ish" phrases to act as full logical propositions by anchoring them to the fractal's invisible lines. 

## 5. FLS as an Internal Structural Engine (Pedagogical Boundary)

Per the latest pedagogical guidelines (`explanations_pedagogy.md`), it is critical to formalize that the **Fractal Logic Stream (FLS)** theory serves *exclusively* as our backend structural parsing engine. The FLS ensures our Abstract Syntax Trees (ASTs) are mathematically consistent. 

However, this strict theoretical framework must **never** bleed into the learner-facing UI. 
- Internal architectural constants such as "Situation-Taking Verb", "Identity Subscription", and "Occupied Silence" are explicitly **banned** from the app's `explanation` strings.
- The UI layer must translate these deep structural truths into accessible, warm metaphors (e.g., "Ghost Node" or "Embedded Clause").

The role of the Linguistics Specialist is to act as the silent structural architect: strictly governing the JSON taxonomy, while the Educational Publisher owns the presentation layer.

---

## Works Referenced

- The Fractal Logic Stream: A Fractal Approach to Structural Logic (2026 Revision)
- Chao, Y.R. (1968). *A Grammar of Spoken Chinese*
- Li, C.N. & Thompson, S.A. (1976). "Subject and Topic: A New Typology of Language"
- Huang, C.T.J. (1984). "On the Distribution and Reference of Empty Pronouns"
