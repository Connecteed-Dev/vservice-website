import Image from 'next/image'
import { clipHeroImageSide, clipHeroTitleSide } from '@/lib/shapes'

export type HeroPageTitleProps = {
  title: string
  /** Optional; omit for title-only hero */
  subtitle?: string
  backgroundImage: string
}

/**
 * Reusable inner-page hero: white title area (left) and image (right)
 * separated by one diagonal cut (downward left-to-right). Title on white, dark text.
 */
export function HeroPageTitle({
  title,
  subtitle,
  backgroundImage,
}: HeroPageTitleProps) {
  return (
    <section className="relative overflow-hidden min-h-[320px] md:min-h-[400px] lg:min-h-[480px] bg-white">
      {/* Image: right side only, left edge is the diagonal (same as white right edge) */}
      <div
        className="absolute inset-0 z-0"
        style={{ clipPath: clipHeroImageSide }}
      >
        <Image
          src={backgroundImage}
          alt=""
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
      </div>

      {/* White title area: left side, right edge is the diagonal */}
      <div
        className="absolute inset-0 z-10 bg-white"
        style={{ clipPath: clipHeroTitleSide }}
      />

      {/* Content: title (and optional subtitle) on the white area, dark text */}
      <div className="relative z-20 flex items-center min-h-[320px] md:min-h-[400px] lg:min-h-[480px]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-[90%] sm:max-w-[48%] min-w-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-v-dark leading-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="text-lg md:text-xl text-gray-600 max-w-xl mt-4">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
