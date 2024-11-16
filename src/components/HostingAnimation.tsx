import React from 'react';
import { Server, Database, Upload, Mail, Shield } from 'lucide-react';

const HostingAnimation = () => {
  return (
    <div className="w-full py-16 overflow-hidden bg-gradient-to-b from-secondary/5 to-transparent" dir="rtl">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 text-secondary hover:text-primary transition-colors duration-300">
          كيف تعمل خدمة الاستضافة؟
        </h2>
        
        <div className="relative flex justify-center items-center gap-8 flex-wrap md:flex-nowrap">
          {/* User Section */}
          <div className="flex flex-col items-center gap-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group">
            <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
              <Upload className="w-8 h-8 text-primary animate-bounce" />
            </div>
            <h3 className="font-semibold group-hover:text-primary transition-colors duration-300">موقعك</h3>
            <p className="text-sm text-gray-600 text-center group-hover:text-primary/80 transition-colors duration-300">تحميل موقعك وبياناتك</p>
          </div>

          {/* Animated Data Transfer Line */}
          <div className="hidden md:block w-24 h-2 bg-gradient-to-r from-primary/20 via-primary to-primary/20 relative overflow-hidden">
            <div className="absolute inset-0 animate-[slide-left_1.5s_linear_infinite] bg-gradient-to-r from-transparent via-white to-transparent" />
          </div>

          {/* Server Section */}
          <div className="flex flex-col items-center gap-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group">
            <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
              <Server className="w-8 h-8 text-primary animate-pulse" />
            </div>
            <h3 className="font-semibold group-hover:text-primary transition-colors duration-300">خوادمنا</h3>
            <p className="text-sm text-gray-600 text-center group-hover:text-primary/80 transition-colors duration-300">معالجة وتخزين آمن</p>
          </div>

          {/* Animated Data Processing Line */}
          <div className="hidden md:block w-24 h-2 bg-gradient-to-r from-primary/20 via-primary to-primary/20 relative overflow-hidden">
            <div className="absolute inset-0 animate-[slide-left_1.5s_linear_infinite] bg-gradient-to-r from-transparent via-white to-transparent" />
          </div>

          {/* Services Section */}
          <div className="flex flex-col items-center gap-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300 hover:scale-110 transform">
                <Mail className="w-6 h-6 text-primary animate-bounce" />
              </div>
              <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300 hover:scale-110 transform">
                <Database className="w-6 h-6 text-primary animate-pulse" />
              </div>
              <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300 hover:scale-110 transform">
                <Shield className="w-6 h-6 text-primary animate-float" />
              </div>
              <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300 hover:scale-110 transform">
                <Server className="w-6 h-6 text-primary animate-pulse" />
              </div>
            </div>
            <h3 className="font-semibold group-hover:text-primary transition-colors duration-300">خدماتنا</h3>
            <p className="text-sm text-gray-600 text-center group-hover:text-primary/80 transition-colors duration-300">بريد إلكتروني، نسخ احتياطي، حماية</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostingAnimation;