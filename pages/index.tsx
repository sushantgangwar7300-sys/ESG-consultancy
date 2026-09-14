// ==========================================
// KAI PRAKRITI — ANCHOR COMPONENT: Next.js 14+ / Tailwind CSS
// Antigravity Lead-Gen Build (Enhanced & Polished)
// ==========================================

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout, { useScopingModal } from '@/components/Layout';
import ReadinessCalculator from '@/components/ReadinessCalculator';
import Testimonials from '@/components/Testimonials';
import FaqSection from '@/components/FaqSection';

// ------------------------------------------
// DESIGN TOKENS & CONFIGURATION
// Primary Forest: #0F3A2E | Emerald: #16A34A
// ------------------------------------------

export default function Home() {
  const { openScopingModal } = useScopingModal();

  return (
    <Layout>
      <Head>
        <title>Kai Prakriti | ESG &amp; Sustainability Certification</title>
        <meta name="description" content="Audit-ready ESG, ISO, and carbon verification services for enterprise leaders." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* HERO SECTION */}
      <section className="bg-[#0F3A2E] text-white py-24 md:py-32 px-6 text-center relative overflow-hidden">
        {/* Subtle background glow effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#16A34A]/10 via-transparent to-transparent pointer-events-none"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 text-[#F4F7F5] px-4 py-1.5 rounded-full text-xs font-semibold mb-6 border border-white/20 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse"></span>
            SEBI BRSR Core &amp; ISO 14064 Compliance Ready
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-6 tracking-tight leading-[1.15]">
            Navigate ESG Complexity with Audit-Ready Precision
          </h1>
          <p className="text-lg md:text-xl text-[#F4F7F5] opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Empowering enterprise leaders to transform environmental data into strategic carbon leadership and regulatory compliance.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => openScopingModal('General Executive Scoping')}
              className="bg-[#16A34A] hover:bg-[#12813c] text-white px-8 py-4 rounded-xl font-bold text-base transition-all duration-200 shadow-lg hover:shadow-emerald-900/20 cursor-pointer transform hover:-translate-y-0.5"
            >
              Talk to an Expert
            </button>
            <Link
              href="/services"
              className="border border-white/40 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-semibold text-base transition-all duration-200 flex items-center justify-center hover:border-white"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-white border-b border-[#E2E8F0] py-12 px-6 shadow-sm relative z-20">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-[#E2E8F0]">
          <div className="pt-4 md:pt-0">
            <p className="text-3xl md:text-4xl font-extrabold text-[#0F3A2E] mb-1">15+</p>
            <p className="text-xs md:text-sm font-semibold tracking-wide uppercase text-[#6B7280]">Years Experience</p>
          </div>
          <div className="pt-4 md:pt-0">
            <p className="text-3xl md:text-4xl font-extrabold text-[#0F3A2E] mb-1">25+</p>
            <p className="text-xs md:text-sm font-semibold tracking-wide uppercase text-[#6B7280]">Countries Served</p>
          </div>
          <div className="pt-4 md:pt-0">
            <p className="text-3xl md:text-4xl font-extrabold text-[#0F3A2E] mb-1">450+</p>
            <p className="text-xs md:text-sm font-semibold tracking-wide uppercase text-[#6B7280]">Clients Certified</p>
          </div>
          <div className="pt-4 md:pt-0">
            <p className="text-3xl md:text-4xl font-extrabold text-[#0F3A2E] mb-1">100%</p>
            <p className="text-xs md:text-sm font-semibold tracking-wide uppercase text-[#6B7280]">Audit Acceptance</p>
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW TEASER */}
      <section className="py-24 px-6 bg-[#F4F7F5]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-[#16A34A] uppercase mb-3 block">Comprehensive Assurance</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0F3A2E] mb-4">Core Service Pillars</h2>
            <p className="text-[#334155] text-base md:text-lg">Rigorous assurance and verification frameworks designed for complex operational environments.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "ISO Management Systems",
                desc: "ISO 14001, 45001, and 50001 implementation, auditing, and certification roadmaps tailored for enterprise resilience."
              },
              {
                title: "GHG & Carbon Verification",
                desc: "Scope 1, 2, and 3 accounting backed by rigorous ISO 14064 and GHG Protocol guidelines for verifiable decarbonization."
              },
              {
                title: "BRSR / ESG Assurance",
                desc: "Independent pre-assurance readiness, indicator mapping, and data validation for SEBI BRSR and global reporting disclosures."
              }
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl border border-[#E2E8F0] shadow-sm flex flex-col justify-between hover:shadow-xl hover:border-[#16A34A]/30 transition-all duration-300 group"
              >
                <div>
                  <div className="w-14 h-14 bg-[#F4F7F5] rounded-xl flex items-center justify-center text-[#16A34A] font-bold mb-6 text-xl group-hover:bg-[#16A34A] group-hover:text-white transition-colors duration-300">
                    0{idx + 1}
                  </div>
                  <h3 className="text-xl font-bold text-[#0F3A2E] mb-3 group-hover:text-[#16A34A] transition-colors">{service.title}</h3>
                  <p className="text-[#334155] text-sm leading-relaxed mb-6">{service.desc}</p>
                </div>
                <Link href="/services" className="text-[#16A34A] font-semibold text-sm hover:underline inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Explore pillar &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERACTIVE ESG READINESS CALCULATOR */}
      <ReadinessCalculator />

      {/* TRUST & ACCREDITATION STRIP */}
      <section className="py-16 bg-white border-y border-[#E2E8F0]">
        <div className="container mx-auto px-6 text-center">
          <p className="text-xs font-bold tracking-widest text-[#6B7280] uppercase mb-10">
            Trusted by market leaders and aligned with elite verification frameworks
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
            <span className="font-serif font-bold text-2xl tracking-tighter text-[#0F3A2E]">EcoCorp Global</span>
            <span className="font-serif font-bold text-2xl tracking-tighter text-[#0F3A2E]">Verdant Industries</span>
            <span className="font-serif font-bold text-2xl tracking-tighter text-[#0F3A2E]">Aura Energy</span>
            <span className="font-serif font-bold text-2xl tracking-tighter text-[#0F3A2E]">TerraMetrics</span>
          </div>
        </div>
      </section>

      {/* CLIENT TESTIMONIALS */}
      <Testimonials />

      {/* FAQ ACCORDION */}
      <FaqSection />

      {/* CTA SECTION */}
      <section className="py-24 px-6 bg-[#0F3A2E] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-[#16A34A]/15 via-transparent to-transparent pointer-events-none"></div>

        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 tracking-tight">Ready to Secure Your Compliance Baseline?</h2>
          <p className="text-[#F4F7F5] text-base md:text-lg opacity-90 mb-8 max-w-xl mx-auto">Schedule a technical scoping discussion with our lead verification auditors today.</p>
          <button
            onClick={() => openScopingModal('Executive Scoping Session')}
            className="bg-[#16A34A] hover:bg-[#12813c] text-white px-9 py-4 rounded-xl font-bold text-base transition-all duration-200 inline-block shadow-xl hover:shadow-emerald-900/30 cursor-pointer transform hover:-translate-y-0.5"
          >
            Book Scoping Call
          </button>
        </div>
      </section>
    </Layout>
  );
}