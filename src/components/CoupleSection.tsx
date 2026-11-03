"use client";

import { assets, wedding } from "@/data/wedding";
import Image from "next/image";
import { FloralGarland, HeritageIntro } from "./Heritage";
import { Reveal } from "./Reveal";

export function CoupleSection() {
  return (
    <section aria-label="Nitish and Tanuja" className="heritage-section text-center">
      <HeritageIntro kicker="Our story" title="Moments, softly held" />
      <Reveal delay={0.08}>
        <div className="story-frame">
          <div className="relative h-full w-full">
            <Image
              src={assets.couplePortrait}
              alt="Illustrated portrait of Nitish and Tanuja in wedding attire"
              fill
              sizes="320px"
              draggable={false}
              className="object-contain"
            />
          </div>
        </div>
      </Reveal>
      <Reveal delay={0.16}>
        <p className="script-title mx-auto mt-4 max-w-[18rem] text-[#6e1830]">{wedding.quote}</p>
      </Reveal>
      <FloralGarland className="mx-auto mt-4 h-10 w-full max-w-xs" />
    </section>
  );
}
