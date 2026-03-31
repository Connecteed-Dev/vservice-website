import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import SitePage from '../../(site)/certificazioni/page'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.vservice.it'

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const isIT = locale === 'it'
  return {
    title: isIT
      ? 'Certificazioni | V.Service - ISO 9001, F-GAS e Certificazioni Energetiche'
      : 'Certifications | V.Service - ISO 9001, F-GAS & Energy Certificates',
    description: isIT
      ? 'V.Service è certificata ISO 9001-15 e abilitata alla movimentazione gas refrigeranti F-GAS. Eroghiamo anche Certificazioni Energetiche (APE) per abitazioni e locali commerciali a Roma.'
      : 'V.Service holds ISO 9001-15 certification and is qualified for F-GAS refrigerant handling. We also issue Energy Performance Certificates (EPC) for homes and commercial premises in Rome.',
    alternates: {
      canonical: `${SITE_URL}/${locale}/certificazioni`,
      languages: {
        'it': `${SITE_URL}/it/certificazioni`,
        'en': `${SITE_URL}/en/certificazioni`,
      },
    },
  }
}

export default async function Page({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale)
  return <SitePage />
}
