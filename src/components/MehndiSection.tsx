"use client";

import { eventById, wedding } from "@/data/wedding";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FestivitySection } from "./Heritage";
import { MehndiScene } from "./illustrations";

export function MehndiSection() {
  const event = eventById("mehndi");
  const artRef = useRef<HTMLDivElement>(null);
  const draw = useInView(artRef, { once: true, amount: 0.4 });

  return (
    <FestivitySection
      label="Mehndi ceremony"
      title={event.title}
      date={event.date}
      when={`${event.weekday} · ${event.time}`}
      summary={event.summary}
      art={
        wedding.visual.illustratedScenes ? (
          <div ref={artRef} className="h-full">
            <MehndiScene draw={draw} />
          </div>
        ) : (
          <div ref={artRef} />
        )
      }
    />
  );
}
