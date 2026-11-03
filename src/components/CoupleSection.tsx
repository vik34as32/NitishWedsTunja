"use client";

import { assets, wedding } from "@/data/wedding";
import { motion } from "framer-motion";
import Image from "next/image";
import { Marigold, OrnamentFrame } from "./Ornaments";
import { Reveal } from "./Reveal";
import { Scene } from "./Scene";

const ease = [0.22, 1, 0.36, 1] as const;

export function CoupleSection() {
  return (
    <Scene
      image={assets.palaceBackdrop}
      label="Nitish and Tanuja"
      zoom
      overlay="bg-gradient-to-b from-[#2a060c]/86 via-[#4a0810]/78 to-[#2a060c]/90"
    >
      <motion.div
        className="absolute top-6 left-1 w-12"
        animate={{ y: [0, -12, 0], rotate: [-8, 8, -8] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      >
        <Marigold />
      </motion.div>
      <motion.div
        className="absolute top-16 right-1 w-10"
        animate={{ y: [0, -10, 0], rotate: [6, -6, 6] }}
        transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      >
        <Marigold />
      </motion.div>
      <div className="invite-card relative mx-auto w-full max-w-sm px-5 py-8 text-center">
        <OrnamentFrame />
        <motion.div
          className="relative mx-auto h-[320px] w-full"
          initial={{ opacity: 0, scale: 1.08 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.25, ease }}
        >
          <Image
            src={assets.couplePortrait}
            alt="Illustrated portrait of Nitish and Tanuja in wedding attire"
            fill
            sizes="320px"
            draggable={false}
            className="object-contain kenburns"
          />
        </motion.div>
        <Reveal delay={0.15}>
          <p className="mt-2 font-script text-[2.6rem] leading-tight text-maroon">{wedding.quote}</p>
        </Reveal>
      </div>
    </Scene>
  );
}
