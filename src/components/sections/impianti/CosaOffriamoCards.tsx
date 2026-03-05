import { Container } from '@/components/layout/Container'
import { ClippedBox } from '@/components/ui/ClippedBox'
import Image from 'next/image'

export type CosaOffriamoCard = {
  id: string
  title: string
  logoSrc?: string
  logoAlt?: string
}

export type CosaOffriamoCardsProps = {
  title: string
  cards: CosaOffriamoCard[]
  className?: string
}

export function CosaOffriamoCards({
  title,
  cards,
  className = '',
}: CosaOffriamoCardsProps) {
  return (
    <section className={`bg-v-faded py-10 md:py-12 ${className}`}>
      <Container>
        <div className="mb-5 md:mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-v-dark">{title}</h2>
        </div>

        {/* Scrollable area with min-width to fit all cards */}
        <div className="overflow-x-auto no-scrollbar">
          <div className="flex gap-4 pb-2 min-w-max">
            {cards.map((card) => (
              <div key={card.id} className="shrink-0">
                {/* Rounded corners and content clipping */}
                <div className="rounded-[20px] overflow-hidden">
                  <ClippedBox
                    variant="cosaOffriamoCardCut"
                    // responsive height
                    className="w-[236px] h-[128px]"
                    innerClassName="h-full w-full bg-[#0F2D58]"
                  >
                    <div className="h-full p-5 flex flex-col items-start justify-start gap-8">
                      {/* Logo */}
                      {card.logoSrc ? (
                        <Image
                          src={card.logoSrc}
                          alt={card.logoAlt || card.title}
                          width={28}
                          height={28}
                          className="object-contain"
                        />
                      ) : (
                        <div className="h-6 w-6 rounded-md bg-white/15 border border-white/15" />
                      )}

                      {/* Title */}
                      <div className="text-[14px] font-bold text-white leading-snug line-clamp-2">
                        {card.title}
                      </div>
                    </div>
                  </ClippedBox>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}