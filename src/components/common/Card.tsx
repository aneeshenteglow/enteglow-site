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
      className={`glass-panel rounded-xl p-8 relative overflow-hidden ${
        hoverEffect ? 'glow-hover' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
};
