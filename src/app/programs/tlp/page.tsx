"use client";

import Link from "next/link";
import { ArrowRight, GraduationCap, Home, DollarSign, Briefcase, Heart, ChevronDown, ChevronUp } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { useState } from "react";

const faqs = [
  {
    question: "What is the difference between TLP and SIL?",
    answer: "While both programs support independence, the Transitional Living Program is specifically designed as a bridge to full independence with intensive preparation for adulthood. TLP includes more structured curriculum around housing readiness, financial independence, and complete self-sufficiency, whereas SIL focuses more on guided independence with ongoing support.",
  },
  {
    question: "How long do residents typically stay in TLP?",
    answer: "Length of stay varies based on individual progress and readiness for full independence. Most residents stay between 6-18 months, during which they work through a structured curriculum and demonstrate readiness for transition.",
  },
  {
    question: "What does housing readiness involve?",
    answer: "Housing readiness includes apartment searching, understanding leases, budgeting for rent and utilities, maintaining a living space, managing landlord relationships, and all the practical skills needed to secure and maintain independent housing.",
  },
  {
    question: "Do you help residents find jobs?",
    answer: "Yes, we provide comprehensive employment support including resume building, interview preparation, job search assistance, workplace skills coaching, and ongoing support once employed. We also help residents explore vocational training and educational opportunities.",
  },
  {
    question: "What happens after a resident completes TLP?",
    answer: "Upon completion, residents transition to fully independent living with a comprehensive aftercare plan. This includes established housing, ongoing support connections, financial stability, and continued access to alumni resources and check-ins.",
  },
];

