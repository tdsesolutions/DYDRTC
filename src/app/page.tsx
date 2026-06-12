"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Heart, Shield, Users, BookOpen, Home as HomeIcon, GraduationCap } from "lucide-react";
import FadeIn from "@/components/FadeIn";

const programs = [
  {
    icon: Heart,
    title: "Primary Medical Needs RTC",
    description: "Specialized residential treatment for youth with complex medical, behavioral, and developmental needs.",
    href: "/programs/pmn",
  },
  {
    icon: HomeIcon,
    title: "Supervised Independent Living",
    description: "Guided independence for young adults building life skills in a supportive, structured environment.",
    href: "/programs/sil",
  },
  {
    icon: GraduationCap,
    title: "Transitional Living Program",
    description: "Comprehensive transition support preparing young adults for successful, independent adulthood.",
    href: "/programs/tlp",
  },
];

const services = [
  {
    title: "Clinical Services",
    description: "Individual and group therapy, behavioral support, and therapeutic interventions tailored to each resident.",
  },
  {
    title: "Medical Oversight",
    description: "Coordinated medical care, medication management, and nursing support for complex health needs.",
  },
  {
    title: "Educational Support",
    description: "Partnerships with schools and educational advocacy to ensure academic continuity and success.",
  },
  {
    title: "Family Engagement",
    description: "Ongoing family therapy, visitation support, and transition planning to strengthen family connections.",
  },
  {
    title: "Life Skills Training",
    description: "Age-appropriate skill development in daily living, social interaction, and personal responsibility.",
  },
  {
    title: "Transition Planning",
    description: "Comprehensive discharge planning and aftercare coordination for sustained success.",
  },
];

