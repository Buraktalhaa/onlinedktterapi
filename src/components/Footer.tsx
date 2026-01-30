"use client";

import { scrollToId } from "@/lib/scrollTo";
import { Phone, Mail, Instagram, Facebook, Linkedin } from "lucide-react";
import * as Contact from "@/data/contact";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-linear-to-b from-teal-700 via-blue-800 to-blue-900 text-teal-50">
      {/* üst geçiş çizgisi */}
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/40 to-transparent" />

      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4">

          {/* 1. Logo & Tanıtım */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-extrabold text-white">
                Feyza Şahan
              </h3>
              <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.25em] text-teal-200">
                Dil ve Konuşma Terapisti
              </p>
            </div>

            <p className="max-w-sm text-sm leading-relaxed text-teal-100/80">
              Çocuk ve yetişkinlerde dil ve konuşma bozukluklarına yönelik,
              bilimsel temelli ve kişiye özel online terapi hizmetleri sunuyorum.
            </p>
          </div>

          {/* 2. Hızlı Linkler */}
          <div>
            <h4 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">
              Hızlı Linkler
            </h4>

            <ul className="space-y-3 text-sm">
              {[
                { id: "uzmanliklar", label: "Uzmanlık Alanlarım" },
                { id: "surec", label: "Nasıl Çalışıyorum?" },
                { id: "hakkimda", label: "Hakkımda" },
                { id: "kimler-icin", label: "Kimler İçin Uygun?" },
                { id: "iletisim", label: "İletişim" },
                { id: "sss", label: "Sıkça Sorulan Sorular" },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToId(item.id)}
                    className="group flex items-center gap-2 transition cursor-pointer"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-teal-300 opacity-0 transition group-hover:opacity-100" />
                    <span className="group-hover:text-white transition">
                      {item.label}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. İletişim */}
          <div>
            <h4 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">
              İletişim
            </h4>

            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                  <Phone size={16} className="text-teal-200" />
                </div>
                <a
                  href={`tel:${Contact.phoneNumber}`}
                  className="hover:text-white transition"
                >
                  {Contact.displayPhone}
                </a>
              </li>

              <li className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                  <Mail size={16} className="text-teal-200" />
                </div>
                <a
                  href={Contact.mailUrl}
                  className="hover:text-white transition"
                >
                  {Contact.emailAddress}
                </a>
              </li>
            </ul>
          </div>

          {/* 4. Saatler & Sosyal */}
          <div className="space-y-8">
            <div>
              <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
                Çalışma Saatleri
              </h4>
              <ul className="space-y-1 text-sm text-teal-100/80">
                <li>Pazartesi – Cuma: 09:00 – 18:00</li>
                <li>Cumartesi: 09:00 – 14:00</li>
                <li>Pazar: Kapalı</li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
                Sosyal Medya
              </h4>
              <div className="flex gap-4">
                {[
                  { href: Contact.instagramUrl, Icon: Instagram },
                  { href: Contact.facebookUrl, Icon: Facebook },
                  { href: Contact.linkedinUrl, Icon: Linkedin },
                ].map(({ href, Icon }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white hover:text-blue-700 hover:scale-105"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ALT BAR */}
        <div className="mt-16 flex flex-col gap-4 border-t border-white/20 pt-8 text-[11px] text-teal-100/70 md:flex-row md:items-center md:justify-between">
          <p>© {currentYear} Feyza Şahan. Tüm hakları saklıdır.</p>

          <div className="flex gap-6">
            {[
              { id: "gizlilik", label: "Gizlilik Politikası" },
              { id: "kosullar", label: "Kullanım Koşulları" },
              { id: "kvkk", label: "KVKK" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToId(item.id)}
                className="hover:text-white transition"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
