import { getTranslations } from 'next-intl/server'
import Image from "next/image";
import { ClippedBox, type ClipVariant } from "@/components/ui/ClippedBox";

type AziendaBlock = {
  title: string;
  body: string;
  imageSrc: string;
  imageAlt: string;
  layout: "textLeftImageRight" | "imageLeftTextRight";
};

export async function AziendaSection2() {
  const t = await getTranslations('azienda')

  const blocks: AziendaBlock[] = [
    {
      title: t('block1.title'),
      body: t('block1.body'),
      imageSrc: "/azienda/aziendaRightimg.jpeg",
      imageAlt: "Impianti industriali",
      layout: "textLeftImageRight",
    },
    {
      title: t('block2.title'),
      body: t('block2.body'),
      imageSrc: "/azienda/aziendaLeftimg.jpeg",
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

  const clipVariant: ClipVariant = isImageLeft
    ? "aziendaCutRightStraight"
    : "aziendaCutLeftStraight";

  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-v-dark mb-6">
        {title}
      </h2>

      <div className="bg-white rounded-[20px] overflow-hidden grid grid-cols-1 lg:grid-cols-2">
        <div className={isImageLeft ? "order-1 lg:order-1" : "order-1 lg:order-1"}>
          {isImageLeft ? (
            <ImageSide imageSrc={imageSrc} imageAlt={imageAlt} clip={clipVariant} />
          ) : (
            <TextSide body={body} />
          )}
        </div>

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
