import type { DrawFn } from '../CanvasArt';
import {
  WARM,
  COOL,
  ambient,
  beginFrame,
  body,
  circle,
  dots,
  endFrame,
  gearPath,
  glassObject,
  hotNodes,
  label,
  line,
  mask,
  mesh,
  neon,
  network,
  rr,
  samplePath,
  trace,
  type Frame,
  type Pt,
  type Sat,
} from './kit';

export type BannerArtKind = 'brain' | 'web-app' | 'app-maintenance' | 'website' | 'website-maintenance' | 'domain' | 'mobile';

const P = (x: number, y: number): Pt => ({ x, y });
const warmFill = (a: number) => `rgba(${WARM},${a})`;
const coolFill = (a: number) => `rgba(${COOL},${a})`;

// ═══ AI Application Development — neural brain ══════════════════════════════════════════════
const BRAIN_PATH =
  'M48,190 C30,150 40,100 80,70 C110,40 150,28 190,30 C220,10 275,12 305,38 C345,44 380,80 378,125 ' +
  'C392,150 380,185 352,198 C360,225 335,255 300,252 C285,262 262,262 250,246 C246,262 252,285 246,305 ' +
  'L218,305 C214,285 214,262 208,246 C190,250 172,246 158,238 C135,252 100,250 82,234 C62,226 52,210 48,190 Z';
const BRAIN_FOLDS = [
  'M222,32 C212,70 236,100 224,146',
  'M118,176 C158,160 200,170 246,148 C268,138 290,142 318,128',
  'M312,40 C300,80 322,104 306,140',
  'M254,214 C276,222 312,220 350,200',
  'M140,70 C150,100 134,126 150,152',
  'M84,150 C110,138 130,146 146,130',
];

const drawBrain: DrawFn = (ctx, w, h, dpr) => {
  const f = beginFrame(ctx, w, h, dpr, 11);
  const brain = new Path2D(BRAIN_PATH);
  const pts = samplePath(ctx, brain, 950, f.rnd, [30, 10, 395, 310]);

  // Positions come from the approved reference, mapped to brain space.
  const at = (rx: number, ry: number) => ({ x: 200 + (rx - 1385) / 1.83, y: 160 + (ry - 285) / 1.83 });
  const sats: Sat[] = (
    [
      [930, 145, 'ring', false, 7],
      [945, 262, 'ring', false, 7],
      [820, 105, 'dot', false, 3.2],
      [875, 92, 'dot', false, 2.4],
      [815, 285, 'dot', false, 3],
      [850, 250, 'dot', false, 2.2],
      [1090, 55, 'rect', true, 15],
      [1415, 66, 'ring', false, 8],
      [1470, 78, 'hud', true, 24],
      [1525, 150, 'ring', false, 6],
      [1580, 232, 'ring', false, 7],
      [1560, 345, 'dot', true, 3],
      [1595, 402, 'dot', true, 3.2],
      [1500, 446, 'ring', false, 9],
      [1665, 70, 'dot', false, 3],
      [1690, 185, 'dot', false, 3.4],
      [1700, 215, 'dot', false, 2.2],
      [1010, 440, 'hud', true, 22],
      [975, 392, 'sq', false, 5],
      [1065, 490, 'ring', false, 8],
      [1365, 522, 'rect', true, 15],
    ] as const
  ).map(([rx, ry, kind, cool, r]) => ({ ...at(rx, ry), kind, cool, r }));
  network(f, sats, pts, [
    [196, -140, 196, 38],
    [214, 296, 214, 400],
    [204, 296, 204, 380],
  ]);

  ambient(f, [
    [120, 150, 190, 'rgba(255,110,40,0.22)'],
    [285, 160, 180, 'rgba(60,150,255,0.2)'],
  ]);
  body(f, brain);
  ctx.save();
  ctx.clip(brain);
  ambient(f, [
    [110, 120, 130, 'rgba(255,120,50,0.28)'],
    [300, 140, 120, 'rgba(70,160,255,0.26)'],
    [230, 90, 90, 'rgba(255,190,150,0.12)'],
  ]);
  mesh(f, pts, 20, 0.22);

  // Gyri: meandering curves that read as cortical folds.
  ctx.globalAlpha = 0.5;
  ctx.strokeStyle = f.grad;
  ctx.lineWidth = f.px;
  ctx.beginPath();
  for (let i = 0; i < 90; i++) {
    const start = pts[Math.floor(f.rnd() * pts.length)];
    let a = f.rnd() * Math.PI * 2;
    let turn = (f.rnd() - 0.5) * 0.5;
    let { x, y } = start;
    ctx.moveTo(x, y);
    const steps = 14 + Math.floor(f.rnd() * 14);
    for (let k = 0; k < steps; k++) {
      turn += (f.rnd() - 0.5) * 0.3;
      turn *= 0.78;
      a += turn;
      x += Math.cos(a) * 3.6;
      y += Math.sin(a) * 3.6;
      ctx.lineTo(x, y);
    }
  }
  ctx.stroke();
  ctx.globalAlpha = 1;
  ctx.save();
  ctx.shadowColor = 'rgba(255,170,110,0.7)';
  ctx.shadowBlur = f.glow(6);
  for (const d of BRAIN_FOLDS) trace(f, new Path2D(d), 0.85, 1.5);
  ctx.restore();
  dots(f, pts);
  hotNodes(f, pts, 46);
  ctx.restore();
  neon(f, brain);
  return endFrame(f);
};

