import { heroSlides } from '@/app/_home/data/homeContent';
import type { ServiceDetail } from '../types/service';

// One list for the /services grid and every /services/[slug] page.
//
// Copy source: the "Enteglow contents – Services" document (latest revision). Wording is kept as
// written there. Only the banner photos are read from the homepage `heroSlides`; the homepage copy
// itself is managed separately.
//  - `overview`        → the service's introductory paragraph(s)
//  - `keyCapabilities` → the service's numbered list
//  - `sections`        → the titled copy blocks that follow
// Taglines for Website Development, Domain Registration & Hosting and Mobile App Development are
// not given in the document, so they keep their previous values (or none).

// Homepage service palette (see ServicesSection).
const CORAL = '#F06A4F';
const AMBER = '#FFB86B';
const GREEN = '#38B67A';

const image = (id: string) => {
  const found = heroSlides.find((s) => s.id === id);
  if (!found) throw new Error(`Missing hero slide: ${id}`);
  return found.image;
};

/** First sentence of the intro, for the short card / hero copy. */
const firstSentence = (text: string) => text.match(/^.*?[.!?](?=\s|$)/)?.[0] ?? text;

const aiIntro =
  'We develop AI-powered applications that help businesses streamline operations, improve efficiency, and solve complex business challenges. By combining artificial intelligence with innovative technologies, we create smart, scalable, and practical solutions tailored to emerging business needs, enabling organizations to optimize processes.';
const webAppIntro =
  'We offer solutions to enhance and streamline diverse processes within an organisation, promoting efficiency and optimization. We specialise in creating innovative custom software applications that meet unique business needs and support long-term growth and scalability.';
const appMaintenanceIntro =
  'We ensure software applications remain secure, stable, efficient, and aligned with evolving business requirements. Our team proactively addresses emerging challenges, optimizes application performance, and adapts systems to changing operational needs and ensuring business continuity without disrupting critical processes.';
const websiteDevIntro =
  'We develop websites with optimized structure that elevates brand visibility, deepens customer engagement, and extends market reach. A strategically designed website delivers 24/7 accessibility, optimizes business processes, drives qualified leads, and provides scalable digital solutions designed to support sustained business growth.';
const websiteMaintenanceIntro =
  'We ensure continuous performance, security, reliability, and adaptability through proactive monitoring, timely updates, issue resolution, and ongoing enhancements.';
const domainIntro =
  'Domain name is more than just a web address; it is a key part of digital identity and brand presence. We provide reliable domain registration services to help businesses, organisations, and individuals secure the right domain name for their online presence.';
const mobileIntro =
  'Transform business ideas into innovative mobile applications that enhance customer engagement, streamline operations, and drive business growth through seamless digital experiences. Custom-built mobile applications enhance customer engagement, simplify business operations, improve accessibility, and deliver seamless user experiences across devices.';

