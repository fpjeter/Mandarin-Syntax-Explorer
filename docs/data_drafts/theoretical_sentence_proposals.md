# Theoretical Sentence Proposals (Batch B: Ranks 6–10)

**Author:** Linguistics Specialist  
**Purpose:** 5 new sentences targeting Ranks 6–10 from the aligned `pedagogical_expansion_strategy.md`  
**Constraint:** Each sentence includes structural notes for the Data Linguist to build the AST tree

---

## Sentence B1 — Rank 6: Resultative + 把 (BA + V-R fusion)

**chinese:** 她不小心把杯子打碎了。  
**pinyin:** Tā bù xiǎo xīn bǎ bēi zi dǎ suì le.  
**translation:** She accidentally broke the glass (into pieces).  

**explanation:** This sentence combines two of Mandarin's signature structures: the **把** disposal construction and a **resultative complement**. The 把 construction takes a specific object, **杯子** ("the glass"), and places it *before* the verb to signal that something definitive will happen to it. The verb phrase **打碎** ("hit-shatter") is a verb-result compound: **打** ("hit") is the action, and **碎** ("shattered") is the result of that action. The particle **了** signals completion. The adverb **不小心** ("carelessly") sits before 把 as an Adjunct, setting the manner. In the tree, you will see 把 opening an Embedded Clause, with the patient (杯子) promoted before the V-R compound — a word order that does not exist in English.

**AST Structure Notes:**
```
Sentence
├── Topic: 她 (Agent)
└── Comment
    ├── Adjunct (manner): 不小心
    ├── Head Verb (BA marker): 把
    └── Embedded Clause
        ├── Topic (patient): 杯子
        └── Verb Phrase
            ├── Head Verb: 打
            ├── Complement (resultative): 碎
            └── Particle (completion): 了
```

---

## Sentence B2 — Rank 7: Chained Resultative Series (V1-R1 → V2-R2)

**chinese:** 她走累了，坐下来休息。  
**pinyin:** Tā zǒu lèi le, zuò xià lái xiū xi.  
**translation:** She walked until she was tired, then sat down to rest.

**explanation:** This sentence chains two verb-result pairs in sequence. In the first clause, **走** ("walk") is the action and **累** ("tired") is the result: she walked *so much that* she became tired. In the second clause, **坐** ("sit") is the action and **下来** ("down-come") is a directional complement describing how she sat — she lowered herself down. The second clause then continues with another verb, **休息** ("rest"), which is the purpose of sitting. The tree shows two parallel Comment branches: the first with Head Verb 走 + Complement 累, the second with Head Verb 坐 + Complement 下来 + a serial continuation 休息. This parallel structure makes the chaining pattern visible.

**AST Structure Notes:**
```
Sentence
├── Topic: 她 (Agent)
└── Comment (sequential clauses)
    ├── Verb Phrase (clause 1)
    │   ├── Head Verb: 走
    │   ├── Complement (resultative): 累
    │   └── Particle (completion): 了
    └── Verb Phrase (clause 2: serial verb)
        ├── Head Verb: 坐
        ├── Complement (directional): 下来
        └── Head Verb (purpose): 休息
```

---

## Sentence B3 — Rank 8: Contrastive Double Topic with 倒是

**chinese:** 这个人，脾气倒是挺好的。  
**pinyin:** Zhè ge rén, pí qi dào shì tǐng hǎo de.  
**translation:** This person — their temper, actually, is quite good.

**explanation:** This is a double topic sentence with a contrastive twist. The outer Topic, **这个人** ("this person"), sets the broad discourse frame: we are talking about this person. The inner Topic, **脾气** ("temper"), narrows the focus to one specific attribute. The adverb **倒是** ("actually / on the contrary") signals that this attribute is *surprising* given some prior expectation — perhaps the speaker had expected a bad temper, or is conceding a positive trait while implying other traits are not so good. The tree nests two Topic nodes (outer → inner) and shows 倒是 as an Adjunct modifying the inner comment, making the contrastive emphasis structurally visible.

