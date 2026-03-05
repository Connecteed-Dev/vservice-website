import { Container } from '@/components/layout/Container'
import { ClippedBox } from '@/components/ui/ClippedBox'
import Image from 'next/image'

export type TextLeftImageRightSectionProps = {
  title: string
  description: string[]
  imageSrc: string
  imageAlt: string
  className?: string
}

export function TextLeftImageRightSection({
  title,
  description,
  imageSrc,
  imageAlt,
  className = '',
}: TextLeftImageRightSectionProps) {
  return (
    <section className={`bg-v-faded py-16 md:py-20 ${className}`}>
      <Container>
        {/* Title above the card */}
        <div className="mb-10 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-v-dark leading-tight">
            {title}
          </h2>
        </div>

        {/* Card */}
        <div className="rounded-[24px] bg-v-white overflow-hidden border border-black/5">
          <div className="flex flex-col lg:flex-row">
            {/* Left - Text */}
            <div className="lg:w-[48%] px-8 py-10 md:px-10 md:py-12">
              <div className="space-y-6 text-left">
                {description.map((paragraph: string, idx: number) => (
                  <p
                    key={idx}
                    className="text-[13px] md:text-sm text-v-dark/70 leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Right - Image */}
            <div className="lg:w-[52%] relative min-h-[260px] md:min-h-[340px] lg:min-h-[440px]">
              {/* This wrapper ensures rounded right corners like the screenshot */}
              <div className="absolute inset-0 overflow-hidden rounded-none lg:rounded-r-[24px]">
                <ClippedBox
                  variant="aziendaCutLeftStraight"
                  className="h-full w-full"
                  innerClassName="relative h-full w-full"
                >
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 52vw"
                    priority={false}
                  />
                </ClippedBox>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}