export default function TLPPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-[#1E1B14]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="max-w-3xl">
              <p className="text-[#5A7A7A] text-sm font-medium tracking-widest uppercase mb-4">
                Transition Program
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
                Transitional Living Program
              </h1>
              <p className="text-lg lg:text-xl text-white/70 leading-relaxed">
                Preparing young adults for successful, independent adulthood through comprehensive 
                life skills training, mentorship, and real-world readiness.
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
                  [TLP Program Image]
                </div>
              </div>
            </FadeIn>
            
            <div>
              <FadeIn direction="right">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#1E1B14] mb-6">
                  The Bridge to Adulthood
                </h2>
                <div className="space-y-4 text-[#4A4A4A] leading-relaxed">
                  <p>
                    The Transitional Living Program (TLP) represents the final step in our continuum 
                    of care—a comprehensive, structured program designed to prepare young adults for 
                    complete independence and successful adulthood.
                  </p>
                  <p>
                    Unlike programs that focus solely on immediate needs, TLP takes a forward-looking 
                    approach, intensively preparing residents for every aspect of independent living: 
                    housing, employment, financial management, education, relationships, and emotional resilience.
                  </p>
                  <p>
                    Through a combination of structured curriculum, real-world practice, intensive 
                    case management, and ongoing mentorship, residents develop the confidence, skills, 
                    and resources needed to thrive on their own.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Transition Planning Model */}
      <section className="py-24 lg:py-32 bg-[#F5F3EF]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#1E1B14] mb-4">
                The Transition Planning Model
              </h2>
              <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto">
                A structured, comprehensive approach that ensures no aspect of adulthood readiness is overlooked.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Assessment", desc: "Comprehensive evaluation of current skills, needs, and goals for independence" },
              { step: "2", title: "Planning", desc: "Individualized transition plan with clear milestones and timelines" },
              { step: "3", title: "Skill Building", desc: "Intensive training in all areas of adult living through curriculum and practice" },
              { step: "4", title: "Transition", desc: "Graduated move to independence with ongoing support and aftercare" },
            ].map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.1}>
                <div className="bg-white rounded-xl p-6 text-center h-full">
                  <div className="w-12 h-12 rounded-full bg-[#5A7A7A] text-white flex items-center justify-center font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-[#1E1B14] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#4A4A4A]">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Core Components */}
      <section className="py-24 lg:py-32 bg-[#1E1B14]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-4">
                Core Program Components
              </h2>
              <p className="text-lg text-white/70 max-w-2xl mx-auto">
                Six pillars of preparation for successful independent living.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Home,
                title: "Daily Living Skills",
                desc: "Mastering household management, personal care, time management, and self-care routines essential for independent living.",
              },
              {
                icon: DollarSign,
                title: "Financial Literacy",
                desc: "Budgeting, banking, credit building, bill payment, saving strategies, and understanding financial responsibilities.",
              },
              {
                icon: Briefcase,
                title: "Employment Readiness",
                desc: "Career exploration, job search skills, workplace navigation, professional communication, and maintaining employment.",
              },
              {
                icon: GraduationCap,
                title: "Education Planning",
                desc: "Educational goal setting, college or vocational training navigation, financial aid, and balancing school with work.",
              },
              {
                icon: Home,
                title: "Housing Readiness",
                desc: "Apartment searching, lease understanding, landlord relationships, utility management, and housing stability.",
              },
              {
                icon: Heart,
                title: "Emotional Resilience",
                desc: "Stress management, healthy relationships, community connection, help-seeking skills, and maintaining wellness.",
              },
            ].map((component, index) => (
              <FadeIn key={component.title} delay={index * 0.1}>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 h-full">
                  <component.icon className="w-10 h-10 text-[#5A7A7A] mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{component.title}</h3>
                  <p className="text-white/60">{component.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Mentorship */}
      <section className="py-24 lg:py-32 bg-[#FAF9F7]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <FadeIn>
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#1E1B14] mb-6">
                  Mentorship and Support
                </h2>
                <p className="text-lg text-[#4A4A4A] leading-relaxed mb-6">
                  Every resident in TLP is paired with a dedicated mentor who provides ongoing 
                  guidance, support, and accountability throughout their transition journey.
                </p>
                <div className="space-y-4">
                  {[
                    "One-on-one weekly mentoring sessions",
                    "Goal setting and progress tracking",
                    "Problem-solving support for challenges",
                    "Celebration of milestones and successes",
                    "Connection to community resources",
                    "Aftercare planning and transition support",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 text-[#4A4A4A]">
                      <Heart className="w-5 h-5 text-[#5A7A7A] mt-0.5 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>

            <FadeIn direction="right">
              <div className="bg-[#F5F3EF] rounded-2xl p-8 lg:p-12">
                <h3 className="text-2xl font-semibold text-[#1E1B14] mb-6">
                  Case Management
                </h3>
                <p className="text-[#4A4A4A] mb-6">
                  In addition to mentorship, each resident works with a case manager who coordinates 
                  all aspects of their transition plan.
                </p>
                <ul className="space-y-3">
                  {[
                    "Comprehensive needs assessment",
                    "Service coordination and referrals",
                    "Benefits and resource navigation",
                    "Documentation and record keeping",
                    "Crisis intervention when needed",
                    "Transition and aftercare planning",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-[#4A4A4A]">
                      <div className="w-2 h-2 rounded-full bg-[#5A7A7A]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Real-World Practice */}
      <section className="py-24 lg:py-32 bg-[#F5F3EF]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#1E1B14] mb-4">
                Real-World Practice
              </h2>
              <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto">
                Skills are learned through actual practice in real-world settings, not just classroom instruction.
              </p>
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Budgeting", desc: "Managing real monthly budgets with increasing independence" },
              { title: "Meal Planning", desc: "Planning, shopping for, and preparing all meals" },
              { title: "Transportation", desc: "Navigating public transit, driving, or ride services" },
              { title: "Employment", desc: "Working real jobs with support available" },
              { title: "Apartment Living", desc: "Managing household responsibilities" },
              { title: "Social Skills", desc: "Building and maintaining healthy relationships" },
            ].map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.1}>
                <div className="bg-white rounded-xl p-6">
                  <h3 className="font-semibold text-[#1E1B14] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#4A4A4A]">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
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
                Common questions about our Transitional Living Program.
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
              Ready for the Next Step?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Contact us to learn more about how the Transitional Living Program can prepare 
              you or your client for successful independence.
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
