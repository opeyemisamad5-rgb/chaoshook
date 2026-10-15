"use client";

import { ArrowDown, ArrowUpRight, Terminal } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Particles from "./Particles";
import HookMascot from "./HookMascot";

export function Ticker({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-line bg-black py-3" aria-hidden>
      <div className="flex w-max animate-marquee gap-8 whitespace-nowrap font-mono text-[12px] tracking-[0.2em] text-white/60">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-8">
            <span className={i % 3 === 0 ? "text-acid" : i % 3 === 1 ? "text-voltSoft" : ""}>{t}</span>
            <span className="text-line">///</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();
  return (
    <section id="home" className="noise relative overflow-hidden pt-[104px]" aria-label="Hero">
      {/* backdrop layers */}
      <div className="absolute inset-0" aria-hidden>
        <Particles density={90} />
        <div className="scanlines absolute inset-0" />
        {/* grid */}
        <div
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage: "radial-gradient(ellipse 80% 70% at 50% 40%, black 30%, transparent 75%)"
          }}
        />
        {/* acid horizon */}
        <div className="absolute -top-32 left-1/2 h-72 w-[900px] -translate-x-1/2 rounded-full bg-volt/20 blur-[120px]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pb-16 pt-10 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pb-24 lg:pt-16">
        <div>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-6 inline-flex items-center gap-3 border border-line bg-charcoal/80 px-4 py-2 font-mono text-[11px] tracking-[0.22em] text-white/70 backdrop-blur"
          >
            <Terminal size={14} className="text-acid" />
            <span>
              SYS.BOOT <span className="text-acid">— CHAOS_HOOK.exe</span>
            </span>
            <span className="hidden animate-flicker text-voltSoft sm:inline">[EXPERIMENTAL]</span>
          </motion.div>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08 }}
            className="distort text-[13vw] font-bold leading-[0.88] sm:text-7xl lg:text-[5.6rem]"
          >
            THE MARKET
            <br />
            IS <span className="text-stroke">ORDER.</span>
            <br />
            WE ARE THE{" "}
            <span className="glitch text-acid" data-text="INTERRUPTION.">
              INTERRUPTION.
            </span>
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18 }}
            className="mt-7 max-w-xl text-[15px] leading-relaxed text-white/70 sm:text-base"
          >
            Welcome to <span className="font-bold text-white">CHAOS HOOK</span>. An experimental
            corner of Web3 where unpredictability meets onchain culture. We are here to challenge
            the ordinary and explore what happens when the rules stop feeling familiar.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.28 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#experiment"
              className="group inline-flex items-center justify-center gap-2 bg-acid px-7 py-4 text-sm font-bold tracking-tight text-black transition-all hover:-translate-y-0.5 hover:shadow-[0_0_32px_rgba(200,255,0,0.4)]"
            >
              EXPLORE THE EXPERIMENT
              <ArrowDown size={17} className="transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href="#community"
              className="group inline-flex items-center justify-center gap-2 border border-white/25 bg-white/[0.03] px-7 py-4 text-sm font-bold tracking-tight text-white backdrop-blur transition-all hover:border-volt hover:bg-volt/15 hover:text-voltSoft"
            >
              JOIN THE COMMUNITY
              <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>

          <motion.dl
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 grid max-w-xl grid-cols-3 divide-x divide-line border border-line bg-black/50 font-mono backdrop-blur"
          >
            {[
              ["TICKER", "$CHAOS"],
              ["STATUS", "CONCEPT*"],
              ["NETWORK", "[TBA]"]
            ].map(([k, v]) => (
              <div key={k} className="px-4 py-3">
                <dt className="text-[10px] tracking-[0.25em] text-white/40">{k}</dt>
                <dd className={`mt-1 text-sm font-bold ${v === "$CHAOS" ? "text-acid" : "text-white"}`}>
                  {v}
                </dd>
              </div>
            ))}
          </motion.dl>
          <p className="mt-3 font-mono text-[11px] text-white/35">
            * Conceptual direction — not a live product claim.
          </p>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <HookMascot />
        </motion.div>
      </div>

      <Ticker
        items={[
          "HOOK INTO THE CHAOS",
          "$CHAOS",
          "BREAK THE PATTERN",
          "EMBRACE THE UNKNOWN",
          "BUILD DIFFERENT",
          "NO SCRIPT. JUST EXECUTION."
        ]}
      />
    </section>
  );
}
