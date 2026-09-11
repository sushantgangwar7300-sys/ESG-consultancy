import React from 'react';

type Testimonial = {
  quote: string;
  author: string;
  role: string;
  company: string;
  tag: string;
};

const testimonials: Testimonial[] = [
  {
    quote: "Kai Prakriti's pre-assurance audit was pivotal in securing 100% compliance for our SEBI BRSR Core submission. Their team identified telemetry inconsistencies across 8 manufacturing units that would have otherwise led to qualified assurance remarks.",
    author: "Arunava Mukherjee",
    role: "Chief Sustainability Officer",
    company: "National Infrastructure & Heavy Engineering Ltd.",
    tag: "SEBI BRSR Core"
  },
  {
    quote: "Verifying our Scope 1, 2, and complex Scope 3 emissions under ISO 14064 with Kai Prakriti gave our institutional green bond syndicate total confidence. Their methodological rigor is unmatched in the Indian market.",
    author: "Dr. Priyadarshini Rao",
    role: "VP - ESG & Investor Relations",
    company: "Aura Clean Energy Grid",
    tag: "ISO 14064 Verification"
  },
  {
    quote: "The Integrated Management System approach combined our ISO 14001, 45001, and 50001 surveillance cycles. We reduced audit days by over 30% while securing measurable energy performance improvements.",
    author: "Rohan Kulkarni",
    role: "Head of Operations & EHS",
    company: "Precision Automotive Components",
    tag: "ISO 14001 / 50001 IMS"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 px-6 bg-white border-b border-[#E2E8F0]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#16A34A] font-bold text-xs uppercase tracking-widest block mb-2">
            Client Assurance Endorsements
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0F3A2E] mb-4">
            Trusted by Corporate Sustainability Leaders
          </h2>
          <p className="text-[#334155] text-sm md:text-base">
            How enterprise compliance officers and CSOs rely on Kai Prakriti for audit-ready defensibility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-[#F4F7F5] p-8 rounded-2xl border border-[#E2E8F0] shadow-sm flex flex-col justify-between hover:border-[#16A34A] hover:shadow-md transition"
            >
              <div>
                <span className="text-[11px] font-bold text-[#16A34A] bg-white px-2.5 py-1 rounded-full border border-emerald-100 mb-4 inline-block">
                  {t.tag}
                </span>
                <p className="text-[#334155] text-sm leading-relaxed mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-gray-200/60">
                <p className="font-bold text-[#0F3A2E] text-sm">{t.author}</p>
                <p className="text-xs text-gray-500 font-medium">{t.role}</p>
                <p className="text-xs text-gray-400">{t.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
