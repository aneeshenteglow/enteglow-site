export type HeroVisualKind = 'ai' | 'web-app' | 'app-maintenance' | 'website-maintenance' | 'mobile';

export interface HeroSlide {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  visual: HeroVisualKind;
  /** Photo from the current enteglow.com banners; focusX (0–1) is the subject's horizontal position. */
  image?: { src: string; focusX: number };
  /** Existing destination for this service, if one exists. */
  href?: string;
}

export interface AboutCard {
  id: string;
  title: string;
  subtitle: string;
  category: 'Development' | 'Maintenance';
  image: { src: string; focusX: number };
  href?: string;
}

export interface HomeService {
  title: string;
  /** Approved one-line positioning, where the source content provides one. */
  tagline?: string;
  /** Approved long-form description, where the source content provides one. */
  description?: string;
  icon: 'ai' | 'web-app' | 'app-maintenance' | 'website' | 'website-maintenance' | 'domain' | 'mobile' | 'iot';
  href?: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  company: string;
  image: string;
}

export interface InfrastructureSolution {
  title: string;
  icon: 'crm' | 'camera' | 'weighbridge';
}

export interface TechItem {
  name: string;
  path: string;
}

export interface SocialLink {
  name: string;
  href: string;
  path: string;
}

export interface NavItem {
  href: string;
  label: string;
}
