"use client";

import { assets, eventById, wedding } from "@/data/wedding";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { GoldenParticles } from "./GoldenParticles";
import { VarmalaScene } from "./illustrations";
import { Reveal } from "./Reveal";
import { Scene } from "./Scene";

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
    <Scene
      image={assets.mandapBackdrop}
      label="Grand wedding ceremony"
      zoom
      overlay="bg-gradient-to-b from-maroon/45 via-[#4a0810]/28 to-[#2a060c]/84"
      fx={<GoldenParticles count={10} />}
    >
      <div ref={artRef} className="mx-auto h-[42vh] min-h-[240px] max-h-[360px] w-full">
        {wedding.visual.illustratedScenes ? <VarmalaScene /> : null}
      </div>
      <div className="mx-auto mt-2 w-full max-w-sm text-center">
        <Reveal>
          <p className="font-display text-[0.68rem] tracking-[0.38em] text-gold">
            {event.weekday.toUpperCase()}
          </p>
          <h2 className="mt-1 font-script text-[3.4rem] leading-none text-gold-soft lift">
            Grand Wedding
          </h2>
          <p className="mt-3 font-serif text-xl italic text-cream">{event.date}</p>
          <p className="mt-1 font-display text-[0.72rem] tracking-[0.22em] text-gold">
            BARAAT PROCESSION · 2:00 PM
          </p>
        </Reveal>
        <Reveal delay={1.05}>
          <p className="mt-5 font-script text-[2.7rem] leading-tight text-gold-soft">
            Forever Begins Together
          </p>
        </Reveal>
      </div>
    </Scene>
  );
}
