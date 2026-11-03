"use client";

import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef, type ReactNode } from "react";

export function Scene({
  image,
  label,
  overlay,
  priority = false,
  zoom = false,
  fx,
  children,
}: {
  image: string;
  label: string;
  overlay: string;
  priority?: boolean;
  zoom?: boolean;
  fx?: ReactNode;
  children: ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);
  const reduce = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-7%", "7%"]);

  return (
    <section ref={ref} aria-label={label} className="invite-section overflow-hidden">
      <motion.div style={reduce ? undefined : { y }} className="absolute -inset-y-[10%] inset-x-0">
        <Image
          src={image}
          alt=""
          fill
          priority={priority}
          sizes="480px"
          draggable={false}
          className={zoom ? "object-cover kenburns" : "object-cover"}
        />
      </motion.div>
      <div className={`pointer-events-none absolute inset-0 ${overlay}`} />
      {fx ? <div className="pointer-events-none absolute inset-0 z-[5]">{fx}</div> : null}
      <div className="relative z-10 w-full">{children}</div>
    </section>
  );
}
