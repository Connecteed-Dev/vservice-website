import Image from 'next/image'
import { Container } from '@/components/layout/Container'

const logos = [
  { src: '/logoPart/clivet logo.png',     alt: 'Clivet',     href: '#' },
  { src: '/logoPart/robur logo.png',       alt: 'Robur',      href: '#' },
  { src: '/logoPart/viessmann logo.png',   alt: 'Viessmann',  href: '#' },
  { src: '/logoPart/hoval logo.png',       alt: 'Hoval',      href: '#' },
  { src: '/logoPart/TECNAIR logo.jpg',     alt: 'Tecnair',    href: '#' },
  { src: '/logoPart/maxa logo.jpg',        alt: 'Maxa',       href: '#' },
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
              className="flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity duration-200 grayscale hover:grayscale-0"
              aria-label={logo.alt}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={60}
                className="object-contain max-h-[60px] w-auto"
              />
            </a>
          ))}
        </div>
      </Container>
    </section>
  )
}
