import { newsArticles } from '@/content/news'

export type NewsItem = {
  id: number | string;
  title: string;
  dateLabel: string;
  href: string;
  imageSrc: string;
  imageAlt?: string;
};

export const homeNews: NewsItem[] = newsArticles.slice(0, 4).map((article, index) => ({
  id: article.id,
  title: article.title,
  dateLabel: article.date,
  href: `/news/${article.slug}`,
  imageSrc: article.image ?? `/news/news-${index + 1}.jpg`,
  imageAlt: article.title,
}));
