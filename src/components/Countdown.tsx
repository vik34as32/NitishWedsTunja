"use client";

import { assets, wedding } from "@/data/wedding";
import { useCountdown } from "@/hooks/useCountdown";
import { LotusMark } from "./Ornaments";
import { Reveal } from "./Reveal";
import { Scene } from "./Scene";

const labels = ["Days", "Hours", "Minutes", "Seconds"] as const;

function pad(value: number) {
  return value.toString().padStart(2, "0");
}

export function Countdown() {
  const remaining = useCountdown();
  const values = remaining
    ? [remaining.days, remaining.hours, remaining.minutes, remaining.seconds]
    : null;

  return (
    <Scene
      image={assets.nightSky}
      label="Wedding countdown"
      overlay="bg-gradient-to-b from-[#14040a]/70 via-[#720d18]/50 to-[#14040a]/82"
    >
      <div className="relative mx-auto w-full max-w-sm text-center">
        <LotusMark className="pointer-events-none absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 text-gold opacity-20" />
        <Reveal>
          <p className="font-display text-[0.68rem] tracking-[0.38em] text-gold">UNTIL THE BARAAT</p>
          <h2 className="mt-3 font-script text-5xl text-gold-soft">{wedding.weddingDay}</h2>
        </Reveal>
        <div className="relative mt-8 grid grid-cols-4 gap-2">
          {labels.map((label, index) => {
            const value = values ? values[index] : null;
            return (
              <div
                key={label}
                className="border border-gold/70 bg-maroon/45 px-1 py-4 shadow-[0_0_24px_rgba(212,175,101,0.16)]"
              >
                <div
                  key={value ?? "wait"}
                  className="tick-num gold-text font-display text-[1.85rem] tabular-nums"
                >
                  {value == null ? "—" : pad(value)}
                </div>
                <p className="mt-1 font-serif text-sm italic text-gold-soft">{label}</p>
              </div>
            );
          })}
        </div>
        <Reveal delay={0.2}>
          <p className="mt-6 font-serif text-lg italic text-cream/90">
            {remaining?.complete
              ? "The auspicious hour has arrived."
              : "Every moment draws two families closer."}
          </p>
        </Reveal>
      </div>
    </Scene>
  );
}
