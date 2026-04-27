### [2026-04-27] Orchestrator — Queued Audit Backlog

The following audits are queued in priority order. Dispatch one at a time when capacity is available.
They are informational audits only — no JSON edits until Orchestrator reviews findings.

---

### AUDIT-3: Cross-Reference Coverage
**Assigned To**: Data Linguist (informational scan — no edits)
**Urgency**: LOW

Scan all 176 sentences for cross-reference gaps:
1. Count sentences with zero `relatedIds` entries — call these "orphans"
2. For sentences that DO have `relatedIds`, verify that the related sentence shares the same category
3. Flag any `relatedIds` pointing to a different category (likely a stale or incorrect cross-reference)
4. Produce `docs/audits/crossref_coverage_audit.md` listing:
   - Total orphan count by dataset (modern / classical)
   - Orphaned sentence IDs grouped by category
   - Any cross-category `relatedIds` mismatches
Do NOT edit any JSON. Report only.

---

### AUDIT-4: Category Balance
**Assigned To**: Linguistics Specialist (informational scan — no edits)
**Urgency**: LOW

Check sentence distribution across categories:
1. Count sentences per category for both modern (19 categories) and classical (11 categories)
2. Flag any category with fewer than 3 sentences as "thin"
3. Flag any category with more than 12 sentences as "dense" (potential signal to split)
4. For each thin category, suggest 1-2 candidate sentences that could expand it
5. Produce `docs/audits/category_balance_audit.md`
Do NOT edit any JSON. Report only.

---

### AUDIT-5: Classical Source Citation Format
**Assigned To**: Educational Publisher (informational scan — no edits)
**Urgency**: LOW

Check all 43 classical sentences for source citation consistency:
1. The standard format is `《Book·Chapter》` (book title in 《》 brackets, chapter separated by ·)
2. Flag any source that: uses a different bracket style, omits chapter, uses English only, or is missing entirely
3. Check `author` field: should be an English name (e.g. "Confucius") — flag any that are Chinese-only
4. Produce `docs/audits/source_citation_audit.md` with a table of all 43 sources and a flag column
Do NOT edit any JSON. Report only.

---

### AUDIT-6: Tree Depth Outlier Check
**Assigned To**: Data Linguist (informational scan — no edits)
**Urgency**: LOW

Programmatically measure tree depth for all 176 sentences:
1. Write a small Node.js script to compute max depth per sentence
2. Flag any sentence with max depth < 3 (likely under-annotated)
3. Flag any sentence with max depth > 8 (potentially over-nested)
4. Report mean depth per dataset (modern vs classical)
5. Produce `docs/audits/tree_depth_audit.md` with the full table sorted by depth
Do NOT edit any JSON. Report only.

---

### AUDIT-7: Explanation Length Check
**Assigned To**: Educational Publisher (informational scan — no edits)
**Urgency**: LOW

Check word counts for all explanation.en fields across 176 sentences:
1. Flag explanations shorter than 50 words as "too terse"
2. Flag explanations longer than 400 words as "too long"
3. Compute mean/median word counts for modern vs classical datasets
4. Produce `docs/audits/explanation_length_audit.md`
Do NOT edit any JSON. Report only.
