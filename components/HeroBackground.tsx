"use client";

import { useEffect, useRef } from "react";

/* Canvas tabanlı uçuşan yaprak animasyonu */
export default function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    /* Yaprak tanımı */
    type Petal = {
      x: number; y: number;
      vx: number; vy: number;
      size: number;
      angle: number; angV: number;
      color: string; alpha: number;
    };

    const colors = [
      "#e8a0bf", "#f4b8c8", "#ffb7c5",
      "#ffd1dc", "#f9d5e3", "#fce4ec",
      "#EDDD5E", "#c8e6c9", "#a5d6a7",
    ];

    const makePetal = (): Petal => ({
      x: Math.random() * (canvas?.width ?? 1400),
      y: -20 - Math.random() * 100,
      vx: (Math.random() - 0.5) * 1.2,
      vy: 0.5 + Math.random() * 1.2,
      size: 6 + Math.random() * 14,
      angle: Math.random() * Math.PI * 2,
      angV: (Math.random() - 0.5) * 0.06,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: 0.5 + Math.random() * 0.45,
    });

    const petals: Petal[] = Array.from({ length: 80 }, makePetal).map(p => ({
      ...p,
      y: Math.random() * (canvas?.height ?? 900),
    }));

    /* Yaprak çizimi — oval petal şekli */
    const drawPetal = (p: Petal) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.angle);
      ctx.globalAlpha = p.alpha;
      ctx.beginPath();
      ctx.ellipse(0, 0, p.size * 0.45, p.size, 0, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.shadowColor = p.color;
      ctx.shadowBlur = 6;
      ctx.fill();
      ctx.restore();
    };

    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      /* Arka plan gradyanı */
      const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      grad.addColorStop(0, "#fdf6f9");
      grad.addColorStop(0.5, "#f3faf0");
      grad.addColorStop(1, "#fffde7");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (const p of petals) {
        p.x += p.vx + Math.sin(Date.now() * 0.001 + p.y * 0.01) * 0.4;
        p.y += p.vy;
        p.angle += p.angV;

        if (p.y > canvas.height + 20) {
          p.y = -20;
          p.x = Math.random() * canvas.width;
        }
        drawPetal(p);
      }

      animId = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ display: "block" }}
    />
  );
}
