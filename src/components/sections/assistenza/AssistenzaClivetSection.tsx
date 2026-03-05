import { ChecklistItem } from "@/components/ui/ChecklistItem";

export function AssistenzaClivetSection() {
  return (
    <section className="bg-v-faded py-16 md:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="bg-white rounded-[20px] p-8 md:p-10 lg:p-12">
          {/* Section Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-v-dark mb-6">
            Assistenza autorizzata di sistemi Clivet
          </h2>
          
          {/* Main Content */}
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p className="text-sm md:text-base">
              Per ricevere assistenza sui prodotti Clivet in Italia, contatta il nostro centro assistenza autorizzato.
            </p>
            
            <p className="text-sm md:text-base">
             Per riparazioni di prodotti sia in garanzia che fuori garanzia, siamo specializzati nella manutenzione e nell’assistenza dei prodotti di climatizzazione per il settore industriale, terziario che per il settore residenziale.            
            </p>
              <p className="text-sm md:text-base"> Offriamo una serie di servizi per garantire tutte le funzionalità e i vantaggi delle vostre unità per tutta la durata della loro vita. Interventi rapidi e professionali per assicurare il buon funzionamento nel tempo dell’unità. </p>
          </div>
          
          {/* Services Cards Section */}
          <div className="mt-10 space-y-6">
            {/* Card 1: Impianti e sistemi VRF - Full Width */}
            <div className="bg-v-dark text-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Impianti e sistemi VRF</h3>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                <ChecklistItem text="Primo avviamento" isWhite={true} />
                <ChecklistItem text="Diagnosi di sistema" isWhite={true} />
                <ChecklistItem text="Manutenzione ordinaria" isWhite={true} />
                <ChecklistItem text="Manutenzione straordinaria" isWhite={true} />
                <ChecklistItem text="Controllo efficienza" isWhite={true} />
              </div>
            </div>

            {/* Card 2: Manutenzione ordinaria pompe di calore Clivet - Full Width */}
            <div className="bg-v-dark text-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Manutenzione ordinaria pompe di calore Clivet</h3>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                <ChecklistItem text="Controllo valori termodinamici" isWhite={true} />
                <ChecklistItem text="Verifica assorbimenti elettrici" isWhite={true} />
                <ChecklistItem text="Verifica reso impianto" isWhite={true} />
                <ChecklistItem text="Controllo perdite gas refrigerante" isWhite={true} />
              </div>
            </div>

            {/* Cards 3 & 4: Two cards side by side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 3: Manutenzione straordinaria pompe di calore Clivet */}
              <div className="bg-v-dark text-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Manutenzione straordinaria pompe di calore Clivet</h3>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  <ChecklistItem text="Ricerca guasti" isWhite={true} />
                  <ChecklistItem text="Riparazioni" isWhite={true} />
                  <ChecklistItem text="Diagnosi computerizzata" isWhite={true} />
                </div>
              </div>

              {/* Card 4: Vendita ricambi */}
              <div className="bg-v-dark text-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Vendita ricambi</h3>
                <div className="space-y-2">
                  <ChecklistItem text="Vendita ricambi autorizzati e originali" isWhite={true} />
                </div>
              </div>
            </div>
          </div>
          
        
        </div>
      </div>
    </section>
  );
}
