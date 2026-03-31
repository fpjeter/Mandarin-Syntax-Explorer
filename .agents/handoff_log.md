# 📋 Agent Handoff Log

This is the shared communication channel for all specialist agents. It serves two purposes:

1. **Requesting help**: When you encounter a dependency outside your permitted files, append a new entry to `## Pending Requests`.
2. **Receiving assignments**: When the Orchestrator dispatches work to you, check `## Active Assignments` for delegation tokens addressed to your role.

The **Orchestrator** reviews pending requests, triages them, and writes delegation tokens into `## Active Assignments`. Once work is confirmed complete, entries move to `## Resolved`.

---

## How to File a Request

Append a new block to `## Pending Requests` using this exact format:

```
### [DATE] [YOUR ROLE] → Orchestrator
**Status**: 🟡 Pending
**Blocked Task**: (What you were trying to do when you got blocked)
**Dependency**: (What file/change you need that is outside your permissions)
**Suggested Fix**: (Your best recommendation for how to resolve it)
**Urgency**: LOW | MEDIUM | HIGH
```

## How to Receive an Assignment

Check `## Active Assignments` for any delegation token addressed to your role. Execute the instructions exactly as written. When done, update the token's status **in place** to `✅ Done` — but **do NOT move the entry** to `## Resolved`. Only the **Orchestrator** may move entries to Resolved after independently verifying that your work landed on the remote branch.

---

## Pending Requests

_No pending requests._

---

## Active Assignments

### [DATE] Linguistics Specialist → Data Linguist
**Status**: 🔴 Active
**Task**: Execute AST Refactor for Passives and Pivotals
**Branch**: `develop`

> [!NOTE]
> The Linguistics Specialist has formulated an `implementation_plan.md` outlining a structural shift treating `BEI` (and causative pivotals) as Situation-Taking Verbs.

**Action Required**:
1. Review the proposed `implementation_plan.md` detailing the conversion of legacy passive trees (Adjunct > Prep Phrase) into nested Situation Object trees (Comment > Verb > Embedded Clause).
2. Execute the AST JSON data edits across `bei_passive.ts` and `pivotal.ts` (ensuring BA constructions are ignored, as they are mere Secondary Topic Markers).
3. Verify type-safety with `npx tsc --noEmit`.
4. Render locally to ensure CSS styling successfully handles deep nesting visually.
5. Mark this task as ✅ Done when the refactored data files are committed to `develop`.

### [DATE] Orchestrator → Linguistics Specialist
**Status**: ✅ Done
**Task**: Formalize Theoretical Shift for Situation-Taking Verbs (BÈI, discarding BA)
**Branch**: `develop`

> [!NOTE]
> Based on an out-of-band discussion, the Linguistics Specialist has proposed a paradigm-shifting AST refactor: causative and passive constructions are structurally identical models that behave as Situation-Taking Verbs.

**Action Required**:
1. Formally document this new theoretical position in a Markdown artifact. (The user noted you produced an `fls-position-paper.md` covering Cathedral vs Train Architecture, Formalized Logic Equations, Asymmetric Identity Subscription (GCR), Unified Situational Object Slots, and Occupied Silence).
2. Ensure this updated theoretical framework is merged or synced with our existing `pedagogical_position_paper.md` artifact if they overlap.
3. Explain mechanically why "被" (bèi) should no longer be treated as a preposition inside an Adjunct modifier, but rather as an active Head Verb ("to suffer/undergo") anchoring an Embedded Clause.
4. Review your `implementation_plan.md` detailing the required AST refactoring steps to convert passives to this new Situation-Taking Verb model, and confirm the plan is ready for User Review.
5. Mark this task as ✅ Done when your recommendation is tracked in the repository.

## Resolved

### [DATE] Orchestrator → Educational Publisher
**Status**: ✅ Done
**Task**: Pedagogical Guidance on Chinese UI Toggles & Semantic Display
**Branch**: `develop`

### [DATE] Orchestrator → Educational Publisher
**Status**: ✅ Done
**Task**: Pedagogical Review of Alternative Visualizations
**Branch**: `develop`

