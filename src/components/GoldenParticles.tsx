const SPARKS = [
  { left: "12%", top: "78%", delay: "0s", duration: "7.5s" },
  { left: "22%", top: "88%", delay: "1.2s", duration: "9s" },
  { left: "33%", top: "70%", delay: "2.4s", duration: "8.2s" },
  { left: "46%", top: "92%", delay: "0.6s", duration: "10s" },
  { left: "58%", top: "76%", delay: "3.1s", duration: "7.8s" },
  { left: "67%", top: "86%", delay: "1.8s", duration: "9.4s" },
  { left: "78%", top: "72%", delay: "4s", duration: "8.6s" },
  { left: "88%", top: "90%", delay: "2.2s", duration: "11s" },
  { left: "8%", top: "64%", delay: "3.6s", duration: "8.8s" },
  { left: "40%", top: "82%", delay: "5s", duration: "9.6s" },
  { left: "52%", top: "68%", delay: "1s", duration: "7.2s" },
  { left: "73%", top: "94%", delay: "4.4s", duration: "10.4s" },
];

export function GoldenParticles({
  className = "absolute inset-0",
  count = 12,
}: {
  className?: string;
  count?: number;
}) {
  return (
    <div className={`pointer-events-none overflow-hidden ${className}`} aria-hidden>
      {SPARKS.slice(0, count).map((spark) => (
        <span
          key={`${spark.left}-${spark.delay}`}
          className="spark"
          style={{
            left: spark.left,
            top: spark.top,
            animationDelay: spark.delay,
            animationDuration: spark.duration,
          }}
        />
      ))}
    </div>
  );
}
