import React from 'react';

const CircuitBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 circuit-background opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-secondary" />
    </div>
  );
};

export default CircuitBackground;