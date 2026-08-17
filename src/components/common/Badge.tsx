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
  icon,
  pulseDot = true,
  className = '',
}) => {
  return (
    <div
      className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-primary/20 text-primary font-label-sm text-label-sm uppercase tracking-widest ${className}`}
    >
      {pulseDot && <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />}
      {icon && <span className="inline-flex items-center text-[14px]">{icon}</span>}
      <span>{children}</span>
    </div>
  );
};
