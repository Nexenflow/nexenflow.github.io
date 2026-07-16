# 🚀 SPRINT PLAN & TECH STACK — CACTUS INFORMATIQUE WEBSITE
## Version Finale — Guide de Développement

---

## I. DIAGNOSTIC MULTI-EXPERT

### 🎨 UX Expert Assessment
- **Target users**: Moroccan B2B decision-makers (DSI, CEO, DAF) — they want answers fast, not tech specs
- **Critical UX rules**: 3-click max depth, mobile-first, sticky emergency CTA, mega-menu desktop
- **Forms**: Must be fast, accessible, GDPR-compliant (CNDP Morocco equivalent), no JS-heavy validation — server-side PHP is reliable and simple
- **Languages**: FR primary, EN secondary — must be switchable without page reload disruption

### ✍️ Content Creator Pro Assessment
- **Tone**: Professional-authoritative, not corporate-cold. "Trusted partner" not "vendor"
- **Language**: French (primary), English (future). All content MD files written in French first
- **Content volume**: 15 pages Phase 1 = manageable sprint. Each page = 1 MD content file
- **SEO**: Every MD file contains meta title, meta description, H1, primary keyword, schema type

### 🔧 Tech Solutions Expert Assessment
- **Simplicity mandate**: No heavy CMS (WordPress overkill for 40 pages). Static-first approach
- **Forms requirement (PHP)**: Contact form + Emergency form = 2 PHP endpoints maximum
- **i18n (Translation)**: Need a JS framework that handles routing + translation natively
- **Performance**: Static HTML/CSS + JS hydration = fastest possible load (critical for Moroccan internet speeds)

### 💻 Web Developer Assessment
- **Build speed**: Static site generator + PHP forms = fastest path to production
- **Translation**: Next.js with `next-intl` or Astro with `astro-i18n` are the two best options
- **PHP forms**: Standalone PHP API endpoint — decoupled from the static frontend
- **Hosting**: Any PHP-capable host (OVH, Hostinger, or VPS) — common in Morocco

---

## II. RECOMMENDED TECH STACK

### Decision: **Astro + PHP**

| Layer | Technology | Why |
|---|---|---|
| **Framework** | **Astro v5** | Zero JS by default, blazing fast, native i18n routing (`/fr/...`, `/en/...`), MD/MDX content collections, islands architecture for interactive components only |
| **Styling** | **Tailwind CSS v4** | Best-in-class utility-first CSS: zero generic look, built-in responsive/dark mode, purges unused CSS to ~10KB. Design system configured in `tailwind.config`. Industry standard for premium corporate sites (used by Vercel, Linear, Stripe) |
| **Animations** | **Tailwind transitions** + **Motion One** (lightweight) | Tailwind's `transition-`, `animate-`, `hover:` utilities for micro-interactions. Motion One (~3KB) for scroll-triggered reveals — 10x lighter than GSAP |
| **Forms** | **PHP 8+** standalone API | 2 endpoints: `/api/contact.php` + `/api/urgence.php`. Sends email via SMTP (PHPMailer). No JS framework needed for forms |
| **i18n / Translation** | **Astro i18n routing** (`@astrojs/sitemap` + custom) | Built-in locale routing: `cactus.ma/fr/expertises/erp` vs `cactus.ma/en/expertise/erp`. JSON translation files per locale |
| **Icons** | **Lucide Icons** (SVG) | Lightweight, tree-shakeable, professional |
| **Fonts** | **Google Fonts**: Inter (body) + Outfit (headings) | Modern, professional, excellent readability |
| **Schema/SEO** | **astro-seo** + manual JSON-LD | Full control over meta tags, Open Graph, schema markup per page |
| **Build output** | **Static HTML** (pre-rendered) | `astro build` → static HTML/CSS/JS. Host anywhere |
| **Hosting** | **PHP-capable web server** (Apache/Nginx + PHP-FPM) | Static files served directly. PHP only for `/api/` form endpoints |
| **Version control** | **Git** | Standard |

### Why Astro over Next.js?

