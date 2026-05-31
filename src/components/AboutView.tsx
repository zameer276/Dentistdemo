import { Shield, Sparkles, Smile, Star, GraduationCap, HeartHandshake, CheckCircle } from "lucide-react";
import doctorSarahImg from "../assets/images/doctor_sarah_1780207506461.png";

export default function AboutView() {
  const credentials = [
    { title: "MDS - Master of Dental Surgery in Endodontics", year: "2015" },
    { title: "BDS - Bachelor of Dental Surgery", year: "2010" },
    { title: "Active Member of the American Dental Association (ADA)", year: "Since 2011" },
    { title: "NY State Licensed Dentist Practitioner Board Certification", year: "Active Professional" },
    { title: "Continuous Implantology Speciality credentials from Harvard Medical", year: "2018" },
  ];

  const whyChooseUs = [
    {
      title: "Pain-Free Procedures",
      description: "We utilize computerized anesthesia delivery systems and cutting-edge soft-tissue lasers to drastically reduce physical nerve feedback.",
      icon: Shield,
    },
    {
      title: "Spa-like Atmosphere",
      description: "Step into our serene, wood-trimmed lounge styled with warm-lit clinical teals, aromatherapy, and complimentary validated parking support.",
      icon: Sparkles,
    },
    {
      title: "Sterilization Excellence",
      description: "Our clinic meets and exceeds triple-stage state safety regulations with 100% steam autoclaves, sanitized air filters, and single-use instruments.",
      icon: CheckCircle,
    },
    {
      title: "Compassionate Pediatric Space",
      description: "We are heavily certified in handling kids. We turn dental cleaning routines into fun games, preventing childhood dentist fears.",
      icon: Smile,
    },
  ];

  return (
    <div className="space-y-16 pb-12">
      {/* 1. HERO SECTION */}
      <section className="text-center max-w-3xl mx-auto space-y-4 pt-4">
        <span className="text-xs font-bold text-teal-600 uppercase tracking-widest block">
          Get to Know Us
        </span>
        <h1 className="text-4xl font-bold font-display tracking-tight text-slate-900 sm:text-5xl">
          Crafting Healthy, Confident Smiles Since 2011
        </h1>
        <p className="text-slate-500 text-sm md:text-base leading-relaxed">
          Bright Smile Dental Clinic was built on a simple philosophy: to combine state-of-the-art dental tech with the comforting, empathetic touch of family care.
        </p>
      </section>

      {/* 2. DOCTOR BIOGRAPHY AND QUALIFICATIONS */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white p-8 rounded-3xl border border-slate-100 shadow-sm max-w-7xl mx-auto">
        {/* Doctor Image Block */}
        <div className="lg:col-span-5 relative">
          <div className="absolute -inset-4 rounded-3xl bg-teal-500/5 blur-xl"></div>
          <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-slate-50 aspect-square">
            <img
              src={doctorSarahImg}
              alt="Dr. Sarah Johnson, MDS BDS"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="mt-4 text-center bg-teal-50/60 p-4 rounded-xl border border-teal-100/50">
            <p className="text-xs font-bold text-teal-800 uppercase tracking-wider block">Board Certified Specialist</p>
            <p className="text-[11px] text-slate-500 mt-1">Specializes in cosmetic dental veneers, dental titanium implants, and painless microscope root canals.</p>
          </div>
        </div>

        {/* Doctor Story & Academics */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">Lead Clinician</span>
            <h2 className="text-3xl font-bold font-display text-slate-900">Dr. Sarah Johnson, BDS, MDS</h2>
            <p className="text-sm font-semibold text-slate-500">15+ Years of Dedicated Clinical Excellence</p>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed">
            "My mission as a practitioner is to eliminate the fear associated with visiting the dentist. Over the last decade, dental science has advanced rapidly. By incorporating computerized surgical guides, gentle laser therapies, and spa-like comforts, we can now make almost any restorative smile design completely painless. I view each patient as immediate family—delivering thorough diagnostic transparency, answering questions, and building customized preventative care protocols that last a lifetime."
          </p>

          <div className="space-y-3 pt-2">
            <h3 className="text-sm font-bold text-slate-800 flex items-center gap-1.5 font-display">
              <GraduationCap className="h-5 w-5 text-teal-600" />
              Academic Credentials & Boards
            </h3>
            <ul className="space-y-2">
              {credentials.map((cred, idx) => (
                <li key={idx} className="flex gap-2 text-xs text-slate-600 items-start">
                  <span className="text-teal-600 font-bold shrink-0 mt-0.5">✓</span>
                  <span>
                    <strong className="text-slate-800">{cred.title}</strong> — {cred.year}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 3. MISSION & VISION STATEMENTS */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8" id="mission-vision">
        {/* Mission */}
        <div className="bg-gradient-to-br from-teal-600 to-teal-700 text-white p-8 rounded-3xl shadow-md space-y-3 relative overflow-hidden">
          <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
            <GraduationCap className="h-48 w-48 text-white" />
          </div>
          <div className="h-10 w-10 bg-white/10 rounded-xl flex items-center justify-center border border-white/20">
            <HeartHandshake className="h-5 w-5" />
          </div>
          <h3 className="text-xl font-bold font-display">Our Core Mission</h3>
          <p className="text-xs text-teal-50/90 leading-relaxed">
            To provide clinical dentistry marked by professional diagnostics, cutting-edge pain reduction, and customized long-term counseling, ensuring every patient walks out with a secure, luminous smile they are proud to show the world.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-md space-y-3 relative overflow-hidden">
          <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none">
            <Star className="h-48 w-48 text-white" />
          </div>
          <div className="h-10 w-10 bg-white/10 rounded-xl flex items-center justify-center border border-white/20">
            <Sparkles className="h-5 w-5 text-teal-400" />
          </div>
          <h3 className="text-xl font-bold font-display">Our Global Vision</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            To reshape dental healthcare experiences in NYC, transitioning visits from spaces of nervousness into environments of premium comfort, high clinical transparency, and unparalleled technical expertise.
          </p>
        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section className="max-w-7xl mx-auto space-y-8" id="why-choose-us">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-teal-600 uppercase tracking-widest block">
            The Bright Smile Difference
          </span>
          <h3 className="text-2xl font-bold font-display text-slate-900">
            Why Hundreds of Patients Trust Dr. Sarah Johnson
          </h3>
          <p className="text-slate-500 text-xs">
            We prioritize absolute safety, state-of-the-art diagnostics, and long-term diagnostic coaching.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUs.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="p-3 bg-teal-50 text-teal-600 rounded-xl w-fit mb-4">
                  <IconComponent className="h-5 w-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-2 font-display">
                  {item.title}
                </h4>
                <p className="text-slate-500 text-[11px] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
