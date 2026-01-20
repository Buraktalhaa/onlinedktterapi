import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Expertise } from "@/components/sections/Expertise";
import { FAQ } from "@/components/sections/FAQ";
import { Testimonials } from "@/components/sections/Testimonials";
import { Process } from "@/components/sections/Process";
import { WhoIsItFor } from "@/components/sections/WhoIsItFor";
import { ContactForm } from "@/components/sections/ContactForm";

export default function HomePage() {
  return (
    <main>
      <Hero />
      {/* Expertise ya da Services silinecek */}
      <Expertise />
      <Process />
      <About />
      <WhoIsItFor />
      <ContactForm />
      <Testimonials />
      <FAQ />
    </main>
  );
}

// Hero
// Uzmanlık Alanlarım
// Nasıl Çalışıyorum?
// Hakkımda / Eğitim & Deneyim
// (Kimler İçin Uygun?)
// (Online Terapi Neden Etkili?)
// İletişim / Başvuru Formu
// Footer
