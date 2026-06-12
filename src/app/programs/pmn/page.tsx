"use client";

import Link from "next/link";
import { ArrowRight, Shield, Heart, Users, Stethoscope, ClipboardList, ChevronDown, ChevronUp } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { useState } from "react";

const faqs = [
  {
    question: "What types of medical needs can you accommodate?",
    answer: "Our Primary Medical Needs program is designed to support youth with a range of complex medical conditions including, but not limited to, diabetes management, seizure disorders, feeding tube dependence, mobility impairments, respiratory support needs, and other conditions requiring skilled nursing oversight. We conduct individualized assessments to ensure we can safely meet each resident's specific medical needs.",
  },
  {
    question: "What is the staff-to-resident ratio?",
    answer: "We maintain appropriate staffing ratios based on the acuity needs of our residents. Our team includes registered nurses, licensed vocational nurses, direct care professionals, and behavioral specialists. Specific ratios are determined by individual care plans and regulatory requirements.",
  },
  {
    question: "How do you handle behavioral challenges?",
    answer: "We utilize trauma-informed, evidence-based behavioral interventions tailored to each resident. Our approach emphasizes positive behavior support, skill-building, and de-escalation techniques. Each resident has an individualized behavior support plan developed by our clinical team.",
  },
  {
    question: "What is the typical length of stay?",
    answer: "Length of stay varies based on individual treatment goals and progress. Some residents may stay for several months, while others may benefit from longer-term placement. We conduct regular treatment team reviews to assess progress and adjust care plans accordingly.",
  },
  {
    question: "How do you involve families in treatment?",
    answer: "Family partnership is central to our approach. We facilitate regular family therapy sessions, provide updates on treatment progress, encourage visitation when appropriate, and involve families in treatment planning and discharge preparation.",
  },
];

