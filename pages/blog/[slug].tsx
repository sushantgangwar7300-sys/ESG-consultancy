import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Layout, { useScopingModal } from '@/components/Layout';

const articlesContent: Record<string, {
  title: string;
  date: string;
  tag: string;
  readTime: string;
  author: string;
  lead: string;
  content: string[];
  keyTakeaways: string[];
}> = {
  'sebi-brsr-core-pre-assurance-checklist': {
    title: "Navigating SEBI BRSR Core: Pre-Assurance Audit Checklists for 2025",
    date: "August 2025",
    tag: "Regulatory Compliance",
    readTime: "6 min read",
    author: "Lead Assurance Auditor, Kai Prakriti",
    lead: "SEBI's mandate requiring mandatory reasonable assurance for BRSR Core indicators introduces strict evidentiary standards across Top 250 and Top 1000 listed enterprises in India.",
    keyTakeaways: [
      "Indicator boundary verification must cover all operational subsidiaries contributing >2% of turnover.",
      "Water footprint reconciliation requires calibrated ultrasonic flow meter logs and third-party effluent test certificates.",
      "Greenhouse gas baseline recalculations must align with ISO 14064-3 reasonable assurance criteria."
    ],
    content: [
      "The Securities and Exchange Board of India (SEBI) has systematically expanded Business Responsibility and Sustainability Reporting (BRSR) Core requirements. Unlike voluntary ESG frameworks where directional disclosure was adequate, BRSR Core mandates quantified, sample-verifiable operational metrics across 9 key ESG attributes.",
      "Enterprise audit preparation typically reveals three persistent vulnerabilities: uncalibrated telemetry in energy sub-meters, unverified third-party transport manifests in Scope 3 Category 4 calculations, and missing gender wage audit trails. Early pre-assurance identification eliminates qualifying statements in statutory filings.",
      "Our recommended 10-week pre-assurance roadmap establishes a defensible evidentiary trail before the statutory auditor conducts final sampling. Implementing strict internal data quality controls ensures 100% audit acceptance."
    ]
  },
  'scope-3-decarbonization-iso-14064': {
    title: "Scope 3 Decarbonization: Practical Strategies Under ISO 14064-1",
    date: "July 2025",
    tag: "Carbon Accounting",
    readTime: "8 min read",
    author: "Technical Director of Carbon Verification",
    lead: "Upstream and downstream Scope 3 emissions frequently account for over 75% of an industrial enterprise's total carbon footprint. Here is how leading firms verify supplier data under ISO 14064-1.",
    keyTakeaways: [
      "Prioritize Category 1 (Purchased Goods) and Category 4 (Upstream Transport) for primary supplier data collection.",
      "Employ hybrid emission factor modeling where primary supplier disclosures are supplemented by verified LCA databases.",
      "Establish contractual carbon transparency clauses in long-term vendor procurement frameworks."
    ],
    content: [
      "Under ISO 14064-1:2018, indirect GHG emissions (Scope 3) are classified into categories including imported energy, transportation, products used by the organization, and end-of-life treatment. Navigating this complexity requires a disciplined materiality screening threshold.",
      "Auditors frequently reject Scope 3 inventories that rely solely on spend-based economic input-output (EEIO) models. To withstand third-party limited or reasonable assurance, enterprises must demonstrate a systematic transition toward supplier-specific activity manifests.",
      "By deploying standardized supplier ESG assessment portals and integrating primary freight invoices, industrial enterprises can reduce variance from +/- 40% down to under 5%, unlocking favorable green financing terms."
    ]
  },
  'iso-50001-energy-management-leadership': {
    title: "Integrating ISO 50001 with Enterprise Carbon Leadership",
    date: "June 2025",
    tag: "Energy Management",
    readTime: "5 min read",
    author: "Senior Systems Specialist",
    lead: "How combining ISO 50001 Energy Management Systems with ISO 14001 drives verified double-digit operational cost reductions while accelerating decarbonization goals.",
    keyTakeaways: [
      "Energy Baseline (EnB) normalization eliminates weather and production volume distortions.",
      "Significant Energy Uses (SEUs) account for 80% of energy consumption in manufacturing operations.",
      "Integrated surveillance audits save 30% on certification fees and reduce engineering team distraction."
    ],
    content: [
      "While ISO 14001 establishes an overarching environmental management architecture, ISO 50001 zeroes in on energy performance, efficiency, and consumption. For energy-intensive sectors like steel, cement, chemicals, and data centers, ISO 50001 is the most direct lever for carbon reduction.",
      "A rigorous Energy Review identifies Significant Energy Uses (SEUs)—such as compressed air systems, chillers, and industrial furnaces. Continuous sub-metering and regression-based Energy Performance Indicators (EnPIs) verify actual savings against baseline projections.",
      "Enterprises that integrate ISO 50001 into their sustainability governance routinely outperform their peers on CDP and Dow Jones Sustainability Index scores, demonstrating operational excellence to institutional shareholders."
    ]
  }
};

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;
  const { openScopingModal } = useScopingModal();

  const articleKey = typeof slug === 'string' ? slug : 'sebi-brsr-core-pre-assurance-checklist';
  const article = articlesContent[articleKey] || articlesContent['sebi-brsr-core-pre-assurance-checklist'];

  return (
    <Layout>
      <Head>
        <title>{`${article.title} | Kai Prakriti ESG Insights`}</title>
        <meta name="description" content={article.lead} />
      </Head>

      <article className="container mx-auto max-w-4xl px-6 py-16">
        <div className="mb-6">
          <Link href="/blog" className="text-xs font-semibold text-[#16A34A] hover:underline inline-flex items-center gap-1 mb-4">
            &larr; Back to all insights
          </Link>
          <div className="flex items-center gap-3 text-xs text-[#6B7280] mb-3">
            <span className="font-semibold text-[#16A34A] bg-[#F4F7F5] px-2.5 py-0.5 rounded-full border border-emerald-100">
              {article.tag}
            </span>
            <span>•</span>
            <span>{article.date}</span>
            <span>•</span>
            <span>{article.readTime}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-[#0F3A2E] leading-tight mb-4">
            {article.title}
          </h1>
          <p className="text-xs text-gray-500 font-medium">By {article.author}</p>
        </div>

        <div className="bg-[#F4F7F5] rounded-xl p-6 border border-[#E2E8F0] mb-10 text-base md:text-lg text-[#0F172A] font-medium leading-relaxed">
          {article.lead}
        </div>

        {/* KEY TAKEAWAYS */}
        <div className="bg-white rounded-xl border border-emerald-100 p-6 mb-10 shadow-sm">
          <h3 className="text-sm font-bold text-[#0F3A2E] uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#16A34A]"></span>
            Lead Auditor Takeaways
          </h3>
          <ul className="space-y-2.5 text-sm text-[#334155]">
            {article.keyTakeaways.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-[#16A34A] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* BODY PARAGRAPHS */}
        <div className="space-y-6 text-[#334155] leading-relaxed text-base">
          {article.content.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {/* BOTTOM SCOPING CTA */}
        <div className="mt-16 bg-[#0F3A2E] text-white rounded-2xl p-8 md:p-10 text-center">
          <h3 className="text-2xl font-serif font-bold mb-3">Ready to Prepare Your Assurance Documentation?</h3>
          <p className="text-sm text-[#F4F7F5] opacity-90 max-w-xl mx-auto mb-6">
            Our lead auditors conduct customized pre-assurance gap assessments tailored to your enterprise facilities and statutory filing dates.
          </p>
          <button
            onClick={() => openScopingModal(article.title)}
            className="bg-[#16A34A] hover:bg-[#12813c] text-white px-8 py-3 rounded-lg font-bold text-sm transition shadow-md cursor-pointer"
          >
            Schedule Scoping Consultation
          </button>
        </div>
      </article>
    </Layout>
  );
}
