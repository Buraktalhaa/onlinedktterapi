"use client";

import { useState } from "react";
import Link from "next/link";
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
        // Scrolled efektini kaldırdık, FAQ'daki degradeyi sabitledik
        "bg-linear-to-r from-teal-500 to-blue-600"
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* LOGO */}
        <Link href="/" className="group flex flex-col leading-tight">
          <span className="text-2xl font-extrabold tracking-tight text-white">
            Feyza Şahan
          </span>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-teal-100">
            Dil ve Konuşma Terapisti
          </span>
        </Link>

        {/* DESKTOP MENU */}
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

        {/* DESKTOP CTA */}
        <div className="hidden md:flex">
          <Button
            variant="primary"
            onClick={() => goTo("iletisim")}
            className="h-14 rounded-2xl text-lg font-bold cursor-pointer"
          >
            Ücretsiz Ön Görüşme
          </Button>

        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden rounded-xl p-2 text-white hover:bg-white/10 transition cursor-pointer"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-teal-600 border-t border-white/10 animate-in slide-in-from-top duration-300">
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
              className="rounded-full px-6 font-bold active:scale-95"
            >
              <Calendar className="h-4 w-4 mr-2" />
              Ücretsiz Ön Görüşme
            </Button>

          </nav>
        </div>
      )}
    </header>
  );
}