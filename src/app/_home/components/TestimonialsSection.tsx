import React from 'react';
import Image from 'next/image';
import { Quote } from 'lucide-react';
import { testimonials } from '../data/homeContent';
import { Container, SectionIntro } from './primitives';

export const TestimonialsSection: React.FC = () => (
  <section aria-labelledby="testimonials-heading" className="py-24 lg:py-32">
    <Container>
      <SectionIntro id="testimonials-heading" eyebrow="Testimonials" title="What our clients say" />
      <div className="mt-14 grid grid-cols-1 gap-4 lg:grid-cols-2">
        {testimonials.map((t, i) => (
          <figure
            key={t.name}
            data-reveal
            style={{ '--eg-delay': `${i * 80}ms` } as React.CSSProperties}
            className="flex flex-col rounded-[24px] border border-ink-line bg-ink-800 p-7 sm:p-10"
          >
            <Quote aria-hidden className="h-8 w-8 text-brand-400" strokeWidth={1.5} />
            <blockquote className="mt-6 flex-1 text-lg leading-[1.6] tracking-[-0.01em] text-mist-200 sm:text-xl">
              <p>“{t.quote}”</p>
            </blockquote>
            <figcaption className="mt-8 flex items-center gap-4 border-t border-ink-line pt-6">
              <Image
                src={t.image}
                alt=""
                width={56}
                height={56}
                className="h-14 w-14 rounded-full border border-ink-700 object-cover"
              />
              <span>
                <span className="block font-semibold text-mist-100">{t.name}</span>
                <span className="block text-sm text-mist-500">{t.company}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Container>
  </section>
);
