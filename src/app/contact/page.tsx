"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  AlertCircle,
  CheckCircle2,
  ArrowRight,
  Send,
} from "lucide-react";
import {
  BAKERY_NAME,
  BAKERY_ADDRESS,
  BAKERY_PHONE_DISPLAY,
  BAKERY_PHONE_RAW,
  BAKERY_EMAIL,
  BAKERY_HOURS,
  getWhatsAppOrderUrl,
} from "@/lib/constants";

interface FormValues {
  name: string;
  phone: string;
  email: string;
  inquiryType: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormValues>({
    name: "",
    phone: "",
    email: "",
    inquiryType: "Custom Cake Order",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [validatedData, setValidatedData] = useState<FormValues | null>(null);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your full name.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your contact phone number.";
    } else if (!/^[0-9+() -]{7,16}$/.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid phone number (e.g. 0300 1234567).";
    }

    if (formData.email.trim() && !/^\S+@\S+\.\S+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please write your message or order details.";
    } else if (formData.message.trim().length < 5) {
      newErrors.message = "Message must be at least 5 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Form validated successfully. Note: We intentionally do NOT pretend that
      // an automated backend email was dispatched since this is a home bakery.
      // Instead, we give the user the pre-filled WhatsApp handoff.
      setValidatedData({ ...formData });
    } else {
      setValidatedData(null);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const generateWhatsAppUrlFromForm = (data: FormValues) => {
    const text = `Hello ${BAKERY_NAME}! My name is ${data.name}.
Inquiry: ${data.inquiryType}
Contact: ${data.phone}${data.email ? ` | ${data.email}` : ""}
Details: ${data.message}`;
    return `https://wa.me/${BAKERY_PHONE_RAW}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="w-full bg-[#FFF8F0] min-h-screen py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FBE3D9] text-[#6B4226] text-xs sm:text-sm font-semibold tracking-wide border border-[#E07856]/20 mb-4">
            <MessageCircle className="w-4 h-4 text-[#E07856]" />
            <span>We&apos;re Here To Help</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#6B4226] mb-4">
            Contact & Orders
          </h1>
          <p className="text-base sm:text-lg text-[#2E211A]/80 leading-relaxed">
            Have a question, want to order a cake, or need custom party catering?
            Reach out through WhatsApp, give us a call, or fill in the details below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Information Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#FBE3D9] shadow-sm space-y-6">
              <h2 className="text-2xl font-bold text-[#6B4226]">
                Bakery Details
              </h2>

              <div className="space-y-5">
                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#FBE3D9] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 text-[#6B4226]" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#E07856]">
                      Location
                    </h3>
                    <p className="text-sm font-semibold text-[#2E211A] mt-0.5">
                      {BAKERY_ADDRESS}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#FBE3D9] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-5 h-5 text-[#6B4226]" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#E07856]">
                      Phone Call
                    </h3>
                    <a
                      href="tel:03001234567"
                      className="text-base font-bold text-[#6B4226] hover:text-[#E07856] transition-colors mt-0.5 block"
                      id="contact-info-phone-link"
                    >
                      {BAKERY_PHONE_DISPLAY}
                    </a>
                    <span className="text-xs text-[#2E211A]/70">
                      Standard mobile line
                    </span>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#FBE3D9] flex items-center justify-center shrink-0 mt-0.5">
                    <MessageCircle className="w-5 h-5 text-[#25D366]" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#E07856]">
                      WhatsApp Direct
                    </h3>
                    <a
                      href={getWhatsAppOrderUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-bold text-[#2E211A] hover:text-[#E07856] transition-colors mt-0.5 block"
                      id="contact-info-whatsapp-link"
                    >
                      {BAKERY_PHONE_DISPLAY}
                    </a>
                    <span className="text-xs text-[#2E211A]/70">
                      Fastest response for orders
                    </span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#FBE3D9] flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-5 h-5 text-[#6B4226]" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#E07856]">
                      Email
                    </h3>
                    <a
                      href={`mailto:${BAKERY_EMAIL}`}
                      className="text-sm font-semibold text-[#2E211A] hover:text-[#E07856] transition-colors mt-0.5 block"
                      id="contact-info-email-link"
                    >
                      {BAKERY_EMAIL}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#FBE3D9] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-5 h-5 text-[#6B4226]" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#E07856]">
                      Operating Hours
                    </h3>
                    <p className="text-sm font-semibold text-[#2E211A] mt-0.5">
                      {BAKERY_HOURS}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Instant WhatsApp banner */}
            <div className="bg-[#6B4226] text-[#FFF8F0] p-6 rounded-3xl shadow-sm space-y-3">
              <h3 className="text-lg font-bold">Need a fast response?</h3>
              <p className="text-xs sm:text-sm text-[#FFF8F0]/80 leading-relaxed">
                We handle our orders and customer support directly through WhatsApp.
                Send us a message for immediate confirmation!
              </p>
              <a
                href={getWhatsAppOrderUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#E07856] text-[#FFF8F0] text-sm font-semibold hover:bg-[#D26442] transition-colors"
                id="contact-instant-whatsapp-btn"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Contact & Order Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-10 rounded-3xl border border-[#FBE3D9] shadow-sm">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#6B4226]">
                  Order Inquiry & Message Form
                </h2>
                <p className="text-sm text-[#2E211A]/80 mt-1">
                  Fill out your inquiry below. All required fields are validated.
                </p>
              </div>

              {validatedData ? (
                <div
                  id="form-validation-success"
                  className="bg-[#FBE3D9]/50 border-2 border-[#E07856]/40 rounded-2xl p-6 space-y-4"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#E07856] shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-lg font-bold text-[#6B4226]">
                        Form Validated Successfully!
                      </h3>
                      <p className="text-sm text-[#2E211A]/85 mt-1 leading-relaxed">
                        Thank you, <span className="font-semibold">{validatedData.name}</span>.
                        As a boutique home bakery, we do not store customer records on automated web servers.
                        Instead, your order inquiry is ready to be sent directly to our baker via WhatsApp:
                      </p>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-[#FBE3D9] text-xs text-[#2E211A]/80 space-y-1">
                    <p><span className="font-semibold text-[#6B4226]">Inquiry Type:</span> {validatedData.inquiryType}</p>
                    <p><span className="font-semibold text-[#6B4226]">Contact Phone:</span> {validatedData.phone}</p>
                    <p><span className="font-semibold text-[#6B4226]">Details:</span> {validatedData.message}</p>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <a
                      href={generateWhatsAppUrlFromForm(validatedData)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#6B4226] text-[#FFF8F0] font-semibold text-sm hover:bg-[#54331C] shadow-sm transition-all"
                      id="forward-to-whatsapp-btn"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Send Message to Baker via WhatsApp</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    <button
                      type="button"
                      onClick={() => setValidatedData(null)}
                      className="inline-flex items-center justify-center px-4 py-3 rounded-full border border-[#6B4226]/30 text-[#6B4226] text-xs font-semibold hover:bg-gray-50 transition-colors"
                      id="reset-form-btn"
                    >
                      Edit Form
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5" id="contact-form">
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-sm font-semibold text-[#6B4226] mb-1.5"
                    >
                      Full Name <span className="text-[#E07856]">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Fatima Khan"
                      className={`w-full px-4 py-3 rounded-xl border bg-[#FFF8F0]/30 text-[#2E211A] placeholder-[#2E211A]/40 text-sm transition-colors ${
                        errors.name
                          ? "border-red-500 bg-red-50/30"
                          : "border-[#FBE3D9] focus:border-[#E07856]"
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1 font-medium" id="name-error">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Phone & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="block text-sm font-semibold text-[#6B4226] mb-1.5"
                      >
                        Phone Number <span className="text-[#E07856]">*</span>
                      </label>
                      <input
                        type="tel"
                        id="contact-phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 0300 1234567"
                        className={`w-full px-4 py-3 rounded-xl border bg-[#FFF8F0]/30 text-[#2E211A] placeholder-[#2E211A]/40 text-sm transition-colors ${
                          errors.phone
                            ? "border-red-500 bg-red-50/30"
                            : "border-[#FBE3D9] focus:border-[#E07856]"
                        }`}
                      />
                      {errors.phone && (
                        <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1 font-medium" id="phone-error">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-sm font-semibold text-[#6B4226] mb-1.5"
                      >
                        Email (Optional)
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. yourname@example.com"
                        className={`w-full px-4 py-3 rounded-xl border bg-[#FFF8F0]/30 text-[#2E211A] placeholder-[#2E211A]/40 text-sm transition-colors ${
                          errors.email
                            ? "border-red-500 bg-red-50/30"
                            : "border-[#FBE3D9] focus:border-[#E07856]"
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1 font-medium" id="email-error">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Inquiry Type */}
                  <div>
                    <label
                      htmlFor="contact-inquiryType"
                      className="block text-sm font-semibold text-[#6B4226] mb-1.5"
                    >
                      Inquiry Category
                    </label>
                    <select
                      id="contact-inquiryType"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-[#FBE3D9] bg-[#FFF8F0]/30 text-[#2E211A] text-sm focus:border-[#E07856] transition-colors"
                    >
                      <option value="Custom Cake Order">Custom Birthday / Celebration Cake</option>
                      <option value="Menu Item Order">Regular Menu Item Order</option>
                      <option value="Bulk Party Order">Party / Event Bulk Order</option>
                      <option value="General Question">General Inquiry / Delivery Questions</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-sm font-semibold text-[#6B4226] mb-1.5"
                    >
                      Message or Order Details <span className="text-[#E07856]">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please specify cake flavour, date of event, serving size, or design details..."
                      className={`w-full px-4 py-3 rounded-xl border bg-[#FFF8F0]/30 text-[#2E211A] placeholder-[#2E211A]/40 text-sm transition-colors ${
                        errors.message
                          ? "border-red-500 bg-red-50/30"
                          : "border-[#FBE3D9] focus:border-[#E07856]"
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1 font-medium" id="message-error">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#6B4226] text-[#FFF8F0] font-semibold text-sm hover:bg-[#54331C] active:scale-95 shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#E07856]"
                      id="contact-submit-btn"
                    >
                      <Send className="w-4 h-4" />
                      <span>Validate & Proceed</span>
                    </button>
                    <p className="text-xs text-[#2E211A]/60 mt-2">
                      * Validates your details and prepares your inquiry for direct WhatsApp ordering with our baker.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
