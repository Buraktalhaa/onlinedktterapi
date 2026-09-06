import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Expertise } from "@/components/sections/Expertise";
import { FAQ } from "@/components/sections/FAQ";
import { Process } from "@/components/sections/Process";
import { WhoIsItFor } from "@/components/sections/WhoIsItFor";
import { ContactForm } from "@/components/sections/ContactForm";
import { Footer } from "@/components/Footer";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://dktfeyzasahan.com";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Feyza Şahan",
  honorificPrefix: "Dkt.",
  jobTitle: "Dil ve Konuşma Terapisti",
  description:
    "Dkt. Feyza Şahan, çocuk ve yetişkinlerde dil ve konuşma bozukluklarına yönelik bilimsel temelli online terapi hizmetleri sunan uzman bir dil ve konuşma terapistidir.",
  url: siteUrl,
  image: `${siteUrl}/feyza-sahan-hero.jpeg`,
  email: "dktfeyzasahan@gmail.com",
  telephone: "+905051245933",
  sameAs: [
    "https://instagram.com/mugla.dilkonusma",
    "https://facebook.com/feyzasahan",
    "https://linkedin.com/in/feyzasahan",
  ],
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Hacettepe Üniversitesi",
      description: "Dil ve Konuşma Terapisi Lisans (2021–2025)",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "Kapadokya Üniversitesi",
      description: "Dil ve Konuşma Terapisi Yüksek Lisans (2026–2027)",
    },
  ],
  knowsAbout: [
    "Dil ve Konuşma Terapisi",
    "Kekemelik Tedavisi",
    "Geç Konuşma",
    "Otizm Spektrum Bozukluğu",
    "Artikülasyon Bozukluğu",
    "Afazi",
    "Online Terapi",
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Dkt. Feyza Şahan | Online Dil ve Konuşma Terapisi",
  description:
    "Çocuk ve yetişkinlerde dil ve konuşma bozukluklarına yönelik bilimsel temelli online terapi hizmetleri. Kekemelik, geç konuşma, otizm, artikülasyon bozukluğu ve afazi tedavileri.",
  url: siteUrl,
  telephone: "+905051245933",
  email: "dktfeyzasahan@gmail.com",
  image: `${siteUrl}/feyza-sahan-hero.jpeg`,
  priceRange: "₺₺",
  openingHours: "Mo,Tu,We,Th,Fr,Sa 09:00-22:00",
  serviceType: "Dil ve Konuşma Terapisi",
  areaServed: {
    "@type": "Country",
    name: "Türkiye",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Online Terapi Hizmetleri",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gecikmiş Dil ve Konuşma Terapisi" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Artikülasyon ve Fonolojik Bozukluk Terapisi" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Kekemelik (Akıcılık Bozukluğu) Terapisi" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Otizm Spektrum Bozukluğu İletişim Terapisi" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Aile Danışmanlığı ve Ev Programları" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Afazi ve Nörojenik Bozukluk Terapisi" } },
    ],
  },
  employee: {
    "@type": "Person",
    name: "Feyza Şahan",
    honorificPrefix: "Dkt.",
    jobTitle: "Dil ve Konuşma Terapisti",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Online terapi nasıl çalışır?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Online terapi, video konferans platformları üzerinden gerçekleştirilen profesyonel terapi seanslarıdır. Danışanlar kendi konforlu ortamlarında, belirlenen günde ve saatte seansa katılırlar. Etkileşimli materyaller ve oyunlarla seanslar zenginleştirilir.",
      },
    },
    {
      "@type": "Question",
      name: "Hangi yaş gruplarıyla çalışıyorsunuz?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hem çocuklarla (2 yaş ve üzeri) hem de yetişkinlerle çalışıyorum. Her yaş grubuna özel terapi programları ve materyaller hazırlıyorum.",
      },
    },
    {
      "@type": "Question",
      name: "Bir seans ne kadar sürer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Standart terapi seansları 45-50 dakika sürmektedir. İlk değerlendirme seansı genellikle 60 dakika olarak planlanır.",
      },
    },
    {
      "@type": "Question",
      name: "İlk görüşme ücretli mi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hayır, ilk ön görüşme tamamen ücretsizdir. Bu görüşmede ihtiyaçlarınız değerlendirilir ve terapi süreci hakkında detaylı bilgi verilir.",
      },
    },
    {
      "@type": "Question",
      name: "Online terapi yüz yüze terapiden farklı mı?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Online terapi, günümüz teknolojisiyle yüz yüze terapiye eşdeğer kalitede hizmet sunmaktadır. Danışanların kendi ortamlarında olması, özellikle çocuklarda konfor sağlar.",
      },
    },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Dkt. Feyza Şahan | Online Dil ve Konuşma Terapisti",
  url: siteUrl,
  description:
    "Dkt. Feyza Şahan'ın resmi web sitesi. Online dil ve konuşma terapisi hizmetleri.",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteUrl}/?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <main>
        <Hero />
        <Expertise />
        <Process />
        <About />
        <WhoIsItFor />
        <ContactForm />
        <FAQ />
        <Footer />
      </main>
    </>
  );
}

