import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import SitePage from '../../../(site)/servizi/[slug]/page'
import { services } from '@/content/services'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.vservice.it'

export async function generateMetadata(props: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const params = await props.params
  const isIT = params.locale === 'it'
  const service = services.find((s) => s.slug === params.slug)
  return {
    title: service
      ? `${service.title} | V.Service Roma`
      : isIT ? 'Servizio | V.Service Roma' : 'Service | V.Service Rome',
    description: service
      ? service.description
      : isIT
        ? 'Scopri i servizi di climatizzazione e riscaldamento offerti da V.Service a Roma e nel Lazio.'
        : 'Explore the air conditioning and heating services offered by V.Service in Rome and Lazio.',
    alternates: {
      canonical: `${SITE_URL}/${params.locale}/servizi/${params.slug}`,
      languages: {
        'it': `${SITE_URL}/it/servizi/${params.slug}`,
        'en': `${SITE_URL}/en/servizi/${params.slug}`,
      },
    },
  }
}

export default async function Page(props: { params: Promise<{ locale: string; slug: string }> }) {
  const params = await props.params
  setRequestLocale(params.locale)
  return <SitePage params={Promise.resolve({ slug: params.slug })} />
}
