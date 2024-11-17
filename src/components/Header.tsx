import React, { useEffect, useState } from 'react';
import AboutUsDialog from './AboutUsDialog';

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div 
        className="fixed top-0 w-full flex justify-between items-center p-4 z-50 bg-transparent"
        style={{
          transform: `translateY(${scrollPosition * 0.5}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      >
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
            opacity: '0.8',
            transform: `translateY(${scrollPosition * 0.3}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
      </header>
    </>
  );
};

export default Header;