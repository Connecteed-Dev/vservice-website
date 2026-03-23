import { getTranslations } from 'next-intl/server'
import { HeroPageTitle } from '@/components/sections/HeroPageTitle'
import { TextLeftImageRightSection } from '@/components/sections/impianti/TextLeftImageRightSection'
import { ServiziBackgroundCardSection } from '@/components/sections/impianti/ServiziBackgroundCardSection'
import { CTAWide } from '@/components/sections/CTAWide'

export default async function CondizionamentoManutenzionePage() {
  const t = await getTranslations('impianti.condizionamento.manutenzione')

  return (
    <>
      <HeroPageTitle
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
        backgroundImage="/hero/herobg-manutenzione.png"
      />
      <TextLeftImageRightSection
        title={t('section1.title')}
        description={[
          t('section1.description1'),
          t('section1.description2'),
          t('section1.description3'),
        ]}
        imageSrc="/condizionamento/Manutenzione-imgright.png "
        imageAlt="Manutenzione impianti di condizionamento"
      />
      <ServiziBackgroundCardSection
        title={t('section2.title')}
        description={[t('section2.description1')]}
        imageSrc="/bgcards/bg-cardsectionConManu.png"
        imageAlt="Servizi di manutenzione condizionamento professionali"
      />
      <CTAWide />
    </>
  )
}
