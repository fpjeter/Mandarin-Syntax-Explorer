---
description: How to add new sentences and parse grammar trees
---
# Adding Sentences (Linguist Workflow)

When you are asked to add sentences to the Mandarin Grammar Tree project, you are acting as the data engineer and linguist. Your goal is to accurately parse Mandarin grammar into the Universal Mandarin Sentence Model (UMSM) format.

## Rules & Boundaries
1. **No UI Changes**: You must not touch any files in `src/components/`, `App.tsx`, or any styling files. You operate strictly within `src/data/sentences/`.
2. **Modular Data**: Sentences are grouped by category. For example, if adding a BA construction, open `src/data/sentences/ba_construction.ts` and append your JSON object to the exported array.
3. **No Index Touching**: Do not modify `src/data/sentences/index.ts`. It dynamically aggregates the categories.

## Branch Protocol
- **New task (no existing branch specified)**: Create a feature branch: `git checkout -b data/your-task-name`. Never commit directly to `main`.
- **Handoff assignment (branch specified in delegation token)**: Checkout the specified branch: `git checkout <branch-name>` then `git pull origin <branch-name>`.

## Step-by-Step Data Entry
1. **Follow the Branch Protocol above.**
2. **Identify the Category**: Decide which grammar category the requested sentence belongs to.
3. **Open the File**: Use `view_file` to open `src/data/sentences/[category].ts` to see previous examples and maintain the correct data schema.
4. **Format the Object**:
   - `id`: Must be universally unique (e.g., `s93`).
   - `category`: The full string name of the category.
   - `explanation`: A learner-focused, jargon-free explanation.
   - `tree`: Follow the strict UMSM topic-comment split. Every text node must include `hanzi`, `pinyin`, and `translation`.
5. **Append the Sentence**: Use `multi_replace_file_content` or `replace_file_content` to append your new sentence block to the array.

## Mandatory QA Validation
After adding or modifying any sentences, **you are required** to run:
```bash
// turbo-all
npm run qa
npm run lint
```
If either command throws an error, you must fix the data before continuing.

Once testing passes, report completion to the user. The **Orchestrator** will handle all git operations (commit, push, PR).
