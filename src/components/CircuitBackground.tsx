import React from 'react';

const CircuitBackground = () => {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-primary/5" />
    </div>
  );
};

export default CircuitBackground;