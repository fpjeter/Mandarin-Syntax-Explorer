# 🌳 Mandarin Syntax Explorer

An interactive visualizer for Mandarin Chinese grammar structures. Select an example sentence and explore its syntactic tree — with pinyin, translations, and plain-English explanations of every grammatical concept.

## Features

- **Interactive syntax trees** — Nodes expand and collapse; pan and zoom the canvas freely
- **60+ curated example sentences** across 19 grammar categories
- **Badge system** — Construction-specific badges (把字句, 被字句, 是…的, 结果补语, etc.) appear on relevant nodes
- **Grammar glossary** — Tap any node role to see a plain-English definition
- **Hover tooltips** — Contextual explanations for every node and badge
- **Pinyin & translations** on every node, with ZCOOL XiaoWei display font for Chinese text
- **Rich grammar notes** — Expandable per-sentence explanations written for learners, not linguists
- **Responsive layout** with mobile tab navigation and touch-friendly zoom controls
- **Grammar guide** — Built-in article explaining the topic-prominent framework
- **Classical Chinese Explorer** — Toggle into 古文 mode to explore famous classical quotes (see below)

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

Click the scroll icon (📜) next to the app title to toggle into **Classical Chinese mode**. The entire app switches to an amber/sepia palette and loads a curated set of famous 古文 quotes with full syntactic analysis.

### Classical Features

- **8 annotated quotes** from the Analects (论语), Tao Te Ching (道德经), and other classical texts
- **Full syntax trees** — same interactive tree visualization applied to classical grammar
- **Dedicated grammar guide** — covers function words (虛詞), the 之 system, rhetorical patterns (反問), negation (否定), coverbs (介詞), and the 而 connective
- **Amber/sepia theme** — distinct visual identity with warm stone tones
- **Independent state** — your modern and classical sentence selections are preserved separately when switching modes

### Classical Grammar Categories

| Category | Count | Description |
|---|---|---|
| Rhetorical Patterns (反問) | 2 | Sentence-final particles 乎/哉 for rhetorical questions |
| Nominalizers (者/所) | 1 | 者 and 所 as nominalizing particles |
| Classical Negation (非/勿/莫) | 2 | Negation with different scopes and strengths |
| Coverbs & Prepositions (於/以/焉) | 1 | Pre-verbal prepositional phrases |
| Sequential Actions (而) | 1 | 而 linking sequential, contrastive, or conditional clauses |
| Genitive & Modification (之) | 1 | 之 as genitive marker, object pronoun, or structural filler |

### Adding Classical Quotes

Each quote lives in `src/data/classicalSentences.ts` as a `SentenceData` object. Classical entries include two additional fields:

- `source` — the text the quote comes from (e.g. `"《論語·學而》"`)
- `author` — attribution (e.g. `"孔子 (Confucius)"`)

The `category` field must match a value in `src/data/classicalCategories.ts`. Everything else (`chinese`, `pinyin`, `translation`, `explanation`, `tree`) follows the same structure as modern sentences.

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
| Fonts | ZCOOL XiaoWei (display) · Noto Sans SC (UI) via Google Fonts |
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
│   ├── SyntaxTree.tsx              # Tree canvas, layout algorithm, zoom controls
│   ├── GrammarNode.tsx             # Individual tree node with badges and tooltips
│   ├── SentenceHeader.tsx          # Sentence display card with grammar notes
│   ├── SentenceSidebar.tsx         # Category accordion and sentence list (data-agnostic)
│   ├── BadgeLegend.tsx             # Floating badge legend overlay
│   ├── GlossaryPanel.tsx           # Slide-out grammar glossary
│   ├── GrammarGuide.tsx            # Modern Mandarin framework article
│   ├── ClassicalGrammarGuide.tsx   # Classical Chinese grammar guide
│   ├── ClassicalThemeProvider.tsx  # Amber/sepia theme wrapper
│   ├── RoleTooltip.tsx             # Hover tooltip system
│   ├── RubyText.tsx                # Hanzi + pinyin ruby text rendering
│   └── CoRefEdge.tsx               # Co-reference arc edge
├── data/
│   ├── sentences.ts                # Modern Mandarin example sentences
│   ├── categories.ts               # Modern category list and descriptions
│   ├── classicalSentences.ts       # Classical Chinese quotes with tree data
│   ├── classicalCategories.ts      # Classical category list and descriptions
│   ├── glossary.ts                 # Grammar role definitions
│   └── badges.ts                   # Badge specs and matching rules
└── types/
    └── grammar.ts                  # TypeScript type definitions
```

## Adding Sentences

### Modern Mandarin

Each sentence lives in `src/data/sentences.ts` as a `SentenceData` object with:
- `category` — the grammar group it belongs to (must match a value in `categories.ts`)
- `chinese`, `pinyin`, `translation` — the sentence itself
- `explanation` — a learner-friendly description (supports **bold** and *italic* markdown)
- `tree` — a recursive node tree defining the syntactic structure
- Optional: `discourseContext` for sentences that require a preceding context sentence

### Classical Chinese

Each quote lives in `src/data/classicalSentences.ts` with the same structure, plus:
- `source` — text attribution (e.g. `"《論語·學而》"`)
- `author` — author attribution (e.g. `"孔子 (Confucius)"`)
- `category` — must match a value in `classicalCategories.ts`

See existing entries for reference on how to build the tree shape.
