export interface ProjectDetail {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: 'Web' | 'Mobile' | 'AI' | 'IoT' | 'Desktop';
  overview: string;
  problem: string;
  solution: string;
  architectureHighlights: string[];
  keyFeatures: string[];
  outcomes: string[];
  techStack: string[];
}
