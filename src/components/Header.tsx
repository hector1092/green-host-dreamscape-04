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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            {[
              { icon: Server, text: "خوادم فائقة السرعة", desc: "سرعة استجابة عالية" },
              { icon: Shield, text: "حماية متقدمة", desc: "حماية ضد الهجمات" },
              { icon: Zap, text: "أداء عالي", desc: "تحميل سريع" },
            ].map((item, index) => (
              <div 
                key={index} 
                className="card flex flex-col items-center gap-4 hover:bg-white/10 transition-all duration-500"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <item.icon className="w-14 h-14 text-primary" />
                <span className="font-medium text-lg">{item.text}</span>
                <span className="text-sm text-gray-400">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;