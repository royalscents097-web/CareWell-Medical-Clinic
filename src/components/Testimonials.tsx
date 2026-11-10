import React from 'react';
import { Star, Quote, Info } from 'lucide-react';
import { DEMO_TESTIMONIALS } from '../data/clinicData';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50/70 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-teal-800 tracking-wider uppercase mb-2">
            <span>Patient Experiences</span>
            <span className="text-slate-300">·</span>
            <span className="text-slate-500 normal-case font-medium">Demonstration Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Caring for Our Community, One Patient at a Time
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Reflecting our dedication to compassionate dialogue, accurate assessments, and a serene clinic experience.
          </p>
        </div>

        {/* Fictional Disclaimer Notice */}
        <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-600 mb-10 max-w-2xl">
          <Info className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
          <span>
            <strong>Simulated Content Notice:</strong> The testimonials presented below are illustrative demo reviews created for website presentation purposes and do not represent actual patient records or verified medical outcomes.
          </span>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {DEMO_TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-xs flex flex-col justify-between relative group hover:border-teal-200 hover:shadow-sm transition-all"
            >
              <div>
                {/* Rating Stars & Department */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-slate-600">
                    {t.dateLabel}
                  </span>
                </div>

                {/* Quote */}
                <p className="text-sm text-slate-700 leading-relaxed mb-6 italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Author & Treatment */}
              <div className="pt-4 border-t border-slate-100">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{t.patientName}</h4>
                    <p className="text-xs text-teal-700 font-medium">{t.conditionDepartment}</p>
                  </div>
                  <span className="text-[10px] text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                    Demo
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
