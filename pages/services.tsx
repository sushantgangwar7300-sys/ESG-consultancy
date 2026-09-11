import React from 'react';
import Head from 'next/head';
import Layout, { useScopingModal } from '@/components/Layout';

export default function Services() {
  const { openScopingModal } = useScopingModal();

  const services = [
    {
      pillar: "01",
      title: "ISO Management Systems",
      standards: ["ISO 14001 (Environmental)", "ISO 45001 (Occupational Health & Safety)", "ISO 50001 (Energy Management)"],
      description: "Comprehensive multi-site implementation support, gap assessments, internal audit readiness, and certification audit management for industrial conglomerates.",
      features: [
        "Integrated Management Systems (IMS) audit protocol reduces audit overhead by 35%",
        "Aspect-impact registers aligned with statutory state pollution control boards",
        "Continuous Energy Baseline (EnB) regression modeling for ISO 50001"
      ]
    },
    {
      pillar: "02",
      title: "GHG & Carbon Verification",
      standards: ["ISO 14064-1 / 14064-3", "GHG Protocol Corporate Standard", "SBTi Verification"],
      description: "Rigorous third-party accounting and verification across Scope 1 (Direct Fuel), Scope 2 (Purchased Electricity), and material Scope 3 upstream/downstream categories.",
      features: [
        "Physical site sampling and digital telemetry cross-verification",
        "Supplier primary data onboarding and hybrid emission factor modeling",
        "Formal ISO 14064-3 Limited and Reasonable Assurance opinion statements"
      ]
    },
    {
      pillar: "03",
      title: "BRSR / ESG Assurance",
      standards: ["SEBI BRSR Core Mandate", "CSRD / ESRS Readiness", "GRI & SASB Indicator Mapping"],
      description: "Independent pre-assurance assessments and statutory reasonable assurance readiness for Top 250 & 1000 listed entities navigating SEBI BRSR Core directives.",
      features: [
        "Verification across all 9 mandatory BRSR Core attributes (water, energy, emissions, waste, gender, wages)",
        "Pre-audit sample data testing to identify evidentiary gaps 8–12 weeks before filing",
        "Assurance matrix preparation fully compliant with SEBI circulars"
      ]
    }
  ];

  return (
    <Layout>
      <Head>
        <title>Core Assurance Pillars | Kai Prakriti ESG Assurance</title>
        <meta name="description" content="Explore Kai Prakriti's verification services: ISO Management Systems, GHG Carbon Verification, and SEBI BRSR Core Assurance." />
      </Head>

      <section className="bg-[#0F3A2E] text-white py-16 px-6 text-center">
        <div className="container mx-auto max-w-4xl">
          <span className="text-[#16A34A] font-bold text-xs uppercase tracking-widest block mb-3">
            Assurance Capabilities
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Core Service Pillars
          </h1>
          <p className="text-[#F4F7F5] opacity-90 max-w-2xl mx-auto text-base">
            Defensible, methodology-compliant auditing and certification frameworks designed for enterprise operational complexity.
          </p>
        </div>
      </section>

      <main className="container mx-auto max-w-5xl px-6 py-16">
        <div className="space-y-12">
          {services.map((s, idx) => (
            <div key={idx} className="bg-white p-8 md:p-10 rounded-2xl border border-[#E2E8F0] shadow-sm hover:shadow-md transition">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-gray-100 mb-6">
                <div>
                  <span className="text-[#16A34A] font-bold text-xs tracking-widest uppercase mb-1 block">
                    Pillar {s.pillar}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#0F3A2E] mb-3">{s.title}</h2>
                  <p className="text-[#334155] text-sm md:text-base leading-relaxed max-w-2xl">{s.description}</p>
                </div>
                <button
                  onClick={() => openScopingModal(s.title)}
                  className="whitespace-nowrap bg-[#16A34A] hover:bg-[#0F3A2E] text-white px-6 py-3 rounded-lg text-xs font-bold transition text-center self-start shadow-sm cursor-pointer"
                >
                  Scope This Pillar &rarr;
                </button>
              </div>

              <div className="mb-6">
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Supported Standards</h4>
                <div className="flex flex-wrap gap-2">
                  {s.standards.map((std, i) => (
                    <span key={i} className="text-xs bg-[#F4F7F5] text-[#0F3A2E] font-medium px-3 py-1.5 rounded-lg border border-[#E2E8F0]">
                      {std}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Auditor Delivery Highlights</h4>
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs text-[#334155]">
                  {s.features.map((feat, fi) => (
                    <li key={fi} className="bg-gray-50 p-3 rounded-lg border border-gray-100 flex items-start gap-2">
                      <span className="text-[#16A34A] font-bold">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}
