import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond, Noto_Sans_Devanagari, Noto_Serif_Devanagari, Outfit } from "next/font/google";
import Script from "next/script";
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

const hindiDisplay = Noto_Serif_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-hindi-display",
  display: "swap",
});

const hindiBody = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["300", "400", "500"],
  variable: "--font-hindi-body",
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
    images: ["/images/hero-kala-masala2.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-2MPBST4NRX" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2MPBST4NRX');
          `}
        </Script>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '27999206519748769');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height={1}
            width={1}
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=27999206519748769&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body
        className={`${cormorant.variable} ${outfit.variable} ${cinzel.variable} ${hindiDisplay.variable} ${hindiBody.variable} antialiased`}
      >
        <div className="grain" aria-hidden />
        {children}
      </body>
    </html>
  );
}
