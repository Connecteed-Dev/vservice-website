import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import SitePage from '../(site)/page'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.vservice.it'

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const isIT = locale === 'it'
  return {
    title: isIT
      ? 'V.Service | Climatizzazione e Riscaldamento a Roma e Lazio'
      : 'V.Service | Air Conditioning & Heating in Rome and Lazio',
    description: isIT
      ? 'V.Service è leader nella climatizzazione e riscaldamento a Roma e nel Lazio. Progettazione, installazione e manutenzione di impianti termici civili e industriali con oltre 20 anni di esperienza.'
      : 'V.Service is the leading HVAC company in Rome and Lazio. Design, installation and maintenance of heating and air conditioning systems for residential and industrial clients.',
    alternates: {
      canonical: `${SITE_URL}/${locale}`,
      languages: {
        'it': `${SITE_URL}/it`,
        'en': `${SITE_URL}/en`,
      },
    },
  }
}

export default async function Page({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale)
  return <SitePage />
}
