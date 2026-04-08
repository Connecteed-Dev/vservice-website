'use client'

import Link from 'next/link'
import { useReactiveLocale } from '@/hooks/useReactiveLocale'
import { useTranslations } from 'next-intl'
import { localeHref } from '@/lib/localeHref'

export function CertificationsSection() {
  const locale = useReactiveLocale()
  const t = useTranslations('homepage.certifications')

  const certificationLogos = [
    { src: '/Certification/25yCert.jpg', alt: '25 anni di esperienza' },
    { src: '/Certification/FgasCert.png', alt: 'Azienda certificata F-GAS' },
    // { src: '/Certification/CertEnergetica.png', alt: 'Certificazioni Energetiche' }, // hidden per client request
  ]

  const certifications = [
    { title: t('cert1Title'), description: t('description1') },
    { title: t('cert2Title'), description: t('description2') },
    // { title: t('cert3Title'), description: t('description3') }, // hidden per client request
  ]

  return (
    <section className="relative py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header with title and logos */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-v-dark mb-4">
              {t('title')}
            </h2>
            <Link
              href={localeHref(locale, '/certificazioni')}
              className="inline-block border border-v-light text-v-light font-medium py-3 px-8 rounded-full hover:bg-v-light hover:text-white transition-colors"
            >
              {t('scopriDiPiu')}
            </Link>
          </div>

          {/* Certification logos - 4 logos aligned horizontally */}
          <div className="flex flex-wrap justify-center lg:justify-end gap-6">
            {certificationLogos.map((logo, index) => (
              <div key={index} className="w-28 h-28 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-200 p-3">
                <img src={logo.src} alt={logo.alt} className="max-w-full max-h-full object-contain" />
              </div>
            ))}
          </div>
        </div>

        {/* Three text sections aligned horizontally */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="space-y-4">
              <h4 className="text-xl text-black leading-tight">
                {cert.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
