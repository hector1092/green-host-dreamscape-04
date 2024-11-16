import React from 'react';

const CircuitBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* الصورة الأساسية كخلفية */}
      <div 
        className="absolute inset-0"
        style={{ 
          backgroundImage: 'url("/image/12.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(1.2)',
        }}
      />

      {/* طبقة شفافة فاتحة */}
      <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px]" />

      {/* تأثيرات الإضاءة */}
      <div className="absolute inset-0">
        {/* تأثير التوهج المركزي */}
        <div className="absolute w-full h-full bg-[radial-gradient(circle_700px_at_50%_50%,#ffffff15,transparent)]" />
        
        {/* تأثيرات الإضاءة على الأطراف */}
        <div className="absolute top-0 w-full h-[200px] bg-gradient-to-b from-white/10 to-transparent" />
        <div className="absolute bottom-0 w-full h-[200px] bg-gradient-to-t from-white/10 to-transparent" />
        <div className="absolute left-0 w-[200px] h-full bg-gradient-to-r from-white/10 to-transparent" />
        <div className="absolute right-0 w-[200px] h-full bg-gradient-to-l from-white/10 to-transparent" />
      </div>
    </div>
  );
};

export default CircuitBackground;