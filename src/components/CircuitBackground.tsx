import React from 'react';

const CircuitBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 circuit-background opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-secondary" />
      <div className="absolute inset-0">
        <div className="absolute w-full h-full bg-[radial-gradient(circle_500px_at_50%_50%,#10b98133,transparent)]" />
      </div>
    </div>
  );
};

export default CircuitBackground;