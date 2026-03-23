import { getTranslations } from 'next-intl/server'
import { CTAWide } from '@/components/sections/CTAWide'
import { HeroPageTitle } from '@/components/sections/HeroPageTitle'
import { ServiziBackgroundCardSection } from '@/components/sections/impianti/ServiziBackgroundCardSection'
import { ServiziSpecializzatiSection } from '@/components/sections/servizi/ServiziSpecializzatiSection'

export default async function ServiziPage() {
  const t = await getTranslations('servizi')

  return (
    <>
      <HeroPageTitle
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
        backgroundImage="/hero/herobg-servizi.png"
      />
      <ServiziBackgroundCardSection
        title={t('intro.title')}
        description={t('intro.description')}
        imageSrc="/bgcards/bg-cardsection1.png"
        imageAlt="Servizi professionali per impianti di riscaldamento e climatizzazione"
        className="bg-white"
      />
      <ServiziSpecializzatiSection />
      <CTAWide />
    </>
  )
}
