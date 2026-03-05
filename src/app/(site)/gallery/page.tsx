import { HeroPageTitle } from '@/components/sections/HeroPageTitle'
import { ContentSectionWithImage } from '@/components/sections/ContentSectionWithImage'
import { CTAWide } from '@/components/sections/CTAWide'

export default function GalleryPage() {
  return (
    <>
      <HeroPageTitle
        title="Gallery"
        subtitle="I nostri progetti e realizzazioni"
        backgroundImage="/hero/herobg-gallery.png"
      />
      <ContentSectionWithImage
        imageSrc="/bgcards/bgGalleryImgcut.png"
        imageAlt="Gallery background image"
        title="Scopri le nostre realizzazioni"
        description="Vogliamo mostrarvi i nostri successi: impianti installati, interventi di manutenzione e soluzioni personalizzate che hanno migliorato l'efficienza energetica e il comfort dei nostri clienti."
      />
      <CTAWide />
    </>
  )
}
