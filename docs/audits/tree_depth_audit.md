# AUDIT-6: Tree Depth Outlier Check

**Date:** 2026-05-20
**Auditor:** Orchestrator (script)

## Summary

No depth outliers found. All 185 trees fall within the healthy 3–8 range.

| Metric | Modern | Classical |
|---|---|---|
| Sentence count | 133 | 52 |
| Mean depth | **4.6** | **4.1** |
| Min depth | 3 | 3 |
| Max depth | 8 | 6 |
| Shallow outliers (< 3) | 0 | 0 |
| Deep outliers (> 8) | 0 | 0 |

## Top 5 Deepest Trees

| Sentence | Depth | Category |
|---|---|---|
| s118 | 8 | Pivotal Constructions (兼语句) |
| s17 | 7 | Discourse Context (跨句语境) |
| s27 | 7 | Double Topic (双主题) |
| s33 | 7 | Pivotal Constructions (兼语句) |
| s89 | 7 | Pivotal Constructions (兼语句) |

## Bottom 5 Shallowest Trees

| Sentence | Depth | Category |
|---|---|---|
| s57 | 3 | Basic Topic–Comment (主题评论) |
| s124 | 3 | Basic Topic–Comment (主题评论) |
| s80 | 3 | Shì–de Construction (是…的) |
| s104 | 3 | Shì–de Construction (是…的) |
| s112 | 3 | Comparatives (比较句) |

## Result

✅ **No issues found.** Depth distribution is healthy. Pivotal constructions naturally run deepest due to their embedded clause structure; simple topic-comment sentences naturally run shallowest.
