function Garland() {
  const beads = Array.from({ length: 13 }, (_, index) => {
    const t = index / 12;
    return {
      x: 6 + t * 100,
      y: 6 + Math.sin(t * Math.PI) * 44,
      r: index % 2 ? 5 : 4,
    };
  });
  return (
    <g>
      {beads.map((bead, index) => (
        <circle
          key={index}
          cx={bead.x}
          cy={bead.y}
          r={bead.r}
          fill={index % 2 ? "#E39B2B" : "#F6D56B"}
          stroke="#720D18"
          strokeWidth="0.6"
        />
      ))}
    </g>
  );
}

function Groom() {
  return (
    <g>
      <path d="M44 230h16v28H44zM78 230h16v28H78z" fill="#F3E1B5" />
      <path d="M34 118 66 104l32 14 10 112H24Z" fill="#FFF9EE" />
      <path d="M66 110v118" stroke="#D4AF65" strokeWidth="2" />
      {Array.from({ length: 5 }, (_, index) => (
        <circle key={index} cx="66" cy={128 + index * 16} r="2.2" fill="#D4AF65" />
      ))}
      <path d="M24 154h84" stroke="#990F19" strokeWidth="8" />
      <path d="M24 150 14 214l18-4 8-56" fill="#990F19" />
      <path d="M52 112 66 128 80 112" fill="#F1C6A8" />
      <ellipse cx="66" cy="86" rx="18" ry="22" fill="#F1C6A8" />
      <path d="M48 80c-2 18 6 30 12 32M84 80c2 18-6 30-12 32" fill="none" stroke="#2A140E" strokeWidth="3" />
      <path d="M46 78c20-42 40 0 40 0-8-14-32-14-40 0Z" fill="#720D18" />
      <path d="M50 74c16-16 28 0 32 2" fill="none" stroke="#D4AF65" strokeWidth="2" />
      <path d="M66 42l4 16h-8Z" fill="#D4AF65" />
      {Array.from({ length: 7 }, (_, index) => (
        <circle key={index} cx={50 + index * 5.3} cy={94 + (index % 2) * 3} r="1.3" fill="#F3E1B5" />
      ))}
      <path d="M56 86q4-2 8 0M70 86q4-2 8 0" fill="none" stroke="#4B3024" strokeWidth="1.2" />
      <path d="M60 98q6 4 12 0" fill="none" stroke="#9A5A48" strokeWidth="1" />
    </g>
  );
}

function Bride() {
  return (
    <g>
      <path d="M70 148 108 132l38 16 22 104H48Z" fill="#990F19" />
      <path d="M56 226h104" stroke="#D4AF65" strokeWidth="4" />
      <path d="M62 208h92" stroke="#D4AF65" strokeWidth="1.3" />
      <path d="M86 128 108 116l22 12-4 26H90Z" fill="#720D18" />
      <path d="M76 78c28-52 74 18 74 18l6 58-28-12c-8-46-40-52-52-8Z" fill="#720D18" />
      <path d="M84 70c22-28 48 10 56 22" fill="none" stroke="#D4AF65" strokeWidth="2" />
      <ellipse cx="108" cy="98" rx="16" ry="20" fill="#F1C6A8" />
      <path d="M108 74v14" stroke="#D4AF65" strokeWidth="1.4" />
      <circle cx="108" cy="90" r="2.3" fill="#D4AF65" />
      <path d="M94 124q14 14 28 0" fill="none" stroke="#D4AF65" strokeWidth="2" />
      <path d="M98 98q4-2 8 0M112 98q4-2 8 0" fill="none" stroke="#4B3024" strokeWidth="1.3" />
      <path d="M102 110q6 4 12 0" fill="none" stroke="#9A5A48" strokeWidth="1" />
      <path d="M148 104c22 48 8 110 2 128" fill="none" stroke="#5C0D18" strokeWidth="10" />
      <path d="M148 104c22 48 8 110 2 128" fill="none" stroke="#D4AF65" strokeWidth="1.2" />
    </g>
  );
}

