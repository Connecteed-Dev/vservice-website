import { HeroPageTitle } from '@/components/sections/HeroPageTitle'
import { CTAWide } from '@/components/sections/CTAWide'
import { AssistenzaClivetSection } from '@/components/sections/assistenza/AssistenzaClivetSection'
import { RightTextLeftImageSection } from '@/components/sections/assistenza/RightTextLeftImageSection'

export default function AssistenzaClivetPage() {
  return (
    <>
      <HeroPageTitle
        title="Assistenza Clivet"
        backgroundImage="/hero/herobg-assistenzaClivet.png"
      />

      <AssistenzaClivetSection />

      <RightTextLeftImageSection
       
        title="Start-up e messa a punto impianti con garanzia"
        subtitle="Tecnici specializzati per Sistemi Clivet"
        description="Il nostro staff è a disposizione per start-up e messa a punto impianti con convalida della garanzia, secondo le indicazioni della casa madre. Grazie alla notevole esperienza maturata nel settore e ad uno staff tecnico costantemente aggiornato, V.Services è l’interlocutore ideale per la risoluzione di qualunque genere di imprevisto o guasto agli impianti dei marchi di cui è partner."
        imageSrc="/assistenza-clivet/assistenzaclivet- rightImg.png"
        imageAlt="Assistenza Clivet"
      />

      <CTAWide />
    </>
  )
}
