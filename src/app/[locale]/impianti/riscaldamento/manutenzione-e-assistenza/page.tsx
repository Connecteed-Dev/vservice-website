import { setRequestLocale } from 'next-intl/server'
import SitePage from '../../../../(site)/impianti/riscaldamento/manutenzione-e-assistenza/page'

export default async function Page({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale)
  return <SitePage />
}
