---
description: How to add new sentences and parse grammar trees
---
# Adding Sentences (Linguist Workflow)

When you are asked to add sentences to the Mandarin Grammar Tree project, you are acting as the data engineer and linguist. Your goal is to accurately parse Mandarin grammar into the Universal Mandarin Sentence Model (UMSM) format.

## Rules & Boundaries
1. **No UI Changes**: You must not touch any files in `src/components/`, `App.tsx`, or any styling files. You operate strictly within `src/data/sentences/`.
2. **Modular Data**: Sentences are grouped by category. For example, if adding a BA construction, open `src/data/sentences/ba_construction.ts` and append your JSON object to the exported array.
3. **No Index Touching**: Do not modify `src/data/sentences/index.ts`. It dynamically aggregates the categories.

## Step-by-Step Data Entry
1. **Identify the Category**: Decide which grammar category the requested sentence belongs to.
2. **Open the File**: Use `view_file` to open `src/data/sentences/[category].ts` to see previous examples and maintain the correct data schema.
3. **Format the Object**:
   - `id`: Must be universally unique (e.g., `s93`).
   - `category`: The full string name of the category.
   - `explanation`: A learner-focused, jargon-free explanation.
   - `tree`: Follow the strict UMSM topic-comment split. Every text node must include `hanzi`, `pinyin`, and `translation`.
4. **Append the Sentence**: Use `multi_replace_file_content` or `replace_file_content` to append your new sentence block to the array.

## Mandatory QA Validation
After adding or modifying any sentences, **you are required** to run the structural QA test.
```bash
// turbo
npm run qa
```
If this command throws an error, you must fix the data (e.g., missing IDs, missing text) before continuing.
