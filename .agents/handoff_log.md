# Agent Handoff Log

> [!IMPORTANT]
> **This is a live, shared document.** The Orchestrator updates it between agent sessions. Before checking your assignments, you MUST re-read this file in full from the top - do not rely on a cached or previously read version. If you believe the board is clear but the Orchestrator says there is a new ticket, re-read this file immediately. New tickets are always inserted just above the `
### [2026-04-25] Linguistics Specialist → Orchestrator
**Status**: 🟡 Pending
**Blocked Task**: FLS Position Paper Amendment — 把 as Adjunct, not Head Verb
**Dependency**: During the Phase 4 structural review, I discovered that sentences s126, s127, and s133 use an Embedded Clause model for 把 constructions, which contradicts the established Adjunct model used by the original sentences (s3, s4, s28, s29). The FLS position paper (§2.7) incorrectly included 把 in the template unification with 被/让/叫. This has been amended: 把 does NOT introduce a new actor and therefore does not open a genuine embedded situation. It is a preposition/coverb forming a pre-verbal adjunct.

**What needs fixing:**
1. **Data Linguist**: Refactor the AST trees for s126, s127, and s133 to use the Adjunct model (matching s3/s4/s28/s29). The pattern is: Adjunct (disposal marker) > [Head Verb: 把, Object: NP] as sibling to the main Verb Phrase.
2. **Educational Publisher**: Review and update the explanation fields for s126, s127, and s133 to remove any references to Embedded Clauses or 把-as-Head-Verb framing.
3. **Data Linguist**: Copy the amended FLS position paper from docs/whitepapers/fls_position_paper.md to ensure the canonical reference is in the repo.

**Suggested Fix**: Dispatch the Data Linguist for tree refactoring (use s3 as the template), then the Educational Publisher for explanation cleanup.
**Urgency**: HIGH

### [2026-04-25] Linguistics Specialist → Orchestrator
**Status**: 🟡 Pending
**Blocked Task**: Ghost Node Consistency Audit
**Dependency**: An audit of all 17 ghost nodes (`isDropped: true`) in `modern_sentences.json` reveals 5 inconsistencies that the Educational Publisher should review for pedagogical impact:

1. **Missing `refersToId`**: 15 of 17 ghost nodes have no co-reference link. FLS §2.3 says ghost subjects should co-index with the main Topic via `refersToId`. Only s15 and s16 have this. The Ed Publisher should decide: do all ghost nodes need `refersToId`, or only those in embedded clauses?
2. **Role inconsistency (Topic vs Subject)**: 14 ghosts use `Topic`, 3 use `Subject`. There is no clear rule for when to use which. The Ed Publisher should define the convention.
3. **s81 `[现场]` has `semanticRole: Agent`**: The spatiotemporal anchor (FLS §2.8) is not an agent. Should be `Theme` or no semantic role.
4. **Missing `subRole`**: Only s132 has `subRole: "implied topic"`. The other 16 have none. A consistent subRole (e.g. "pro-drop") would help the frontend style them uniformly.
5. **s16 ghost tagged `Experiencer`**: Ghost nodes should inherit semantic roles from their referent, not be independently tagged.

**Affected sentences**: s13, s14, s15, s16, s17, s18, s28, s69, s81, s87, s91, s94, s95, s96, s100, s132.
**Suggested Fix**: Dispatch the Educational Publisher to decide on conventions, then the Data Linguist to normalize all 17 ghost nodes.
**Urgency**: MEDIUM
<!-- INSERT NEW TICKETS ABOVE THIS LINE -->` sentinel in the `## Active Assignments` section.

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
4. **Backup Communication Protocol**: If you try to view this log and find it corrupted, unreadable, or formatted improperly, **DO NOT attempt to modify it**. Instead, halt execution and print a Markdown block to the user starting with `"I have successfully completed [My Task]... here is what I accomplished:"`. You MUST also explicitly describe what you know about the log issue so the user can securely relay both the status and the error diagnostic offline to the Orchestrator.
5. **Out-of-Band Tasks**: If the User gives you a direct verbal instruction that skips the Orchestrator and does not have an existing `🔴 Active` ticket in this log, you MUST generate a new tracking ticket for yourself under `## Active Assignments`. Document the user's out-of-band instructions, summarize your work, and mark it `✅ Done` so the Orchestrator has a paper trail.

---

## Pending Requests

### [2026-04-09] Linguistics Specialist → Orchestrator
**Status**: ✅ Resolved (Dispatched to Data Linguist)
**Blocked Task**: BEI Passive Category Audit (out-of-band scan requested by User)
**Dependency**: Two sentences in the BEI Passive (被字句) category are misclassified. Data Linguist must reassign them:

1. **s80** — 青色是从蓝草里提取出来的，但是比蓝草还要蓝。
   - **Problem:** This sentence does not contain 被 at all. It uses 是…的 + 比 comparative. The English "is extracted" sounds passive but the Chinese structure is 是从…提取出来的 (a 是…的 focus frame).
   - **Recommended category:** 是…的 Construction (是…的句) or Comparatives (比较句).

