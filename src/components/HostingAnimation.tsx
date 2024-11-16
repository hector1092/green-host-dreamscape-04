import React from 'react';
import { Server, Database, Upload, Mail, Shield } from 'lucide-react';

const HostingAnimation = () => {
  return (
    <div className="w-full py-24 overflow-hidden bg-gradient-to-b from-secondary/5 to-transparent relative" dir="rtl">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary via-blue-500 to-purple-500 text-transparent bg-clip-text animate-text-flow">
          كيف تعمل خدمة الاستضافة؟
        </h2>
        
        <div className="relative flex justify-center items-center gap-12 flex-wrap md:flex-nowrap">
          {/* User Section */}
          <div className="flex flex-col items-center gap-4 p-8 bg-white/5 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group border border-white/10">
            <div className="p-6 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-all duration-300 animate-float">
              <Upload className="w-10 h-10 text-primary group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">موقعك</h3>
            <p className="text-base text-gray-400 text-center group-hover:text-primary/80 transition-colors duration-300">تحميل موقعك وبياناتك</p>
          </div>

          {/* Animated Data Transfer Line */}
          <div className="hidden md:block w-32 h-2 bg-gradient-to-r from-primary/20 via-primary to-primary/20 relative overflow-hidden rounded-full">
            <div className="absolute inset-0 animate-[slide-left_1.5s_linear_infinite] bg-gradient-to-r from-transparent via-white to-transparent"></div>
          </div>

          {/* Server Section */}
          <div className="flex flex-col items-center gap-4 p-8 bg-white/5 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group border border-white/10">
            <div className="p-6 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-all duration-300 animate-float" style={{ animationDelay: '0.2s' }}>
              <Server className="w-10 h-10 text-primary group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">خوادمنا</h3>
            <p className="text-base text-gray-400 text-center group-hover:text-primary/80 transition-colors duration-300">معالجة وتخزين آمن</p>
          </div>

          {/* Animated Data Processing Line */}
          <div className="hidden md:block w-32 h-2 bg-gradient-to-r from-primary/20 via-primary to-primary/20 relative overflow-hidden rounded-full">
            <div className="absolute inset-0 animate-[slide-left_1.5s_linear_infinite] bg-gradient-to-r from-transparent via-white to-transparent"></div>
          </div>

          {/* Services Section */}
          <div className="flex flex-col items-center gap-4 p-8 bg-white/5 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group border border-white/10">
            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-all duration-300 hover:scale-110 animate-float" style={{ animationDelay: '0.4s' }}>
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-all duration-300 hover:scale-110 animate-float" style={{ animationDelay: '0.6s' }}>
                <Database className="w-8 h-8 text-primary" />
              </div>
              <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-all duration-300 hover:scale-110 animate-float" style={{ animationDelay: '0.8s' }}>
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-all duration-300 hover:scale-110 animate-float" style={{ animationDelay: '1s' }}>
                <Server className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">خدماتنا</h3>
            <p className="text-base text-gray-400 text-center group-hover:text-primary/80 transition-colors duration-300">بريد إلكتروني، نسخ احتياطي، حماية</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostingAnimation;