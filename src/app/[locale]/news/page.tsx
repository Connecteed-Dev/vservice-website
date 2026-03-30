import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import SitePage from '../../(site)/news/page'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.vservice.it'

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const isIT = locale === 'it'
  return {
    title: isIT
      ? 'Novità & Aggiornamenti | V.Service — News sul Settore Termico'
      : 'News & Updates | V.Service — HVAC Industry Updates',
    description: isIT
      ? 'Rimani aggiornato con le ultime novità di V.Service: risparmio energetico, nuove tecnologie per pompe di calore, climatizzazione e riscaldamento a Roma e Lazio.'
      : 'Stay up to date with the latest from V.Service: energy saving tips, new heat pump technologies, and HVAC news for Rome and the Lazio region.',
    alternates: {
      canonical: `${SITE_URL}/${locale}/news`,
      languages: {
        'it': `${SITE_URL}/it/news`,
        'en': `${SITE_URL}/en/news`,
      },
    },
  }
}

export default async function Page({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale)
  return <SitePage />
}
