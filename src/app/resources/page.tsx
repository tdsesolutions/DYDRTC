"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, Users, FileText, HelpCircle, ChevronDown, ChevronUp, Download } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { useState } from "react";

const familyFaqs = [
  {
    question: "How do I know if residential treatment is right for my child?",
    answer: "Residential treatment may be appropriate when a child has complex needs that cannot be safely or effectively met in a less restrictive setting. Our admissions team can help assess your specific situation and determine if our programs are a good fit. We consider medical needs, behavioral challenges, safety concerns, and the family's overall situation.",
  },
  {
    question: "What is the admissions process?",
    answer: "The admissions process begins with an initial inquiry, followed by a comprehensive assessment of the child's needs. We review medical records, conduct interviews, and work with referral sources to determine program fit. Once accepted, we coordinate intake logistics and develop an initial treatment plan.",
  },
  {
    question: "How often can I visit my child?",
    answer: "Family visitation is encouraged and scheduled based on the child's treatment plan and progress. We work with families to establish visitation schedules that support the therapeutic process while maintaining important family connections.",
  },
  {
    question: "Will my child be able to continue school?",
    answer: "Yes, we coordinate with schools to ensure educational continuity. Our educational liaisons work with schools, attend IEP meetings, and advocate for appropriate educational services. Many residents continue their education with minimal disruption.",
  },
  {
    question: "How are families involved in treatment?",
    answer: "Families are essential partners in the treatment process. We provide family therapy, regular updates, parent education, and opportunities for involvement in treatment planning. We believe family engagement is crucial for long-term success.",
  },
];

const referralFaqs = [
  {
    question: "Who can make a referral?",
    answer: "Referrals can come from various sources including CPS caseworkers, therapists, physicians, schools, hospitals, and families themselves. We work with referral sources to ensure appropriate placement and coordinated care.",
  },
  {
    question: "What information do you need for a referral?",
    answer: "We typically need basic demographic information, current diagnoses, medical history, behavioral concerns, educational background, insurance information, and current medications. Our admissions team can provide a comprehensive referral checklist.",
  },
  {
    question: "How quickly can a placement occur?",
    answer: "Placement timing varies based on bed availability, the urgency of the situation, and completion of the assessment process. Emergency placements may be accommodated more quickly when safety is a concern.",
  },
  {
    question: "Do you accept insurance?",
    answer: "We work with various funding sources including private insurance, Medicaid, and state/county contracts. Our admissions team can help determine coverage and discuss payment options.",
  },
];

const downloads = [
  { title: "Family Guide", desc: "Comprehensive guide for families considering or entering our programs", size: "PDF" },
  { title: "Referral Checklist", desc: "Complete list of information needed for the referral process", size: "PDF" },
  { title: "Admissions Overview", desc: "Step-by-step guide to the admissions process", size: "PDF" },
  { title: "Resident Rights Summary", desc: "Overview of resident rights and protections", size: "PDF" },
];

