"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { faqs } from '@/data/faq';
import { HelpCircle, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { scrollToId } from "@/lib/scrollTo"; 
import { PageSection } from '../layout/PageSection';

export function FAQ() {
  return (
    <PageSection id="sss" className="py-8 px-6 lg:px-8" variant='white'>
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full mb-6 font-bold uppercase tracking-wider text-xs">
            <HelpCircle className="size-4" />
            <span>Sıkça Sorulan Sorular</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Merak <span className="text-transparent bg-clip-text bg-linear-to-r from-teal-500 to-blue-600">Ettikleriniz</span>
          </h2>
          <p className="text-lg text-slate-600">
            Online terapi süreci hakkında en çok sorulan sorular
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="bg-slate-50/50 rounded-[2.5rem] p-6 md:p-10 border border-slate-100 shadow-inner">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-slate-200 rounded-2xl px-6 bg-white hover:border-teal-300 transition-all shadow-sm hover:shadow-md"
              >
                <AccordionTrigger className="text-left hover:no-underline py-5 group">
                  <span className="font-bold text-slate-800 pr-4 group-hover:text-teal-600 transition-colors">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed pb-5 text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA at bottom - Modern Mumlu Kart */}
        <div className="mt-10 text-center bg-linear-to-r from-teal-500 to-blue-600 rounded-[3rem] p-10 text-white shadow-2xl shadow-blue-500/20 relative overflow-hidden group">
          {/* Arka plan süsü */}
          <div className="absolute top-0 right-0 p-10 opacity-10 rotate-12 transition-transform group-hover:scale-110">
            <MessageCircle size={120} />
          </div>

          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              Başka sorularınız mı var?
            </h3>
            <p className="text-teal-50 mb-8 text-lg opacity-90">
              Benimle iletişime geçmekten çekinmeyin. Size yardımcı olmaktan mutluluk duyarım.
            </p>

            <Button
              size="lg"
              variant="primary"
              onClick={() => scrollToId('iletisim')}
              className="h-16 rounded-full px-12 text-lg font-bold shadow-2xl cursor-pointer"
            >
              <MessageCircle className="size-5" />
              İletişime Geç
            </Button>
          </div>
        </div>
      </div>
    </PageSection>
  );
}