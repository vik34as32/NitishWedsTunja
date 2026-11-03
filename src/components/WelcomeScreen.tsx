"use client";

import { assets } from "@/data/wedding";
import { motionLocked } from "@/hooks/usePrefersReducedMotion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FloatingPetals, PetalBurst } from "./FloatingPetals";
import { GoldenParticles } from "./GoldenParticles";
import { Diya, OrnamentFrame } from "./Ornaments";

function DoorFace({ side }: { side: "left" | "right" }) {
  return (
    <>
      <div className="door-face absolute inset-0 overflow-hidden">
        <div className={`absolute inset-y-0 w-[200%] ${side === "right" ? "-left-full" : "left-0"}`}>
          <Image
            src={assets.palaceBackdrop}
            alt=""
            fill
            priority
            sizes="100vw"
            draggable={false}
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-maroon/40 via-maroon/10 to-[#2a060c]/75" />
        <div className="absolute inset-2 border border-gold/80" />
        <div className="absolute inset-4 border border-gold/35" />
      </div>
      <div
        className="door-back absolute inset-0"
        style={{
          transform: "rotateY(180deg)",
          background: "linear-gradient(180deg, #8a6232 0%, #f0d592 30%, #6b4a22 72%, #3a2412 100%)",
        }}
      />
    </>
  );
}

export function WelcomeScreen({
  onEngage,
  onOpened,
}: {
  onEngage: () => void;
  onOpened: () => void;
}) {
  const [opening, setOpening] = useState(false);
  const copyRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const done = useRef(onOpened);
  done.current = onOpened;

  useEffect(() => {
    if (!opening) return;
    let timeline: { kill: () => void } | null = null;
    let cancel = false;
    const safety = window.setTimeout(() => done.current(), 3400);

    void (async () => {
      try {
        const { default: gsap } = await import("gsap");
        if (cancel || !leftRef.current || !rightRef.current) return;
        const sequence = gsap.timeline({ onComplete: () => done.current() });
        timeline = sequence;
        if (copyRef.current) {
          sequence.to(copyRef.current, { opacity: 0, y: -28, duration: 0.5, ease: "power2.in" }, 0);
        }
        sequence
          .to(
            leftRef.current,
            { rotationY: -108, duration: 1.7, ease: "power3.inOut", transformOrigin: "right center" },
            0.15,
          )
          .to(
            rightRef.current,
            { rotationY: 108, duration: 1.7, ease: "power3.inOut", transformOrigin: "left center" },
            0.15,
          );
      } catch {
        done.current();
      }
    })();

    return () => {
      cancel = true;
      timeline?.kill();
      window.clearTimeout(safety);
    };
  }, [opening]);

  function open() {
    if (opening) return;
    onEngage();
    if (motionLocked()) {
      onOpened();
      return;
    }
    setOpening(true);
  }

  return (
    <div className="relative h-full">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#f3e1b5_0%,#990f19_46%,#720d18_100%)]" />
      <div className="door-stage is-shown absolute inset-0">
        <div ref={leftRef} className="door door-left">
          <DoorFace side="left" />
        </div>
        <div ref={rightRef} className="door door-right">
          <DoorFace side="right" />
        </div>
      </div>
      <FloatingPetals className="absolute inset-0 z-[6]" count={8} />
      <GoldenParticles className="absolute inset-0 z-[6]" count={10} />
      {opening ? (
        <div className="pointer-events-none absolute inset-0 z-30 overflow-hidden">
          <PetalBurst />
        </div>
      ) : null}
      <div
        className="pointer-events-none absolute z-20"
        style={{
          top: "max(0.65rem, env(safe-area-inset-top))",
          right: "0.65rem",
          bottom: "max(0.65rem, env(safe-area-inset-bottom))",
          left: "0.65rem",
        }}
      >
        <OrnamentFrame />
      </div>
      <div
        ref={copyRef}
        className="relative z-10 flex h-full flex-col items-center px-6 text-center"
        style={{
          paddingTop: "max(4.4rem, calc(env(safe-area-inset-top) + 3.2rem))",
          paddingBottom: "max(1.1rem, env(safe-area-inset-bottom))",
        }}
      >
        <div className="mt-[6vh]">
          <p className="font-display text-[0.72rem] tracking-[0.48em] text-gold">SHUBH VIVAH</p>
          <p
            className="welcome-lockup lift mt-4 font-script text-[4.5rem] leading-[0.86] text-cream"
            aria-label="Nitish and Tanuja"
          >
            Nitish
            <span className="my-[0.12em] block text-[0.38em]" aria-hidden>
              ❤️
            </span>
            Tanuja
          </p>
          <p className="mt-4 font-display text-[0.62rem] tracking-[0.34em] text-gold-soft">
            21 · 11 · 2026
          </p>
        </div>
        <div className="mt-auto flex w-full flex-col items-center">
          <div className="diya-row mb-1 flex items-end justify-center gap-16">
            <Diya />
            <Diya />
          </div>
          <button
            type="button"
            className="invite-btn mt-2 w-full max-w-[280px] px-5 py-3.5 font-display text-[0.68rem] disabled:opacity-70"
            onClick={open}
            disabled={opening}
          >
            <span className="relative z-[1]">Open Wedding Invitation</span>
          </button>
        </div>
      </div>
    </div>
  );
}
