"use client";

import { NightBackdrop, PetalField, VillageGate, VillageHuts } from "./scenery";
import { useBaraatLive } from "./useBaraatLive";

export function VillageDeparture() {
  const { ref, live } = useBaraatLive<HTMLElement>();

  return (
    <section
      ref={ref}
      aria-label="Baraat departure from Nadiyav"
      className={live ? "baraat-scene is-live" : "baraat-scene"}
    >
      <NightBackdrop />
      <VillageHuts />
      <PetalField />
      <div className="baraat-copy">
        <p className="baraat-kicker">Nadiyav → Lalahata</p>
        <h2 className="baraat-hindi">
          शुभ बारात प्रस्थान
          <span> – नदियाव</span>
        </h2>
      </div>
      <div className="gate-wrap">
        <VillageGate name="NADIYAV" />
      </div>
      <div className="lamp-row" aria-hidden>
        {Array.from({ length: 7 }, (_, index) => (
          <span key={index} className="lamp" />
        ))}
      </div>
    </section>
  );
}