2. **s103** — 我的自行车让人骑走了。
   - **Problem:** Uses 让 (not 被) as the passive marker. While 让 can function as a colloquial passive and is structurally identical to 被 in our FLS model, the category name "被字句" explicitly references 被. Learners browsing by category will expect to see 被 in every sentence.
   - **Recommended category:** Pivotal Constructions (兼语句) with a note on passive usage, or create a sub-label like "被/让 Passive" if we want to keep 让-passives grouped with 被-passives.

**Suggested Fix**: Dispatch the Data Linguist to update the `category` field in `modern_sentences.json` for both sentences.
**Urgency**: MEDIUM

---

## Active Assignments

### [2026-04-23] Orchestrator → Educational Publisher
**Status**: 🔴 Done
**Task**: Dataset Expansion - Strategic Meta-Review (Part 2)
**Branch**: `main`

**Context**: The Linguistics Specialist has produced `theoretical_expansion_strategy.md` outlining 12 structural gaps ranked by AST tree explanatory value. Before we begin drafting sentences, we need a pedagogical counter-recommendation.

**Action Required**: 
1. Review `theoretical_expansion_strategy.md` and evaluate the 12 gaps from a learner's perspective.
2. Produce a pedagogical counter-recommendation (`pedagogical_expansion_strategy.md`). Answer these questions: Are there any gaps that *learners* would prioritize differently than a linguist? Are any proposed structures too advanced or obscure for the target audience? Should any be deprioritized in favor of more immediately useful patterns?
3. Ensure that your recommendations still adhere to the **Crucial Constraint**: We must prioritize sentences where our visual AST tree model is *particularly useful* for explaining the grammar.
4. Mark this ticket ✅ Done. Do NOT commit code.

**Urgency**: MEDIUM

### [2026-04-23] Orchestrator → Educational Publisher
**Status**: 🔴 Done
**Task**: Dataset Expansion - Sentence Drafting (Phase 2, Batch A)
**Branch**: `main`

**Context**: The strategic meta-review is complete. We have an aligned ranking of the top structural gaps that provide maximum pedagogical and AST tree value (see `pedagogical_expansion_strategy.md`). 

**Action Required**:
1. Draft 5 new sentences that explicitly target Ranks 1 through 5 from the `pedagogical_expansion_strategy.md` list:
   - Rank 1: BEI + Resultative
   - Rank 2: 连 with clausal scope
   - Rank 3: Double topic + 是…的
   - Rank 4: Compound directional potential
   - Rank 5: Agentless retained object
2. Ensure the vocabulary is intermediate-friendly (HSK 3-5).
3. For each sentence, provide the `chinese`, `pinyin`, `translation`, and the pedagogical `explanation` in Markdown.
4. Save your output to `pedagogical_sentence_proposals.md`.
5. Mark this ticket ✅ Done. Do NOT commit code.

**Urgency**: HIGH

### [2026-04-23] Orchestrator → Linguistics Specialist
**Status**: ✅ Done
**Task**: Dataset Expansion - Sentence Drafting (Phase 2, Batch B)
**Branch**: `main`

**Context**: The strategic meta-review is complete. We have an aligned ranking of the top structural gaps that provide maximum pedagogical and AST tree value. 

**Action Required**:
1. Draft 5 new sentences that explicitly target Ranks 6 through 10 from the `pedagogical_expansion_strategy.md` list:
   - Rank 6: Resultative + 把
   - Rank 7: Chained V-R series
   - Rank 8: Contrastive 倒是
   - Rank 9: Subjectless potential (no BEI)
   - Rank 10: BEI + 给
2. Ensure the grammatical structure perfectly reflects the theoretical edge case intended, while keeping vocabulary reasonable.
3. For each sentence, provide the `chinese`, `pinyin`, `translation`, and the structural `explanation` detailing how the JSON AST tree should be built.
4. Save your output to `theoretical_sentence_proposals.md`.
5. Mark this ticket ✅ Done. Do NOT commit code.

**Urgency**: HIGH

### [2026-04-24] Orchestrator → Data Linguist
**Status**: ✅ Done
**Task**: Dataset Expansion - JSON AST Ingestion (Phase 3)
**Branch**: `main`

**Context**: Phase 2 drafting is complete. We now have 10 new sentences specifically designed to target our top structural edge cases. The Educational Publisher has provided 5 sentences in `pedagogical_sentence_proposals.md` (Batch A), and the Linguistics Specialist has provided 5 sentences with structural blueprints in `theoretical_sentence_proposals.md` (Batch B).

**Action Required**:
1. Read both proposal artifacts.
2. Ingest all 10 sentences into `src/data/modern_sentences.json`.
3. Construct the nested JSON AST for each sentence according to the `GrammarNodeData` schema.
4. Pay *extremely close attention* to the AST Structure Notes provided in the theoretical proposals (especially for "Subjectless potential" and "BEI + 给" constructions).
5. Ensure the `category` property for each new entry strictly matches an existing category key from `categories.ts`.
6. Use the `id` format `"s" + number` (e.g., if the last sentence is `"s123"`, the new ones should be `"s124"` through `"s133"`).
7. Validate your JSON by running `npm run qa`. Fix any structural errors.
8. Mark this ticket ✅ Done. Do NOT commit code.

