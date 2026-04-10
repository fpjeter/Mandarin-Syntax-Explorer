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

### [2026-04-08] Orchestrator → Frontend Engineer
**Status**: ✅ Done
**Commit**: `138c89c` — feat(ui): collapsible tree toolbar with semantic toggle migration
**Task**: UI Epic - Collapsible Tree Toolbar (UX Refactor)
**Branch**: `feature/collapsible-toolbar`
**Context**: The Semantic Roles button is awkwardly placed in the global App.tsx header. We are moving it down to visually colocate it with tree manipulations in `TreeToolbar.tsx`. To combat button bloat, the toolbar must now be collapsible behind a single floating trigger.
**Action Required**:
1. Check out an entirely new branch: `feature/collapsible-toolbar`.
2. Follow the locked-in architecture in `implementation_plan.md`: horizontal rollout on desktop, vertical drop-down on mobile contexts. 
3. Verify that the semantic button only mounts for modern Mandarin sentences (`!isClassical`).
4. Validate changes and mark this ticket as Done.

### [2026-04-08] Orchestrator → Educational Publisher
**Status**: ✅ Done
**Task**: Evaluate Tagging Depth for Phase 4 Semantic Expansion
**Branch**: `feature/semantic-phase-4`

**Pedagogical Recommendation: "Primary Actors Only" Strategy**

After reviewing the existing tags in `ba_construction.ts` / `bei_passive.ts` and testing the Semantic Toggle UI, here is my recommendation for the Phase 4 expansion:

**1. Tag only the "who did what to whom" layer.** For each sentence, tag at most:
- The **Agent** (who performs the action): almost always the sentence Topic or inner Subject
- The **Patient** (what is acted upon): the main Object, or the fronted noun in 把/被 constructions
- The **Experiencer** (who perceives/feels): for psychological verbs like 觉得, 怕, 喜欢
- The **Causer** (who causes another to act): in pivotal constructions, the person issuing the command

**2. Do NOT tag these nodes.** Tagging every modifier, particle, and embedded sub-node would create visual clutter and confuse learners:
- ❌ Time/location/manner adjuncts (learners already see the Adjunct pill)
- ❌ Aspect markers, particles, degree markers (these are grammatical, not thematic)
- ❌ Complement nodes (result, direction, degree: these describe the action, not an actor)
- ❌ Attributive/relative clause internals (one level of nesting is enough)
- ❌ Copula 是, conjunction nodes

**3. Use only 5 of the 10 available roles.** The full palette (Agent, Patient, Experiencer, Instrument, Location, Goal, Source, Causer, Theme, Stimulus) is overkill for TCFL pedagogy. Restrict to:

| Role | When to use | Example |
|---|---|---|
| **Agent** | The doer of the action | 我/他/老师 as Topic doing something |
| **Patient** | The thing affected by the action | Object of 把, thing changed/moved |
| **Experiencer** | The feeler/perceiver | Topic of 觉得/怕/喜欢/讨厌 |
| **Causer** | The one who makes someone else act | Topic of 让/叫/派/请 in pivotal constructions |
| **Theme** | The thing being described (not acted on) | Topic in copula/adjectival sentences where nothing "happens" |

Reserve Instrument/Location/Goal/Source/Stimulus for future advanced mode.

**4. Estimated tagging volume**: With this constraint, expect ~2-3 tags per sentence across 17 categories ≈ 150-200 total tags (not 1,200). This is manageable and pedagogically focused.

**Rationale**: The semantic toggle is most valuable when it reveals something the syntactic tree does NOT already show. Tagging an Adjunct as "Location" adds nothing because the learner already sees `ADJUNCT (location)` as a badge. But tagging a Topic as "Agent" vs. "Patient" in a 被 passive IS genuinely illuminating: it shows the learner that the grammatical subject is actually the receiver, not the doer. That "aha!" moment is the whole point of semantic mode.

### [2026-04-08] Orchestrator → Data Linguist
**Status**: ✅ Done
**Task**: Phase 4 Data Epic - Semantic Expansion
**Branch**: `feature/semantic-phase-4`
**Context**: Expand the `semanticRole` data tagging to the 17 remaining categories in the databank to ensure the Semantic Toggle UI works comprehensively across all sentences.
**Action Required**:
1. Implementation Plan is locked in with the Educational Publisher's "Primary Actors Only" strictly limited 5-role palette.
2. Begin the manual tagging sweep through the 17 files listed in the task checklist.
3. Validate and mark this ticket as Done.

