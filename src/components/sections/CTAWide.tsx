'use client'

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { ClippedBox } from "@/components/ui/ClippedBox";
import { useReactiveLocale } from '@/hooks/useReactiveLocale'
import { useTranslations } from 'next-intl'
import { localeHref } from '@/lib/localeHref'

interface CTAWideProps {
  title?: string;
  subtitle?: string;
  buttonLabel?: string;
  buttonHref?: string;
  image?: { src: string; alt: string };
}

export function CTAWide({
  title,
  subtitle,
  buttonLabel,
  buttonHref = "/contatti",
  image = { src: "/ctawide_img.png", alt: "Impianti" },
}: CTAWideProps) {
  const locale = useReactiveLocale()
  const t = useTranslations('homepage.ctaWide')
  
  // Use translations if props are not provided
  const finalTitle = title || t('title')
  const finalSubtitle = subtitle || t('subtitle')
  const finalButtonLabel = buttonLabel || t('buttonLabel')
  
  return (
    <section className="bg-white py-12 md:py-16">
      <Container>
        <div className="bg-v-dark rounded-[20px] overflow-hidden grid grid-cols-1 lg:grid-cols-2">
          {/* LEFT: text */}
          <div className="p-8 md:p-10 lg:p-12 text-white flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-bold leading-tight">
              {finalTitle}
            </h2>
            <p className="mt-3 text-white/85">{finalSubtitle}</p>

            <div className="mt-6">
              <Link
                href={localeHref(locale, buttonHref)}
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white hover:text-v-dark transition"
              >
                {finalButtonLabel}
              </Link>
            </div>
          </div>

          {/* RIGHT: image with left cut */}
          <div className="relative h-[220px] md:h-[260px] lg:h-full min-h-[220px]">
            <ClippedBox
              variant="ctaImageCutLeftStraight"
              className="h-full w-full"
              innerClassName="relative h-full w-full"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={false}
              />
            </ClippedBox>
          </div>
        </div>
      </Container>
    </section>
  );
}