// ==========================================
// KAI PRAKRITI — ANCHOR COMPONENT: Next.js 14+ / Tailwind CSS
// Antigravity Lead-Gen Build
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
      <section className="bg-[#0F3A2E] text-white py-24 px-6 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 text-[#F4F7F5] px-3.5 py-1.5 rounded-full text-xs font-semibold mb-6 border border-white/20">
            <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse"></span>
            SEBI BRSR Core &amp; ISO 14064 Compliance Ready
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 tracking-tight leading-tight">
            Navigate ESG Complexity with Audit-Ready Precision
          </h1>
          <p className="text-lg md:text-xl text-[#F4F7F5] opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Empowering enterprise leaders to transform environmental data into strategic carbon leadership and regulatory compliance.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => openScopingModal('General Executive Scoping')}
              className="bg-[#16A34A] hover:bg-[#12813c] text-white px-8 py-3.5 rounded-lg font-bold text-base transition shadow-md cursor-pointer"
            >
              Talk to an Expert
            </button>
            <Link
              href="/services"
              className="border border-white/40 hover:bg-white/10 text-white px-8 py-3.5 rounded-lg font-semibold text-base transition flex items-center justify-center"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-white border-b border-[#E2E8F0] py-10 px-6">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-3xl md:text-4xl font-extrabold text-[#0F3A2E] mb-1">15+</p>
            <p className="text-sm font-medium text-[#6B7280]">Years Experience</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-extrabold text-[#0F3A2E] mb-1">25+</p>
            <p className="text-sm font-medium text-[#6B7280]">Countries Served</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-extrabold text-[#0F3A2E] mb-1">450+</p>
            <p className="text-sm font-medium text-[#6B7280]">Clients Certified</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-extrabold text-[#0F3A2E] mb-1">100%</p>
            <p className="text-sm font-medium text-[#6B7280]">Audit Acceptance</p>
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW TEASER */}
      <section className="py-20 px-6 bg-[#F4F7F5]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-serif font-bold text-[#0F3A2E] mb-4">Core Service Pillars</h2>
            <p className="text-[#334155]">Rigorous assurance and verification frameworks designed for complex operational environments.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "ISO Management Systems", desc: "ISO 14001, 45001, and 50001 implementation, auditing, and certification roadmaps." },
              { title: "GHG & Carbon Verification", desc: "Scope 1, 2, and 3 accounting backed by ISO 14064 and GHG Protocol guidelines." },
              { title: "BRSR / ESG Assurance", desc: "Independent pre-assurance readiness and indicator mapping for SEBI BRSR and global disclosures." }
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl border border-[#E2E8F0] shadow-sm flex flex-col justify-between hover:shadow-md transition">
                <div>
                  <div className="w-12 h-12 bg-[#F4F7F5] rounded-lg flex items-center justify-center text-[#16A34A] font-bold mb-6 text-xl">
                    0{idx + 1}
                  </div>
                  <h3 className="text-xl font-bold text-[#0F3A2E] mb-3">{service.title}</h3>
                  <p className="text-[#334155] text-sm leading-relaxed mb-6">{service.desc}</p>
                </div>
                <Link href="/services" className="text-[#16A34A] font-semibold text-sm hover:underline inline-flex items-center gap-1">
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
      <section className="py-12 bg-white border-y border-[#E2E8F0]">
        <div className="container mx-auto px-6 text-center">
          <p className="text-xs font-semibold tracking-wider text-[#6B7280] uppercase mb-8">
            Trusted by market leaders and aligned with elite verification frameworks
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition duration-300">
            <span className="font-serif font-bold text-xl tracking-tighter text-[#0F3A2E]">EcoCorp Global</span>
            <span className="font-serif font-bold text-xl tracking-tighter text-[#0F3A2E]">Verdant Industries</span>
            <span className="font-serif font-bold text-xl tracking-tighter text-[#0F3A2E]">Aura Energy</span>
            <span className="font-serif font-bold text-xl tracking-tighter text-[#0F3A2E]">TerraMetrics</span>
          </div>
        </div>
      </section>

      {/* CLIENT TESTIMONIALS */}
      <Testimonials />

      {/* FAQ ACCORDION */}
      <FaqSection />

      {/* CTA SECTION */}
      <section className="py-20 px-6 bg-[#0F3A2E] text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-4">Ready to Secure Your Compliance Baseline?</h2>
          <p className="text-[#F4F7F5] opacity-90 mb-8">Schedule a technical scoping discussion with our lead verification auditors.</p>
          <button
            onClick={() => openScopingModal('Executive Scoping Session')}
            className="bg-[#16A34A] hover:bg-[#12813c] text-white px-8 py-3.5 rounded-lg font-bold text-base transition inline-block shadow-lg cursor-pointer"
          >
            Book Scoping Call
          </button>
        </div>
      </section>
    </Layout>
  );
}
