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
│   ├── SyntaxTree.tsx      # Tree canvas, layout algorithm, zoom controls
│   ├── GrammarNode.tsx     # Individual tree node with badges and tooltips
│   ├── SentenceHeader.tsx  # Sentence display card with grammar notes
│   ├── SentenceSidebar.tsx # Category accordion and sentence list
│   ├── BadgeLegend.tsx     # Floating badge legend overlay
│   ├── GlossaryPanel.tsx   # Slide-out grammar glossary
│   ├── GrammarGuide.tsx    # Built-in framework article
│   ├── RoleTooltip.tsx     # Hover tooltip system
│   ├── RubyText.tsx        # Hanzi + pinyin ruby text rendering
│   └── CoRefEdge.tsx       # Co-reference arc edge
├── data/
│   ├── sentences.ts        # All example sentences with full tree data
│   ├── categories.ts       # Category list and descriptions
│   ├── glossary.ts         # Grammar role definitions
│   └── badges.ts           # Badge specs and matching rules
└── types/
    └── grammar.ts          # TypeScript type definitions
```

## Adding Sentences

Each sentence lives in `src/data/sentences.ts` as a `SentenceData` object with:
- `category` — the grammar group it belongs to (must match a value in `categories.ts`)
- `chinese`, `pinyin`, `translation` — the sentence itself
- `explanation` — a learner-friendly description (supports **bold** and *italic* markdown)
- `tree` — a recursive node tree defining the syntactic structure
- Optional: `discourseContext` for sentences that require a preceding context sentence

See existing entries for reference on how to build the tree shape.
