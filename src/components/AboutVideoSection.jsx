import React, { useState, useEffect, memo } from 'react';
import { Play, ArrowRight, Smile, LayoutGrid, Star, Heart, X, CheckCircle2 } from 'lucide-react';

function AboutVideoSection({ onOpenBooking }) {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && videoModalOpen) {
        setVideoModalOpen(false);
      }
    };
    if (videoModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [videoModalOpen]);

  return (
    <section 
      id="about-denta" 
      className="py-24 sm:py-32 px-4 sm:px-8 bg-noir-950 text-white relative overflow-hidden blueprint-grid-dark border-t border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left Column: Editorial Narrative */}
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono uppercase tracking-widest text-champagne">
            <span>Atelier Philosophy</span>
            <span>•</span>
            <span>Est. 2012</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-medium text-white leading-[1.08] tracking-tight">
            Where Science <br />
            Converges with <br />
            <span className="italic font-normal text-champagne">Facial Sculpture</span>
          </h2>

          <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed">
            At Aura Dental Atelier, we reject the industrialization of dentistry. We view every smile as a bespoke architectural commission, pairing Swiss sub-micron robotics with hand-layered ceramic artistry.
          </p>

          <p className="text-neutral-400 text-xs sm:text-sm font-light leading-relaxed">
            From the moment you enter our sound-isolated private surgical suites, your treatment is completely unhurried. Advanced CBCT virtual surgery planning guarantees zero surprises and lifelong biomechanical stability.
          </p>

          <div className="pt-4 flex items-center gap-4">
            <button
              onClick={() => onOpenBooking('Atelier Tour')}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest bg-champagne text-noir-950 hover:bg-champagne-light hover:shadow-glow-champagne transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span>Schedule Atelier Tour</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Column: High-Art Film Frame & Metrics */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          
          <div 
            onClick={() => setVideoModalOpen(true)}
            className="group relative w-full aspect-[16/9] rounded-3xl overflow-hidden glass-dark border border-white/20 cursor-pointer shadow-glass-dark transition-all duration-500 hover:border-champagne"
            role="button"
            tabIndex={0}
            aria-label="Play surgical suite walkthrough video"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setVideoModalOpen(true);
              }
            }}
          >
            <img 
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=1200" 
              alt="Aura Dental Private Surgical Suite" 
              className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-noir-950/90 via-noir-950/30 to-transparent" />

            <div className="absolute top-6 sm:top-8 left-6 sm:left-8 max-w-sm">
              <span className="text-[10px] font-mono uppercase tracking-widest text-champagne block mb-1">
                Private Film Reel
              </span>
              <h3 className="text-xl sm:text-3xl font-serif font-bold text-white leading-tight">
                Architectural Smiles. <br />
                <span className="italic font-light text-neutral-300">Uncompromised Lives.</span>
              </h3>
            </div>

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-noir-950/60 backdrop-blur-xl border border-white/30 flex items-center justify-center text-white shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:bg-champagne group-hover:text-noir-950">
                <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current ml-1" />
              </div>
            </div>

            <div className="absolute bottom-4 sm:bottom-5 right-4 sm:right-6 text-[10px] font-mono text-neutral-300 bg-noir-950/80 px-3.5 py-1.5 rounded-full backdrop-blur-md border border-white/15">
              Click to view surgical suite walkthrough (02:45)
            </div>
          </div>

          {/* Bottom 4-Metric Architectural Slab */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 sm:p-6 rounded-2xl glass-dark border border-white/10 bg-noir-900/70 text-center">
            <div className="flex flex-col items-center">
              <span className="font-serif font-bold text-2xl sm:text-3xl text-white mb-1">12,400+</span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400">Smiles Sculpted</span>
            </div>

            <div className="flex flex-col items-center border-l border-white/10">
              <span className="font-serif font-bold text-2xl sm:text-3xl text-white mb-1">100%</span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400">Digital CAD/CAM</span>
            </div>

            <div className="flex flex-col items-center border-l sm:border-l border-white/10">
              <span className="font-serif font-bold text-2xl sm:text-3xl text-champagne mb-1">4.98 ★</span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400">Patient Rating</span>
            </div>

            <div className="flex flex-col items-center border-l border-white/10">
              <span className="font-serif font-bold text-2xl sm:text-3xl text-white mb-1">99.4%</span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400">Osseointegration</span>
            </div>
          </div>
        </div>

      </div>

      {/* Video Modal Player */}
      {videoModalOpen ? (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-noir-950/90 backdrop-blur-2xl animate-in fade-in duration-300"
          role="dialog"
          aria-modal="true"
          aria-labelledby="video-dialog-title"
          onClick={() => setVideoModalOpen(false)}
        >
          <div 
            className="relative w-full max-w-4xl glass-dark rounded-3xl overflow-hidden border border-white/20 shadow-2xl p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <span id="video-dialog-title" className="text-xs font-mono uppercase tracking-widest text-champagne">
                Aura Dental Atelier • Surgical Suite Walkthrough
              </span>
              <button 
                onClick={() => setVideoModalOpen(false)}
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-neutral-300 hover:text-white transition-colors"
                aria-label="Close video player"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="aspect-video w-full bg-black rounded-2xl overflow-hidden flex items-center justify-center">
              <iframe 
                className="w-full h-full"
                src="https://www.youtube-nocookie.com/embed/5D34CqQ-i5A?autoplay=1&rel=0&modestbranding=1" 
                title="Aura Dental Atelier Surgical Technology Walkthrough"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              />
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}

export default memo(AboutVideoSection);
