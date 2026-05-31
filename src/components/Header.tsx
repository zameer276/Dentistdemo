import { useState } from "react";
import { Phone, Calendar, Menu, X, Smile, AlertCircle } from "lucide-react";

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  openBooking: () => void;
}

export default function Header({ activeTab, setActiveTab, openBooking }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Clinic" },
    { id: "services", label: "Services" },
    { id: "gallery", label: "Gallery" },
    { id: "testimonials", label: "Reviews" },
    { id: "blog", label: "Dental Tips" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
      {/* Top emergency announcement bar */}
      <div className="bg-gradient-to-r from-teal-600 to-blue-700 text-white text-xs py-2 px-4 flex flex-wrap justify-between items-center">
        <div className="flex items-center gap-2 font-medium">
          <span className="inline-flex h-2 w-2 rounded-full bg-red-400 animate-ping"></span>
          <span className="flex items-center gap-1">
            <AlertCircle className="h-3 w-3 inline" />
            24/7 Dental Emergency Hotline:
          </span>
          <a href="tel:+15551234567" className="underline hover:text-teal-100 transition">
            +1 (555) 123-4567
          </a>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-teal-50">
          <span>Mon - Sat: 9:00 AM - 8:00 PM</span>
          <span className="h-3 w-px bg-teal-400"></span>
          <span>Sunday: Emergency Only</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div 
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-2 cursor-pointer group"
            id="logo-container"
          >
            <div className="p-2.5 bg-teal-50 text-teal-600 rounded-xl group-hover:bg-teal-600 group-hover:text-white transition-all duration-300 shadow-sm">
              <Smile className="h-7 w-7" />
            </div>
            <div>
              <span className="text-xl font-bold font-display tracking-tight text-slate-900 block leading-tight">
                Bright Smile
              </span>
              <span className="text-xs font-medium text-teal-600 tracking-wider uppercase block leading-none">
                Dental Clinic
              </span>
            </div>
          </div>

          {/* Desktop Nav links */}
          <nav className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  activeTab === item.id
                    ? "bg-teal-50 text-teal-600"
                    : "text-slate-600 hover:text-teal-600 hover:bg-slate-50"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="tel:+15551234567"
              className="flex items-center gap-2 text-slate-700 hover:text-teal-600 transition font-medium text-sm"
              id="header-call-btn"
            >
              <div className="p-2 bg-slate-50 rounded-full text-slate-600">
                <Phone className="h-4 w-4" />
              </div>
              <div className="text-left">
                <span className="text-[10px] text-slate-400 block leading-none">Call Support</span>
                <span className="text-xs font-semibold block leading-tight">+1 (555) 123-4567</span>
              </div>
            </a>
            <button
              id="header-book-btn"
              onClick={openBooking}
              className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2.5 rounded-xl font-semibold text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2"
            >
              <Calendar className="h-4 w-4" />
              Book Appointment
            </button>
          </div>

          {/* Mobile hamburger menu trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              id="header-mobile-book-icon"
              onClick={openBooking}
              className="p-2 bg-teal-50 text-teal-600 rounded-lg sm:hidden"
              aria-label="Book Quick"
            >
              <Calendar className="h-5 w-5" />
            </button>
            <button
              id="hamburger-trigger"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 text-slate-600 hover:text-teal-600 hover:bg-slate-50 rounded-xl transition"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav drawer */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 shadow-xl px-4 py-6 space-y-3 absolute w-full left-0 animate-in fade-in slide-in-from-top-5 duration-200">
          <div className="grid grid-cols-2 gap-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                id={`mobile-nav-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`py-3 px-4 text-left font-medium text-sm rounded-xl transition ${
                  activeTab === item.id
                    ? "bg-teal-50 text-teal-600"
                    : "text-slate-600 hover:bg-slate-50"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="pt-4 border-t border-slate-100 space-y-3">
            <button
              id="mobile-drawer-book-btn"
              onClick={() => {
                setIsOpen(false);
                openBooking();
              }}
              className="w-full bg-teal-600 text-white font-semibold flex items-center justify-center gap-2 py-3 rounded-xl shadow-md"
            >
              <Calendar className="h-4.5 w-4.5" />
              Book Free Consultation
            </button>
            <a
              href="tel:+15551234567"
              className="w-full border border-slate-200 text-slate-700 font-semibold flex items-center justify-center gap-2 py-3 rounded-xl hover:bg-slate-50 transition"
              id="mobile-drawer-call-btn"
            >
              <Phone className="h-4.5 w-4.5" />
              Call +1 (555) 123-4567
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
