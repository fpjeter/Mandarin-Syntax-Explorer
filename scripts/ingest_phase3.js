import fs from 'fs';
const filePath = 'src/data/modern_sentences.json';
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

const newSentences = [
  {
    id: "s128", category: "BEI Passive (被字句)",
    chinese: "他被老板骂得不敢说话。",
    pinyin: "Tā bèi lǎo bǎn mà de bù gǎn shuō huà.",
    translation: "He was scolded by the boss so badly that he didn't dare speak.",
    explanation: {
      en: "This sentence layers two key structures: a **被 passive** and a **degree complement**. The topic 他 is the person affected, and 被 introduces the agent 老板. The verb 骂 (\"scold\") then leads into a 得-complement that describes *how badly* it went: 不敢说话 (\"didn't dare speak\"). In the tree, you'll see the complement clause nesting inside the passive frame.",
      zh: "这句话结合了**被动句**和**程度补语**两种结构。话题**他**是受影响的人，**被**引出施事者**老板**。动词**骂**后接**得**补语，描述结果有多严重：**不敢说话**。树展示了补语从句嵌套在被动框架中的结构。"
    },
    tree: { id: "s128-root", role: "Sentence", children: [
      { id: "s128-t", role: "Topic", semanticRole: "Patient", text: { hanzi: "他", pinyin: "tā", translation: "he" } },
      { id: "s128-c", role: "Comment", children: [
        { id: "s128-bei", role: "Head Verb", subRole: "passive marker", text: { hanzi: "被", pinyin: "bèi", translation: "undergo" } },
        { id: "s128-embed", role: "Embedded Clause", children: [
          { id: "s128-agent", role: "Subject", subRole: "agent", semanticRole: "Agent", text: { hanzi: "老板", pinyin: "lǎo bǎn", translation: "boss" } },
          { id: "s128-vp", role: "Verb Phrase", children: [
            { id: "s128-hv", role: "Head Verb", text: { hanzi: "骂", pinyin: "mà", translation: "scold" } },
            { id: "s128-de", role: "Particle", subRole: "degree marker", text: { hanzi: "得", pinyin: "de", translation: "(degree)" } },
            { id: "s128-comp", role: "Complement", subRole: "degree", children: [
              { id: "s128-neg", role: "Adjunct", subRole: "negation", text: { hanzi: "不", pinyin: "bù", translation: "not" } },
              { id: "s128-modal", role: "Adjunct", subRole: "modal", text: { hanzi: "敢", pinyin: "gǎn", translation: "dare" } },
              { id: "s128-hv2", role: "Head Verb", text: { hanzi: "说话", pinyin: "shuō huà", translation: "speak" } }
            ]}
          ]}
        ]}
      ]}
    ]}
  },
  {
    id: "s129", category: "Even (连…都/也)",
    chinese: "她连他叫什么名字都不记得了。",
    pinyin: "Tā lián tā jiào shén me míng zi dōu bú jì de le.",
    translation: "She can't even remember what his name is.",
    explanation: {
      en: "Most 连…都 sentences emphasize a single noun. But here, the 连 bracket wraps an **entire embedded clause**: 他叫什么名字 (\"what his name is\"). The tree shows this dramatically — the 连 node contains a full topic-comment structure inside it.",
      zh: "大多数**连…都**句子强调单个名词。但这里，**连**括住了**整个嵌入从句**：**他叫什么名字**。树清楚地展示了这一点——**连**节点内包含完整的主谓结构。"
    },
    tree: { id: "s129-root", role: "Sentence", children: [
      { id: "s129-t", role: "Topic", semanticRole: "Experiencer", text: { hanzi: "她", pinyin: "tā", translation: "she" } },
      { id: "s129-c", role: "Comment", subRole: "连…都… (even X)", children: [
        { id: "s129-lian", role: "Adjunct", subRole: "scope", text: { hanzi: "连", pinyin: "lián", translation: "even" } },
        { id: "s129-clause", role: "Embedded Clause", subRole: "emphasized extreme case", children: [
          { id: "s129-he", role: "Topic", text: { hanzi: "他", pinyin: "tā", translation: "he" } },
          { id: "s129-ic", role: "Comment", children: [
            { id: "s129-jiao", role: "Head Verb", text: { hanzi: "叫", pinyin: "jiào", translation: "be called" } },
            { id: "s129-obj", role: "Object", children: [
              { id: "s129-sm", role: "Attributive", text: { hanzi: "什么", pinyin: "shén me", translation: "what" } },
              { id: "s129-mz", role: "Head Noun", text: { hanzi: "名字", pinyin: "míng zi", translation: "name" } }
            ]}
          ]}
        ]},
        { id: "s129-dou", role: "Adjunct", subRole: "scope", text: { hanzi: "都", pinyin: "dōu", translation: "even/all" } },
        { id: "s129-vp", role: "Verb Phrase", children: [
          { id: "s129-neg", role: "Adjunct", subRole: "negation", text: { hanzi: "不", pinyin: "bú", translation: "not" } },
          { id: "s129-hv", role: "Head Verb", text: { hanzi: "记得", pinyin: "jì de", translation: "remember" } },
          { id: "s129-le", role: "Particle", subRole: "aspect marker", text: { hanzi: "了", pinyin: "le", translation: "(change of state)" } }
        ]}
      ]}
    ]}
  },
  {
    id: "s130", category: "Double Topic (双主题)",
    chinese: "那本书，作者是在北京写的。",
    pinyin: "Nà běn shū, zuò zhě shì zài Běi jīng xiě de.",
    translation: "That book — the author wrote it in Beijing.",
    explanation: {
      en: "This sentence stacks two patterns: a **double topic** and a **是…的 focus**. The outer Topic is 那本书 (\"that book\"), setting the frame. The inner Topic is 作者 (\"the author\"). Then the comment uses 是…的 to spotlight *where* the writing happened: 在北京.",
      zh: "这句话叠加了**双主题**和**是…的聚焦**两种结构。外层话题是**那本书**，设定大框架。内层话题是**作者**。评论部分用**是…的**聚焦写作地点：**在北京**。"
    },
    tree: { id: "s130-root", role: "Sentence", children: [
      { id: "s130-t1", role: "Topic", subRole: "outer topic", semanticRole: "Theme", children: [
        { id: "s130-attr", role: "Attributive", text: { hanzi: "那本", pinyin: "nà běn", translation: "that (measure)" } },
        { id: "s130-hn", role: "Head Noun", text: { hanzi: "书", pinyin: "shū", translation: "book" } }
      ]},
      { id: "s130-c", role: "Comment", children: [
        { id: "s130-t2", role: "Topic", subRole: "inner topic", semanticRole: "Agent", text: { hanzi: "作者", pinyin: "zuò zhě", translation: "author" } },
        { id: "s130-ic", role: "Comment", subRole: "是…的 focus", children: [
          { id: "s130-shi", role: "Copula", text: { hanzi: "是", pinyin: "shì", translation: "is" } },
          { id: "s130-loc", role: "Adjunct", subRole: "location", text: { hanzi: "在北京", pinyin: "zài Běi jīng", translation: "in Beijing" } },
          { id: "s130-hv", role: "Head Verb", text: { hanzi: "写", pinyin: "xiě", translation: "write" } },
          { id: "s130-de", role: "Particle", subRole: "是…的 focus marker", text: { hanzi: "的", pinyin: "de", translation: "(focus)" } }
        ]}
      ]}
    ]}
  },
  {
    id: "s131", category: "Potential Complements (可能补语)",
    chinese: "这个箱子太重了，我一个人搬不上去。",
    pinyin: "Zhè ge xiāng zi tài zhòng le, wǒ yí ge rén bān bú shàng qù.",
    translation: "This box is too heavy — I can't carry it upstairs by myself.",
    explanation: {
      en: "The interesting part is the **three-layer complement stack**: the verb 搬 (\"carry\"), then 不 (\"cannot\"), then the direction 上 (\"up\"), then 去 (\"away from speaker\"). Each layer adds meaning: carry — cannot — upward — away.",
      zh: "有趣的是**三层补语叠加**：动词**搬**，然后**不**（不能），然后方向**上**（向上），然后**去**（离开说话者）。每层都增加意义。"
    },
    tree: { id: "s131-root", role: "Sentence", children: [
      { id: "s131-c1", role: "Topic", subRole: "clause 1", children: [
        { id: "s131-t1", role: "Topic", semanticRole: "Theme", children: [
          { id: "s131-dem", role: "Attributive", text: { hanzi: "这个", pinyin: "zhè ge", translation: "this" } },
          { id: "s131-hn1", role: "Head Noun", text: { hanzi: "箱子", pinyin: "xiāng zi", translation: "box" } }
        ]},
        { id: "s131-pred1", role: "Comment", children: [
          { id: "s131-adv", role: "Adjunct", subRole: "degree", text: { hanzi: "太", pinyin: "tài", translation: "too" } },
          { id: "s131-adj", role: "Head Verb", text: { hanzi: "重", pinyin: "zhòng", translation: "heavy" } },
          { id: "s131-le", role: "Particle", subRole: "aspect marker", text: { hanzi: "了", pinyin: "le", translation: "(excessive)" } }
        ]}
      ]},
      { id: "s131-c2", role: "Comment", children: [
        { id: "s131-t2", role: "Topic", semanticRole: "Agent", children: [
          { id: "s131-wo", role: "Pronoun", text: { hanzi: "我", pinyin: "wǒ", translation: "I" } },
          { id: "s131-ygr", role: "Adjunct", subRole: "manner", text: { hanzi: "一个人", pinyin: "yí ge rén", translation: "alone" } }
        ]},
        { id: "s131-vp", role: "Verb Phrase", children: [
          { id: "s131-hv", role: "Head Verb", text: { hanzi: "搬", pinyin: "bān", translation: "carry" } },
          { id: "s131-bu", role: "Particle", subRole: "impossibility", text: { hanzi: "不", pinyin: "bú", translation: "(cannot)" } },
          { id: "s131-comp1", role: "Complement", subRole: "directional", text: { hanzi: "上", pinyin: "shàng", translation: "up" } },
          { id: "s131-comp2", role: "Complement", subRole: "directional", text: { hanzi: "去", pinyin: "qù", translation: "away" } }
        ]}
      ]}
    ]}
  },
  {
    id: "s132", category: "BEI Passive (被字句)",
    chinese: "我昨天被偷了一个手机。",
    pinyin: "Wǒ zuó tiān bèi tōu le yí ge shǒu jī.",
    translation: "Yesterday I had a phone stolen (from me).",
    explanation: {
      en: "In most 被 sentences, the thing affected sits at the front as the Topic. But here, **the person** (我) is the topic, and the thing stolen (手机) stays *after* the verb as a **retained object**. The tree makes this visible: 我 is the *experiencer*, not the thing stolen.",
      zh: "大多数**被**字句中，受影响的事物作为话题放在前面。但这里，**人**（我）是话题，被偷的东西（手机）作为**保留宾语**留在动词后面。"
    },
    tree: { id: "s132-root", role: "Sentence", children: [
      { id: "s132-t", role: "Topic", semanticRole: "Experiencer", text: { hanzi: "我", pinyin: "wǒ", translation: "I" } },
      { id: "s132-c", role: "Comment", children: [
        { id: "s132-time", role: "Adjunct", subRole: "time", text: { hanzi: "昨天", pinyin: "zuó tiān", translation: "yesterday" } },
        { id: "s132-bei", role: "Head Verb", subRole: "passive marker", text: { hanzi: "被", pinyin: "bèi", translation: "undergo" } },
        { id: "s132-embed", role: "Embedded Clause", children: [
          { id: "s132-ghost", role: "Topic", subRole: "implied topic", semanticRole: "Agent", isDropped: true, impliedText: "[有人]" },
          { id: "s132-vp", role: "Verb Phrase", children: [
            { id: "s132-hv", role: "Head Verb", text: { hanzi: "偷", pinyin: "tōu", translation: "steal" } },
            { id: "s132-le", role: "Particle", subRole: "aspect marker", text: { hanzi: "了", pinyin: "le", translation: "(completion)" } },
            { id: "s132-obj", role: "Object", subRole: "retained object", semanticRole: "Patient", children: [
              { id: "s132-mw", role: "Measure Word", text: { hanzi: "一个", pinyin: "yí ge", translation: "one" } },
              { id: "s132-hn", role: "Head Noun", text: { hanzi: "手机", pinyin: "shǒu jī", translation: "phone" } }
            ]}
          ]}
        ]}
      ]}
    ]}
  },
  {
    id: "s133", category: "BA Construction (把字句)",
    chinese: "她不小心把杯子打碎了。",
    pinyin: "Tā bù xiǎo xīn bǎ bēi zi dǎ suì le.",
    translation: "She accidentally broke the glass (into pieces).",
    explanation: {
      en: "This sentence combines the **把** disposal construction and a **resultative complement**. The verb phrase **打碎** is a verb-result compound: **打** (\"hit\") is the action, and **碎** (\"shattered\") is the result. The adverb **不小心** (\"carelessly\") sits before 把 as an Adjunct.",
      zh: "这句话结合了**把字句**和**结果补语**。动词短语**打碎**是动补结构：**打**是动作，**碎**是结果。副词**不小心**作为状语放在**把**前面。"
    },
    tree: { id: "s133-root", role: "Sentence", children: [
      { id: "s133-t", role: "Topic", semanticRole: "Agent", text: { hanzi: "她", pinyin: "tā", translation: "she" } },
      { id: "s133-c", role: "Comment", children: [
        { id: "s133-adv", role: "Adjunct", subRole: "manner", text: { hanzi: "不小心", pinyin: "bù xiǎo xīn", translation: "carelessly" } },
        { id: "s133-ba", role: "Head Verb", subRole: "disposal marker", text: { hanzi: "把", pinyin: "bǎ", translation: "take hold of" } },
        { id: "s133-embed", role: "Embedded Clause", children: [
          { id: "s133-inner-t", role: "Topic", semanticRole: "Patient", text: { hanzi: "杯子", pinyin: "bēi zi", translation: "glass/cup" } },
          { id: "s133-inner-c", role: "Comment", children: [
            { id: "s133-hv", role: "Head Verb", text: { hanzi: "打", pinyin: "dǎ", translation: "hit" } },
            { id: "s133-comp", role: "Complement", subRole: "resultative", text: { hanzi: "碎", pinyin: "suì", translation: "shattered" } },
            { id: "s133-le", role: "Particle", subRole: "aspect marker", text: { hanzi: "了", pinyin: "le", translation: "(completion)" } }
          ]}
        ]}
      ]}
    ]}
  },
  {
    id: "s134", category: "Resultative Complements (结果补语)",
    chinese: "她走累了，坐下来休息。",
    pinyin: "Tā zǒu lèi le, zuò xià lái xiū xi.",
    translation: "She walked until she was tired, then sat down to rest.",
    explanation: {
      en: "This sentence chains two verb-result pairs. In the first clause, **走** (\"walk\") + **累** (\"tired\") means she walked so much she became tired. In the second, **坐** (\"sit\") + **下来** (\"down\") is a directional complement, followed by the purpose verb **休息** (\"rest\").",
      zh: "这句话串联了两个动补结构。第一个分句：**走**+**累**表示走到累了。第二个分句：**坐**+**下来**是趋向补语，后接目的动词**休息**。"
    },
    tree: { id: "s134-root", role: "Sentence", children: [
      { id: "s134-t", role: "Topic", semanticRole: "Agent", text: { hanzi: "她", pinyin: "tā", translation: "she" } },
      { id: "s134-c", role: "Comment", subRole: "sequential clauses", children: [
        { id: "s134-vp1", role: "Verb Phrase", subRole: "clause 1", children: [
          { id: "s134-hv1", role: "Head Verb", text: { hanzi: "走", pinyin: "zǒu", translation: "walk" } },
          { id: "s134-comp1", role: "Complement", subRole: "resultative", text: { hanzi: "累", pinyin: "lèi", translation: "tired" } },
          { id: "s134-le", role: "Particle", subRole: "aspect marker", text: { hanzi: "了", pinyin: "le", translation: "(completion)" } }
        ]},
        { id: "s134-vp2", role: "Verb Phrase", subRole: "clause 2", children: [
          { id: "s134-hv2", role: "Head Verb", text: { hanzi: "坐", pinyin: "zuò", translation: "sit" } },
          { id: "s134-comp2", role: "Complement", subRole: "directional", text: { hanzi: "下来", pinyin: "xià lái", translation: "down" } },
          { id: "s134-hv3", role: "Head Verb", subRole: "purpose", text: { hanzi: "休息", pinyin: "xiū xi", translation: "rest" } }
        ]}
      ]}
    ]}
  },
  {
    id: "s135", category: "Double Topic (双主题)",
    chinese: "这个人，脾气倒是挺好的。",
    pinyin: "Zhè ge rén, pí qi dào shì tǐng hǎo de.",
    translation: "This person — their temper, actually, is quite good.",
    explanation: {
      en: "A double topic sentence with a contrastive twist. The outer Topic **这个人** sets the frame. The inner Topic **脾气** (\"temper\") narrows focus. The adverb **倒是** (\"actually\") signals surprise — perhaps the speaker expected a bad temper.",
      zh: "带有对比转折的双主题句。外层话题**这个人**设定大框架。内层话题**脾气**聚焦具体方面。副词**倒是**表示出乎意料。"
    },
    tree: { id: "s135-root", role: "Sentence", children: [
      { id: "s135-t1", role: "Topic", subRole: "outer topic", semanticRole: "Theme", text: { hanzi: "这个人", pinyin: "zhè ge rén", translation: "this person" } },
      { id: "s135-c", role: "Comment", children: [
        { id: "s135-t2", role: "Topic", subRole: "inner topic", semanticRole: "Theme", text: { hanzi: "脾气", pinyin: "pí qi", translation: "temper" } },
        { id: "s135-ic", role: "Comment", subRole: "contrastive", children: [
          { id: "s135-ds", role: "Adjunct", subRole: "concession", text: { hanzi: "倒是", pinyin: "dào shì", translation: "actually" } },
          { id: "s135-deg", role: "Adjunct", subRole: "degree", text: { hanzi: "挺", pinyin: "tǐng", translation: "quite" } },
          { id: "s135-hv", role: "Head Verb", text: { hanzi: "好", pinyin: "hǎo", translation: "good" } },
          { id: "s135-de", role: "Particle", text: { hanzi: "的", pinyin: "de", translation: "(nominalizer)" } }
        ]}
      ]}
    ]}
  },
  {
    id: "s136", category: "Potential Complements (可能补语)",
    chinese: "这种病治不好。",
    pinyin: "Zhè zhǒng bìng zhì bù hǎo.",
    translation: "This kind of illness can't be cured.",
    explanation: {
      en: "A \"subjectless potential complement\": the Topic is not the doer but the *thing acted upon*. **这种病** is the patient — the illness that gets treated. The agent is completely absent. The verb phrase **治不好** splits into: 治 (\"treat\") + 不 (impossibility) + 好 (\"cured\").",
      zh: "**无主语可能补语**：话题不是施事者而是*受事者*。**这种病**是患者——被治疗的疾病。施事者完全省略。动词短语**治不好**拆分为：治（治疗）+ 不（不可能）+ 好（治愈）。"
    },
    tree: { id: "s136-root", role: "Sentence", children: [
      { id: "s136-t", role: "Topic", semanticRole: "Patient", children: [
        { id: "s136-attr", role: "Attributive", text: { hanzi: "这种", pinyin: "zhè zhǒng", translation: "this kind of" } },
        { id: "s136-hn", role: "Head Noun", text: { hanzi: "病", pinyin: "bìng", translation: "illness" } }
      ]},
      { id: "s136-c", role: "Comment", children: [
        { id: "s136-hv", role: "Head Verb", text: { hanzi: "治", pinyin: "zhì", translation: "treat/cure" } },
        { id: "s136-bu", role: "Particle", subRole: "impossibility", text: { hanzi: "不", pinyin: "bù", translation: "(cannot)" } },
        { id: "s136-comp", role: "Complement", subRole: "resultative", text: { hanzi: "好", pinyin: "hǎo", translation: "well/cured" } }
      ]}
    ]}
  },
  {
    id: "s137", category: "BEI Passive (被字句)",
    chinese: "我的手机被弟弟给摔坏了。",
    pinyin: "Wǒ de shǒu jī bèi dì di gěi shuāi huài le.",
    translation: "My phone was broken by my little brother (he dropped and broke it).",
    explanation: {
      en: "This adds a layer to the standard BEI passive: the colloquial **给** insertion. Speakers insert 给 between the agent and verb for emphasis or indignation. **被** opens the passive, **弟弟** is the agent, **给** adds emphasis, and **摔坏** (\"drop-break\") is a resultative compound.",
      zh: "在标准**被**字句基础上增加了口语化的**给**插入。说话者在施事者和动词之间插入**给**以增加强调或愤慨语气。**被**开启被动，**弟弟**是施事者，**给**增强语气，**摔坏**是动补结构。"
    },
    tree: { id: "s137-root", role: "Sentence", children: [
      { id: "s137-t", role: "Topic", semanticRole: "Patient", children: [
        { id: "s137-attr", role: "Attributive", text: { hanzi: "我的", pinyin: "wǒ de", translation: "my" } },
        { id: "s137-hn", role: "Head Noun", text: { hanzi: "手机", pinyin: "shǒu jī", translation: "phone" } }
      ]},
      { id: "s137-c", role: "Comment", children: [
        { id: "s137-bei", role: "Head Verb", subRole: "passive marker", text: { hanzi: "被", pinyin: "bèi", translation: "undergo" } },
        { id: "s137-embed", role: "Embedded Clause", children: [
          { id: "s137-agent", role: "Subject", subRole: "agent", semanticRole: "Agent", text: { hanzi: "弟弟", pinyin: "dì di", translation: "little brother" } },
          { id: "s137-gei", role: "Adjunct", subRole: "scope", text: { hanzi: "给", pinyin: "gěi", translation: "(emphatic)" } },
          { id: "s137-vp", role: "Verb Phrase", children: [
            { id: "s137-hv", role: "Head Verb", text: { hanzi: "摔", pinyin: "shuāi", translation: "drop/fall" } },
            { id: "s137-comp", role: "Complement", subRole: "resultative", text: { hanzi: "坏", pinyin: "huài", translation: "broken" } },
            { id: "s137-le", role: "Particle", subRole: "aspect marker", text: { hanzi: "了", pinyin: "le", translation: "(completion)" } }
          ]}
        ]}
      ]}
    ]}
  }
];

data.push(...newSentences);
fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n');
console.log(`✅ Appended ${newSentences.length} sentences (s128-s137). Total: ${data.length}`);
