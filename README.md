# Argus — Marketing Website

The public face of **Argus**, an autonomous AI security startup for DeFi protocols. Built by [j12s](https://github.com/j12s-team).

> "The hundred-eyed guard that never sleeps."

This repo is a production-ready Vite + React + Tailwind site covering the landing page, four product pages (Protocol Guardian, SolGuard, Mosaic, Aivenstu), and a team page.

---

## Stack

- **Framework:** React 18 + Vite 5
- **Styling:** Tailwind CSS (custom Argus design tokens)
- **Routing:** React Router v6 (SPA)
- **Animation:** Framer Motion (scroll reveals, counters)
- **Icons:** lucide-react
- **Meta:** react-helmet-async
- **Fonts:** Inter (body) · Space Mono (display) · JetBrains Mono (terminal) — Google Fonts

## Quick start

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview production build
```

## Deploying

Already configured for **Vercel** — `vercel.json` sets up Vite build + SPA rewrites. Just point a Vercel project at this repo and deploy. The whole site is static.

## Project layout

```
src/
  App.jsx                main router + global layout
  main.jsx               entry
  styles/globals.css     Tailwind + Argus design tokens
  data/                  single source of truth for copy
    contact.js           email, schedule URL, GitHub
    products.js          the four products
    team.js              founders + open roles
    traction.js          loop steps, stats, inbound signals
  components/
    layout/              Navbar, Footer
    ui/                  Button, Card, Badge, EyeIcon, Typewriter, ...
    sections/            Hero, Problem, Solution, Products, ...
  pages/
    Landing.jsx          /
    ProtocolGuardian.jsx /protocol-guardian
    SolGuard.jsx         /solguard
    Mosaic.jsx           /mosaic
    Aivenstu.jsx         /aivenstu
    Team.jsx             /team
    NotFound.jsx
public/
  favicon.svg            Argus eye glyph
  og.svg                 Open Graph card
```

## Editing copy

Every piece of marketing copy lives in `src/data/`. Touch nothing in components for content changes:

- **Contact / email / Cal.com link** → `src/data/contact.js`
- **Product details, contract addresses, hackathon status** → `src/data/products.js`
- **Founder bios, open roles** → `src/data/team.js`
- **Inbound signals, stats, problem-stats** → `src/data/traction.js`

## Founder photos

Founder photos render as monogram avatars by default. To swap in real photos:

1. Drop the image at e.g. `public/team/rivaldo.jpg`.
2. In `src/data/team.js`, set `photo: '/team/rivaldo.jpg'`.

That's it — `AvatarMonogram` keeps the same border treatment with a photo.

## Design tokens & theming

Colors are defined as CSS variables (RGB triplets) in `src/styles/globals.css` and exposed to Tailwind via `rgb(var(--x) / <alpha-value>)`. That means every utility like `bg-argus-bg`, `text-argus-accent`, `border-argus-border/40` automatically flips between dark and light themes — no per-component overrides needed.

Theme toggle is in the navbar (sun/moon icon). The selected theme is stored in `localStorage` under `argus-theme` and respects `prefers-color-scheme` on first visit. An inline `<script>` in `index.html` sets `data-theme` before paint to avoid the dark→light flash on reload.

| Token | Dark | Light |
| --- | --- | --- |
| `--argus-bg` | `#0A0A0F` near-black | `#F8FAFC` slate-50 |
| `--argus-accent` | `#00FFB2` bright mint | `#009E75` AA-contrast mint |
| `--argus-card` | `#12121A` | `#FFFFFF` |
| `--argus-border` | `#1E1E30` | `#E2E8F0` slate-200 |
| `--argus-fg` | white | `#0F172A` slate-900 |
| `--argus-muted` | `#8888AA` | `#64748B` slate-500 |

**Always-dark code surfaces** — `Terminal` and `LiveFeed` use a separate set of `--argus-code-*` tokens (defined once in `:root`, never overridden). Code displays read better dark even on a light page, so they keep their console aesthetic.

Section helpers: `.section`, `.wrap`, `.eyebrow`, `.h-display`, `.h-section`, `.card-base`, `.accent-bar`, `.link-arrow`.

## Brand notes

- Never say "hack-proof", "fully secure", or "prevents all exploits". Use *mitigation, monitoring, response orchestration, risk reduction, blast radius reduction*.
- Never hype AI. Use *adaptive heuristics, behavioral intelligence, anomaly detection, contextual classification*.
- All hackathon submissions are **under review** — never imply wins.
- Inbound traction is the headline. Keep it loud.

---

© 2026 Argus · Built by j12s · São Paulo, Brazil
