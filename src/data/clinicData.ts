export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  commonReasons: string[];
  duration: string;
  recommendedPrep: string;
  departmentCode: string;
}

export interface Doctor {
  id: string;
  name: string;
  role: string;
  specialty: string;
  department: string;
  image: string;
  experienceLabel: string;
  qualificationsLabel: string;
  bio: string;
  languages: string[];
  schedule: string;
  isLead?: boolean;
}

export interface Testimonial {
  id: string;
  patientName: string;
  conditionDepartment: string;
  quote: string;
  dateLabel: string;
  rating: number;
}

export const CLINIC_SERVICES: ServiceItem[] = [
  {
    id: 'general-consultation',
    departmentCode: 'General Consultation',
    title: 'General Consultation',
    shortDesc: 'Routine health evaluations, diagnostics, wellness reviews, and preventive medical counsel.',
    fullDesc: 'Comprehensive clinical evaluation addressing acute complaints, ongoing symptoms, wellness check-ups, and coordinated specialist referrals.',
    iconName: 'Stethoscope',
    duration: '30-45 minutes',
    recommendedPrep: 'Bring current medication list and any recent laboratory test results.',
    commonReasons: ['Annual health checkup', 'Unexplained fatigue or fever', 'Prescription renewal', 'Preventive screenings']
  },
  {
    id: 'family-medicine',
    departmentCode: 'Family Medicine',
    title: 'Family Medicine',
    shortDesc: 'Continuous, compassionate healthcare designed for patients of every age and family stage.',
    fullDesc: 'Holistic care for infants, adolescents, adults, and seniors with a focus on chronic disease management and long-term health maintenance.',
    iconName: 'Users',
    duration: '30-60 minutes',
    recommendedPrep: 'Bring family health history records and immunization logs if applicable.',
    commonReasons: ['Chronic illness management (hypertension, diabetes)', 'Immunizations', 'Multi-generational care plans', 'Routine family exams']
  },
  {
    id: 'dental-care',
    departmentCode: 'Dental Care',
    title: 'Dental Care',
    shortDesc: 'Preventive cleanings, oral examinations, restorative procedures, and dental hygiene guidance.',
    fullDesc: 'State-of-the-art oral wellness assessments, digital intraoral imaging, pain-free dental prophylaxis, and early caries detection.',
    iconName: 'Smile',
    duration: '45-60 minutes',
    recommendedPrep: 'Brush and floss prior to appointment; inform the team of any tooth sensitivity.',
    commonReasons: ['Dental hygiene & prophylaxis', 'Cavity check & digital x-rays', 'Gum health assessment', 'Bite discomfort & sensitivity']
  },
  {
    id: 'cardiology',
    departmentCode: 'Cardiology',
    title: 'Cardiology',
    shortDesc: 'Cardiovascular screening, heart rhythm checks, blood pressure management, and prevention.',
    fullDesc: 'Non-invasive cardiac assessments, resting ECG reviews, lipid profile analysis, and tailored lifestyle protocols to protect heart longevity.',
    iconName: 'HeartPulse',
    duration: '45-60 minutes',
    recommendedPrep: 'Avoid caffeine 3 hours before consultation; wear comfortable loose clothing.',
    commonReasons: ['Elevated blood pressure', 'Palpitations or shortness of breath', 'Cardiovascular risk assessment', 'Cholesterol management']
  },
  {
    id: 'dermatology',
    departmentCode: 'Dermatology',
    title: 'Dermatology',
    shortDesc: 'Targeted skin health checks, dermoscopic mole surveillance, eczema, and acne treatment.',
    fullDesc: 'Expert dermatological evaluation for cutaneous disorders, full-body skin scans, allergy rash diagnostics, and evidence-based skin restoration.',
    iconName: 'ShieldCheck',
    duration: '30-45 minutes',
    recommendedPrep: 'Avoid heavy makeup or self-tanners on the area being evaluated.',
    commonReasons: ['Suspicious mole surveillance', 'Persistent eczema or psoriasis', 'Adult and adolescent acne', 'Rashes or contact dermatitis']
  },
  {
    id: 'pediatrics',
    departmentCode: 'Pediatrics',
    title: 'Pediatrics',
    shortDesc: 'Child-friendly care covering developmental milestones, pediatric vaccinations, and childhood illnesses.',
    fullDesc: 'Gentle, comforting environment for newborns, toddlers, and young adults ensuring optimal growth benchmarks and nutritional support.',
    iconName: 'Baby',
    duration: '30-45 minutes',
    recommendedPrep: 'Bring past vaccination booklet and your child’s favorite comfort toy or blanket.',
    commonReasons: ['Well-child growth checks', 'Pediatric immunizations', 'Ear infections & common colds', 'Developmental guidance']
  }
];

