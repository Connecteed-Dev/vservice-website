import Image from "next/image";
import { ClippedBox, type ClipVariant } from "@/components/ui/ClippedBox";

type AziendaBlock = {
  title: string;
  body: string;
  imageSrc: string;
  imageAlt: string;
  layout: "textLeftImageRight" | "imageLeftTextRight";
};

export function AziendaSection2() {
  const blocks: AziendaBlock[] = [
    {
      title: "V.Service: leader in climatizzazione e riscaldamento",
      body:
        "V.Service si afferma come un'azienda di riferimento nel settore della climatizzazione e riscaldamento industriale, per industria, capannoni, ospedali, uffici, condomini, aziende e residenziale, specializzata nella progettazione, installazione, manutenzione e assistenza di impianti di condizionamento e riscaldamento. Riconosciuta per la sua expertise specifica in questo ambito, V.Service è un punto di riferimento negli impianti di condizionamento e riscaldamento nel Lazio e tutto il centro Italia. Con oltre 20 anni di esperienza, l'azienda gestisce con competenza e professionalità la manutenzione di impianti civili ed industriali, sia a espansione diretta (gas) che indiretta (acqua).",
      imageSrc: "/azienda/aziendaRightimg.png", // <--  il path giusto
      imageAlt: "Impianti industriali",
      layout: "textLeftImageRight",
    },
    {
      title: "Un centro assistenza autorizzato",
      body:
        "V.Service, un centro assistenza autorizzato per marchi di prestigio come Clivet, M.T.A, Tecnair, Robur Lennox, si distingue nel settore del condizionamento e riscaldamento. Offrendo non solo assistenza ma anche un servizio di vendita di ricambi per questi marchi, V.Service risponde efficacemente alle esigenze dei suoi clienti. La società, vantando certificazioni importanti come la ISO 9001-15 e specializzazioni nella movimentazione dei gas refrigeranti, si pone come leader nel suo settore.",
      imageSrc: "/azienda/aziendaLeftimg.png", // <--  il path giusto
      imageAlt: "Tecnico al lavoro su impianto",
      layout: "imageLeftTextRight",
    },
  ];

  return (
    <section className="bg-v-faded py-16 md:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col gap-12">
          {blocks.map((b, idx) => (
            <AziendaSplitBlock key={idx} {...b} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AziendaSplitBlock({ title, body, imageSrc, imageAlt, layout }: AziendaBlock) {
  const isImageLeft = layout === "imageLeftTextRight";

  // IMPORTANT: clip depends on where the image is placed
  // - image on RIGHT => cut LEFT (splitImageCutLeft) 
  // - image on LEFT  => cut RIGHT (splitImageCutRight)
const clipVariant: ClipVariant = isImageLeft
  ? "aziendaCutRightStraight"   // image on LEFT => cut on RIGHT (straight)
  : "aziendaCutLeftStraight";   // image on RIGHT => cut on LEFT (straight)
  return (
    <div>
      {/* Title above the card */}
      <h2 className="text-2xl md:text-3xl font-bold text-v-dark mb-6">
        {title}
      </h2>

      {/* Card */}
      <div className="bg-white rounded-[20px] overflow-hidden grid grid-cols-1 lg:grid-cols-2">
        {/* LEFT COLUMN */}
        <div className={isImageLeft ? "order-1 lg:order-1" : "order-1 lg:order-1"}>
          {isImageLeft ? (
            <ImageSide imageSrc={imageSrc} imageAlt={imageAlt} clip={clipVariant} />
          ) : (
            <TextSide body={body} />
          )}
        </div>

        {/* RIGHT COLUMN */}
        <div className={isImageLeft ? "order-2 lg:order-2" : "order-2 lg:order-2"}>
          {isImageLeft ? (
            <TextSide body={body} />
          ) : (
            <ImageSide imageSrc={imageSrc} imageAlt={imageAlt} clip={clipVariant} />
          )}
        </div>
      </div>
    </div>
  );
}

function ImageSide({
  imageSrc,
  imageAlt,
  clip,
}: {
  imageSrc: string;
  imageAlt: string;
  clip: ClipVariant;
}) {
  return (
    <ClippedBox
      variant={clip}
      className="h-[240px] md:h-[320px] lg:h-[360px]"
      innerClassName="relative h-full w-full"
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
    </ClippedBox>
  );
}

function TextSide({ body }: { body: string }) {
  return (
    <div className="p-6 md:p-10 lg:p-12 text-sm md:text-base text-gray-600 leading-relaxed">
      {body}
    </div>
  );
}