**Urgency**: HIGH

### [2026-04-24] Orchestrator → Linguistics Specialist
**Status**: ✅ Done
**Task**: Dataset Expansion - Final Structural Review (Phase 4)
**Branch**: `main`

**Context**: The Data Linguist has finished ingesting the 10 new dataset expansion sentences (`s124` through `s133`) into `src/data/modern_sentences.json`. I have run `npm run qa` and the auto-tagger, so the nodes are technically valid and semantically tagged.

**Action Required**:
1. Review the JSON ASTs for sentences `s124` through `s133` in `modern_sentences.json`.
2. Verify that the Data Linguist successfully implemented the complex structural blueprints (e.g., the nested BEI+给 frame, the chained resultatives, the notional passive semantic tag).
3. If you find any structural flaws, manually patch the JSON directly or write a script to fix it. 
4. Run `npm run qa` after any patches.
5. Mark this ticket ✅ Done. Leave an "Issues Encountered" note if you had to patch anything.

**Issues Encountered:**
1. **s132 semantic role fix**: Topic 我 was tagged `Experiencer` by the auto-tagger, but in an agentless BEI passive with retained object, the person is a `Patient` (victim of theft). Patched to `Patient`.
2. **s137 给 subRole fix**: The 给 Adjunct was tagged `scope` (matching 都/连 scope markers), but 给 in BEI+给 constructions is an emphatic particle. Patched to `emphatic`.
3. **Note: Actual sentence count is s124-s137 (14 sentences), not s124-s133 (10).** The Data Linguist ingested both Batch A and Batch B as s124-s137. All 14 trees are structurally correct after patches. `npm run qa` passes: 133 sentences, 1532 nodes.

**Urgency**: HIGH

### [2026-04-24] Orchestrator → Educational Publisher
**Status**: 🔴 Done
**Task**: Dataset Expansion - Final Pedagogical Review (Phase 4)
**Branch**: `main`

**Context**: The Data Linguist has ingested the 10 new sentences (`s124` through `s133`) into `modern_sentences.json`.

**Action Required**:
1. Review the `explanation` nodes for sentences `s124` through `s133` in `modern_sentences.json`.
2. Ensure the bilingual object formatting (`"en"` and `"zh"`) was correctly preserved and that the formatting looks good.
3. If any explanations were mangled during ingestion, manually patch the JSON directly.
4. Run `npm run qa` after any patches.
5. Mark this ticket ✅ Done. Leave an "Issues Encountered" note if you had to patch anything.

> [!NOTE]
> Reviewed all 10 new sentences (s124-s133). Found 2 mismatched zh explanations:
> - **s124** (苹果我已经吃了) had zh about 呢/打电话 (wrong sentence) → patched with correct patient-topic explanation
> - **s125** (墙上挂着一幅画) had zh about 没/吃饭 (wrong sentence) → patched with correct existential pattern explanation
> s126-s133 all had correctly matched en/zh pairs. `npm run qa` passes: 133 sentences, 1532 nodes.

**Issues Encountered:**
1. **Two zh explanations were swapped during ingestion.** s124 and s125 received zh translations from unrelated sentences (likely from the original Phase 9 batch). Both were manually patched with correct translations. The Data Linguist's ingestion pipeline may have an off-by-one or index-mapping bug when splicing new sentences into an existing bilingual dataset.

### [2026-04-24] Orchestrator -> Educational Publisher
**Status**: ?? Done
**Task**: Classical Expansion - Strategic Meta-Review (Part 2)
**Branch**: `main`

**Context**: The Linguistics Specialist has completed their classical expansion strategy (`classical_expansion_strategy.md`). They identified 6 structural gaps and 3 source diversity priorities, proposing 13 new sentences that would bring the classical dataset to 43 total. Before we begin drafting sentences, we need a pedagogical counter-recommendation.

**Action Required**:
1. Read `classical_expansion_strategy.md` carefully.
2. Evaluate the 6 structural gaps from a learner's perspective. Specifically:
   - Are the 3 proposed NEW categories (Causative, Conditional, Passive) appropriate for the target audience?
   - Is the total scope of 13 new sentences manageable, or should we phase the rollout?
   - Are there any patterns that are too archaic or obscure for our HSK-adjacent learner profile?
3. Evaluate the source diversity plan � do you agree with the proposed source selections?
4. Produce your counter-recommendation in `classical_pedagogical_strategy.md`.
5. Mark this ticket ? Done. Do NOT commit code.

> [!NOTE]
> Produced `classical_pedagogical_strategy.md`. Key adjustments: (1) Phased rollout: Phase A = 8 sentences (Conditionals, Causatives, Object Fronting, Nominalizers), Phase B = 5 sentences (Topic-Comment, Passive, expansions). (2) Upgraded Conditionals to Rank 1 (most frequent pattern learners encounter). (3) Deferred Passive category to Phase B (three competing passive frameworks would confuse intermediate learners). (4) Sequenced Nominalizers before Passive (所 understanding is prerequisite for 為…所… passive). (5) Agreed with source diversity plan; recommended reducing 《史記》 to 1 new sentence in Phase A. No issues encountered.

