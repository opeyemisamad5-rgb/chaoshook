"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "The Experiment", href: "#experiment" },
  { label: "Token", href: "#token" },
  { label: "Community", href: "#community" }
];

export function HookLogo({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#home" className="group flex items-center gap-3" aria-label="CHAOS HOOK home">
      <span className="relative grid h-9 w-9 place-items-center border border-line bg-charcoal">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M7 3v8.5c0 4.5 2.5 7.5 7 7.5 3.2 0 5.5-2 5.5-4.8 0-2.4-1.7-4-3.8-4.2"
            stroke="#C8FF00"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <circle cx="7" cy="3" r="1.6" fill="#8B2BFF" />
          <path d="M15.7 11.2l3.8-.4-.4 3.8" stroke="#8B2BFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="absolute -right-px -top-px h-2 w-2 bg-acid" aria-hidden />
      </span>
      {!compact && (
        <span className="leading-none">
          <span className="block text-[15px] font-bold tracking-tight">
            CHAOS<span className="text-acid">_</span>HOOK
          </span>
          <span className="mt-1 block font-mono text-[10px] tracking-[0.3em] text-white/50">
            $CHAOS // v0.X
          </span>
        </span>
      )}
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open ]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-line bg-void/85 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        {/* top signal strip */}
        <div className="flex items-center justify-between border-b border-line/60 bg-black px-4 py-1 font-mono text-[10px] tracking-[0.2em] text-white/50 sm:px-6">
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-acid" aria-hidden />
            SIGNAL: UNSTABLE
          </span>
          <span className="hidden sm:block">HOOK INTO THE CHAOS — EXPERIMENTAL BUILD</span>
          <span>BLOCK: [PENDING]</span>
        </div>

        <nav
          className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6"
          aria-label="Primary"
        >
          <HookLogo />

          <ul className="hidden items-center gap-8 lg:flex">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="group font-mono text-[12px] tracking-[0.18em] text-white/70 transition-colors hover:text-acid"
                >
                  <span className="mr-1 text-voltSoft opacity-0 transition-opacity group-hover:opacity-100">
                    /
                  </span>
                  {l.label.toUpperCase()}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href="#experiment"
              className="group hidden items-center gap-2 bg-acid px-5 py-2.5 text-[13px] font-bold tracking-tight text-black transition-all hover:bg-volt hover:text-white sm:inline-flex"
            >
              ENTER THE CHAOS
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <button
              className="grid h-10 w-10 place-items-center border border-line bg-charcoal lg:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-void/95 backdrop-blur-xl lg:hidden"
          >
            <motion.nav
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 24, opacity: 0 }}
              className="flex h-full flex-col px-6 pb-10 pt-32"
              aria-label="Mobile"
            >
              <ul className="space-y-2">
                {LINKS.map((l, i) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-baseline gap-4 border-b border-line/70 py-4"
                    >
                      <span className="font-mono text-xs text-acid">0{i + 1}</span>
                      <span className="distort text-4xl font-bold transition-colors group-hover:text-acid">
                        {l.label.toUpperCase()}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="#experiment"
                onClick={() => setOpen(false)}
                className="mt-8 inline-flex items-center justify-center gap-2 bg-acid px-6 py-4 font-bold text-black"
              >
                ENTER THE CHAOS <ArrowUpRight size={18} />
              </a>
              <p className="mt-auto font-mono text-[11px] tracking-[0.2em] text-white/40">
                CHAOS HOOK — HOOK INTO THE CHAOS.
              </p>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
