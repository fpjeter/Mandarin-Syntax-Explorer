# Sentence Accuracy Report

This report evaluates the pedagogical explanation strings against the strict FLS AST architecture to ensure no theoretical contradictions or FLS jargon remain. The vast majority of the sentences are now clean, highly accessible, and perfectly aligned with the trees.

Below are the few remaining factual mismatches where the explanation text uses "Subject" terminology that contradicts the AST's "Topic" mapping.

## src/data/sentences/basic_topic_comment.ts

### s2 — 我喜欢在图书馆看书。
- **Issue**: The explanation says "without repeating the subject", but the AST only establishes a Topic and chains Verb Phrases under a Comment.
- **AST Reality**: `Sentence > Topic` followed by `Comment > Verb Phrase`. There is no `Subject` node.
- **Suggested Fix**: Replace "without repeating the subject" with "without repeating the topic" or "without repeating the actor".

### s7 — 我看了半天，还是看不了，就不看了。
- **Issue**: The explanation states the Topic "acts as the unstated subject of three separate clauses", which misidentifies the role in the AST.
- **AST Reality**: `Sentence > Topic` mapped to sequential `Verb Phrase` clauses under `Comment`. No `Subject` exists.
- **Suggested Fix**: Change "unstated subject" to "unstated actor" or "implied actor".

## src/data/sentences/ba_construction.ts

### s28 — 请把窗户关上。
- **Issue**: Exclaims "Notice that the subject [你] ("you") is heavily implied", but the AST maps this ghost node as the root `Topic`.
- **AST Reality**: `Sentence > Topic` mapped to a dropped/implied node.
- **Suggested Fix**: Change "the subject [你]" to "the implied topic [你]" or "the actor [你]".

## src/data/sentences/serial_verb_constructions.ts

### s68 — 学了以后要经常练习，这样才会有收获。
- **Issue**: States the sentence "chains two verb phrases under one implied subject", but the AST labels it a `Topic`.
- **AST Reality**: The tree maps `Topic (clause 1) > Verb Phrase` and `Comment`.
- **Suggested Fix**: Replace "implied subject" with "implied topic" or "implied actor".

## src/data/sentences/discourse_context.ts

### s18 — 非常有意思。
- **Issue**: The explanation states "the subject is an invisible Ghost Node", but the FLS tree anchors this as the contextual `Topic`.
- **AST Reality**: `Sentence > Topic` (ghost node mapping back to context).
- **Suggested Fix**: Replace "the subject is an invisible Ghost Node" with "the Topic is an invisible Ghost Node".

## src/data/sentences/correlative_patterns.ts

### s60 — 中文越学越有意思。
- **Issue**: Claims "The subject of 学 is omitted", which leans back into Cathedral terminology and conflicts with the FLS tree diagramming which only establishes a root Topic.
- **AST Reality**: `Sentence > Topic` with a Comment holding two VPs.
- **Suggested Fix**: Replace "The subject of 学 is omitted" with "The actor of 'study' is omitted" or "The implied actor is omitted".

### s61 — 他一说话就脸红。
- **Issue**: The final sentence concludes "The two clauses share the same subject here". While "subject-predicate compound" is used accurately earlier to define the morphology of 脸红, the overarching clauses share a `Topic` (他), not a Subject node.
- **AST Reality**: `Sentence > Topic ('他')` anchors the two trigger/consequence clauses.
- **Suggested Fix**: Change "share the same subject" to "are anchored by the same Topic".
