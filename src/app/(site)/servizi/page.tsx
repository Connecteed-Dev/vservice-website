import { CTAWide } from '@/components/sections/CTAWide'
import { HeroPageTitle } from '@/components/sections/HeroPageTitle'
import { ServiziBackgroundCardSection } from '@/components/sections/impianti/ServiziBackgroundCardSection'
import { ServiziSpecializzatiSection } from '@/components/sections/servizi/ServiziSpecializzatiSection'

export default function ServiziPage() {
  return (
    <>
      <HeroPageTitle
        title="Servizi"
        subtitle="Soluzioni complete per riscaldamento e climatizzazione"
        backgroundImage="/hero/herobg-servizi.png"
      />
      <ServiziBackgroundCardSection
        title="Soluzioni complete per l'efficienza energetica"
        description="Sei alla ricerca di servizi affidabili per il tuo impianto di riscaldamento e condizionamento? Siamo qui per aiutarti! La nostra azienda offre una vasta gamma di servizi specializzati per garantire l’efficienza energetica e il funzionamento ottimale dei tuoi impianti. Dai servizi di installazione di nuove pompe di calore, rooftop e caldaie, alla fornitura di documentazione completa per certificazioni energetiche, e alla compilazione dei libretti FGAS e d’impianto. Inoltre, offriamo servizi di contabilizzazione, lettura e bollettazione dei costi di riscaldamento per un monitoraggio preciso dei tuoi consumi. Il nostro team di assistenza tecnica è sempre pronto a intervenire per risolvere guasti e problemi sugli impianti esistenti, mentre la nostra diagnosi energetica ti aiuterà a ottimizzare l’uso delle risorse energetiche. Forniamo anche il servizio di terzo responsabile per la gestione e il controllo degli impianti e siamo un centro assistenza autorizzato per i marchi di fiducia. Scegli la nostra esperienza e competenza per garantire il massimo rendimento e l’efficienza dei tuoi impianti. Contattaci oggi per saperne di più sui nostri servizi."
        imageSrc="/bgcards/bg-cardsection1.png"
        imageAlt="Servizi professionali per impianti di riscaldamento e climatizzazione"
        className="bg-white"
      />
      <ServiziSpecializzatiSection />
      <CTAWide />
    </>
  )
}
