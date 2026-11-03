"use client";

import { eventById, splitDate } from "@/data/wedding";
import Image from "next/image";
import { FloralGarland } from "./Heritage";
import { Reveal } from "./Reveal";

export function HaldiSection() {
  const event = eventById("haldi");
  const parts = splitDate(event.date);

  return (
    <section aria-label="Haldi rasam" className="heritage-section haldi-section">
      <Reveal className="text-center">
        <p className="font-display text-[0.68rem] tracking-[0.28em] text-[#8a5a12] uppercase">
          {event.title}
        </p>
        <h2 className="script-title text-[#7a4a08]">Haldi Rasam</h2>
        <p className="mt-2 font-serif text-[3.35rem] leading-none font-semibold text-[#2a1612]">{parts.day}</p>
        <p className="font-serif text-[1.55rem] leading-tight font-semibold text-[#2a1612]">{parts.monthYear}</p>
        <p className="mt-1 font-serif text-[1.2rem] text-[#7a1830]">
          {event.weekday} · {event.time}
        </p>
      </Reveal>
      <Reveal delay={0.08}>
        <div className="haldi-stage">
          <Image
            src="/images/haldi-rasam.jpg"
            alt="Haldi rasam, with turmeric being applied on the groom among marigold flowers"
            fill
            sizes="360px"
            draggable={false}
            className="object-cover"
          />
        </div>
      </Reveal>
      <Reveal delay={0.14}>
        <p className="mx-auto mt-3 max-w-[18.5rem] text-center font-serif text-[1.15rem] leading-snug text-[#5c4034]">
          {event.summary}
        </p>
      </Reveal>
      <FloralGarland className="mx-auto mt-5 h-9 w-full max-w-xs" />
    </section>
  );
}
