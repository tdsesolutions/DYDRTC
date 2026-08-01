"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Gift, Heart, HandHeart, Mail, Package } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { useState } from "react";

// TODO: replace with the live giving link once the processor account is set up.
const DONATE_URL = "[DONATION_URL_PLACEHOLDER]";
const PRESET_AMOUNTS = [25, 100, 1000];

// TODO: replace with the mailing address for gifts. Use a PO box, not the campus address.
const MAILING_ADDRESS = ["[PO Box Coming Soon]", "[City, State ZIP]"];

const ways = [
  {
    icon: Heart,
    title: "Give Online",
    description: "A one-time or recurring gift, made securely through our online giving page. The fastest way to help, and recurring gifts are the ones we can plan around.",
  },
  {
    icon: Mail,
    title: "Give by Mail",
    description: "Prefer to send a check? Make it payable to Defining Your Destiny Youth Center and mail it to our giving address.",
  },
  {
    icon: Package,
    title: "Give In Kind",
    description: "Donations of new clothing, school supplies, and hygiene items go directly to the young people in our care. Contact us to arrange a drop-off.",
  },
  {
    icon: HandHeart,
    title: "Become a Sponsor",
    description: "Businesses, congregations, and individuals can sponsor a program, an activity, or a season of care through an ongoing partnership.",
  },
];

const wishList = [
  "New clothing and shoes, all youth sizes",
  "Backpacks and school supplies",
  "Hygiene and personal care items",
  "Bedding, towels, and blankets",
  "Books, games, and art supplies",
  "Gift cards for outings and milestone celebrations",
];

const tiers = [
  {
    name: "Friend",
    description: "Supplies a young person with school and personal essentials for their stay.",
  },
  {
    name: "Advocate",
    description: "Underwrites recreational and enrichment activities for a group of residents.",
  },
  {
    name: "Partner",
    description: "Sponsors a full program cycle, including materials and facilitation.",
  },
  {
    name: "Cornerstone",
    description: "A leadership commitment that supports a full season of care and campus needs.",
  },
];

