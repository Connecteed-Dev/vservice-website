import { getTranslations } from 'next-intl/server'
import { HeroPageTitle } from '@/components/sections/HeroPageTitle'
import { TextLeftImageRightSection } from '@/components/sections/impianti/TextLeftImageRightSection'
import { ServiziBackgroundCardSection } from '@/components/sections/impianti/ServiziBackgroundCardSection'
import { CTAWide } from '@/components/sections/CTAWide'

export default async function ProgettazioneInstallazioneRiscaldamentoPage() {
  const t = await getTranslations('impianti.riscaldamento.progettazione')

  return (
    <>
      <HeroPageTitle
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
        backgroundImage="/hero/herobg-Progettazione.png"
      />
      <TextLeftImageRightSection
        title={t('section1.title')}
        description={[t('section1.description1'), t('section1.description2')]}
        imageSrc="/Riscaldamento/prog-imgright1.png"
        imageAlt="Impianti di Riscaldamento - Progettazione e Installazione"
      />
      <ServiziBackgroundCardSection
        title={t('section2.title')}
        description={[t('section2.description1'), t('section2.description2')]}
        imageSrc="/bgcards/bg-cardsection1.png"
        imageAlt="Servizi di riscaldamento professionali"
      />
      <CTAWide />
    </>
  )
}
