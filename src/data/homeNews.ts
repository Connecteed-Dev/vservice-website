export type NewsItem = {
  id: number | string;
  title: string;
  dateLabel: string;
  href: string;
  imageSrc: string;
  imageAlt?: string;
};

export const homeNews: NewsItem[] = [
  { id: 1, title: "Titolo della notizia", dateLabel: "Data", href: "/news/1", imageSrc: "/news/news-1.jpg" },
  { id: 2, title: "Titolo della notizia", dateLabel: "Data", href: "/news/2", imageSrc: "/news/news-2.jpg" },
  { id: 3, title: "Titolo della notizia", dateLabel: "Data", href: "/news/3", imageSrc: "/news/news-3.jpg" },
  { id: 4, title: "Titolo della notizia", dateLabel: "Data", href: "/news/4", imageSrc: "/news/news-4.jpg" },
];
