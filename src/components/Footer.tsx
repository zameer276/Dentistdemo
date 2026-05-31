import { Smile, Phone, Mail, MapPin, Send, ShieldAlert, Award } from "lucide-react";
import React, { useState } from "react";

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  const [newsEmail, setNewsEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsEmail) return;
    setIsSubscribed(true);
    setNewsEmail("");
    setTimeout(() => setIsSubscribed(false), 4500);
  };

  const handleQuickLink = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 text-slate-350 border-t border-slate-800" id="clinic-footer">
      
      {/* 1. Main Directory Links block */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-8">
        
        {/* Brand identity column */}
        <div className="md:col-span-4 space-y-4">
          <div className="flex items-center gap-2 cursor-pointer group" onClick={() => handleQuickLink("home")}>
            <div className="p-2 bg-teal-600 text-white rounded-xl">
              <Smile className="h-6 w-6" />
            </div>
            <div>
              <span className="text-lg font-bold font-display text-white block leading-tight">Bright Smile</span>
              <span className="text-[10px] font-bold text-teal-400 tracking-wider uppercase block leading-none">Dental Clinic</span>
            </div>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
            Delivering high-tech, painless dentistry customized for children, teens, adults, and seniors. Dr. Sarah Johnson BDS MDS and team combine medical precision with spa-comfort.
          </p>
          <div className="flex gap-2 bg-slate-800 p-3 rounded-xl border border-slate-750 max-w-xs items-center">
            <Award className="h-5 w-5 text-teal-400 shrink-0" />
            <span className="text-[10px] text-slate-300 font-semibold leading-normal">
              NY Board Certified Clinic License Number Dental-449-012
            </span>
          </div>
        </div>

        {/* Navigation Quick Directory */}
        <div className="md:col-span-2 space-y-4">
          <h4 className="text-xs font-bold text-white uppercase tracking-wider font-display">Clinic Directory</h4>
          <ul className="space-y-2 text-xs">
            <li>
              <button onClick={() => handleQuickLink("home")} className="hover:text-teal-400 transition outline-none">Home page</button>
            </li>
            <li>
              <button onClick={() => handleQuickLink("about")} className="hover:text-teal-400 transition outline-none">About Doctor</button>
            </li>
            <li>
              <button onClick={() => handleQuickLink("services")} className="hover:text-teal-400 transition outline-none">Dental Services</button>
            </li>
            <li>
              <button onClick={() => handleQuickLink("gallery")} className="hover:text-teal-400 transition outline-none">Clinic Gallery</button>
            </li>
            <li>
              <button onClick={() => handleQuickLink("testimonials")} className="hover:text-teal-400 transition outline-none">Read Reviews</button>
            </li>
            <li>
              <button onClick={() => handleQuickLink("blog")} className="hover:text-teal-400 transition outline-none">Hygiene Guides</button>
            </li>
            <li>
              <button onClick={() => handleQuickLink("contact")} className="hover:text-teal-400 transition outline-none">Locations & Map</button>
            </li>
          </ul>
        </div>

        {/* Operating hours list */}
        <div className="md:col-span-3 space-y-4 text-xs">
          <h4 className="text-xs font-bold text-white uppercase tracking-wider font-display">Lobby Hours</h4>
          <ul className="space-y-2 text-slate-400">
            <li className="flex justify-between">
              <span>Monday - Friday</span>
              <span className="text-white font-semibold">9am - 8pm</span>
            </li>
            <li className="flex justify-between">
              <span>Saturday</span>
              <span className="text-white font-semibold">9am - 8pm</span>
            </li>
            <li className="flex justify-between border-t border-slate-800 pt-2 text-red-400 font-bold">
              <span>Sunday</span>
              <span>Emergency on-call Only</span>
            </li>
          </ul>
          <div className="text-[10px] text-slate-500 leading-tight block">
            * Standard appointments booked at least 12 hours in advance. Urgent patients can bypass booking queues via the 24/7 hotline.
          </div>
        </div>

        {/* Brushing Coach Newsletter */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="text-xs font-bold text-white uppercase tracking-wider font-display">Hygiene Newsletter</h4>
          <p className="text-xs text-slate-400 leading-normal">
            Subscribe to receive sweet monthly brushing tips and teeth health check warnings. No promotional spam.
          </p>

          <form onSubmit={handleSubscribe} className="space-y-2">
            {isSubscribed ? (
              <div className="p-2.5 bg-teal-900/40 text-teal-400 rounded-lg text-[11px] font-semibold border border-teal-800">
                ✓ Success! Welcome to the Brushing Club.
              </div>
            ) : (
              <div className="flex gap-1 bg-slate-800 p-1 rounded-xl border border-slate-700">
                <input
                  type="email"
                  required
                  placeholder="rachel@domain.com"
                  value={newsEmail}
                  onChange={(e) => setNewsEmail(e.target.value)}
                  className="flex-1 bg-transparent px-3 py-2 text-xs text-white focus:outline-none placeholder-slate-500"
                />
                <button
                  type="submit"
                  className="p-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition shrink-0"
                  aria-label="Submit subscriber email"
                >
                  <Send className="h-3.5 w-3.5" />
                </button>
              </div>
            )}
            <span className="text-[9px] text-slate-550 block select-none">
              Complies with clinical data confidentiality protection. You can unsubscribe at any epoch and time.
            </span>
          </form>
        </div>

      </div>

      {/* 2. Bottom legal disclosure row */}
      <div className="border-t border-slate-800 py-6 text-xs text-slate-500 bg-slate-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div className="space-y-1">
            <p>© 2026 Bright Smile Dental Clinic. All healthcare privileges preserved.</p>
            <p className="text-[10px] text-slate-600">
              HIPAA Compliant. GDPR Certified Patient Records. Treatment outcomes displayed are indicative—individual structures change.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 text-[10px] justify-center">
            <a href="#privacy" className="hover:underline hover:text-slate-400">HIPAA Privacy Policy</a>
            <span className="text-slate-700">|</span>
            <a href="#gdpr" className="hover:underline hover:text-slate-400">GDPR Cookie Settings</a>
            <span className="text-slate-700">|</span>
            <a href="#terms" className="hover:underline hover:text-slate-400">Standard Legal Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
