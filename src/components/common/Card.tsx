import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverEffect = true,
}) => {
  return (
    <div
      className={`bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 transition-all duration-300 relative overflow-hidden shadow-help ${
        hoverEffect
          ? 'hover:border-gold-400 hover:shadow-help-hover hover:-translate-y-1'
          : ''
      } ${className}`}
    >
      {children}
    </div>
  );
};
