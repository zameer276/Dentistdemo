import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, Calendar, Shield, X, Check } from "lucide-react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeView from "./components/HomeView";
import AboutView from "./components/AboutView";
import ServicesView from "./components/ServicesView";
import GalleryView from "./components/GalleryView";
import TestimonialsView from "./components/TestimonialsView";
import BlogView from "./components/BlogView";
import ContactView from "./components/ContactView";
import BookingModal from "./components/BookingModal";
import ChatWidget from "./components/ChatWidget";

export default function App() {
  const [activeTab, setActiveTab] = useState<string>("home");
  const [bookingOpen, setBookingOpen] = useState<boolean>(false);
  const [preselectedService, setPreselectedService] = useState<string>("");
  const [cookieConsent, setCookieConsent] = useState<boolean>(true); // local tracking

  useEffect(() => {
    // Check local storage for actual GDPR cookie preferences
    const isAccepted = localStorage.getItem("clinic_gdp_accepted");
    if (isAccepted === "true") {
      setCookieConsent(true);
    } else {
      setCookieConsent(false);
    }
  }, []);

  const handleOpenBooking = (serviceId?: string) => {
    if (serviceId) {
      setPreselectedService(serviceId);
    } else {
      setPreselectedService("");
    }
    setBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingOpen(false);
  };

  const handleAcceptCookies = () => {
    localStorage.setItem("clinic_gdp_accepted", "true");
    setCookieConsent(true);
  };

  // Switcher block corresponding to each page tab
  const renderViewContent = () => {
    switch (activeTab) {
      case "home":
        return <HomeView setActiveTab={setActiveTab} openBooking={handleOpenBooking} />;
      case "about":
        return <AboutView />;
      case "services":
        return <ServicesView openBooking={handleOpenBooking} />;
      case "gallery":
        return <GalleryView />;
      case "testimonials":
        return <TestimonialsView />;
      case "blog":
        return <BlogView />;
      case "contact":
        return <ContactView />;
      default:
        return <HomeView setActiveTab={setActiveTab} openBooking={handleOpenBooking} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col selection:bg-teal-500 selection:text-white">
      {/* Clinically Polished Navigation and top emergency wire */}
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        openBooking={() => handleOpenBooking()} 
      />

      {/* Main Core Container with Smooth Motion Transition effects */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20 md:pb-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            {renderViewContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer link directories and trust seals */}
      <Footer setActiveTab={setActiveTab} />

      {/* FLOATING ACTION MULTIPLE FEATURES BLOCK */}

      {/* 1. Left side bottom WhatsApp Shortcut dialer bubble */}
      <a
        href="https://wa.me/15559876543?text=Hi%22Bright%20Smile!%22"
        target="_blank"
        rel="noreferrer"
        referrerPolicy="no-referrer"
        className="fixed bottom-6 left-6 z-40 bg-green-500 hover:bg-green-600 text-white h-14 w-14 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center group"
        aria-label="Direct Quick WhatsApp connection"
        id="whatsapp-left-floating-shortcut"
      >
        <span className="text-xl font-extrabold group-hover:rotate-12 transition-transform duration-200">W</span>
      </a>

      {/* 2. Chat Widget (Bottom Right helper drawer assistant) */}
      <ChatWidget />

      {/* 3. Mobile Sticky Double action bar on bottom */}
      <div 
        className="fixed bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-t border-slate-150 py-3 px-4 flex sm:hidden justify-between items-center gap-3 shadow-2xl"
        id="mobile-sticky-quick-bar"
      >
        <a
          href="tel:+15551234567"
          className="flex-1 bg-slate-900 text-white font-bold py-3.5 px-4 rounded-xl text-center text-xs flex justify-center items-center gap-2 shadow-md hover:bg-slate-800 transition"
          id="mobile-sticky-phone-contact"
        >
          <Phone className="h-4.5 w-4.5" />
          Call Clinic
        </a>
        <button
          onClick={() => handleOpenBooking()}
          className="flex-1 bg-teal-600 text-white font-bold py-3.5 px-4 rounded-xl text-xs flex justify-center items-center gap-2 shadow-md hover:bg-teal-700 transition"
          id="mobile-sticky-booking"
        >
          <Calendar className="h-4.5 w-4.5" />
          Book Slot
        </button>
      </div>

      {/* 4. Scheduling Scheduler Modal Container Overlay */}
      <BookingModal 
        isOpen={bookingOpen} 
        onClose={handleCloseBooking} 
        preSelectedServiceId={preselectedService} 
      />

      {/* 5. GDPR Privacy Consent Cookie Banner */}
      {!cookieConsent && (
        <div 
          className="fixed bottom-20 md:bottom-6 left-4 right-4 md:left-auto md:max-w-md z-50 bg-white border border-slate-200 p-5 rounded-2xl shadow-2xl animate-in slide-in-from-bottom-10 flex flex-col gap-3.5"
          id="cookie-consent-dashboard"
        >
          <div className="flex gap-3 start items-start">
            <div className="p-2 bg-teal-50 text-teal-600 rounded-xl shrink-0">
              <Shield className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900 font-display">HIPAA & GDPR Privacy Care</h4>
              <p className="text-[11px] text-slate-500 leading-normal mt-0.5">
                Bright Smile Clinic uses localized tracking security keys to safely remember your booked appointment dates and publish review logs on this computer browser.
              </p>
            </div>
          </div>
          <div className="flex gap-2 justify-end text-[11px]">
            <button
              onClick={handleAcceptCookies}
              className="px-5 py-2 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-xl transition flex items-center gap-1"
            >
              <Check className="h-3.5 w-3.5" />
              I Accept HIPAA Terms
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
