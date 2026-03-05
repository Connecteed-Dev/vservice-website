import { Container } from '@/components/layout/Container'
import { ClippedBox } from '@/components/ui/ClippedBox'
import Image from 'next/image'

interface ContentSectionWithImageProps {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  clipVariant?: 'splitImageCutBottomRight' | 'splitImageCutRight' | 'aziendaCutLeftStraight' | 'aziendaCutRightStraight'
  className?: string
}

export function ContentSectionWithImage({
  title,
  description,
  imageSrc,
  imageAlt,
  clipVariant = 'splitImageCutBottomRight',
  className = '',
}: ContentSectionWithImageProps) {
  return (
    <section className={`bg-v-faded py-16 md:py-20 ${className}`}>
      <Container>
        <div className="text-left space-y-6 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-v-dark leading-tight">
            {title}
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            {description}
          </p>
        </div>
        
        <div className="relative w-full h-96 md:h-[500px]">
          <ClippedBox
            variant={clipVariant}
            className="h-full w-full"
            innerClassName="relative h-full w-full"
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              priority={false}
            />
          </ClippedBox>
        </div>
      </Container>
    </section>
  )
}
