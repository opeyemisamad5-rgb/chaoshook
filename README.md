# CHAOS HOOK — HOOK INTO THE CHAOS.

Experimental Web3 brand site for **CHAOS HOOK ($CHAOS)**.

Dark underground aesthetic · acid green + electric purple · custom SVG hook mascot · terminal details · scroll reveals · glitch-on-hover · reduced-motion support.

Built with **Next.js 14 + TypeScript + Tailwind CSS 3 + Framer Motion + Lucide**.

## Structure

```
app/
  layout.tsx      — SEO + social metadata, fonts, skip-link, JSON-LD
  page.tsx        — composes all sections
  globals.css     — palette, noise, glitch, scanlines, reduced-motion
  icon.svg        — hook favicon
components/
  Navbar.tsx      — sticky nav + signal strip + mobile menu
  Hero.tsx        — headline, CTAs, $CHAOS stats, Ticker
  HookMascot.tsx  — original SVG mascot "THE HOOKLING"
  Particles.tsx   — lightweight canvas particles (pauses offscreen)
  Reveal.tsx      — scroll-reveal wrapper + SectionTag + SectionHeading
  Philosophy.tsx  — CHAOS IS NOT A BUG. (3 statements)
  Experiment.tsx  — 3 concepts + Experiments-in-Development terminal
  Token.tsx       — MEET $CHAOS, copy button, disabled action buttons
  Roadmap.tsx     — NO SCRIPT. JUST EXECUTION. (edit PHASES array)
  Community.tsx   — social buttons with placeholder states
  Faq.tsx         — 6 honest answers, accordion
  Footer.tsx      — nav, socials, docs, risk disclaimer
lib/
  config.ts       — CENTRAL CONFIG (edit only this file to go live)
```

## Central config

All blockchain / social URLs live in **`lib/config.ts`**:

```ts
TOKEN.blockchain / contractAddress / totalSupply
TOKEN.explorerUrl / chartUrl / buyUrl
SOCIALS.xUrl / telegramUrl / communityUrl / docsUrl / privacyUrl
SITE.url
```

Empty string = UI automatically shows `COMING SOON` / disabled buttons. No code changes needed elsewhere.

## Run locally

Requires **Node.js 18.18+** (20 LTS recommended).

```powershell
# 1. Install Node.js from https://nodejs.org (winget alternative below)
winget install OpenJS.NodeJS.LTS

# 2. In this folder:
npm install
npm run dev
# open http://localhost:3000

# 3. Production check:
npm run build
npm start
```

## Placeholders still needing real info

1. `TOKEN.blockchain` — e.g. `Base`
2. `TOKEN.contractAddress` — verified address
3. `TOKEN.totalSupply` — verified supply
4. `TOKEN.explorerUrl` — e.g. Basescan / Etherscan token page
5. `TOKEN.chartUrl` — e.g. Dexscreener pair URL
6. `TOKEN.buyUrl` — real swap / purchase URL (no simulated buys)
7. `SOCIALS.xUrl` — https://x.com/…
8. `SOCIALS.telegramUrl` — https://t.me/…
9. `SOCIALS.communityUrl` — Discord / forum / hub
10. `SITE.url` — production domain (also update `metadataBase` in `app/layout.tsx`)
11. `SOCIALS.docsUrl` + `privacyUrl` — when published
12. Roadmap `PHASES` statuses — flip `PLANNED` → `ACTIVE`/`COMPLETE` only when true

Until filled, token action buttons stay disabled and social buttons show `*_TBA` badges. This is intentional.

## Before deploying

- [ ] Fill `lib/config.ts` with verified values only
- [ ] Set production domain in `lib/config.ts` + `app/layout.tsx` metadataBase
- [ ] `npm run build` passes with no errors
- [ ] Test mobile (360px), tablet (768px), desktop (1440px)
- [ ] Test keyboard nav + screen reader labels + `prefers-reduced-motion`
- [ ] Verify no broken links (placeholders are visibly disabled, not dead links)
- [ ] Deploy to Vercel / Netlify / any Node host (`npm run build` → `npm start`)
- [ ] Never publish an unverified contract address — always cross-check official channels

## Notes

- No wallet connection, no fake blockchain calls, no secrets, no unnecessary deps.
- No invented tokenomics, audits, listings, or stats anywhere in the UI.
- Particles + animations pause offscreen and respect `prefers-reduced-motion`.
