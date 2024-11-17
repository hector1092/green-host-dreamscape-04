import React from 'react';
import AboutUsDialog from './AboutUsDialog';

const Header = () => {
  return (
    <>
      <div className="fixed top-0 w-full flex justify-between items-center p-4 z-50 bg-white/80 backdrop-blur-sm">
        <a 
          href="https://wa.me/201030435987" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-primary text-xl px-8 py-4 inline-flex items-center gap-3 hover:scale-105 transition-transform"
        >
          اشترك في أفضل خطط الاستضافة
        </a>
        <div>
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
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;