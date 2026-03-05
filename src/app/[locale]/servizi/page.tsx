import { HeroPageTitle } from '@/components/sections/HeroPageTitle'
import { ServiziSpecializzatiSection } from '@/components/sections/servizi/ServiziSpecializzatiSection'

export default function ServiziPage() {
  return (
    <>
      <HeroPageTitle
        title="Servizi"
        subtitle="Soluzioni complete per riscaldamento e climatizzazione"
        backgroundImage="/servizi/servizi-hero-image.png"
      />
      <ServiziSpecializzatiSection />
    </>
  )
}
