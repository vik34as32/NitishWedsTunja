"use client";

import { wedding, splitDate } from "@/data/wedding";
import { motionLocked } from "@/hooks/usePrefersReducedMotion";
import { useEffect, useRef, useState } from "react";
import { Chandelier, FloralGarland, VisibleDate } from "./Heritage";

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
  const date = splitDate(wedding.dateLine);

  useEffect(() => {
    if (!opening) return;
    let timeline: { kill: () => void } | null = null;
    let cancel = false;
    const safety = window.setTimeout(() => done.current(), 2600);

    void (async () => {
      try {
        const { default: gsap } = await import("gsap");
        if (cancel || !leftRef.current || !rightRef.current) return;
        const sequence = gsap.timeline({ onComplete: () => done.current() });
        timeline = sequence;
        if (copyRef.current) {
          sequence.to(copyRef.current, { opacity: 0, y: -24, duration: 0.45, ease: "power2.in" }, 0);
        }
        sequence
          .to(leftRef.current, { xPercent: -110, duration: 1.25, ease: "power3.inOut" }, 0.08)
          .to(rightRef.current, { xPercent: 110, duration: 1.25, ease: "power3.inOut" }, 0.08);
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
    <div className="stage relative h-full overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-[7%] flex justify-center">
        <Chandelier className="h-52 w-40" />
      </div>
      <FloralGarland light className="pointer-events-none absolute inset-x-0 bottom-0 h-14 w-full" />
      <div ref={leftRef} className="curtain curtain-left" />
      <div ref={rightRef} className="curtain curtain-right" />
      <div
        ref={copyRef}
        className="relative z-10 flex h-full flex-col items-center justify-end px-5 text-center"
        style={{
          paddingBottom: "max(4.6rem, calc(env(safe-area-inset-bottom) + 3.6rem))",
        }}
      >
        <p
          className="font-script text-[3.1rem] leading-none text-[#f8f1e6]"
          aria-label={`${wedding.groom.name} and ${wedding.bride.name}`}
        >
          {wedding.groom.name}
          <span aria-hidden> & </span>
          {wedding.bride.name}
        </p>
        <VisibleDate
          compact
          day={date.day}
          monthYear={date.monthYear}
          when={wedding.dateWhen}
        />
        <button
          type="button"
          className="mt-5 font-script text-[2.8rem] leading-none text-[#f3e1b5] disabled:opacity-70"
          onClick={open}
          disabled={opening}
        >
          tap to open
        </button>
      </div>
    </div>
  );
}
