# UI bug: header dropdown overlaps the hero section

You're fixing a visual UI bug in the header navigation of a marketing website. Read this full brief before making changes, and confirm the root cause against the actual code before implementing anything.

*(Attach the screenshot showing the open menu slicing through the hero heading, if available.)*

## Context
This is the Cactus Informatique marketing site. The header includes dropdown "mega-menus" (e.g. the "Secteurs" menu) that open below the nav bar. Every page also has a hero section starting just below the header; hero styling varies slightly from page to page.

## The problem
When a header dropdown is open, it visually overlaps the hero section on whatever page it's opened on. The dropdown panel and the hero section use nearly identical dark backgrounds, so there's no visible boundary between "floating menu" and "page content underneath" — the two read as one merged block instead of separate layers. The hero heading gets visibly cut where the dropdown's lower edge crosses it.

This isn't a one-page issue — it happens on every page with a hero near the top, since the header/dropdown is shared/global while each hero's background varies only slightly, never enough to fix the problem on its own.

## Root cause to verify
Confirm in the code, but the likely cause is a combination of:
- The dropdown panel is absolutely or fixed positioned and overlaps in-flow content below it, with nothing separating the two layers.
- The panel has little to no elevation styling of its own (shadow, distinct surface tone, border), so it blends into whatever's behind it instead of reading as a floating layer.

## Objective
Implement a fix so that any open dropdown is clearly and robustly separated from the page content behind it, on every page, regardless of that page's specific hero styling. Fix this once, at the shared header/layout level — not page by page.

## Why this approach
Matching or contrasting the menu's color against each page's hero individually would be fragile: it would need re-tuning whenever a hero's background changes, and break again on any new page. Dimming the page behind an open menu solves this permanently, because it doesn't depend on knowing what's behind it.

## Requirements

1. **Add a scrim (backdrop overlay) behind the dropdown**
   - When any header dropdown is open, dim the rest of the viewport below the header with a semi-transparent dark overlay — roughly black at 40-60% opacity. A subtle blur behind it is a nice-to-have, not required.
   - Layer order, top to bottom: header + open dropdown, then the scrim, then the page content (hero, etc.) underneath.
   - Fade the scrim in and out together with the dropdown's own open/close animation.
   - Close the dropdown and remove the scrim on: click outside the panel, Escape key, or selecting a link inside it.

2. **Give the dropdown panel its own elevation**
   - Add a clear drop shadow under the panel so it reads as a distinct floating surface on its own, independent of the scrim.
   - Consider a panel background a shade lighter or darker than the page's general background, so the panel has its own visual identity rather than depending on contrast with whatever hero happens to be behind it.

3. **Audit z-index / stacking contexts**
   - Confirm the header and open dropdown always sit above the scrim, and the scrim always sits above the page content.
   - Check hero-section elements (headings, decorative graphics) for any z-index or transform that could create a stacking context pushing them above the dropdown or scrim — correct if found.

4. **Implement once, globally**
   - Put this logic in the shared header/nav/layout component so every current and future page inherits it automatically. No page-by-page patches.

5. **Check mobile/responsive nav**
   - If the mobile menu uses a similar dropdown or slide-out panel, confirm it needs, and gets, the same scrim and elevation treatment.

## Constraints
- Don't change the copy/content of the dropdown menus or the hero sections.
- Keep the existing brand palette (dark olive-green header, gold/yellow accents) — the scrim itself should stay neutral/black, not tinted.
- No layout shift when the dropdown opens or closes — content underneath should stay in place and just visually recede.

## Acceptance criteria
- On every page, opening any header dropdown clearly separates it from the hero/page content underneath — no overlapping or cut-off text, regardless of that page's hero background or color.
- Closing the dropdown (outside click, Escape, or link selection) smoothly removes the scrim and restores full page interactivity.
- The fix lives in one shared place, not duplicated across pages.
- No regressions to existing dropdown functionality, animations, or page layout.

## Before you start
Locate and briefly report the relevant files first — header/nav component, dropdown/mega-menu component, shared layout wrapper, and hero section component(s) — and note the current positioning/layering/background approach you find, so the fix matches the existing code instead of assuming a stack.
