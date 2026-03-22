import type { Metadata } from "next";
import { Inter, Noto_Sans } from "next/font/google";
import { ThemeProvider } from "@/lib/theme";
import { SITE_INFO } from "@/lib/siteInfo";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  display: "swap",
});

const { company, contact, web, location, hours } = SITE_INFO;
const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
const fullTitle = `${company.name} — ${capitalize(company.tagline)}`;

export const metadata: Metadata = {
  title: fullTitle,
  description: `Supplier telur segar & kebutuhan dapur terpercaya di Banyumas, Purwokerto & Cilacap. Telur Ayam Negeri, Telur Ayam Kampung, Telur Puyuh, Beras, Minyak Goreng & Gula Pasir berkualitas dengan harga terjangkau. Melayani daerah Banyumas, Purbalingga, Banjarnegara, Kebumen dan sekitarnya.`,
  keywords: [
    "supplier telur banyumas",
    "jual telur ayam negeri purwokerto",
    "telur ayam kampung banyumas",
    "supplier kebutuhan dapur cilacap",
    "telur puyuh purwokerto",
    company.name.toLowerCase(),
    "supplier telur terpercaya banyumas",
    "telur segar purwokerto",
    "beras premium banyumas",
    "minyak goreng murah purwokerto",
    "gula pasir cilacap",
    "UMKM supplier telur jawa tengah",
    "distributor telur banyumas",
    "agen telur purwokerto",
    "supplier telur purbalingga",
    "kebutuhan dapur banjarnegara",
  ],
  authors: [{ name: company.name }],
  creator: company.name,
  openGraph: {
    title: fullTitle,
    description: "Supplier telur segar & kebutuhan dapur terpercaya di Banyumas, Purwokerto & Cilacap. Telur berkualitas langsung dari peternakan lokal.",
    url: web.url,
    siteName: company.name,
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: fullTitle,
    description: "Supplier telur segar & kebutuhan dapur terpercaya di Banyumas & Purwokerto. Telur berkualitas dengan harga terjangkau.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: web.url,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: company.name,
  description: `Supplier telur segar & kebutuhan dapur terpercaya di Banyumas, Purwokerto & Cilacap. ${capitalize(company.tagline)}.`,
  url: web.url,
  telephone: contact.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: location.street,
    addressLocality: location.city,
    addressRegion: location.province,
    postalCode: location.postalCode,
    addressCountry: location.countryCode,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: location.coordinates.latitude,
    longitude: location.coordinates.longitude,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: hours.weekday.open,
      closes: hours.weekday.close,
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: hours.weekend.open,
      closes: hours.weekend.close,
    },
  ],
  priceRange: "$$",
  image: web.ogImage,
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="light scroll-smooth" suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className={`${inter.variable} ${notoSans.variable} font-display bg-background-light dark:bg-background-dark text-neutral-dark dark:text-neutral-light overflow-x-hidden antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
