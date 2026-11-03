"use client";

import { assets, wedding } from "@/data/wedding";
import { Phone } from "lucide-react";
import { OrnamentFrame } from "./Ornaments";
import { Reveal } from "./Reveal";
import { Scene } from "./Scene";

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
      <p className="font-display text-[0.62rem] tracking-[0.28em] text-royal">{label}</p>
      {href ? (
        <a
          href={href}
          className="mt-1 inline-flex items-center gap-2 font-serif text-2xl text-maroon underline decoration-gold/80 underline-offset-4"
        >
          <Phone size={16} aria-hidden />
          {value}
        </a>
      ) : (
        <p className="mt-1 font-serif text-2xl leading-tight text-brown">{value}</p>
      )}
    </div>
  );
}

export function VenueSection() {
  const host = wedding.wellWishers;
  const bride = wedding.brideFamily;

  return (
    <>
      <Scene
        image={assets.nightSky}
        label="Well-wishers"
        overlay="bg-gradient-to-b from-[#14040a]/78 via-[#720d18]/70 to-[#14040a]/88"
      >
        <div className="invite-card relative mx-auto w-full max-w-sm px-6 py-9 text-center">
          <OrnamentFrame />
          <div className="relative">
            <Reveal>
              <h2 className="font-display text-[1.15rem] leading-snug tracking-[0.08em] text-maroon">
                {host.heading}
              </h2>
              <p className="mt-4 font-script text-5xl leading-none text-royal">{host.name}</p>
            </Reveal>
            <Detail label="VILLAGE" value={host.village} />
            <Detail label="POST" value={host.post} />
            <Detail label="DISTRICT" value={host.district} />
            <Detail label="CONTACT" value={host.contact} href={`tel:${host.tel}`} />
          </div>
        </div>
      </Scene>
      <Scene
        image={assets.palaceBackdrop}
        label="Bride's family"
        overlay="bg-gradient-to-b from-[#2a060c]/88 via-[#720d18]/78 to-[#2a060c]/92"
      >
        <div className="invite-card relative mx-auto w-full max-w-sm px-6 py-9 text-center">
          <OrnamentFrame />
          <div className="relative">
            <Reveal>
              <p className="font-display text-[0.66rem] tracking-[0.32em] text-royal">BRIDE&apos;S FAMILY</p>
              <p className="mt-4 font-display text-[0.62rem] tracking-[0.28em] text-royal">FATHER&apos;S NAME</p>
              <h2 className="mt-2 font-script text-5xl leading-none text-maroon">{bride.name}</h2>
            </Reveal>
            <Detail label="VILLAGE" value={bride.village} />
            <Detail label="POST" value={bride.post} />
            <Detail label="DISTRICT" value={bride.district} />
            <Detail label="CONTACT" value={bride.contact} href={`tel:${bride.tel}`} />
          </div>
        </div>
      </Scene>
    </>
  );
}
