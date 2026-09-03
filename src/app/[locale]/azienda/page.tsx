import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import SitePage from '../../(site)/azienda/page'
import { yearsActive } from '@/lib/yearsActive'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.vservice.it'

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const isIT = locale === 'it'
  return {
    title: isIT
      ? `Chi Siamo | V.Service - ${yearsActive()} Anni di Esperienza nel Settore Termico a Roma`
      : `About Us | V.Service - ${yearsActive()} Years of HVAC Expertise in Rome`,
    description: isIT
      ? `V.Service è un'azienda certificata ISO 9001 con oltre ${yearsActive()} anni di esperienza nella progettazione, installazione e manutenzione di impianti termici civili e industriali nel Lazio.`
      : `V.Service is an ISO 9001 certified company with over ${yearsActive()} years of experience in designing, installing and maintaining HVAC systems for residential and industrial clients in Lazio.`,
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
