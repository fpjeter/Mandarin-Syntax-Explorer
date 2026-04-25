# Ghost Node Conventions

**Author:** Educational Publisher  
**Purpose:** Define implementable rules for ghost node (`isDropped: true`) consistency across `modern_sentences.json`  
**Audience for these rules:** Data Linguist (who will normalize the JSON)

---

## Convention 1: `refersToId` — REQUIRED on all ghost nodes

**Rule:** Every ghost node with `isDropped: true` MUST have a `refersToId` field pointing to the node it refers back to.

**Rationale from a learner's perspective:**  
The co-reference arc (the red line connecting the ghost to its referent) is the **single most valuable visual feature** of ghost nodes. Without it, a ghost is just an empty gray box — the learner sees "something is missing" but has no idea *what*. With the arc, they see "oh, the missing subject here is the same person mentioned at the top." This is the entire pedagogical point of the Ghost Mode toggle.

**Implementation rules:**
- If the ghost refers to the **sentence-level Topic**, `refersToId` points to the Topic node's `id`.
- If the ghost refers to a **Pivot noun** (in pivotal constructions), `refersToId` points to the Pivot node's `id`.
- If the ghost refers to an **entity from a prior sentence** (Discourse Context category), `refersToId` points to the sentence-level Topic node — even though the real referent is cross-sentence, we need *some* anchor, and the Topic is the closest structural proxy.

**Currently correct:** s15 (`ref: n15-t`), s16 (`ref: n16-t`)  
**Need fixing:** All other 15 ghost nodes.

### Convention 1 Addendum: Top-Level Ghost Topics (added 2026-04-25)

**Problem:** 14 of the 18 ghost nodes are **top-level ghost Topics** — the ghost itself IS the sentence's Topic, so there is no intra-sentence node to point `refersToId` at. The original rule assumed every ghost had an intra-sentence referent, which is only true for ghosts inside embedded clauses (like s15, s16).

**Decision: Option B — use `refersToId: null` (explicit absence)**

**Rule:** When a ghost node is a top-level Topic with no intra-sentence referent, set `refersToId: null`. This explicitly signals that the omission is intentional (not a data gap), and the frontend should NOT attempt to render a co-reference arc.

**Why Option B over the alternatives:**

| Option | Verdict | Reason |
|---|---|---|
| A: Omit field entirely | ❌ Rejected | The difference between "field missing because nobody filled it in yet" and "field missing because there's genuinely no referent" is invisible. Future audits would flag these as bugs. |
| **B: `refersToId: null`** | ✅ **Chosen** | Explicit null is self-documenting. The frontend can trivially check `if (refersToId !== null) renderArc()`. Zero frontend changes needed beyond a null-check that should already exist. |
| C: Sentinel `"DISCOURSE_CONTEXT"` | ❌ Deferred | Good idea for the future but premature. Requires frontend changes, a new arc style, and design decisions about how cross-sentence references should look. When we're ready for that feature, we can upgrade specific `null` values to the sentinel — but we shouldn't block normalization on it. |

**Revised implementation rules for `refersToId`:**

| Ghost type | `refersToId` value | Example |
|---|---|---|
| Ghost **inside** an embedded clause, referring to the outer Topic | The outer Topic node's `id` | s15: `refersToId: "n15-t"` |
| Ghost **inside** a pivotal construction, referring to the Pivot | The Pivot node's `id` | (future cases) |
| Top-level ghost Topic with **pro-drop** referent (speaker/listener/obvious 3rd person) | `null` | s13, s14, s17, s18, s28, s69, s87, s127, s132 |
| Top-level ghost Topic in **Discourse Context** (referent is in prior sentence) | `null` | s91, s94, s95, s96, s100 |
| Top-level ghost Topic that is an **expletive** "it/there" | `null` | s81 |

**Future note:** When the frontend adds a Discourse Context panel with cross-sentence visualization, Discourse Context ghosts (s91, s94, s95, s96, s100) can be upgraded from `null` to a sentinel value. This is a non-breaking change — `null` → `"DISCOURSE_CONTEXT"` — and the frontend can add dotted-line arcs at that time.

---

## Convention 2: `role` — Topic vs Subject

**Rule:** Use `role: "Subject"` when the ghost is **inside an embedded clause or a Comment that already has an explicit outer Topic**. Use `role: "Topic"` when the ghost **is** the sentence-level discourse topic (the "what are we talking about" slot).

