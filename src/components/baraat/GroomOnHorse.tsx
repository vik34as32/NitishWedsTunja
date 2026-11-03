"use client";

import { Dancer, DholPlayers, DjLights, NightBackdrop, PetalField } from "./scenery";
import { useBaraatLive } from "./useBaraatLive";

function HorseAndGroom() {
  return (
    <g transform="translate(78 4)">
      <ellipse cx="108" cy="168" rx="86" ry="8" fill="#000" opacity="0.3" />
      <path d="M36 96c-22 6-30 28-18 40" fill="none" stroke="#e7e1d8" strokeWidth="7" strokeLinecap="round" />
      <g className="h-leg h-leg-a">
        <path d="M62 118 50 164" stroke="#f4f0e8" strokeWidth="9" strokeLinecap="round" />
        <path d="M50 164 40 168" stroke="#d5cdc2" strokeWidth="4" strokeLinecap="round" />
      </g>
      <g className="h-leg h-leg-b">
        <path d="M84 122 92 166" stroke="#ebe4da" strokeWidth="9" strokeLinecap="round" />
        <path d="M92 166 102 170" stroke="#d5cdc2" strokeWidth="4" strokeLinecap="round" />
      </g>
      <path d="M58 118c8-36 88-40 108-8 6 10 4 22-8 26-28 8-78 6-100-18z" fill="#f7f4ee" />
      <g className="h-leg h-leg-c">
        <path d="M128 116 118 164" stroke="#f4f0e8" strokeWidth="9" strokeLinecap="round" />
        <path d="M118 164 108 168" stroke="#d5cdc2" strokeWidth="4" strokeLinecap="round" />
      </g>
      <g className="h-leg h-leg-d">
        <path d="M150 118 166 166" stroke="#ebe4da" strokeWidth="9" strokeLinecap="round" />
        <path d="M166 166 178 168" stroke="#d5cdc2" strokeWidth="4" strokeLinecap="round" />
      </g>
      <path d="M150 78c22-34 48-36 58-16 4 8 0 16-8 20l-18 10c-16 6-28 2-32-14z" fill="#f7f4ee" />
      <ellipse cx="196" cy="62" rx="24" ry="13" fill="#f7f4ee" />
      <path d="M214 58c12 2 20 8 22 12" stroke="#f7f4ee" strokeWidth="8" strokeLinecap="round" />
      <path d="M184 52c4-16 16-16 16-2" fill="#f7f4ee" />
      <circle cx="206" cy="60" r="2" fill="#2a1814" />
      <path d="M188 58h26" stroke="#e39b2b" strokeWidth="2" />
      <path d="M78 92c22-20 58-22 84-6" fill="none" stroke="#e39b2b" strokeWidth="5" />
      <circle cx="96" cy="86" r="4" fill="#f2c14e" />
      <circle cx="114" cy="80" r="4" fill="#c4322a" />
      <circle cx="132" cy="82" r="4" fill="#f2c14e" />
      <path d="M86 86h52l8 30H78Z" fill="#7a1830" />
      <path d="M90 96h46" stroke="#f0d592" strokeWidth="2.4" />
      <g className="groom-bob">
        <path d="M92 28h40l10 62H82Z" fill="#f6edd8" />
        <path d="M100 42h24" stroke="#7a1830" strokeWidth="6" />
        <circle cx="104" cy="72" r="2" fill="#d4af65" />
        <circle cx="112" cy="72" r="2" fill="#d4af65" />
        <circle cx="120" cy="72" r="2" fill="#d4af65" />
        <circle cx="112" cy="16" r="12" fill="#f1c6a8" />
        <path d="M100 12c2-16 22-18 26-2-6-8-20-8-26 2z" fill="#f3e6c4" />
        <path d="M122 4c8-10 14-6 10 4" fill="#f7f4ee" />
        <circle cx="124" cy="2" r="3.2" fill="#c4322a" />
        <path className="sehra" d="M102 16c2 18 4 26 1 36M112 14c1 20 2 28 0 40M122 16c-1 18-2 26 1 34" />
      </g>
    </g>
  );
}

export function GroomOnHorse() {
  const { ref, live } = useBaraatLive<HTMLElement>();

  return (
    <section
      ref={ref}
      aria-label="Groom riding in the baraat"
      className={live ? "baraat-scene procession is-live" : "baraat-scene procession"}
    >
      <NightBackdrop />
      <DjLights />
      <PetalField />
      <div className="baraat-copy">
        <p className="baraat-kicker">The groom rides</p>
        <h2 className="baraat-title">Nitish on horseback</h2>
      </div>
      <div className="parade" aria-hidden>
        <svg viewBox="0 0 360 180" className="parade-svg" preserveAspectRatio="xMidYMax meet">
          <DholPlayers x={-6} />
          <Dancer x={36} delay={0.12} tone="#f2c14e" />
          <HorseAndGroom />
          <Dancer x={292} delay={0.34} />
        </svg>
      </div>
    </section>
  );
}
