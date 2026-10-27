'use client';

import React from 'react';
import Link from 'next/link';

export const ArchitectsAboutSection: React.FC = () => {
  return (
    <section className="py-section-padding-desktop bg-surface-container-lowest relative">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Text Content Column */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="mb-6 inline-block">
              <span className="font-label-md text-label-md uppercase tracking-widest text-outline">
                Who We Are
              </span>
            </div>
            <h2 className="font-display font-normal text-headline-lg text-on-surface mb-8">
              Architects of the Digital Enterprise
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
              We are a collective of senior engineers, product designers, and strategic thinkers. We approach technology not just as code, but as a critical lever for business growth.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant mb-10">
              Our methodology is rooted in rigorous technical standards and agile delivery, ensuring that complex challenges are met with elegant, sustainable solutions.
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-electric-blue mt-1">check_circle</span>
                <span className="font-body-md text-body-md text-on-surface">
                  Enterprise-grade architecture design.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-electric-blue mt-1">check_circle</span>
                <span className="font-body-md text-body-md text-on-surface">
                  Agile, transparent development cycles.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-electric-blue mt-1">check_circle</span>
                <span className="font-body-md text-body-md text-on-surface">
                  Post-deployment scaling and optimization.
                </span>
              </li>
            </ul>
            <Link
              href="/about"
              className="btn-primary font-label-md text-label-md px-8 py-4 uppercase tracking-wider font-semibold inline-block text-center"
            >
              Meet The Team
            </Link>
          </div>

          {/* Layered Visual Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 relative">
            <div className="relative w-full aspect-[4/3] max-w-2xl mx-auto lg:ml-auto">
              {/* Main Image */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10" />
                <img
                  alt="Team working in modern office"
                  className="w-full h-full object-cover grayscale-[20%]"
                  src="https://lh3.googleusercontent.com/aida/AP1WRLsflLpDiAR4CXjEHXOkGIEdFoiv1NLejryUBM7vQy_xdgBXOD5J1zr74BgFsF2o-R_83969ZxsajiA0bnXvKbTnE7R8-9kXgT7qT31M--NKADNCkqcr6ukSoyuvYyUl4I0LYhniCyUY94vXRg1CIsRMC69oecTamqJovWa2a1KRdVafyUO7U9-ZvGSpHkbvU3n4axCdierBJTaldzZjOw-bye1uwOksSiHK5Pz5TmDkqLj7pPzHb4RnCCKl"
                />
              </div>

              {/* Foreground Offset Secondary Image */}
              <div className="absolute -bottom-12 -left-12 w-64 h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-surface-container-lowest hidden md:block">
                <img
                  alt="Developer coding"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida/AP1WRLtHciTK-a0abNyRuN6fYU7J_D6VcTVfuqcv0KZqLGmJJMgEIq4BBvHgfcN592xATmWhBkA7fwPLJwh5ZMRvO9TBHGr920JY1Za7u7_JksfeGyg31AQVJiVEdplfpgdDSRdFIiNk7H_wFFGqFiK3jhpJfmex0J95MfKiGsN2Pkq3WXDNAMSJO1exqUVdMzPIq6LIaA4Y8YAFMb13XNpOq41K9GFgx1Juf17eaFDU672w5uF-xYG0W-hhCBU"
                />
              </div>

              {/* Floating Stat Card */}
              <div className="absolute top-12 -right-4 md:-right-8 glass-panel rounded-xl p-6 shadow-2xl">
                <div className="font-headline font-bold text-display-lg text-electric-blue leading-none mb-2">
                  15+
                </div>
                <div className="font-label-md text-label-md text-on-surface uppercase tracking-wider">
                  Years Experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
