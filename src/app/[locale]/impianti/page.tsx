import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import SitePage from '../../(site)/impianti/page'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.vservice.it'

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const isIT = locale === 'it'
  return {
    title: isIT
      ? 'Impianti | Condizionamento e Riscaldamento a Roma - V.Service'
      : 'Systems | Air Conditioning & Heating in Rome - V.Service',
    description: isIT
      ? 'V.Service progetta e installa impianti di climatizzazione e riscaldamento a Roma e nel Lazio. Soluzioni per abitazioni, uffici, capannoni e ambienti industriali.'
      : 'V.Service designs and installs air conditioning and heating systems in Rome and Lazio. Solutions for homes, offices, warehouses and industrial facilities.',
    alternates: {
      canonical: `${SITE_URL}/${locale}/impianti`,
      languages: {
        'it': `${SITE_URL}/it/impianti`,
        'en': `${SITE_URL}/en/impianti`,
      },
    },
  }
}

export default async function Page({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale)
  return <SitePage />
}
