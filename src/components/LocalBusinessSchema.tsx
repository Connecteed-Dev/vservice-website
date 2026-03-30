export default function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HVACBusiness',
    name: 'V.Service Srl',
    url: 'https://www.vservice.it',
    telephone: '+39 06 7610790',
    email: 'info@vservice.it',
    vatID: '05881731003',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Via dei Quintili 55b',
      addressLocality: 'Roma',
      addressRegion: 'Lazio',
      postalCode: '00175',
      addressCountry: 'IT',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 41.8719,
      longitude: 12.5499,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '13:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '14:00',
        closes: '17:00',
      },
    ],
    areaServed: [
      { '@type': 'City', name: 'Roma' },
      { '@type': 'AdministrativeArea', name: 'Lazio' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servizi HVAC',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Installazione impianti di climatizzazione' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Installazione impianti di riscaldamento' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Manutenzione pompe di calore' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Assistenza tecnica impianti termici' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Certificazioni energetiche (APE)' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Manutenzione F-GAS' } },
      ],
    },
    sameAs: [
      'https://www.clivet.com/',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
