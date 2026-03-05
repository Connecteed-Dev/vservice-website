import { HeroPageTitle } from '@/components/sections/HeroPageTitle'

export default function NewsArticlePage({ params }: { params: { slug: string } }) {
  return (
    <>
      <HeroPageTitle
        title="Articolo"
        subtitle="Dettagli della notizia"
        backgroundImage="/news/news-hero-image.png"
      />
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <article className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Articolo: {params.slug}</h1>
            <div className="prose prose-lg">
              <p>Contenuto dell'articolo.</p>
            </div>
          </article>
        </div>
      </section>
    </>
  )
}
