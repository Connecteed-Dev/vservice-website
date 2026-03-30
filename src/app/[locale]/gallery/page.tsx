import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import SitePage from '../../(site)/gallery/page'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.vservice.it'

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const isIT = locale === 'it'
  return {
    title: isIT
      ? 'Galleria Lavori | V.Service — Impianti Realizzati a Roma e Lazio'
      : 'Project Gallery | V.Service — Completed Installations in Rome & Lazio',
    description: isIT
      ? 'Sfoglia la galleria dei lavori realizzati da V.Service: installazioni di climatizzatori, impianti di riscaldamento e pompe di calore per clienti civili e industriali nel Lazio.'
      : 'Browse V.Service\'s project gallery: air conditioning, heating and heat pump installations for residential and industrial clients across Lazio.',
    alternates: {
      canonical: `${SITE_URL}/${locale}/gallery`,
      languages: {
        'it': `${SITE_URL}/it/gallery`,
        'en': `${SITE_URL}/en/gallery`,
      },
    },
  }
}

export default async function Page({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale)
  return <SitePage />
}
