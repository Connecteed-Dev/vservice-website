import { HeroPageTitle } from '@/components/sections/HeroPageTitle'
import { ContentSectionWithImage } from '@/components/sections/ContentSectionWithImage'
import { CTAWide } from '@/components/sections/CTAWide'

export default function BlogPage() {
  return (
    <>
      <HeroPageTitle
        title="Blog"
        backgroundImage="/hero/herobg-blog.png"
      />
      <ContentSectionWithImage
        imageSrc="/bgcards/bgBlogImgcut.png"
        imageAlt="Blog background image"
        title="Tutte le novità in tema di risparmio energetico"
        description="Volete  scoprire come migliorare l’efficienza energetica e aumentare il comfort ambientale ottimizzando gli impianti di riscaldamento e condizionamento? Seguiteci sul nostro blog!"
      />
      <CTAWide />
    </>
  )
}
