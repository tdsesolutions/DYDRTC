"use client";

import Link from "next/link";
import { ArrowRight, ClipboardList, Users, FileCheck, Phone, Clock, ChevronDown, ChevronUp, AlertCircle } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { useState } from "react";

const faqs = [
  {
    question: "What is the first step in the admissions process?",
    answer: "The first step is to contact our admissions team to discuss your situation and determine if our programs might be a good fit. We'll ask about the individual's needs, current situation, and what services you're seeking. This initial conversation helps us understand how we might help.",
  },
  {
    question: "How long does the admissions process take?",
    answer: "The timeline varies based on bed availability, the complexity of the case, and how quickly needed documentation can be provided. Emergency placements may be expedited when safety is a concern. Typically, the process takes 1-2 weeks from initial inquiry to admission.",
  },
  {
    question: "What documents are needed for admission?",
    answer: "Required documentation typically includes: birth certificate, social security card, insurance information, relevant records, current medications, educational records, legal/custody documentation, evaluations, and any relevant court orders. Our admissions team provides a complete checklist.",
  },
  {
    question: "Do you accept emergency placements?",
    answer: "Yes, when bed availability permits, we can accommodate emergency placements for situations involving immediate safety concerns or crisis. Emergency placements still require essential documentation but may be processed more quickly.",
  },
  {
    question: "What happens after admission?",
    answer: "Following admission, the individual undergoes a comprehensive assessment process. Our treatment team develops an individualized care plan, and we coordinate with families and referral sources to ensure continuity of care. Family communication begins immediately.",
  },
];

