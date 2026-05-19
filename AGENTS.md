# Mandarin Syntax Explorer — Agent Guide

Interactive syntax tree visualizer for Mandarin Chinese grammar. 133 modern sentences + 43 classical quotes with full FLS (Fractal Logic Stream) parse trees, bilingual explanations, and a strict QA validator.

---

## Commands

```bash
npm run qa              # validate all trees — REQUIRED before any commit (133 modern ✅, 43 classical ✅)
npx tsc -b --noEmit     # TypeScript check — run at session end
npm run dev             # dev server at http://localhost:5173
git pull                # always first — run before touching anything
git push                # Orchestrator only — specialists do NOT run git commands
```

## Project State (updated 2026-05-19)

| | Count | Location |
|---|---|---|
| Modern sentences | 133 | `src/data/modern_sentences.json` |
| Classical sentences | 43 | `src/data/classical_sentences.json` |
| Modern categories | 19 | `src/data/categories.ts` |
| Classical categories | 11 | `src/data/classicalCategories.ts` |
| Total nodes validated | 2081 | (1532 modern + 549 classical) |

**Branch:** `main` — trunk-based development. Never create feature branches.

## Open Task Queue

| Priority | Owner | Task |
|---|---|---|
| 🔴 HIGH | Data Linguist | `relatedIds` wiring — ALL 176 sentences have empty `relatedIds[]`. "See Also" feature is dark. |
| 🟡 MEDIUM | Data Linguist | Classical batch fixes: `cc34` 為→Head Verb, `cc39` root→Parallel Sentence, `cc33` add subRole quotative |
| 🟡 MEDIUM | Data Linguist | subRole taxonomy normalization — see `docs/audits/subrole_taxonomy_audit.md` (13 clusters) |
| 🟡 MEDIUM | Ed. Publisher | Expand `s129`–`s137` explanations — currently 36–48 words, target ~75 (dataset avg) |
| 🟢 LOW | Ling. Specialist | Second pass audit of Topic/Comment subRole labels (whitelisted but non-canonical) |
| 🟢 LOW | All | Phase C classical expansion — 4 thin categories: Classical Passive (1), Causatives (2), Object Fronting (2), Topic-Comment (2) |

Full audit findings: `docs/audits/audit_results_2026-04-27.md`
Queued future audits: `docs/audits/queued_audits.md`

---

## Boundaries

**Always do:**
- Run `npm run qa` before completing any task — fix all errors before reporting done
- Use `main` branch; commit with conventional commit messages (`feat:`, `fix:`, `docs:`)
- Add new `subRole` labels to `VALID_SUBROLES` in `scripts/validate_trees.ts` before using them in data
- Set `impliedText` as a bare Chinese character (`"他"`) — the frontend adds `[...]`, so `"[他]"` renders as `[[他]]`
- File a Handoff Request in `.agents/handoff_log.md` for anything outside your permitted files

**Ask first:**
- Adding a new grammar category (requires `categories.ts` / `classicalCategories.ts` update)
- Structural changes to `src/types/grammar.ts`
- Any change to `scripts/validate_trees.ts` beyond adding to `VALID_SUBROLES`

**Never do:**
- Run `git add / commit / push` (specialists) — Orchestrator handles all VCS
- Edit tree structure (`tree:`) if you are the Educational Publisher
- Edit `explanation:` content if you are the Data Linguist
- Add subRole labels to JSON data without first adding them to `VALID_SUBROLES`

---

## Key Architecture

**FLS (Fractal Logic Stream):** Every sentence tree must follow `Sentence → Topic + Comment` at root. Topic-prominent, not SVO. Ghost nodes (`isDropped: true`) represent pro-drop subjects/topics and must have `refersToId` (or `null`), `subRole` from `["pro-drop", "topic-chain", "expletive"]`, and `impliedText`.

**Ghost node conventions:** `docs/whitepapers/ghost_node_conventions.md`

**subRole whitelist:** `VALID_SUBROLES` in `scripts/validate_trees.ts` — any unknown subRole fails QA. Generator: `node scripts/gen_subrole_whitelist.mjs`

**QA pre-commit hook:** `.husky/pre-commit` runs `npm run qa` automatically on every commit.

---

## File Map

```
src/
├── data/
│   ├── modern_sentences.json       # 133 modern sentences (Data Linguist owns tree/text)
│   ├── classical_sentences.json    # 43 classical sentences (Data Linguist owns tree/text)
│   ├── categories.ts               # Modern category list (Educational Publisher)
│   ├── classicalCategories.ts      # Classical category list (Educational Publisher)
│   ├── glossary.ts                 # Modern role definitions (Educational Publisher)
│   └── classicalGlossary.ts        # Classical role definitions (Educational Publisher)
├── components/
│   ├── GrammarGuide.tsx            # Modern grammar guide article (Educational Publisher)
│   └── ClassicalGrammarGuide.tsx   # Classical grammar guide (Educational Publisher)
scripts/
├── validate_trees.ts               # QA validator + VALID_SUBROLES whitelist (Orchestrator)
└── gen_subrole_whitelist.mjs       # Regenerates whitelist from data (Orchestrator)
.agents/
├── agents/                         # Role files for each specialist
├── workflows/                      # /add-sentences, /ui-design workflows
└── handoff_log.md                  # Active ticket queue and delegation log
docs/audits/                        # Audit reports and queued audit backlog
```

## Agent Roster

| Role | File | Owns |
|---|---|---|
| Orchestrator | `.agents/agents/orchestrator.md` | Architecture, scripts, git, README |
| Data Linguist | `.agents/agents/linguist.md` | `*_sentences.json` tree data |
| Linguistics Specialist | `.agents/agents/linguistics-specialist.md` | Theoretical audits, Markdown reports |
| Educational Publisher | `.agents/agents/educational-publisher.md` | Explanations, glossaries, guides |
| Frontend Engineer | `.agents/agents/frontend-engineer.md` | Components, CSS, UI |
