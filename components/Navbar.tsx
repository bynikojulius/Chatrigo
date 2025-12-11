import React, { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from './ui/Button';
import { Language } from '../types';
import { translations } from '../translations';

interface NavbarProps {
  lang: Language;
  onToggleLanguage: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, onToggleLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const t = translations[lang].nav;

  // Function to handle smooth scroll
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img 
              src="https://assets.thrivedeskdocs.com/9fc40e9cdf60470eaf6c22923aa8b257/kWAXg3J2v65iQO0VVzroHl3CRANlDw0mDROuKiir.png" 
              alt="Chatrigo" 
              className="h-8 md:h-10 w-auto object-contain"
            />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('features')} className="text-sm font-medium transition-colors hover:text-primary">{t.features}</button>
            <button onClick={() => scrollToSection('how-it-works')} className="text-sm font-medium transition-colors hover:text-primary">{t.howItWorks}</button>
            <button onClick={() => scrollToSection('testimonials')} className="text-sm font-medium transition-colors hover:text-primary">{t.testimonials}</button>
            <button onClick={() => scrollToSection('pricing')} className="text-sm font-medium transition-colors hover:text-primary">{t.pricing}</button>
            
            <div className="flex items-center gap-3 ml-2">
              <button 
                onClick={onToggleLanguage}
                className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-2 py-1 rounded hover:bg-muted"
              >
                <Globe className="h-4 w-4" />
                <span className="uppercase">{lang}</span>
              </button>
              <div className="h-4 w-px bg-border"></div>
              
              <a href="https://app.chatrigo.com" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="sm" className="font-semibold">{t.login}</Button>
              </a>
              
              <Button 
                size="sm" 
                className="font-bold shadow-md shadow-primary/20"
                onClick={() => scrollToSection('pricing')}
              >
                {t.start}
              </Button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <button 
                onClick={onToggleLanguage}
                className="flex items-center gap-1 text-sm font-medium text-muted-foreground"
              >
                <span className="uppercase">{lang}</span>
            </button>
            <button className="p-2 text-muted-foreground hover:text-foreground" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-t p-4 bg-background absolute w-full shadow-lg animate-in slide-in-from-top-2">
          <div className="flex flex-col gap-4">
            <button className="text-left text-sm font-medium hover:text-primary px-2" onClick={() => scrollToSection('features')}>{t.features}</button>
            <button className="text-left text-sm font-medium hover:text-primary px-2" onClick={() => scrollToSection('how-it-works')}>{t.howItWorks}</button>
            <button className="text-left text-sm font-medium hover:text-primary px-2" onClick={() => scrollToSection('pricing')}>{t.pricing}</button>
            <div className="flex flex-col gap-3 mt-2">
              <a href="https://app.chatrigo.com" target="_blank" rel="noopener noreferrer" className="w-full">
                <Button variant="outline" className="w-full">{t.login}</Button>
              </a>
              <Button className="w-full shadow-md" onClick={() => scrollToSection('pricing')}>{t.start}</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};