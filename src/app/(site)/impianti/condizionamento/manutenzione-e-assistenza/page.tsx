import { HeroPageTitle } from '@/components/sections/HeroPageTitle'
import { TextLeftImageRightSection } from '@/components/sections/impianti/TextLeftImageRightSection'
import { ServiziBackgroundCardSection } from '@/components/sections/impianti/ServiziBackgroundCardSection'
import { CTAWide } from '@/components/sections/CTAWide'

export default function CondizionamentoManutenzionePage() {
  return (
    <>
      <HeroPageTitle
        title="Manutenzione e assistenza"
        subtitle="Impianti di condizionamento"
        backgroundImage="/hero/herobg-manutenzione.png"
      />
      <TextLeftImageRightSection
        title="Soluzioni su misura per ambienti industriali e civili"
        description={[
          " Il tuo impianto per il condizionamento richiede una manutenzione periodica per garantire le migliori prestazioni ed evitare rischi per la salute. Con il nostro servizio di manutenzione potrai contare sempre su una squadra di professionisti esperti e preparati. È importante affidarsi sempre a tecnici qualificati, certificati e aggiornati. I nostri clienti: industrie, capannoni, ospedali, locali commerciali, locali direzionali, uffici, negozi, condomini, e anche unità abitative.",
          " V.Services offre ai propri clienti servizi di assistenza tecnica specializzata su impianti di condizionamento. Grazie alla notevole esperienza maturata nel settore e ad uno staff tecnico costantemente aggiornato, V.Services è l’interlocutore ideale per la risoluzione di qualunque genere di imprevisto o guasto agli impianti dei marchi di cui è partner. Operiamo offrendo un servizio completo per la manutenzione degli impianti di condizionamento e climatizzazione dei migliori marchi presenti sul mercato.",
          " I climatizzatori e condizionatori sono equiparati agli impianti di riscaldamento e per questo, secondo il DM 20/6/2014, devono essere dotati di libretto impianto e sottoposti a controlli periodici sull’efficienza ogni 4 anni, se hanno una potenza superiore a 10 kw per quelli invernali, e 12 kw per quelli estivi. Tali manutenzioni e controlli periodici hanno l’obiettivo di garantire la sicurezza e la salubrità degli apparecchi installati."
        ]}
        imageSrc="/condizionamento/Manutenzione-imgright.png "
        imageAlt="Manutenzione impianti di condizionamento"
      />
      <ServiziBackgroundCardSection
        title="Un team qualificato ed efficiente"
        description={[
            "I nostri tecnici effettuano sistematicamente corsi di aggiornamento al fine di garantire un servizio efficiente e professionale ed un servizio di manutenzione preventiva di alta qualità per impianti di condizionamento condominiali anche grazie alle attrezzature a disposizione di ultima concezione. Eseguiamo inoltre interventi tecnici su chiamata per ripristino guasti, ovvero interventi straordinari di manutenzione in ogni momento e in modo tempestivo per riportare gli impianti a funzionare correttamente. Offriamo contratti per un’assistenza 24 ore su 24 per la manutenzione e la risoluzione di problematiche improvvise sull’impianto di condizionamento e climatizzazione"        ]}
        imageSrc="/bgcards/bg-cardsectionConManu.png"
        imageAlt="Servizi di manutenzione condizionamento professionali"
      />
      <CTAWide />
    </>
  )
}
