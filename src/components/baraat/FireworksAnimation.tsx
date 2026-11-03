"use client";

import { NightBackdrop } from "./scenery";
import { useBaraatLive } from "./useBaraatLive";

const bursts = ["fw-a", "fw-b", "fw-c", "fw-d"];

export function FireworksAnimation() {
  const { ref, live } = useBaraatLive<HTMLElement>();

  return (
    <section
      ref={ref}
      aria-label="Fireworks over the baraat"
      className={live ? "baraat-scene fireworks-scene is-live" : "baraat-scene fireworks-scene"}
    >
      <div className="ground-shot">
        <NightBackdrop />
        <div className="baraat-copy">
          <p className="baraat-kicker">Above the procession</p>
          <h2 className="baraat-title">Fireworks in the night</h2>
        </div>
        {bursts.map((name) => (
          <span key={name} className={`fw ${name}`} aria-hidden />
        ))}
        <span className="rocket" aria-hidden />
        <span className="rocket rocket-b" aria-hidden />
      </div>
      <div className="drone-view" aria-hidden>
        <svg viewBox="0 0 360 220" className="drone-map">
          <rect width="360" height="220" fill="#1a0810" />
          <path d="M-20 150C80 120 180 170 380 110" fill="none" stroke="#3a2418" strokeWidth="36" />
          <path d="M-20 150C80 120 180 170 380 110" fill="none" stroke="#6b4a32" strokeWidth="18" />
          <g className="aerial-parade">
            {Array.from({ length: 11 }, (_, index) => (
              <circle
                key={index}
                cx={24 + index * 28}
                cy={index % 2 ? 128 : 164}
                r={index % 3 === 0 ? 6 : 4.5}
                fill={index % 2 ? "#f2c14e" : "#f6edd8"}
              />
            ))}
            <ellipse cx="168" cy="146" rx="26" ry="10" fill="#f7f4ee" />
            <circle cx="196" cy="136" r="7" fill="#f3e6c4" />
            <circle cx="196" cy="136" r="3" fill="#7a1830" />
          </g>
        </svg>
        <p className="drone-label">Aerial view · the baraat on the road</p>
      </div>
    </section>
  );
}
