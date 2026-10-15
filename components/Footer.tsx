import { ArrowUp } from "lucide-react";
import { SITE, SOCIALS, TOKEN, isConfigured } from "@/lib/config";
import { HookLogo } from "./Navbar";

export default function Footer() {
  const year = new Date().getFullYear();
  const nav = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "The Experiment", href: "#experiment" },
    { label: "Token", href: "#token" },
    { label: "Roadmap", href: "#roadmap" },
    { label: "Community", href: "#community" },
    { label: "FAQ", href: "#faq" }
  ];

  const socials = [
    { label: "X", href: SOCIALS.xUrl, tag: "X_URL_TBA" },
    { label: "Telegram", href: SOCIALS.telegramUrl, tag: "TG_URL_TBA" },
    { label: "Community", href: SOCIALS.communityUrl, tag: "HUB_URL_TBA" }
  ];

  return (
    <footer className="bg-black" aria-label="Footer">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.6fr_0.6fr_0.6fr]">
          <div>
            <HookLogo />
            <p className="distort mt-5 text-2xl font-bold">
              HOOK INTO <span className="text-acid">THE CHAOS.</span>
            </p>
            <p className="mt-3 max-w-sm font-mono text-[12px] leading-relaxed text-white/50">
              {SITE.description} Experimental build — concepts are concepts, facts are labeled.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 border border-line bg-charcoal px-3 py-2 font-mono text-[11px] text-white/60">
              <span className="h-1.5 w-1.5 rounded-full bg-acid" aria-hidden />
              {TOKEN.symbol} // {isConfigured(TOKEN.blockchain) ? TOKEN.blockchain : "CHAIN TBA"}
            </div>
          </div>

          <nav aria-label="Footer navigation">
            <h3 className="font-mono text-[11px] tracking-[0.25em] text-white/40">NAVIGATE</h3>
            <ul className="mt-4 space-y-2.5 text-[14px]">
              {nav.map((n) => (
                <li key={n.href + n.label}>
                  <a href={n.href} className="text-white/70 transition-colors hover:text-acid">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Social links">
            <h3 className="font-mono text-[11px] tracking-[0.25em] text-white/40">SIGNALS</h3>
            <ul className="mt-4 space-y-2.5 text-[14px]">
              {socials.map((s) => (
                <li key={s.label}>
                  {isConfigured(s.href) ? (
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/70 transition-colors hover:text-acid"
                    >
                      {s.label} ↗
                    </a>
                  ) : (
                    <span className="text-white/30" title="Placeholder — configure in lib/config.ts">
                      {s.label} <span className="font-mono text-[10px] text-amber-300/70">[{s.tag}]</span>
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-mono text-[11px] tracking-[0.25em] text-white/40">DOCS</h3>
            <ul className="mt-4 space-y-2.5 text-[14px]">
              <li>
                {isConfigured(SOCIALS.docsUrl) ? (
                  <a href={SOCIALS.docsUrl} className="text-white/70 hover:text-acid">
                    Token documentation ↗
                  </a>
                ) : (
                  <span className="text-white/30">Token docs <span className="font-mono text-[10px] text-amber-300/70">[DOCS_TBA]</span></span>
                )}
              </li>
              <li>
                {isConfigured(SOCIALS.privacyUrl) ? (
                  <a href={SOCIALS.privacyUrl} className="text-white/70 hover:text-acid">
                    Privacy policy ↗
                  </a>
                ) : (
                  <span className="text-white/30">Privacy policy <span className="font-mono text-[10px] text-amber-300/70">[TBA]</span></span>
                )}
              </li>
              <li>
                <a href="#token" className="text-white/70 hover:text-acid">
                  Contract status
                </a>
              </li>
              <li>
                <a
                  href="#home"
                  className="inline-flex items-center gap-1.5 border border-line px-3 py-2 font-mono text-[11px] text-white/60 transition-colors hover:border-acid hover:text-acid"
                >
                  <ArrowUp size={13} /> BACK TO TOP
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border border-amber-400/30 bg-amber-400/[0.05] px-5 py-4 font-mono text-[11px] leading-relaxed text-amber-200/80">
          <span className="font-bold tracking-[0.2em]">RISK DISCLAIMER — </span>
          Crypto assets are volatile and experimental. Nothing on this site is financial advice,
          and nothing guarantees profit or returns. Always conduct your own research, verify
          contract addresses from official channels, and never risk more than you can afford to
          lose.
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-line pt-6 font-mono text-[11px] tracking-[0.15em] text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {year} {SITE.name} — ALL CHAOS RESERVED.
          </span>
          <span>
            BUILT DIFFERENT <span className="text-acid">//</span> NO TEMPLATE ENERGY
          </span>
        </div>
      </div>
    </footer>
  );
}
