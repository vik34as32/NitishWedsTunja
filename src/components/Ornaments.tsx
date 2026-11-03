export function LotusMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden>
      {Array.from({ length: 8 }, (_, index) => (
        <ellipse
          key={index}
          cx="60"
          cy="28"
          rx="11"
          ry="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          transform={`rotate(${index * 45} 60 60)`}
        />
      ))}
      <circle cx="60" cy="60" r="8" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="60" cy="60" r="3" fill="currentColor" />
    </svg>
  );
}

export function GoldRule({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 text-gold ${className}`} aria-hidden>
      <span className="h-px flex-1 bg-current opacity-60" />
      <svg viewBox="0 0 18 18" className="h-3.5 w-3.5 shrink-0">
        <path d="M9 1.2 11 7l5.8 2L11 11l-2 5.8L7 11 1.2 9 7 7Z" fill="currentColor" />
      </svg>
      <span className="h-px flex-1 bg-current opacity-60" />
    </div>
  );
}

export function Marigold({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      {Array.from({ length: 10 }, (_, index) => (
        <ellipse
          key={index}
          cx="24"
          cy="10"
          rx="4.2"
          ry="8"
          fill={index % 2 ? "#F2C14E" : "#E39B2B"}
          transform={`rotate(${index * 36} 24 24)`}
        />
      ))}
      <circle cx="24" cy="24" r="7" fill="#990F19" />
      <circle cx="24" cy="24" r="3.2" fill="#6B2A22" />
    </svg>
  );
}

export function MarigoldGarland({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 56" className={className} aria-hidden>
      <path d="M8 18C84 50 236 50 312 18" fill="none" stroke="#2F6B45" strokeWidth="2" />
      {Array.from({ length: 9 }, (_, index) => {
        const x = 22 + index * 34.5;
        const y = 20 + (index % 2 === 0 ? 0 : 7);
        return (
          <g key={index} transform={`translate(${x} ${y})`}>
            <circle r="8" fill={index % 2 ? "#E39B2B" : "#F2C14E"} />
            <circle r="3.4" fill="#990F19" />
          </g>
        );
      })}
    </svg>
  );
}

export function Sunburst({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden>
      {Array.from({ length: 16 }, (_, index) => (
        <path
          key={index}
          d="M100 100 103 18 97 18Z"
          fill="#F6D56B"
          transform={`rotate(${index * 22.5} 100 100)`}
        />
      ))}
      <circle cx="100" cy="100" r="22" fill="#FFF1C4" />
    </svg>
  );
}

export function Diya({ className = "" }: { className?: string }) {
  return (
    <div className={`relative h-[4.6rem] w-16 ${className}`} aria-hidden>
      <span className="flame-glow absolute top-0 left-1/2" />
      <span className="flame absolute top-3" style={{ left: "calc(50% - 7px)" }} />
      <svg viewBox="0 0 80 48" className="absolute bottom-0 w-full overflow-visible">
        <path d="M8 24c6 14 58 14 64 0-6 8-58 8-64 0Z" fill="#D4AF65" />
        <path d="M16 24c5 8 43 8 48 0" fill="none" stroke="#F3E1B5" strokeWidth="1.2" />
        <ellipse cx="40" cy="23" rx="18" ry="4.5" fill="#6B4423" opacity="0.45" />
        <path d="M40 24V16" stroke="#4B3024" strokeWidth="1.4" />
      </svg>
    </div>
  );
}

function CornerFlourish() {
  return (
    <svg viewBox="0 0 80 80" className="h-14 w-14">
      <path d="M10 48V14h34" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path d="M16 48V20h28" fill="none" stroke="currentColor" strokeWidth="0.7" opacity="0.75" />
      <path
        d="M10 14c12 2 18 12 15 26"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.1"
      />
      <path d="M18 30c6-9 10-9 16-4-7 1-9 5-8 11 2-5 0-9-8-7Z" fill="currentColor" />
      <circle cx="22" cy="20" r="2.1" fill="currentColor" />
      <circle cx="36" cy="16" r="1.4" fill="currentColor" />
    </svg>
  );
}

const corners = [
  "top-0 left-0",
  "top-0 right-0 rotate-90",
  "right-0 bottom-0 rotate-180",
  "bottom-0 left-0 -rotate-90",
];

export function OrnamentFrame() {
  return (
    <div className="pointer-events-none absolute inset-0 text-gold" aria-hidden>
      <span className="absolute inset-2 border border-current/80" />
      <span className="absolute inset-3.5 border border-current/35" />
      {corners.map((place) => (
        <span key={place} className={`absolute ${place}`}>
          <CornerFlourish />
        </span>
      ))}
    </div>
  );
}

export function PetalShape({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 36" className={className} aria-hidden>
      <path
        d="M12 2c4 7 9 13 7 22-2 7-7 10-7 10s-5-3-7-10C3 15 8 9 12 2Z"
        fill="#C4475A"
      />
      <path
        d="M12 8c2 5 4 10 3 16-1 4-3 6-3 6s-2-2-3-6c-1-6 1-11 3-16Z"
        fill="#F3B7C0"
      />
    </svg>
  );
}
