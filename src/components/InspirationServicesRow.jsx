import React, { useState, memo } from 'react';
import { ShieldCheck, ArrowRight, Sparkles, Smile, RefreshCw, Sun, ChevronRight, CheckCircle2, Clock, Award } from 'lucide-react';
import ServiceDetailModal from './ServiceDetailModal';

// Vercel Best Practice: rendering-hoist-jsx (Hoisted static card array)
const MONUMENTAL_SERVICES = [
  {
    id: 'implant',
    numeral: '01',
    category: 'Prosthodontic Surgery',
    title: 'Robotic Dental Implants',
    subtitle: 'Flapless 3D Guided Osseointegration',
    description: 'Permanent anatomical root replacement using medical-grade titanium and high-translucency zirconia. Guided by real-time CBCT navigation with sub-millimeter precision.',
    tolerance: '±0.005mm Robotic Guidance',
    material: 'Grade-4 Pure Titanium / 5Y Zirconia',
    duration: '45 - 60 Min',
    longevity: 'Lifetime Warranty',
    startingPrice: '$1,950',
    icon: <Smile className="w-8 h-8 text-champagne" />,
    benefits: [
      'Sub-millimeter robotic flapless surgery',
      'Same-day provisional aesthetic crown',
      '99.4% documented osseointegration rate',
      'Preserves adjacent natural dentition'
    ]
  },
  {
    id: 'veneers',
    numeral: '02',
    category: 'Aesthetic Architecture',
    title: 'Master Ceramic Veneers',
    subtitle: 'Micro-Stratified Feldspathic Porcelain',
    description: 'Custom micro-veneers hand-crafted by master ceramists to harmonize with your facial proportions, optical lip line, and natural enamel refraction.',
    tolerance: '0.3mm Ultra-Conservative Prep',
    material: 'Hand-Layered Feldspathic Ceramic',
    duration: '2 Clinical Visits',
    longevity: '15 - 20+ Years',
    startingPrice: '$1,400',
    icon: <Sparkles className="w-8 h-8 text-champagne" />,
    benefits: [
      'Zero unnatural bulk or opacity',
      'Optical enamel prism light reflection',
      'Stain-resistant biomimetic glaze',
      'Digital 3D preview before bonding'
    ]
  },
  {
    id: 'aligners',
    numeral: '03',
    category: 'Kinematic Orthodontics',
    title: 'SmartTrack Clear Aligners',
    subtitle: 'Digitally Projected Biomechanics',
    description: 'Precision orthodontic aligners laser-trimmed to your exact gingival scalloping. Discrete, removable, and powered by continuous micro-force physics.',
    tolerance: 'Algorithmic Tooth Staging',
    material: 'Multi-Layer SmartTrack Polymer',
    duration: '4 - 10 Months',
    longevity: 'Permanent Stability',
    startingPrice: '$2,400',
    icon: <RefreshCw className="w-8 h-8 text-champagne" />,
    benefits: [
      'Virtually undetectable in daily conversation',
      'Removable for fine dining & oral hygiene',
      '3D simulation of entire treatment trajectory',
      'Includes custom retainers'
    ]
  },
  {
    id: 'restorative',
    numeral: '04',
    category: 'Biomimetic Reconstruction',
    title: 'Full-Arch Reconstruction',
    subtitle: 'Functional Occlusal Rehabilitation',
    description: 'Complete restorative architecture for severely damaged or collapsed dentition. Restores facial height, chewing kinematics, and timeless smile harmony.',
    tolerance: 'Computer-Aided Jaw Tracking',
    material: 'Monolithic Sintered Zirconia',
    duration: 'Custom Treatment Plan',
    longevity: 'Lifetime Maintenance',
    startingPrice: '$4,800',
    icon: <ShieldCheck className="w-8 h-8 text-champagne" />,
    benefits: [
      'Restores lost facial vertical dimension',
      'Relieves TMJ strain and muscular fatigue',
      'Bespoke shade-matching to skin undertone',
      'Comprehensive digital smile design'
    ]
  },
  {
    id: 'laser',
    numeral: '05',
    category: 'Gingival Sculpting',
    title: 'Cold Diode Laser Surgery',
    subtitle: 'Micro-Contouring & Bio-Coagulation',
    description: 'Surgical scalpel-free gingival sculpting for gummy smiles and asymmetrical gumlines. Cold laser energy stimulates cellular collagen and eliminates bleeding.',
    tolerance: 'Micron-Level Tissue Precision',
    material: 'Dual-Wavelength Cold Diode Laser',
    duration: '20 - 30 Min',
    longevity: 'Permanent Result',
    startingPrice: '$450',
    icon: <Sun className="w-8 h-8 text-champagne" />,
    benefits: [
      'Zero scalpels, sutures, or post-op bleeding',
      'Instant cellular bio-stimulation',
      'Symmetrical golden-ratio gumlines',
      'Same-day normal eating and routine'
    ]
  },
  {
    id: 'preventive',
    numeral: '06',
    category: 'Preventive Biology',
    title: 'Ultrasonic Biofilm Therapy',
    subtitle: 'Subgingival Airflow Longevity',
    description: 'Swiss EMS Airflow master prophylaxis removing pathogenic subgingival biofilm without scratching enamel. The foundation of lifelong implant survival.',
    tolerance: 'Erythritol Micro-Powder Flow',
    material: 'Non-Abrasive Bioactive Powder',
    duration: '45 Min',
    longevity: 'Bi-Annual Protocol',
    startingPrice: '$220',
    icon: <Award className="w-8 h-8 text-champagne" />,
    benefits: [
      'Completely painless warm-water airflow',
      'Protects expensive restorations & implants',
      'Deep periodontal pocket sterilization',
      'Natural polish without abrasive pastes'
    ]
  }
];

