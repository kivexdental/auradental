import React, { useEffect } from 'react';
import { X, CheckCircle2, Clock, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';

export default function ServiceDetailModal({ service, onClose, onBook }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (service) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [service, onClose]);

  if (!service) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-noir-950/85 backdrop-blur-xl animate-in fade-in duration-300"
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl glass-dark rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle Ambient Champagne Top Glow */}
        <div 
          className="absolute -top-24 -left-24 w-60 h-60 rounded-full blur-3xl opacity-20 pointer-events-none bg-champagne" 
        />
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/15 text-neutral-300 hover:text-white transition-colors border border-white/10"
          aria-label="Close procedure specifications"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-start gap-4 mb-6">
          <div 
            className="w-16 h-16 rounded-2xl flex items-center justify-center border border-champagne/40 bg-white/5 shadow-lg shrink-0"
          >
            {service.icon || service.iconSvg}
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[11px] uppercase tracking-widest font-mono text-champagne">
                Clinical Protocol
              </span>
              <span className="text-xs text-neutral-500">• Certified Swiss Standard</span>
            </div>
            <h3 id="service-modal-title" className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
              {service.title}
            </h3>
            <p className="text-sm text-neutral-400 mt-1">
              {service.subtitle}
            </p>
          </div>
        </div>

        {/* Procedure Highlights */}
        <div className="grid grid-cols-3 gap-3 mb-6 p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-center">
          <div>
            <span className="block text-xs font-mono uppercase tracking-wider text-neutral-400">Duration</span>
            <span className="text-sm sm:text-base font-semibold text-white flex items-center justify-center gap-1.5 mt-1 font-mono">
              <Clock className="w-3.5 h-3.5 text-champagne" /> {service.duration || '45-90 min'}
            </span>
          </div>
          <div className="border-x border-white/10">
            <span className="block text-xs font-mono uppercase tracking-wider text-neutral-400">Longevity</span>
            <span className="text-sm sm:text-base font-semibold text-white flex items-center justify-center gap-1.5 mt-1 font-mono">
              <ShieldCheck className="w-3.5 h-3.5 text-champagne" /> {service.longevity || 'Lifetime'}
            </span>
          </div>
          <div>
            <span className="block text-xs font-mono uppercase tracking-wider text-neutral-400">Recovery</span>
            <span className="text-sm sm:text-base font-semibold text-white flex items-center justify-center gap-1.5 mt-1 font-mono">
              <Sparkles className="w-3.5 h-3.5 text-champagne" /> {service.recovery || 'Immediate'}
            </span>
          </div>
        </div>

        {/* Description & Clinical Perks */}
        <div className="space-y-4 mb-8">
          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
            {service.description}
          </p>

          <div className="space-y-2.5 pt-2">
            <h4 className="text-xs font-mono uppercase tracking-widest text-champagne">
              Clinical Benchmarks & Standards:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.benefits?.map((benefit, i) => (
                <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-champagne" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
          <div>
            <span className="text-xs text-neutral-400 block font-mono">Estimated Investment</span>
            <span className="text-2xl font-serif font-bold text-white">
              {service.startingPrice} <span className="text-xs font-sans font-normal text-neutral-400">or 0% APR financing</span>
            </span>
          </div>

          <button
            onClick={() => {
              onClose();
              if (onBook) onBook(service.title);
            }}
            className="w-full sm:w-auto px-8 py-3 rounded-full text-xs font-mono uppercase tracking-widest font-bold bg-champagne text-noir-950 hover:bg-champagne-light hover:shadow-glow-champagne transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:scale-105 active:scale-95"
          >
            <span>Reserve {service.title}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
