'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/common/motion/ScrollReveal';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      'Enteglow transformed our legacy systems into a modern, highly scalable platform. Their engineering rigor is unmatched.',
    name: 'Sarah Jenkins',
    role: 'CTO, Nexus Corp',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBQ6HrZEReC57OoAnkGw07_d-XBDcf4TPBSweHoicE4JX4B5ZMT2xE3KOFMuUm2F5sRm2ijBdHqU4qgTeVNUE7az7MLelCLog9Xx7uoycs3ZyAgtKes8ctNgu-rqgEI5bQvxfo38PMYC8Qj-JCqnro7O9FgbMPUd4VuekwcY7OsVotM_oSPaJqioSdkidft1GteMP3UbwdxDAIwnrGllknOHVEozDLeZwBvYTt6o4d4wLWJP8RfFBao4A',
  },
  {
    quote:
      'The transition to their custom SaaS architecture reduced our operational overhead by 40% in the first quarter alone.',
    name: 'Marcus Chen',
    role: 'VP Engineering, DataFlow',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDDEv6NvJY9csn24yFR7ApKb0Bers37kaBnloJE0eRJ5wOsd4L_J_8hdpTquwMq5wwQ4POkN5-SSIgRBzDVQVP9SyTM5686TLrDTYDZIbqbP6BIQx_Pf_FAzkNM4uBFAyVE1UEKt0NZbIyfKJfmwQS8pQaOMG-88FqH-OzndbgWBuzLYWj8nTh8F7e0L2ZHNbS5by1_mqzZ0-VKO6G1a_adv5E9jZsNnYYlYNfg2LspLtS_Ip91kaeu7A',
  },
  {
    quote:
      "They didn't just build an app; they architected a complete telemetry solution that completely modernized our field operations.",
    name: 'Elena Rodriguez',
    role: 'Director of Ops, OmniTech',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAkpN8P1Z2SXui80IEZFiO81t5UcdjhHmIoqLt-nZw9Ozdx5jXkH5EbUsV6ir4AaOtSeK-nlWj6y_mNup2_fzVgXEmWvqaoTleJPWkPMmCcMkV5JKmELlDsmoTCNAQETURDxf872nFV_TR_7EXwiQTDWijtB7ANYrtq_WVNN-Z5BpGIMVyzOicT2W0AwWOL-TL6_1JpMYP955Gx6f2TPgoDItukG4VMX3y5Fp00t6hDM3aapu4NSzhvYw',
  },
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-section-padding-lg bg-background relative overflow-hidden border-b border-glass-border">
      <div className="max-w-container-max mx-auto px-gutter relative z-10">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-primary/20 text-primary text-xs uppercase tracking-widest font-semibold mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Executive Endorsements
            </div>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-4 text-on-surface">
              Trusted by Industry Leaders
            </h2>
            <p className="font-body-lg text-body-lg max-w-2xl mx-auto">
              Delivering high-impact technology solutions that drive real-world business results.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <ScrollReveal key={item.name} direction="up" delay={0.15 * (idx + 1)}>
              <motion.div
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="group glass-panel p-8 rounded-2xl flex flex-col h-full border border-glass-border hover:border-primary/40 transition-all duration-300 hover:shadow-[0_15px_30px_-10px_rgba(227,30,36,0.2)] relative overflow-hidden"
              >
                <div className="w-10 h-10 rounded-full bg-primary-container/10 border border-primary/30 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="material-symbols-outlined text-[24px]">format_quote</span>
                </div>

                <p className="font-body-md italic mb-8 flex-grow leading-relaxed">
                  &quot;{item.quote}&quot;
                </p>

                <div className="flex items-center gap-4 pt-4 border-t border-glass-border/60">
                  <img
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-primary/30 group-hover:border-primary transition-colors duration-300"
                    src={item.avatar}
                  />
                  <div>
                    <h4 className="text-on-surface font-headline-md text-[16px] font-bold group-hover:text-primary transition-colors duration-300">
                      {item.name}
                    </h4>
                    <p className="text-xs uppercase tracking-wider font-medium">
                      {item.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
