import React, { useEffect, useState, memo } from 'react';
import { X, ShieldAlert, FileText, Lock, Cookie, Calendar, CheckCircle2 } from 'lucide-react';

const POLICIES = {
  privacy: {
    id: 'privacy',
    title: 'Privacy Policy',
    icon: <Lock className="w-4 h-4 text-champagne" />,
    lastUpdated: 'October 2026',
    sections: [
      {
        heading: '1. Information We Collect',
        content: 'Aura Dental Atelier collects information you provide voluntarily when scheduling a consultation inquiry, requesting treatment estimates, or contacting our concierge. This may include your full name, telephone number, email address, preferred clinical discipline, and general appointment availability.'
      },
      {
        heading: '2. HIPAA & Healthcare Confidentiality',
        content: 'We adhere strictly to privacy guidelines governing sensitive health communications. Patient inquiries, tomography records, and treatment trajectories are handled under strict confidentiality protocols. No electronic health records or confidential clinical telemetry are traded, sold, or shared with unauthorized commercial entities.'
      },
      {
        heading: '3. Data Retention & Safeguards',
        content: 'Data collected through this digital atelier is secured via modern TLS/SSL encryption. Data is stored solely to coordinate clinical consultation appointments and provide personalized patient concierge services.'
      },
      {
        heading: '4. Your Privacy Rights',
        content: 'You retain the right to request access to, amendment of, or deletion of your contact records at any time by contacting our Privacy Officer at privacy@auradentalatelier.com.'
      }
    ]
  },
  disclaimer: {
    id: 'disclaimer',
    title: 'Medical Disclaimer',
    icon: <ShieldAlert className="w-4 h-4 text-champagne" />,
    lastUpdated: 'October 2026',
    sections: [
      {
        heading: '1. Informational & Educational Scope',
        content: 'All materials, interactive calculators, dental 3D simulations, video walkthroughs, and clinical articles presented on this website are published exclusively for educational and informational showcase purposes.'
      },
      {
        heading: '2. No Doctor-Patient Relationship Established',
        content: 'Transmission of information through this website or completion of a consultation reservation request does not create a physician-patient or dentist-patient clinical relationship. Formal clinical relationships are established exclusively following an in-person diagnostic examination, clinical tomography review, and executed treatment agreement.'
      },
      {
        heading: '3. Clinical Diagnostic Necessity',
        content: 'The information on this website must never be used to diagnose, prescribe, or treat any medical or dental condition. Individual anatomical parameters vary substantially. Only a board-certified prosthodontist or oral surgeon can formulate a tailored surgical treatment plan.'
      },
      {
        heading: '4. Illustrative Simulation Notice',
        content: 'Interactive before/after calipers, robotic surgical simulations, and fee estimators demonstrate theoretical clinical capabilities and average trajectory benchmarks. Individual clinical outcomes, osseointegration timelines, and tissue healing responses depend on personal physiological factors.'
      }
    ]
  },
  terms: {
    id: 'terms',
    title: 'Terms of Service',
    icon: <FileText className="w-4 h-4 text-champagne" />,
    lastUpdated: 'October 2026',
    sections: [
      {
        heading: '1. Acceptance of Terms',
        content: 'By accessing or utilizing the digital atelier of Aura Dental Atelier, you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please discontinue use of this site.'
      },
      {
        heading: '2. Intellectual Property Rights',
        content: 'All architectural designs, 3D anatomical models, photography, brand typography, and proprietary clinical animations are the intellectual property of Aura Dental Atelier and are protected under international copyright and trademark laws.'
      },
      {
        heading: '3. Limitation of Liability',
        content: 'Aura Dental Atelier shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use this digital interface or reliance on any educational content herein.'
      }
    ]
  },
  cookies: {
    id: 'cookies',
    title: 'Cookie Policy',
    icon: <Cookie className="w-4 h-4 text-champagne" />,
    lastUpdated: 'October 2026',
    sections: [
      {
        heading: '1. What Are Cookies',
        content: 'Cookies are small text fragments stored on your device when loading web pages. They ensure smooth navigation, preserve user preferences, and provide anonymous performance telemetry.'
      },
      {
        heading: '2. How We Utilize Cookies',
        content: 'We utilize strictly essential session cookies to maintain your active preferences (such as interactive pricing estimates and device accessibility settings) and anonymous analytics cookies to monitor atelier performance and loading times.'
      },
      {
        heading: '3. Managing Your Preferences',
        content: 'You may modify or disable browser cookie acceptance at any time via your browser settings without restricting basic access to our public clinical disciplines.'
      }
    ]
  },
  appointment: {
    id: 'appointment',
    title: 'Appointment & Cancellation Policy',
    icon: <Calendar className="w-4 h-4 text-champagne" />,
    lastUpdated: 'October 2026',
    sections: [
      {
        heading: '1. Dedicated Surgical Time Slots',
        content: 'Our fellowship surgeons dedicate complete private surgical suites and clinical teams exclusively to one patient per appointment window, ensuring an unhurried, hyper-focused experience.'
      },
      {
        heading: '2. 48-Hour Notice Protocol',
        content: 'If you need to reschedule or cancel your consultation or surgical procedure, we respectfully request a minimum of 48 hours advance notice to allow our concierge to reallocate the private suite and sterilization staff.'
      },
      {
        heading: '3. Arrival & Valet Protocol',
        content: 'Patients scheduled for surgical procedures or 3D tomography are requested to arrive 15 minutes prior to their reservation time at Gate 2 Valet on Stockton Street for private elevator access.'
      }
    ]
  }
};

