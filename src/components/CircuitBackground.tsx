import React from 'react';
import { CircuitBoard, Globe, Shield, Server, Sparkles } from 'lucide-react';

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

      {/* تأثيرات الإضاءة والأيقونات */}
      <div className="absolute inset-0">
        <div className="container mx-auto h-full relative">
          {/* الأيقونات المضيئة */}
          <Globe className="absolute top-1/4 left-1/4 w-12 h-12 text-primary/60 animate-pulse" />
          <Shield className="absolute top-1/3 right-1/3 w-10 h-10 text-primary/50 animate-pulse" style={{ animationDelay: '1s' }} />
          <Server className="absolute bottom-1/3 left-1/3 w-8 h-8 text-primary/40 animate-pulse" style={{ animationDelay: '1.5s' }} />
          <CircuitBoard className="absolute bottom-1/4 right-1/4 w-10 h-10 text-primary/50 animate-pulse" style={{ animationDelay: '0.5s' }} />
          <Sparkles className="absolute top-1/2 left-1/2 w-12 h-12 text-primary/60 animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
      </div>

      {/* تأثير التوهج */}
      <div className="absolute inset-0">
        <div className="absolute w-full h-full bg-[radial-gradient(circle_700px_at_50%_50%,#10b98133,transparent)]" />
      </div>
    </div>
  );
};

export default CircuitBackground;