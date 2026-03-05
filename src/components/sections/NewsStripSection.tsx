import Link from "next/link";
import Image from "next/image";
import { homeNews, NewsItem } from "@/data/homeNews";

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
    <Link
      href={href}
      className={[
        "group block w-[302px] flex-shrink-0 bg-v-dark rounded-xl p-6 transition-colors",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {/* Image */}
      <div className="relative w-full h-[200px] overflow-hidden rounded-[16px]">
        <Image
          src={imageSrc}
          alt={imageAlt ?? title}
          fill
          className="object-cover"
          sizes="302px"
        />
      </div>

      {/* Text */}
      <div className="pt-4">
        <div className="text-xs text-white/80">{dateLabel}</div>
        <h3 className="mt-1 text-lg font-medium text-white group-hover:underline">
          {title}
        </h3>
      </div>
    </Link>
  );
}

export function NewsStripSection() {
  const newsItems = homeNews;
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

        {/* Horizontal Scroll Cards */}
        <div className="overflow-x-auto pb-4">
          <div className="flex space-x-6" style={{ minWidth: "max-content" }}>
            {newsItems.map((item: NewsItem) => (
              <NewsCard
                key={item.id}
                title={item.title}
                dateLabel={item.dateLabel}
                href={item.href}
                imageSrc={item.imageSrc}
                imageAlt={item.imageAlt}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