// ═══ Web Application Development — dashboard in a browser ═════════════════════════════════════
const drawWebApp: DrawFn = (ctx, w, h, dpr) => {
  const f = beginFrame(ctx, w, h, dpr, 21);
  const win = rr(50, 40, 300, 222, 12);
  network(
    f,
    [
      { x: -10, y: 70, kind: 'ring', r: 8 },
      { x: -40, y: 130, kind: 'dot', r: 3 },
      { x: 26, y: 215, kind: 'db', r: 18, cool: true },
      { x: 30, y: 300, kind: 'ring', r: 7 },
      { x: 150, y: -10, kind: 'dot', r: 3 },
      { x: 250, y: -28, kind: 'hud', r: 20, cool: true },
      { x: 385, y: 20, kind: 'ring', r: 8 },
      { x: 410, y: 120, kind: 'dot', r: 3.4, cool: true },
      { x: 400, y: 190, kind: 'ring', r: 7 },
      { x: 190, y: 300, kind: 'dot', r: 3 },
      { x: 330, y: 318, kind: 'rect', r: 12, cool: true },
    ],
    [P(50, 100), P(50, 200), P(200, 40), P(350, 90), P(350, 230), P(200, 262), P(120, 262), P(300, 40)],
    [
      [78, 262, 78, 340],
      [96, 262, 96, 320],
    ],
  );
  ambient(f, [
    [130, 150, 200, 'rgba(255,110,40,0.2)'],
    [310, 170, 190, 'rgba(60,150,255,0.18)'],
  ]);
  glassObject(f, win, { count: 320, reach: 24, hot: 18, box: [50, 40, 350, 262] });
  ctx.save();
  ctx.clip(win);

  // Title bar, address pill and sidebar.
  trace(f, line(50, 66, 350, 66), 0.7);
  trace(f, line(106, 66, 106, 262), 0.5);
  [66, 80, 94].forEach((x, i) => {
    ctx.fillStyle = i === 0 ? warmFill(0.95) : i === 1 ? 'rgba(255,200,150,0.8)' : coolFill(0.9);
    ctx.beginPath();
    ctx.arc(x, 53, 3, 0, Math.PI * 2);
    ctx.fill();
  });
  trace(f, rr(130, 46, 160, 14, 7), 0.7);
  ctx.fillStyle = warmFill(0.35);
  ctx.fill(rr(62, 78, 34, 12, 4));
  for (let i = 0; i < 6; i++) trace(f, line(62, 106 + i * 22, 62 + 22 + (i % 3) * 5, 106 + i * 22), i === 0 ? 0.9 : 0.5, 1.4);

  // KPI cards with sparklines.
  [118, 195, 272].forEach((x, i) => {
    trace(f, rr(x, 78, 66, 40, 6), 0.7);
    trace(f, line(x + 8, 88, x + 30, 88), 0.5);
    trace(f, line(x + 8, 100, x + 28 + i * 6, 100), 0.95, 2.4);
    const spark = new Path2D();
    spark.moveTo(x + 36, 110);
    for (let k = 0; k < 6; k++) spark.lineTo(x + 36 + k * 5, 108 - Math.sin(k * 1.2 + i) * 5);
    trace(f, spark, 0.9, 1.2);
  });

  // Bar + line chart.
  trace(f, rr(118, 130, 140, 100, 6), 0.7);
  const bars = [0.35, 0.55, 0.42, 0.7, 0.58, 0.85, 0.66, 0.95];
  const topline = new Path2D();
  bars.forEach((v, i) => {
    const bx = 130 + i * 15;
    const bh = v * 70;
    const g = ctx.createLinearGradient(0, 220 - bh, 0, 220);
    g.addColorStop(0, warmFill(0.8));
    g.addColorStop(1, coolFill(0.15));
    ctx.fillStyle = g;
    ctx.fillRect(bx, 220 - bh, 8, bh);
    if (i === 0) topline.moveTo(bx + 4, 214 - bh * 1.05);
    else topline.lineTo(bx + 4, 214 - bh * 1.05);
  });
  neon(f, topline, 0.8, `rgba(${COOL},0.95)`, 1.4);
  trace(f, line(126, 222, 250, 222), 0.5);

  // Donut.
  trace(f, rr(268, 130, 70, 100, 6), 0.7);
  [
    [0, 2.1, `rgba(${WARM},0.95)`],
    [2.3, 3.9, 'rgba(255,200,160,0.9)'],
    [4.1, 6.1, `rgba(${COOL},0.95)`],
  ].forEach(([a0, a1, c]) => {
    ctx.strokeStyle = c as string;
    ctx.lineWidth = 6 * f.px * 1.3;
    ctx.beginPath();
    ctx.arc(303, 168, 20, a0 as number, a1 as number);
    ctx.stroke();
  });
  for (let i = 0; i < 3; i++) trace(f, line(280, 206 + i * 8, 326 - i * 8, 206 + i * 8), 0.5);
  ctx.restore();

  // Code card overlapping the window — the "application" layer.
  const card = rr(292, 236, 104, 70, 9);
  mask(f, card);
  neon(f, card, 0.9, f.grad, 1.4);
  label(f, '</>', 344, 256, 15, 0.95, 'center');
  [
    [304, 272, 340],
    [312, 284, 372],
    [304, 296, 354],
  ].forEach(([x1, y, x2], i) => trace(f, line(x1, y, x2, y), 0.75, 1.6, i === 1 ? `rgba(${COOL},1)` : `rgba(${WARM},1)`));
  return endFrame(f);
};

