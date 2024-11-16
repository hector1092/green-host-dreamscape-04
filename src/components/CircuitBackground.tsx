import React from 'react';

const CircuitBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* الصورة الثابتة كخلفية */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
        style={{ 
          backgroundImage: 'url("/image/12.jpg")',
        }}
      />

      {/* طبقة شفافة للتباين */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />

      {/* تأثير التوهج */}
      <div className="absolute inset-0">
        <div className="absolute w-full h-full bg-[radial-gradient(circle_700px_at_50%_50%,#10b98122,transparent)]" />
      </div>
    </div>
  );
};

export default CircuitBackground;