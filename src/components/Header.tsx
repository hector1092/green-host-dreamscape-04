import React from 'react';
import { Server, Shield, Zap } from 'lucide-react';

const Header = () => {
  return (
    <header className="relative min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="heading mb-6">
            استضافة متطورة وآمنة مع
            <span className="block text-primary">Green Host</span>
          </h1>
          <p className="subheading mb-8">
            نقدم لك أفضل خدمات الاستضافة مع دعم فني متميز على مدار الساعة
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="btn-primary">ابدأ الآن</button>
            <button className="btn-outline">تواصل معنا</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {[
              { icon: Server, text: "خوادم فائقة السرعة" },
              { icon: Shield, text: "حماية متقدمة" },
              { icon: Zap, text: "أداء عالي" },
            ].map((item, index) => (
              <div key={index} className="card flex items-center gap-4">
                <item.icon className="w-8 h-8 text-primary" />
                <span className="font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;