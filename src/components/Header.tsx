import React from 'react';
import AboutUsDialog from './AboutUsDialog';

const Header = () => {
  return (
    <>
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
      </header>
    </>
  );
};

export default Header;