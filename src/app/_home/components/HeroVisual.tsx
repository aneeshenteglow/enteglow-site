import React from 'react';
import type { HeroVisualKind } from '../types';

// Decorative, brand-coloured interface compositions for the hero slides.
const C = {
  frame: '#111214',
  surface: '#17181A',
  surface2: '#202226',
  line: '#2C2E33',
  muted: '#3A3C42',
  text: '#A5A7AD',
  brand: '#C63B22',
  brandLight: '#F06A4F',
  ok: '#38B67A',
};

const Frame: React.FC<{ children: React.ReactNode; chrome?: boolean }> = ({ children, chrome = true }) => (
  <>
    <rect x="1" y="1" width="518" height="438" rx="24" fill={C.frame} stroke={C.line} />
    {chrome && (
      <>
        <circle cx="30" cy="30" r="5" fill={C.muted} />
        <circle cx="48" cy="30" r="5" fill={C.muted} />
        <circle cx="66" cy="30" r="5" fill={C.muted} />
        <line x1="1" y1="58" x2="519" y2="58" stroke={C.line} />
      </>
    )}
    {children}
  </>
);

const Label: React.FC<{ x: number; y: number; children: string; anchor?: 'start' | 'middle' | 'end' }> = ({
  x,
  y,
  children,
  anchor = 'start',
}) => (
  <text x={x} y={y} fill={C.text} fontSize="13" fontFamily="Inter, sans-serif" textAnchor={anchor}>
    {children}
  </text>
);

const AiVisual = () => {
  const layers = [
    { x: 110, ys: [130, 190, 250, 310] },
    { x: 260, ys: [100, 160, 220, 280, 340] },
    { x: 410, ys: [160, 220, 280] },
  ];
  const active = [
    [110, 190],
    [260, 160],
    [410, 220],
  ];
  const active2 = [
    [110, 250],
    [260, 280],
    [410, 220],
  ];
  return (
    <Frame chrome={false}>
      {layers.slice(0, -1).map((layer, i) =>
        layer.ys.flatMap((y1) =>
          layers[i + 1].ys.map((y2) => (
            <line key={`${i}-${y1}-${y2}`} x1={layer.x} y1={y1} x2={layers[i + 1].x} y2={y2} stroke={C.line} />
          ))
        )
      )}
      {[active, active2].map((path, i) => (
        <polyline
          key={i}
          points={path.map((p) => p.join(',')).join(' ')}
          fill="none"
          stroke={i === 0 ? C.brandLight : C.brand}
          strokeWidth="2"
        />
      ))}
      {layers.flatMap((layer) =>
        layer.ys.map((y) => {
          const on = [...active, ...active2].some(([ax, ay]) => ax === layer.x && ay === y);
          return (
            <g key={`${layer.x}-${y}`}>
              {on && <circle cx={layer.x} cy={y} r="22" fill={C.brand} opacity="0.18" />}
              <circle
                cx={layer.x}
                cy={y}
                r="9"
                fill={on ? C.brand : C.surface2}
                stroke={on ? C.brandLight : C.muted}
                strokeWidth="1.5"
              />
            </g>
          );
        })
      )}
      <Label x={110} y={400} anchor="middle">
        Input
      </Label>
      <Label x={260} y={400} anchor="middle">
        Model
      </Label>
      <Label x={410} y={400} anchor="middle">
        Insight
      </Label>
    </Frame>
  );
};

const WebAppVisual = () => (
  <Frame>
    <rect x="20" y="78" width="96" height="342" rx="14" fill={C.surface} />
    {[102, 132, 162, 192].map((y, i) => (
      <rect key={y} x="36" y={y} width={i === 0 ? 64 : 52} height="10" rx="5" fill={i === 0 ? C.brand : C.muted} />
    ))}
    {[0, 1, 2].map((i) => (
      <g key={i}>
        <rect x={132 + i * 124} y="78" width="112" height="84" rx="14" fill={C.surface} />
        <rect x={148 + i * 124} y="96" width="44" height="8" rx="4" fill={C.muted} />
        <rect x={148 + i * 124} y="120" width={[64, 48, 72][i]} height="20" rx="6" fill={C.surface2} />
      </g>
    ))}
    <rect x="132" y="176" width="360" height="140" rx="14" fill={C.surface} />
    <polyline
      points="152,290 196,268 240,276 284,236 328,248 372,212 416,222 472,196"
      fill="none"
      stroke={C.brandLight}
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
    <polygon
      points="152,290 196,268 240,276 284,236 328,248 372,212 416,222 472,196 472,300 152,300"
      fill={C.brand}
      opacity="0.12"
    />
    {[332, 362, 392].map((y) => (
      <g key={y}>
        <rect x="132" y={y} width="360" height="22" rx="8" fill={C.surface} />
        <rect x="146" y={y + 7} width="90" height="8" rx="4" fill={C.muted} />
        <rect x="400" y={y + 7} width="76" height="8" rx="4" fill={C.surface2} />
      </g>
    ))}
  </Frame>
);

