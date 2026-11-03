"use client";

import { wedding } from "@/data/wedding";
import { FloralGarland } from "./Heritage";
import { Reveal } from "./Reveal";

export function InvitationHero() {
  return (
    <section aria-label="Wedding invitation" className="heritage-section is-first text-center">
      <FloralGarland className="mx-auto mb-3 h-12 w-full max-w-sm" />
      <Reveal>
        <p className="font-display text-[0.68rem] tracking-[0.28em] text-[#8d6a3a]">{wedding.blessing}</p>
        <h1 className="script-title mt-2 text-[#6e1830]">A blessed beginning</h1>
      </Reveal>
      <Reveal delay={0.08}>
        <p className="mx-auto mt-3 max-w-[19rem] font-serif text-[1.2rem] leading-snug text-[#5c4034]">
          With hearts full of gratitude, we warmly invite you to join us as we celebrate this beautiful
          beginning with the love, prayers, and blessings of our families.
        </p>
      </Reveal>
      <Reveal delay={0.16}>
        <p
          className="script-title mt-4 text-[#7a1830]"
          aria-label={`${wedding.groom.name} and ${wedding.bride.name}`}
        >
          {wedding.groom.name}
          <span aria-hidden> & </span>
          {wedding.bride.name}
        </p>
        <p className="mt-3 font-serif text-[1.28rem] leading-snug">Son of {wedding.groom.father}</p>
        <p className="font-serif text-[1.28rem] leading-snug">Daughter of {wedding.bride.father}</p>
      </Reveal>
      <FloralGarland className="mx-auto mt-5 h-10 w-full max-w-xs" />
    </section>
  );
}