export default function PMNPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-[#1E1B14]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="max-w-3xl">
              <p className="text-[#5A7A7A] text-sm font-medium tracking-widest uppercase mb-4">
                Featured Program
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
                Primary Medical Needs Residential Treatment
              </h1>
              <p className="text-lg lg:text-xl text-white/70 leading-relaxed">
                Specialized, comprehensive care for youth with complex medical, behavioral, 
                and developmental needs in a safe, nurturing environment.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-24 lg:py-32 bg-[#FAF9F7]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn direction="left">
              <div className="aspect-[4/3] bg-[#E8E2D9] rounded-2xl overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-[#9A9A9A]">
                  [PMN Program Image]
                </div>
              </div>
            </FadeIn>
            
            <div>
              <FadeIn direction="right">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#1E1B14] mb-6">
                  Comprehensive Care for Complex Needs
                </h2>
                <div className="space-y-4 text-[#4A4A4A] leading-relaxed">
                  <p>
                    Our Primary Medical Needs Residential Treatment Center provides 24-hour, 
                    specialized care for children and adolescents who require medical oversight 
                    alongside behavioral and therapeutic support.
                  </p>
                  <p>
                    We understand that medical complexity often coexists with behavioral and 
                    emotional challenges. Our integrated approach addresses the whole person—medical, 
                    behavioral, educational, and emotional needs—in a coordinated, compassionate manner.
                  </p>
                  <p>
                    Each resident receives an individualized care plan developed by our multidisciplinary 
                    team, ensuring that their unique combination of needs is understood, supported, 
                    and addressed with dignity and expertise.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Support */}
      <section className="py-24 lg:py-32 bg-[#F5F3EF]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#1E1B14] mb-4">
                Who This Program Supports
              </h2>
              <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto">
                Youth ages 5-17 with complex needs requiring specialized residential care.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Medical Complexity",
                items: ["Chronic medical conditions", "Medication management needs", "Specialized dietary requirements", "Mobility considerations"],
              },
              {
                title: "Behavioral Needs",
                items: ["Challenging behaviors", "Emotional dysregulation", "Trauma-related behaviors", "Developmental delays"],
              },
              {
                title: "Therapeutic Support",
                items: ["Individual therapy needs", "Family therapy requirements", "Skills development", "Transition support"],
              },
            ].map((category, index) => (
              <FadeIn key={category.title} delay={index * 0.1}>
                <div className="bg-white rounded-xl p-8 border border-[#E8E2D9]">
                  <h3 className="text-xl font-semibold text-[#1E1B14] mb-4">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-[#4A4A4A]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#5A7A7A]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Medical & Nursing */}
      <section className="py-24 lg:py-32 bg-[#1E1B14]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <FadeIn>
              <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-6">
                Medical and Nursing Oversight
              </h2>
              <p className="text-lg text-white/70 leading-relaxed mb-8">
                Our medical team provides comprehensive oversight to ensure the health and safety 
                of every resident while supporting their overall treatment goals.
              </p>
              <div className="space-y-4">
                {[
                  "24/7 nursing availability for medical needs and emergencies",
                  "Medication administration, monitoring, and management",
                  "Coordination with primary care physicians and specialists",
                  "Regular health assessments and monitoring",
                  "Medical appointment scheduling and transportation",
                  "Medical care plan development and updates",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-white/60">
                    <Stethoscope className="w-5 h-5 text-[#5A7A7A] mt-0.5 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-6">Our Medical Team</h3>
                <div className="space-y-4">
                  {[
                    { role: "Medical Director", desc: "Oversees all medical care and protocols" },
                    { role: "Registered Nurses", desc: "Provide skilled nursing care and medication management" },
                    { role: "Licensed Vocational Nurses", desc: "Support nursing care and resident monitoring" },
                    { role: "Direct Care Staff", desc: "Trained in medical needs and behavioral support" },
                  ].map((member) => (
                    <div key={member.role} className="border-b border-white/10 pb-4 last:border-0">
                      <h4 className="font-medium text-white">{member.role}</h4>
                      <p className="text-sm text-white/60">{member.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Treatment Planning */}
      <section className="py-24 lg:py-32 bg-[#FAF9F7]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#1E1B14] mb-4">
                  Individualized Treatment Planning
                </h2>
                <p className="text-lg text-[#4A4A4A]">
                  Every resident receives a comprehensive, personalized plan developed by our multidisciplinary team.
                </p>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm">
                <div className="space-y-8">
                  {[
                    {
                      step: "1",
                      title: "Comprehensive Assessment",
                      desc: "Thorough evaluation of medical, behavioral, educational, and psychosocial needs upon admission.",
                    },
                    {
                      step: "2",
                      title: "Collaborative Planning",
                      desc: "Treatment team—including medical, nursing, clinical, educational, and family representatives—develops integrated care plan.",
                    },
                    {
                      step: "3",
                      title: "Implementation",
                      desc: "Consistent, coordinated delivery of medical care, therapeutic interventions, and daily living support.",
                    },
                    {
                      step: "4",
                      title: "Ongoing Review",
                      desc: "Regular treatment team meetings to assess progress, adjust goals, and ensure optimal outcomes.",
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-6">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#5A7A7A] text-white flex items-center justify-center font-bold">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-[#1E1B14] mb-1">{item.title}</h3>
                        <p className="text-[#4A4A4A]">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 lg:py-32 bg-[#F5F3EF]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#1E1B14] mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-[#4A4A4A]">
                Common questions about our Primary Medical Needs program.
              </p>
            </div>
          </FadeIn>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <FadeIn key={index} delay={index * 0.05}>
                <div className="bg-white rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-[#FAF9F7] transition-colors"
                  >
                    <span className="font-semibold text-[#1E1B14] pr-8">{faq.question}</span>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-[#5A7A7A] flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#5A7A7A] flex-shrink-0" />
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

      {/* CTA */}
      <section className="py-20 bg-[#5A7A7A]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
          <FadeIn>
            <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-6">
              Learn More About Admission
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Contact our admissions team to discuss whether our Primary Medical Needs program 
              is the right fit for your family or client.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/admissions"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#1E1B14] font-medium rounded-full hover:bg-[#E8E2D9] transition-colors"
              >
                Start a Referral <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white font-medium rounded-full hover:bg-white/10 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
