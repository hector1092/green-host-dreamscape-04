import React from 'react';

const CircuitBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary via-secondary/95 to-secondary" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#f9db39,transparent)] opacity-5" />
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM22.343 0L13.857 8.485 15.272 9.9l7.9-7.9h-.83L25.172 0h-2.83zM32 0l-3.657 3.657 1.414 1.414L32 2.828l3.242 3.243 1.415-1.414L32 0zm-4.343 0L25.172 2.485 26.586 3.9l4.243-4.243L32 0h-4.343zm-7.657 0l-1.414 1.414L22.343 5.17 23.757 3.757 21.343 1.343 22.757 0h-2.757zm-3.657 0l-.828.828L17.515 2.83l1.414-1.414L16.172 0h-2.83zM40.485 0L39.07 1.414l3.657 3.657 1.414-1.414L40.485 0zm-10.626 0l-2.829 2.829 3.657 3.657 1.414-1.414L29.86 0zM35.029 0l-1.414 1.414 3.657 3.657 1.414-1.414L35.029 0zM4.545 0L0 4.545l2.828 2.829L7.373 2.83 4.545 0zm8.485 0l-.828.828L15.857 4.5l1.415-1.415L13.03 0zm14.142 0l-.828.828L26.857 4.5l1.415-1.415L26.657 0zM22.343 0L21.93 .414l2.828 2.829L26.172 1.83 22.343 0zM13.03 0L12.602 .429l2.828 2.828L16.845 1.83 13.03 0zM0 0l2.828 2.828-2.828 2.829L0 0zm52.627 0l2.828 2.828-2.828 2.829L52.627 0zM11.03 0l2.828 2.828-2.828 2.829L11.03 0zM63.657 0l2.828 2.828-2.828 2.829L63.657 0zM60 0v5.656l-2.828 2.828V5.657L60 0zm0 5.656V0h-5.657L60 5.656zM39.88 0L40 .12V0h-.12zM0 0h.12L0 .12V0z' fill='%23f9db39' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }} 
      />
    </div>
  );
};

export default CircuitBackground;