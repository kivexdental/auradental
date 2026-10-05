import React, { useEffect, useRef, useState, memo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown, Sparkles, ChevronRight, ArrowRight, ShieldCheck, Award, CheckCircle2, Calendar } from 'lucide-react';
import ServiceDetailModal from './ServiceDetailModal';

gsap.registerPlugin(ScrollTrigger);

// Vercel Best Practice: rendering-hoist-jsx (Hoisted SVG elements outside component)
const TeethBracesIcon = () => (
  <svg className="w-8 h-8 text-champagne stroke-current" viewBox="0 0 48 48" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="10" width="11" height="26" rx="4" className="stroke-white/80" />
    <rect x="18" y="8" width="12" height="28" rx="4" className="stroke-white/80" />
    <rect x="32" y="10" width="11" height="26" rx="4" className="stroke-white/80" />
    <rect x="8" y="20" width="5" height="6" rx="1" fill="#C5A880" className="stroke-white" strokeWidth="1.5" />
    <rect x="21" y="19" width="6" height="6" rx="1" fill="#C5A880" className="stroke-white" strokeWidth="1.5" />
    <rect x="35" y="20" width="5" height="6" rx="1" fill="#C5A880" className="stroke-white" strokeWidth="1.5" />
    <path d="M3 23H45" className="stroke-white" strokeWidth="2.5" />
  </svg>
);

const DentalImplantIcon = () => (
  <svg className="w-8 h-8 text-champagne stroke-current" viewBox="0 0 48 48" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 6C14 6 15 17 19 18H29C33 17 34 6 34 6C34 6 29 4 24 4C19 4 14 6 14 6Z" fill="white" fillOpacity="0.1" className="stroke-white/90" />
    <path d="M19 18H29V22H19V18Z" fill="#C5A880" className="stroke-champagne" />
    <path d="M21 22H27V42C27 43 25.5 44 24 44C22.5 44 21 43 21 42V22Z" className="stroke-white/90" />
    <path d="M19 25L29 27" className="stroke-champagne" />
    <path d="M19 29L29 31" className="stroke-champagne" />
    <path d="M19 33L29 35" className="stroke-champagne" />
    <path d="M20 37L28 39" className="stroke-champagne" />
  </svg>
);

const AlignersIcon = () => (
  <svg className="w-8 h-8 text-champagne stroke-current" viewBox="0 0 48 48" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 34C7 26 12 14 24 14C36 14 41 26 42 34" className="stroke-neutral-400" strokeDasharray="3 2" />
    <path d="M7 31C9 24 14 17 24 17C34 17 39 24 41 31" className="stroke-white/90" />
    <path d="M7 32C9 30 11 31 12 32C14 28 17 28 19 29C21 26 27 26 29 29C31 28 34 28 36 32C37 31 39 30 41 32" className="stroke-champagne" strokeWidth="2" />
  </svg>
);

const GeneralDentistryIcon = () => (
  <svg className="w-8 h-8 text-champagne stroke-current" viewBox="0 0 48 48" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 12C16 6 22 7 24 9C26 7 32 6 34 12C36 18 36 26 33 34C31 39 28 42 27 34C26 28 22 28 21 34C20 42 17 39 15 34C12 26 12 18 14 12Z" className="stroke-white/90" />
    <circle cx="29" cy="27" r="10" fill="#000000" className="stroke-champagne" strokeWidth="2" />
    <path d="M29 22V32" className="stroke-champagne" strokeWidth="2" />
    <path d="M24 27H34" className="stroke-champagne" strokeWidth="2" />
  </svg>
);

const LaserDentistryIcon = () => (
  <svg className="w-8 h-8 text-champagne stroke-current" viewBox="0 0 48 48" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 14C14 8 20 9 22 11C24 9 30 8 32 14C34 20 34 28 31 36C29 41 26 44 25 36C24 30 20 30 19 36C18 44 15 41 13 36C10 28 10 20 12 14Z" className="stroke-white/90" />
    <line x1="39" y1="9" x2="27" y2="21" className="stroke-champagne" strokeWidth="2.5" />
    <circle cx="27" cy="21" r="2.5" fill="#C5A880" />
    <path d="M27 15V18" className="stroke-champagne" strokeWidth="1.8" />
    <path d="M27 24V27" className="stroke-champagne" strokeWidth="1.8" />
    <path d="M21 21H24" className="stroke-champagne" strokeWidth="1.8" />
    <path d="M30 21H33" className="stroke-champagne" strokeWidth="1.8" />
  </svg>
);

