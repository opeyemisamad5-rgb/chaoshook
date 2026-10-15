import { FlaskConical, Ghost, Telescope, Lock } from "lucide-react";
import { Reveal, SectionTag, SectionHeading } from "./Reveal";

const CONCEPTS = [
  {
    icon: FlaskConical,
    code: "EXP.001",
    title: "ONCHAIN EXPERIMENTS",
    body: "Explore unconventional mechanics and community-driven ideas.",
    note: "CONCEPT — not a released product. Mechanics will be tested in public, with community feedback shaping what survives.",
    accent: "text-acid border-acid/50"
  },
  {
    icon: Ghost,
    code: "EXP.002",
    title: "CHAOS CULTURE",
    body: "Build a recognizable identity through memes, creativity, participation, and internet culture.",
    note: "CONCEPT — culture is co-authored. Drops, memes and lore emerge from the community, not a marketing deck.",
    accent: "text-voltSoft border-volt/60"
  },
  {
    icon: Telescope,
    code: "EXP.003",
    title: "THE NEXT MOVE",
    body: "Showcase future experiments and developments as they become real.",
    note: "CONCEPT — nothing is promised until it ships. This slot displays only verified, working experiments.",
    accent: "text-white border-white/30"
  }
];

export default function Experiment() {
  return (
    <section id="experiment" className="noise relative overflow-hidden border-b border-line bg-charcoal" aria-label="The experiment">
      {/* diagonal signal lines */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        aria-hidden
        style={{
          backgroundImage: "repeating-linear-gradient(-45deg, #C8FF00 0 1px, transparent 1px 26px)"
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
        <Reveal>
          <SectionTag index="02" label="THE EXPERIMENT" />
        </Reveal>
        <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <SectionHeading
              title="THIS IS WHERE THINGS GET"
              accent="INTERESTING."
              sub="planned concepts only. We label what is live vs. what is imagined — no vaporware dressed as product."
            />
          </Reveal>
          <Reveal delay={0.15}>
            <div className="inline-flex items-center gap-2 border border-amber-400/40 bg-amber-400/10 px-4 py-2 font-mono text-[11px] tracking-[0.18em] text-amber-300">
              <Lock size={13} /> NOTHING BELOW IS LIVE YET
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {CONCEPTS.map((c, i) => (
            <Reveal key={c.code} delay={i * 0.12}>
              <article className="group relative flex h-full flex-col border border-line bg-void p-8 transition-all hover:-translate-y-1 hover:border-acid/60 hover:shadow-[0_0_40px_rgba(200,255,0,0.12)]">
                <div className="flex items-center justify-between font-mono text-[11px] tracking-[0.22em]">
                  <span className="text-white/40">{c.code}</span>
                  <span className={`border px-2 py-1 ${c.accent}`}>CONCEPT</span>
                </div>
                <c.icon size={34} strokeWidth={1.5} className="mt-8 text-white transition-colors group-hover:text-acid" />
                <h3 className="distort mt-5 text-2xl font-bold">{c.title}</h3>
                <p className="mt-3 font-medium text-white/80">{c.body}</p>
                <p className="mt-4 border-l-2 border-volt/70 pl-4 font-mono text-[12px] leading-relaxed text-white/50">
                  {c.note}
                </p>
                <div className="mt-auto pt-8 font-mono text-[11px] text-white/30">
                  <span className="caret">awaiting_signal</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Experiments in development terminal */}
        <Reveal delay={0.1}>
          <div className="mt-10 overflow-hidden border border-line bg-black">
            <div className="flex items-center gap-2 border-b border-line bg-panel px-5 py-3 font-mono text-[11px] tracking-[0.2em] text-white/50">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" aria-hidden />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" aria-hidden />
              <span className="h-2.5 w-2.5 rounded-full bg-acid" aria-hidden />
              <span className="ml-3">chaos_lab — experiments_in_development.sh</span>
            </div>
            <div className="grid gap-px bg-line sm:grid-cols-3">
              {[
                ["SLOT_01", "EMPTY — awaiting first community test", "QUEUED"],
                ["SLOT_02", "EMPTY — culture drop staging", "QUEUED"],
                ["SLOT_03", "EMPTY — reserved for the unknown", "LOCKED"]
              ].map(([slot, desc, st]) => (
                <div key={slot} className="bg-black p-6 font-mono">
                  <div className="flex items-center justify-between text-[11px] tracking-[0.2em]">
                    <span className="text-acid">{slot}</span>
                    <span className={st === "LOCKED" ? "text-voltSoft" : "text-white/40"}>[{st}]</span>
                  </div>
                  <p className="mt-3 text-[13px] leading-relaxed text-white/55">{desc}</p>
                  <div className="mt-4 h-1 w-full bg-line">
                    <div className={`h-full ${st === "LOCKED" ? "w-[8%] bg-volt" : "w-[22%] bg-acid/70"}`} />
                  </div>
                </div>
              ))}
            </div>
            <p className="border-t border-line px-5 py-3 font-mono text-[11px] text-white/40">
              <span className="text-acid">&gt;</span> To propose an experiment, join the community.
              Slots unlock only when concepts become real and verifiable.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
