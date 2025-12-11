import React from 'react';
import { Card, CardContent } from './ui/Card';
import { Quote } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface TestimonialsProps {
  lang: Language;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ lang }) => {
  const t = translations[lang].testimonials;
  const images = [
    "https://picsum.photos/100/100?random=1",
    "https://picsum.photos/100/100?random=2",
    "https://picsum.photos/100/100?random=3"
  ];

  return (
    <section id="testimonials" className="py-24 bg-slate-950 text-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
      
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <h2 className="text-3xl font-bold text-center mb-16 tracking-tight">{t.title}</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {t.items.map((testimonial, i) => (
            <Card key={i} className="bg-slate-900/50 border-slate-800 text-slate-200 backdrop-blur-sm hover:border-slate-700 transition-colors">
              <CardContent className="pt-8">
                <Quote className="h-8 w-8 text-primary/40 mb-4" />
                <p className="text-lg mb-6 leading-relaxed font-light text-slate-300">"{testimonial.content}"</p>
                <div className="flex items-center gap-4 pt-4 border-t border-slate-800/50">
                  <img src={images[i]} alt={testimonial.role} className="w-10 h-10 rounded-full object-cover ring-2 ring-slate-800" />
                  <div>
                    <div className="font-semibold text-sm text-white">{testimonial.role}</div>
                    <div className="text-xs text-slate-500">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};