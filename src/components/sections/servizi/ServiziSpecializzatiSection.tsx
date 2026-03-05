import React from 'react'
import { Container } from '@/components/layout/Container'
import { ClippedBox } from '@/components/ui/ClippedBox'
import Image from 'next/image'

interface Service {
  title: string
  description: string
  logoSrc?: string
}

const serviziSpecializzatiData: Service[] = [
  {
    title: 'Pompe di calore/rooftop/caldaie',
    description: 'Installazione di nuove pompe di calore, rooftop e caldaie su impianti esistenti. Migliora l\'efficienza energetica e il comfort termico.',
    logoSrc: '/servizi/bolt.svg'
  },
  {
    title: 'Certificazioni energetiche',
    description: 'Fornitura di documentazione completa per certificazioni energetiche per impianti di riscaldamento e condizionamento.',
    logoSrc: '/servizi/certificate.svg'
  },
  {
    title: 'Libretti FGAS',
    description: 'Compilazione e fornitura dei libretti FGAS. Assicura la conformità normativa del tuo impianto.',
    logoSrc: '/servizi/lock.svg'
  },
  {
    title: 'Libretti d\'impianto',
    description: 'Un documento obbligatorio che deve essere redatto per tutti gli impianti di climatizzazione.',
    logoSrc: '/servizi/note.svg'
  },
  {
    title: 'Riscaldamento',
    description: 'Contabilizzazione, lettura e bollettazione dei costi di riscaldamento. Monitora e gestisci in modo efficiente i tuoi consumi energetici.',
    logoSrc: '/servizi/thermometer.svg'
  },
  {
    title: 'Assistenza tecnica su impianti esistenti',
    description: 'Tecnici specializzati per risolvere guasti e problemi sui tuoi impianti. Ripristina la loro efficienza in breve tempo.',
    logoSrc: '/servizi/settings.svg'
  },
  {
    title: 'Diagnosi energetica',
    description: 'Analisi dettagliata delle prestazioni energetiche del tuo impianto. Ottimizza l\'uso delle risorse energetiche.',
    logoSrc: '/servizi/graph.svg'
  },
  {
    title: 'Ruolo terzo responsabile',
    description: 'Analisi dettagliata delle prestazioni energetiche del tuo impianto. Ottimizza l\'uso delle risorse energetiche.',
    logoSrc: '/servizi/user-check.svg'
  },
  {
    title: 'Centro assistenza autorizzato',
    description: 'Centro di assistenza autorizzato per marchi di fiducia. Affidati a noi per manutenzione e riparazioni certificate.',
    logoSrc: '/servizi/building.svg'
  },
  {
    title: 'Vendita ricambi',
    description: 'Vendita ricambi autorizzati e originali dei marchi Clivet, Lennox, Robur, Tecnair Lv, Viesman.',
    logoSrc: '/servizi/refresh.svg'
  }
]

export function ServiziSpecializzatiSection() {
  return (
    <section className="bg-white py-16 md:py-20">
  <Container>
    {/* OUTER CARD (v-faded) */}
   <div className="bg-v-faded rounded-[24px] p-[24px] md:p-[60px]">
  {/* TEXT (aligned with grid start) */}
  <div className="text-left space-y-6">
    <h2 className="text-3xl md:text-4xl font-bold text-v-dark leading-tight">
      Servizi specializzati per impianti di riscaldamento e condizionamento
    </h2>

    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
      Per ricevere assistenza sui prodotti Clivet in Italia, contatta il nostro centro assistenza autorizzato.
    </p>

    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
      Per riparazioni di prodotti sia in garanzia che fuori garanzia, siamo specializzati nella manutenzione e
      nell’assistenza dei prodotti di climatizzazione per il settore industriale, terziario che per il settore
      residenziale.
    </p>

    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
      Offriamo una serie di servizi per garantire tutte le funzionalità e i vantaggi delle vostre unità per tutta la
      durata della loro vita. Interventi rapidi e professionali per assicurare il buon funzionamento nel tempo
      dell’unità.
    </p>
  </div>

      {/* Grid cards gap 24px = gap-6*/}
      <div className="mt-10 md:mt-[60px] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
        {serviziSpecializzatiData.map((service, index) => (
          <div key={index} className="relative">
            <ClippedBox
              variant="serviziSmallCardCut"
              className="w-[212.8px] h-[340px]"
              innerClassName="h-full w-full overflow-hidden rounded-[20px]"
            >
              <div className="bg-v-dark text-white h-full px-5 pt-6 pb-6 flex flex-col">
                {/* logo or circle */}
                {service.logoSrc ? (
                  <Image
                    src={service.logoSrc}
                    alt={`${service.title} logo`}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                ) : (
                  <div className="h-10 w-10 rounded-full bg-white/85" />
                )}
                 {/* Spacer between circle and title */}
                  <h3 className="mt-6 font-semibold text-sm leading-tight">
                    {service.title}
                  </h3>
               
                  {/* Spacer between title and description */}
                  <p className="mt-3 text-xs leading-relaxed text-white/85">
                    {service.description}
                  </p>
               
              </div>
            </ClippedBox>
          </div>
        ))}
      </div>
    </div>
  </Container>
</section>
  )
}
