import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-outfit",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cinzel",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Lata Special · Kala Massala | Homemade Nagpur Masala",
  description:
    "Lata Special Kala Massala — slow-roasted, small-batch homemade Maharashtrian black masala from a Nagpur kitchen. Delivered in 6 days, Nagpur only.",
  keywords: [
    "Kala Massala",
    "Kala Masala",
    "Lata Special",
    "Nagpur masala",
    "homemade masala",
    "Maharashtrian spices",
  ],
  openGraph: {
    title: "Lata Special · Kala Massala",
    description:
      "The dark, slow-roasted masala of a Nagpur kitchen. Orders accepted only in Nagpur, Maharashtra. Delivery in 6 days.",
    type: "website",
    images: ["/images/hero-kala-masala.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${outfit.variable} ${cinzel.variable} antialiased`}>
        <div className="grain" aria-hidden />
        {children}
      </body>
    </html>
  );
}