const AppMaintenanceVisual = () => (
  <Frame>
    {['Security', 'Stability', 'Performance'].map((label, i) => (
      <g key={label}>
        <rect x="24" y={80 + i * 58} width="472" height="44" rx="12" fill={C.surface} />
        <circle cx="48" cy={102 + i * 58} r="6" fill={C.ok} />
        <Label x={66} y={107 + i * 58}>
          {label}
        </Label>
        <rect x="340" y={98 + i * 58} width="136" height="8" rx="4" fill={C.surface2} />
        <rect x="340" y={98 + i * 58} width={[118, 126, 104][i]} height="8" rx="4" fill={C.muted} />
      </g>
    ))}
    <rect x="24" y="262" width="472" height="156" rx="14" fill={C.surface} />
    {Array.from({ length: 30 }).map((_, i) => (
      <rect
        key={i}
        x={42 + i * 15}
        y={i === 21 ? 300 : 320 - ((i * 7) % 24)}
        width="8"
        height={i === 21 ? 82 : 62 + ((i * 7) % 24)}
        rx="3"
        fill={i === 21 ? C.brand : C.muted}
        opacity={i === 21 ? 1 : 0.7}
      />
    ))}
    <polyline
      points="42,292 140,282 238,290 336,270 362,254 380,276 478,268"
      fill="none"
      stroke={C.brandLight}
      strokeWidth="2"
    />
  </Frame>
);

const WebsiteMaintenanceVisual = () => (
  <Frame>
    <rect x="24" y="78" width="472" height="150" rx="14" fill={C.surface} />
    <rect x="48" y="112" width="210" height="18" rx="6" fill={C.muted} />
    <rect x="48" y="140" width="160" height="18" rx="6" fill={C.muted} />
    <rect x="48" y="178" width="96" height="28" rx="14" fill={C.brand} />
    <rect x="300" y="98" width="176" height="110" rx="12" fill={C.surface2} />
    {[0, 1, 2].map((i) => (
      <g key={i}>
        <rect x={24 + i * 160} y="244" width="152" height="80" rx="14" fill={C.surface} />
        <rect x={40 + i * 160} y="262" width="40" height="8" rx="4" fill={C.muted} />
        <rect x={40 + i * 160} y="282" width="108" height="6" rx="3" fill={C.surface2} />
        <rect x={40 + i * 160} y="296" width="84" height="6" rx="3" fill={C.surface2} />
      </g>
    ))}
    <rect x="190" y="300" width="306" height="118" rx="16" fill={C.surface2} stroke={C.line} />
    <path
      d="M226 324 l18 6 v12 c0 10-8 17-18 20 c-10-3-18-10-18-20 v-12 z"
      fill="none"
      stroke={C.brandLight}
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <Label x={258} y={344}>
      Proactive monitoring
    </Label>
    <polyline
      points="210,392 268,392 284,372 300,408 316,380 332,392 476,392"
      fill="none"
      stroke={C.brandLight}
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </Frame>
);

const MobileVisual = () => (
  <Frame chrome={false}>
    <rect x="60" y="34" width="204" height="372" rx="34" fill={C.surface} stroke={C.muted} strokeWidth="2" />
    <rect x="132" y="48" width="60" height="8" rx="4" fill={C.muted} />
    <rect x="80" y="76" width="164" height="96" rx="18" fill={C.brand} />
    <rect x="96" y="96" width="70" height="10" rx="5" fill="#fff" opacity="0.85" />
    <rect x="96" y="116" width="104" height="18" rx="6" fill="#fff" opacity="0.35" />
    {[188, 236, 284].map((y) => (
      <g key={y}>
        <rect x="80" y={y} width="164" height="38" rx="12" fill={C.surface2} />
        <circle cx="100" cy={y + 19} r="9" fill={C.muted} />
        <rect x="118" y={y + 15} width="80" height="8" rx="4" fill={C.muted} />
      </g>
    ))}
    <rect x="80" y="352" width="164" height="36" rx="18" fill={C.surface2} />
    {[108, 162, 216].map((x, i) => (
      <circle key={x} cx={x} cy="370" r="6" fill={i === 0 ? C.brandLight : C.muted} />
    ))}
    <rect x="296" y="120" width="184" height="200" rx="20" fill={C.surface} stroke={C.line} />
    <rect x="316" y="140" width="72" height="8" rx="4" fill={C.muted} />
    {[64, 96, 76, 120, 104].map((h, i) => (
      <rect
        key={i}
        x={318 + i * 32}
        y={296 - h}
        width="20"
        height={h}
        rx="6"
        fill={i === 3 ? C.brand : C.muted}
        opacity={i === 3 ? 1 : 0.7}
      />
    ))}
  </Frame>
);

const visuals: Record<HeroVisualKind, React.FC> = {
  ai: AiVisual,
  'web-app': WebAppVisual,
  'app-maintenance': AppMaintenanceVisual,
  'website-maintenance': WebsiteMaintenanceVisual,
  mobile: MobileVisual,
};

export const HeroVisual: React.FC<{ kind: HeroVisualKind }> = ({ kind }) => {
  const Visual = visuals[kind];
  return (
    <svg viewBox="0 0 520 440" className="h-auto w-full" aria-hidden focusable="false">
      <Visual />
    </svg>
  );
};
