import { ClippedBox } from '@/components/ui/ClippedBox'
import Link from 'next/link'

type ServiceButton = {
  text: string
  href: string
}

export function QuoteServicesSection() {
  return (
    <section className="bg-v-faded py-16 md:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-xl md:text-2xl font-semibold text-v-dark mb-8">
          Richiedi un preventivo per i seguenti servizi
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ServiceQuoteCard
            title="Impianti di riscaldamento"
            pills={[
              { text: 'Progettazione e installazione', href: '/impianti/riscaldamento/progettazione-e-installazione' },
              { text: 'Manutenzione e assistenza', href: '/impianti/riscaldamento/manutenzione-e-assistenza' },
            ]}
          />
          <ServiceQuoteCard
            title="Impianti di condizionamento"
            pills={[
              { text: 'Progettazione e installazione', href: '/impianti/condizionamento/progettazione-e-installazione' },
              { text: 'Manutenzione e assistenza', href: '/impianti/condizionamento/manutenzione-e-assistenza' },
            ]}
          />
        </div>
      </div>
    </section>
  )
}

function ServiceQuoteCard({
  title,
  pills,
}: {
  title: string
  pills: ServiceButton[]
}) {
  return (
    <div className="rounded-[20px] overflow-hidden bg-white shadow-sm">
      <ClippedBox variant="quoteCardBothCuts" className="w-full">
        <div className="bg-v-dark text-white px-10 pt-10 pb-[60px] flex flex-col gap-6 min-h-[248px]">
          <h3 className="text-lg md:text-xl font-semibold">{title}</h3>
          <div className="flex flex-col gap-3 max-w-[320px]">
            {pills.map((pill) => (
              <Link
                key={pill.text}
                href={pill.href}
                className="w-full text-left rounded-full border border-white/70 bg-white/10 px-6 py-3 text-sm text-white hover:bg-white/15 transition"
              >
                {pill.text}
              </Link>
            ))}
          </div>
        </div>
      </ClippedBox>
    </div>
  )
}
