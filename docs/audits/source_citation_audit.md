# AUDIT-5: Classical Source Citation Format

**Date:** 2026-05-20
**Auditor:** Orchestrator (script)

## Summary

12 of 52 classical sentences have source citation format issues.

| Issue | Count | Sentences |
|---|---|---|
| Missing `《》` brackets (English-only source) | 9 | cc44–cc52 (Phase C additions) |
| Missing chapter separator `·` | 12 | cc12, cc34, cc43, cc44–cc52 |

## Flagged Sentences

| ID | Current `source` | Current `author` | Flags |
|---|---|---|---|
| cc12 | 《師說》 | Han Yu | No chapter separator |
| cc34 | 《師說》 | Han Yu | No chapter separator |
| cc43 | 《伶官傳序》 | Ouyang Xiu | No chapter separator |
| cc44 | Mencius | Mencius | No `《》`, no chapter |
| cc45 | Mencius | Mencius | No `《》`, no chapter |
| cc46 | Zhuangzi | Zhuangzi | No `《》`, no chapter |
| cc47 | Mencius | Mencius | No `《》`, no chapter |
| cc48 | Zhan Guo Ce | Zhan Guo Ce | No `《》`, no chapter |
| cc49 | Analects | Analects | No `《》`, no chapter |
| cc50 | Analects | Analects | No `《》`, no chapter |
| cc51 | Mencius | Mencius | No `《》`, no chapter |
| cc52 | Laozi | Laozi | No `《》`, no chapter |

## Notes

- cc12, cc34, cc43: These are standalone essays (師說, 伶官傳序) — they don't have internal chapter divisions, so the missing `·` is arguably acceptable.
- cc44–cc52: These were added during Phase C expansion and the EP used English-only source names. These need to be reformatted to `《Book·Chapter》` style with proper Chinese titles and chapter references.

## Recommendation

Fix cc44–cc52 source fields to match the project standard.
