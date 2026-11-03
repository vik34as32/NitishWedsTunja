"use client";

import { motion } from "framer-motion";
import { PetalShape } from "./Ornaments";

const PETALS = [
  { left: "6%", delay: "0s", duration: "12.5s", size: 15, variant: "fall-a" },
  { left: "18%", delay: "1.4s", duration: "14s", size: 12, variant: "fall-b" },
  { left: "31%", delay: "3.1s", duration: "11.5s", size: 16, variant: "fall-a" },
  { left: "44%", delay: "0.6s", duration: "13.2s", size: 11, variant: "fall-b" },
  { left: "57%", delay: "2.4s", duration: "15s", size: 14, variant: "fall-a" },
  { left: "69%", delay: "4.2s", duration: "12s", size: 13, variant: "fall-b" },
  { left: "80%", delay: "1.1s", duration: "13.8s", size: 17, variant: "fall-a" },
  { left: "90%", delay: "2.8s", duration: "11.8s", size: 12, variant: "fall-b" },
  { left: "12%", delay: "5s", duration: "14.4s", size: 13, variant: "fall-a" },
  { left: "38%", delay: "6.2s", duration: "12.6s", size: 15, variant: "fall-b" },
  { left: "63%", delay: "4.8s", duration: "13.4s", size: 11, variant: "fall-a" },
  { left: "74%", delay: "7s", duration: "15.2s", size: 14, variant: "fall-b" },
];

const BURST = [
  { left: "8%", delay: 0, duration: 1.7, rotate: 140, size: 16, x: -16 },
  { left: "18%", delay: 0.05, duration: 1.85, rotate: -120, size: 13, x: 10 },
  { left: "28%", delay: 0.12, duration: 1.6, rotate: 180, size: 18, x: -8 },
  { left: "40%", delay: 0.02, duration: 1.9, rotate: -90, size: 14, x: 18 },
  { left: "52%", delay: 0.16, duration: 1.75, rotate: 110, size: 15, x: -12 },
  { left: "63%", delay: 0.08, duration: 1.65, rotate: -160, size: 12, x: 14 },
  { left: "74%", delay: 0.18, duration: 1.95, rotate: 70, size: 17, x: -20 },
  { left: "86%", delay: 0.1, duration: 1.7, rotate: -130, size: 14, x: 8 },
  { left: "34%", delay: 0.22, duration: 2, rotate: 200, size: 11, x: 22 },
  { left: "58%", delay: 0.14, duration: 1.8, rotate: -40, size: 16, x: -18 },
];

export function FloatingPetals({
  className = "absolute inset-0",
  count = 8,
}: {
  className?: string;
  count?: number;
}) {
  return (
    <div className={`pointer-events-none overflow-hidden ${className}`} aria-hidden>
      {PETALS.slice(0, count).map((petal) => (
        <span
          key={`${petal.left}-${petal.delay}`}
          className={petal.variant}
          style={{
            left: petal.left,
            width: petal.size,
            animationDelay: petal.delay,
            animationDuration: petal.duration,
          }}
        >
          <PetalShape />
        </span>
      ))}
    </div>
  );
}

export function PetalBurst() {
  return (
    <>
      {BURST.map((petal) => (
        <motion.div
          key={`${petal.left}-${petal.rotate}`}
          className="absolute"
          style={{ left: petal.left, top: "-6%", width: petal.size }}
          initial={{ y: 0, x: 0, opacity: 0, rotate: 0 }}
          animate={{
            y: "110vh",
            x: petal.x,
            opacity: [0, 1, 1, 0.15],
            rotate: petal.rotate,
          }}
          transition={{ duration: petal.duration, delay: petal.delay, ease: "easeIn" }}
        >
          <PetalShape />
        </motion.div>
      ))}
    </>
  );
}