const SERVICES_DATA = [
  {
    id: 'braces',
    numeral: '01',
    title: 'Precision Braces',
    subtitle: 'Cephalometric Biomechanics',
    icon: <TeethBracesIcon />,
    duration: '6 - 14 Months',
    longevity: 'Lifetime Stability',
    recovery: 'Immediate',
    startingPrice: '$2,800',
    description: 'Custom ceramic and low-profile titanium bracket systems tailored through 3D cephalometric analysis to achieve optimal bite kinematics.',
    benefits: ['Subtle translucent ceramic', 'Accelerated micro-pulsation physics', 'Complete malocclusion correction', 'Permanent retainers included']
  },
  {
    id: 'implant',
    numeral: '02',
    title: 'Robotic Implants',
    subtitle: 'Flapless Osseointegration',
    icon: <DentalImplantIcon />,
    duration: '45 - 60 Min',
    longevity: 'Lifetime Osseointegration',
    recovery: '24 Hours Mild Rest',
    startingPrice: '$1,950',
    description: 'Surgically guided grade-5 titanium or pure zirconia implant anchors placed with sub-millimeter robotic precision for lifelong bone preservation.',
    benefits: ['99.4% clinical success rate', '3D CT guided flapless micro-surgery', 'Same-day aesthetic crown', 'Zero damage to adjacent teeth']
  },
  {
    id: 'aligners',
    numeral: '03',
    title: 'Clear Aligners',
    subtitle: 'Biomimetic SmartTrack',
    icon: <AlignersIcon />,
    duration: '4 - 10 Months',
    longevity: 'Long-term Retention',
    recovery: 'Seamless Daily Wear',
    startingPrice: '$2,400',
    description: 'Ultra-clear, multi-layer SmartTrack aligners engineered via digital smile prediction software. Virtually invisible orthodontic treatment.',
    benefits: ['100% removable for dining & cleaning', 'Digital 3D simulation before start', 'Soft scalloped gumline comfort', 'Fewer clinic check-ups']
  },
  {
    id: 'general',
    numeral: '04',
    title: 'Master Restorations',
    subtitle: 'Biomimetic Sintered Ceramics',
    icon: <GeneralDentistryIcon />,
    duration: '30 - 60 Min',
    longevity: '15+ Years Retention',
    recovery: 'Instant',
    startingPrice: '$320',
    description: 'Holistic preventive, diagnostic, and restorative oral care. From ultrasonic airflow hygiene to biomimetic tooth-colored porcelain crowns.',
    benefits: ['Zero-radiation intraoral cameras', 'Biomimetic layered restorations', 'Deep periodontal airflow cleaning', 'Oral microbiome therapy']
  },
  {
    id: 'laser',
    numeral: '05',
    title: 'Laser Contouring',
    subtitle: 'Cold Diode Micro-Aesthetics',
    icon: <LaserDentistryIcon />,
    duration: '20 - 40 Min',
    longevity: 'Permanent Contour',
    recovery: 'Immediate (No Sutures)',
    startingPrice: '$450',
    description: 'Dual-wavelength laser technology replacing scalpels. Instant bio-coagulation, zero bleeding, and accelerated healing.',
    benefits: ['No scalpel or sutures necessary', 'Instant bio-stimulation & recovery', 'Symmetrical gumline contouring', 'Safe for sensitive dentin']
  }
];

