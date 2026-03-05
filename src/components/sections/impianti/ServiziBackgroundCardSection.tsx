import { Container } from '@/components/layout/Container'
import { ClippedBox } from '@/components/ui/ClippedBox'
import Image from 'next/image'

export type ServiziBackgroundCardSectionProps = {
  title: string
  description: string | string[]
  imageSrc: string
  imageAlt: string
  className?: string
}

export function ServiziBackgroundCardSection({
  title,
  description,
  imageSrc,
  imageAlt,
  className = '',
}: ServiziBackgroundCardSectionProps) {
  return (
    <section className={`bg-v-faded py-16 md:py-20 ${className}`}>
      <Container>
        <div className="relative">
          {/* Outer card with image background and custom cuts */}
          <ClippedBox
            variant="serviziCardCut"
            className="relative h-[400px] md:h-[500px] lg:h-[600px]
                      rounded-[24px] overflow-hidden"
            innerClassName="relative h-full w-full rounded-[24px]"
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
              priority
            />
            
            {/* Inner transparent card Wider Card: max-w-[750px] md:max-w-[850px] (increased from max-w-[650px] md:max-w-[700px]) */}
            <div className="absolute inset-0 flex items-center justify-center p-6 md:p-8">
              <div className="w-full max-w-[750px] md:max-w-[850px] bg-white/50 border border-[#D0D0D0] rounded-[20px] p-[36px] md:p-[52px] backdrop-blur-sm shadow-[0_4px_30px_rgba(0,0,0,0.05)]">
                <h2 className="text-xl md:text-2xl lg:text-2xl font-bold text-v-dark mb-4 md:mb-6">
                  {title}
                </h2>
                <div className="text-sm md:text-base text-gray-700 leading-relaxed space-y-4">
                  {Array.isArray(description) ? (
                    description.map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))
                  ) : (
                    <p>{description}</p>
                  )}
                </div>
              </div>
            </div>
          </ClippedBox>
        </div>
      </Container>
    </section>
  )
}
