import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';

interface HowItWorksProps {
  lang: Language;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ lang }) => {
  const t = translations[lang].howItWorks;

  return (
    <section id="how-it-works" className="py-24 bg-white/60 dark:bg-background/60 backdrop-blur-sm border-t border-b border-primary/5">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">{t.title}</h2>
          <p className="text-lg text-muted-foreground">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative max-w-5xl mx-auto">
           {/* Connecting Line (Desktop) */}
           <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-slate-200/50 -z-10"></div>

          {t.steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="h-24 w-24 rounded-full bg-white/80 border-[6px] border-slate-50/50 group-hover:border-primary/10 transition-colors flex items-center justify-center text-2xl font-bold text-primary mb-6 z-10 shadow-sm relative backdrop-blur-md">
                {index + 1}
                <div className="absolute inset-0 rounded-full border border-primary/20 scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500"></div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">{step.title}</h3>
              <p className="text-muted-foreground max-w-xs leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};