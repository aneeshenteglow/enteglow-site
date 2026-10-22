import React from 'react';
import { techStack } from '../data/techStack';
import { Container, SectionIntro } from './primitives';

export const TechStackSection: React.FC = () => (
  <section aria-labelledby="tech-heading" className="border-y border-ink-line bg-ink-900 py-24 lg:py-32">
    <Container>
      <SectionIntro id="tech-heading" eyebrow="Technologies" title="Our Technology Stack" />
      <ul className="mt-14 grid grid-cols-4 gap-2 sm:gap-3 lg:grid-cols-8">
        {techStack.map((tech, i) => (
          <li
            key={tech.name}
            data-reveal
            style={{ '--eg-delay': `${(i % 8) * 40}ms` } as React.CSSProperties}
          >
            <div className="group flex h-full flex-col items-center justify-center gap-2.5 rounded-[14px] border border-ink-line bg-ink-800 px-1 py-5 sm:gap-3 sm:rounded-[18px] sm:px-2 sm:py-6 transition-colors duration-280 ease-standard hover:border-ink-600 hover:bg-ink-750">
              <svg
                viewBox="0 0 24 24"
                aria-hidden
                focusable="false"
                className="h-7 w-7 fill-mist-300 sm:h-8 sm:w-8 transition-colors duration-280 group-hover:fill-mist-100"
              >
                <path d={tech.path} />
              </svg>
              <span className="text-center text-[11px] font-medium sm:text-[13px] leading-tight text-mist-500 group-hover:text-mist-300">
                {tech.name}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </Container>
  </section>
);
