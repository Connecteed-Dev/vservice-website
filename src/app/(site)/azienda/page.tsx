import { getTranslations } from 'next-intl/server'
import { CTAWide } from '@/components/sections/CTAWide'
import { HeroPageTitle } from '@/components/sections/HeroPageTitle'
import { AziendaSection2 } from '@/components/sections/azienda/AziendaSection2'

export default async function AziendaPage() {
  const t = await getTranslations('azienda.hero')

  return (
    <>
      <HeroPageTitle
        title={t('title')}
        subtitle={t('subtitle')}
        backgroundImage="/hero/herobg-Azienda.png"
      />
      <AziendaSection2 />
      <CTAWide />
    </>
  )
}
