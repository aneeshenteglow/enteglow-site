import { MetadataRoute } from 'next';
import { projectsData } from '@/app/projects/services/projectsData';
import { ProjectDetail } from '@/app/projects/types/project';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://entelgow.com';

  const routes = [
    '',
    '/services',
    '/solutions',
    '/technologies',
    '/projects',
    '/about',
    '/process',
    '/industries',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const projectRoutes = projectsData.map((project: ProjectDetail) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...routes, ...projectRoutes];
}
