import React, { useState, useEffect, memo } from 'react';
import { BookOpen, Clock, User, ArrowRight, X, ChevronRight } from 'lucide-react';

const ARTICLES = [
  {
    id: 'osseointegration',
    volume: 'Vol. XIV • No. 04',
    category: 'Implantology',
    title: 'The Osseointegration Standard: Why Polycrystalline Zirconia Outlasts Legacy Metal Fixtures',
    excerpt: 'Examining the cellular osteoblast-to-ceramic interface, nanoscale laser surface conditioning, and long-term alveolar bone preservation exceeding 99.4%.',
    author: 'Dr. Rahul Kapoor, DMD, PhD',
    readTime: '5 min read',
    date: 'Autumn 2026',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800',
    fullContent: `
      Osseointegration—the direct structural and functional connection between living bone and the surface of a load-bearing artificial fixture—has undergone a biological revolution.
      
      Legacy smooth-machined titanium screws required up to six months of undisturbed healing and suffered from micro-galvanic currents in oral saliva. Modern polycrystalline zirconia fixtures, sintered with sub-micron additive laser micro-grooves, trigger rapid thrombocyte adhesion within hours of surgical placement.
      
      Key Clinical Benchmarks:
      1. Osseous mineralization occurs within 21 days compared to 90 days with legacy metals.
      2. Zero galvanic conductivity, preventing tissue inflammation and gray discoloration along the marginal gingiva.
      3. Lifelong preservation of the alveolar bone crest, preventing the facial collapse and premature wrinkling often seen after tooth loss.
    `
  },
  {
    id: 'robotics',
    volume: 'Vol. XIV • No. 03',
    category: 'Robotics & Navigation',
    title: 'Flapless Computer-Guided Navigation: Sub-Micron Surgical Accuracy Without Scalpels',
    excerpt: 'How real-time infrared optical tracking synchronized with micro-CT scans replaces freehand human variance with aerospace guidance.',
    author: 'Dr. Neha Sharma, DDS, MS',
    readTime: '7 min read',
    date: 'Summer 2026',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800',
    fullContent: `
      Traditional surgical implantology required extensive scalpel incisions to reflect wide gum flaps, followed by manual freehand drilling. Computer-guided dynamic navigation eliminates this trauma entirely.
      
      Our stereotactic navigation arrays track the patient's dental coordinates 60 times per second. If the patient shifts even 0.1mm, the robotic guidance arm instantly recalibrates.
      
      Patient Advantages:
      1. Zero scalpel incisions, flap reflection, or post-surgical sutures.
      2. Surgery completed in under 15 minutes per fixture.
      3. Near-zero swelling: patients report eating dinner and resuming normal professional commitments that evening.
    `
  },
  {
    id: 'aligners',
    volume: 'Vol. XIV • No. 02',
    category: 'Kinematic Orthodontics',
    title: 'Biomimetic SmartTrack Aligners vs Ceramic Braces: A Biomechanical Analysis',
    excerpt: 'Analyzing rotational moment arms, tooth root resorption indices, and accelerated orthodontic correction timelines in adult dentition.',
    author: 'Dr. Pooja Mehta, BDS, MOrth',
    readTime: '4 min read',
    date: 'Summer 2026',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800',
    fullContent: `
      Discerning adult patients consistently seek orthodontic alignment that does not interfere with executive presentation and dining. Through finite element mathematical modeling, clear polymers now match fixed bracket appliances for the vast majority of malocclusions.
      
      SmartTrack multi-layer polymers apply consistent, gentle micro-forces that stimulate biological bone remodeling without necrosis of the periodontal ligament.
      
      Clinical Recommendation Matrix:
      1. Clear Aligners: Preferred for discrete wear, moderate crowding, and unencumbered oral hygiene.
      2. Ceramic Fixed Appliances: Indicated for severe vertical skeletal discrepancies and complex root torque requirements.
    `
  }
];

