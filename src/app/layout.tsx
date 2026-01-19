import "@/app/globals.css";
import { WhatsappButton } from "@/components/sections/WhatsappButton";
import { Navbar } from "@/components/shared/Navbar";
import { Toaster } from "sonner";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className="antialiased bg-white text-slate-900">
        <Navbar />
        <main className="pt-16">{children}</main>
        <WhatsappButton />

        {/* 🔔 Sonner burada */}
        <Toaster
          position="top-right"
          richColors
          closeButton
        />
      </body>
    </html>
  );
}