// ═══ Application Maintenance — gears, health pulse and a continuous-improvement loop ═══════════
const shieldPath = (cx: number, cy: number, s: number) => {
  const p = new Path2D();
  p.moveTo(cx, cy - 50 * s);
  p.bezierCurveTo(cx + 35 * s, cy - 30 * s, cx + 70 * s, cy - 24 * s, cx + 85 * s, cy - 22 * s);
  p.bezierCurveTo(cx + 85 * s, cy + 44 * s, cx + 70 * s, cy + 110 * s, cx, cy + 160 * s);
  p.bezierCurveTo(cx - 70 * s, cy + 110 * s, cx - 85 * s, cy + 44 * s, cx - 85 * s, cy - 22 * s);
  p.bezierCurveTo(cx - 70 * s, cy - 24 * s, cx - 35 * s, cy - 30 * s, cx, cy - 50 * s);
  p.closePath();
  return p;
};
const check = (cx: number, cy: number, s: number) => line(cx - 30 * s, cy, cx - 6 * s, cy + 24 * s, cx + 34 * s, cy - 26 * s);

const arrowArc = (cx: number, cy: number, r: number, a0: number, a1: number) => {
  const p = new Path2D();
  p.arc(cx, cy, r, a0, a1);
  const ex = cx + Math.cos(a1) * r;
  const ey = cy + Math.sin(a1) * r;
  const t = a1 + Math.PI / 2; // tangent direction
  p.moveTo(ex, ey);
  p.lineTo(ex - Math.cos(t - 0.5) * 11, ey - Math.sin(t - 0.5) * 11);
  p.moveTo(ex, ey);
  p.lineTo(ex - Math.cos(t + 0.5) * 11, ey - Math.sin(t + 0.5) * 11);
  return p;
};

