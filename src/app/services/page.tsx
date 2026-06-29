"use client";

import Link from "next/link";
import { ArrowRight, Brain, ClipboardList, BookOpen, Users, Map, Shield } from "lucide-react";
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
    icon: Map,
    title: "Discharge Planning",
    description: "Comprehensive aftercare coordination and transition support to ensure sustained success after residential treatment.",
    features: ["Aftercare coordination", "Community resource linkage", "Follow-up support planning", "Crisis prevention planning"],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-[#17375E] to-[#1F5D3A]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(198,161,91,0.1),_transparent_50%)]" />
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
          <FadeIn>
            <div className="max-w-3xl">
              <p className="text-[#C6A15B] text-sm font-medium tracking-widest uppercase mb-4">
                Our Services
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
                Comprehensive services for transformation.
              </h1>
              <p className="text-lg lg:text-xl text-white/70 leading-relaxed">
                We provide integrated services that address the emotional, behavioral, educational, 
                and developmental needs of every young person we serve.
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
                Holistic Care for Lasting Change
              </h2>
              <p className="text-lg text-[#4A4A4A] leading-relaxed">
                At Defining Your Destiny Youth Center, we believe that effective treatment requires 
                addressing the whole person. Our comprehensive service model ensures that every aspect 
                of a resident&apos;s well-being is supported through coordinated, individualized care.
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
                    <p className="text-[#4A4A4A] leading-relaxed mb-4">
                      {service.description}
                    </p>
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

      {/* Collaborative Care Team */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn direction="left">
              <div className="aspect-[4/3] bg-gradient-to-br from-[#1F5D3A]/10 to-[#17375E]/10 rounded-2xl overflow-hidden flex items-center justify-center">
                <div className="text-center p-8">
                  <Users className="w-16 h-16 text-[#1F5D3A]/30 mx-auto mb-4" />
                  <p className="text-[#4A4A4A]/50 text-sm">Collaborative Care Team</p>
                </div>
              </div>
            </FadeIn>
            
            <div>
              <FadeIn direction="right">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#17375E] mb-6">
                  A Collaborative Approach to Care
                </h2>
                <p className="text-lg text-[#4A4A4A] leading-relaxed mb-6">
                  Effective treatment requires a team. Our multidisciplinary team works together 
                  to ensure that every resident receives comprehensive, coordinated care that 
                  addresses their unique needs and supports their journey toward independence.
                </p>
                <div className="space-y-4">
                  {[
                    { title: "Licensed Therapists", desc: "Providing individual and group therapy" },
                    { title: "Case Managers", desc: "Coordinating care and advocating for residents" },
                    { title: "Behavioral Specialists", desc: "Supporting positive behavior development" },
                    { title: "Educational Liaisons", desc: "Ensuring academic continuity and success" },
                    { title: "Direct Care Professionals", desc: "Providing 24/7 support and supervision" },
                  ].map((role) => (
                    <div key={role.title} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#1F5D3A] mt-2" />
                      <div>
                        <span className="font-medium text-[#17375E]">{role.title}</span>
                        <span className="text-[#4A4A4A]"> — {role.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Supervision */}
      <section className="py-24 lg:py-32 bg-[#17375E]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-4">
                Safety & Supervision
              </h2>
              <p className="text-lg text-white/70">
                Creating a secure environment where healing and growth can flourish.
              </p>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "24/7 Supervision",
                description: "Trained staff provide continuous monitoring and support to ensure the safety and well-being of all residents.",
              },
              {
                title: "Structured Environment",
                description: "Clear routines, expectations, and boundaries create predictability and security for residents.",
              },
              {
                title: "Crisis Prevention",
                description: "Proactive strategies and trained staff help prevent crises and respond effectively when needed.",
              },
            ].map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.15}>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 text-center">
                  <h3 className="text-xl font-semibold text-white mb-4">{item.title}</h3>
                  <p className="text-white/60 leading-relaxed">{item.description}</p>
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
              Ready to Learn More?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Contact our admissions team to discuss how our comprehensive services can support 
              your child or client on their journey toward healing and independence.
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
