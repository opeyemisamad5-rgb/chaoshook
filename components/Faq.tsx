"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { TOKEN, isConfigured } from "@/lib/config";
import { Reveal, SectionTag, SectionHeading } from "./Reveal";

function faqs() {
  const hasChain = isConfigured(TOKEN.blockchain);
  const hasAddress = isConfigured(TOKEN.contractAddress);
  return [
    {
      q: "What is Chaos Hook?",
      a: "Chaos Hook is an experimental Web3 brand and community exploring unpredictability and onchain culture. It is a creative and cultural experiment — not a finished product suite. Treat everything labeled CONCEPT as an idea under exploration, not a shipped feature."
    },
    {
      q: "What is $CHAOS?",
      a: "“$CHAOS” is the project's token symbol — a shared coordinate for the community and the experiment. Token details (supply, distribution, utility) will be published here only when finalized and verifiable. Anything not shown on this page should be treated as unconfirmed."
    },
    {
      q: "Which blockchain is Chaos Hook built on?",
      a: hasChain
        ? `Chaos Hook is built on ${TOKEN.blockchain}. Always confirm the network from official channels before interacting.`
        : "Not announced yet. The blockchain will be listed in the Token section (lib/config.ts → TOKEN.blockchain) once confirmed. Do not trust chain claims from unofficial sources."
    },
    {
      q: "Where can I find the contract address?",
      a: hasAddress
        ? `The verified contract address is published in the Token section of this site: ${TOKEN.contractAddress}. Always cross-check it from official channels — never trust addresses pasted in DMs or random replies.`
        : "Nowhere yet — and that is intentional. The Token section currently displays CONTRACT ADDRESS COMING SOON. We will never ask you to trust an address shared outside official channels."
    },
    {
      q: "What is the utility of $CHAOS?",
      a: "Not finalized. There is no confirmed utility to describe, and we will not invent one. If utility or mechanics are introduced, they will be documented as experiments with verifiable references — not promises."
    },
    {
      q: "How can I participate in the project?",
      a: "Follow the Community section for X / Telegram / hub links once configured, join discussions, make memes, propose experiments, and give feedback on early concepts. The most useful participation right now is curiosity + creativity — not capital."
    }
  ];
}

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  const items = faqs();

  return (
    <section id="faq" className="border-b border-line bg-charcoal" aria-label="FAQ">
      <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:py-28">
        <Reveal>
          <SectionTag index="06" label="FAQ // HONEST ANSWERS" />
        </Reveal>
        <div className="mt-6">
          <Reveal>
            <SectionHeading title="QUESTIONS FROM" accent="THE VOID." sub="no invented answers. If it is not finalized, we say so." />
          </Reveal>
        </div>

        <div className="mt-10 divide-y divide-line border border-line bg-void">
          {items.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-panel"
                >
                  <span className="flex items-baseline gap-4">
                    <span className="font-mono text-[11px] text-acid">Q{i + 1}</span>
                    <span className="text-[15px] font-bold sm:text-base">{f.q}</span>
                  </span>
                  <span
                    className={`grid h-8 w-8 shrink-0 place-items-center border transition-all ${
                      isOpen ? "rotate-45 border-acid bg-acid text-black" : "border-line text-white/60"
                    }`}
                  >
                    <Plus size={16} />
                  </span>
                </button>
                <div
                  id={`faq-panel-${i}`}
                  className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <p className="mb-5 ml-6 border-l-2 border-acid/70 px-6 py-1 font-mono text-[13px] leading-relaxed text-white/65">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
