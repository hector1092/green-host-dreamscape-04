import React from 'react';

const CircuitBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 circuit-background opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary to-secondary" />
      <div className="absolute inset-0">
        <div className="absolute w-full h-full bg-[radial-gradient(circle_700px_at_50%_50%,#10b98133,transparent)]" />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(40deg,transparent,#0ea5e933,transparent)] animate-pulse" />
    </div>
  );
};

export default CircuitBackground;