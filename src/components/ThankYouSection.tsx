"use client";

import { assets, shareMessage, wedding } from "@/data/wedding";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { motion, useInView } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { FloatingPetals } from "./FloatingPetals";
import { Reveal } from "./Reveal";
import { Scene } from "./Scene";

const bursts = [
  { x: "18%", y: "18%", delay: 0.1, color: "#F3E1B5" },
  { x: "76%", y: "14%", delay: 0.55, color: "#D4AF65" },
  { x: "48%", y: "24%", delay: 1.05, color: "#FFF9EE" },
  { x: "30%", y: "10%", delay: 1.5, color: "#E39B2B" },
];

function Fireworks() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      {bursts.map((burst) =>
        Array.from({ length: 8 }, (_, index) => {
          const angle = (index / 8) * Math.PI * 2;
          const distance = 58 + (index % 3) * 18;
          return (
            <motion.span
              key={`${burst.x}-${index}`}
              className="absolute h-1.5 w-1.5 rounded-full"
              style={{
                left: burst.x,
                top: burst.y,
                background: burst.color,
                boxShadow: `0 0 8px ${burst.color}`,
              }}
              initial={{ opacity: 0, x: 0, y: 0, scale: 0.3 }}
              animate={{
                opacity: [0, 1, 0],
                x: Math.cos(angle) * distance,
                y: Math.sin(angle) * distance + 28,
                scale: [0.3, 1, 0.2],
              }}
              transition={{
                duration: 1.7,
                delay: burst.delay,
                repeat: Infinity,
                repeatDelay: 1.35,
                ease: "easeOut",
              }}
            />
          );
        }),
      )}
    </div>
  );
}

export function ThankYouSection() {
  const ref = useRef<HTMLDivElement>(null);
  const seen = useInView(ref, { once: true, amount: 0.35 });
  const reduce = usePrefersReducedMotion();
  const [href, setHref] = useState("https://wa.me/");

  useEffect(() => {
    setHref(`https://wa.me/?text=${encodeURIComponent(shareMessage(window.location.href))}`);
  }, []);

  return (
    <Scene
      image={assets.nightSky}
      label="Thank you"
      zoom
      overlay="bg-gradient-to-b from-[#14040a]/30 via-[#720d18]/50 to-[#14040a]/84"
      fx={
        <>
          <FloatingPetals count={6} />
          {seen && !reduce ? <Fireworks /> : null}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(243,225,181,0.28),transparent_58%)]" />
        </>
      }
    >
      <div ref={ref} className="mx-auto w-full max-w-sm text-center">
        <Reveal>
          <p className="font-serif text-[1.85rem] leading-snug text-cream">{wedding.thankYou}</p>
        </Reveal>
        <Reveal delay={0.15}>
          <p
            className="mt-5 font-script text-5xl leading-none text-gold-soft"
            aria-label={`${wedding.groom.name} and ${wedding.bride.name}`}
          >
            {wedding.groom.name}
            <span aria-hidden> ❤️ </span>
            {wedding.bride.name}
          </p>
        </Reveal>
        <Reveal delay={0.28}>
          <p className="mt-5 font-serif text-xl italic text-gold-soft">{wedding.closing}</p>
          <a
            className="invite-btn mt-8 inline-flex w-full items-center justify-center gap-2 px-5 py-3.5 font-display text-[0.68rem] no-underline"
            style={{
              background:
                "linear-gradient(180deg, rgba(37,211,102,0.2), rgba(74,10,18,0.28))",
            }}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={16} className="relative z-[1]" aria-hidden />
            <span className="relative z-[1]">WhatsApp Share Invitation</span>
          </a>
        </Reveal>
      </div>
    </Scene>
  );
}
