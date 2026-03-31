import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import SitePage from '../../../../(site)/impianti/riscaldamento/manutenzione-e-assistenza/page'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.vservice.it'

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const isIT = locale === 'it'
  const path = 'impianti/riscaldamento/manutenzione-e-assistenza'
  return {
    title: isIT
      ? 'Manutenzione Riscaldamento Roma | V.Service - Assistenza Caldaie e Pompe di Calore'
      : 'Heating Maintenance Rome | V.Service - Boiler & Heat Pump Support',
    description: isIT
      ? 'Manutenzione e assistenza tecnica per impianti di riscaldamento a Roma e nel Lazio. Interventi su caldaie a condensazione, pompe di calore e impianti termici industriali.'
      : 'Heating system maintenance and support in Rome and Lazio. Service for condensing boilers, heat pumps and industrial thermal systems.',
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
