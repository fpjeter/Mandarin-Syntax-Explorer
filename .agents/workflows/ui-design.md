---
description: How to modify the UI and frontend visualization
---
# UI Design & Development (Frontend Workflow)

When you are asked to improve the user interface, styling, animations, or ReactFlow visualizer, you are acting as the UX/Frontend Engineer. 

## Rules & Boundaries
1. **Data is a Black Box**: You must treat `src/data/` as read-only. Do not edit `sentences.ts` or the `src/data/sentences/` directory to fix UI bugs. If a sentence looks wrong because of grammar padding, adjust the CSS, not the sentence.
2. **Component Directory**: You operate strictly within `src/components/` and `App.tsx`.
3. **Styling Tools**: The project uses **Tailwind CSS** (v4.0 Alpha) and **Framer Motion**. Do not install new styling libraries.

## Step-by-Step Development
1. **Mock Data Inspection**: If you need to understand the shape of the grammar trees to build a new view, check `src/types/grammar.ts`. It holds the absolute source of truth for the `GrammarNodeData` schema.
2. **UI Implementation**: Modify component files (e.g., `SyntaxTree.tsx`, `NestedBoxView.tsx`) to alter how the trees are rendered.
3. **Validation**: Before finishing, you must run the build step to ensure no TypeScript generic errors were introduced.
```bash
// turbo
npm run build
```
