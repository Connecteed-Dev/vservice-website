import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import SitePage from '../../(site)/blog/page'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.vservice.it'

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const isIT = locale === 'it'
  return {
    title: isIT
      ? 'Blog | V.Service - Consigli su Risparmio Energetico e Impianti Termici'
      : 'Blog | V.Service - Energy Saving Tips & HVAC Advice',
    description: isIT
      ? 'Consigli pratici, guide tecniche e aggiornamenti normativi su climatizzazione, riscaldamento e risparmio energetico dal team di V.Service a Roma.'
      : 'Practical tips, technical guides and regulatory updates on air conditioning, heating and energy saving from the V.Service team in Rome.',
    alternates: {
      canonical: `${SITE_URL}/${locale}/blog`,
      languages: {
        'it': `${SITE_URL}/it/blog`,
        'en': `${SITE_URL}/en/blog`,
      },
    },
  }
}

export default async function Page({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale)
  return <SitePage />
}