const drawAppMaintenance: DrawFn = (ctx, w, h, dpr) => {
  const f = beginFrame(ctx, w, h, dpr, 33);
  const cx = 205;
  const cy = 160;
  const gear = gearPath(cx, cy, 112, 92, 14);
  gear.addPath(circle(cx, cy, 40));
  const anchors = Array.from({ length: 12 }, (_, i) => P(cx + Math.cos(i * 0.52) * 112, cy + Math.sin(i * 0.52) * 112));
  network(
    f,
    [
      { x: 20, y: 40, kind: 'ring', r: 8 },
      { x: -25, y: 110, kind: 'dot', r: 3 },
      { x: 34, y: 192, kind: 'rect', r: 12, cool: true },
      { x: -15, y: 280, kind: 'dot', r: 3.2 },
      { x: 110, y: -25, kind: 'dot', r: 2.6 },
      { x: 300, y: -30, kind: 'ring', r: 7 },
      { x: 410, y: 60, kind: 'dot', r: 3.2, cool: true },
      { x: 425, y: 150, kind: 'ring', r: 8 },
      { x: 410, y: 230, kind: 'dot', r: 3 },
      { x: 120, y: 322, kind: 'ring', r: 7 },
      { x: 290, y: 330, kind: 'dot', r: 3, cool: true },
    ],
    anchors,
    [[cx, 272, cx, 345]],
  );
  ambient(f, [
    [140, 150, 190, 'rgba(255,110,40,0.2)'],
    [290, 175, 180, 'rgba(60,150,255,0.18)'],
  ]);

  glassObject(f, gear, { count: 520, reach: 20, hot: 26, rule: 'evenodd', box: [90, 45, 320, 275] });
  // Inner service ring and hub.
  trace(f, circle(cx, cy, 66), 0.55);
  ctx.save();
  ctx.setLineDash([3, 5]);
  trace(f, circle(cx, cy, 78), 0.45);
  ctx.restore();
  const hub = circle(cx, cy, 40);
  mask(f, hub);
  neon(f, hub, 0.9, f.grad, 1.4);
  // Heartbeat inside the hub: the application's health.
  const pulse = line(cx - 28, cy + 2, cx - 14, cy + 2, cx - 8, cy - 14, cx, cy + 16, cx + 7, cy - 4, cx + 12, cy + 2, cx + 28, cy + 2);
  neon(f, pulse, 1, `rgba(${WARM},1)`, 1.8);

  // Continuous-improvement loop.
  const loopA = arrowArc(cx, cy, 138, -0.55, 1.05);
  const loopB = arrowArc(cx, cy, 138, 2.6, 4.2);
  neon(f, loopA, 0.7, f.grad, 1.4);
  neon(f, loopB, 0.7, f.grad, 1.4);

  // Supporting gears and a security shield.
  neon(f, gearPath(345, 262, 36, 29, 9), 0.8, `rgba(${COOL},1)`, 1.4);
  trace(f, circle(345, 262, 12), 0.8, 1.4, `rgba(${COOL},1)`);
  neon(f, gearPath(62, 78, 26, 21, 8), 0.8, `rgba(${WARM},1)`, 1.4);
  trace(f, circle(62, 78, 8), 0.8, 1.4, `rgba(${WARM},1)`);
  const sh = shieldPath(345, 70, 0.32);
  mask(f, sh);
  neon(f, sh, 0.9, `rgba(${COOL},1)`, 1.4);
  neon(f, check(345, 72, 0.32), 1, 'rgba(230,245,255,1)', 1.6);

  // Uptime trace along the bottom.
  const hb = new Path2D();
  hb.moveTo(20, 302);
  for (let x = 20; x < 392; x += 4) {
    const beat = x % 92 < 12 ? Math.sin(((x % 92) / 12) * Math.PI * 2) * -14 : 0;
    hb.lineTo(x, 302 + beat);
  }
  trace(f, hb, 0.55, 1.2);
  return endFrame(f);
};

// ═══ Website Development & Domain — wireframe globe ═══════════════════════════════════════════
const globe = (f: Frame, cx: number, cy: number, R: number, nodeCount: number) => {
  const { ctx } = f;
  const disc = circle(cx, cy, R);
  const pts = samplePath(ctx, disc, nodeCount, f.rnd, [cx - R, cy - R, cx + R, cy + R]);
  ambient(f, [
    [cx - R * 0.4, cy, R * 1.7, 'rgba(255,110,40,0.2)'],
    [cx + R * 0.5, cy, R * 1.5, 'rgba(60,150,255,0.18)'],
  ]);
  body(f, disc);
  ctx.save();
  ctx.clip(disc);
  mesh(f, pts, R * 0.2, 0.22);
  dots(f, pts, 0.85);
  ctx.restore();
  // Meridians and parallels.
  for (let a = 0; a < 6; a++) {
    const rx = Math.abs(Math.cos((a * Math.PI) / 6)) * R;
    if (rx < 2) continue;
    const e = new Path2D();
    e.ellipse(cx, cy, rx, R, 0, 0, Math.PI * 2);
    trace(f, e, 0.28);
  }
  for (const lat of [-60, -30, 0, 30, 60]) {
    const y = cy + Math.sin((lat * Math.PI) / 180) * R;
    const rx = Math.cos((lat * Math.PI) / 180) * R;
    const e = new Path2D();
    e.ellipse(cx, y, rx, rx * 0.16, 0, 0, Math.PI * 2);
    trace(f, e, 0.3);
  }
  // Glowing links between a few bright cities.
  const cities = Array.from({ length: 6 }, () => pts[Math.floor(f.rnd() * pts.length)]);
  ctx.save();
  ctx.shadowColor = 'rgba(255,150,80,0.8)';
  ctx.shadowBlur = f.glow(8);
  for (let i = 0; i < cities.length - 1; i++) {
    const a = cities[i];
    const b = cities[i + 1];
    const arc = new Path2D();
    arc.moveTo(a.x, a.y);
    arc.quadraticCurveTo((a.x + b.x) / 2, (a.y + b.y) / 2 - R * 0.35, b.x, b.y);
    trace(f, arc, 0.95, 1.4, a.x < cx ? `rgba(${WARM},1)` : `rgba(${COOL},1)`);
  }
  ctx.restore();
  hotNodes(f, cities, cities.length);
  hotNodes(f, pts, 14);
  neon(f, disc);
  return pts;
};