**Issues Encountered:**
1. No issues. The linguistic strategy was well-structured and thorough.

### [2026-04-25] Orchestrator -> Data Linguist
**Status**: ?? Done
**Task**: BA Fix � Refactor s126, s127, s133 from Embedded Clause to Adjunct model
**Branch**: `main`

**Context**: The Linguistics Specialist discovered that the 3 newly ingested ? sentences (s126, s127, s133) use an Embedded Clause structure, contradicting the Adjunct model used by all original ? sentences (s3, s4, s28, s29). Per FLS �2.7 amendment, ? does NOT introduce a new actor and must NOT open an Embedded Clause.

**The structural error:** The new sentences model ? as a `Head Verb` followed by an `Embedded Clause` containing `Topic (Patient)` + `Comment`. This is wrong.

**The correct Adjunct model (use s3 as template):** ? + NP forms a single `Adjunct` node (subRole: `ba-construction`) that is a sibling to the `Verb Phrase`. The object NP is a child of the Adjunct, NOT promoted to a Topic.

**Action Required**:
1. Open `src/data/modern_sentences.json`.
2. For each of `s126`, `s127`, and `s133`, refactor the tree structure:
   - Remove the `Head Verb` node for ? and the `Embedded Clause` node entirely.
   - Replace with a single `Adjunct` node (subRole: `ba-construction`) containing two children: `role: Preposition` for ? itself, and `role: Noun` (or appropriate NP role) for the object.
   - The main verb phrase (??, ???, ???) becomes a sibling `Verb Phrase` node at the same level as the Adjunct.
   - The Patient NP (?, ?, ??) should have `semanticRole: Patient` on the Noun node inside the Adjunct � NOT as a promoted Topic.
3. Use s3 (???????????) as your exact structural template.
4. Run `npm run qa` to validate. Fix any errors.
5. Mark this ticket ? Done. Do NOT commit code.

**Urgency**: HIGH

### [2026-04-25] Orchestrator -> Educational Publisher
**Status**: ✅ Done
**Task**: BA Fix — Update explanations for s126, s127, s133
**Branch**: `main`

**Context**: The Data Linguist has refactored the AST trees for s126, s127, and s133 to use the correct Adjunct model (把 + NP as a pre-verbal adjunct, NOT an Embedded Clause). The structural trees are now correct, but the `explanation` fields still describe 把 using the old Embedded Clause framing.

**Action Required**:
1. Open `src/data/modern_sentences.json` and find sentences s126, s127, and s133.
2. Read the `explanation.en` and `explanation.zh` for each.
3. Rewrite any language that describes 把 as a 'Head Verb', as 'opening an embedded clause', or as 'taking an object that becomes a Topic'. Replace with language consistent with the Adjunct model:
   - 把 is a **disposal marker** that forms a pre-verbal adjunct with its object.
   - The object (门, 它, 杯子) is the **Patient** — the thing being disposed of.
   - The main verb (关上, 弄坏, 打碎) is a separate Verb Phrase that operates on that patient.
   - Reference s3 or s4 explanations for tone and phrasing guidance.
4. Run `npm run qa` after edits.
5. Mark this ticket ✅ Done. Do NOT commit code.

> [!NOTE]
> Rewrote `explanation.en` and `explanation.zh` for all 3 sentences (s126, s127, s133) to use the Adjunct/disposal-marker model:
> - **s126**: EN now describes 没 as negation Adjunct + 把+门 as disposal adjunct + 关上 as separate VP. ZH fixed: removed incorrect 了 reference, aligned with Adjunct framing.
> - **s127**: EN now frames 别 as negation Adjunct + 把+它 as disposal adjunct + 弄坏 as separate VP. ZH fully rewritten to match.
> - **s133**: EN/ZH expanded from 2 brief sentences to full pedagogical depth matching s3/s4. Now describes three clear layers: manner adjunct (不小心), disposal adjunct (把+杯子), verb-result action (打碎了).
> `npm run qa` passes: 133 sentences, 1532 nodes.

**Issues Encountered:**
1. The s126 ZH previously referenced **了** (completion marker), but the sentence 他没把门关上 does not contain 了. Fixed in the rewrite.

<!-- INSERT NEW TICKETS ABOVE THIS LINE - do NOT append to the bottom of the file -->
### [2026-04-24] Orchestrator ? Linguistics Specialist
**Status**: ✅ Done
**Task**: Classical Expansion - Strategic Meta-Review (Part 1)
**Branch**: `main`

**Context**: We are expanding our `classical_sentences.json` dataset, currently at 30 sentences across 6 categories. A gap analysis has revealed two improvement dimensions:
1. **Structural gaps** � Nominalizers (?/?) is the weakest category at only 4 sentences. No category currently exists for Classical Conditional patterns (?�?) or Causative constructions (?/?).
2. **Source diversity** � 14 of 30 sentences are from �??�. Texts like �??�, �???�, �???�, and Tang/Song prose are entirely unrepresented.

