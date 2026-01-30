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
