import React, { useState } from 'react';
import GlassMouseSpotlight from './components/GlassMouseSpotlight';
import Navbar from './components/Navbar';
import HeroScrollExperience from './components/HeroScrollExperience';
import InspirationServicesRow from './components/InspirationServicesRow';
import AboutVideoSection from './components/AboutVideoSection';
import SafeCareBanner from './components/SafeCareBanner';
import BentoGrid from './components/BentoGrid';
import SurgeonsSection from './components/SurgeonsSection';
import SmileComparison from './components/SmileComparison';
import PricingEstimator from './components/PricingEstimator';
import BlogSection from './components/BlogSection';
import LocationShowcase from './components/LocationShowcase';
import FaqSection from './components/FaqSection';
import BookingModal from './components/BookingModal';
import PolicyModal from './components/PolicyModal';
import Footer from './components/Footer';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Robotic Dental Implants');
  const [policyModalOpen, setPolicyModalOpen] = useState(false);
  const [policyTab, setPolicyTab] = useState('privacy');

  const handleOpenBooking = (serviceName = 'Robotic Dental Implants') => {
    setSelectedService(serviceName);
    setBookingModalOpen(true);
  };

  const handleOpenPolicy = (tab = 'privacy') => {
    setPolicyTab(tab);
    setPolicyModalOpen(true);
  };

  return (
    <main className="overflow-x-hidden w-full max-w-full bg-noir-950 text-neutral-100 min-h-screen selection:bg-champagne/30 selection:text-white">
      {/* Dynamic Specular Mouse Illumination */}
      <GlassMouseSpotlight />

      {/* 1. Low-Profile Apple Dynamic Island Capsule */}
      <Navbar onOpenBooking={() => handleOpenBooking('Priority Consultation')} />

      {/* 2. Full-Screen 50-Frame Scrubber & 5 Enlarged Pop-Up Cards (Obsidian Black) */}
      <HeroScrollExperience onOpenBooking={handleOpenBooking} />

      {/* 3. Monumental Architectural Services Gallery - 6 Oversized Cards (Pure Gallery White) */}
      <InspirationServicesRow onSelectService={(service) => handleOpenBooking(service)} />

      {/* 4. The Atelier Film Reel & Philosophy (Cinematic Obsidian Black) */}
      <AboutVideoSection onOpenBooking={handleOpenBooking} />

      {/* 5. Safe Care Standards - 5-Pillar Architectural Monolith (Alabaster White) */}
      <SafeCareBanner />

      {/* 6. Robotic Bio-Engineering & CAD/CAM Sintering Bento (Obsidian Black) */}
      <BentoGrid onOpenBooking={() => handleOpenBooking('Robotic Implantology')} />

      {/* 7. Master Clinicians & Facial Architecture Fellows (Pure Gallery White) */}
      <SurgeonsSection onOpenBooking={handleOpenBooking} />

      {/* 8. Full-Arch Restoration Dual Image Split Caliper Slider (Deep Obsidian Black) */}
      <SmileComparison />

      {/* 9. Private Wealth Concierge & 0% APR Financing Calculator (Alabaster Off-White) */}
      <PricingEstimator onOpenBooking={() => handleOpenBooking('Treatment Investment')} />

      {/* 10. The Clinical Journal of Biomimetic Dentistry (Pure Gallery White) */}
      <BlogSection onOpenBooking={handleOpenBooking} />

      {/* 11. Flagship Surgical Center & Private Suites Blueprint (Nocturnal Black) */}
      <LocationShowcase onOpenBooking={handleOpenBooking} />

      {/* 12. Frequently Addressed Clinical Inquiries Numbered Accordion (Alabaster White) */}
      <FaqSection onOpenBooking={handleOpenBooking} />

      {/* 13. Flagship Atelier Archive & Accreditation Footer (Deep Obsidian Black) */}
      <Footer 
        onOpenBooking={() => handleOpenBooking('General Inquiry')} 
        onOpenPolicy={handleOpenPolicy}
      />

      {/* 14. Private Reservation Modal Drawer */}
      <BookingModal 
        isOpen={bookingModalOpen} 
        onClose={() => setBookingModalOpen(false)}
        preselectedService={selectedService}
      />

      {/* 15. Legal Policies, HIPAA & Medical Disclaimer Modal */}
      <PolicyModal 
        isOpen={policyModalOpen} 
        onClose={() => setPolicyModalOpen(false)}
        initialTab={policyTab}
      />
    </main>
  );
}
