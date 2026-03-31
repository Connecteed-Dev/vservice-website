import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import SitePage from '../../(site)/assistenza-clivet/page'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.vservice.it'

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const isIT = locale === 'it'
  return {
    title: isIT
      ? 'Centro Assistenza Clivet Roma | V.Service - Service Center Autorizzato'
      : 'Clivet Service Center Rome | V.Service - Authorized Support Center',
    description: isIT
      ? 'V.Service è centro assistenza autorizzato Clivet a Roma e nel Lazio. Riparazione, manutenzione e ricambi originali per climatizzatori e pompe di calore Clivet.'
      : 'V.Service is an authorized Clivet service center in Rome and Lazio. Repair, maintenance and original spare parts for Clivet air conditioners and heat pumps.',
    alternates: {
      canonical: `${SITE_URL}/${locale}/assistenza-clivet`,
      languages: {
        'it': `${SITE_URL}/it/assistenza-clivet`,
        'en': `${SITE_URL}/en/assistenza-clivet`,
      },
    },
  }
}

export default async function Page({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale)
  return <SitePage />
}
