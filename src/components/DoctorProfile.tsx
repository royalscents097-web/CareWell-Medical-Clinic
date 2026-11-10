import React, { useState } from 'react';
import { 
  Calendar, 
  GraduationCap, 
  Briefcase, 
  Languages, 
  Clock, 
  CheckCircle2, 
  X, 
  Award,
  Stethoscope,
  Info
} from 'lucide-react';
import { CLINIC_DOCTORS, Doctor } from '../data/clinicData';

interface DoctorProfileProps {
  onSelectDoctorForBooking: (doctorName: string, departmentName: string) => void;
}

export const DoctorProfile: React.FC<DoctorProfileProps> = ({ onSelectDoctorForBooking }) => {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

  const leadDoctor = CLINIC_DOCTORS.find((d) => d.id === 'dr-sarah-ahmed') || CLINIC_DOCTORS[0];
  const colleagueDoctors = CLINIC_DOCTORS.filter((d) => d.id !== 'dr-sarah-ahmed');

  return (
    <section id="doctors" className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold text-teal-800 tracking-wider uppercase mb-2">
            <span>Our Medical Team</span>
            <span className="text-slate-300">·</span>
            <span className="text-slate-500 normal-case font-medium">Physician Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Meet Our Dedicated Medical Practitioners
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Led by experienced physicians committed to compassionate, evidence-based care. All credential and biographical information displayed below represents simulated demonstration records.
          </p>
        </div>

        {/* Featured Doctor Profile: Dr. Sarah Ahmed (Card Banner) */}
        <div className="bg-gradient-to-br from-slate-50 via-white to-teal-50/30 rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-10 mb-12 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Doctor Image & Status */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-md border border-slate-200/80 bg-white max-w-md mx-auto">
                <img
                  src={leadDoctor.image}
                  alt={`Portrait of ${leadDoctor.name}`}
                  className="w-full h-auto object-cover aspect-[3/4]"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating specialty badge */}
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-sm rounded-xl p-3 border border-slate-200/80 shadow-xs">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-slate-900">{leadDoctor.name}</p>
                      <p className="text-[11px] text-teal-700 font-medium">{leadDoctor.specialty}</p>
                    </div>
                    <span className="text-[10px] bg-teal-50 text-teal-800 px-2 py-0.5 rounded font-semibold">
                      Lead Physician
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Doctor Credentials & Bio Details */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">
                    Featured Practitioner
                  </span>
                  <span className="text-slate-300">·</span>
                  <span className="text-xs text-slate-600">CareWell Medical Director</span>
                </div>
                <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                  {leadDoctor.name}
                </h3>
                <p className="text-base font-semibold text-slate-700 mt-0.5">
                  {leadDoctor.role}
                </p>
              </div>

              {/* Fictional demo notice */}
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-amber-50/70 border border-amber-200/60 text-xs text-amber-800 mb-6">
                <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Demo Notice:</strong> Credentials, experience, and educational background shown for Dr. Sarah Ahmed are fictional demo representations created for this website demonstration.
                </span>
              </div>

              {/* Bio summary */}
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base mb-6">
                {leadDoctor.bio}
              </p>

              {/* Quick Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-xs text-slate-600">
                <div className="p-3.5 rounded-xl bg-white border border-slate-200/70 shadow-2xs">
                  <span className="font-semibold text-slate-900 flex items-center gap-1.5 mb-1">
                    <Briefcase className="w-3.5 h-3.5 text-teal-600" />
                    <span>Clinical Experience</span>
                  </span>
                  <span className="text-slate-600 block">{leadDoctor.experienceLabel}</span>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-slate-200/70 shadow-2xs">
                  <span className="font-semibold text-slate-900 flex items-center gap-1.5 mb-1">
                    <GraduationCap className="w-3.5 h-3.5 text-teal-600" />
                    <span>Education & Qualifications</span>
                  </span>
                  <span className="text-slate-600 block">{leadDoctor.qualificationsLabel}</span>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-slate-200/70 shadow-2xs">
                  <span className="font-semibold text-slate-900 flex items-center gap-1.5 mb-1">
                    <Clock className="w-3.5 h-3.5 text-teal-600" />
                    <span>Consultation Hours</span>
                  </span>
                  <span className="text-slate-600 block">{leadDoctor.schedule}</span>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-slate-200/70 shadow-2xs">
                  <span className="font-semibold text-slate-900 flex items-center gap-1.5 mb-1">
                    <Languages className="w-3.5 h-3.5 text-teal-600" />
                    <span>Languages Spoken</span>
                  </span>
                  <span className="text-slate-600 block">{leadDoctor.languages.join(', ')}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setSelectedDoctor(leadDoctor)}
                  className="px-6 py-2.5 text-sm font-semibold text-slate-800 bg-white border border-slate-300 rounded-xl hover:bg-slate-50 hover:border-slate-400 transition-colors shadow-2xs cursor-pointer"
                >
                  View Profile
                </button>

                <button
                  onClick={() => onSelectDoctorForBooking(leadDoctor.name, leadDoctor.department)}
                  className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-white bg-teal-600 rounded-xl hover:bg-teal-700 transition-colors shadow-sm cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book with Dr. Sarah</span>
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* Colleague Doctors Preview */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h4 className="text-lg font-bold text-slate-900">
              Department Specialists
            </h4>
            <span className="text-xs text-slate-600">Simulated Doctor Profiles</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {colleagueDoctors.map((doc) => (
              <div
                key={doc.id}
                className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs hover:border-teal-200 hover:shadow-sm transition-all flex flex-col sm:flex-row gap-5 items-center"
              >
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden shrink-0 border border-slate-200 bg-slate-100">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-1">
                    <span className="text-xs font-semibold text-teal-700">{doc.specialty}</span>
                    <span className="text-slate-300">·</span>
                    <span className="text-xs text-slate-600">Demo</span>
                  </div>
                  <h5 className="text-base font-bold text-slate-900">{doc.name}</h5>
                  <p className="text-xs text-slate-600 mb-3 line-clamp-2">{doc.bio}</p>
                  
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                    <button
                      onClick={() => setSelectedDoctor(doc)}
                      className="text-xs font-semibold text-slate-600 hover:text-teal-700 underline underline-offset-2 py-1 cursor-pointer"
                    >
                      View Profile
                    </button>
                    <span className="text-slate-300">|</span>
                    <button
                      onClick={() => onSelectDoctorForBooking(doc.name, doc.department)}
                      className="text-xs font-semibold text-teal-700 hover:text-teal-900 py-1 cursor-pointer"
                    >
                      Schedule Consultation →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Doctor Profile Modal */}
      {selectedDoctor && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs animate-in fade-in duration-200"
        >
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setSelectedDoctor(null)}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 rounded-lg transition-colors cursor-pointer"
              aria-label="Close doctor profile"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Profile Header */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 mb-6 pb-6 border-b border-slate-100">
              <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0 border border-slate-200 shadow-xs">
                <img
                  src={selectedDoctor.image}
                  alt={selectedDoctor.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-center sm:text-left">
                <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">
                  CareWell Physician Profile
                </span>
                <h3 className="text-2xl font-bold text-slate-900">
                  {selectedDoctor.name}
                </h3>
                <p className="text-sm font-medium text-slate-600">
                  {selectedDoctor.role}
                </p>
                <div className="mt-2 text-xs text-amber-700 bg-amber-50 px-2.5 py-1 rounded inline-block border border-amber-200">
                  Simulated Demo Profile — Credentials are non-production placeholders
                </div>
              </div>
            </div>

            {/* Modal Body Details */}
            <div className="space-y-4 text-sm text-slate-600">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  About the Physician
                </h4>
                <p className="text-slate-700 leading-relaxed">
                  {selectedDoctor.bio}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                  <span className="block text-xs font-bold text-slate-500 uppercase">Clinical Focus</span>
                  <span className="text-sm font-semibold text-slate-800">{selectedDoctor.specialty}</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                  <span className="block text-xs font-bold text-slate-500 uppercase">Experience (Fictional)</span>
                  <span className="text-sm font-semibold text-slate-800">{selectedDoctor.experienceLabel}</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70 sm:col-span-2">
                  <span className="block text-xs font-bold text-slate-500 uppercase">Qualifications (Placeholder)</span>
                  <span className="text-sm text-slate-700">{selectedDoctor.qualificationsLabel}</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                  <span className="block text-xs font-bold text-slate-500 uppercase">Languages</span>
                  <span className="text-sm text-slate-800">{selectedDoctor.languages.join(', ')}</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                  <span className="block text-xs font-bold text-slate-500 uppercase">Consulting Days</span>
                  <span className="text-xs text-slate-700">{selectedDoctor.schedule}</span>
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-6 mt-6 border-t border-slate-100">
              <button
                onClick={() => setSelectedDoctor(null)}
                className="w-full sm:w-auto px-4 py-2.5 text-sm font-medium text-slate-600 hover:text-slate-800 transition-colors cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const docName = selectedDoctor.name;
                  const dept = selectedDoctor.department;
                  setSelectedDoctor(null);
                  onSelectDoctorForBooking(docName, dept);
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-semibold text-white bg-teal-600 rounded-xl hover:bg-teal-700 transition-colors cursor-pointer shadow-sm"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment with {selectedDoctor.name}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
