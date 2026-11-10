import React from 'react';
import { UserCheck, Heart, Shield, CalendarCheck, Clock, CheckCircle } from 'lucide-react';
import { WHY_CHOOSE_REASONS } from '../data/clinicData';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'experienced-team':
        return <UserCheck className="w-6 h-6 text-teal-700" />;
      case 'patient-focused':
        return <Heart className="w-6 h-6 text-teal-700" />;
      case 'modern-facilities':
        return <Shield className="w-6 h-6 text-teal-700" />;
      case 'convenient-booking':
        return <CalendarCheck className="w-6 h-6 text-teal-700" />;
      default:
        return <CheckCircle className="w-6 h-6 text-teal-700" />;
    }
  };

  return (
    <section id="why-us" className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold text-teal-800 tracking-wider uppercase mb-2">
            <span>Clinical Excellence</span>
            <span className="text-slate-300">·</span>
            <span className="text-slate-500 normal-case font-medium">Standards of Care</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Why Patients Choose CareWell
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            We hold ourselves to rigorous clinical benchmarks while never losing sight of personal empathy, clear communication, and accessibility.
          </p>
        </div>

        {/* 4 Feature Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_REASONS.map((reason) => (
            <div
              key={reason.id}
              className="bg-slate-50/70 rounded-2xl p-6 border border-slate-200/80 hover:bg-white hover:shadow-sm hover:border-teal-200 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-5 shadow-2xs">
                  {getIcon(reason.id)}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {reason.desc}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-slate-200/60 flex items-center gap-2 text-xs font-medium text-teal-800">
                <CheckCircle className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                <span>Verified Quality Standard</span>
              </div>
            </div>
          ))}
        </div>

        {/* Care Guarantee Banner */}
        <div className="mt-12 rounded-2xl bg-teal-900 text-white p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="max-w-xl text-center md:text-left">
            <h4 className="text-xl sm:text-2xl font-bold mb-2">
              Need immediate advice or same-day scheduling?
            </h4>
            <p className="text-teal-100 text-sm leading-relaxed">
              Our clinical reception desk is staffed Monday through Saturday to answer questions, coordinate prescription renewals, and match you with the right specialist.
            </p>
          </div>
          <div className="shrink-0 flex flex-col sm:flex-row items-center gap-3">
            <a
              href="tel:5553827491"
              className="px-6 py-3 text-sm font-semibold text-teal-950 bg-teal-100 hover:bg-white rounded-xl transition-colors cursor-pointer whitespace-nowrap shadow-xs"
            >
              Call (555) 382-7491
            </a>
            <a
              href="#booking"
              className="px-6 py-3 text-sm font-semibold text-white bg-teal-800 hover:bg-teal-700 border border-teal-700 rounded-xl transition-colors cursor-pointer whitespace-nowrap"
            >
              Book Consultation
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
