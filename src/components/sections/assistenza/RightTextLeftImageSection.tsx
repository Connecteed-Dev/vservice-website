import Image from 'next/image'
import { Container } from '@/components/layout/Container'
import { ClippedBox } from '@/components/ui/ClippedBox'

interface RightTextLeftImageSectionProps {
  subtitle: string
  title: string
  description: string
  imageSrc: string
  imageAlt: string
}

export function RightTextLeftImageSection({
  subtitle,
  title,
  description,
  imageSrc,
  imageAlt
}: RightTextLeftImageSectionProps) {
  return (
    <section className="py-16 md:py-20 bg-v-faded">
      <Container>
        {/* Outer Card with no padding - content hugs edges */}
        <div className="bg-white rounded-[24px] shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
            {/* Left Side - Text */}
            <div className="order-1 lg:order-1 p-8 md:p-12">
              <h3 className="text-lg md:text-xl font-light text-v-light mb-4">
                {subtitle}
              </h3>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-v-dark mb-6 leading-tight">
                {title}
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                {description}
              </p>
            </div>

            {/* Right Side - Image with Diagonal Cut - hugs the edges */}
            <div className="relative h-[300px] md:h-[400px] lg:h-[500px] order-2 lg:order-2">
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
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </ClippedBox>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}