# Framework Section — Future Improvements

Ideas for improving the "The Framework" guide section (in `GrammarGuide.tsx`).

## Content Improvements

### 1. Add a mini example sentence
The "Big Idea" section explains Topic–Comment but doesn't show a concrete example.
A simple inline example like *这只大象, 鼻子很长* ("As for this elephant, its nose is long")
would immediately make the concept click for learners.

### 2. Add a "How to read the tree" mini-section
Explain visual conventions: dashed vs. solid lines, node colors
(fuchsia = Topic, blue = Comment, etc.), expand/collapse behavior.
A tiny visual key would help first-time users.

### 3. Add a "Word order" section
One of the biggest differences for English speakers is Mandarin's rigid
pre-verbal adverb placement (Time–Manner–Place–Verb). A quick note like
"In Mandarin, *when/where/how* all go **before** the verb, never after"
would be valuable and ties directly to what users see in the trees.

### 4. Separate UI tips from linguistic concepts
"Hover to Link" and the `[ghost]` toggle tip are about the *app interface*,
not grammar. Move them to a "Using the Tree" subsection so the framework
stays focused on actual linguistics.

## Visual / UX Improvements

### 5. Add a small example tree diagram
A simplified mini tree showing a 2-level Topic → Comment split would be
more impactful than text alone.

### 6. Make the header badge interactive
The "Topic-Prominent Framework" pill in the header is currently static.
It could open/scroll to the framework section on click.

### 7. Add glossary cross-links
Terms like "pro-drop", "Topic", and "Comment" could link to their
glossary entries for users who want more detail.

### 8. Add a "Tree Labels Explained" section to the Guide tab
Since the Guide tab is the first thing mobile users see, add a small section
listing the less-obvious tree labels (Adjunct, Attributive, Complement, Pivot)
with one-line plain-English definitions. This gives users a quick reference
before they even open a tree, reducing the initial learning curve for
unfamiliar terminology like "Adjunct."
