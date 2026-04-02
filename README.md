# 🌳 Mandarin Syntax Explorer

An interactive visualizer for Mandarin Chinese grammar structures. Select an example sentence and explore its syntactic tree — with pinyin, translations, and plain-English explanations of every grammatical concept.

## Features

- **Interactive syntax trees** — Nodes expand and collapse; pan and zoom the canvas freely
- **Nearly 100 curated modern sentences** across 19 grammar categories
- **30 annotated classical quotes** from Confucius, Laozi, Mencius, Xunzi, and more
- **Fractal Logic Stream (FLS)** — Custom topic-comment Matryoshka framework replacing Eurocentric SVO parsing (serving as our strict internal AST architecture)
- **Inline Pedagogical Explanations** — Expandable category breakdowns inside the sidebar written in a warm, accessible tutor tone
- **Badge system** — Construction-specific badges (把字句, 被字句, 是…的, 结果补语, etc.) appear on relevant nodes
- **Classical badges** — Function word badges (者, 所, 而, 非, 勿, 於, 焉, 之) for classical mode
- **Grammar glossary** — Tap any node role to see a plain-English definition
- **Hover tooltips** — Contextual explanations for every node and badge
- **Pinyin & translations** on every node, with ZCOOL XiaoWei display font for Chinese text
- **Rich grammar notes** — Expandable per-sentence explanations written for learners, not linguists
- **Responsive layout** with mobile tab navigation and touch-friendly zoom controls
- **Grammar guide** — Built-in article explaining the topic-prominent framework
- **Classical Chinese Explorer** — Toggle into 古文 mode to explore famous classical quotes (see below)
- **Ink wash transition** — Animated mode switches with ink wash effect
- **Code-split bundles** — Lazy-loaded components and vendor chunking for fast initial loads

### Grammar Categories

| Category | Category | Category |
|---|---|---|
| Basic Topic–Comment (主题评论) | Comparatives (比较句) | Degree Complements (程度补语) |
| BA Construction (把字句) | Correlative Patterns (越…越…) | Aspect Markers (着/过/了) |
| BEI Passive (被字句) | Shì–de Construction (是…的) | Pivotal Constructions (兼语句) |
| Serial Verb Constructions (连动句) | Resultative Complements (结果补语) | Separable Verbs (离合词) |
| Directional Complements (趋向补语) | Potential Complements (可能补语) | Double Topic (双主题) |
| Conditional Sentences (如果…就…) | Rhetorical Questions (反问句) | Even (连…都/也) |
| Discourse Context (跨句语境) | | |

---

## 📜 Classical Chinese Explorer

Click the scroll icon (📜) next to the app title to toggle into **Classical Chinese mode**. The entire app switches to an amber/sepia palette with an ink wash transition and loads a curated set of famous 古文 quotes with full syntactic analysis.

### Classical Features

- **30 annotated quotes** from the Analects (論語), Tao Te Ching (道德經), Mencius (孟子), Xunzi (荀子), Zuozhuan (左傳), Han Yu (韓愈), Su Shi (蘇軾), and Sun Tzu (孫子)
- **Full syntax trees** — same interactive tree visualization applied to classical grammar
- **Classical badge system** — 8 badges for function words (者, 所, 而, 非, 勿, 於, 焉, 之)
- **Dedicated grammar guide** — covers function words (虛詞), the 之 system, rhetorical patterns (反問), negation (否定), coverbs (介詞), and the 而 connective
- **Dedicated glossary** — classical grammar roles with period-appropriate definitions
- **Amber/sepia theme** — distinct visual identity with warm stone tones and calligraphic fonts (Noto Serif SC, Ma Shan Zheng)
- **Ink wash transition** — animated mode switch with a traditional ink wash effect
- **Independent state** — your modern and classical sentence selections are preserved separately when switching modes

### Classical Grammar Categories

| Category | Count | Description |
|---|---|---|
| Rhetorical Patterns (反問) | 5 | Sentence-final particles 乎/哉 for rhetorical questions |
| Nominalizers (者/所) | 4 | 者 and 所 as nominalizing particles |
| Classical Negation (非/勿/莫) | 5 | Negation with different scopes and strengths |
| Coverbs & Prepositions (於/以/焉) | 6 | Pre-verbal prepositional phrases |
| Sequential Actions (而) | 5 | 而 linking sequential, contrastive, or conditional clauses |
| Genitive & Modification (之) | 5 | 之 as genitive marker, object pronoun, or structural filler |

### Adding Classical Quotes

Each quote lives in `src/data/classicalSentences.ts` as a `SentenceData` object. Classical entries include two additional fields:

- `source` — the text the quote comes from (e.g. `"《論語·學而》"`)
- `author` — attribution (e.g. `"Confucius"`)

The `category` field must match a value in `src/data/classicalCategories.ts`. Everything else (`chinese`, `pinyin`, `translation`, `explanation`, `tree`) follows the same structure as modern sentences.

---

## 📝 The Fractal Logic Stream (FLS) Framework

This app does **not** use standard generative syntax (X-bar theory / Minimalism). Instead, the trees follow a **pedagogically-motivated hybrid** influenced by the Chinese grammatical tradition (赵元任, 朱德熙, 吕叔湘) and unified underneath our custom **Fractal Logic Stream (FLS)** methodology.

Key differences from formal linguistic models:

