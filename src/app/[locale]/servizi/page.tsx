import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import SitePage from '../../(site)/servizi/page'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.vservice.it'

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const isIT = locale === 'it'
  return {
    title: isIT
      ? 'Servizi | Climatizzazione, Riscaldamento e Manutenzione — V.Service Roma'
      : 'Services | Air Conditioning, Heating & Maintenance — V.Service Rome',
    description: isIT
      ? 'Scopri tutti i servizi di V.Service: installazione e manutenzione di impianti di climatizzazione, riscaldamento e pompe di calore a Roma e in tutto il Lazio.'
      : 'Explore all V.Service offerings: installation and maintenance of air conditioning, heating and heat pump systems across Rome and the Lazio region.',
    alternates: {
      canonical: `${SITE_URL}/${locale}/servizi`,
      languages: {
        'it': `${SITE_URL}/it/servizi`,
        'en': `${SITE_URL}/en/servizi`,
      },
    },
  }
}

export default async function Page({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale)
  return <SitePage />
}
