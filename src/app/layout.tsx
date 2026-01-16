import "@/app/globals.css";
import { Navbar } from "@/components/shared/Navbar";

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
      </body>
    </html>
  );
}
