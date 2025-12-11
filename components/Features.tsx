
import React from 'react';
import { Bot, Target, ShieldCheck, Zap, Clock, TrendingUp } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/Card';
import { Badge } from './ui/Badge';
import { Language } from '../types';
import { translations } from '../translations';

interface FeaturesProps {
  lang: Language;
}

export const Features: React.FC<FeaturesProps> = ({ lang }) => {
  const t = translations[lang].features;

  const icons = [
    <Bot className="h-6 w-6 text-primary" />, // AI Sales
    <Target className="h-6 w-6 text-red-500" />, // Pixel Optimizer
    <ShieldCheck className="h-6 w-6 text-emerald-500" />, // Anti-Banned
    <Zap className="h-6 w-6 text-yellow-500" />, // Instant Onboarding
    <Clock className="h-6 w-6 text-blue-500" />, // 24/7 Operation
    <TrendingUp className="h-6 w-6 text-indigo-500" /> // Unlimited Scalability
  ];

  // Map translations to feature objects and inject static config like icons and layout
  const features = t.list.map((item, index) => ({
    ...item,
    icon: icons[index],
    className: index === 0 || index === 3 || index === 4 ? "md:col-span-2" : "md:col-span-1",
    bgPattern: index === 0
  }));

  return (
    <section id="features" className="py-24 bg-slate-50/50 dark:bg-slate-950/50 backdrop-blur-sm">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 py-1 px-3 border-primary/20 text-primary bg-primary/5">
            {t.badge}
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-foreground">
            {t.title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t.subtitle}
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className={`
                ${feature.className} 
                group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-border/60 hover:border-primary/20
                ${feature.bgPattern ? 'bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800' : 'bg-background/80 backdrop-blur'}
              `}
            >
              {/* Optional Background Pattern for larger cards */}
              {feature.bgPattern && (
                <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none">
                   <svg width="200" height="200" viewBox="0 0 100 100" fill="currentColor">
                     <circle cx="50" cy="50" r="40" />
                   </svg>
                </div>
              )}

              <CardHeader className="relative z-10 pb-2">
                <div className="flex justify-between items-start">
                  <div className="h-12 w-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-slate-200 dark:border-slate-700">
                    {feature.icon}
                  </div>
                  {feature.tag && (
                    <Badge variant="secondary" className="text-[10px] font-bold uppercase tracking-wider bg-slate-900 text-white hover:bg-slate-800">
                      {feature.tag}
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <p className="text-muted-foreground text-[15px] leading-relaxed max-w-[95%]">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};