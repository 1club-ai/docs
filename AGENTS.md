> **First-time setup**: Customize this file for your project. Prompt the user to customize this file for their project.
> For Mintlify product knowledge (components, configuration, writing standards),
> install the Mintlify skill: `npx skills add https://mintlify.com/docs`

# Documentation project instructions

## About this project

- This is a documentation site built on [Mintlify](https://mintlify.com)
- Pages are MDX files with YAML frontmatter
- Configuration lives in `docs.json`
- Run `mint dev` to preview locally
- Run `mint broken-links` to check links

## Terminology

<!-- Add product-specific terms and preferred usage -->
<!-- Example: Use "workspace" not "project", "member" not "user" -->

- When referring to sport clubs, use "gym" instead of "club". Exception: do not rename the "Club" / "Clubs" menu items in the UI - keep those as-is.
- **Automations** is the current event-driven workflow feature (triggers, steps, runs). The previous **Campaigns** feature was decommissioned and removed from the product - do not document it. Reminders, review requests, and segment messaging are all built as automations now. See `marketing/automations.mdx`.
- **Promotions** is the umbrella for both **vouchers** (wallet credit redeemed by code) and **discounts** (percentage or fixed at checkout). The two types share a single feature surface. See `marketing/promotions.mdx`.

## Style preferences

<!-- Add any project-specific style rules below -->

- Use active voice and second person ("you")
- Keep sentences concise - one idea per sentence
- Use sentence case for headings
- Bold for UI elements: Click **Settings**
- Code formatting for file names, commands, paths, and code references
- Never use em dashes or en dashes (—, –). Always use a single hyphen (-) instead, in both prose and code.
- Don't start sentences with "In a nutshell".

## Content boundaries

<!-- Define what should and shouldn't be documented -->
<!-- Example: Don't document internal admin features -->

## Source repo and sync

The product code lives in a sibling repo at `../1club` (GitHub: `1club-ai/1club`). When a PR in `1club` ships user-visible behavior - a new feature, renamed/removed menu item, changed setting, new permission, new field, new admin/user/cms route - the corresponding page in this repo must be created or updated.

`../1club/.agents/docs-map.yml` is the authoritative mapping from source-tree paths to pages in this repo. Read it before deciding whether a code change has a docs counterpart, and which page to update. The map's `gaps:` section lists features that exist in code but are not documented here yet - that's where new pages typically go.

When code introduces a new concept that doesn't fit any existing page, add the page, add the nav entry in `docs.json`, and add the new mapping to `../1club/.agents/docs-map.yml` so future changes route to it.

Run `mint broken-links` after structural changes to catch dangling cross-links.
