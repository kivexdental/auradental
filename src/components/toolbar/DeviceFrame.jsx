import React, { useRef, useEffect, useState, memo } from 'react';

/**
 * DeviceFrame renders real viewport-based frames (PC: 1280px, Tablet: 768px, Phone: 390px, Fullscreen: 100%).
 * Uses isolated iframe so the website actually receives the specified device dimensions.
 */
function DeviceFrame({ activeMode = 'pc', targetUrl = '/?preview=target' }) {
  const containerRef = useRef(null);
  const iframeRef = useRef(null);
  const [scale, setScale] = useState(1);

  // Fit scale if frame height exceeds available workspace height (without breaking real CSS viewport width)
  useEffect(() => {
    const calculateFit = () => {
      if (!containerRef.current) return;
      if (activeMode === 'fullscreen') {
        setScale(1);
        return;
      }

      const availableHeight = containerRef.current.clientHeight - 40;
      let targetHeight = 844; // default for phone
      if (activeMode === 'tablet') targetHeight = 1024;
      if (activeMode === 'pc') targetHeight = 800;

      if (availableHeight > 0 && availableHeight < targetHeight) {
        const computedScale = Math.max(availableHeight / targetHeight, 0.65);
        setScale(computedScale);
      } else {
        setScale(1);
      }
    };

    calculateFit();
    window.addEventListener('resize', calculateFit);
    return () => window.removeEventListener('resize', calculateFit);
  }, [activeMode]);

  // Fullscreen: 100% natural viewport, no frame
  if (activeMode === 'fullscreen') {
    return (
      <div className="w-full h-full bg-noir-950 overflow-hidden">
        <iframe
          ref={iframeRef}
          src={targetUrl}
          title="Aura Dental Atelier - Fullscreen Live Preview"
          className="w-full h-full border-0 block"
          loading="eager"
        />
      </div>
    );
  }

  // PHONE MODE (Real 390px viewport)
  if (activeMode === 'phone') {
    return (
      <div 
        ref={containerRef}
        className="w-full h-full flex items-center justify-center p-4 overflow-hidden"
        style={{ backgroundColor: '#18181B' }}
      >
        <div
          className="relative transition-transform duration-300 origin-center"
          style={{
            transform: scale < 1 ? `scale(${scale})` : 'none',
            width: '390px',
            height: '844px'
          }}
        >
          {/* Hardware Frame with Bezel */}
          <div className="relative w-[390px] h-[844px] rounded-[50px] bg-[#1E1E24] p-[10px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_0_1px_rgba(255,255,255,0.15)] ring-1 ring-white/10 flex flex-col overflow-hidden">
            
            {/* Dynamic Island Pill */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-6 rounded-full bg-black z-30 flex items-center justify-end px-2.5 pointer-events-none shadow-md">
              <span className="w-2.5 h-2.5 rounded-full bg-[#111] ring-1 ring-white/10" />
            </div>

            {/* Inner Viewport Screen (Exact 390px responsive width) */}
            <div className="w-full h-full rounded-[42px] overflow-hidden bg-black relative">
              <iframe
                ref={iframeRef}
                src={targetUrl}
                title="Aura Dental Atelier - 390px Phone Preview"
                className="w-full h-full border-0 block"
                loading="eager"
              />
            </div>

            {/* Home Indicator Bar */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 rounded-full bg-white/30 pointer-events-none z-30" />
          </div>
        </div>
      </div>
    );
  }

  // TABLET MODE (Real 768px viewport)
  if (activeMode === 'tablet') {
    return (
      <div 
        ref={containerRef}
        className="w-full h-full flex items-center justify-center p-4 overflow-hidden"
        style={{ backgroundColor: '#18181B' }}
      >
        <div
          className="relative transition-transform duration-300 origin-center"
          style={{
            transform: scale < 1 ? `scale(${scale})` : 'none',
            width: '768px',
            height: '1024px'
          }}
        >
          {/* Tablet Frame */}
          <div className="relative w-[768px] h-[1024px] rounded-[36px] bg-[#1F1F24] p-[14px] shadow-[0_30px_70px_-20px_rgba(0,0,0,0.9),0_0_0_1px_rgba(255,255,255,0.12)] flex flex-col overflow-hidden">
            {/* Front Camera Dot */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-black/80 ring-1 ring-white/15 pointer-events-none z-30" />

            {/* Viewport Screen */}
            <div className="w-full h-full rounded-[24px] overflow-hidden bg-black relative">
              <iframe
                ref={iframeRef}
                src={targetUrl}
                title="Aura Dental Atelier - 768px Tablet Preview"
                className="w-full h-full border-0 block"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // PC MODE (Real 1280px desktop viewport)
  return (
    <div 
      ref={containerRef}
      className="w-full h-full flex items-center justify-center p-4 sm:p-6 overflow-hidden"
      style={{ backgroundColor: '#18181B' }}
    >
      <div
        className="relative transition-transform duration-300 origin-center max-w-full"
        style={{
          transform: scale < 1 ? `scale(${scale})` : 'none',
          width: '1280px',
          height: '820px'
        }}
      >
        {/* Desktop Monitor Chrome Window */}
        <div className="relative w-[1280px] h-[820px] rounded-2xl bg-[#1C1C22] shadow-[0_35px_80px_-20px_rgba(0,0,0,0.95),0_0_0_1px_rgba(255,255,255,0.1)] flex flex-col overflow-hidden border border-white/10">
          
          {/* Window Chrome Header Bar */}
          <div className="h-9 px-4 bg-[#26262E] border-b border-white/10 flex items-center justify-between shrink-0 select-none">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
              <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
            </div>

            <div className="flex items-center gap-2 px-6 py-1 rounded-md bg-black/40 text-[11px] font-mono text-neutral-400 border border-white/5 max-w-xs truncate">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
              <span>https://auradentalatelier.com</span>
            </div>

            <span className="text-[10px] font-mono text-neutral-400">1280 × 800</span>
          </div>

          {/* Real 1280px Viewport Display */}
          <div className="w-full flex-1 overflow-hidden bg-black relative">
            <iframe
              ref={iframeRef}
              src={targetUrl}
              title="Aura Dental Atelier - 1280px Desktop Preview"
              className="w-full h-full border-0 block"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(DeviceFrame);
