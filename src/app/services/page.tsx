"use client";

import Link from "next/link";
import { ArrowRight, Stethoscope, Brain, BookOpen, Users, ClipboardList, Shield } from "lucide-react";
import FadeIn from "@/components/FadeIn";

const services = [
  {
    icon: Brain,
    title: "Clinical Therapy",
    description: "Individual and group therapy, behavioral support, and therapeutic interventions tailored to each resident's unique needs and goals.",
    features: ["Individual therapy sessions", "Group therapy and processing", "Behavioral intervention planning", "Crisis support and stabilization"],
  },
  {
    icon: ClipboardList,
    title: "Case Management",
    description: "Coordinated care planning and advocacy to ensure seamless service delivery and optimal outcomes for each resident.",
    features: ["Comprehensive care coordination", "Service planning and monitoring", "Agency collaboration", "Progress tracking and reporting"],
  },
  {
    icon: Brain,
    title: "Behavioral Support",
    description: "Evidence-based behavioral interventions and positive behavior support strategies that promote growth and skill development.",
    features: ["Functional behavior assessments", "Behavior support plans", "Crisis prevention and intervention", "Skill-building programming"],
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
    icon: Stethoscope,
    title: "Discharge Planning",
    description: "Comprehensive aftercare coordination and transition support to ensure sustained success after residential treatment.",
    features: ["Aftercare coordination", "Community resource linkage", "Follow-up support planning", "Crisis prevention planning"],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-[#17375E]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="max-w-3xl">
              <p className="text-[#C6A15B] text-sm font-medium tracking-widest uppercase mb-4">
                Our Services
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
                Comprehensive care for healing and growth.
              </h1>
              <p className="text-lg lg:text-xl text-white/70 leading-relaxed">
                We provide integrated services that address the emotional, behavioral, educational, 
                and developmental needs of every individual we serve.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Services Introduction */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#17375E] mb-6">
                How We Deliver Care
              </h2>
              <p className="text-lg text-[#4A4A4A] leading-relaxed">
                At Defining Your Destiny Youth Center, we believe that effective treatment requires a holistic approach. 
                Our comprehensive service model ensures that every aspect of a resident&apos;s well-being is 
                addressed through coordinated, individualized care.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 lg:py-32 bg-[#F5F5F5]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {services.map((service, index) => (
              <FadeIn key={service.title} delay={index * 0.1}>
                <div className={`flex gap-6 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-[#1F5D3A]/10 flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-[#1F5D3A]" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-[#17375E] mb-3">{service.title}</h3>
                    <p className="text-[#4A4A4A] leading-relaxed mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-[#4A4A4A]">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#1F5D3A]" />
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
      <section className="py-24 lg:py-32 bg-[#17375E]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn>
              <div className="aspect-[4/3] bg-[#1F5D3A]/30 rounded-2xl overflow-hidden">
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
                    "Case managers",
                    "Direct care professionals",
                    "Educational liaisons",
                    "Behavioral specialists",
                    "Program leadership",
                  ].map((role) => (
                    <div key={role} className="flex items-center gap-3 text-white/60">
                      <div className="w-2 h-2 rounded-full bg-[#C6A15B]" />
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
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#17375E] mb-4">
                  Safety and Supervision
                </h2>
                <p className="text-lg text-[#4A4A4A]">
                  Creating a secure environment where healing can flourish.
                </p>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="bg-[#F5F5F5] rounded-2xl p-8 lg:p-12 shadow-sm">
                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    {
                      title: "24/7 Supervision",
                      desc: "Continuous staff presence and monitoring to ensure resident safety and respond to needs immediately.",
                    },
                    {
                      title: "Secure Environment",
                      desc: "Thoughtfully designed facilities that balance safety with comfort and normalcy.",
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
                      <h3 className="font-semibold text-[#17375E] mb-2">{item.title}</h3>
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
      <section className="py-20 bg-[#1F5D3A]">
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
