import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import SitePage from '../../../../(site)/impianti/riscaldamento/progettazione-e-installazione/page'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.vservice.it'

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const isIT = locale === 'it'
  const path = 'impianti/riscaldamento/progettazione-e-installazione'
  return {
    title: isIT
      ? 'Installazione Riscaldamento Roma | V.Service — Caldaie e Pompe di Calore'
      : 'Heating Installation Rome | V.Service — Boilers & Heat Pumps',
    description: isIT
      ? 'V.Service installa impianti di riscaldamento a Roma e nel Lazio: caldaie a condensazione, pompe di calore aria-acqua e impianti radianti. Progettazione su misura e preventivo gratuito.'
      : 'V.Service installs heating systems in Rome and Lazio: condensing boilers, air-to-water heat pumps and radiant systems. Custom design and free quote.',
    alternates: {
      canonical: `${SITE_URL}/${locale}/${path}`,
      languages: {
        'it': `${SITE_URL}/it/${path}`,
        'en': `${SITE_URL}/en/${path}`,
      },
    },
  }
}

export default async function Page({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale)
  return <SitePage />
}
