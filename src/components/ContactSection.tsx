import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Navigation, 
  ExternalLink,
  MessageSquare,
  Building,
  Info
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) {
      errs.name = 'Full name is required.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email.';
    }
    if (!formData.subject.trim()) {
      errs.subject = 'Subject is required.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Message cannot be empty.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setErrors({});
  };

  return (
    <section id="contact" className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold text-teal-800 tracking-wider uppercase mb-2">
            <span>Get in Touch</span>
            <span className="text-slate-300">·</span>
            <span className="text-slate-500 normal-case font-medium">Clinic Location & Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            We’re Here When You Need Us
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Have a question regarding clinical departments, insurance coverage, or laboratory preparation? Connect with our reception desk.
          </p>
        </div>

        {/* 2-Column Contact Info & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Clinic Details & Map Placeholder */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Contact Details Cards */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-teal-700" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Clinic Address
                  </h4>
                  <p className="text-sm font-semibold text-slate-900 mt-0.5">
                    742 Evergreen Healthcare Way, Suite 300
                  </p>
                  <p className="text-xs text-slate-500">Metro City Medical District, CA 90210</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-teal-700" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Telephone
                  </h4>
                  <p className="text-sm font-semibold text-slate-900 mt-0.5">
                    (555) 382-7491
                  </p>
                  <p className="text-xs text-slate-500">Reception & appointment coordination desk</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-teal-700" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Email Inquiries
                  </h4>
                  <p className="text-sm font-semibold text-slate-900 mt-0.5">
                    care@carewellclinic-demo.com
                  </p>
                  <p className="text-xs text-slate-500">Typical response time: under 2 business hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-teal-700" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Opening Hours
                  </h4>
                  <div className="text-xs text-slate-700 space-y-1 mt-1">
                    <div className="flex justify-between gap-4">
                      <span className="font-medium">Monday – Friday:</span>
                      <span>8:00 AM – 7:00 PM</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span className="font-medium">Saturday:</span>
                      <span>9:00 AM – 4:00 PM</span>
                    </div>
                    <div className="flex justify-between gap-4 text-slate-500">
                      <span className="font-medium">Sunday:</span>
                      <span>Urgent Tele-Triage Only</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Embed / Simulated Map Card */}
            <div className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-100 shadow-xs">
              <div className="bg-slate-800 text-white p-3 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-teal-400" />
                  <span className="font-medium">Google Maps Embed Placeholder</span>
                </div>
                <span className="text-[10px] bg-slate-700 text-slate-300 px-2 py-0.5 rounded">
                  Demo Map
                </span>
              </div>
              
              {/* Simulated Map Graphic Container */}
              <div className="relative h-52 bg-slate-200 flex flex-col items-center justify-center text-center p-6 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px]">
                <div className="w-12 h-12 rounded-full bg-teal-600 text-white flex items-center justify-center shadow-md animate-bounce mb-2">
                  <MapPin className="w-6 h-6" />
                </div>
                <p className="text-xs font-bold text-slate-800">CareWell Medical Clinic</p>
                <p className="text-[11px] text-slate-500 max-w-xs mt-0.5">
                  Evergreen Medical Tower · Ground Floor Parking Available
                </p>
                
                <button
                  onClick={() => window.open('https://maps.google.com', '_blank')}
                  className="mt-3 text-xs font-semibold text-teal-700 hover:text-teal-900 bg-white px-3.5 py-1.5 rounded-lg border border-slate-300 shadow-2xs flex items-center gap-1.5 cursor-pointer"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Driving Directions</span>
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50/60 rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs">
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900 mb-1">
                  Send a General Message
                </h3>
                <p className="text-xs sm:text-sm text-slate-500">
                  Our front-desk team reviews and routes inquiries to appropriate staff members.
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-8 text-center bg-white rounded-2xl border border-teal-200 animate-in zoom-in-95 duration-200">
                  <div className="w-12 h-12 rounded-full bg-teal-50 text-teal-700 flex items-center justify-center mx-auto mb-4 border border-teal-200">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">
                    Message Sent Successfully (Demo)
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto mb-6">
                    Thank you, <strong className="text-slate-800">{formData.name}</strong>. In a live production environment, this message would be securely delivered to the clinic operations inbox.
                  </p>
                  <button
                    onClick={handleReset}
                    className="px-5 py-2 text-xs font-semibold text-teal-700 bg-teal-50 border border-teal-200 rounded-lg hover:bg-teal-100 transition-colors cursor-pointer"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contactName" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Your Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="contactName"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className={`w-full px-3.5 py-2.5 text-sm bg-white rounded-xl border focus:outline-none focus:ring-2 transition-all ${
                          errors.name
                            ? 'border-rose-400 focus:ring-rose-200 text-rose-900'
                            : 'border-slate-300 focus:border-teal-600 focus:ring-teal-100 text-slate-900'
                        }`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contactEmail" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Your Email <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="contactEmail"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. sarah.j@example.com"
                        className={`w-full px-3.5 py-2.5 text-sm bg-white rounded-xl border focus:outline-none focus:ring-2 transition-all ${
                          errors.email
                            ? 'border-rose-400 focus:ring-rose-200 text-rose-900'
                            : 'border-slate-300 focus:border-teal-600 focus:ring-teal-100 text-slate-900'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contactSubject" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Subject <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contactSubject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Inquiry regarding insurance coverage or clinic records"
                      className={`w-full px-3.5 py-2.5 text-sm bg-white rounded-xl border focus:outline-none focus:ring-2 transition-all ${
                        errors.subject
                          ? 'border-rose-400 focus:ring-rose-200 text-rose-900'
                          : 'border-slate-300 focus:border-teal-600 focus:ring-teal-100 text-slate-900'
                      }`}
                    />
                    {errors.subject && (
                      <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-1.5">
                      <label htmlFor="contactMessage" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        Message <span className="text-rose-500">*</span>
                      </label>
                      <span className="text-[11px] text-slate-500">
                        {formData.message.length} characters
                      </span>
                    </div>
                    <textarea
                      id="contactMessage"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your general question or inquiry here..."
                      className={`w-full px-3.5 py-2.5 text-sm bg-white rounded-xl border focus:outline-none focus:ring-2 transition-all resize-none ${
                        errors.message
                          ? 'border-rose-400 focus:ring-rose-200 text-rose-900'
                          : 'border-slate-300 focus:border-teal-600 focus:ring-teal-100 text-slate-900'
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submission Notice & Button */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-slate-500">
                      Response within 24 hours · Non-emergency contact
                    </p>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-semibold text-white bg-teal-600 rounded-xl hover:bg-teal-700 active:scale-[0.99] transition-all shadow-sm disabled:opacity-60 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
