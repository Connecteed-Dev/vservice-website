import { getTranslations } from 'next-intl/server'
import { HeroPageTitle } from '@/components/sections/HeroPageTitle'
import { ContactFormSection } from '@/components/sections/ContactFormSection'

export default async function PreventivoPage() {
  const t = await getTranslations('preventivo.hero')

  return (
    <>
      <HeroPageTitle
        title={t('title')}
        subtitle={t('subtitle')}
        backgroundImage="/preventivo/preventivo-hero-image.png"
      />
      <ContactFormSection />
    </>
  )
}
