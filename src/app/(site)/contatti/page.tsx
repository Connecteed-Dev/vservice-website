import { HeroPageTitle } from '@/components/sections/HeroPageTitle'
import { ContactFormSection } from '@/components/sections/ContactFormSection'

export default function ContattiPage() {
  return (
    <>
      <HeroPageTitle
        title="Contatti"
        subtitle="Contattaci per qualsiasi informazione sui nostri servizi"
        backgroundImage="/hero/herobg-contatti.png"
      />
      <ContactFormSection />
    </>
  )
}
