"use client";

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
    image: "/images/tamsyn-butler-headshot.png",
    quote: "Every child carries within them the potential for greatness. Our role is to provide the safety, support, and belief they need to discover it.",
    bio: `Tamsyn Butler is a dedicated counselor, educator, and youth advocate with more than 21 years of experience serving children and adolescents from pre-kindergarten through 12th grade. Throughout her career, she has worked in both inner-city and suburban school settings, developing a deep understanding of the unique academic, social, and emotional needs of students from diverse backgrounds.

She holds a Bachelor’s degree in Criminal Justice with a minor in Psychology and a specialization in Juvenile Justice, as well as a Master’s degree in Counseling. Her educational background and extensive experience have equipped her with the knowledge and skills to support students as they navigate challenges, build resilience, and achieve personal and academic success.

As a mother of two—one currently in college and the other graduating from high school—Tamsyn understands firsthand the importance of nurturing, guiding, and advocating for young people. She is passionate about building authentic, trusting relationships with children and families, creating safe spaces where students feel seen, heard, and valued.

Tamsyn’s mission is to empower every child to discover their strengths, embrace their individuality, and find a path that leads to a fulfilling and successful future. Through compassion, encouragement, and unwavering dedication, she continues to make a lasting impact on the lives of the students and families she serves.`
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
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-[#17375E] to-[#1F5D3A] overflow-hidden">
        {/* Slow Gradient Mesh Movement - Full Hero */}
        <motion.div
          className="absolute inset-0 opacity-50"
          animate={{
            background: [
              "radial-gradient(circle at 15% 25%, rgba(31,93,58,0.5) 0%, transparent 45%), radial-gradient(circle at 85% 75%, rgba(23,55,94,0.4) 0%, transparent 45%), radial-gradient(circle at 50% 50%, rgba(198,161,91,0.15) 0%, transparent 40%)",
              "radial-gradient(circle at 25% 35%, rgba(31,93,58,0.45) 0%, transparent 45%), radial-gradient(circle at 75% 65%, rgba(23,55,94,0.45) 0%, transparent 45%), radial-gradient(circle at 45% 55%, rgba(198,161,91,0.12) 0%, transparent 40%)",
              "radial-gradient(circle at 15% 25%, rgba(31,93,58,0.5) 0%, transparent 45%), radial-gradient(circle at 85% 75%, rgba(23,55,94,0.4) 0%, transparent 45%), radial-gradient(circle at 50% 50%, rgba(198,161,91,0.15) 0%, transparent 40%)",
            ],
          }}
          transition={{
            duration: 25,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(198,161,91,0.12),_transparent_50%)]" />
        {/* Ambient Animated Light - Full Hero */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 14,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        >
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#1F5D3A]/40 via-[#17375E]/25 to-transparent blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-[#17375E]/35 via-[#1F5D3A]/20 to-transparent blur-3xl" />
        </motion.div>

        {/* Very Subtle Soft Gold Particles - Full Hero */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(7)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full bg-[#C6A15B]"
              style={{
                left: `${15 + i * 12}%`,
                top: `${25 + (i % 3) * 20}%`,
              }}
              animate={{
                opacity: [0.25, 0.45, 0.25],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 10 + i * 1.5,
                ease: "easeInOut",
                repeat: Infinity,
                delay: i * 1.2,
              }}
            />
          ))}
        </div>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex items-center justify-between">
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
            <div className="hidden lg:flex w-[45%] h-[400px] items-center justify-start relative">
              <div className="relative w-full h-[600px] -translate-x-12">
                <Image
                  src="/images/hero-artwork-about.png"
                  alt="About Us"
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

      {/* Who We Are */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn direction="left">
              <div className="aspect-[4/3] relative rounded-2xl overflow-hidden">
                <Image
                  src="/images/our-team.jpg"
                  alt="Our Team"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
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

          <div className="space-y-12">
            {leadership.map((person, index) => (
              <FadeIn key={person.name} delay={index * 0.15}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                  <div className="grid lg:grid-cols-12 gap-0">
                    {/* Image Column - 4 columns on desktop */}
                    <div className="lg:col-span-4 bg-[#F8F8F8] flex items-start justify-center p-6 lg:p-8">
                      <div className="relative w-full max-w-[320px] lg:max-w-[360px] aspect-[4/5] rounded-xl overflow-hidden shadow-md">
                        <Image
                          src={person.image}
                          alt={`${person.name} - ${person.title}`}
                          fill
                          className="object-cover object-top"
                          sizes="(max-width: 1024px) 320px, 360px"
                        />
                      </div>
                    </div>
                    
                    {/* Content Column - 8 columns on desktop */}
                    <div className="lg:col-span-8 p-6 lg:p-10">
                      {/* Header */}
                      <div className="mb-6">
                        <h3 className="font-semibold text-[#17375E] text-2xl lg:text-3xl mb-2">{person.name}</h3>
                        <p className="text-[#1F5D3A] font-medium text-lg">{person.title}</p>
                      </div>
                      
                      {/* Quote */}
                      <blockquote className="border-l-4 border-[#C6A15B] pl-5 mb-6 italic text-[#4A4A4A] text-base lg:text-lg leading-relaxed">
                        &ldquo;{person.quote}&rdquo;
                      </blockquote>
                      
                      {/* Bio */}
                      <div className="text-[#4A4A4A] leading-relaxed space-y-4 text-sm lg:text-base">
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

    </>
  );
}
