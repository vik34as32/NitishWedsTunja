"use client";

import { useCountdown } from "@/hooks/useCountdown";

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
    <section aria-label="Wedding countdown" className="heritage-band mt-6">
      <div className="mx-auto grid max-w-sm grid-cols-4 gap-1 text-center">
        {labels.map((label, index) => {
          const value = values ? values[index] : null;
          return (
            <div key={label}>
              <div className="font-serif text-[1.85rem] leading-none font-semibold text-[#fff8ee] tabular-nums">
                {value == null ? "—" : pad(value)}
              </div>
              <p className="mt-1 font-display text-[0.58rem] tracking-[0.16em] text-[#f3e1b5] uppercase">
                {label}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
