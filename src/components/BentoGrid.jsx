import React, { memo } from 'react';
import { Cpu, Shield, Zap, Sparkles, Layers, Award, ArrowUpRight } from 'lucide-react';

function BentoGrid({ onOpenBooking }) {
  return (
    <section 
      id="technology" 
      className="relative py-24 sm:py-32 md:py-40 px-4 sm:px-8 bg-noir-950 text-white overflow-hidden blueprint-grid-dark border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/15 text-champagne text-xs font-mono uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-champagne" />
            <span>Robotic Bio-Engineering Lab</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-medium tracking-tight text-white leading-[1.08]">
            Where Surgical Robotics Meets <br />
            <span className="italic font-normal text-champagne">Biomimetic Ceramic Artistry</span>
          </h2>

          <p className="mt-6 text-neutral-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light">
            Every fixture is a masterpiece of biological osseointegration and mechanical kinematics. We replace obsolete freehand guesswork with sub-micron computerized navigation.
          </p>
        </div>

        {/* Gapless Bento Grid - auto-rows-auto on mobile prevents card clipping! */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-auto md:auto-rows-[280px] grid-flow-dense">
          
          {/* Card 1: 3D Guided Navigated Surgery */}
          <div className="md:col-span-8 md:row-span-2 rounded-3xl glass-dark p-6 sm:p-10 md:p-12 relative overflow-hidden flex flex-col justify-between group border border-white/15 hover:border-champagne transition-all duration-500">
            <div className="relative z-10 flex flex-wrap items-center justify-between gap-3">
              <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-2xl bg-white/5 border border-champagne/40 flex items-center justify-center text-champagne">
                <Cpu className="w-6 sm:w-7 h-6 sm:h-7" />
              </div>
              <span className="text-[11px] sm:text-xs font-mono tracking-wider uppercase text-champagne px-3.5 py-1 rounded-full bg-white/5 border border-white/10">
                ±0.005mm Navigational Tolerance
              </span>
            </div>

            <div className="relative z-10 my-auto py-6 sm:py-8">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white mb-4 group-hover:text-champagne transition-colors">
                Dynamic 3D Optical Navigation & Robotic Flapless Surgery
              </h3>
              <p className="text-neutral-300 text-sm sm:text-base max-w-xl leading-relaxed font-light">
                Using real-time optical tracking cameras synced to micro-CT scan data, our surgeons navigate the jawbone with aerospace telemetry. The result: zero freehand variance, zero unnecessary incisions, and minimal post-operative downtime.
              </p>
            </div>

            <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10">
              <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-xs text-neutral-300 font-mono">
                <div>
                  <span className="block font-bold text-lg sm:text-xl text-white font-mono">99.8%</span>
                  <span className="text-[10px] text-neutral-400 uppercase">Osseointegration</span>
                </div>
                <div className="w-px h-8 bg-white/10 hidden sm:block" />
                <div>
                  <span className="block font-bold text-lg sm:text-xl text-champagne font-mono">&lt; 15 min</span>
                  <span className="text-[10px] text-neutral-400 uppercase">Placement Speed</span>
                </div>
                <div className="w-px h-8 bg-white/10 hidden sm:block" />
                <div>
                  <span className="block font-bold text-lg sm:text-xl text-white font-mono">Zero</span>
                  <span className="text-[10px] text-neutral-400 uppercase">Scalpel Incisions</span>
                </div>
              </div>

              <button 
                onClick={onOpenBooking}
                className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-champagne hover:text-white transition-colors group-hover:translate-x-1 duration-300 py-1"
              >
                <span>Examine Telemetry</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 2: Biocompatible Zirconia */}
          <div className="md:col-span-4 md:row-span-1 rounded-3xl glass-dark p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between group border border-white/15 hover:border-champagne transition-all duration-500">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-champagne/40 flex items-center justify-center text-champagne">
                <Shield className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono uppercase text-champagne font-bold">100% Metal-Free Option</span>
            </div>

            <div className="pt-4">
              <h3 className="text-xl font-serif font-bold text-white mb-1.5 group-hover:text-champagne transition-colors">
                Polycrystalline 5Y Zirconia
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                Zero galvanic oral currents. Ultra-pure cubic zirconia with biological soft-tissue affinity superior to grade-4 titanium.
              </p>
            </div>
          </div>

          {/* Card 3: Instant 5-Axis Sintering */}
          <div className="md:col-span-4 md:row-span-1 rounded-3xl glass-dark p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between group border border-white/15 hover:border-champagne transition-all duration-500">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-champagne/40 flex items-center justify-center text-champagne">
                <Zap className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono uppercase text-champagne font-bold">In-House Milling Lab</span>
            </div>

            <div className="pt-4">
              <h3 className="text-xl font-serif font-bold text-white mb-1.5 group-hover:text-champagne transition-colors">
                5-Axis CNC Wet Sintering
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                Same-day provisional crown fabrication in under 60 minutes via German diamond-tipped ultra-fine milling hubs.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default memo(BentoGrid);
