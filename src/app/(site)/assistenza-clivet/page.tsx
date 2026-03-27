import { getTranslations } from 'next-intl/server'
import { HeroPageTitle } from '@/components/sections/HeroPageTitle'
import { CTAWide } from '@/components/sections/CTAWide'
import { AssistenzaClivetSection } from '@/components/sections/assistenza/AssistenzaClivetSection'
import { RightTextLeftImageSection } from '@/components/sections/assistenza/RightTextLeftImageSection'

export default async function AssistenzaClivetPage() {
  const t = await getTranslations('assistenzaClivet')

  return (
    <>
      <HeroPageTitle
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
        backgroundImage="/hero/herobg-assistenzaClivet.png"
      />

      <AssistenzaClivetSection />

      <RightTextLeftImageSection
        title={t('startup.title')}
        subtitle={t('startup.subtitle')}
        description={t('startup.description')}
        imageSrc="/assistenza-clivet/assistenzaclivet-rightImg.jpeg"
        imageAlt="Assistenza Clivet"
      />

      <CTAWide />
    </>
  )
}
