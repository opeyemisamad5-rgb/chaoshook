"use client";

import { ArrowUpRight, MessagesSquare } from "lucide-react";
import { SOCIALS, isConfigured } from "@/lib/config";
import { Reveal, SectionTag } from "./Reveal";

function SocialButton({
  label,
  href,
  placeholder,
  primary = false
}: {
  label: string;
  href: string;
  placeholder: string;
  primary?: boolean;
}) {
  const live = isConfigured(href);
  const cls = primary
    ? live
      ? "bg-acid text-black hover:bg-white"
      : "cursor-not-allowed border border-dashed border-line text-white/35"
    : live
      ? "border border-white/25 text-white hover:border-volt hover:bg-volt/15 hover:text-voltSoft"
      : "cursor-not-allowed border border-dashed border-line text-white/35";

  const inner = (
    <>
      {label.toUpperCase()}
      <ArrowUpRight size={16} />
      {!live && (
        <span className="ml-1 border border-amber-400/50 px-1.5 py-0.5 font-mono text-[9px] tracking-widest text-amber-300">
          {placeholder}
        </span>
      )}
    </>
  );

  if (live) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-bold transition-all hover:-translate-y-0.5 ${cls}`}
      >
        {inner}
      </a>
    );
  }
  return (
    <span
      className={`inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-bold ${cls}`}
      title="Link pending — configure in lib/config.ts"
      aria-disabled="true"
    >
      {inner}
    </span>
  );
}

export default function Community() {
  return (
    <section id="community" className="noise relative overflow-hidden border-b border-line bg-void" aria-label="Community">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-volt/15 blur-[130px]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 lg:py-28">
        <Reveal className="flex justify-center">
          <SectionTag index="05" label="COMMUNITY" />
        </Reveal>
        <Reveal>
          <h2 className="distort mx-auto mt-6 max-w-3xl text-4xl font-bold leading-[0.95] sm:text-6xl">
            CHAOS DOESN&apos;T <span className="glitch text-acid" data-text="BUILD ITSELF.">BUILD ITSELF.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-xl text-white/65">
            The experiment is more interesting when you&apos;re part of it.
          </p>
        </Reveal>
        <Reveal delay={0.18}>
          <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap">
            <SocialButton label="Follow on X" href={SOCIALS.xUrl} placeholder="X_URL_TBA" primary />
            <SocialButton label="Join Telegram" href={SOCIALS.telegramUrl} placeholder="TG_URL_TBA" />
            <SocialButton label="Explore the Community" href={SOCIALS.communityUrl} placeholder="HUB_URL_TBA" />
          </div>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="mx-auto mt-8 flex max-w-2xl items-start gap-3 border border-dashed border-line bg-charcoal/70 px-5 py-4 text-left font-mono text-[12px] leading-relaxed text-white/50">
            <MessagesSquare size={16} className="mt-0.5 shrink-0 text-acid" />
            <p>
              PLACEHOLDER STATE: social URLs are not configured yet (
              <code className="text-acid">lib/config.ts → SOCIALS</code>). Buttons activate
              automatically once real links are added. We never link to unrelated accounts.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
