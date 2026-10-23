// Homepage copy from the approved "enteglow-contents-Home-Page" document.
// Only punctuation and spelling slips were corrected; wording is unchanged.
import type {
  AboutCard,
  HeroSlide,
  HomeService,
  InfrastructureSolution,
  NavItem,
  Testimonial,
} from '../types';

// Existing /services page anchors (src/app/services/services/servicesData.ts ids).
const SERVICE_LINKS = {
  ai: '/services#ai-agents',
  webApp: '/services#web-applications',
  website: '/services#websites',
  mobile: '/services#mobile-applications',
  iot: '/services#iot-solutions',
} as const;

export const contact = {
  // As published on https://enteglow.com/
  phoneDisplay: '+91 94956 34648',
  phoneHref: 'tel:+919495634648',
  email: 'info@enteglow.com',
  contactPage: '/contact',
};

// Same destinations as the shared Header; the Services entry gains a dropdown.
export const homeNav: NavItem[] = [
  { href: '/about', label: 'Company' },
  { href: '/services', label: 'Services' },
  { href: '/industries', label: 'Industries' },
  { href: '/projects', label: 'Case Studies' },
  { href: '/process', label: 'Resources' },
];

export const servicesMenu: NavItem[] = [
  { href: SERVICE_LINKS.ai, label: 'AI Application Development' },
  { href: SERVICE_LINKS.webApp, label: 'Web Application Development' },
  { href: SERVICE_LINKS.website, label: 'Website Development' },
  { href: SERVICE_LINKS.mobile, label: 'Mobile App Development' },
  { href: SERVICE_LINKS.iot, label: 'IoT Application Development' },
];

export const heroSlides: HeroSlide[] = [
  {
    id: 'ai-application-development',
    title: 'AI Application Development',
    subtitle: 'AI-Driven Solutions',
    description:
      'We develop Artificial Intelligence (AI)-powered applications that help businesses streamline operations, boost efficiency, and solve complex challenges to drive sustainable growth.',
    visual: 'ai',
    image: { src: '/images/home/hero-ai.jpg', focusX: 0.78 },
    href: SERVICE_LINKS.ai,
  },
  {
    id: 'web-application-development',
    title: 'Web Application Development',
    subtitle: 'Solutions for Business Processes',
    description:
      'We offer solutions to enhance and streamline diverse processes within an organisation, promoting efficiency and optimization. We specialise in creating innovative custom software applications that meet unique business needs.',
    visual: 'web-app',
    image: { src: '/images/home/hero-web-app.png', focusX: 0.68 },
    href: SERVICE_LINKS.webApp,
  },
  {
    id: 'application-maintenance',
    title: 'Application Maintenance',
    subtitle: 'Solutions for Seamless Application Performance',
    description:
      'We ensure software applications remain secure, stable, efficient, and aligned with evolving business requirements. Our team proactively addresses emerging challenges, optimizes application performance.',
    visual: 'app-maintenance',
    image: { src: '/images/home/hero-app-maintenance.png', focusX: 0.74 },
  },
  {
    id: 'website-maintenance',
    title: 'Website Maintenance',
    subtitle: 'Solutions for Smooth & Reliable Performance',
    description:
      'Don’t have an in-house technical team to manage your website? We’ve got you covered. We ensure continuous performance, security, reliability, and adaptability through proactive monitoring.',
    visual: 'website-maintenance',
    image: { src: '/images/home/hero-website-maintenance.png', focusX: 0.7 },
  },
  {
    id: 'mobile-app-development',
    title: 'Mobile App Development',
    subtitle: 'Next-Gen Mobile Solutions for Business Growth',
    description:
      'We engineer custom mobile apps built for effortless user experiences, efficient operations, and long-term business growth.',
    visual: 'mobile',
    href: SERVICE_LINKS.mobile,
  },
];

