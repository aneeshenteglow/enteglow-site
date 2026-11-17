import { mulberry32 } from '../rng';
import type { Scene } from '../scene';

/**
 * Shared toolkit for the service-page banner artworks. Every banner is drawn in the same 400 × 320
 * "local" space with one neon language: a warm→cool gradient, particle mesh, glowing edges and
 * circuit nodes wired to the hero object. Keeping this in one place keeps all banners consistent.
 */
export type Ctx = CanvasRenderingContext2D;
export type Pt = { x: number; y: number };

export const WARM = '255,130,60';
export const COOL = '120,200,255';

export interface Frame {
  ctx: Ctx;
  /** Local-unit → CSS-pixel scale. */
  s: number;
  /** One CSS pixel in local units (for hairlines). */
  px: number;
  dpr: number;
  rnd: () => number;
  /** shadowBlur is in device pixels and ignores the transform. */
  glow: (cssPx: number) => number;
  /** Warm (frontal/left) → cool (right) gradient across the artwork. */
  grad: CanvasGradient;
  /** Animation hints, returned by endFrame for the overlay layer. */
  anim: Scene;
}

/** Opens a frame (ctx.save + transform). Pair with `endFrame`. */
export const beginFrame = (ctx: Ctx, w: number, h: number, dpr: number, seed: number): Frame => {
  const s = Math.min((w * 0.7) / 400, (h * 0.8) / 320);
  const ox = w * 0.54 - 200 * s;
  const oy = h * 0.56 - 160 * s;
  ctx.save();
  ctx.translate(ox, oy);
  ctx.scale(s, s);
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  const grad = ctx.createLinearGradient(30, 0, 395, 0);
  for (const [o, c] of [
    [0, '#ff7a2e'],
    [0.38, '#ffa968'],
    [0.55, '#f2cdd6'],
    [0.72, '#86c8ff'],
    [1, '#3f9cff'],
  ] as const)
    grad.addColorStop(o, c);
  return { ctx, s, px: 1 / s, dpr, rnd: mulberry32(seed), glow: (n) => n * dpr * s, grad, anim: { s, ox, oy, wires: [], nodes: [], twinkles: [] } };
};

/** Closes the frame and returns the recorded animation hints. */
export const endFrame = (f: Frame): Scene => {
  f.ctx.restore();
  return f.anim;
};

// ── Geometry ──────────────────────────────────────────────────────────────────────────────────
export const rr = (x: number, y: number, w: number, h: number, r: number) => {
  const p = new Path2D();
  const k = Math.min(r, w / 2, h / 2);
  p.moveTo(x + k, y);
  p.arcTo(x + w, y, x + w, y + h, k);
  p.arcTo(x + w, y + h, x, y + h, k);
  p.arcTo(x, y + h, x, y, k);
  p.arcTo(x, y, x + w, y, k);
  p.closePath();
  return p;
};

export const circle = (x: number, y: number, r: number) => {
  const p = new Path2D();
  p.arc(x, y, r, 0, Math.PI * 2);
  return p;
};

export const line = (...pts: number[]) => {
  const p = new Path2D();
  p.moveTo(pts[0], pts[1]);
  for (let i = 2; i < pts.length; i += 2) p.lineTo(pts[i], pts[i + 1]);
  return p;
};

export const gearPath = (cx: number, cy: number, rOuter: number, rRoot: number, teeth: number) => {
  const p = new Path2D();
  const step = (Math.PI * 2) / teeth;
  for (let i = 0; i < teeth; i++) {
    const a = i * step;
    const pts: [number, number][] = [
      [rRoot, a - step * 0.28],
      [rOuter, a - step * 0.16],
      [rOuter, a + step * 0.16],
      [rRoot, a + step * 0.28],
    ];
    pts.forEach(([r, ang], k) => {
      const x = cx + Math.cos(ang) * r;
      const y = cy + Math.sin(ang) * r;
      if (i === 0 && k === 0) p.moveTo(x, y);
      else p.lineTo(x, y);
    });
  }
  p.closePath();
  return p;
};

/** Rejection-samples points inside a path (hit-tested in untransformed space, so call from anywhere). */
export const samplePath = (
  ctx: Ctx,
  path: Path2D,
  count: number,
  rnd: () => number,
  box: [number, number, number, number],
  rule: CanvasFillRule = 'nonzero',
): Pt[] => {
  const pts: Pt[] = [];
  ctx.save();
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  for (let t = 0; pts.length < count && t < count * 40; t++) {
    const x = box[0] + rnd() * (box[2] - box[0]);
    const y = box[1] + rnd() * (box[3] - box[1]);
    if (ctx.isPointInPath(path, x, y, rule)) pts.push({ x, y });
  }
  ctx.restore();
  return pts;
};

// ── Layers ────────────────────────────────────────────────────────────────────────────────────
export const ambient = (f: Frame, list: [number, number, number, string][]) => {
  for (const [x, y, r, c] of list) {
    const g = f.ctx.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0, c);
    g.addColorStop(1, 'rgba(0,0,0,0)');
    f.ctx.fillStyle = g;
    f.ctx.fillRect(x - r, y - r, r * 2, r * 2);
  }
};

