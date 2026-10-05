import React, { memo } from 'react';
import { ArrowRight, Star, Award, ChevronRight, Info } from 'lucide-react';

const DOCTORS = [
  {
    name: 'Dr. Neha Sharma, DDS, MS',
    role: 'Maxillofacial Prosthodontist',
    credentials: 'Univ. of Zurich Fellowship',
    experience: '14+ Years Clinical Mastery',
    image: 'https://images.unsplash.com/photo-1594824813583-11b0e3523fc0?auto=format&fit=crop&q=80&w=700',
    specialty: 'Sub-Micron Full Arch Reconstruction',
    rating: '5.0'
  },
  {
    name: 'Dr. Rahul Kapoor, DMD, PhD',
    role: 'Surgical Implantologist',
    credentials: 'Diplomate ICOI & AAID Fellow',
    experience: '16+ Years Guided Surgery',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=700',
    specialty: 'Robotic 3D Flapless Navigation',
    rating: '5.0'
  },
  {
    name: 'Dr. Pooja Mehta, BDS, MOrth',
    role: 'Biomechanical Orthodontist',
    credentials: 'Harvard Dental Medicine Scholar',
    experience: '10+ Years Kinematics',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=700',
    specialty: 'SmartTrack Orthognathic Alignment',
    rating: '4.98'
  },
  {
    name: 'Dr. Vivek Bansal, DDS, FACP',
    role: 'Master Ceramist & Aesthetic Fellow',
    credentials: 'Kings College London Mastership',
    experience: '15+ Years Facial Architecture',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=700',
    specialty: 'Feldspathic Micro-Veneers',
    rating: '5.0'
  }
];

function SurgeonsSection({ onOpenBooking }) {
  return (
    <section 
      id="surgeons" 
      className="py-24 sm:py-32 px-4 sm:px-8 bg-white text-noir-950 blueprint-grid-light border-b border-neutral-200"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-black/10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/5 border border-black/10 text-[10px] font-mono uppercase tracking-widest text-neutral-600 mb-3">
              <span>Maxillofacial Faculty</span>
              <span>•</span>
              <span>Board Certified</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-medium tracking-tight text-noir-950 leading-[1.08]">
              Master Clinicians & <span className="italic font-normal text-champagne-dark">Smile Architects</span>
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500 font-light mt-2 max-w-xl">
              Educated at Zurich, Harvard, and King's College London. Each restorative case is personally directed by internationally acclaimed fellows.
            </p>
          </div>

          <button
            onClick={() => onOpenBooking('Fellowship Consultation')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-mono uppercase tracking-wider text-white bg-noir-950 hover:bg-neutral-800 transition-colors self-start md:self-auto shrink-0"
          >
            <span>Consult With A Fellow</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 4 Doctor Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {DOCTORS.map((doctor, idx) => (
            <div
              key={idx}
              onClick={() => onOpenBooking(`Consultation with ${doctor.name}`)}
              tabIndex={0}
              role="button"
              aria-label={`Reserve consultation with ${doctor.name}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onOpenBooking(`Consultation with ${doctor.name}`);
                }
              }}
              className="editorial-card-light group rounded-3xl overflow-hidden cursor-pointer flex flex-col justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-100">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover object-top filter grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-mono font-bold text-noir-950 shadow-md">
                  <Star className="w-3 h-3 fill-champagne-dark text-champagne-dark" />
                  <span>{doctor.rating}</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-champagne block mb-0.5">
                    {doctor.credentials}
                  </span>
                  <h3 className="text-lg font-serif font-bold text-white group-hover:text-champagne transition-colors leading-tight">
                    {doctor.name}
                  </h3>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-semibold mb-1">
                    {doctor.role}
                  </p>
                  <p className="text-xs text-neutral-600 font-light leading-relaxed mb-4">
                    {doctor.specialty}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-mono text-neutral-400 group-hover:text-champagne-dark transition-colors">
                  <span>{doctor.experience}</span>
                  <div className="flex items-center gap-1 font-semibold uppercase text-[10px]">
                    <span>Reserve</span>
                    <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-xs font-mono text-neutral-400 text-center">
          <Info className="w-3.5 h-3.5 text-champagne-dark" />
          <span>Faculty Fellowship Profiles • Illustrative Clinical Atelier Showcase</span>
        </div>

      </div>
    </section>
  );
}

export default memo(SurgeonsSection);
