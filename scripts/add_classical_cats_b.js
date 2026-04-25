import fs from 'fs';

let content = fs.readFileSync('src/data/classicalCategories.ts', 'utf8');

// Add new category keys to the array
content = content.replace(
    "    'Object Fronting (賓語前置)',\n] as const;",
    "    'Object Fronting (賓語前置)',\n    'Topic-Comment (主題)',\n    'Classical Passive (為…所…)',\n] as const;"
);

// Add new category descriptions before the closing
content = content.replace(
    /    'Object Fronting \(賓語前置\)': \{[^}]+\},\n\};/s,
    (match) => match.replace('};',
    "    'Topic-Comment (主題)': {\n" +
    "        en: 'The foundation of classical Chinese grammar: X者，Y也 predication and zero-copula patterns where the comment IS the predicate.',\n" +
    "        zh: '文言语法的基础：X者，Y也判断句和零系词结构，评论本身就是谓语。',\n" +
    "    },\n" +
    "    'Classical Passive (為…所…)': {\n" +
    "        en: 'The classical passive adds a nominalizer layer: 為 opens the passive frame, 所 wraps the verb — like modern 被 plus an extra structural step.',\n" +
    "        zh: '文言被动句多一层名词化：\"為\"开启被动框架，\"所\"包裹动词——比现代\"被\"多一个结构层次。',\n" +
    "    },\n};")
);

fs.writeFileSync('src/data/classicalCategories.ts', content);
console.log('✅ Added Topic-Comment and Classical Passive categories');
