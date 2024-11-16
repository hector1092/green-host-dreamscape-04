import React from 'react';
import { Globe } from 'lucide-react';
import AboutUsDialog from './AboutUsDialog';

const Header = () => {
  return (
    <>
      <div className="fixed top-0 w-full flex justify-center items-center p-4 z-50 bg-white/80 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <Globe className="w-10 h-10 text-primary animate-spin" style={{ animationDuration: '10s' }} />
          <span className="text-5xl font-extrabold bg-gradient-to-r from-primary via-blue-500 to-primary text-transparent bg-clip-text animate-text-flow">
            Green Host
          </span>
        </div>
        <div className="absolute right-4">
          <AboutUsDialog />
        </div>
      </div>
      
      <header className="relative min-h-screen flex items-center justify-center text-center bg-gradient-to-b from-white via-accent to-white" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="flex flex-col md:flex-row justify-center gap-8 text-6xl md:text-8xl lg:text-9xl font-black mb-12">
              <span className="text-blue-500 animate-float drop-shadow-lg">السرعة</span>
              <span className="text-green-500 animate-float drop-shadow-lg" style={{ animationDelay: '0.2s' }}>الأمان</span>
              <span className="text-purple-500 animate-float drop-shadow-lg" style={{ animationDelay: '0.4s' }}>الاستقرار</span>
            </h1>
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">أفضل خطط الاستضافة بأسعار تنافسية</h2>
              <p className="text-lg md:text-xl text-gray-600">ابدأ موقعك الآن بأقل الأسعار وأعلى جودة</p>
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
        </div>
      </header>
    </>
  );
};

export default Header;