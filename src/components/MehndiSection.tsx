"use client";

import { assets, eventById, wedding } from "@/data/wedding";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MehndiScene } from "./illustrations";
import { Reveal } from "./Reveal";
import { Scene } from "./Scene";

export function MehndiSection() {
  const event = eventById("mehndi");
  const artRef = useRef<HTMLDivElement>(null);
  const draw = useInView(artRef, { once: true, amount: 0.4 });

  return (
    <Scene
      image={assets.mehndiBackdrop}
      label="Mehndi ceremony"
      overlay="bg-gradient-to-b from-[#10261c]/68 via-[#1a3a28]/42 to-[#10261c]/82"
    >
      {wedding.visual.illustratedScenes ? (
        <div ref={artRef} className="mx-auto h-[40vh] min-h-[220px] max-h-[340px] w-full">
          <MehndiScene draw={draw} />
        </div>
      ) : (
        <div ref={artRef} />
      )}
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
          <p className="mt-4 font-serif text-lg leading-snug text-cream/90">{event.summary}</p>
        </Reveal>
      </div>
    </Scene>
  );
}
