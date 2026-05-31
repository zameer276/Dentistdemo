import { useState } from "react";
import { Search, Calendar, ChevronRight, Clock, DollarSign, ArrowRight, X, BadgeHelp } from "lucide-react";
import * as Icons from "lucide-react";
import { SERVICES } from "../data";
import { Service } from "../types";

interface ServicesViewProps {
  openBooking: (serviceId?: string) => void;
}

export default function ServicesView({ openBooking }: ServicesViewProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeDetailService, setActiveDetailService] = useState<Service | null>(null);

  // Map icon strings to dynamic Lucide icons
  const renderServiceIcon = (iconName: string) => {
    const IconComp = (Icons as any)[iconName];
    if (IconComp) {
      return <IconComp className="h-6 w-6 text-teal-600" />;
    }
    return <Icons.Smile className="h-6 w-6 text-teal-600" />;
  };

  const categories = [
    { id: "all", label: "All Specialities" },
    { id: "preventive", label: "Preventive" },
    { id: "restorative", label: "Restorative" },
    { id: "cosmetic", label: "Cosmetic & Veneers" },
    { id: "pediatric", label: "Pediatric Care" },
    { id: "specialty", label: "Specialty Surgery" },
  ];

  const filteredServices = SERVICES.filter((service) => {
    const matchesSearch =
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.tagline.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "all" || service.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-12 pb-12">
      {/* Header section */}
      <section className="text-center max-w-3xl mx-auto space-y-4 pt-4">
        <span className="text-xs font-bold text-teal-600 uppercase tracking-widest block">
          Our Specialities
        </span>
        <h1 className="text-4xl font-bold font-display tracking-tight text-slate-900 sm:text-5xl">
          Complete Dental Treatments Under One Roof
        </h1>
        <p className="text-slate-500 text-sm">
          From basic checkups and cleanings to complex computer-guided implants and emergency extractions, we use state-of-the-art medical instruments for maximum precision.
        </p>
      </section>

      {/* Control board: Search & filter buttons */}
      <section className="max-w-7xl mx-auto space-y-6">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
          {/* Search bar */}
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search treatments (e.g. root canal, veneers, cleaning)..."
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 hover:bg-slate-50 focus:bg-white text-xs border border-slate-200 focus:border-teal-500 rounded-xl focus:outline-none transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs font-bold"
              >
                Clear
              </button>
            )}
          </div>

          {/* Scroller for Category Filters on mobile */}
          <div className="flex gap-1.5 overflow-x-auto w-full md:w-auto no-scrollbar py-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                  selectedCategory === cat.id
                    ? "bg-teal-600 text-white shadow-md shadow-teal-600/10"
                    : "bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-teal-600"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Service Cards Grid */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="services-grid-holder">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-white border border-slate-150 hover:border-teal-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group relative overflow-hidden"
              >
                {/* Visual Accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500/0 via-teal-500/20 to-teal-500/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-teal-50 text-teal-600 rounded-xl group-hover:bg-teal-600 group-hover:text-white transition-all duration-350">
                    {renderServiceIcon(service.iconName)}
                  </div>
                  <span className="text-[10px] bg-slate-50 font-bold uppercase tracking-wider text-slate-400 px-2 py-1 rounded">
                    {service.category}
                  </span>
                </div>

                <div className="space-y-2 flex-1">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-600 transition-colors font-display leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-[11px] font-semibold text-slate-400 tracking-wide uppercase italic">
                    {service.tagline}
                  </p>
                  <p className="text-[12px] text-slate-500 leading-normal line-clamp-3">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Technical data panel */}
                <div className="grid grid-cols-2 gap-2 my-5 p-2 rounded-xl bg-slate-50 border border-slate-100/50 text-[11px]">
                  <div className="flex items-center gap-1 text-slate-500">
                    <Clock className="h-3.5 w-3.5 text-teal-600" />
                    <span>Duration: {service.duration}</span>
                  </div>
                  <div className="flex items-center gap-0.5 text-slate-500 text-right justify-end">
                    <DollarSign className="h-3.5 w-3.5 text-teal-600" />
                    <span>Est: {service.priceEstimate}</span>
                  </div>
                </div>

                {/* CTAs */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <button
                    onClick={() => setActiveDetailService(service)}
                    className="border border-slate-200 hover:border-slate-350 hover:bg-slate-50 text-slate-700 text-xs font-bold py-2.5 px-3 rounded-xl transition flex justify-center items-center gap-1"
                    id={`view-details-${service.id}`}
                  >
                    View Details
                  </button>
                  <button
                    onClick={() => openBooking(service.id)}
                    className="bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold py-2.5 px-3 rounded-xl transition flex justify-center items-center gap-1.5 shadow-sm"
                    id={`schedule-${service.id}`}
                  >
                    <Calendar className="h-3.5 w-3.5" />
                    Schedule
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-100 shadow-inner max-w-md mx-auto space-y-3">
            <span className="p-4 bg-slate-50 text-slate-400 rounded-full inline-block">
              <Search className="h-8 w-8" />
            </span>
            <h4 className="text-lg font-bold text-slate-900 font-display">No treatments matched</h4>
            <p className="text-xs text-slate-400">
              We couldn't find any results matching "{searchQuery}". Try selecting other categories or clear filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="mt-2 text-xs bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded-xl transition shadow-md"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </section>

      {/* 3. DETAILED PROCEDURAL DIALOG DRAWER OVERLAY */}
      {activeDetailService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative transform bg-white max-w-2xl w-full rounded-2xl flex flex-col overflow-hidden max-h-[90vh] shadow-2xl animate-in slide-in-from-bottom-8 duration-300">
            {/* Header banner */}
            <div className="bg-gradient-to-r from-teal-600 to-blue-600 text-white p-6 relative">
              <button
                onClick={() => setActiveDetailService(null)}
                className="absolute top-4 right-4 p-1.5 hover:bg-white/10 rounded-lg text-teal-100 hover:text-white transition"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="p-2.5 bg-white/10 text-white rounded-lg w-fit mb-3">
                {renderServiceIcon(activeDetailService.iconName)}
              </div>
              <h3 className="text-2xl font-bold font-display tracking-tight text-white mb-1">
                {activeDetailService.title}
              </h3>
              <p className="text-xs text-teal-100 font-medium italic">
                "{activeDetailService.tagline}"
              </p>
            </div>

            {/* Content box */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6">
              <div className="space-y-2">
                <h4 className="text-xs font-extrabold uppercase text-slate-400 tracking-wider">Clinical Description & Procedures</h4>
                <p className="text-xs text-slate-600 leading-relaxed whitespace-pre-wrap">
                  {activeDetailService.longDescription}
                </p>
              </div>

              {/* Specific procedural indicators */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 border-t border-b border-slate-100 py-4 text-xs font-semibold text-slate-700">
                <div className="space-y-1">
                  <p className="text-[10px] text-slate-450 uppercase font-medium leading-none">Diagnostic Time</p>
                  <p className="text-teal-600 flex items-center gap-1 font-display">
                    <Clock className="h-4.5 w-4.5" />
                    {activeDetailService.duration}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] text-slate-450 uppercase font-medium leading-none">Estimated Price Range</p>
                  <p className="text-teal-600 flex items-center gap-0.5 font-display2">
                    <DollarSign className="h-4.5 w-4.5" />
                    {activeDetailService.priceEstimate}
                  </p>
                </div>
                <div className="space-y-1 col-span-2 md:col-span-1">
                  <p className="text-[10px] text-slate-450 uppercase font-medium leading-none">Category Specialists</p>
                  <p className="text-teal-600 capitalize">{activeDetailService.category}</p>
                </div>
              </div>

              {/* What to expect inside clinical guidelines */}
              <div className="space-y-3">
                <h4 className="text-xs font-extrabold uppercase text-slate-400 tracking-wider">What to Expect During Your Session</h4>
                <div className="space-y-2.5 text-xs text-slate-500">
                  <div className="flex gap-2 items-start">
                    <span className="h-5 w-5 bg-teal-50 text-teal-600 border border-teal-100 font-extrabold flex items-center justify-center rounded-lg text-[10px]">1</span>
                    <span><strong>Initial Diagnostics</strong>: Standard digital 3D HD X-Ray modeling to chart teeth boundaries.</span>
                  </div>
                  <div className="flex gap-2 items-start">
                    <span className="h-5 w-5 bg-teal-50 text-teal-600 border border-teal-100 font-extrabold flex items-center justify-center rounded-lg text-[10px]">2</span>
                    <span><strong>Local Prep</strong>: Application of gentle topical anesthetic blocks to maximize physical nerve comfort.</span>
                  </div>
                  <div className="flex gap-2 items-start">
                    <span className="h-5 w-5 bg-teal-50 text-teal-600 border border-teal-100 font-extrabold flex items-center justify-center rounded-lg text-[10px]">3</span>
                    <span><strong>Therapy Run</strong>: Computer-guided clinical procedures led by Dr. Johnson.</span>
                  </div>
                  <div className="flex gap-2 items-start">
                    <span className="h-5 w-5 bg-teal-50 text-teal-600 border border-teal-100 font-extrabold flex items-center justify-center rounded-lg text-[10px]">4</span>
                    <span><strong>Post-Care Guidance</strong>: Detailed custom written home brushing maps and recovery packs.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Book triggers inside drawer */}
            <div className="p-4 bg-slate-50 border-t border-slate-100 flex gap-3 justify-end">
              <button
                onClick={() => setActiveDetailService(null)}
                className="px-5 py-2.5 bg-white hover:bg-slate-100 text-slate-700 text-xs font-bold border border-slate-200 rounded-xl transition"
              >
                Close Details
              </button>
              <button
                onClick={() => {
                  const sId = activeDetailService.id;
                  setActiveDetailService(null);
                  openBooking(sId);
                }}
                className="px-6 py-2.5 bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center gap-1.5"
              >
                <Calendar className="h-4 w-4" />
                Schedule Consult
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
