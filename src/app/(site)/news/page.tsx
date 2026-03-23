import { getTranslations } from 'next-intl/server'
import { HeroPageTitle } from '@/components/sections/HeroPageTitle'
import { NewsStripSection } from '@/components/sections/homePage/NewsStripSection'

export default async function NewsPage() {
  const t = await getTranslations('news.hero')

  return (
    <>
      <HeroPageTitle
        title={t('title')}
        subtitle={t('subtitle')}
        backgroundImage="/news/news-hero-image.png"
      />
      <NewsStripSection />
    </>
  )
}
