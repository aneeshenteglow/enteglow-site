'use client';

import React, { useEffect, useRef, useState, memo } from 'react';
import { useInView } from 'framer-motion';

interface AnimatedCounterProps {
  value: string; // e.g. "45+", "95%+", "100%", "100+"
  duration?: number; // seconds
  className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = memo(({
  value,
  duration = 2,
  className = '',
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [displayValue, setDisplayValue] = useState('0');

  // Extract number and suffix/prefix (e.g. "45+", "95%+", "100%")
  const numericMatch = value.match(/\d+/);
  const targetNumber = numericMatch ? parseInt(numericMatch[0], 10) : 0;
  const prefix = value.substring(0, numericMatch?.index ?? 0);
  const suffix = value.substring((numericMatch?.index ?? 0) + (numericMatch ? numericMatch[0].length : 0));

  useEffect(() => {
    if (!isInView || targetNumber === 0) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      
      // Easing function (easeOutExpo)
      const easeOutProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentCount = Math.floor(easeOutProgress * targetNumber);
      
      setDisplayValue(currentCount.toString());

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setDisplayValue(targetNumber.toString());
      }
    };

    window.requestAnimationFrame(step);
  }, [isInView, targetNumber, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {isInView ? displayValue : '0'}
      {suffix}
    </span>
  );
});

AnimatedCounter.displayName = 'AnimatedCounter';