export const servicesData: ServiceDetail[] = [
  {
    slug: 'ai-application-development',
    title: 'AI Application Development',
    tagline: 'AI-Driven Solutions',
    summary: firstSentence(aiIntro),
    overview: [aiIntro],
    visual: 'ai',
    accent: CORAL,
    image: image('ai-application-development'),
    // Content-corrections doc (AI Application Development): custom header banner, retitled sections, no challenges block.
    heroIntro: 'AI That Thinks. Acts. Gets Results',
    banner: { art: 'brain', ctaLabel: 'Explore More' },
    overviewTitle: 'AI - Driven solutions',
    sectionsHeading: { eyebrow: 'What We Build', title: 'Capabilities' },
    sections: [
      {
        title: 'AI That Thinks. Acts. Gets Results',
        body: [
          'We build Agentic AI solutions that go beyond traditional AI by enabling intelligent systems to understand goals, make decisions, plan actions, and execute tasks with minimal human intervention.',
          'Our solutions help businesses automate complex workflows, improve productivity, and create smarter, more responsive digital experiences.',
        ],
      },
      {
        title: 'Transform Complex Workflows into Intelligent Actions',
        body: ['Agentic AI can help organizations move from manual processes to intelligent, goal-driven automation.'],
      },
      {
        title: 'Built for Emerging Business Needs',
        body: [
          'Empowering businesses with intelligent AI agents that think, act, automate, and adapt - turning complex business processes into efficient, actionable workflows.',
        ],
      },
    ],
    approach:
      'We transform advanced AI into practical business solutions through intelligent automation, custom AI applications, autonomous agents, and seamless integrations.',
    technologies: ['Python', 'FastAPI', 'Django', 'Node.js', 'REST API', 'PostgreSQL', 'MongoDB', 'MySQL', 'Redis'],
    related: ['web-application-development', 'mobile-app-development', 'application-maintenance'],
  },
  {
    slug: 'web-application-development',
    title: 'Web Application Development',
    tagline: 'Solutions for Business Processes',
    summary: firstSentence(webAppIntro),
    overview: [webAppIntro],
    visual: 'web-app',
    banner: { art: 'web-app', ctaLabel: 'Explore More' },
    accent: AMBER,
    image: image('web-application-development'),
    keyCapabilities: [
      'Strategic Business Applications',
      'E-Commerce Applications',
      'Industry-Specific Cloud Solution',
      'Next-Generation Enterprise Solutions',
    ],
    sections: [
      {
        title: 'Flexible Solutions for Business Needs',
        body: [
          'Every feature and workflow is strategically designed around specific business requirements, delivering adaptable solutions that evolve with changing needs, enhance operational efficiency, support sustainable growth, and enable businesses to the next level.',
        ],
      },
      {
        title: 'Technology Aligned with Business Goals',
        body: [
          'Leverage the right technologies to support business development, streamline operations, enhance efficiency, and enable sustainable growth.',
        ],
      },
      {
        title: 'Streamline Business Processes',
        body: [
          'Custom application development provides businesses with software built around their specific needs and workflows. It helps improve operational efficiency, automate processes, integrate existing systems, manage data effectively, and provide greater flexibility as the business evolves.',
        ],
      },
      {
        title: 'Digital Platform - Web Portals',
        body: [
          'Provide a centralized digital platform that connects users, services, information, and business processes through a single, accessible interface.',
        ],
      },
    ],
    related: ['application-maintenance', 'website-development', 'mobile-app-development'],
  },
  {
    slug: 'application-maintenance',
    title: 'Application Maintenance',
    tagline: 'Solutions for Seamless Application Performance',
    summary: firstSentence(appMaintenanceIntro),
    overview: [appMaintenanceIntro],
    visual: 'app-maintenance',
    banner: { art: 'app-maintenance', ctaLabel: 'Explore More' },
    accent: GREEN,
    image: image('application-maintenance'),
    keyCapabilities: [
      'Scalability & Flexibility',
      'Continuous Improvement',
      'Application Performance',
      'Strategic Technology Integration',
    ],
    sections: [
      {
        title: 'Maintain consistent performance',
        body: [
          'We take responsibility for keeping software applications secure, stable, efficient, and aligned with evolving business requirements. Our strategic approach ensures consistent performance, addresses emerging challenges, and enables applications for long-term business growth.',
        ],
      },
      {
        title: 'Adapt changing business requirements',
        body: [
          'When evolving business requirements demand new workflows or process enhancements, we enable applications to adapt seamlessly, integrating new business processes while maintaining operational efficiency, scalability, and continuity.',
        ],
      },
      {
        title: 'Improve system efficiency and scalability',
        body: ['Enhance and scale the application processes with advanced technology designed to accommodate evolving business demands.'],
      },
    ],
    related: ['web-application-development', 'website-maintenance', 'mobile-app-development'],
  },
  {
    slug: 'website-development',
    title: 'Website Development',
    // Not in the content document; kept from the current enteglow.com homepage banner.
    tagline: 'Go global, get noticed',
    summary: firstSentence(websiteDevIntro),
    overview: [websiteDevIntro],
    visual: 'website',
    banner: { art: 'website', ctaLabel: 'Explore More' },
    accent: CORAL,
    keyCapabilities: ['Single Web Websites', 'Corporate Websites', 'Business Website', 'Educational Website'],
    sections: [
      {
        title: 'User-friendly website',
        body: [
          'A user-friendly website delivers a seamless and intuitive digital experience, enabling visitors to navigate effortlessly, access information quickly, and interact with services or content with minimal effort. It combines clear navigation, responsive design, accessible content, and streamlined interactions to create a smooth and engaging user experience across all devices.',
        ],
      },
      {
        title: 'AI-friendly website',
        body: [
          'Website designed for AI systems such as ChatGPT, Google AI, Microsoft Copilot, and other AI-powered search engines can easily understand, interpret, and retrieve its content.',
        ],
      },
      {
        title: 'SEO-friendly website',
        body: [
          'A search-engine-friendly website is more than an attractive online presence. It is strategically designed to help search engines understand your content while providing a seamless experience for your visitors.',
        ],
      },
      {
        title: 'E-Commerce Website',
        body: [
          'Expand customer base beyond geographical and physical store boundaries and allow customers to browse and purchase products anytime, without being limited by business hours.',
        ],
      },
    ],
    related: ['website-maintenance', 'domain-registration-hosting', 'web-application-development'],
  },
  {
    slug: 'website-maintenance',
    title: 'Website Maintenance',
    tagline: 'Solutions for Smooth & Reliable Performance',
    summary: websiteMaintenanceIntro,
    overview: [
      websiteMaintenanceIntro,
      'If your organization does not have a dedicated technical team, our dedicated website maintenance and support services ensure your website stays secure, updated, reliable, and available without interruption - giving you complete peace of mind while you focus on your business.',
    ],
    visual: 'website-maintenance',
    banner: { art: 'website-maintenance', ctaLabel: 'Explore More' },
    accent: GREEN,
    image: image('website-maintenance'),
    keyCapabilities: [
      'Seamless Website Management',
      'Delivering a seamless digital experience',
      'Stress-Free Online Presence',
      'Business Continuity',
    ],
    sections: [
      {
        title: 'No Need for an In-House Team',
        body: [
          'Our website maintenance services provide ongoing technical expertise, updates, security monitoring, performance optimisation, and issue resolution - helping you reduce operational overhead while ensuring your website remains secure, reliable, and up to date.',
        ],
      },
      {
        title: 'Optimize Hiring and Training Costs',
        body: [
          'No need to hire, train, or manage a technical team. Our flexible approach allows you to access the right level of support when required, without the need to maintain a dedicated in-house technical team.',
        ],
      },
    ],
    related: ['website-development', 'domain-registration-hosting', 'application-maintenance'],
  },
  {
    slug: 'domain-registration-hosting',
    title: 'Domain Registration & Hosting',
    tagline: 'Park Digital Identity',
    summary: firstSentence(domainIntro),
    overview: [domainIntro],
    visual: 'domain',
    banner: { art: 'domain', ctaLabel: 'Explore More' },
    accent: AMBER,
    keyCapabilities: ['Digital Identity', 'Brand Visibility', 'Build Trust & Credibility', 'Enable Business Growth'],
    sections: [
      {
        title: 'Establish Online Presence',
        body: [
          'Registering a unique domain name provides the business with a professional and recognizable digital identity. It serves as the foundation for the global identity.',
        ],
      },
      {
        title: 'Generate Business Opportunities',
        body: [
          'Enables businesses to professionally showcase their profile, products, and services, expand their market reach, build brand credibility, engage with potential customers, and unlock new opportunities for sustainable business growth.',
        ],
      },
      {
        title: 'Expand Market Reach',
        body: [
          'A relevant domain name and establish the business identity online, creating the foundation for a professional and scalable digital presence.',
        ],
      },
      {
        title: 'Enable Business Growth',
        body: [
          'Transform traditional business into a strong digital presence with a professional website, expand your reach beyond local and geographical boundaries, and connect with customers across wider markets.',
        ],
      },
    ],
    related: ['website-development', 'website-maintenance', 'web-application-development'],
  },
  {
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    // Not in the content document; kept from the homepage copy.
    tagline: 'Next-Gen Mobile Solutions for Business Growth',
    summary: firstSentence(mobileIntro),
    cardSummary:
      'We engineer custom mobile apps built for effortless user experiences, efficient operations, and long-term business growth.',
    overview: [mobileIntro],
    visual: 'mobile',
    banner: { art: 'mobile', ctaLabel: 'Explore More' },
    accent: CORAL,
    keyCapabilities: [
      'Custom Mobile App Development',
      'Android App Development',
      'iOS App Development',
      'Hybrid Mobile App Development',
    ],
    sections: [
      {
        title: 'Business Scalability',
        body: [
          'Mobile apps help improve operational efficiency and customer engagement. With scalable features and flexible integrations, businesses can expand their services, accommodate growing customer demands, and unlock new revenue opportunities without significantly increasing operational complexity.',
        ],
      },
      {
        title: 'Next Gen Mobile Application',
        body: [
          'Turn innovative ideas into practical mobile solutions that create meaningful business value. Our development team combines technology, user-focused design, and scalable architecture to build mobile applications aligned with business goals.',
        ],
      },
      {
        title: 'Anytime, Anywhere Access',
        body: [
          'Enable customers and teams to access essential services, information, and features anytime, anywhere. A seamless mobile experience keeps the business connected and accessible, delivering faster interactions, greater convenience, and stronger engagement across every digital touchpoint.',
        ],
      },
    ],
    related: ['web-application-development', 'ai-application-development', 'application-maintenance'],
  },
];

export const getService = (slug: string) => servicesData.find((s) => s.slug === slug);
