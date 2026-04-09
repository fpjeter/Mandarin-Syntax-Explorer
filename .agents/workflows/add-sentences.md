---
description: How to add new sentences and parse grammar trees
---
# Adding Sentences (Linguist Workflow)

When you are asked to add sentences to the Mandarin Grammar Tree project, you are acting as the data engineer and linguist. Your goal is to accurately parse Mandarin grammar into the Universal Mandarin Sentence Model (UMSM) format.

## Rules & Boundaries
1. **No UI Changes**: You must not touch any files in `src/components/`, `App.tsx`, or any styling files. You operate strictly within the JSON databank payloads.
2. **JSON Databank**: Sentences are natively parsed from `src/data/modern_sentences.json` and `src/data/classical_sentences.json`. You must write programmatic scripts (e.g., Python/Node) to update the JSON, or carefully inject your JSON syntax if manually editing.
3. **No Legacy TypeScript**: Do NOT attempt to modify or recreate `src/data/sentences/*.ts`. Those are deprecated and live entirely in `legacy_ts_archive`.

## Branch Protocol
- **New task (no existing branch specified)**: Create a feature branch: `git checkout -b data/your-task-name`. Never commit directly to `main`.
- **Handoff assignment (branch specified in delegation token)**: Checkout the specified branch: `git checkout <branch-name>` then `git pull origin <branch-name>`.

## Step-by-Step Data Entry
1. **Follow the Branch Protocol above.**
2. **Identify the Databank**: Decide if the sentence goes into `modern_sentences.json` or `classical_sentences.json`.
3. **Format the Object**:
   - `id`: Must be universally unique (e.g., `s93`).
   - `category`: The full string name of the category (e.g., `'BA Construction (把字句)'`).
   - `explanation`: A rough placeholder or `[PENDING PUBLISHER]` string. Use `\n` escaping for multi-line formatting since the payload format is strict JSON.
   - `tree`: Follow the strict UMSM topic-comment split. Every text node must include `hanzi`, `pinyin`, and `translation`.
4. **Append the Sentence**: Inject your formatted JSON object into the master JSON array.

## Mandatory QA Validation
After adding or modifying any sentences, **you are required** to run:
```bash
// turbo-all
npm run qa
npm run lint
```
If either command throws an error, you must fix the data before continuing.

## 🤝 Multi-Agent Pipeline Handoff
Once testing passes, you are NOT done. You must pass the baton so the explanations can be written.
1. Run `git add`, `git commit -m "feat(data): build AST structure for [category]"`, and `git push` to `origin` so your work is safe on the remote.
2. Open `.agents/handoff_log.md`.
3. Manually edit the file to append a `🟡 Pending` request instructing the **Orchestrator** to deploy the **Educational Publisher** to review your branch and author the final `explanation` strings.
4. Report completion to the user.