---

### [2026-04-08] Orchestrator → Data Linguist
**Status**: ✅ Done
**Task**: Phase 2 AST SubRole Normalization
**Branch**: `develop`
**Context**: Re-align the ~300 chaotic AST `subRole` values to the canonical 5-bucket palette defined in the `implementation_plan.md`.
**Action Required**: Executed bulk normalization via custom scripts/normalize_subroles.ts script. Collapsed non-adjunct AST tags into their base types while preserving exact visual badge mapping conditions. Passed all Node AST validations cleanly.

### [2026-04-08] Orchestrator → Data Linguist
**Status**: ✅ Done
**Task**: Phase 3 Data Epic - Semantic Tagging Base
**Branch**: `feature/semantic-toggle`
**Context**: To support the UI's Semantic Mode, we need `semanticRole` metadata injected directly into the AST structure. The User has approved a manual data-tagging approach over programmatic heuristics.
**Action Required**:
1. Check out `feature/semantic-toggle`.
2. Add `semanticRole` to the `GrammarNodeData` interface (types/grammar.ts).
3. Target `ba_construction.ts` and `bei_passive.ts` and tag the nodes with explicit semantic realities (`Agent`, `Patient`, etc.).
4. Mark Done so the Frontend Engineer can begin.

### [2026-04-08] Orchestrator → Frontend Engineer
**Status**: ✅ Done
**Task**: Phase 3 Frontend Epic - Semantic Toggle UI
**Branch**: `feature/semantic-toggle`
**Commit**: `25aeb07` — feat(ui): add Semantic Toggle UI for thematic roles
**Task**: Phase 3 Frontend Epic - Semantic Toggle UI
**Branch**: `feature/semantic-toggle`
**Action Required**: The Data Linguist has completed the data ingestion. You are cleared to proceed with the UI implementation. 
1. Check out `feature/semantic-toggle`.
2. Update `App.tsx` global state for `isSemanticMode`.
3. Create toggle UI in the Header.
4. Update `GrammarNode.tsx` to conditionally render `semanticRole` overrides.
5. Create TCFL Sidebar string updates.
6. Run `npm run qa` and `npm run lint`.
7. Once finished, mark this ticket as Done.

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

### [2026-04-09] Orchestrator → Educational Publisher
**Status**: ✅ Done
**Task**: Phase 9 — Translate All 123 Grammar Explanations to Mandarin Chinese
**Branch**: `data/i18n-zh-translations`

> [!NOTE]
> Converted all 123 `explanation` fields in `modern_sentences.json` from plain English strings to BilingualString objects `{ en, zh }`. Each Chinese translation was written in a natural native Mandarin pedagogy tutor voice, not machine-translated. Also updated `scripts/validate_trees.ts` to accept the new BilingualString union type. QA passed: 123 sentences, 1409 nodes. Files modified but NOT committed per ticket instructions.


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

---

### [2026-04-09] Orchestrator -> Educational Publisher
**Status**: 🔴 Active
**Task**: Phase 9b -- Translate All 30 Classical Sentence Explanations
**Branch**: data/i18n-classical-zh

Convert each explanation field in classical_sentences.json from a plain string to a BilingualString { en, zh }. Tone: classical Chinese lit teacher voice. Only edit explanation fields, never tree AST. Run npm run qa. Mark Done -- Orchestrator commits.

**Urgency**: MEDIUM

---

### [2026-04-09] Orchestrator -> Educational Publisher
**Status**: 🔴 Active
**Task**: Phase 9c -- Translate Grammar Guides to Chinese
**Branch**: data/i18n-grammar-guides

Wire useLanguage() from ../contexts/LanguageContext into GrammarGuide.tsx and ClassicalGrammarGuide.tsx. Wrap every English prose block with {language === 'zh' ? <ChineseVersion /> : <EnglishVersion />}. Translate all user-visible prose (headers, paragraphs, example labels). Do NOT translate className strings or Hanzi examples. Run npx tsc --noEmit. Mark Done -- Orchestrator commits.

**Urgency**: LOW
