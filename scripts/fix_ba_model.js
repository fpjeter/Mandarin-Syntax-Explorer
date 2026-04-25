import fs from 'fs';
const filePath = 'src/data/modern_sentences.json';
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

// s126: 他没把门关上。
const s126 = data.find(s => s.id === 's126');
s126.tree = {
  id: "s126-n", role: "Sentence", children: [
    { id: "s126-t", role: "Topic", semanticRole: "Agent", text: { hanzi: "他", pinyin: "tā", translation: "he" } },
    { id: "s126-c", role: "Comment", children: [
      { id: "s126-c-neg", role: "Adjunct", subRole: "negation", text: { hanzi: "没", pinyin: "méi", translation: "didn't" } },
      { id: "s126-ba", role: "Adjunct", subRole: "disposal marker", children: [
        { id: "s126-ba-prep", role: "Head Verb", subRole: "disposal marker", text: { hanzi: "把", pinyin: "bǎ", translation: "(object fronting)" } },
        { id: "s126-ba-obj", role: "Object", semanticRole: "Patient", text: { hanzi: "门", pinyin: "mén", translation: "door" } }
      ]},
      { id: "s126-vp", role: "Verb Phrase", children: [
        { id: "s126-hv", role: "Head Verb", text: { hanzi: "关", pinyin: "guān", translation: "close" } },
        { id: "s126-comp", role: "Complement", subRole: "directional", text: { hanzi: "上", pinyin: "shàng", translation: "shut/up" } }
      ]}
    ]}
  ]
};

// s127: 别把它弄坏了。
const s127 = data.find(s => s.id === 's127');
s127.tree = {
  id: "s127-n", role: "Sentence", children: [
    { id: "s127-ghost", role: "Topic", subRole: "implied topic", semanticRole: "Agent", text: { hanzi: "[你]", pinyin: "nǐ", translation: "you(implied)" } },
    { id: "s127-c", role: "Comment", children: [
      { id: "s127-c-neg", role: "Adjunct", subRole: "negation", text: { hanzi: "别", pinyin: "bié", translation: "don't" } },
      { id: "s127-ba", role: "Adjunct", subRole: "disposal marker", children: [
        { id: "s127-ba-prep", role: "Head Verb", subRole: "disposal marker", text: { hanzi: "把", pinyin: "bǎ", translation: "(object fronting)" } },
        { id: "s127-ba-obj", role: "Object", semanticRole: "Patient", text: { hanzi: "它", pinyin: "tā", translation: "it" } }
      ]},
      { id: "s127-vp", role: "Verb Phrase", children: [
        { id: "s127-hv", role: "Head Verb", text: { hanzi: "弄", pinyin: "nòng", translation: "do/make" } },
        { id: "s127-comp", role: "Complement", subRole: "result", text: { hanzi: "坏", pinyin: "huài", translation: "broken" } },
        { id: "s127-le", role: "Particle", subRole: "aspect marker", text: { hanzi: "了", pinyin: "le", translation: "(done)" } }
      ]}
    ]}
  ]
};

// s133: 她不小心把杯子打碎了。
const s133 = data.find(s => s.id === 's133');
s133.tree = {
  id: "s133-root", role: "Sentence", children: [
    { id: "s133-t", role: "Topic", semanticRole: "Agent", text: { hanzi: "她", pinyin: "tā", translation: "she" } },
    { id: "s133-c", role: "Comment", children: [
      { id: "s133-adv", role: "Adjunct", subRole: "manner", text: { hanzi: "不小心", pinyin: "bù xiǎo xīn", translation: "carelessly" } },
      { id: "s133-ba", role: "Adjunct", subRole: "disposal marker", children: [
        { id: "s133-ba-prep", role: "Head Verb", subRole: "disposal marker", text: { hanzi: "把", pinyin: "bǎ", translation: "(object fronting)" } },
        { id: "s133-ba-obj", role: "Object", semanticRole: "Patient", text: { hanzi: "杯子", pinyin: "bēi zi", translation: "glass/cup" } }
      ]},
      { id: "s133-vp", role: "Verb Phrase", children: [
        { id: "s133-hv", role: "Head Verb", text: { hanzi: "打", pinyin: "dǎ", translation: "hit" } },
        { id: "s133-comp", role: "Complement", subRole: "resultative", text: { hanzi: "碎", pinyin: "suì", translation: "shattered" } },
        { id: "s133-le", role: "Particle", subRole: "aspect marker", text: { hanzi: "了", pinyin: "le", translation: "(completion)" } }
      ]}
    ]}
  ]
};

fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n');
console.log('✅ Refactored s126, s127, s133 from Embedded Clause to Adjunct model.');
