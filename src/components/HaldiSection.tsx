"use client";

import { eventById, splitDate } from "@/data/wedding";
import { FloralGarland } from "./Heritage";
import { Reveal } from "./Reveal";

function Marigold({ x, y, r = 7 }: { x: number; y: number; r?: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <circle r={r} fill="#F6C431" />
      <circle r={r * 0.42} fill="#C4322A" />
    </g>
  );
}

function HaldiCartoon() {
  return (
    <svg viewBox="0 0 360 230" className="h-full w-full" aria-hidden>
      <rect width="360" height="230" fill="#F6C431" />
      <rect y="168" width="360" height="62" fill="#F3B423" />
      {[16, 42, 68, 94, 120, 250, 278, 306, 334].map((x) => (
        <Marigold key={x} x={x} y={16} r={8} />
      ))}
      <Marigold x={22} y={48} />
      <Marigold x={338} y={52} />
      <Marigold x={28} y={150} r={6} />
      <Marigold x={332} y={148} r={6} />

      <g className="haldi-hand haldi-hand-left">
        <path d="M8 118c34 16 62 18 86 6" fill="none" stroke="#F6D7B8" strokeWidth="16" strokeLinecap="round" />
        <circle cx="96" cy="116" r="13" fill="#F6D7B8" />
        <circle cx="104" cy="110" r="4" fill="#E8A317" />
        <circle cx="46" cy="122" r="6" fill="none" stroke="#9A1D32" strokeWidth="2.4" />
        <circle cx="58" cy="118" r="6" fill="none" stroke="#C4322A" strokeWidth="2.4" />
        <circle cx="70" cy="116" r="6" fill="none" stroke="#E2B423" strokeWidth="2.4" />
      </g>

      <g className="haldi-hand haldi-hand-right">
        <path d="M352 122c-36 14-66 16-92 4" fill="none" stroke="#F6D7B8" strokeWidth="16" strokeLinecap="round" />
        <circle cx="256" cy="116" r="13" fill="#F6D7B8" />
        <circle cx="248" cy="110" r="4" fill="#E8A317" />
        <circle cx="312" cy="124" r="6" fill="none" stroke="#9A1D32" strokeWidth="2.4" />
        <circle cx="300" cy="120" r="6" fill="none" stroke="#C4322A" strokeWidth="2.4" />
        <circle cx="288" cy="118" r="6" fill="none" stroke="#E2B423" strokeWidth="2.4" />
      </g>

      <path d="M108 156c6-22 28-32 68-32s62 12 70 34l18 74H90Z" fill="#F8D34A" />
      <path d="M148 132l28 26 28-26" fill="none" stroke="#E2B12A" strokeWidth="4" strokeLinejoin="round" />
      <circle cx="132" cy="188" r="7" fill="#E8A317" opacity="0.85" />
      <circle cx="214" cy="176" r="5" fill="#E8A317" opacity="0.8" />
      <circle cx="176" cy="204" r="6" fill="#F0B429" opacity="0.9" />

      <path d="M122 118c0-42 22-62 54-62s54 18 54 58c-10-22-28-30-54-28s-44 10-54 32z" fill="#2A1814" />
      <circle cx="176" cy="124" r="36" fill="#F6D7B8" />
      <path d="M176 96l4 10h-8z" fill="#C4322A" />
      <path d="M150 118h52" stroke="#5C3B16" strokeWidth="3" strokeLinecap="round" />
      <ellipse cx="162" cy="120" rx="12" ry="8" fill="#5A3A22" />
      <ellipse cx="190" cy="120" rx="12" ry="8" fill="#5A3A22" />
      <ellipse cx="158" cy="118" rx="4" ry="2.4" fill="#F8E7C4" opacity="0.55" />
      <ellipse cx="186" cy="118" rx="4" ry="2.4" fill="#F8E7C4" opacity="0.55" />
      <path d="M158 142c8 4 16 6 26 4" fill="#2A1814" />
      <path d="M160 138q16 14 32 0" fill="none" stroke="#A85A48" strokeWidth="2.2" strokeLinecap="round" />

      <ellipse className="haldi-spot" cx="142" cy="132" rx="11" ry="8" fill="#F0B429" />
      <ellipse className="haldi-spot haldi-spot-late" cx="210" cy="130" rx="12" ry="8" fill="#E8A317" />
      <circle className="haldi-spot" cx="136" cy="124" r="3.2" fill="#F6C431" />
      <circle className="haldi-spot haldi-spot-late" cx="216" cy="122" r="3.4" fill="#F6C431" />

      <g transform="translate(238 10)">
        <path
          d="M18 22c2-16 20-24 40-16 14-14 46-8 50 12 14 2 20 24 8 36-8 14-28 20-46 14-18 12-46 6-52-12-8-10-10-24 0-34z"
          fill="#FFF8EC"
          stroke="#E6C98A"
        />
        <text x="58" y="34" textAnchor="middle" className="haldi-sign">
          Haldi
        </text>
        <text x="58" y="60" textAnchor="middle" className="haldi-sign">
          Rasam
        </text>
      </g>

      <ellipse cx="78" cy="206" rx="26" ry="9" fill="#8A5A20" />
      <ellipse cx="78" cy="200" rx="22" ry="7" fill="#F2C14E" />
      <ellipse cx="292" cy="208" rx="30" ry="10" fill="#8A5A20" />
      <ellipse cx="292" cy="201" rx="25" ry="8" fill="#F6D34E" />
      <circle className="haldi-fall" cx="48" cy="8" r="3" fill="#FFF3A8" />
      <circle className="haldi-fall haldi-fall-late" cx="300" cy="4" r="2.6" fill="#FFF6C8" />
      <circle className="haldi-fall haldi-fall-later" cx="168" cy="0" r="2.4" fill="#FFE38A" />
    </svg>
  );
}

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
          <HaldiCartoon />
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
