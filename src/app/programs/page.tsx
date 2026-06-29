"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Heart, Home, GraduationCap, ChevronRight } from "lucide-react";
import FadeIn from "@/components/FadeIn";

const programs = [
  {
    icon: Heart,
    title: "Residential Treatment",
    subtitle: "Comprehensive Therapeutic Care",
    description: "24-hour residential treatment for children and adolescents with emotional, behavioral, and mental health needs in a safe, therapeutic environment.",
    features: [
      "Individual and group therapy",
      "Behavioral health support",
      "Family-centered treatment planning",
      "Educational advocacy and coordination",
      "Discharge and aftercare planning",
    ],
    href: "/programs/pmn",
    color: "bg-[#1F5D3A]",
  },
  {
    icon: Home,
    title: "Life Skills Development",
    subtitle: "Building Essential Competencies",
    description: "Structured programming focused on developing daily living skills, emotional regulation, and personal responsibility for successful functioning.",
    features: [
      "Daily living skills training",
      "Emotional regulation support",
      "Social skills development",
      "Personal responsibility building",
      "Community integration",
    ],
    href: "/programs/sil",
    color: "bg-[#17375E]",
  },
  {
    icon: GraduationCap,
    title: "Transition & Aftercare",
    subtitle: "Sustained Success Planning",
    description: "Comprehensive discharge planning and aftercare support to ensure continued progress and successful transition after residential treatment.",
    features: [
      "Discharge readiness planning",
      "Aftercare coordination",
      "Community resource linkage",
      "Follow-up support",
      "Crisis prevention planning",
    ],
    href: "/programs/tlp",
    color: "bg-[#C6A15B]",
  },
];

export default function ProgramsPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-[#17375E]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="max-w-3xl">
              <p className="text-[#C6A15B] text-sm font-medium tracking-widest uppercase mb-4">
                Our Programs
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
                A continuum of care for every stage.
              </h1>
              <p className="text-lg lg:text-xl text-white/70 leading-relaxed">
                From intensive residential treatment to life skills development and transition support, 
                we meet individuals where they are and help them move forward.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Continuum Introduction */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#17375E] mb-6">
                The Continuum of Care
              </h2>
              <p className="text-lg text-[#4A4A4A] leading-relaxed">
                At Defining Your Destiny Youth Center, we understand that needs change over time. Our integrated 
                programs provide a seamless progression from intensive residential treatment through 
                life skills development to successful transition and aftercare.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Animated Pathway */}
      <section className="py-12 lg:py-20 bg-[#F5F5F5]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="relative">
              {/* Path Line */}
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-[#E8E8E8] -translate-y-1/2" />
              
              <div className="grid lg:grid-cols-3 gap-8 relative">
                {[
                  { step: "1", title: "Residential Treatment", desc: "Intensive therapeutic care and stabilization" },
                  { step: "2", title: "Life Skills Development", desc: "Building competencies for daily living" },
                  { step: "3", title: "Transition & Aftercare", desc: "Sustained success and community integration" },
                ].map((item, index) => (
                  <FadeIn key={item.step} delay={index * 0.2}>
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full bg-[#1F5D3A] text-white flex items-center justify-center text-xl font-bold mx-auto mb-4 relative z-10">
                        {item.step}
                      </div>
                      <h3 className="text-lg font-semibold text-[#17375E] mb-2">{item.title}</h3>
                      <p className="text-sm text-[#4A4A4A]">{item.desc}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#17375E] mb-4">
                Our Three Programs
              </h2>
              <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto">
                Each program is designed to meet specific needs while building toward greater 
                independence and long-term success.
              </p>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <FadeIn key={program.title} delay={index * 0.15}>
                <Link href={program.href} className="group block h-full">
                  <div className="bg-[#F5F5F5] rounded-2xl overflow-hidden h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <div className={`${program.color} p-8`}>
                      <program.icon className="w-12 h-12 text-white mb-4" />
                      <h3 className="text-xl font-semibold text-white mb-1">{program.title}</h3>
                      <p className="text-white/80 text-sm">{program.subtitle}</p>
                    </div>
                    <div className="p-8">
                      <p className="text-[#4A4A4A] mb-6 leading-relaxed">{program.description}</p>
                      <ul className="space-y-2 mb-6">
                        {program.features.slice(0, 3).map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-sm text-[#4A4A4A]">
                            <ChevronRight className="w-4 h-4 text-[#1F5D3A]" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <span className="inline-flex items-center text-[#1F5D3A] font-medium group-hover:gap-2 transition-all">
                        Learn more <ArrowRight className="w-4 h-4 ml-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Sections for Each Program */}
      {programs.map((program, index) => (
        <section key={program.title} className={`py-24 lg:py-32 ${index % 2 === 0 ? 'bg-[#F5F5F5]' : 'bg-white'}`}>
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <FadeIn direction={index % 2 === 0 ? "left" : "right"}>
                <div className="aspect-[4/3] bg-[#E8E8E8] rounded-2xl overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-[#9A9A9A]">
                    [{program.title} Image]
                  </div>
                </div>
              </FadeIn>
              
              <div>
                <FadeIn direction={index % 2 === 0 ? "right" : "left"}>
                  <span className={`inline-block px-4 py-1 rounded-full text-white text-sm font-medium mb-4 ${program.color}`}>
                    {program.subtitle}
                  </span>
                  <h2 className="text-3xl lg:text-4xl font-semibold text-[#17375E] mb-4">
                    {program.title}
                  </h2>
                  <p className="text-lg text-[#4A4A4A] leading-relaxed mb-6">
                    {program.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {program.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-[#4A4A4A]">
                        <div className="w-2 h-2 rounded-full bg-[#1F5D3A] mt-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={program.href}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#17375E] text-white font-medium rounded-full hover:bg-[#1F5D3A] transition-colors"
                  >
                    Explore {program.title.split(' ')[0]} <ArrowRight className="w-4 h-4" />
                  </Link>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Finding the Right Fit */}
      <section className="py-24 lg:py-32 bg-[#17375E]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-4">
                Finding the Right Level of Support
              </h2>
              <p className="text-lg text-white/70">
                Not sure which program is the best fit? Our admissions team can help assess needs 
                and recommend the appropriate level of care.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-white/10">
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Assessment",
                    desc: "Comprehensive evaluation of emotional, behavioral, and developmental needs",
                  },
                  {
                    title: "Recommendation",
                    desc: "Professional guidance on the most appropriate program and services",
                  },
                  {
                    title: "Admission",
                    desc: "Coordinated intake process with family and referral sources",
                  },
                ].map((step) => (
                  <div key={step.title} className="text-center">
                    <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-white/60">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1F5D3A]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
          <FadeIn>
            <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-6">
              Ready to Explore Your Options?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Contact our admissions team to discuss which program might be the right fit for your family or client.
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
