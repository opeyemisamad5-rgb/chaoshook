"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Original hook-inspired mascot: "THE HOOKLING"
 * Abstract brutalist hook-signal creature built from pure SVG.
 * Acid green core + volt purple interference ring.
 */
export default function HookMascot() {
  const reduce = useReducedMotion();

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]" role="img" aria-label="CHAOS HOOK mascot — an abstract glowing hook symbol">
      {/* interference rings */}
      <div className="absolute inset-0 grid place-items-center" aria-hidden>
        <div className="absolute h-[92%] w-[92%] animate-spin rounded-full border border-volt/30 [animation-duration:24s]" />
        <div className="absolute h-[72%] w-[72%] animate-spin rounded-full border border-dashed border-white/15 [animation-direction:reverse] [animation-duration:34s]" />
        <div className="absolute h-[52%] w-[52%] rounded-full border border-acid/25" />
      </div>

      {/* core glow */}
      <div
        className="absolute left-1/2 top-1/2 h-[55%] w-[55%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-volt/30 blur-[80px]"
        aria-hidden
      />
      <div
        className="absolute left-1/2 top-1/2 h-[35%] w-[35%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-acid/20 blur-[50px]"
        aria-hidden
      />

      <motion.div
        className="absolute inset-0 grid place-items-center"
        animate={reduce ? undefined : { y: [0, -14, 0], rotate: [0, 1.2, 0, -1.2, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 320 320" className="w-[78%] drop-shadow-[0_0_28px_rgba(200,255,0,0.35)]">
          {/* hook body */}
          <path
            d="M150 28 L150 165 C150 215 175 248 218 248 C252 248 274 226 274 199 C274 176 258 160 237 158"
            fill="none"
            stroke="#C8FF00"
            strokeWidth="16"
            strokeLinecap="round"
          />
          {/* inner volt echo */}
          <path
            d="M150 28 L150 165 C150 215 175 248 218 248 C252 248 274 226 274 199 C274 176 258 160 237 158"
            fill="none"
            stroke="#8B2BFF"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="10 14"
            opacity="0.9"
          />
          {/* eye */}
          <g>
            <circle cx="150" cy="78" r="26" fill="#050506" stroke="#F2F2ED" strokeWidth="2" />
            <circle cx="150" cy="78" r="11" fill="#C8FF00" />
            <circle cx="154" cy="74" r="3.5" fill="#050506" />
            {/* glitch slice */}
            <rect x="124" y="72" width="52" height="5" fill="#8B2BFF" opacity="0.9" />
          </g>
          {/* barbs */}
          <path d="M237 158 L262 148 L250 173 Z" fill="#8B2BFF" />
          <circle cx="150" cy="28" r="8" fill="#8B2BFF" />
          {/* teeth ticks */}
          <g stroke="#F2F2ED" strokeWidth="2" opacity="0.5">
            <line x1="132" y1="140" x2="168" y2="140" />
            <line x1="132" y1="155" x2="168" y2="155" />
            <line x1="134" y1="170" x2="166" y2="170" />
          </g>
          {/* $CHAOS tag */}
          <g fontFamily="monospace" fontSize="15" fontWeight="700">
            <rect x="58" y="238" width="112" height="30" fill="#050506" stroke="#C8FF00" strokeWidth="1.5" />
            <text x="70" y="258" fill="#C8FF00">
              $CHAOS
            </text>
          </g>
        </svg>
      </motion.div>

      {/* floating chips */}
      {!reduce && (
        <>
          <motion.div
            className="absolute left-[4%] top-[18%] border border-line bg-charcoal/90 px-3 py-2 font-mono text-[10px] tracking-widest text-white/70 backdrop-blur"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden
          >
            <span className="text-acid">●</span> PATTERN.BRK
          </motion.div>
          <motion.div
            className="absolute bottom-[16%] right-[2%] border border-volt/60 bg-volt/15 px-3 py-2 font-mono text-[10px] tracking-widest text-voltSoft backdrop-blur"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            aria-hidden
          >
            ERR_0RDER // 404
          </motion.div>
          <motion.div
            className="absolute right-[8%] top-[8%] border border-acid/50 bg-acid/10 px-3 py-1.5 font-mono text-[10px] tracking-widest text-acid"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            aria-hidden
          >
            HOOKED_
          </motion.div>
        </>
      )}

      {/* corner ticks */}
      <div className="pointer-events-none absolute inset-[6%] font-mono text-[10px] text-white/30" aria-hidden>
        <span className="absolute left-0 top-0">+</span>
        <span className="absolute right-0 top-0">+</span>
        <span className="absolute bottom-0 left-0">+</span>
        <span className="absolute bottom-0 right-0">+</span>
      </div>
    </div>
  );
}
