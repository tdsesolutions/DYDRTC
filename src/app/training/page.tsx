"use client";

import Link from "next/link";
import { ArrowRight, Award, BookOpen, Users, Calendar, CheckCircle, ChevronDown, ChevronUp } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { useState } from "react";

const faqs = [
  {
    question: "Who can attend LCCA & Director Training?",
    answer: "Our training programs are designed for current and aspiring Licensed Child Care Administrators (LCCAs), Residential Treatment Center Directors, Assistant Directors, Program Directors, and other leadership staff in residential child care settings. We also welcome regulatory staff and consultants seeking professional development.",
  },
  {
    question: "What topics are covered in the training?",
    answer: "Our comprehensive curriculum covers Texas Chapter 748 regulations, trauma-informed leadership, staff supervision and development, quality assurance, risk management, family engagement strategies, treatment planning oversight, and best practices in residential child care administration.",
  },
  {
    question: "Is the training approved for continuing education?",
    answer: "Yes, our training programs are designed to meet continuing education requirements for Licensed Child Care Administrators in Texas. We provide certificates of completion for all training sessions attended.",
  },
  {
    question: "How long is the training program?",
    answer: "We offer various training formats including intensive multi-day workshops, single-day seminars, and ongoing professional development series. Specific schedules vary by program. Contact us for current training calendar.",
  },
  {
    question: "Do you offer on-site training for organizations?",
    answer: "Yes, we can provide customized on-site training for residential child care organizations. This option allows us to tailor content to your specific needs and context while minimizing travel for your leadership team.",
  },
];

const trainingModules = [
  {
    title: "Regulatory Compliance",
    topics: ["Texas Chapter 748 requirements", "Licensing standards", "Documentation and records", "Inspection preparation"],
  },
  {
    title: "Leadership Excellence",
    topics: ["Trauma-informed leadership", "Staff supervision", "Team building", "Conflict resolution"],
  },
  {
    title: "Quality Assurance",
    topics: ["Program evaluation", "Outcome measurement", "Continuous improvement", "Best practices"],
  },
  {
    title: "Risk Management",
    topics: ["Safety protocols", "Incident management", "Crisis prevention", "Liability awareness"],
  },
  {
    title: "Family & Community Engagement",
    topics: ["Family partnerships", "Community collaboration", "Stakeholder communication", "Advocacy"],
  },
  {
    title: "Treatment Oversight",
    topics: ["Clinical supervision", "Treatment planning", "Behavioral interventions", "Discharge planning"],
  },
];

