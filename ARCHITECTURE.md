# 🏗️ Software Architecture

This document maps the application architecture, data flow, and custom rendering algorithms that power the Mandarin Syntax Explorer. For linguistic theory (Topic-Comment rules, etc.), refer to the `pedagogical_position_paper.md` or the `GrammarGuide.tsx` article.

---

## 1. High-Level Data Flow

The application operates as a purely front-end, static React Single Page Application (SPA). 

1. **Static Data Layer**: Sentences are deeply nested objects natively parsed from static arrays (`src/data/modern_sentences.json` and `src/data/classical_sentences.json`). This JSON data layer tracks both syntactic structure (`role`) and "who did what to whom" thematic tags (`semanticRole`).
2. **Global State**: Managed primarily via React Context (`AppModeContext.tsx`) for the Classical vs Modern toggle, and top-level `useState` in `App.tsx` for the currently selected `selectedId`.
3. **AST Transformation**: When a sentence is selected, its recursive JSON tree is sent to `src/components/treeTransforms.ts` to be flattened into an array of Nodes and Edges. Node data is injected with active contextual states (like semantic highlighting flags).
4. **Algorithmic Layout**: The flat array is sent to `src/components/treeLayout.ts`, which calculates `X, Y` coordinates for every node based on textual width and structural depth.
5. **Render Layer**: Coordinate mapping is passed into `ReactFlow` (`@xyflow/react`) inside `src/components/SyntaxTree.tsx` which handles the canvas rendering, panning, and zooming.

---

## 2. Core Components

### `App.tsx`
The primary Orchestrator. It holds:
- The list of available sentences.
- The `selectedId` of the current sentence.
- The `isClassical` toggle state (passed down via `AppModeProvider`).
It mounts the `SentenceSidebar`, `SentenceHeader`, and `SyntaxTree`.

### `SentenceSidebar.tsx`
A data-agnostic UI component mapping the sentence JSON into category accordions. It features:
- Search filtering across Hanzi, Pinyin, and English translations.
- "Inline Pedagogical Explanations" built using Framer Motion and a custom regex bolding parser linking to `src/data/categories.ts`.

### `SyntaxTree.tsx`
The primary canvas. It tracks its own ephemeral view states:
- `expandedIds`: A `Set<string>` tracking which nested tree nodes have been clicked open. 
- `showGhost`: A toggle for displaying "dropped" pronouns (Ghost Nodes).
- `isSemanticMode`: A toggle for illuminating thematic/semantic badges across the AST.

Whenever these states change, it triggers a full re-calculation of the layout algorithms or node injections to animate the graph smoothly into new visual states. The visual toggles themselves are nested inside the collapsible `TreeToolbar.tsx` which floats above the canvas.

### `GrammarNode.tsx`
The custom ReactFlow node type. It resolves the visual output of the node depending on its current state (collapsed vs expanded) and badges (e.g. FLS syntactic roles mapping to standard colors).

---

## 3. The Custom Tree Mathematics

We do not use an external layout library (like Dagre or ELK) because standard directed acyclic graph layouts destroy reading order. Mandarin grammar nodes must strictly adhere to physical horizontal sequence (Sentence Order).

Our layout engine is split into two phases:

### Phase 1: `treeTransforms.ts` (State Aggregation)
- Performs a recursive DFS passing down the user's `expandedIds` set.
- If a node contains children but **is not expanded**, we recursively traverse its children and aggregate their Hanzi, Pinyin, and Translations into a single block of text representing the collapsed wrapper.
- Emits a flattened `Node[]` and `Edge[]` array.

### Phase 2: `treeLayout.ts` (Leaf-Aligned DFS Algorithm)
1. **Pass 1 (Depth & Leaf Sequencing)**: DFS crawls the tree to assign a `depth` value and collect all terminal leaves strictly in left-to-right reading order.
2. **Pass 2 (X-Axis Placement)**: Leaves are placed sequentially across the X-axis (`cursor += width + LEAF_GAP`). Node widths are dynamically estimated (`estimateNodeWidth`) based on the length of Hanzi strings (`28px` per char) and Pinyin strings (`8px` per char).
3. **Pass 3 (Bubble Up Parents)**: Interior parent nodes calculate their X-coordinate as the exact mathematical midpoint between their leftmost and rightmost descendent leaf.
4. **Pass 4 (Y-Axis Placement)**: All nodes are locked to `y = depth * RANK_SEP`. 

This mathematical approach guarantees that sibling branches never overlap, and parent wrappers perfectly span the length of their children!

---

## 4. Classical Mode Implementation

The Classical Mode acts as an entirely parallel "Mirror Universe" to the standard app.
- Triggered by `useIsClassical()` context hook.
- Component styling relies heavily on Tailwind ternary operations (`isClassical ? 'bg-amber-900' : 'bg-slate-900'`).
- Bypasses the standard JSON databanks, directly lazy-loading `classicalSentences.ts` and `classicalBadges.ts`.
- Node edge connections (`treeLayout.ts`) recalculate their stroke colors to match the amber/stone sepia palette dynamically.

---

## 5. The CI Validation Pipeline

Because the Mandarin Syntax Explorer functions as both a software tool and an educational textbook, data integrity is paramount. Data constraints are rigidly enforced by `scripts/validate_trees.ts` via `npm run qa`.

### FLS Structure Validation
The Fractal Logic Stream requires that Mandarin text be evaluated strictly by Topic-Prominence. The pipeline enforces that the root of *every* AST branches cleanly into a valid FLS structure (e.g. `Topic` / `Comment`). If a linguist accidentally uses a Subject-Verb-Object (SVO) parse tree out of habit, the build fails.

### Semantic Tagging Constraints
Thematic `semanticRole` tags are deliberately limited to prevent visual UI clutter for the learner. The pipeline enforces a strictly limited 5-role palette (`Agent`, `Patient`, `Experiencer`, `Causer`, `Theme`). It actively rejects attempts to tag `Adjunct` nodes (such as locations or instruments) with thematic roles, forcing linguists to adhere to the "Primary Actors Only" model.
