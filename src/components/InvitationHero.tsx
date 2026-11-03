"use client";

import { assets, wedding } from "@/data/wedding";
import { GoldRule, LotusMark, MarigoldGarland, OrnamentFrame } from "./Ornaments";
import { Reveal } from "./Reveal";
import { Scene } from "./Scene";

export function InvitationHero() {
  return (
    <Scene
      image={assets.palaceBackdrop}
      label="Wedding invitation"
      priority
      overlay="bg-gradient-to-b from-[#2a060c]/88 via-[#720d18]/82 to-[#2a060c]/92"
    >
      <div className="invite-card relative mx-auto w-full max-w-sm px-6 py-10 text-center">
        <OrnamentFrame />
        <LotusMark className="pointer-events-none absolute top-1/2 left-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 text-gold opacity-[0.12]" />
        <div className="relative">
          <MarigoldGarland className="sway mx-auto mb-4 w-full max-w-[280px]" />
          <Reveal>
            <p className="font-display text-[0.78rem] tracking-[0.18em] text-royal">{wedding.blessing}</p>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-4 font-serif text-xl italic text-brown/80">With blessings of our elders,</p>
          </Reveal>
          <Reveal delay={0.22}>
            <h1
              className="mt-3 font-script text-[4.4rem] leading-[0.84] text-maroon"
              aria-label={`${wedding.groom.name} and ${wedding.bride.name}`}
            >
              {wedding.groom.name}
              <span className="my-1 block font-serif text-[1.7rem] text-royal" aria-hidden>
                ❤️
              </span>
              {wedding.bride.name}
            </h1>
          </Reveal>
          <Reveal delay={0.34}>
            <GoldRule className="my-4 text-royal" />
            <p className="font-serif text-[1.35rem] leading-snug">Son of {wedding.groom.father}</p>
            <p className="mt-1 font-serif text-[1.35rem] leading-snug">Daughter of {wedding.bride.father}</p>
          </Reveal>
          <Reveal delay={0.46}>
            <p className="mt-5 font-display text-[0.66rem] tracking-[0.28em] text-royal">
              {wedding.weddingDay.toUpperCase()}
            </p>
          </Reveal>
        </div>
      </div>
    </Scene>
  );
}