**Decision matrix:**

| Scenario | Role | Why |
|---|---|---|
| Sentence has no overt Topic; ghost fills the top-level slot | `Topic` | The ghost *is* the discourse frame |
| Sentence has an overt Topic; ghost is inside the Comment | `Subject` | The ghost is a clause-internal participant, not the discourse frame |
| Discourse Context: both Topic and Subject are dropped | `Topic` | The primary omission is the discourse frame; the Subject is implied by the Topic |
| Pivotal construction: ghost subject of the second verb | `Subject` | The ghost is inside an embedded clause governed by the pivot |

**Currently correct:** s15 (`Subject` — overt Topic 那本书 exists), s16 (`Subject` — overt Topic 张三 exists)  
**Likely need changing:** s17's Topic ghost should stay `Topic` (no overt topic), s17's inner ghost should be `Subject` (inside embedded clause).

---

## Convention 3: s81 spatiotemporal anchor — use `semanticRole: "Theme"`

**Rule:** The implicit spatiotemporal anchor in s81 (从来没有过这样的事) should use `semanticRole: "Theme"`, NOT `Agent`.

**Rationale:** This ghost represents an implicit "it" or "there" — a scene anchor, not someone performing an action. In English grammar this is called an "expletive subject" (like "It has never happened" or "There has never been"). The closest semantic role is **Theme** (the entity being described or existing), not Agent (which implies volition and action).

**Why not a new role like "Anchor"?** Adding a new semantic role creates downstream work: the glossary needs an entry, the badge system needs a color, the Semantic Toggle UI needs to render it. `Theme` is already in the system, is semantically accurate, and learners will understand it intuitively: "the *thing* being talked about."

---

## Convention 4: `subRole` — REQUIRED, with category-based values

**Rule:** Every ghost node MUST have a `subRole` field. The value depends on the **type of omission**:

| `subRole` value | When to use | Examples |
|---|---|---|
| `"pro-drop"` | The subject/topic is omitted because the speaker and listener both know who it is (1st/2nd person pro-drop, or contextually obvious 3rd person). This is the most common type. | s13, s14, s17, s18, s28, s69, s87, s94, s95, s96, s132 |
| `"topic-chain"` | The subject/topic is omitted because it was already named in a prior clause or sentence within the same discourse. Used for the Discourse Context category. | Any ghost in a Discourse Context sentence where the referent was named earlier |
| `"expletive"` | The ghost represents an implicit "it/there" scene anchor — no real referent exists in the sentence. | s81 |
| `"implied topic"` | ~~Deprecated.~~ Replace all instances with `"pro-drop"` or `"topic-chain"` as appropriate. | s132 → change to `"pro-drop"` |

**Why these three?** They map to the three pedagogical lessons we want to teach:
1. **Pro-drop:** "Mandarin drops pronouns when they're obvious — this is normal, not a mistake."
2. **Topic-chain:** "The subject carries over from the previous sentence — look back to find it."
3. **Expletive:** "There's no real 'who' here — it's like English 'it rains' or 'there exists.'"

---

## Convention 5: `semanticRole` — Inherit from referent, do not tag independently

**Rule:** Ghost nodes SHOULD have a `semanticRole`, but it MUST match the semantic role of their referent (the node pointed to by `refersToId`), not be independently assigned.

**Implementation:**
1. Look up the `refersToId` target node.
2. Copy its `semanticRole` to the ghost node.
3. If the referent has no `semanticRole`, the ghost should also have none.

**Exception:** Expletive ghosts (s81, `subRole: "expletive"`) get `semanticRole: "Theme"` regardless, since they have no real referent.

**Currently problematic:** s16 ghost is tagged `Experiencer` while its referent (张三, the Topic) may or may not be an Experiencer. The rule is: don't decide the ghost's role independently — inherit it.

---

## Summary Checklist for Data Linguist

For each of the 17 ghost nodes:

- [ ] `refersToId` points to the correct referent node
- [ ] `role` is `Topic` or `Subject` per Convention 2 matrix
- [ ] `semanticRole` is inherited from referent per Convention 5 (or `Theme` for expletives)
- [ ] `subRole` is one of: `pro-drop`, `topic-chain`, `expletive`
- [ ] No ghost uses the deprecated `subRole: "implied topic"`
