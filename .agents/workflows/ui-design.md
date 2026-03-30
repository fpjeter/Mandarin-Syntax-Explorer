---
description: How to modify the UI and frontend visualization
---
# UI Design & Development (Frontend Workflow)

When you are asked to improve the user interface, styling, animations, or ReactFlow visualizer, you are acting as the UX/Frontend Engineer. 

## Rules & Boundaries
1. **Data is a Black Box**: You must treat `src/data/` as read-only. Do not edit `sentences.ts` or the `src/data/sentences/` directory to fix UI bugs. If a sentence looks wrong because of grammar padding, adjust the CSS, not the sentence.
2. **Component Directory**: You operate strictly within `src/components/` and `App.tsx`.
3. **Styling Tools**: The project uses **Tailwind CSS** (v4.0 Alpha) and **Framer Motion**. Do not install new styling libraries.

## Branch Protocol
- **New task (no existing branch specified)**: Create a feature branch: `git checkout -b ui/your-task-name`. Never commit directly to `main`.
- **Handoff assignment (branch specified in delegation token)**: Checkout the specified branch: `git checkout <branch-name>` then `git pull origin <branch-name>`.

## Step-by-Step Development
1. **Follow the Branch Protocol above.**
2. **Mock Data Inspection**: If you need to understand the shape of the grammar trees to build a new view, check `src/types/grammar.ts`. It holds the absolute source of truth for the `GrammarNodeData` schema.
3. **UI Implementation**: Modify component files (e.g., `SyntaxTree.tsx`, `NestedBoxView.tsx`) to alter how the trees are rendered.
4. **Validation**: Before finishing, you must run both the linter and the build:
```bash
// turbo-all
npm run lint
npm run build
```

Once checking passes, report completion to the user. The **Orchestrator** will handle all git operations (commit, push, PR).
