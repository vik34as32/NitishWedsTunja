"use client";

import { splitDate, wedding } from "@/data/wedding";
import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function FloralGarland({
  className = "",
  light = false,
}: {
  className?: string;
  light?: boolean;
}) {
  const roses = [28, 68, 112, 156, 200, 244, 288, 332];
  const vine = light ? "#e7c98a" : "#6d8a4e";
  const leaf = light ? "#f0d592" : "#7ea15a";
  const leafDeep = light ? "#d4af65" : "#6d8a4e";
  return (
    <svg viewBox="0 0 360 56" className={className} aria-hidden>
      <path
        d="M6 32c28-14 48 10 78 2s42-20 70-8 40 16 72 4 48-18 78-6 40 12 50 8"
        fill="none"
        stroke={vine}
        strokeWidth="1.6"
      />
      {roses.map((x, index) => {
        const y = 26 + (index % 2 === 0 ? -6 : 7);
        const red = light ? "#fff6dd" : index % 2 === 0 ? "#8d1d32" : "#b4333f";
        return (
          <g key={x} transform={`translate(${x} ${y})`}>
            <ellipse cx="-9" cy="2" rx="8" ry="3.4" fill={leaf} transform="rotate(-28)" />
            <ellipse cx="9" cy="3" rx="7" ry="3" fill={leafDeep} transform="rotate(24)" />
            <circle r="6.2" fill={red} />
            <circle r="3.2" fill={index % 3 === 0 ? "#e7c56a" : light ? "#fffaf3" : "#f2d2c4"} />
          </g>
        );
      })}
    </svg>
  );
}

export function Chandelier({ className = "h-44 w-36" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 210" className={className} aria-hidden>
      <path d="M80 0v26" stroke="#f0d592" strokeWidth="2" />
      <ellipse cx="80" cy="30" rx="12" ry="4" fill="#f3e1b5" />
      <path d="M80 34c-28 18-46 48-50 92" fill="none" stroke="#e6c98a" strokeWidth="1.5" />
      <path d="M80 34c28 18 46 48 50 92" fill="none" stroke="#e6c98a" strokeWidth="1.5" />
      <path d="M80 36c-14 16-22 40-22 72" fill="none" stroke="#e6c98a" strokeWidth="1.3" />
      <path d="M80 36c14 16 22 40 22 72" fill="none" stroke="#e6c98a" strokeWidth="1.3" />
      <path d="M80 40v78" stroke="#e6c98a" strokeWidth="1.5" />
      <path d="M80 70l7 18h-14z" fill="#fff6dd" opacity="0.95" />
      <path d="M58 96l5 12h-10z" fill="#fff6dd" opacity="0.8" />
      <path d="M102 96l5 12h-10z" fill="#fff6dd" opacity="0.8" />
      <path d="M36 118l5 12h-10z" fill="#fff6dd" opacity="0.75" />
      <path d="M124 118l5 12h-10z" fill="#fff6dd" opacity="0.75" />
      {[
        [80, 128],
        [58, 116],
        [102, 116],
        [34, 138],
        [126, 138],
      ].map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <rect x={x - 5} y={y} width="10" height="18" rx="1" fill="#fff8ee" />
          <path d={`M${x} ${y - 8}c2 4 2 8 0 10c-2-2-2-6 0-10z`} fill="#ffd27a" />
        </g>
      ))}
    </svg>
  );
}

export function HeritageIntro({ kicker, title }: { kicker: string; title: string }) {
  return (
    <Reveal className="text-center">
      <p className="font-display text-[0.68rem] tracking-[0.32em] text-[#8d6a3a] uppercase">{kicker}</p>
      <h2 className="script-title mt-1 text-[#3c241c]">{title}</h2>
    </Reveal>
  );
}

export function VisibleDate({
  day,
  monthYear,
  when,
  kicker = "You're invited",
  compact = false,
}: {
  day: string;
  monthYear: string;
  when: string;
  kicker?: string;
  compact?: boolean;
}) {
  return (
    <div className={compact ? "visible-date is-compact" : "visible-date"}>
      <p className="visible-date-kicker">{kicker}</p>
      <p className="visible-date-day">{day}</p>
      <p className="visible-date-month">{monthYear}</p>
      <p className="visible-date-when">{when}</p>
    </div>
  );
}

export function DateSection() {
  const date = splitDate(wedding.dateLine);

  return (
    <section aria-label="Wedding date" className="heritage-section">
      <HeritageIntro kicker="A date to hold close" title="Our forever begins" />
      <Reveal delay={0.08}>
        <div className="relative mx-auto mt-3 max-w-sm">
          <FloralGarland className="pointer-events-none absolute -top-4 right-2 left-2 h-9" />
          <VisibleDate day={date.day} monthYear={date.monthYear} when={wedding.dateWhen} />
          <FloralGarland className="pointer-events-none absolute right-2 -bottom-4 left-2 h-9" />
        </div>
      </Reveal>
    </section>
  );
}

export function FestivitySection({
  label,
  title,
  date,
  when,
  summary,
  art,
}: {
  label: string;
  title: string;
  date: string;
  when: string;
  summary: string;
  art?: ReactNode;
}) {
  const parts = splitDate(date);

  return (
    <section aria-label={label} className="heritage-section">
      <Reveal className="text-center">
        <h2 className="script-title text-[#6e1830]">{title}</h2>
        <p className="mt-2 font-serif text-[3.35rem] leading-none font-semibold text-[#2a1612]">{parts.day}</p>
        <p className="font-serif text-[1.55rem] leading-tight font-semibold text-[#2a1612]">{parts.monthYear}</p>
        <p className="mt-1 font-serif text-[1.2rem] text-[#7a1830]">{when}</p>
      </Reveal>
      {art ? <div className="festivity-art">{art}</div> : null}
      <Reveal delay={0.12}>
        <p className="mx-auto mt-3 max-w-[18.5rem] text-center font-serif text-[1.15rem] leading-snug text-[#5c4034]">
          {summary}
        </p>
      </Reveal>
      <FloralGarland className="mx-auto mt-5 h-9 w-full max-w-xs" />
    </section>
  );
}
