export function BootScreen() {
  return (
    <div className="boot-screen">
      <div className="relative h-40 w-40">
        <span className="boot-spin absolute inset-0 rounded-full" />
        <span className="absolute inset-2 rounded-full border border-gold/45" />
        <span className="absolute inset-5 rounded-full border border-gold/25" />
        <p className="absolute inset-0 grid place-items-center font-script text-5xl text-gold-soft">
          N<span className="px-1 font-serif text-2xl text-gold">&</span>T
        </p>
      </div>
      <p className="mt-8 font-display text-[0.72rem] tracking-[0.42em] text-gold">
        SHUBH VIVAH
      </p>
    </div>
  );
}
