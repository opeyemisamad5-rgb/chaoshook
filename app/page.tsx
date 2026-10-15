export default function Page() {
  return (
    <main
      id="main"
      className="noise relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-void px-6 text-center text-bone"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-volt/15 blur-[130px]"
      />
      <p className="relative font-mono text-[11px] tracking-[0.3em] text-acid">
        CHAOS HOOK — $CHAOS
      </p>
      <h1 className="distort relative mt-5 max-w-3xl text-5xl font-bold leading-[0.95] sm:text-7xl">
        HOOK INTO
        <br />
        THE CHAOS.
      </h1>
      <p className="relative mt-6 max-w-xl text-white/65">
        An experimental corner of Web3 where unpredictability meets onchain culture.
        More coming soon.
      </p>
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
  );
}
