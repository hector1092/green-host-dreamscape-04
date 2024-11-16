import React from 'react';

const CircuitBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* الصورة الثابتة كخلفية */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("/image/428837f1-9672-48f8-bfdb-50de919189b8.jpg")',
        }}
      />

      {/* طبقة شفافة للتباين */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

      {/* تأثير التوهج */}
      <div className="absolute inset-0">
        <div className="absolute w-full h-full bg-[radial-gradient(circle_700px_at_50%_50%,#10b98133,transparent)]" />
      </div>
    </div>
  );
};

export default CircuitBackground;