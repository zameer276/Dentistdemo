import React, { useState } from "react";
import { X, Calendar, Clock, Smile, CheckCircle, Shield, AlertTriangle } from "lucide-react";
import { SERVICES } from "../data";
import { AppointmentBooking } from "../types";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedServiceId?: string;
}

export default function BookingModal({ isOpen, onClose, preSelectedServiceId = "" }: BookingModalProps) {
  const [formData, setFormData] = useState<AppointmentBooking>({
    fullName: "",
    email: "",
    phone: "",
    preferredDate: "",
    preferredTime: "",
    serviceId: preSelectedServiceId || SERVICES[0].id,
    notes: "",
    gdprChecked: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const timeslots = [
    "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM"
  ];

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email formatting";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[\d\s-]{7,15}$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number formatting";
    }
    if (!formData.preferredDate) newErrors.preferredDate = "Please choose a date";
    if (!formData.preferredTime) newErrors.preferredTime = "Please select a preferred slot";
    if (!formData.gdprChecked) newErrors.gdprChecked = "You must agree to our data policy";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    // Clear error for field
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    // Simulate API delay
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);

      // Save appointment metadata to localStorage for diagnostic list view on contact/appointment tracking
      const existing = localStorage.getItem("clinic_appointments");
      const appointmentsList = existing ? JSON.parse(existing) : [];
      const newAppointment = {
        ...formData,
        id: "APT-" + Math.floor(Math.random() * 100000),
        bookedAt: new Date().toISOString(),
        status: "Confirmed",
      };
      appointmentsList.push(newAppointment);
      localStorage.setItem("clinic_appointments", JSON.stringify(appointmentsList));

      // Dispatch storage event so list triggers update
      window.dispatchEvent(new Event("storage_appointment_updated"));
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      preferredDate: "",
      preferredTime: "",
      serviceId: SERVICES[0].id,
      notes: "",
      gdprChecked: false,
    });
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      {/* Background overlay */}
      <div 
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>

      <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
        <div className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-lg md:max-w-xl animate-in scale-in duration-300">
          
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1.5 hover:bg-slate-50 rounded-lg transition"
            aria-label="Close scheduler"
          >
            <X className="h-5 w-5" />
          </button>

          {!isSubmitted ? (
            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-2">
                <span className="p-1.5 bg-teal-50 text-teal-600 rounded-lg inline-block">
                  <Calendar className="h-5 w-5" />
                </span>
                <h3 className="text-xl font-bold font-display text-slate-900">
                  Book Dental Care
                </h3>
              </div>
              <p className="text-sm text-slate-500 mb-6">
                Fill the fields below to schedule a consultation with Dr. Sarah Johnson. No credit card required.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Full name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="e.g. Rachel Adams"
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 transition ${
                      errors.fullName
                        ? "border-red-300 focus:ring-red-200 focus:border-red-400"
                        : "border-slate-200 focus:ring-teal-100 focus:border-teal-500"
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-xs text-red-500 mt-1 font-medium">{errors.fullName}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="rachel@domain.com"
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 transition ${
                        errors.email
                          ? "border-red-300 focus:ring-red-200 focus:border-red-400"
                          : "border-slate-200 focus:ring-teal-100 focus:border-teal-500"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-500 mt-1 font-medium">{errors.email}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 000-0000"
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 transition ${
                        errors.phone
                          ? "border-red-300 focus:ring-red-200 focus:border-red-400"
                          : "border-slate-200 focus:ring-teal-100 focus:border-teal-500"
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-xs text-red-500 mt-1 font-medium">{errors.phone}</p>
                    )}
                  </div>
                </div>

                {/* Treatment Care Selector */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Select Dental Service
                  </label>
                  <select
                    name="serviceId"
                    value={formData.serviceId}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-teal-100 focus:border-teal-500 text-sm focus:outline-none bg-white transition"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.title} ({s.priceEstimate})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Preferred Date & Time Selection */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      name="preferredDate"
                      min={new Date().toISOString().split("T")[0]}
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 transition ${
                        errors.preferredDate
                          ? "border-red-300 focus:ring-red-200 focus:border-red-400"
                          : "border-slate-200 focus:ring-teal-100 focus:border-teal-500"
                      }`}
                    />
                    {errors.preferredDate && (
                      <p className="text-xs text-red-500 mt-1 font-medium">{errors.preferredDate}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Preferred Time Slot *
                    </label>
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none bg-white focus:ring-2 transition ${
                        errors.preferredTime
                          ? "border-red-300 focus:ring-red-200 focus:border-red-400"
                          : "border-slate-200 focus:ring-teal-100 focus:border-teal-500"
                      }`}
                    >
                      <option value="">-- Choose Slot --</option>
                      {timeslots.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                    {errors.preferredTime && (
                      <p className="text-xs text-red-500 mt-1 font-medium">{errors.preferredTime}</p>
                    )}
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Special notes or symptoms (Optional)
                  </label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    placeholder="e.g. Mild pain in top left molar, interested in clear aligners..."
                    rows={2}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-teal-100 focus:border-teal-500 text-sm focus:outline-none transition"
                  ></textarea>
                </div>

                {/* GDPR Checklist */}
                <div className="pt-2">
                  <label className="relative flex items-start gap-2.5 cursor-pointer">
                    <input
                      type="checkbox"
                      name="gdprChecked"
                      checked={formData.gdprChecked}
                      onChange={handleInputChange}
                      className="mt-1 h-4 w-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500"
                    />
                    <span className="text-xs text-slate-500 leading-normal select-none">
                      I agree to the storage of my personal details for dental appointment coordination. Bright Smile respects HIPAA/GDPR clinical rules and never sells/discloses information. *
                    </span>
                  </label>
                  {errors.gdprChecked && (
                    <p className="text-xs text-red-500 mt-1.5 font-medium flex items-center gap-1">
                      <AlertTriangle className="h-3.5 w-3.5 inline" />
                      {errors.gdprChecked}
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full mt-4 bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 flex justify-center items-center gap-2 text-sm disabled:bg-slate-300 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span className="inline-flex h-4 w-4 border-2 border-white border-t-transparent animate-spin rounded-full"></span>
                  ) : (
                    <>
                      <Clock className="h-4 w-4" />
                      Secure My Slots Now
                    </>
                  )}
                </button>
              </form>
            </div>
          ) : (
            /* Success confirmation screen */
            <div className="p-8 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-teal-50 text-teal-600 mb-4 animate-bounce">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold font-display text-slate-900 mb-2">
                Appointment Booked!
              </h3>
              <p className="text-sm text-slate-500 max-w-sm mx-auto mb-6">
                Thank you <span className="font-semibold text-slate-800">{formData.fullName}</span>. We've locked in your consultation slot on <span className="font-semibold text-slate-800">{formData.preferredDate}</span> at <span className="font-semibold text-slate-800">{formData.preferredTime}</span>. A dental coordinator will contact you via text or email shortly to confirm your booking.
              </p>

              {/* Patient checklist */}
              <div className="bg-slate-50 p-4 rounded-xl text-left border border-slate-100 space-y-2 mb-6 text-xs max-w-sm mx-auto">
                <p className="font-semibold text-slate-700 mb-1 flex items-center gap-1">
                  <Shield className="h-3.5 w-3.5 text-teal-600" />
                  Your Pre-Checklist
                </p>
                <div className="flex gap-1.5">
                  <span className="text-teal-600 font-bold">✓</span>
                  <span>Bring valid medical/dental PPO insurance cards</span>
                </div>
                <div className="flex gap-1.5">
                  <span className="text-teal-600 font-bold">✓</span>
                  <span>Arrive 10 minutes early to fill patient medical forms</span>
                </div>
                <div className="flex gap-1.5">
                  <span className="text-teal-600 font-bold">✓</span>
                  <span>Bring list of active medications, if applicable</span>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="w-full max-w-xs bg-slate-900 hover:bg-slate-800 text-white font-semibold py-2.5 px-4 rounded-xl transition-all"
              >
                Close Window
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