/** Translucent dark body with a faint warm→cool wash, so objects read as glass. */
export const body = (f: Frame, path: Path2D, opacity = 1) => {
  const g = f.ctx.createLinearGradient(30, 0, 395, 0);
  g.addColorStop(0, `rgba(60,20,10,${0.75 * opacity})`);
  g.addColorStop(0.55, `rgba(24,18,30,${0.7 * opacity})`);
  g.addColorStop(1, `rgba(8,24,52,${0.75 * opacity})`);
  f.ctx.fillStyle = g;
  f.ctx.fill(path);
};

/** Opaque-ish dark fill, used where an element must hide what is behind it. */
export const mask = (f: Frame, path: Path2D) => {
  f.ctx.fillStyle = 'rgba(7,8,14,0.94)';
  f.ctx.fill(path);
};

/** Glowing edge: layered soft strokes around a crisp core line. */
export const neon = (f: Frame, path: Path2D, k = 1, style: string | CanvasGradient = f.grad, core = 1.6) => {
  const { ctx, px } = f;
  ctx.save();
  ctx.strokeStyle = style;
  for (const [lw, a] of [
    [14, 0.07],
    [8, 0.12],
    [4, 0.25],
  ] as const) {
    ctx.globalAlpha = a * k;
    ctx.lineWidth = lw * px * 1.4;
    ctx.stroke(path);
  }
  ctx.globalAlpha = Math.min(1, k);
  ctx.shadowColor = 'rgba(255,170,110,0.8)';
  ctx.shadowBlur = f.glow(10);
  ctx.lineWidth = core * px;
  ctx.stroke(path);
  ctx.restore();
};

/** Plain thin stroke (no glow) for inner detail. */
export const trace = (f: Frame, path: Path2D, alpha = 0.6, width = 1, style: string | CanvasGradient = f.grad) => {
  f.ctx.save();
  f.ctx.strokeStyle = style;
  f.ctx.globalAlpha = alpha;
  f.ctx.lineWidth = width * f.px;
  f.ctx.stroke(path);
  f.ctx.restore();
};

export const mesh = (f: Frame, pts: Pt[], reach: number, alpha = 0.2) => {
  const { ctx } = f;
  ctx.save();
  ctx.strokeStyle = f.grad;
  ctx.globalAlpha = alpha;
  ctx.lineWidth = 0.7 * f.px;
  ctx.beginPath();
  for (let i = 0; i < pts.length; i++)
    for (let j = i + 1; j < pts.length; j++) {
      const dx = pts[j].x - pts[i].x;
      const dy = pts[j].y - pts[i].y;
      if (dx * dx + dy * dy < reach * reach) {
        ctx.moveTo(pts[i].x, pts[i].y);
        ctx.lineTo(pts[j].x, pts[j].y);
      }
    }
  ctx.stroke();
  ctx.restore();
};

