import React, { useState } from 'react';

type FaqItem = {
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    question: "What is the timeline required for pre-assurance before SEBI BRSR statutory filing?",
    answer: "For listed companies preparing for SEBI BRSR Core assurance, we recommend initiating the scoping phase 8 to 12 weeks prior to publication. This allows 3 weeks for indicator boundary mapping, 4 weeks for sample activity testing across manufacturing facilities, and 3 weeks for final assurance statement issuance."
  },
  {
    question: "How do Kai Prakriti's verification statements comply with ISO 17029 and ISO 14065?",
    answer: "Our lead auditors operate strictly under ISO 14065 accreditation frameworks for greenhouse gas statements and ISO/IEC 17029 for general verification/validation bodies. Every assurance statement includes an explicit level of assurance (limited or reasonable), materiality thresholds (typically 5%), and standard methodology references."
  },
  {
    question: "Can multi-site industrial enterprises bundle ISO 14001, 45001, and 50001 certifications?",
    answer: "Yes. An Integrated Management System (IMS) audit protocol reduces total audit days by up to 35% compared to isolated certifications. Our technical team scopes shared management controls, document libraries, and regulatory registers to deliver a unified surveillance roadmap."
  },
  {
    question: "What source documents are necessary for Scope 3 emissions verification under ISO 14064-1?",
    answer: "Depending on material Scope 3 categories (e.g., Purchased Goods, Upstream Transportation, Fuel & Energy-Related Activities), we verify supplier specific activity manifests, utility invoices, life cycle assessment (LCA) primary data, and standard secondary emission factor cross-references (DEFRA, CEA, ecoinvent)."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 px-6 bg-[#F4F7F5] border-t border-[#E2E8F0]">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[#16A34A] font-bold text-xs uppercase tracking-widest block mb-2">
            Audit Intelligence
          </span>
          <h2 className="text-3xl font-serif font-bold text-[#0F3A2E] mb-3">
            Frequently Asked Assurance Questions
          </h2>
          <p className="text-[#334155] text-sm">
            Clarifications on audit protocols, assurance levels, accreditation boundaries, and regulatory timelines.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-[#E2E8F0] shadow-sm overflow-hidden transition"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center gap-4 focus:outline-none"
                >
                  <span className="font-bold text-[#0F3A2E] text-base md:text-lg">
                    {faq.question}
                  </span>
                  <span className="text-[#16A34A] font-bold text-xl shrink-0 transition-transform duration-200">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-[#334155] leading-relaxed border-t border-gray-100 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
