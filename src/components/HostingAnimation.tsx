import React from 'react';
import { Server, Database, Upload, Mail, Shield } from 'lucide-react';

const HostingAnimation = () => {
  return (
    <div className="w-full py-16 overflow-hidden bg-gradient-to-b from-secondary/5 to-transparent" dir="rtl">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">كيف تعمل خدمة الاستضافة؟</h2>
        
        <div className="relative flex justify-center items-center gap-8 flex-wrap md:flex-nowrap">
          {/* User Section */}
          <div className="flex flex-col items-center gap-4 p-6 bg-white/90 rounded-xl shadow-lg animate-fade-in">
            <div className="p-4 bg-primary/10 rounded-full">
              <Upload className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-secondary">موقعك</h3>
            <p className="text-base text-secondary font-medium text-center">تحميل موقعك وبياناتك</p>
          </div>

          {/* Animated Data Transfer Line */}
          <div className="hidden md:block w-24 h-2 bg-gradient-to-r from-primary/20 to-primary relative overflow-hidden">
            <div className="absolute inset-0 animate-slide-left bg-gradient-to-r from-transparent via-primary to-transparent" />
          </div>

          {/* Server Section */}
          <div className="flex flex-col items-center gap-4 p-6 bg-white/90 rounded-xl shadow-lg animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="p-4 bg-primary/10 rounded-full">
              <Server className="w-8 h-8 text-primary animate-float" />
            </div>
            <h3 className="text-xl font-bold text-secondary">خوادمنا</h3>
            <p className="text-base text-secondary font-medium text-center">معالجة وتخزين آمن</p>
          </div>

          {/* Animated Data Processing Line */}
          <div className="hidden md:block w-24 h-2 bg-gradient-to-r from-primary/20 to-primary relative overflow-hidden">
            <div className="absolute inset-0 animate-slide-left bg-gradient-to-r from-transparent via-primary to-transparent" />
          </div>

          {/* Services Section */}
          <div className="flex flex-col items-center gap-4 p-6 bg-white/90 rounded-xl shadow-lg animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div className="p-3 bg-primary/10 rounded-full">
                <Database className="w-6 h-6 text-primary" />
              </div>
              <div className="p-3 bg-primary/10 rounded-full">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div className="p-3 bg-primary/10 rounded-full animate-pulse">
                <Server className="w-6 h-6 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-secondary">خدماتنا</h3>
            <p className="text-base text-secondary font-medium text-center">بريد إلكتروني، نسخ احتياطي، حماية</p>
          </div>
        </div>

        {/* Features List */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <h4 className="text-lg font-bold text-white mb-2">سرعة فائقة</h4>
            <p className="text-base text-white/90 font-medium">خوادم عالية الأداء لتحميل سريع</p>
          </div>
          <div className="text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <h4 className="text-lg font-bold text-white mb-2">حماية متكاملة</h4>
            <p className="text-base text-white/90 font-medium">حماية ضد الهجمات ونسخ احتياطي</p>
          </div>
          <div className="text-center animate-fade-in" style={{ animationDelay: '1s' }}>
            <h4 className="text-lg font-bold text-white mb-2">دعم فني 24/7</h4>
            <p className="text-base text-white/90 font-medium">فريق دعم فني متخصص</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostingAnimation;