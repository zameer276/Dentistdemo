import { Calendar, Phone, ArrowRight, ShieldCheck, Star, Users, Briefcase, Award, Zap } from "lucide-react";
import { motion } from "motion/react";
import { SERVICES, REVIEWS, INSURANCE_PARTNERS, AWARDS } from "../data";
import heroDentistryImg from "../assets/images/hero_dentistry_1780207489491.png";
import treatmentRoomImg from "../assets/images/treatment_room_1780207523661.png";

interface HomeViewProps {
  setActiveTab: (tab: string) => void;
  openBooking: (serviceId?: string) => void;
}

export default function HomeView({ setActiveTab, openBooking }: HomeViewProps) {
  // We'll showcase a few highlight services on the home page (e.g. checkup, whitening, implants)
  const spotlightServices = SERVICES.filter(s => ["checkup", "whitening", "implants"].includes(s.id));

  // We'll showcase the first 3 reviews
  const spotlightReviews = REVIEWS.slice(0, 3);

  // Quick stats array
  const STATS = [
    { value: "10,000+", label: "Happy Patients", desc: "Smiles restored and protected", icon: Users },
    { value: "15+ Years", label: "Experience", desc: "Top clinical medical record", icon: Briefcase },
    { value: "4.9/5", label: "Patients Rating", desc: "Verified patient satisfaction", icon: Star },
    { value: "5,000+", label: "Successful Procedures", desc: "Painless, expert results", icon: Award },
  ];

  return (
    <div className="space-y-16 pb-12">
      {/* 1. HERO SECTION */}
      <section className="relative bg-white pt-6 md:pt-12 overflow-hidden" id="clinic-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
            
            {/* Hero Left Column Text */}
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-teal-50 text-teal-700 text-xs font-semibold uppercase tracking-wider"
              >
                <ShieldCheck className="h-3.5 w-3.5" />
                Trusted Family Dentistry in Downtown NY
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-slate-900 leading-tight"
              >
                Expert Dental Care for the <span className="text-teal-600">Entire Family</span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-base sm:text-lg text-slate-500 leading-relaxed max-w-lg sm:mx-auto lg:mx-0"
              >
                Advanced treatments, experienced dentists, and compassionate care. We utilize state-of-the-art technologies to bring you a painless, beautiful smile journey.
              </motion.p>

              {/* Booking & WhatsApp Action group */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4 pt-3"
              >
                <button
                  id="hero-book-cta"
                  onClick={() => openBooking()}
                  className="bg-teal-600 hover:bg-teal-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 "
                >
                  <Calendar className="h-5 w-5" />
                  Book Appointment
                </button>
                <a
                  id="hero-whatsapp-cta"
                  href="https://wa.me/15559876543?text=Hi%20Bright%20Smile!%20I'd%20like%20to%20know%20more%20about%20dental%20appointments."
                  target="_blank"
                  rel="noreferrer"
                  referrerPolicy="no-referrer"
                  className="border border-slate-200 bg-white hover:bg-teal-50 hover:border-teal-300 text-slate-800 hover:text-teal-800 font-bold px-8 py-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-center gap-2"
                >
                  {/* Custom green WhatsApp dot */}
                  <span className="h-2.5 w-2.5 rounded-full bg-green-500 ring-4 ring-green-100"></span>
                  WhatsApp Now +1 (555) 987-6543
                </a>
              </motion.div>

              {/* Real clinic proof tags */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="flex flex-wrap items-center sm:justify-center lg:justify-start gap-x-6 gap-y-3 pt-6 border-t border-slate-100 text-xs text-slate-400 font-medium"
              >
                <div className="flex items-center gap-1.5">
                  <span className="text-teal-500 font-bold">✓</span> ADA Board Certified Clinicians
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-teal-500 font-bold">✓</span> Fully HIPAA & GDPR Compliant
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-teal-500 font-bold">✓</span> Advanced Pediatric Care Facilities
                </div>
              </motion.div>
            </div>

            {/* Hero Right Column Image */}
            <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-span-6 relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative mx-auto w-full max-w-md lg:max-w-none"
              >
                {/* Decorative radial gradients representing clinical cleanliness */}
                <div className="absolute -inset-4 rounded-3xl bg-teal-500/10 blur-xl opacity-70"></div>
                
                {/* Generated High Quality Clinic Image */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
                  <img
                    src={heroDentistryImg}
                    alt="Bright Smile Dental Clinic Main Lobby with Families and Doctors"
                    className="w-full h-auto object-cover max-h-[450px]"
                    referrerPolicy="no-referrer"
                  />
                  {/* Small absolute overlay badge */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md px-4 py-3.5 rounded-xl border border-teal-50 flex items-center justify-between shadow-lg">
                    <div className="flex items-center gap-2.5">
                      <div className="flex -space-x-2">
                        <span className="h-8 w-8 rounded-full bg-slate-350 border-2 border-white flex items-center justify-center font-bold text-[9px] text-teal-800">EM</span>
                        <span className="h-8 w-8 rounded-full bg-teal-600 border-2 border-white flex items-center justify-center font-bold text-[9px] text-white">SJ</span>
                      </div>
                      <div>
                        <p className="text-[11px] font-extrabold text-slate-900 block leading-non">Dr. Sarah Johnson, MDS</p>
                        <p className="text-[9px] text-teal-600 font-bold block leading-non">Active Doctor On Duty Today</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => openBooking()} 
                      className="text-[11px] bg-teal-600 hover:bg-teal-700 text-white font-extrabold px-3 py-2 rounded-lg transition"
                    >
                      Verify Opening
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. EMERGENCY DENTAL BLUE BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="emergency-banner">
        <div className="bg-gradient-to-r from-teal-50 to-teal-100/50 rounded-2xl border-2 border-dashed border-teal-200/80 p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6 relative overflow-hidden">
          <div className="relative z-10 flex items-start gap-4 max-w-2xl">
            <div className="p-3 bg-teal-600 text-white rounded-xl shadow-md shrink-0">
              <Zap className="h-6 w-6 animate-pulse" />
            </div>
            <div>
              <span className="text-xs font-bold text-teal-700 uppercase tracking-widest block mb-1">
                Immediate Urgent Care
              </span>
              <h2 className="text-xl md:text-2xl font-bold font-display text-slate-900 mb-2">
                Have a Severe Dental Emergency?
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Persistent toothaches, cracked enamel, lost crowns, or bleeding gums? We have reserved immediate slots today. Same-day diagnostics guaranteed.
              </p>
            </div>
          </div>
          <div className="shrink-0 flex flex-wrap gap-3">
            <a
              id="emergency-banner-call"
              href="tel:+15551234567"
              className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-3 rounded-xl font-bold text-sm shadow-sm transition flex items-center gap-2"
            >
              <Phone className="h-4 w-4" />
              Call +1 (555) 123-4567
            </a>
            <button
              onClick={() => openBooking("extraction")}
              className="bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 px-5 py-3 rounded-xl font-bold text-sm transition"
            >
              Priority booking
            </button>
          </div>
        </div>
      </section>

      {/* 3. CLINIC STATISTICS PANEL */}
      <section className="bg-slate-900 text-white py-12 rounded-3xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 shadow-xl" id="statistics">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {STATS.map((stat, idx) => {
            const StatIcon = stat.icon;
            return (
              <div key={idx} className="text-center space-y-2 relative group">
                <div className="mx-auto h-10 w-10 bg-teal-500/10 text-teal-400 rounded-xl flex items-center justify-center border border-teal-500/20 group-hover:bg-teal-500 group-hover:text-white transition-all duration-300">
                  <StatIcon className="h-5 w-5" />
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white block">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-200">
                  {stat.label}
                </div>
                <div className="text-[10px] text-slate-400 max-w-xs mx-auto">
                  {stat.desc}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. SERVICES SPOTLIGHT (Cards Overview) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8" id="spotlight-services-section">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold text-teal-600 uppercase tracking-widest block">
            What We Do Best
          </span>
          <h2 className="text-3xl font-bold font-display tracking-tight text-slate-900">
            A Clean Pathway to Oral Happiness
          </h2>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed">
            We deliver state-of-the-art procedures under sterile, compassionate conditions to keep your teeth glowing bright.
          </p>
        </div>

        {/* 3 spotlight card grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {spotlightServices.map((service) => (
            <div 
              key={service.id}
              className="bg-white border border-slate-100 hover:border-teal-200/80 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="p-3 bg-teal-50 text-teal-600 rounded-xl w-fit mb-5 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1 font-display">
                {service.title}
              </h3>
              <p className="text-xs font-semibold text-teal-600 tracking-wide uppercase mb-3">
                {service.priceEstimate} • {service.duration}
              </p>
              <p className="text-slate-500 text-xs leading-relaxed mb-6 flex-1">
                {service.shortDescription}
              </p>
              <button 
                onClick={() => {
                  setActiveTab("services");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 group-hover:text-teal-600 transition"
              >
                Learn More 
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => {
              setActiveTab("services");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3 px-6 rounded-xl text-xs transition shadow-md"
          >
            Explore All 12 Specialized Services
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </section>

      {/* 5. BEFORE & AFTER GALLERY OVERVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8" id="before-after-teaser">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-teal-600 uppercase tracking-widest block">
            Transformation Gallery
          </span>
          <h2 className="text-3xl font-bold font-display tracking-tight text-slate-900">
            Real Smiling Patient Outcomes
          </h2>
          <p className="text-slate-500 text-sm">
            Slide or review real dental porcelain veneers and Zoom bleaching works.
          </p>
        </div>

        {/* Dynamic preview block */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-sm">
          <div className="space-y-4">
            <span className="px-2.5 py-1 rounded bg-teal-50 text-teal-700 text-[10px] font-bold uppercase tracking-wider">
              Highlighted Smile Transformation
            </span>
            <h3 className="text-2xl font-bold text-slate-900 font-display">
              Veneer Alignment Overhaul
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              This patient suffered from long-lasting chemical yellowing and alignment gaps on the front primary upper teeth rows. Dr. Sarah designed 6 ultra-thin custom porcelain veneers. The procedure was fully completed in only two visits, restoring high light-refraction and dental confidence.
            </p>
            <div className="space-y-1 text-xs font-medium text-slate-600">
              <div className="flex items-center gap-1.5">
                <span className="text-teal-600 font-bold">✓</span> Treatment: Porcelain Veneers (6 teeth)
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-teal-600 font-bold">✓</span> Duration: 2 short appointments
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-teal-600 font-bold">✓</span> Teeth Color: Brightened by 6 grades
              </div>
            </div>
            <button
              onClick={() => {
                setActiveTab("gallery");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="text-xs font-extrabold text-teal-600 hover:text-teal-700 flex items-center gap-1"
            >
              Open gallery views 
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="relative rounded-xl overflow-hidden aspect-video border border-slate-200 shadow-lg">
            {/* Compare design block */}
            <div className="grid grid-cols-2 h-full">
              <div className="relative group">
                <img
                  src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=600"
                  alt="Damaged teeth before dental treatment"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-2 left-2 px-2 py-0.5 bg-black/60 text-white text-[9px] uppercase font-bold rounded">
                  Before Treatment
                </span>
              </div>
              <div className="relative group border-l-2 border-white">
                <img
                  src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600"
                  alt="Beautiful smile after cosmetic porcelain veneers"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-2 left-2 px-2 py-0.5 bg-teal-600 text-white text-[9px] uppercase font-bold rounded">
                  Active After
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PATIENT TESTIMONIALS SLIDER SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8" id="home-testimonials">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-teal-600 uppercase tracking-widest block">
              Patient Feedback
            </span>
            <h2 className="text-3xl font-bold font-display text-slate-900 mt-1">
              What They Say After Sitting in Our Chairs
            </h2>
          </div>
          <button
            onClick={() => {
              setActiveTab("testimonials");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-xs font-extrabold text-teal-600 hover:text-teal-700 underline flex items-center gap-1.5 shrink-0"
          >
            Read All Reviews ({REVIEWS.length})
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {spotlightReviews.map((rev) => (
            <div 
              key={rev.id}
              className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col hover:-translate-y-1 transition duration-200"
            >
              <div className="flex text-yellow-400 gap-0.5 mb-3.5">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400" />
                ))}
              </div>
              <p className="text-slate-600 text-xs italic leading-relaxed mb-6 flex-1">
                "{rev.text}"
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-slate-50 text-xs">
                <div>
                  <p className="font-extrabold text-slate-900 leading-none mb-1">
                    {rev.author}
                  </p>
                  <p className="text-[10px] text-slate-400 font-medium">
                    Treated: {rev.treatment}
                  </p>
                </div>
                {rev.verified && (
                  <span className="px-2 py-0.5 bg-green-50 text-green-700 text-[9px] font-bold uppercase rounded flex items-center gap-1 border border-green-100">
                    <span className="h-1 w-1 bg-green-500 rounded-full inline-block"></span>
                    Verified
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. INSURANCE COOPERATIONS SECTION */}
      <section className="bg-slate-50 py-12 rounded-3xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border border-slate-100" id="home-insurance">
        <div className="text-center space-y-2 mb-8">
          <span className="text-xs font-bold text-teal-600 uppercase tracking-widest block">
            Flexible Coverages
          </span>
          <h3 className="text-xl font-bold font-display text-slate-900">
            We Coordinate Directly With Your Insurance Company
          </h3>
          <p className="text-slate-500 text-xs">
            Bright Smile is fully in-network with popular dental carriers to reduce out-of-pocket costs.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {INSURANCE_PARTNERS.map((ins, idx) => (
            <div 
              key={idx}
              className="bg-white p-4 rounded-xl border border-slate-150 flex flex-col items-center justify-center text-center shadow-sm hover:scale-102 transition"
            >
              <div className="font-extrabold text-sm text-slate-800 mb-0.5">{ins.name}</div>
              <div className="text-[9px] font-bold text-teal-600 uppercase tracking-wider">{ins.tier}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. AWARDS & ACCREDITATIONS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 rounded-3xl border border-slate-100 space-y-6" id="accreditations">
        <div className="text-center space-y-1.5 mb-2">
          <h3 className="text-lg font-bold text-slate-900 font-display">Clinic Awards & Professional Certifications</h3>
          <p className="text-slate-500 text-xs">Maintaining peak clinical hygiene and industry board standard scores.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {AWARDS.map((aw, i) => (
            <div key={i} className="flex gap-3 bg-slate-50 p-4 rounded-xl items-center border border-slate-100">
              <div className="p-2.5 bg-teal-50 text-teal-600 rounded-lg shrink-0">
                <Award className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-800 leading-tight">{aw.title}</p>
                <p className="text-[10px] text-slate-400 leading-normal">{aw.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
