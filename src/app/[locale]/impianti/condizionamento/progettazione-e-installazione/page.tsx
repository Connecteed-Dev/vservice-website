import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import SitePage from '../../../../(site)/impianti/condizionamento/progettazione-e-installazione/page'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.vservice.it'

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const isIT = locale === 'it'
  const path = 'impianti/condizionamento/progettazione-e-installazione'
  return {
    title: isIT
      ? 'Installazione Climatizzatori Roma | V.Service - Progettazione Impianti'
      : 'AC Installation Rome | V.Service - System Design & Installation',
    description: isIT
      ? 'V.Service progetta e installa impianti di climatizzazione su misura a Roma e nel Lazio. Sistemi split, VRF e canalizzati per civile e industriale. Preventivo gratuito.'
      : 'V.Service designs and installs custom air conditioning systems in Rome and Lazio. Split, VRF and ducted systems for residential and industrial use. Free quote.',
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
