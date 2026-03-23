import { setRequestLocale } from 'next-intl/server'
import SitePage from '../../../(site)/news/[slug]/page'

export default async function Page({ params }: { params: { locale: string; slug: string } }) {
  setRequestLocale(params.locale)
  return <SitePage params={{ slug: params.slug }} />
}
