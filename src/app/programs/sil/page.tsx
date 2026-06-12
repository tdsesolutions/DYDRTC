"use client";

import Link from "next/link";
import { ArrowRight, Home, Users, BookOpen, Heart, ChevronDown, ChevronUp } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { useState } from "react";

const faqs = [
  {
    question: "Who is eligible for the Supervised Independent Living program?",
    answer: "Our SIL program serves young adults typically ages 18-21 who have the foundational skills for independence but benefit from structured support and guidance. Residents should be able to participate in daily activities with supervision and are working toward full independence.",
  },
  {
    question: "What does 'supervised independence' mean?",
    answer: "Supervised independence means residents have significant autonomy in their daily lives while having access to support staff who provide guidance, accountability, and assistance when needed. Residents manage their own schedules, meals, and activities with check-ins and support available.",
  },
  {
    question: "How do you help residents develop life skills?",
    answer: "We provide structured life skills programming including budgeting and financial management, meal planning and preparation, household management, time management, transportation skills, employment readiness, and social skills development. Skills are taught through individual coaching, group sessions, and real-world practice.",
  },
  {
    question: "Can residents work or attend school while in the program?",
    answer: "Absolutely. We strongly encourage and support residents in pursuing education, employment, or vocational training. Our program is designed to accommodate work and school schedules while providing the structure needed for success.",
  },
  {
    question: "What happens when a resident is ready to transition out?",
    answer: "We work with each resident on a comprehensive transition plan that includes housing readiness, financial planning, ongoing support connections, and gradual reduction of services. Our goal is a smooth, successful transition to fully independent living.",
  },
];

