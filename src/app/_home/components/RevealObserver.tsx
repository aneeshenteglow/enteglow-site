'use client';

import React, { useEffect } from 'react';

/** Reveals every `[data-reveal]` element on the homepage as it scrolls into view. */
export const RevealObserver: React.FC = () => {
  useEffect(() => {
    const root = document.documentElement;
    const targets = Array.from(document.querySelectorAll<HTMLElement>('.eg-home [data-reveal]'));

    if (!('IntersectionObserver' in window)) {
      targets.forEach((el) => el.setAttribute('data-revealed', ''));
      return;
    }

    root.classList.add('eg-reveal-ready');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-revealed', '');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );
    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
};
