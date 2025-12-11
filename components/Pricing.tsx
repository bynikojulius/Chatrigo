import React from 'react';
import { Check } from 'lucide-react';
import { Button } from './ui/Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './ui/Card';
import { Badge } from './ui/Badge';
import { Language } from '../types';
import { translations } from '../translations';

interface PricingProps {
  lang: Language;
}

export const Pricing: React.FC<PricingProps> = ({ lang }) => {
  const t = translations[lang].pricing;

  const PRICING_DATA = [
    {
      name: "Starter",
      price: "Rp 499.000",
      period: "/ 3 month",
      desc: lang === 'id' ? "Paket hemat untuk memulai automasi." : "Affordable start for automation.",
      features: [
        "3 Month Access",
        "6.000 AI Credit",
        "1 WhatsApp Number",
        "Unlimited Contacts",
        "Unlimited AI Agent",
        "Unlimited Conversation",
        "Unlimited Messages",
        "Unlimited Rules",
        "Meta Pixel Tracker",
        "Custom AI Behaviour",
        "AI Knowledge Base",
        "Standard Support"
      ],
      popular: false,
      cta: t.ctaSelect
    },
    {
      name: "Business",
      price: "Rp 2.499.000",
      period: "/ year",
      desc: lang === 'id' ? "Solusi lengkap untuk operasional skala besar." : "Complete solution for large operations.",
      features: [
        "12 Month Access",
        "36.000 AI Credit",
        "5 WhatsApp Number",
        "Unlimited Contacts",
        "Unlimited AI Agent",
        "Unlimited Conversation",
        "Unlimited Messages",
        "Unlimited Rules",
        "Meta Pixel Tracker",
        "Custom AI Behaviour",
        "AI Knowledge Base",
        "Priority Support"
      ],
      popular: true,
      cta: t.ctaSelect
    },
    {
      name: "Pro",
      price: "Rp 1.499.000",
      period: "/ year",
      desc: lang === 'id' ? "Pilihan tepat untuk bisnis berkembang." : "Perfect choice for growing businesses.",
      features: [
        "12 Month Access",
        "24.000 AI Credit",
        "1 WhatsApp Number",
        "Unlimited Contacts",
        "Unlimited AI Agent",
        "Unlimited Conversation",
        "Unlimited Messages",
        "Unlimited Rules",
        "Meta Pixel Tracker",
        "Custom AI Behaviour",
        "AI Knowledge Base",
        "Standard Support"
      ],
      popular: false,
      cta: t.ctaSelect
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-transparent relative z-10">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">{t.title}</h2>
          <p className="text-lg text-muted-foreground">{t.subtitle}</p>
        </div>

        {/* Updated grid to md:grid-cols-3 to keep 3 columns on tablet and desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {PRICING_DATA.map((tier, index) => {
             const isPopular = tier.popular;
             
             return (
              <Card 
                key={index} 
                className={`relative flex flex-col transition-all duration-300 backdrop-blur-md ${isPopular ? 'bg-white/90 dark:bg-slate-900/90 border-primary ring-1 ring-primary shadow-xl scale-105 z-10' : 'bg-white/70 dark:bg-slate-900/70 border-border shadow-sm hover:shadow-md'}`}
              >
                {isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary hover:bg-primary px-4 py-1 text-xs shadow-md font-bold uppercase tracking-wide">{t.popular}</Badge>
                  </div>
                )}
                
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-foreground">{tier.name}</CardTitle>
                  <CardDescription className="mt-2 text-sm text-muted-foreground">{tier.desc}</CardDescription>
                  <div className="mt-4 flex items-baseline flex-wrap">
                    <span className="text-3xl font-extrabold tracking-tight text-foreground">
                      {tier.price}
                    </span>
                    <span className="ml-1 text-sm font-medium text-muted-foreground whitespace-nowrap">{tier.period}</span>
                  </div>
                </CardHeader>

                <CardContent className="flex-1 pt-0">
                  <div className="h-px bg-border my-6"></div>
                  <ul className="space-y-3">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm">
                        <div className="mt-0.5 h-4 w-4 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          <Check className="h-2.5 w-2.5 text-primary" />
                        </div>
                        <span className="text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="pt-4 pb-8">
                  <Button 
                    variant={isPopular ? 'primary' : 'outline'} 
                    className={`w-full font-bold ${isPopular ? 'shadow-lg shadow-primary/20' : 'bg-transparent border-primary text-primary hover:bg-primary hover:text-white'}`}
                    size="lg"
                  >
                    {tier.cta}
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};