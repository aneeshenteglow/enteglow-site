import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  href,
  variant = 'primary',
  size = 'md',
  children,
  icon,
  iconPosition = 'right',
  className = '',
  ...props
}) => {
  const baseStyles =
    'group relative inline-flex items-center justify-center font-label-sm text-label-sm uppercase tracking-wider font-bold transition-all duration-300 active:scale-[0.97] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer rounded overflow-hidden';

  const sizeStyles = {
    sm: 'px-4 py-2 gap-1.5 text-xs',
    md: 'px-6 py-3 gap-2 text-sm',
    lg: 'px-8 py-4 gap-2.5 text-base',
  };

  const variantStyles = {
    primary:
      'bg-primary-container text-on-primary-container shimmer-btn hover:shadow-[0_0_25px_rgba(227,30,36,0.45)] hover:-translate-y-0.5',
    secondary:
      'glass-panel text-on-surface hover:border-primary hover:text-primary glow-hover hover:-translate-y-0.5',
    outline:
      'border border-primary/40 text-primary hover:bg-primary-container/10 hover:border-primary rounded hover:-translate-y-0.5',
    ghost: 'text-on-surface-variant hover:text-primary transition-colors',
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && (
        <span className="inline-flex items-center group-hover:-translate-x-0.5 transition-transform duration-300">
          {icon}
        </span>
      )}
      <span className="relative z-10">{children}</span>
      {icon && iconPosition === 'right' && (
        <span className="inline-flex items-center group-hover:translate-x-1 transition-transform duration-300">
          {icon}
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
};
