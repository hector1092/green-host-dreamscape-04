import React from 'react';
import { Globe } from 'lucide-react';
import AboutUsDialog from './AboutUsDialog';

const Header = () => {
  return (
    <>
      <div className="fixed top-0 left-0 p-4 flex items-center gap-2 z-50 bg-secondary/80 backdrop-blur-sm">
        <Globe className="w-8 h-8 text-primary animate-spin" style={{ animationDuration: '10s' }} />
        <span className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-500 text-transparent bg-clip-text animate-text-flow">Green Host</span>
      </div>
      
      <div className="fixed top-0 right-0 p-4 flex gap-4 z-50 bg-secondary/80 backdrop-blur-sm">
        <AboutUsDialog />
      </div>
      
      <header className="relative min-h-screen flex items-center justify-center text-center" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="flex flex-row justify-center gap-8 text-7xl font-black mb-12">
              <span className="text-blue-500 animate-float">السرعة</span>
              <span className="text-green-500 animate-float" style={{ animationDelay: '0.2s' }}>الأمان</span>
              <span className="text-purple-500 animate-float" style={{ animationDelay: '0.4s' }}>الاستقرار</span>
            </h1>
            <a 
              href="https://wa.me/201030435987" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary text-xl px-8 py-4 inline-flex items-center gap-3 hover:scale-105 transition-transform"
            >
              اشترك في أفضل خطط الاستضافة
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;