"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  y = 28,
  className
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionTag({ index, label }: { index: string; label: string }) {
  return (
    <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.25em] text-acid">
      <span className="inline-block h-px w-10 bg-acid/70" aria-hidden />
      <span>
        [{index}] {label}
      </span>
    </div>
  );
}

export function SectionHeading({
  title,
  accent,
  sub
}: {
  title: string;
  accent?: string;
  sub?: string;
}) {
  return (
    <div className="max-w-4xl">
      <h2 className="distort text-4xl font-bold leading-[0.95] sm:text-6xl lg:text-7xl">
        {title}{" "}
        {accent ? (
          <span className="glitch text-acid" data-text={accent}>
            {accent}
          </span>
        ) : null}
      </h2>
      {sub ? (
        <p className="mt-5 max-w-2xl font-mono text-sm leading-relaxed text-white/60">
          <span className="text-voltSoft">&gt;_</span> {sub}
        </p>
      ) : null}
    </div>
  );
}
