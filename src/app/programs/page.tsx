"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Heart, Home, GraduationCap, ChevronRight } from "lucide-react";
import FadeIn from "@/components/FadeIn";

const programs = [
  {
    icon: Heart,
    title: "Primary Medical Needs RTC",
    subtitle: "Intensive Medical & Behavioral Support",
    description: "Comprehensive 24-hour residential treatment for youth with complex medical, behavioral, and developmental needs requiring specialized care and nursing oversight.",
    features: [
      "Specialized medical and nursing support",
      "Individualized behavioral interventions",
      "Clinical therapy and counseling",
      "Family-centered treatment planning",
      "Educational advocacy and coordination",
    ],
    href: "/programs/pmn",
    color: "bg-[#5A7A7A]",
  },
  {
    icon: Home,
    title: "Supervised Independent Living",
    subtitle: "Guided Independence & Life Skills",
    description: "A supportive living environment where young adults develop independence through structured guidance, life skills training, and gradual responsibility building.",
    features: [
      "Life skills development",
      "Structured independence",
      "Community integration support",
      "Educational and employment readiness",
      "Ongoing case management",
    ],
    href: "/programs/sil",
    color: "bg-[#6B7B8C]",
  },
  {
    icon: GraduationCap,
    title: "Transitional Living Program",
    subtitle: "Preparation for Adulthood",
    description: "Comprehensive transition support helping young adults build the skills, confidence, and resources needed for successful independent living.",
    features: [
      "Daily living skills mastery",
      "Financial literacy training",
      "Housing readiness preparation",
      "Employment support",
      "Mentorship and guidance",
    ],
    href: "/programs/tlp",
    color: "bg-[#4A5A6A]",
  },
];

export default function ProgramsPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-[#1E1B14]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="max-w-3xl">
              <p className="text-[#5A7A7A] text-sm font-medium tracking-widest uppercase mb-4">
                Our Programs
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
                A continuum of care for every stage.
              </h1>
              <p className="text-lg lg:text-xl text-white/70 leading-relaxed">
                From intensive medical and behavioral support to guided independence, 
                we meet individuals where they are and help them move forward.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Continuum Introduction */}
      <section className="py-24 lg:py-32 bg-[#FAF9F7]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#1E1B14] mb-6">
                The Continuum of Care
              </h2>
              <p className="text-lg text-[#4A4A4A] leading-relaxed">
                At A Place for Me RTC, we understand that needs change over time. Our three integrated 
                programs provide a seamless progression from specialized medical and behavioral care to 
                guided independence and successful transition to adulthood.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Animated Pathway */}
      <section className="py-12 lg:py-20 bg-[#F5F3EF]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="relative">
              {/* Path Line */}
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-[#E8E2D9] -translate-y-1/2" />
              
              <div className="grid lg:grid-cols-3 gap-8 relative">
                {[
                  { step: "1", title: "Specialized Care", desc: "Intensive medical and behavioral support" },
                  { step: "2", title: "Guided Independence", desc: "Building skills with support" },
                  { step: "3", title: "Successful Transition", desc: "Ready for adulthood" },
                ].map((item, index) => (
                  <FadeIn key={item.step} delay={index * 0.2}>
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full bg-[#5A7A7A] text-white flex items-center justify-center text-xl font-bold mx-auto mb-4 relative z-10">
                        {item.step}
                      </div>
                      <h3 className="text-lg font-semibold text-[#1E1B14] mb-2">{item.title}</h3>
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
      <section className="py-24 lg:py-32 bg-[#FAF9F7]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#1E1B14] mb-4">
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
                  <div className="bg-white rounded-2xl overflow-hidden h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
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
                            <ChevronRight className="w-4 h-4 text-[#5A7A7A]" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <span className="inline-flex items-center text-[#5A7A7A] font-medium group-hover:gap-2 transition-all">
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
        <section key={program.title} className={`py-24 lg:py-32 ${index % 2 === 0 ? 'bg-[#F5F3EF]' : 'bg-[#FAF9F7]'}`}>
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <FadeIn direction={index % 2 === 0 ? "left" : "right"}>
                <div className="aspect-[4/3] bg-[#E8E2D9] rounded-2xl overflow-hidden">
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
                  <h2 className="text-3xl lg:text-4xl font-semibold text-[#1E1B14] mb-4">
                    {program.title}
                  </h2>
                  <p className="text-lg text-[#4A4A4A] leading-relaxed mb-6">
                    {program.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {program.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-[#4A4A4A]">
                        <div className="w-2 h-2 rounded-full bg-[#5A7A7A] mt-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={program.href}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#1E1B14] text-white font-medium rounded-full hover:bg-[#4A4A4A] transition-colors"
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
      <section className="py-24 lg:py-32 bg-[#1E1B14]">
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
                    desc: "Comprehensive evaluation of medical, behavioral, and developmental needs",
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
      <section className="py-20 bg-[#5A7A7A]">
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
