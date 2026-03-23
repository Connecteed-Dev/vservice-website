import { getTranslations } from 'next-intl/server'
import { HeroPageTitle } from '@/components/sections/HeroPageTitle'

export default async function ServizioPage({ params }: { params: { slug: string } }) {
  const t = await getTranslations('servizi.slug')

  return (
    <>
      <HeroPageTitle
        title={t('heroTitle')}
        subtitle={t('heroSubtitle')}
        backgroundImage="/servizi/servizi-hero-image.png"
      />
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <article className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">{params.slug}</h1>
            <div className="prose prose-lg">
              <p>{t('details')}</p>
            </div>
          </article>
        </div>
      </section>
    </>
  )
}
