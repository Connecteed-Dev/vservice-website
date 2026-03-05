import Image from "next/image";
import { ClippedBox, ClipVariant } from "@/components/ui/ClippedBox";

type SplitItem = {
  variant: "imageLeft" | "imageRight";
  imageSrc: string;
  imageAlt: string;
  body: string;
};

export function SplitSection() {
  const title = "Ottimizza l'ambiente con soluzioni di climatizzazione avanzate";

  const items: SplitItem[] = [
    {
      variant: "imageLeft",
      imageSrc: "/debt.png",
      imageAlt: "Soggiorno con climatizzatore",
      body:
        "Trasformiamo la tua casa o il tuo ufficio in un ambiente confortevole, con sistemi di climatizzazione che uniscono efficienza energetica e massimo comfort. Efficienza garantita, controllo smart e assistenza continua per la tua tranquillità.",
    },
    {
      variant: "imageRight",
      imageSrc: "/debt1.png",
      imageAlt: "Climatizzatore vicino a finestra",
      body:
        "Progettazione, installazione e manutenzione di impianti di climatizzazione e riscaldamento per ambienti industriali e civili. Tecnologie all'avanguardia e certificazioni per qualità e sicurezza.",
    },
  ];

  return (
    <section className="bg-v-white py-16 md:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-v-dark mb-10">
          {title}
        </h2>

        <div className="flex flex-col gap-10">
          {items.map((item, idx) => (
            <SplitRow key={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SplitRow({ variant, imageSrc, imageAlt, body }: SplitItem) {
  const isImageLeft = variant === "imageLeft";

  const clipVariant: ClipVariant = isImageLeft
    ? "splitImageCutRight" // image on LEFT => cut on RIGHT side of the image
    : "splitImageCutLeft"; // image on RIGHT => cut on LEFT side of the image

  return (
    <div className="bg-v-faded rounded-[20px] overflow-hidden grid grid-cols-1 lg:grid-cols-2">
      {/* Left column */}
      <div className={isImageLeft ? "order-1" : "order-2 lg:order-1"}>
        {isImageLeft ? (
          <ImageBlock imageSrc={imageSrc} imageAlt={imageAlt} clip={clipVariant} />
        ) : (
          <TextBlock body={body} />
        )}
      </div>

      {/* Right column */}
      <div className={isImageLeft ? "order-2" : "order-1 lg:order-2"}>
        {isImageLeft ? (
          <TextBlock body={body} />
        ) : (
          <ImageBlock imageSrc={imageSrc} imageAlt={imageAlt} clip={clipVariant} />
        )}
      </div>
    </div>
  );
}

function ImageBlock({
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
      className="rounded-[20px] overflow-hidden h-[240px] md:h-[330px]"
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

function TextBlock({ body }: { body: string }) {
  return (
    <div className="p-6 md:p-10 lg:p-12 text-sm md:text-base text-gray-600 leading-relaxed">
      {body}
    </div>
  );
}