function PolicyModal({ isOpen, onClose, initialTab = 'privacy' }) {
  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    if (initialTab && POLICIES[initialTab]) {
      setActiveTab(initialTab);
    }
  }, [initialTab]);

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

  const currentPolicy = POLICIES[activeTab] || POLICIES.privacy;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-noir-950/85 backdrop-blur-xl animate-in fade-in duration-300"
      role="dialog"
      aria-modal="true"
      aria-labelledby="policy-modal-title"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl glass-dark rounded-3xl p-6 sm:p-10 border border-white/20 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 max-h-[85vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10 shrink-0">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-champagne block mb-1">
              Legal, Medical & Compliance Documentation
            </span>
            <h2 id="policy-modal-title" className="text-2xl sm:text-3xl font-serif font-bold text-white">
              {currentPolicy.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-neutral-400 hover:text-white transition-colors border border-white/10"
            aria-label="Close legal modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 py-4 overflow-x-auto border-b border-white/10 shrink-0 scrollbar-none">
          {Object.values(POLICIES).map((policy) => {
            const isActive = activeTab === policy.id;
            return (
              <button
                key={policy.id}
                onClick={() => setActiveTab(policy.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider shrink-0 transition-all ${
                  isActive
                    ? 'bg-champagne text-noir-950 font-bold shadow-md'
                    : 'bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {policy.icon}
                <span>{policy.title}</span>
              </button>
            );
          })}
        </div>

        {/* Content Body */}
        <div className="overflow-y-auto py-6 pr-2 space-y-6 text-neutral-300 font-light leading-relaxed text-sm">
          <div className="flex items-center justify-between text-xs font-mono text-neutral-500 pb-2 border-b border-white/5">
            <span>Official Atelier Protocol</span>
            <span>Last Updated: {currentPolicy.lastUpdated}</span>
          </div>

          {currentPolicy.sections.map((sec, idx) => (
            <div key={idx} className="space-y-2">
              <h3 className="font-serif font-semibold text-lg text-white">
                {sec.heading}
              </h3>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                {sec.content}
              </p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-neutral-500 shrink-0">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-champagne" />
            <span>Accredited Clinical Architecture • All Rights Reserved</span>
          </div>
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors text-xs font-mono uppercase tracking-wider"
          >
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default memo(PolicyModal);