export default function SILPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-[#1E1B14]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="max-w-3xl">
              <p className="text-[#5A7A7A] text-sm font-medium tracking-widest uppercase mb-4">
                Independent Living Program
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
                Supervised Independent Living
              </h1>
              <p className="text-lg lg:text-xl text-white/70 leading-relaxed">
                Building confidence, skills, and independence in a supportive environment designed 
                for young adults transitioning toward self-sufficiency.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-24 lg:py-32 bg-[#FAF9F7]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn direction="left">
              <div className="aspect-[4/3] bg-[#E8E2D9] rounded-2xl overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-[#9A9A9A]">
                  [SIL Program Image]
                </div>
              </div>
            </FadeIn>
            
            <div>
              <FadeIn direction="right">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#1E1B14] mb-6">
                  Guided Independence for Young Adults
                </h2>
                <div className="space-y-4 text-[#4A4A4A] leading-relaxed">
                  <p>
                    Our Supervised Independent Living (SIL) program bridges the gap between residential 
                    treatment and fully independent living. Designed for young adults who have the 
                    foundational skills for independence but benefit from structure, support, and guidance, 
                    SIL provides the perfect balance of autonomy and accountability.
                  </p>
                  <p>
                    Residents live in a supportive community environment where they manage their daily 
                    lives with increasing independence while having access to staff who provide mentorship, 
                    skills coaching, and support when challenges arise.
                  </p>
                  <p>
                    The program focuses on developing the practical skills, confidence, and resilience 
                    needed for successful adulthood—whether that means pursuing education, entering the 
                    workforce, or preparing for fully independent living.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Guided Independence Model */}
      <section className="py-24 lg:py-32 bg-[#F5F3EF]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#1E1B14] mb-4">
                The Guided Independence Model
              </h2>
              <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto">
                A structured approach that builds independence through real-world practice with support.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Structured Support",
                desc: "Regular check-ins, curfews, and expectations provide the framework for success while allowing significant autonomy.",
              },
              {
                title: "Skill Development",
                desc: "Individualized coaching in life skills, financial management, and daily living through hands-on practice.",
              },
              {
                title: "Graduated Independence",
                desc: "As residents demonstrate readiness, they earn increased privileges and autonomy, building toward full independence.",
              },
            ].map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.15}>
                <div className="bg-white rounded-xl p-8 text-center h-full">
                  <h3 className="text-xl font-semibold text-[#1E1B14] mb-3">{item.title}</h3>
                  <p className="text-[#4A4A4A]">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Life Skills */}
      <section className="py-24 lg:py-32 bg-[#1E1B14]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <FadeIn>
              <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-6">
                Life Skills Development
              </h2>
              <p className="text-lg text-white/70 leading-relaxed mb-8">
                Our comprehensive life skills curriculum addresses the practical competencies 
                needed for successful independent living.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Budgeting and financial management",
                  "Meal planning and cooking",
                  "Household maintenance",
                  "Time management",
                  "Transportation skills",
                  "Personal care and hygiene",
                  "Communication skills",
                  "Problem-solving strategies",
                ].map((skill) => (
                  <div key={skill} className="flex items-center gap-3 text-white/60">
                    <div className="w-2 h-2 rounded-full bg-[#5A7A7A]" />
                    {skill}
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-6">How Skills Are Taught</h3>
                <div className="space-y-6">
                  {[
                    {
                      method: "Individual Coaching",
                      desc: "One-on-one support tailored to each resident's specific needs and goals",
                    },
                    {
                      method: "Group Workshops",
                      desc: "Peer learning and practice in structured group settings",
                    },
                    {
                      method: "Real-World Practice",
                      desc: "Applying skills in actual daily life with support available",
                    },
                    {
                      method: "Mentorship",
                      desc: "Guidance from staff who model and teach adult living skills",
                    },
                  ].map((item) => (
                    <div key={item.method}>
                      <h4 className="font-medium text-white mb-1">{item.method}</h4>
                      <p className="text-sm text-white/60">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Accountability & Structure */}
      <section className="py-24 lg:py-32 bg-[#FAF9F7]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#1E1B14] mb-4">
                  Accountability and Structure
                </h2>
                <p className="text-lg text-[#4A4A4A]">
                  The framework that supports growth while maintaining safety and progress.
                </p>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm">
                <div className="grid sm:grid-cols-2 gap-8">
                  {[
                    {
                      title: "Regular Check-ins",
                      desc: "Scheduled contact with staff to discuss progress, challenges, and goals",
                    },
                    {
                      title: "Curfew and Safety",
                      desc: "Appropriate boundaries that ensure safety while building responsibility",
                    },
                    {
                      title: "Chore Responsibilities",
                      desc: "Shared household duties that teach accountability and community living",
                    },
                    {
                      title: "Meeting Attendance",
                      desc: "Required participation in house meetings, skills groups, and individual sessions",
                    },
                    {
                      title: "Goal Setting",
                      desc: "Regular review and updating of personal goals with staff support",
                    },
                    {
                      title: "Consequences and Support",
                      desc: "Natural consequences for choices paired with supportive guidance",
                    },
                  ].map((item) => (
                    <div key={item.title}>
                      <h3 className="font-semibold text-[#1E1B14] mb-1">{item.title}</h3>
                      <p className="text-sm text-[#4A4A4A]">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Education & Employment */}
      <section className="py-24 lg:py-32 bg-[#F5F3EF]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <FadeIn>
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#1E1B14] mb-6">
                  Education and Employment Readiness
                </h2>
                <p className="text-lg text-[#4A4A4A] leading-relaxed mb-6">
                  We actively support residents in pursuing their educational and vocational goals. 
                  Whether attending college, vocational training, or entering the workforce, our 
                  program provides the structure and support needed for success.
                </p>
                <div className="space-y-4">
                  {[
                    "Educational advocacy and school coordination",
                    "Employment search support and resume building",
                    "Interview preparation and job coaching",
                    "Time management for work/school balance",
                    "Transportation assistance",
                    "Ongoing support for workplace challenges",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 text-[#4A4A4A]">
                      <BookOpen className="w-5 h-5 text-[#5A7A7A] mt-0.5 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>

            <FadeIn direction="right">
              <div className="aspect-[4/3] bg-[#E8E2D9] rounded-2xl overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-[#9A9A9A]">
                  [Education/Employment Image]
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 lg:py-32 bg-[#FAF9F7]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#1E1B14] mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-[#4A4A4A]">
                Common questions about our Supervised Independent Living program.
              </p>
            </div>
          </FadeIn>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <FadeIn key={index} delay={index * 0.05}>
                <div className="bg-white rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-[#FAF9F7] transition-colors"
                  >
                    <span className="font-semibold text-[#1E1B14] pr-8">{faq.question}</span>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-[#5A7A7A] flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#5A7A7A] flex-shrink-0" />
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
      <section className="py-20 bg-[#5A7A7A]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
          <FadeIn>
            <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-6">
              Ready to Learn More?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Contact us to discuss whether Supervised Independent Living is the right next 
              step for you or your client.
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
