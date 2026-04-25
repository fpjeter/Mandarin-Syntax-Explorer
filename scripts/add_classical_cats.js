import fs from 'fs';

let content = fs.readFileSync('src/data/classicalCategories.ts', 'utf8');

// Add new category keys to the array
content = content.replace(
    "    'Genitive & Modification (之)',\n] as const;",
    "    'Genitive & Modification (之)',\n    'Classical Conditionals (若/苟/則)',\n    'Classical Causatives (使/令)',\n    'Object Fronting (賓語前置)',\n] as const;"
);

// Add new category descriptions before the closing };
// Find the last entry and add after it
content = content.replace(
    "    'Genitive & Modification (之)': {\n        en: 'The classical equivalent of 的: 之 links nouns (\"X 之 Y\" = \"X\\'s Y\") and creates modifier structures.',\n        zh: '\"之\"是文言版的\"的\"：连接名词（\"X之Y\"=\"X的Y\"），构建修饰结构。',\n    },\n};",
    "    'Genitive & Modification (之)': {\n        en: 'The classical equivalent of 的: 之 links nouns (\"X 之 Y\" = \"X\\'s Y\") and creates modifier structures.',\n        zh: '\"之\"是文言版的\"的\"：连接名词（\"X之Y\"=\"X的Y\"），构建修饰结构。',\n    },\n    'Classical Conditionals (若/苟/則)': {\n        en: 'Classical conditional patterns using 若, 苟, and 則 to express if-then reasoning.',\n        zh: '用\"若\"\"苟\"\"則\"构成的假设条件句。',\n    },\n    'Classical Causatives (使/令)': {\n        en: 'Pivotal constructions where one person causes another to act, using 使 or 令.',\n        zh: '用\"使\"\"令\"构成的兼语式：某人使/令某人做某事。',\n    },\n    'Object Fronting (賓語前置)': {\n        en: 'Classical word order where the object moves before the verb — the opposite of modern Chinese.',\n        zh: '宾语前置：宾语移到动词前面，与现代汉语语序相反。',\n    },\n};"
);

fs.writeFileSync('src/data/classicalCategories.ts', content);
console.log('✅ Added 3 new categories to classicalCategories.ts');
