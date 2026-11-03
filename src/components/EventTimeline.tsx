"use client";

import { splitDate, wedding } from "@/data/wedding";
import { motion } from "framer-motion";
import { FloralGarland, HeritageIntro } from "./Heritage";

export function EventTimeline() {
  return (
    <section aria-label="Wedding itinerary" className="heritage-section">
      <HeritageIntro kicker="The celebration" title="Our wedding days" />
      <ol className="celebration-list">
        {wedding.events.map((event, index) => {
          const date = splitDate(event.date);
          return (
            <motion.li
              key={event.id}
              className="celebration-item"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
            >
              <div className="pr-1 text-right">
                <p className="font-serif text-[1.35rem] leading-none font-semibold text-[#7a1830]">
                  {date.day} {date.shortMonth}
                </p>
                <p className="mt-1 font-serif text-[0.95rem] leading-tight text-[#5c4034]">{event.time}</p>
              </div>
              <div>
                <p className="font-serif text-[1.45rem] leading-tight font-semibold text-[#2a1612]">
                  {event.title}
                </p>
                <p className="font-serif text-[1.05rem] text-[#6b5346] italic">{event.weekday}</p>
              </div>
            </motion.li>
          );
        })}
      </ol>
      <FloralGarland className="mx-auto mt-3 h-9 w-full max-w-xs" />
    </section>
  );
}
