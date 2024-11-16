import React from 'react';

const CircuitBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* الصورة الثابتة كخلفية */}
      <div 
        className="absolute inset-0 bg-contain bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("/image/12.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* طبقة شفافة للتباين */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />

      {/* تأثير التوهج */}
      <div className="absolute inset-0">
        <div className="absolute w-full h-full bg-[radial-gradient(circle_700px_at_50%_50%,#10b98115,transparent)]" />
      </div>
    </div>
  );
};

export default CircuitBackground;