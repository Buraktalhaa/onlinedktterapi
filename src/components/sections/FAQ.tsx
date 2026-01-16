"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Online dil ve konuşma terapisi nasıl gerçekleşiyor?",
    answer: "Seanslarımızı yüksek kaliteli video konferans altyapımız üzerinden gerçekleştiriyoruz. Çocuğun veya yetişkinin kendi doğal ortamında olması, terapinin günlük hayata aktarılmasını hızlandırıyor.",
  },
  {
    question: "İlk görüşmede neler yapılıyor?",
    answer: "İlk seansımız bir değerlendirme sürecidir. Şikayetlerinizi dinliyor, gerekli gözlemleri yapıyor ve size özel bir yol haritası (terapi planı) oluşturuyorum.",
  },
  {
    question: "Seans süreleri ne kadar?",
    answer: "Standart seans süremiz 40-45 dakikadır. Bu sürenin sonunda aile ile kısa bir bilgilendirme ve ev ödevleri paylaşımı yapıyorum.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Merak Edilenler</h2>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}