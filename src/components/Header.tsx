import React from 'react';
import AboutUsDialog from './AboutUsDialog';

const Header = () => {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 flex justify-between items-center p-4 z-50 bg-white shadow-lg animate-fade-in">
        <a 
          href="https://wa.me/201030435987" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-primary text-xl px-8 py-4 inline-flex items-center gap-3 hover:scale-105 transition-transform animate-pulse-glow"
        >
          احجز الان
        </a>
        <div className="animate-fade-in">
          <AboutUsDialog />
        </div>
      </div>
      
      <header className="relative min-h-screen flex items-center justify-center text-center" dir="rtl">
        <div 
          className="absolute inset-0 -z-10 w-[90%] mx-auto animate-float"
          style={{
            backgroundImage: 'url("/image/404.svg")',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
      </header>
    </>
  );
};

export default Header;