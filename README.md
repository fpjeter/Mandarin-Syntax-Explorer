# 🌳 Mandarin Syntax Explorer

An interactive visualizer for Mandarin Chinese grammar structures. Select an example sentence and explore its syntactic tree — with pinyin, translations, and plain-English explanations of every grammatical concept.

## Features

- **Interactive syntax trees** — Nodes expand and collapse; pan and zoom the canvas freely
- **Curated example sentences** — Covers a range of structures from simple topic–comment to advanced constructions
- **Grammar categories** covered:
  - Basic Topic–Comment
  - 把 (Bǎ) Construction
  - 被 (Bèi) Passive
  - 是…的 (Shì–de) Emphasis
  - Comparatives with 比 (Bǐ)
  - Separable Verbs (离合词)
  - Rhetorical Questions & Double Negation
- **Pinyin & translations** on every node
- **Rich explanations** written for learners, not linguists
- **Responsive layout** with mobile zoom support

## Tech Stack

| Layer | Library |
|---|---|
| Framework | React 19 + TypeScript |
| Build tool | Vite |
| Tree rendering | [@xyflow/react](https://reactflow.dev/) |
| Graph layout | [dagre](https://github.com/dagrejs/dagre) |
| Animations | [framer-motion](https://www.framer.com/motion/) |
| Styling | Tailwind CSS v4 |
| Icons | [lucide-react](https://lucide.dev/) |

## Getting Started

```bash
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173).

## Project Structure

```
src/
├── components/       # React UI components (tree nodes, panels, controls)
├── data/
│   ├── sentences.ts  # All example sentences with full tree data
│   └── glossary.ts   # Grammar term definitions
└── types/            # TypeScript type definitions
```

## Adding Sentences

Each sentence lives in `src/data/sentences.ts` as a `SentenceData` object with:
- `category` — the grammar group it belongs to
- `chinese`, `pinyin`, `translation` — the sentence itself
- `explanation` — a learner-friendly description (supports markdown bold)
- `tree` — a recursive node tree defining the syntactic structure

See existing entries for reference on how to build the tree shape.
