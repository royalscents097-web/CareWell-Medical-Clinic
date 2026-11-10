import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { DoctorProfile } from './components/DoctorProfile';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Testimonials } from './components/Testimonials';
import { AppointmentBooking } from './components/AppointmentBooking';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ChevronUp, Calendar } from 'lucide-react';

export default function App() {
  const [selectedDepartment, setSelectedDepartment] = useState('General Consultation');
  const [selectedDoctor, setSelectedDoctor] = useState('Dr. Sarah Ahmed');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenBooking = () => {
    scrollToSection('booking');
  };

  const handleExploreServices = () => {
    scrollToSection('services');
  };

  const handleSelectServiceForBooking = (dept: string) => {
    setSelectedDepartment(dept);
    scrollToSection('booking');
  };

  const handleSelectDoctorForBooking = (docName: string, dept: string) => {
    setSelectedDoctor(docName);
    setSelectedDepartment(dept);
    scrollToSection('booking');
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      {/* Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onBookAppointment={handleOpenBooking}
          onExploreServices={handleExploreServices}
        />

        {/* 2. About Clinic Section */}
        <About />

        {/* 3. Medical Services Section */}
        <Services onSelectServiceForBooking={handleSelectServiceForBooking} />

        {/* 4. Doctor Profile & Leadership Team */}
        <DoctorProfile onSelectDoctorForBooking={handleSelectDoctorForBooking} />

        {/* 5. Why Choose Us Section */}
        <WhyChooseUs />

        {/* 6. Appointment Booking Section */}
        <AppointmentBooking
          initialDepartment={selectedDepartment}
          initialDoctor={selectedDoctor}
        />

        {/* 7. Patient Testimonials (Demo) */}
        <Testimonials />

        {/* 8. Contact & Map Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Floating Action Buttons: Scroll to Top */}
      {showScrollTop && (
        <div className="fixed bottom-6 right-6 z-30 flex flex-col gap-2">
          <button
            onClick={handleScrollToTop}
            aria-label="Scroll to top of page"
            className="w-11 h-11 rounded-full bg-white text-slate-700 hover:text-teal-700 hover:bg-slate-50 border border-slate-200 shadow-md flex items-center justify-center transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
          >
            <ChevronUp className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
}
