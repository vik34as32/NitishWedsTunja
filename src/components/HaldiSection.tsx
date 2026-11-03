"use client";

import { assets, eventById, wedding } from "@/data/wedding";
import { GoldenParticles } from "./GoldenParticles";
import { HaldiScene } from "./illustrations";
import { Sunburst } from "./Ornaments";
import { Reveal } from "./Reveal";
import { Scene } from "./Scene";

export function HaldiSection() {
  const event = eventById("haldi");

  return (
    <Scene
      image={assets.haldiBackdrop}
      label="Haldi and Matkod ceremony"
      overlay="bg-gradient-to-b from-[#6a3e12]/50 via-[#4a3010]/55 to-[#2a1608]/84"
      fx={
        <>
          <div className="absolute -top-16 left-1/2 h-72 w-72 -translate-x-1/2">
            <div className="morning-rays h-full w-full opacity-60">
              <Sunburst className="h-full w-full" />
            </div>
          </div>
          <GoldenParticles count={8} />
        </>
      }
    >
      {wedding.visual.illustratedScenes ? (
        <div className="mx-auto h-[40vh] min-h-[220px] max-h-[340px] w-full">
          <HaldiScene />
        </div>
      ) : null}
      <div className="mx-auto mt-4 w-full max-w-sm text-center">
        <Reveal>
          <p className="font-display text-[0.68rem] tracking-[0.38em] text-gold">
            {event.weekday.toUpperCase()}
          </p>
          <h2 className="mt-2 font-display text-[1.9rem] text-cream lift">{event.title}</h2>
          <p className="mt-2 font-serif text-[1.35rem] italic text-gold-soft">
            {event.date} · {event.time}
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-4 font-serif text-lg leading-snug text-cream/95">{event.summary}</p>
        </Reveal>
      </div>
    </Scene>
  );
}
