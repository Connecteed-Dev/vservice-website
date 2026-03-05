export default function ServizioPage({ params }: { params: { slug: string } }) {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Servizio: {params.slug}</h1>
      <p>Dettagli del servizio.</p>
    </div>
  )
}
