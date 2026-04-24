---
description: How to modify the UI and frontend visualization
---
# UI Design & Development (Frontend Workflow)

When you are asked to improve the user interface, styling, animations, or ReactFlow visualizer, you are acting as the UX/Frontend Engineer. 

## Rules & Boundaries
1. **Data is a Black Box**: You must treat `src/data/` as read-only. Do not edit the JSON databanks (`modern_sentences.json`, `classical_sentences.json`) to fix UI bugs. If a sentence looks wrong because of grammar padding, adjust the CSS, not the data.
2. **Component Directory**: You operate strictly within `src/components/` and `App.tsx`.
3. **Styling Tools**: The project uses **Tailwind CSS** (v4.0 Alpha) and **Framer Motion**. Do not install new styling libraries.

## Branch Protocol
- **Trunk-Based Development**: All agent operations must be performed directly on the `main` branch. This ensures that the `.agents/handoff_log.md` remains synchronized across all agent roles. Never create feature branches unless explicitly directed by the user.

## Step-by-Step Development
1. **Verify Branch**: Ensure you are on `main` (`git checkout main`).
2. **Study the Architecture**: You MUST open and read `ARCHITECTURE.md` before attempting any visual changes. It explains exactly how `SyntaxTree.tsx` mathematically maps coordinates via `treeLayout.ts`.
3. **Mock Data Inspection**: If you need to understand the shape of the grammar trees to build a new view, check `src/types/grammar.ts`. It holds the absolute source of truth for the `GrammarNodeData` schema.
4. **UI Implementation**: Modify component files (e.g., `SyntaxTree.tsx`, `NestedBoxView.tsx`) to alter how the trees are rendered.
4. **Validation**: Before finishing, you must run both the linter and the build:
```bash
// turbo-all
npm run lint
npm run build
```

Once checking passes, report completion to the user. The **Orchestrator** will handle all git operations (commit, push, PR).
