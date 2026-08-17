import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: string;
  icon?: React.ReactNode;
  pulseDot?: boolean;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant,
  icon,
  pulseDot = true,
  className = '',
}) => {
  const variantStyles = variant === 'vibrant' || variant === 'violet' || variant === 'purple'
    ? 'border-vibrant-purple/30 text-vibrant-purple'
    : 'border-electric-blue/30 text-electric-blue';

  return (
    <div
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border font-label-md text-label-md uppercase tracking-wider ${variantStyles} ${className}`}
    >
      {pulseDot && <span className="w-2 h-2 rounded-full bg-vibrant-purple animate-pulse" />}
      {icon && <span className="inline-flex items-center">{icon}</span>}
      <span>{children}</span>
    </div>
  );
};
