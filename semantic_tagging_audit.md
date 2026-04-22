# Semantic Tagging Audit Report

**Auditor:** Linguistics Specialist  
**Scope:** 123 modern + 30 classical sentences (310 tagged nodes)  
**Branch:** `develop`

---

## Distribution

| Semantic Role | Modern | Classical | Total |
|---|---|---|---|
| Agent | 118 | 35 | 153 |
| Patient | 75 | 40 | 115 |
| Experiencer | 11 | 0 | 11 |
| Theme | 23 | 1 | 24 |
| Causer | 7 | 0 | 7 |

**Overall assessment:** The distribution is reasonable. Agent and Patient dominate as expected. Experiencer (11) and Causer (7) are appropriately rare. The 24 Theme tags need the most scrutiny — Theme is the "miscellaneous" bucket and several entries were mis-assigned.

---

## Confirmed Misclassifications (6 fixes required)

### 1. s69 — 知道的人 and 喜欢的人 → should be **Agent**, not Theme
**Sentence:** 知道的人比不上喜欢的人，喜欢的人比不上乐在其中的人。  
**Nodes:** `s69-s1` ("知道的人") and `s69-s2` ("喜欢的人")  
**Current:** Theme  
**Fix:** Agent. These are nominalized agents ("those who know," "those who like"). They are the subjects of 比不上 and represent volitional actors. Theme would apply to abstract concepts like "knowledge" — not to people who perform actions.

### 2. s87 — 好的时机 and 好的地形 → should be **Theme**, keep as-is ✅
**Sentence:** 好的时机不如好的地形，好的地形不如人心齐。  
**Nodes:** `s87-s1` ("好的时机") and `s87-s2` ("好的地形")  
**Current:** Theme  
**Verdict:** The scanner flagged these because the sibling verbs (不如) are action-like, but "favorable timing" and "advantageous terrain" are abstract concepts being compared, not volitional agents. **Theme is correct.** No fix needed.

### 3. s100 — 你 → should be **Agent**, not Experiencer
**Sentence:** 难道你连这么重要的事都忘了吗？  
**Nodes:** `s100-subj` ("你")  
**Current:** Experiencer  
**Fix:** Agent. While 忘 ("forget") has a psychological dimension, in Mandarin grammar 忘 is typically classified as a volitional action verb (you can be blamed for forgetting). The sentence is a rhetorical accusation: "how could YOU forget?" — the speaker treats 你 as an agent who should have remembered. The Experiencer dictionary should NOT include 忘.

### 4. s91 — 好事 → should be **Theme**, keep as-is ✅
**Sentence:** 不要因为好事太小就不去做。  
**Node:** `s91-hs` ("好事")  
**Current:** Theme  
**Verdict:** "Good deeds" is an abstract concept here, not an agent performing an action. 太小 is a predicate describing the Theme. **Theme is correct.** No fix needed.

### 5. s71 — 它 → should be **Theme**, keep as-is ✅
**Sentence:** 如果一个道理能用语言说清楚，那它就不是永恒的道理。  
**Node:** `s71-ta` ("它")  
**Current:** Theme  
**Verdict:** 它 refers back to 道理 ("a truth/principle"), which is an abstract concept being characterized by 不是. **Theme is correct.**

### 6. s85 — 你 → **Agent**, not Theme
**Sentence:** 连别人不了解你，你都不生气，这才是有修养的人。  
**Node:** `s85-ni` ("你")  
**Current:** Theme  
**Fix:** Agent. In 你都不生气 ("you are not even angry"), 你 is the person who controls their emotional response — they are an agent of restraint. Theme would imply 你 is being passively described like an object. This is a human exercising volition.

### 7. s49 — 小偷 → should be **Patient**, not Patient ✅ (but verify)
**Sentence:** 小偷被警察抓住了。  
**Node:** `s49-t` ("小偷")  
**Current:** Patient  
**Verdict:** Correct. The thief is the one being caught. However, the fact that 小偷 ("thief") sounds like an Agent makes this a good edge-case example of how the passive flips semantic roles. No fix needed.

---

## Additional Spot-Check Findings

### 8. s8 — 我 tagged as Theme → should be **Agent**
**Sentence:** 我是昨天晚上在图书馆看到她的。  
**Node:** `n8-t` ("我")  
**Current:** Theme  
**Fix:** Agent. The 是…的 construction focuses on circumstance, but 我 is still the person who performed the seeing (看到). Theme implies 我 is a passive topic of discussion. In all other 是…的 sentences, the person performing the action should be Agent.

### 9. s23, s50, s104, s105 — 我 tagged as Theme in 是…的 sentences
**Sentences:** 我是在上海长大的 / 我是昨天到的 / 我不是故意打碎的 / 我是坐火车来的  
**Current:** Theme  
**Fix:** All should be **Agent**. The 是…的 frame focuses on HOW or WHEN the action happened, but 我 is still the doer. A blanket "Theme" assignment to 是…的 topics was too aggressive.

### 10. s51 — 这件衣服 tagged as Theme → keep as-is ✅
**Sentence:** 这件衣服是在北京买的。  
**Current:** Theme  
**Verdict:** Correct. The clothing is the thing being described, not an agent. Someone else bought it. Theme is appropriate here.

### 11. s79 — 老师 tagged as Theme → should be **Theme** ✅
**Sentence:** 老师是用来传授知识和解答疑惑的。  
**Current:** Theme  
**Verdict:** Correct. This is a definitional sentence: "teachers are for transmitting knowledge." 老师 is being defined, not acting.

### 12. s26 — 耳朵 tagged as Experiencer → should be **Theme**
**Node:** `n26-c-t2` ("耳朵")  
**Current:** Experiencer  
**Fix:** Theme. "Ears" are a body part being described (大 "big"), not an entity experiencing something. The Experiencer tag was likely assigned because 耳朵 is in a double-topic structure near a descriptive predicate, but body parts are Themes, not Experiencers.

---

## Summary of Required Fixes

| # | Sentence | Node | Current | Correct | Reason |
|---|---|---|---|---|---|
| 1 | s69 | s69-s1 (知道的人) | Theme | **Agent** | Nominalized agent |
| 2 | s69 | s69-s2 (喜欢的人) | Theme | **Agent** | Nominalized agent |
| 3 | s100 | s100-subj (你) | Experiencer | **Agent** | 忘 is volitional |
| 4 | s85 | s85-ni (你) | Theme | **Agent** | Volitional restraint |
| 5 | s8 | n8-t (我) | Theme | **Agent** | Doer in 是…的 |
| 6 | s23 | n23-t (我) | Theme | **Agent** | Doer in 是…的 |
| 7 | s50 | n50-t (我) | Theme | **Agent** | Doer in 是…的 |
| 8 | s104 | s104-t (我) | Theme | **Agent** | Doer in 是…的 |
| 9 | s105 | s105-t (我) | Theme | **Agent** | Doer in 是…的 |
| 10 | s26 | n26-c-t2 (耳朵) | Experiencer | **Theme** | Body part, not experiencer |

**Total: 10 node fixes across 8 sentences.**

---

## Recommendation for Data Linguist

Dispatch the Data Linguist to patch `modern_sentences.json` with the 10 corrections listed above. All are single-field `semanticRole` value changes. No structural AST modifications required.

Additionally, the Experiencer verb dictionary should be updated to **exclude 忘 (forget)** to prevent future mis-tagging.