export function VarmalaScene() {
  return (
    <svg viewBox="0 0 360 300" className="h-full w-full overflow-visible" aria-hidden>
      <ellipse cx="180" cy="272" rx="128" ry="16" fill="#D4AF65" opacity="0.28" />
      <g transform="translate(180 214)">
        <path d="M-18 34h36l-5 18h-26Z" fill="#6B4423" />
        <ellipse className="havan-flame" cx="0" cy="18" rx="8" ry="16" fill="#FFB347" />
        <ellipse className="havan-flame" cx="0" cy="22" rx="4" ry="9" fill="#FFF6D8" />
      </g>
      <g transform="translate(36 16)">
        <g className="js-groom await-reveal" data-reveal="">
          <Groom />
        </g>
      </g>
      <g transform="translate(188 16)">
        <g className="js-bride await-reveal" data-reveal="">
          <Bride />
        </g>
      </g>
      <g transform="translate(52 86)">
        <g className="js-garland await-reveal" data-reveal="">
          <Garland />
        </g>
      </g>
      <g transform="translate(206 86)">
        <g className="js-garland await-reveal" data-reveal="">
          <Garland />
        </g>
      </g>
      <g className="js-glow await-reveal" data-reveal="">
        <ellipse cx="180" cy="156" rx="96" ry="34" fill="#F3E1B5" opacity="0.4" />
      </g>
    </svg>
  );
}

export function TilakScene({ active }: { active: boolean }) {
  return (
    <svg viewBox="0 0 360 300" className="h-full w-full" aria-hidden>
      <ellipse cx="180" cy="262" rx="140" ry="22" fill="#3A120C" />
      <path d="M70 250c20-70 200-70 220 0v20H70Z" fill="#6B2A22" />
      <path d="M108 168h144v86H108Z" fill="#D4AF65" />
      <path d="M118 176h124v68H118Z" fill="#8A1A24" />
      <path d="M150 118c8 28 52 28 60 0 8 34-8 78-30 86-22-8-38-52-30-86Z" fill="#FFF9EE" />
      <path d="M168 132h24" stroke="#D4AF65" strokeWidth="3" />
      <ellipse cx="180" cy="96" rx="20" ry="24" fill="#F1C6A8" />
      <path d="M158 88c18-40 44 0 44 0-8-12-36-12-44 0Z" fill="#720D18" />
      <path d="M180 58l5 16h-10Z" fill="#D4AF65" />
      <path d="M170 96q4-2 8 0M184 96q4-2 8 0" fill="none" stroke="#4B3024" strokeWidth="1.3" />
      <circle
        cx="180"
        cy="108"
        r="4.5"
        fill="#990F19"
        className={active ? "mark-in" : ""}
        opacity={active ? 1 : 0}
      />
      <g>
        <g className="sway" style={{ animationDelay: "-1s" }}>
          <path d="M36 168c28-8 18 46 42 34" fill="none" stroke="#F1C6A8" strokeWidth="8" strokeLinecap="round" />
          <circle cx="78" cy="196" r="8" fill="#F1C6A8" />
        </g>
      </g>
      <g transform="translate(250 176)">
        <ellipse cx="40" cy="36" rx="34" ry="10" fill="#C4922E" />
        <ellipse cx="40" cy="32" rx="30" ry="8" fill="#F3E1B5" />
        <ellipse cx="24" cy="30" rx="7" ry="4" fill="#F6D56B" />
        <circle cx="40" cy="28" r="5" fill="#E39B2B" />
        <ellipse className="havan-flame" cx="56" cy="16" rx="4" ry="8" fill="#FFB347" />
        <ellipse cx="56" cy="28" rx="7" ry="3" fill="#6B4423" />
      </g>
      <g transform="translate(24 210)">
        <g className="sway">
          <circle cx="16" cy="16" r="8" fill="#E39B2B" />
          <circle cx="16" cy="16" r="3" fill="#990F19" />
          <circle cx="34" cy="22" r="6" fill="#F2C14E" />
        </g>
      </g>
    </svg>
  );
}

export function MehndiScene({ draw }: { draw: boolean }) {
  const pen = draw ? "henna-draw" : "";
  return (
    <svg viewBox="0 0 360 300" className={`h-full w-full ${pen}`} aria-hidden>
      <g transform="translate(18 28)">
        <g className="sway">
          <circle cx="20" cy="20" r="10" fill="#E39B2B" />
          <circle cx="20" cy="20" r="4" fill="#990F19" />
        </g>
      </g>
      <g transform="translate(300 40)">
        <g className="sway" style={{ animationDelay: "-1.4s" }}>
          <circle cx="18" cy="18" r="9" fill="#F2C14E" />
          <circle cx="18" cy="18" r="3.5" fill="#6B2A22" />
        </g>
      </g>
      <Hand x={18} />
      <Hand x={188} mirror />
      <g transform="translate(150 250)">
        <g className="sway">
          <circle r="7" fill="#E39B2B" />
          <circle r="3" fill="#990F19" />
          <circle cx="22" cy="4" r="6" fill="#F2C14E" />
          <circle cx="22" cy="4" r="2.4" fill="#6B2A22" />
        </g>
      </g>
    </svg>
  );
}

