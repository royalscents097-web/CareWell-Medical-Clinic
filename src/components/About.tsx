import React from 'react';
import { CheckCircle2, HeartHandshake, Sparkles, Building2, ShieldCheck, Stethoscope } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold text-teal-800 tracking-wider uppercase mb-2">
            <span>About CareWell Clinic</span>
            <span className="text-slate-300">·</span>
            <span className="text-slate-500 normal-case">Established 2014</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight mb-4">
            A Modern Healing Environment Rooted in Compassion and Precision
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            CareWell Medical Clinic was founded with a singular conviction: healthcare should be personal, unhurried, and transparent. We combine cutting-edge ambulatory medicine with an empathetic, whole-person approach to wellness.
          </p>
        </div>

        {/* 2-Column Story & Facility Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Visual Showcase: Modern Clinic Interior */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200">
              <img
                src="/src/assets/images/clinic_facility_interior_1794269606472.jpg"
                alt="CareWell Medical Clinic interior reception and waiting area"
                className="w-full h-auto aspect-[4/3] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="p-4 bg-slate-50/90 border-t border-slate-200 text-xs text-slate-600 flex items-center justify-between">
                <span>CareWell Reception & Patient Lounge</span>
                <span className="font-semibold text-teal-700">Metro City Medical District</span>
              </div>
            </div>

            {/* Core Values Strip */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 text-center">
                <span className="block text-xl font-bold text-slate-900 tabular-nums">100%</span>
                <span className="text-xs text-slate-500 font-medium">Digital Medical Records</span>
              </div>
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 text-center">
                <span className="block text-xl font-bold text-slate-900 tabular-nums">Same Day</span>
                <span className="text-xs text-slate-500 font-medium">Lab Test Triage</span>
              </div>
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 text-center">
                <span className="block text-xl font-bold text-slate-900 tabular-nums">Zero</span>
                <span className="text-xs text-slate-500 font-medium">Rushed Consultations</span>
              </div>
            </div>
          </div>

          {/* Philosophy & Mission Points */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Our Patient-Care Philosophy
            </h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              Modern medicine is often fragmented and rushed. At CareWell, we preserve the timeless bond between doctor and patient while utilizing state-of-the-art diagnostic protocols. We treat every individual with dignity, taking time to understand your medical history, lifestyle context, and personal health goals.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3.5">
                <div className="mt-1 w-6 h-6 rounded-full bg-teal-50 border border-teal-200 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-teal-700" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">Unhurried Clinical Encounters</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Standard appointments are scheduled with ample discussion time so you are never made to feel like a number on a chart.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="mt-1 w-6 h-6 rounded-full bg-teal-50 border border-teal-200 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-teal-700" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">Collaborative Multi-Disciplinary Care</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Our general practitioners, pediatricians, cardiologists, and dermatologists coordinate closely to provide holistic treatment.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="mt-1 w-6 h-6 rounded-full bg-teal-50 border border-teal-200 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-teal-700" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">Preventive Health Literacy</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    We translate complex lab markers and diagnostic outcomes into actionable lifestyle, nutritional, and medicinal guidance.
                  </p>
                </div>
              </div>
            </div>

            {/* Accreditations Trust Note */}
            <div className="p-4 rounded-xl bg-teal-50/70 border border-teal-100 flex items-center gap-4">
              <ShieldCheck className="w-8 h-8 text-teal-700 shrink-0" />
              <div className="text-xs text-slate-700">
                <span className="font-semibold text-slate-900 block">Accredited Outpatient Clinical Standards</span>
                Strict compliance with patient privacy safeguards, sterile medical environments, and evidence-based clinical protocols.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
