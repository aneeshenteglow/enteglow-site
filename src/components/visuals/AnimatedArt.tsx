'use client';

import React, { useEffect, useRef } from 'react';
import type { DrawFn } from './CanvasArt';
import type { Scene } from './scene';

const FRAME_MS = 1000 / 30; // the motion is slow; 30 fps is plenty and halves the work

const makeSprite = (rgb: string) => {
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const g = c.getContext('2d');
  if (g) {
    const grad = g.createRadialGradient(32, 32, 0, 32, 32, 32);
    grad.addColorStop(0, 'rgba(255,255,255,1)');
    grad.addColorStop(0.16, `rgba(${rgb},0.95)`);
    grad.addColorStop(0.5, `rgba(${rgb},0.22)`);
    grad.addColorStop(1, `rgba(${rgb},0)`);
    g.fillStyle = grad;
    g.fillRect(0, 0, 64, 64);
  }
  return c;
};

const ease = (u: number) => (u < 0.5 ? 2 * u * u : 1 - Math.pow(-2 * u + 2, 2) / 2);

interface AnimatedArtProps {
  draw: DrawFn;
  className?: string;
}

/**
 * Sharp, drawn-once artwork plus a light animated overlay:
 *  - data pulses travelling along the circuit wires,
 *  - nodes gently breathing,
 *  - bright points on the hero object twinkling,
 *  - a slow CSS float (GPU-composited) on the whole piece.
 * The overlay only draws a few dozen pre-rendered sprites per frame, pauses when off-screen or the tab is
 * hidden, and is skipped entirely for `prefers-reduced-motion`.
 */
export const AnimatedArt: React.FC<AnimatedArtProps> = ({ draw, className }) => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const baseRef = useRef<HTMLCanvasElement>(null);
  const overRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const base = baseRef.current;
    const over = overRef.current;
    const bctx = base?.getContext('2d');
    const octx = over?.getContext('2d');
    if (!wrap || !base || !over || !bctx || !octx) return;

    const warm = makeSprite('255,130,60');
    const cool = makeSprite('120,200,255');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');

    let scene: Scene | void;
    let w = 1;
    let h = 1;
    let visible = true;
    let running = false;
    let raf = 0;
    let last = 0;
    let resizeFrame = 0;

    const sprite = (cl: boolean, x: number, y: number, size: number, alpha: number) => {
      if (alpha <= 0.01) return;
      octx.globalAlpha = Math.min(1, alpha);
      octx.drawImage(cl ? cool : warm, x - size / 2, y - size / 2, size, size);
    };

    const paint = (t: number) => {
      octx.clearRect(0, 0, w, h);
      if (!scene) return;
      const { s, ox, oy } = scene;
      octx.globalCompositeOperation = 'lighter';

      // Data pulses: each wire fires now and then, in alternating directions, with an idle gap between.
      scene.wires.forEach((wire, i) => {
        const period = 5 + ((i * 37) % 30) / 10;
        const u = (t / period + i * 0.173) % 1.8;
        if (u > 1) return;
        const e = ease(u);
        const forward = i % 2 === 0;
        const x0 = forward ? wire.ax : wire.bx;
        const y0 = forward ? wire.ay : wire.by;
        const x1 = forward ? wire.bx : wire.ax;
        const y1 = forward ? wire.by : wire.ay;
        const x = ox + (x0 + (x1 - x0) * e) * s;
        const y = oy + (y0 + (y1 - y0) * e) * s;
        sprite(wire.cool, x, y, 14, Math.sin(Math.PI * u) * 0.85);
      });

      // Nodes breathe.
      scene.nodes.forEach((n, i) => {
        const k = 0.5 + 0.5 * Math.sin(t * 1.1 + i * 1.3);
        const size = Math.max(16, n.r * s * 4.2) * (1 + 0.12 * k);
        sprite(n.cool, ox + n.x * s, oy + n.y * s, size, 0.12 + 0.2 * k);
      });

      // Bright points on the object twinkle softly.
      scene.twinkles.forEach((p, i) => {
        const k = 0.5 + 0.5 * Math.sin(t * 0.9 + i * 1.7);
        sprite(p.cool, ox + p.x * s, oy + p.y * s, 12 + 6 * k, 0.5 * k * k);
      });

      octx.globalAlpha = 1;
      octx.globalCompositeOperation = 'source-over';
    };

    const tick = (now: number) => {
      raf = requestAnimationFrame(tick);
      if (now - last < FRAME_MS) return;
      last = now;
      paint(now / 1000);
    };

    const sync = () => {
      const should = visible && !document.hidden && !reduce.matches && !!scene;
      if (should && !running) {
        running = true;
        raf = requestAnimationFrame(tick);
      } else if (!should && running) {
        running = false;
        cancelAnimationFrame(raf);
        octx.clearRect(0, 0, w, h);
      }
    };

    const render = () => {
      const rect = wrap.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2.5);
      w = Math.max(1, Math.round(rect.width));
      h = Math.max(1, Math.round(rect.height));
      for (const [c, ctx] of [
        [base, bctx],
        [over, octx],
      ] as const) {
        c.width = Math.round(w * dpr);
        c.height = Math.round(h * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.clearRect(0, 0, w, h);
      }
      scene = draw(bctx, w, h, dpr);
      running = false;
      cancelAnimationFrame(raf);
      sync();
    };

    const resizeObserver = new ResizeObserver(() => {
      cancelAnimationFrame(resizeFrame);
      resizeFrame = requestAnimationFrame(render);
    });
    resizeObserver.observe(wrap);
    const intersection = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      sync();
    });
    intersection.observe(wrap);
    document.addEventListener('visibilitychange', sync);
    reduce.addEventListener('change', sync);
    render();

    return () => {
      resizeObserver.disconnect();
      intersection.disconnect();
      document.removeEventListener('visibilitychange', sync);
      reduce.removeEventListener('change', sync);
      cancelAnimationFrame(raf);
      cancelAnimationFrame(resizeFrame);
    };
  }, [draw]);

  return (
    <div ref={wrapRef} aria-hidden className={`eg-art-float relative ${className ?? ''}`}>
      <canvas ref={baseRef} className="absolute inset-0 h-full w-full" />
      <canvas ref={overRef} className="pointer-events-none absolute inset-0 h-full w-full" />
    </div>
  );
};
