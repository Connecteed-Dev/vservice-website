import { getTranslations } from 'next-intl/server'
import { HeroPageTitle } from '@/components/sections/HeroPageTitle'
import { ContactFormSection } from '@/components/sections/ContactFormSection'

export default async function ContattiPage() {
  const t = await getTranslations('contatti.hero')

  return (
    <>
      <HeroPageTitle
        title={t('title')}
        subtitle={t('subtitle')}
        backgroundImage="/hero/herobg-contatti.png"
      />
      <ContactFormSection />
    </>
  )
}
