import { getTranslations } from 'next-intl/server'
import { Container } from '@/components/layout/Container'
import { ClippedBox } from '@/components/ui/ClippedBox'
import Image from 'next/image'

export async function ServiziSpecializzatiSection() {
  const t = await getTranslations('servizi.specializzati')

  const items = [
    { key: 'pompeDiCalore', logoSrc: '/servizi/bolt.svg' },
    { key: 'certificazioniEnergetiche', logoSrc: '/servizi/certificate.svg' },
    { key: 'librettiFgas', logoSrc: '/servizi/lock.svg' },
    { key: 'librettiImpianto', logoSrc: '/servizi/note.svg' },
    { key: 'riscaldamento', logoSrc: '/servizi/thermometer.svg' },
    { key: 'assistenzaTecnica', logoSrc: '/servizi/settings.svg' },
    { key: 'diagnosiEnergetica', logoSrc: '/servizi/graph.svg' },
    { key: 'terzoResponsabile', logoSrc: '/servizi/user-check.svg' },
    { key: 'centroAssistenza', logoSrc: '/servizi/building.svg' },
    { key: 'venditaRicambi', logoSrc: '/servizi/refresh.svg' },
  ] as const

  return (
    <section className="bg-white py-16 md:py-20">
      <Container>
        <div className="bg-v-faded rounded-[24px] p-[24px] md:p-[60px]">
          <div className="text-left space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-v-dark leading-tight">
              {t('title')}
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              {t('description1')}
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              {t('description2')}
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              {t('description3')}
            </p>
          </div>

          <div className="mt-10 md:mt-[60px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {items.map((item) => (
              <div key={item.key} className="relative">
                <ClippedBox
                  variant="serviziSmallCardCut"
                  className="w-full min-h-[260px] sm:min-h-[300px] lg:h-[340px]"
                  innerClassName="h-full w-full overflow-hidden rounded-[20px]"
                >
                  <div className="bg-v-dark text-white h-full px-5 pt-6 pb-6 flex flex-col">
                    <Image
                      src={item.logoSrc}
                      alt={`${t(`items.${item.key}.title`)} logo`}
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                    <h3 className="mt-6 font-semibold text-sm leading-tight">
                      {t(`items.${item.key}.title`)}
                    </h3>
                    <p className="mt-3 text-xs leading-relaxed text-white/85">
                      {t(`items.${item.key}.description`)}
                    </p>
                  </div>
                </ClippedBox>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
