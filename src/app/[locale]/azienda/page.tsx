import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import SitePage from '../../(site)/azienda/page'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.vservice.it'

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const isIT = locale === 'it'
  return {
    title: isIT
      ? 'Chi Siamo | V.Service — 20 Anni di Esperienza nel Settore Termico a Roma'
      : 'About Us | V.Service — 20 Years of HVAC Expertise in Rome',
    description: isIT
      ? 'V.Service è un\'azienda certificata ISO 9001 con oltre 20 anni di esperienza nella progettazione, installazione e manutenzione di impianti termici civili e industriali nel Lazio.'
      : 'V.Service is an ISO 9001 certified company with over 20 years of experience in designing, installing and maintaining HVAC systems for residential and industrial clients in Lazio.',
    alternates: {
      canonical: `${SITE_URL}/${locale}/azienda`,
      languages: {
        'it': `${SITE_URL}/it/azienda`,
        'en': `${SITE_URL}/en/azienda`,
      },
    },
  }
}

export default async function Page({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale)
  return <SitePage />
}
