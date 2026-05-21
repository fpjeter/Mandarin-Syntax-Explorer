# Orchestrator — Session Guide

The Orchestrator is the **user-facing lead agent** (Antigravity itself). This file documents how the Orchestrator manages the multi-agent system, delegates to specialists, and runs sessions. It is **not** a subagent system prompt — it is a reference for the Orchestrator's own behavior.

---

## Branch Protocol

> [!CAUTION]
> All work is done directly on `main` (trunk-based development). Never create feature branches.

---

## Delegation Rules

The Orchestrator dispatches work to specialists via `invoke_subagent`. It **does not** do specialist work itself.

| Task type | Dispatch to |
|---|---|
| Adding/editing parse trees, JSON structure | `corpus-engineer` |
| Theoretical audits, linguistic analysis | `linguistics-specialist` |
| Explanations, glossary, category descriptions, grammar guides | `educational-publisher` |
| UI components, CSS, layout, animations | `frontend-engineer` |
| Background research (read-only, web + codebase) | `research` |

> [!IMPORTANT]
> Invocation prompts should be **lean** — just the task. Do not re-explain FLS conventions, ghost node rules, permitted files, or QA requirements. Those are embedded in each specialist's system prompt via `define_subagent`. Only add task-specific context the specialist cannot infer from the project files.

---

## Subagent Definitions

The four specialist roles are defined at session start via `define_subagent`. System prompts live in `.agents/agents/`:

| TypeName | System Prompt File | enable_write_tools |
|---|---|---|
| `corpus-engineer` | `.agents/agents/corpus-engineer.md` | `true` |
| `linguistics-specialist` | `.agents/agents/linguistics-specialist.md` | `true` (markdown only) |
| `educational-publisher` | `.agents/agents/educational-publisher.md` | `true` |
| `frontend-engineer` | `.agents/agents/frontend-engineer.md` | `true` |

Define them once per session before first use. After that, `invoke_subagent` by TypeName.

---

## Orchestrator-Only Files

The Orchestrator is the **only** agent that touches:
- `AGENTS.md` — keep current after every session (counts, open tasks, audit refs)
- `.agents/agents/*.md` — role definitions
- `.agents/workflows/*.md` — workflow documentation
- `src/types/grammar.ts` — global TypeScript interfaces
- `scripts/validate_trees.ts` — QA/validation logic (beyond subRole additions)
- `.github/*`, `package.json`, `tsconfig.json`

The Orchestrator is the **only** agent that runs `git` commands. Specialists report done; the Orchestrator commits and pushes.

---

## Quality Assurance Policy

Before any commit:
```bash
npm run qa              # tree structure validation
npx tsc -b --noEmit     # TypeScript check
```

For architectural changes also run:
```bash
npm run lint && npm run build
```

---

## Git Delivery

```bash
git add <files>
git commit -m "<conventional commit message>"
git push
```

Use conventional commit prefixes: `feat:`, `fix:`, `docs:`, `chore:`, `refactor:`.

---

## Session Start Checklist

```bash
git pull
npm run qa    # confirm clean baseline
```

Then verify:

| Check | What to confirm |
|---|---|
| **AGENTS.md counts** | Modern (133), classical (52), 22 modern / 11 classical categories |
| **Handoff log** | `.agents/handoff_log.md` — any open tickets? |
| **Queued audits** | `docs/audits/queued_audits.md` — actionable work to dispatch? |

---

## Session End Checklist

```bash
npm run qa
npx tsc -b --noEmit
git status        # nothing uncommitted
git push          # confirm → origin/main in output
```

Then update:

| Doc | What to update |
|---|---|
| `AGENTS.md` | Sentence counts, category counts, open task queue |
| `docs/audits/queued_audits.md` | Mark completed audits |
| `.agents/handoff_log.md` | Close completed tickets, log new ones |
