"use client";

import { assets, wedding, type CeremonyId } from "@/data/wedding";
import { motion } from "framer-motion";
import { Flower2, Heart, Sparkles, Sun, type LucideIcon } from "lucide-react";
import { Reveal } from "./Reveal";
import { Scene } from "./Scene";

const icons: Record<CeremonyId, LucideIcon> = {
  tilak: Sparkles,
  mehndi: Flower2,
  haldi: Sun,
  vivah: Heart,
};

export function EventTimeline() {
  return (
    <Scene
      image={assets.palaceBackdrop}
      label="Wedding itinerary"
      overlay="bg-gradient-to-b from-[#2a060c]/88 via-[#720d18]/80 to-[#2a060c]/92"
    >
      <Reveal>
        <p className="text-center font-display text-[0.68rem] tracking-[0.38em] text-gold">
          AUSPICIOUS MOMENTS
        </p>
        <h2 className="mt-2 text-center font-script text-5xl text-gold-soft">Wedding Itinerary</h2>
      </Reveal>
      <ol className="relative mt-8 ml-6 space-y-7 border-l border-gold/70 py-2 pl-8">
        {wedding.events.map((event, index) => {
          const Icon = icons[event.id];
          return (
            <motion.li
              key={event.id}
              className="relative"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
            >
              <span className="absolute top-0 -left-8 grid h-10 w-10 -translate-x-1/2 place-items-center rounded-full border border-gold bg-[#4a0810] text-gold-soft">
                <Icon size={16} strokeWidth={1.6} aria-hidden />
              </span>
              <p className="font-display text-lg text-cream">{event.title}</p>
              <p className="font-serif text-lg italic text-gold-soft">
                {event.date} · {event.time}
              </p>
            </motion.li>
          );
        })}
      </ol>
    </Scene>
  );
}