### [DATE] Orchestrator → Educational Publisher
**Status**: ✅ Done
**Task**: Author Full Pedagogical Category Explanations
**Branch**: `develop`

### [DATE] Orchestrator → Linguistics Specialist
**Status**: ✅ Done
**Task**: Exploratory Evaluation of Alternative Visualizations
**Branch**: `develop`

### [DATE] Orchestrator → Data Linguist
**Status**: ✅ Done
**Task**: Execute Approved Sentence Deletions
**Branch**: `develop`

### [DATE] Orchestrator → Data Linguist
**Status**: ✅ Done
**Task**: Execute Curriculum Gap Sentence Expansion
**Branch**: `develop`

### [DATE] Orchestrator → Educational Publisher
**Status**: ✅ Done
**Task**: Pedagogical Review of Redundant Sentences
**Branch**: `develop`

### [DATE] Orchestrator → Linguistics Specialist
**Status**: ✅ Done
**Task**: Define Category Learning Objectives
**Branch**: `develop`

### [DATE] Orchestrator → Educational Publisher
**Status**: ✅ Done
**Task**: Curriculum Gap Analysis
**Branch**: `develop`

### [DATE] Orchestrator → Linguistics Specialist
**Status**: ✅ Done
**Task**: Theoretical Review of Classical Mandarin Trees
**Branch**: `develop`

### [DATE] Orchestrator → Educational Publisher
**Status**: ✅ Done
**Task**: Execute Pedagogical Audit of Grammar Guides
**Branch**: `develop`

### 2026-03-31 Orchestrator → Educational Publisher
**Status**: ✅ Done
**Task**: Draft FLS Pedagogical Position Paper
**Branch**: `develop`
**Status**: ✅ Done
**Task**: Execute FLS Structural Role Replacements (s32, s89, cc2)
**Branch**: `develop`

### 2026-03-31 Orchestrator → Linguistics Specialist
**Status**: ✅ Done
**Task**: Theoretical Review of Nested Nomenclature
**Branch**: `develop`

### 2026-03-31 Orchestrator → Linguistics Specialist
**Status**: ✅ Done
**Task**: FLS Post-Integration Review
**Branch**: `develop`

### 2026-03-31 Orchestrator → Data Linguist
**Status**: ✅ Done
**Task**: Execute Phase 1-4 Linguistic Audit FLS Refactors
**Branch**: `feature/fls-refactor`

### 2026-03-31 Orchestrator → Educational Publisher
**Status**: ✅ Done
**Task**: Update Grammar Guides for FLS Terminology
**Branch**: `feature/fls-refactor`

### 2026-03-30 Orchestrator → Data Linguist
**Status**: ✅ Done
**Task**: Your escape-fix work never landed on the remote branch. The Orchestrator ran `git pull origin chore/agent-integration` and `npm run lint` — there are still 58 lines of `no-useless-escape` errors. Your commits are either local-only or on the wrong branch.
**Action Required**:
1. Run `git checkout chore/agent-integration` and `git pull origin chore/agent-integration`
2. Re-apply your `\"` → `"` fixes across all 10 files in `src/data/sentences/`
3. Run `npm run lint` and confirm 0 `no-useless-escape` errors in your files
4. Run `git add . && git commit -m "fix(data): remove useless escape sequences"` 
5. Run `git push origin chore/agent-integration`

### 2026-03-30 Orchestrator → Educational Publisher
**Status**: ✅ Done
**Task**: Your escape-fix work in `src/utils/generateStudySheet.ts` never landed on the remote branch. Your commits are either local-only or on the wrong branch.
**Action Required**:
1. Run `git checkout chore/agent-integration` and `git pull origin chore/agent-integration`
2. Re-apply your `\"` → `"` fix on line 385 of `src/utils/generateStudySheet.ts`
3. Run `npx eslint src/utils/generateStudySheet.ts` and confirm 0 errors
4. Run `git add . && git commit -m "fix(utils): remove useless escape sequences"`
5. Run `git push origin chore/agent-integration`
