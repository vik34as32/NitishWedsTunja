"use client";

import { assets, eventById, wedding } from "@/data/wedding";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TilakScene } from "./illustrations";
import { Reveal } from "./Reveal";
import { Scene } from "./Scene";

export function TilakSection() {
  const event = eventById("tilak");
  const artRef = useRef<HTMLDivElement>(null);
  const active = useInView(artRef, { once: true, amount: 0.45 });

  return (
    <Scene
      image={assets.tilakBackdrop}
      label="Shubh Tilak ceremony"
      overlay="bg-gradient-to-b from-[#2a0c08]/72 via-[#3a120c]/45 to-[#1a0608]/84"
    >
      {wedding.visual.illustratedScenes ? (
        <div ref={artRef} className="mx-auto h-[40vh] min-h-[220px] max-h-[340px] w-full">
          <TilakScene active={active} />
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