| Criteria | Astro | Next.js |
|---|---|---|
| JS shipped to client | **0 KB by default** | React runtime (~80KB min) |
| Build speed | ⚡ Very fast | Moderate |
| i18n routing | Native with config | Requires `next-intl` package |
| Learning curve | Low (HTML-centric) | Medium (React knowledge required) |
| PHP compatibility | Perfect (static output + PHP files) | Awkward (Node.js server needed) |
| Content from MD | Native Content Collections | Requires MDX setup |
| Moroccan hosting | Any shared host works | Needs Node.js / Vercel |

### Why PHP for forms (not Node.js)?

1. **Moroccan hosting reality**: 95% of local hosts support PHP natively. Node.js requires VPS or cloud
2. **Simplicity**: PHPMailer + 50 lines of code = done. No Express server, no process management
3. **User's explicit request**: "use PHP for forms"
4. **Security**: Server-side validation, CSRF token, rate limiting — all native in PHP

### ⛔ Mandatory Design Rules

1. **NO EMOTICONS / EMOJIS on the website.** No 🚨, 🔴, ✅, ❌, or any emoji in rendered HTML, Astro components, or page templates. Emojis are acceptable in internal planning documents (like this MD file), but **never in code that renders on the website**.
2. **Use Lucide Icons (SVG) exclusively** for all iconography: navigation, CTAs, section markers, badges, status indicators. Lucide is lightweight, tree-shakeable, and professional.
3. **Example:** Instead of `🚨 Urgence IT`, use `<AlertTriangle class="icon" /> Urgence IT` (Lucide's `AlertTriangle` icon).

---

## III. PROJECT STRUCTURE

```
cactus-website/
├── src/
│   ├── components/          # Reusable Astro components
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── MegaMenu.astro
│   │   ├── Hero.astro
│   │   ├── CTASection.astro
│   │   ├── ExpertiseCard.astro
│   │   ├── SectorCard.astro
│   │   ├── CaseStudyCard.astro
│   │   ├── StatsCounter.astro
│   │   ├── ClientLogos.astro
│   │   ├── Breadcrumb.astro
│   │   ├── ContactForm.astro     # Posts to /api/contact.php
│   │   ├── EmergencyForm.astro   # Posts to /api/urgence.php
│   │   └── LanguageSwitcher.astro
│   │
│   ├── layouts/
│   │   ├── BaseLayout.astro      # HTML head, meta, schema, header, footer
│   │   ├── PageLayout.astro      # Standard content page
│   │   └── ExpertiseLayout.astro # Expertise page template
│   │
│   ├── pages/
│   │   ├── fr/                   # French (primary)
│   │   │   ├── index.astro
│   │   │   ├── expertises/
│   │   │   ├── secteurs/
│   │   │   ├── resultats/
│   │   │   ├── a-propos/
│   │   │   ├── urgence.astro
│   │   │   ├── contact.astro
│   │   │   ├── mentions-legales.astro
│   │   │   └── politique-confidentialite.astro
│   │   └── en/                   # English (Phase 2)
│   │       └── ...               # Mirror structure
│   │
│   ├── content/                  # MD content files (this sprint's deliverable)
│   │   ├── fr/
│   │   │   ├── home.md
│   │   │   ├── expertises/
│   │   │   ├── secteurs/
│   │   │   ├── resultats/
│   │   │   ├── a-propos/
│   │   │   ├── urgence.md
│   │   │   └── contact.md
│   │   └── en/                   # Translation files (Phase 2)
│   │
│   ├── i18n/
│   │   ├── fr.json               # UI strings (buttons, labels, navigation)
│   │   └── en.json               # English UI strings
│   │
│   └── styles/
│       └── global.css            # Tailwind directives (@tailwind base/components/utilities) + custom overrides
│
├── public/
│   ├── images/
│   ├── fonts/
│   ├── favicon.svg
│   └── robots.txt
│
├── api/                          # PHP form handlers (deployed alongside static files)
│   ├── contact.php
│   ├── urgence.php
│   └── includes/
│       ├── mailer.php            # PHPMailer wrapper
│       ├── validator.php         # Input validation
│       └── csrf.php              # CSRF token management
│
├── astro.config.mjs
├── tailwind.config.mjs           # Tailwind design system (colors, fonts, spacing, breakpoints)
├── package.json
└── tsconfig.json
```

---

## IV. TRANSLATION & LANGUAGE VERSIONING STRATEGY

### How it works with Astro:

```javascript
// astro.config.mjs
export default defineConfig({
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    routing: {
      prefixDefaultLocale: true  // /fr/expertises/erp
    }
  }
});
```

### URL structure:
```
French (default):  cactus.ma/fr/expertises/erp
English (future):  cactus.ma/en/expertise/erp
```

### Translation files:
```json
// src/i18n/fr.json
{
  "nav.expertises": "Expertises",
  "nav.secteurs": "Secteurs",
  "nav.resultats": "Résultats",
  "nav.about": "À Propos",
  "cta.urgence": "🚨 Urgence",
  "cta.contact": "Contactez-nous",
  "footer.rights": "© 2006-2026 Cactus Informatique. Tous droits réservés."
}
```

### Content translation:
- Each page has an MD file per locale: `src/content/fr/home.md` + `src/content/en/home.md`
- Phase 1: French only. English content files created as empty stubs
- Phase 2: English translations populated

---

## V. DEVELOPMENT PHASES

### 🟢 SPRINT 1 — Foundation (Week 1-2)
**Goal**: Skeleton + Design System + Core Components

| Task | Deliverable |
|---|---|
| Project init | `npm create astro@latest` with i18n config |
| Design system | `global.css` — colors, typography, spacing, breakpoints |
| Base layout | `BaseLayout.astro` — HTML head, SEO, schema markup |
| Header + Mega Menu | Desktop mega-menu + mobile hamburger |
| Footer | Full footer with all links |
| Language switcher | FR/EN toggle (EN disabled until Phase 2) |
| Breadcrumb | Auto-generated from URL path |

### 🟢 SPRINT 2 — Phase 1 Pages (Week 3-5)
**Goal**: All 15 launch pages live with real content

| Task | Pages |
|---|---|
| Homepage | Hero, shortcuts, expertises preview, stats, case studies, sectors, methodology, logos, CTA |
| Expertises Hub | `/expertises` — grid of 5 expertise cards |
| 5× Expertise pages | ERP, Migration, Cybersécurité, Infrastructure, Développement |
| Secteurs Hub | `/secteurs` — grid of sector cards |
| 1× Sector page | Transport & Logistique |
| Résultats Hub | `/resultats` — overview + links |
| Cas Clients Hub | `/resultats/cas-clients` — filterable list |
| Méthodologie | `/resultats/methodologie` |
| À Propos Hub | `/a-propos` (combines Histoire + Pourquoi Cactus) |
| Urgence | `/urgence` — emergency landing page |
| Contact | `/contact` — with PHP form |
| Legal pages | Mentions légales, Politique de confidentialité |

### 🟢 SPRINT 3 — Forms & Polish (Week 6)
**Goal**: Forms working, SEO verified, performance optimized

| Task | Deliverable |
|---|---|
| PHP contact form | `api/contact.php` with validation, CSRF, email sending |
| PHP urgence form | `api/urgence.php` with priority handling |
| Schema markup | JSON-LD per page type |
| Sitemap | Auto-generated XML sitemap |
| robots.txt | Configured for production |
| Performance audit | Lighthouse score ≥ 90 on all metrics |
| Mobile testing | All pages tested on mobile viewports |
| Browser testing | Chrome, Firefox, Safari, Edge |

### 🟡 SPRINT 4 — Phase 2 Enrichment (Month 2-3)
**Goal**: 13 additional pages

| Task | Pages |
|---|---|
| ERP sub-pages | Modules, Intégration ERP tiers, BI |
| Migration sub-pages | Migration ERP, Récupération données |
| Cybersécurité sub-pages | Audit sécurité, Tests d'intrusion |
| Infrastructure sub-pages | Virtualisation, Réseaux & VPN |
| Sector pages | Industrie & Agroalimentaire, Médical & Santé |
| Case studies | Autodistribution, Avon, Notaires |
| About sub-page | Notre Équipe |

### 🔵 SPRINT 5 — Phase 3 Expansion (Month 4-6)
**Goal**: Complete architecture + English

| Task | Pages |
|---|---|
| Remaining expertise sub-pages | Interfaçage, ISO 27002, PRA, Hébergement, Apps web/mobile, API |
| Remaining sectors | Finance & Distribution, Services Professionnels |
| Remaining case studies | Active Tech, Centrale Danone |
| About sub-page | Carrières |
| Blog infrastructure | Blog listing page, article template |
| English translation | All FR content translated to EN |

---

## VI. CONTENT FILES INVENTORY (Phase 1)

All content MD files follow this frontmatter structure:

```yaml
---
title: "Page Title"
meta_title: "SEO Meta Title (< 60 chars)"
meta_description: "SEO Meta Description (150-160 chars)"
h1: "Page H1 Heading"
slug: "url-slug"
locale: "fr"
schema_type: "Service"
primary_keyword: "mot-clé primaire"
phase: 1
last_updated: "2026-07-15"
---
```

### Phase 1 Content Files (this sprint):

| # | File | Path |
|---|---|---|
| 1 | Homepage | `fr/home.md` |
| 2 | Hub Expertises | `fr/expertises/_index.md` |
| 3 | ERP & Gestion | `fr/expertises/erp.md` |
| 4 | Migration & Données | `fr/expertises/migration-donnees.md` |
| 5 | Cybersécurité | `fr/expertises/cybersecurite.md` |
| 6 | Infrastructure & Cloud | `fr/expertises/infrastructure.md` |
| 7 | Développement Sur Mesure | `fr/expertises/developpement.md` |
| 8 | Hub Secteurs | `fr/secteurs/_index.md` |
| 9 | Transport & Logistique | `fr/secteurs/transport-logistique.md` |
| 10 | Hub Résultats | `fr/resultats/_index.md` |
| 11 | Cas Clients Hub | `fr/resultats/cas-clients.md` |
| 12 | Méthodologie | `fr/resultats/methodologie.md` |
| 13 | À Propos (Hub) | `fr/a-propos/_index.md` |
| 14 | Urgence IT | `fr/urgence.md` |
| 15 | Contact | `fr/contact.md` |
| 16 | Mentions Légales | `fr/mentions-legales.md` |
| 17 | Politique Confidentialité | `fr/politique-confidentialite.md` |

---

## VII. DEPENDENCIES (package.json)

```json
{
  "name": "cactus-website",
  "version": "1.0.0",
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview"
  },
  "dependencies": {
    "astro": "^5.x",
    "@astrojs/tailwind": "^6.x",
    "@astrojs/sitemap": "^3.x",
    "astro-seo": "^0.8.x",
    "motion": "^11.x"
  },
  "devDependencies": {
    "@astrojs/check": "^0.9.x",
    "tailwindcss": "^4.x",
    "typescript": "^5.x"
  }
}
```

### PHP Requirements:
- PHP 8.1+
- PHPMailer 6.x (via Composer or manual include)
- OpenSSL extension (for SMTP TLS)

---

## VIII. PRE-LAUNCH CHECKLIST

- [ ] All 15 Phase 1 pages have real content (no Lorem Ipsum)
- [ ] Contact form sends emails correctly (test with real SMTP)
- [ ] Emergency form sends with "URGENT" priority flag
- [ ] All meta titles < 60 characters, unique
- [ ] All meta descriptions 150-160 characters
- [ ] Schema markup validates (Google Rich Results Test)
- [ ] XML sitemap generated and accessible
- [ ] robots.txt allows crawling of all public pages
- [ ] Lighthouse Performance ≥ 90
- [ ] Lighthouse Accessibility ≥ 95
- [ ] Lighthouse SEO ≥ 95
- [ ] Mobile responsive on all pages (320px → 1440px+)
- [ ] Breadcrumbs working on all pages except Home
- [ ] Language switcher visible (EN shows "coming soon" or redirects to FR)
- [ ] Emergency CTA sticky on mobile
- [ ] Mega menu works on desktop, hamburger on mobile
- [ ] All internal links working (no 404s)
- [ ] Canonical tags on all pages
- [ ] Open Graph + Twitter Card meta on all pages
- [ ] Favicon and touch icons configured
- [ ] Analytics tracking installed (Google Analytics 4 or Matomo)
- [ ] Cookie consent banner functional

---

*Ce document est la source de vérité technique du projet. Toute décision de développement doit s'y conformer.*
