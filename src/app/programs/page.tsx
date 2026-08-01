"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, ChevronRight } from "lucide-react";
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
];

export default function ProgramsPage() {
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
                  Our Programs
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
                  Programs designed to transform lives.
                </h1>
                <p className="text-lg lg:text-xl text-white/70 leading-relaxed">
                  From intensive residential treatment through life skills development to successful 
                  transition, we guide young people through every stage of their journey toward 
                  independence and a brighter future.
                </p>
              </div>
            </FadeIn>
            <div className="hidden lg:flex w-[40%] h-[400px] items-center justify-start overflow-hidden">
              <div className="relative w-full h-[540px] translate-x-0">
                <Image
                  src="/images/hero-artwork-programs-clean.png"
                  alt="Our Programs"
                  fill
                  className="object-contain object-center"
                  priority
                  sizes="40vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Continuum Introduction */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#17375E] mb-6">
                A Continuum of Care for Lasting Change
              </h2>
              <p className="text-lg text-[#4A4A4A] leading-relaxed">
                Every young person&apos;s journey is unique. Our integrated programs provide comprehensive 
                support at every stage—from initial healing and stabilization through skill development 
                and successful transition to independence.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Program Cards */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="space-y-12">
            {programs.map((program, index) => (
              <FadeIn key={program.title} delay={index * 0.15}>
                <div className="bg-[#F5F5F5] rounded-2xl overflow-hidden">
                  <div className="grid lg:grid-cols-2">
                    <div className="p-8 lg:p-12">
                      <div className={`w-14 h-14 rounded-xl ${program.color} flex items-center justify-center mb-6`}>
                        <program.icon className="w-7 h-7 text-white" />
                      </div>
                      <p className="text-sm font-medium text-[#C6A15B] tracking-wider uppercase mb-2">
                        {program.subtitle}
                      </p>
                      <h3 className="text-2xl lg:text-3xl font-semibold text-[#17375E] mb-4">
                        {program.title}
                      </h3>
                      <p className="text-[#4A4A4A] leading-relaxed mb-6">
                        {program.description}
                      </p>
                      <Link
                        href={program.href}
                        className="inline-flex items-center gap-2 text-[#1F5D3A] font-medium hover:gap-3 transition-all"
                      >
                        Learn more <ChevronRight className="w-4 h-4" />
                      </Link>
                    </div>
                    <div className="bg-gradient-to-br from-[#1F5D3A]/5 to-[#17375E]/5 p-8 lg:p-12 flex items-center">
                      <ul className="space-y-3 w-full">
                        {program.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-3 text-[#4A4A4A]">
                            <div className={`w-2 h-2 rounded-full ${program.color}`} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Finding the Right Level */}
      <section className="py-24 lg:py-32 bg-[#17375E]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn>
              <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-6">
                Finding the Right Level of Support
              </h2>
              <p className="text-lg text-white/70 leading-relaxed mb-8">
                Not every young person needs the same level of care. Our admissions team works 
                closely with families and referral sources to determine the most appropriate 
                program based on individual needs, circumstances, and treatment goals.
              </p>
              <div className="space-y-4">
                {[
                  "Comprehensive assessment of emotional and behavioral needs",
                  "Review of previous treatment and current support systems",
                  "Collaboration with families and referral sources",
                  "Clear communication about program fit and expectations",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-white/60">
                    <div className="w-2 h-2 rounded-full bg-[#C6A15B] mt-2" />
                    {item}
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-white/10">
                <h3 className="text-2xl font-semibold text-white mb-6">
                  Ready to Explore Your Options?
                </h3>
                <p className="text-white/60 mb-8">
                  Our admissions team is here to help you understand our programs and determine 
                  the best fit for your situation.
                </p>
                <div className="space-y-4">
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 w-full px-6 py-4 border border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition-colors"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

    </>
  );
}
