import React from 'react';
import { Server, Shield, Zap } from 'lucide-react';

const Header = () => {
  return (
    <header className="relative min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="heading mb-6">
            استضافة متطورة وآمنة مع
            <span className="block text-primary text-glow">Green Host</span>
          </h1>
          <p className="subheading mb-12 animate-fade-in opacity-0" style={{ animationDelay: '0.3s' }}>
            نقدم لك أفضل خدمات الاستضافة مع دعم فني متميز على مدار الساعة
          </p>
          <div className="flex flex-wrap gap-6">
            <button className="btn-primary text-xl group">
              ابدأ الآن
              <span className="absolute inset-0 bg-white/20 translate-x-[-100%] skew-x-[-15deg] group-hover:translate-x-[100%] transition-transform duration-700" />
            </button>
            <button className="btn-outline text-xl">تواصل معنا</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;