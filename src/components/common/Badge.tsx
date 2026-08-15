import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'cyan' | 'emerald' | 'violet' | 'neutral' | 'blue';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  className = '',
}) => {
  const variantStyles = {
    primary: 'bg-gold-100 text-gold-700 border-gold-300',
    cyan: 'bg-cyan-50 text-cyan-700 border-cyan-200',
    emerald: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    violet: 'bg-purple-50 text-purple-700 border-purple-200',
    blue: 'bg-blue-50 text-blue-700 border-blue-200',
    neutral: 'bg-slate-100 text-navy-800 border-slate-200',
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border tracking-wide transition-colors ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
