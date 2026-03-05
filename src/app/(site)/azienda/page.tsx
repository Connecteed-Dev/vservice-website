import { CTAWide } from '@/components/sections/CTAWide'
import { HeroPageTitle } from '@/components/sections/HeroPageTitle'
import { AziendaSection2 } from '@/components/sections/azienda/AziendaSection2'

export default function AziendaPage() {
  return (
    <>
      <HeroPageTitle
        title="Azienda"
        subtitle="La nostra storia, la nostra passione per il comfort"
        backgroundImage="/hero/herobg-Azienda.png"
      />
      <AziendaSection2 />
      <CTAWide />
    </>
  )
}
