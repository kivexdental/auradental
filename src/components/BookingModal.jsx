import React, { useState, useEffect, memo } from 'react';
import { X, Sparkles, CheckCircle2, Shield, AlertCircle, Loader2, RefreshCw, Calendar, Clock, User, Phone, Mail } from 'lucide-react';
import confetti from 'canvas-confetti';

function BookingModal({ isOpen, onClose, preselectedService }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: preselectedService || 'Robotic Dental Implants',
    date: '',
    notes: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [referenceCode, setReferenceCode] = useState('');

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Direct telephone number is required';
    } else if (!/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid telephone number (e.g., +1 (415) 890-2200)';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email format';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Realistic simulated network request (600ms)
    setTimeout(() => {
      setIsSubmitting(false);
      const generatedCode = 'ADA-' + Math.floor(100000 + Math.random() * 900000);
      setReferenceCode(generatedCode);
      setSubmitted(true);

      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#C5A880', '#E5C39E', '#FFFFFF', '#D1D5DB']
      });
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: preselectedService || 'Robotic Dental Implants',
      date: '',
      notes: ''
    });
    setErrors({});
    setSubmitted(false);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-noir-950/85 backdrop-blur-xl animate-in fade-in duration-300"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-xl glass-dark rounded-3xl p-6 sm:p-10 border border-white/20 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/15 text-neutral-400 hover:text-white transition-colors border border-white/10"
          aria-label="Close reservation modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Demo Notice Banner */}
            <div className="mb-4 px-3.5 py-1.5 rounded-full bg-champagne/15 border border-champagne/30 text-champagne text-[11px] font-mono flex items-center justify-between">
              <span className="font-semibold uppercase tracking-wider">Demo Appointment Flow</span>
              <span className="text-neutral-300 text-[10px] hidden sm:inline">This showcase does not create a real appointment</span>
            </div>

            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 text-champagne text-xs font-mono uppercase tracking-wider mb-2 border border-white/10">
                <Sparkles className="w-3.5 h-3.5 text-champagne" />
                <span>Complimentary 3D Tomography Consultation</span>
              </div>
              <h2 id="booking-modal-title" className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                Reserve Your Surgical Slot
              </h2>
              <p className="text-xs sm:text-sm text-neutral-400 mt-1 font-light leading-relaxed">
                Includes full low-dose CBCT panoramic tomography and a 45-minute treatment trajectory consultation with our fellowship faculty.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="booking-name" className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                    Full Name <span className="text-champagne">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="booking-name"
                      type="text"
                      required
                      placeholder="Eleanor Vance"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: null });
                      }}
                      className={`w-full px-4 py-2.5 rounded-xl bg-black/60 border text-white placeholder-neutral-500 text-sm focus:outline-none transition-colors ${
                        errors.name ? 'border-red-500/80 focus:border-red-500' : 'border-white/15 focus:border-champagne'
                      }`}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                  </div>
                  {errors.name ? (
                    <span id="name-error" className="text-[11px] text-red-400 font-mono mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.name}
                    </span>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="booking-phone" className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                    Direct Phone <span className="text-champagne">*</span>
                  </label>
                  <input
                    id="booking-phone"
                    type="tel"
                    required
                    placeholder="+1 (415) 890-2200"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (errors.phone) setErrors({ ...errors, phone: null });
                    }}
                    className={`w-full px-4 py-2.5 rounded-xl bg-black/60 border text-white placeholder-neutral-500 text-sm focus:outline-none transition-colors ${
                      errors.phone ? 'border-red-500/80 focus:border-red-500' : 'border-white/15 focus:border-champagne'
                    }`}
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                  />
                  {errors.phone ? (
                    <span id="phone-error" className="text-[11px] text-red-400 font-mono mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.phone}
                    </span>
                  ) : null}
                </div>
              </div>

              <div>
                <label htmlFor="booking-email" className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                  Email Address <span className="text-champagne">*</span>
                </label>
                <input
                  id="booking-email"
                  type="email"
                  required
                  placeholder="eleanor@domain.com"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (errors.email) setErrors({ ...errors, email: null });
                  }}
                  className={`w-full px-4 py-2.5 rounded-xl bg-black/60 border text-white placeholder-neutral-500 text-sm focus:outline-none transition-colors ${
                    errors.email ? 'border-red-500/80 focus:border-red-500' : 'border-white/15 focus:border-champagne'
                  }`}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email ? (
                  <span id="email-error" className="text-[11px] text-red-400 font-mono mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.email}
                  </span>
                ) : null}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="booking-service" className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                    Selected Discipline
                  </label>
                  <select
                    id="booking-service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/15 text-white text-sm focus:outline-none focus:border-champagne"
                  >
                    <option value="Robotic Dental Implants">Robotic Dental Implants</option>
                    <option value="Master Ceramic Veneers">Master Ceramic Veneers</option>
                    <option value="SmartTrack Clear Aligners">SmartTrack Clear Aligners</option>
                    <option value="Full-Arch Reconstruction">Full-Arch Reconstruction</option>
                    <option value="Cold Diode Laser Surgery">Cold Diode Laser Surgery</option>
                    <option value="Biofilm Airflow Therapy">Biofilm Airflow Therapy</option>
                    <option value="Atelier Tour">Private Atelier Tour</option>
                    <option value="Priority Consultation">Priority Consultation</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="booking-date" className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                    Preferred Date
                  </label>
                  <input
                    id="booking-date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/15 text-white text-sm focus:outline-none focus:border-champagne"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="booking-notes" className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                  Clinical Inquiries or Past Records (Optional)
                </label>
                <textarea
                  id="booking-notes"
                  rows={2}
                  placeholder="Detail any previous restorations, CT scans, or anxiety considerations..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/15 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-champagne"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-full text-xs font-mono uppercase tracking-widest font-bold bg-champagne text-noir-950 hover:bg-champagne-light hover:shadow-glow-champagne transition-all duration-300 hover:scale-[1.01] active:scale-95 shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-noir-950" />
                      <span>Transmitting Telemetry...</span>
                    </>
                  ) : (
                    <span>Confirm Priority Reservation Request</span>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[10px] font-mono text-neutral-500 pt-2 text-center">
                <Shield className="w-3.5 h-3.5 text-champagne shrink-0" />
                <span>Strict HIPAA Confidentiality • Private Valet Parking Confirmed</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-champagne/15 border border-champagne text-champagne flex items-center justify-center mx-auto shadow-glow-champagne">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 text-champagne text-xs font-mono uppercase tracking-wider border border-white/10">
              <span>Showcase Confirmation • Ref: {referenceCode}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Reservation Trajectory Logged
            </h3>

            <p className="text-sm text-neutral-300 max-w-md mx-auto font-light leading-relaxed">
              Thank you, <strong className="text-white font-medium">{formData.name}</strong>. In a live production environment, our concierge director would reach you at <strong className="text-champagne font-mono">{formData.phone}</strong> to confirm your arrival protocol.
            </p>

            <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 max-w-md mx-auto text-left text-xs font-mono text-neutral-400 space-y-2">
              <div className="flex justify-between border-b border-white/5 pb-1.5">
                <span className="text-neutral-500">Service:</span>
                <span className="text-white font-medium">{formData.service}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-1.5">
                <span className="text-neutral-500">Target Date:</span>
                <span className="text-white">{formData.date || 'Flexible / Next Available'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Arrival Gate:</span>
                <span className="text-champagne">Gate 2 Valet, Stockton St (Suite 2100)</span>
              </div>
            </div>

            <div className="pt-4 flex items-center justify-center gap-3">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider bg-white/10 text-white hover:bg-white/15 transition-colors flex items-center gap-2"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Test New Booking</span>
              </button>
              <button
                onClick={onClose}
                className="px-8 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider bg-champagne text-noir-950 font-bold hover:bg-champagne-light transition-colors"
              >
                Close Showcase
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default memo(BookingModal);
