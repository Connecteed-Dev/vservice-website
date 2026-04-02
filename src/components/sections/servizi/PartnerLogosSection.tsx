import Image from 'next/image'
import { Container } from '@/components/layout/Container'

// scale overrides zoom the image visually without affecting layout — used for logos
// with excessive whitespace in the source file (e.g. Tecnair is a 600×600 square
// where the actual mark occupies only ~50% of the canvas).
const logos = [
  { src: '/logoPart/clivet logo.png',     alt: 'Clivet',    href: 'https://www.clivet.com/',                             w: 140, h: 48 },
  { src: '/logoPart/robur logo.png',       alt: 'Robur',     href: 'https://www.robur.com/it/',                           w: 140, h: 48 },
  { src: '/logoPart/viessmann logo.png',   alt: 'Viessmann', href: 'https://www.viessmann.it/',                           w: 140, h: 48 },
  { src: '/logoPart/hoval logo.png',       alt: 'Hoval',     href: 'https://www.hoval.it/it_IT/',                         w: 110, h: 48 },
  { src: '/logoPart/TECNAIR logo.jpg',     alt: 'Tecnair',   href: 'https://www.tecnair.com/IT_it/',                      w: 120, h: 120 },//size custom to logo tecnair lv because it s very small 
  { src: '/logoPart/maxa logo.jpg',        alt: 'Maxa',      href: 'https://www.maxa.it/index.php?lang=it&mode=home',     w: 140, h: 48 },
]

export function PartnerLogosSection() {
  return (
    <section className="bg-v-faded py-8">
      <Container>
        <div className="bg-white rounded-[20px] border border-v-border px-10 py-10 flex flex-wrap items-center justify-center gap-10 lg:gap-16">
          {logos.map((logo) => (
            <a
              key={logo.alt}
              href={logo.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity duration-200 grayscale hover:grayscale-0"
              aria-label={logo.alt}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.w}
                height={logo.h}
                className="object-contain"
              />
            </a>
          ))}
        </div>
      </Container>
    </section>
  )
}
