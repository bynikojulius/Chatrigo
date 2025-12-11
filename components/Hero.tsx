import React, { useState } from 'react';
import { ArrowRight, Sparkles, CheckCircle2, MessageSquare, PlayCircle, ShieldCheck } from 'lucide-react';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { Input } from './ui/Input';
import { generateWelcomeMessage } from '../services/geminiService';
import { Language } from '../types';
import { translations } from '../translations';

interface HeroProps {
  lang: Language;
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  const [businessType, setBusinessType] = useState('');
  const [generatedMessage, setGeneratedMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const t = translations[lang].hero;

  const handleGenerate = async (type?: string) => {
    const query = type || businessType;
    if (!query.trim()) return;
    
    if (type) setBusinessType(type);

    setIsLoading(true);
    const msg = await generateWelcomeMessage(query, lang);
    setGeneratedMessage(msg);
    setIsLoading(false);
  };

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden pt-12 md:pt-24 pb-20">
      <div className="container relative px-4 md:px-6 mx-auto">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          
          <div className="flex flex-col gap-6 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start">
              <Badge variant="secondary" className="gap-1.5 py-1 px-3 bg-white/50 backdrop-blur border shadow-sm text-primary">
                <Sparkles className="h-3.5 w-3.5" />
                <span>{t.badge}</span>
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground">
              {lang === 'id' ? (
                 <>
                   Ubah WhatsApp Jadi <br />
                   <span className="text-primary relative inline-block">
                     Mesin Penjualan.
                     <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary/20 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                        <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                     </svg>
                   </span>
                 </>
              ) : (
                <>
                  Automate WhatsApp. <br />
                  <span className="text-primary relative inline-block">
                    Explode Sales.
                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary/20 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                       <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                    </svg>
                  </span>
                </>
              )}
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {t.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Button size="lg" className="gap-2 h-12 px-8 text-base shadow-lg shadow-primary/25 font-bold" onClick={scrollToPricing}>
                {t.ctaPrimary} <ArrowRight className="h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="h-12 px-8 text-base bg-white/50 backdrop-blur border-slate-300"
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <PlayCircle className="h-4 w-4 mr-2" /> {t.ctaSecondary}
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-2 text-sm text-muted-foreground mt-4">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-8 w-8 rounded-full border-2 border-background bg-slate-200 flex items-center justify-center overflow-hidden">
                      <img src={`https://picsum.photos/32/32?random=${i}`} alt="User" className="h-full w-full object-cover" />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col text-xs">
                   <span className="font-bold text-foreground">{t.trustText}</span>
                </div>
              </div>
              <div className="h-8 w-px bg-border hidden sm:block"></div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-500 fill-emerald-100/50" />
                <span className="font-medium text-emerald-800 dark:text-emerald-400">{t.partner}</span>
              </div>
            </div>
          </div>

          {/* Interactive AI Demo Card */}
          <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none perspective-1000">
            <div className="relative rounded-xl border bg-background shadow-2xl transition-all duration-300 hover:shadow-primary/5 ring-1 ring-slate-900/5">
              
              {/* Fake Browser Toolbar */}
              <div className="flex items-center gap-2 border-b bg-muted/40 p-3">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-400/80"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-400/80"></div>
                  <div className="h-3 w-3 rounded-full bg-green-400/80"></div>
                </div>
                <div className="ml-2 flex-1 rounded-md bg-background/50 border h-6 flex items-center px-3 text-[10px] text-muted-foreground font-mono">
                  app.chatrigo.com/automation
                </div>
              </div>
              
              <div className="p-6 md:p-8 space-y-6">
                <div className="space-y-3">
                  <label className="text-sm font-semibold leading-none flex items-center justify-between">
                    <span>{t.demoTitle}</span>
                    <span className="text-[10px] uppercase tracking-wider text-primary font-bold bg-primary/10 px-2 py-0.5 rounded-full ring-1 ring-primary/20">{t.demoBadge}</span>
                  </label>
                  
                  <div className="flex gap-2">
                    <Input
                      placeholder={t.demoPlaceholder}
                      value={businessType}
                      onChange={(e) => setBusinessType(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
                      className="h-10 border-slate-300 focus-visible:ring-primary"
                    />
                    <Button onClick={() => handleGenerate()} isLoading={isLoading} className="h-10 px-6 font-semibold">
                      {t.demoButton}
                    </Button>
                  </div>

                  {/* Predefined Chips */}
                  <div className="flex flex-wrap gap-2 items-center">
                    <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-wide">{t.chipsTitle}</span>
                    {t.chips.map((type) => (
                      <Badge 
                        key={type}
                        variant="outline" 
                        className="cursor-pointer hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all text-[10px] px-2 py-0.5 font-normal bg-slate-50"
                        onClick={() => handleGenerate(type)}
                      >
                        {type}
                      </Badge>
                    ))}
                  </div>

                </div>

                {/* Chat Interface */}
                <div className="bg-[#E5DDD5] dark:bg-slate-900 rounded-lg p-4 h-[240px] border relative overflow-hidden flex flex-col justify-end shadow-inner">
                   {/* Background Pattern for Chat */}
                   <div className="absolute inset-0 opacity-[0.4] pointer-events-none" 
                        style={{backgroundImage: 'url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")', backgroundSize: '400px'}}>
                   </div>

                  {generatedMessage ? (
                    <div className="flex gap-3 animate-in slide-in-from-bottom-5 fade-in duration-500 relative z-10">
                      <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-emerald-600 flex items-center justify-center text-white shrink-0 shadow-sm ring-2 ring-white">
                        <MessageSquare className="h-4 w-4" />
                      </div>
                      <div className="bg-white dark:bg-slate-800 p-3.5 rounded-2xl rounded-tl-none shadow-sm text-sm border-r-2 border-b-2 border-black/5 max-w-[90%]">
                         <p className="whitespace-pre-wrap leading-relaxed text-slate-800 dark:text-slate-200 text-[13.5px]">{generatedMessage}</p>
                         <span className="text-[10px] text-slate-400 block text-right mt-1.5 flex items-center justify-end gap-1">
                            Just now <span className="text-primary">✓✓</span>
                         </span>
                      </div>
                    </div>
                  ) : (
                     <div className="h-full flex flex-col items-center justify-center text-center space-y-3 p-4 relative z-10">
                       <div className="h-12 w-12 rounded-full bg-white/60 backdrop-blur flex items-center justify-center animate-pulse shadow-sm">
                         <Sparkles className="h-6 w-6 text-primary" />
                       </div>
                       <div className="space-y-1 bg-white/40 backdrop-blur p-3 rounded-lg">
                         <p className="text-sm font-bold text-slate-800">{t.aiPlaceholder}</p>
                         <p className="text-xs text-slate-600 max-w-[200px] leading-relaxed">
                           {t.aiPlaceholderDesc}
                         </p>
                       </div>
                     </div>
                  )}
                </div>
              </div>
            </div>
            
            {/* Decorative background blobs - Made more subtle to not conflict with canvas */}
            <div className="absolute -z-10 top-1/2 right-10 w-72 h-72 bg-primary/10 rounded-full blur-[100px] -translate-y-1/2"></div>
            <div className="absolute -z-10 bottom-0 left-10 w-64 h-64 bg-emerald-500/5 rounded-full blur-[80px] translate-y-1/2"></div>
          </div>

        </div>
      </div>
    </section>
  );
};