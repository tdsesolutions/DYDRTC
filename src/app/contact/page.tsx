"use client";

import Link from "next/link";
import { ArrowRight, Phone, Mail, MapPin, Clock, AlertCircle } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { useState } from "react";

const contactOptions = [
  {
    icon: Phone,
    title: "Phone",
    content: "(XXX) XXX-XXXX",
    description: "Monday-Friday, 8am-5pm",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@aplaceformertc.org",
    description: "We respond within 24 hours",
  },
  {
    icon: MapPin,
    title: "Address",
    content: "[Address Coming Soon]",
    description: "Location details to be announced",
  },
  {
    icon: Clock,
    title: "Hours",
    content: "[Hours Coming Soon]",
    description: "Administrative office hours",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [referralData, setReferralData] = useState({
    referralName: "",
    organization: "",
    childAge: "",
    programInterest: "",
    urgency: "",
    contactMethod: "",
    details: "",
  });

  const [activeForm, setActiveForm] = useState<"general" | "referral">("general");

  const handleGeneralSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("General inquiry submitted (placeholder - no backend connected)");
  };

  const handleReferralSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Referral inquiry submitted (placeholder - no backend connected)");
  };

  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-[#1E1B14]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="max-w-3xl">
              <p className="text-[#5A7A7A] text-sm font-medium tracking-widest uppercase mb-4">
                Contact Us
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
                We are here to help.
              </h1>
              <p className="text-lg lg:text-xl text-white/70 leading-relaxed">
                Whether you have questions about our programs, want to schedule a tour, 
                or need assistance with a referral, our team is ready to assist you.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-24 lg:py-32 bg-[#FAF9F7]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#1E1B14] mb-4">
                How to Reach Us
              </h2>
              <p className="text-lg text-[#4A4A4A]">
                Multiple ways to connect with our team.
              </p>
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactOptions.map((option, index) => (
              <FadeIn key={option.title} delay={index * 0.1}>
                <div className="bg-white rounded-xl p-8 border border-[#E8E2D9] text-center h-full">
                  <div className="w-14 h-14 rounded-full bg-[#5A7A7A]/10 flex items-center justify-center mx-auto mb-4">
                    <option.icon className="w-7 h-7 text-[#5A7A7A]" />
                  </div>
                  <h3 className="font-semibold text-[#1E1B14] mb-1">{option.title}</h3>
                  <p className="text-[#1E1B14] font-medium mb-1">{option.content}</p>
                  <p className="text-sm text-[#4A4A4A]">{option.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Forms Section */}
      <section className="py-24 lg:py-32 bg-[#F5F3EF]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#1E1B14] mb-4">
                  Send Us a Message
                </h2>
                <p className="text-lg text-[#4A4A4A]">
                  Choose the form that best fits your inquiry.
                </p>
              </div>
            </FadeIn>

            {/* Form Toggle */}
            <FadeIn>
              <div className="flex justify-center mb-8">
                <div className="bg-white rounded-full p-1 shadow-sm inline-flex">
                  <button
                    onClick={() => setActiveForm("general")}
                    className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${
                      activeForm === "general"
                        ? "bg-[#1E1B14] text-white"
                        : "text-[#4A4A4A] hover:text-[#1E1B14]"
                    }`}
                  >
                    General Inquiry
                  </button>
                  <button
                    onClick={() => setActiveForm("referral")}
                    className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${
                      activeForm === "referral"
                        ? "bg-[#1E1B14] text-white"
                        : "text-[#4A4A4A] hover:text-[#1E1B14]"
                    }`}
                  >
                    Referral Inquiry
                  </button>
                </div>
              </div>
            </FadeIn>

            {/* General Inquiry Form */}
            {activeForm === "general" && (
              <FadeIn>
                <form onSubmit={handleGeneralSubmit} className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm">
                  <h3 className="text-xl font-semibold text-[#1E1B14] mb-6">General Inquiry</h3>
                  <div className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="general-name" className="block text-sm font-medium text-[#1E1B14] mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          id="general-name"
                          required
                          className="w-full px-4 py-3 border border-[#E8E2D9] rounded-lg focus:outline-none focus:border-[#5A7A7A]"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                      <div>
                        <label htmlFor="general-email" className="block text-sm font-medium text-[#1E1B14] mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="general-email"
                          required
                          className="w-full px-4 py-3 border border-[#E8E2D9] rounded-lg focus:outline-none focus:border-[#5A7A7A]"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="general-phone" className="block text-sm font-medium text-[#1E1B14] mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="general-phone"
                        className="w-full px-4 py-3 border border-[#E8E2D9] rounded-lg focus:outline-none focus:border-[#5A7A7A]"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>

                    <div>
                      <label htmlFor="general-subject" className="block text-sm font-medium text-[#1E1B14] mb-2">
                        Subject *
                      </label>
                      <select
                        id="general-subject"
                        required
                        className="w-full px-4 py-3 border border-[#E8E2D9] rounded-lg focus:outline-none focus:border-[#5A7A7A]"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      >
                        <option value="">Select a subject</option>
                        <option value="program-info">Program Information</option>
                        <option value="tour">Schedule a Tour</option>
                        <option value="careers">Careers</option>
                        <option value="media">Media Inquiry</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="general-message" className="block text-sm font-medium text-[#1E1B14] mb-2">
                        Message *
                      </label>
                      <textarea
                        id="general-message"
                        rows={5}
                        required
                        className="w-full px-4 py-3 border border-[#E8E2D9] rounded-lg focus:outline-none focus:border-[#5A7A7A] resize-none"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1E1B14] text-white font-medium rounded-full hover:bg-[#4A4A4A] transition-colors"
                    >
                      Send Message <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              </FadeIn>
            )}

            {/* Referral Inquiry Form */}
            {activeForm === "referral" && (
              <FadeIn>
                <form onSubmit={handleReferralSubmit} className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm">
                  <h3 className="text-xl font-semibold text-[#1E1B14] mb-6">Referral Inquiry</h3>
                  <div className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="referral-name" className="block text-sm font-medium text-[#1E1B14] mb-2">
                          Referral Source Name *
                        </label>
                        <input
                          type="text"
                          id="referral-name"
                          required
                          className="w-full px-4 py-3 border border-[#E8E2D9] rounded-lg focus:outline-none focus:border-[#5A7A7A]"
                          value={referralData.referralName}
                          onChange={(e) => setReferralData({ ...referralData, referralName: e.target.value })}
                        />
                      </div>
                      <div>
                        <label htmlFor="organization" className="block text-sm font-medium text-[#1E1B14] mb-2">
                          Organization *
                        </label>
                        <input
                          type="text"
                          id="organization"
                          required
                          className="w-full px-4 py-3 border border-[#E8E2D9] rounded-lg focus:outline-none focus:border-[#5A7A7A]"
                          value={referralData.organization}
                          onChange={(e) => setReferralData({ ...referralData, organization: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="child-age" className="block text-sm font-medium text-[#1E1B14] mb-2">
                          Child's Age Range *
                        </label>
                        <select
                          id="child-age"
                          required
                          className="w-full px-4 py-3 border border-[#E8E2D9] rounded-lg focus:outline-none focus:border-[#5A7A7A]"
                          value={referralData.childAge}
                          onChange={(e) => setReferralData({ ...referralData, childAge: e.target.value })}
                        >
                          <option value="">Select age range</option>
                          <option value="5-8">5-8 years</option>
                          <option value="9-12">9-12 years</option>
                          <option value="13-15">13-15 years</option>
                          <option value="16-17">16-17 years</option>
                          <option value="18-21">18-21 years</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="program-interest" className="block text-sm font-medium text-[#1E1B14] mb-2">
                          Program of Interest *
                        </label>
                        <select
                          id="program-interest"
                          required
                          className="w-full px-4 py-3 border border-[#E8E2D9] rounded-lg focus:outline-none focus:border-[#5A7A7A]"
                          value={referralData.programInterest}
                          onChange={(e) => setReferralData({ ...referralData, programInterest: e.target.value })}
                        >
                          <option value="">Select program</option>
                          <option value="pmn">Primary Medical Needs RTC</option>
                          <option value="sil">Supervised Independent Living</option>
                          <option value="tlp">Transitional Living Program</option>
                          <option value="unsure">Unsure - Need Guidance</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="urgency" className="block text-sm font-medium text-[#1E1B14] mb-2">
                          Urgency Level
                        </label>
                        <select
                          id="urgency"
                          className="w-full px-4 py-3 border border-[#E8E2D9] rounded-lg focus:outline-none focus:border-[#5A7A7A]"
                          value={referralData.urgency}
                          onChange={(e) => setReferralData({ ...referralData, urgency: e.target.value })}
                        >
                          <option value="">Select urgency</option>
                          <option value="emergency">Emergency/Crisis</option>
                          <option value="urgent">Urgent (within 1 week)</option>
                          <option value="planned">Planned (within 1 month)</option>
                          <option value="exploratory">Exploratory/Future</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="contact-method" className="block text-sm font-medium text-[#1E1B14] mb-2">
                          Best Contact Method
                        </label>
                        <select
                          id="contact-method"
                          className="w-full px-4 py-3 border border-[#E8E2D9] rounded-lg focus:outline-none focus:border-[#5A7A7A]"
                          value={referralData.contactMethod}
                          onChange={(e) => setReferralData({ ...referralData, contactMethod: e.target.value })}
                        >
                          <option value="">Select method</option>
                          <option value="phone">Phone</option>
                          <option value="email">Email</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="referral-details" className="block text-sm font-medium text-[#1E1B14] mb-2">
                        Brief Description of Needs
                      </label>
                      <textarea
                        id="referral-details"
                        rows={4}
                        className="w-full px-4 py-3 border border-[#E8E2D9] rounded-lg focus:outline-none focus:border-[#5A7A7A] resize-none"
                        placeholder="Please provide a brief overview of the child's needs, current situation, and any relevant information..."
                        value={referralData.details}
                        onChange={(e) => setReferralData({ ...referralData, details: e.target.value })}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1E1B14] text-white font-medium rounded-full hover:bg-[#4A4A4A] transition-colors"
                    >
                      Submit Referral Inquiry <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              </FadeIn>
            )}

            {/* Emergency Disclaimer */}
            <FadeIn>
              <div className="mt-8 flex items-start gap-3 text-sm text-[#4A4A4A]">
                <AlertCircle className="w-5 h-5 text-[#5A7A7A] mt-0.5 flex-shrink-0" />
                <p>
                  <strong>Important:</strong> This website and contact forms are not monitored for emergencies. 
                  If there is an immediate emergency, please call 911 or your local emergency services. 
                  For after-hours crisis support, contact your local crisis hotline or emergency services.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-24 lg:py-32 bg-[#1E1B14]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-4">
                Our Location
              </h2>
              <p className="text-lg text-white/70">
                [Map and location details coming soon]
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="aspect-[21/9] bg-[#2A2620] rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-[#5A7A7A] mx-auto mb-4" />
                <p className="text-white/60">[Interactive Map Placeholder]</p>
                <p className="text-white/40 text-sm mt-2">Location details will be added when available</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#5A7A7A]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
          <FadeIn>
            <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-6">
              Ready to Take the Next Step?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Learn more about our programs and how we can support you or your client.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/programs"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#1E1B14] font-medium rounded-full hover:bg-[#E8E2D9] transition-colors"
              >
                Explore Programs <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/admissions"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white font-medium rounded-full hover:bg-white/10 transition-colors"
              >
                Admissions Information
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
