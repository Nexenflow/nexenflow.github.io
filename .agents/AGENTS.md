# Cactus Informatique — Project Rules

## Icons & Emoticons
- **NEVER use emoticons (emojis) in web page content, components, or templates.** No 🚨, 🔴, ✅, ❌, etc. in any HTML, Astro, or rendered output.
- **Always use Lucide Icons (SVG)** for all iconography. Lucide is the project's icon system — lightweight, tree-shakeable, professional.
- Emojis in internal documentation (MD planning files, comments) are acceptable. The rule applies strictly to **code that renders on the website**.

## Content Language
- All website content is written in **French first** (primary market: Morocco).
- English translations are Phase 2 — do not create English content until explicitly requested.

## Styling
- Use **Tailwind CSS v4** for all styling. No inline styles, no separate CSS files per component.
- Follow the design system defined in `tailwind.config.mjs`.

## Forms
- All form processing uses **PHP 8+** standalone endpoints in the `/api/` directory.
- No Node.js form handlers. No client-side-only validation.

## Content Exclusions
- **NEVER mention "ransomware"** on the website. It is not part of Cactus's service offering.
- Use broader terms instead: "incident cybersécurité", "intrusion", "cyberattaque", "compromission de système".
- This applies to all page content, meta descriptions, SEO keywords, FAQ, and form dropdown options.

## Brand Color Palette
All design work must use these 7 colors exclusively:
- `#476A33` — **Cactus Green** (Primary brand: buttons, links, focus states, section labels)
- `#364022` — **Dark Olive** (Header bg, footer bg, hero sections, dark surfaces)
- `#DBCC63` — **Gold** (Highlights: CTAs, badges, stat numbers, hover accents, hero keyword emphasis)
- `#D39D4C` — **Amber** (Warm accents: icon fills, decorative dividers, tag backgrounds)
- `#6F3203` — **Earth Brown** (Emergency CTA, urgency sections, premium anchoring)
- `#181818` — **Ink** (All text on light backgrounds: headings, body, labels)
- `#EEEEEE` — **Cloud** (Alternating section backgrounds, card borders, text on dark backgrounds)
