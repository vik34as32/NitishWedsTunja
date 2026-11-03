"use client";

import { shareMessage, splitDate, wedding } from "@/data/wedding";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { motion, useInView } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { FloralGarland } from "./Heritage";

const bursts = [
  { x: "18%", y: "22%", delay: 0.1, color: "#F3E1B5" },
  { x: "78%", y: "16%", delay: 0.55, color: "#D4AF65" },
  { x: "48%", y: "12%", delay: 1.05, color: "#FFF9EE" },
];

function Fireworks() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      {bursts.map((burst) =>
        Array.from({ length: 8 }, (_, index) => {
          const angle = (index / 8) * Math.PI * 2;
          const distance = 48 + (index % 3) * 14;
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
                y: Math.sin(angle) * distance + 22,
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
  const date = splitDate(wedding.dateLine);

  useEffect(() => {
    setHref(`https://wa.me/?text=${encodeURIComponent(shareMessage(window.location.href))}`);
  }, []);

  return (
    <section aria-label="Thank you" ref={ref}>
      <div className="heritage-band relative overflow-hidden px-6 py-12 text-center">
        {seen && !reduce ? <Fireworks /> : null}
        <p className="font-display text-[0.66rem] tracking-[0.32em] text-[#f3e1b5]">WITH ALL OUR HEARTS</p>
        <h2 className="script-title relative mt-2 text-[#fff8ee]">Your presence is our present</h2>
        <p className="relative mx-auto mt-3 max-w-[18rem] font-serif text-[1.15rem] leading-snug text-[#f6efe6]/90 italic">
          Your love, blessings, and presence are the greatest gifts we could ever ask for.
        </p>
        <FloralGarland light className="relative mx-auto mt-5 h-10 w-full max-w-xs" />
      </div>
      <div className="heritage-section pb-10">
        <div className="closing-arch">
          <p className="script-title text-[#3c241c]">We can&apos;t wait to celebrate with you</p>
          <p
            className="script-title mt-3 text-[#7a1830]"
            aria-label={`${wedding.groom.name} and ${wedding.bride.name}`}
          >
            {wedding.groom.name}
            <span aria-hidden> & </span>
            {wedding.bride.name}
          </p>
          <p className="mt-3 font-serif text-[2.15rem] leading-none font-semibold text-[#2a1612]">{date.day}</p>
          <p className="font-serif text-[1.35rem] font-semibold text-[#2a1612]">{date.monthYear}</p>
          <p className="mt-1 font-serif text-[1.05rem] text-[#7a1830]">{wedding.dateWhen}</p>
          <p className="mt-4 font-serif text-lg text-[#5c4034] italic">{wedding.closing}</p>
          <a className="share-pill mt-6" href={href} target="_blank" rel="noopener noreferrer">
            <MessageCircle size={16} aria-hidden />
            WhatsApp share
          </a>
        </div>
      </div>
    </section>
  );
}
