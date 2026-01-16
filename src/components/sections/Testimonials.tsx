"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const reviews = [
  { name: "Ayşe B.", comment: "Feyza Hanım'ın çocuklarla iletişimi harika. Oğlum seans günlerini iple çekiyor.", rating: 5 },
  { name: "Murat T.", comment: "Online terapiden bu kadar verim alacağımızı düşünmemiştik. Kekemelik konusunda çok yol kat ettik.", rating: 5 },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Danışan Yorumları</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {reviews.map((r, i) => (
            <Card key={i} className="border-none shadow-sm">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-blue-100 mb-4" />
                <p className="italic text-slate-600 mb-4">&quot;{r.comment}&quot;</p>
                <div className="font-bold text-slate-900">{r.name}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}