import { Container } from '@/components/layout/Container'
import { Card } from '@/components/ui/Card'

export function ServicesGrid() {
  const services = [
    {
      title: 'Climatizzazione',
      description: 'Installazione e manutenzione di impianti di climatizzazione per ambienti civili e industriali.',
      icon: '❄️'
    },
    {
      title: 'Riscaldamento',
      description: 'Soluzioni complete per il riscaldamento con caldaie a condensazione e pompe di calore.',
      icon: '🔥'
    },
    {
      title: 'Manutenzione',
      description: 'Servizi di manutenzione programmata per garantire efficienza e durata nel tempo.',
      icon: '🔧'
    },
    {
      title: 'Assistenza 24/7',
      description: 'Interventi rapidi e assistenza tecnica disponibile 24 ore su 24, 7 giorni su 7.',
      icon: '🚨'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">I Nostri Servizi</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Offriamo soluzioni complete per climatizzazione e riscaldamento, 
            con un team di tecnici specializzati sempre a tua disposizione.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="text-center">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
