import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import FloatingActions from '@/components/layout/FloatingActions'
import MobileBottomBar from '@/components/layout/MobileBottomBar'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.theaurasalon.in'),
  title: 'Best Unisex Salon in Noida Sector 110 | The Aura Unisex Salon',
  description:
    'Premium unisex salon in Noida Sector 110 offering haircuts, hair color, makeup, bridal makeup, skin treatments and professional beauty services. Book your appointment today.',
  keywords: [
    'best salon in Noida Sector 110',
    'unisex salon Noida',
    'bridal makeup Noida',
    'hair color salon Noida',
    'skin treatment Noida',
    'makeup studio Sector 110',
    'The Aura Salon',
    'beauty salon Noida',
    'hair styling Noida',
    'professional makeup Noida',
  ],
  authors: [{ name: 'The Aura Unisex Salon' }],
  creator: 'The Aura Unisex Salon',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.theaurasalon.in',
    siteName: 'The Aura Unisex Salon',
    title: 'Best Unisex Salon in Noida Sector 110 | The Aura Unisex Salon',
    description:
      'Premium unisex salon in Noida Sector 110 offering haircuts, hair color, makeup, bridal makeup, skin treatments and professional beauty services.',
    images: [
      {
        url: '/images/hero-bg.jpg',
        width: 1400,
        height: 788,
        alt: 'The Aura Unisex Salon - Premium Salon in Noida Sector 110',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Aura Unisex Salon | Best Salon in Noida Sector 110',
    description:
      'Premium unisex salon in Noida Sector 110. Haircuts, hair color, makeup, bridal makeup, skin treatments and more.',
    images: ['/images/hero-bg.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.theaurasalon.in',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BeautySalon',
  name: 'The Aura Unisex Salon',
  description:
    'Premium unisex salon in Noida Sector 110 offering hair, makeup, bridal makeup, skin treatments and professional beauty services.',
  url: 'https://www.theaurasalon.in',
  telephone: '+919266711535',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'SHOP 17A/2, First Floor, Main Market, above Vision Care, near Apollo Pharmacy, Shramik Kunj',
    addressLocality: 'Noida',
    addressRegion: 'Uttar Pradesh',
    postalCode: '201304',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 28.505400,
    longitude: 77.369200,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '10:00',
      closes: '20:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '21:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Sunday',
      opens: '10:00',
      closes: '19:00',
    },
  ],
  priceRange: '₹₹',
  currenciesAccepted: 'INR',
  paymentAccepted: 'Cash, Credit Card, UPI',
  hasMap: 'https://maps.google.com/?q=The+Aura+Unisex+Salon+Sector+110+Noida',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    bestRating: '5',
    ratingCount: '200',
  },
  sameAs: [
    'https://www.instagram.com/theaurasalon',
    'https://www.facebook.com/theaurasalon',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <meta name="theme-color" content="#F8F6F2" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${playfair.variable} ${inter.variable} font-sans bg-background text-foreground`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingActions />
        <MobileBottomBar />
      </body>
    </html>
  )
}
