import React from 'react';
import Head from 'next/head';
import Layout, { useScopingModal } from '@/components/Layout';

const studies = [
  {
    client: "Tier-1 Automotive Component Manufacturer",
    scope: "SEBI BRSR Core Limited Assurance across 11 Facilities",
    mandate: "SEBI BRSR Core Mandate (Top 250 Listed Entity)",
    challenge: "Fragmented water withdrawal metrics and Scope 2 grid emission factor inconsistencies across multi-state fabrication plants.",
    solution: "Deployed ISO 14065 aligned sampling matrix. Automated boundary reconciliations and conducted physical on-site sample verification across 4 regional manufacturing hubs.",
    result: "100% unqualified assurance statement achieved with zero regulatory non-conformances filed before the statutory deadline.",
    stats: [
      { label: "Facilities Audited", value: "11" },
      { label: "Assurance Level", value: "Limited" },
      { label: "Lead Time", value: "6 Weeks" }
    ]
  },
  {
    client: "Multi-Gigawatt Renewable IPP & Grid Operator",
    scope: "ISO 14064-1 Greenhouse Gas Footprint Verification (Scope 1, 2 & 3)",
    mandate: "Green Bond Issuance & Global Institutional Investor Disclosure",
    challenge: "Complex Scope 3 Category 1 (Purchased Goods) and Category 2 (Capital Goods) emissions accounting for 32 solar & wind farm installations.",
    solution: "Standardized upstream supplier emission factor models and integrated primary EPC contractor fuel logs with secondary ecoinvent models.",
    result: "Third-party verification opinion issued enabling compliance for a $450M green bond tranche.",
    stats: [
      { label: "tCO2e Verified", value: "1.8M+" },
      { label: "Protocol", value: "ISO 14064" },
      { label: "Accuracy Threshold", value: "< 2%" }
    ]
  },
  {
    client: "Hyperscale Enterprise Data Center Infrastructure",
    scope: "Integrated Management System: ISO 14001 & ISO 50001 Certification",
    mandate: "Enterprise Energy Efficiency Mandate & Client Carbon Transparency",
    challenge: "High Power Usage Effectiveness (PUE) variation and rapid capacity expansion requiring continuous surveillance without operational downtime.",
    solution: "Architected real-time power telemetry integration with ISO 50001 energy baseline indicators and trained 45 internal facility engineers.",
    result: "Dual certification awarded with an 18.4% verified reduction in facility energy intensity over 12 months.",
    stats: [
      { label: "Energy Reduction", value: "18.4%" },
      { label: "Surveillance Cycle", value: "Annual" },
      { label: "PUE Improvement", value: "0.22" }
    ]
  }
];

export default function CaseStudies() {
  const { openScopingModal } = useScopingModal();

  return (
    <Layout>
      <Head>
        <title>Audit Case Studies &amp; Verified Outcomes | Kai Prakriti</title>
        <meta name="description" content="Explore verified enterprise case studies in SEBI BRSR Core, ISO 14064 carbon verification, and ISO 50001 systems." />
      </Head>

      <section className="bg-[#0F3A2E] text-white py-16 px-6 text-center">
        <div className="container mx-auto max-w-4xl">
          <span className="text-[#16A34A] font-bold text-xs uppercase tracking-widest block mb-3">
            Proven Assurance Track Record
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Auditing Excellence in Complex Industrial Operations
          </h1>
          <p className="text-[#F4F7F5] opacity-90 max-w-2xl mx-auto text-base">
            Discover how leading industrial enterprises achieved audit-ready defensibility and compliance certifications with Kai Prakriti.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#FAFAFA]">
        <div className="container mx-auto max-w-5xl space-y-12">
          {studies.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-[#E2E8F0] p-8 md:p-10 shadow-sm hover:shadow-md transition"
            >
              <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 pb-6 border-b border-gray-100 mb-6">
                <div>
                  <span className="text-xs font-semibold text-[#16A34A] bg-[#F4F7F5] px-3 py-1 rounded-full border border-emerald-100">
                    {item.mandate}
                  </span>
                  <h2 className="text-2xl font-serif font-bold text-[#0F3A2E] mt-2">{item.client}</h2>
                  <p className="text-sm font-medium text-gray-500">{item.scope}</p>
                </div>
                <button
                  onClick={() => openScopingModal(item.mandate)}
                  className="whitespace-nowrap bg-[#0F3A2E] hover:bg-[#16A34A] text-white px-5 py-2.5 rounded-lg text-xs font-semibold transition cursor-pointer self-start"
                >
                  Scope Similar Project &rarr;
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Compliance Challenge</h4>
                  <p className="text-sm text-[#334155] leading-relaxed">{item.challenge}</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Auditing Methodology</h4>
                  <p className="text-sm text-[#334155] leading-relaxed">{item.solution}</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Verified Outcome</h4>
                  <p className="text-sm text-[#334155] leading-relaxed font-medium">{item.result}</p>
                </div>
              </div>

              <div className="bg-[#F4F7F5] rounded-xl p-4 grid grid-cols-3 gap-4 text-center border border-[#E2E8F0]">
                {item.stats.map((st, i) => (
                  <div key={i}>
                    <p className="text-xl md:text-2xl font-bold text-[#0F3A2E]">{st.value}</p>
                    <p className="text-xs text-gray-500 font-medium">{st.label}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
