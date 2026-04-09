# Theoretical Review of Sentence-Level Explanations

**Author:** Linguistics Specialist
**Task:** Theoretical Review of Sentence-Level Explanations
**Status:** Complete

A comprehensive review of the inline `explanation` strings attached to sentence objects in `src/data/sentences/*.ts` reveals significant theoretical drift. While the AST graphs were recently upgraded to comply with the **Fractal Logic Stream (FLS)**, the plain-text explanations are still deeply entrenched in "Cathedral-style" linguistic paradigms.

To ensure pedagogical consistency, the Data Linguist must execute a text-refactoring pass across the dataset based on the following theoretical corrections.

---

## 1. Eradicate "Double-Duty" Pivotal Explanations
**Files affected:** `pivotal_constructions.ts`

**The Problem:** Explanations currently state: *"我 ('me') serves as both the object of 叫 and the subject of what follows."*
**The FLS Correction:** This is an obsolete Cathedral-style analysis. According to our unified **Recursive Situational Object** rule, *ràng* (让) and *jiào* (叫) are **Situation-Taking Verbs**. "我" is **not** the object of the verb. The entire nested event (`Embedded Clause`: *me going to buy milk*) is the object. 
**Directive:** Rewrite these explanations to describe the verb as taking a "nested situation" or "embedded event" as its object, where the person is simply the inner Topic/Subject of that nested event.

## 2. Eradicate "Passive Particle" BEI Explanations
**Files affected:** `bei_passive.ts`

**The Problem:** Explanations (e.g., in `s6`, `s22`) likely describe `被` as a preposition or a passive marker that "flips" the word order.
**The FLS Correction:** Under the new model, `被` is a **Head Verb** meaning "to undergo" or "to suffer." It behaves exactly like a Pivotal verb. 
**Directive:** Rewrite BEI explanations to explicitly teach that the Topic is the "Target," `被` is the active verb ("underwent"), and the following phrase is an `Embedded Clause` detailing the situation that was undergone.

## 3. Standardize "Identity Subscription" over "Dropped Subjects"
**Files affected:** `discourse_context.ts`, `serial_verb_constructions.ts`

**The Problem:** Explanations frequently reference "dropped subjects," "implied subjects," or "omitted pronouns."
**The FLS Correction:** Mandarin does not "drop" subjects; it utilizes **Identity Subscription** (Occupied Silence) via Ghost Nodes. Additionally, for thetic/weather sentences, it uses an **Implicit Spatiotemporal Anchor** (`[现场]`).
**Directive:** Shift the language away from "missing words" (a Cathedral deficit mindset). Describe these as "Ghost Topics" that "subscribe" to the identity of previous discourse or the immediate environment.

## 4. Reframe "Serial Verbs" as "Parallel Transitions"
**Files affected:** `serial_verb_constructions.ts`

**The Problem:** Explanations rely heavily on "stacking events" or "serial verb constructions."
**The FLS Correction:** In FLS theory, these are **Parallel Transitions (The Stream)** where multiple Verb Phrases share the same Global Anchor (Topic). 
**Directive:** While the term "Serial Verb Construction" can be kept for recognizability, the explanation must clarify that these are "Parallel Logic Streams" anchoring back to the main Topic, rather than just unstructured "stacking."

## 5. Formalize "Fossilized Verb Packages"
**Files affected:** `resultative_complements.ts`, `potential_complements.ts`

**The Problem:** Explanations say things like *"verb 听 ('listen') is stacked directly with the result morpheme 懂."*
**The FLS Correction:** This describes the **Chained Transition (The Waterfall)** that has collapsed into a **Fossilized Verb Package**. Furthermore, `得` and `不` in Potential Complements are "Hardware Toggles" inserted into the fossilized stack.
**Directive:** Introduce the "Verb Package" concept. Explain that Resultatives are tightly bound logical chains (Action $\rightarrow$ Result) that function as a single unit, and Potential markers are switches flipped *inside* that package.

---

### Next Steps for the Data Linguist
Please conduct a global search in `src/data/sentences/*.ts` for the fields `explanation:` and update the prose to align with the FLS constraints listed above. No AST tree shapes need to be altered—only the text strings explaining them.
