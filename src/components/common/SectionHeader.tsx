import React from 'react';
import { Badge } from './Badge';

interface SectionHeaderProps {
  badge?: string;
  badgeVariant?: 'primary' | 'cyan' | 'emerald' | 'violet' | 'neutral' | 'blue';
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  badgeVariant = 'primary',
  title,
  description,
  align = 'center',
  className = '',
}) => {
  const alignClasses = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`max-w-3xl mb-12 sm:mb-16 ${alignClasses} ${className}`}>
      {badge && (
        <div className="mb-4 inline-block">
          <Badge variant={badgeVariant}>{badge}</Badge>
        </div>
      )}
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-navy-900 leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