export const dots = (f: Frame, pts: Pt[], alpha = 0.9) => {
  const { ctx } = f;
  ctx.save();
  ctx.fillStyle = f.grad;
  ctx.globalAlpha = alpha;
  for (const p of pts) {
    ctx.beginPath();
    ctx.arc(p.x, p.y, 0.55 + f.rnd() * 0.7, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.restore();
};

/** Bright glowing nodes: warm on the left half, cool on the right. */
export const hotNodes = (f: Frame, pts: Pt[], count: number) => {
  const { ctx } = f;
  ctx.save();
  for (let i = 0; i < count && pts.length; i++) {
    const p = pts[Math.floor(f.rnd() * pts.length)];
    const hot = p.x < 230;
    f.anim.twinkles.push({ x: p.x, y: p.y, cool: !hot });
    ctx.fillStyle = hot ? 'rgba(255,150,70,1)' : 'rgba(150,210,255,1)';
    ctx.shadowColor = hot ? 'rgba(255,120,50,1)' : 'rgba(90,180,255,1)';
    ctx.shadowBlur = f.glow(8);
    ctx.beginPath();
    ctx.arc(p.x, p.y, 1.4 + f.rnd() * 1.3, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.restore();
};

/** The standard "glass object" treatment: body, clipped particle texture, then the glowing edge. */
export const glassObject = (
  f: Frame,
  path: Path2D,
  opts: { count?: number; reach?: number; hot?: number; rule?: CanvasFillRule; box?: [number, number, number, number]; bodyOpacity?: number } = {},
) => {
  const { ctx } = f;
  const box = opts.box ?? [0, -80, 420, 340];
  const pts = samplePath(ctx, path, opts.count ?? 260, f.rnd, box, opts.rule);
  body(f, path, opts.bodyOpacity ?? 1);
  ctx.save();
  ctx.clip(path, opts.rule ?? 'nonzero');
  mesh(f, pts, opts.reach ?? 20, 0.2);
  dots(f, pts, 0.8);
  hotNodes(f, pts, opts.hot ?? 14);
  ctx.restore();
  return pts;
};

// ── Circuit nodes ─────────────────────────────────────────────────────────────────────────────
export type SatKind = 'dot' | 'ring' | 'hud' | 'rect' | 'sq' | 'db' | 'gear';
export interface Sat {
  x: number;
  y: number;
  kind: SatKind;
  cool?: boolean;
  r: number;
}

/** Wires every node to its nearest anchor on the hero object, then draws the node glyphs. */
export const network = (f: Frame, sats: Sat[], anchors: Pt[], bus: [number, number, number, number][] = []) => {
  const { ctx, px } = f;
  const nearest = (p: Pt) => anchors.reduce((b, q) => (Math.hypot(q.x - p.x, q.y - p.y) < Math.hypot(b.x - p.x, b.y - p.y) ? q : b), anchors[0]);

  ctx.save();
  ctx.lineWidth = px;
  for (const sat of sats) {
    const q = nearest(sat);
    f.anim.wires.push({ ax: q.x, ay: q.y, bx: sat.x, by: sat.y, cool: !!sat.cool });
    ctx.strokeStyle = sat.cool ? `rgba(${COOL},0.5)` : `rgba(${WARM},0.5)`;
    ctx.beginPath();
    ctx.moveTo(sat.x, sat.y);
    ctx.lineTo(q.x, q.y);
    ctx.stroke();
  }
  ctx.strokeStyle = `rgba(${COOL},0.35)`;
  for (const [x1, y1, x2, y2] of bus) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  }
  ctx.restore();

  for (const sat of sats) {
    const col = sat.cool ? COOL : WARM;
    const { x, y, r } = sat;
    f.anim.nodes.push({ x, y, r, cool: !!sat.cool });
    ctx.save();
    ctx.shadowColor = `rgba(${col},0.9)`;
    ctx.shadowBlur = f.glow(10);
    ctx.strokeStyle = `rgba(${col},0.95)`;
    ctx.fillStyle = `rgba(${col},0.95)`;
    ctx.lineWidth = 1.4 * px;
    if (sat.kind === 'dot') {
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    } else if (sat.kind === 'ring') {
      ctx.stroke(circle(x, y, r));
      ctx.beginPath();
      ctx.arc(x, y, r * 0.35, 0, Math.PI * 2);
      ctx.fill();
    } else if (sat.kind === 'sq') {
      ctx.strokeRect(x - r, y - r, r * 2, r * 2);
      ctx.fillRect(x - r * 0.4, y - r * 0.4, r * 0.8, r * 0.8);
    } else if (sat.kind === 'rect') {
      ctx.strokeRect(x - r * 1.4, y - r * 0.9, r * 2.8, r * 1.8);
      ctx.globalAlpha = 0.6;
      ctx.stroke(line(x - r * 0.9, y - r * 0.2, x + r * 0.9, y - r * 0.2, x + r * 0.9, y - r * 0.2));
      ctx.stroke(line(x - r * 0.9, y + r * 0.35, x + r * 0.3, y + r * 0.35));
    } else if (sat.kind === 'db') {
      for (const dy of [-0.7, 0, 0.7]) {
        ctx.beginPath();
        ctx.ellipse(x, y + dy * r * 0.8, r, r * 0.38, 0, 0, Math.PI * 2);
        ctx.stroke();
      }
      ctx.stroke(line(x - r, y - r * 0.56, x - r, y + r * 0.56));
      ctx.stroke(line(x + r, y - r * 0.56, x + r, y + r * 0.56));
    } else if (sat.kind === 'gear') {
      ctx.stroke(gearPath(x, y, r, r * 0.78, 8));
      ctx.stroke(circle(x, y, r * 0.35));
    } else {
      // HUD disc: ring, stippled fill and a dashed outer ring.
      ctx.stroke(circle(x, y, r));
      ctx.shadowBlur = 0;
      ctx.globalAlpha = 0.5;
      for (let i = 0; i < 70; i++) {
        const a = f.rnd() * Math.PI * 2;
        const d = Math.sqrt(f.rnd()) * r * 0.88;
        ctx.beginPath();
        ctx.arc(x + Math.cos(a) * d, y + Math.sin(a) * d, 0.9 * px + 0.25, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 0.9;
      ctx.setLineDash([2.5, 3.5]);
      ctx.stroke(circle(x, y, r * 1.3));
    }
    ctx.restore();
  }
};

/** Short glowing text/glyph helper for UI labels inside the artwork. */
export const label = (f: Frame, text: string, x: number, y: number, size: number, alpha = 0.9, align: CanvasTextAlign = 'left') => {
  const { ctx } = f;
  ctx.save();
  ctx.font = `600 ${size}px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace`;
  ctx.textAlign = align;
  ctx.textBaseline = 'middle';
  ctx.fillStyle = f.grad;
  ctx.globalAlpha = alpha;
  ctx.shadowColor = 'rgba(255,170,110,0.6)';
  ctx.shadowBlur = f.glow(6);
  ctx.fillText(text, x, y);
  ctx.restore();
};
