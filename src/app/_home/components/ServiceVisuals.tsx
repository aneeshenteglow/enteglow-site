import React from 'react';
import { CircleCheck, Globe } from 'lucide-react';
import type { HomeService } from '../types';
import { cn } from '../cn';

// Decorative interface sketches for the service cards. They carry no data or claims: shapes are
// skeleton placeholders, and the few labels quote words from each service's approved description.
// Colours come from the card's `--eg-accent` (see `.eg-svc` in home.css).

const LINE = '#2C2E33';
const NODE = '#202226';

/** Grey placeholder bar standing in for text. */
const Bar: React.FC<{ className?: string }> = ({ className }) => (
  <span className={cn('block h-1.5 rounded-full bg-ink-700', className)} />
);

const Dots = () => (
  <span className="flex gap-1">
    <span className="h-1.5 w-1.5 rounded-full bg-ink-600" />
    <span className="h-1.5 w-1.5 rounded-full bg-ink-600" />
    <span className="h-1.5 w-1.5 rounded-full bg-ink-600" />
  </span>
);

// Inputs flow through a model core to outputs.
const AiVisual = () => {
  const inputs = [36, 80, 124];
  const outputs = [48, 112];
  const core = { x: 280, y: 80 };
  return (
    <svg viewBox="0 0 560 160" className="h-full w-full" preserveAspectRatio="xMidYMid meet">
      {inputs.map((y, i) => (
        <g key={y}>
          <rect x="40" y={y - 4} width={i === 1 ? 72 : 56} height="8" rx="4" fill={NODE} />
          <path
            d={`M134 ${y} C 200 ${y}, 200 ${core.y}, ${core.x - 34} ${core.y}`}
            fill="none"
            stroke={LINE}
            strokeWidth="1.5"
          />
          <path
            className="eg-svc-flow"
            d={`M134 ${y} C 200 ${y}, 200 ${core.y}, ${core.x - 34} ${core.y}`}
            fill="none"
            stroke="var(--eg-accent)"
            strokeWidth="1.5"
            strokeOpacity={i === 1 ? 0.9 : 0.45}
          />
          <circle cx="134" cy={y} r="5" fill="#101113" stroke={i === 1 ? 'var(--eg-accent)' : LINE} strokeWidth="1.5" />
        </g>
      ))}
      {outputs.map((y, i) => (
        <g key={y}>
          <path
            d={`M${core.x + 34} ${core.y} C 360 ${core.y}, 360 ${y}, 426 ${y}`}
            fill="none"
            stroke={LINE}
            strokeWidth="1.5"
          />
          <path
            className="eg-svc-flow"
            d={`M${core.x + 34} ${core.y} C 360 ${core.y}, 360 ${y}, 426 ${y}`}
            fill="none"
            stroke="var(--eg-accent)"
            strokeWidth="1.5"
            strokeOpacity={i === 0 ? 0.9 : 0.45}
          />
          <circle cx="426" cy={y} r="5" fill="#101113" stroke={i === 0 ? 'var(--eg-accent)' : LINE} strokeWidth="1.5" />
          <rect x="446" y={y - 4} width={i === 0 ? 72 : 52} height="8" rx="4" fill={NODE} />
        </g>
      ))}
      <rect
        x={core.x - 34}
        y={core.y - 34}
        width="68"
        height="68"
        rx="18"
        fill="#17181A"
        stroke="var(--eg-accent)"
        strokeOpacity="0.55"
      />
      <circle className="eg-svc-halo" cx={core.x} cy={core.y} r="44" fill="none" stroke="var(--eg-accent)" />
      {/* Four-point spark */}
      <path
        d={`M${core.x} ${core.y - 16} C ${core.x + 2} ${core.y - 4}, ${core.x + 4} ${core.y - 2}, ${core.x + 16} ${core.y}
            C ${core.x + 4} ${core.y + 2}, ${core.x + 2} ${core.y + 4}, ${core.x} ${core.y + 16}
            C ${core.x - 2} ${core.y + 4}, ${core.x - 4} ${core.y + 2}, ${core.x - 16} ${core.y}
            C ${core.x - 4} ${core.y - 2}, ${core.x - 2} ${core.y - 4}, ${core.x} ${core.y - 16} Z`}
        fill="var(--eg-accent)"
      />
    </svg>
  );
};

