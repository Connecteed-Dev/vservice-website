import { getTranslations } from 'next-intl/server'
import { HeroPageTitle } from '@/components/sections/HeroPageTitle'
import { TextLeftImageRightSection } from '@/components/sections/impianti/TextLeftImageRightSection'
import { ServiziBackgroundCardSection } from '@/components/sections/impianti/ServiziBackgroundCardSection'
import { CosaOffriamoCards } from '@/components/sections/impianti/CosaOffriamoCards'
import { CTAWide } from '@/components/sections/CTAWide'
import { ClippedBox } from '@/components/ui/ClippedBox'

function SectionDivider({ label }: { label: string }) {
  return (
    <div className="bg-v-faded py-6">
      <div className="container mx-auto px-4 lg:px-8">
        <ClippedBox
          variant="serviziSmallCardCut"
          className="inline-block"
          innerClassName="bg-v-dark px-10 py-4"
        >
          <span className="text-white text-sm font-bold tracking-widest uppercase">
            {label}
          </span>
        </ClippedBox>
      </div>
    </div>
  )
}

export default async function ImpiantiPage() {
  const tHero = await getTranslations('impianti.hero')
  const tRiscProg = await getTranslations('impianti.riscaldamento.progettazione')
  const tRiscManu = await getTranslations('impianti.riscaldamento.manutenzione')
  const tConProg = await getTranslations('impianti.condizionamento.progettazione')
  const tConManu = await getTranslations('impianti.condizionamento.manutenzione')

  return (
    <>
      <HeroPageTitle
        title={tHero('title')}
        subtitle={tHero('subtitle')}
        backgroundImage="/hero/herobg-impianti.png"
      />

      {/* ── RISCALDAMENTO ── */}
      <SectionDivider label={tHero('riscaldamento')} />

      <TextLeftImageRightSection
        title={tRiscProg('section1.title')}
        description={[tRiscProg('section1.description1'), tRiscProg('section1.description2')]}
        imageSrc="/impianti/ResProg-imgRight.png"
        imageAlt="Impianti di Riscaldamento - Progettazione e Installazione"
      />

      <ServiziBackgroundCardSection
        title={tRiscProg('section2.title')}
        description={[tRiscProg('section2.description1'), tRiscProg('section2.description2')]}
        imageSrc="/bgcards/bg-cardsection1.png"
        imageAlt="Servizi di riscaldamento professionali"
      />

      <TextLeftImageRightSection
        title={tRiscManu('section1.title')}
        description={[
          tRiscManu('section1.description1'),
          tRiscManu('section1.description2'),
          tRiscManu('section1.description3'),
        ]}
        imageSrc="/impianti/ResMan-imgRight2.jpeg"
        imageAlt="Manutenzione e assistenza impianti di riscaldamento"
      />

      <ServiziBackgroundCardSection
        title={tRiscManu('section2.title')}
        description={[tRiscManu('section2.description1')]}
        imageSrc="/bgcards/bg-cardsectionRiscManu.png"
        imageAlt="Servizi di manutenzione caldaie professionali"
      />

      <CosaOffriamoCards
        title={tRiscManu('cosaOffriamo.title')}
        cards={[
          { id: '1', title: tRiscManu('cosaOffriamo.rapidita'), logoSrc: '/ImpiantiManutenzione/rocket-01.svg', logoAlt: 'Rocket icon' },
          { id: '2', title: tRiscManu('cosaOffriamo.copertura'), logoSrc: '/ImpiantiManutenzione/map-01.svg', logoAlt: 'Map icon' },
          { id: '3', title: tRiscManu('cosaOffriamo.personale'), logoSrc: '/ImpiantiManutenzione/persona.svg', logoAlt: 'Person icon' },
          { id: '4', title: tRiscManu('cosaOffriamo.controlli'), logoSrc: '/ImpiantiManutenzione/shield.svg', logoAlt: 'Shield icon' },
          { id: '5', title: tRiscManu('cosaOffriamo.checkup'), logoSrc: '/ImpiantiManutenzione/search.svg', logoAlt: 'Search icon' },
        ]}
      />

      {/* ── CONDIZIONAMENTO ── */}
      <SectionDivider label={tHero('condizionamento')} />

      <TextLeftImageRightSection
        title={tConProg('section1.title')}
        description={[tConProg('section1.description1'), tConProg('section1.description2')]}
        imageSrc="/condizionamento/Prog-imgright.png"
        imageAlt="Impianto di condizionamento"
      />

      <ServiziBackgroundCardSection
        title={tConProg('section2.title')}
        description={[tConProg('section2.description1'), tConProg('section2.description2')]}
        imageSrc="/bgcards/bg-cardsection1.png"
        imageAlt="Esperti nella climatizzazione"
      />

      <TextLeftImageRightSection
        title={tConProg('section3.title')}
        description={[tConProg('section3.description1'), tConProg('section3.description2')]}
        imageSrc="/impianti/ConSol1.jpeg"
        imageAlt="Soluzioni di condizionamento su misura"
      />

      <TextLeftImageRightSection
        title={tConManu('section1.title')}
        description={[
          tConManu('section1.description1'),
          tConManu('section1.description2'),
          tConManu('section1.description3'),
        ]}
        imageSrc="/impianti/ConSol2.jpeg"
        imageAlt="Manutenzione impianti di condizionamento"
      />

      <ServiziBackgroundCardSection
        title={tConManu('section2.title')}
        description={[tConManu('section2.description1')]}
        imageSrc="/bgcards/bg-cardsectionConManu.png"
        imageAlt="Servizi di manutenzione condizionamento professionali"
      />

      <CTAWide />
    </>
  )
}
