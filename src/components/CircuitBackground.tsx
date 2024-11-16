import React from 'react';

const CircuitBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div 
        className="absolute inset-0 w-full h-full"
        style={{ 
          backgroundImage: 'url("/image/21.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          height: '100%'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-secondary-dark/50 to-accent-dark/70" />
    </div>
  );
};

export default CircuitBackground;