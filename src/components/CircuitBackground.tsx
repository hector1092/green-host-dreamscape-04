import React from 'react';
import { CircuitBoard, Globe, Shield, Server, Sparkles } from 'lucide-react';

const CircuitBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-secondary">
      {/* الدائرة الرئيسية مع التوهج */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative w-[300px] h-[300px] rounded-full bg-primary/5 animate-pulse">
          <Globe className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 text-primary" />
          <div className="absolute inset-0 rounded-full border-4 border-primary/20 animate-[spin_20s_linear_infinite]" />
        </div>
      </div>

      {/* الأيقونات المتحركة حول الدائرة */}
      {[...Array(8)].map((_, index) => (
        <div
          key={index}
          className="absolute"
          style={{
            top: '50%',
            left: '50%',
            transform: `rotate(${index * 45}deg) translateX(200px) rotate(-${index * 45}deg)`,
          }}
        >
          {index % 4 === 0 ? (
            <Server className="w-8 h-8 text-primary animate-pulse" />
          ) : index % 4 === 1 ? (
            <Shield className="w-8 h-8 text-primary/80 animate-bounce" />
          ) : index % 4 === 2 ? (
            <CircuitBoard className="w-8 h-8 text-primary/60 animate-spin" />
          ) : (
            <Sparkles className="w-8 h-8 text-primary/40 animate-pulse" />
          )}
        </div>
      ))}

      {/* التدرجات اللونية والتأثيرات */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary to-secondary" />
      <div className="absolute inset-0">
        <div className="absolute w-full h-full bg-[radial-gradient(circle_700px_at_50%_50%,#10b98133,transparent)]" />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(40deg,transparent,#0ea5e933,transparent)] animate-pulse" />
    </div>
  );
};

export default CircuitBackground;