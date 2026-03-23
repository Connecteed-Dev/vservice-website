import { getTranslations } from 'next-intl/server'
import { HeroPageTitle } from '@/components/sections/HeroPageTitle'
import { TextLeftImageRightSection } from '@/components/sections/impianti/TextLeftImageRightSection'
import { ServiziBackgroundCardSection } from '@/components/sections/impianti/ServiziBackgroundCardSection'
import { CTAWide } from '@/components/sections/CTAWide'

export default async function CondizionamentoProgettazioneInstallazionePage() {
  const t = await getTranslations('impianti.condizionamento.progettazione')

  return (
    <>
      <HeroPageTitle
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
        backgroundImage="/hero/herobg-manutenzione.png"
      />
      <TextLeftImageRightSection
        title={t('section1.title')}
        description={[t('section1.description1'), t('section1.description2')]}
        imageSrc="/condizionamento/Prog-imgright.png"
        imageAlt="Impianto di condizionamento"
      />
      <ServiziBackgroundCardSection
        title={t('section2.title')}
        description={[t('section2.description1'), t('section2.description2')]}
        imageSrc="/bgcards/bg-cardsection1.png"
        imageAlt="Esperti nella climatizzazione"
      />
      <TextLeftImageRightSection
        title={t('section3.title')}
        description={[t('section3.description1'), t('section3.description2')]}
        imageSrc="/condizionamento/Prog-imgright2.png"
        imageAlt="Soluzioni di condizionamento su misura"
      />
      <CTAWide />
    </>
  )
}
