"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Shield } from "lucide-react";
import FadeIn from "@/components/FadeIn";

const services = [
  {
    title: "Clinical Services",
    description: "Individual and group therapy, behavioral support, and therapeutic interventions tailored to each resident.",
  },
  {
    title: "Case Management",
    description: "Coordinated care planning, referral coordination, and ongoing support throughout the treatment journey.",
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
    title: "Discharge Planning",
    description: "Comprehensive aftercare coordination and transition support for sustained success.",
  },
];

export default function Home() {
  return (
    <>
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <Image
              src="/images/hero-home-family-2026.webp"
              alt="Defining Your Destiny Youth Center"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#1F5D3A]/85 via-[#17375E]/80 to-[#17375E]/75" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(198,161,91,0.1),_transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(31,93,58,0.15),_transparent_40%)]" />
          </div>

          <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 py-32 lg:py-40">
            <div className="max-w-3xl">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-[#C6A15B] text-sm font-medium tracking-widest uppercase mb-6"
              >
                Empowering Futures Through Healing
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="text-4xl md:text-5xl lg:text-7xl font-semibold text-white leading-[1.1] mb-8"
              >
                Every child has the power
                <br />
                <span className="text-[#C6A15B]">to define their future.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-lg lg:text-xl text-white/80 mb-10 max-w-2xl leading-relaxed"
              >
                At Defining Your Destiny Youth Center, we provide trauma-informed residential treatment 
                that helps young people heal from past challenges, discover their strengths, and build 
                the confidence to create meaningful, successful futures.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  href="/programs"
                  className="inline-flex items-center gap-2 px-8 py-4 border border-white/40 text-white font-medium rounded-full hover:bg-white/10 transition-colors"
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
        <section className="py-24 lg:py-32 bg-white">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <FadeIn>
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#17375E] mb-6">
                  Building Futures, One Child at a Time
                </h2>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p className="text-lg text-[#4A4A4A] leading-relaxed">
                  We believe every young person carries within them the potential for greatness. 
                  Our mission is to help children and adolescents overcome emotional and behavioral 
                  challenges, develop essential life skills, and discover the confidence to shape 
                  their own destinies. Through compassionate, trauma-informed care, we guide each 
                  individual toward healing, growth, and a future filled with possibility.
                </p>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Featured Residential Treatment Section */}
        <section className="py-24 lg:py-32 bg-[#F5F5F5]">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <FadeIn direction="left">
                <div className="aspect-[4/3] relative rounded-2xl overflow-hidden">
                  <Image
                    src="/images/program-residential-treatment.jpg"
                    alt="Residential Treatment Environment"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </FadeIn>
              
              <div>
                <FadeIn direction="right">
                  <span className="text-sm font-medium text-[#C6A15B] tracking-wider uppercase mb-4 block">
                    Comprehensive Care
                  </span>
                  <h2 className="text-3xl lg:text-4xl font-semibold text-[#17375E] mb-6">
                    Residential Treatment Center
                  </h2>
                  <p className="text-lg text-[#4A4A4A] leading-relaxed mb-6">
                    Our flagship program provides 24-hour residential treatment for children and 
                    adolescents with emotional, behavioral, and mental health needs. Through 
                    individualized treatment planning, clinical therapy, and a nurturing therapeutic 
                    environment, we help each resident achieve emotional stability and develop 
                    the skills needed for future independence.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {[
                      "Individual and group therapy sessions",
                      "Evidence-based behavioral interventions",
                      "Family-centered treatment approach",
                      "Educational advocacy and coordination",
                      "Safe, structured, supportive environment",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[#4A4A4A]">
                        <Shield className="w-5 h-5 text-[#1F5D3A] mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/programs/pmn"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#17375E] text-white font-medium rounded-full hover:bg-[#1F5D3A] transition-colors"
                  >
                    Explore the Program <ArrowRight className="w-4 h-4" />
                  </Link>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 lg:py-32 bg-[#17375E]">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-4">
                  Comprehensive Services for Holistic Growth
                </h2>
                <p className="text-lg text-white/70 max-w-2xl mx-auto">
                  Integrated care addressing the emotional, behavioral, educational, and developmental 
                  needs of every young person we serve.
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
        <section className="py-24 lg:py-32 bg-white">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              <FadeIn>
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#17375E] mb-6">
                  What Sets Defining Your Destiny Apart
                </h2>
                <p className="text-lg text-[#4A4A4A] leading-relaxed mb-8">
                  Choosing residential treatment is a significant decision. We have built our programs 
                  on a foundation of clinical excellence, genuine compassion, and an unwavering belief 
                  in every young person&apos;s capacity for growth and transformation.
                </p>
                <div className="space-y-6">
                  {[
                    {
                      title: "Trauma-Informed Excellence",
                      description: "Every interaction is guided by deep understanding of trauma&apos;s impact and the pathways to healing and resilience.",
                    },
                    {
                      title: "Individualized Treatment Plans",
                      description: "No two journeys are alike. We tailor every aspect of care to each individual&apos;s unique strengths, needs, and goals.",
                    },
                    {
                      title: "Family as Partners",
                      description: "Families are essential collaborators in the healing process, actively involved in treatment and transition planning.",
                    },
                    {
                      title: "Licensed & Regulated",
                      description: "We meet or exceed all Texas Chapter 748 standards, ensuring the highest quality of care and accountability.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="border-l-2 border-[#1F5D3A] pl-6">
                      <h3 className="font-semibold text-[#17375E] mb-1">{item.title}</h3>
                      <p className="text-[#4A4A4A]">{item.description}</p>
                    </div>
                  ))}
                </div>
              </FadeIn>

              <FadeIn direction="right">
                <div className="bg-[#F5F5F5] rounded-2xl p-8 lg:p-12">
                  <h3 className="text-2xl font-semibold text-[#17375E] mb-8">
                    Our Commitment to Excellence
                  </h3>
                  <div className="space-y-6">
                    {[
                      { label: "Safety & Security", desc: "Comprehensive protocols and 24/7 supervision" },
                      { label: "Clinical Excellence", desc: "Evidence-based practices and continuous staff development" },
                      { label: "Regulatory Compliance", desc: "Meeting all Texas Chapter 748 standards" },
                      { label: "Continuous Improvement", desc: "Regular evaluation and program enhancement" },
                    ].map((commitment) => (
                      <div key={commitment.label} className="flex items-start gap-4">
                        <div className="w-2 h-2 rounded-full bg-[#1F5D3A] mt-2" />
                        <div>
                          <h4 className="font-medium text-[#17375E]">{commitment.label}</h4>
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
      </main>
    </>
  );
}
