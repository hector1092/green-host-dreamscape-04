import React from 'react';
import { Globe, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div className="fixed top-0 left-0 p-4 flex items-center gap-2 z-50">
        <Globe className="w-8 h-8 text-primary animate-spin" style={{ animationDuration: '10s' }} />
        <span className="text-2xl font-bold text-primary">Green Host</span>
      </div>
      
      <div className="fixed top-0 right-0 p-4 flex gap-4 z-50">
        <Link to="/login" className="btn-outline text-lg flex items-center gap-2">
          <Shield className="w-5 h-5" />
          لوحة التحكم
        </Link>
        <button className="btn-outline text-lg">تواصل معنا</button>
        <button className="btn-primary text-lg group">
          ابدأ الآن
          <span className="absolute inset-0 bg-white/20 translate-x-[-100%] skew-x-[-15deg] group-hover:translate-x-[100%] transition-transform duration-700" />
        </button>
      </div>
      
      <header className="relative min-h-screen flex items-center justify-center text-center" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="flex flex-col gap-6 text-7xl font-black">
              <span className="text-blue-500">السرعة</span>
              <span className="text-green-500">الأمان</span>
              <span className="text-purple-500">الاستقرار</span>
            </h1>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;