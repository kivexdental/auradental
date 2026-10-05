import React, { memo } from 'react';
import { MapPin, Navigation, Clock, Phone, ShieldCheck, Car, Building2, ExternalLink, ArrowRight } from 'lucide-react';

function LocationShowcase({ onOpenBooking }) {
  return (
    <section 
      id="contact" 
      className="py-32 px-4 sm:px-8 bg-noir-950 text-white relative overflow-hidden blueprint-grid-dark border-t border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/15 text-[10px] font-mono uppercase tracking-widest text-champagne mb-3">
              <span>Flagship Surgical Center</span>
              <span>•</span>
              <span>Private Access</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-medium tracking-tight text-white leading-[1.08]">
              The Flagship Atelier & <br />
              <span className="italic font-normal text-champagne">Private Surgical Suites</span>
            </h2>
          </div>

          <p className="max-w-md text-neutral-300 text-xs sm:text-sm font-light leading-relaxed">
            Designed as an acoustic sanctuary for complex prosthodontic surgery. Every private suite features hospital-grade HEPA-14 positive-pressure filtration and panoramic sky view ceilings.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Stylized Vector Blueprint Map & Transit */}
          <div className="lg:col-span-7 rounded-3xl glass-dark border border-white/15 p-6 sm:p-8 flex flex-col justify-between overflow-hidden relative group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-champagne animate-pulse" />
                  <span className="text-xs font-mono uppercase tracking-wider text-champagne font-bold">
                    Surgical Suites Active • Concierge On Duty
                  </span>
                </div>
                <span className="text-xs text-neutral-500 font-mono">37.7897° N, 122.4089° W</span>
              </div>

              {/* Stylized Modern Vector Map */}
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 bg-black shadow-inner group-hover:border-champagne/40 transition-colors">
                <svg className="w-full h-full opacity-60" viewBox="0 0 400 220" fill="none">
                  <rect width="400" height="220" fill="#000000" />
                  <path d="M0 60H400" stroke="#1A1A1A" strokeWidth="6" />
                  <path d="M0 140H400" stroke="#1A1A1A" strokeWidth="6" />
                  <path d="M120 0V220" stroke="#1A1A1A" strokeWidth="6" />
                  <path d="M260 0V220" stroke="#1A1A1A" strokeWidth="6" />
                  <path d="M0 100H400M0 180H400M60 0V220M190 0V220M330 0V220" stroke="#111111" strokeWidth="1.5" strokeDasharray="4 4" />
                  <path d="M0 200L140 140L260 80L400 30" stroke="#C5A880" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
                  <circle cx="210" cy="115" r="45" fill="#C5A880" fillOpacity="0.08" />
                  <circle cx="210" cy="115" r="25" fill="#FFFFFF" fillOpacity="0.1" />
                </svg>

                <div className="absolute top-[52%] left-[52%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-auto">
                  <div className="relative flex items-center justify-center">
                    <span className="absolute w-8 h-8 rounded-full bg-champagne/30 animate-ping" />
                    <div className="w-10 h-10 rounded-2xl bg-champagne text-noir-950 flex items-center justify-center shadow-glow-champagne border border-white/40">
                      <MapPin className="w-5 h-5 fill-current" />
                    </div>
                  </div>
                  <div className="mt-2 px-3 py-1 rounded-full bg-noir-950/90 border border-white/20 text-[10px] font-mono uppercase tracking-wider text-white shadow-xl backdrop-blur-md">
                    Aura Dental Atelier
                  </div>
                </div>

                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-noir-900/90 text-white text-[10px] font-mono border border-white/10">
                    Metro: Montgomery St (2 Min)
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-champagne/15 text-champagne text-[10px] font-mono border border-champagne/30">
                    Valet: Gate 2
                  </span>
                </div>

                <a
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="absolute bottom-3 right-3 flex items-center gap-1.5 px-4 py-2 rounded-full bg-noir-900/80 hover:bg-champagne hover:text-noir-950 text-white text-xs font-mono uppercase tracking-wider backdrop-blur-md border border-white/20 transition-all shadow-lg"
                >
                  <span>Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Address & Transit Details */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                  <div className="flex items-center gap-2 text-champagne text-xs font-mono uppercase tracking-wider mb-1">
                    <Building2 className="w-4 h-4" />
                    <span>Physical Atelier</span>
                  </div>
                  <p className="text-xs text-neutral-300 font-light leading-relaxed">
                    450 Sutter Street, Suite 2100<br />
                    Financial District, San Francisco, CA 94108
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                  <div className="flex items-center gap-2 text-champagne text-xs font-mono uppercase tracking-wider mb-1">
                    <Car className="w-4 h-4" />
                    <span>Arrival & Valet</span>
                  </div>
                  <p className="text-xs text-neutral-300 font-light leading-relaxed">
                    Complimentary private valet parking via Gate 2 on Stockton St. Dedicated security escort to 21st floor.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-neutral-400">
              <span>Direct Concierge: +1 (415) 890-2200</span>
              <span className="text-champagne font-bold">Priority Inquiries</span>
            </div>
          </div>

          {/* Right Column: Suite Amenities & Weekly Operating Hours */}
          <div className="lg:col-span-5 rounded-3xl glass-dark border border-white/15 p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-serif font-bold text-white mb-2">
                  Atelier Specifications
                </h3>
                <p className="text-xs text-neutral-400 font-light leading-relaxed">
                  Engineered exclusively for calm, sterile, non-traditional dental surgery.
                </p>
              </div>

              <div className="space-y-3">
                {[
                  { title: '4 Acoustically Isolated Operatories', sub: 'Surround sound & active noise-cancellation' },
                  { title: 'In-House 5-Axis CAD/CAM Lab', sub: 'Immediate 22-minute sintered zirconia milling' },
                  { title: 'Hospital Cleanroom Grade HEPA-14', sub: 'Positive-pressure laminar air sterilization' },
                  { title: 'Zero-Radiation Digital Scanners', sub: '3Shape TRIOS optical surface photogrammetry' }
                ].map((spec, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 flex items-start gap-3">
                    <div className="w-5 h-5 rounded-md bg-champagne/10 text-champagne flex items-center justify-center shrink-0 mt-0.5">
                      ✓
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white block">{spec.title}</span>
                      <span className="text-[11px] text-neutral-400 font-light">{spec.sub}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-champagne mb-3">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Atelier Hours</span>
                </div>
                <div className="space-y-1.5 text-xs text-neutral-300 font-mono">
                  <div className="flex justify-between">
                    <span>Monday – Friday</span>
                    <span className="text-white">08:00 – 19:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday (Priority Cases)</span>
                    <span className="text-white">09:00 – 16:00</span>
                  </div>
                  <div className="flex justify-between text-neutral-500">
                    <span>Sunday</span>
                    <span>Closed for Deep Sanitation</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10">
              <button
                onClick={() => onOpenBooking('Flagship Center Visit')}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full text-xs font-mono uppercase tracking-widest font-bold bg-champagne text-noir-950 hover:bg-champagne-light hover:shadow-glow-champagne transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span>Reserve Private Suite Visit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default memo(LocationShowcase);