function HeroScrollExperience({ onOpenBooking }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const heroTextRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const servicesTitleRef = useRef(null);
  
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);
  const [activeModalService, setActiveModalService] = useState(null);
  const [currentFrameNum, setCurrentFrameNum] = useState(0);

  const imagesRef = useRef([]);
  const TOTAL_FRAMES = 50;

  useEffect(() => {
    let loadedCount = 0;
    const imgArray = [];

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      const frameStr = String(i).padStart(3, '0');
      img.src = `/frames/frame_${frameStr}.webp`;
      img.onload = () => {
        loadedCount++;
        setLoadProgress(Math.round((loadedCount / TOTAL_FRAMES) * 100));
        if (loadedCount === TOTAL_FRAMES) {
          imagesRef.current = imgArray;
          setImagesLoaded(true);
        }
      };
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === TOTAL_FRAMES) {
          imagesRef.current = imgArray;
          setImagesLoaded(true);
        }
      };
      imgArray.push(img);
    }
  }, []);

  const drawFrame = (frameIndex) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = imagesRef.current[frameIndex];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const dpr = window.devicePixelRatio || 1;
    const w = containerRef.current?.clientWidth || window.innerWidth;
    const h = containerRef.current?.clientHeight || window.innerHeight;

    if (canvas.width !== w * dpr || canvas.height !== h * dpr) {
      canvas.width = w * dpr;
      canvas.height = h * dpr;
    }

    ctx.save();
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, w, h);

    const imgAspect = img.naturalWidth / img.naturalHeight;
    const screenAspect = w / h;

    let drawW, drawH, drawX, drawY;

    if (screenAspect > imgAspect) {
      drawW = w;
      drawH = w / imgAspect;
      drawX = 0;
      drawY = (h - drawH) / 2;
    } else {
      drawH = h;
      drawW = h * imgAspect;
      drawX = (w - drawW) / 2;
      drawY = 0;
    }

    ctx.drawImage(img, drawX, drawY, drawW, drawH);
    ctx.restore();
  };

  useEffect(() => {
    if (!imagesLoaded || !containerRef.current) return;

    drawFrame(0);

    // Vercel Best Practice: client-passive-event-listeners
    const handleResize = () => drawFrame(currentFrameNum);
    window.addEventListener('resize', handleResize, { passive: true });

    const ctx = gsap.context(() => {
      const scrubObj = { frame: 0 };

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=280%',
          pin: true,
          scrub: 0.5,
          anticipatePin: 1,
          onUpdate: (self) => {
            const frameProgress = Math.min(Math.max(self.progress * 1.3, 0), 1);
            const targetFrame = Math.min(Math.floor(frameProgress * (TOTAL_FRAMES - 1)), TOTAL_FRAMES - 1);
            setCurrentFrameNum(targetFrame);
            drawFrame(targetFrame);
          }
        }
      });

      tl.to(heroTextRef.current, {
        opacity: 0,
        y: -60,
        scale: 0.95,
        duration: 0.25,
        ease: 'power2.out',
      }, 0);

      tl.to(scrubObj, {
        frame: TOTAL_FRAMES - 1,
        duration: 0.65,
        ease: 'none',
      }, 0);

      tl.fromTo(servicesTitleRef.current, {
        opacity: 0,
        scale: 0.75,
        y: 25
      }, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.2,
        ease: 'back.out(2)',
      }, 0.55);

      const cards = cardsContainerRef.current ? cardsContainerRef.current.querySelectorAll('.service-pop-card') : [];
      if (cards.length > 0) {
        tl.fromTo(cards, {
          opacity: 0,
          scale: 0.75,
          y: (i) => (i < 2 ? -35 : 35),
          filter: 'blur(10px)',
        }, {
          opacity: 1,
          scale: 1,
          y: 0,
          filter: 'blur(0px)',
          stagger: 0.07,
          duration: 0.35,
          ease: 'power3.out',
        }, 0.58);
      }

    }, containerRef);

    return () => {
      ctx.revert();
      window.removeEventListener('resize', handleResize);
    };
  }, [imagesLoaded]);

  return (
    <section 
      id="services-experience" 
      ref={containerRef} 
      className="relative w-full max-w-full h-screen overflow-hidden bg-noir-950 flex items-center justify-center select-none"
    >
      {!imagesLoaded ? (
        <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-noir-950 gap-5">
          <div className="w-14 h-14 rounded-2xl bg-champagne text-noir-950 flex items-center justify-center font-serif text-2xl font-bold animate-pulse shadow-glow-champagne">
            ✦
          </div>
          <span className="text-sm font-serif tracking-wider text-neutral-300">
            Calibrating Surgical 3D Optical Suite...
          </span>
          <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-champagne transition-all duration-300"
              style={{ width: `${loadProgress}%` }}
            />
          </div>
          <span className="text-xs text-neutral-500 font-mono">{loadProgress}%</span>
        </div>
      ) : null}

      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />

      {/* Titanium Aerospace Telemetry HUD Calipers */}
      <div className="absolute inset-x-8 top-20 hidden md:flex justify-between items-center text-[10px] font-mono text-neutral-400 pointer-events-none z-10">
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-champagne animate-pulse" />
          SWISS OPTICAL SCAN: 60 FPS
        </span>
        <span className="border border-white/10 px-3 py-1 rounded-full bg-noir-900/60 backdrop-blur-md">
          TORQUE: 45 Ncm • TOLERANCE: ±0.005mm
        </span>
      </div>

      <div className="absolute inset-0 bg-radial-gradient from-transparent via-noir-950/20 to-noir-950/85 pointer-events-none" />

      {/* HERO ENTRY OVERLAY */}
      <div 
        ref={heroTextRef} 
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-20 pointer-events-none pt-8"
      >
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-noir-900/80 border border-white/15 backdrop-blur-xl mb-6 pointer-events-auto">
            <span className="w-1.5 h-1.5 rounded-full bg-champagne animate-ping" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-champagne">
              Swiss Biomimetic Prosthodontics • Est. 2012
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-medium text-white tracking-tight leading-[1.05] mb-5 drop-shadow-2xl">
            The Architecture of the <br className="hidden sm:inline" />
            <span className="italic font-normal text-champagne">Human Smile</span>
          </h1>

          <p className="max-w-2xl text-xs sm:text-base md:text-lg text-neutral-300 font-light leading-relaxed mb-8 drop-shadow">
            Where sub-micron robotic engineering converges with high-art facial aesthetics. An uncompromising dental atelier for full dentition restoration.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-10 pointer-events-auto">
            <button
              onClick={() => onOpenBooking('Priority Consultation')}
              className="flex items-center gap-2.5 px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest bg-champagne text-noir-950 hover:bg-champagne-light hover:shadow-glow-champagne transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <Calendar className="w-4 h-4" />
              <span>Reserve Consultation</span>
            </button>
            <a
              href="#services-row"
              className="flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-medium text-neutral-200 bg-white/5 hover:bg-white/10 border border-white/15 backdrop-blur-md transition-all duration-300 hover:border-champagne"
            >
              <span>Explore Disciplines</span>
              <ArrowDown className="w-3.5 h-3.5 text-champagne" />
            </a>
          </div>

          {/* Architectural Stat Monolith */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 py-3 px-8 rounded-2xl bg-noir-900/80 border border-white/10 backdrop-blur-xl pointer-events-auto shadow-2xl">
            <div className="flex items-center gap-3 text-left">
              <ShieldCheck className="w-5 h-5 text-champagne shrink-0" />
              <div>
                <span className="block text-sm font-bold text-white font-mono">15+ Years</span>
                <span className="text-[10px] text-neutral-400 uppercase tracking-wider">Clinical Mastery</span>
              </div>
            </div>
            <div className="w-px h-6 bg-white/10" />
            <div className="flex items-center gap-3 text-left">
              <Award className="w-5 h-5 text-champagne shrink-0" />
              <div>
                <span className="block text-sm font-bold text-white font-mono">99.4%</span>
                <span className="text-[10px] text-neutral-400 uppercase tracking-wider">Osseointegration</span>
              </div>
            </div>
            <div className="w-px h-6 bg-white/10" />
            <div className="flex items-center gap-3 text-left">
              <CheckCircle2 className="w-5 h-5 text-champagne shrink-0" />
              <div>
                <span className="block text-sm font-bold text-white font-mono">±0.005mm</span>
                <span className="text-[10px] text-neutral-400 uppercase tracking-wider">CAD/CAM Precision</span>
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center gap-2 text-champagne animate-bounce pointer-events-auto">
            <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-400">
              Scroll down to scrub 3D restoration
            </span>
            <ArrowDown className="w-3.5 h-3.5 text-champagne" />
          </div>

        </div>
      </div>

      {/* CENTER TOOTH "SERVICES" BADGE */}
      <div 
        ref={servicesTitleRef}
        className="absolute top-[28%] sm:top-[30%] md:top-[32%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none opacity-0 flex flex-col items-center justify-center text-center"
      >
        <div className="px-8 py-3 rounded-2xl bg-noir-950/85 backdrop-blur-2xl border border-white/20 shadow-2xl">
          <span className="text-[10px] font-mono uppercase tracking-widest text-champagne block mb-1">
            Restoration Complete
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold tracking-tight text-white">
            Select Discipline
          </h2>
          <div className="w-12 h-0.5 bg-champagne rounded-full mx-auto mt-2" />
        </div>
      </div>

      {/* 5 ENLARGED, SCULPTED POP-UP SERVICE CARDS */}
      <div 
        ref={cardsContainerRef} 
        className="absolute inset-0 pointer-events-none z-30 flex items-center justify-center"
      >
        <div className="relative w-full h-full max-w-7xl max-h-screen">
          <div className="absolute top-[10%] sm:top-[12%] left-[3%] sm:left-[5%] md:left-[7%] pointer-events-auto">
            <ServiceCard service={SERVICES_DATA[0]} onSelect={() => setActiveModalService(SERVICES_DATA[0])} />
          </div>

          <div className="absolute top-[10%] sm:top-[12%] right-[3%] sm:right-[5%] md:right-[7%] pointer-events-auto">
            <ServiceCard service={SERVICES_DATA[1]} onSelect={() => setActiveModalService(SERVICES_DATA[1])} />
          </div>

          <div className="absolute bottom-[9%] sm:bottom-[12%] left-[3%] sm:left-[5%] md:left-[7%] pointer-events-auto">
            <ServiceCard service={SERVICES_DATA[2]} onSelect={() => setActiveModalService(SERVICES_DATA[2])} />
          </div>

          <div className="absolute bottom-[4%] sm:bottom-[6%] left-1/2 -translate-x-1/2 pointer-events-auto">
            <ServiceCard service={SERVICES_DATA[3]} onSelect={() => setActiveModalService(SERVICES_DATA[3])} isCenter={true} />
          </div>

          <div className="absolute bottom-[9%] sm:bottom-[12%] right-[3%] sm:right-[5%] md:right-[7%] pointer-events-auto">
            <ServiceCard service={SERVICES_DATA[4]} onSelect={() => setActiveModalService(SERVICES_DATA[4])} />
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 right-6 hidden md:flex items-center gap-3 px-4 py-2 rounded-full bg-noir-900/80 backdrop-blur-xl border border-white/10 text-[11px] font-mono text-neutral-400 z-40">
        <span className="w-1.5 h-1.5 rounded-full bg-champagne animate-pulse" />
        <span>Restoration Stage:</span>
        <span className="text-champagne font-bold">{currentFrameNum + 1} / {TOTAL_FRAMES}</span>
      </div>

      {activeModalService ? (
        <ServiceDetailModal 
          service={activeModalService} 
          onClose={() => setActiveModalService(null)} 
          onBook={(serviceName) => {
            setActiveModalService(null);
            onOpenBooking(serviceName);
          }}
        />
      ) : null}
    </section>
  );
}