const drawWebsite: DrawFn = (ctx, w, h, dpr) => {
  const f = beginFrame(ctx, w, h, dpr, 45);
  const gx = 250;
  const gy = 150;
  const R = 120;
  network(
    f,
    [
      { x: 40, y: 30, kind: 'ring', r: 8 },
      { x: -20, y: 110, kind: 'dot', r: 3 },
      { x: 110, y: -20, kind: 'dot', r: 2.6 },
      { x: 330, y: -22, kind: 'hud', r: 20, cool: true },
      { x: 425, y: 50, kind: 'ring', r: 7 },
      { x: 440, y: 150, kind: 'dot', r: 3.2, cool: true },
      { x: 425, y: 250, kind: 'ring', r: 8 },
      { x: 330, y: 318, kind: 'dot', r: 3 },
      { x: 20, y: 300, kind: 'rect', r: 12, cool: true },
      { x: -10, y: 230, kind: 'dot', r: 3 },
    ],
    Array.from({ length: 12 }, (_, i) => P(gx + Math.cos(i * 0.52) * R, gy + Math.sin(i * 0.52) * R)).concat([P(60, 190), P(120, 170)]),
  );
  globe(f, gx, gy, R, 520);

  // Browser window in front of the globe: the website.
  const win = rr(28, 168, 196, 122, 10);
  mask(f, win);
  body(f, win, 0.6);
  neon(f, win, 0.9, f.grad, 1.4);
  trace(f, line(28, 188, 224, 188), 0.7);
  [40, 52, 64].forEach((x, i) => {
    ctx.fillStyle = i === 0 ? warmFill(0.95) : i === 1 ? 'rgba(255,200,150,0.8)' : coolFill(0.9);
    ctx.beginPath();
    ctx.arc(x, 178, 2.6, 0, Math.PI * 2);
    ctx.fill();
  });
  trace(f, rr(82, 172, 100, 11, 5.5), 0.6);
  const hero = rr(40, 198, 172, 40, 6);
  const hg = ctx.createLinearGradient(40, 0, 212, 0);
  hg.addColorStop(0, warmFill(0.3));
  hg.addColorStop(1, coolFill(0.25));
  ctx.fillStyle = hg;
  ctx.fill(hero);
  trace(f, hero, 0.8);
  trace(f, line(52, 210, 120, 210), 0.95, 2.6);
  trace(f, line(52, 222, 100, 222), 0.6, 1.6);
  ctx.fillStyle = warmFill(0.95);
  ctx.fill(rr(52, 248, 44, 13, 6.5));
  [106, 148, 190].forEach((x) => trace(f, rr(x - 8, 246, 32, 32, 5), 0.6));
  // Cursor: getting noticed.
  const cur = new Path2D();
  cur.moveTo(186, 244);
  cur.lineTo(186, 270);
  cur.lineTo(193, 264);
  cur.lineTo(198, 275);
  cur.lineTo(203, 272);
  cur.lineTo(198, 262);
  cur.lineTo(207, 261);
  cur.closePath();
  ctx.save();
  ctx.fillStyle = 'rgba(240,248,255,0.95)';
  ctx.shadowColor = `rgba(${COOL},1)`;
  ctx.shadowBlur = f.glow(10);
  ctx.fill(cur);
  ctx.restore();
  return endFrame(f);
};

