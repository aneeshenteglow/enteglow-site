export interface IndustryDetail {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  iconName: string;
  category: 'industrial' | 'health' | 'finance' | 'enterprise';
  colorAccent: string;
  workflowSteps: string[];
  frictionBefore: string;
  solutionAfter: string;
  metricROI: string;
  supportedCapabilities: string[];
  useCases: string[];
  relevantTech: string[];
}
