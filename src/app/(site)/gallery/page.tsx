import { getTranslations } from 'next-intl/server'
import { HeroPageTitle } from '@/components/sections/HeroPageTitle'
import { GalleryGrid } from '@/components/sections/gallery/GalleryGrid'
import { CTAWide } from '@/components/sections/CTAWide'
import { Container } from '@/components/layout/Container'

const images = [
  { src: '/gallery/gallery1.jpeg', alt: 'Impianto idrico industriale' },
  { src: '/gallery/gallery2.jpeg', alt: 'Impianto pompa esterna' },
  { src: '/gallery/gallery3.jpeg', alt: 'Installazione unità su copertura' },
  { src: '/gallery/gallery4.jpeg', alt: 'Impianto di climatizzazione notturno' },
]

export default async function GalleryPage() {
  const t = await getTranslations('gallery')

  return (
    <>
      <HeroPageTitle
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
        backgroundImage="/hero/herobg-gallery.png"
      />

      {/* Intro */}
      <section className="bg-v-faded py-12 md:py-16">
        <Container>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-v-dark mb-4">
              {t('content.title')}
            </h2>
            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
              {t('content.description')}
            </p>
          </div>
        </Container>
      </section>

      {/* Gallery grid - dark card with rounded corners like Figma */}
      <section className="bg-v-faded py-12 md:py-16">
        <Container>
          <div className="bg-v-dark rounded-[20px] p-8 md:p-12">
            <GalleryGrid images={images} />
          </div>
        </Container>
      </section>

      <CTAWide />
    </>
  )
}
