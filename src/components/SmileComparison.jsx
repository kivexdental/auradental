import React, { useState, useRef, useCallback, memo } from 'react';
import { Sparkles, MoveHorizontal, CheckCircle2, Info, Layers } from 'lucide-react';

const COMPARISON_CASES = [
  {
    id: 'fixture-to-crown',
    title: 'Titanium Fixture ➔ Monolithic Crown',
    badge: 'Primary Protocol',
    beforeImg: '/frames/frame_000.webp',
    beforeLabel: 'Before: Surgical Fixture Site',
    afterImg: '/frames/frame_049.webp',
    afterLabel: 'After: Final Ceramic Crown',
    metric: '99.7% Osseointegration',
    description: 'Direct comparison between guided sub-micron implant placement and the final hand-stained monolithic zirconia crown restoration.'
  },
  {
    id: 'insertion-to-seated',
    title: 'Crown Insertion ➔ Seated Margin',
    badge: 'Prosthetic Fit',
    beforeImg: '/frames/frame_025.webp',
    beforeLabel: 'Mid-Stage: Insertion Trajectory',
    afterImg: '/frames/frame_049.webp',
    afterLabel: 'Final: Seated Hermetic Seal',
    metric: '±0.005mm Tolerance',
    description: 'Witness the precise CAD/CAM micro-gap fit as the custom ceramic crown engages the biocompatible titanium abutment.'
  }
];

function SmileComparison() {
  const [sliderPos, setSliderPos] = useState(50);
  const [activeCase, setActiveCase] = useState(COMPARISON_CASES[0]);
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.min(Math.max((x / rect.width) * 100, 2), 98);
    setSliderPos(percent);
  }, []);

  const handlePointerDown = (e) => {
    isDragging.current = true;
    updatePosition(e.clientX);
    e.target.setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (isDragging.current) {
      updatePosition(e.clientX);
    }
  };

  const handlePointerUp = (e) => {
    isDragging.current = false;
    try {
      e.target.releasePointerCapture?.(e.pointerId);
    } catch {
      // Ignored if capture already released
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setSliderPos((prev) => Math.max(prev - 5, 2));
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      setSliderPos((prev) => Math.min(prev + 5, 98));
    } else if (e.key === 'Home') {
      e.preventDefault();
      setSliderPos(2);
    } else if (e.key === 'End') {
      e.preventDefault();
      setSliderPos(98);
    }
  };

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-8 bg-noir-950 text-white blueprint-grid-dark border-b border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Context & Clinical Metrics */}
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/15 text-champagne text-xs font-mono uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-champagne" />
            <span>Documented Clinical Outcomes</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-medium text-white leading-[1.08] tracking-tight">
            From Structural Breakdown to <br />
            <span className="italic font-normal text-champagne">Harmonious Enamel Vitality</span>
          </h2>

          <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed">
            {activeCase.description}
          </p>

          {/* Interactive Case Switcher Tabs */}
          <div className="space-y-2 pt-2">
            <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 block">
              Select Anatomical Comparison Stage:
            </span>
            <div className="flex flex-wrap gap-2.5">
              {COMPARISON_CASES.map((c) => {
                const isSelected = activeCase.id === c.id;
                return (
                  <button
                    key={c.id}
                    onClick={() => setActiveCase(c)}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono transition-all border ${
                      isSelected
                        ? 'bg-champagne text-noir-950 border-champagne font-bold shadow-md'
                        : 'bg-white/5 text-neutral-300 border-white/10 hover:border-white/20 hover:text-white'
                    }`}
                  >
                    <Layers className="w-3.5 h-3.5 shrink-0" />
                    <span>{c.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="space-y-3 pt-2">
            {[
              'Zero palatal acrylic bulk — feels 100% natural',
              'Immediate 120 PSI bite force restoration',
              'Preserves jawbone density and facial youthfulness',
              'Hand-layered multi-chromatic micro-staining'
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 text-sm text-neutral-300 font-light">
                <CheckCircle2 className="w-4 h-4 text-champagne shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="pt-6 flex flex-wrap items-center gap-6 sm:gap-8 border-t border-white/10">
            <div>
              <span className="text-2xl font-serif font-bold text-white block">4,800+</span>
              <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">Documented Cases</span>
            </div>
            <div className="w-px h-8 bg-white/10 hidden sm:block" />
            <div>
              <span className="text-2xl font-serif font-bold text-champagne block">{activeCase.metric}</span>
              <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">Verified Benchmark</span>
            </div>
            <div className="w-px h-8 bg-white/10 hidden sm:block" />
            <div>
              <span className="text-2xl font-serif font-bold text-white block">25+ Yrs</span>
              <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">Prosthodontic Mastery</span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-[11px] font-mono text-neutral-500 pt-1">
            <Info className="w-3.5 h-3.5 text-champagne/70 shrink-0" />
            <span>Illustrative 3D Biomechanical Tomography • Pixel-aligned comparison</span>
          </div>
        </div>

        {/* Right Column: Seamless Pixel-Aligned Split Caliper */}
        <div className="lg:col-span-7">
          <div 
            ref={containerRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden glass-dark border border-white/20 select-none cursor-ew-resize shadow-glass-dark group touch-none"
          >
            {/* AFTER Layer (Base layer: Full container) */}
            <div className="absolute inset-0 w-full h-full bg-black">
              <img 
                src={activeCase.afterImg} 
                alt={activeCase.afterLabel} 
                className="w-full h-full object-cover filter contrast-105 pointer-events-none"
                loading="eager"
                draggable={false}
              />
              <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 px-3.5 py-1.5 rounded-full bg-noir-950/85 backdrop-blur-md border border-champagne/40 text-champagne text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider shadow-lg pointer-events-none z-10">
                {activeCase.afterLabel}
              </div>
            </div>

            {/* BEFORE Layer (Top layer: Pixel-identical coordinates, clipped with CSS clip-path) */}
            <div 
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
            >
              <img 
                src={activeCase.beforeImg} 
                alt={activeCase.beforeLabel} 
                className="w-full h-full object-cover filter contrast-105 pointer-events-none"
                loading="eager"
                draggable={false}
              />
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 px-3.5 py-1.5 rounded-full bg-noir-950/85 backdrop-blur-md border border-white/20 text-neutral-300 text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider shadow-lg pointer-events-none z-10">
                {activeCase.beforeLabel}
              </div>
            </div>

            {/* Split Divider Caliper */}
            <div 
              className="absolute inset-y-0 w-0.5 bg-champagne pointer-events-none shadow-[0_0_15px_rgba(197,168,128,0.8)] z-20"
              style={{ left: `${sliderPos}%` }}
            >
              <div 
                role="slider"
                tabIndex={0}
                aria-label="Before and after clinical comparison slider"
                aria-valuenow={Math.round(sliderPos)}
                aria-valuemin={0}
                aria-valuemax={100}
                onKeyDown={handleKeyDown}
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-noir-950 border-2 border-champagne flex items-center justify-center text-champagne shadow-glow-champagne pointer-events-auto cursor-ew-resize focus:outline-none focus:ring-2 focus:ring-champagne focus:ring-offset-2 focus:ring-offset-black hover:scale-110 transition-transform"
              >
                <MoveHorizontal className="w-5 h-5 animate-pulse" />
              </div>
            </div>

            {/* Usage Hint */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-noir-950/80 backdrop-blur-md border border-white/10 text-[10px] text-neutral-400 font-mono tracking-wider opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
              Drag left or right (or use ←/→ arrow keys)
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default memo(SmileComparison);
