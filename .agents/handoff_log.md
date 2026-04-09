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

1. **Verify Persona**: Before reading any ticket, strictly ensure the `[YOUR ROLE]` matches your exact expert persona. Never execute tickets assigned to others.
2. **Execute on Branch**: Checkout a new feature branch `git checkout -b <your-role>/<task>`. Do all your work there.
3. **Log Completion & Issues**: When done, update your ticket's status **in place** to `✅ Done` using a targeted single-line replacement (do NOT use multi-line regex replacements that might swallow adjacent tickets). If you ran into blockers, append a `**Issues Encountered:**` line to your ticket explaining any workarounds. Do NOT move the ticket to `## Resolved`.
4. **Backup Communication Protocol**: If you try to view this log and find it corrupted, unreadable, or formatted improperly, **DO NOT attempt to modify it**. Instead, halt execution and print a Markdown block to the user starting with `"I have successfully completed [My Task]... here is what I accomplished:"`. You MUST also explicitly describe what you know about the log issue (e.g., "The file was blocked due to a regex overlap on line 30") so the user can securely relay both the status and the error diagnostic offline to the Orchestrator.
5. **Out-of-Band Tasks**: If the User gives you a direct verbal instruction that skips the Orchestrator and does not have an existing `🔴 Active` ticket in this log, you MUST generate a new tracking ticket for yourself under `## Active Assignments`. Document the user's out-of-band instructions, summarize your work, and mark it `✅ Done` so the Orchestrator has a paper trail.

---

## Active Assignments

### [2026-04-08] Orchestrator → Data Linguist
**Status**: ✅ Done
**Task**: Phase 2 AST SubRole Normalization
**Branch**: `develop`
**Context**: Re-align the ~300 chaotic AST `subRole` values to the canonical 5-bucket palette defined in the `implementation_plan.md`.
**Action Required**: Executed bulk normalization via custom scripts/normalize_subroles.ts script. Collapsed non-adjunct AST tags into their base types while preserving exact visual badge mapping conditions. Passed all Node AST validations cleanly.

---

## Pending Requests

### [2026-04-08] Orchestrator → Data Linguist
**Status**: ✅ Done
**Task**: Rewriting Sentence Explanations for FLS Accuracy
**Branch**: `develop`
**Context**: Executed 5 pedagogical metaphors from implementation plan to translate FLS jargon into beginner-friendly UI text across pivotal, BEI, discourse context, serial verbs, and complements. Validation passed.

### [2026-04-08] Linguistics Specialist → Orchestrator
**Status**: ✅ Done
**Blocked Task**: Object Placement Audit (out-of-band scan requested by User)
**Dependency**: Data Linguist must fix a misplaced Object node in `src/data/sentences/sh_de_construction.ts`, sentence s8 (我是昨天晚上在图书馆看到她的。). The Object node `n8-p-vp-obj` (她) currently sits as a sibling of the embedded predicate VP `n8-p-vp-verb`. It must be moved inside that VP as a child, after the Head Verb (看) and Complement (到). This was the only genuine structural bug found across all 123 sentences; s83 and s66 were false positives (correctly modeled fronting/separate governing verbs).
**Suggested Fix**: Dispatch the Data Linguist to move the Object node inside the VP. Single-line AST edit.
**Urgency**: LOW

---

## Active Assignments




---

### [2026-04-08] Orchestrator → Data Linguist
**Status**: ✅ Done
**Task**: Fix Pedagogically Misleading Category Label
**Branch**: `develop`

**Context**: The Educational Publisher noticed that the category label in `correlative_patterns.ts` is currently `Correlative Patterns (越…越…)`. This implies all sentences use that specific pattern, but the file contains 一…就…, 不但…而且…, and 虽然…但是… as well.

**Action Required**:
1. Check out latest `develop`.
2. Open `src/data/sentences/correlative_patterns.ts`.
3. Change all instances of `category: 'Correlative Patterns (越…越…)'` to `category: 'Correlative Patterns (关联句型)'`.
4. Run `npm run qa && npm run lint` to validate.
5. Commit and push directly to `develop`. Mark this ticket as ✅ Done.


## Resolved

### [2026-04-02] Orchestrator → Linguistics Specialist
**Status**: ✅ Done
**Task**: Accuracy Review of All 97 Sentence Explanations
**Branch**: `feature/sentence-accuracy-review`
**Commit**: `073ea78`

> [!NOTE]
> Reviewed all 97 explanations against AST structures. Found 7 accuracy issues (all Subject→Topic terminology leaks) across 5 files. Produced `sentence_accuracy_report.md`.

### [2026-04-02] Orchestrator → Educational Publisher
**Status**: ✅ Done
**Task**: Fresh Rewrite of All 97 Sentence Explanations
**Branch**: `feature/sentence-accuracy-review`
**Commit**: `2461d1e`

> [!NOTE]
> All 97 explanation strings freshly rewritten. Applied all 7 accuracy fixes. Purged em-dashes and FLS jargon. QA passed: 97 sentences, 1164 nodes.



### [2026-04-01] Orchestrator → Educational Publisher
**Status**: ✅ Done
**Task**: Comprehensive Rewrite of Grammar Guides, Glossaries, and Badges
**Branch**: `feature/grammar-guide-rewrites`
**Commit**: `87453ab`

