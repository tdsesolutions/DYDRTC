"use client";

import Link from "next/link";
import { ArrowRight, Home, Users, BookOpen, Heart, ChevronDown, ChevronUp } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { useState } from "react";

const faqs = [
  {
    question: "Who participates in Life Skills Development?",
    answer: "Life Skills Development is integrated into our Residential Treatment program for all residents. The specific skills targeted are tailored to each individual's age, developmental level, and treatment goals.",
  },
  {
    question: "What types of life skills are taught?",
    answer: "We teach a comprehensive range of life skills including daily living skills (personal hygiene, household tasks), emotional regulation, social skills, communication, problem-solving, time management, and personal responsibility.",
  },
  {
    question: "How are life skills taught?",
    answer: "Life skills are taught through a combination of structured group sessions, individual coaching, real-world practice, and natural learning opportunities throughout the daily routine. We use evidence-based curricula and hands-on learning approaches.",
  },
  {
    question: "How do you measure progress in life skills?",
    answer: "We track life skills development through regular assessments, observation, and documentation of skill acquisition. Progress is reviewed in treatment team meetings and shared with families.",
  },
  {
    question: "How are families involved in life skills training?",
    answer: "Families are educated about the life skills their child is developing and how to support continued practice at home. We provide resources and guidance for maintaining skills after discharge.",
  },
];