export default function TrainingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-[#17375E]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="max-w-3xl">
              <p className="text-[#C6A15B] text-sm font-medium tracking-widest uppercase mb-4">
                Professional Development
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
                LCCA & Director Training
              </h1>
              <p className="text-lg lg:text-xl text-white/70 leading-relaxed">
                Comprehensive training and professional development for Licensed Child Care 
                Administrators and Residential Treatment Center leadership.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn direction="left">
              <div className="aspect-[4/3] bg-[#F5F5F5] rounded-2xl overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-[#9A9A9A]">
                  [Training Session Image]
                </div>
              </div>
            </FadeIn>
            
            <div>
              <FadeIn direction="right">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#17375E] mb-6">
                  Elevating Leadership in Residential Child Care
                </h2>
                <div className="space-y-4 text-[#4A4A4A] leading-relaxed">
                  <p>
                    Effective leadership is the cornerstone of quality residential child care. 
                    Our LCCA & Director Training programs are designed to equip administrators 
                    and directors with the knowledge, skills, and tools needed to lead 
                    trauma-informed, high-quality programs that truly make a difference in 
                    the lives of children and families.
                  </p>
                  <p>
                    Drawing from our extensive experience in residential treatment and deep 
                    understanding of Texas regulatory requirements, we provide practical, 
                    applicable training that prepares leaders to navigate the complex 
                    challenges of residential child care administration.
                  </p>
                  <p>
                    Whether you are a new administrator seeking foundational knowledge or an 
                    experienced director looking to enhance your leadership skills, our 
                    training programs offer valuable insights and professional growth opportunities.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Training Modules */}
      <section className="py-24 lg:py-32 bg-[#F5F5F5]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#17375E] mb-4">
                Training Curriculum
              </h2>
              <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto">
                Comprehensive modules covering all aspects of residential child care leadership.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trainingModules.map((module, index) => (
              <FadeIn key={module.title} delay={index * 0.1}>
                <div className="bg-white rounded-xl p-8 border border-[#E8E8E8] h-full">
                  <BookOpen className="w-8 h-8 text-[#1F5D3A] mb-4" />
                  <h3 className="text-lg font-semibold text-[#17375E] mb-4">{module.title}</h3>
                  <ul className="space-y-2">
                    {module.topics.map((topic) => (
                      <li key={topic} className="flex items-center gap-2 text-sm text-[#4A4A4A]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#1F5D3A]" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Who Should Attend */}
      <section className="py-24 lg:py-32 bg-[#17375E]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-4">
                Who Should Attend
              </h2>
              <p className="text-lg text-white/70 max-w-2xl mx-auto">
                Our training programs are designed for leadership in residential child care settings.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, title: "Licensed Child Care Administrators", desc: "Current LCCAs and those seeking licensure" },
              { icon: Users, title: "RTC Directors", desc: "Residential Treatment Center leadership" },
              { icon: Users, title: "Program Directors", desc: "Assistant directors and program managers" },
              { icon: BookOpen, title: "Regulatory Staff", desc: "Quality assurance and compliance personnel" },
            ].map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.1}>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 text-center h-full">
                  <item.icon className="w-10 h-10 text-[#C6A15B] mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-white/60 text-sm">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Training Formats */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#17375E] mb-4">
                Training Formats
              </h2>
              <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto">
                Flexible options to meet your professional development needs.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Intensive Workshops",
                desc: "Multi-day immersive training experiences covering comprehensive curriculum with hands-on application and case studies.",
                features: ["3-5 day programs", "In-depth coverage", "Interactive sessions", "Networking opportunities"],
              },
              {
                title: "Single-Day Seminars",
                desc: "Focused training on specific topics for leaders seeking targeted professional development in key areas.",
                features: ["Topic-specific focus", "Expert presenters", "Practical takeaways", "CE credit eligible"],
              },
              {
                title: "On-Site Training",
                desc: "Customized training delivered at your facility, tailored to your organization's specific needs and context.",
                features: ["Customized content", "Team-based learning", "Reduced travel costs", "Organization-specific focus"],
              },
            ].map((format, index) => (
              <FadeIn key={format.title} delay={index * 0.15}>
                <div className="bg-[#F5F5F5] rounded-xl p-8 h-full">
                  <h3 className="text-xl font-semibold text-[#17375E] mb-4">{format.title}</h3>
                  <p className="text-[#4A4A4A] mb-6">{format.desc}</p>
                  <ul className="space-y-2">
                    {format.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-[#4A4A4A]">
                        <CheckCircle className="w-4 h-4 text-[#1F5D3A]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Training */}
      <section className="py-24 lg:py-32 bg-[#F5F5F5]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <FadeIn>
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#17375E] mb-6">
                  Why Choose Our Training
                </h2>
                <p className="text-lg text-[#4A4A4A] leading-relaxed mb-6">
                  Our training programs stand apart because they are developed and delivered 
                  by professionals with real-world experience in residential child care leadership.
                </p>
                <div className="space-y-4">
                  {[
                    "Experienced instructors with active leadership backgrounds",
                    "Practical, applicable content based on real scenarios",
                    "Current regulatory knowledge and compliance guidance",
                    "Trauma-informed approach throughout all training",
                    "Networking with fellow residential care leaders",
                    "Ongoing support and consultation availability",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 text-[#4A4A4A]">
                      <Award className="w-5 h-5 text-[#1F5D3A] mt-0.5 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>

            <FadeIn direction="right">
              <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm">
                <Calendar className="w-12 h-12 text-[#1F5D3A] mb-6" />
                <h3 className="text-2xl font-semibold text-[#17375E] mb-4">
                  Upcoming Training Sessions
                </h3>
                <p className="text-[#4A4A4A] mb-6">
                  Contact us for our current training calendar and to register for upcoming sessions. 
                  We offer programs throughout the year to accommodate busy schedules.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-[#4A4A4A]">
                    <CheckCircle className="w-5 h-5 text-[#1F5D3A]" />
                    <span>Spring Intensive Workshop - March 2026</span>
                  </div>
                  <div className="flex items-center gap-3 text-[#4A4A4A]">
                    <CheckCircle className="w-5 h-5 text-[#1F5D3A]" />
                    <span>Summer Leadership Seminar - June 2026</span>
                  </div>
                  <div className="flex items-center gap-3 text-[#4A4A4A]">
                    <CheckCircle className="w-5 h-5 text-[#1F5D3A]" />
                    <span>Fall Workshop Series - September 2026</span>
                  </div>
                </div>
                <p className="text-sm text-[#4A4A4A]/60 mt-6">
                  Dates subject to change. Contact us to confirm current schedule.
                </p>
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
                Common questions about our LCCA & Director Training programs.
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
              Ready to Enhance Your Leadership?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Contact us to learn more about our training programs, upcoming sessions, 
              and how we can support your professional development.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#C6A15B] text-white font-medium rounded-full hover:bg-white hover:text-[#17375E] transition-colors"
              >
                Contact Us <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/resources"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white font-medium rounded-full hover:bg-white/10 transition-colors"
              >
                View Resources
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
