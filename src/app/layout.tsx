import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "../components";
import { CartProvider } from "../contexts/CartContext";
import { ToastProvider } from "../contexts/ToastContext";
import { FavoritesProvider } from "../contexts/FavoritesContext";
import { FlashProvider } from "../contexts/FlashContext";
import { AuthToast } from "../components/ui/AuthToast";
import { generateMetadata, jsonLd } from "../lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = generateMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ToastProvider>
          <FavoritesProvider>
            <CartProvider>
              <FlashProvider>
                <Header />
                {children}
                <Footer />
                <AuthToast />
              </FlashProvider>
            </CartProvider>
          </FavoritesProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
