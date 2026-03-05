import { HeroPageTitle } from '@/components/sections/HeroPageTitle'
import { ContactFormSection } from '@/components/sections/ContactFormSection'

export default function PreventivoPage() {
  return (
    <>
      <HeroPageTitle
        title="Richiedi Preventivo"
        subtitle="Compila il modulo per richiedere un preventivo personalizzato"
        backgroundImage="/preventivo/preventivo-hero-image.png"
      />
      <ContactFormSection />
    </>
  )
}
