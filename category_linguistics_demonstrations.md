# Category Linguistics Demonstrations

**Author**: Linguistics Specialist
**Task**: Define Category Learning Objectives
**Dependencies**: Fractal Logic Stream (FLS) theoretical framework (`fls-position-paper.md`)

To prepare for expanding the sentence databank, we must encode precisely *what* structural learning objective each syntax category is responsible for demonstrating. Any sentence submitted to a category must satisfy these FLS constraints.

---

### 1. Basic Topic–Comment (主题评论)
- **Constraint**: Must clearly demonstrate the fundamental FLS atomic unit: one root `Topic`, one `Comment`. 
- **Sub-Requirement**: Include examples of both explicit topics and dropped topics (where the `Topic` maps to an Implicit Situational context like `[现场]` or a Ghost Node `[GCR Broadcast]`).

### 2. BA Construction (把字句)
- **Constraint**: Must demonstrate the extraction of the object into a pre-verbal `Adjunct` position headed by a `Preposition` (把). 
- **Critical FLS Constraint**: Must pass the **Completeness Constraint**. The action inside the Comment cannot end in a bare verb; it must terminate with an aspect marker, a complement, or reduplication to show consequence.

### 3. BEI Passive (被字句)
- **Constraint**: Must demonstrate that the Patient has been promoted to the root `Topic`. The `Comment` contains an `Adjunct` (preposition 被 + Actor) and the `Head Verb`. 
- **Critical FLS Constraint**: Like BA sentences, must pass the **Completeness Constraint**.

### 4. Comparatives (比较句)
- **Constraint**: The `Comment` must encapsulate the standard of comparison as a pre-verbal `Adjunct` (Preposition 比 + Noun) before an adjectival `Head Verb`.
- **FLS Constraint**: Must not abuse the `Topic` node as an overarching clause wrapper.

### 5. Correlative Patterns (越…越…)
- **Constraint**: Must demonstrate chained transitions (The Waterfall). Evaluated as a `Parallel Sentence` or dual Topic/Comment clauses where the completion of the first clause acts as the logic trigger for the second.

### 6. Shì–de Construction (是…的)
- **Constraint**: Must demonstrate the **Refocused Scope Sandwich**: The `Comment` must open with the Copula 是, wrap the focused event inside a `Verb Phrase`, and terminate with the Particle 的. No elements may escape this sandwich unless they are an un-focused trailing object.

### 7. Resultative Complements (结果补语)
- **Constraint**: Must map the action and its resulting state as a fossilized "Verb Package." `Head Verb` and `Complement` must be flat, contiguous siblings.

### 8. Directional Complements (趋向补语)
- **Constraint**: Must map the verb of motion and its spatial vector (e.g., 上来, 过去). Like Resultatives, these sit flatly adjacent to the `Head Verb` inside the innermost `Verb Phrase`.

### 9. Potential Complements (可能补语)
- **Constraint**: Must demonstrate the "Hardware Toggle." The markers 得 or 不 must map as flat `Particle` leaves sitting *between* the `Head Verb` and the `Complement`. 

### 10. Degree Complements (程度补语)
- **Constraint**: Must demonstrate the **Recursive Hinge**. Unlike Resultative/Potential categories, the marker 得 must head a new, nested `Complement` node (a logic zone) containing a `Verb Phrase` or descriptive structure.

### 11. Aspect Markers (着/过/了)
- **Constraint**: Must demonstrate syntactic proximity. The aspect `Particle` must immediately follow the `Head Verb`, inside the same wrapper, regardless of where the object sits.

### 12. Pivotal Constructions (兼语句)
- **Constraint**: Must demonstrate the **Situation Object / Embedded Clause**. A causative verb (让/叫/请) acts upon an `Embedded Clause`. The Pivot (the patient of the first verb) must sit inside that Embedded Clause as the active `Subject` of the secondary verb.

### 13. Serial Verb Constructions (连动句)
- **Constraint**: Must demonstrate **Parallel Transitions (The Stream)**. Multiple `Verb Phrase` nodes must sit flatly adjacent under a single `Comment`, sharing the identical Global Anchor (Topic).

### 14. Separable Verbs (离合词)
- **Constraint**: The data must demonstrate that the compound is logically split. It must employ the roles `Verb Morpheme` and `Object Morpheme`, bisected by an aspect particle or directional complement.

### 15. Double Topic (双主题)
- **Constraint**: Must strictly demonstrate the **Matryoshka Principle**. The outer Sentence must contain a `Topic` (Global discourse frame) and a `Comment`. Entirely *inside* that Comment, another fully realized `Topic` and `Comment` pair must formulate the local logic.

### 16. Conditional Sentences (如果…就…)
- **Constraint**: The `Topic` must contain the conditional framework (the hypothesized state or boundary). The `Comment` contains the sequence or consequence taking place within that boundary.

### 17. Rhetorical Questions (反问句)
- **Constraint**: The rhetorical force must be encapsulated locally. Interrogative frames (难道 / 吗 / 乎) must map as `Adjuncts` or `Particles` entirely inside the `Comment`, without rupturing the root Topic-Comment tree structure.

### 18. Even (连…都/也)
- **Constraint**: Must demonstrate focus fronting. The element being emphasized is bumped into the `Topic` slot and paired with the `连` preposition, forcing the adverbial `都` or `也` into the `Adjunct` slot of the subsequent `Comment`.

### 19. Discourse Context (跨句语境)
- **Constraint**: Must demonstrate **Identity Binding**. Required `Subject` drops must map to Ghost Nodes (`isDropped`) without an internal `refersToId`, proving their identity is pulled from outside the current parsed tree scope.