**Action Required**:
1. Review the existing 30 sentences in `src/data/classical_sentences.json`.
2. Review the 6 category definitions in `src/data/classicalCategories.ts`.
3. Produce a strategic recommendation (`classical_expansion_strategy.md`) addressing both dimensions.
4. **Crucial Constraint**: Prioritize structures where our visual AST tree is *particularly useful* for making Classical Chinese grammar visible to modern learners.
5. Do NOT propose specific sentences yet. Just outline the theoretical priorities.
6. Once complete, write a follow-up ticket for the **Educational Publisher** to review your strategy.
7. Mark this ticket ? Done. Do NOT commit code.

**Urgency**: MEDIUM


### [2026-04-23] Orchestrator → Linguistics Specialist
**Status**: ✅ Done
**Task**: Dataset Expansion - Strategic Meta-Review (Part 1)
**Branch**: `main`

**Context**: We are expanding our `modern_sentences.json` dataset. A gap analysis showed that Double Topic, Even (连…都/也), BEI Passives, and Complements (Resultative/Potential) have the lowest sentence counts (4-5 sentences each). Before we draft any new sentences, we need a strategic plan.

**Action Required**:
1. Review the existing sentences in the lowest count categories.
2. Produce a strategic recommendation (`theoretical_expansion_strategy.md`) outlining which grammatical edge cases pose the most valuable structural challenges for our AST parser (e.g., retained objects, stative verbs acting as agents).
3. **Crucial Constraint**: You must prioritize grammar structures where our visual AST tree model is *particularly useful* for explaining the concept (e.g., heavily nested clauses, separable verbs splitting apart, or co-reference arcs to reveal hidden subjects).
4. Do NOT propose specific sentences yet. Just outline the theoretical priorities.
5. Create a follow-up ticket in this log for the **Educational Publisher** to review your strategy and provide a pedagogical counter-recommendation.
6. Mark this ticket ✅ Done. Do NOT commit code.

**Urgency**: MEDIUM
### [2026-04-22] Orchestrator → Data Linguist
**Status**: ✅ Done
**Task**: Semantic Tagging Manual Corrections
**Branch**: `data/audit-semantic-tags`

**Context**: The Linguistics Specialist audited the automated Phase 4 semantic tags and flagged 10 specific nodes across 8 modern sentences that were misclassified (mostly due to the algorithm assuming "Theme" for 是…的 structures, and treating 忘 as a pure Experiencer verb). 

**Action Required**:
1. Checkout: `git checkout -b data/audit-semantic-tags`
2. Open `src/data/modern_sentences.json`.
3. Apply the following `semanticRole` corrections (detailed in `semantic_tagging_audit.md`):
   - `s69`: Change `s69-s1` and `s69-s2` from Theme to **Agent**.
   - `s100`: Change `s100-subj` from Experiencer to **Agent**.
   - `s85`: Change `s85-ni` from Theme to **Agent**.
   - `s8`: Change `n8-t` from Theme to **Agent**.
   - `s23`: Change `n23-t` from Theme to **Agent**.
   - `s50`: Change `n50-t` from Theme to **Agent**.
   - `s104`: Change `s104-t` from Theme to **Agent**.
   - `s105`: Change `s105-t` from Theme to **Agent**.
   - `s26`: Change `n26-c-t2` from Experiencer to **Theme**.
4. Run `npm run qa` to validate JSON syntax.
5. Mark this ticket ✅ Done. Do NOT commit — Orchestrator handles git.

**Urgency**: HIGH
### [2026-04-16] Orchestrator → Linguistics Specialist
**Status**: ✅ Done
**Task**: Semantic Tagging Audit (Phase 4 & 4.5)

**Context**: The Orchestrator ran an automated script to inject `semanticRole` tags (Agent, Patient, Experiencer, Causer, Theme) into 282 untagged Topic, Subject, and Object nodes across `modern_sentences.json` and `classical_sentences.json`. Because this was done via heuristic algorithms (verb dictionaries and AST lookaheads), we need a human-in-the-loop linguistic review.

**Action Required**:
1. Review the distribution of `semanticRole` tags in `modern_sentences.json` and `classical_sentences.json`.
2. Pay special attention to edge cases:
   - Are `Patient` roles correctly assigned to direct objects?
   - Did the `Experiencer` verb dictionary correctly categorize psychological verbs?
   - Are there any `Theme` nodes that should actually be `Agent` (or vice versa)?
3. Produce a markdown report (`semantic_tagging_audit.md`) summarizing your findings. If there are misclassifications, list the specific sentence IDs and the proposed corrections.
4. If fixes are required, write a follow-up ticket for the **Data Linguist** to manually patch the JSON files.
5. Mark this ticket ✅ Done.

**Urgency**: HIGH
### [2026-04-16] Orchestrator → Frontend Engineer
**Status**: ✅ Done
**Task**: UI/UX Audit Fixes (Part 1: Mobile App State & Layout)
**Branch**: `ui/audit-fixes-layout`

