import {
  Calendar,
  Video,
  CreditCard,
  User,
  FileText,
  ShieldCheck,
} from "lucide-react";

// JSON data for features
export const features = [
  {
    icon: <User className="h-6 w-6 text-emerald-400" />,
    title: "Create Your Profile",
    description:
      "Sign up and complete your profile to get personalized healthcare recommendations and services.",
  },
  {
    icon: <Calendar className="h-6 w-6 text-emerald-400" />,
    title: "Book Appointments",
    description:
      "Browse doctor profiles, check availability, and book appointments that fit your schedule.",
  },
  {
    icon: <Video className="h-6 w-6 text-emerald-400" />,
    title: "Video Consultation",
    description:
      "Connect with doctors through secure, high-quality video consultations from the comfort of your home.",
  },
  {
    icon: <CreditCard className="h-6 w-6 text-emerald-400" />,
    title: "Consultation Credits",
    description:
      "Purchase credit packages that fit your healthcare needs with our simple subscription model.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-emerald-400" />,
    title: "Verified Doctors",
    description:
      "All healthcare providers are carefully vetted and verified to ensure quality care.",
  },
  {
    icon: <FileText className="h-6 w-6 text-emerald-400" />,
    title: "Medical Documentation",
    description:
      "Access and manage your appointment history, doctor's notes, and medical recommendations.",
  },
];

// JSON data for testimonials
export const testimonials = [
  {
    initials: "AM",
    name: "Anita M.",
    role: "Patient",
    quote:
      "MediBridge helped me book an appointment in minutes and saved me hours of waiting in clinics.",
  },
  {
    initials: "DK",
    name: "Dr. Kevin L.",
    role: "Pediatrician",
    quote:
      "The smart reminders keep my patients engaged and consistent with their follow-ups. A true game changer!",
  },
  {
    initials: "RS",
    name: "Rohan S.",
    role: "Patient",
    quote:
      "I love that I can consult specialists globally. I received expert advice without leaving my city.",
  },
];

// JSON data for credit system benefits
export const creditBenefits = [
  "Each consultation requires <strong class='text-emerald-400'>2 credits</strong> regardless of duration",
  "Credits <strong class='text-emerald-400'>never expire</strong> - use them whenever you need",
  "Monthly subscriptions give you <strong class='text-emerald-400'>fresh credits every month</strong>",
  "Cancel or change your subscription <strong class='text-emerald-400'>anytime</strong> without penalties",
];