import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface FAQProps {
  lang: Language;
}

export const FAQ: React.FC<FAQProps> = ({ lang }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const t = translations[lang].faq;

  return (
    <section className="py-24 bg-slate-50/50 dark:bg-slate-900/20">
      <div className="container px-4 md:px-6 mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-12 tracking-tight">{t.title}</h2>
        
        <div className="space-y-4">
          {t.items.map((faq, index) => (
            <div key={index} className="border border-border rounded-lg bg-background overflow-hidden shadow-sm hover:shadow transition-all">
              <button
                className="w-full flex items-center justify-between p-5 text-left transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-foreground text-lg">{faq.q}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-primary" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-muted-foreground" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="p-5 pt-0 text-muted-foreground leading-relaxed animate-in slide-in-from-top-1 fade-in duration-200 border-t bg-muted/20">
                  <div className="pt-4">{faq.a}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};