import React, { useState } from 'react';
import { HeartPulse, Phone, Mail, MapPin, Clock, ShieldCheck, X } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const [activeLegalModal, setActiveLegalModal] = useState<'privacy' | 'terms' | null>(null);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <footer className="bg-slate-900 text-slate-400 text-xs sm:text-sm pt-16 pb-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          {/* Main Footer Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
            
            {/* Column 1: Brand & Practice Bio */}
            <div className="lg:col-span-4 space-y-4">
              <a
                href="#home"
                onClick={(e) => handleSmoothScroll(e, '#home')}
                className="flex items-center gap-3 text-white group"
              >
                <span className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center shadow-xs">
                  <HeartPulse className="w-5 h-5 text-white" />
                </span>
                <div className="flex flex-col">
                  <span className="text-lg font-bold tracking-tight text-white leading-none">
                    CareWell
                  </span>
                  <span className="text-[11px] font-semibold tracking-wider uppercase text-teal-400 mt-0.5">
                    Medical Clinic
                  </span>
                </div>
              </a>

              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
                CareWell Medical Clinic provides personalized, unhurried outpatient primary care, family medicine, and specialist services in a serene, modern healing facility.
              </p>

              <div className="pt-2 flex items-center gap-3 text-xs text-slate-500">
                <span className="flex items-center gap-1 text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-teal-400" />
                  <span>Licensed Outpatient Facility</span>
                </span>
                <span>·</span>
                <span>Demo Practice</span>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                Quick Navigation
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>
                  <a
                    href="#home"
                    onClick={(e) => handleSmoothScroll(e, '#home')}
                    className="hover:text-teal-400 transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    onClick={(e) => handleSmoothScroll(e, '#about')}
                    className="hover:text-teal-400 transition-colors"
                  >
                    About Clinic
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    onClick={(e) => handleSmoothScroll(e, '#services')}
                    className="hover:text-teal-400 transition-colors"
                  >
                    Medical Services
                  </a>
                </li>
                <li>
                  <a
                    href="#doctors"
                    onClick={(e) => handleSmoothScroll(e, '#doctors')}
                    className="hover:text-teal-400 transition-colors"
                  >
                    Doctors & Team
                  </a>
                </li>
                <li>
                  <a
                    href="#why-us"
                    onClick={(e) => handleSmoothScroll(e, '#why-us')}
                    className="hover:text-teal-400 transition-colors"
                  >
                    Why Choose Us
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    onClick={(e) => handleSmoothScroll(e, '#contact')}
                    className="hover:text-teal-400 transition-colors"
                  >
                    Clinic Location
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Clinical Services */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                Medical Departments
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>
                  <a
                    href="#services"
                    onClick={(e) => handleSmoothScroll(e, '#services')}
                    className="hover:text-teal-400 transition-colors"
                  >
                    General Consultation
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    onClick={(e) => handleSmoothScroll(e, '#services')}
                    className="hover:text-teal-400 transition-colors"
                  >
                    Family Medicine
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    onClick={(e) => handleSmoothScroll(e, '#services')}
                    className="hover:text-teal-400 transition-colors"
                  >
                    Dental Prophylaxis & Care
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    onClick={(e) => handleSmoothScroll(e, '#services')}
                    className="hover:text-teal-400 transition-colors"
                  >
                    Cardiology & Heart Health
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    onClick={(e) => handleSmoothScroll(e, '#services')}
                    className="hover:text-teal-400 transition-colors"
                  >
                    Clinical Dermatology
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    onClick={(e) => handleSmoothScroll(e, '#services')}
                    className="hover:text-teal-400 transition-colors"
                  >
                    Pediatric Wellness
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Contact & Schedule */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                Contact & Hours
              </h4>
              <div className="space-y-2.5 text-xs text-slate-400">
                <p className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span>742 Evergreen Healthcare Way, Suite 300, Metro City, CA 90210</span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>(555) 382-7491</span>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>care@carewellclinic-demo.com</span>
                </p>
                <p className="flex items-start gap-2 pt-1 border-t border-slate-800 text-slate-400">
                  <Clock className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span>Mon – Fri: 8am – 7pm | Sat: 9am – 4pm</span>
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-teal-600 rounded-lg hover:bg-teal-700 transition-colors cursor-pointer text-center"
                >
                  Schedule Appointment
                </button>
              </div>
            </div>

          </div>

          {/* Medical Disclaimer Banner */}
          <div className="py-6 border-b border-slate-800 text-xs text-slate-400 leading-relaxed">
            <span className="font-semibold text-slate-300">Medical Notice:</span> The content on this website is for informational and demonstrative purposes only and does not constitute formal medical diagnosis or advice. Always consult a qualified physician for personal health conditions. If you believe you are experiencing a life-threatening medical emergency, call 911 or visit your nearest emergency room immediately.
          </div>

          {/* Bottom Bar: Copyright & Legal */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <div>
              © 2026 CareWell Medical Clinic. All rights reserved. (Fictional Demonstration Practice)
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setActiveLegalModal('privacy')}
                className="hover:text-slate-200 transition-colors underline underline-offset-2 cursor-pointer"
              >
                Privacy Policy
              </button>
              <span>·</span>
              <button
                onClick={() => setActiveLegalModal('terms')}
                className="hover:text-slate-200 transition-colors underline underline-offset-2 cursor-pointer"
              >
                Terms of Use
              </button>
              <span>·</span>
              <span>Metro City Healthcare</span>
            </div>
          </div>

        </div>
      </footer>

      {/* Legal Modal (Privacy / Terms) */}
      {activeLegalModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
        >
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-in zoom-in-95 duration-200 max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setActiveLegalModal(null)}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 rounded-lg transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-bold text-slate-900 mb-3">
              {activeLegalModal === 'privacy' ? 'Patient Privacy Notice (Demo)' : 'Terms of Use (Demo)'}
            </h3>

            <div className="text-xs text-slate-600 space-y-3 leading-relaxed">
              {activeLegalModal === 'privacy' ? (
                <>
                  <p>
                    CareWell Medical Clinic respects individual privacy. Because this website is a portfolio and demonstration application, no personal medical records, HIPAA-protected health data, or private clinical documentation are processed or retained on production servers.
                  </p>
                  <p>
                    Any simulated booking submissions or contact form entries made during this session are processed transiently in frontend memory. In a live medical installation, full end-to-end encryption, business associate agreements (BAAs), and strict HIPAA compliance protocols would govern all patient records.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    By interacting with this website demonstration, you acknowledge that CareWell Medical Clinic is a fictional entity created to display professional web engineering and medical UI/UX design.
                  </p>
                  <p>
                    No doctor-patient relationship is created through form submissions on this demonstration website. For real medical evaluations, appointments, or emergency triage, please contact a licensed healthcare provider in your jurisdiction.
                  </p>
                </>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setActiveLegalModal(null)}
                className="px-5 py-2 text-xs font-semibold text-white bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors cursor-pointer"
              >
                Close Notice
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
