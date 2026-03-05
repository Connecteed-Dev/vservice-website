import Link from 'next/link'
import Image from 'next/image'
import { ClippedBox, type ClipVariant } from '@/components/ui/ClippedBox'

export type HeroSectionProps = {
  title: string
  subtitle: string
  backgroundImage: string
}

export function HeroSection({
  title,
  subtitle,
  backgroundImage,
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden min-h-[420px] md:min-h-[520px] lg:min-h-[600px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Hero background"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-28 lg:pt-36 pb-48 lg:pb-64">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl">
            {subtitle}
          </p>
         
        </div>
      </div>
    </section>
  )
}
