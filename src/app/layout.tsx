import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "../components";
import { CartProvider } from "../contexts/CartContext";
import { ToastProvider } from "../contexts/ToastContext";
import { FavoritesProvider } from "../contexts/FavoritesContext";
import { AuthToast } from "../components/ui/AuthToast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Food - Pizza Restaurant",
  description: "Delicious pizza and food delivery",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ToastProvider>
          <FavoritesProvider>
            <CartProvider>
              <Header />
              {children}
              <AuthToast />
            </CartProvider>
          </FavoritesProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
