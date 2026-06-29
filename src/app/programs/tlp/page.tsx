"use client";

import Link from "next/link";
import { ArrowRight, GraduationCap, Home, Heart, ChevronDown, ChevronUp } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { useState } from "react";

const faqs = [
  {
    question: "When does discharge planning begin?",
    answer: "Discharge planning begins at admission. We start identifying aftercare needs, potential community resources, and transition goals from day one to ensure a smooth and successful discharge when the time comes.",
  },
  {
    question: "What is included in aftercare planning?",
    answer: "Aftercare planning includes coordination of ongoing therapy, educational planning, community resource linkage, family support planning, crisis prevention strategies, and follow-up care arrangements.",
  },
  {
    question: "How do you ensure a successful transition?",
    answer: "We ensure successful transitions through comprehensive planning, gradual step-down when appropriate, thorough communication with receiving providers, family preparation, and post-discharge follow-up support.",
  },
  {
    question: "What follow-up support is provided after discharge?",
    answer: "We provide post-discharge follow-up calls, ongoing communication with families and providers, crisis support availability, and alumni resources to support continued success.",
  },
  {
    question: "Can residents return if they need additional support?",
    answer: "Yes, former residents may be readmitted if they need additional residential treatment, subject to bed availability and clinical assessment. We also maintain relationships with alumni to provide ongoing support.",
  },
];

