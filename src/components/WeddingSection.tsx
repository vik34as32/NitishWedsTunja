"use client";

import { eventById, wedding } from "@/data/wedding";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { FestivitySection } from "./Heritage";
import { VarmalaScene } from "./illustrations";

export function WeddingSection() {
  const event = eventById("vivah");
  const artRef = useRef<HTMLDivElement>(null);
  const inView = useInView(artRef, { once: true, amount: 0.4 });
  const reduce = usePrefersReducedMotion();

  useEffect(() => {
    if (!inView || reduce) return;
    const root = artRef.current;
    if (!root) return;
    let timeline: { kill: () => void } | null = null;
    let cancel = false;

    void (async () => {
      try {
        const { default: gsap } = await import("gsap");
        if (cancel) return;
        const groom = root.querySelector(".js-groom");
        const bride = root.querySelector(".js-bride");
        const garlands = root.querySelectorAll(".js-garland");
        const glow = root.querySelector(".js-glow");
        if (!groom || !bride) return;
        const sequence = gsap
          .timeline()
          .fromTo(groom, { x: -68, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: 1.05, ease: "power3.out" })
          .fromTo(
            bride,
            { x: 68, autoAlpha: 0 },
            { x: 0, autoAlpha: 1, duration: 1.05, ease: "power3.out" },
            "<",
          )
          .fromTo(
            garlands,
            { y: -110, autoAlpha: 0 },
            { y: 0, autoAlpha: 1, duration: 1.15, ease: "power2.inOut" },
            "-=0.3",
          );
        if (glow) {
          sequence.fromTo(glow, { autoAlpha: 0 }, { autoAlpha: 1, duration: 1 }, "-=0.7");
        }
        timeline = sequence;
      } catch {
        root.classList.add("is-shown");
      }
    })();

    return () => {
      cancel = true;
      timeline?.kill();
    };
  }, [inView, reduce]);

  return (
    <FestivitySection
      label="Grand wedding ceremony"
      title="Vivah"
      date={event.date}
      when={`${event.weekday} · ${event.time}`}
      summary={event.summary}
      art={
        <div ref={artRef} className="h-full">
          {wedding.visual.illustratedScenes ? <VarmalaScene /> : null}
        </div>
      }
    />
  );
}