> [!NOTE]
> Renamed all FLS headers in GrammarGuide.tsx (Train Architecture → Topic and Comment, Matryoshka Principle → Nesting and Embedding, Logic Zone → Word Order Rules). Removed Cathedral/Train analogy, Situation Object, Recursive Hinge, and "nesting dolls" LLM-ism. Renamed ClassicalGrammarGuide.tsx Train Metaphor → Shared Structure. Purged all em-dashes from learner-facing text across 6 files. Fixed "Fusional coverb" → "Fused preposition+pronoun" in classicalBadges.ts. Both `tsc --noEmit` and `eslint` pass clean.

### [2026-04-01] Orchestrator → Educational Publisher
**Status**: ✅ Done
**Task**: Comprehensive Rewrite of Category Glossaries (`categories.ts` & `classicalCategories.ts`)
**Branch**: `develop`
**Commit**: `9ff5a38` — fix(pedagogy): rewrite category glossaries per pedagogical vision

> [!NOTE]
> All 19 FULL_CATEGORY_EXPLANATIONS rewritten: removed LLM-isms, all-caps romanizations, em-dashes, and performative tone. All 19 CATEGORY_DESCRIPTIONS polished for consistency. All 6 CLASSICAL_CATEGORY_DESCRIPTIONS warmed up with modern-bridge context. Both `tsc --noEmit` and `eslint` pass clean.

### [2026-04-01] Orchestrator → Educational Publisher
**Status**: ✅ Done
**Task**: Execute Pedagogical Rewrites on All Sentences
**Branch**: `data-linguist/sentence-rewrites`
**Commit**: `27ced37` — fix(pedagogy): rewrite sentence explanations per pedagogical vision

> [!NOTE]
> All 20 classical-bridge explanation strings rewritten with source attributions and *Grammatically,* markers removed. All cross-references to specific sentence IDs purged. All "morpheme" usages in learner-facing text replaced with learner-friendly terms. Both `tsc --noEmit` and `eslint` pass clean.

### [DATE] Orchestrator → Linguistics Specialist
**Status**: ✅ Done
**Task**: Discuss Role and Internalize Beginner Pedagogy Constraints
**Note to Orchestrator**: The updated FLS Position Paper artifact is located in the conversation's artifacts folder: `brain/1ebd2abe-42c9-4fdc-9485-94896239bd41/artifacts/fls-position-paper.md`.
**Branch**: `develop`

> [!NOTE]
> The Orchestrator and User have defined strict new guidelines for how FLS theory is presented to casual users. The structure is separated from the UI presentation layer.

### [DATE] Orchestrator → Educational Publisher
**Status**: ✅ Done
**Task**: Review Sentence Explanations on `data-linguist/sentence-rewrites` (Result: REJECTED)
**Branch**: `develop`

### [DATE] Orchestrator → Linguistics Specialist
**Status**: ✅ Done
**Task**: Theoretical Review of Sentence-Level Explanations
**Branch**: `develop`

### [DATE] Orchestrator → Educational Publisher
**Status**: ✅ Done
**Task**: Pedagogical Review of Sentence-Level Explanations
**Branch**: `develop`

### [DATE] Orchestrator → Data Linguist
**Status**: ✅ Done
**Task**: Execute AST Model Refactor for Situation-Taking Verbs (`BEI` / Pivotal)
**Branch**: `develop`

> [!NOTE]
> The Linguistics Specialist formulated a paradigm shift requiring `BEI` (passive) and pivotal constructions to share a unified "Situation-Taking Verb" architecture anchoring an `Embedded Clause`. 

**Action Required**:
1. Review the existing `implementation_plan.md` artifact from the Linguistics Specialist.
2. Execute the JSON refactoring mapping instructions across `src/data/sentences/bei_passive.ts` and `src/data/sentences/pivotal_constructions.ts` to convert the `BEI` nodes from prepositions into active Head Verbs generating Situation Objects.
3. Execute `npm run lint` and `npm run test` (or `validate_trees.ts`) to ensure nothing breaks during parsing.
4. Mark this task as ✅ Done when your refactored data structures are merged cleanly into the repository.

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

### [DATE] Orchestrator → Educational Publisher
**Status**: ✅ Done
**Task**: Rewrite Category Explanations for Beginner Accessibility
**Branch**: `develop`

> [!NOTE]
> The Orchestrator has received negative user feedback regarding the `FULL_CATEGORY_EXPLANATIONS` written into `src/data/categories.ts` during the "Inline Pedagogy Integration" epic. They are too theoretically dense.

**Action Required**:
1. Review the current long-form explanations inside `src/data/categories.ts`.
2. Rewrite them completely. Remove pedantic "pedagogy" and academic linguistic terminology. Instead, focus exclusively on accessible, empathetic "explanations for learners" that quickly and intuitively summarize how the grammar actually works in everyday practice.
3. Because these strings are rendered dynamically into the UI Sidebar, run `npm run lint` and boot the UI locally if you need to preview string length.
4. Mark this task as ✅ Done when your accessible rewrites are merged into the repository.

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