export default function TransitionAftercarePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-[#17375E]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="max-w-3xl">
              <p className="text-[#C6A15B] text-sm font-medium tracking-widest uppercase mb-4">
                Transition Program
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
                Transition & Aftercare
              </h1>
              <p className="text-lg lg:text-xl text-white/70 leading-relaxed">
                Comprehensive discharge planning and aftercare support to ensure sustained 
                success after residential treatment.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn direction="left">
              <div className="aspect-[4/3] bg-[#F5F5F5] rounded-2xl overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-[#9A9A9A]">
                  [Transition Planning Image]
                </div>
              </div>
            </FadeIn>
            
            <div>
              <FadeIn direction="right">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#17375E] mb-6">
                  Planning for Continued Success
                </h2>
                <div className="space-y-4 text-[#4A4A4A] leading-relaxed">
                  <p>
                    Transition & Aftercare represents a critical phase of our residential treatment 
                    program—ensuring that the progress made during residential care continues 
                    after discharge.
                  </p>
                  <p>
                    We recognize that discharge from residential treatment is not an ending but 
                    a transition to the next phase of care. Our comprehensive discharge planning 
                    process ensures that each resident leaves with a solid plan for continued 
                    support and success.
                  </p>
                  <p>
                    Through careful coordination with families, schools, community providers, 
                    and other supports, we create a seamless transition that maintains therapeutic 
                    gains and promotes continued growth.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Discharge Planning Process */}
      <section className="py-24 lg:py-32 bg-[#F5F5F5]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#17375E] mb-4">
                The Discharge Planning Process
              </h2>
              <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto">
                A structured approach that begins at admission and continues through discharge and beyond.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Assessment", desc: "Identifying aftercare needs and potential resources" },
              { step: "2", title: "Planning", desc: "Developing a comprehensive discharge plan with the team" },
              { step: "3", title: "Coordination", desc: "Connecting with community providers and supports" },
              { step: "4", title: "Transition", desc: "Executing the plan with ongoing follow-up support" },
            ].map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.1}>
                <div className="bg-white rounded-xl p-6 text-center h-full">
                  <div className="w-12 h-12 rounded-full bg-[#1F5D3A] text-white flex items-center justify-center font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-[#17375E] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#4A4A4A]">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Core Components */}
      <section className="py-24 lg:py-32 bg-[#17375E]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-4">
                Key Components
              </h2>
              <p className="text-lg text-white/70 max-w-2xl mx-auto">
                Essential elements of successful transition and aftercare planning.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Home,
                title: "Housing Stability",
                desc: "Ensuring a safe, stable living environment post-discharge.",
              },
              {
                icon: GraduationCap,
                title: "Educational Planning",
                desc: "Coordinating school re-enrollment or educational transitions.",
              },
              {
                icon: Heart,
                title: "Ongoing Therapy",
                desc: "Connecting with outpatient therapists and community mental health services.",
              },
              {
                icon: Home,
                title: "Family Support",
                desc: "Preparing families to maintain therapeutic gains at home.",
              },
              {
                icon: GraduationCap,
                title: "Community Resources",
                desc: "Linking with community programs, mentors, and support services.",
              },
              {
                icon: Heart,
                title: "Crisis Planning",
                desc: "Developing crisis prevention plans and emergency contacts.",
              },
            ].map((component, index) => (
              <FadeIn key={component.title} delay={index * 0.1}>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 h-full">
                  <component.icon className="w-10 h-10 text-[#C6A15B] mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{component.title}</h3>
                  <p className="text-white/60">{component.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#17375E] mb-4">
                Discharge Planning Timeline
              </h2>
              <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto">
                Key milestones in the transition planning process.
              </p>
            </div>
          </FadeIn>

          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <div className="space-y-8">
                {[
                  {
                    time: "At Admission",
                    items: ["Initial aftercare needs assessment", "Identify potential resources", "Begin family preparation"],
                  },
                  {
                    time: "30 Days Before Discharge",
                    items: ["Formal discharge planning begins", "Contact community providers", "Schedule follow-up appointments"],
                  },
                  {
                    time: "14 Days Before Discharge",
                    items: ["Finalize aftercare arrangements", "Complete discharge summary", "Family transition planning session"],
                  },
                  {
                    time: "At Discharge",
                    items: ["Provide all documentation", "Ensure follow-up appointments are scheduled", "Crisis plan in place"],
                  },
                  {
                    time: "Post-Discharge",
                    items: ["Follow-up calls at 1 week, 1 month, 3 months", "Ongoing availability for support", "Alumni resources"],
                  },
                ].map((phase, index) => (
                  <div key={phase.time} className="flex gap-6">
                    <div className="flex-shrink-0 w-32 text-right">
                      <span className="font-semibold text-[#1F5D3A]">{phase.time}</span>
                    </div>
                    <div className="flex-1 pb-8 border-l-2 border-[#E8E8E8] pl-6 last:pb-0 last:border-0">
                      <ul className="space-y-2">
                        {phase.items.map((item) => (
                          <li key={item} className="text-[#4A4A4A]">{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Aftercare Support */}
      <section className="py-24 lg:py-32 bg-[#F5F5F5]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <FadeIn>
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#17375E] mb-6">
                  Aftercare Support
                </h2>
                <p className="text-lg text-[#4A4A4A] leading-relaxed mb-6">
                  Our commitment to residents does not end at discharge. We provide ongoing 
                  support to ensure continued success.
                </p>
                <div className="space-y-4">
                  {[
                    "Scheduled follow-up calls",
                    "24/7 crisis line availability",
                    "Ongoing family support",
                    "Alumni events and resources",
                    "Re-admission if needed",
                    "Continued advocacy",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 text-[#4A4A4A]">
                      <Heart className="w-5 h-5 text-[#1F5D3A] mt-0.5 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>

            <FadeIn direction="right">
              <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm">
                <h3 className="text-2xl font-semibold text-[#17375E] mb-6">
                  Family Preparation
                </h3>
                <p className="text-[#4A4A4A] mb-6">
                  We work closely with families to prepare them for the transition home 
                  and ongoing support of their child.
                </p>
                <ul className="space-y-3">
                  {[
                    "Education about maintaining therapeutic gains",
                    "Strategies for supporting continued growth",
                    "Crisis prevention and response planning",
                    "Communication with community providers",
                    "Resource connections for ongoing support",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-[#4A4A4A]">
                      <div className="w-2 h-2 rounded-full bg-[#1F5D3A]" />
                      {item}
                    </li>
                  ))}
                </ul>
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
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-[#4A4A4A]">
                Common questions about our Transition & Aftercare program.
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

      {/* CTA */}
      <section className="py-20 bg-[#1F5D3A]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
          <FadeIn>
            <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-6">
              Ready for the Next Step?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Contact us to learn more about how our Transition & Aftercare planning 
              supports sustained success.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/admissions"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#C6A15B] text-white font-medium rounded-full hover:bg-white hover:text-[#17375E] transition-colors"
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
