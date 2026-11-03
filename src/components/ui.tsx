"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = usePrefersReducedMotion();
  return (
    <motion.div
      data-reveal
      className={className}
      initial={reduce ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function FloralDivider({ className = "text-gold" }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 28" className={`mx-auto mt-4 h-7 w-44 ${className}`} aria-hidden>
      <path d="M8 14h78M134 14h78" stroke="currentColor" strokeWidth="0.7" />
      <path
        d="M110 14c-10-9-18-8-20 0 2 8 10 8 20 0zM110 14c10-9 18-8 20 0-2 8-10 8-20 0z"
        fill="currentColor"
      />
      <circle cx="110" cy="14" r="2.4" fill="currentColor" />
    </svg>
  );
}

export function Corner({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 54 54" className={`h-8 w-8 text-gold ${className}`} aria-hidden>
      <path d="M4 18V4h14" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="M8 28c8-2 10-12 18-16"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.8"
      />
      <path d="M16 10c2 6 1 10-4 14 6 1 12-1 16-6" fill="currentColor" opacity="0.85" />
      <circle cx="18" cy="18" r="1.6" fill="currentColor" />
    </svg>
  );
}

export function RoyalFrame({
  children,
  tone = "dark",
  compact = false,
  className = "",
}: {
  children: ReactNode;
  tone?: "dark" | "light";
  compact?: boolean;
  className?: string;
}) {
  return (
    <div className={`${tone === "light" ? "invite-card" : "royal-panel"} ${compact ? "px-4 py-5" : "px-5 py-8"} ${className}`}>
      <Corner className="absolute left-2 top-2" />
      <Corner className="absolute right-2 top-2 rotate-90" />
      <Corner className="absolute bottom-2 right-2 rotate-180" />
      <Corner className="absolute bottom-2 left-2 -rotate-90" />
      {children}
    </div>
  );
}

export function Diya({ className = "" }: { className?: string }) {
  return (
    <div className={`relative flex w-16 flex-col items-center ${className}`} aria-hidden>
      <div className="relative mb-[-6px] h-10 w-10">
        <span className="flame-glow absolute top-0 left-1/2" />
        <span className="flame absolute top-1 left-1/2 -translate-x-1/2" />
      </div>
      <svg viewBox="0 0 80 36" className="w-16">
        <path d="M8 14h64c0 12-14 18-32 18S8 26 8 14z" fill="#6b3e26" />
        <path d="M14 14h52c0 8-10 14-26 14S14 22 14 14z" fill="#d4af65" />
        <ellipse cx="40" cy="14" rx="26" ry="6" fill="#f3e1b5" />
        <ellipse cx="40" cy="14" rx="8" ry="2.5" fill="#8c6a32" />
      </svg>
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  meta,
  tone = "dark",
}: {
  eyebrow: string;
  title: string;
  meta?: string;
  tone?: "dark" | "light";
}) {
  const light = tone === "light";
  return (
    <Reveal className="text-center">
      <p
        className={`font-display text-[0.68rem] tracking-[0.32em] uppercase ${light ? "text-[#8a6840]" : "text-gold"}`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-3 font-display text-[1.9rem] leading-tight ${light ? "text-maroon" : "gold-text"}`}
      >
        {title}
      </h2>
      {meta ? (
        <p className={`mt-3 font-serif text-lg italic ${light ? "text-brown" : "text-cream/85"}`}>
          {meta}
        </p>
      ) : null}
      <FloralDivider className={light ? "text-[#8a6840]" : "text-gold"} />
    </Reveal>
  );
}

export function Backdrop({
  src,
  priority = false,
  overlay = "bg-gradient-to-b from-maroon/75 via-maroon/35 to-[#2a060c]/85",
}: {
  src: string;
  priority?: boolean;
  overlay?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["-6%", "6%"]);

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <motion.div style={{ y }} className="absolute -inset-y-10 inset-x-0">
        <Image
          src={src}
          alt=""
          fill
          priority={priority}
          unoptimized
          sizes="480px"
          className="object-cover kenburns"
        />
      </motion.div>
      <div className={`absolute inset-0 ${overlay}`} />
    </div>
  );
}
