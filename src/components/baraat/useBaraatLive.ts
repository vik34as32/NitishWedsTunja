"use client";

import { useEffect, useRef, useState } from "react";

function sceneInView(node: HTMLElement) {
  const rect = node.getBoundingClientRect();
  const height = rect.height || 1;
  const visible = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
  return visible / height >= 0.62;
}

export function useBaraatLive<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [live, setLive] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const update = () => setLive(sceneInView(node));
    update();

    const observer = new IntersectionObserver(
      ([entry]) => setLive(entry.isIntersecting && entry.intersectionRatio >= 0.62),
      { threshold: [0, 0.62, 1] },
    );
    observer.observe(node);

    document.addEventListener("scroll", update, { passive: true, capture: true });
    window.addEventListener("resize", update);
    const timers = [160, 500].map((ms) => window.setTimeout(update, ms));

    return () => {
      observer.disconnect();
      document.removeEventListener("scroll", update, { capture: true });
      window.removeEventListener("resize", update);
      timers.forEach((id) => window.clearTimeout(id));
    };
  }, []);

  return { ref, live };
}
