import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout, { useScopingModal } from '@/components/Layout';

export default function Blog() {
  const { openScopingModal } = useScopingModal();

  const articles = [
    {
      slug: "sebi-brsr-core-pre-assurance-checklist",
      title: "Navigating SEBI BRSR Core: Pre-Assurance Audit Checklists for 2025",
      summary: "Comprehensive breakdown of the 9 mandatory core attributes, sampling guidelines, and common evidentiary vulnerabilities in Top 250 Indian listed entities.",
      date: "August 2025",
      tag: "Regulatory Compliance",
      readTime: "6 min read"
    },
    {
      slug: "scope-3-decarbonization-iso-14064",
      title: "Scope 3 Decarbonization: Practical Strategies Under ISO 14064-1",
      summary: "Actionable roadmap for moving from high-variance spend-based models to supplier-specific activity manifests capable of withstanding external audit scrutiny.",
      date: "July 2025",
      tag: "Carbon Accounting",
      readTime: "8 min read"
    },
    {
      slug: "iso-50001-energy-management-leadership",
      title: "Integrating ISO 50001 with Enterprise Carbon Leadership",
      summary: "How industrial enterprises are synthesizing energy performance indicators (EnPIs) with ISO 14001 governance to verify measurable decarbonization.",
      date: "June 2025",
      tag: "Energy Management",
      readTime: "5 min read"
    }
  ];

  return (
    <Layout>
      <Head>
        <title>Insights &amp; Publications | Kai Prakriti ESG Assurance</title>
        <meta name="description" content="Technical briefings and audit insights on SEBI BRSR Core, ISO 14064 carbon accounting, and enterprise ESG disclosures." />
      </Head>

      <section className="bg-[#0F3A2E] text-white py-16 px-6 text-center">
        <div className="container mx-auto max-w-4xl">
          <span className="text-[#16A34A] font-bold text-xs uppercase tracking-widest block mb-3">
            Auditor Perspectives
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            ESG &amp; Carbon Assurance Insights
          </h1>
          <p className="text-[#F4F7F5] opacity-90 max-w-2xl mx-auto text-base">
            Technical analysis from lead verification auditors on evolving reporting frameworks, statutory deadlines, and assurance methodologies.
          </p>
        </div>
      </section>

      <main className="container mx-auto max-w-4xl px-6 py-16">
        <div className="space-y-6">
          {articles.map((item, i) => (
            <Link
              key={i}
              href={`/blog/${item.slug}`}
              className="block bg-white p-8 rounded-2xl border border-[#E2E8F0] shadow-sm hover:border-[#16A34A] hover:shadow-md transition group"
            >
              <div className="flex items-center gap-3 text-xs text-[#6B7280] mb-3">
                <span className="font-semibold text-[#16A34A] bg-[#F4F7F5] px-2.5 py-0.5 rounded-full border border-emerald-100">
                  {item.tag}
                </span>
                <span>•</span>
                <span>{item.date}</span>
                <span>•</span>
                <span>{item.readTime}</span>
              </div>
              <h2 className="text-2xl font-serif font-bold text-[#0F3A2E] group-hover:text-[#16A34A] transition mb-3">
                {item.title}
              </h2>
              <p className="text-[#334155] text-sm leading-relaxed mb-4">
                {item.summary}
              </p>
              <span className="text-xs font-bold text-[#16A34A] inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Read technical briefing &rarr;
              </span>
            </Link>
          ))}
        </div>

        {/* NEWSLETTER / SCOPING PROMPT */}
        <div className="mt-16 bg-[#F4F7F5] border border-[#E2E8F0] rounded-2xl p-8 text-center">
          <h3 className="text-xl font-serif font-bold text-[#0F3A2E] mb-2">Need a Specific Technical Briefing?</h3>
          <p className="text-sm text-[#334155] max-w-md mx-auto mb-6">
            Speak directly with our technical lead auditors regarding your sector's disclosure obligations.
          </p>
          <button
            onClick={() => openScopingModal('Technical Briefing Request')}
            className="bg-[#0F3A2E] hover:bg-[#16A34A] text-white px-6 py-2.5 rounded-lg text-xs font-semibold transition cursor-pointer"
          >
            Request Auditor Scoping Call
          </button>
        </div>
      </main>
    </Layout>
  );
}
