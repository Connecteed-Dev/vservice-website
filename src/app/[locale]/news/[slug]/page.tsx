import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import SitePage from '../../../(site)/news/[slug]/page'
import { newsArticles } from '@/content/news'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.vservice.it'

export async function generateMetadata({ params }: { params: { locale: string; slug: string } }): Promise<Metadata> {
  const isIT = params.locale === 'it'
  const article = newsArticles.find((a) => a.slug === params.slug)
  return {
    title: article
      ? `${article.title} | V.Service`
      : isIT ? 'Articolo | V.Service' : 'Article | V.Service',
    description: article
      ? article.excerpt
      : isIT
        ? 'Leggi le ultime novità e aggiornamenti di V.Service sul settore della climatizzazione e riscaldamento a Roma.'
        : 'Read the latest news and updates from V.Service on air conditioning and heating in Rome.',
    alternates: {
      canonical: `${SITE_URL}/${params.locale}/news/${params.slug}`,
      languages: {
        'it': `${SITE_URL}/it/news/${params.slug}`,
        'en': `${SITE_URL}/en/news/${params.slug}`,
      },
    },
  }
}

export default async function Page({ params }: { params: { locale: string; slug: string } }) {
  setRequestLocale(params.locale)
  return <SitePage params={{ slug: params.slug }} />
}
