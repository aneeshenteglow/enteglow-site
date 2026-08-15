export interface TechItem {
  name: string;
  level: 'Primary Stack' | 'Production' | 'Specialized';
  description: string;
}

export interface TechnologyCategory {
  category: string;
  description: string;
  items: TechItem[];
}
