"use client";

import Link from "next/link";
import { ArrowRight, Stethoscope, Brain, BookOpen, Users, Utensils, Pill, Shield, ClipboardList } from "lucide-react";
import FadeIn from "@/components/FadeIn";

const services = [
  {
    icon: Stethoscope,
    title: "Clinical Services",
    description: "Individual and group therapy, behavioral support, and therapeutic interventions tailored to each resident's unique needs and goals.",
    features: ["Individual therapy sessions", "Group therapy and processing", "Behavioral intervention planning", "Crisis support and stabilization"],
  },
  {
    icon: Shield,
    title: "Medical and Nursing Oversight",
    description: "Comprehensive medical care coordination, medication management, and nursing support for residents with complex health needs.",
    features: ["24/7 nursing availability", "Medication administration and monitoring", "Medical appointment coordination", "Health status monitoring"],
  },
  {
    icon: Brain,
    title: "Behavioral Support",
    description: "Evidence-based behavioral interventions and positive behavior support strategies that promote growth and skill development.",
    features: ["Functional behavior assessments", "Behavior support plans", "Crisis prevention and intervention", "Skill-building programming"],
  },
  {
    icon: ClipboardList,
    title: "Case Management",
    description: "Coordinated care planning and advocacy to ensure seamless service delivery and optimal outcomes for each resident.",
    features: ["Comprehensive care coordination", "Service planning and monitoring", "Agency collaboration", "Progress tracking and reporting"],
  },
  {
    icon: Users,
    title: "Family Engagement",
    description: "Ongoing partnership with families through therapy, education, visitation support, and transition planning.",
    features: ["Family therapy sessions", "Parent education and support", "Visitation coordination", "Transition planning collaboration"],
  },
  {
    icon: BookOpen,
    title: "Educational Coordination",
    description: "Partnerships with schools and educational advocacy to ensure academic continuity and support for every resident.",
    features: ["School coordination and advocacy", "IEP meeting participation", "Educational planning", "Academic progress monitoring"],
  },
  {
    icon: Utensils,
    title: "Specialized Dietary Support",
    description: "Nutritional planning and meal preparation that accommodates medical needs, preferences, and dietary restrictions.",
    features: ["Individualized meal planning", "Medical diet accommodation", "Nutritional monitoring", "Cultural and preference consideration"],
  },
  {
    icon: Pill,
    title: "Medication Support",
    description: "Safe medication management including administration, monitoring, and coordination with prescribing physicians.",
    features: ["Medication administration", "Side effect monitoring", "Physician communication", "Medication education"],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-[#1E1B14]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="max-w-3xl">
              <p className="text-[#5A7A7A] text-sm font-medium tracking-widest uppercase mb-4">
                Our Services
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
                Comprehensive care for complex needs.
              </h1>
              <p className="text-lg lg:text-xl text-white/70 leading-relaxed">
                We provide integrated services that address the medical, emotional, educational, 
                and developmental needs of every individual we serve.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Services Introduction */}
      <section className="py-24 lg:py-32 bg-[#FAF9F7]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#1E1B14] mb-6">
                How We Deliver Care
              </h2>
              <p className="text-lg text-[#4A4A4A] leading-relaxed">
                At A Place for Me RTC, we believe that effective treatment requires a holistic approach. 
                Our comprehensive service model ensures that every aspect of a resident's well-being is 
                addressed through coordinated, individualized care.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 lg:py-32 bg-[#F5F3EF]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {services.map((service, index) => (
              <FadeIn key={service.title} delay={index * 0.1}>
                <div className={`flex gap-6 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-[#5A7A7A]/10 flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-[#5A7A7A]" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-[#1E1B14] mb-3">{service.title}</h3>
                    <p className="text-[#4A4A4A] leading-relaxed mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-[#4A4A4A]">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#5A7A7A]" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Care Team Section */}
      <section className="py-24 lg:py-32 bg-[#1E1B14]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn>
              <div className="aspect-[4/3] bg-[#2A2620] rounded-2xl overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-[#9A9A9A]">
                  [Care Team Collaboration Image]
                </div>
              </div>
            </FadeIn>
            
            <div>
              <FadeIn direction="right">
                <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-6">
                  A Collaborative Care Team
                </h2>
                <p className="text-lg text-white/70 leading-relaxed mb-6">
                  Every resident benefits from a multidisciplinary team working together to provide 
                  seamless, coordinated care. Our teams include:
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Licensed therapists",
                    "Registered nurses",
                    "Case managers",
                    "Direct care professionals",
                    "Educational liaisons",
                    "Medical providers",
                    "Behavioral specialists",
                    "Program leadership",
                  ].map((role) => (
                    <div key={role} className="flex items-center gap-3 text-white/60">
                      <div className="w-2 h-2 rounded-full bg-[#5A7A7A]" />
                      {role}
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Supervision */}
      <section className="py-24 lg:py-32 bg-[#FAF9F7]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#1E1B14] mb-4">
                  Safety and Supervision
                </h2>
                <p className="text-lg text-[#4A4A4A]">
                  Creating a secure environment where healing can flourish.
                </p>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm">
                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    {
                      title: "24/7 Supervision",
                      desc: "Continuous staff presence and monitoring to ensure resident safety and respond to needs immediately.",
                    },
                    {
                      title: "Secure Environment",
                      desc: " thoughtfully designed facilities that balance safety with comfort and normalcy.",
                    },
                    {
                      title: "Crisis Protocols",
                      desc: "Comprehensive crisis prevention and intervention procedures based on best practices.",
                    },
                    {
                      title: "Staff Training",
                      desc: "Ongoing education in safety procedures, de-escalation, and emergency response.",
                    },
                  ].map((item) => (
                    <div key={item.title}>
                      <h3 className="font-semibold text-[#1E1B14] mb-2">{item.title}</h3>
                      <p className="text-[#4A4A4A] text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#5A7A7A]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
          <FadeIn>
            <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-6">
              Ready to Learn More?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Contact us to discuss how our services can meet your specific needs or the needs of your client.
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
