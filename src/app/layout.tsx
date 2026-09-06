import "@/app/globals.css";
import { WhatsappButton } from "@/components/sections/WhatsappButton";
import { Navbar } from "@/components/shared/Navbar";
import { Toaster } from "sonner";
import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://dktfeyzasahan.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Dkt. Feyza Şahan | Online Dil ve Konuşma Terapisti",
    template: "%s | Dkt. Feyza Şahan",
  },
  description:
    "Dkt. Feyza Şahan, çocuk ve yetişkinlerde dil ve konuşma bozukluklarına yönelik bilimsel temelli online terapi hizmetleri sunar. Kekemelik, geç konuşma, otizm ve daha fazlası için ücretsiz ön görüşme alın.",
  keywords: [
    "Feyza Şahan",
    "Dkt Feyza Şahan",
    "dil ve konuşma terapisti",
    "online konuşma terapisi",
    "online dil terapisi",
    "kekemelik tedavisi",
    "geç konuşma",
    "çocuk dil terapisi",
    "otizm konuşma terapisi",
    "artikülasyon bozukluğu",
    "afazi terapisi",
    "online terapi",
    "konuşma bozukluğu",
    "dil bozukluğu",
    "fonolojik bozukluk",
  ],
  authors: [{ name: "Dkt. Feyza Şahan", url: siteUrl }],
  creator: "Feyza Şahan",
  publisher: "Feyza Şahan",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: siteUrl,
    siteName: "Dkt. Feyza Şahan | Online Dil ve Konuşma Terapisti",
    title: "Dkt. Feyza Şahan | Online Dil ve Konuşma Terapisti",
    description:
      "Çocuk ve yetişkinlerde dil ve konuşma bozukluklarına yönelik bilimsel temelli online terapi. Kekemelik, geç konuşma, otizm ve daha fazlası için ücretsiz ön görüşme.",
    images: [
      {
        url: "/feyza-sahan-hero.jpeg",
        width: 1200,
        height: 630,
        alt: "Dkt. Feyza Şahan - Online Dil ve Konuşma Terapisti",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dkt. Feyza Şahan | Online Dil ve Konuşma Terapisti",
    description:
      "Çocuk ve yetişkinlerde dil ve konuşma bozukluklarına yönelik bilimsel temelli online terapi. Ücretsiz ön görüşme için iletişime geçin.",
    images: ["/feyza-sahan-hero.jpeg"],
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className="antialiased bg-white text-slate-900">
        <Navbar />
        <main>{children}</main>
        <WhatsappButton />

        <Toaster
          position="top-right"
          richColors
          closeButton
        />
      </body>
    </html>
  );
}
