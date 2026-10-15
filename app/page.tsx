import { SITE, TOKEN, isConfigured } from "@/lib/config";

const year = new Date().getFullYear();
const hasAddress = isConfigured(TOKEN.contractAddress);

const NAV = [
  { label: "How it works", href: "#how" },
  { label: "Experiments", href: "#experiments" },
  { label: "Principles", href: "#principles" },
  { label: "Join", href: "#join" }
];

const STEPS = [
  {
    n: "01",
    title: "Read the signal",
    body: "Start here. No wallet, no signup — just read what the experiment is and isn't."
  },
  {
    n: "02",
    title: "Pick a thread",
    body: "Onchain experiments, chaos culture, or the next move. Follow whichever pulls you."
  },
  {
    n: "03",
    title: "Make something",
    body: "Memes, lore, feedback on early concepts. Culture is co-authored, not announced."
  },
  {
    n: "04",
    title: "Shape what ships",
    body: "Concepts graduate only with community signal. Nothing ships on hype alone."
  }
];

const THREADS = [
  {
    code: "EXP.001",
    title: "Onchain experiments",
    body: "Unconventional mechanics and community-driven ideas, tested in public."
  },
  {
    code: "EXP.002",
    title: "Chaos culture",
    body: "Memes, creativity, participation. A recognizable identity built by the crowd."
  },
  {
    code: "EXP.003",
    title: "The next move",
    body: "Future experiments appear here only when they become real and verifiable."
  }
];

const PRINCIPLES = [
  {
    title: "Verifiable only",
    body: "Supply, chain, and addresses get published when confirmed — never before."
  },
  {
    title: "Concepts labeled",
    body: "Ideas wear a CONCEPT badge. Shipped work earns its status honestly."
  },
  {
    title: "No hype economics",
    body: "No profit promises, no invented stats. Volatility is real; DYOR is mandatory."
  }
];