export default function Home() {
  return (
    <>
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center bg-[#1E1B14]">
          {/* Background with overlay */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-[#1E1B14] via-[#1E1B14]/90 to-[#1E1B14]/60" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(90,122,122,0.15),_transparent_50%)]" />
          </div>

          <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 py-32 lg:py-40">
            <div className="max-w-3xl">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-[#5A7A7A] text-sm font-medium tracking-widest uppercase mb-6"
              >
                Specialized Residential Treatment for Complex Youth Needs
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="text-4xl md:text-5xl lg:text-7xl font-semibold text-white leading-[1.1] mb-8"
              >
                A place of safety.
                <br />
                <span className="text-[#E8E2D9]">A place of healing.</span>
                <br />
                <span className="text-[#5A7A7A]">A place to belong.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-lg lg:text-xl text-white/70 mb-10 max-w-2xl leading-relaxed"
              >
                A Place for Me RTC provides a continuum of specialized care for children, 
                adolescents, and young adults—meeting each individual where they are and 
                supporting them toward a brighter future.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  href="/admissions"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#1E1B14] font-medium rounded-full hover:bg-[#E8E2D9] transition-colors"
                >
                  Start a Referral
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/programs"
                  className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition-colors"
                >
                  Explore Our Programs
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-white/40"
            >
              <ChevronDown className="w-6 h-6" />
            </motion.div>
          </motion.div>
        </section>

        {/* Introduction Section */}
        <section className="py-24 lg:py-32 bg-[#FAF9F7]">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <FadeIn>
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#1E1B14] mb-6">
                  Welcome to A Place for Me RTC
                </h2>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p className="text-lg text-[#4A4A4A] leading-relaxed">
                  We believe every young person deserves a safe, nurturing environment where they can 
                  heal from past trauma, develop essential life skills, and build a foundation for a 
                  successful future. Our continuum of care meets individuals at their unique point of 
                  need—from intensive medical and behavioral support to guided independence.
                </p>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-24 lg:py-32 bg-[#F5F3EF]">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#1E1B14] mb-4">
                  Our Continuum of Care
                </h2>
                <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto">
                  Three integrated programs designed to support youth at every stage of their journey 
                  toward healing, independence, and adulthood.
                </p>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-8">
              {programs.map((program, index) => (
                <FadeIn key={program.title} delay={index * 0.15}>
                  <Link href={program.href} className="group block">
                    <div className="bg-white rounded-2xl p-8 lg:p-10 h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                      <div className="w-14 h-14 rounded-xl bg-[#5A7A7A]/10 flex items-center justify-center mb-6 group-hover:bg-[#5A7A7A]/20 transition-colors">
                        <program.icon className="w-7 h-7 text-[#5A7A7A]" />
                      </div>
                      <h3 className="text-xl font-semibold text-[#1E1B14] mb-3">
                        {program.title}
                      </h3>
                      <p className="text-[#4A4A4A] leading-relaxed mb-6">
                        {program.description}
                      </p>
                      <span className="inline-flex items-center text-[#5A7A7A] font-medium group-hover:gap-2 transition-all">
                        Learn more <ArrowRight className="w-4 h-4 ml-1" />
                      </span>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Featured PMN Section */}
        <section className="py-24 lg:py-32 bg-[#FAF9F7]">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <FadeIn direction="left">
                <div className="aspect-[4/3] bg-[#E8E2D9] rounded-2xl overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-[#9A9A9A]">
                    [Hero Image Placeholder]
                  </div>
                </div>
              </FadeIn>
              
              <div>
                <FadeIn direction="right">
                  <span className="text-sm font-medium text-[#5A7A7A] tracking-wider uppercase mb-4 block">
                    Featured Program
                  </span>
                  <h2 className="text-3xl lg:text-4xl font-semibold text-[#1E1B14] mb-6">
                    Primary Medical Needs Residential Treatment
                  </h2>
                  <p className="text-lg text-[#4A4A4A] leading-relaxed mb-6">
                    Our flagship program provides comprehensive, 24-hour care for youth with complex 
                    medical, behavioral, and developmental needs. With specialized nursing oversight, 
                    individualized treatment planning, and a compassionate therapeutic environment, 
                    we help each resident achieve their fullest potential.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {[
                      "Specialized medical and nursing support",
                      "Individualized behavioral and therapeutic care",
                      "Family-centered treatment approach",
                      "Educational advocacy and coordination",
                      "Safe, accessible, nurturing environment",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[#4A4A4A]">
                        <Shield className="w-5 h-5 text-[#5A7A7A] mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/programs/pmn"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#1E1B14] text-white font-medium rounded-full hover:bg-[#4A4A4A] transition-colors"
                  >
                    Explore the Program <ArrowRight className="w-4 h-4" />
                  </Link>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 lg:py-32 bg-[#1E1B14]">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-4">
                  Comprehensive Services
                </h2>
                <p className="text-lg text-white/70 max-w-2xl mx-auto">
                  Integrated care addressing the medical, emotional, educational, and developmental 
                  needs of every individual we serve.
                </p>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <FadeIn key={service.title} delay={index * 0.1}>
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-colors">
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="py-24 lg:py-32 bg-[#FAF9F7]">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              <FadeIn>
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#1E1B14] mb-6">
                  What Makes A Place for Me Different
                </h2>
                <p className="text-lg text-[#4A4A4A] leading-relaxed mb-8">
                  We understand that choosing residential treatment is one of the most difficult 
                  decisions a family can make. That&apos;s why we&apos;ve built our programs on a foundation 
                  of clinical excellence, genuine compassion, and unwavering commitment to each 
                  individual&apos;s unique journey.
                </p>
                <div className="space-y-6">
                  {[
                    {
                      title: "Trauma-Informed Care",
                      description: "Every interaction is guided by an understanding of trauma and its impact on development and behavior.",
                    },
                    {
                      title: "Individualized Treatment",
                      description: "No two treatment plans are alike. We tailor every aspect of care to the individual's specific needs.",
                    },
                    {
                      title: "Family Partnership",
                      description: "Families are essential partners in the healing process, not passive observers.",
                    },
                    {
                      title: "Continuum of Support",
                      description: "From intensive medical needs to guided independence, we grow with our residents.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="border-l-2 border-[#5A7A7A] pl-6">
                      <h3 className="font-semibold text-[#1E1B14] mb-1">{item.title}</h3>
                      <p className="text-[#4A4A4A]">{item.description}</p>
                    </div>
                  ))}
                </div>
              </FadeIn>

              <FadeIn direction="right">
                <div className="bg-[#F5F3EF] rounded-2xl p-8 lg:p-12">
                  <h3 className="text-2xl font-semibold text-[#1E1B14] mb-8">
                    Our Commitment to Excellence
                  </h3>
                  <div className="space-y-6">
                    {[
                      { label: "Safety First", desc: "Rigorous safety protocols and 24/7 supervision" },
                      { label: "Clinical Excellence", desc: "Evidence-based practices and ongoing staff training" },
                      { label: "Regulatory Compliance", desc: "Meeting or exceeding all state and federal standards" },
                      { label: "Continuous Improvement", desc: "Regular program evaluation and quality enhancement" },
                    ].map((commitment) => (
                      <div key={commitment.label} className="flex items-start gap-4">
                        <div className="w-2 h-2 rounded-full bg-[#5A7A7A] mt-2" />
                        <div>
                          <h4 className="font-medium text-[#1E1B14]">{commitment.label}</h4>
                          <p className="text-sm text-[#4A4A4A]">{commitment.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-20 bg-[#5A7A7A]/10">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="text-2xl lg:text-3xl font-semibold text-[#1E1B14] mb-4">
                  Trusted by Families and Professionals
                </h2>
                <p className="text-[#4A4A4A]">
                  We collaborate with families, referral partners, and agencies to provide exceptional care.
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "[Number]", label: "Years of Service" },
                { number: "[Number]", label: "Lives Impacted" },
                { number: "[Number]", label: "Staff Members" },
                { number: "[Number]", label: "Partner Agencies" },
              ].map((stat) => (
                <FadeIn key={stat.label}>
                  <div className="text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-[#1E1B14] mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-[#4A4A4A]">{stat.label}</div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Placeholder */}
        <section className="py-24 lg:py-32 bg-[#FAF9F7]">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            <FadeIn>
              <div className="max-w-4xl mx-auto text-center">
                <div className="text-[#5A7A7A] mb-6">
                  <Users className="w-12 h-12 mx-auto" />
                </div>
                <blockquote className="text-2xl lg:text-3xl font-medium text-[#1E1B14] mb-6 leading-relaxed">
                  &ldquo;[Family testimonial placeholder - A quote about the transformative 
                  experience and compassionate care received at A Place for Me RTC.]&rdquo;
                </blockquote>
                <cite className="text-[#4A4A4A] not-italic">
                  — [Family Name], [Location/Context]
                </cite>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Video Section Placeholder */}
        <section className="py-24 lg:py-32 bg-[#1E1B14]">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <FadeIn>
                <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-6">
                  Our Story
                </h2>
                <p className="text-lg text-white/70 leading-relaxed mb-6">
                  Learn more about our mission, our approach to care, and the families we serve. 
                  [Video content placeholder - Future video about organization philosophy and impact.]
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-[#5A7A7A] hover:text-white transition-colors"
                >
                  Read Our Full Story <ArrowRight className="w-4 h-4" />
                </Link>
              </FadeIn>

              <FadeIn direction="right">
                <div className="aspect-video bg-[#2A2620] rounded-2xl flex items-center justify-center group cursor-pointer hover:bg-[#3A3630] transition-colors">
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors">
                      <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1" />
                    </div>
                    <p className="text-white/60 text-sm">[Video Placeholder]</p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
