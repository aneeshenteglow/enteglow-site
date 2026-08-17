import React from 'react';
import {
  Factory,
  Truck,
  ShoppingBag,
  HeartPulse,
  Zap,
  Sprout,
  Building,
  GraduationCap,
  Landmark,
  ShieldCheck,
  Cpu,
  Globe,
  Smartphone,
  Server,
  Cloud,
  Database,
  Code,
  Brain,
  Bot,
  BarChart,
  Layers,
  Settings,
  Radio,
  TrendingUp,
  FileCode,
  CheckCircle2,
  Lock,
  LucideIcon,
} from 'lucide-react';

const ICON_MAP: Record<string, LucideIcon> = {
  Factory,
  Truck,
  ShoppingBag,
  HeartPulse,
  Zap,
  Sprout,
  Building,
  GraduationCap,
  Landmark,
  ShieldCheck,
  Cpu,
  Globe,
  Smartphone,
  Server,
  Cloud,
  Database,
  Code,
  Brain,
  Bot,
  BarChart,
  Layers,
  Settings,
  Radio,
  TrendingUp,
  FileCode,
  CheckCircle2,
  Lock,
};

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
  const IconComponent = ICON_MAP[name] || Code;
  return <IconComponent className={className} size={size} />;
};
