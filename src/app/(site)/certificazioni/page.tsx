import { getTranslations } from 'next-intl/server'
import { HeroPageTitle } from '@/components/sections/HeroPageTitle'

export default async function CertificazioniPage() {
  const t = await getTranslations('certificazioni')

  return (
    <>
      <HeroPageTitle
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
        backgroundImage="/hero/herobg-certificazioni.png"
      />
      {/* Add certificazioni content here */}
    </>
  )
}