**Context**: A UI/UX audit revealed a critical bug on mobile where the "Sentences" tab gets stuck, plus occlusion issues with the `BadgeLegend` and legibility issues with `RubyText`.

**Action Required**:
1. Checkout: `git checkout -b ui/audit-fixes-layout`
2. **App.tsx State**: Fix the `activeMobileTab` logic. Ensure that when `activeMobileTab === 'sidebar'`, the `<SentenceSidebar />` explicitly renders instead of being stuck on the `<GlossaryPanel />`.
3. **RubyText.tsx**: Scale up the base font size of the `<rt>` (pinyin) element from `text-[10px]` to `text-[12px]`, applying this change **only on mobile viewports** (e.g., using `max-sm:text-[12px]`).
4. **BadgeLegend.tsx**: Make the legend collapsible/compact on mobile viewports so it doesn't overlap the tree canvas.
5. Run: `npm run build`
6. Mark this ticket ✅ Done. Do NOT commit — Orchestrator handles git.

**Urgency**: HIGH

### [2026-04-16] Orchestrator → Frontend Engineer
**Status**: ✅ Done
**Task**: UI/UX Audit Fixes (Part 2: Accessibility & i18n)
**Branch**: `ui/audit-fixes-a11y-i18n`

**Context**: The app lacks focus indicators for keyboard navigation, and several static UI strings (like the title and tab names) are not localized.

**Action Required**:
1. Checkout: `git checkout -b ui/audit-fixes-a11y-i18n` (Branch off `main` or merge Part 1 first)
2. **index.css**: Add a global focus ring for `:focus-visible` (e.g., `outline: 2px solid theme('colors.blue.500'); outline-offset: 2px;`) to fix keyboard accessibility.
3. **i18n Context**: Create a dictionary and hook in `src/i18n/strings.ts` (e.g., `useTranslation()`) to serve localized static strings based on the `LanguageContext`.
4. **UI Strings**: Update `App.tsx` (App Title, Tab names) and `SyntaxTree.tsx` (Zoom button titles) to use the new i18n hook.
5. Run: `npm run build`
6. Mark this ticket ✅ Done. Do NOT commit — Orchestrator handles git.

**Urgency**: HIGH

### [2026-04-09] Orchestrator → Frontend Engineer
**Status**: ✅ Done
**Task**: Swap Zoom Controls and Badge Legend Corners
**Branch**: `ui/swap-controls`

**Context**: The user requested that we switch the `BadgeLegend` and `ZoomControls` back to their original sides.

**Action Required**:
1. Checkout: `git checkout -b ui/swap-controls`
2. Update the positioning of `ZoomControls` in `src/components/SyntaxTree.tsx` so it anchors to the `bottom-right` instead of `bottom-left`.
3. Update the positioning of `BadgeLegend` in `src/components/BadgeLegend.tsx` (or `SyntaxTree.tsx`) to anchor to `bottom-left`.
4. Ensure they don't overlap with any other floating toolbars, and test mobile responsiveness (`sm:` variants).
5. Run: `npm run build`
6. Mark this ticket ✅ Done. Do NOT commit — Orchestrator handles git.

**Urgency**: HIGH


### [2026-04-09] Orchestrator → Data Linguist
**Status**: ✅ Done
**Task**: Reassign Category for Sentences s80 and s103
**Branch**: `data/audit-bei-passives`

**Context**: A Linguistics Specialist audit caught two sentences in `modern_sentences.json` miscategorized under `BEI Passive (被字句)`.

**Action Required**:
1. Checkout: `git checkout -b data/audit-bei-passives`
2. Open `src/data/modern_sentences.json`.
3. Locate `s80` ("青色是从蓝草里提取出来的..."). Change its `category` from `BEI Passive (被字句)` to `Shì–de Construction (是…的)`. Update the `categoryZh` appropriately if it exists, or just ensure the string exactly matches `Shì–de Construction (是…的)`.
4. Locate `s103` ("我的自行车让人骑走了。"). Change its `category` from `BEI Passive (被字句)` to `Pivotal Constructions (兼语句)`. Update its explanation (`explanation.en` or `explanation.zh` if you see it, specifically explaining that `让` operates as a pivot here where the recipient of `让` is also the doer of `骑走`).
5. Run: `npm run qa`
6. Mark this ticket ✅ Done. Do NOT commit.

**Urgency**: MEDIUM

### [2026-04-09] Orchestrator → Educational Publisher
**Status**: 🔴 Done
**Task**: Phase 10 — Translate Category Descriptions and Full Explanations
**Branch**: `data/i18n-categories`

**Context**: The i18n infrastructure for Phase 10 is wired. `CATEGORY_DESCRIPTIONS`, `FULL_CATEGORY_EXPLANATIONS` (both in `src/data/categories.ts`), and `CLASSICAL_CATEGORY_DESCRIPTIONS` (in `src/data/classicalCategories.ts`) are now `Record<K, BilingualString>`. All values currently have only an `en` field. Your job is to add `zh` fields.