export default function ResourcesPage() {
  const [openFamilyFaq, setOpenFamilyFaq] = useState<number | null>(null);
  const [openReferralFaq, setOpenReferralFaq] = useState<number | null>(null);

  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-[#1E1B14]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="max-w-3xl">
              <p className="text-[#5A7A7A] text-sm font-medium tracking-widest uppercase mb-4">
                Resources
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
                Information and support for families and professionals.
              </h1>
              <p className="text-lg lg:text-xl text-white/70 leading-relaxed">
                Find answers to common questions, download helpful resources, and learn more 
                about residential treatment.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Resource Introduction */}
      <section className="py-24 lg:py-32 bg-[#FAF9F7]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#1E1B14] mb-6">
                How Can We Help?
              </h2>
              <p className="text-lg text-[#4A4A4A] leading-relaxed">
                Whether you're a family considering residential treatment for your child, 
                a professional making a referral, or seeking to understand more about our 
                services, these resources are designed to provide the information you need.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Family FAQs */}
      <section className="py-24 lg:py-32 bg-[#F5F3EF]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <div className="text-center mb-12">
                <div className="w-16 h-16 rounded-full bg-[#5A7A7A]/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-[#5A7A7A]" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#1E1B14] mb-4">
                  Family FAQs
                </h2>
                <p className="text-lg text-[#4A4A4A]">
                  Common questions from families considering our programs.
                </p>
              </div>
            </FadeIn>

            <div className="space-y-4">
              {familyFaqs.map((faq, index) => (
                <FadeIn key={index} delay={index * 0.05}>
                  <div className="bg-white rounded-xl overflow-hidden">
                    <button
                      onClick={() => setOpenFamilyFaq(openFamilyFaq === index ? null : index)}
                      className="w-full flex items-center justify-between p-6 text-left hover:bg-[#FAF9F7] transition-colors"
                    >
                      <span className="font-semibold text-[#1E1B14] pr-8">{faq.question}</span>
                      {openFamilyFaq === index ? (
                        <ChevronUp className="w-5 h-5 text-[#5A7A7A] flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-[#5A7A7A] flex-shrink-0" />
                      )}
                    </button>
                    {openFamilyFaq === index && (
                      <div className="px-6 pb-6">
                        <p className="text-[#4A4A4A] leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Referral FAQs */}
      <section className="py-24 lg:py-32 bg-[#FAF9F7]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <div className="text-center mb-12">
                <div className="w-16 h-16 rounded-full bg-[#5A7A7A]/10 flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-[#5A7A7A]" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#1E1B14] mb-4">
                  Referral Partner FAQs
                </h2>
                <p className="text-lg text-[#4A4A4A]">
                  Information for professionals making referrals.
                </p>
              </div>
            </FadeIn>

            <div className="space-y-4">
              {referralFaqs.map((faq, index) => (
                <FadeIn key={index} delay={index * 0.05}>
                  <div className="bg-white rounded-xl overflow-hidden">
                    <button
                      onClick={() => setOpenReferralFaq(openReferralFaq === index ? null : index)}
                      className="w-full flex items-center justify-between p-6 text-left hover:bg-[#FAF9F7] transition-colors"
                    >
                      <span className="font-semibold text-[#1E1B14] pr-8">{faq.question}</span>
                      {openReferralFaq === index ? (
                        <ChevronUp className="w-5 h-5 text-[#5A7A7A] flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-[#5A7A7A] flex-shrink-0" />
                      )}
                    </button>
                    {openReferralFaq === index && (
                      <div className="px-6 pb-6">
                        <p className="text-[#4A4A4A] leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Understanding RTC */}
      <section className="py-24 lg:py-32 bg-[#1E1B14]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <FadeIn>
              <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-6">
                Understanding Residential Treatment
              </h2>
              <p className="text-lg text-white/70 leading-relaxed mb-8">
                Residential treatment centers provide 24-hour care and therapeutic support for 
                children and adolescents with complex behavioral, emotional, or medical needs. 
                These programs offer a structured environment where young people can receive 
                intensive services while living in a safe, supportive setting.
              </p>
              <div className="space-y-4">
                {[
                  "24-hour supervision and support",
                  "Individual and group therapy",
                  "Educational services",
                  "Medical and psychiatric care",
                  "Life skills development",
                  "Family therapy and support",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-white/60">
                    <div className="w-2 h-2 rounded-full bg-[#5A7A7A]" />
                    {item}
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-6">
                  When is Residential Treatment Appropriate?
                </h3>
                <p className="text-white/60 mb-6">
                  Residential treatment may be recommended when:
                </p>
                <ul className="space-y-4">
                  {[
                    "Less intensive services have been insufficient",
                    "Safety concerns require 24-hour supervision",
                    "Complex medical needs require skilled nursing",
                    "Intensive therapeutic intervention is needed",
                    "Family crisis requires temporary placement",
                    "Transition from hospital or acute care is needed",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-white/60">
                      <HelpCircle className="w-5 h-5 text-[#5A7A7A] mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section className="py-24 lg:py-32 bg-[#FAF9F7]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="text-center mb-12">
              <div className="w-16 h-16 rounded-full bg-[#5A7A7A]/10 flex items-center justify-center mx-auto mb-4">
                <Download className="w-8 h-8 text-[#5A7A7A]" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#1E1B14] mb-4">
                Downloadable Resources
              </h2>
              <p className="text-lg text-[#4A4A4A]">
                Helpful documents available for download.
              </p>
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {downloads.map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.1}>
                <div className="bg-white rounded-xl p-6 border border-[#E8E2D9] hover:shadow-lg transition-shadow cursor-pointer group">
                  <FileText className="w-10 h-10 text-[#5A7A7A] mb-4" />
                  <h3 className="font-semibold text-[#1E1B14] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#4A4A4A] mb-4">{item.desc}</p>
                  <span className="inline-flex items-center text-sm text-[#5A7A7A] font-medium group-hover:gap-2 transition-all">
                    Download {item.size} <ArrowRight className="w-4 h-4 ml-1" />
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 lg:py-32 bg-[#F5F3EF]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#1E1B14] mb-6">
                Still Have Questions?
              </h2>
              <p className="text-lg text-[#4A4A4A] mb-8">
                Our team is here to help. Reach out for personalized assistance with your 
                specific situation or questions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#1E1B14] text-white font-medium rounded-full hover:bg-[#4A4A4A] transition-colors"
                >
                  Contact Us <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/admissions"
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#1E1B14] text-[#1E1B14] font-medium rounded-full hover:bg-[#1E1B14] hover:text-white transition-colors"
                >
                  Start a Referral
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
