import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import SitePage from '../../(site)/contatti/page'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.vservice.it'

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const isIT = locale === 'it'
  return {
    title: isIT
      ? 'Contatti | V.Service — Richiedi Assistenza o Informazioni a Roma'
      : 'Contact Us | V.Service — Get Support or Information in Rome',
    description: isIT
      ? 'Contatta V.Service per informazioni sui nostri impianti di climatizzazione e riscaldamento a Roma. Sede operativa in Via dei Quintili 55b. Disponibili dal lunedì al venerdì.'
      : 'Contact V.Service for information on our air conditioning and heating systems in Rome. We are available Monday to Friday at Via dei Quintili 55b.',
    alternates: {
      canonical: `${SITE_URL}/${locale}/contatti`,
      languages: {
        'it': `${SITE_URL}/it/contatti`,
        'en': `${SITE_URL}/en/contatti`,
      },
    },
  }
}

export default async function Page({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale)
  return <SitePage />
}
