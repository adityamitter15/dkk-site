# DKK London

Daigaku Karate Kai London website. Okinawan Goju Ryu karate club at the University of Westminster.

- **Live:** https://www.goju-karate.co.uk
- **Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4
- **Output:** Static export, hosted on Firebase Hosting

## Setup

```bash
npm install
npm run dev -- -p 3001    # http://localhost:3001
```

## Build & deploy

```bash
npm run build                       # outputs static site to /out
firebase deploy --only hosting      # pushes /out to Firebase Hosting
```

## Project layout

```
app/              # routes (App Router)
  layout.tsx      # root layout, JSON-LD, navbar, footer
  page.tsx        # homepage
  [route]/        # one folder per route
  yudansha/[slug] # dynamic per-member pages (generateStaticParams)
  sitemap.ts      # generated sitemap.xml
  robots.ts       # generated robots.txt
components/       # shared React components
data/             # static content (yudansha list, etc.)
public/images/    # all imagery, organised by section
public/videos/    # hero + showcase videos
firebase.json     # hosting config + cache + CSP headers
```

## Design tokens

Tailwind v4 `@theme` block in `app/globals.css` exposes:

| Token              | Value     | Use for                                          |
| ------------------ | --------- | ------------------------------------------------ |
| `brand`            | `#a8201a` | Club identity, CTAs, action content              |
| `brand-hover`      | `#c62828` | Button hover                                     |
| `gold`             | `#c9a96e` | Cultural / heritage content (history, books)     |
| `bg`               | `#0f0e0c` | Page background                                  |
| `card`             | `#141311` | Card / surface background                        |
| `warm-light`       | `#f5f0e8` | "Your First Class" warm section only             |
| `font-display`     | Bebas Neue| Headings                                         |

Body font is Inter. Both loaded from Google Fonts (see `globals.css`).

## Key conventions

- **Static export** (`next.config.ts`): no SSR, all images `unoptimized: true`.
- **GIFs:** use `<SafeImage>` (forces `unoptimized` so animation isn't stripped).
- **All `target="_blank"` links** need `rel="noopener noreferrer"`.
- **Contact form** posts to Formspree (`xeedpgvk`). Honeypot + 60s cooldown + min render time guard against bots.
- **Mobile CTA** ("Come and Train") and **Back-to-top** button live on separate breakpoints (`lg:hidden` / `hidden lg:flex`) so they never overlap.
- **prefers-reduced-motion** disables ScrollReveal blur, CountUp animation and TestimonialRotator auto-advance.

## Adding a yudansha member

Edit `data/yudansha.ts`. Drop portrait + (optional) action image into `public/images/Yudansha/`. The dynamic route `/yudansha/[slug]` and the sitemap pick up the new entry automatically. Use the existing `Member` type as a template.

## Adding gallery photos

Edit the `images` array in `app/gallery/page.tsx`. Each entry needs `src`, `alt`, `caption`, `tall` (boolean — true = portrait aspect, false = landscape) and `category` (used for the filter tabs).