// ═══ Website Maintenance — shield, monitoring and upkeep ══════════════════════════════════════
const drawWebsiteMaintenance: DrawFn = (ctx, w, h, dpr) => {
  const f = beginFrame(ctx, w, h, dpr, 57);
  const cx = 210;
  const cy = 130;
  const shield = shieldPath(cx, cy, 1);
  network(
    f,
    [
      { x: 30, y: 30, kind: 'gear', r: 16 },
      { x: -25, y: 110, kind: 'dot', r: 3 },
      { x: 110, y: -22, kind: 'dot', r: 2.8 },
      { x: 320, y: -28, kind: 'ring', r: 7 },
      { x: 425, y: 40, kind: 'dot', r: 3.2, cool: true },
      { x: 440, y: 130, kind: 'ring', r: 8 },
      { x: 420, y: 210, kind: 'hud', r: 18, cool: true },
      { x: 290, y: 328, kind: 'dot', r: 3 },
      { x: 20, y: 320, kind: 'ring', r: 7 },
      { x: -10, y: 250, kind: 'dot', r: 3.2 },
    ],
    [P(cx, cy - 50), P(cx - 85, cy - 22), P(cx + 85, cy - 22), P(cx - 85, cy + 44), P(cx + 85, cy + 44), P(cx, cy + 160), P(80, 215), P(330, 210)],
  );
  ambient(f, [
    [140, 140, 190, 'rgba(255,110,40,0.2)'],
    [300, 150, 180, 'rgba(60,150,255,0.2)'],
  ]);

  // Orbit rings with a satellite: constant monitoring.
  ctx.save();
  ctx.translate(cx, cy + 30);
  ctx.rotate(-0.32);
  for (const [rx, ry, a] of [
    [185, 52, 0.4],
    [150, 40, 0.28],
  ] as const) {
    const e = new Path2D();
    e.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2);
    ctx.setLineDash([2, 5]);
    trace(f, e, a);
  }
  ctx.setLineDash([]);
  ctx.restore();

  glassObject(f, shield, { count: 560, reach: 18, hot: 26, box: [120, 70, 300, 300] });
  const inner = shieldPath(cx, cy + 6, 0.82);
  trace(f, inner, 0.5);
  neon(f, check(cx, cy + 26, 1.25), 1.1, 'rgba(255,240,225,1)', 3);

  // Monitoring panel (uptime trace) and a browser window being looked after.
  const panel = rr(284, 212, 112, 70, 8);
  mask(f, panel);
  neon(f, panel, 0.8, f.grad, 1.3);
  const mon = new Path2D();
  mon.moveTo(294, 258);
  for (let x = 294; x <= 386; x += 3) mon.lineTo(x, 258 - Math.abs(Math.sin(x * 0.11)) * 10 - (x > 330 && x < 346 ? 14 : 0));
  neon(f, mon, 0.8, `rgba(${COOL},1)`, 1.4);
  trace(f, line(294, 226, 336, 226), 0.8, 2.2);
  trace(f, line(294, 236, 322, 236), 0.5, 1.4);
  ctx.fillStyle = coolFill(0.95);
  ctx.beginPath();
  ctx.arc(378, 227, 3.4, 0, Math.PI * 2);
  ctx.fill();

  const win = rr(34, 200, 112, 82, 8);
  mask(f, win);
  neon(f, win, 0.8, f.grad, 1.3);
  trace(f, line(34, 216, 146, 216), 0.7);
  [46, 56, 66].forEach((x, i) => {
    ctx.fillStyle = i === 0 ? warmFill(0.95) : i === 1 ? 'rgba(255,200,150,0.8)' : coolFill(0.9);
    ctx.beginPath();
    ctx.arc(x, 208, 2.4, 0, Math.PI * 2);
    ctx.fill();
  });
  trace(f, rr(46, 226, 88, 24, 4), 0.7);
  trace(f, line(54, 236, 100, 236), 0.9, 2.2);
  trace(f, line(54, 244, 82, 244), 0.5, 1.4);
  trace(f, line(46, 262, 120, 262), 0.5);
  trace(f, line(46, 272, 100, 272), 0.4);
  neon(f, gearPath(124, 262, 12, 9.5, 8), 0.8, `rgba(${WARM},1)`, 1.2);
  return endFrame(f);
};

