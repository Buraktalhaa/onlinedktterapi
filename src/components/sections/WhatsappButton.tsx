"use client";

import { phoneNumber, whatsappMessage } from "@/data/contact";
import { MessageCircle } from "lucide-react";

export function WhatsappButton() {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp ile iletişime geç"
      className="
        fixed bottom-6 right-6 z-50
        flex h-14 w-14 items-center justify-center
        rounded-full bg-[#25D366] text-white
        shadow-xl shadow-green-500/30
        transition-all hover:scale-105 hover:shadow-2xl
      "
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
