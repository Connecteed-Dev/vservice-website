import { getTranslations } from 'next-intl/server'
import { HeroPageTitle } from '@/components/sections/HeroPageTitle'
import { newsArticles } from '@/content/news'

export default async function NewsArticlePage({ params }: { params: { slug: string } }) {
  const t = await getTranslations('news.article')
  const tArticles = await getTranslations('newsArticles')
  const article = newsArticles.find(a => a.slug === params.slug)

  const translatedTitle = article ? tArticles(`${article.id}.title`) : null
  const translatedContent = article ? tArticles(`${article.id}.content`) : null

  return (
    <>
      <HeroPageTitle
        title={t('heroTitle')}
        subtitle={t('heroSubtitle')}
        backgroundImage="/news/news-hero-image.png"
      />
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <article className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">{translatedTitle || t('notFound')}</h1>
            <div className="prose prose-lg">
              {article ? (
                <div>
                  <p className="text-gray-600 mb-4">{t('datePrefix')} {article.date}</p>
                  <div>{translatedContent}</div>
                </div>
              ) : (
                <p>{t('notFound')}.</p>
              )}
            </div>
          </article>
        </div>
      </section>
    </>
  )
}
