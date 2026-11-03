"use client";

import { Dancer, DholPlayers, DjLights, NightBackdrop, PetalField } from "./scenery";
import { useBaraatLive } from "./useBaraatLive";

const dancers = [
  { x: 8, delay: 0, tone: "#f2c14e" },
  { x: 86, delay: 0.22, tone: "#fff6dd" },
  { x: 210, delay: 0.08, tone: "#f6edd8" },
  { x: 292, delay: 0.36, tone: "#e39b2b" },
];

export function BaraatDancers() {
  const { ref, live } = useBaraatLive<HTMLElement>();

  return (
    <section
      ref={ref}
      aria-label="Baraat dance"
      className={live ? "baraat-scene procession is-live" : "baraat-scene procession"}
    >
      <NightBackdrop />
      <DjLights />
      <PetalField />
      <div className="confetti" aria-hidden>
        {Array.from({ length: 10 }, (_, index) => (
          <span key={index} className={`confetti-bit bit-${index}`} />
        ))}
      </div>
      <div className="baraat-copy">
        <p className="baraat-kicker">Dhol and dance</p>
        <h2 className="baraat-title">The baraat celebrates</h2>
      </div>
      <svg viewBox="0 0 360 176" className="dance-stage" preserveAspectRatio="xMidYMax meet" aria-hidden>
        <DholPlayers x={150} />
        {dancers.map((dancer) => (
          <Dancer key={dancer.x} x={dancer.x} delay={dancer.delay} tone={dancer.tone} />
        ))}
      </svg>
    </section>
  );
}
