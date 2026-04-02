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

function TextContent({ title, description }: { title: string; description: string | string[] }) {
  return (
    <>
      <h2 className="text-xl md:text-2xl font-bold text-v-dark mb-4 md:mb-6">
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
    </>
  )
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

        {/* ── Mobile layout (< md): image on top, card below, no clip-path ── */}
        <div className="md:hidden rounded-[20px] overflow-hidden shadow-md">
          {/* Image strip */}
          <div className="relative h-48 w-full">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Text card */}
          <div className="bg-white/80 backdrop-blur-sm border border-v-border px-6 py-7">
            <TextContent title={title} description={description} />
          </div>
        </div>

        {/* ── Desktop layout (md+): image background with overlay card + clip-path ── */}
        <div className="hidden md:block relative">
          <ClippedBox
            variant="serviziCardCut"
            className="relative min-h-[500px] lg:min-h-[600px] rounded-[24px] overflow-hidden"
            innerClassName="relative w-full rounded-[24px]"
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
              priority
            />
            <div className="relative z-10 flex items-center justify-center p-8 min-h-[500px] lg:min-h-[600px]">
              <div className="w-full max-w-[750px] lg:max-w-[850px] bg-white/50 border border-[#D0D0D0] rounded-[20px] p-10 lg:p-[52px] backdrop-blur-sm shadow-[0_4px_30px_rgba(0,0,0,0.05)]">
                <TextContent title={title} description={description} />
              </div>
            </div>
          </ClippedBox>
        </div>

      </Container>
    </section>
  )
}
