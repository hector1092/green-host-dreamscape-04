import React from 'react';
import { Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import AboutUsDialog from './AboutUsDialog';

const Header = () => {
  return (
    <>
      <div className="fixed top-0 left-0 p-4 flex items-center gap-2 z-50 bg-secondary/80 backdrop-blur-sm">
        <Globe className="w-8 h-8 text-primary animate-spin" style={{ animationDuration: '10s' }} />
        <span className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-500 text-transparent bg-clip-text animate-text-flow">Green Host</span>
      </div>
      
      <div className="fixed top-0 right-0 p-4 flex gap-4 z-50 bg-secondary/80 backdrop-blur-sm">
        <Link 
          to="/login" 
          className="relative overflow-hidden group px-8 py-3 text-lg font-bold rounded-xl bg-gradient-to-r from-primary via-blue-500 to-primary bg-[length:200%_100%] hover:bg-[100%_0] transition-all duration-500"
        >
          <span className="relative z-10 text-white group-hover:text-white transition-colors">
            لوحة التحكم
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-blue-600 to-primary-dark opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </Link>
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