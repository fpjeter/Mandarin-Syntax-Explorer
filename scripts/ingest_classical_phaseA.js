import fs from 'fs';
const filePath = 'src/data/classical_sentences.json';
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

const newSentences = [
  {
    id: "cc31", category: "Classical Conditionals (若/苟/則)",
    chinese: "且夫水之積也不厚，則其負大舟也無力。",
    pinyin: "Qiě fú shuǐ zhī jī yě bù hòu, zé qí fù dà zhōu yě wú lì.",
    modernChinese: "再说如果水积蓄得不够深，那么它就没有力量承载大船。",
    translation: "Moreover, if the water's accumulation is not deep enough, then it lacks the strength to bear a great boat.",
    source: "《莊子》· 逍遙遊",
    explanation: {
      en: "This sentence uses **則** (\"then\") to link a condition to its consequence — the classical ancestor of modern 如果…就…. The first clause nominates a condition: 水之積也不厚 (\"the water's accumulation is not deep\"), where **之** turns 水積 into a noun phrase and **也** marks the topic-comment boundary. The second clause opens with **則** (consequence marker) and uses **其** to refer back to 水 — the tree reveals this cross-reference arc. Notice 則 is an Adjunct modifying the consequence clause, not a conjunction joining two equals.",
      zh: "用**則**连接条件与结果——现代\"如果…就…\"的文言祖先。第一分句提出条件：水之積也不厚（水的积蓄不深），**之**将\"水積\"名词化，**也**标记主题与评论的边界。第二分句以**則**开头，用**其**回指\"水\"。"
    },
    tree: { id: "cc31-root", role: "Sentence", children: [
      { id: "cc31-qf", role: "Adjunct", subRole: "discourse", text: { hanzi: "且夫", pinyin: "qiě fú", translation: "moreover" } },
      { id: "cc31-cond", role: "Topic", subRole: "conditional clause", children: [
        { id: "cc31-topic1", role: "Topic", semanticRole: "Theme", children: [
          { id: "cc31-shui", role: "Attributive", text: { hanzi: "水", pinyin: "shuǐ", translation: "water" } },
          { id: "cc31-zhi1", role: "Particle", subRole: "genitive", text: { hanzi: "之", pinyin: "zhī", translation: "(genitive)" } },
          { id: "cc31-ji", role: "Head Noun", text: { hanzi: "積", pinyin: "jī", translation: "accumulation" } }
        ]},
        { id: "cc31-ye1", role: "Particle", subRole: "topic pause", text: { hanzi: "也", pinyin: "yě", translation: "(pause)" } },
        { id: "cc31-pred1", role: "Comment", children: [
          { id: "cc31-bu", role: "Adjunct", subRole: "negation", text: { hanzi: "不", pinyin: "bù", translation: "not" } },
          { id: "cc31-hou", role: "Head Verb", text: { hanzi: "厚", pinyin: "hòu", translation: "deep/thick" } }
        ]}
      ]},
      { id: "cc31-cons", role: "Comment", children: [
        { id: "cc31-ze", role: "Adjunct", subRole: "conditional consequence", text: { hanzi: "則", pinyin: "zé", translation: "then" } },
        { id: "cc31-qi", role: "Topic", semanticRole: "Theme", refersToId: "cc31-shui", text: { hanzi: "其", pinyin: "qí", translation: "its/it" } },
        { id: "cc31-vp2", role: "Verb Phrase", children: [
          { id: "cc31-fu", role: "Head Verb", text: { hanzi: "負", pinyin: "fù", translation: "bear" } },
          { id: "cc31-obj2", role: "Object", children: [
            { id: "cc31-da", role: "Attributive", text: { hanzi: "大", pinyin: "dà", translation: "great" } },
            { id: "cc31-zhou", role: "Head Noun", text: { hanzi: "舟", pinyin: "zhōu", translation: "boat" } }
          ]}
        ]},
        { id: "cc31-ye2", role: "Particle", subRole: "topic pause", text: { hanzi: "也", pinyin: "yě", translation: "(pause)" } },
        { id: "cc31-pred2", role: "Comment", children: [
          { id: "cc31-wu", role: "Adjunct", subRole: "negation", text: { hanzi: "無", pinyin: "wú", translation: "without" } },
          { id: "cc31-li", role: "Head Verb", text: { hanzi: "力", pinyin: "lì", translation: "strength" } }
        ]}
      ]}
    ]}
  },
  {
    id: "cc32", category: "Classical Conditionals (若/苟/則)",
    chinese: "苟無民，何以有君？",
    pinyin: "Gǒu wú mín, hé yǐ yǒu jūn?",
    modernChinese: "如果没有人民，怎么会有君主呢？",
    translation: "If there were no people, how could there be a ruler?",
    source: "《戰國策》· 齊策",
    explanation: {
      en: "A double showcase: **苟** (conditional \"if\") plus **何以** (fronted object). The first clause uses 苟 to open a hypothetical with no overt topic — \"if there were no people.\" The second clause features classical **object fronting**: 何(what) is the fronted object of 以(by means of), where modern word order would be 以何. The tree shows both the conditional frame and the displacement of 何 to pre-verbal position. This also cross-references the Object Fronting category.",
      zh: "双重展示：**苟**（假设\"如果\"）加**何以**（宾语前置）。第一分句用苟开启假设，无显性话题。第二分句展示文言**宾语前置**：何（什么）前置于以（凭借）之前。"
    },
    tree: { id: "cc32-root", role: "Sentence", children: [
      { id: "cc32-cond", role: "Topic", subRole: "conditional clause", children: [
        { id: "cc32-gou", role: "Adjunct", subRole: "conditional marker", text: { hanzi: "苟", pinyin: "gǒu", translation: "if" } },
        { id: "cc32-wu", role: "Head Verb", text: { hanzi: "無", pinyin: "wú", translation: "there are no" } },
        { id: "cc32-min", role: "Object", text: { hanzi: "民", pinyin: "mín", translation: "people" } }
      ]},
      { id: "cc32-q", role: "Comment", subRole: "rhetorical question", children: [
        { id: "cc32-he", role: "Object", subRole: "fronted interrogative", text: { hanzi: "何", pinyin: "hé", translation: "what/how" } },
        { id: "cc32-yi", role: "Preposition", text: { hanzi: "以", pinyin: "yǐ", translation: "by means of" } },
        { id: "cc32-you", role: "Head Verb", text: { hanzi: "有", pinyin: "yǒu", translation: "have/exist" } },
        { id: "cc32-jun", role: "Object", text: { hanzi: "君", pinyin: "jūn", translation: "ruler" } }
      ]}
    ]}
  },
  {
    id: "cc33", category: "Classical Causatives (使/令)",
    chinese: "秦王使人謂安陵君曰。",
    pinyin: "Qín wáng shǐ rén wèi Ānlíng jūn yuē.",
    modernChinese: "秦王派人对安陵君说。",
    translation: "The King of Qin sent someone to say to Lord Anling.",
    source: "《戰國策》· 趙策",
    explanation: {
      en: "A classic **pivotal construction** using **使** (\"send/cause\"). This is exactly the same structure as modern 妈妈让我去买牛奶 — the person being sent (**人**) is the pivot noun playing two roles: object of 使 and subject of the embedded action. The embedded VP chains two verbs: **謂** (\"say to/address\") takes 安陵君 as its object, then **曰** (\"say/spoke thus\") follows. Cross-reference modern pivotal s32.",
      zh: "经典**兼语式**，用**使**（派遣）。**人**是兼语：既是\"使\"的宾语，又是后续动作的主语。内嵌VP串联两个动词：**謂**（对…说）接宾语安陵君，**曰**（说道）跟随其后。"
    },
    tree: { id: "cc33-root", role: "Sentence", children: [
      { id: "cc33-t", role: "Topic", semanticRole: "Causer", children: [
        { id: "cc33-qin", role: "Attributive", text: { hanzi: "秦", pinyin: "Qín", translation: "Qin" } },
        { id: "cc33-wang", role: "Head Noun", text: { hanzi: "王", pinyin: "wáng", translation: "king" } }
      ]},
      { id: "cc33-c", role: "Comment", children: [
        { id: "cc33-shi", role: "Head Verb", subRole: "causative", text: { hanzi: "使", pinyin: "shǐ", translation: "send/cause" } },
        { id: "cc33-embed", role: "Embedded Clause", children: [
          { id: "cc33-ren", role: "Subject", subRole: "pivot", semanticRole: "Agent", text: { hanzi: "人", pinyin: "rén", translation: "someone" } },
          { id: "cc33-vp", role: "Verb Phrase", subRole: "serial verbs", children: [
            { id: "cc33-wei", role: "Head Verb", text: { hanzi: "謂", pinyin: "wèi", translation: "say to/address" } },
            { id: "cc33-obj", role: "Object", text: { hanzi: "安陵君", pinyin: "Ānlíng jūn", translation: "Lord Anling" } },
            { id: "cc33-yue", role: "Head Verb", text: { hanzi: "曰", pinyin: "yuē", translation: "say/spoke thus" } }
          ]}
        ]}
      ]}
    ]}
  },
  {
    id: "cc34", category: "Classical Conditionals (若/苟/則)",
    chinese: "惑而不從師，其為惑也終不解矣。",
    pinyin: "Huò ér bù cóng shī, qí wéi huò yě zhōng bù jiě yǐ.",
    modernChinese: "有了疑惑却不跟从老师（学习），那些疑惑最终不会解开了。",
    translation: "If one is confused but does not follow a teacher, those confusions will ultimately never be resolved.",
    source: "韓愈《師說》",
    explanation: {
      en: "An **implicit conditional** — no 若/苟/則 marker, but the logical structure is clearly \"if X, then Y.\" The first clause is the condition: 惑(be confused) **而**(contrastive: \"but\") 不從師(not follow a teacher). The second clause is the consequence: **其**(those, referring back to 惑) 為惑也(being confusion) 終不解矣(ultimately never resolved). This gives the Conditionals category a gradient: cc31 (explicit 則), cc32 (苟), cc34 (implicit).",
      zh: "**隐含条件句**——没有若/苟/則标记，但逻辑结构明确是\"如果X，则Y\"。第一分句是条件：惑（困惑）**而**（转折）不從師。第二分句是结果：**其**（回指\"惑\"）為惑也終不解矣。"
    },
    tree: { id: "cc34-root", role: "Sentence", children: [
      { id: "cc34-cond", role: "Topic", subRole: "conditional clause", children: [
        { id: "cc34-ghost", role: "Topic", subRole: "pro-drop", isDropped: true, impliedText: "[人]", semanticRole: "Agent" },
        { id: "cc34-c1", role: "Comment", children: [
          { id: "cc34-huo1", role: "Head Verb", text: { hanzi: "惑", pinyin: "huò", translation: "be confused" } },
          { id: "cc34-er", role: "Adjunct", subRole: "contrastive", text: { hanzi: "而", pinyin: "ér", translation: "but" } },
          { id: "cc34-vp1", role: "Verb Phrase", children: [
            { id: "cc34-bu1", role: "Adjunct", subRole: "negation", text: { hanzi: "不", pinyin: "bù", translation: "not" } },
            { id: "cc34-cong", role: "Head Verb", text: { hanzi: "從", pinyin: "cóng", translation: "follow" } },
            { id: "cc34-shi", role: "Object", text: { hanzi: "師", pinyin: "shī", translation: "teacher" } }
          ]}
        ]}
      ]},
      { id: "cc34-adj", role: "Adjunct", subRole: "implicit conditional", text: { hanzi: "", pinyin: "", translation: "(implicit: then)" } },
      { id: "cc34-cons", role: "Comment", children: [
        { id: "cc34-topic2", role: "Topic", semanticRole: "Theme", children: [
          { id: "cc34-qi", role: "Attributive", refersToId: "cc34-huo1", text: { hanzi: "其", pinyin: "qí", translation: "those" } },
          { id: "cc34-wei", role: "Copula", text: { hanzi: "為", pinyin: "wéi", translation: "being" } },
          { id: "cc34-huo2", role: "Head Noun", text: { hanzi: "惑", pinyin: "huò", translation: "confusions" } }
        ]},
        { id: "cc34-ye", role: "Particle", subRole: "topic pause", text: { hanzi: "也", pinyin: "yě", translation: "(pause)" } },
        { id: "cc34-pred", role: "Comment", children: [
          { id: "cc34-zhong", role: "Adjunct", subRole: "time", text: { hanzi: "終", pinyin: "zhōng", translation: "ultimately" } },
          { id: "cc34-bu2", role: "Adjunct", subRole: "negation", text: { hanzi: "不", pinyin: "bù", translation: "not" } },
          { id: "cc34-jie", role: "Head Verb", text: { hanzi: "解", pinyin: "jiě", translation: "resolve" } },
          { id: "cc34-yi", role: "Particle", subRole: "assertion", text: { hanzi: "矣", pinyin: "yǐ", translation: "(finality)" } }
        ]}
      ]}
    ]}
  },
  {
    id: "cc35", category: "Object Fronting (賓語前置)",
    chinese: "牛馬四足，是謂天。",
    pinyin: "Niú mǎ sì zú, shì wèi tiān.",
    modernChinese: "牛马有四只脚，这叫做天然。",
    translation: "That cattle and horses have four feet — this is called \"natural.\"",
    source: "《莊子》· 秋水",
    explanation: {
      en: "In modern Chinese, **是** means \"is\" — a linking verb. But in classical Chinese, **是** is a **demonstrative pronoun** meaning \"this.\" Here, 是 points back to the entire proposition 牛馬四足 (\"cattle and horses have four feet\") and says: \"**This** is called natural.\" The tree shows 是 sitting in the Object slot *before* the verb 謂, not as a linking verb. This is the most important distinction for learners: classical 是 ≠ modern 是.",
      zh: "现代汉语中**是**是系词（\"是\"），但文言中**是**是**指示代词**（\"这\"）。这里，**是**回指整个命题\"牛馬四足\"，表示\"**这**叫做天然\"。树展示了**是**在动词**謂**前的宾语位置。"
    },
    tree: { id: "cc35-root", role: "Sentence", children: [
      { id: "cc35-t", role: "Topic", semanticRole: "Theme", text: { hanzi: "牛馬四足", pinyin: "niú mǎ sì zú", translation: "cattle and horses have four feet" } },
      { id: "cc35-c", role: "Comment", children: [
        { id: "cc35-shi", role: "Object", subRole: "demonstrative pronoun", refersToId: "cc35-t", text: { hanzi: "是", pinyin: "shì", translation: "this" } },
        { id: "cc35-wei", role: "Head Verb", text: { hanzi: "謂", pinyin: "wèi", translation: "call/name" } },
        { id: "cc35-tian", role: "Complement", text: { hanzi: "天", pinyin: "tiān", translation: "natural/heaven-given" } }
      ]}
    ]}
  },
  {
    id: "cc36", category: "Object Fronting (賓語前置)",
    chinese: "大丈夫不能自食，安能食人？",
    pinyin: "Dà zhàng fū bù néng zì shí, ān néng shí rén?",
    modernChinese: "大丈夫不能养活自己，怎么能养活别人？",
    translation: "If a great man cannot feed himself, how can he feed others?",
    source: "《史記》· 項羽本紀",
    explanation: {
      en: "The tree reveals a **fronted interrogative adverb**: **安** (\"how\") sits at clause-initial position, where modern Chinese would place it after the topic (怎么能…). The parallel structure between clause 1 (不能自食, with 不 in normal position) and clause 2 (安能食人, with 安 fronted) makes the displacement visible by contrast. Note that **安** is the classical ancestor of modern **怎么**.",
      zh: "树揭示了**前置疑问副词**：**安**（\"怎么\"）位于分句开头，现代汉语中它应在主语之后。两个分句的并列结构（不能自食 vs 安能食人）通过对比使前置清晰可见。**安**是现代**怎么**的文言祖先。"
    },
    tree: { id: "cc36-root", role: "Sentence", children: [
      { id: "cc36-t", role: "Topic", semanticRole: "Agent", text: { hanzi: "大丈夫", pinyin: "dà zhàng fū", translation: "great man" } },
      { id: "cc36-c1", role: "Comment", subRole: "thesis clause", children: [
        { id: "cc36-bu", role: "Adjunct", subRole: "negation", text: { hanzi: "不", pinyin: "bù", translation: "not" } },
        { id: "cc36-neng1", role: "Adjunct", subRole: "modal", text: { hanzi: "能", pinyin: "néng", translation: "can" } },
        { id: "cc36-zi", role: "Adjunct", subRole: "reflexive", text: { hanzi: "自", pinyin: "zì", translation: "self" } },
        { id: "cc36-shi1", role: "Head Verb", text: { hanzi: "食", pinyin: "shí", translation: "feed" } }
      ]},
      { id: "cc36-c2", role: "Comment", subRole: "rhetorical question", children: [
        { id: "cc36-an", role: "Adjunct", subRole: "fronted interrogative", text: { hanzi: "安", pinyin: "ān", translation: "how" } },
        { id: "cc36-neng2", role: "Adjunct", subRole: "modal", text: { hanzi: "能", pinyin: "néng", translation: "can" } },
        { id: "cc36-shi2", role: "Head Verb", text: { hanzi: "食", pinyin: "shí", translation: "feed" } },
        { id: "cc36-ren", role: "Object", text: { hanzi: "人", pinyin: "rén", translation: "others" } }
      ]}
    ]}
  },
  {
    id: "cc37", category: "Nominalizers (者/所)",
    chinese: "井蛙不可以語於海者，拘於虛也。",
    pinyin: "Jǐng wā bù kě yǐ yǔ yú hǎi zhě, jū yú xū yě.",
    modernChinese: "井底之蛙不能和它谈论大海，是因为它被狭小的空间所局限。",
    translation: "You cannot discuss the sea with a well-frog — it is confined by its narrow space.",
    source: "《莊子》· 秋水",
    explanation: {
      en: "The **者** nominalizer wraps an entire complex clause into a single Topic node — the FLS Matryoshka Principle in its purest classical form. The clause 井蛙不可以語於海 (\"one cannot discuss the sea with a well-frog\") has its own subject, negation, potential marker, and coverb phrase, all packed inside 者. The Comment 拘於虛也 (\"confined by narrowness\") explains the reason. Note: 者 here means \"the fact/reason that\" — distinct from cc38's conditional/generic 者.",
      zh: "**者**名词化标记将整个复杂从句包裹成单一话题节点。从句\"井蛙不可以語於海\"有自己的主语、否定、能愿和介词短语，全部打包在**者**里面。评论\"拘於虛也\"解释原因。注意：这里的**者**表示\"……的原因\"，与cc38的条件/泛指用法不同。"
    },
    tree: { id: "cc37-root", role: "Sentence", children: [
      { id: "cc37-t", role: "Topic", semanticRole: "Theme", children: [
        { id: "cc37-subj", role: "Subject", text: { hanzi: "井蛙", pinyin: "jǐng wā", translation: "well-frog" } },
        { id: "cc37-vp", role: "Verb Phrase", children: [
          { id: "cc37-bu", role: "Adjunct", subRole: "negation", text: { hanzi: "不", pinyin: "bù", translation: "not" } },
          { id: "cc37-keyi", role: "Adjunct", subRole: "modal", text: { hanzi: "可以", pinyin: "kě yǐ", translation: "can" } },
          { id: "cc37-yu", role: "Head Verb", text: { hanzi: "語", pinyin: "yǔ", translation: "discuss" } },
          { id: "cc37-pp", role: "Adjunct", subRole: "location", text: { hanzi: "於海", pinyin: "yú hǎi", translation: "about the sea" } }
        ]},
        { id: "cc37-zhe", role: "Particle", subRole: "nominalizer", text: { hanzi: "者", pinyin: "zhě", translation: "(the reason that)" } }
      ]},
      { id: "cc37-c", role: "Comment", children: [
        { id: "cc37-ju", role: "Head Verb", text: { hanzi: "拘", pinyin: "jū", translation: "confined" } },
        { id: "cc37-pp2", role: "Adjunct", subRole: "location", text: { hanzi: "於虛", pinyin: "yú xū", translation: "by narrowness" } },
        { id: "cc37-ye", role: "Particle", subRole: "assertion", text: { hanzi: "也", pinyin: "yě", translation: "(assertion)" } }
      ]}
    ]}
  },
  {
    id: "cc38", category: "Nominalizers (者/所)",
    chinese: "欲治其國者，先齊其家。",
    pinyin: "Yù zhì qí guó zhě, xiān qí qí jiā.",
    modernChinese: "想要治理好国家的人，要先管理好自己的家。",
    translation: "Whoever wishes to govern their state must first regulate their family.",
    source: "《禮記》· 大學",
    explanation: {
      en: "Here **者** does NOT mean \"the person who\" (definite) — it means \"whoever/if one\" (generic conditional). The tree looks structurally identical to other 者-nominalized Topics, but the `subRole: conditional nominalizer` marks the different semantic function. Both **其** pronouns (其國, 其家) refer back to the generic person denoted by the 者-Topic — the tree renders these co-reference arcs. Compare cc37-者 (fact/reason) with cc38-者 (conditional/generic).",
      zh: "这里**者**不是\"……的人\"（定指），而是\"凡是……的人/如果有人\"（泛指条件）。树的结构与其他者字句相同，但`subRole: conditional nominalizer`标记了不同的语义功能。两个**其**（其國、其家）都回指者字话题中的泛指之人。"
    },
    tree: { id: "cc38-root", role: "Sentence", children: [
      { id: "cc38-t", role: "Topic", semanticRole: "Agent", children: [
        { id: "cc38-yu", role: "Adjunct", subRole: "modal", text: { hanzi: "欲", pinyin: "yù", translation: "wish to" } },
        { id: "cc38-zhi", role: "Head Verb", text: { hanzi: "治", pinyin: "zhì", translation: "govern" } },
        { id: "cc38-obj1", role: "Object", children: [
          { id: "cc38-qi1", role: "Attributive", refersToId: "cc38-t", text: { hanzi: "其", pinyin: "qí", translation: "their" } },
          { id: "cc38-guo", role: "Head Noun", text: { hanzi: "國", pinyin: "guó", translation: "state" } }
        ]},
        { id: "cc38-zhe", role: "Particle", subRole: "conditional nominalizer", text: { hanzi: "者", pinyin: "zhě", translation: "(whoever)" } }
      ]},
      { id: "cc38-c", role: "Comment", children: [
        { id: "cc38-xian", role: "Adjunct", subRole: "sequence", text: { hanzi: "先", pinyin: "xiān", translation: "first" } },
        { id: "cc38-qi2", role: "Head Verb", text: { hanzi: "齊", pinyin: "qí", translation: "regulate/order" } },
        { id: "cc38-obj2", role: "Object", children: [
          { id: "cc38-qi3", role: "Attributive", refersToId: "cc38-t", text: { hanzi: "其", pinyin: "qí", translation: "their" } },
          { id: "cc38-jia", role: "Head Noun", text: { hanzi: "家", pinyin: "jiā", translation: "family" } }
        ]}
      ]}
    ]}
  }
];

data.push(...newSentences);
fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n');
console.log(`✅ Appended ${newSentences.length} sentences (cc31-cc38). Total: ${data.length}`);
