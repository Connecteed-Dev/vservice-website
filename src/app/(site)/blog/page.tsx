import { getTranslations } from 'next-intl/server'
import { HeroPageTitle } from '@/components/sections/HeroPageTitle'
import { ContentSectionWithImage } from '@/components/sections/ContentSectionWithImage'
import { CTAWide } from '@/components/sections/CTAWide'

export default async function BlogPage() {
  const t = await getTranslations('blog')

  return (
    <>
      <HeroPageTitle
        title={t('hero.title')}
        backgroundImage="/hero/herobg-blog.png"
      />
      <ContentSectionWithImage
        imageSrc="/bgcards/bgBlogImgcut.png"
        imageAlt="Blog background image"
        title={t('content.title')}
        description={t('content.description')}
      />
      <CTAWide />
    </>
  )
}
