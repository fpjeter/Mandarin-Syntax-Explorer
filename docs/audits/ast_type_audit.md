# AST Type System & Role Mappings Audit

**Auditor:** Linguistics Specialist  
**Scope:** 123 sentences, `GrammarRole` type, `glossary.ts`, `GrammarNode.tsx`, `GrammarGuide.tsx`  
**Branch:** `develop`

---

## Executive Summary

The type system is largely sound: all 25 roles used in practice exist in the `GrammarRole` union type (0 undeclared roles). However, the audit reveals **6 issues** ranging from dead types to rendering gaps.

---

## Issue 1: Dead Type — `Verb` is declared but never used

**Inconsistency:** The `GrammarRole` type declares `'Verb'` as a valid role. It has a glossary entry ("The action or state word") and a rendering case in `GrammarNode.tsx`. But across all 123 sentences and 1400+ nodes, **it is never used**. Every verb is mapped as either `Head Verb` or as part of a `Verb Phrase`.

**Where:** `src/types/grammar.ts` line 13, `src/data/glossary.ts` line 42, `GrammarNode.tsx` line 62/88.  
**Recommendation:** LOW priority. Keep the type for now (it's harmless), but consider removing the glossary entry since no learner will ever encounter it in a tree. Alternatively, if we ever want leaf-level verbs that aren't "head" verbs (e.g. auxiliary verbs inside a VP), this type could serve that purpose. Decision deferred to the Orchestrator.

---

## Issue 2: `Preposition` has no dedicated rendering in `GrammarNode.tsx`

**Inconsistency:** `Preposition` is used across 21 sentences (31 nodes total) — primarily for 比, 跟, 像, 在, 因为, 连, and the old 把 sub-nodes. Yet `GrammarNode.tsx` has **no `case 'Preposition'`** in either the modern or classical color switch. These nodes fall through to the default gray styling and are visually indistinguishable from unknown roles.

**Where:** `src/components/GrammarNode.tsx` — missing from both `getNodeColors` branches.  
**Recommendation:** MEDIUM priority. The Frontend Engineer should add a dedicated color case for `Preposition` in both modern and classical themes. Suggested color: a warm neutral distinct from Adjunct (rose) and Head Verb (teal).

---

## Issue 3: `Preposition` vs `Head Verb` inconsistency for 把/被

**Inconsistency:** Some 把 sentences use `role: 'Preposition'` for the sub-node containing 把 (e.g. inside a `subRole: 'bǎ-construction'` Adjunct), while the newer coverage-gap sentences map 把 as `role: 'Head Verb', subRole: 'BA marker'`. Similarly, older 被 sentences use a `Preposition` sub-node, while newer ones use `Head Verb, subRole: 'passive marker (BEI)'`.

This means the **same word** (把 or 被) appears with two different roles depending on which batch of sentences the Data Linguist created.

**Where:**
- Old pattern: `ba_construction.ts` sentences s33-s37 use `Preposition` nodes for 把
- New pattern: coverage-gap sentences use `Head Verb - BA marker`
- Old pattern: some `bei_passive.ts` sentences use nested `Preposition` for 被
- New pattern: coverage-gap sentences use `Head Verb - passive marker (BEI)`

**Recommendation:** HIGH priority. This directly contradicts our FLS position paper (Section 2.5 and 2.7). All 把 and 被 nodes must be migrated to the `Head Verb` role. The Data Linguist should refactor the older sentence trees to match the new blueprint: `Head Verb → Embedded Clause`.

---

## Issue 4: 319 distinct `subRole` values — severe inconsistency

**Inconsistency:** The `subRole` field is a free-form string with no type constraints. This has led to 319 unique values across 123 sentences, with massive redundancy and inconsistency. Examples of the same concept expressed differently:

| Concept | Variants found |
|---|---|
| Completion aspect | `completion`, `completion (inserted)`, `completion aspect`, `completion aspect (inserted into split verb)` |
| Experiential aspect | `experiential`, `experiential aspect`, `experiential aspect (inserted into split verb)`, `experiential aspect (过)` |
| Modal/ability | `modal`, `modal auxiliary`, `modal verb (ability)`, `modal verb (learned ability)` |
| Degree complement marker | `degree complement linker`, `degree complement marker`, `degree marker` |
| Negation | `negation`, `prohibition`, `prohibition marker` |
| Conditional clause | `condition clause`, `condition clause (只要…)`, `condition clause (如果…)`, `conditional`, `conditional (如果)`, `conditional marker`, `conditional marker (as long as)`, `conditional premise` |
| Consequence | `consequence`, `consequence (就)`, `consequence clause`, `consequence clause (…就…)`, `consequence clause (就 + V)`, `consequence marker (就)`, `immediate consequence marker (就)` |
| Passive | `passive / undergo`, `passive marker (BEI)`, `passive marker (RANG)`, `passive verbal` |

**Where:** Every sentence file. The problem is systemic.  
**Recommendation:** HIGH priority but large scope. The Data Linguist should normalize subRole strings to a controlled vocabulary. Proposed approach:
1. The Linguistics Specialist defines a canonical subRole palette (≤50 values).
2. The Data Linguist performs a bulk find-and-replace migration.
3. Optionally, the Frontend Engineer adds `subRole` to the `GrammarNodeData` interface as a constrained union type to prevent future drift.

---

## Issue 5: Glossary entry for `Preposition` contradicts FLS position

**Inconsistency:** The glossary says: *"Comes before a noun to show direction, location, or who is affected. E.g. 把 (marks what's being done to), 被 (marks the doer in a passive)."* This directly names 把 and 被 as prepositions, which contradicts our position paper's Head Verb modeling decision.

**Where:** `src/data/glossary.ts` line 57-61.  
**Recommendation:** MEDIUM priority. The Educational Publisher should rewrite this entry to remove 把 and 被 as examples. Valid preposition examples in our current data: 比 (comparison), 跟 (with), 在 (at/in), 像 (like).

---

## Issue 6: Grammar Guide "Tree labels at a glance" omits roles learners will encounter

**Inconsistency:** The guide's label glossary lists 7 roles: Adjunct, Attributive, Complement, Pivot, Copula, Head Verb, Head Noun. But learners will also encounter `Preposition` (31 nodes), `Subject` (45 nodes), `Embedded Clause` (31 nodes), `Parallel Sentence` (5 nodes), and `Particle` (103 nodes) in the trees without any explanation in the guide.

**Where:** `src/components/GrammarGuide.tsx` lines 171-187.  
**Recommendation:** LOW-MEDIUM priority. The Educational Publisher should expand the label glossary to include at minimum: `Particle`, `Subject`, `Embedded Clause`, and `Preposition`. These are high-frequency roles that learners will click on and wonder about.

---

## Summary Table

| # | Issue | Severity | Owner |
|---|---|---|---|
| 1 | Dead `Verb` type | Low | Orchestrator (decision) |
| 2 | `Preposition` missing from renderer | Medium | Frontend Engineer |
| 3 | 把/被 `Preposition` vs `Head Verb` split | **High** | Data Linguist |
| 4 | 319 uncontrolled subRole strings | **High** | Linguistics Specialist + Data Linguist |
| 5 | Glossary cites 把/被 as preposition examples | Medium | Educational Publisher |
| 6 | Guide omits common tree labels | Low-Medium | Educational Publisher |
