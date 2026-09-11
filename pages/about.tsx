import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout, { useScopingModal } from '@/components/Layout';

export default function About() {
  const { openScopingModal } = useScopingModal();

  return (
    <Layout>
      <Head>
        <title>About Us | Kai Prakriti ESG Assurance</title>
        <meta name="description" content="Independent verification body and strategic ESG assurance firm for enterprise leaders." />
      </Head>

      <section className="bg-[#0F3A2E] text-white py-16 px-6 text-center">
        <div className="container mx-auto max-w-4xl">
          <span className="text-[#16A34A] font-bold text-xs uppercase tracking-widest block mb-3">
            Accredited Verification
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            About Kai Prakriti
          </h1>
          <p className="text-[#F4F7F5] opacity-90 max-w-2xl mx-auto text-base">
            Bridging the gap between operational carbon metrics and rigorous global regulatory assurance standards.
          </p>
        </div>
      </section>

      <main className="container mx-auto max-w-4xl px-6 py-16">
        <div className="prose max-w-none text-[#334155] leading-relaxed text-base mb-12">
          <p className="text-lg font-medium text-[#0F172A] mb-4">
            Kai Prakriti is an independent verification body and strategic ESG assurance practice headquartered in the National Capital Region (Noida, India). We provide enterprise leadership teams with the technical rigor, sampling precision, and defensible audit documentation needed to navigate escalating statutory disclosure mandates.
          </p>
          <p className="mb-4">
            As global capital markets and regulators transition from qualitative disclosures to reasonable assurance mandates, corporate sustainability claims must withstand the same level of scrutiny as financial balance sheets. Our multidisciplinary team of certified lead auditors, chemical engineers, and greenhouse gas accountants verify data integrity across Scope 1, 2, and 3 boundaries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 bg-white rounded-2xl border border-[#E2E8F0] shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-[#F4F7F5] text-[#16A34A] flex items-center justify-center font-bold text-xl mb-4">
              🎯
            </div>
            <h3 className="text-xl font-bold text-[#0F3A2E] mb-2">Our Mission</h3>
            <p className="text-[#6B7280] text-sm leading-relaxed">
              To instill uncompromising audit-ready integrity and scientific precision into environmental disclosures across global enterprise supply chains.
            </p>
          </div>

          <div className="p-8 bg-white rounded-2xl border border-[#E2E8F0] shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-[#F4F7F5] text-[#16A34A] flex items-center justify-center font-bold text-xl mb-4">
              🛡️
            </div>
            <h3 className="text-xl font-bold text-[#0F3A2E] mb-2">Accreditation Baseline</h3>
            <p className="text-[#6B7280] text-sm leading-relaxed">
              Operating in conformity with ISO/IEC 17029 (Conformity assessment) and ISO 14065 standards for greenhouse gas validation and verification bodies.
            </p>
          </div>
        </div>

        {/* CORE VALUES */}
        <div className="bg-[#F4F7F5] rounded-2xl p-8 border border-[#E2E8F0] mb-12">
          <h2 className="text-2xl font-serif font-bold text-[#0F3A2E] mb-6 text-center">
            Principles of Verification Integrity
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <h4 className="font-bold text-[#0F3A2E] mb-1">Methodological Defensibility</h4>
              <p className="text-xs text-gray-600">Strict adherence to GHG Protocol, IPCC guidelines, and ISO calculation frameworks.</p>
            </div>
            <div>
              <h4 className="font-bold text-[#0F3A2E] mb-1">Independent Objectivity</h4>
              <p className="text-xs text-gray-600">Uncompromised third-party verification ensuring conflict-free assurance statements.</p>
            </div>
            <div>
              <h4 className="font-bold text-[#0F3A2E] mb-1">Confidentiality &amp; Security</h4>
              <p className="text-xs text-gray-600">Strict ISO 27001 data protection protocols safeguarding enterprise proprietary metrics.</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={() => openScopingModal('General Partnership Scoping')}
            className="bg-[#0F3A2E] hover:bg-[#16A34A] text-white px-8 py-3 rounded-lg font-semibold text-sm transition shadow-md cursor-pointer"
          >
            Connect with an Auditor
          </button>
        </div>
      </main>
    </Layout>
  );
}
