import { getTranslations } from 'next-intl/server'
import { HeroPageTitle } from '@/components/sections/HeroPageTitle'
import { ContentSectionWithImage } from '@/components/sections/ContentSectionWithImage'
import { CTAWide } from '@/components/sections/CTAWide'

export default async function GalleryPage() {
  const t = await getTranslations('gallery')

  return (
    <>
      <HeroPageTitle
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
        backgroundImage="/hero/herobg-gallery.png"
      />
      <ContentSectionWithImage
        imageSrc="/bgcards/bgGalleryImgcut.png"
        imageAlt="Gallery background image"
        title={t('content.title')}
        description={t('content.description')}
      />
      <CTAWide />
    </>
  )
}
