'use client';

import React from 'react';

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
    <section className="py-section-padding-lg bg-background">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-4 text-on-surface">
            Trusted by Industry Leaders
          </h2>
          <p className="text-on-surface-variant font-body-lg text-body-lg max-w-2xl mx-auto">
            Delivering high-impact technology solutions that drive real-world business results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <div
              key={item.name}
              className={`glass-panel p-8 rounded-xl glow-hover flex flex-col stagger-${idx + 1}`}
            >
              <span className="material-symbols-outlined text-primary text-[32px] mb-6 opacity-50">
                format_quote
              </span>
              <p className="text-on-surface-variant font-body-md italic mb-8 flex-grow leading-relaxed">
                &quot;{item.quote}&quot;
              </p>
              <div className="flex items-center gap-4">
                <img
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border border-glass-border"
                  src={item.avatar}
                />
                <div>
                  <h4 className="text-on-surface font-headline-md text-[16px] font-bold">
                    {item.name}
                  </h4>
                  <p className="text-on-surface-variant text-xs uppercase tracking-wider">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
