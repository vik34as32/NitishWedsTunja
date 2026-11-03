"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  max: number;
  color: string;
  size: number;
};

const COLORS = ["#f3e1b5", "#d4af65", "#fff9ee", "#ffb15a", "#fff1c9"];

export function Fireworks({ active }: { active: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    const particles: Particle[] = [];
    let frame = 0;
    let running = true;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = canvas.clientWidth * dpr;
      canvas.height = canvas.clientHeight * dpr;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const burst = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const x = width * (0.22 + Math.random() * 0.56);
      const y = height * (0.16 + Math.random() * 0.32);
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      for (let i = 0; i < 22; i += 1) {
        const angle = (Math.PI * 2 * i) / 22 + Math.random() * 0.2;
        const speed = 0.7 + Math.random() * 1.8;
        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 0,
          max: 46 + Math.random() * 20,
          color,
          size: 1.2 + Math.random() * 1.6,
        });
      }
    };

    burst();
    const timer = window.setInterval(burst, 900);
    let raf = 0;

    const tick = () => {
      if (!running) return;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      context.clearRect(0, 0, width, height);
      for (let i = particles.length - 1; i >= 0; i -= 1) {
        const particle = particles[i];
        particle.life += 1;
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vy += 0.018;
        const alpha = 1 - particle.life / particle.max;
        if (alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }
        context.globalAlpha = alpha;
        context.fillStyle = particle.color;
        context.beginPath();
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        context.fill();
      }
      context.globalAlpha = 1;
      frame += 1;
      if (frame > 700) window.clearInterval(timer);
      if (frame > 700 && particles.length === 0) return;
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    window.addEventListener("resize", resize);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.clearInterval(timer);
      window.removeEventListener("resize", resize);
    };
  }, [active]);

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden />;
}
