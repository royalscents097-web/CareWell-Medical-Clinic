import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  User, 
  Mail, 
  Phone, 
  Stethoscope, 
  FileText, 
  Sparkles,
  Info,
  CalendarCheck
} from 'lucide-react';
import { CLINIC_SERVICES, CLINIC_DOCTORS } from '../data/clinicData';

interface AppointmentBookingProps {
  initialDepartment?: string;
  initialDoctor?: string;
}

interface FormState {
  patientName: string;
  email: string;
  phone: string;
  doctor: string;
  department: string;
  date: string;
  timeSlot: string;
  message: string;
}

interface FormErrors {
  patientName?: string;
  email?: string;
  phone?: string;
  doctor?: string;
  department?: string;
  date?: string;
  timeSlot?: string;
}

interface ConfirmedBooking extends FormState {
  referenceNumber: string;
  createdAt: string;
}

export const AppointmentBooking: React.FC<AppointmentBookingProps> = ({
  initialDepartment = '',
  initialDoctor = ''
}) => {
  const [formData, setFormData] = useState<FormState>({
    patientName: '',
    email: '',
    phone: '',
    doctor: initialDoctor || 'Dr. Sarah Ahmed',
    department: initialDepartment || 'General Consultation',
    date: '',
    timeSlot: '10:30 AM',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState<ConfirmedBooking | null>(null);

  // Sync props if parent changes selected service or doctor
  useEffect(() => {
    if (initialDepartment) {
      setFormData((prev) => ({ ...prev, department: initialDepartment }));
    }
  }, [initialDepartment]);

  useEffect(() => {
    if (initialDoctor) {
      setFormData((prev) => ({ ...prev, doctor: initialDoctor }));
    }
  }, [initialDoctor]);

  // Today's ISO date string for min date limit (YYYY-MM-DD)
  const todayDateString = new Date().toISOString().split('T')[0];

  const timeSlots = [
    '08:30 AM',
    '09:30 AM',
    '10:30 AM',
    '11:45 AM',
    '02:00 PM',
    '03:15 PM',
    '04:30 PM',
    '05:45 PM'
  ];

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.patientName.trim()) {
      newErrors.patientName = 'Full name is required.';
    } else if (formData.patientName.trim().length < 3) {
      newErrors.patientName = 'Name must be at least 3 characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else if (!/^[\d\s+\-().]{7,20}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number (at least 7 digits).';
    }

    if (!formData.department) {
      newErrors.department = 'Please select a clinical department.';
    }

    if (!formData.doctor) {
      newErrors.doctor = 'Please select a preferred physician.';
    }

    if (!formData.date) {
      newErrors.date = 'Appointment date is required.';
    } else if (formData.date < todayDateString) {
      newErrors.date = 'Appointment date cannot be in the past.';
    }

    if (!formData.timeSlot) {
      newErrors.timeSlot = 'Please select a preferred time slot.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate standard booking submission delay
    setTimeout(() => {
      const refCode = `CW-${Math.floor(100000 + Math.random() * 900000)}`;
      setConfirmedBooking({
        ...formData,
        referenceNumber: refCode,
        createdAt: new Date().toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric'
        })
      });
      setIsSubmitting(false);
    }, 700);
  };

  const handleResetForm = () => {
    setConfirmedBooking(null);
    setFormData({
      patientName: '',
      email: '',
      phone: '',
      doctor: 'Dr. Sarah Ahmed',
      department: 'General Consultation',
      date: '',
      timeSlot: '10:30 AM',
      message: ''
    });
    setErrors({});
  };

  return (
    <section id="booking" className="py-20 bg-slate-50/70 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-teal-800 tracking-wider uppercase mb-2">
            <span>Online Scheduling</span>
            <span className="text-slate-300">·</span>
            <span className="text-slate-500 normal-case font-medium">CareWell Portal Demo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Request an In-Person Consultation
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Choose your preferred department, practitioner, and consultation slot. We confirm visit times promptly via email and text message.
          </p>
        </div>

        {/* Demo Disclaimer Banner */}
        <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200/70 text-amber-900 text-xs sm:text-sm flex items-start gap-3 mb-10">
          <Info className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <span className="font-bold">Interactive Demo Notice:</span> This booking form is a fully interactive frontend demonstration. Submitted appointments are simulated locally and will not reserve a slot at a live medical clinic. Please do not submit real protected health information or emergency inquiries.
          </div>
        </div>

        {/* Form Container or Success Confirmation */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200 shadow-sm max-w-4xl mx-auto">
          {confirmedBooking ? (
            /* Success State */
            <div className="py-6 text-center animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-2xl bg-teal-50 border border-teal-200 text-teal-700 flex items-center justify-center mx-auto mb-6">
                <CalendarCheck className="w-8 h-8" />
              </div>

              <span className="text-xs font-bold uppercase tracking-widest text-teal-700">
                Simulated Request Confirmed
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1 mb-2">
                Appointment Requested Successfully
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto mb-8">
                Your demonstration booking request has been received. In a live deployment, an automated confirmation would be delivered to <strong className="text-slate-800">{confirmedBooking.email}</strong>.
              </p>

              {/* Confirmation Details Card */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 max-w-lg mx-auto text-left text-xs sm:text-sm space-y-3 mb-8">
                <div className="flex justify-between items-center pb-3 border-b border-slate-200">
                  <span className="text-slate-500 font-medium">Reference Code</span>
                  <span className="font-mono font-bold text-teal-800 bg-teal-100/70 px-2.5 py-1 rounded">
                    {confirmedBooking.referenceNumber}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 font-medium">Patient Name</span>
                  <span className="font-semibold text-slate-900">{confirmedBooking.patientName}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 font-medium">Physician</span>
                  <span className="font-semibold text-slate-900">{confirmedBooking.doctor}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 font-medium">Department</span>
                  <span className="font-semibold text-slate-900">{confirmedBooking.department}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 font-medium">Date & Time</span>
                  <span className="font-semibold text-slate-900">{confirmedBooking.date} at {confirmedBooking.timeSlot}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 font-medium">Phone Number</span>
                  <span className="text-slate-700">{confirmedBooking.phone}</span>
                </div>
                {confirmedBooking.message && (
                  <div className="pt-2 border-t border-slate-200">
                    <span className="text-slate-500 block mb-1">Notes:</span>
                    <span className="text-slate-700 italic">"{confirmedBooking.message}"</span>
                  </div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={handleResetForm}
                  className="w-full sm:w-auto px-6 py-3 text-sm font-semibold text-teal-700 bg-teal-50 border border-teal-200 rounded-xl hover:bg-teal-100 transition-colors cursor-pointer"
                >
                  Book Another Appointment
                </button>
                <a
                  href="#contact"
                  className="w-full sm:w-auto px-6 py-3 text-sm font-semibold text-slate-700 bg-white border border-slate-300 rounded-xl hover:bg-slate-50 transition-colors inline-block"
                >
                  Contact Clinic Reception
                </a>
              </div>
            </div>
          ) : (
            /* Booking Form */
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Patient Name */}
                <div>
                  <label htmlFor="patientName" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Patient Full Name <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      id="patientName"
                      type="text"
                      value={formData.patientName}
                      onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                      placeholder="e.g. Johnathan Miller"
                      className={`w-full pl-10 pr-4 py-3 text-sm bg-slate-50/50 rounded-xl border focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                        errors.patientName 
                          ? 'border-rose-400 focus:ring-rose-200 text-rose-900' 
                          : 'border-slate-300 focus:border-teal-600 focus:ring-teal-100 text-slate-900'
                      }`}
                    />
                  </div>
                  {errors.patientName && (
                    <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.patientName}</span>
                    </p>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. j.miller@example.com"
                      className={`w-full pl-10 pr-4 py-3 text-sm bg-slate-50/50 rounded-xl border focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                        errors.email 
                          ? 'border-rose-400 focus:ring-rose-200 text-rose-900' 
                          : 'border-slate-300 focus:border-teal-600 focus:ring-teal-100 text-slate-900'
                      }`}
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Phone Number <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. (555) 234-5678"
                      className={`w-full pl-10 pr-4 py-3 text-sm bg-slate-50/50 rounded-xl border focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                        errors.phone 
                          ? 'border-rose-400 focus:ring-rose-200 text-rose-900' 
                          : 'border-slate-300 focus:border-teal-600 focus:ring-teal-100 text-slate-900'
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>

                {/* Select Department */}
                <div>
                  <label htmlFor="department" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Clinical Department <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Stethoscope className="w-4 h-4" />
                    </div>
                    <select
                      id="department"
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 text-sm bg-slate-50/50 rounded-xl border border-slate-300 focus:bg-white focus:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-100 text-slate-900 transition-all cursor-pointer"
                    >
                      {CLINIC_SERVICES.map((s) => (
                        <option key={s.id} value={s.departmentCode}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>
                  {errors.department && (
                    <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.department}</span>
                    </p>
                  )}
                </div>

                {/* Select Doctor */}
                <div>
                  <label htmlFor="doctor" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Select Doctor <span className="text-rose-500">*</span>
                  </label>
                  <select
                    id="doctor"
                    value={formData.doctor}
                    onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
                    className="w-full px-4 py-3 text-sm bg-slate-50/50 rounded-xl border border-slate-300 focus:bg-white focus:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-100 text-slate-900 transition-all cursor-pointer"
                  >
                    <option value="Any Available Physician">Any Available CareWell Physician</option>
                    {CLINIC_DOCTORS.map((doc) => (
                      <option key={doc.id} value={doc.name}>
                        {doc.name} — {doc.specialty}
                      </option>
                    ))}
                  </select>
                  {errors.doctor && (
                    <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.doctor}</span>
                    </p>
                  )}
                </div>

                {/* Appointment Date */}
                <div>
                  <label htmlFor="date" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Appointment Date <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="date"
                      type="date"
                      min={todayDateString}
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className={`w-full px-4 py-3 text-sm bg-slate-50/50 rounded-xl border focus:bg-white focus:outline-none focus:ring-2 transition-all cursor-pointer ${
                        errors.date 
                          ? 'border-rose-400 focus:ring-rose-200 text-rose-900' 
                          : 'border-slate-300 focus:border-teal-600 focus:ring-teal-100 text-slate-900'
                      }`}
                    />
                  </div>
                  {errors.date && (
                    <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.date}</span>
                    </p>
                  )}
                </div>

              </div>

              {/* Preferred Time Slots Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Preferred Time Slot <span className="text-rose-500">*</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {timeSlots.map((slot) => {
                    const isSelected = formData.timeSlot === slot;
                    return (
                      <button
                        type="button"
                        key={slot}
                        onClick={() => setFormData({ ...formData, timeSlot: slot })}
                        className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-all text-center cursor-pointer ${
                          isSelected
                            ? 'bg-teal-600 border-teal-600 text-white shadow-xs'
                            : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700'
                        }`}
                      >
                        {slot}
                      </button>
                    );
                  })}
                </div>
                {errors.timeSlot && (
                  <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.timeSlot}</span>
                  </p>
                )}
              </div>

              {/* Message / Reason for Visit */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Reason for Visit or Additional Notes <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <span className="text-[11px] text-slate-500">Do not include urgent symptoms</span>
                </div>
                <textarea
                  id="message"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Briefly state reason for appointment (e.g. annual physical, vaccination inquiry, prescription review)..."
                  className="w-full px-4 py-3 text-sm bg-slate-50/50 rounded-xl border border-slate-300 focus:bg-white focus:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-100 text-slate-900 transition-all resize-none"
                />
              </div>

              {/* Security & Submission Button */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Confidential practice intake · No online payment required</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold text-white bg-teal-600 rounded-xl hover:bg-teal-700 active:scale-[0.99] transition-all shadow-md shadow-teal-700/10 disabled:opacity-60 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Processing Request...</span>
                    </>
                  ) : (
                    <>
                      <Calendar className="w-4 h-4" />
                      <span>Submit Appointment Request</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </section>
  );
};
