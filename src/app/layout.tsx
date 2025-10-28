import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cart from "@/components/Cart/Cart";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const fraunces = Fraunces({ 
  subsets: ["latin"],
  variable: '--font-fraunces',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://perferofragrance.com'),
  title: "Perféro - Great Perfume Collection",
  description: "Experience seven different scents in one great gift set. Quality perfumes made with care, designed for modern people.",
  keywords: "perfume, fragrance collection, gift set, quality scents, Perféro",
  authors: [{ name: "Perféro" }],
  icons: {
    icon: '/images/perfero logo.png',
    apple: '/images/perfero logo.png',
  },
  openGraph: {
    title: "Perféro - Great Perfume Collection",
    description: "Experience seven different scents in one great gift set.",
    type: "website",
    locale: "en_IN",
    images: ['/images/perfero logo.png'],
  },
  twitter: {
    card: "summary_large_image",
    title: "Perféro - Great Perfume Collection",
    description: "Experience seven different scents in one great gift set.",
    images: ['/images/perfero logo.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${fraunces.variable} font-sans flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <Cart />
      </body>
    </html>
  );
}
