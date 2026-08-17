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
      className={`glass-card rounded-2xl p-8 relative overflow-hidden ${
        hoverEffect ? 'hover:-translate-y-1 hover:shadow-glass-hover' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
};
