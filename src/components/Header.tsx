import React from 'react';
import { Globe, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
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
      
      <header className="relative min-h-screen flex items-center text-right" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl animate-fade-in flex items-center gap-4">
            <div className="flex items-center gap-4">
              <h1 className="heading mb-6">
                استضافة متطورة وآمنة مع
                <span className="block text-primary text-glow">Green Host</span>
              </h1>
              <Globe className="w-16 h-16 text-primary animate-spin" style={{ animationDuration: '10s' }} />
            </div>
            <p className="subheading mb-12 animate-fade-in opacity-0" style={{ animationDelay: '0.3s' }}>
              نقدم لك أفضل خدمات الاستضافة مع دعم فني متميز على مدار الساعة
            </p>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;