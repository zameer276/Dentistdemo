export interface Service {
  id: string;
  title: string;
  tagline: string;
  shortDescription: string;
  longDescription: string;
  duration: string;
  priceEstimate: string;
  iconName: string; // Used to dynamically map Lucide icons
  category: "preventive" | "restorative" | "cosmetic" | "pediatric" | "specialty";
}

export interface Review {
  id: string;
  rating: number;
  text: string;
  author: string;
  treatment: string;
  date: string;
  verified: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "clinic" | "before_after" | "treatment" | "team";
  imageUrl: string;
  beforeUrl?: string; // Optional for before-after sliders
  description?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "general" | "services" | "appointments" | "insurance";
}

export interface BlogArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: "Dental Hygiene" | "Oral Health" | "Teeth Whitening" | "Orthodontics";
  readTime: string;
  date: string;
  imageUrl: string;
}

export interface AppointmentBooking {
  fullName: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  serviceId: string;
  notes?: string;
  gdprChecked: boolean;
}