export const CLINIC_DOCTORS: Doctor[] = [
  {
    id: 'dr-sarah-ahmed',
    name: 'Dr. Sarah Ahmed',
    role: 'Lead General Physician & Medical Director',
    specialty: 'General Physician',
    department: 'General Consultation',
    image: '/src/assets/images/doctor_sarah_ahmed_1794269605853.jpg',
    experienceLabel: '12+ Years Clinical Practice (Demo Fictional Record)',
    qualificationsLabel: 'M.D. Internal Medicine, Board Certified in General Medicine (Demo)',
    bio: 'Dr. Sarah Ahmed is an attentive physician committed to evidence-informed primary care and patient-first prevention. She specializes in comprehensive wellness evaluations, multi-system health screenings, and empowering patients with clear health literacy.',
    languages: ['English', 'Arabic', 'Spanish (Conversational)'],
    schedule: 'Monday – Thursday: 8:30 AM – 4:30 PM, Friday: 9:00 AM – 1:00 PM',
    isLead: true
  },
  {
    id: 'dr-marcus-vance',
    name: 'Dr. Marcus Vance',
    role: 'Senior Cardiologist & Preventive Care Specialist',
    specialty: 'Cardiologist',
    department: 'Cardiology',
    image: '/src/assets/images/medical_consultation_care_1794269607405.jpg',
    experienceLabel: '14+ Years Cardiovascular Practice (Demo Fictional Record)',
    qualificationsLabel: 'M.D. Cardiology, Fellow of General Cardiology (Demo)',
    bio: 'Dr. Marcus Vance focuses on early detection of cardiovascular disease, arterial wellness, and personalized lifestyle rehabilitation for lasting cardiac vitality.',
    languages: ['English', 'German'],
    schedule: 'Tuesday & Thursday: 9:00 AM – 5:00 PM',
    isLead: false
  },
  {
    id: 'dr-elena-chen',
    name: 'Dr. Elena Chen',
    role: 'Consultant Pediatrician',
    specialty: 'Pediatric Specialist',
    department: 'Pediatrics',
    image: '/src/assets/images/clinic_facility_interior_1794269606472.jpg',
    experienceLabel: '9+ Years Pediatric Care (Demo Fictional Record)',
    qualificationsLabel: 'M.D. Pediatrics, Certified Child Wellness Specialist (Demo)',
    bio: 'Dr. Elena Chen brings warmth, patience, and meticulous clinical attention to every pediatric consultation, creating an anxiety-free environment for young patients.',
    languages: ['English', 'Mandarin'],
    schedule: 'Monday, Wednesday & Friday: 9:00 AM – 4:00 PM',
    isLead: false
  }
];

export const DEMO_TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    patientName: 'Eleanor Vance',
    conditionDepartment: 'General Consultation & Preventive Care',
    quote: 'The level of attention Dr. Sarah Ahmed gave during my consultation was extraordinary. She listened without rushing and explained all tests thoroughly.',
    dateLabel: 'October 2026',
    rating: 5
  },
  {
    id: 't-2',
    patientName: 'David K. Miller',
    conditionDepartment: 'Family Medicine & Wellness',
    quote: 'Our whole family now visits CareWell. Scheduling is effortless, the waiting area is peaceful, and the doctors genuinely know our health backgrounds.',
    dateLabel: 'September 2026',
    rating: 5
  },
  {
    id: 't-3',
    patientName: 'Priya Ramanathan',
    conditionDepartment: 'Cardiology Assessment',
    quote: 'The cardiovascular screening gave me complete clarity on managing my blood pressure. Professional, modern facility and warm reception staff.',
    dateLabel: 'August 2026',
    rating: 5
  }
];

export const WHY_CHOOSE_REASONS = [
  {
    id: 'experienced-team',
    title: 'Experienced Medical Professionals',
    desc: 'Our physicians bring extensive clinical experience, continuous postgraduate education, and an unwavering commitment to patient dignity.'
  },
  {
    id: 'patient-focused',
    title: 'Patient-Focused Care',
    desc: 'We prioritize active listening, personalized care plans, and transparent discussions so you feel empowered at every step of your health journey.'
  },
  {
    id: 'modern-facilities',
    title: 'Modern Clinical Environment',
    desc: 'Spacious, clean consultation suites equipped with modern diagnostic tools and serene patient lounges engineered for comfort and safety.'
  },
  {
    id: 'convenient-booking',
    title: 'Convenient Appointment Booking',
    desc: 'Seamless appointment requests, flexible morning and afternoon availability, and minimal in-clinic wait times.'
  }
];
