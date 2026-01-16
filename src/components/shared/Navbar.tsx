"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo / İsim */}
        <Link href="/" className="flex flex-col">
          <span className="text-xl font-bold tracking-tight text-slate-900">
            Feyza Şahan
          </span>
          <span className="text-[10px] font-medium uppercase tracking-widest text-blue-600">
            Dil ve Konuşma Terapisti
          </span>
        </Link>

        {/* Menü Linkleri */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <Link href="/#hakkimda" className="hover:text-blue-600 transition">Hakkımda</Link>
          <Link href="/#uzmanliklar" className="hover:text-blue-600 transition">Uzmanlık Alanları</Link>
          <Link href="/#merak-edilenler" className="hover:text-blue-600 transition">S.S.S.</Link>
          <Link href="/blog" className="hover:text-blue-600 transition">Blog</Link>
          <Link href="/iletisim" className="hover:text-blue-600 transition">İletişim</Link>
        </nav>

        {/* Aksiyon Butonu */}
        <div className="flex items-center gap-4">
          <Button asChild className="bg-blue-600 hover:bg-blue-700 hidden sm:flex">
            <Link href="/randevu" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Randevu Al
            </Link>
          </Button>
          
          {/* Mobil Menü Butonu Buraya Gelebilir */}
        </div>
      </div>
    </header>
  );
}