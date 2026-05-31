import { useState } from "react";
import { Clock, Calendar, ArrowRight, BookOpen, X } from "lucide-react";
import { BLOG_ARTICLES } from "../data";
import { BlogArticle } from "../types";

export default function BlogView() {
  const [activeArticle, setActiveArticle] = useState<BlogArticle | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const bCategories = [
    { id: "all", label: "All Tips" },
    { id: "Dental Hygiene", label: "Dental Hygiene" },
    { id: "Oral Health", label: "Restorations" },
    { id: "Teeth Whitening", label: "Whitening" },
  ];

  const filteredArticles = BLOG_ARTICLES.filter((art) => {
    return selectedCategory === "all" || art.category === selectedCategory;
  });

  return (
    <div className="space-y-12 pb-12">
      {/* Blog Page Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4 pt-4">
        <span className="text-xs font-bold text-teal-600 uppercase tracking-widest block">
          Clinical Guidance
        </span>
        <h1 className="text-4xl font-bold font-display tracking-tight text-slate-900 sm:text-5xl">
          Bright Dental Tips & Hygiene Guides
        </h1>
        <p className="text-slate-500 text-sm">
          Educating families on proper homecare routines, diet adjustments, and structural comparisons to ensure healthy smiles between your checklist visits.
        </p>
      </section>

      {/* Categories select pills */}
      <section className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-2 bg-white p-3 rounded-2xl border border-slate-100 shadow-sm w-fit mx-auto">
          {bCategories.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCategory(c.id)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 outline-none ${
                selectedCategory === c.id
                  ? "bg-teal-600 text-white shadow-md animate-none"
                  : "bg-slate-50 hover:bg-slate-100 text-slate-600"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </section>

      {/* Article Grid list */}
      <section className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="blog-posts-holder">
          {filteredArticles.map((art) => (
            <div
              key={art.id}
              className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group"
            >
              <div className="relative aspect-video bg-slate-50 overflow-hidden">
                <img
                  src={art.imageUrl}
                  alt={art.title}
                  className="w-full h-full object-cover group-hover:scale-102 transition duration-300"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-3 left-3 bg-teal-600 text-white font-bold text-[9px] px-2 py-1 rounded uppercase">
                  {art.category}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col space-y-3">
                <div className="flex items-center gap-3 text-[10px] text-slate-400 font-medium">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5 text-teal-600" /> {art.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5 text-teal-600" /> {art.readTime}
                  </span>
                </div>

                <div className="space-y-1 flex-1">
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-teal-600 transition font-display leading-tight">
                    {art.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-3 pt-1">
                    {art.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-50 flex items-center justify-between">
                  <button
                    onClick={() => setActiveArticle(art)}
                    className="text-xs font-bold text-slate-800 hover:text-teal-600 transition flex items-center gap-1.5"
                    id={`read-article-${art.id}`}
                  >
                    Read Guide 
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <span className="text-[9px] font-bold text-slate-300 uppercase tracking-widest hidden sm:inline">
                    BY BRIGHT SMILE
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reader Dialog overlay Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative transform bg-white max-w-3xl w-full rounded-2xl flex flex-col overflow-hidden max-h-[90vh] shadow-2xl animate-in slide-in-from-bottom-8 duration-300">
            {/* Image banner */}
            <div className="relative aspect-3/1 bg-slate-900">
              <img
                src={activeArticle.imageUrl}
                alt={activeArticle.title}
                className="w-full h-full object-cover opacity-50"
                referrerPolicy="no-referrer"
              />
              <button
                onClick={() => setActiveArticle(null)}
                className="absolute top-4 right-4 p-1.5 bg-black/60 text-white hover:bg-black/85 rounded-lg transition"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="absolute bottom-4 left-6 text-white">
                <span className="bg-teal-600 text-white font-bold text-[9px] px-2 py-0.5 rounded uppercase block w-fit mb-1 leading-normal">
                  {activeArticle.category}
                </span>
                <h3 className="text-lg md:text-xl font-bold font-display leading-tight">
                  {activeArticle.title}
                </h3>
              </div>
            </div>

            {/* Read text content */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6">
              {/* Metadata rows */}
              <div className="flex items-center gap-4 text-xs text-slate-400 border-b border-slate-100 pb-4 font-semibold">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4 text-teal-600" /> Published {activeArticle.date}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4 text-teal-600" /> Read depth: {activeArticle.readTime}
                </span>
              </div>

              {/* MD Render Styled Body */}
              <div className="prose text-xs text-slate-650 leading-relaxed space-y-4">
                {activeArticle.content.split("\n\n").map((para, i) => {
                  // Spot lists and format them beautifully!
                  if (para.startsWith("1.") || para.startsWith("-")) {
                    return (
                      <div key={i} className="pl-4 border-l-2 border-teal-500 py-1 space-y-1">
                        {para.split("\n").map((line, lIdx) => (
                          <p key={lIdx} className="italic text-slate-600">
                            {line}
                          </p>
                        ))}
                      </div>
                    );
                  }
                  return (
                    <p key={i} className="whitespace-pre-wrap">
                      {para}
                    </p>
                  );
                })}
              </div>

              {/* Author clinical seal */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 mt-6 flex gap-3 items-center">
                <div className="p-2.5 bg-teal-55/15 text-teal-600 rounded-full font-bold text-[10px] shrink-0 border border-teal-100">
                  BS
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800 leading-tight">Approved clinical article</h4>
                  <p className="text-[10px] text-slate-400 leading-normal">Written by Bright Smile Dental coordinators and checked by Dr. Sarah Johnson BDS MDS.</p>
                </div>
              </div>
            </div>

            {/* Close footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setActiveArticle(null)}
                className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition"
              >
                Finished Reading
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
