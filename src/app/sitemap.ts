import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://kaseki-hospital.example.jp';
  const lastModified = new Date('2026-03-23');

  const routes: {
    path: string;
    changeFrequency: 'daily' | 'weekly' | 'monthly' | 'yearly';
    priority: number;
  }[] = [
    // Top
    { path: '', changeFrequency: 'weekly', priority: 1.0 },

    // Ambulatory
    { path: '/ambulatory', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/ambulatory/subject', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/ambulatory/examination', changeFrequency: 'monthly', priority: 0.7 },

    // Hospitalization
    { path: '/hospitalization', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/hospitalization/procedure', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/hospitalization/ward', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/hospitalization/meeting', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/hospitalization/palliative', changeFrequency: 'monthly', priority: 0.7 },

    // Rehabilitation
    { path: '/rehabilitation', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/rehabilitation/approach', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/rehabilitation/type', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/rehabilitation/facility', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/rehabilitation/staff', changeFrequency: 'monthly', priority: 0.7 },

    // Service (Home Care)
    { path: '/service', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/service/step', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/service/daycare', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/service/nursing', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/service/care', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/service/rehabilitation', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/service/center', changeFrequency: 'monthly', priority: 0.7 },

    // Check Up
    { path: '/check_up', changeFrequency: 'monthly', priority: 0.8 },

    // About
    { path: '/about', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/about/greeting', changeFrequency: 'yearly', priority: 0.6 },
    { path: '/about/management', changeFrequency: 'yearly', priority: 0.6 },
    { path: '/about/policy', changeFrequency: 'yearly', priority: 0.6 },
    { path: '/about/doctor', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/about/sakurajyuji', changeFrequency: 'yearly', priority: 0.6 },
    { path: '/about/access', changeFrequency: 'yearly', priority: 0.7 },
    { path: '/about/patient', changeFrequency: 'yearly', priority: 0.5 },
    { path: '/about/protection', changeFrequency: 'yearly', priority: 0.5 },
    { path: '/about/feature', changeFrequency: 'monthly', priority: 0.6 },

    // News
    { path: '/news', changeFrequency: 'daily', priority: 0.8 },

    // Contact
    { path: '/contact', changeFrequency: 'yearly', priority: 0.7 },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
