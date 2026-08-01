"use client";

import Image from "next/image";
import { ArrowRight, AlertCircle } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    consent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent (placeholder - no backend connected)");
  };

  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-[#17375E] to-[#1F5D3A]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(198,161,91,0.1),_transparent_50%)]" />
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex items-center justify-between">
            <FadeIn>
              <div className="max-w-3xl">
                <p className="text-[#C6A15B] text-sm font-medium tracking-widest uppercase mb-4">
                  Contact Us
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
                  We&apos;re here to help.
                </h1>
                <p className="text-lg lg:text-xl text-white/70 leading-relaxed">
                  Reach out with questions, referrals, or to learn more about our programs. 
                  Our team is ready to assist you.
                </p>
              </div>
            </FadeIn>
            <div className="hidden lg:flex w-[45%] h-[400px] items-center justify-center">
              <div className="relative w-[800px] h-[960px] max-w-full max-h-full">
                <Image
                  src="/images/DYDlogo1.png"
                  alt="Defining Your Destiny"
                  fill
                  className="object-contain object-center"
                  priority
                  sizes="800px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mx-auto">
            {/* Contact Form */}
            <FadeIn>
              <div className="bg-[#F5F5F5] rounded-2xl p-8 lg:p-12">
                <h3 className="text-2xl font-semibold text-[#17375E] mb-6">
                  Send Us a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#4A4A4A] mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full px-4 py-3 bg-white border border-[#E8E8E8] rounded-lg text-[#17375E] placeholder-[#4A4A4A]/40 focus:outline-none focus:border-[#1F5D3A]"
                      placeholder="Full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#4A4A4A] mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="w-full px-4 py-3 bg-white border border-[#E8E8E8] rounded-lg text-[#17375E] placeholder-[#4A4A4A]/40 focus:outline-none focus:border-[#1F5D3A]"
                        placeholder="email@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-[#4A4A4A] mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-3 bg-white border border-[#E8E8E8] rounded-lg text-[#17375E] placeholder-[#4A4A4A]/40 focus:outline-none focus:border-[#1F5D3A]"
                        placeholder="(XXX) XXX-XXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-[#4A4A4A] mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      required
                      className="w-full px-4 py-3 bg-white border border-[#E8E8E8] rounded-lg text-[#17375E] focus:outline-none focus:border-[#1F5D3A]"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    >
                      <option value="">Select a subject</option>
                      <option value="admissions">Admissions Inquiry</option>
                      <option value="referral">Professional Referral</option>
                      <option value="information">General Information</option>
                      <option value="careers">Careers</option>
                      <option value="donation">Donation / Ways to Give</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#4A4A4A] mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-white border border-[#E8E8E8] rounded-lg text-[#17375E] placeholder-[#4A4A4A]/40 focus:outline-none focus:border-[#1F5D3A] resize-none"
                      placeholder="How can we help you?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="consent"
                      required
                      className="mt-1 w-4 h-4 rounded border-[#E8E8E8] bg-white text-[#1F5D3A] focus:ring-[#1F5D3A]"
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    />
                    <label htmlFor="consent" className="text-sm text-[#4A4A4A]">
                      I consent to being contacted by Defining Your Destiny Youth Center regarding my inquiry. 
                      I understand this form is not for emergencies.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1F5D3A] text-white font-medium rounded-full hover:bg-[#17375E] transition-colors"
                  >
                    Send Message <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="flex items-start gap-2 text-sm text-[#4A4A4A]/60">
                    <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <p>
                      This form is not monitored for emergencies. If there is an immediate emergency, 
                      call 911 or the appropriate emergency service.
                    </p>
                  </div>
                </form>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