export default function AdmissionsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
    consent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form handling placeholder
    alert("Form submitted (placeholder - no backend connected)");
  };

  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-[#17375E]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="max-w-3xl">
              <p className="text-[#C6A15B] text-sm font-medium tracking-widest uppercase mb-4">
                Admissions
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
                Begin the journey toward healing.
              </h1>
              <p className="text-lg lg:text-xl text-white/70 leading-relaxed">
                Our admissions team is here to guide you through every step of the process 
                with compassion and expertise.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Admissions Overview */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#17375E] mb-6">
                Our Admissions Philosophy
              </h2>
              <p className="text-lg text-[#4A4A4A] leading-relaxed">
                We understand that seeking residential treatment is a significant decision. 
                Our admissions process is designed to be thorough yet compassionate, ensuring 
                that our programs can meet the needs of each individual while providing support 
                to families during a challenging time.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-24 lg:py-32 bg-[#F5F5F5]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#17375E] mb-4">
                Who We Serve
              </h2>
              <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto">
                We work with children and adolescents who have emotional, behavioral, and mental health needs 
                requiring specialized residential care.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Residential Treatment",
                desc: "Youth ages 5-17 with emotional and behavioral challenges requiring therapeutic residential care.",
              },
              {
                title: "Life Skills Development",
                desc: "Integrated programming for all residents focused on building daily living competencies.",
              },
              {
                title: "Transition & Aftercare",
                desc: "Comprehensive discharge planning and aftercare support for sustained success.",
              },
            ].map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.15}>
                <div className="bg-white rounded-xl p-8 border border-[#E8E8E8] h-full">
                  <h3 className="text-xl font-semibold text-[#17375E] mb-3">{item.title}</h3>
                  <p className="text-[#4A4A4A]">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24 lg:py-32 bg-[#17375E]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-4">
                The Admissions Process
              </h2>
              <p className="text-lg text-white/70 max-w-2xl mx-auto">
                A step-by-step guide to joining our programs.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Phone,
                step: "1",
                title: "Initial Inquiry",
                desc: "Contact our admissions team to discuss needs and program fit.",
              },
              {
                icon: ClipboardList,
                step: "2",
                title: "Assessment",
                desc: "Comprehensive review of emotional, behavioral, and educational needs.",
              },
              {
                icon: FileCheck,
                step: "3",
                title: "Documentation",
                desc: "Submission of required records and insurance information.",
              },
              {
                icon: Users,
                step: "4",
                title: "Admission",
                desc: "Placement confirmation and coordinated intake process.",
              },
            ].map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.1}>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 text-center h-full">
                  <div className="w-12 h-12 rounded-full bg-[#1F5D3A] text-white flex items-center justify-center font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-white/60 text-sm">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documentation */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <FadeIn>
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#17375E] mb-6">
                Required Documentation
              </h2>
              <p className="text-lg text-[#4A4A4A] leading-relaxed mb-8">
                To ensure we can provide appropriate care and meet regulatory requirements, 
                we request the following documentation during the admissions process.
              </p>
              <div className="space-y-3">
                {[
                  "Birth certificate or proof of age",
                  "Social security card",
                  "Insurance information and cards",
                  "Relevant records and history",
                  "Current medication list",
                  "Educational records and IEP if applicable",
                  "Psychological or psychiatric evaluations",
                  "Legal/custody documentation",
                  "Court orders or placement documentation",
                  "Immunization records",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-[#4A4A4A]">
                    <FileCheck className="w-5 h-5 text-[#1F5D3A]" />
                    {item}
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div className="bg-[#F5F5F5] rounded-2xl p-8 lg:p-12">
                <h3 className="text-2xl font-semibold text-[#17375E] mb-6">
                  Intake and Assessment
                </h3>
                <p className="text-[#4A4A4A] mb-6">
                  Upon admission, each resident undergoes a comprehensive assessment process:
                </p>
                <ul className="space-y-4">
                  {[
                    "Clinical assessment by therapeutic staff",
                    "Psychosocial evaluation",
                    "Behavioral observation and assessment",
                    "Educational needs evaluation",
                    "Family history and dynamics review",
                    "Initial treatment plan development",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[#4A4A4A]">
                      <Clock className="w-5 h-5 text-[#1F5D3A] mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Family Communication */}
      <section className="py-24 lg:py-32 bg-[#F5F5F5]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#17375E] mb-4">
                  Family Communication During Admission
                </h2>
                <p className="text-lg text-[#4A4A4A]">
                  We believe families are essential partners from day one.
                </p>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm">
                <div className="space-y-6">
                  {[
                    {
                      title: "Immediate Contact",
                      desc: "Families are contacted within 24 hours of admission to confirm placement and provide initial updates.",
                    },
                    {
                      title: "Assessment Updates",
                      desc: "Families receive updates as assessments are completed and the treatment plan is developed.",
                    },
                    {
                      title: "Treatment Planning",
                      desc: "Families are invited to participate in treatment planning meetings and provide input on goals.",
                    },
                    {
                      title: "Ongoing Communication",
                      desc: "Regular updates, scheduled calls, and open lines of communication throughout the stay.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="border-b border-[#E8E8E8] pb-6 last:border-0 last:pb-0">
                      <h3 className="font-semibold text-[#17375E] mb-1">{item.title}</h3>
                      <p className="text-[#4A4A4A]">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#17375E] mb-4">
                Admissions FAQs
              </h2>
              <p className="text-lg text-[#4A4A4A]">
                Common questions about the admissions process.
              </p>
            </div>
          </FadeIn>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <FadeIn key={index} delay={index * 0.05}>
                <div className="bg-[#F5F5F5] rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-[#E8E8E8] transition-colors"
                  >
                    <span className="font-semibold text-[#17375E] pr-8">{faq.question}</span>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-[#1F5D3A] flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#1F5D3A] flex-shrink-0" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6">
                      <p className="text-[#4A4A4A] leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Admissions Form */}
      <section className="py-24 lg:py-32 bg-[#17375E]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mx-auto">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-4">
                  Admissions Inquiry
                </h2>
                <p className="text-lg text-white/70">
                  Fill out the form below and our admissions team will contact you within 24 hours.
                </p>
              </div>
            </FadeIn>

            <FadeIn>
              <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-white/10">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#C6A15B]"
                      placeholder="Full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#C6A15B]"
                        placeholder="email@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#C6A15B]"
                        placeholder="(XXX) XXX-XXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="inquiryType" className="block text-sm font-medium text-white/80 mb-2">
                      Inquiry Type *
                    </label>
                    <select
                      id="inquiryType"
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-[#C6A15B]"
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    >
                      <option value="" className="text-[#17375E]">Select inquiry type</option>
                      <option value="family" className="text-[#17375E]">Family seeking placement</option>
                      <option value="professional" className="text-[#17375E]">Professional referral</option>
                      <option value="cps" className="text-[#17375E]">CPS/agency referral</option>
                      <option value="other" className="text-[#17375E]">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#C6A15B] resize-none"
                      placeholder="Tell us about your situation or questions..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="consent"
                      required
                      className="mt-1 w-4 h-4 rounded border-white/20 bg-white/10 text-[#C6A15B] focus:ring-[#C6A15B]"
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    />
                    <label htmlFor="consent" className="text-sm text-white/60">
                      I consent to being contacted by Defining Your Destiny Youth Center regarding this inquiry. 
                      I understand this form is not for emergencies.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C6A15B] text-white font-medium rounded-full hover:bg-white hover:text-[#17375E] transition-colors"
                  >
                    Submit Inquiry <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="flex items-start gap-2 text-sm text-white/40">
                    <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <p>
                      This form is not monitored for emergencies. If there is an immediate emergency, 
                      call 911 or the appropriate emergency service.
                    </p>
                  </div>
                </div>
              </form>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
