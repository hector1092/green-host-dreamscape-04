import React from 'react';

const CircuitBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* الصورة الأساسية كخلفية */}
      <div 
        className="absolute inset-0 mx-auto"
        style={{ 
          backgroundImage: 'url("/image/21.png")',
          backgroundSize: 'contain',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(1.5) contrast(1.1)',
        }}
      />

      {/* طبقة شفافة فاتحة */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]" />

      {/* تأثيرات الإضاءة */}
      <div className="absolute inset-0">
        {/* تأثير التوهج المركزي */}
        <div className="absolute w-full h-full bg-[radial-gradient(circle_800px_at_50%_50%,#ffffff25,transparent)]" />
        
        {/* تأثيرات الإضاءة على الأطراف */}
        <div className="absolute top-0 w-full h-[250px] bg-gradient-to-b from-white/20 to-transparent" />
        <div className="absolute bottom-0 w-full h-[250px] bg-gradient-to-t from-white/20 to-transparent" />
        <div className="absolute left-0 w-[250px] h-full bg-gradient-to-r from-white/20 to-transparent" />
        <div className="absolute right-0 w-[250px] h-full bg-gradient-to-l from-white/20 to-transparent" />
      </div>
    </div>
  );
};

export default CircuitBackground;