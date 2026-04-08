export interface NewsArticle {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  date: string
  image?: string
  category: string
}

export const newsArticles: NewsArticle[] = [
  {
    id: '1',
    title: 'Nuove pompe di calore: efficienza energetica al top',
    slug: 'nuove-pompe-calore-efficienza-energetica',
    excerpt: 'Le ultime generazioni di pompe di calore offrono prestazioni eccezionali con consumi ridotti.',
    content: 'Le nuove pompe di calore rappresentano il futuro del riscaldamento domestico e industriale...',
    date: '2024-01-15',
    image: '/news/news-1.jpg',
    category: 'Innovazione'
  },
  {
    id: '2',
    title: 'Manutenzione primaverile: perché è importante',
    slug: 'manutenzione-primaverile-importante',
    excerpt: 'La manutenzione stagionale dei tuoi impianti garantisce efficienza e durata nel tempo.',
    content: 'Con l\'arrivo della primavera è il momento ideale per effettuare la manutenzione degli impianti...',
    date: '2024-01-10',
    image: '/news/news-2.jpg',
    category: 'Consigli'
  },
  {
    id: '3',
    title: 'Bonus ristrutturazione 2024: come approfittarne',
    slug: 'bonus-ristrutturazione-2024-come-approfittarne',
    excerpt: 'Le novità sulle detrazioni fiscali per l\'efficientamento energetico degli edifici.',
    content: 'Il 2024 porta importanti novità per quanto riguarda i bonus fiscali...',
    date: '2024-01-05',
    image: '/news/news-3.jpg',
    category: 'Fiscalità'
  },
  {
    id: '4',
    title: 'Sistemi VRF: la soluzione per grandi ambienti',
    slug: 'sistemi-vrf-soluzione-grandi-ambienti',
    excerpt: 'I sistemi VRF garantiscono climatizzazione precisa e flessibile per uffici e spazi commerciali.',
    content: 'I sistemi VRF (Variable Refrigerant Flow) rappresentano la tecnologia più avanzata per la climatizzazione di grandi edifici...',
    date: '2023-12-20',
    image: '/news/news-4.jpg',
    category: 'Tecnologia'
  }
]
