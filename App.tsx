import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { Language } from './types';
import { ModernBackground } from './components/ui/ModernBackground';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('id');

  const toggleLanguage = () => {
    setLang(prev => prev === 'id' ? 'en' : 'id');
  };

  return (
    <div className="flex flex-col min-h-screen font-sans relative">
      <ModernBackground />
      {/* Content wrapper with higher z-index to sit on top of canvas */}
      <div className="relative z-10 flex flex-col flex-grow">
        <Navbar lang={lang} onToggleLanguage={toggleLanguage} />
        <main className="flex-grow">
          <Hero lang={lang} />
          <Features lang={lang} />
          <HowItWorks lang={lang} />
          <Testimonials lang={lang} />
          <Pricing lang={lang} />
          <FAQ lang={lang} />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;