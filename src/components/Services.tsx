import React, { useState } from 'react';
import { 
  Stethoscope, 
  Users, 
  Smile, 
  HeartPulse, 
  ShieldCheck, 
  Baby, 
  ArrowUpRight, 
  Clock, 
  CheckCircle2, 
  X, 
  Calendar 
} from 'lucide-react';
import { CLINIC_SERVICES, ServiceItem } from '../data/clinicData';

interface ServicesProps {
  onSelectServiceForBooking: (departmentName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForBooking }) => {
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  // Helper to map icon string to Lucide component
  const renderIcon = (iconName: string) => {
    const props = { className: 'w-6 h-6 text-teal-700' };
    switch (iconName) {
      case 'Stethoscope':
        return <Stethoscope {...props} />;
      case 'Users':
        return <Users {...props} />;
      case 'Smile':
        return <Smile {...props} />;
      case 'HeartPulse':
        return <HeartPulse {...props} />;
      case 'ShieldCheck':
        return <ShieldCheck {...props} />;
      case 'Baby':
        return <Baby {...props} />;
      default:
        return <Stethoscope {...props} />;
    }
  };

  return (
    <section id="services" className="py-20 bg-slate-50/80 border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-teal-800 tracking-wider uppercase mb-2">
              <span>Comprehensive Healthcare</span>
              <span className="text-slate-300">·</span>
              <span className="text-slate-500 normal-case font-medium">Outpatient Departments</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Medical Services Designed Around Your Life
            </h2>
            <p className="text-slate-600 mt-3 text-base sm:text-lg">
              Every department at CareWell is led by experienced clinicians supported by modern diagnostic laboratories and empathetic nursing staff.
            </p>
          </div>

          <div className="shrink-0 text-sm text-slate-500">
            <span>6 Core Specialties Available</span>
          </div>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CLINIC_SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-teal-200 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Icon & Duration Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center group-hover:bg-teal-600 group-hover:border-teal-600 transition-colors">
                    <span className="group-hover:text-white transition-colors">
                      {renderIcon(service.iconName)}
                    </span>
                  </div>
                  <span className="text-xs text-slate-600 font-medium flex items-center gap-1 bg-slate-100 px-2.5 py-1 rounded-md">
                    <Clock className="w-3.5 h-3.5 text-slate-500" />
                    <span>{service.duration}</span>
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-teal-700 transition-colors">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-sm text-slate-600 leading-relaxed mb-5">
                  {service.shortDesc}
                </p>

                {/* Common Reasons / Bullet points */}
                <div className="space-y-1.5 mb-6">
                  {service.commonReasons.slice(0, 3).map((reason, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0"></div>
                      <span className="truncate">{reason}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons: Details Modal & Book Direct */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <button
                  onClick={() => setActiveModalService(service)}
                  className="text-xs font-semibold text-slate-600 hover:text-teal-700 flex items-center gap-1 transition-colors cursor-pointer py-1.5"
                >
                  <span>Department Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onSelectServiceForBooking(service.departmentCode)}
                  className="text-xs font-semibold text-teal-700 hover:text-white bg-teal-50 hover:bg-teal-600 border border-teal-200/80 hover:border-teal-600 px-3 py-1.5 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Visit</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Service Detail Modal */}
      {activeModalService && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs animate-in fade-in duration-200"
        >
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setActiveModalService(null)}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 rounded-lg transition-colors cursor-pointer"
              aria-label="Close service details"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center">
                {renderIcon(activeModalService.iconName)}
              </div>
              <div>
                <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">
                  CareWell Clinical Department
                </span>
                <h3 className="text-2xl font-bold text-slate-900">
                  {activeModalService.title}
                </h3>
              </div>
            </div>

            {/* Content Body */}
            <div className="space-y-4 my-6 text-sm text-slate-600">
              <p className="text-base text-slate-700 leading-relaxed">
                {activeModalService.fullDesc}
              </p>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/70">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Frequently Evaluated Conditions
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                  {activeModalService.commonReasons.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="border border-slate-200 p-3.5 rounded-xl">
                  <span className="block text-xs font-bold text-slate-500 uppercase">Consultation Duration</span>
                  <span className="text-sm font-semibold text-slate-800">{activeModalService.duration}</span>
                </div>
                <div className="border border-slate-200 p-3.5 rounded-xl">
                  <span className="block text-xs font-bold text-slate-500 uppercase">Patient Preparation</span>
                  <span className="text-xs text-slate-700 leading-snug">{activeModalService.recommendedPrep}</span>
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-slate-100">
              <button
                onClick={() => setActiveModalService(null)}
                className="w-full sm:w-auto px-4 py-2.5 text-sm font-medium text-slate-600 hover:text-slate-800 transition-colors cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const dept = activeModalService.departmentCode;
                  setActiveModalService(null);
                  onSelectServiceForBooking(dept);
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-semibold text-white bg-teal-600 rounded-xl hover:bg-teal-700 transition-colors cursor-pointer shadow-sm"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment for {activeModalService.title}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