// Enlarged, Monumental Pop-up Card with Pure Noir & Champagne Detail
function ServiceCard({ service, onSelect, isCenter = false }) {
  return (
    <div 
      onClick={onSelect}
      className={`service-pop-card group relative cursor-pointer select-none rounded-3xl p-5 sm:p-6 transition-all duration-400 hover:scale-105 active:scale-95 border border-white/15 hover:border-champagne shadow-glass-dark ${
        isCenter ? 'w-[210px] sm:w-[280px] md:w-[320px]' : 'w-[170px] sm:w-[230px] md:w-[280px]'
      }`}
      style={{
        background: 'rgba(8, 8, 10, 0.85)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
      }}
    >
      <div 
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at top right, rgba(197, 168, 128, 0.18) 0%, transparent 70%)'
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="flex items-center justify-between w-full mb-3 px-1">
          <span className="text-[10px] font-mono text-champagne font-semibold tracking-widest">
            {service.numeral}
          </span>
          <span className="text-[10px] font-mono text-neutral-400">
            {service.startingPrice}
          </span>
        </div>

        <div className="mb-3 transition-transform duration-300 group-hover:scale-110">
          {service.icon}
        </div>

        <h3 className="font-serif font-bold text-sm sm:text-lg text-white group-hover:text-champagne transition-colors leading-tight">
          {service.title}
        </h3>

        <p className="text-[11px] sm:text-xs text-neutral-400 font-light mt-1.5 leading-snug line-clamp-2">
          {service.subtitle}
        </p>

        <div className="mt-3.5 flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-champagne group-hover:text-white transition-colors">
          <span>Examine Protocol</span>
          <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
        </div>
      </div>
    </div>
  );
}

export default memo(HeroScrollExperience);
