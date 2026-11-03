"use client";

import "./baraat.css";
import { BaraatDancers } from "./BaraatDancers";
import { FireworksAnimation } from "./FireworksAnimation";
import { GroomOnHorse } from "./GroomOnHorse";
import { VillageArrival } from "./VillageArrival";
import { VillageDeparture } from "./VillageDeparture";

export function BaraatJourney() {
  return (
    <div className="baraat-journey" aria-label="Baraat journey from Nadiyav to Lalahata">
      <VillageDeparture />
      <GroomOnHorse />
      <BaraatDancers />
      <FireworksAnimation />
      <VillageArrival />
    </div>
  );
}
