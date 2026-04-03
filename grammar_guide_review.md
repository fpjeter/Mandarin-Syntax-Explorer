# Grammar Guide Accuracy & Pedagogy Review

This review identifies factual inaccuracies, FLS terminology leaks, and pedagogical misalignments in the two primary learner-facing grammar guides. 

## 1. `src/components/GrammarGuide.tsx` (Modern)

### Section: "Tree labels at a glance"
- **Inaccuracy**: `Adjunct` is defined as *"Pre-verbal modifier: time, place, manner, or construction (把/被)"*. 
- **Correction**: Under our new finalized FLS Situation-Taking Verb model, `被` passives are no longer treated as prepositional Adjuncts. `被` operates as an active `Head Verb` that anchors an Embedded Clause. By extension, `把` is also currently mapped as a `Head Verb` structurally. Therefore, "or construction (把/被)" must be removed from the `Adjunct` definition to prevent direct contradiction with the AST trees learners will explore.

### Section: "A note on this grammar model" (Linguistic Footnote)
- **Pedagogical Failure**: This entire collapsible dropdown is loaded with extreme academic jargon that explicitly violates the "warm, casual tutor tone" guidelines. 
- **Offending Jargon**: "standard generative syntax (X-bar theory / Minimalism)", "Chinese pedagogical tradition", "coreference links", "abstract empty categories".
- **Correction**: The footnote needs a complete pedagogical rewrite. It should still explain that this tree uses a teaching-friendly Topic-Comment system rather than confusing academic models, but it must do so intuitively without citing X-bar theory or generative syntax.

---

## 2. `src/components/ClassicalGrammarGuide.tsx` (Classical)

### Section: "Rhetorical questions"
- **Inaccuracy**: Lists `也` (assertive) as a question marker alongside `哉` and `焉`.
- **Correction**: `也` (yě) is a declarative/assertive ending particle, not a question marker. The author likely confused it with `邪/耶` (yé), which is a classical question particle. `也` must be removed from the list of question markers.

### Section: "Coverbs (於/以)"
- **Major Inaccuracy & Contradiction**: The prose claims that classical coverbs *"always come before the main verb"*, and explicitly graphs `於 + NP → Verb`. Immediately below this, the provided example is `生於憂患` (born from hardship), which literally places the `於` phrase *after* the verb `生`. 
- **Correction**: In Classical Chinese, `於` phrases frequently follow the verb (acting as locative/source complements), unlike modern Mandarin locative coverbs (在) which strictly precede the verb. The prose must be corrected to state that while some coverbs (like `以`) precede the verb, others (like `於`) frequently follow it. The misleading `於 + NP → Verb` graphic must be fixed to reflect post-verbal placement (`Verb → 於 + NP`).

### Section: "Tree labels at a glance" (Classical)
- **Inaccuracy**: `Complement` is defined as *"Post-verbal element: result, object, or continuation"*.
- **Correction**: An "object" is not a Complement in Chinese grammar; it is its own distinct grammatical role (`Object`). Combining them is factually incorrect and will confuse learners looking at trees that clearly differentiate `Object` nodes from `Complement` nodes. "Object" must be removed from this definition.

---

## 3. Recommended Rewrite: "A note on this grammar model" Footnote

The existing collapsible footnote in `GrammarGuide.tsx` (the `LinguisticFootnote` component) needs a complete rewrite. It currently cites "X-bar theory / Minimalism," "coreference links," and "abstract empty categories" — all of which violate our pedagogical tone rules. But the footnote itself is valuable: learners deserve a brief, honest explanation of what kind of grammar model they're looking at.

### Recommended content for the Educational Publisher

The rewritten footnote should cover these points in warm, non-academic language:

1. **What kind of model this is.** These trees follow a teaching-friendly system built around Topic and Comment, which is how Chinese grammar has traditionally been described by Chinese linguists. It is not the same system used in most Western linguistics textbooks.

2. **Why "Head Verb" appears on 把 and 被.** If you've studied from a textbook, you probably learned that 把 and 被 are prepositions or markers, not verbs. That's a valid description. In our trees, we label them as Head Verbs because it lets us show 把, 被, 让, and 叫 sentences using the same consistent tree shape — they all introduce a person or thing, and then something happens to them inside a nested clause. You don't need to pick sides; the grammar works the same way regardless of the label.

3. **What ghost nodes are.** When Mandarin drops a pronoun because the listener already knows who's being discussed, the tree shows a faded "ghost" node where that word would have been. This makes the underlying logic visible without cluttering the sentence.

4. **What the tree labels map to.** Role names like Topic, Comment, Adjunct, and Complement correspond to terms used in Chinese-language grammar textbooks (主题, 评论, 状语, 补语), so what you learn here transfers directly to Chinese-medium study materials.

### Tone constraints for the Educational Publisher
- Maximum 4-5 short bullet points. This is a collapsible footnote, not an essay.
- No linguistic terminology beyond what the tree itself already shows (Topic, Comment, Head Verb, Adjunct, etc.).
- No citations, no named linguists, no acronyms (SVO, GCR, NP, etc.).
- Warm tutor voice: "you might have learned..." not "standard analysis classifies..."
