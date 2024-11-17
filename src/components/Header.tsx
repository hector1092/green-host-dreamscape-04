import React from 'react';
import AboutUsDialog from './AboutUsDialog';

const Header = () => {
  return (
    <>
      <div className="fixed top-0 w-full flex justify-center items-center p-4 z-50 bg-white/80 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <span className="text-5xl font-extrabold bg-gradient-to-r from-primary via-blue-500 to-primary text-transparent bg-clip-text animate-text-flow">
            Green Host
          </span>
        </div>
        <div className="absolute right-4">
          <AboutUsDialog />
        </div>
      </div>
      
      <header className="relative min-h-screen flex items-center justify-center text-center" dir="rtl">
        <div 
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: 'url("/image/404.svg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: '0.8'
          }}
        />
        <div className="container mx-auto px-4 mt-32">
          <div className="max-w-4xl mx-auto animate-fade-in bg-white/80 backdrop-blur-md p-8 rounded-xl">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">أفضل خطط الاستضافة بأسعار تنافسية</h2>
              <p className="text-lg md:text-xl text-gray-600">ابدأ موقعك الآن بأقل الأسعار وأعلى جودة</p>
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
        </div>
      </header>
    </>
  );
};

export default Header;