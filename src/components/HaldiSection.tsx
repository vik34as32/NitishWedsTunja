"use client";

import { eventById, wedding } from "@/data/wedding";
import { FestivitySection } from "./Heritage";
import { HaldiScene } from "./illustrations";

export function HaldiSection() {
  const event = eventById("haldi");

  return (
    <FestivitySection
      label="Haldi and Matkod ceremony"
      title={event.title}
      date={event.date}
      when={`${event.weekday} · ${event.time}`}
      summary={event.summary}
      art={wedding.visual.illustratedScenes ? <HaldiScene /> : null}
    />
  );
}
