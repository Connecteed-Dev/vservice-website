import { HeroPageTitle } from '@/components/sections/HeroPageTitle'
import { TextLeftImageRightSection } from '@/components/sections/impianti/TextLeftImageRightSection'
import { ServiziBackgroundCardSection } from '@/components/sections/impianti/ServiziBackgroundCardSection'
import { CTAWide } from '@/components/sections/CTAWide'

export default function CondizionamentoProgettazioneInstallazionePage() {
  return (
    <>
      <HeroPageTitle
        title="Progettazione e installazione"
        subtitle="Impianti di condizionamento"
        backgroundImage="/hero/herobg-manutenzione.png"
      />
      <TextLeftImageRightSection
        title="Scopri i nostri impianti: comfort e risparmio energetico garantiti"
        description={[
          "Progettare e installare un impianto di condizionamento di ultima generazione è la scelta migliore da fare per i molti vantaggi che porta, sia in termini di miglioramento della qualità della vita di chi occupa l'ambiente, sia in termini di risparmio energetico e, quindi, economico che ne derivano. Un impianto di climatizzazione permette di regolare la temperatura interna, sia che ci sia molto caldo, sia che sia freddo, ma non solo, oltre a restituire una temperatura ideale e costante nell'ambiente in cui è inserito, permette di mantenere il giusto livello di umidità.",
          "In più, le moderne soluzioni di condizionamento svolgono un'azione di purificazione dell'aria, che viene filtrata, migliorando così notevolmente la vivibilità nello spazio. Esistono varie soluzioni di impianto per industria, capannoni, ospedali, uffici, condomini, aziende e anche per la casa. Il nostro team di installatori esperti è in grado di progettare e installare impianti su misura per condomini, industria, capannoni, ospedali, per grandi aziende, laboratori, officine, negozi, uffici e per case private e singole unità abitative."
        ]}
        imageSrc="/condizionamento/Prog-imgright.png"
        imageAlt="Impianto di condizionamento"
      />
      <ServiziBackgroundCardSection
        title="Gli esperti nella climatizzazione"
        description={[
          "V.Services è la scelta ideale per tutti coloro che cercano professionisti del freddo specializzati nella progettazione e nell'installazione di impianti di condizionamento delle migliori marche. Siamo esperti nel fornire soluzioni di climatizzazione per locali industriali e civili. Con la nostra esperienza e competenza, garantiamo un servizio puntuale e affidabile per l'installazione e la riparazione dei tuoi condizionatori.",
          "Qualsiasi sia lo spazio, noi interveniamo allo scopo di migliorare il comfort e abbassare i consumi energetici. I nostri tecnici qualificati sono in grado di offrire consulenza personalizzata, progettazione su misura e installazione professionale per garantire il massimo rendimento e la soddisfazione del cliente."
        ]}
        imageSrc="/bgcards/bg-cardsection1.png"
        imageAlt="Esperti nella climatizzazione"
      />
      <TextLeftImageRightSection
        title="Soluzioni su misura per ambienti industriali, commerciali e civili"
        description={[
          "Offriamo servizi completi di progettazione e installazione impianti di condizionamento per ogni tipo di ambiente. Dalle piccole abitazioni ai grandi complessi industriali, dai negozi agli uffici, dai capannoni alle strutture sanitarie, abbiamo la soluzione giusta per ogni esigenza di climatizzazione.",
          "La nostra esperienza ventennale nel settore ci permette di analizzare le specifiche necessità di ogni cliente e proporre l'impianto più adatto in termini di efficienza, consumi e costi. Utilizziamo solo prodotti delle migliori marche e tecnologie all'avanguardia per garantire prestazioni eccellenti e durature nel tempo."
        ]}
        imageSrc="/condizionamento/Prog-imgright2.png"
        imageAlt="Soluzioni di condizionamento su misura"
      />
      <CTAWide />
    </>
  )
}
