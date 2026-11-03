import { wedding } from "@/data/wedding";
import type { ReactNode } from "react";
import { LotusMark } from "./Ornaments";

export function MobileOnly({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="desktop-only min-h-dvh px-6">
        <div className="max-w-sm text-center">
          <LotusMark className="mx-auto mb-6 h-16 w-16 text-gold" />
          <p className="font-display text-[0.7rem] tracking-[0.42em] text-gold">SHUBH VIVAH</p>
          <h1 className="mt-4 font-script text-6xl leading-none text-gold-soft">
            {wedding.groom.name}
            <span className="mx-2 font-serif text-4xl text-gold">&</span>
            {wedding.bride.name}
          </h1>
          <p className="mx-auto mt-8 max-w-xs font-serif text-[1.7rem] leading-snug text-cream">
            Please open this wedding invitation on your mobile phone.
          </p>
          <p className="mt-6 font-display text-xs tracking-[0.28em] text-gold">21 NOVEMBER 2026</p>
        </div>
      </div>
      <div className="mobile-only">{children}</div>
    </>
  );
}
