import React from 'react';
import { MapPin, Phone, Clock, ArrowRight } from 'lucide-react';

export default function VisitUsBanner({ onOpenBooking }) {
  return (
    <section id="contact" className="py-12 px-4 sm:px-8 max-w-7xl mx-auto">
      <div 
        className="rounded-3xl p-6 sm:p-8 border border-white/15 glass-card shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6"
        style={{
          background: 'rgba(10, 24, 40, 0.75)',
          backdropFilter: 'blur(20px)'
        }}
      >
        {/* Left: Map & Address */}
        <div className="flex items-center gap-4 w-full lg:w-auto">
          {/* Stylized Modern Dark Map Thumbnail */}
          <div className="relative w-28 h-20 rounded-2xl overflow-hidden border border-white/10 shrink-0 bg-midnight-900 group">
            <svg className="w-full h-full opacity-60" viewBox="0 0 100 70" fill="none">
              <rect width="100" height="70" fill="#081420" />
              <path d="M0 25H100M0 50H100M30 0V70M70 0V70" stroke="#18344E" strokeWidth="2" />
              <circle cx="50" cy="35" r="16" fill="#E39A7B" fillOpacity="0.15" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-7 h-7 rounded-full bg-peach text-midnight-950 flex items-center justify-center shadow-glow-peach animate-pulse">
                <MapPin className="w-4 h-4 fill-current" />
              </div>
            </div>
          </div>

          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
              Visit Us
            </span>
            <h4 className="font-display font-bold text-sm sm:text-base text-white">
              123 Dental Care Street, Smile City
            </h4>
            <span className="text-xs text-slate-400">Suite 400, SC 12345</span>
          </div>
        </div>

        {/* Middle: Phone Hotline & Hours */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 w-full lg:w-auto border-t lg:border-t-0 lg:border-l border-white/10 pt-4 lg:pt-0 lg:pl-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Phone className="w-4 h-4 text-peach" />
              <span className="text-xs text-slate-400">Call Us Today:</span>
            </div>
            <a 
              href="tel:+919876543210" 
              className="font-display font-extrabold text-base sm:text-lg text-white hover:text-peach transition-colors"
            >
              +91 987 654 3210
            </a>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-1">
              <Clock className="w-4 h-4 text-gold" />
              <span className="text-xs text-slate-400">Working Hours:</span>
            </div>
            <span className="text-xs font-semibold text-slate-200 block">
              Mon - Sat: 9:00 AM - 8:00 PM
            </span>
            <span className="text-[11px] text-coral">Sunday: Closed for Sterilization</span>
          </div>
        </div>

        {/* Right: CTA Button */}
        <div className="w-full lg:w-auto shrink-0">
          <button
            onClick={() => onOpenBooking('Quick Reservation')}
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-midnight-950 hover:bg-peach hover:shadow-glow-peach transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <span>Book Appointment</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
}
