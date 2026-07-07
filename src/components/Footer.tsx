"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const footerLinks = {
  main: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Programs", href: "/programs" },
    { name: "Admissions", href: "/admissions" },
    { name: "Resources", href: "/resources" },
    { name: "Careers", href: "/careers" },
    { name: "Training", href: "/training" },
    { name: "Contact", href: "/contact" },
  ],
  programs: [
    { name: "Residential Treatment", href: "/programs/pmn" },
    { name: "Life Skills Development", href: "/programs/sil" },
    { name: "Transition & Aftercare", href: "/programs/tlp" },
  ],
  resources: [
    { name: "Family FAQs", href: "/resources" },
    { name: "Referral Information", href: "/resources" },
    { name: "Downloads", href: "/resources" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#17375E] text-white">
      {/* CTA Section */}
      <div className="border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-20 lg:py-28">
          <div className="max-w-3xl">
            <h2 className="text-3xl lg:text-5xl font-semibold leading-tight mb-6">
              Every young person deserves a place to heal, grow, and thrive.
            </h2>
            <p className="text-lg text-white/70 mb-8">
              Let us help you find the right level of care and support for your family.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/admissions"
                className="inline-flex items-center px-8 py-4 bg-[#C6A15B] text-white font-medium rounded-full hover:bg-[#1F5D3A] transition-colors"
              >
                Start a Referral
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 border border-white/30 font-medium rounded-full hover:bg-white/10 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
        {/* Centered Footer Logo - Absolute positioned */}
        <div className="absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <Image
            src="/images/DYDlogo1.png"
            alt="Defining Your Destiny"
            width={200}
            height={50}
            className="w-[200px] h-auto object-contain opacity-90"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/DYDlogo1.png"
                alt="Defining Your Destiny"
                width={72}
                height={18}
                className="w-[72px] h-auto object-contain"
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Providing trauma-informed residential treatment and supportive services 
              for children and adolescents with emotional, behavioral, and mental health needs.
            </p>
            <div className="flex gap-4">
              {/* Social placeholders */}
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-white/20 transition-colors cursor-pointer">
                <span className="text-xs">FB</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-white/20 transition-colors cursor-pointer">
                <span className="text-xs">LI</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-white/20 transition-colors cursor-pointer">
                <span className="text-xs">IG</span>
              </div>
            </div>
          </div>

          {/* Main Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-6">Navigation</h3>
            <ul className="space-y-3">
              {footerLinks.main.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-6">Programs</h3>
            <ul className="space-y-3">
              {footerLinks.programs.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-6">Contact</h3>
            <div className="space-y-4 text-sm text-white/60">
              <p>[Address Coming Soon]</p>
              <p>(XXX) XXX-XXXX</p>
              <p>info@definingyourdestiny.org</p>
              <p className="mt-6 text-xs text-white/40">
                [Hours Coming Soon]
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} Defining Your Destiny Youth Center. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/40">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Use</Link>
            <Link href="#" className="hover:text-white transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
