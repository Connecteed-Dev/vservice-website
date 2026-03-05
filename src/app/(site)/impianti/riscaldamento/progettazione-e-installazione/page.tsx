import { HeroPageTitle } from '@/components/sections/HeroPageTitle'
import { TextLeftImageRightSection } from '@/components/sections/impianti/TextLeftImageRightSection'
import { ServiziBackgroundCardSection } from '@/components/sections/impianti/ServiziBackgroundCardSection'
import { CTAWide } from '@/components/sections/CTAWide'

export default function ProgettazioneInstallazioneRiscaldamentoPage() {
  return (
    <>
      <HeroPageTitle
        title="Progettazione e Installazione"
        subtitle="Impianti di Riscaldamento"
        backgroundImage="/hero/herobg-Progettazione.png"
      />
      <TextLeftImageRightSection
        title="Progettazione e installazione di impianti di riscaldamento"
        description={[
          "Specializzati nella progettazione e installazione di nuovi impianti di riscaldamento, siamo esperti nel fornire soluzioni su misura per azienda, ufficio, condominio, capannoni, ospedali, industrie e soluzioni abitative. Il nostro processo inizia con una fase preliminare di analisi e valutazione delle alternative, eseguita da tecnici specializzati. Questo approccio garantisce che ogni cliente riceva la proposta più adatta per il proprio ambiente.",
          "Focalizzati sulla scelta di apparecchiature di ultima generazione, offriamo sistemi che non solo riscaldano gli ambienti ma ne migliorano anche la qualità. Questi impianti sono progettati per riciclare, filtrare e purificare l'aria, oltre a deumidificarla. In alcuni casi, offriamo soluzioni che combinano queste funzioni con il riscaldamento dell'ambiente, garantendo così un comfort ottimale e un ambiente salubre. La nostra dedizione all'innovazione e alla qualità assicura che ogni progetto di riscaldamento sia efficiente, sostenibile e perfettamente in linea con le esigenze specifiche dei nostri clienti."
          ]}
        imageSrc="/Riscaldamento/prog-imgright1.png"
        imageAlt="Impianti di Riscaldamento - Progettazione e Installazione"
      />
      <ServiziBackgroundCardSection
        title="Progettazione e manutenzione di impianti termici su misura"
        description={[
          "La nostra specializzazione nella progettazione e realizzazione di impianti termici e di riscaldamento ci posiziona come leader nel settore. Non solo realizziamo impianti, ma ci occupiamo anche della loro gestione e manutenzione, fornendo un supporto consulenziale di valore. Ogni sistema che progettiamo è personalizzato per soddisfare le specifiche esigenze dei nostri clienti, realizzato con metodo accurato e infine certificato per garantire la massima efficienza e sicurezza. I tecnici di V.Service sono altamente specializzati nella manutenzione di generatori e possiedono tutti i requisiti necessari per la gestione, la manutenzione e l'installazione di questi impianti."
          ,"Questa competenza approfondita assicura che ogni impianto termico e di riscaldamento sia non solo funzionale ed efficiente, ma anche in linea con gli standard normativi più elevati. Con V.Service, i clienti possono aspettarsi soluzioni termiche e di riscaldamento di alta qualità, personalizzate per le loro necessità specifiche."
        ]}
        imageSrc="/bgcards/bg-cardsection1.png"
        imageAlt="Servizi di riscaldamento professionali"
      />
      <CTAWide />
    </>
  )
}
