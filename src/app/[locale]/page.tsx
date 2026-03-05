import { HeroSection } from '@/components/sections/homePage/HeroSection'
import { TwentyYearsSection } from '@/components/sections/homePage/TwentyYearsSection'
import { QuoteServicesSection } from '@/components/sections/homePage/QuoteServicesSection'
import { SplitSection } from '@/components/sections/homePage/SplitSection'
import { NewsStripSection } from '@/components/sections/homePage/NewsStripSection'
import { CertificationsSection } from '@/components/sections/homePage/CertificationsSection'

export default function HomePage() {
  return (
    <div className="bg-v-white">
      <HeroSection
        title="Calore e comfort... ovunque tu voglia"
        subtitle="Scopri le nostre soluzioni innovative di riscaldamento"
        backgroundImage="/hero_home_img.png"
      />

      {/* TwentyYears deve stare su bianco */}
      <TwentyYearsSection />

      {/* Spacer bianco per “staccare” dal blocco dopo (come in Figma) */}
      <div className="h-16 md:h-20 bg-v-white" />

      {/* QuoteServices ha il suo bg-v-faded, NON wrappare dentro bg-v-white */}
      <QuoteServicesSection />

      <SplitSection />
      <NewsStripSection />
      <CertificationsSection />
    </div>
  )
}
