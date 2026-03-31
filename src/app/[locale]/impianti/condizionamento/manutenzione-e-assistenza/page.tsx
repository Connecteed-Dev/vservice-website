import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import SitePage from '../../../../(site)/impianti/condizionamento/manutenzione-e-assistenza/page'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.vservice.it'

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const isIT = locale === 'it'
  const path = 'impianti/condizionamento/manutenzione-e-assistenza'
  return {
    title: isIT
      ? 'Manutenzione Condizionatori Roma | V.Service - Assistenza Tecnica'
      : 'AC Maintenance Rome | V.Service - Technical Support',
    description: isIT
      ? 'Servizio di manutenzione e assistenza tecnica per impianti di climatizzazione a Roma e nel Lazio. Interventi rapidi, tecnici certificati F-GAS e contratti di manutenzione programmata.'
      : 'Air conditioning maintenance and technical support in Rome and Lazio. Fast response, F-GAS certified technicians and scheduled maintenance contracts.',
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
