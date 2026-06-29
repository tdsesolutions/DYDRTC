"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Heart, Shield, Users, Target, Award } from "lucide-react";
import FadeIn from "@/components/FadeIn";

const values = [
  {
    icon: Shield,
    title: "Safety",
    description: "Creating secure environments where healing can begin and trust can grow.",
  },
  {
    icon: Heart,
    title: "Compassion",
    description: "Leading with empathy, understanding, and unwavering support through challenges.",
  },
  {
    icon: Users,
    title: "Dignity",
    description: "Treating every person with respect, honoring their unique journey and potential.",
  },
  {
    icon: Target,
    title: "Purpose",
    description: "Guiding young people toward discovering their strengths and defining their futures.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Maintaining the highest standards of care, ethics, and professional integrity.",
  },
  {
    icon: ArrowRight,
    title: "Growth",
    description: "Believing in the capacity for positive change and supporting continuous development.",
  },
];

const leadership = [
  {
    name: "Tamsyn Butler",
    title: "Executive Director",
    image: "/images/leadership/TamsynButler.jpeg",
    bio: `Tamsyn Butler is the Executive Director of Defining Your Destiny Youth Center, bringing over a decade of leadership experience in residential child care and mental health services. She holds a Master's degree in Social Work and is a Licensed Child Care Administrator (LCCA) in the state of Texas.

Throughout her career, Tamsyn has been dedicated to creating therapeutic environments where young people can heal from trauma and develop the skills needed for successful adulthood. She has extensive experience in program development, staff training, and regulatory compliance, ensuring that every aspect of care meets the highest professional standards.

Under Tamsyn's leadership, Defining Your Destiny Youth Center has grown into a respected provider of trauma-informed residential treatment, known for its commitment to individualized care and family partnership. She works closely with clinical teams, families, and community partners to ensure that each young person receives comprehensive support tailored to their unique needs.

Tamsyn is passionate about advocating for children and adolescents with emotional and behavioral challenges, working to ensure they have access to the resources and support necessary to reach their full potential. Her approach combines clinical expertise with genuine compassion, creating a culture where staff and residents alike feel valued and empowered.

Tamsyn's lifelong commitment to serving at-risk youth stems from a deep belief that every child deserves the opportunity to heal, grow, and discover their own path to success. She considers it a profound privilege to lead an organization dedicated to helping young people define their destinies and build futures filled with hope, resilience, and possibility. Serving as part of the leadership team at Defining Your Destiny Youth Center is not just her profession—it is her calling, and she is grateful every day for the opportunity to make a meaningful difference in the lives of children and families.`
  },
  {
    name: "Damien Landrum",
    title: "Clinical Director",
    image: "/images/leadership/Damien.Landrum.png",
    bio: `Damien Landrum serves as the Clinical Director of Defining Your Destiny Youth Center, overseeing all therapeutic services and clinical operations. He is a Licensed Professional Counselor (LPC) with specialized training in trauma-informed care, cognitive behavioral therapy, and adolescent mental health.

With a Master's degree in Clinical Psychology and years of experience in residential treatment settings, Damien brings deep expertise in developing and implementing evidence-based therapeutic interventions. He leads a team of dedicated therapists and mental health professionals, ensuring that every resident receives individualized, compassionate care that addresses their unique emotional and behavioral needs.

Damien is committed to creating a therapeutic culture that recognizes the impact of trauma on development and behavior. He has been instrumental in shaping the organization's trauma-informed approach, training staff in best practices for supporting young people who have experienced adversity. His clinical leadership ensures that treatment plans are not only effective but also delivered with empathy and respect for each individual's dignity.

In addition to his administrative responsibilities, Damien maintains an active role in clinical supervision and program development. He collaborates with families, schools, and community partners to create comprehensive support networks that extend beyond the residential setting. His goal is to ensure that every young person leaves the program with the emotional tools and coping strategies needed for long-term success.

Damien's dedication to helping children and adolescents heal from trauma and discover their inner strength has been the driving force throughout his career. He believes deeply in the resilience of young people and the transformative power of compassionate, professional care. Being part of the Defining Your Destiny Youth Center leadership team allows him to fulfill his passion for guiding young people toward healing, self-discovery, and the confidence to shape their own futures. He is honored to serve an organization that shares his commitment to empowering every child to define their destiny.`
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-[#17375E] to-[#1F5D3A]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(198,161,91,0.1),_transparent_50%)]" />
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
          <FadeIn>
            <div className="max-w-3xl">
              <p className="text-[#C6A15B] text-sm font-medium tracking-widest uppercase mb-4">
                About Us
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
                Empowering young people to shape their own futures.
              </h1>
              <p className="text-lg lg:text-xl text-white/70 leading-relaxed">
                Defining Your Destiny Youth Center was founded on a powerful belief: every young person 
                has the capacity to heal, grow, and create a meaningful, successful future.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn direction="left">
              <div className="aspect-[4/3] bg-gradient-to-br from-[#1F5D3A]/10 to-[#17375E]/10 rounded-2xl overflow-hidden flex items-center justify-center">
                <div className="text-center p-8">
                  <Users className="w-16 h-16 text-[#1F5D3A]/30 mx-auto mb-4" />
                  <p className="text-[#4A4A4A]/50 text-sm">Our Team</p>
                </div>
              </div>
            </FadeIn>
            
            <div>
              <FadeIn direction="right">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#17375E] mb-6">
                  Who We Are
                </h2>
                <div className="space-y-4 text-[#4A4A4A] leading-relaxed">
                  <p>
                    Defining Your Destiny Youth Center is a residential treatment center dedicated to 
                    helping children and adolescents with emotional, behavioral, and mental health needs 
                    discover their strengths and build successful futures.
                  </p>
                  <p>
                    We provide comprehensive residential treatment that includes clinical therapy, behavioral 
                    health support, educational coordination, and family engagement—each designed to 
                    meet young people where they are and guide them toward greater well-being and independence.
                  </p>
                  <p>
                    Our team of dedicated professionals brings together expertise in psychology, 
                    social work, education, and therapeutic care to create holistic, individualized treatment plans 
                    that address the whole person and prepare them for adulthood.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 lg:py-32 bg-[#F5F5F5]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            <FadeIn direction="left">
              <div className="bg-white rounded-2xl p-8 lg:p-12 h-full">
                <span className="text-sm font-medium text-[#1F5D3A] tracking-wider uppercase mb-4 block">
                  Our Mission
                </span>
                <h3 className="text-2xl lg:text-3xl font-semibold text-[#17375E] mb-4">
                  To empower young people to overcome challenges, discover their strengths, 
                  and build the foundation for a successful, independent future.
                </h3>
                <p className="text-[#4A4A4A] leading-relaxed">
                  We are committed to providing exceptional, trauma-informed residential treatment 
                  that helps every individual heal, grow, and develop the confidence to define their own destiny.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn direction="right">
              <div className="bg-[#17375E] rounded-2xl p-8 lg:p-12 h-full">
                <span className="text-sm font-medium text-[#C6A15B] tracking-wider uppercase mb-4 block">
                  Our Vision
                </span>
                <h3 className="text-2xl lg:text-3xl font-semibold text-white mb-4">
                  A future where every young person has the opportunity to heal, grow, 
                  and reach their full potential regardless of past challenges.
                </h3>
                <p className="text-white/70 leading-relaxed">
                  We envision communities where residential treatment serves as a transformative 
                  step toward independence, resilience, and lasting success.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#17375E] mb-4">
                Our Core Values
              </h2>
              <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto">
                The principles that guide every decision we make and every interaction we have.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <FadeIn key={value.title} delay={index * 0.1}>
                <div className="bg-[#F5F5F5] rounded-xl p-8 border border-[#E8E8E8] hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-lg bg-[#1F5D3A]/10 flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-[#1F5D3A]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#17375E] mb-2">{value.title}</h3>
                  <p className="text-[#4A4A4A]">{value.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy of Care */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-[#17375E] to-[#1F5D3A]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeIn>
              <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-4">
                Our Philosophy of Care
              </h2>
              <p className="text-lg text-white/70">
                We believe that effective treatment requires understanding the whole person 
                and creating conditions for genuine healing and growth.
              </p>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Trauma-Informed Care",
                description: "We recognize that trauma shapes behavior and development. Every interaction, intervention, and environment is designed with an understanding of trauma&apos;s impact and the pathways to healing.",
              },
              {
                title: "Individualized Treatment",
                description: "No two individuals are alike, and neither are their treatment plans. We conduct thorough assessments and continuously adapt our approach to meet each person&apos;s evolving needs.",
              },
              {
                title: "Family Partnership",
                description: "Families are essential partners in the healing process. We maintain open communication, provide support and education, and work collaboratively toward shared goals.",
              },
            ].map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.15}>
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-white mb-4">{item.title}</h3>
                  <p className="text-white/60 leading-relaxed">{item.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <FadeIn>
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#17375E] mb-6">
                Our Commitments
              </h2>
              <p className="text-lg text-[#4A4A4A] leading-relaxed mb-8">
                We hold ourselves to the highest standards in every aspect of our work. These 
                commitments guide our operations, our culture, and our continuous pursuit of excellence.
              </p>
              <div className="space-y-6">
                {[
                  { title: "Commitment to Safety", desc: "Rigorous protocols, 24/7 supervision, and continuous staff training ensure the physical and emotional safety of every resident." },
                  { title: "Commitment to Clinical Excellence", desc: "Evidence-based practices, ongoing professional development, and regular program evaluation drive continuous improvement." },
                  { title: "Commitment to Regulatory Compliance", desc: "We meet or exceed all Texas Chapter 748 standards, maintaining full transparency with licensing bodies and stakeholders." },
                ].map((commitment) => (
                  <div key={commitment.title} className="border-l-2 border-[#1F5D3A] pl-6">
                    <h3 className="font-semibold text-[#17375E] mb-1">{commitment.title}</h3>
                    <p className="text-[#4A4A4A]">{commitment.desc}</p>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div className="bg-[#F5F5F5] rounded-2xl p-8 lg:p-12">
                <h3 className="text-2xl font-semibold text-[#17375E] mb-6">
                  Quality Assurance
                </h3>
                <ul className="space-y-4">
                  {[
                    "Regular internal audits and program reviews",
                    "Continuous staff training and development",
                    "Family satisfaction monitoring",
                    "Outcome tracking and analysis",
                    "Peer consultation and supervision",
                    "Community feedback integration",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[#4A4A4A]">
                      <div className="w-2 h-2 rounded-full bg-[#1F5D3A] mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 lg:py-32 bg-[#F5F5F5]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#17375E] mb-4">
                Our Leadership Team
              </h2>
              <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto">
                Experienced professionals dedicated to excellence in residential treatment and the 
                well-being of every young person we serve.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {leadership.map((person, index) => (
              <FadeIn key={person.name} delay={index * 0.1}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
                  <div className="aspect-square relative bg-[#E8E8E8]">
                    <Image
                      src={person.image}
                      alt={person.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-[#17375E] text-xl mb-1">{person.name}</h3>
                    <p className="text-sm text-[#1F5D3A] font-medium mb-4">{person.title}</p>
                    <div className="text-sm text-[#4A4A4A] leading-relaxed space-y-3">
                      {person.bio.split('\n\n').map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1F5D3A]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
          <FadeIn>
            <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-6">
              Learn More About Our Programs
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Discover how Defining Your Destiny Youth Center can support your family or client on their journey 
              toward healing and growth.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/programs"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#17375E] font-medium rounded-full hover:bg-[#C6A15B] hover:text-white transition-colors"
              >
                Explore Programs <ArrowRight className="w-4 h-4" />
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
