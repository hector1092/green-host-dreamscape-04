import React, { useEffect, useRef } from 'react';
import { Server, Shield, Globe, Sparkles } from 'lucide-react';

const DynamicBackground = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75; // إبطاء سرعة الفيديو
    }
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* الفيديو الخلفي */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute w-full h-full object-cover opacity-30"
      >
        <source src="/video/tech-background.webm" type="video/webm" />
      </video>

      {/* طبقة التأثيرات */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/90 to-secondary" />

      {/* الدائرة المركزية المضيئة */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative w-[400px] h-[400px]">
          <div className="absolute inset-0 rounded-full bg-primary/5 animate-pulse" />
          <Globe className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 text-primary/80 animate-float" />
          <div className="absolute inset-0 rounded-full border-4 border-primary/20 animate-[spin_30s_linear_infinite]" />
        </div>
      </div>

      {/* الأيقونات المتحركة */}
      {[...Array(12)].map((_, index) => (
        <div
          key={index}
          className="absolute"
          style={{
            top: '50%',
            left: '50%',
            transform: `rotate(${index * 30}deg) translateX(250px) rotate(-${index * 30}deg)`,
            animation: `fadeIn 0.5s ease-out ${index * 0.2}s forwards`,
            opacity: 0,
          }}
        >
          {index % 3 === 0 ? (
            <Server className="w-10 h-10 text-primary animate-pulse" />
          ) : index % 3 === 1 ? (
            <Shield className="w-10 h-10 text-primary/70 animate-float" />
          ) : (
            <Sparkles className="w-10 h-10 text-primary/50 animate-pulse" />
          )}
        </div>
      ))}

      {/* تأثيرات إضافية */}
      <div className="absolute inset-0">
        <div className="absolute w-full h-full bg-[radial-gradient(circle_800px_at_50%_50%,#10b98122,transparent)]" />
      </div>
    </div>
  );
};

export default DynamicBackground;