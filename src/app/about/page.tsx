"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Heart, Shield, Users, Target, Award } from "lucide-react";
import FadeIn from "@/components/FadeIn";

const values = [
  {
    icon: Shield,
    title: "Safety",
    description: "Creating secure environments where healing can begin and trust can grow.",
  },
  {
    icon: Heart,
    title: "Belonging",
    description: "Fostering a sense of home, acceptance, and genuine connection for every individual.",
  },
  {
    icon: Users,
    title: "Dignity",
    description: "Treating every person with respect, honoring their unique journey and potential.",
  },
  {
    icon: Target,
    title: "Compassion",
    description: "Leading with empathy, understanding, and unwavering support through challenges.",
  },
  {
    icon: Award,
    title: "Accountability",
    description: "Maintaining the highest standards of care, ethics, and professional excellence.",
  },
  {
    icon: ArrowRight,
    title: "Growth",
    description: "Believing in the capacity for positive change and supporting continuous development.",
  },
];

const leadership = [
  { name: "[Executive Director Name]", title: "Executive Director", placeholder: true },
  { name: "[Clinical Director Name]", title: "Clinical Director", placeholder: true },
  { name: "[Program Director Name]", title: "Program Director", placeholder: true },
  { name: "[Medical Director Name]", title: "Medical Director", placeholder: true },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-[#1E1B14]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="max-w-3xl">
              <p className="text-[#5A7A7A] text-sm font-medium tracking-widest uppercase mb-4">
                About Us
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
                A place where healing happens and futures are built.
              </h1>
              <p className="text-lg lg:text-xl text-white/70 leading-relaxed">
                A Place for Me RTC was founded on a simple but powerful belief: every young person 
                deserves a safe, nurturing environment where they can heal, grow, and discover their potential.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 lg:py-32 bg-[#FAF9F7]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn direction="left">
              <div className="aspect-[4/3] bg-[#E8E2D9] rounded-2xl overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-[#9A9A9A]">
                  [Facility/Team Image Placeholder]
                </div>
              </div>
            </FadeIn>
            
            <div>
              <FadeIn direction="right">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#1E1B14] mb-6">
                  Who We Are
                </h2>
                <div className="space-y-4 text-[#4A4A4A] leading-relaxed">
                  <p>
                    A Place for Me RTC is a specialized residential treatment center dedicated to serving 
                    children, adolescents, and young adults with complex medical, behavioral, and developmental needs.
                  </p>
                  <p>
                    We provide a comprehensive continuum of care that includes Primary Medical Needs Residential 
                    Treatment, Supervised Independent Living, and Transitional Living Programs—each designed to 
                    meet individuals where they are and support them toward greater independence and well-being.
                  </p>
                  <p>
                    Our team of dedicated professionals brings together expertise in medicine, nursing, psychology, 
                    social work, education, and therapeutic recreation to create holistic, individualized care plans 
                    that address the whole person.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 lg:py-32 bg-[#F5F3EF]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            <FadeIn direction="left">
              <div className="bg-white rounded-2xl p-8 lg:p-12 h-full">
                <span className="text-sm font-medium text-[#5A7A7A] tracking-wider uppercase mb-4 block">
                  Our Mission
                </span>
                <h3 className="text-2xl lg:text-3xl font-semibold text-[#1E1B14] mb-4">
                  To provide exceptional, individualized care that empowers young people to heal, 
                  grow, and build meaningful futures.
                </h3>
                <p className="text-[#4A4A4A] leading-relaxed">
                  We are committed to creating safe, nurturing environments where every individual 
                  feels valued, supported, and equipped to reach their fullest potential.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn direction="right">
              <div className="bg-[#1E1B14] rounded-2xl p-8 lg:p-12 h-full">
                <span className="text-sm font-medium text-[#5A7A7A] tracking-wider uppercase mb-4 block">
                  Our Vision
                </span>
                <h3 className="text-2xl lg:text-3xl font-semibold text-white mb-4">
                  A world where every young person with complex needs has access to compassionate, 
                  high-quality care and the opportunity to thrive.
                </h3>
                <p className="text-white/70 leading-relaxed">
                  We envision communities where residential treatment is not a last resort but a 
                  transformative step toward healing, independence, and lasting success.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 lg:py-32 bg-[#FAF9F7]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#1E1B14] mb-4">
                Our Core Values
              </h2>
              <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto">
                The principles that guide every decision we make and every interaction we have.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <FadeIn key={value.title} delay={index * 0.1}>
                <div className="bg-white rounded-xl p-8 border border-[#E8E2D9] hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-lg bg-[#5A7A7A]/10 flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-[#5A7A7A]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#1E1B14] mb-2">{value.title}</h3>
                  <p className="text-[#4A4A4A]">{value.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy of Care */}
      <section className="py-24 lg:py-32 bg-[#1E1B14]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-4">
                Our Philosophy of Care
              </h2>
              <p className="text-lg text-white/70">
                We believe that effective treatment requires more than addressing symptoms—it requires 
                understanding the whole person and creating conditions for genuine healing.
              </p>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Trauma-Informed Care",
                description: "We recognize that trauma shapes behavior and development. Every interaction, intervention, and environment is designed with an understanding of trauma's impact and the pathways to healing.",
              },
              {
                title: "Individualized Treatment",
                description: "No two individuals are alike, and neither are their treatment plans. We conduct thorough assessments and continuously adapt our approach to meet each person's evolving needs.",
              },
              {
                title: "Family Partnership",
                description: "Families are essential partners in the healing process. We maintain open communication, provide support and education, and work collaboratively toward shared goals.",
              },
            ].map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.15}>
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-white mb-4">{item.title}</h3>
                  <p className="text-white/60 leading-relaxed">{item.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="py-24 lg:py-32 bg-[#FAF9F7]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <FadeIn>
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#1E1B14] mb-6">
                Our Commitments
              </h2>
              <p className="text-lg text-[#4A4A4A] leading-relaxed mb-8">
                We hold ourselves to the highest standards in every aspect of our work. These 
                commitments guide our operations, our culture, and our continuous pursuit of excellence.
              </p>
              <div className="space-y-6">
                {[
                  { title: "Commitment to Safety", desc: "Rigorous protocols, 24/7 supervision, and continuous staff training ensure the physical and emotional safety of every resident." },
                  { title: "Commitment to Clinical Excellence", desc: "Evidence-based practices, ongoing professional development, and regular program evaluation drive continuous improvement." },
                  { title: "Commitment to Regulatory Compliance", desc: "We meet or exceed all state and federal standards, maintaining full transparency with licensing bodies and stakeholders." },
                ].map((commitment) => (
                  <div key={commitment.title} className="border-l-2 border-[#5A7A7A] pl-6">
                    <h3 className="font-semibold text-[#1E1B14] mb-1">{commitment.title}</h3>
                    <p className="text-[#4A4A4A]">{commitment.desc}</p>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div className="bg-[#F5F3EF] rounded-2xl p-8 lg:p-12">
                <h3 className="text-2xl font-semibold text-[#1E1B14] mb-6">
                  Quality Assurance
                </h3>
                <ul className="space-y-4">
                  {[
                    "Regular internal audits and program reviews",
                    "Continuous staff training and development",
                    "Family satisfaction monitoring",
                    "Outcome tracking and analysis",
                    "Peer consultation and supervision",
                    "Community feedback integration",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[#4A4A4A]">
                      <div className="w-2 h-2 rounded-full bg-[#5A7A7A] mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 lg:py-32 bg-[#F5F3EF]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#1E1B14] mb-4">
                Our Leadership Team
              </h2>
              <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto">
                Experienced professionals dedicated to excellence in residential treatment and the 
                well-being of every individual we serve.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((person, index) => (
              <FadeIn key={person.name} delay={index * 0.1}>
                <div className="bg-white rounded-xl overflow-hidden">
                  <div className="aspect-square bg-[#E8E2D9] flex items-center justify-center text-[#9A9A9A]">
                    [Photo]
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-[#1E1B14] mb-1">{person.name}</h3>
                    <p className="text-sm text-[#5A7A7A] mb-3">{person.title}</p>
                    <p className="text-sm text-[#9A9A9A]">[Leadership Bio Coming Soon]</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-24 lg:py-32 bg-[#1E1B14]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-6">
                A Message from Our Leadership
              </h2>
              <p className="text-lg text-white/70 leading-relaxed mb-6">
                [Video content placeholder - Future video message from executive leadership about 
                the organization's mission, values, and commitment to the families we serve.]
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#1E1B14] font-medium rounded-full hover:bg-[#E8E2D9] transition-colors"
              >
                Get in Touch <ArrowRight className="w-4 h-4" />
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

      {/* CTA Section */}
      <section className="py-20 bg-[#5A7A7A]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
          <FadeIn>
            <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-6">
              Learn More About Our Programs
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Discover how A Place for Me RTC can support your family or client on their journey 
              toward healing and independence.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/programs"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#1E1B14] font-medium rounded-full hover:bg-[#E8E2D9] transition-colors"
              >
                Explore Programs <ArrowRight className="w-4 h-4" />
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