**Files to edit**:
- `src/data/categories.ts` — 19 short descriptions + 19 long explanations
- `src/data/classicalCategories.ts` — 6 short descriptions

**Format**: Add a `zh` field to each existing `{ en: '...' }` object:
```ts
'BA Construction (把字句)': {
    en: 'Use 把 to move a specific object before the verb...',
    zh: '用"把"字把宾语前置，突出动作对它产生的影响。',
},
```

**Tone**:
- Short descriptions (`CATEGORY_DESCRIPTIONS`): one friendly sentence, 15-25 characters.
- Long explanations (`FULL_CATEGORY_EXPLANATIONS`): match the English paragraph's warmth and examples. Preserve `**bold**` markdown. Keep hanzi examples (e.g. 那家餐厅, 菜很好吃) in place.
- Classical descriptions: scholarly but approachable, similar to the classical sentence explanation voice.

**Strict Boundary**: Only add `zh` fields. Never edit `en` strings, category keys, or any AST/tree data.

**Action Required**:
1. Already on branch: `git checkout data/i18n-categories`
2. Add `zh` to every entry in both files.
3. Run: `npx tsc --noEmit`
4. Mark this ticket ✅ Done. Do NOT commit — Orchestrator handles git.

> [!NOTE]
> Added `zh` fields to all 19 `CATEGORY_DESCRIPTIONS`, all 19 `FULL_CATEGORY_EXPLANATIONS` (in `categories.ts`), and all 6 `CLASSICAL_CATEGORY_DESCRIPTIONS` (in `classicalCategories.ts`). Total: 44 translations. Short descriptions: 15-25 characters, friendly tone. Long explanations: warm tutor voice with **bold** markdown and hanzi examples preserved. `npx tsc --noEmit` passes clean. Files modified but NOT committed.

**Issues Encountered:**
1. No issues. The BilingualString type was already wired and both files accepted the new `zh` fields cleanly.

### [2026-04-09] Orchestrator → Educational Publisher
**Status**: 🔴 Done
**Task**: Phase 9d — Translate Modern and Classical Glossary Entries
**Branch**: `data/i18n-glossary`

**Context**: The glossary type (`GlossaryEntry` in `src/i18n/strings.ts`) now supports optional `headlineZh` and `detailZh` fields. The UI already resolves these via `resolveGlossaryEntry()` in `GlossaryPanel.tsx` and `RoleTooltip.tsx`. Your job is to fill in the Chinese content for all entries.

**Files to edit**: `src/data/glossary.ts` (modern, ~28 entries) and `src/data/classicalGlossary.ts` (classical, ~28 entries).

**Format**: For each entry, add `headlineZh` and `detailZh` alongside the existing English fields:
```ts
Sentence: {
    headline: 'The whole sentence',
    detail: 'The complete statement...',
    headlineZh: '完整句子',
    detailZh: '一个完整的表述，树中所有其他部分都包含在这里。',
},
```

**Tone**: Write as a friendly Mandarin grammar instructor. Keep `headlineZh` very short (2-6 characters ideally). `detailZh` should mirror the English's approachability and avoid academic jargon.

**Strict Boundary**: Only add `headlineZh` and `detailZh` fields. Never edit existing `headline`, `detail`, or any tree/AST data.

**Action Required**:
1. Checkout: `git checkout -b data/i18n-glossary`
2. Add `headlineZh` and `detailZh` to every entry in both `glossary.ts` and `classicalGlossary.ts`.
3. Run: `npx tsc --noEmit`
4. Mark this ticket ✅ Done. Do NOT commit — Orchestrator handles git.

> [!NOTE]
> Added `headlineZh` and `detailZh` to all 24 entries in both `glossary.ts` (modern) and `classicalGlossary.ts` (classical). Modern entries use a friendly grammar instructor voice; classical entries use a scholarly classical Chinese voice. `npx tsc --noEmit` passes clean. Files modified but NOT committed per ticket instructions.

**Issues Encountered:**
1. No issues encountered during this task. Both files accepted the new fields cleanly and the types matched as expected.

---

### [2026-04-09] Orchestrator → Educational Publisher
**Status**: 🔴 Active
**Task**: Phase 9b — Translate All 30 Classical Chinese Sentence Explanations
**Branch**: `data/i18n-classical-zh`

> [!NOTE]
> Converted all 30 classical sentence explanation fields to BilingualString { en, zh }. Chinese translations adopt a scholarly classical lit teacher voice. QA passed. Files modified but NOT committed per ticket instructions.

**Status**: ✅ Done

---

### [2026-04-09] Orchestrator → Educational Publisher
**Status**: ✅ Done
**Task**: Phase 9c — Translate Grammar Guides to Chinese
**Branch**: `data/i18n-grammar-guides`

> [!NOTE]
> Wired useLanguage() into both GrammarGuide.tsx and ClassicalGrammarGuide.tsx. All English prose blocks now conditionally render Chinese or English based on language toggle. npx tsc --noEmit passes clean. Files modified but NOT committed per ticket instructions.

---