function InspirationServicesRow({ onSelectService }) {
  const [activeModalService, setActiveModalService] = useState(null);

  return (
    <section 
      id="services-row" 
      className="relative py-28 px-4 sm:px-8 bg-white text-noir-950 blueprint-grid-light"
    >
      <div className="max-w-7xl mx-auto">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-black/10 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/5 border border-black/10 text-[10px] font-mono uppercase tracking-widest text-noir-700 mb-4">
              <span>Surgical Disciplines</span>
              <span>•</span>
              <span>Swiss Quality Standard</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-medium tracking-tight text-noir-950 leading-[1.08]">
              Six Monumental Disciplines of <span className="italic font-normal text-champagne-dark">Restorative Mastery</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-neutral-600 font-light leading-relaxed">
            Every clinical intervention is treated as an anatomical sculpture. We combine sub-micron CAD/CAM milling with bespoke hand-layered porcelain artistry for uncompromising results.
          </p>
        </div>

        {/* Monumental Services Gallery Grid (3x2 Large Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MONUMENTAL_SERVICES.map((item) => (
            <div
              key={item.id}
              className="editorial-card-light group rounded-3xl p-8 sm:p-10 flex flex-col justify-between"
            >
              {/* Card Top: Numeral & Category */}
              <div>
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-black/5">
                  <span className="font-serif text-3xl font-light text-neutral-300 group-hover:text-champagne-dark transition-colors">
                    {item.numeral}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 bg-neutral-100 px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>

                {/* Icon & Title */}
                <div className="w-14 h-14 rounded-2xl bg-neutral-50 border border-neutral-200 flex items-center justify-center mb-6 group-hover:border-champagne/60 group-hover:bg-champagne/10 transition-all duration-300">
                  {item.icon}
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-noir-950 group-hover:text-champagne-dark transition-colors mb-2 tracking-tight">
                  {item.title}
                </h3>

                <p className="text-xs font-mono uppercase tracking-wider text-neutral-500 mb-4">
                  {item.subtitle}
                </p>

                <p className="text-sm text-neutral-600 font-light leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Clinical Specs Pill Box */}
                <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-100 space-y-2 mb-6">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-neutral-400 font-mono">Tolerance:</span>
                    <span className="font-medium text-noir-950 font-mono text-[11px]">{item.tolerance}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-neutral-400 font-mono">Material:</span>
                    <span className="font-medium text-noir-950 text-[11px]">{item.material}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-neutral-400 font-mono">Longevity:</span>
                    <span className="font-semibold text-champagne-dark text-[11px]">{item.longevity}</span>
                  </div>
                </div>
              </div>

              {/* Card Footer: Starting Price & CTAs */}
              <div className="pt-6 border-t border-black/5 flex flex-col gap-4">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs font-mono text-neutral-400 uppercase">Starting From</span>
                  <span className="font-serif text-2xl font-bold text-noir-950">{item.startingPrice}</span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setActiveModalService(item)}
                    className="py-2.5 px-3 rounded-full text-[11px] font-mono uppercase tracking-wider text-neutral-700 bg-neutral-100 hover:bg-neutral-200 transition-colors text-center"
                  >
                    Examine Specs
                  </button>
                  <button
                    onClick={() => onSelectService(item.title)}
                    className="py-2.5 px-3 rounded-full text-[11px] font-mono uppercase tracking-wider text-white bg-noir-950 hover:bg-neutral-800 transition-colors flex items-center justify-center gap-1"
                  >
                    <span>Reserve</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeModalService ? (
        <ServiceDetailModal 
          service={activeModalService} 
          onClose={() => setActiveModalService(null)} 
          onBook={(serviceName) => {
            setActiveModalService(null);
            onSelectService(serviceName);
          }}
        />
      ) : null}
    </section>
  );
}

export default memo(InspirationServicesRow);
