"use client";

import { assets, wedding } from "@/data/wedding";
import { motion } from "framer-motion";
import { GoldRule } from "./Ornaments";
import { Reveal } from "./Reveal";
import { Scene } from "./Scene";

export function FamilySection() {
  return (
    <Scene
      image={assets.palaceBackdrop}
      label="Hosts of the wedding"
      overlay="bg-gradient-to-b from-[#2a060c]/88 via-[#720d18]/78 to-[#2a060c]/92"
    >
      <Reveal>
        <p className="text-center font-display text-[0.68rem] tracking-[0.32em] text-gold">
          {wedding.hostsLead.toUpperCase()}
        </p>
      </Reveal>
      <ul className="mx-auto mt-6 max-w-sm text-center">
        {wedding.hosts.map((name, index) => (
          <motion.li
            key={name}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.55, delay: index * 0.05 }}
            className="font-serif text-[1.65rem] leading-tight text-cream"
          >
            {name}
            {index < wedding.hosts.length - 1 ? (
              <span className="mx-auto mt-2 mb-2 block h-1.5 w-1.5 rotate-45 bg-gold" aria-hidden />
            ) : null}
          </motion.li>
        ))}
      </ul>
      <Reveal delay={0.2}>
        <GoldRule className="mx-auto mt-4 max-w-[12rem]" />
        <p className="mt-4 text-center font-script text-4xl text-gold-soft">{wedding.familyLine}</p>
      </Reveal>
    </Scene>
  );
}
