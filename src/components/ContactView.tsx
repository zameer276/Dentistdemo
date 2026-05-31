import React, { useState, useEffect } from "react";
import { MapPin, Phone, Mail, Clock, MessageSquare, Compass, HelpCircle, ChevronDown, CheckCircle, Trash2, Calendar, ShieldCheck } from "lucide-react";
import { FAQS } from "../data";

export default function ContactView() {
  const [activeFaqCategory, setActiveFaqCategory] = useState<string>("all");
  const [expandedFaqId, setExpandedFaqId] = useState<string | null>("faq-1");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMsg, setUserMsg] = useState("");
  const [msgStatus, setMsgStatus] = useState(false);

  // Map Navigation Simulator states
  const [startLocation, setStartLocation] = useState("manhattan");
  const [directions, setDirections] = useState<string[]>([]);
  const [isCalculating, setIsCalculating] = useState(false);

  // Active user booked appointments (loaded from localStorage)
  const [userAppointments, setUserAppointments] = useState<any[]>([]);

  const loadAppointments = () => {
    const saved = localStorage.getItem("clinic_appointments");
    if (saved) {
      setUserAppointments(JSON.parse(saved));
    } else {
      setUserAppointments([]);
    }
  };

  useEffect(() => {
    loadAppointments();
    // Catch cross-component appointment updates
    const handleUpdate = () => {
      loadAppointments();
    };
    window.addEventListener("storage_appointment_updated", handleUpdate);
    return () => {
      window.removeEventListener("storage_appointment_updated", handleUpdate);
    };
  }, []);

  const handleClearAppointment = (id: string) => {
    const saved = localStorage.getItem("clinic_appointments");
    if (saved) {
      const parsed = JSON.parse(saved);
      const filtered = parsed.filter((ap: any) => ap.id !== id);
      localStorage.setItem("clinic_appointments", JSON.stringify(filtered));
      setUserAppointments(filtered);
    }
  };

  const handleDirectionCalc = (e: React.FormEvent) => {
    e.preventDefault();
    setIsCalculating(true);
    setTimeout(() => {
      let steps = [];
      if (startLocation === "manhattan") {
        steps = [
          "Head south road toward Central Park W / Broad St.",
          "Merge onto FDR Drive South via the ramp on the left.",
          "Take exit 5 for E 23rd St toward Medical Parkway.",
          "Turn right onto Wellness Avenue—123 is on your right.",
          "Complimentary underground clinical valets are ready."
        ];
      } else if (startLocation === "brooklyn") {
        steps = [
          "Head north toward Brooklyn Bridge ramp.",
          "Cross Brooklyn Bridge, take exit 2 toward FDR Drive.",
          "Continue onto FDR Drive North.",
          "Take exit 4 for E 14th St and turn left.",
          "Turn right onto Wellness Avenue; ground suite A."
        ];
      } else {
        steps = [
          "Take I-495 West (Long Island Expressway) toward Midtown Tunnel.",
          "Pass through Queens Midtown Tunnel and exit toward Downtown FDR.",
          "Head south on FDR Drive and turn right onto Wellness Avenue.",
          "Downtown Medical center is adjacent to the public park."
        ];
      }
      setDirections(steps);
      setIsCalculating(false);
    }, 800);
  };

  const handleMessageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName || !userEmail || !userMsg) return;
    setMsgStatus(true);
    setUserName("");
    setUserEmail("");
    setUserMsg("");
    setTimeout(() => setMsgStatus(false), 5000);
  };

  const faqCategories = [
    { id: "all", label: "All Questions" },
    { id: "general", label: "General Care" },
    { id: "services", label: "Treatments" },
    { id: "insurance", label: "Insurance & Costs" },
  ];

  const filteredFaqs = FAQS.filter(f => activeFaqCategory === "all" || f.category === activeFaqCategory);

  return (
    <div className="space-y-16 pb-12">
      {/* Page Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4 pt-4">
        <span className="text-xs font-bold text-teal-600 uppercase tracking-widest block">
          Reach Our Team
        </span>
        <h1 className="text-4xl font-bold font-display tracking-tight text-slate-900 sm:text-5xl">
          Get In Touch & Visit Our Clinic
        </h1>
        <p className="text-slate-500 text-sm">
          Have immediate clinical questions? Want to check insurance tiers? Contact us via call, text, WhatsApp, or drop by our downtown medical suites today.
        </p>
      </section>

      {/* Primary Contacts & Message Desk row */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contacts details column */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-sm space-y-6">
            <h3 className="text-lg font-bold text-slate-900 font-display">Clinic Coordinates</h3>
            
            <div className="space-y-4">
              {/* Address */}
              <div className="flex gap-3.5 items-start">
                <div className="p-2.5 bg-teal-50 text-teal-600 rounded-lg shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="text-xs text-slate-500 leading-normal">
                  <p className="font-bold text-slate-900 mb-0.5">Physical Lobby Suite</p>
                  <p>Bright Smile Dental Clinic</p>
                  <p>123 Wellness Avenue, Downtown Medical Center</p>
                  <p>New York, NY 10001</p>
                </div>
              </div>

              {/* Telephone */}
              <div className="flex gap-3.5 items-start">
                <div className="p-2.5 bg-teal-50 text-teal-600 rounded-lg shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="text-xs text-slate-500 leading-normal">
                  <p className="font-bold text-slate-900 mb-0.5">Phone (Hotline & emergency)</p>
                  <a href="tel:+15551234567" className="text-teal-600 font-extrabold hover:underline block">
                    +1 (555) 123-4567
                  </a>
                  <p className="text-[10px] text-slate-400">Available 24/7 for dental pain relief patients</p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex gap-3.5 items-start">
                <div className="p-2.5 bg-teal-50 text-teal-600 rounded-lg shrink-0">
                  {/* Whatsapp custom indicator */}
                  <span className="relative flex h-5 w-5 items-center justify-center font-bold text-green-600 mt-0.5">W</span>
                </div>
                <div className="text-xs text-slate-500 leading-normal">
                  <p className="font-bold text-slate-900 mb-0.5">WhatsApp Chat Support</p>
                  <a 
                    href="https://wa.me/15559876543" 
                    target="_blank" 
                    rel="noreferrer" 
                    referrerPolicy="no-referrer"
                    className="text-green-600 font-extrabold hover:underline block"
                  >
                    +1 (555) 987-6543
                  </a>
                  <p className="text-[10px] text-slate-400">Average response threshold: &lt; 5 minutes</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-3.5 items-start">
                <div className="p-2.5 bg-teal-50 text-teal-600 rounded-lg shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="text-xs text-slate-500 leading-normal">
                  <p className="font-bold text-slate-900 mb-0.5">Administrative Email</p>
                  <a href="mailto:info@brightsmiledental.com" className="text-teal-600 font-semibold hover:underline block">
                    info@brightsmiledental.com
                  </a>
                  <p className="text-[10px] text-slate-400">Claims, receipts, and partnerships</p>
                </div>
              </div>
            </div>
          </div>

          {/* Working hours box */}
          <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-md space-y-4">
            <h3 className="text-lg font-bold font-display flex items-center gap-2">
              <Clock className="h-5 w-5 text-teal-400" />
              Opening Hours Calendar
            </h3>
            <div className="space-y-2.5 text-xs">
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="font-medium text-slate-300">Monday - Friday</span>
                <span className="font-bold">9:00 AM - 8:00 PM</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="font-medium text-slate-300">Saturday</span>
                <span className="font-bold">9:00 AM - 8:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-slate-300 flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-400 animate-ping"></span>
                  Sunday
                </span>
                <span className="font-extrabold text-teal-400">Emergency Bookings Only</span>
              </div>
            </div>
          </div>
        </div>

        {/* Message Writing Form */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-sm space-y-6">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2 font-display">
              <MessageSquare className="h-5 w-5 text-teal-600" />
              Send Secure Message
            </h3>
            <p className="text-xs text-slate-400">Have questions for Dr. Johnson's assistants? Email us safely below.</p>
          </div>

          <form onSubmit={handleMessageSubmit} className="space-y-4">
            {msgStatus && (
              <div className="p-3 bg-green-50 text-green-700 rounded-xl text-xs font-semibold">
                ✓ Message Dispatched! A clinical coordinator will respond to your medical email address inside 2 hours.
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-extrabold text-slate-600 uppercase tracking-wider mb-1">Your Name *</label>
                <input
                  type="text"
                  required
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="e.g. Rachel Adams"
                  className="w-full px-4 py-2.5 bg-slate-50 text-xs border border-slate-200 focus:outline-none focus:ring-1 focus:ring-teal-500 focus:bg-white rounded-xl transition"
                />
              </div>
              <div>
                <label className="block text-[10px] font-extrabold text-slate-600 uppercase tracking-wider mb-1">Email *</label>
                <input
                  type="email"
                  required
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  placeholder="rachel@domain.com"
                  className="w-full px-4 py-2.5 bg-slate-50 text-xs border border-slate-200 focus:outline-none focus:ring-1 focus:ring-teal-500 focus:bg-white rounded-xl transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-extrabold text-slate-600 uppercase tracking-wider mb-1">Your Message or Query *</label>
              <textarea
                required
                rows={4}
                value={userMsg}
                onChange={(e) => setUserMsg(e.target.value)}
                placeholder="Type your questions regarding insurance networks, veneers durability, whitening slots, etc..."
                className="w-full px-4 py-2.5 bg-slate-50 text-xs border border-slate-200 focus:outline-none focus:ring-1 focus:ring-teal-500 focus:bg-white rounded-xl transition"
              ></textarea>
            </div>

            <div className="text-right text-[10px] text-slate-400 select-none flex items-center justify-between">
              <span>* Safe encryption protected</span>
              <button
                type="submit"
                className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2.5 px-6 rounded-xl text-xs transition shadow-md shrink-0"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Google Maps Integration Simulator */}
      <section className="bg-white border border-slate-100 p-6 sm:p-8 rounded-3xl max-w-7xl mx-auto shadow-sm space-y-6" id="map-simulator-panel">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-slate-100 pb-4 gap-4">
          <div>
            <span className="text-xs font-bold text-teal-600 uppercase tracking-widest block">Transit Assistant</span>
            <h3 className="text-xl font-bold font-display text-slate-900">Virtual Clinic Finder & Route Calculator</h3>
          </div>
          {/* Quick origin selects */}
          <form onSubmit={handleDirectionCalc} className="flex gap-2 items-center">
            <span className="text-xs text-slate-400 font-medium hidden sm:inline">Choose Starting Point:</span>
            <select
              value={startLocation}
              onChange={(e) => setStartLocation(e.target.value)}
              className="py-1.5 px-3 bg-slate-50 border border-slate-250 rounded-lg text-xs font-medium focus:outline-none focus:border-teal-500"
            >
              <option value="manhattan">Manhattan / Midtown</option>
              <option value="brooklyn">Brooklyn Heights</option>
              <option value="queens">Queens / Astoria</option>
            </select>
            <button
              type="submit"
              className="px-4 py-1.5 bg-teal-600 text-white rounded-lg text-xs font-bold hover:bg-teal-700 transition flex items-center gap-1 shadow-xs"
            >
              <Compass className="h-3.5 w-3.5" />
              Get Directions
            </button>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Simulated interactive map dashboard */}
          <div className="md:col-span-8 bg-slate-100 rounded-2xl overflow-hidden relative aspect-2/1 border border-slate-200">
            {/* Real StreetMap iframe embed to keep map completely authentic, reliable, and functional! */}
            <iframe
              title="Bright Smile Clinic OpenStreetMap Location Finder"
              width="100%"
              height="100%"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-74.0150%2C40.7250%2C-73.9850%2C40.7550&amp;layer=mapnik&amp;marker=40.7410%2C-74.0000"
              className="filter contrast-95 saturate-105"
              style={{ border: 0 }}
            ></iframe>
            
            {/* Floating pinpoint overlay */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-3 py-2 rounded-xl shadow-lg border border-teal-100/50 flex items-center gap-2 pointer-events-none">
              <span className="h-3.5 w-3.5 rounded-full bg-teal-600 border-2 border-white animate-pulse"></span>
              <div className="text-[10px] leading-tight">
                <p className="font-extrabold text-slate-900 font-display">Bright Smile Dental Clinic</p>
                <p className="text-slate-400">123 Wellness Ave, NY</p>
              </div>
            </div>
          </div>

          {/* Map Steps / Directions display */}
          <div className="md:col-span-4 bg-slate-50 p-6 rounded-2xl border border-slate-150 flex flex-col justify-between">
            <div className="space-y-4">
              <p className="text-xs font-bold text-slate-800 uppercase tracking-wider block border-b border-slate-100 pb-2">Directions via Road Network</p>
              
              {isCalculating ? (
                <div className="space-y-3 pt-6 text-center">
                  <span className="inline-flex h-6 w-6 border-2 border-teal-600 border-t-transparent animate-spin rounded-full"></span>
                  <p className="text-xs text-slate-400">Charting optimized streets...</p>
                </div>
              ) : directions.length > 0 ? (
                <ol className="space-y-3.5 text-xs text-slate-500">
                  {directions.map((step, idx) => (
                    <li key={idx} className="flex gap-2.5 items-start">
                      <span className="h-5 w-5 bg-teal-50 border border-teal-150 text-[10px] font-extrabold text-teal-700 rounded-full flex items-center justify-center shrink-0 mt-0.5">{idx + 1}</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              ) : (
                <p className="text-xs text-slate-400 italic pt-6 text-center">Select your starting area above and click 'Get Directions' to visualize routes.</p>
              )}
            </div>

            <div className="text-[10px] text-slate-450 border-t border-slate-200/60 pt-3.5 leading-normal">
              Our clinic offers complementary validation stamp for Downtown park garage spaces.
            </div>
          </div>
        </div>
      </section>

      {/* "My active booked appointments" panel */}
      {userAppointments.length > 0 && (
        <section className="max-w-7xl mx-auto bg-teal-50/50 border border-teal-100 rounded-3xl p-6 sm:p-8 space-y-6" id="personal-appointment-ledger">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-teal-100 pb-4 gap-3">
            <div className="flex items-center gap-2">
              <span className="p-2 bg-teal-100 text-teal-700 rounded-xl">
                <Calendar className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-lg font-bold text-slate-900 font-display">My Booked Dental Dates</h3>
                <p className="text-xs text-slate-500">Upcoming diagnostic visits recorded on this device.</p>
              </div>
            </div>
            <span className="px-3 py-1 bg-teal-600 text-white rounded-full text-[10px] font-bold uppercase w-fit tracking-wider">
              {userAppointments.length} Active Slots
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {userAppointments.map((ap) => (
              <div 
                key={ap.id}
                className="bg-white p-5 rounded-2xl border border-teal-50 flex items-center justify-between shadow-xs"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
                    <span className="px-1.5 py-0.5 bg-slate-100 rounded text-[9px] font-display text-slate-600">{ap.id}</span>
                    <span>Patient: {ap.fullName}</span>
                  </div>
                  <p className="text-[11px] text-slate-500">
                    Service: <strong>{FAQS.find(q=>q.id===ap.serviceId)?.question || "Dental Consult"}</strong>
                  </p>
                  <p className="text-[11px] text-slate-550 italic font-mono bg-slate-55/10 px-2 py-0.5 rounded w-fit">
                    Date: {ap.preferredDate} • Time: {ap.preferredTime}
                  </p>
                </div>
                <button
                  onClick={() => handleClearAppointment(ap.id)}
                  className="p-2 text-slate-450 hover:text-red-500 hover:bg-red-50 rounded-xl transition"
                  id={`cancel-appointment-${ap.id}`}
                  title="Remove this slot"
                >
                  <Trash2 className="h-4.5 w-4.5" />
                </button>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* FAQ BOARD SECTION */}
      <section className="bg-white border border-slate-150/70 p-6 sm:p-8 rounded-3xl max-w-7xl mx-auto shadow-sm space-y-8" id="faq-accordions">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <HelpCircle className="h-8 w-8 text-teal-600 mx-auto" />
          <h3 className="text-2xl font-bold font-display text-slate-900">Frequently Asked Patient Queries</h3>
          <p className="text-slate-500 text-xs">Learn how we process insurance plans, handle critical trauma, and guarantee enamel health.</p>
        </div>

        {/* Categories pills inside FAQ */}
        <div className="flex flex-wrap justify-center gap-1.5 max-w-md mx-auto">
          {faqCategories.map((fc) => (
            <button
              key={fc.id}
              onClick={() => {
                setActiveFaqCategory(fc.id);
                setExpandedFaqId(null);
              }}
              className={`px-3 py-1.5 rounded-lg text-[11px] font-medium transition-all ${
                activeFaqCategory === fc.id
                  ? "bg-teal-55 text-teal-700 border border-teal-200"
                  : "bg-slate-50 hover:bg-slate-100 text-slate-500 hover:text-teal-600"
              }`}
            >
              {fc.label}
            </button>
          ))}
        </div>

        {/* Main accordions listing */}
        <div className="max-w-3xl mx-auto space-y-3" id="faq-listing-box">
          {filteredFaqs.map((faq) => {
            const isExpanded = expandedFaqId === faq.id;
            return (
              <div 
                key={faq.id}
                className="border border-slate-150 rounded-xl overflow-hidden bg-white transition hover:ring-1 hover:ring-teal-100/50"
              >
                <button
                  onClick={() => setExpandedFaqId(isExpanded ? null : faq.id)}
                  className="w-full px-5 py-4 flex justify-between items-center text-left text-xs font-bold text-slate-800 transition select-none outline-none focus:bg-slate-50/50"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`h-4.5 w-4.5 text-slate-450 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
                </button>
                {isExpanded && (
                  <div className="px-5 pb-4 text-xs text-slate-500 leading-relaxed border-t border-slate-50 pt-3 bg-slate-50/30">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