**AST Structure Notes:**
```
Sentence
├── Topic (outer topic): 这个人
└── Comment (inner topic–comment)
    ├── Topic (inner topic): 脾气
    └── Comment (contrastive)
        ├── Adjunct (contrastive): 倒是
        ├── Adjunct (degree): 挺
        ├── Head Verb (adjectival predicate): 好
        └── Particle (nominalizer): 的
```

---

## Sentence B4 — Rank 9: Subjectless Potential Complement (topic-as-patient)

**chinese:** 这种病治不好。  
**pinyin:** Zhè zhǒng bìng zhì bù hǎo.  
**translation:** This kind of illness can't be cured.

**explanation:** This sentence demonstrates a "subjectless potential complement" — a structure where the Topic is not the person doing the action but the *thing being acted upon*. **这种病** ("this kind of illness") is the patient: it is the illness that gets treated, not the one doing the treating. The agent ("doctors" or "anyone") is completely absent — Mandarin simply drops it. The verb phrase **治不好** is a potential complement: **治** ("treat") is the action, **不** signals impossibility, and **好** ("well / cured") is the result that cannot be achieved. The tree shows 这种病 as a Topic with a Patient semantic role, and the Comment contains the Head Verb + Particle (不) + Complement — revealing that the topic is the receiver of the action, even though no passive marker (被) is used.

**AST Structure Notes:**
```
Sentence
├── Topic (patient — no passive marker): 这种病
└── Comment
    └── Verb Phrase (potential complement)
        ├── Head Verb: 治
        ├── Particle (impossibility): 不
        └── Complement (resultative): 好
```

**Semantic tagging note:** The Topic should receive `semanticRole: "Patient"` despite having no 被 marker. This is a notional passive — the tree and the semantic tag together reveal the hidden role inversion.

---

## Sentence B5 — Rank 10: BEI + 给 insertion

**chinese:** 我的手机被弟弟给摔坏了。  
**pinyin:** Wǒ de shǒu jī bèi dì di gěi shuāi huài le.  
**translation:** My phone was broken by my little brother (he dropped and broke it).

**explanation:** This sentence adds a layer to the standard BEI passive: the colloquial **给** insertion. In spoken Mandarin, speakers often insert **给** between the agent and the verb in a 被 sentence to add emphasis or a sense of indignation — "my phone got *up and* broken by my brother." Structurally, **被** opens the passive frame and introduces the agent **弟弟** ("little brother"). The **给** then acts as an emphatic particle before the verb compound **摔坏** ("drop-break"), which is itself a resultative complement: **摔** ("drop/fall") is the action, **坏** ("broken") is the result. The tree shows the full stack: `被 → Agent(弟弟) → 给(emphatic) → Head Verb(摔) → Complement(坏) → Particle(了)`. This is the deepest BEI nesting in the dataset and demonstrates how spoken Mandarin layers emphasis inside the passive frame.

**AST Structure Notes:**
```
Sentence
├── Topic (patient): 我的手机
└── Comment (passive)
    ├── Head Verb (passive marker BEI): 被
    └── Embedded Clause
        ├── Subject (agent): 弟弟
        ├── Adjunct (emphatic): 给
        └── Verb Phrase
            ├── Head Verb: 摔
            ├── Complement (resultative): 坏
            └── Particle (completion): 了
```

---

## Summary

| # | Rank | Target Gap | Sentence | Category |
|---|---|---|---|---|
| B1 | 6 | Resultative + 把 | 她不小心把杯子打碎了。 | BA Construction |
| B2 | 7 | Chained V-R series | 她走累了，坐下来休息。 | Resultative Complements |
| B3 | 8 | Contrastive 倒是 | 这个人，脾气倒是挺好的。 | Double Topic |
| B4 | 9 | Subjectless potential | 这种病治不好。 | Potential Complements |
| B5 | 10 | BEI + 给 | 我的手机被弟弟给摔坏了。 | BEI Passive |

All 5 sentences use HSK 3-5 vocabulary, target the exact structural edge cases from the aligned strategy, and include full AST blueprints for the Data Linguist.