| FLS Framework | Standard generative syntax |
|---|---|
| **Topic–Comment** is the primary structural split at the sentence root | Subject–Predicate (IP → NP + I') is the primary split; topic is a derived pragmatic movement |
| **Logic Zones** (Adjuncts/状语) are first-class containers for pre-verbal modifiers | Adverbials are specifiers of functional projections or VP-adjuncts |
| **Matryoshka Principle** — Embedded clauses and pivotal nouns nest recursively | Rigid binary trees (X-bar) restrict recursive mapping |
| **Complement** is a single role with subtype badges (结果补语, 趋向补语, etc.) | Different complement types occupy distinct structural positions |
| **Verb Morpheme / Object Morpheme** explicitly decompose separable verbs (离合词) | Separable verbs are either lexical units or undergo syntactic movement |
| **Degree Complements** establish 得 as an active structural hierarchy node; **Potential Complements** map 得/不 as internal leaf particles | 得/不 are typically analyzed as functional heads (Deg0 / Mod0) uniformly across both constructions |
| **Pivot** (兼语) is a labeled role for nouns serving two functions simultaneously | Handled through Exceptional Case Marking (ECM) or control structures |
| Dropped pronouns are **visible ghost nodes** with coreference links (`isDropped`, `refersToId`) | Null pronouns are abstract empty categories (pro / PRO) |

**Why?** The goal is helping Mandarin learners see sentence structure at a glance — not modeling formal competence grammar. Chinese is a [topic-prominent language](https://en.wikipedia.org/wiki/Topic-prominent_language), and the Topic–Comment split reflects how sentences are actually constructed and taught, particularly at institutions like BLCU (北京语言大学). Role names like 状语, 补语, and 兼语 map directly to the terms learners encounter in Chinese-language textbooks.

---

## Tech Stack

| Layer | Library |
|---|---|
| Framework | React 19 + TypeScript |
| Build tool | Vite |
| Tree rendering | [@xyflow/react](https://reactflow.dev/) |
| Tree layout | Custom leaf-aligned algorithm (no external layout library) |
| Animations | [framer-motion](https://www.framer.com/motion/) |
| Styling | Tailwind CSS v4 |
| Icons | [lucide-react](https://lucide.dev/) |
| Fonts | ZCOOL XiaoWei · Noto Sans SC · Noto Serif SC · Noto Serif TC · Ma Shan Zheng (Google Fonts) |
| CSS fallbacks | PostCSS oklch/color-mix → rgb for iOS Safari ≤ 16.3 |
| Analytics | Vercel Analytics |

## Getting Started

```bash
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173).

## Project Structure

```
src/
├── components/
│   ├── SyntaxTree.tsx              # Tree canvas, state, event handlers
│   ├── treeLayout.ts               # Pure layout algorithm (node positioning, edge coloring)
│   ├── treeTransforms.ts           # Tree → React Flow conversion (aggregation, pro-drop)
│   ├── TreeToolbar.tsx             # Expand/collapse/glossary toolbar
│   ├── GrammarNode.tsx             # Individual tree node with badges and tooltips
│   ├── SentenceHeader.tsx          # Sentence display card with grammar notes
│   ├── SentenceSidebar.tsx         # Category accordion and sentence list (data-agnostic)
│   ├── BadgeLegend.tsx             # Floating badge legend overlay
│   ├── GlossaryPanel.tsx           # Slide-out grammar glossary
│   ├── GrammarGuide.tsx            # Modern Mandarin framework article
│   ├── ClassicalGrammarGuide.tsx   # Classical Chinese grammar guide
│   ├── ClassicalThemeProvider.tsx  # Amber/sepia theme wrapper
│   ├── InkWashTransition.tsx       # Animated ink wash mode transition
│   ├── ErrorBoundary.tsx          # Crash recovery fallback (inline styles)
│   ├── OnboardingHint.tsx         # First-visit tips for touch devices
│   ├── RoleTooltip.tsx             # Hover tooltip system
│   ├── RubyText.tsx                # Hanzi + pinyin ruby text rendering
│   └── CoRefEdge.tsx               # Co-reference arc edge
├── contexts/
│   └── AppModeContext.tsx          # Modern/classical mode context provider
├── data/
│   ├── sentences/              # Modern Mandarin example sentences by category (97)
│   ├── categories.ts               # Modern category list and descriptions
│   ├── badges.ts                   # Modern badge specs and matching rules
│   ├── glossary.ts                 # Modern grammar role definitions
│   ├── classicalSentences.ts       # Classical Chinese quotes with tree data (30)
│   ├── classicalCategories.ts      # Classical category list and descriptions
│   ├── classicalBadges.ts          # Classical badge specs (者/所/而/非/勿/於/焉/之)
│   ├── classicalGlossary.ts       # Classical grammar role definitions
│   └── sentenceLoader.ts          # Lazy-loading wrappers for sentence datasets
├── utils/
│   └── renderExplanation.tsx       # Markdown-like explanation text renderer
└── types/
    └── grammar.ts                  # TypeScript type definitions
```

## Adding Sentences

### Modern Mandarin

Each sentence lives in its respective category file within the `src/data/sentences/` directory (e.g., `src/data/sentences/ba_construction.ts`) as a `SentenceData` object with:
- `category` — the grammar group it belongs to (must match a value in `categories.ts`)
- `chinese`, `pinyin`, `translation` — the sentence itself
- `explanation` — a learner-friendly description (supports **bold** and *italic* markdown)
- `tree` — a recursive node tree defining the syntactic structure
- Optional: `discourseContext` for sentences that require a preceding context sentence

### Classical Chinese

Each quote lives in `src/data/classicalSentences.ts` with the same structure, plus:
- `source` — text attribution (e.g. `"《論語·學而》"`)
- `author` — author attribution (e.g. `"Confucius"`)
- `category` — must match a value in `classicalCategories.ts`

See existing entries for reference on how to build the tree shape.
