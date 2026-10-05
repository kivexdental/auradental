import React, { useEffect, useState, useRef, memo } from 'react';

function GlassMouseSpotlight() {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [isPointerDevice, setIsPointerDevice] = useState(true);
  const spotlightRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsPointerDevice(false);
      return;
    }

    // Vercel Best Practice: client-passive-event-listeners
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      setMousePos({ x: clientX, y: clientY });

      const target = e.target.closest('.glass-dark, .glass-card, .editorial-card-light');
      if (target) {
        const rect = target.getBoundingClientRect();
        const cardX = clientX - rect.left;
        const cardY = clientY - rect.top;
        target.style.setProperty('--mouse-x', `${cardX}px`);
        target.style.setProperty('--mouse-y', `${cardY}px`);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!isPointerDevice) return null;

  return (
    <div 
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 overflow-hidden"
      aria-hidden="true"
    >
      <div 
        ref={spotlightRef}
        className="absolute w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px] opacity-30 transition-transform duration-75 ease-out"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          background: 'radial-gradient(circle, rgba(197, 168, 128, 0.18) 0%, rgba(255, 255, 255, 0.06) 45%, transparent 75%)'
        }}
      />
    </div>
  );
}

export default memo(GlassMouseSpotlight);