// ═══ Domain Registration & Hosting — address bar, globe and servers ═══════════════════════════
const drawDomain: DrawFn = (ctx, w, h, dpr) => {
  const f = beginFrame(ctx, w, h, dpr, 69);
  network(
    f,
    [
      { x: 10, y: 20, kind: 'ring', r: 8 },
      { x: -30, y: 110, kind: 'dot', r: 3 },
      { x: 10, y: 240, kind: 'dot', r: 3.2 },
      { x: 40, y: 318, kind: 'ring', r: 7 },
      { x: 400, y: -30, kind: 'dot', r: 3, cool: true },
      { x: 430, y: 60, kind: 'ring', r: 8 },
      { x: 436, y: 150, kind: 'dot', r: 3.4, cool: true },
      { x: 420, y: 250, kind: 'hud', r: 18, cool: true },
      { x: 300, y: 330, kind: 'ring', r: 7 },
      { x: 180, y: 335, kind: 'dot', r: 3 },
    ],
    [P(40, 70), P(360, 70), P(110, 100), P(100, 300), P(230, 230), P(250, 190), P(370, 140), P(370, 270)],
  );

  // Address bar: the domain itself.
  const bar = rr(40, 48, 320, 44, 22);
  ambient(f, [
    [110, 70, 170, 'rgba(255,110,40,0.2)'],
    [300, 70, 170, 'rgba(60,150,255,0.18)'],
  ]);
  mask(f, bar);
  body(f, bar, 0.6);
  neon(f, bar);
  // Lock.
  ctx.save();
  ctx.strokeStyle = `rgba(${WARM},1)`;
  ctx.lineWidth = 1.6 * f.px;
  ctx.shadowColor = `rgba(${WARM},1)`;
  ctx.shadowBlur = f.glow(6);
  ctx.stroke(rr(58, 72, 14, 11, 2.5));
  const shackle = new Path2D();
  shackle.arc(65, 72, 4.5, Math.PI, 0);
  ctx.stroke(shackle);
  ctx.restore();
  label(f, 'www.yourdomain.com', 82, 70, 15, 0.95);
  const go = circle(336, 70, 14);
  ctx.fillStyle = warmFill(0.95);
  ctx.fill(go);
  trace(f, line(330, 70, 342, 70), 1, 1.8, 'rgba(20,8,4,1)');
  trace(f, line(338, 65, 343, 70, 338, 75), 1, 1.8, 'rgba(20,8,4,1)');

  // Domain extensions as tags.
  ['.com', '.in', '.org'].forEach((t, i) => {
    const x = 48 + i * 58;
    const tag = rr(x, 8, 50, 22, 11);
    mask(f, tag);
    trace(f, tag, 0.8);
    label(f, t, x + 25, 19.5, 12, 0.95, 'center');
  });

  // Globe (online presence) and the hosting rack.
  const gx = 132;
  const gy = 202;
  globe(f, gx, gy, 84, 380);
  trace(f, line(110, 92, 118, 120), 0.6);
  for (let i = 0; i < 4; i++) {
    const y = 122 + i * 44;
    const unit = rr(262, y, 120, 36, 7);
    mask(f, unit);
    body(f, unit, 0.7);
    neon(f, unit, 0.75, f.grad, 1.3);
    [0, 1, 2].forEach((k) => {
      ctx.fillStyle = k === 0 ? warmFill(0.95) : k === 1 ? 'rgba(255,200,150,0.85)' : coolFill(0.95);
      ctx.beginPath();
      ctx.arc(276 + k * 10, y + 18, 2.6, 0, Math.PI * 2);
      ctx.fill();
    });
    [0, 1, 2, 3, 4].forEach((k) => trace(f, line(318 + k * 11, y + 11, 318 + k * 11, y + 25), 0.55, 1.4));
    trace(f, line(262, y + 36, 262, y + 40), 0.4);
  }
  // Data links from the globe to the rack.
  for (const [y0, y1] of [
    [185, 140],
    [205, 184],
    [225, 228],
    [245, 272],
  ] as const) {
    const link = new Path2D();
    link.moveTo(gx + 82, y0);
    link.bezierCurveTo(gx + 120, y0, 230, y1, 262, y1);
    ctx.save();
    ctx.setLineDash([3, 4]);
    trace(f, link, 0.7, 1.2);
    ctx.restore();
  }
  return endFrame(f);
};

