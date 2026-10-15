import { Reveal, SectionTag, SectionHeading } from "./Reveal";

const ITEMS = [
  {
    n: "01",
    title: "BREAK THE PATTERN",
    body: "We question the predictable and experiment with new ideas.",
    meta: "anti-template // protocol of curiosity"
  },
  {
    n: "02",
    title: "EMBRACE THE UNKNOWN",
    body: "We explore unconventional possibilities in the onchain world.",
    meta: "field notes from the edge"
  },
  {
    n: "03",
    title: "BUILD DIFFERENT",
    body: "We want to create an identity that stands apart from the usual crypto playbook.",
    meta: "identity > imitation"
  }
];

export default function Philosophy() {
  return (
    <section id="about" className="relative border-b border-line bg-void" aria-label="Chaos philosophy">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
        <Reveal>
          <SectionTag index="01" label="THE CHAOS PHILOSOPHY" />
        </Reveal>
        <div className="mt-6">
          <Reveal>
            <SectionHeading title="CHAOS IS" accent="NOT A BUG." sub="error.log resolved: unpredictability is the feature. Read the doctrine below." />
          </Reveal>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden border border-line bg-line lg:grid-cols-3">
          {ITEMS.map((it, i) => (
            <Reveal key={it.n} delay={i * 0.1} className="bg-charcoal">
              <article className="group relative flex h-full min-h-[320px] flex-col justify-between overflow-hidden bg-charcoal p-8 transition-colors hover:bg-panel">
                <div>
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-6xl font-bold text-white/10 transition-colors group-hover:text-acid/40">
                      {it.n}
                    </span>
                    <span className="border border-line px-2 py-1 font-mono text-[10px] tracking-[0.2em] text-white/40">
                      {it.meta}
                    </span>
                  </div>
                  <h3 className="distort mt-10 text-3xl font-bold leading-none transition-colors group-hover:text-acid">
                    {it.title.split(" ").slice(0, -1).join(" ")}{" "}
                    <span className="text-voltSoft">{it.title.split(" ").slice(-1)}</span>
                  </h3>
                  <p className="mt-4 leading-relaxed text-white/65">{it.body}</p>
                </div>
                <div className="mt-8 flex items-center gap-3 font-mono text-[11px] tracking-[0.2em] text-white/30">
                  <span className="h-px flex-1 bg-line transition-colors group-hover:bg-acid/60" aria-hidden />
                  CHAOS.DOC
                </div>
                {/* hover slash */}
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rotate-45 bg-acid/0 blur-xl transition-all duration-500 group-hover:bg-acid/20"
                  aria-hidden
                />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
