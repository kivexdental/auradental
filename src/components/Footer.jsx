import React, { memo } from 'react';
import { Phone, MapPin, Clock, ShieldCheck, ArrowUp, FileText, Lock, ShieldAlert, Award } from 'lucide-react';

function Footer({ onOpenBooking, onOpenPolicy }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-noir-950 border-t border-white/10 pt-24 pb-14 px-4 sm:px-8 text-neutral-400 overflow-hidden blueprint-grid-dark">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-white/10">
          
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-champagne text-noir-950 flex items-center justify-center font-serif font-bold text-sm shadow-sm">
                ✦
              </div>
              <span className="font-serif font-semibold tracking-wider text-2xl text-white">
                AURA <span className="font-sans text-xs tracking-widest font-normal text-champagne uppercase">Atelier</span>
              </span>
            </div>

            <p className="text-sm text-neutral-400 max-w-sm font-light leading-relaxed">
              Pioneering sub-micron robotic osseointegration, biomimetic ceramic reconstructions, and kinematic facial aesthetics. Dedicated to patients who demand uncompromising restorative perfection.
            </p>

            <div className="pt-2 flex flex-col gap-2 text-xs text-neutral-500 font-mono">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-champagne shrink-0" />
                <span>Accredited American Academy of Implant Dentistry (AAID)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Award className="w-4 h-4 text-champagne shrink-0" />
                <span>Swiss Foundation for Dental Implants Clinical Partner</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-white mb-5 font-semibold">
              Disciplines
            </h3>
            <ul className="space-y-3 text-xs font-mono text-neutral-400">
              <li><a href="#services-row" className="hover:text-champagne transition-colors">Robotic Dental Implants</a></li>
              <li><a href="#services-row" className="hover:text-champagne transition-colors">Master Ceramic Veneers</a></li>
              <li><a href="#services-row" className="hover:text-champagne transition-colors">SmartTrack Clear Aligners</a></li>
              <li><a href="#services-row" className="hover:text-champagne transition-colors">Full-Arch Reconstruction</a></li>
              <li><a href="#services-row" className="hover:text-champagne transition-colors">Cold Diode Laser Surgery</a></li>
              <li><a href="#services-row" className="hover:text-champagne transition-colors">Biofilm Airflow Therapy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-white mb-5 font-semibold">
              Atelier Architecture
            </h3>
            <ul className="space-y-3 text-xs font-mono text-neutral-400">
              <li><a href="#about-denta" className="hover:text-champagne transition-colors">Surgical Philosophy</a></li>
              <li><a href="#technology" className="hover:text-champagne transition-colors">3D Robotics & CAD/CAM</a></li>
              <li><a href="#surgeons" className="hover:text-champagne transition-colors">Master Clinicians</a></li>
              <li><a href="#pricing" className="hover:text-champagne transition-colors">Private Wealth Concierge</a></li>
              <li><a href="#journal" className="hover:text-champagne transition-colors">Clinical Journal</a></li>
              <li><a href="#contact" className="hover:text-champagne transition-colors">Private Suites & Valet</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-white mb-5 font-semibold">
              Private Concierge
            </h3>
            <div className="flex items-start gap-2.5 text-xs font-light text-neutral-300">
              <MapPin className="w-4 h-4 text-champagne shrink-0 mt-0.5" />
              <span>450 Sutter St, Suite 2100<br />San Francisco, CA 94108</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs font-mono text-neutral-300">
              <Phone className="w-4 h-4 text-champagne shrink-0" />
              <a href="tel:+14158902200" className="hover:text-champagne transition-colors">+1 (415) 890-2200</a>
            </div>
            <div className="flex items-center gap-2.5 text-xs font-mono text-neutral-400">
              <Clock className="w-4 h-4 text-champagne shrink-0" />
              <span>Mon – Fri: 08:00 – 19:00</span>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="w-full py-3 rounded-full text-xs font-mono uppercase tracking-widest bg-champagne text-noir-950 hover:bg-champagne-light hover:shadow-glow-champagne transition-all text-center font-bold"
              >
                Reserve Consultation
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 flex flex-col lg:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <div>
            © {new Date().getFullYear()} AURA Dental Atelier. All rights reserved. Swiss & AAID Accredited.
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6">
            <button 
              onClick={() => onOpenPolicy?.('privacy')}
              className="hover:text-champagne transition-colors"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => onOpenPolicy?.('disclaimer')}
              className="hover:text-champagne transition-colors"
            >
              Medical Disclaimer
            </button>
            <button 
              onClick={() => onOpenPolicy?.('terms')}
              className="hover:text-champagne transition-colors"
            >
              Terms of Service
            </button>
            <button 
              onClick={() => onOpenPolicy?.('cookies')}
              className="hover:text-champagne transition-colors"
            >
              Cookie Policy
            </button>
            <button 
              onClick={() => onOpenPolicy?.('appointment')}
              className="hover:text-champagne transition-colors"
            >
              Appointment Policy
            </button>
            
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors"
              title="Return to top"
              aria-label="Return to top of page"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default memo(Footer);
