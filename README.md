# CHAOS HOOK — HOOK INTO THE CHAOS.

Minimal landing page for **CHAOS HOOK ($CHAOS)** — stable foundation for future features.

Single route (`/`), dark underground identity: deep black, acid green + electric purple,
distorted display type, film-grain noise, reduced-motion support.

Built with **Next.js 14 + TypeScript + Tailwind CSS 3**. No animation or icon
dependencies — the landing ships zero client JavaScript.

## Structure

```
app/
  layout.tsx   — SEO + social metadata, fonts, skip-link, JSON-LD
  page.tsx     — landing: header landmark, hero, footer landmark (single file)
  globals.css  — palette, noise, distort, glitch, scanlines, reduced-motion
  icon.svg     — hook favicon
lib/
  config.ts    — CENTRAL CONFIG (brand + token/social placeholders)
```

No `components/` directory — the landing is intentionally one self-contained
server component. Add components back only when a real section ships.

## Central config

Blockchain / social URLs live in **`lib/config.ts`**:

```ts
TOKEN.blockchain / contractAddress / totalSupply
TOKEN.explorerUrl / chartUrl / buyUrl
SOCIALS.xUrl / telegramUrl / communityUrl / docsUrl / privacyUrl
SITE.url
```

Empty string = “coming soon” / TBA states. The landing hardcodes no addresses
and links nowhere — placeholders are visible spans, never dead links.

## Run locally

Requires **Node.js 18.18+** (20 LTS recommended).

```powershell
npm install
npm run dev
# open http://localhost:3000

npm run build
npm start
```

Node is not installed in this workspace image, so `build` could not be
executed here. Static checks passed instead: no references to removed
`components/` or uninstalled packages, all Tailwind tokens used by the
landing exist in `tailwind.config.ts`.

## Placeholders still needing real info

1. `TOKEN.blockchain`
2. `TOKEN.contractAddress` (never publish an unverified address)
3. `TOKEN.totalSupply`
4. `TOKEN.explorerUrl` / `chartUrl` / `buyUrl`
5. `SOCIALS.xUrl` / `telegramUrl` / `communityUrl`
6. `SITE.url` + `metadataBase` in `app/layout.tsx` (currently `example.com`)
7. `SOCIALS.docsUrl` + `privacyUrl` when published

## Before deploying

- [ ] Fill `lib/config.ts` with verified values only
- [ ] Set the production domain in `lib/config.ts` + `app/layout.tsx`
- [ ] `npm run build` passes on a machine with Node installed
- [ ] Test 360px / 768px / 1440px, keyboard nav, screen reader landmarks
- [ ] Deploy (`next build` → `next start`) to Vercel / Netlify / Node host