// ═══ Mobile App Development — phones and app UI ══════════════════════════════════════════════
const drawMobile: DrawFn = (ctx, w, h, dpr) => {
  const f = beginFrame(ctx, w, h, dpr, 81);
  const front = rr(190, 38, 118, 244, 22);
  network(
    f,
    [
      { x: 20, y: 30, kind: 'ring', r: 8 },
      { x: -25, y: 120, kind: 'dot', r: 3 },
      { x: 15, y: 305, kind: 'dot', r: 3.2 },
      { x: 110, y: -24, kind: 'dot', r: 2.6 },
      { x: 330, y: -24, kind: 'hud', r: 20, cool: true },
      { x: 430, y: 40, kind: 'dot', r: 3, cool: true },
      { x: 440, y: 150, kind: 'ring', r: 8 },
      { x: 430, y: 250, kind: 'dot', r: 3.4, cool: true },
      { x: 360, y: 322, kind: 'ring', r: 7 },
      { x: 240, y: 330, kind: 'dot', r: 3 },
    ],
    [P(190, 80), P(190, 200), P(308, 80), P(308, 200), P(250, 38), P(250, 282), P(95, 120), P(100, 250)],
  );
  ambient(f, [
    [130, 170, 190, 'rgba(255,110,40,0.2)'],
    [290, 160, 180, 'rgba(60,150,255,0.2)'],
  ]);

  // Back phone, tilted and dimmer.
  ctx.save();
  ctx.translate(135, 176);
  ctx.rotate(-0.17);
  const back = rr(-54, -110, 108, 220, 20);
  mask(f, back);
  body(f, back, 0.5);
  neon(f, back, 0.6, f.grad, 1.3);
  trace(f, rr(-14, -100, 28, 7, 3.5), 0.5);
  trace(f, rr(-44, -84, 88, 30, 6), 0.5);
  for (let i = 0; i < 4; i++) {
    ctx.fillStyle = i % 2 ? coolFill(0.4) : warmFill(0.4);
    ctx.beginPath();
    ctx.arc(-34, -34 + i * 30, 9, 0, Math.PI * 2);
    ctx.fill();
    trace(f, line(-18, -38 + i * 30, 34, -38 + i * 30), 0.6, 1.8);
    trace(f, line(-18, -28 + i * 30, 14, -28 + i * 30), 0.35, 1.2);
  }
  ctx.restore();

  // Front phone.
  mask(f, front);
  glassObject(f, front, { count: 240, reach: 18, hot: 10, box: [190, 38, 308, 282], bodyOpacity: 0.8 });
  ctx.save();
  ctx.clip(front);
  trace(f, rr(228, 48, 44, 10, 5), 0.8);
  // Featured card with a chart.
  const feat = rr(201, 70, 96, 54, 8);
  trace(f, feat, 0.8);
  trace(f, line(211, 82, 244, 82), 0.95, 2.4);
  trace(f, line(211, 92, 232, 92), 0.5, 1.4);
  const ch = new Path2D();
  ch.moveTo(211, 116);
  [112, 104, 108, 98, 102, 92, 96, 86].forEach((y, i) => ch.lineTo(211 + (i + 1) * 10.5, y + 4));
  neon(f, ch, 0.8, `rgba(${COOL},1)`, 1.4);
  // App icon grid.
  for (let r = 0; r < 3; r++)
    for (let c = 0; c < 3; c++) {
      const x = 201 + c * 34;
      const y = 134 + r * 34;
      const tile = rr(x, y, 28, 28, 8);
      const on = (r + c) % 2 === 0;
      if (on) {
        const g = ctx.createLinearGradient(x, y, x + 28, y + 28);
        g.addColorStop(0, warmFill(0.75));
        g.addColorStop(1, coolFill(0.55));
        ctx.fillStyle = g;
        ctx.fill(tile);
      }
      trace(f, tile, on ? 0.95 : 0.6);
      trace(f, circle(x + 14, y + 14, 5), on ? 0.9 : 0.4, 1.2, 'rgba(255,255,255,1)');
    }
  // Bottom navigation.
  trace(f, rr(201, 244, 96, 26, 13), 0.7);
  [0, 1, 2, 3].forEach((i) => {
    ctx.fillStyle = i === 0 ? warmFill(0.95) : 'rgba(200,210,230,0.5)';
    ctx.beginPath();
    ctx.arc(216 + i * 22, 257, 3, 0, Math.PI * 2);
    ctx.fill();
  });
  ctx.restore();
  neon(f, front, 1);

  // Floating UI: notification and chat bubble.
  const note = rr(292, 98, 112, 40, 10);
  mask(f, note);
  neon(f, note, 0.8, f.grad, 1.3);
  ctx.fillStyle = warmFill(0.95);
  ctx.beginPath();
  ctx.arc(311, 118, 8, 0, Math.PI * 2);
  ctx.fill();
  trace(f, line(326, 112, 388, 112), 0.9, 2);
  trace(f, line(326, 124, 366, 124), 0.5, 1.4);
  const chat = rr(30, 40, 96, 34, 10);
  mask(f, chat);
  neon(f, chat, 0.7, f.grad, 1.2);
  trace(f, line(42, 52, 108, 52), 0.8, 1.8);
  trace(f, line(42, 62, 84, 62), 0.45, 1.4);
  const tog = rr(318, 232, 44, 22, 11);
  mask(f, tog);
  neon(f, tog, 0.7, `rgba(${COOL},1)`, 1.2);
  ctx.fillStyle = coolFill(0.95);
  ctx.beginPath();
  ctx.arc(351, 243, 7, 0, Math.PI * 2);
  ctx.fill();
  return endFrame(f);
};

export const BANNER_DRAW: Record<BannerArtKind, DrawFn> = {
  brain: drawBrain,
  'web-app': drawWebApp,
  'app-maintenance': drawAppMaintenance,
  website: drawWebsite,
  'website-maintenance': drawWebsiteMaintenance,
  domain: drawDomain,
  mobile: drawMobile,
};
