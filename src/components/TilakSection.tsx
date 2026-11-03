"use client";

import { eventById, wedding } from "@/data/wedding";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FestivitySection } from "./Heritage";
import { TilakScene } from "./illustrations";

export function TilakSection() {
  const event = eventById("tilak");
  const artRef = useRef<HTMLDivElement>(null);
  const active = useInView(artRef, { once: true, amount: 0.45 });

  return (
    <FestivitySection
      label="Shubh Tilak ceremony"
      title={event.title}
      date={event.date}
      when={`${event.weekday} · ${event.time}`}
      summary={event.summary}
      art={
        wedding.visual.illustratedScenes ? (
          <div ref={artRef} className="h-full">
            <TilakScene active={active} />
          </div>
        ) : (
          <div ref={artRef} />
        )
      }
    />
  );
}
