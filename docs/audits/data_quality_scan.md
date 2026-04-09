# Data Quality Scan Report

**Auditor:** Linguistics Specialist  
**Scope:** All 123 sentences, all tree nodes  
**Branch:** `feature/ast-type-fixes`

---

## Executive Summary

- **123 sentences scanned**, **1400+ tree nodes checked**
- **1 pinyin-hanzi alignment issue** found
- **~40 explanation accuracy failures** found (explanations referencing characters/examples from a different sentence entirely)
- **~20 pattern-reference false positives** excluded (scanner flagging grammar pattern names like 是…的 where characters aren't contiguous in the sentence — these are intentional and correct)

The explanation accuracy failures are **critical**. Many appear to be the result of batch-rewrite operations that swapped in generic examples or examples from other sentences.

---

## Issue 1: Pinyin-Hanzi Token Mismatch (1 issue)

### s33 — `ba_construction.ts`
- **Node:** `n33-serial-v2-obj` (Object)
- **Hanzi:** 牛奶 (2 characters)
- **Pinyin:** "niúnǎi" (1 token — no space)
- **Fix:** Change to `"niú nǎi"` so ruby annotations align correctly (one token per character)

---

## Issue 2: Explanations Referencing Wrong Sentence (Critical)

These explanations contain bold-wrapped Chinese characters that do not appear in their own sentence. In each case, the explanation is describing a different sentence's grammar.

### Category: Resultative Complements

| ID | Actual sentence | Wrong reference in explanation | Likely source |
|---|---|---|---|
| s30 | 我听懂了他说的话 | **看完**, **看**, **完**, **才发现** | A different resultative sentence |
| s40 | 我找到钥匙了 | **听**, **懂**, **听懂** | s30's explanation |
| s41 | 他写错字了 | **喝**, **醉**, **喝醉** | A 喝醉 sentence |

### Category: Degree Complements

| ID | Actual sentence | Wrong reference | Likely source |
|---|---|---|---|
| s36 | 她高兴得跳了起来 | **唱**, **非常好** | A singing/degree sentence |
| s37 | 她跑得非常快 | **大家都追不上她** | A different degree complement |
| s46 | 他气得说不出话来 | **比**, **比以前**, **进步得很快** | A comparison/progress sentence |
| s47 | 她把房间打扫得干干净净 | **干干净净的** (with 的) | Minor: wrong form (干干净净 vs 干干净净的) |

### Category: Potential Complements

| ID | Actual sentence | Wrong reference | Likely source |
|---|---|---|---|
| s34 | 这道题太难，我做不出来 | **你放心**, **我一定做得到** | s35's sentence |
| s35 | 你放心，一个小时就写得完 | **不** (references negation) | s34 or another negative potential |
| s44 | 这本书你看得懂吗 | **这个字**, **看得出来看不出来** | A different potential complement |
| s45 | 昨晚我睡不着，一直到天亮 | **怎么也睡不着** | Close but not exact match |

### Category: Directional Complements

| ID | Actual sentence | Wrong reference | Likely source |
|---|---|---|---|
| s38 | 他走进来了 | **出来**, **走出来** | Opposite direction sentence |
| s39 | 她把书拿出去了 | **从楼上**, **跑**, **下来**, **跑下来** | A 跑下来 sentence |
| s42 | 她跑上楼去了 | **回来**, **书** | A different direction sentence |
| s43 | 他从树上摘下来一个苹果 | **跳**, **跳下来** | A jumping sentence |

### Category: Pivotal Constructions

| ID | Actual sentence | Wrong reference | Likely source |
|---|---|---|---|
| s32 | 老师让学生回答问题 | **我们**, **写一篇作文** | An old version of s32? |
| s52 | 公司派他去谈判 | **去上海出差** | A different dispatch sentence |
| s53 | 她请我吃饭 | **朋友们** | Wrong object reference |
| s89 | 困难让人成长，安逸让人退步 | **使** | Wrong verb (使 vs 让) |

### Category: Serial Verb / Discourse Context

| ID | Actual sentence | Wrong reference | Likely source |
|---|---|---|---|
| s14 | 到了，找到了，吃完再走 | **到了中国**, **开始学中文**, **交了很多朋友** | Completely different sentence |
| s59 | 我拿着伞出门了 | **去图书馆**, **借书** | A different SVC sentence |
| s91 | 不要因为好事太小就不去做 | **通过**, **复习学过的内容**, **就能**, **学到新东西** | A study/review sentence |
| s94 | 已经吃过了 | **也想看**, **也** | Wrong discourse context |
| s95 | 今天特别累 | **告诉**, **他**, **看完了就给我** | Completely wrong sentence |
| s96 | 早就回家了 | **让**, **弟弟**, **先看** | Completely wrong sentence |

### Category: Double Topic / Comparatives

| ID | Actual sentence | Wrong reference | Likely source |
|---|---|---|---|
| s25 | 那家饭馆，菜很好吃，价钱也不贵 | **这道菜**, **味道**, **好极了** | A different food sentence |
| s26 | 大象，鼻子长，耳朵大 | **很长** | Minor: 长 vs 很长 |
| s27 | 这件事，我觉得你的想法很有道理 | **他**, **中文**, **说得很好** | A different topic-comment |
| s92 | 一个人犯的错，跟他的性格是分不开的 | **他的错误**, **是跟他的性格有关的** | Close paraphrase but wrong |

### Category: Conditional / Correlative

| ID | Actual sentence | Wrong reference | Likely source |
|---|---|---|---|
| s64 | 如果明天下雨，我们就不去了 | **如果你明天有空**, **就来我家吧**, **吧** | Different conditional |
| s65 | 只要你努力，就能成功 | **就一定能成功** | Close but not exact |
| s71 | 如果一个道理能用语言说清楚... | **如果道理可以用语言说清楚** | Paraphrase not matching |
| s73 | 如果你经常复习学过的东西... | **如果能复习旧的知识**, **就能学到新的东西** | Paraphrase not matching |
| s82 | 如果早上能明白人生的道理... | **如果早上能明白道理** | Minor truncation |
| s83 | 了解敌人又了解自己... | **如果了解对方也了解自己**, **就不会在任何战斗中失败** | Paraphrase mismatch |
| s97 | 一个人读书越多，他就越能理解世界 | **因为他学习很努力**, **所以成绩一直很好** | Completely wrong pattern |
| s98 | 天气越冷，大家越不想出门 | **连小孩**, **都知道** | Wrong pattern (连...都 not 越...越) |
| s99 | 期望越高，失望往往也就越大 | **越来越**, **天气越来越冷** | Wrong 越 pattern |

### Category: 连...都/也 (Even) Constructions

| ID | Actual sentence | Wrong reference | Likely source |
|---|---|---|---|
| s66 | 他连自己的名字都不会写 | **连最简单的题** | Different 连 sentence |
| s67 | 连小孩子也能做到 | **连一口水**, **也没喝** | Different 连 sentence |
| s72 | 连一千里的路，也要从第一步开始走 | **就连千里的路**, **也是从脚下开始的** | Paraphrase with wrong chars |
| s85 | 连别人不了解你... | **连别人不理解你这件事**, **你也不生气** | 了解 vs 理解, 都 vs 也 |

---

## Issue 3: Not Flagged (Excluded False Positives)

The following were flagged by the scanner but are **intentional pattern references** and should NOT be changed:

- References to **是…的** as a grammar pattern name (s8, s23, s50, s51, s79, s104, s105)
- References to **跟…一样** / **像…一样** as pattern names (s20, s21)
- References to **越…越** as a pattern format (s60)
- References to **一…就** as a pattern format (s61)
- References to **如果…就** as a pattern format (s64, s83, s84)
- References to **连…都** / **连…也** as a pattern format (s66, s67)
- References to **不但…而且** / **虽然…但是** as pattern names (s108, s109)
- References to **非…不可** as a pattern name (s57)
- References to separable verb unsplit forms: **见面** (s12), **散步** (s24), **分手** (s54), **毕业** (s55), **生气** (s116) — these correctly reference the base form to explain the splitting pattern

---

## Summary

| Issue Type | Count | Severity | Owner |
|---|---|---|---|
| Pinyin-hanzi token mismatch | 1 | Low | Data Linguist |
| Explanation references wrong sentence | ~40 | **Critical** | Educational Publisher |
| Pattern-reference false positives | ~20 | None (excluded) | — |

The ~40 wrong-reference explanations are the most urgent quality issue in the databank. They appear to be artifacts of batch rewrite operations that inserted generic examples or examples from neighboring sentences. The Educational Publisher should systematically re-verify each flagged explanation against its actual sentence.
