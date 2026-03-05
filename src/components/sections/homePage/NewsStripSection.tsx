import Link from "next/link";
import Image from "next/image";
import { NewsItem } from "@/data/homeNews";
import { homeNews } from "@/data/homeNews";

type NewsCardProps = {
  title: string;
  dateLabel: string;
  href: string;
  imageSrc: string;
  imageAlt?: string;
  className?: string;
};

export function NewsCard({
  title,
  dateLabel,
  href,
  imageSrc,
  imageAlt,
  className,
}: NewsCardProps) {
  return (
    <Link href={href} className={["group block", className].filter(Boolean).join(" ")}>
      <article>
        {/* Image */}
        <div className="relative w-full overflow-hidden rounded-[16px] bg-white/10 aspect-[16/9]">
          <Image
            src={imageSrc}
            alt={imageAlt ?? title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
          />
        </div>

        {/* Text */}
        <div className="pt-4">
          <div className="text-xs text-white/70">{dateLabel}</div>
          <h3 className="mt-1 text-lg font-semibold text-white group-hover:underline">
            {title}
          </h3>
        </div>
      </article>
    </Link>
  );
}

type NewsStripSectionProps = {
  items?: NewsItem[];
};

export function NewsStripSection({ items = homeNews }: NewsStripSectionProps) {
  return (
    <section className="bg-v-dark py-16 md:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">Ultime news</h2>
          <Link
            href="/news"
            className="inline-flex items-center justify-center rounded-full border border-white/40 px-5 py-2 text-sm font-medium text-white hover:bg-white hover:text-v-dark transition"
          >
            Vedi tutte
          </Link>
        </div>

        {/* Grid layout for cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.map((item: NewsItem) => (
            <NewsCard
              key={item.id}
              title={item.title}
              dateLabel={item.dateLabel}
              href={item.href}
              imageSrc={item.imageSrc}
              imageAlt={item.imageAlt}
              className="bg-gray-800 rounded-xl p-6 flex-shrink-0 hover:bg-gray-750 transition-colors"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
