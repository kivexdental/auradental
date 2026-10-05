import React, { useState, memo } from 'react';
import { Plus, Minus, ArrowRight } from 'lucide-react';

const FAQS = [
  {
    id: 'faq-1',
    numeral: '01',
    q: 'How does robotic 3D flapless implant placement differ from conventional surgery?',
    a: 'Traditional implantology requires cutting a wide gum flap with scalpels, reflecting the tissue, and drilling by manual eye-estimation. In our atelier, optical tracking infrared cameras guide the robotic arm according to pre-operative micro-CT models. The fixture passes directly through a 2mm micro-aperture without scalpel incisions or sutures, resulting in virtually zero post-operative pain or swelling.'
  },
  {
    id: 'faq-2',
    numeral: '02',
    q: 'What is the biological advantage of polycrystalline zirconia over grade-4 titanium?',
    a: 'While pure titanium has decades of proven osseointegration, ceramic zirconia is 100% metal-free, biologically inert, and carries zero micro-galvanic conductivity with oral saliva. Furthermore, zirconia possesses warm natural tooth translucency, preventing the gray metallic shadows that often appear at the gumline years after titanium surgery.'
  },
  {
    id: 'faq-3',
    numeral: '03',
    q: 'Are same-day provisional ceramic crowns structurally durable for chewing?',
    a: 'Yes. Through our in-house 5-axis German CNC milling center and high-temperature sintering ovens, our provisional crowns are fabricated from high-density hybrid polymers or fast-sintered monolithic lithium disilicate. They allow you to attend executive functions and dine normally while final osseointegration occurs.'
  },
  {
    id: 'faq-4',
    numeral: '04',
    q: 'How does your 0% APR private wealth financing operate?',
    a: 'We provide direct institutional zero-interest financing terms spanning 12, 24, or 36 months through our private banking partners. Pre-qualification takes under 60 seconds with zero credit bureau impact, and all clinical fees (surgical guides, anesthesia, abutments, crowns) are strictly all-inclusive with zero surprise bills.'
  },
  {
    id: 'faq-5',
    numeral: '05',
    q: 'What arrival and security protocol exists for out-of-town and executive patients?',
    a: 'Our surgical suites provide dedicated private valet access at Gate 2 with discreet private elevator conveyance directly to our 21st floor surgical wing. For international and interstate patients, our concierge team coordinates airport private transport, hotel reservations, and expedited treatment schedules.'
  }
];

function FaqSection({ onOpenBooking }) {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section 
      id="faq" 
      className="py-24 sm:py-32 px-4 sm:px-8 bg-neutral-100 text-noir-950 blueprint-grid-light border-b border-neutral-200"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* Left Column: Editorial Header */}
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/5 border border-black/10 text-[10px] font-mono uppercase tracking-widest text-neutral-600">
            <span>Clinical Knowledgebase</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-medium text-noir-950 tracking-tight leading-[1.08]">
            Frequently Addressed <br />
            <span className="italic font-normal text-champagne-dark">Clinical Inquiries</span>
          </h2>

          <p className="text-neutral-600 text-sm font-light leading-relaxed">
            Detailed answers regarding robotic navigation, biocompatible zirconia chemistry, recovery parameters, and private concierge arrival protocols.
          </p>

          <button
            onClick={() => onOpenBooking('Direct Medical Question')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-mono uppercase tracking-wider text-white bg-noir-950 hover:bg-neutral-800 transition-colors"
          >
            <span>Ask A Fellow Directly</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Right Column: Numbered Accordion */}
        <div className="lg:col-span-7 space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            const contentId = `faq-content-${idx}`;
            const headerId = `faq-header-${idx}`;
            return (
              <div
                key={faq.id}
                className="rounded-2xl bg-white border border-neutral-200 overflow-hidden transition-all duration-300 shadow-sm"
              >
                <button
                  id={headerId}
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-start justify-between gap-4 select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne"
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                >
                  <div className="flex items-start gap-4">
                    <span className="font-serif text-lg text-neutral-400 font-light mt-0.5" aria-hidden="true">
                      {faq.numeral}
                    </span>
                    <span className="font-serif font-bold text-base sm:text-lg text-noir-950 hover:text-champagne-dark transition-colors">
                      {faq.q}
                    </span>
                  </div>
                  <div 
                    aria-hidden="true"
                    className={`w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'bg-noir-950 text-white rotate-180 border-noir-950' : 'text-neutral-500 bg-neutral-50'
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen ? (
                  <div 
                    id={contentId}
                    role="region"
                    aria-labelledby={headerId}
                    className="px-6 pb-6 pt-2 text-sm text-neutral-600 leading-relaxed font-light border-t border-neutral-100 pl-14 animate-in fade-in duration-200"
                  >
                    {faq.a}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default memo(FaqSection);
