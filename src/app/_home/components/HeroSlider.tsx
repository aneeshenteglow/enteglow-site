'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Playfair_Display } from 'next/font/google';
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { contact, heroSlides } from '../data/homeContent';
import { socialLinks } from '../data/socialLinks';
import { HeroVisual } from './HeroVisual';
import { cn } from '../cn';

// Editorial display serif for the hero headings only (matches the approved hero reference);
// the rest of the site stays on Inter per the brand book.
const displaySerif = Playfair_Display({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-hero-display',
});
const serif = '[font-family:var(--font-hero-display),Georgia,serif]';

const SLIDE_DURATION_MS = 6000;
const pad = (n: number) => String(n).padStart(2, '0');
const wrap = (i: number, n: number) => ((i % n) + n) % n;
const delay = (ms: number) => ({ '--eg-delay': `${ms}ms` }) as React.CSSProperties;

const controlClass =
  'grid h-11 w-11 place-items-center rounded-full text-mist-300 transition-colors duration-160 hover:text-brand-400';

export const HeroSlider: React.FC = () => {
  const count = heroSlides.length;
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  // Entrance animations only run after the first navigation, so the initial render paints immediately.
  const [animate, setAnimate] = useState(false);
  const [playing, setPlaying] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [docHidden, setDocHidden] = useState(false);
  // Photos are mounted for the current and next slide only, then kept.
  const [loaded, setLoaded] = useState<ReadonlySet<number>>(() => new Set([0, 1]));
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) setPlaying(false);
    const onVisibility = () => setDocHidden(document.hidden);
    document.addEventListener('visibilitychange', onVisibility);
    return () => document.removeEventListener('visibilitychange', onVisibility);
  }, []);

  useEffect(() => {
    const next = wrap(index + 1, count);
    setLoaded((prev) =>
      prev.has(index) && prev.has(next) ? prev : new Set(Array.from(prev).concat(index, next))
    );
  }, [index, count]);

  const goTo = (target: number, dir?: 1 | -1) => {
    const next = wrap(target, count);
    if (next === index) return;
    setDirection(dir ?? (next > index ? 1 : -1));
    setIndex(next);
    setAnimate(true);
  };
  const goNext = () => goTo(index + 1, 1);
  const goPrev = () => goTo(index - 1, -1);

  const paused = !playing || hovered || focused || docHidden;

  const onTabKeyDown = (e: React.KeyboardEvent) => {
    const keys: Record<string, number> = {
      ArrowRight: index + 1,
      ArrowDown: index + 1,
      ArrowLeft: index - 1,
      ArrowUp: index - 1,
      Home: 0,
      End: count - 1,
    };
    if (!(e.key in keys)) return;
    e.preventDefault();
    const next = wrap(keys[e.key], count);
    goTo(next);
    tabRefs.current[next]?.focus();
  };

  const prevSlide = heroSlides[wrap(index - 1, count)];
  const current = heroSlides[index];
  const nextSlide = heroSlides[wrap(index + 1, count)];

  return (
    <section
      aria-labelledby="hero-heading"
      aria-roledescription="carousel"
      data-animate={animate}
      style={{ '--eg-dir': direction } as React.CSSProperties}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setFocused(false);
      }}
      className={`${displaySerif.variable} eg-hero relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-ink-950`}
    >
      <h1 id="hero-heading" className="sr-only">
        Enteglow: technology with purpose
      </h1>

      {/* Central visual per slide, blended into the dark canvas */}
      <div aria-hidden className="absolute inset-0 -z-10">
        {heroSlides.map((slide, i) => (
          <div key={slide.id} data-active={i === index} className="eg-hero-visual absolute inset-0">
            {slide.image ? (
              <div
                className="eg-hero-photo absolute inset-y-0 left-1/2 aspect-[16/9] h-full"
                style={{ transform: `translateX(-${slide.image.focusX * 100}%)` }}
              >
                {loaded.has(i) && (
                  <div className="eg-kenburns absolute inset-0">
                    <Image
                      src={slide.image.src}
                      alt=""
                      fill
                      priority={i === 0}
                      sizes="(max-aspect-ratio: 16/9) 178vh, 100vw"
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
            ) : (
              <div className="eg-hero-svg absolute left-1/2 top-1/2 w-[min(92vw,640px)] -translate-x-1/2 -translate-y-1/2 opacity-60">
                <div className="eg-kenburns">
                  <HeroVisual kind={slide.visual} />
                </div>
              </div>
            )}
          </div>
        ))}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,rgba(7,7,8,0.25)_0%,rgba(7,7,8,0.72)_55%,#070708_88%)]" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink-950/80 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink-950 to-transparent" />
        <div className="absolute inset-0 bg-ink-950/45 md:hidden" />
      </div>

      {/* Concentric outlines */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[150vw] w-[150vw] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06] md:h-[128vh] md:w-[128vh]" />
        <div className="absolute left-1/2 top-1/2 h-[88vw] w-[88vw] -translate-x-1/2 -translate-y-1/2 md:h-[68vh] md:w-[68vh]">
          <div className="eg-ring-spin relative h-full w-full rounded-full border border-white/[0.11]">
            <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-400 shadow-[0_0_16px_rgba(240,106,79,0.8)]" />
          </div>
        </div>
      </div>

      {/* Left rail: scroll cue and social links */}
      <div className="absolute bottom-0 left-0 top-24 z-10 hidden w-[72px] flex-col items-center border-r border-white/[0.06] pb-8 pt-6 xl:flex">
        <div aria-hidden className="flex flex-col items-center">
          <span className="relative h-7 w-[18px] rounded-full border border-mist-500">
            <span className="eg-scroll-dot absolute left-1/2 top-1.5 h-1.5 w-[2px] -translate-x-1/2 rounded-full bg-mist-300" />
          </span>
          <span className="mt-4 h-14 w-px bg-white/15" />
          <span className="mt-4 rotate-180 text-[10px] font-semibold uppercase tracking-[0.3em] text-mist-500 [writing-mode:vertical-rl]">
            Scroll
          </span>
        </div>
        <ul className="mt-auto flex flex-col gap-1" aria-label="Enteglow on social media">
          {socialLinks.map((s) => (
            <li key={s.name}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Enteglow on ${s.name} (opens in a new tab)`}
                className="grid h-10 w-10 place-items-center text-mist-500 transition-colors duration-160 hover:text-mist-100"
              >
                <svg viewBox="0 0 24 24" aria-hidden className="h-4 w-4 fill-current">
                  <path d={s.path} />
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Rotated service labels: previous, current, next */}
      <div aria-hidden className="eg-hero-rail absolute bottom-36 left-[100px] top-40 z-10 flex-col justify-between">
        {[prevSlide, current, nextSlide].map((slide, i) => (
          <div key={`${slide.id}-${i}-${index}`} className="eg-rail-item flex items-end gap-3">
            <span className={cn('bg-brand-500', i === 1 ? 'h-10 w-[5px]' : 'h-5 w-[3px] opacity-60')} />
            {/* In vertical writing mode flex-col sets the two lines side by side. */}
            <span className="flex rotate-180 flex-col gap-1.5 [writing-mode:vertical-rl]">
              <span
                className={cn(
                  'max-h-[190px] overflow-hidden text-ellipsis whitespace-nowrap text-[13px] font-semibold',
                  i === 1 ? 'text-mist-100' : 'text-mist-500'
                )}
              >
                {slide.title}
              </span>
              <span className="max-h-[170px] overflow-hidden text-ellipsis whitespace-nowrap text-[11px] text-mist-600">
                {slide.subtitle}
              </span>
            </span>
          </div>
        ))}
      </div>

      {/* Large slide number */}
      <div aria-hidden className="eg-hero-num pointer-events-none absolute inset-x-0 top-24 z-10">
        <div className="mx-auto flex max-w-[1240px] justify-end px-8">
          <div className="flex items-start gap-3 overflow-hidden">
            <span
              key={index}
              className={`eg-num block ${serif} text-[7.5rem] font-normal leading-none tracking-[-0.02em] text-mist-100 [font-variant-numeric:lining-nums_tabular-nums]`}
            >
              {pad(index + 1)}
            </span>
            <span className="mt-5 text-sm font-medium text-mist-600">/ {pad(count)}</span>
          </div>
        </div>
      </div>

      {/* Slides */}
      <div
        aria-live={paused ? 'polite' : 'off'}
        className="relative z-10 flex flex-1 flex-col justify-center pb-28 pt-28 md:pb-32"
      >
        <div className="mx-auto grid w-full max-w-[1240px] grid-cols-1 px-4 sm:px-6 md:px-16 xl:px-[180px]">
          {heroSlides.map((slide, i) => {
            const active = i === index;
            const primaryHref = slide.href ?? contact.contactPage;
            return (
              <div
                key={slide.id}
                id={`hero-slide-${slide.id}`}
                role="tabpanel"
                aria-roledescription="slide"
                aria-labelledby={`hero-tab-${slide.id}`}
                data-active={active}
                className="eg-slide flex flex-col"
              >
                <div className="flex flex-col md:items-center md:text-center">
                  <p
                    data-slide-item
                    className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.24em] text-mist-300 sm:text-xs"
                  >
                    <span aria-hidden className="text-base font-normal text-brand-400">
                      +
                    </span>
                    Our Services
                    <span aria-hidden className="text-base font-normal text-brand-400">
                      +
                    </span>
                  </p>
                  <div className="md:inline-flex md:flex-col md:items-center">
                    <h2
                      data-slide-item
                      style={delay(90)}
                      className={`mt-5 max-w-[14ch] ${serif} text-[clamp(2.75rem,7.4vw,6.75rem)] font-normal leading-[0.95] tracking-[-0.02em] text-mist-100`}
                    >
                      {slide.title}
                    </h2>
                    <p
                      data-slide-item
                      style={delay(180)}
                      className={`mt-5 inline-block bg-ink-700/80 px-4 py-1.5 ${serif} text-[19px] italic text-mist-200 md:-mt-1 md:translate-x-[6%] md:self-end md:text-[26px]`}
                    >
                      {slide.subtitle}
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-6 md:ml-auto md:mt-14 md:max-w-[470px] md:flex-row-reverse md:items-center md:gap-8">
                  <div data-slide-item style={delay(270)} className="md:flex-1">
                    <span aria-hidden className="mb-4 block h-[3px] w-8 bg-brand-500" />
                    <p className="text-[15px] leading-[1.7] text-mist-300">{slide.description}</p>
                    {slide.href && (
                      <Link
                        href={contact.contactPage}
                        className="mt-4 hidden items-center gap-1.5 text-sm font-semibold text-mist-100 transition-colors duration-160 hover:text-brand-400 md:inline-flex"
                      >
                        Let&apos;s Talk <ArrowRight aria-hidden className="h-4 w-4" />
                      </Link>
                    )}
                  </div>
                  <div data-slide-item style={delay(360)} className="flex items-center gap-5">
                    <Link
                      href={primaryHref}
                      className="eg-cta-circle relative grid h-[76px] w-[76px] shrink-0 place-items-center rounded-full bg-brand-500 text-[13px] font-semibold text-white"
                    >
                      {slide.href ? 'Explore' : 'Enquire'}
                      <span className="sr-only">: {slide.href ? slide.title : 'contact Enteglow'}</span>
                    </Link>
                    {slide.href && (
                      <Link
                        href={contact.contactPage}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-mist-100 md:hidden"
                      >
                        Let&apos;s Talk <ArrowRight aria-hidden className="h-4 w-4" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom bar: progress line and controls */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-20 md:h-24">
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-[2px] overflow-hidden bg-white/10 md:bottom-1/2 md:left-1/2 md:right-auto md:w-60 md:-translate-x-1/2"
        >
          <span
            // Restarted on every slide change, so manual navigation resets the autoplay timer.
            key={`${index}-${playing}`}
            className="eg-progress block h-full w-full bg-brand-500"
            data-paused={paused}
            style={{ '--eg-duration': `${SLIDE_DURATION_MS}ms` } as React.CSSProperties}
            onAnimationEnd={goNext}
          />
        </div>
        <div className="mx-auto flex h-full max-w-[1240px] items-center justify-end px-4 sm:px-6 lg:px-8">
          <div className="pointer-events-auto flex items-center gap-1">
            <span aria-hidden className="eg-hero-counter mr-3 text-xs font-semibold tabular-nums text-mist-500">
              {pad(index + 1)} / {pad(count)}
            </span>
            <button type="button" onClick={goPrev} aria-label="Previous slide" className={controlClass}>
              <ChevronLeft aria-hidden className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => setPlaying((p) => !p)}
              aria-label={playing ? 'Pause automatic slide rotation' : 'Start automatic slide rotation'}
              className="grid h-11 w-11 place-items-center rounded-full border border-mist-600 text-mist-100 transition-colors duration-160 hover:border-brand-400"
            >
              {playing ? <Pause aria-hidden className="h-4 w-4" /> : <Play aria-hidden className="h-4 w-4" />}
            </button>
            <button type="button" onClick={goNext} aria-label="Next slide" className={controlClass}>
              <ChevronRight aria-hidden className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Slide indicators: bottom-left on mobile, vertical on the right edge from md */}
      <div
        role="tablist"
        aria-label="Choose a service slide"
        className="absolute bottom-0 left-4 z-20 flex h-20 items-center sm:left-6 md:bottom-auto md:left-auto md:right-5 md:top-1/2 md:h-auto md:-translate-y-1/2 md:flex-col md:gap-1"
      >
        {heroSlides.map((slide, i) => {
          const active = i === index;
          return (
            <button
              key={slide.id}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              id={`hero-tab-${slide.id}`}
              type="button"
              role="tab"
              aria-selected={active}
              aria-controls={`hero-slide-${slide.id}`}
              aria-label={`${pad(i + 1)}: ${slide.title}`}
              tabIndex={active ? 0 : -1}
              onClick={() => goTo(i)}
              onKeyDown={onTabKeyDown}
              className="group grid h-11 w-8 place-items-center md:h-8"
            >
              <span
                aria-hidden
                className={cn(
                  'grid place-items-center rounded-full transition-all duration-280 ease-standard',
                  active ? 'h-4 w-4 border border-brand-400' : 'h-1.5 w-1.5 bg-mist-500 group-hover:bg-mist-100'
                )}
              >
                {active && <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
};
