import fs from 'fs';
const filePath = 'src/data/classical_sentences.json';
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

const newSentences = [
  {
    id: "cc39", category: "Topic-Comment (主題)",
    chinese: "民為貴，社稷次之，君為輕。",
    pinyin: "Mín wéi guì, shè jì cì zhī, jūn wéi qīng.",
    modernChinese: "人民是最重要的，国家次之，君主最轻。",
    translation: "The people are the most important; the state comes next; the ruler is the least.",
    source: "《孟子》· 盡心下",
    explanation: {
      en: "Triple parallel topic-comment with descending hierarchy. **為** here functions as a **quasi-copula** meaning \"counts as\" or \"is valued as.\" Do NOT confuse it with modern 为 (wèi, \"for/because\"). Classical 為 has at least three readings: (1) copula \"is/counts as\" (this sentence), (2) transformative \"become\" (cc40), and (3) passive marker (cc41). The tree creates a three-way mirror structure — all three clauses share identical architecture but with contrastive content.",
      zh: "三重并列主题评论句，等级递降。**為**在这里是**准系词**，意为\"算作\"\"被视为\"。不要混淆为现代\"为\"（wèi，\"为了/因为\"）。文言**為**至少有三种用法：(1) 系词\"是\"（本句），(2) 变化\"成为\"（cc40），(3) 被动标记（cc41）。"
    },
    tree: { id: "cc39-root", role: "Sentence", children: [
      { id: "cc39-c1", role: "Comment", subRole: "clause 1", children: [
        { id: "cc39-min", role: "Topic", semanticRole: "Theme", text: { hanzi: "民", pinyin: "mín", translation: "people" } },
        { id: "cc39-wei1", role: "Copula", subRole: "quasi-copula", text: { hanzi: "為", pinyin: "wéi", translation: "counts as" } },
        { id: "cc39-gui", role: "Predicate", text: { hanzi: "貴", pinyin: "guì", translation: "most important" } }
      ]},
      { id: "cc39-c2", role: "Comment", subRole: "clause 2", children: [
        { id: "cc39-sheji", role: "Topic", semanticRole: "Theme", text: { hanzi: "社稷", pinyin: "shè jì", translation: "state/altars" } },
        { id: "cc39-ci", role: "Head Verb", text: { hanzi: "次", pinyin: "cì", translation: "comes next to" } },
        { id: "cc39-zhi", role: "Object", subRole: "anaphoric pronoun", refersToId: "cc39-min", text: { hanzi: "之", pinyin: "zhī", translation: "them" } }
      ]},
      { id: "cc39-c3", role: "Comment", subRole: "clause 3", children: [
        { id: "cc39-jun", role: "Topic", semanticRole: "Theme", text: { hanzi: "君", pinyin: "jūn", translation: "ruler" } },
        { id: "cc39-wei2", role: "Copula", subRole: "quasi-copula", text: { hanzi: "為", pinyin: "wéi", translation: "counts as" } },
        { id: "cc39-qing", role: "Predicate", text: { hanzi: "輕", pinyin: "qīng", translation: "least important" } }
      ]}
    ]}
  },
  {
    id: "cc40", category: "Topic-Comment (主題)",
    chinese: "蒹葭蒼蒼，白露為霜。",
    pinyin: "Jiān jiā cāng cāng, bái lù wéi shuāng.",
    modernChinese: "芦苇茂盛苍翠，白色的露水已凝结为霜。",
    translation: "The reeds are lush and green; the white dew has turned to frost.",
    source: "《詩經》· 國風 · 秦風 · 蒹葭",
    explanation: {
      en: "Two image-clauses in antithetical parallelism. Clause 1 is the purest form of classical predication: the reduplicated adjective **蒼蒼** (\"lush green\") IS the Comment — no verb, no copula, nothing. Classical Chinese can predicate with a bare adjective. Clause 2 uses **為** in its transformative sense (\"become\"): 白露為霜 = \"the white dew has become frost.\" The tree reveals that clause 1 has NO Head Verb — a Comment containing only a Predicate node.",
      zh: "两个意象分句构成对偶。第一分句是最纯粹的文言谓语形式：叠音形容词**蒼蒼**本身就是评论——没有动词，没有系词。第二分句用**為**的变化义（\"成为\"）：白露為霜。树清晰展示第一分句没有Head Verb——评论只含一个Predicate节点。"
    },
    tree: { id: "cc40-root", role: "Sentence", children: [
      { id: "cc40-c1", role: "Comment", subRole: "clause 1", children: [
        { id: "cc40-jj", role: "Topic", semanticRole: "Theme", text: { hanzi: "蒹葭", pinyin: "jiān jiā", translation: "reeds" } },
        { id: "cc40-cc", role: "Predicate", subRole: "reduplicated stative", text: { hanzi: "蒼蒼", pinyin: "cāng cāng", translation: "lush and green" } }
      ]},
      { id: "cc40-c2", role: "Comment", subRole: "clause 2", children: [
        { id: "cc40-bl", role: "Topic", semanticRole: "Theme", children: [
          { id: "cc40-bai", role: "Attributive", text: { hanzi: "白", pinyin: "bái", translation: "white" } },
          { id: "cc40-lu", role: "Head Noun", text: { hanzi: "露", pinyin: "lù", translation: "dew" } }
        ]},
        { id: "cc40-wei", role: "Head Verb", subRole: "transformative", text: { hanzi: "為", pinyin: "wéi", translation: "become" } },
        { id: "cc40-shuang", role: "Complement", subRole: "resultative", text: { hanzi: "霜", pinyin: "shuāng", translation: "frost" } }
      ]}
    ]}
  },
  {
    id: "cc41", category: "Classical Passive (為…所…)",
    chinese: "信為人所笑。",
    pinyin: "Xìn wéi rén suǒ xiào.",
    modernChinese: "韩信被人嘲笑。",
    translation: "[Han] Xin was laughed at by others.",
    source: "《史記》· 淮陰侯列傳",
    explanation: {
      en: "The **為…所…** passive has three layers: (1) **為** opens the passive frame (like modern 被), (2) **人** is the agent, (3) **所** wraps the verb into a nominalized VP — \"the laughing-at.\" This extra 所-layer has no modern equivalent; 被 passives skip it entirely. The tree shows 所 as a distinct nominalizer node wrapping 笑, revealing the layer that disappears in modern Chinese. Cross-reference cc37 (者-nominalization) and modern BEI sentences (s128, s132) to see the evolutionary chain: classical 為…所… → modern 被.",
      zh: "**為…所…**被动有三层：(1)**為**开启被动框架（类似现代\"被\"），(2)**人**是施事者，(3)**所**将动词名词化——\"所笑\"=\"被嘲笑的事\"。这层**所**在现代汉语中已消失。树展示**所**作为独立名词化节点包裹**笑**。参见cc37（者字句）和现代被字句（s128, s132）。"
    },
    tree: { id: "cc41-root", role: "Sentence", children: [
      { id: "cc41-t", role: "Topic", semanticRole: "Patient", text: { hanzi: "信", pinyin: "Xìn", translation: "[Han] Xin" } },
      { id: "cc41-c", role: "Comment", children: [
        { id: "cc41-wei", role: "Head Verb", subRole: "passive marker", text: { hanzi: "為", pinyin: "wéi", translation: "undergo" } },
        { id: "cc41-embed", role: "Embedded Clause", children: [
          { id: "cc41-ren", role: "Subject", subRole: "agent", semanticRole: "Agent", text: { hanzi: "人", pinyin: "rén", translation: "others" } },
          { id: "cc41-suo-vp", role: "Verb Phrase", children: [
            { id: "cc41-suo", role: "Particle", subRole: "nominalizer", text: { hanzi: "所", pinyin: "suǒ", translation: "(that which)" } },
            { id: "cc41-xiao", role: "Head Verb", text: { hanzi: "笑", pinyin: "xiào", translation: "laugh at" } }
          ]}
        ]}
      ]}
    ]}
  },
  {
    id: "cc42", category: "Classical Conditionals (若/苟/則)",
    chinese: "若亡鄭而有益於君，敢以煩執事。",
    pinyin: "Ruò wáng Zhèng ér yǒu yì yú jūn, gǎn yǐ fán zhí shì.",
    modernChinese: "如果灭亡郑国对您有好处，那我岂敢来麻烦您。",
    translation: "If destroying Zheng would benefit you, would I dare to trouble your office with this?",
    source: "《左傳》· 僖公三十年",
    explanation: {
      en: "This synthesis sentence layers THREE classical patterns: (1) **若**-conditional frame, (2) **而**-sequential linking two VPs inside the condition, and (3) **於**-coverb phrase for the benefactive. From the famous 燭之武退秦師 passage. Each layer is a pattern learners have already seen individually — this proves they compose. The implicit ghost 我 in clause 2 follows pro-drop convention.",
      zh: "这个综合句叠加了三种文言句式：(1)**若**条件框架，(2)**而**顺承连接条件内的两个VP，(3)**於**介词短语表示受益者。出自著名的《燭之武退秦師》。每个层次都是学习者已单独见过的——这证明它们可以组合。"
    },
    tree: { id: "cc42-root", role: "Sentence", children: [
      { id: "cc42-cond", role: "Topic", subRole: "conditional clause", children: [
        { id: "cc42-ruo", role: "Adjunct", subRole: "conditional marker", text: { hanzi: "若", pinyin: "ruò", translation: "if" } },
        { id: "cc42-vp1", role: "Verb Phrase", children: [
          { id: "cc42-wang", role: "Head Verb", text: { hanzi: "亡", pinyin: "wáng", translation: "destroy" } },
          { id: "cc42-zheng", role: "Object", text: { hanzi: "鄭", pinyin: "Zhèng", translation: "Zheng" } }
        ]},
        { id: "cc42-er", role: "Adjunct", subRole: "sequential", text: { hanzi: "而", pinyin: "ér", translation: "and then" } },
        { id: "cc42-vp2", role: "Verb Phrase", children: [
          { id: "cc42-you", role: "Head Verb", text: { hanzi: "有", pinyin: "yǒu", translation: "have" } },
          { id: "cc42-yi", role: "Object", text: { hanzi: "益", pinyin: "yì", translation: "benefit" } },
          { id: "cc42-pp", role: "Adjunct", subRole: "benefactive", text: { hanzi: "於君", pinyin: "yú jūn", translation: "for you" } }
        ]}
      ]},
      { id: "cc42-cons", role: "Comment", children: [
        { id: "cc42-ghost", role: "Topic", subRole: "pro-drop", isDropped: true, impliedText: "[我]", semanticRole: "Agent", refersToId: null },
        { id: "cc42-gan", role: "Adjunct", subRole: "modal", text: { hanzi: "敢", pinyin: "gǎn", translation: "dare" } },
        { id: "cc42-yi2", role: "Adjunct", subRole: "instrumental", text: { hanzi: "以", pinyin: "yǐ", translation: "with this" } },
        { id: "cc42-fan", role: "Head Verb", text: { hanzi: "煩", pinyin: "fán", translation: "trouble" } },
        { id: "cc42-obj", role: "Object", text: { hanzi: "執事", pinyin: "zhí shì", translation: "your office" } }
      ]}
    ]}
  },
  {
    id: "cc43", category: "Classical Causatives (使/令)",
    chinese: "憂勞可以興國，逸豫可以亡身。",
    pinyin: "Yōu láo kě yǐ xīng guó, yì yù kě yǐ wáng shēn.",
    modernChinese: "忧虑辛劳可以使国家兴盛，安逸享乐可以使自身灭亡。",
    translation: "Worry and toil can make a state prosper; ease and pleasure can ruin oneself.",
    source: "歐陽修《伶官傳序》",
    explanation: {
      en: "The **implicit causative** — classical Chinese's most common causative pattern. Unlike cc33 (explicit 使-causative), **興** and **亡** are intransitive verbs USED TRANSITIVELY to express causation, with no 使/令 marker. \"Prosper\" becomes \"cause to prosper\"; \"perish\" becomes \"cause to perish.\" The tree reveals this by placing 國/身 as direct Objects of semantically intransitive verbs — the structural mismatch IS the teaching point. This completes the causative picture: explicit (cc33) + implicit (cc43).",
      zh: "**隐含使动**——文言最常见的使动用法。与cc33（显性使字句）不同，**興**和**亡**是不及物动词被**用作及物动词**来表达使动，没有使/令标记。\"兴盛\"变成\"使兴盛\"；\"灭亡\"变成\"使灭亡\"。树通过将國/身放在语义上不及物动词的宾语位置来揭示这一点。"
    },
    tree: { id: "cc43-root", role: "Sentence", children: [
      { id: "cc43-c1", role: "Comment", subRole: "clause 1", children: [
        { id: "cc43-t1", role: "Topic", semanticRole: "Causer", text: { hanzi: "憂勞", pinyin: "yōu láo", translation: "worry and toil" } },
        { id: "cc43-keyi1", role: "Adjunct", subRole: "modal", text: { hanzi: "可以", pinyin: "kě yǐ", translation: "can" } },
        { id: "cc43-xing", role: "Head Verb", subRole: "causative intransitive", text: { hanzi: "興", pinyin: "xīng", translation: "cause to prosper" } },
        { id: "cc43-guo", role: "Object", semanticRole: "Patient", text: { hanzi: "國", pinyin: "guó", translation: "state" } }
      ]},
      { id: "cc43-c2", role: "Comment", subRole: "clause 2", children: [
        { id: "cc43-t2", role: "Topic", semanticRole: "Causer", text: { hanzi: "逸豫", pinyin: "yì yù", translation: "ease and pleasure" } },
        { id: "cc43-keyi2", role: "Adjunct", subRole: "modal", text: { hanzi: "可以", pinyin: "kě yǐ", translation: "can" } },
        { id: "cc43-wang", role: "Head Verb", subRole: "causative intransitive", text: { hanzi: "亡", pinyin: "wáng", translation: "cause to perish" } },
        { id: "cc43-shen", role: "Object", semanticRole: "Patient", text: { hanzi: "身", pinyin: "shēn", translation: "oneself" } }
      ]}
    ]}
  }
];

data.push(...newSentences);
fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n');
console.log(`✅ Appended ${newSentences.length} sentences (cc39-cc43). Total: ${data.length}`);
