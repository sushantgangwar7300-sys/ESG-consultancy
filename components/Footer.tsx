import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#E2E8F0] py-12 px-6 text-sm text-[#6B7280]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#16A34A]"></span>
            <p className="font-bold text-[#0F3A2E] text-base">KAI PRAKRITI</p>
          </div>
          <p className="leading-relaxed">
            Independent ESG certification, carbon accounting verification, and regulatory compliance advisory services.
          </p>
        </div>
        <div>
          <p className="font-semibold text-[#0F172A] mb-3">Navigation</p>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-[#16A34A] transition">Home</Link></li>
            <li><Link href="/about" className="hover:text-[#16A34A] transition">About Us</Link></li>
            <li><Link href="/services" className="hover:text-[#16A34A] transition">Assurance Pillars</Link></li>
            <li><Link href="/case-studies" className="hover:text-[#16A34A] transition">Case Studies</Link></li>
            <li><Link href="/blog" className="hover:text-[#16A34A] transition">ESG Insights</Link></li>
            <li><Link href="/contact" className="hover:text-[#16A34A] transition">Contact &amp; Scoping</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-[#0F172A] mb-3">Assurance Frameworks</p>
          <ul className="space-y-2">
            <li><span>ISO 14064 / GHG Protocol</span></li>
            <li><span>SEBI BRSR Core Mandate</span></li>
            <li><span>ISO 14001 / 45001 / 50001 IMS</span></li>
            <li><span>EU CSRD &amp; ESRS Readiness</span></li>
            <li><span>ISO 17029 / 14065 Verification</span></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-[#0F172A] mb-3">Auditor Dispatch Desk</p>
          <p className="mb-1 text-[#0F172A] font-medium">Headquarters</p>
          <p className="mb-1">Sector 62, Institutional Area</p>
          <p className="mb-1">Noida, Uttar Pradesh 201301</p>
          <p className="mt-2 text-[#16A34A] font-semibold">contact@kaiprakriti.com</p>
          <div className="mt-3">
            <Link href="/admin/leads" className="text-xs text-gray-400 hover:text-gray-600 transition underline">
              Auditor Portal Login
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto border-t border-[#E2E8F0] pt-6 flex flex-col md:flex-row justify-between items-center text-xs">
        <p>&copy; {new Date().getFullYear()} Kai Prakriti Private Limited. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <span>ISO 27001 Data Privacy Compliant</span>
          <span>•</span>
          <span>Mutual NDA Protected</span>
          <span>•</span>
          <span>Accredited Verification Body</span>
        </div>
      </div>
    </footer>
  );
}
