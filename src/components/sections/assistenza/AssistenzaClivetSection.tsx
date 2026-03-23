import { getTranslations } from 'next-intl/server'
import { ChecklistItem } from "@/components/ui/ChecklistItem";

export async function AssistenzaClivetSection() {
  const t = await getTranslations('assistenzaClivet.section')

  return (
    <section className="bg-v-faded py-16 md:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="bg-white rounded-[20px] p-8 md:p-10 lg:p-12">
          {/* Section Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-v-dark mb-6">
            {t('title')}
          </h2>

          {/* Main Content */}
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p className="text-sm md:text-base">{t('description1')}</p>
            <p className="text-sm md:text-base">{t('description2')}</p>
            <p className="text-sm md:text-base">{t('description3')}</p>
          </div>

          {/* Services Cards Section */}
          <div className="mt-10 space-y-6">
            {/* Card 1: VRF - Full Width */}
            <div className="bg-v-dark text-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">{t('vrf.title')}</h3>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                <ChecklistItem text={t('vrf.primoAvviamento')} isWhite={true} />
                <ChecklistItem text={t('vrf.diagnosiSistema')} isWhite={true} />
                <ChecklistItem text={t('vrf.manutenzioneOrdinaria')} isWhite={true} />
                <ChecklistItem text={t('vrf.manutenzioneStaordinaria')} isWhite={true} />
                <ChecklistItem text={t('vrf.controlloEfficienza')} isWhite={true} />
              </div>
            </div>

            {/* Card 2: Manutenzione ordinaria - Full Width */}
            <div className="bg-v-dark text-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">{t('manutenzioneOrdinaria.title')}</h3>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                <ChecklistItem text={t('manutenzioneOrdinaria.valoriTermodinamici')} isWhite={true} />
                <ChecklistItem text={t('manutenzioneOrdinaria.assorbimentiElettrici')} isWhite={true} />
                <ChecklistItem text={t('manutenzioneOrdinaria.resoImpianto')} isWhite={true} />
                <ChecklistItem text={t('manutenzioneOrdinaria.perditeGas')} isWhite={true} />
              </div>
            </div>

            {/* Cards 3 & 4: Two cards side by side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 3: Manutenzione straordinaria */}
              <div className="bg-v-dark text-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">{t('manutenzioneStaordinaria.title')}</h3>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  <ChecklistItem text={t('manutenzioneStaordinaria.ricercaGuasti')} isWhite={true} />
                  <ChecklistItem text={t('manutenzioneStaordinaria.riparazioni')} isWhite={true} />
                  <ChecklistItem text={t('manutenzioneStaordinaria.diagnosiComputerizzata')} isWhite={true} />
                </div>
              </div>

              {/* Card 4: Vendita ricambi */}
              <div className="bg-v-dark text-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">{t('vendita.title')}</h3>
                <div className="space-y-2">
                  <ChecklistItem text={t('vendita.ricambiOriginali')} isWhite={true} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
