# New Sentences Validation Report

A rigorous structural and pedagogical review has been conducted on the 26 new coverage gap sentences across 14 category files. The Educational Publisher's newly designed Chinese variants properly address the identified gaps, and the translations/pinyin are correct. 

**Summary**: 23 sentences have perfectly mapped AST trees and explanations that adhere to the pure Topic-Comment framework without FLS jargon. However, **3 sentences contain invalid AST structures** resulting from the Data Linguist failing to apply our recent FLS AST rules to these new arrays. 

## Approved Sentences (✅)
The following 23 sentences passed all validation checks and represent structurally pure FLS trees with warm, jargon-free explanations:
- `苹果我已经吃了。`
- `墙上挂着一幅画。`
- `他没把门关上。`
- `别把它弄坏了。`
- `钱包被偷了。`
- `我的自行车让人骑走了。`
- `我不是故意打碎的。`
- `我是坐火车来的。`
- `我突然想起来了。`
- `你要坚持下去。`
- `他不但会说英语，而且还会说法语。`
- `虽然很累，但是很开心。`
- `我学了三年中文了。`
- `他笑着说："没关系。"`
- `我没有他高。`
- `他比我大三岁。`
- `你不是已经吃过了吗？`
- `我怎么知道？`
- `你生什么气？`
- `我们去散散步吧。`
- `我实在受不了了。`
- `他中文说得不太好。`
- `即使下雨，我也要去。`

---

## Sentences Requiring AST Correction (❌)
The following 3 sentences require structural AST refactoring by the Data Linguist before they can safely be rendered by the `GrammarGuide` component.

### 1. 王老板让他派人去处理。 (Chained Pivots)
- **Status**: ❌ Invalid AST Structure
- **Issue**: The Data Linguist mapped this sentence using a flat serial-verb array format: `[Head Verb(让), Object(他), Head Verb(派), Object(人), Complement(去处理)]`. 
- **Correction Required**: As established in the recent "Situation-Taking Verb" refactor for BEI and Pivotal constructions, pivotal verbs must mount an `Embedded Clause` node where the pivot acts as the inner subject/topic. This flat array violates the FLS nesting laws. The Data Linguist must refactor this to: `Head Verb(让) -> Embedded Clause -> (Topic(他) -> Comment(Head Verb(派) -> Embedded Clause...))`

### 2. 有人找你。 (Existential Pivot with 有)
- **Status**: ❌ Invalid AST Structure
- **Issue**: Identical failure as above. The AST uses a flat mapping: `[Head Verb, Object(Pivot), Complement(pivot action)]`.
- **Correction Required**: Existential pivots must follow the Situation-Taking Verb model. It must be refactored to: `Head Verb(有) -> Embedded Clause -> (Topic(人) -> Comment(找你))`. 

### 3. 除非你道歉，否则我不会原谅你。 (Unless Conditional)
- **Status**: ❌ Invalid AST Structure
- **Issue**: Complete structural collapse in FLS architecture. In the `Comment - result clause`, the Data Linguist placed a `Topic - inner topic` node as a direct flat sibling alongside `Adjunct - conjunction`, `Adjunct - negation`, and `Head Verb`.
- **Correction Required**: A `Topic` cannot sit naked as a child of a `Comment` side-by-side with the main predicate verbs without an `Embedded Clause`, precisely because the FLS strictly mandates the `Topic` branch and the `Comment` branch remain separated at all hierarchical levels. If the result clause possesses its own localized topic (`我`), it must be encapsulated safely (e.g., as an `Actor/Subject` node if we are treating the broad string as a continued Comment, or inside an `Embedded Clause` bracket).

---
**Next Steps**: The Data Linguist must check out the active branch and directly address these 3 specific JSON structure failures in the codebase.