export default function DonationsPage() {
  const [amount, setAmount] = useState("");
  const [isCustom, setIsCustom] = useState(false);

  // Strip anything that is not a number so a stray character cannot reach the processor.
  const cleanAmount = amount.replace(/[^0-9.]/g, "").replace(/^0+(?=\d)/, "");
  // The processor URL is still a placeholder; once it is real this passes the chosen amount through.
  const donateHref = cleanAmount && Number(cleanAmount) > 0
    ? `${DONATE_URL}?amount=${encodeURIComponent(cleanAmount)}`
    : DONATE_URL;

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
                  Ways to Give
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
                  Your generosity changes what&apos;s possible.
                </h1>
                <p className="text-lg lg:text-xl text-white/70 leading-relaxed">
                  Every gift, of any size, goes toward the daily needs of the young people in our
                  care &mdash; the clothes they wear, the activities they look forward to, and the
                  programs that help them build a future.
                </p>
              </div>
            </FadeIn>
            <div className="hidden lg:flex w-[40%] h-[400px] items-center justify-start overflow-hidden">
              <div className="relative w-full h-[540px] translate-x-0">
                <Image
                  src="/images/hero-artwork-resources-clean.png"
                  alt="Ways to Give"
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

      {/* Ways to Give */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#17375E] mb-4">
                Four Ways to Support Our Work
              </h2>
              <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto">
                Give however suits you best. All of it reaches the same place.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {ways.map((way, index) => (
              <FadeIn key={way.title} delay={index * 0.1}>
                <div className="bg-[#F5F5F5] rounded-2xl p-8 lg:p-10 h-full">
                  <div className="w-14 h-14 rounded-xl bg-[#1F5D3A]/10 flex items-center justify-center mb-6">
                    <way.icon className="w-7 h-7 text-[#1F5D3A]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#17375E] mb-3">{way.title}</h3>
                  <p className="text-[#4A4A4A] leading-relaxed">{way.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Online + Mail */}
      <section className="py-24 lg:py-32 bg-[#17375E]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <FadeIn>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-white/10 h-full flex flex-col">
                <Heart className="w-8 h-8 text-[#C6A15B] mb-6" />
                <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-4">
                  Give Online
                </h2>
                <p className="text-white/70 leading-relaxed mb-8">
                  Make a secure one-time or monthly gift. Monthly giving is the steadiest kind of
                  support there is &mdash; it lets us plan ahead for the young people we serve.
                </p>

                <div className="flex-grow">
                  <p className="text-sm font-medium text-white/80 mb-3">Choose an amount</p>
                  <div className="flex flex-wrap gap-3 mb-4">
                    {PRESET_AMOUNTS.map((preset) => (
                      <button
                        key={preset}
                        type="button"
                        onClick={() => { setIsCustom(false); setAmount(String(preset)); }}
                        className={`px-6 py-3 rounded-full font-medium transition-colors ${
                          !isCustom && amount === String(preset)
                            ? "bg-[#C6A15B] text-white"
                            : "bg-white/10 text-white hover:bg-white/20"
                        }`}
                      >
                        ${preset.toLocaleString()}
                      </button>
                    ))}
                    <button
                      type="button"
                      onClick={() => { setIsCustom(true); setAmount(""); }}
                      className={`px-6 py-3 rounded-full font-medium transition-colors ${
                        isCustom
                          ? "bg-[#C6A15B] text-white"
                          : "bg-white/10 text-white hover:bg-white/20"
                      }`}
                    >
                      Other
                    </button>
                  </div>

                  {isCustom && (
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60">$</span>
                      <input
                        type="number"
                        min="1"
                        step="1"
                        inputMode="decimal"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Enter an amount"
                        aria-label="Custom donation amount"
                        className="w-full pl-8 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#C6A15B]"
                      />
                    </div>
                  )}
                </div>

                <a
                  href={donateHref}
                  className="mt-8 inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C6A15B] text-white font-medium rounded-full hover:bg-white hover:text-[#17375E] transition-colors"
                >
                  {cleanAmount ? `Donate $${cleanAmount}` : "Donate Now"}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-white/10 h-full flex flex-col">
                <Mail className="w-8 h-8 text-[#C6A15B] mb-6" />
                <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-4">
                  Give by Mail
                </h2>
                <p className="text-white/70 leading-relaxed mb-8">
                  Make checks payable to <span className="text-white">Defining Your Destiny Youth Center</span> and
                  mail them to:
                </p>
                <div className="text-white/80 leading-relaxed mb-8 flex-grow">
                  <p>Defining Your Destiny Youth Center</p>
                  {MAILING_ADDRESS.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
                <p className="text-sm text-white/40">
                  Please include your address so we can send a receipt for your records.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Wish List */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn>
              <span className="text-sm font-medium text-[#C6A15B] tracking-wider uppercase mb-4 block">
                In-Kind Giving
              </span>
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#17375E] mb-6">
                Our Wish List
              </h2>
              <p className="text-lg text-[#4A4A4A] leading-relaxed mb-6">
                Not every gift is financial. These are the items our residents need most, and
                donated goods go straight into their hands.
              </p>
              <p className="text-[#4A4A4A] leading-relaxed mb-8">
                We ask that all items be new. To arrange a drop-off, email us at{" "}
                <a href="mailto:info@definingyourdestiny.org" className="text-[#1F5D3A] font-medium hover:underline">
                  info@definingyourdestiny.org
                </a>{" "}
                and our team will coordinate a time and place with you.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#17375E] text-white font-medium rounded-full hover:bg-[#1F5D3A] transition-colors"
              >
                Arrange a Donation <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeIn>

            <FadeIn direction="right">
              <div className="bg-[#F5F5F5] rounded-2xl p-8 lg:p-12">
                <div className="flex items-center gap-3 mb-8">
                  <Gift className="w-6 h-6 text-[#1F5D3A]" />
                  <h3 className="text-xl font-semibold text-[#17375E]">Most Needed Items</h3>
                </div>
                <ul className="space-y-4">
                  {wishList.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[#4A4A4A]">
                      <div className="w-2 h-2 rounded-full bg-[#1F5D3A] mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Sponsorship */}
      <section className="py-24 lg:py-32 bg-[#F5F5F5]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#17375E] mb-4">
                Sponsorship Levels
              </h2>
              <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto">
                For businesses, congregations, and individuals who want to commit to our work
                over the long term. Sponsors are recognized on our site and at our events.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tiers.map((tier, index) => (
              <FadeIn key={tier.name} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-8 h-full border-t-4 border-[#C6A15B]">
                  <h3 className="text-xl font-semibold text-[#17375E] mb-2">{tier.name}</h3>
                  <p className="text-[#4A4A4A] leading-relaxed">{tier.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.4}>
            <div className="text-center mt-12">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#17375E] text-white font-medium rounded-full hover:bg-[#1F5D3A] transition-colors"
              >
                Talk to Us About Sponsorship <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1F5D3A]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
          <FadeIn>
            <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-6">
              Every Gift Reaches a Child
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Thank you for considering a gift to Defining Your Destiny Youth Center. If you have
              questions about giving, we would be glad to talk with you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={DONATE_URL}
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#C6A15B] text-white font-medium rounded-full hover:bg-white hover:text-[#17375E] transition-colors"
              >
                Donate Now <ArrowRight className="w-4 h-4" />
              </a>
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
