import type { MetadataRoute } from 'next'
import { newsArticles } from '@/content/news'
import { services } from '@/content/services'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.vservice.it'
const LOCALES = ['it', 'en'] as const

type Locale = (typeof LOCALES)[number]

function url(locale: Locale, path: string = '') {
  return `${BASE_URL}/${locale}${path}`
}

function entry(
  path: string,
  priority: number = 0.7,
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] = 'monthly'
): MetadataRoute.Sitemap[number][] {
  return LOCALES.map((locale) => ({
    url: url(locale, path),
    lastModified: new Date(),
    changeFrequency,
    priority,
    alternates: {
      languages: Object.fromEntries(LOCALES.map((l) => [l, url(l, path)])),
    },
  }))
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    ...entry('', 1.0, 'weekly'),
    ...entry('/azienda', 0.8),
    ...entry('/servizi', 0.9, 'weekly'),
    ...entry('/impianti/condizionamento/progettazione-e-installazione', 0.8),
    ...entry('/impianti/condizionamento/manutenzione-e-assistenza', 0.8),
    ...entry('/impianti/riscaldamento/progettazione-e-installazione', 0.8),
    ...entry('/impianti/riscaldamento/manutenzione-e-assistenza', 0.8),
    ...entry('/assistenza-clivet', 0.8),
    ...entry('/certificazioni', 0.7),
    ...entry('/news', 0.8, 'weekly'),
    ...entry('/gallery', 0.6),
    ...entry('/preventivo', 0.9),
    ...entry('/contatti', 0.8),
  ]

  const serviceRoutes: MetadataRoute.Sitemap = services.flatMap((service) =>
    entry(`/servizi/${service.slug}`, 0.8)
  )

  const newsRoutes: MetadataRoute.Sitemap = newsArticles.flatMap((article) =>
    entry(`/news/${article.slug}`, 0.7, 'yearly')
  )

  return [...staticRoutes, ...serviceRoutes, ...newsRoutes]
}
