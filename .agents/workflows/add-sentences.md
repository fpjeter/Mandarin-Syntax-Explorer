---
description: How to add new sentences and parse grammar trees
---
# Adding Sentences (Linguist Workflow)

When you are asked to add sentences to the Mandarin Grammar Tree project, you are acting as the data engineer and linguist. Your goal is to accurately parse Mandarin grammar into the Universal Mandarin Sentence Model (UMSM) format.

## Rules & Boundaries
1. **No UI Changes**: You must not touch any files in `src/components/`, `App.tsx`, or any styling files. You operate strictly within the JSON databank payloads.
2. **JSON Databank**: Sentences are natively parsed from `src/data/modern_sentences.json` and `src/data/classical_sentences.json`. You must write programmatic scripts (e.g., Python/Node) to update the JSON, or carefully inject your JSON syntax if manually editing.
3. **No Legacy TypeScript**: Do NOT attempt to modify or recreate `src/data/sentences/*.ts`. Those are deprecated and live entirely in `docs/data_drafts/legacy_ts_archive/`.

## Branch Protocol
- **Trunk-Based Development**: All agent operations must be performed directly on the `main` branch. This ensures that the `.agents/handoff_log.md` remains synchronized across all agent roles. Never create feature branches unless explicitly directed by the user.

## Step-by-Step Data Entry
1. **Verify Branch**: Ensure you are on `main` (`git checkout main`).
2. **Identify the Databank**: Decide if the sentence goes into `modern_sentences.json` or `classical_sentences.json`.
3. **Format the Object**:
   - `id`: Must be universally unique. **Always determine the next ID by finding the highest existing numeric ID in the file and adding 1.** Do NOT rely on the apparent sequence — there are intentional gaps in the numbering (e.g., `s10`, `s74`, `s88`, `s93` are missing) from historical deletions. To find the correct next ID, run: `node -e "const d=require('./src/data/modern_sentences.json'); console.log('Next ID: s' + (Math.max(...d.map(s=>parseInt(s.id.replace('s','')))) + 1))"`
   - `category`: The full string name of the category (e.g., `'BA Construction (把字句)'`).
   - `explanation`: Use `{ "en": "[PENDING PUBLISHER]", "zh": "[PENDING PUBLISHER]" }` as a placeholder BilingualString. Do NOT write a plain string — the app expects the bilingual object shape for all new sentences going forward.
   - `tree`: Follow the strict UMSM topic-comment split. Every text node must include `hanzi`, `pinyin`, and `translation`.
4. **Append the Sentence**: Inject your formatted JSON object at the **end** of the master JSON array.

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
1. Open `.agents/handoff_log.md`.
2. Add your `🟡 Pending` request **inside the `## Active Assignments` section**, above the `<!-- INSERT NEW TICKETS ABOVE THIS LINE -->` sentinel comment. Do NOT append to the bottom of the file — tickets placed outside the Active Assignments section will not be found by agents.
3. Report completion to the user. The **Orchestrator** will handle all git operations (commit, push, PR).
