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
    quote: "Every child carries within them the potential for greatness. Our role is to provide the safety, support, and belief they need to discover it.",
    bio: `Tamsyn Butler serves as the Executive Director of Defining Your Destiny Youth Center, bringing more than a decade of distinguished leadership experience in residential child care and mental health services. A Licensed Child Care Administrator (LCCA) in the state of Texas, she holds a Master's degree in Social Work and has dedicated her career to advancing the quality of care for vulnerable youth.

Throughout her professional journey, Tamsyn has developed deep expertise in creating therapeutic environments where young people can heal from trauma and acquire the essential skills needed for successful adulthood. Her comprehensive background spans program development, staff training and mentorship, regulatory compliance, and organizational leadership. She approaches each aspect of her work with an unwavering commitment to excellence, ensuring that every element of care meets the highest professional standards.

Under Tamsyn's visionary leadership, Defining Your Destiny Youth Center has evolved into a respected provider of trauma-informed residential treatment, recognized for its dedication to individualized care and meaningful family partnership. She maintains close collaboration with clinical teams, families, and community partners to ensure that each young person receives comprehensive, tailored support that addresses their unique circumstances and aspirations.

Tamsyn is a passionate advocate for children and adolescents facing emotional and behavioral challenges. She works tirelessly to ensure these young people have access to the resources, support, and opportunities necessary to reach their full potential. Her leadership approach seamlessly integrates clinical expertise with genuine compassion, fostering an organizational culture where both staff and residents feel genuinely valued, respected, and empowered.

Tamsyn's commitment to serving at-risk youth was sparked early in her life by witnessing the transformative power of stable, supportive relationships in the lives of young people facing adversity. This foundational experience shaped her understanding that every child, regardless of their past challenges, possesses inherent worth and unlimited potential. She carries this conviction into her work each day, believing passionately that every young person deserves the opportunity to heal emotionally, grow behaviorally, thrive academically, and develop socially. She considers it both a profound responsibility and an extraordinary gift to lead an organization dedicated to helping children and families build futures filled with hope, dignity, and possibility.

Serving as Executive Director of Defining Your Destiny Youth Center represents the fulfillment of Tamsyn's lifelong calling to make a meaningful difference in the lives of vulnerable children. She is deeply grateful for the trust placed in her by the families who entrust their children to their care, the dedicated professionals who share their mission, and the community partners who support their work. Every day, she is inspired by the resilience of the young people they serve and remains steadfastly committed to ensuring that Defining Your Destiny Youth Center continues to be a place where hope is renewed, healing begins, and futures are defined by possibility rather than circumstance.`
  },
  {
    name: "Damien Landrum",
    title: "Clinical Director",
    image: "/images/leadership/Damien.Landrum.png",
    quote: "Healing happens when young people discover their own strength. Our job is to walk beside them until they see what we see.",
    bio: `Damien Landrum serves as the Clinical Director of Defining Your Destiny Youth Center, where he provides strategic oversight of all therapeutic services and clinical operations. A Licensed Professional Counselor (LPC), Damien brings specialized expertise in trauma-informed care, cognitive behavioral therapy, and adolescent mental health, developed through years of dedicated clinical practice and continuous professional development.

Damien holds a Master's degree in Clinical Psychology and has accumulated extensive experience in residential treatment settings, developing particular expertise in designing and implementing evidence-based therapeutic interventions. He leads a dedicated team of therapists and mental health professionals with a focus on ensuring that every resident receives individualized, compassionate care that thoughtfully addresses their unique emotional and behavioral needs.

Committed to fostering a therapeutic culture that fully recognizes the profound impact of trauma on development and behavior, Damien has played an instrumental role in shaping the organization's trauma-informed approach. He has developed and implemented comprehensive staff training programs in best practices for supporting young people who have experienced adversity, ensuring that clinical care is delivered with both professional excellence and deep empathy. His clinical leadership ensures that treatment plans achieve therapeutic effectiveness while honoring the inherent dignity of each individual.

Beyond his administrative responsibilities, Damien maintains an active, hands-on role in clinical supervision and ongoing program development. He works collaboratively with families, educational institutions, and community partners to create comprehensive support networks that extend well beyond the residential setting. His ultimate goal is to ensure that every young person who completes their program leaves equipped with the emotional tools, coping strategies, and self-awareness necessary for sustained long-term success.

Damien's path to clinical leadership was shaped by early experiences volunteering with youth mentoring programs, where he witnessed firsthand the remarkable capacity for resilience within young people who had faced significant challenges. These experiences taught him that beneath behavioral struggles and emotional pain, there exists in every child a wellspring of strength waiting to be discovered. This understanding has guided his entire career, informing his belief that effective therapy must go beyond symptom management to help young people recognize their own capabilities, develop healthy self-concepts, and envision futures defined by their own choices rather than their past experiences.

Damien considers it a profound honor to serve as Clinical Director of Defining Your Destiny Youth Center. He is deeply grateful for the opportunity to lead a clinical team that shares his commitment to excellence and compassion, to partner with families navigating difficult circumstances, and to witness daily the remarkable transformations that occur when young people are given the support they need to heal emotionally, develop behaviorally, succeed academically, and grow socially. He remains steadfastly committed to ensuring that every child who comes through their doors discovers their own capacity for resilience, healing, and self-definition.`
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
                Executive Leadership
              </h2>
              <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto">
                Dedicated professionals guiding our mission to transform lives and build futures.
              </p>
            </div>
          </FadeIn>

          <div className="space-y-16 max-w-5xl mx-auto">
            {leadership.map((person, index) => (
              <FadeIn key={person.name} delay={index * 0.15}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
                  <div className="grid lg:grid-cols-3 gap-0">
                    {/* Image Column */}
                    <div className="relative bg-[#F5F5F5] flex items-center justify-center p-8 lg:p-0">
                      <div className="relative w-full max-w-[280px] aspect-[3/4] lg:aspect-[4/5] lg:max-w-none lg:w-full lg:h-full">
                        <Image
                          src={person.image}
                          alt={person.name}
                          fill
                          className="object-contain"
                          sizes="(max-width: 1024px) 280px, 33vw"
                        />
                      </div>
                    </div>
                    
                    {/* Content Column */}
                    <div className="lg:col-span-2 p-8 lg:p-10">
                      <div className="mb-6">
                        <h3 className="font-semibold text-[#17375E] text-2xl mb-1">{person.name}</h3>
                        <p className="text-[#1F5D3A] font-medium">{person.title}</p>
                      </div>
                      
                      {/* Quote */}
                      <blockquote className="border-l-4 border-[#C6A15B] pl-6 mb-6 italic text-[#4A4A4A] text-lg">
                        &ldquo;{person.quote}&rdquo;
                      </blockquote>
                      
                      {/* Bio */}
                      <div className="text-[#4A4A4A] leading-relaxed space-y-4">
                        {person.bio.split('\n\n').map((paragraph, i) => (
                          <p key={i}>{paragraph}</p>
                        ))}
                      </div>
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
