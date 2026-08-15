import React from 'react';
import * as Icons from 'lucide-react';

interface DynamicIconProps {
  name: string;
  className?: string;
  size?: number;
}

export const DynamicIcon: React.FC<DynamicIconProps> = ({
  name,
  className = '',
  size = 24,
}) => {
  const iconMap = Icons as unknown as Record<string, React.ComponentType<{ className?: string; size?: number }>>;
  const IconComponent = iconMap[name] || Icons.Code;

  return <IconComponent className={className} size={size} />;
};
