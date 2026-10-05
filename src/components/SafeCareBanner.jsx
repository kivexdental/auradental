import React, { memo } from 'react';
import { Gem, Sparkles, Shield, Users, Heart, CheckCircle2 } from 'lucide-react';

// Vercel Best Practice: rendering-hoist-jsx (Hoisted pillars list)
const PILLARS = [
  {
    numeral: 'I',
    title: 'Robotic Navigation',
    desc: 'Real-time optical guidance delivering 0.005mm implant trajectory accuracy',
    icon: <Gem className="w-5 h-5 text-champagne-dark" />
  },
  {
    numeral: 'II',
    title: 'Hospital Cleanroom',
    desc: 'Positive-pressure HEPA-14 surgical air filtration and continuous air changes',
    icon: <Sparkles className="w-5 h-5 text-champagne-dark" />
  },
  {
    numeral: 'III',
    title: 'Digital Autoclave Log',
    desc: 'Individual RFID batch sterilization tracking for every surgical instrument',
    icon: <Shield className="w-5 h-5 text-champagne-dark" />
  },
  {
    numeral: 'IV',
    title: 'Diplomate Fellows',
    desc: 'Every procedure overseen by ICOI & AAID dual board-certified surgeons',
    icon: <Users className="w-5 h-5 text-champagne-dark" />
  },
  {
    numeral: 'V',
    title: 'Acoustic Sanctuary',
    desc: 'Sound-isolated suites with conscious sedation and noise-cancelling optics',
    icon: <Heart className="w-5 h-5 text-champagne-dark" />
  }
];

function SafeCareBanner() {
  return (
    <section className="py-24 px-4 sm:px-8 bg-neutral-100 text-noir-950 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/5 border border-black/10 text-[10px] font-mono uppercase tracking-widest text-neutral-600 mb-3">
            <span>Surgical Security Protocol</span>
          </div>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium tracking-tight text-noir-950">
            Uncompromising Standards, <span className="italic font-normal text-champagne-dark">Every Procedure</span>
          </h3>
        </div>

        {/* 5 Architectural Monolith Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {PILLARS.map((p, i) => (
            <div 
              key={i} 
              className="editorial-card-light group rounded-2xl p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5 pb-3 border-b border-neutral-100">
                  <span className="font-serif text-lg text-neutral-300 group-hover:text-champagne-dark transition-colors">
                    {p.numeral}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-neutral-50 flex items-center justify-center">
                    {p.icon}
                  </div>
                </div>

                <h4 className="font-serif font-bold text-lg text-noir-950 mb-2">
                  {p.title}
                </h4>

                <p className="text-xs text-neutral-600 font-light leading-relaxed">
                  {p.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-neutral-100 flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-neutral-500">
                <CheckCircle2 className="w-3 h-3 text-champagne-dark" />
                <span>Verified Standard</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default memo(SafeCareBanner);