function Hand({ x, mirror = false }: { x: number; mirror?: boolean }) {
  return (
    <g transform={`translate(${x} 24) ${mirror ? "translate(150 0) scale(-1 1)" : ""}`}>
      <rect x="62" y="168" width="46" height="46" rx="8" fill="#F1C6A8" />
      <ellipse cx="84" cy="132" rx="36" ry="40" fill="#F1C6A8" />
      <rect x="52" y="58" width="14" height="62" rx="7" fill="#F1C6A8" />
      <rect x="70" y="46" width="14" height="74" rx="7" fill="#F1C6A8" />
      <rect x="88" y="52" width="14" height="68" rx="7" fill="#F1C6A8" />
      <rect x="106" y="66" width="13" height="54" rx="6.5" fill="#F1C6A8" />
      <ellipse cx="46" cy="118" rx="12" ry="20" transform="rotate(-28 46 118)" fill="#F1C6A8" />
      <rect x="60" y="186" width="50" height="5" rx="2.5" fill="#D4AF65" />
      <rect x="60" y="194" width="50" height="5" rx="2.5" fill="#990F19" />
      <circle className="henna" cx="84" cy="138" r="11" style={{ animationDelay: "0.15s" }} />
      <circle className="henna" cx="84" cy="138" r="4" style={{ animationDelay: "0.45s" }} />
      <path
        className="henna"
        style={{ animationDelay: "0.7s" }}
        d="M84 127c-6-8-2-16 0-20M84 127c6-8 2-16 0-20M84 149c-7 7-3 14 0 18M84 149c7 7 3 14 0 18"
      />
      <path
        className="henna"
        style={{ animationDelay: "1.15s" }}
        d="M77 58c1 16 2 28 0 42M95 66c1 14 2 24 0 36"
      />
      <circle className="henna-dot" style={{ animationDelay: "2.1s" }} cx="77" cy="104" r="1.7" fill="#6B2A22" />
      <circle className="henna-dot" style={{ animationDelay: "2.3s" }} cx="95" cy="112" r="1.7" fill="#6B2A22" />
      <circle className="henna-dot" style={{ animationDelay: "2.5s" }} cx="84" cy="168" r="1.8" fill="#6B2A22" />
    </g>
  );
}

export function HaldiScene() {
  return (
    <svg viewBox="0 0 360 300" className="h-full w-full" aria-hidden>
      <ellipse cx="70" cy="210" rx="28" ry="46" fill="#720D18" opacity="0.28" />
      <ellipse cx="290" cy="206" rx="30" ry="48" fill="#4B3024" opacity="0.28" />
      <ellipse cx="180" cy="262" rx="130" ry="18" fill="#E7C36A" opacity="0.45" />
      <g transform="translate(132 78)">
        <path d="M28 58h48l8 62H20Z" fill="#E1B453" />
        <ellipse cx="52" cy="58" rx="28" ry="8" fill="#F6D56B" />
        <ellipse cx="52" cy="120" rx="34" ry="9" fill="#C4922E" />
        <path d="M52 58C40 28 18 40 22 58" fill="#2F6B45" />
        <path d="M52 58c12-32 36-18 30 2" fill="#1E4A32" />
        <ellipse cx="52" cy="52" rx="11" ry="8" fill="#6B4423" />
        <path d="M52 36v16" stroke="#D4AF65" strokeWidth="2" />
      </g>
      <g transform="translate(46 168)">
        <ellipse cx="40" cy="28" rx="28" ry="8" fill="#C4922E" />
        <ellipse cx="40" cy="24" rx="22" ry="6" fill="#F6D56B" />
        <path d="M22 8c16 10 22 8 30-2" fill="none" stroke="#F1C6A8" strokeWidth="7" strokeLinecap="round" />
      </g>
      <g transform="translate(250 150)">
        <g className="sway">
          <circle cx="16" cy="16" r="9" fill="#E39B2B" />
          <circle cx="16" cy="16" r="3.5" fill="#990F19" />
          <circle cx="36" cy="24" r="7" fill="#F2C14E" />
          <circle cx="36" cy="24" r="2.6" fill="#6B2A22" />
          <circle cx="8" cy="34" r="6" fill="#F6D56B" />
        </g>
      </g>
      <g transform="translate(34 48)">
        <g className="sway" style={{ animationDelay: "-2s" }}>
          <circle cx="14" cy="14" r="8" fill="#F2C14E" />
          <circle cx="14" cy="14" r="3" fill="#990F19" />
        </g>
      </g>
    </svg>
  );
}