export default function LifeSkillsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-[#17375E]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="max-w-3xl">
              <p className="text-[#C6A15B] text-sm font-medium tracking-widest uppercase mb-4">
                Life Skills Program
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
                Life Skills Development
              </h1>
              <p className="text-lg lg:text-xl text-white/70 leading-relaxed">
                Building essential daily living skills, emotional regulation, and personal 
                responsibility for successful functioning.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn direction="left">
              <div className="aspect-[4/3] bg-[#F5F5F5] rounded-2xl overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-[#9A9A9A]">
                  [Life Skills Image]
                </div>
              </div>
            </FadeIn>
            
            <div>
              <FadeIn direction="right">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#17375E] mb-6">
                  Building Competencies for Success
                </h2>
                <div className="space-y-4 text-[#4A4A4A] leading-relaxed">
                  <p>
                    Life Skills Development is a core component of our residential treatment program, 
                    designed to help residents develop the practical and emotional competencies 
                    needed for successful daily functioning.
                  </p>
                  <p>
                    We recognize that many of the youth we serve have gaps in their life skills 
                    due to trauma, instability, or other challenges. Our structured programming 
                    addresses these gaps through targeted instruction, practice, and reinforcement.
                  </p>
                  <p>
                    The program focuses on developing skills in a supportive environment where 
                    residents can learn, practice, and master competencies at their own pace with 
                    guidance from trained staff.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Categories */}
      <section className="py-24 lg:py-32 bg-[#F5F5F5]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#17375E] mb-4">
                Core Life Skills Areas
              </h2>
              <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto">
                Comprehensive skill development across multiple domains essential for daily living.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Daily Living Skills",
                items: ["Personal hygiene", "Clothing care", "Meal preparation", "Household tasks"],
              },
              {
                title: "Emotional Regulation",
                items: ["Identifying emotions", "Coping strategies", "Stress management", "Self-calming techniques"],
              },
              {
                title: "Social Skills",
                items: ["Communication", "Conflict resolution", "Making friends", "Appropriate boundaries"],
              },
              {
                title: "Personal Responsibility",
                items: ["Following routines", "Completing tasks", "Time management", "Accountability"],
              },
              {
                title: "Problem-Solving",
                items: ["Decision making", "Critical thinking", "Resourcefulness", "Help-seeking"],
              },
              {
                title: "Community Skills",
                items: ["Public behavior", "Safety awareness", "Resource navigation", "Social norms"],
              },
            ].map((category, index) => (
              <FadeIn key={category.title} delay={index * 0.1}>
                <div className="bg-white rounded-xl p-8 border border-[#E8E8E8] h-full">
                  <h3 className="text-xl font-semibold text-[#17375E] mb-4">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-[#4A4A4A]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#1F5D3A]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Methods */}
      <section className="py-24 lg:py-32 bg-[#17375E]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <FadeIn>
              <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-6">
                How Skills Are Taught
              </h2>
              <p className="text-lg text-white/70 leading-relaxed mb-8">
                We use a variety of evidence-based teaching methods to ensure skills are learned 
                and can be applied in real-world settings.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Structured group sessions",
                  "Individual coaching",
                  "Hands-on practice",
                  "Role-playing scenarios",
                  "Natural environment teaching",
                  "Positive reinforcement",
                  "Skill chaining",
                  "Generalization practice",
                ].map((method) => (
                  <div key={method} className="flex items-center gap-3 text-white/60">
                    <div className="w-2 h-2 rounded-full bg-[#C6A15B]" />
                    {method}
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-6">Our Approach</h3>
                <div className="space-y-6">
                  {[
                    {
                      method: "Assessment",
                      desc: "Identifying current skill levels and areas for development",
                    },
                    {
                      method: "Instruction",
                      desc: "Teaching skills through modeling, explanation, and demonstration",
                    },
                    {
                      method: "Practice",
                      desc: "Providing opportunities for repeated practice with support",
                    },
                    {
                      method: "Mastery",
                      desc: "Building independence and generalization to new situations",
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

      {/* Integration with Treatment */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#17375E] mb-4">
                  Integration with Clinical Treatment
                </h2>
                <p className="text-lg text-[#4A4A4A]">
                  Life skills development is seamlessly integrated with therapeutic care.
                </p>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="bg-[#F5F5F5] rounded-2xl p-8 lg:p-12 shadow-sm">
                <div className="grid sm:grid-cols-2 gap-8">
                  {[
                    {
                      title: "Therapeutic Goals",
                      desc: "Life skills objectives align with individual treatment plan goals",
                    },
                    {
                      title: "Clinical Support",
                      desc: "Therapists address emotional barriers to skill acquisition",
                    },
                    {
                      title: "Behavioral Plans",
                      desc: "Life skills practice reinforces positive behavioral interventions",
                    },
                    {
                      title: "Family Connection",
                      desc: "Families learn how to support skill development at home",
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

      {/* Progress Tracking */}
      <section className="py-24 lg:py-32 bg-[#F5F5F5]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <FadeIn>
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#17375E] mb-6">
                  Progress Tracking
                </h2>
                <p className="text-lg text-[#4A4A4A] leading-relaxed mb-6">
                  We systematically track and document life skills development to ensure 
                  residents are making meaningful progress toward their goals.
                </p>
                <div className="space-y-4">
                  {[
                    "Regular skill assessments",
                    "Daily documentation of practice",
                    "Weekly progress reviews",
                    "Treatment team integration",
                    "Family progress updates",
                    "Discharge readiness evaluation",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 text-[#4A4A4A]">
                      <BookOpen className="w-5 h-5 text-[#1F5D3A] mt-0.5 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>

            <FadeIn direction="right">
              <div className="aspect-[4/3] bg-[#E8E8E8] rounded-2xl overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-[#9A9A9A]">
                  [Progress Tracking Image]
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#17375E] mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-[#4A4A4A]">
                Common questions about our Life Skills Development program.
              </p>
            </div>
          </FadeIn>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <FadeIn key={index} delay={index * 0.05}>
                <div className="bg-[#F5F5F5] rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-[#E8E8E8] transition-colors"
                  >
                    <span className="font-semibold text-[#17375E] pr-8">{faq.question}</span>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-[#1F5D3A] flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#1F5D3A] flex-shrink-0" />
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
      <section className="py-20 bg-[#1F5D3A]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
          <FadeIn>
            <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-6">
              Ready to Learn More?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Contact us to discuss how our Life Skills Development program can support 
              you or your client.
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
