"use client";

import Link from "next/link";
import Image from "next/image";
import { Shield, Heart, Users, Stethoscope, ClipboardList, ChevronDown, ChevronUp } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { useState } from "react";

const faqs = [
  {
    question: "What types of emotional and behavioral needs can you accommodate?",
    answer: "Our Residential Treatment program is designed to support youth with a range of emotional and behavioral challenges including mood disorders, anxiety, trauma-related behaviors, behavioral disorders, and difficulties with emotional regulation. We conduct individualized assessments to ensure we can meet each resident's specific needs.",
  },
  {
    question: "What is the staff-to-resident ratio?",
    answer: "We maintain appropriate staffing ratios based on the needs of our residents. Our team includes licensed therapists, case managers, direct care professionals, and behavioral specialists. Specific ratios are determined by individual treatment plans and regulatory requirements.",
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

export default function ResidentialTreatmentPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-[#17375E]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="max-w-3xl">
              <p className="text-[#C6A15B] text-sm font-medium tracking-widest uppercase mb-4">
                Featured Program
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
                Residential Treatment Center
              </h1>
              <p className="text-lg lg:text-xl text-white/70 leading-relaxed">
                Comprehensive, trauma-informed residential treatment for children and adolescents 
                with emotional, behavioral, and mental health needs.
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
              <div className="aspect-[4/3] relative rounded-2xl overflow-hidden">
                <Image
                  src="/images/program-residential-treatment.jpg"
                  alt="Residential Treatment"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeIn>
            
            <div>
              <FadeIn direction="right">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#17375E] mb-6">
                  Comprehensive Therapeutic Care
                </h2>
                <div className="space-y-4 text-[#4A4A4A] leading-relaxed">
                  <p>
                    Our Residential Treatment Center provides 24-hour, comprehensive care for 
                    children and adolescents who require therapeutic support for emotional, 
                    behavioral, and mental health challenges.
                  </p>
                  <p>
                    We understand that emotional and behavioral difficulties often stem from 
                    trauma and adverse experiences. Our trauma-informed approach addresses the 
                    whole person—emotional, behavioral, educational, and social needs—in a 
                    coordinated, compassionate manner.
                  </p>
                  <p>
                    Each resident receives an individualized treatment plan developed by our 
                    multidisciplinary team, ensuring that their unique combination of needs is 
                    understood, supported, and addressed with dignity and expertise.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Support */}
      <section className="py-24 lg:py-32 bg-[#F5F5F5]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#17375E] mb-4">
                Who This Program Supports
              </h2>
              <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto">
                Youth ages 5-17 with emotional, behavioral, and mental health needs requiring residential care.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Emotional Needs",
                items: ["Mood disorders", "Anxiety disorders", "Trauma-related symptoms", "Emotional dysregulation"],
              },
              {
                title: "Behavioral Needs",
                items: ["Challenging behaviors", "Behavioral disorders", "Social difficulties", "Impulse control issues"],
              },
              {
                title: "Therapeutic Support",
                items: ["Individual therapy needs", "Family therapy requirements", "Skills development", "Transition support"],
              },
            ].map((category, index) => (
              <FadeIn key={category.title} delay={index * 0.1}>
                <div className="bg-white rounded-xl p-8 border border-[#E8E8E8]">
                  <h3 className="text-xl font-semibold text-[#17375E] mb-4">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-[#4A4A4A]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#1F5D3A]" />
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

      {/* Clinical Services */}
      <section className="py-24 lg:py-32 bg-[#17375E]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <FadeIn>
              <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-6">
                Clinical and Therapeutic Services
              </h2>
              <p className="text-lg text-white/70 leading-relaxed mb-8">
                Our clinical team provides comprehensive therapeutic services to support the 
                emotional and behavioral well-being of every resident.
              </p>
              <div className="space-y-4">
                {[
                  "Individual therapy sessions",
                  "Group therapy and processing",
                  "Family therapy and engagement",
                  "Behavioral intervention planning",
                  "Crisis support and stabilization",
                  "Case management and coordination",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-white/60">
                    <Stethoscope className="w-5 h-5 text-[#C6A15B] mt-0.5 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-6">Our Clinical Team</h3>
                <div className="space-y-4">
                  {[
                    { role: "Clinical Director", desc: "Oversees all clinical services and treatment protocols" },
                    { role: "Licensed Therapists", desc: "Provide individual, group, and family therapy" },
                    { role: "Case Managers", desc: "Coordinate care and services for each resident" },
                    { role: "Direct Care Staff", desc: "Trained in trauma-informed care and behavioral support" },
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
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#17375E] mb-4">
                  Individualized Treatment Planning
                </h2>
                <p className="text-lg text-[#4A4A4A]">
                  Every resident receives a comprehensive, personalized plan developed by our multidisciplinary team.
                </p>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="bg-[#F5F5F5] rounded-2xl p-8 lg:p-12 shadow-sm">
                <div className="space-y-8">
                  {[
                    {
                      step: "1",
                      title: "Comprehensive Assessment",
                      desc: "Thorough evaluation of emotional, behavioral, educational, and psychosocial needs upon admission.",
                    },
                    {
                      step: "2",
                      title: "Collaborative Planning",
                      desc: "Treatment team—including clinical, case management, educational, and family representatives—develops integrated care plan.",
                    },
                    {
                      step: "3",
                      title: "Implementation",
                      desc: "Consistent, coordinated delivery of therapeutic interventions, behavioral support, and daily living assistance.",
                    },
                    {
                      step: "4",
                      title: "Ongoing Review",
                      desc: "Regular treatment team meetings to assess progress, adjust goals, and ensure optimal outcomes.",
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-6">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5D3A] text-white flex items-center justify-center font-bold">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-[#17375E] mb-1">{item.title}</h3>
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
      <section className="py-24 lg:py-32 bg-[#F5F5F5]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#17375E] mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-[#4A4A4A]">
                Common questions about our Residential Treatment program.
              </p>
            </div>
          </FadeIn>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <FadeIn key={index} delay={index * 0.05}>
                <div className="bg-white rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-[#F5F5F5] transition-colors"
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
              Learn More About Admission
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Contact our admissions team to discuss whether our Residential Treatment program 
              is the right fit for your family or client.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
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
