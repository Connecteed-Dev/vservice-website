import Link from 'next/link'

export function TwentyYearsSection() {
  return (
    <section className="relative z-20 -mt-16 md:-mt-20 lg:-mt-24 pb-16 md:pb-20 lg:pb-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="bg-v-dark rounded-2xl shadow-2xl p-8 md:p-10 lg:p-12 w-[1280px] h-[612px] flex flex-col justify-center mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase text-white/90 mb-3">
            V.SERVICE
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 leading-snug">
            20 anni di eccellenza in impianti di climatizzazione e riscaldamento
          </h2>
          <div className="text-white/90 space-y-4 max-w-3xl mb-10">
            <p>
              V.Service, con un'ampia esperienza nel settore della
              climatizzazione e del riscaldamento industriale e residenziale,
              rappresenta un punto di riferimento di alto livello nel mercato.
            </p>
            <p>
              Offriamo soluzioni su misura e assistenza continua, con interventi
              rapidi, diagnosi precise e manutenzione programmata per garantire
              efficienza e durata.
            </p>
          </div>

          {/* Adjusted Grid layout for cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <MiniCard
              title="Azienda"
              text="Innovazione ed efficienza con un team competente."
              href="/azienda"
            />
            <MiniCard
              title="Assistenza Clienti"
              text="Assistenza rapida e risolutiva: la priorità del cliente."
              href="/contatti"
            />
            <MiniCard
              title="Servizi"
              text="Servizi su misura. Vendita ricambi autorizzati."
              href="/servizi"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function MiniCard({
  title,
  text,
  href,
}: {
  title: string
  text: string
  href: string
}) {
  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
      <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-600 mb-4 text-sm leading-relaxed">{text}</p>
      <Link
        href={href}
        className="inline-flex items-center px-5 py-2.5 bg-v-light text-white rounded-[40px] text-sm font-medium hover:bg-v-dark transition-colors"
      >
        Scopri di più
      </Link>
    </div>
  )
}