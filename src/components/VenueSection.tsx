"use client";

import { wedding } from "@/data/wedding";
import { Phone } from "lucide-react";
import { FloralGarland } from "./Heritage";
import { Reveal } from "./Reveal";

function Detail({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="mt-3">
      <p className="font-display text-[0.62rem] tracking-[0.26em] text-[#8d6a3a]">{label}</p>
      {href ? (
        <a
          href={href}
          className="mt-1 inline-flex items-center gap-2 font-serif text-[1.7rem] font-semibold text-[#7a1830] underline decoration-[#d7b56e] underline-offset-4"
        >
          <Phone size={16} aria-hidden />
          {value}
        </a>
      ) : (
        <p className="mt-1 font-serif text-[1.55rem] leading-tight font-semibold text-[#2a1612]">{value}</p>
      )}
    </div>
  );
}

export function VenueSection() {
  const host = wedding.wellWishers;
  const bride = wedding.brideFamily;

  return (
    <section aria-label="Family addresses" className="heritage-section">
      <div className="info-card">
        <Reveal>
          <h2 className="font-display text-[0.95rem] tracking-[0.14em] text-[#6e1830] uppercase">
            {host.heading}
          </h2>
          <p className="script-title mt-2 text-[#7a1830]">{host.name}</p>
        </Reveal>
        <Detail label="VILLAGE" value={host.village} />
        <Detail label="POST" value={host.post} />
        <Detail label="DISTRICT" value={host.district} />
        <Detail label="CONTACT" value={host.contact} href={`tel:${host.tel}`} />
      </div>
      <div className="info-card mt-4">
        <Reveal>
          <p className="font-display text-[0.68rem] tracking-[0.28em] text-[#8d6a3a]">BRIDE&apos;S FAMILY</p>
          <p className="mt-3 font-display text-[0.62rem] tracking-[0.24em] text-[#8d6a3a]">FATHER&apos;S NAME</p>
          <h2 className="script-title mt-1 text-[#6e1830]">{bride.name}</h2>
        </Reveal>
        <Detail label="VILLAGE" value={bride.village} />
        <Detail label="POST" value={bride.post} />
        <Detail label="DISTRICT" value={bride.district} />
        <Detail label="CONTACT" value={bride.contact} href={`tel:${bride.tel}`} />
      </div>
      <FloralGarland className="mx-auto mt-5 h-9 w-full max-w-xs" />
    </section>
  );
}
