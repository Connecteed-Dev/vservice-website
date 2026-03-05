import { HeroPageTitle } from '@/components/sections/HeroPageTitle'
import { TextLeftImageRightSection } from '@/components/sections/impianti/TextLeftImageRightSection'
import { ServiziBackgroundCardSection } from '@/components/sections/impianti/ServiziBackgroundCardSection'
import { CosaOffriamoCards } from '@/components/sections/impianti/CosaOffriamoCards'
import { CTAWide } from '@/components/sections/CTAWide'

export default function ManutenzioneAssistenzaRiscaldamentoPage() {
  return (
    <>
      <HeroPageTitle
        title="Manutenzione e assistenza"
        subtitle="Impianti di Riscaldamento"
        backgroundImage="/hero/herobg-Manutenzione.png"
      />
      <TextLeftImageRightSection
        title="Professionisti nella manutenzione e assistenza termica"
        description={[
          "Siamo qui per garantire il corretto funzionamento dei tuoi impianti di riscaldamento industriali e civili. Il nostro team di tecnici esperti è disponibile per interventi di riparazione su appuntamento o in pronto intervento, fornendo assistenza affidabile.",
          "La manutenzione è fondamentale per assicurare minori consumi energetici, il rispetto delle norme vigenti e la longevità del tuo sistema termico. Prenota ora una revisione per ottimizzare le prestazioni del tuo impianto. La assistenza è il nostro punto di forza quando si tratta di caldaie sicure ed efficienti. Scegli la qualità dei servizi offerti dai nostri specialisti per garantire il massimo rendimento del tuo sistema."
        , "I nostri interventi sono conformi alle normative di legge e coprono una vasta gamma di clienti, tra cui locali commerciali, locali direzionali, industrie e unità abitative. Siamo qui per soddisfare tutte le tue esigenze di manutenzione e assistenza termica."
        ]}
        imageSrc="/Riscaldamento/manu-imgright1.png"
        imageAlt="Manutenzione e assistenza impianti di riscaldamento"
      />
      <ServiziBackgroundCardSection
        title="Manutenzione caldaie"
        description={[
          "La manutenzione delle caldaie è regolata dai DPR 412/93-551/93 e D.Lgs. 192/05-311/06 e successive modifiche, che obbligano il responsabile della caldaia a far eseguire da personale professionalmente qualificato la manutenzione periodica. Con V Services avrai la sicurezza di una manutenzione a norma di legge: targatura impianto/analisi fumi/rilascio allegato obbligatorio/pulizia caldaia. Per la tua caldaia affidati a V Services. Scopri i nostri programmi di manutenzione, i nostri tecnici sapranno consigliarti al meglio. Grazie a un’esperienza decennale e a un personale altamente qualificato, V Services è un’azienda leader nell’assistenza e manutenzione di caldaie. Con i nostri servizi siamo in grado di garantire più sicurezza, più risparmio e prestazioni migliori. I nostri tecnici ti offriranno in ogni momento un’assistenza tempestiva e qualificata, aiutando la tua caldaia a mantenere nel tempo prestazioni elevate e migliori performance di utilizzo."
        ]}
        imageSrc="/bgcards/bg-cardsectionRiscManu.png"
        imageAlt="Servizi di manutenzione caldaie professionali"
      />
      <CosaOffriamoCards
        title="Cosa offriamo"
        cards={[
          { id: '1', title: 'Rapidità', logoSrc: '/ImpiantiManutenzione/rocket-01.svg', logoAlt: 'Rocket icon' },
          { id: '2', title: 'Copertura del territorio', logoSrc: '/ImpiantiManutenzione/map-01.svg', logoAlt: 'Map icon' },
          { id: '3', title: 'Personale qualificato', logoSrc: '/ImpiantiManutenzione/persona.svg', logoAlt: 'Person icon' },
          { id: '4', title: 'Controlli certificati', logoSrc: '/ImpiantiManutenzione/shield.svg', logoAlt: 'Shield icon' },
          { id: '5', title: 'Check-Up', logoSrc: '/ImpiantiManutenzione/search.svg', logoAlt: 'Search icon' }
        ]}
      />
      <CTAWide />
    </>
  )
}
