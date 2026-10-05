import React, { useState, useEffect, memo } from 'react';
import { Calendar, Menu, X, ArrowUpRight } from 'lucide-react';

const BRAND_ICON = (
  <div className="w-6 h-6 rounded-md bg-champagne text-noir-950 flex items-center justify-center font-serif font-bold text-xs shadow-sm">
    ✦
  </div>
);

const NAV_LINKS = [
  { href: '#services-experience', label: 'Disciplines' },
  { href: '#about-denta', label: 'The Atelier' },
  { href: '#technology', label: 'Robotics Lab' },
  { href: '#surgeons', label: 'Master Clinicians' },
  { href: '#pricing', label: 'Financing' },
  { href: '#journal', label: 'Clinical Journal' },
  { href: '#contact', label: 'Flagship Suite' },
];

function Navbar({ onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [islandExpanded, setIslandExpanded] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock scroll when mobile menu is open and handle ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileOpen) {
        setMobileOpen(false);
      }
    };
    if (mobileOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <div className="fixed top-4 left-0 right-0 z-40 flex justify-center px-4 pointer-events-none">
      <header
        onMouseEnter={() => setIslandExpanded(true)}
        onMouseLeave={() => setIslandExpanded(false)}
        className={`pointer-events-auto transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] rounded-full border shadow-2xl flex items-center justify-between ${
          scrolled && !islandExpanded
            ? 'px-4 py-1.5 bg-noir-950/90 backdrop-blur-2xl border-white/15 max-w-sm w-auto gap-4'
            : 'px-6 py-2 bg-noir-950/85 backdrop-blur-2xl border-white/10 max-w-5xl w-full gap-6'
        }`}
        style={{
          boxShadow: '0 16px 40px -10px rgba(0,0,0,0.9), inset 0 1px 0 0 rgba(255,255,255,0.15)'
        }}
      >
        {/* Brand Logo & Dynamic Island Status */}
        <a 
          href="#" 
          className="flex items-center gap-2.5 shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne rounded-lg p-0.5"
          aria-label="Aura Dental Atelier Homepage"
        >
          {BRAND_ICON}
          <div className="flex flex-col">
            <span className="font-serif tracking-tight text-base font-semibold text-white group-hover:text-champagne transition-colors leading-none">
              AURA <span className="font-sans text-[10px] tracking-widest font-normal text-champagne uppercase">Atelier</span>
            </span>
          </div>

          {/* Dynamic Island Status Pill */}
          <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] text-neutral-400 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-champagne animate-pulse" />
            <span>Surgical Suites Active</span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav 
          aria-label="Main Navigation"
          className={`hidden md:flex items-center gap-6 lg:gap-7 transition-all duration-300 ${
            scrolled && !islandExpanded ? 'opacity-0 scale-95 pointer-events-none w-0 overflow-hidden' : 'opacity-100 scale-100'
          }`}
        >
          {NAV_LINKS.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              className="text-xs uppercase tracking-wider font-medium text-neutral-300 hover:text-champagne transition-colors focus:outline-none focus-visible:text-champagne py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Quick Action Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenBooking}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold tracking-wide bg-champagne text-noir-950 hover:bg-champagne-light hover:shadow-glow-champagne transition-all duration-200 active:scale-95 shrink-0 min-h-[36px]"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Reserve Consultation</span>
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-neutral-300 hover:text-white rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne min-w-[40px] min-h-[40px] flex items-center justify-center"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen ? (
        <div 
          className="pointer-events-auto md:hidden fixed top-20 inset-x-4 p-6 rounded-3xl glass-dark border border-white/20 bg-noir-950/98 backdrop-blur-2xl shadow-2xl flex flex-col gap-4 animate-in fade-in zoom-in-95 duration-200 max-h-[80vh] overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <span className="text-xs font-mono uppercase tracking-widest text-champagne">
              Atelier Directory
            </span>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-1 rounded-full text-neutral-400 hover:text-white"
              aria-label="Close menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <nav className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.href}
                href={link.href} 
                onClick={() => setMobileOpen(false)} 
                className="text-base font-serif font-medium text-neutral-200 hover:text-champagne py-2.5 border-b border-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            onClick={() => {
              setMobileOpen(false);
              onOpenBooking();
            }}
            className="w-full mt-2 py-3.5 rounded-full text-xs font-mono font-bold uppercase tracking-widest bg-champagne text-noir-950 hover:bg-champagne-light transition-all flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Reserve Consultation</span>
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default memo(Navbar);
