import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import SitePage from '../../(site)/preventivo/page'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.vservice.it'

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const isIT = locale === 'it'
  return {
    title: isIT
      ? 'Richiedi un Preventivo | V.Service — Climatizzazione e Riscaldamento Roma'
      : 'Request a Quote | V.Service — Air Conditioning & Heating Rome',
    description: isIT
      ? 'Richiedi un preventivo gratuito per l\'installazione o manutenzione di impianti di climatizzazione, riscaldamento e pompe di calore a Roma e nel Lazio. Risposta rapida garantita.'
      : 'Request a free quote for installation or maintenance of air conditioning, heating and heat pump systems in Rome and Lazio. Fast response guaranteed.',
    alternates: {
      canonical: `${SITE_URL}/${locale}/preventivo`,
      languages: {
        'it': `${SITE_URL}/it/preventivo`,
        'en': `${SITE_URL}/en/preventivo`,
      },
    },
  }
}

export default async function Page({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale)
  return <SitePage />
}
