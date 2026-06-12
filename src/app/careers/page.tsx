"use client";

import Link from "next/link";
import { ArrowRight, Heart, Users, Award, BookOpen, ChevronDown, ChevronUp } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { useState } from "react";

const roleCategories = [
  {
    category: "Clinical & Medical",
    roles: [
      "Registered Nurses (RN)",
      "Licensed Vocational Nurses (LVN)",
      "Clinical Therapists",
      "Case Managers",
      "Behavioral Specialists",
    ],
  },
  {
    category: "Direct Care & Support",
    roles: [
      "Direct Care Staff",
      "Youth Counselors",
      "Residential Support Staff",
      "Activity Coordinators",
    ],
  },
  {
    category: "Education & Development",
    roles: [
      "Educational Liaisons",
      "Life Skills Instructors",
      "Vocational Trainers",
    ],
  },
  {
    category: "Operations & Administration",
    roles: [
      "Administrative Staff",
      "Human Resources",
      "Finance & Billing",
      "Facility Support",
    ],
  },
];

const benefits = [
  {
    title: "Competitive Compensation",
    desc: "Salary packages commensurate with experience and role responsibilities.",
  },
  {
    title: "Health & Wellness",
    desc: "Medical, dental, and vision coverage for eligible employees.",
  },
  {
    title: "Professional Development",
    desc: "Ongoing training, continuing education support, and career advancement opportunities.",
  },
  {
    title: "Work-Life Balance",
    desc: "Flexible scheduling options and paid time off for eligible positions.",
  },
  {
    title: "Meaningful Work",
    desc: "The opportunity to make a real difference in the lives of young people and families.",
  },
  {
    title: "Supportive Environment",
    desc: "A collaborative culture that values teamwork, growth, and employee well-being.",
  },
];

