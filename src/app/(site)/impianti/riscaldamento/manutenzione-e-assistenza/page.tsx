import { getTranslations } from 'next-intl/server'
import { HeroPageTitle } from '@/components/sections/HeroPageTitle'
import { TextLeftImageRightSection } from '@/components/sections/impianti/TextLeftImageRightSection'
import { ServiziBackgroundCardSection } from '@/components/sections/impianti/ServiziBackgroundCardSection'
import { CosaOffriamoCards } from '@/components/sections/impianti/CosaOffriamoCards'
import { CTAWide } from '@/components/sections/CTAWide'

export default async function ManutenzioneAssistenzaRiscaldamentoPage() {
  const t = await getTranslations('impianti.riscaldamento.manutenzione')

  return (
    <>
      <HeroPageTitle
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
        backgroundImage="/hero/herobg-Manutenzione.png"
      />
      <TextLeftImageRightSection
        title={t('section1.title')}
        description={[
          t('section1.description1'),
          t('section1.description2'),
          t('section1.description3'),
        ]}
        imageSrc="/Riscaldamento/manu-imgright1.png"
        imageAlt="Manutenzione e assistenza impianti di riscaldamento"
      />
      <ServiziBackgroundCardSection
        title={t('section2.title')}
        description={[t('section2.description1')]}
        imageSrc="/bgcards/bg-cardsectionRiscManu.png"
        imageAlt="Servizi di manutenzione caldaie professionali"
      />
      <CosaOffriamoCards
        title={t('cosaOffriamo.title')}
        cards={[
          { id: '1', title: t('cosaOffriamo.rapidita'), logoSrc: '/ImpiantiManutenzione/rocket-01.svg', logoAlt: 'Rocket icon' },
          { id: '2', title: t('cosaOffriamo.copertura'), logoSrc: '/ImpiantiManutenzione/map-01.svg', logoAlt: 'Map icon' },
          { id: '3', title: t('cosaOffriamo.personale'), logoSrc: '/ImpiantiManutenzione/persona.svg', logoAlt: 'Person icon' },
          { id: '4', title: t('cosaOffriamo.controlli'), logoSrc: '/ImpiantiManutenzione/shield.svg', logoAlt: 'Shield icon' },
          { id: '5', title: t('cosaOffriamo.checkup'), logoSrc: '/ImpiantiManutenzione/search.svg', logoAlt: 'Search icon' },
        ]}
      />
      <CTAWide />
    </>
  )
}
