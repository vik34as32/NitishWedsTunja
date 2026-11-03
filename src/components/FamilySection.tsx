"use client";

import { wedding } from "@/data/wedding";
import { motion } from "framer-motion";
import { FloralGarland, HeritageIntro } from "./Heritage";

export function FamilySection() {
  return (
    <section aria-label="Hosts of the wedding" className="heritage-section text-center">
      <HeritageIntro kicker={wedding.hostsLead} title="The Singh family" />
      <ul className="mx-auto mt-4 max-w-sm">
        {wedding.hosts.map((name, index) => (
          <motion.li
            key={name}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.45, delay: index * 0.04 }}
            className="font-serif text-[1.45rem] leading-tight font-semibold text-[#2a1612]"
          >
            {name}
            {index < wedding.hosts.length - 1 ? (
              <span className="mx-auto mt-2 mb-2 block h-1.5 w-1.5 rotate-45 bg-[#c4a15a]" aria-hidden />
            ) : null}
          </motion.li>
        ))}
      </ul>
      <p className="script-title mt-4 text-[#6e1830]">{wedding.familyLine}</p>
      <FloralGarland className="mx-auto mt-4 h-9 w-full max-w-xs" />
    </section>
  );
}