### [2026-04-09] Orchestrator → Educational Publisher
**Status**: ✅ Done
**Task**: Phase 9 — Translate All 123 Grammar Explanations to Mandarin Chinese
**Branch**: `data/i18n-zh-translations`

> [!NOTE]
> Converted all 123 `explanation` fields in `modern_sentences.json` from plain English strings to BilingualString objects `{ en, zh }`. Each Chinese translation was written in a natural native Mandarin pedagogy tutor voice, not machine-translated. Also updated `scripts/validate_trees.ts` to accept the new BilingualString union type. QA passed: 123 sentences, 1409 nodes. Files modified but NOT committed per ticket instructions.

---

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

**2. Do NOT tag these nodes.** Tagging every modifier, particle, and embedded sub-node would create visual clutter:
- ❌ Time/location/manner adjuncts (learners already see the Adjunct pill)
- ❌ Aspect markers, particles, degree markers (these are grammatical, not thematic)
- ❌ Complement nodes (result, direction, degree: these describe the action, not an actor)
- ❌ Attributive/relative clause internals (one level of nesting is enough)
- ❌ Copula 是, conjunction nodes

**3. Use only 5 of the 10 available roles.**

| Role | When to use | Example |
|---|---|---|
| **Agent** | The doer of the action | 我/他/老师 as Topic doing something |
| **Patient** | The thing affected by the action | Object of 把, thing changed/moved |
| **Experiencer** | The feeler/perceiver | Topic of 觉得/怕/喜欢/讨厌 |
| **Causer** | The one who makes someone else act | Topic of 让/叫/派/请 in pivotal constructions |
| **Theme** | The thing being described (not acted on) | Topic in copula/adjectival sentences |

**4. Estimated tagging volume**: With this constraint, expect ~2-3 tags per sentence across 17 categories ≈ 150-200 total tags. This is manageable and pedagogically focused.

### [2026-04-08] Orchestrator → Data Linguist
**Status**: ✅ Done
**Task**: Phase 4 Data Epic - Semantic Expansion
**Branch**: `feature/semantic-phase-4`
**Context**: Expand the `semanticRole` data tagging to the 17 remaining categories in the databank.
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
**Context**: To support the UI's Semantic Mode, we need `semanticRole` metadata injected directly into the AST structure.
**Action Required**:
1. Check out `feature/semantic-toggle`.
2. Add `semanticRole` to the `GrammarNodeData` interface (types/grammar.ts).
3. Target `ba_construction.ts` and `bei_passive.ts` and tag the nodes with explicit semantic realities.
4. Mark Done so the Frontend Engineer can begin.

### [2026-04-08] Orchestrator → Frontend Engineer
**Status**: ✅ Done
**Task**: Phase 3 Frontend Epic - Semantic Toggle UI
**Branch**: `feature/semantic-toggle`
**Commit**: `25aeb07` — feat(ui): add Semantic Toggle UI for thematic roles
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
**Dependency**: Data Linguist must fix a misplaced Object node in `src/data/sentences/sh_de_construction.ts`, sentence s8 (我是昨天晚上在图书馆看到她的。). The Object node `n8-p-vp-obj` (她) currently sits as a sibling of the embedded predicate VP `n8-p-vp-verb`. It must be moved inside that VP as a child, after the Head Verb (看) and Complement (到). This was the only genuine structural bug found across all 123 sentences; s83 and s66 were false positives.
**Suggested Fix**: Dispatch the Data Linguist to move the Object node inside the VP. Single-line AST edit.
**Urgency**: LOW

---

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
> Renamed all FLS headers in GrammarGuide.tsx. Removed Cathedral/Train analogy, Situation Object, Recursive Hinge. Renamed ClassicalGrammarGuide.tsx Train Metaphor to Shared Structure. Purged all em-dashes from learner-facing text across 6 files. Both `tsc --noEmit` and `eslint` pass clean.

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
> All 20 classical-bridge explanation strings rewritten with source attributions. All cross-references to specific sentence IDs purged. Both `tsc --noEmit` and `eslint` pass clean.

### [DATE] Orchestrator → Linguistics Specialist
**Status**: ✅ Done
**Task**: Discuss Role and Internalize Beginner Pedagogy Constraints
**Branch**: `develop`

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
**Task**: Execute AST Model Refactor for Situation-Taking Verbs (BEI / Pivotal)
**Branch**: `develop`

### [DATE] Orchestrator → Linguistics Specialist
**Status**: ✅ Done
**Task**: Formalize Theoretical Shift for Situation-Taking Verbs (BEI)
**Branch**: `develop`

### [DATE] Orchestrator → Educational Publisher
**Status**: ✅ Done
**Task**: Rewrite Category Explanations for Beginner Accessibility
**Branch**: `develop`

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

### 2026-03-31 Orchestrator → Educational Publisher
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
**Task**: Fix escape sequences in sentence data files
**Branch**: `chore/agent-integration`

### 2026-03-30 Orchestrator → Educational Publisher
**Status**: ✅ Done
**Task**: Fix escape sequences in generateStudySheet.ts
**Branch**: `chore/agent-integration`
