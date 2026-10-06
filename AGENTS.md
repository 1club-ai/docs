# Documentation project instructions

## About this project

- This is a documentation site built on [Mintlify](https://mintlify.com)
- Pages are MDX files with YAML frontmatter
- Configuration lives in `docs.json`
- Run `mint dev` to preview locally
- Run `mint broken-links` to check links
- For Mintlify product knowledge (components, configuration, writing standards), install the Mintlify skill: `npx skills add https://mintlify.com/docs`

## Terminology

<!-- Add product-specific terms and preferred usage -->
<!-- Example: Use "workspace" not "project", "member" not "user" -->

- When referring to sport clubs, use "gym" instead of "club". Exception: do not rename the "Club" / "Clubs" menu items in the UI - keep those as-is.
- **Automations** is the current event-driven workflow feature (triggers, steps, runs). The previous **Campaigns** feature was decommissioned and removed from the product - do not document it. Reminders, review requests, and segment messaging are all built as automations now. See `marketing/automations.mdx`.
- **Promotions** is the umbrella for both **vouchers** (wallet credit redeemed by code) and **discounts** (percentage or fixed at checkout). The two types share a single feature surface. See `sales/promotions.mdx`.
- **Events** are one-off ticketed happenings members book (workshops, tournaments, parties) - see `events/events.mdx`. Not to be confused with the trigger "events" that start Automations; in prose, reserve the word "event" for the bookable feature and say "trigger" for automations.

## Style preferences

<!-- Add any project-specific style rules below -->

- Use active voice and second person ("you")
- Keep sentences concise - one idea per sentence
- Use sentence case for headings
- Bold for UI elements: Click **Settings**
- Code formatting for file names, commands, paths, and code references
- Never use em dashes or en dashes (—, –). Always use a single hyphen (-) instead, in both prose and code.
- Don't start sentences with "In a nutshell".

## Page structure

Feature pages start with the concept and its value, not the screens. A reader should know what a feature is, what it's for, and whether they need it before any setup detail.

Sections come in this order. Choose heading wording that fits the page (for example "When to use it", "Common use cases", "How it works"):

1. **What it is** - the opening paragraph, with no heading. One to three sentences on what the feature is and who uses it (owner, front desk, instructor, member).
2. **Why use it and use cases** - the value it provides and two to four concrete gym situations it solves (for example "sell a one-off workshop with VIP and general tickets"). Write scenarios, not a list of features: a bullet list of capabilities under `## Overview` doesn't count as this section.
3. **How it works** (optional) - the key concepts, the lifecycle, and how it compares with nearby features. A comparison table is a good fit here (see "Events vs classes" in `events/events.mdx`).
4. **Setup, screens, and settings** - where it lives in the admin, then how to create or configure it and the fields on each screen.
5. **Reference and troubleshooting** (optional) - edge cases, limits, permissions, FAQs.

Keep sections 1-3 short, a few short paragraphs in total, so setup is never buried. Keep the tone plain: no marketing superlatives.

Where this does not apply: section landing pages (`*/overview.mdx`, which orient the reader across a section), API reference pages, `changelog.mdx`, and pure lookup pages (for example lists of MCP tools).

When you edit an existing page that doesn't follow this order, restructure the opening if your change touches it. Don't rewrite pages you aren't otherwise changing.

## Content boundaries

<!-- Define what should and shouldn't be documented -->
<!-- Example: Don't document internal admin features -->

## Source repo and sync

The product code lives in a sibling repo at `../1club` (GitHub: `1club-ai/1club`). When a PR in `1club` ships user-visible behavior - a new feature, renamed/removed menu item, changed setting, new permission, new field, new admin/user/cms route - the corresponding page in this repo must be created or updated.

`../1club/.agents/docs-map.yml` is the authoritative mapping from source-tree paths to pages in this repo. Read it before deciding whether a code change has a docs counterpart, and which page to update. The map's `gaps:` section lists features that exist in code but are not documented here yet - that's where new pages typically go.

When code introduces a new concept that doesn't fit any existing page, add the page, add the nav entry in `docs.json`, and add the new mapping to `../1club/.agents/docs-map.yml` so future changes route to it.

Run `mint broken-links` after structural changes to catch dangling cross-links.
