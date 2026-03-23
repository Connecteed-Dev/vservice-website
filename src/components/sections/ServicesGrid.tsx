import { getTranslations } from 'next-intl/server'
import { Container } from '@/components/layout/Container'
import { Card } from '@/components/ui/Card'

export async function ServicesGrid() {
  const t = await getTranslations('servicesGrid')

  const services = [
    { title: t('items.climatizzazione.title'), description: t('items.climatizzazione.description'), icon: '❄️' },
    { title: t('items.riscaldamento.title'), description: t('items.riscaldamento.description'), icon: '🔥' },
    { title: t('items.manutenzione.title'), description: t('items.manutenzione.description'), icon: '🔧' },
    { title: t('items.assistenza24.title'), description: t('items.assistenza24.description'), icon: '🚨' },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t('title')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('description')}
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