export default function CareersPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    message: "",
    resume: null as File | null,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Application submitted (placeholder - no backend connected)");
  };

  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-[#1E1B14]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="max-w-3xl">
              <p className="text-[#5A7A7A] text-sm font-medium tracking-widest uppercase mb-4">
                Careers
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
                Join our mission to transform lives.
              </h1>
              <p className="text-lg lg:text-xl text-white/70 leading-relaxed">
                Be part of a dedicated team making a meaningful difference in the lives of 
                young people and families every day.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-24 lg:py-32 bg-[#FAF9F7]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#1E1B14] mb-6">
                Why Work With A Place for Me RTC?
              </h2>
              <p className="text-lg text-[#4A4A4A] leading-relaxed">
                Working at A Place for Me RTC means being part of something bigger than yourself. 
                It means having the opportunity to change trajectories, restore hope, and help 
                young people discover their potential. We are committed to supporting our staff 
                with the training, resources, and culture they need to thrive in this important work.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Culture & Values */}
      <section className="py-24 lg:py-32 bg-[#F5F3EF]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn direction="left">
              <div className="aspect-[4/3] bg-[#E8E2D9] rounded-2xl overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-[#9A9A9A]">
                  [Team Culture Image]
                </div>
              </div>
            </FadeIn>
            
            <div>
              <FadeIn direction="right">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#1E1B14] mb-6">
                  Our Culture & Values
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-[#1E1B14] mb-2 flex items-center gap-2">
                      <Heart className="w-5 h-5 text-[#5A7A7A]" />
                      Compassion First
                    </h3>
                    <p className="text-[#4A4A4A]">
                      We approach every interaction with empathy, understanding that our residents 
                      and their families are navigating challenging circumstances.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#1E1B14] mb-2 flex items-center gap-2">
                      <Users className="w-5 h-5 text-[#5A7A7A]" />
                      Teamwork & Collaboration
                    </h3>
                    <p className="text-[#4A4A4A]">
                      We believe the best outcomes come from collaborative efforts across disciplines. 
                      Every team member's contribution is valued.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#1E1B14] mb-2 flex items-center gap-2">
                      <Award className="w-5 h-5 text-[#5A7A7A]" />
                      Excellence in Care
                    </h3>
                    <p className="text-[#4A4A4A]">
                      We maintain the highest standards in everything we do, continuously seeking 
                      to improve our programs and practices.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#1E1B14] mb-2 flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-[#5A7A7A]" />
                      Growth & Learning
                    </h3>
                    <p className="text-[#4A4A4A]">
                      We invest in our staff's professional development, providing ongoing training 
                      and opportunities for advancement.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Roles We Hire */}
      <section className="py-24 lg:py-32 bg-[#1E1B14]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-4">
                Roles We May Hire For
              </h2>
              <p className="text-lg text-white/70 max-w-2xl mx-auto">
                We are always looking for talented, compassionate individuals to join our team. 
                Below are examples of positions that may be available.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6">
            {roleCategories.map((category, index) => (
              <FadeIn key={category.category} delay={index * 0.1}>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                  <h3 className="text-xl font-semibold text-white mb-4">{category.category}</h3>
                  <ul className="space-y-2">
                    {category.roles.map((role) => (
                      <li key={role} className="flex items-center gap-2 text-white/60">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#5A7A7A]" />
                        {role}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Training & Development */}
      <section className="py-24 lg:py-32 bg-[#FAF9F7]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <FadeIn>
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#1E1B14] mb-6">
                Training & Professional Development
              </h2>
              <p className="text-lg text-[#4A4A4A] leading-relaxed mb-8">
                We believe that investing in our staff's growth directly benefits the individuals 
                we serve. Our comprehensive training and development programs ensure that every 
                team member has the skills and knowledge needed to excel.
              </p>
              <div className="space-y-4">
                {[
                  "Comprehensive orientation and onboarding",
                  "Ongoing clinical and skills training",
                  "Crisis prevention and intervention certification",
                  "Trauma-informed care training",
                  "Leadership development programs",
                  "Continuing education support",
                  "Conference and workshop attendance",
                  "Mentorship and supervision",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-[#4A4A4A]">
                    <BookOpen className="w-5 h-5 text-[#5A7A7A]" />
                    {item}
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div className="bg-[#F5F3EF] rounded-2xl p-8 lg:p-12">
                <h3 className="text-2xl font-semibold text-[#1E1B14] mb-6">
                  Workplace Expectations
                </h3>
                <p className="text-[#4A4A4A] mb-6">
                  We maintain high standards for our team members, as the nature of our work 
                  requires professionalism, reliability, and commitment.
                </p>
                <ul className="space-y-4">
                  {[
                    { title: "Professionalism", desc: "Maintaining appropriate boundaries and professional conduct" },
                    { title: "Reliability", desc: "Consistent attendance and punctuality" },
                    { title: "Teamwork", desc: "Collaboration and communication with colleagues" },
                    { title: "Confidentiality", desc: "Protecting resident privacy and information" },
                    { title: "Safety", desc: "Adherence to all safety protocols and procedures" },
                    { title: "Growth Mindset", desc: "Willingness to learn, adapt, and improve" },
                  ].map((item) => (
                    <li key={item.title} className="border-b border-[#E8E2D9] pb-4 last:border-0">
                      <h4 className="font-semibold text-[#1E1B14]">{item.title}</h4>
                      <p className="text-sm text-[#4A4A4A]">{item.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 lg:py-32 bg-[#F5F3EF]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#1E1B14] mb-4">
                Benefits & Perks
              </h2>
              <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto">
                We offer comprehensive benefits to support our team's well-being and professional growth.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <FadeIn key={benefit.title} delay={index * 0.1}>
                <div className="bg-white rounded-xl p-8 border border-[#E8E2D9] h-full">
                  <h3 className="text-lg font-semibold text-[#1E1B14] mb-2">{benefit.title}</h3>
                  <p className="text-[#4A4A4A] text-sm">{benefit.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-24 lg:py-32 bg-[#1E1B14]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mx-auto">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-4">
                  Careers Inquiry
                </h2>
                <p className="text-lg text-white/70">
                  Interested in joining our team? Fill out the form below and we'll be in touch 
                  about current and future opportunities.
                </p>
              </div>
            </FadeIn>

            <FadeIn>
              <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-white/10">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#5A7A7A]"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#5A7A7A]"
                        placeholder="email@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#5A7A7A]"
                        placeholder="(XXX) XXX-XXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="position" className="block text-sm font-medium text-white/80 mb-2">
                      Position of Interest *
                    </label>
                    <select
                      id="position"
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-[#5A7A7A]"
                      value={formData.position}
                      onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                    >
                      <option value="" className="text-[#1E1B14]">Select a position category</option>
                      <option value="nursing" className="text-[#1E1B14]">Nursing (RN/LVN)</option>
                      <option value="clinical" className="text-[#1E1B14]">Clinical/Medical</option>
                      <option value="direct-care" className="text-[#1E1B14]">Direct Care</option>
                      <option value="education" className="text-[#1E1B14]">Education/Development</option>
                      <option value="admin" className="text-[#1E1B14]">Administration</option>
                      <option value="other" className="text-[#1E1B14]">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                      Tell Us About Yourself
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#5A7A7A] resize-none"
                      placeholder="Briefly describe your experience, qualifications, and why you're interested in working with us..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      Resume/CV
                    </label>
                    <div className="border-2 border-dashed border-white/20 rounded-lg p-8 text-center hover:border-[#5A7A7A] transition-colors cursor-pointer">
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                        onChange={(e) => setFormData({ ...formData, resume: e.target.files?.[0] || null })}
                      />
                      <p className="text-white/60 text-sm">
                        [Resume Upload Placeholder - Click to upload PDF or Word document]
                      </p>
                      {formData.resume && (
                        <p className="text-[#5A7A7A] text-sm mt-2">Selected: {formData.resume.name}</p>
                      )}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#1E1B14] font-medium rounded-full hover:bg-[#E8E2D9] transition-colors"
                  >
                    Submit Application <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
