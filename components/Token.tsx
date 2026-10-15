"use client";

import { useState } from "react";
import { Copy, Check, ExternalLink, BarChart3, ShoppingCart, ShieldAlert } from "lucide-react";
import { TOKEN, isConfigured } from "@/lib/config";
import { Reveal, SectionTag, SectionHeading } from "./Reveal";

function CopyButton({ text }: { text: string }) {
  const [ok, setOk] = useState(false);
  const configured = isConfigured(text);
  if (!configured) return null;
  return (
    <button
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text);
          setOk(true);
          setTimeout(() => setOk(false), 1600);
        } catch {
          // clipboard unavailable — select fallback
          setOk(false);
        }
      }}
      className="inline-flex items-center gap-2 border border-line bg-panel px-4 py-2.5 font-mono text-[12px] tracking-wider text-white/80 transition-colors hover:border-acid hover:text-acid"
      aria-live="polite"
    >
      {ok ? <Check size={15} className="text-acid" /> : <Copy size={15} />}
      {ok ? "COPIED" : "COPY"}
    </button>
  );
}

export default function Token() {
  const hasAddress = isConfigured(TOKEN.contractAddress);
  const hasChain = isConfigured(TOKEN.blockchain);
  const hasSupply = isConfigured(TOKEN.totalSupply);

  const actions = [
    { label: "View on Explorer", href: TOKEN.explorerUrl, icon: ExternalLink },
    { label: "View Chart", href: TOKEN.chartUrl, icon: BarChart3 },
    { label: "Buy $CHAOS", href: TOKEN.buyUrl, icon: ShoppingCart, primary: true }
  ];

  return (
    <section id="token" className="relative border-b border-line bg-void" aria-label="Token">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
        <Reveal>
          <SectionTag index="03" label="TOKEN" />
        </Reveal>
        <div className="mt-6">
          <Reveal>
            <SectionHeading title="MEET" accent="$CHAOS" sub="verified facts only. Anything unconfirmed is labeled as TBD — we do not invent supply, chain, or addresses." />
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          {/* data panel */}
          <Reveal>
            <div className="border border-line bg-charcoal">
              <div className="flex items-center justify-between border-b border-line px-6 py-4">
                <span className="font-mono text-[11px] tracking-[0.25em] text-white/50">
                  TOKEN.SPEC // READ-ONLY
                </span>
                <span className="inline-flex items-center gap-2 border border-acid/50 bg-acid/10 px-3 py-1 font-mono text-[11px] tracking-widest text-acid">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-acid" aria-hidden />
                  {TOKEN.symbol}
                </span>
              </div>

              <dl className="divide-y divide-line">
                {[
                  ["Token Name", TOKEN.name],
                  ["Token Symbol", TOKEN.symbol],
                  ["Blockchain", hasChain ? TOKEN.blockchain : "[ADD CHOSEN BLOCKCHAIN]"],
                  ["Total Supply", hasSupply ? TOKEN.totalSupply : "[ADD VERIFIED TOTAL SUPPLY]"]
                ].map(([k, v]) => (
                  <div key={k} className="grid gap-1 px-6 py-5 sm:grid-cols-[180px_1fr] sm:items-center">
                    <dt className="font-mono text-[11px] tracking-[0.22em] text-white/45">{k.toUpperCase()}</dt>
                    <dd className={`font-mono text-[15px] ${v.startsWith("[ADD") ? "text-amber-300/90" : "text-white"}`}>
                      {v}
                    </dd>
                  </div>
                ))}

                <div className="px-6 py-5">
                  <dt className="font-mono text-[11px] tracking-[0.22em] text-white/45">
                    CONTRACT ADDRESS
                  </dt>
                  <dd className="mt-3">
                    {hasAddress ? (
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                        <code className="flex-1 break-all border border-line bg-black px-4 py-3 font-mono text-[13px] text-acid">
                          {TOKEN.contractAddress}
                        </code>
                        <CopyButton text={TOKEN.contractAddress} />
                      </div>
                    ) : (
                      <div className="border border-dashed border-amber-400/50 bg-amber-400/[0.06] px-4 py-4 font-mono text-[13px] tracking-widest text-amber-300">
                        CONTRACT ADDRESS COMING SOON.
                      </div>
                    )}
                    <p className="mt-2 font-mono text-[11px] text-white/35">
                      [ADD CONTRACT ADDRESS] — always verify from official channels before interacting.
                    </p>
                  </dd>
                </div>
              </dl>

              {/* actions */}
              <div className="grid gap-3 border-t border-line bg-black/40 p-6 sm:grid-cols-3">
                {actions.map((a) => {
                  const live = isConfigured(a.href);
                  const cls = a.primary
                    ? live
                      ? "bg-acid text-black hover:bg-white"
                      : "cursor-not-allowed border border-line text-white/30"
                    : live
                      ? "border border-white/25 text-white hover:border-acid hover:text-acid"
                      : "cursor-not-allowed border border-line text-white/30";
                  return live ? (
                    <a
                      key={a.label}
                      href={a.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center gap-2 px-4 py-3.5 text-[13px] font-bold transition-all ${cls}`}
                    >
                      <a.icon size={16} /> {a.label.toUpperCase()}
                    </a>
                  ) : (
                    <button
                      key={a.label}
                      disabled
                      title={`${a.label} — destination not configured yet`}
                      className={`inline-flex items-center justify-center gap-2 px-4 py-3.5 text-[13px] font-bold ${cls}`}
                      aria-disabled="true"
                    >
                      <a.icon size={16} /> {a.label.toUpperCase()}
                    </button>
                  );
                })}
              </div>
              <p className="border-t border-line px-6 py-3 font-mono text-[11px] text-white/35">
                Buttons stay disabled until real explorer / chart / purchase URLs are configured in{" "}
                <code className="text-acid">lib/config.ts</code>. No simulated purchases.
              </p>
            </div>
          </Reveal>

          {/* side note */}
          <div className="flex flex-col gap-6">
            <Reveal delay={0.1}>
              <div className="border border-volt/50 bg-volt/10 p-8">
                <div className="flex items-center gap-2 font-mono text-[11px] tracking-[0.22em] text-voltSoft">
                  <ShieldAlert size={14} /> TOKENOMICS STATUS
                </div>
                <p className="distort mt-4 text-2xl font-bold leading-tight">
                  TOKEN DETAILS WILL BE PUBLISHED WHEN VERIFIED.
                </p>
                <p className="mt-4 font-mono text-[12px] leading-relaxed text-white/60">
                  We do not publish invented supply splits, taxes, or distribution claims. When
                  tokenomics are finalized and verifiable, they appear here with source references.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="noise relative overflow-hidden border border-line bg-panel p-8">
                <p className="font-mono text-[11px] tracking-[0.25em] text-acid">WHY $CHAOS EXISTS</p>
                <p className="mt-4 text-lg leading-relaxed text-white/75">
                  Not a promise of returns. A coordinate for the experiment — a shared symbol the
                  community can rally around while we test what onchain culture can be.
                </p>
                <p className="mt-4 border-l-2 border-acid pl-4 font-mono text-[12px] text-white/50">
                  Crypto assets are volatile. Nothing here is financial advice. DYOR.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
