const stars = [
  [7, 8],
  [16, 18],
  [28, 7],
  [41, 16],
  [54, 5],
  [67, 14],
  [79, 8],
  [91, 18],
  [22, 28],
  [48, 26],
  [73, 30],
  [86, 24],
];

export function NightBackdrop() {
  return (
    <div className="baraat-sky" aria-hidden>
      <span className="baraat-moon" />
      {stars.map(([x, y], index) => (
        <span key={index} className="baraat-star" style={{ left: `${x}%`, top: `${y}%` }} />
      ))}
    </div>
  );
}

export function PetalField() {
  return (
    <div className="petal-field" aria-hidden>
      {Array.from({ length: 8 }, (_, index) => (
        <span key={index} className={`petal petal-${index}`} />
      ))}
    </div>
  );
}

export function DjLights() {
  return (
    <div className="dj-lights" aria-hidden>
      <span className="dj-beam beam-a" />
      <span className="dj-beam beam-b" />
      <span className="dj-beam beam-c" />
    </div>
  );
}

export function VillageGate({ name }: { name: string }) {
  const blooms = [70, 100, 130, 160, 190, 220, 250, 280];
  return (
    <svg viewBox="0 0 360 280" className="baraat-gate" aria-hidden>
      <rect x="24" y="78" width="26" height="202" rx="2" fill="#4a241c" />
      <rect x="310" y="78" width="26" height="202" rx="2" fill="#4a241c" />
      <rect x="30" y="86" width="14" height="186" fill="#6b3a28" />
      <rect x="316" y="86" width="14" height="186" fill="#6b3a28" />
      <path d="M24 96h312" stroke="#e6c98a" strokeWidth="7" />
      <path d="M50 96C90 18 270 18 310 96" fill="#2a0c14" stroke="#f0d592" strokeWidth="3" />
      {blooms.map((x, index) => (
        <g key={x} className="toran-bloom" style={{ animationDelay: `${index * 0.15}s` }}>
          <line x1={x} y1="96" x2={x} y2={118 + (index % 3) * 8} stroke="#c4322a" strokeWidth="2" />
          <circle cx={x} cy={126 + (index % 3) * 8} r="7" fill={index % 2 ? "#f2c14e" : "#e39b2b"} />
          <circle cx={x} cy={126 + (index % 3) * 8} r="2.4" fill="#9a1d32" />
        </g>
      ))}
      <g className="village-board">
        <rect x="98" y="132" width="164" height="46" rx="6" fill="#14060c" stroke="#f0d592" strokeWidth="2" />
        <text x="180" y="162" textAnchor="middle" className="board-text">
          {name}
        </text>
      </g>
      <ellipse cx="78" cy="250" rx="16" ry="6" fill="#6b3a28" />
      <ellipse cx="78" cy="246" rx="12" ry="4" fill="#f2c14e" />
      <ellipse cx="282" cy="250" rx="16" ry="6" fill="#6b3a28" />
      <ellipse cx="282" cy="246" rx="12" ry="4" fill="#f2c14e" />
    </svg>
  );
}

export function VillageHuts() {
  return (
    <div className="hut-row" aria-hidden>
      <span className="hut hut-a" />
      <span className="hut hut-b" />
      <span className="hut hut-c" />
    </div>
  );
}

export function DholPlayers({ x = 0 }: { x?: number }) {
  return (
    <g transform={`translate(${x} 0)`}>
      <ellipse cx="28" cy="158" rx="20" ry="5" fill="#000" opacity="0.28" />
      <path d="M18 148 12 162" stroke="#3a241c" strokeWidth="5" strokeLinecap="round" />
      <path d="M38 148 44 162" stroke="#3a241c" strokeWidth="5" strokeLinecap="round" />
      <path d="M10 78h36l6 52H4Z" fill="#f6edd8" />
      <path d="M14 88h28" stroke="#7a1830" strokeWidth="4" />
      <circle cx="28" cy="58" r="13" fill="#f1c6a8" />
      <path d="M16 50c2-14 22-14 24 0" fill="#2a1814" />
      <path d="M18 46h20" stroke="#f0d592" strokeWidth="3" strokeLinecap="round" />
      <g className="dhol-arm dhol-arm-l">
        <path d="M12 92 2 112" stroke="#f1c6a8" strokeWidth="5" strokeLinecap="round" />
        <circle cx="2" cy="114" r="3" fill="#f0d592" />
      </g>
      <g className="dhol-arm dhol-arm-r">
        <path d="M44 92 58 108" stroke="#f1c6a8" strokeWidth="5" strokeLinecap="round" />
        <circle cx="59" cy="110" r="3" fill="#f0d592" />
      </g>
      <ellipse cx="28" cy="118" rx="18" ry="11" fill="#7a1830" />
      <ellipse cx="12" cy="118" rx="5" ry="9" fill="#e6c98a" />
      <ellipse cx="44" cy="118" rx="5" ry="9" fill="#e6c98a" />
      <path d="M14 112h28" stroke="#f0d592" strokeWidth="1.5" />
    </g>
  );
}

export function Dancer({
  x,
  delay = 0,
  tone = "#fff6dd",
}: {
  x: number;
  delay?: number;
  tone?: string;
}) {
  return (
    <g transform={`translate(${x} 0)`}>
      <g className="dancer" style={{ animationDelay: `${delay}s` }}>
        <ellipse cx="22" cy="164" rx="18" ry="5" fill="#000" opacity="0.28" />
        <g className="d-leg" style={{ animationDelay: `${delay}s` }}>
          <path d="M14 118 6 160" stroke="#3a241c" strokeWidth="5" strokeLinecap="round" />
          <path d="M30 118 40 160" stroke="#3a241c" strokeWidth="5" strokeLinecap="round" />
        </g>
        <path d="M4 70h36l8 54H-4Z" fill={tone} />
        <path d="M8 82h28" stroke="#7a1830" strokeWidth="4" />
        <circle cx="22" cy="52" r="13" fill="#f1c6a8" />
        <path d="M10 46c2-16 22-16 24 0" fill="#2a1814" />
        <g className="d-arm d-arm-l" style={{ animationDelay: `${delay}s` }}>
          <path d="M8 82 -2 52" stroke="#f1c6a8" strokeWidth="5" strokeLinecap="round" />
        </g>
        <g className="d-arm d-arm-r" style={{ animationDelay: `${delay + 0.18}s` }}>
          <path d="M36 82 50 50" stroke="#f1c6a8" strokeWidth="5" strokeLinecap="round" />
        </g>
      </g>
    </g>
  );
}