// A business web app: navigation, summary tiles and a task list.
const WebAppVisual = () => (
  <div className="flex h-full w-full flex-col overflow-hidden rounded-xl border border-ink-line bg-ink-900">
    <div className="flex items-center gap-3 border-b border-ink-line px-3.5 py-2.5">
      <Dots />
      <span className="h-4 flex-1 rounded-full bg-ink-800 sm:max-w-[240px]" />
    </div>
    <div className="flex flex-1 gap-3 p-3.5">
      <div className="hidden w-[22%] flex-col gap-2.5 border-r border-ink-line pr-3 sm:flex">
        <Bar className="eg-accent-bg w-4/5 opacity-80" />
        <Bar className="w-3/5" />
        <Bar className="w-4/5" />
        <Bar className="w-1/2" />
      </div>
      <div className="flex flex-1 flex-col gap-2.5">
        {[0.85, 0.6, 0.72].map((w, i) => (
          <div key={w} className="flex items-center gap-3 rounded-lg border border-ink-line bg-ink-850 px-3 py-2">
            <span
              className={cn(
                'grid h-3.5 w-3.5 shrink-0 place-items-center rounded-[4px] border',
                i === 0 ? 'eg-accent-border eg-accent-soft' : 'border-ink-600'
              )}
            />
            <span className="block h-1.5 rounded-full bg-ink-600" style={{ width: `${w * 45}%` }} />
            <span
              className={cn('eg-svc-grow ml-auto h-1.5 w-10 rounded-full', i === 0 ? 'eg-accent-bg' : 'bg-ink-700')}
              style={{ animationDelay: `${i * 300}ms` }}
            />
            <span className="hidden h-1.5 w-8 rounded-full bg-ink-700 sm:block" />
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Steady heartbeat line; chips quote "secure, stable, efficient" from the approved description.
const AppMaintenanceVisual = () => (
  <div className="flex h-full w-full flex-col justify-between gap-4 p-4">
    <svg viewBox="0 0 300 70" className="h-[70px] w-full" preserveAspectRatio="none">
      {[14, 35, 56].map((y) => (
        <line key={y} x1="0" x2="300" y1={y} y2={y} stroke={LINE} strokeDasharray="2 5" />
      ))}
      <polyline
        className="eg-svc-pulse-line"
        points="0,35 70,35 84,35 92,14 102,56 112,24 120,35 180,35 194,35 202,18 212,52 222,35 300,35"
        fill="none"
        stroke="var(--eg-accent)"
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
    <div className="flex flex-wrap gap-2">
      {['Secure', 'Stable', 'Efficient'].map((label) => (
        <span
          key={label}
          className="inline-flex items-center gap-1.5 rounded-full border border-ink-line bg-ink-850 px-2.5 py-1 text-[12px] font-medium text-mist-300"
        >
          <span className="eg-accent-bg h-1.5 w-1.5 rounded-full" />
          {label}
        </span>
      ))}
    </div>
  </div>
);

// Responsive preview: a desktop page with a phone version in front.
const WebsiteVisual = () => (
  <div className="relative h-full w-full p-4">
    <div className="flex h-full w-[82%] flex-col overflow-hidden rounded-xl border border-ink-line bg-ink-900">
      <div className="flex items-center gap-2 border-b border-ink-line px-3 py-2">
        <Dots />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-3">
        <Bar className="eg-accent-bg h-2 w-2/5 opacity-80" />
        <Bar className="w-3/5" />
        <div className="mt-auto grid grid-cols-3 gap-1.5">
          {[0, 1, 2].map((i) => (
            <span key={i} className="eg-svc-glow h-7 rounded-md bg-ink-800" style={{ animationDelay: `${i * 400}ms` }} />
          ))}
        </div>
      </div>
    </div>
    <div className="eg-svc-float absolute bottom-3 right-4 flex h-[78%] w-[26%] max-w-[72px] flex-col gap-1.5 rounded-[12px] border border-ink-600 bg-ink-850 p-1.5">
      <span className="mx-auto h-1 w-4 rounded-full bg-ink-600" />
      <Bar className="eg-accent-bg h-1.5 w-3/4 opacity-80" />
      <Bar className="w-1/2" />
      <span className="mt-auto h-5 rounded bg-ink-750" />
      <span className="h-5 rounded bg-ink-750" />
    </div>
  </div>
);

// Checklist quotes "performance, security, reliability, and adaptability" from the approved description.
const WebsiteMaintenanceVisual = () => (
  <ul className="flex h-full w-full flex-col justify-center divide-y divide-ink-line px-4">
    {['Performance', 'Security', 'Reliability', 'Adaptability'].map((label, i) => (
      <li key={label} className="flex items-center gap-2.5 py-2.5 text-[13px] text-mist-300">
        <CircleCheck
          className="eg-accent-text eg-svc-pop h-4 w-4 shrink-0"
          strokeWidth={1.75}
          style={{ animationDelay: `${i * 400}ms` }}
        />
        {label}
        <span
          className="eg-accent-bg eg-svc-led ml-auto h-1.5 w-1.5 rounded-full"
          style={{ animationDelay: `${i * 400}ms` }}
        />
      </li>
    ))}
  </ul>
);

// A domain address above a small rack of servers.
const DomainVisual = () => (
  <div className="flex h-full w-full flex-col justify-center gap-3 p-4">
    <div className="flex items-center gap-2 rounded-full border border-ink-line bg-ink-850 px-3 py-2">
      <Globe className="eg-accent-text h-4 w-4 shrink-0" strokeWidth={1.75} />
      <span className="text-[12px] font-medium text-mist-500">www.</span>
      <span className="eg-accent-soft h-2 w-20 rounded-full" />
      <span className="h-2 w-6 rounded-full bg-ink-700" />
    </div>
    {[0, 1, 2].map((i) => (
      <div key={i} className="flex items-center gap-2 rounded-lg border border-ink-line bg-ink-900 px-3 py-2">
        <span className="eg-accent-bg eg-svc-led h-1.5 w-1.5 rounded-full" style={{ animationDelay: `${i * 500}ms` }} />
        <span className="h-1.5 w-1.5 rounded-full bg-ink-600" />
        <span className="ml-auto flex gap-1">
          {[0, 1, 2, 3, 4].map((v) => (
            <span
              key={v}
              className="eg-svc-eq h-2.5 w-[3px] rounded-full bg-ink-700"
              style={{ animationDelay: `${((v * 3 + i * 2) % 5) * 140}ms` }}
            />
          ))}
        </span>
      </div>
    ))}
  </div>
);

// A phone with an app home screen, flanked by floating cards.
const MobileVisual = () => (
  <div className="relative flex h-full w-full items-center justify-center p-4">
    <span className="eg-svc-float absolute left-[8%] top-[24%] hidden h-9 w-[24%] max-w-[96px] rounded-lg border border-ink-line bg-ink-850 p-2 min-[400px]:block">
      <Bar className="eg-accent-bg w-3/5 opacity-80" />
      <Bar className="mt-1.5 w-4/5" />
    </span>
    <span
      className="eg-svc-float absolute bottom-[22%] right-[8%] hidden h-9 w-[24%] max-w-[96px] rounded-lg border border-ink-line bg-ink-850 p-2 min-[400px]:block"
      style={{ animationDelay: '-1.8s' }}
    >
      <Bar className="w-4/5" />
      <Bar className="mt-1.5 w-1/2" />
    </span>
    <div className="relative flex h-full max-h-[150px] w-[86px] flex-col gap-1.5 rounded-[18px] border border-ink-600 bg-ink-900 p-2">
      <span className="mx-auto h-1 w-6 rounded-full bg-ink-700" />
      <Bar className="mt-1 w-1/2" />
      <div className="grid grid-cols-2 gap-1.5">
        <span className="eg-accent-soft eg-accent-border eg-svc-led aspect-square rounded-md border" />
        <span className="aspect-square rounded-md bg-ink-800" />
        <span className="aspect-square rounded-md bg-ink-800" />
        <span className="aspect-square rounded-md bg-ink-800" />
      </div>
      <div className="mt-auto flex justify-around border-t border-ink-line pt-1.5">
        <span className="eg-accent-bg h-1.5 w-1.5 rounded-full" />
        <span className="h-1.5 w-1.5 rounded-full bg-ink-600" />
        <span className="h-1.5 w-1.5 rounded-full bg-ink-600" />
      </div>
    </div>
  </div>
);

// Connected devices around a central controller.
const IotVisual = () => {
  const hub = { x: 150, y: 80 };
  const devices = [
    { x: 46, y: 34 },
    { x: 40, y: 122 },
    { x: 254, y: 30 },
    { x: 262, y: 104 },
    { x: 150, y: 146 },
  ];
  return (
    <svg viewBox="0 0 300 160" className="h-full w-full" preserveAspectRatio="xMidYMid meet">
      {devices.map((d) => (
        <g key={`${d.x}-${d.y}`}>
          <line x1={hub.x} y1={hub.y} x2={d.x} y2={d.y} stroke={LINE} strokeWidth="1.5" />
          <line
            className="eg-svc-flow"
            x1={hub.x}
            y1={hub.y}
            x2={d.x}
            y2={d.y}
            stroke="var(--eg-accent)"
            strokeOpacity="0.6"
            strokeWidth="1.5"
          />
        </g>
      ))}
      {devices.map((d, i) => (
        <g key={`n-${d.x}-${d.y}`}>
          <rect x={d.x - 11} y={d.y - 11} width="22" height="22" rx="7" fill="#17181A" stroke={LINE} strokeWidth="1.5" />
          <circle
            className="eg-svc-led"
            cx={d.x}
            cy={d.y}
            r="3"
            fill="var(--eg-accent)"
            style={{ animationDelay: `${i * 350}ms` }}
          />
        </g>
      ))}
      {/* Controller chip with pins */}
      {[-12, 0, 12].map((o) => (
        <g key={o} stroke={LINE} strokeWidth="2" strokeLinecap="round">
          <line x1={hub.x + o} y1={hub.y - 28} x2={hub.x + o} y2={hub.y - 22} />
          <line x1={hub.x + o} y1={hub.y + 22} x2={hub.x + o} y2={hub.y + 28} />
          <line x1={hub.x - 28} y1={hub.y + o} x2={hub.x - 22} y2={hub.y + o} />
          <line x1={hub.x + 22} y1={hub.y + o} x2={hub.x + 28} y2={hub.y + o} />
        </g>
      ))}
      <rect
        x={hub.x - 22}
        y={hub.y - 22}
        width="44"
        height="44"
        rx="10"
        fill="#17181A"
        stroke="var(--eg-accent)"
        strokeOpacity="0.6"
      />
      <rect x={hub.x - 9} y={hub.y - 9} width="18" height="18" rx="4" fill="var(--eg-accent)" fillOpacity="0.85" />
    </svg>
  );
};

// A native desktop workstation: window chrome, side panel and a live chart.
const DesktopVisual = () => (
  <div className="flex h-full w-full items-center justify-center p-4">
    <div className="flex h-full w-full max-w-[300px] flex-col items-center">
      <div className="flex w-full flex-1 flex-col overflow-hidden rounded-lg border border-ink-600 bg-ink-900">
        <div className="flex items-center justify-between border-b border-ink-line px-2.5 py-1.5">
          <Dots />
          <span className="flex gap-1">
            <span className="h-1.5 w-3 rounded-sm bg-ink-700" />
            <span className="h-1.5 w-3 rounded-sm bg-ink-700" />
          </span>
        </div>
        <div className="flex flex-1 gap-2 p-2">
          <div className="flex w-1/4 flex-col gap-1.5 rounded-md bg-ink-850 p-1.5">
            <Bar className="eg-accent-bg w-4/5 opacity-80" />
            <Bar className="w-3/5" />
            <Bar className="w-2/3" />
          </div>
          <svg viewBox="0 0 120 50" className="flex-1 rounded-md bg-ink-850" preserveAspectRatio="none">
            <polyline
              className="eg-svc-pulse-line"
              points="0,40 18,32 34,36 52,20 70,26 88,12 104,18 120,8"
              fill="none"
              stroke="var(--eg-accent)"
              strokeWidth="2"
              strokeLinejoin="round"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>
      </div>
      <span className="h-3 w-3 bg-ink-700" />
      <span className="h-1.5 w-16 rounded-full bg-ink-700" />
    </div>
  </div>
);

// Purpose-built modules wired together into one system.
const CustomSoftwareVisual = () => {
  const modules = [
    { x: 30, y: 22, w: 70 },
    { x: 30, y: 98, w: 70 },
    { x: 200, y: 22, w: 70 },
    { x: 200, y: 98, w: 70 },
  ];
  const core = { x: 150, y: 80 };
  return (
    <svg viewBox="0 0 300 160" className="h-full w-full" preserveAspectRatio="xMidYMid meet">
      {modules.map((m) => {
        const mx = m.x < core.x ? m.x + m.w : m.x;
        const my = m.y + 20;
        const d = `M${mx} ${my} C ${(mx + core.x) / 2} ${my}, ${(mx + core.x) / 2} ${core.y}, ${core.x} ${core.y}`;
        return (
          <g key={`${m.x}-${m.y}`}>
            <path d={d} fill="none" stroke={LINE} strokeWidth="1.5" />
            <path className="eg-svc-flow" d={d} fill="none" stroke="var(--eg-accent)" strokeOpacity="0.55" strokeWidth="1.5" />
            <rect x={m.x} y={m.y} width={m.w} height="40" rx="9" fill="#17181A" stroke={LINE} strokeWidth="1.5" />
            <rect x={m.x + 10} y={m.y + 12} width={m.w * 0.5} height="5" rx="2.5" fill={NODE} />
            <rect x={m.x + 10} y={m.y + 23} width={m.w * 0.32} height="5" rx="2.5" fill={NODE} />
          </g>
        );
      })}
      <rect x={core.x - 20} y={core.y - 20} width="40" height="40" rx="11" fill="#17181A" stroke="var(--eg-accent)" strokeOpacity="0.6" />
      <circle className="eg-svc-halo" cx={core.x} cy={core.y} r="28" fill="none" stroke="var(--eg-accent)" />
      <path
        d={`M${core.x - 6} ${core.y - 6} l-5 6 l5 6 M${core.x + 6} ${core.y - 6} l5 6 l-5 6`}
        fill="none"
        stroke="var(--eg-accent)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

// Client requests pass through an API gateway to backend services. Labels quote the service's
// listed API styles (REST, gRPC, GraphQL).
const ApiVisual = () => (
  <div className="flex h-full w-full items-center gap-3 p-4">
    <div className="flex flex-1 flex-col gap-2">
      {['REST', 'gRPC', 'GraphQL'].map((label, i) => (
        <span
          key={label}
          className="flex items-center gap-2 rounded-lg border border-ink-line bg-ink-850 px-2.5 py-1.5 font-mono text-[11px] text-mist-300"
        >
          <span className="eg-accent-bg eg-svc-led h-1.5 w-1.5 shrink-0 rounded-full" style={{ animationDelay: `${i * 400}ms` }} />
          {label}
        </span>
      ))}
    </div>
    <svg viewBox="0 0 40 100" className="h-[70%] w-8 shrink-0" preserveAspectRatio="none" aria-hidden>
      {[18, 50, 82].map((y) => (
        <path key={y} className="eg-svc-flow" d={`M0 ${y} C 20 ${y}, 20 50, 40 50`} fill="none" stroke="var(--eg-accent)" strokeOpacity="0.6" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
      ))}
    </svg>
    <div className="eg-accent-border flex h-[78%] w-[34%] max-w-[110px] flex-col gap-1.5 rounded-xl border bg-ink-900 p-2">
      <span className="eg-accent-soft h-2 w-3/5 rounded-full" />
      {[0, 1, 2, 3].map((i) => (
        <span key={i} className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-ink-600" />
          <span className="eg-svc-grow h-1.5 flex-1 rounded-full bg-ink-700" style={{ animationDelay: `${i * 250}ms` }} />
        </span>
      ))}
    </div>
  </div>
);

// A delivery pipeline above a row of containers.
const CloudVisual = () => (
  <div className="flex h-full w-full flex-col justify-center gap-4 p-4">
    <div className="flex items-center">
      {['Build', 'Test', 'Deploy'].map((label, i) => (
        <React.Fragment key={label}>
          {i > 0 && <span className="eg-svc-grow eg-accent-bg h-[2px] flex-1 opacity-60" style={{ animationDelay: `${i * 300}ms` }} />}
          <span className="inline-flex items-center gap-1.5 rounded-full border border-ink-line bg-ink-850 px-2.5 py-1 text-[12px] font-medium text-mist-300">
            <CircleCheck className="eg-accent-text eg-svc-pop h-3.5 w-3.5" strokeWidth={1.75} style={{ animationDelay: `${i * 400}ms` }} />
            {label}
          </span>
        </React.Fragment>
      ))}
    </div>
    <div className="grid grid-cols-4 gap-2">
      {[0, 1, 2, 3].map((i) => (
        <div key={i} className="flex flex-col gap-1 rounded-lg border border-ink-line bg-ink-900 p-2">
          <span className={cn('h-1.5 w-1.5 rounded-full', i === 0 ? 'eg-accent-bg eg-svc-led' : 'bg-ink-600')} />
          <span className="h-1.5 w-full rounded-full bg-ink-700" />
          <span className="h-1.5 w-2/3 rounded-full bg-ink-700" />
        </div>
      ))}
    </div>
  </div>
);

// A design canvas: component frames, colour tokens and a cursor.
const DesignVisual = () => (
  <div className="relative flex h-full w-full gap-3 p-4">
    <div className="grid flex-1 grid-cols-2 grid-rows-2 gap-2">
      <span className="eg-accent-border eg-accent-soft col-span-2 rounded-lg border border-dashed" />
      <span className="rounded-lg border border-ink-line bg-ink-850" />
      <span className="rounded-lg border border-ink-line bg-ink-850" />
    </div>
    <div className="flex w-10 flex-col items-center justify-center gap-2 rounded-lg border border-ink-line bg-ink-900 py-2">
      <span className="eg-accent-bg h-4 w-4 rounded-full" />
      <span className="h-4 w-4 rounded-full bg-mist-300" />
      <span className="h-4 w-4 rounded-full bg-ink-600" />
      <span className="h-4 w-4 rounded-full bg-ink-750" />
    </div>
    <svg viewBox="0 0 24 24" className="eg-svc-float absolute left-[46%] top-[38%] h-5 w-5" aria-hidden>
      <path d="M4 3l15 7-6.5 2L10 19z" fill="var(--eg-accent)" stroke="#0c0d0e" strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  </div>
);

/** Every illustrated service: the homepage service icons plus the services only on /services. */
export type ServiceVisualKind = HomeService['icon'] | 'desktop' | 'custom-software' | 'api' | 'cloud' | 'design';

const visuals: Record<ServiceVisualKind, React.FC> = {
  ai: AiVisual,
  'web-app': WebAppVisual,
  'app-maintenance': AppMaintenanceVisual,
  website: WebsiteVisual,
  'website-maintenance': WebsiteMaintenanceVisual,
  domain: DomainVisual,
  mobile: MobileVisual,
  iot: IotVisual,
  desktop: DesktopVisual,
  'custom-software': CustomSoftwareVisual,
  api: ApiVisual,
  cloud: CloudVisual,
  design: DesignVisual,
};

export const ServiceVisual: React.FC<{ kind: ServiceVisualKind }> = ({ kind }) => {
  const Visual = visuals[kind];
  return <Visual />;
};
