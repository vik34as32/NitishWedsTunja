"use client";

import { NightBackdrop, PetalField, VillageGate, VillageHuts } from "./scenery";
import { useBaraatLive } from "./useBaraatLive";

export function VillageArrival() {
  const { ref, live } = useBaraatLive<HTMLElement>();

  return (
    <section
      ref={ref}
      aria-label="Baraat arrival at Lalahata"
      className={live ? "baraat-scene is-live" : "baraat-scene"}
    >
      <NightBackdrop />
      <VillageHuts />
      <PetalField />
      <span className="fw fw-arrive" aria-hidden />
      <span className="fw fw-arrive-b" aria-hidden />
      <div className="baraat-copy">
        <p className="baraat-kicker">Lalahata welcomes the baraat</p>
        <h2 className="baraat-hindi">शुभ आगमन – ललाहाटा</h2>
        <p className="baraat-hindi baraat-hindi-sub">बारात पहुंच चुकी है!</p>
      </div>
      <div className="gate-wrap">
        <VillageGate name="LALAHATA" />
      </div>
    </section>
  );
}
