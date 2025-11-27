import { Metadata } from 'next';

export const siteConfig = {
  name: 'VivaCon Pizza',
  description: 'Premium pizza delivery service by VivaCon - Fresh ingredients, authentic recipes, delivered hot to your door',
  url: 'https://vivacon-pizza.com',
  ogImage: '/og-image.jpg',
  keywords: [
    'VivaCon Pizza',
    'pizza delivery',
    'fresh pizza',
    'online pizza order',
    'premium pizza',
    'authentic Italian pizza',
    'food delivery',
    'pizza restaurant'
  ]
};

export function generateMetadata(
  title?: string,
  description?: string,
  image?: string,
  noIndex?: boolean
): Metadata {
  const metaTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name;
  const metaDescription = description || siteConfig.description;
  const metaImage = image || siteConfig.ogImage;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: siteConfig.keywords,
    authors: [{ name: 'VivaCon' }],
    creator: 'VivaCon',
    publisher: 'VivaCon',
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: siteConfig.url,
      title: metaTitle,
      description: metaDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: metaImage,
          width: 1200,
          height: 630,
          alt: metaTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: [metaImage],
      creator: '@VivaCon',
    },
    icons: {
      icon: [{ url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' }, { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }],
      shortcut: '/favicon-16x16.png',
      apple: '/apple-touch-icon.png',
    },
    manifest: '/site.webmanifest',
  };
}

export const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'VivaCon Pizza',
  description: siteConfig.description,
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo.png`,
  image: `${siteConfig.url}/og-image.jpg`,
  telephone: '+1-555-VIVACON',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Pizza Street',
    addressLocality: 'Food City',
    addressRegion: 'FC',
    postalCode: '12345',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '40.7128',
    longitude: '-74.0060',
  },
  openingHours: 'Mo-Su 10:00-23:00',
  priceRange: '$$',
  servesCuisine: ['Italian', 'Pizza'],
  hasMenu: `${siteConfig.url}/#pizza-menu`,
  acceptsReservations: false,
  takeaway: true,
  delivery: true,
};