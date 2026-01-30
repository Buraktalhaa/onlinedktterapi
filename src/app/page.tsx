import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Expertise } from "@/components/sections/Expertise";
import { FAQ } from "@/components/sections/FAQ";
import { Process } from "@/components/sections/Process";
import { WhoIsItFor } from "@/components/sections/WhoIsItFor";
import { ContactForm } from "@/components/sections/ContactForm";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <Hero /> {/* white */}
      <Expertise /> {/* gray */}
      <Process /> {/* white */}
      <About /> {/* gray */}
      <WhoIsItFor /> {/* white */}
      <ContactForm /> {/* gradient */}
      <FAQ /> {/* white */}
      <Footer />
    </main>
  );
}