function BlogSection({ onOpenBooking }) {
  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && selectedArticle) {
        setSelectedArticle(null);
      }
    };
    if (selectedArticle) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedArticle]);

  return (
    <section 
      id="journal" 
      className="py-24 sm:py-32 px-4 sm:px-8 bg-white text-noir-950 blueprint-grid-light border-b border-neutral-200"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-black/10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/5 border border-black/10 text-[10px] font-mono uppercase tracking-widest text-neutral-600 mb-3">
              <BookOpen className="w-3.5 h-3.5 text-champagne-dark" />
              <span>The Clinical Journal</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-medium tracking-tight text-noir-950 leading-[1.08]">
              Peer-Reviewed Insights & <br />
              <span className="italic font-normal text-champagne-dark">Biomimetic Science</span>
            </h2>
          </div>

          <p className="max-w-md text-sm text-neutral-600 font-light leading-relaxed">
            Published monographs from our surgical fellows detailing cellular osseointegration, optical telemetry, and high-translucency ceramic physics.
          </p>
        </div>

        {/* 3 Editorial Article Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ARTICLES.map((article) => (
            <article
              key={article.id}
              className="editorial-card-light group rounded-3xl overflow-hidden flex flex-col justify-between cursor-pointer"
              onClick={() => setSelectedArticle(article)}
              tabIndex={0}
              role="button"
              aria-label={`Read article: ${article.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedArticle(article);
                }
              }}
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-105"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-mono font-semibold uppercase tracking-wider text-noir-950 shadow-sm">
                    {article.category}
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-3 text-xs font-mono text-neutral-400 mb-3">
                    <span>{article.volume}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-champagne-dark" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-noir-950 group-hover:text-champagne-dark transition-colors leading-snug mb-3">
                    {article.title}
                  </h3>

                  <p className="text-sm text-neutral-600 font-light leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-8 pt-0 border-t border-black/5 mt-4 flex items-center justify-between">
                <span className="text-xs font-mono text-neutral-500">
                  {article.author}
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-mono uppercase tracking-wider text-champagne-dark font-bold group-hover:translate-x-1 transition-transform">
                  <span>Read Article</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Article Full View Modal */}
      {selectedArticle ? (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-noir-950/85 backdrop-blur-xl animate-in fade-in duration-300"
          role="dialog"
          aria-modal="true"
          aria-labelledby="article-modal-title"
          onClick={() => setSelectedArticle(null)}
        >
          <div 
            className="relative w-full max-w-2xl bg-white text-noir-950 rounded-3xl p-6 sm:p-10 shadow-2xl overflow-hidden max-h-[85vh] overflow-y-auto animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-600 transition-colors"
              aria-label="Close article"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6">
              <span className="text-[10px] font-mono uppercase tracking-widest text-champagne-dark font-bold block mb-2">
                {selectedArticle.category} • {selectedArticle.volume}
              </span>
              <h2 id="article-modal-title" className="text-2xl sm:text-3xl font-serif font-bold text-noir-950 leading-snug">
                {selectedArticle.title}
              </h2>
              <div className="flex items-center gap-4 text-xs font-mono text-neutral-500 mt-3 pt-3 border-t border-neutral-100">
                <span>By {selectedArticle.author}</span>
                <span>•</span>
                <span>{selectedArticle.readTime}</span>
              </div>
            </div>

            <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden mb-6 bg-neutral-100">
              <img 
                src={selectedArticle.image} 
                alt={selectedArticle.title} 
                className="w-full h-full object-cover" 
              />
            </div>

            <div className="text-neutral-700 font-light text-sm sm:text-base leading-relaxed space-y-4 whitespace-pre-line">
              {selectedArticle.fullContent}
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs font-mono text-neutral-500">
                Aura Dental Atelier Clinical Monograph Series
              </span>
              <button
                onClick={() => {
                  setSelectedArticle(null);
                  onOpenBooking('Clinical Article Inquiry');
                }}
                className="w-full sm:w-auto px-6 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider bg-noir-950 text-white hover:bg-neutral-800 transition-colors"
              >
                Inquire With Author
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}

export default memo(BlogSection);
