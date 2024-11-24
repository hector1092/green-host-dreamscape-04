import React from 'react';
import AboutUsDialog from './AboutUsDialog';

const Header = () => {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 flex justify-between items-center p-4 z-50 bg-secondary/80 backdrop-blur-md border-b border-primary/10">
        <a 
          href="https://wa.me/201030435987" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-primary text-base md:text-xl px-4 md:px-8 py-2 md:py-4 inline-flex items-center gap-2 md:gap-3 hover:scale-105 transition-transform"
        >
          احجز الان
        </a>
        <div>
          <AboutUsDialog />
        </div>
      </div>
      
      <header className="relative min-h-screen flex items-center justify-center text-center px-4 md:px-0" dir="rtl">
        <div 
          className="absolute inset-0 -z-10 w-full md:w-[90%] mx-auto animate-float"
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