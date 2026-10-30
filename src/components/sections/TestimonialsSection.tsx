'use client';

import React from 'react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="scroll-mt-24 py-section-padding-desktop bg-background">
      <div className="max-w-container-max mx-auto px-gutter">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display font-normal text-headline-lg text-on-surface mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Delivering high-impact technology solutions that drive measurable business outcomes.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="glass-card p-8 rounded-2xl relative">
            <span className="material-symbols-outlined text-4xl text-outline-variant/30 absolute top-8 right-8">
              format_quote
            </span>
            <div className="flex items-center gap-4 mb-6">
              <img
                alt="Sarah Jenkins"
                className="w-16 h-16 rounded-full object-cover border-2 border-electric-blue p-1"
                src="https://lh3.googleusercontent.com/aida/AP1WRLtz8L5KrnL_gvu2G5wZpyJ1CrVrYMAdhwZ9FLTfnrGCTo_L7Fzuh5JnhEfolVxQB1lLWT-vQC6C0Fc3NPZPI4z3LFrJqYilz1ISeWMo1xEXDByUv01Uf0uETrWgL8tAeJKz1YiKgP6wV8MyI1aXkvkSro_4pnbWQBLtENZWyQBusWEoxUmQqPvccQeN1JeAVo2jU6PaMMPOF0OGX8CRdY7nrb8-nLPzdnfcStVvJomEhscWir2BdnbnqoX0"
              />
              <div>
                <h4 className="font-headline font-semibold text-[20px] text-on-surface m-0 leading-tight">
                  Sarah Jenkins
                </h4>
                <p className="font-label-md text-label-md text-outline">CTO, Nexus Corp</p>
              </div>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant italic">
              &quot;Enteglow didn&apos;t just build our application; they re-architected our entire digital approach. Their technical rigor is unmatched.&quot;
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="glass-card p-8 rounded-2xl relative">
            <span className="material-symbols-outlined text-4xl text-outline-variant/30 absolute top-8 right-8">
              format_quote
            </span>
            <div className="flex items-center gap-4 mb-6">
              <img
                alt="Marcus Thorne"
                className="w-16 h-16 rounded-full object-cover border-2 border-electric-blue p-1"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-DQScKjWy9Zdc-wJ8UDahasNMHWpw89lZezxofteBSXlSdJx4Tcm8wtlqcfKvBc0ZYMlkIlcXi8mI50-xebwSWVbsHi_HdG7KlJYZaFKiTr9oPaAXtrJ1z5bh12-kHXamPjtkAR1EYCaeVIuY6ixwaU0Y8ABa-jAgpbW7pW1iOMCLpaZ8x6NVZG3ownkS_Dl9lHWfMtTKMSdJTus3fm_0EDECeMaBXTcCwUBAv7buQBQ64NNbyCdVlA"
              />
              <div>
                <h4 className="font-headline font-semibold text-[20px] text-on-surface m-0 leading-tight">
                  Marcus Thorne
                </h4>
                <p className="font-label-md text-label-md text-outline">VP Engineering</p>
              </div>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant italic">
              &quot;The transition to a custom cloud infrastructure handled by Enteglow reduced our latency by 40% globally. Exceptional execution.&quot;
            </p>
          </div>

          {/* Testimonial 3 */}
          <div className="glass-card p-8 rounded-2xl relative hidden lg:block">
            <span className="material-symbols-outlined text-4xl text-outline-variant/30 absolute top-8 right-8">
              format_quote
            </span>
            <div className="flex items-center gap-4 mb-6">
              <img
                alt="Elena Rostova"
                className="w-16 h-16 rounded-full object-cover border-2 border-electric-blue p-1"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDefoQI0_Y3nAGclNmiqUVoz_lEYcch2L-LM0H_xPSuOzjOU5d6XS537hFNDTvBLBQvNc92ARBGr6j_ht3AQF26ShaAhLcarXPhZ0lmWhND9kmhcZJrzpt5KFjM_GopuPUXV9HjfhgCHMcu3wZ4D3HvGPcwu30sPRRRSi4z2Lrr-5Jvcg9RXTy7rSzyH_w6gRj8pib4I2F3iDFL7iPFYmbYGWfAdP8qDHDeEaSjhuJCtcqF2OO7_9_dWQ"
              />
              <div>
                <h4 className="font-headline font-semibold text-[20px] text-on-surface m-0 leading-tight">
                  Elena Rostova
                </h4>
                <p className="font-label-md text-label-md text-outline">Founder, DataStream</p>
              </div>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant italic">
              &quot;Their AI integration team seamlessly embedded predictive models into our legacy systems without disrupting daily operations.&quot;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
