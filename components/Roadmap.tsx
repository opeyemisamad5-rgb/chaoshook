import { Reveal, SectionTag, SectionHeading } from "./Reveal";

/**
 * ROADMAP — edit PHASES below to update the site.
 * `status` is display-only: "PLANNED" for all current phases.
 * Flip to "ACTIVE" / "COMPLETE" only when genuinely true.
 */
const PHASES = [
  {
    id: "01",
    code: "THE SPARK",
    title: "PHASE 01 — THE SPARK",
    body: "Establish the brand, publish the website, and build the initial community.",
    items: ["Brand identity + website", "Social channels live", "First community cohort"],
    status: "PLANNED" as const
  },
  {
    id: "02",
    code: "THE EXPERIMENT",
    title: "PHASE 02 — THE EXPERIMENT",
    body: "Develop the project's first working concept and test it with community feedback.",
    items: ["Ship concept v0.1", "Public testing + feedback loops", "Kill or keep — honestly"],
    status: "PLANNED" as const
  },
  {
    id: "03",
    code: "THE EXPANSION",
    title: "PHASE 03 — THE EXPANSION",
    body: "Introduce additional features and expand the ecosystem based on validated ideas.",
    items: ["Expand what worked", "New experiments queue", "Ecosystem collabs (verified only)"],
    status: "PLANNED" as const
  },
  {
    id: "04",
    code: "THE UNKNOWN",
    title: "PHASE 04 — THE UNKNOWN",
    body: "Explore new experiments and opportunities as the project evolves.",
    items: ["Unannounced by design", "Community-proposed routes", "Document everything"],
    status: "PLANNED" as const
  }
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="relative border-b border-line bg-charcoal" aria-label="Roadmap">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
        <Reveal>
          <SectionTag index="04" label="ROADMAP" />
        </Reveal>
        <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <SectionHeading
              title="NO SCRIPT."
              accent="JUST EXECUTION."
              sub="planned milestones, not completed achievements. Status changes only when work actually ships."
            />
          </Reveal>
        </div>

        <ol className="relative mt-14 grid gap-6 lg:grid-cols-4">
          {/* connector line */}
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-line lg:block" aria-hidden />
          {PHASES.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.1}>
              <li className="group relative border border-line bg-void p-7 transition-all hover:-translate-y-1 hover:border-acid/60">
                <div className="flex items-center justify-between">
                  <span className="grid h-10 w-10 place-items-center border border-acid/60 bg-acid/10 font-mono text-sm font-bold text-acid">
                    {p.id}
                  </span>
                  <span className="border border-line px-2 py-1 font-mono text-[10px] tracking-[0.2em] text-white/45">
                    [{p.status}]
                  </span>
                </div>
                <h3 className="distort mt-6 text-xl font-bold leading-tight">
                  {p.code === "THE UNKNOWN" ? (
                    <>
                      THE <span className="text-voltSoft">UNKNOWN</span>
                    </>
                  ) : (
                    p.title.replace("PHASE 0" + p.id + " — ", "")
                  )}
                </h3>
                <p className="mt-1 font-mono text-[11px] tracking-[0.2em] text-white/35">{p.title}</p>
                <p className="mt-4 text-[15px] leading-relaxed text-white/70">{p.body}</p>
                <ul className="mt-5 space-y-2 border-t border-line pt-5 font-mono text-[12px] text-white/55">
                  {p.items.map((it) => (
                    <li key={it} className="flex gap-2">
                      <span className="text-acid">▸</span> {it}
                    </li>
                  ))}
                </ul>
                <div
                  className={`mt-6 h-1 w-full ${i === 0 ? "bg-gradient-to-r from-acid to-volt" : "bg-line"}`}
                  aria-hidden
                />
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={0.1}>
          <p className="mt-8 border border-dashed border-line px-5 py-4 text-center font-mono text-[12px] tracking-[0.15em] text-white/40">
            ROADMAP IS EDITABLE IN <span className="text-acid">components/Roadmap.tsx → PHASES</span> — NO
            HIDDEN CLAIMS, UPDATE ONLY WHEN REAL.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
