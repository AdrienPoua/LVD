import './globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='fr' suppressHydrationWarning>
      <body>
        {children}
        <Script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(JSONLD) }} />
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "LDV ART - Transport et Manipulation d'Œuvres d'Art",
  description: "Spécialistes du transport et de la manipulation d'œuvres d'art basés à Paris.",
  keywords: [
    "transport d'œuvres d'art",
    "stockage d'art",
    "manutention d'œuvres",
    "sécurité des œuvres",
    "galerie d'art",
    "logistique culturelle",
  ],
  authors: [{ name: 'Adrien POUA', url: 'https://www.adrienpoua.fr' }],
  creator: 'Adrien POUA',
  publisher: 'Adrien POUA',
  openGraph: {
    type: 'website',
    url: 'https://ldvart.fr',
    title: 'LDV ART - Transport & Stockage d\'Œuvres d\'Art',
    description:
      "Nous assurons le transport, le stockage et la manutention d'œuvres d'art avec le plus haut niveau de sécurité et d'expertise.",
    siteName: 'LDV ART',
    images: [
      {
        url: 'https://ldvart.fr/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'Transport et stockage sécurisé d\'œuvres d\'art',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ldvart',
    creator: '@ldvart',
    title: 'LDV ART - Transport & Stockage d\'Œuvres d\'Art',
    description:
      'Expert en logistique d\'art : transport, stockage et manipulation sécurisée des œuvres.',
    images: ['https://ldvart.fr/images/logo.png'],
  },
  robots: 'index, follow',
  alternates: {
    canonical: 'https://ldvart.fr',
  },
}

const JSONLD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "LDV ART",
  "url": "https://ldvart.fr",
  "logo": "https://ldvart.fr/images/logo.png",
  "description": "Spécialistes du transport et de la manipulation d'œuvres d'art basés à Paris.",
  "publisher": {
    "@type": "Person",
    "name": "Adrien POUA",
    "url": "https://www.adrienpoua.fr"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+33 1 23 45 67 89",
    "contactType": "customer service",
    "areaServed": "FR",
    "availableLanguage": ["French", "English"]
  },
  "sameAs": [
    "https://www.instagram.com/ldvart.transports/"
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "9 RUE DE L'EGLISE, 93800 EPINAY-SUR-SEINE",
    "addressLocality": "EPINAY-SUR-SEINE",
    "addressRegion": "Île-de-France",
    "postalCode": "93800",
    "addressCountry": "FR"
  },
  "image": "https://ldvart.fr/images/logo.png",
  "serviceType": "Transport et stockage d'œuvres d'art",
  "services": [
    {
      "@type": "Service",
      "name": "Transport d'œuvres d'art",
      "description": "Service de transport sécurisé pour œuvres d'art.",
      "areaServed": "France et international"
    },
    {
      "@type": "Service",
      "name": "Stockage d'art",
      "description": "Stockage sécurisé pour les œuvres d'art avec contrôle climatique.",
      "areaServed": "France"
    },
    {
      "@type": "Service",
      "name": "Manutention et installation",
      "description": "Installation professionnelle d'œuvres d'art en galeries et musées.",
      "areaServed": "France et Europe"
    },
    {
      "@type": "Service",
      "name": "Sécurité des œuvres",
      "description": "Sécurité des œuvres d'art avec des systèmes de sécurité avancés.",
      "areaServed": "France et Europe"
    }
  ]
};
