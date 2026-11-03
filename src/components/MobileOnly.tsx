import { splitDate, wedding } from "@/data/wedding";
import type { ReactNode } from "react";

export function MobileOnly({ children }: { children: ReactNode }) {
  const date = splitDate(wedding.dateLine);

  return (
    <>
      <div className="desktop-only min-h-dvh bg-[#f6efe6] px-6 text-[#3c241c]">
        <div className="max-w-sm text-center">
          <p className="font-display text-[0.7rem] tracking-[0.34em] text-[#8d6a3a]">SHUBH VIVAH</p>
          <h1 className="mt-3 font-script text-6xl leading-none text-[#6e1830]">
            {wedding.groom.name}
            <span className="mx-2 font-serif text-4xl">&</span>
            {wedding.bride.name}
          </h1>
          <div className="visible-date mt-6">
            <p className="visible-date-kicker">You&apos;re invited</p>
            <p className="visible-date-day">{date.day}</p>
            <p className="visible-date-month">{date.monthYear}</p>
            <p className="visible-date-when">{wedding.dateWhen}</p>
          </div>
          <p className="mx-auto mt-8 max-w-xs font-serif text-[1.35rem] leading-snug text-[#5c4034]">
            Please open this wedding invitation on your mobile phone.
          </p>
        </div>
      </div>
      <div className="mobile-only">{children}</div>
    </>
  );
}