function HookMark() {
  return (
    <span
      aria-hidden
      className="relative grid h-8 w-8 place-items-center border border-line bg-charcoal"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M7 3v8.5c0 4.5 2.5 7.5 7 7.5 3.2 0 5.5-2 5.5-4.8 0-2.4-1.7-4-3.8-4.2"
          stroke="#C8FF00"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <circle cx="7" cy="3" r="1.6" fill="#8B2BFF" />
      </svg>
      <span aria-hidden className="absolute -right-px -top-px h-2 w-2 bg-acid" />
    </span>
  );
}

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-void text-bone">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-line bg-void/85 backdrop-blur-md">
        <nav
          aria-label="Primary"
          className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-6"
        >
          <a href="#top" className="flex items-center gap-3" aria-label="CHAOS HOOK home">
            <HookMark />
            <span className="leading-none">
              <span className="block text-[14px] font-bold tracking-tight">
                {SITE.name.replace(" ", "_")}
              </span>
              <span className="mt-1 block font-mono text-[10px] tracking-[0.3em] text-white/50">
                {SITE.symbol} // LANDING
              </span>
            </span>
          </a>
          <ul className="hidden items-center gap-7 md:flex">
            {NAV.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="font-mono text-[12px] tracking-[0.18em] text-white/70 transition-colors hover:text-acid"
                >
                  {l.label.toUpperCase()}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#join"
            className="hidden bg-acid px-5 py-2.5 text-[13px] font-bold text-black transition-colors hover:bg-white md:inline-block"
          >
            ENTER THE CHAOS
          </a>
          <details className="relative md:hidden">
            <summary
              aria-label="Open menu"
              className="grid h-10 w-10 cursor-pointer list-none place-items-center border border-line bg-charcoal text-xl leading-none [&::-webkit-details-marker]:hidden"
            >
              ☰
            </summary>
            <div className="absolute right-0 top-12 w-56 border border-line bg-charcoal p-2">
              {NAV.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="block px-4 py-3 font-mono text-[12px] tracking-[0.18em] text-white/80 hover:bg-panel hover:text-acid"
                >
                  {l.label.toUpperCase()}
                </a>
              ))}
              <a
                href="#join"
                className="mt-1 block bg-acid px-4 py-3 text-center text-[13px] font-bold text-black"
              >
                ENTER THE CHAOS
              </a>
            </div>
          </details>
        </nav>
      </header>

      {/* HERO */}
      <main id="main">
        <section
          id="top"
          aria-label="Intro"
          className="noise relative overflow-hidden border-b border-line"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-volt/15 blur-[130px]"
          />
          <div className="relative mx-auto w-full max-w-5xl px-6 pb-14 pt-14 text-center sm:pt-20">
            <p className="mx-auto inline-flex items-center gap-2 border border-line bg-charcoal/80 px-4 py-2 font-mono text-[11px] tracking-[0.22em] text-white/70">
              <span aria-hidden className="h-1.5 w-1.5 animate-pulse rounded-full bg-acid" />
              EXPERIMENTAL <span className="text-acid">— CONCEPT STAGE</span>
            </p>
            <h1 className="distort mx-auto mt-6 max-w-3xl text-5xl font-bold leading-[0.95] sm:text-7xl">
              THE MARKET IS ORDER.
              <br />
              WE ARE THE <span className="text-acid">INTERRUPTION.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-white/65">
              {SITE.description} We question the predictable and explore what happens when the
              rules stop feeling familiar.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="#how"
                className="bg-acid px-7 py-4 text-sm font-bold text-black transition-all hover:-translate-y-0.5 hover:bg-white"
              >
                EXPLORE THE EXPERIMENT
              </a>
              <a
                href="#join"
                className="border border-white/25 bg-white/[0.03] px-7 py-4 text-sm font-bold text-white transition-colors hover:border-volt hover:bg-volt/15 hover:text-voltSoft"
              >
                JOIN THE COMMUNITY
              </a>
            </div>
            <dl className="mx-auto mt-10 grid max-w-xl grid-cols-3 divide-x divide-line border border-line bg-black/50 font-mono">
              {[
                ["TICKER", SITE.symbol],
                ["STAGE", "CONCEPT"],
                ["CHAIN", "TBA"]
              ].map(([k, v]) => (
                <div key={k} className="px-4 py-3">
                  <dt className="text-[10px] tracking-[0.25em] text-white/40">{k}</dt>
                  <dd
                    className={`mt-1 text-sm font-bold ${v === SITE.symbol ? "text-acid" : "text-white"}`}
                  >
                    {v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* EXPERIMENT THREADS */}
        <section id="experiments" aria-label="Experiments" className="border-b border-line">
          <div className="mx-auto w-full max-w-5xl px-6 py-16">
            <p className="font-mono text-[11px] tracking-[0.25em] text-acid">[01] THE EXPERIMENT</p>
            <h2 className="distort mt-4 max-w-2xl text-3xl font-bold leading-tight sm:text-5xl">
              THIS IS WHERE THINGS GET INTERESTING.
            </h2>
            <div className="mt-10 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-3">
              {THREADS.map((t) => (
                <article key={t.code} className="flex h-full flex-col bg-charcoal p-7">
                  <div className="flex items-center justify-between font-mono text-[11px] tracking-[0.22em]">
                    <span className="text-white/40">{t.code}</span>
                    <span className="border border-acid/50 px-2 py-1 text-acid">CONCEPT</span>
                  </div>
                  <h3 className="mt-6 text-xl font-bold">{t.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-white/65">{t.body}</p>
                  <p className="mt-auto pt-6 font-mono text-[11px] text-white/30">
                    <span className="caret">awaiting_signal</span>
                  </p>
                </article>
              ))}
            </div>
            <div className="mt-6 border border-line bg-black/40 px-5 py-4 font-mono text-[12px] leading-relaxed text-white/55">
              <span className="text-acid">&gt;</span> Contract:{" "}
              {hasAddress ? (
                <code className="break-all text-acid">{TOKEN.contractAddress}</code>
              ) : (
                <span className="text-amber-300">COMING SOON — nothing to verify yet.</span>
              )}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how" aria-label="How it works" className="border-b border-line bg-charcoal">
          <div className="mx-auto w-full max-w-5xl px-6 py-16">
            <p className="font-mono text-[11px] tracking-[0.25em] text-acid">[02] HOW IT WORKS</p>
            <h2 className="distort mt-4 max-w-2xl text-3xl font-bold leading-tight sm:text-5xl">
              NO SCRIPT. JUST EXECUTION.
            </h2>
            <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {STEPS.map((s) => (
                <li key={s.n} className="border border-line bg-void p-6">
                  <span className="grid h-10 w-10 place-items-center border border-acid/60 bg-acid/10 font-mono text-sm font-bold text-acid">
                    {s.n}
                  </span>
                  <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-white/60">{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* PRINCIPLES */}
        <section id="principles" aria-label="Principles" className="border-b border-line">
          <div className="mx-auto w-full max-w-5xl px-6 py-16">
            <p className="font-mono text-[11px] tracking-[0.25em] text-acid">[03] PRINCIPLES</p>
            <h2 className="distort mt-4 max-w-2xl text-3xl font-bold leading-tight sm:text-5xl">
              CHAOS IS NOT A BUG.
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {PRINCIPLES.map((p) => (
                <article key={p.title} className="border-l-2 border-acid/70 pl-5">
                  <h3 className="text-lg font-bold text-acid">{p.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-white/60">{p.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* JOIN */}
        <section
          id="join"
          aria-label="Join the community"
          className="noise relative overflow-hidden border-b border-line bg-charcoal"
        >
          <div className="relative mx-auto w-full max-w-3xl px-6 py-16 text-center">
            <p className="font-mono text-[11px] tracking-[0.25em] text-acid">[04] COMMUNITY</p>
            <h2 className="distort mx-auto mt-4 text-3xl font-bold leading-tight sm:text-5xl">
              CHAOS DOESN&apos;T BUILD ITSELF.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/65">
              The experiment is more interesting when you&apos;re part of it.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              {["FOLLOW ON X — TBA", "JOIN TELEGRAM — TBA", "COMMUNITY HUB — TBA"].map((l) => (
                <span
                  key={l}
                  aria-disabled="true"
                  title="Link pending — configure in lib/config.ts"
                  className="cursor-not-allowed border border-dashed border-line px-6 py-3.5 font-mono text-[11px] tracking-[0.18em] text-white/35"
                >
                  {l}
                </span>
              ))}
            </div>
            <p className="mx-auto mt-6 max-w-xl font-mono text-[11px] leading-relaxed text-white/35">
              Social links activate automatically once real URLs are set in{" "}
              <code className="text-acid">lib/config.ts</code>. We never link to unrelated
              accounts.
            </p>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-black">
        <div className="mx-auto w-full max-w-5xl px-6 py-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div>
              <span className="flex items-center gap-3">
                <HookMark />
                <span className="distort text-xl font-bold">
                  HOOK INTO <span className="text-acid">THE CHAOS.</span>
                </span>
              </span>
              <p className="mt-3 max-w-sm font-mono text-[12px] leading-relaxed text-white/50">
                {SITE.description} Concepts are concepts, facts are labeled.
              </p>
            </div>
            <nav aria-label="Footer">
              <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[14px]">
                {NAV.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="text-white/70 transition-colors hover:text-acid">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="mt-8 border border-amber-400/30 bg-amber-400/[0.05] px-5 py-4 font-mono text-[11px] leading-relaxed text-amber-200/80">
            <span className="font-bold tracking-[0.2em]">RISK DISCLAIMER — </span>
            Crypto assets are volatile and experimental. Nothing here is financial advice or a
            promise of returns. Do your own research and never risk more than you can afford
            to lose.
          </div>
          <div className="mt-6 flex flex-col gap-2 border-t border-line pt-6 font-mono text-[11px] tracking-[0.15em] text-white/35 sm:flex-row sm:items-center sm:justify-between">
            <span>
              © {year} {SITE.name} — ALL CHAOS RESERVED.
            </span>
            <span>{SITE.symbol} // CONCEPT STAGE</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
