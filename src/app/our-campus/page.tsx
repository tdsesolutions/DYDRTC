"use client";

import Link from "next/link";
import Image from "next/image";
import { BookOpen, Clock, GraduationCap, Heart, Home, Shield, Users } from "lucide-react";
import FadeIn from "@/components/FadeIn";

const spaces = [
  {
    icon: Home,
    title: "Residential Living",
    description: "Comfortable, home-like bedrooms and living areas where each resident has their own space, personal belongings, and a consistent daily routine.",
  },
  {
    icon: Users,
    title: "Common Areas",
    description: "Shared spaces designed for group activities, community meals, and the everyday interactions where social skills are practiced and friendships form.",
  },
  {
    icon: BookOpen,
    title: "Learning Spaces",
    description: "Dedicated areas for schoolwork, tutoring, and educational support, so academic progress continues uninterrupted throughout a resident's stay.",
  },
  {
    icon: Heart,
    title: "Therapy Rooms",
    description: "Private, quiet rooms for individual and family sessions, arranged so that clinical work always happens in a calm and confidential setting.",
  },
  {
    icon: GraduationCap,
    title: "Programming Space",
    description: "Rooms set aside for life skills instruction, group work, and structured activities that build competence and personal responsibility.",
  },
  {
    icon: Clock,
    title: "Recreation & Outdoors",
    description: "Safe outdoor and recreational areas that give residents room to move, play, and decompress as part of a healthy daily rhythm.",
  },
];

const safety = [
  {
    title: "Continuous Supervision",
    description: "Trained staff are present and awake around the clock. No part of the daily routine goes unsupervised.",
  },
  {
    title: "A Secure Environment",
    description: "Access is controlled and monitored, and safety protocols are reviewed regularly so the campus stays a protected place.",
  },
  {
    title: "Predictable Structure",
    description: "Consistent schedules, clear expectations, and familiar routines are themselves a form of safety for young people recovering from instability.",
  },
];

export default function OurCampusPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-[#17375E] to-[#1F5D3A]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(198,161,91,0.1),_transparent_50%)]" />
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex items-center justify-between">
            <FadeIn>
              <div className="max-w-3xl">
                <p className="text-[#C6A15B] text-sm font-medium tracking-widest uppercase mb-4">
                  Our Campus
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
                  A safe place to land, and room to grow.
                </h1>
                <p className="text-lg lg:text-xl text-white/70 leading-relaxed">
                  Healing needs somewhere to happen. Our campus is built around a simple idea:
                  young people do their best work when they feel safe, know what to expect,
                  and have space that belongs to them.
                </p>
              </div>
            </FadeIn>
            <div className="hidden lg:flex w-[40%] h-[400px] items-center justify-start overflow-hidden">
              <div className="relative w-full h-[540px] translate-x-0">
                <Image
                  src="/images/hero-artwork-services-clean.png"
                  alt="Our Campus"
                  fill
                  className="object-contain object-center"
                  priority
                  sizes="40vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#17375E] mb-6">
                Designed Around the Young People We Serve
              </h2>
              <p className="text-lg text-[#4A4A4A] leading-relaxed">
                Every space on our campus exists for a reason. Bedrooms are private and personal.
                Common areas invite connection. Therapy rooms are quiet and confidential. Together
                they create an environment that is structured without being institutional, and
                supportive without being permissive.
              </p>
              <p className="text-base text-[#4A4A4A] leading-relaxed mt-6">
                To protect the privacy and safety of the children in our care, we do not publish
                our address, photographs of our grounds, or directions to the campus. Referral
                partners and approved families receive that information directly from our team.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Spaces */}
      <section className="py-24 lg:py-32 bg-[#F5F5F5]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#17375E] mb-4">
                Life on Campus
              </h2>
              <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto">
                The spaces our residents live, learn, and heal in every day.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {spaces.map((space, index) => (
              <FadeIn key={space.title} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-8 h-full">
                  <div className="w-14 h-14 rounded-xl bg-[#1F5D3A]/10 flex items-center justify-center mb-6">
                    <space.icon className="w-7 h-7 text-[#1F5D3A]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#17375E] mb-3">{space.title}</h3>
                  <p className="text-[#4A4A4A] leading-relaxed">{space.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className="py-24 lg:py-32 bg-[#17375E]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-4">
                Safety Comes First
              </h2>
              <p className="text-lg text-white/70 max-w-2xl mx-auto">
                Families trust us with their children. Everything about how the campus runs
                reflects the weight of that.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {safety.map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.1}>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 h-full">
                  <Shield className="w-7 h-7 text-[#C6A15B] mb-5" />
                  <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-white/60 leading-relaxed">{item.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
