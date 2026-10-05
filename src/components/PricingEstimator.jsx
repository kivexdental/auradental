import React, { useState, memo } from 'react';
import { Calculator, Check, ArrowRight, Shield, Award } from 'lucide-react';

function PricingEstimator({ onOpenBooking }) {
  const [treatment, setTreatment] = useState('implant');
  const [toothCount, setToothCount] = useState(1);
  const [material, setMaterial] = useState('zirconia');
  const [financingMonths, setFinancingMonths] = useState(24);

  const calculateTotal = () => {
    let base = 0;
    if (treatment === 'implant') {
      base = material === 'zirconia' ? 2450 : 1950;
      return base * toothCount;
    } else if (treatment === 'fullarch') {
      return material === 'zirconia' ? 18500 : 15500;
    } else if (treatment === 'aligners') {
      return 2900;
    } else if (treatment === 'laser') {
      return 450 * toothCount;
    }
    return 1950;
  };

  const total = calculateTotal();
  const monthly = Math.round(total / financingMonths);

  return (
    <section 
      id="pricing" 
      className="py-32 px-4 sm:px-8 bg-neutral-100 text-noir-950 blueprint-grid-light border-b border-neutral-200"
    >
      <div className="max-w-7xl mx-auto rounded-3xl bg-white border border-neutral-200 p-8 sm:p-14 relative overflow-hidden shadow-editorial-light">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/5 border border-black/10 text-neutral-600 text-xs font-mono uppercase tracking-widest mb-3">
                <Calculator className="w-3.5 h-3.5 text-champagne-dark" />
                <span>Private Wealth Concierge</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-serif font-medium text-noir-950 tracking-tight leading-[1.08]">
                Transparent Investment & <br />
                <span className="italic font-normal text-champagne-dark">0% APR Financing Calculator</span>
              </h2>
              <p className="text-neutral-600 text-sm mt-3 font-light leading-relaxed">
                All-inclusive fee guarantee: covers 3D CBCT tomography, surgical guides, premium abutment, and permanent zirconia crown with zero surprise facility fees.
              </p>
            </div>

            {/* Step 1: Select Procedure */}
            <div className="space-y-3">
              <label className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-semibold block">
                1. Select Clinical Discipline:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { id: 'implant', label: 'Single Implant' },
                  { id: 'fullarch', label: 'Full Arch (All-on-X)' },
                  { id: 'aligners', label: 'Clear Aligners' },
                  { id: 'laser', label: 'Laser Surgery' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setTreatment(item.id);
                      if (item.id === 'fullarch' || item.id === 'aligners') setToothCount(1);
                    }}
                    className={`py-3 px-3 rounded-2xl text-xs font-mono uppercase tracking-wider transition-all text-center border ${
                      treatment === item.id 
                        ? 'bg-noir-950 border-noir-950 text-white shadow-md' 
                        : 'bg-neutral-50 border-neutral-200 text-neutral-600 hover:text-noir-950 hover:border-neutral-300'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Quantity slider */}
            {(treatment === 'implant' || treatment === 'laser') ? (
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <label className="font-mono uppercase tracking-wider text-neutral-500 font-semibold">
                    2. Quantity of Restorations:
                  </label>
                  <span className="font-mono text-noir-950 font-bold text-sm bg-neutral-100 px-3 py-1 rounded-full">{toothCount} {toothCount === 1 ? 'Unit' : 'Units'}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="6"
                  value={toothCount}
                  onChange={(e) => setToothCount(parseInt(e.target.value))}
                  aria-label="Quantity of restorations"
                  className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-champagne-dark"
                />
              </div>
            ) : null}

            {/* Step 3: Material selection */}
            {(treatment === 'implant' || treatment === 'fullarch') ? (
              <div className="space-y-3">
                <label className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-semibold block">
                  3. Material Specification:
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setMaterial('zirconia')}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      material === 'zirconia'
                        ? 'border-champagne-dark bg-champagne/10 shadow-sm'
                        : 'border-neutral-200 bg-neutral-50 hover:border-neutral-300'
                    }`}
                  >
                    <span className="block text-sm font-bold text-noir-950">Polycrystalline 5Y Zirconia</span>
                    <span className="text-xs text-neutral-500 font-light mt-0.5 block">100% metal-free, natural incisal translucency</span>
                  </button>
                  <button
                    onClick={() => setMaterial('titanium')}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      material === 'titanium'
                        ? 'border-champagne-dark bg-champagne/10 shadow-sm'
                        : 'border-neutral-200 bg-neutral-50 hover:border-neutral-300'
                    }`}
                  >
                    <span className="block text-sm font-bold text-noir-950">Grade-4 Biocompatible Titanium</span>
                    <span className="text-xs text-neutral-500 font-light mt-0.5 block">Time-tested aerospace osseointegration</span>
                  </button>
                </div>
              </div>
            ) : null}

            {/* Step 4: Financing Duration */}
            <div className="space-y-3">
              <label className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-semibold block">
                4. Select 0% APR Financing Horizon:
              </label>
              <div className="flex gap-3">
                {[12, 24, 36].map((m) => (
                  <button
                    key={m}
                    onClick={() => setFinancingMonths(m)}
                    className={`flex-1 py-2.5 rounded-xl text-xs font-mono font-bold transition-all border ${
                      financingMonths === m
                        ? 'bg-neutral-900 border-neutral-900 text-white'
                        : 'bg-neutral-50 border-neutral-200 text-neutral-600 hover:border-neutral-300'
                    }`}
                  >
                    {m} Months (0% APR)
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Statement Card */}
          <div className="lg:col-span-5 bg-noir-950 rounded-3xl p-8 sm:p-10 border border-white/15 text-white flex flex-col justify-between shadow-2xl relative">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="text-xs font-mono uppercase tracking-widest text-champagne">
                  Estimated Investment
                </span>
                <span className="text-[10px] font-mono text-neutral-400 bg-white/5 px-2.5 py-0.5 rounded-full">
                  All-Inclusive
                </span>
              </div>

              <div>
                <span className="text-xs text-neutral-400 font-mono block">Estimated Total Cost</span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight">
                    ${total.toLocaleString()}
                  </span>
                  <span className="text-xs text-neutral-400 font-mono">USD</span>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10">
                <span className="text-xs text-champagne font-mono block mb-1">
                  0% APR Monthly Concierge Plan:
                </span>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-serif font-bold text-white">${monthly}</span>
                  <span className="text-xs text-neutral-400 font-mono">/ mo for {financingMonths} mos</span>
                </div>
              </div>

              <div className="space-y-2.5 pt-2">
                <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 block">
                  Included In Fee Guarantee:
                </span>
                {[
                  '3D Volumetric CBCT Tomography',
                  'Sub-micron CAD/CAM Surgical Guide',
                  'Titanium / Zirconia Custom Abutment',
                  'Same-Day Provisional Aesthetic Crown',
                  'Lifetime Osseointegrated Warranty'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-neutral-300 font-light">
                    <Check className="w-3.5 h-3.5 text-champagne shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <button
                onClick={() => onOpenBooking(`Treatment Estimate ($${total.toLocaleString()})`)}
                className="w-full flex items-center justify-center gap-2 py-4 rounded-full text-xs font-mono uppercase tracking-widest font-bold bg-champagne text-noir-950 hover:bg-champagne-light hover:shadow-glow-champagne transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span>Lock In Estimated Tier</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-[10px] text-center text-neutral-500 font-mono mt-3">
                Pre-qualification incurs zero credit bureau impact.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default memo(PricingEstimator);
