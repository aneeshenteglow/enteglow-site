'use client';

import React from 'react';
import { CanvasArt, type DrawFn } from './CanvasArt';
import { mulberry32 } from './rng';

/**
 * Closing-CTA artwork: starfield over a dark sky, a planet whose lit rim forms the horizon, a hot
 * bloom at its crown, a glowing network mesh and city lights. Drawn procedurally (see CanvasArt).
 */
const drawHorizon: DrawFn = (ctx, w, h) => {
  const rnd = mulberry32(2026);
  const cx = w / 2;
  const peakY = h * 0.64;
  const R = Math.max(w * 1.55, h * 1.25);
  const cy = peakY + R;
  const arcY = (x: number) => cy - Math.sqrt(Math.max(0, R * R - (x - cx) * (x - cx)));
  const px = Math.max(1, Math.min(w / 1312, 1.6)); // scale small details with the canvas

  // ── Sky ────────────────────────────────────────────────────────────────────────────────────
  const sky = ctx.createLinearGradient(0, 0, 0, h);
  sky.addColorStop(0, '#04050a');
  sky.addColorStop(0.55, '#0b0508');
  sky.addColorStop(1, '#050202');
  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, w, h);

  // Cool tint in the upper corners, warm haze rising from the horizon.
  for (const [x, y] of [
    [w, 0],
    [0, 0],
  ] as const) {
    const t = ctx.createRadialGradient(x, y, 0, x, y, w * 0.42);
    t.addColorStop(0, 'rgba(18,26,56,0.5)');
    t.addColorStop(1, 'rgba(18,26,56,0)');
    ctx.fillStyle = t;
    ctx.fillRect(0, 0, w, h);
  }
  ctx.save();
  ctx.translate(cx, peakY);
  ctx.scale(1, 0.72);
  const haze = ctx.createRadialGradient(0, 0, 0, 0, 0, w * 0.62);
  haze.addColorStop(0, 'rgba(255,115,40,0.5)');
  haze.addColorStop(0.22, 'rgba(190,60,22,0.36)');
  haze.addColorStop(0.55, 'rgba(95,24,12,0.2)');
  haze.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = haze;
  ctx.fillRect(-w, -w, w * 2, w * 2);
  ctx.restore();

  // ── Stars ──────────────────────────────────────────────────────────────────────────────────
  const starCount = Math.round(Math.min(900, (w * h) / 900));
  for (let i = 0; i < starCount; i++) {
    const x = rnd() * w;
    const y = Math.pow(rnd(), 1.5) * h * 0.78;
    if (y > arcY(x) - 4) continue;
    const r = (0.35 + Math.pow(rnd(), 3) * 1.25) * Math.min(1.4, px);
    const a = 0.25 + rnd() * 0.75;
    const warm = rnd() < 0.22;
    ctx.fillStyle = warm ? `rgba(255,210,170,${a})` : `rgba(235,240,255,${a})`;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
    if (r > 1.15) {
      const g = ctx.createRadialGradient(x, y, 0, x, y, r * 5);
      g.addColorStop(0, warm ? 'rgba(255,190,140,0.22)' : 'rgba(200,215,255,0.2)');
      g.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = g;
      ctx.fillRect(x - r * 5, y - r * 5, r * 10, r * 10);
    }
  }

  // ── Network mesh (drawn once, reused above and on the planet) ──────────────────────────────
  type Node = { x: number; y: number; b: number };
  const nodes: Node[] = [];
  const nodeCount = Math.round(Math.min(150, w / 9));
  for (let i = 0; i < nodeCount; i++) {
    const x = rnd() * w;
    const side = Math.abs(x - cx) / (w / 2); // 0 centre → 1 edge; keep the crown clear
    if (rnd() > 0.25 + side * 0.9) continue;
    const y = arcY(x) + (rnd() - 0.4) * h * 0.62;
    nodes.push({ x, y, b: 0.35 + rnd() * 0.65 });
  }
  const meshLines = (alphaScale: number) => {
    ctx.lineWidth = Math.max(0.6, px * 0.7);
    for (let i = 0; i < nodes.length; i++) {
      const a = nodes[i];
      const near = nodes
        .map((n, j) => ({ j, d: j === i ? Infinity : Math.hypot(n.x - a.x, n.y - a.y) }))
        .filter((o) => o.d < w * 0.2)
        .sort((p, q) => p.d - q.d)
        .slice(0, 3);
      for (const { j, d } of near) {
        if (j < i) continue;
        const b = nodes[j];
        const alpha = (1 - d / (w * 0.2)) * 0.55 * Math.min(a.b, b.b) * alphaScale;
        ctx.strokeStyle = `rgba(255,140,70,${alpha})`;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
    }
  };

  // ── Planet ─────────────────────────────────────────────────────────────────────────────────
  ctx.save();
  ctx.beginPath();
  ctx.arc(cx, cy, R, 0, Math.PI * 2);
  ctx.fillStyle = '#040203';
  ctx.fill();
  ctx.clip();

  // Atmosphere inside the rim.
  const rimDepth = h * 0.3;
  const inner = ctx.createRadialGradient(cx, cy, R - rimDepth, cx, cy, R);
  inner.addColorStop(0, 'rgba(120,30,10,0)');
  inner.addColorStop(0.55, 'rgba(170,48,14,0.28)');
  inner.addColorStop(0.88, 'rgba(235,90,25,0.55)');
  inner.addColorStop(1, 'rgba(255,150,55,0.9)');
  ctx.fillStyle = inner;
  ctx.fillRect(0, 0, w, h);

  // Surface mesh.
  meshLines(0.9);

  // City lights: clusters plus a faint scatter, fading with distance from the rim.
  const lights = (x: number, y: number, size: number, alpha: number) => {
    ctx.fillStyle = `rgba(255,${150 + Math.round(rnd() * 70)},${60 + Math.round(rnd() * 50)},${alpha})`;
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fill();
  };
  const clusterCount = Math.round(Math.min(70, w / 20));
  for (let c = 0; c < clusterCount; c++) {
    const x0 = rnd() * w;
    const depth0 = Math.pow(rnd(), 1.3) * h * 0.34;
    const y0 = arcY(x0) + h * 0.03 + depth0;
    const members = 8 + Math.floor(rnd() * 22);
    for (let m = 0; m < members; m++) {
      const x = x0 + (rnd() - 0.5) * w * 0.05;
      const y = y0 + (rnd() - 0.5) * h * 0.035;
      lights(x, y, (0.4 + rnd() * 0.9) * Math.min(1.3, px), (0.25 + rnd() * 0.6) * (1 - depth0 / (h * 0.4)));
    }
  }
  ctx.restore();

  // ── Rim light ──────────────────────────────────────────────────────────────────────────────
  const rim = ctx.createLinearGradient(0, 0, w, 0);
  rim.addColorStop(0, '#8f2410');
  rim.addColorStop(0.2, '#d8421a');
  rim.addColorStop(0.38, '#ff6f26');
  rim.addColorStop(0.5, '#ffe2b0');
  rim.addColorStop(0.62, '#ff6f26');
  rim.addColorStop(0.82, '#e24a18');
  rim.addColorStop(1, '#9a2a16');
  ctx.save();
  ctx.globalCompositeOperation = 'lighter';
  ctx.strokeStyle = rim;
  const passes = 12;
  for (let i = 0; i < passes; i++) {
    const t = i / (passes - 1); // 0 wide + faint → 1 thin + bright
    ctx.globalAlpha = 0.035 + Math.pow(t, 3) * 0.5;
    ctx.lineWidth = Math.max(1.6, h * 0.2 * Math.pow(1 - t, 2.2) + h * 0.006);
    ctx.beginPath();
    ctx.arc(cx, cy, R, 0, Math.PI * 2);
    ctx.stroke();
  }
  ctx.globalCompositeOperation = 'source-over'; // plain blend keeps the thin core line orange, not lime
  ctx.globalAlpha = 0.9;
  ctx.lineWidth = Math.max(1.5, h * 0.005);
  ctx.beginPath();
  ctx.arc(cx, cy, R, 0, Math.PI * 2);
  ctx.stroke();
  ctx.globalAlpha = 1;
  ctx.globalCompositeOperation = 'lighter';

  // Mesh above the horizon plus glowing nodes.
  meshLines(1);
  for (const n of nodes) {
    const r = (1 + n.b * 1.4) * Math.min(1.3, px);
    const g = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, r * 4);
    g.addColorStop(0, `rgba(255,190,120,${0.9 * n.b})`);
    g.addColorStop(0.3, `rgba(255,120,50,${0.45 * n.b})`);
    g.addColorStop(1, 'rgba(255,100,40,0)');
    ctx.fillStyle = g;
    ctx.fillRect(n.x - r * 4, n.y - r * 4, r * 8, r * 8);
  }

  // Sunrise bloom at the crown, a soft vertical ray, and a lens streak along the rim.
  ctx.save();
  ctx.translate(cx, peakY + h * 0.01);
  ctx.scale(2.1, 0.95);
  const bloom = ctx.createRadialGradient(0, 0, 0, 0, 0, w * 0.2);
  bloom.addColorStop(0, 'rgba(255,248,215,1)');
  bloom.addColorStop(0.08, 'rgba(255,214,140,0.85)');
  bloom.addColorStop(0.3, 'rgba(255,120,40,0.4)');
  bloom.addColorStop(1, 'rgba(255,80,20,0)');
  ctx.fillStyle = bloom;
  ctx.fillRect(-w, -w, w * 2, w * 2);
  ctx.restore();

  ctx.save();
  ctx.translate(cx, peakY);
  ctx.scale(w * 0.06, h * 0.45);
  const ray = ctx.createRadialGradient(0, 0, 0, 0, 0, 1);
  ray.addColorStop(0, 'rgba(255,170,90,0.32)');
  ray.addColorStop(0.5, 'rgba(255,130,60,0.1)');
  ray.addColorStop(1, 'rgba(255,120,50,0)');
  ctx.fillStyle = ray;
  ctx.fillRect(-1, -1, 2, 1.02);
  ctx.restore();

  const streak = ctx.createRadialGradient(cx, peakY, 0, cx, peakY, w * 0.5);
  streak.addColorStop(0, 'rgba(255,200,130,0.5)');
  streak.addColorStop(1, 'rgba(255,120,40,0)');
  ctx.save();
  ctx.translate(cx, peakY);
  ctx.scale(1, 0.035);
  ctx.translate(-cx, -peakY);
  ctx.fillStyle = streak;
  ctx.fillRect(0, peakY - w, w, w * 2);
  ctx.restore();
  ctx.restore();

  // ── Edge vignette ──────────────────────────────────────────────────────────────────────────
  const vig = ctx.createRadialGradient(cx, h * 0.62, h * 0.35, cx, h * 0.62, Math.max(w, h) * 0.78);
  vig.addColorStop(0, 'rgba(0,0,0,0)');
  vig.addColorStop(1, 'rgba(0,0,0,0.45)');
  ctx.fillStyle = vig;
  ctx.fillRect(0, 0, w, h);
};

export const HorizonArt: React.FC<{ className?: string }> = ({ className }) => (
  <CanvasArt draw={drawHorizon} className={className} />
);
