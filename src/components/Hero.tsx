import React from 'react';
import { Calendar, ArrowRight, ShieldCheck, Clock, Award, Users } from 'lucide-react';

interface HeroProps {
  onBookAppointment: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookAppointment, onExploreServices }) => {
  return (
    <section id="home" className="relative bg-gradient-to-b from-sky-50/60 via-white to-white pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Editorial Kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold text-teal-800 tracking-wider uppercase mb-3">
              <span className="w-2 h-2 rounded-full bg-teal-600 inline-block"></span>
              <span>Compassionate Primary & Specialty Care</span>
              <span className="text-slate-400">·</span>
              <span className="text-slate-600 normal-case font-medium">Metro City Clinic</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6 text-balance">
              Your Health, <br className="hidden sm:inline" />
              <span className="text-teal-700">Our Priority</span>
            </h1>

            {/* Introduction paragraph */}
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mb-8 font-normal">
              At CareWell Medical Clinic, we combine modern diagnostic excellence with unhurried, attentive consultations. From regular family checkups to specialized cardiac and dermatological care, our team is dedicated to your lifelong well-being.
            </p>

            {/* Two Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <button
                onClick={onBookAppointment}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-white bg-teal-600 rounded-xl hover:bg-teal-700 active:scale-[0.99] transition-all shadow-md shadow-teal-700/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 cursor-pointer whitespace-nowrap"
              >
                <Calendar className="w-5 h-5 text-teal-100" />
                <span>Book an Appointment</span>
              </button>

              <button
                onClick={onExploreServices}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-slate-700 bg-white border border-slate-300 rounded-xl hover:bg-slate-50 hover:text-slate-900 active:scale-[0.99] transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 cursor-pointer whitespace-nowrap"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4 text-slate-500" />
              </button>
            </div>

            {/* Clinical Trust Highlights */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-3 gap-6 text-sm text-slate-600">
              <div>
                <span className="block text-2xl font-bold text-slate-900 tabular-nums">15+</span>
                <span className="text-xs text-slate-500 font-medium">Healthcare Specialists</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-slate-900 tabular-nums">&lt; 15 min</span>
                <span className="text-xs text-slate-500 font-medium">Average Patient Wait Time</span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="block text-2xl font-bold text-teal-700 tabular-nums">99.2%</span>
                <span className="text-xs text-slate-500 font-medium">Patient Satisfaction Rate</span>
              </div>
            </div>

          </div>

          {/* Right Column: High Quality Clinic Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 bg-white">
              <img
                src="/src/assets/images/hero_clinic_care_1794269605488.jpg"
                alt="CareWell Medical Clinic consultation room and physician"
                className="w-full h-auto object-cover aspect-[4/3] lg:aspect-[16/13] transform hover:scale-[1.02] transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              
              {/* Floating Clinical Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-3.5 shadow-md border border-slate-200/70 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 text-teal-700" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">Accredited Outpatient Practice</p>
                    <p className="text-[11px] text-slate-500">Board-certified physicians & modern diagnostic suites</p>
                  </div>
                </div>
                <div className="hidden sm:block text-right shrink-0">
                  <span className="text-[11px] font-semibold text-teal-700 bg-teal-50 px-2 py-1 rounded">Open Today</span>
                </div>
              </div>
            </div>

            {/* Subtle decorative background gradient patch */}
            <div className="absolute -top-6 -right-6 w-64 h-64 bg-teal-100/50 rounded-full blur-3xl -z-10 pointer-events-none"></div>
            <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-sky-100/60 rounded-full blur-3xl -z-10 pointer-events-none"></div>
          </div>

        </div>
      </div>
    </section>
  );
};
