"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Menu, X } from "lucide-react";
import { scrollToId } from "@/lib/scrollTo";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);

  const goTo = (id: string) => {
    scrollToId(id);
    setOpen(false);
  };

  const navItems = [
    { id: "uzmanliklar", label: "Uzmanlık Alanlarım" },
    { id: "surec", label: "Nasıl Çalışıyorum?" },
    { id: "hakkimda", label: "Hakkımda" },
    { id: "kimler-icin", label: "Kimler İçin Uygun?" },
    { id: "iletisim", label: "İletişim" },
    { id: "sss", label: "S.S.S." },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full py-4 transition-all shadow-md",
        "bg-linear-to-r from-teal-500 to-blue-600"
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* LOGO */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="group flex flex-col leading-tight text-left cursor-pointer outline-none"
        >
          <span className="text-2xl font-extrabold tracking-tight text-white transition group-hover:text-teal-50">
            Feyza Şahan
          </span>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-teal-100">
            Dil ve Konuşma Terapisti
          </span>
        </button>

        {/* DESKTOP MENU - lg seviyesine kadar gizli kalır */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-white/90">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => goTo(item.id)}
              className="relative transition hover:text-white group cursor-pointer"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-white transition-all group-hover:w-full" />
            </button>
          ))}
        </nav>

        {/* DESKTOP CTA - md yerine lg yaptık, tablet modunda butonu hizaladık */}
        <div className="hidden lg:flex items-center">
          <Button
            variant="primary"
            onClick={() => goTo("iletisim")}
            className="h-12 rounded-full px-6 font-bold shadow-xl transition-all active:scale-95 cursor-pointer"
          >
            Ücretsiz Ön Görüşme
          </Button>
        </div>

        {/* MOBILE BUTTON - md:hidden yerine lg:hidden yaptık (Tablette artık görünecek) */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden rounded-xl p-2 text-white hover:bg-white/10 transition cursor-pointer"
          aria-label="Menüyü Aç"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* MOBILE/TABLET MENU - md:hidden yerine lg:hidden yaptık */}
      {open && (
        <div className="lg:hidden bg-teal-600 border-t border-white/10 animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col gap-1 px-6 py-8 text-base font-semibold text-white">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => goTo(item.id)}
                className="py-4 border-b border-white/5 text-left active:bg-white/5 transition"
              >
                {item.label}
              </button>
            ))}
            <Button
              variant="primaryLight"
              onClick={() => goTo("iletisim")}
              className="mt-6 h-14 rounded-2xl bg-white text-teal-600 font-bold text-lg active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="h-5 w-5" />
              Ücretsiz Ön Görüşme
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}