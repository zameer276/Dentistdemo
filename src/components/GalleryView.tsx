import { useState } from "react";
import { Filter, Eye, ArrowRight, Sparkles } from "lucide-react";
import { GALLERY_ITEMS } from "../data";
import { GalleryItem } from "../types";
import heroDentistryImg from "../assets/images/hero_dentistry_1780207489491.png";
import doctorSarahImg from "../assets/images/doctor_sarah_1780207506461.png";
import treatmentRoomImg from "../assets/images/treatment_room_1780207523661.png";

export default function GalleryView() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filterCategories = [
    { id: "all", label: "All Photos" },
    { id: "clinic", label: "Clinic Lounge & Lobby" },
    { id: "treatment", label: "Clinical Suites" },
    { id: "before_after", label: "Smile Transformations" },
    { id: "team", label: "Our Doctors & Dental Team" },
  ];

  // Resolve path strings to actual imported generated asset files
  const getResolvedImageWebUrl = (path: string) => {
    if (path === "hero_dentistry_path") return heroDentistryImg;
    if (path === "doctor_sarah_path") return doctorSarahImg;
    if (path === "treatment_room_path") return treatmentRoomImg;
    return path;
  };

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    return activeCategory === "all" || item.category === activeCategory;
  });

  return (
    <div className="space-y-12 pb-12">
      {/* Page Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4 pt-4">
        <span className="text-xs font-bold text-teal-600 uppercase tracking-widest block">
          Visual Tour
        </span>
        <h1 className="text-4xl font-bold font-display tracking-tight text-slate-900 sm:text-5xl">
          Bright Smile Clinic Gallery
        </h1>
        <p className="text-slate-500 text-sm">
          Explore our sterile workspaces, patient relax-lounges, premium equipment suites, and real dental veneers or zoom teeth whitening transformations.
        </p>
      </section>

      {/* Category selector panel */}
      <section className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-2 bg-white p-3 rounded-2xl border border-slate-100 shadow-sm w-fit mx-auto">
          {filterCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 outline-none ${
                activeCategory === cat.id
                  ? "bg-teal-600 text-white shadow-md"
                  : "bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-teal-600"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Photo Grid */}
      <section className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" id="gallery-image-grid">
          {filteredItems.map((item) => {
            const resolvedUrl = getResolvedImageWebUrl(item.imageUrl);
            const isBeforeAfter = item.category === "before_after";

            return (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg group cursor-pointer transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative aspect-3/2 bg-slate-50 overflow-hidden">
                  {isBeforeAfter && item.beforeUrl ? (
                    /* Before after split display style */
                    <div className="grid grid-cols-2 h-full">
                      <div className="relative border-r border-white">
                        <img
                          src={item.beforeUrl}
                          alt="Before Treatment"
                          className="w-full h-full object-cover group-hover:scale-102 transition duration-300"
                          referrerPolicy="no-referrer"
                        />
                        <span className="absolute bottom-1.5 left-1.5 px-1.5 py-0.5 bg-black/70 text-[8px] tracking-wide text-white font-bold rounded uppercase leading-none">
                          Before
                        </span>
                      </div>
                      <div className="relative">
                        <img
                          src={resolvedUrl}
                          alt="After Treatment"
                          className="w-full h-full object-cover group-hover:scale-102 transition duration-300"
                          referrerPolicy="no-referrer"
                        />
                        <span className="absolute bottom-1.5 left-1.5 px-1.5 py-0.5 bg-teal-600 text-[8px] tracking-wide text-white font-bold rounded uppercase leading-none">
                          After
                        </span>
                      </div>
                    </div>
                  ) : (
                    /* Standard Image Row */
                    <img
                      src={resolvedUrl}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-103 transition duration-300"
                      referrerPolicy="no-referrer"
                    />
                  )}

                  {/* Zoom glass on hover */}
                  <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                    <span className="p-3 bg-white/95 text-slate-800 rounded-full shadow-lg">
                      <Eye className="h-4 w-4" />
                    </span>
                  </div>
                </div>

                {/* Annotation block */}
                <div className="p-4 space-y-1">
                  <span className="text-[9px] uppercase tracking-wider font-extrabold text-teal-600 font-display block">
                    {filterCategories.find((cat) => cat.id === item.category)?.label}
                  </span>
                  <h3 className="text-xs font-bold text-slate-900 group-hover:text-teal-600 transition font-display">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="text-[11px] text-slate-400 leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="relative bg-white max-w-4xl w-full rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]">
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/60 hover:bg-black/80 text-white rounded-lg transition"
            >
              Close
            </button>

            {/* Visual Area */}
            <div className="flex-1 bg-slate-900 flex items-center justify-center overflow-hidden h-[40vh] md:h-auto">
              {selectedImage.category === "before_after" && selectedImage.beforeUrl ? (
                <div className="grid grid-cols-2 w-full h-full">
                  <div className="relative">
                    <img
                      src={selectedImage.beforeUrl}
                      alt="Before"
                      className="w-full h-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 bg-black/75 px-3 py-1 text-[10px] uppercase font-bold text-white rounded">
                      Before dental work
                    </div>
                  </div>
                  <div className="relative border-l border-slate-700">
                    <img
                      src={getResolvedImageWebUrl(selectedImage.imageUrl)}
                      alt="After"
                      className="w-full h-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 bg-teal-600 px-3 py-1 text-[10px] uppercase font-bold text-white rounded">
                      Luminous after result
                    </div>
                  </div>
                </div>
              ) : (
                <img
                  src={getResolvedImageWebUrl(selectedImage.imageUrl)}
                  alt={selectedImage.title}
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              )}
            </div>

            {/* Summary Details Panel */}
            <div className="w-full md:w-80 bg-white p-6 sm:p-8 flex flex-col">
              <span className="text-[10px] uppercase tracking-widest font-extrabold text-teal-600 mb-1 leading-none">
                {selectedImage.category} Portfolio
              </span>
              <h4 className="text-lg font-bold text-slate-900 font-display mb-3">
                {selectedImage.title}
              </h4>
              {selectedImage.description && (
                <p className="text-xs text-slate-500 leading-relaxed flex-1">
                  {selectedImage.description}
                </p>
              )}

              <div className="mt-8 border-t border-slate-100 pt-4 text-xs font-semibold text-slate-500 flex gap-2 items-center">
                <Sparkles className="h-4 w-4 text-teal-500 shrink-0" />
                <span>Modern diagnostic clinical equipment utilized.</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
