import { HeroPageTitle } from '@/components/sections/HeroPageTitle'
import { NewsStripSection } from '@/components/sections/homePage/NewsStripSection'

export default function NewsPage() {
  return (
    <>
      <HeroPageTitle
        title="News"
        subtitle="Le ultime novità dal settore"
        backgroundImage="/news/news-hero-image.png"
      />
      <NewsStripSection />
    </>
  )
}
