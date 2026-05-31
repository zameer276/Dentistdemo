import React, { useState, useEffect } from "react";
import { Star, CheckCircle, ShieldCheck, MessageSquare, ThumbsUp } from "lucide-react";
import { REVIEWS } from "../data";
import { Review } from "../types";

export default function TestimonialsView() {
  const [reviewsList, setReviewsList] = useState<Review[]>(REVIEWS);
  const [newReview, setNewReview] = useState({
    author: "",
    treatment: "Dental Checkups",
    rating: 5,
    text: "",
    verified: true,
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [error, setError] = useState("");

  const treatmentsList = [
    "Dental Checkups", "Teeth Cleaning", "Teeth Whitening", 
    "Dental Implants", "Root Canal Treatment", "Orthodontics", 
    "Veneers", "Pediatric Dentistry", "Cosmetic Dentistry"
  ];

  // Load reviews from localStorage if available to persist submitted reviews
  useEffect(() => {
    const savedReviews = localStorage.getItem("clinic_user_reviews");
    if (savedReviews) {
      const parsed = JSON.parse(savedReviews);
      setReviewsList([...REVIEWS, ...parsed]);
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewReview((prev) => ({ ...prev, [name]: name === "rating" ? parseInt(value) : value }));
  };

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.author.trim() || !newReview.text.trim()) {
      setError("Please complete the required fields");
      return;
    }

    const newRevObj: Review = {
      id: "REV-" + Math.floor(Math.random() * 9999),
      rating: newReview.rating,
      text: newReview.text,
      author: newReview.author,
      treatment: newReview.treatment,
      date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
      verified: true
    };

    // Update state & persist in local storage
    const existing = localStorage.getItem("clinic_user_reviews");
    const parsed = existing ? JSON.parse(existing) : [];
    parsed.push(newRevObj);
    localStorage.setItem("clinic_user_reviews", JSON.stringify(parsed));

    setReviewsList((prev) => [...prev, newRevObj]);
    setNewReview({
      author: "",
      treatment: "Dental Checkups",
      rating: 5,
      text: "",
      verified: true,
    });
    setFormSubmitted(true);
    setError("");

    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <div className="space-y-16 pb-12">
      {/* Page Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4 pt-4">
        <span className="text-xs font-bold text-teal-600 uppercase tracking-widest block">
          Words of Trust
        </span>
        <h1 className="text-4xl font-bold font-display tracking-tight text-slate-900 sm:text-5xl">
          What Our Smiling Patients Say
        </h1>
        <p className="text-slate-500 text-sm">
          We believe in complete patient-centered care. Check through verified five-star logs documenting comfortable cleanings, surgical implants, veneers, and anxiety-free pediatric visits.
        </p>
      </section>

      {/* Grid displaying testimonials and review writing widget side-by-side */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left column: Feed list of reviews */}
        <div className="lg:col-span-8 space-y-6">
          <div className="flex justify-between items-center bg-white px-5 py-4 rounded-xl border border-slate-100 shadow-sm text-xs text-slate-550 leading-none">
            <div className="font-bold">Showing {reviewsList.length} Patient Stories</div>
            <div className="text-teal-600 font-extrabold items-center gap-1 hidden sm:flex">
              <ShieldCheck className="h-4 w-4 text-teal-600" />
              100% HIPAA and GDPR Verified
            </div>
          </div>

          <div className="space-y-6" id="reviews-feed-holder">
            {reviewsList.map((rev) => (
              <div 
                key={rev.id} 
                className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-150 relative shadow-sm hover:shadow-md transition duration-200"
              >
                {/* Testimonial Quote Icon */}
                <div className="absolute right-6 top-6 text-slate-100 font-serif text-5xl font-extrabold select-none pointer-events-none">
                  ”
                </div>

                {/* Rating Stars */}
                <div className="flex text-yellow-400 gap-0.5 mb-4 items-center">
                  {[...Array(5)].map((_, idx) => (
                    <Star 
                      key={idx} 
                      className={`h-4 w-4 ${idx < rev.rating ? "fill-yellow-400" : "text-slate-200"}`} 
                    />
                  ))}
                  <span className="text-[10px] text-slate-400 ml-1.5 font-bold font-display">
                    {rev.rating}.0 / 5.0 Rating
                  </span>
                </div>

                <p className="text-slate-600 text-xs italic leading-relaxed mb-6">
                  "{rev.text}"
                </p>

                {/* Profile footer metadata */}
                <div className="flex items-center justify-between border-t border-slate-50 pt-4 text-xs">
                  <div>
                    <h4 className="font-extrabold text-slate-900 font-display mb-0.5">{rev.author}</h4>
                    <span className="text-[10.5px] font-medium text-slate-400">
                      Procedure: <strong className="text-slate-500 font-bold">{rev.treatment}</strong>
                    </span>
                  </div>
                  <div className="flex flex-col items-end gap-1 text-[9px] text-slate-400 font-medium">
                    <span>{rev.date}</span>
                    {rev.verified && (
                      <span className="px-2 py-0.5 bg-green-50 text-green-700 font-bold uppercase rounded border border-green-100 flex items-center gap-1 max-w-fit shadow-xs">
                        <CheckCircle className="h-2.5 w-2.5 text-green-600 fill-green-600" /> Verified Patient
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column: Write and post reviews */}
        <div className="lg:col-span-4 bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-sm sticky top-24 space-y-6">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-1.5 font-display">
              <MessageSquare className="h-5 w-5 text-teal-600" />
              Write a Review
            </h3>
            <p className="text-xs text-slate-400">
              Sharing your painless clinical experience changes lives for dental-stressed families.
            </p>
          </div>

          <form onSubmit={handleReviewSubmit} className="space-y-4">
            {error && (
              <div className="p-3 bg-red-50 text-red-650 rounded-xl text-xs font-semibold">
                {error}
              </div>
            )}

            {formSubmitted && (
              <div className="p-3 bg-green-50 text-green-700 rounded-xl text-xs font-bold leading-normal">
                ✓ Success! Your patient review has been cataloged and published instantly below. Thank you!
              </div>
            )}

            {/* Author */}
            <div>
              <label className="block text-[10px] font-extrabold text-slate-600 uppercase tracking-wider mb-1">
                Your Full Name *
              </label>
              <input
                type="text"
                name="author"
                value={newReview.author}
                onChange={handleInputChange}
                placeholder="e.g. Michael Miller"
                className="w-full px-3.5 py-2.5 bg-slate-50 text-xs border border-slate-200 focus:outline-none focus:ring-1 focus:ring-teal-500 focus:bg-white rounded-xl transition"
              />
            </div>

            {/* Treatment Selector */}
            <div>
              <label className="block text-[10px] font-extrabold text-slate-600 uppercase tracking-wider mb-1">
                Which Treatment Did You Receive?
              </label>
              <select
                name="treatment"
                value={newReview.treatment}
                onChange={handleInputChange}
                className="w-full px-3.5 py-2.5 bg-slate-50 text-xs border border-slate-200 focus:outline-none focus:ring-1 focus:ring-teal-500 focus:bg-white rounded-xl transition"
              >
                {treatmentsList.map((treat, index) => (
                  <option key={index} value={treat}>
                    {treat}
                  </option>
                ))}
              </select>
            </div>

            {/* Rating Star Selection */}
            <div>
              <label className="block text-[10px] font-extrabold text-slate-600 uppercase tracking-wider mb-2">
                Overall Clinic Rating
              </label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((stars) => (
                  <button
                    key={stars}
                    type="button"
                    onClick={() => setNewReview((prev) => ({ ...prev, rating: stars }))}
                    className="p-1 hover:scale-110 transition shrink-0"
                  >
                    <Star 
                      className={`h-6 w-6 ${
                        stars <= newReview.rating 
                          ? "text-yellow-400 fill-yellow-400" 
                          : "text-slate-200"
                      }`} 
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Comments Box */}
            <div>
              <label className="block text-[10px] font-extrabold text-slate-600 uppercase tracking-wider mb-1">
                Your Patient Review *
              </label>
              <textarea
                name="text"
                rows={3}
                value={newReview.text}
                onChange={handleInputChange}
                placeholder="e.g. The staff was incredibly welcoming, and Dr. Sarah completed my implant with absolutely zero pain..."
                className="w-full px-3.5 py-2.5 bg-slate-50 text-xs border border-slate-200 focus:outline-none focus:ring-1 focus:ring-teal-500 focus:bg-white rounded-xl transition"
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-2.5 rounded-xl text-xs transition shadow flex items-center justify-center gap-1.5"
            >
              <ThumbsUp className="h-4 w-4" />
              Publish My Review
            </button>
          </form>
        </div>

      </section>
    </div>
  );
}
