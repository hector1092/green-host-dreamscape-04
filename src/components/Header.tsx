import React from 'react';
import { Server, Shield, Zap } from 'lucide-react';

const Header = () => {
  return (
    <header className="relative min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="heading mb-6">
            استضافة متطورة وآمنة مع
            <span className="block text-primary animate-pulse">Green Host</span>
          </h1>
          <p className="subheading mb-8 animate-fade-in opacity-0" style={{ animationDelay: '0.3s' }}>
            نقدم لك أفضل خدمات الاستضافة مع دعم فني متميز على مدار الساعة
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="btn-primary text-lg transform hover:scale-110 transition-all duration-300">ابدأ الآن</button>
            <button className="btn-outline text-lg transform hover:scale-110 transition-all duration-300">تواصل معنا</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {[
              { icon: Server, text: "خوادم فائقة السرعة", desc: "سرعة استجابة عالية" },
              { icon: Shield, text: "حماية متقدمة", desc: "حماية ضد الهجمات" },
              { icon: Zap, text: "أداء عالي", desc: "تحميل سريع" },
            ].map((item, index) => (
              <div 
                key={index} 
                className="card flex flex-col items-center gap-4 hover:bg-white/10 transition-all duration-300"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <item.icon className="w-12 h-12 text-primary" />
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