export const about = {
  heading: 'Cultivating Possibilities. Creating Innovation',
  body: 'We are tech enthusiasts committed to leveraging cutting-edge technology to transform business concepts into successful business models. At Enteglow, we combine creativity, technical expertise, and experience to develop unique, seamless, and innovative technology solutions.',
  statements: ['Technology with purpose', 'Engineering ideas into impact', 'TechSynergy in Action'],
};

// The source document's About block has no fourth highlight, so the About cards reuse the four
// banner services that have approved photography. Copy comes straight from `heroSlides`.
const aboutCardCategory: Record<string, AboutCard['category']> = {
  'ai-application-development': 'Development',
  'web-application-development': 'Development',
  'application-maintenance': 'Maintenance',
  'website-maintenance': 'Maintenance',
};

export const aboutCards: AboutCard[] = heroSlides.flatMap((slide) => {
  const category = aboutCardCategory[slide.id];
  return category && slide.image
    ? [{ id: slide.id, title: slide.title, subtitle: slide.subtitle, category, image: slide.image, href: slide.href }]
    : [];
});

// Long-form service copy lives on the hero slides; reuse it rather than duplicating approved text.
const slideDescription = (id: string) => heroSlides.find((slide) => slide.id === id)?.description;

export const services: HomeService[] = [
  {
    title: 'AI Application Development',
    tagline: 'AI-Driven Solutions',
    description: slideDescription('ai-application-development'),
    icon: 'ai',
    href: SERVICE_LINKS.ai,
  },
  {
    title: 'Web Application Development',
    tagline: 'Solutions for Business Processes',
    description: slideDescription('web-application-development'),
    icon: 'web-app',
    href: SERVICE_LINKS.webApp,
  },
  {
    title: 'Application Maintenance',
    tagline: 'Solutions for Seamless Application Performance',
    description: slideDescription('application-maintenance'),
    icon: 'app-maintenance',
  },
  // Tagline from the current enteglow.com homepage banner; awaiting approved description.
  { title: 'Website Development', tagline: 'Go global, get noticed', icon: 'website', href: SERVICE_LINKS.website },
  {
    title: 'Website Maintenance',
    tagline: 'Solutions for Smooth & Reliable Performance',
    description: slideDescription('website-maintenance'),
    icon: 'website-maintenance',
  },
  // Awaiting approved tagline.
  { title: 'Domain Registration & Hosting', icon: 'domain' },
  {
    title: 'Mobile App Development',
    tagline: 'Next-Gen Mobile Solutions for Business Growth',
    description: slideDescription('mobile-app-development'),
    icon: 'mobile',
    href: SERVICE_LINKS.mobile,
  },
  // Awaiting approved tagline.
  { title: 'IoT Application Development', icon: 'iot', href: SERVICE_LINKS.iot },
];

// The source document strikes through the first purpose sentence; only the second remains approved.
export const purpose =
  'We transform possibilities into intelligent technology solutions that build trust, drive innovation, and create lasting real-world impact.';

// Published client testimonials from the current enteglow.com homepage.
export const testimonials: Testimonial[] = [
  {
    quote:
      'We worked with Enteglow to create a customized CRM, and they successfully fulfilled all of my needs. We anticipate working with them again in the future.',
    name: 'K V Sasidharan',
    company: 'Southern Scale Services',
    image: '/images/home/testimonial-k-v-sasidharan.jpg',
  },
  {
    quote:
      'We collaborated with Enteglow to build our brand website and they met all of our needs with excellence. We look forward to working with them again in the future.',
    name: 'Paul K Mani',
    company: 'Trinity Incorporation',
    image: '/images/home/testimonial-paul-k-mani.jpg',
  },
];

export const infrastructure: InfrastructureSolution[] = [
  { title: 'Custom CRM Solution', icon: 'crm' },
  { title: 'AI-Powered Camera & Recognition Solutions', icon: 'camera' },
  { title: 'Weighbridge System Implementation', icon: 'weighbridge' },
];
