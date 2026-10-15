import { SITE } from "@/lib/config";

const year = new Date().getFullYear();

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
      <header className="border-b border-line">
        <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-6">
          <span className="flex items-center gap-3">
            <HookMark />
            <span className="leading-none">
              <span className="block text-[14px] font-bold tracking-tight">
                {SITE.name.replace(" ", "_")}
              </span>
              <span className="mt-1 block font-mono text-[10px] tracking-[0.3em] text-white/50">
                {SITE.symbol} // LANDING
              </span>
            </span>
          </span>
          <span className="hidden font-mono text-[10px] tracking-[0.25em] text-white/40 sm:block">
            {SITE.tagline}
          </span>
        </div>
      </header>

      <main
        id="main"
        className="noise relative flex flex-1 flex-col items-center justify-center overflow-hidden px-6 py-16 text-center"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-volt/15 blur-[130px]"
        />
        <p className="relative font-mono text-[11px] tracking-[0.3em] text-acid">
          {SITE.name} — {SITE.symbol}
        </p>
        <h1 className="distort relative mt-5 max-w-3xl text-5xl font-bold leading-[0.95] sm:text-7xl">
          HOOK INTO
          <br />
          THE CHAOS.
        </h1>
        <p className="relative mt-6 max-w-xl text-white/65">{SITE.description} More coming soon.</p>
        <div className="relative mt-8 flex flex-col gap-3 sm:flex-row">
          <span className="border border-dashed border-line px-6 py-3 font-mono text-[12px] tracking-[0.2em] text-white/40">
            CONTRACT: COMING SOON
          </span>
          <span className="border border-dashed border-line px-6 py-3 font-mono text-[12px] tracking-[0.2em] text-white/40">
            COMMUNITY: TBA
          </span>
        </div>
        <p className="relative mt-10 font-mono text-[11px] text-white/35">
          Crypto assets are volatile. Nothing here is financial advice. DYOR.
        </p>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-1 px-6 py-5 font-mono text-[11px] tracking-[0.15em] text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {year} {SITE.name} — ALL CHAOS RESERVED.
          </span>
          <span>
            {SITE.tagline} <span className="text-acid">//</span> NO GUARANTEES, NO HYPE
          </span>
        </div>
      </footer>
    </div>
  );
}
