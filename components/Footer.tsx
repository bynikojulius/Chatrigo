import React from 'react';
import { Twitter, Linkedin, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 py-16 border-t border-slate-800">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-white p-2 rounded-lg inline-block">
                <img 
                  src="https://assets.thrivedeskdocs.com/9fc40e9cdf60470eaf6c22923aa8b257/kWAXg3J2v65iQO0VVzroHl3CRANlDw0mDROuKiir.png" 
                  alt="Chatrigo" 
                  className="h-8 w-auto"
                />
              </div>
            </div>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed max-w-xs">
              Platform Automasi WhatsApp #1 untuk tim sales & support modern. Skala besar, aman, dan mudah digunakan.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-full hover:bg-slate-800 hover:text-white transition-colors"><Twitter className="h-4 w-4" /></a>
              <a href="#" className="p-2 rounded-full hover:bg-slate-800 hover:text-white transition-colors"><Linkedin className="h-4 w-4" /></a>
              <a href="#" className="p-2 rounded-full hover:bg-slate-800 hover:text-white transition-colors"><Facebook className="h-4 w-4" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-6">Product</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Changelog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Community</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Chatrigo Inc. All rights reserved.
          </div>
          <div>
            Not affiliated with WhatsApp Inc.
          </div>
        </div>
      </div>
    </footer>
  );
};