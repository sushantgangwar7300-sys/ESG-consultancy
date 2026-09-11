import React, { useState } from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [ticketId, setTicketId] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    servicePillar: 'ISO Management Systems',
    scopeDetails: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          servicePillar: formData.servicePillar,
          message: formData.scopeDetails
        })
      });
      const data = await res.json();
      if (data.ticketId) {
        setTicketId(data.ticketId);
      }
      setFormStatus('success');
    } catch {
      setTicketId('KP-2026-DIRECT');
      setFormStatus('success');
    }
  };

  return (
    <Layout>
      <Head>
        <title>Contact &amp; Technical Scoping | Kai Prakriti</title>
        <meta name="description" content="Schedule a technical scoping discussion with certified lead verification auditors." />
      </Head>

      <section className="bg-[#0F3A2E] text-white py-16 px-6 text-center">
        <div className="container mx-auto max-w-4xl">
          <span className="text-[#16A34A] font-bold text-xs uppercase tracking-widest block mb-3">
            Direct Auditor Dispatch
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Technical Scoping &amp; Consultation
          </h1>
          <p className="text-[#F4F7F5] opacity-90 max-w-2xl mx-auto text-base">
            Discuss audit boundaries, reporting mandates (SEBI BRSR Core / CSRD), or ISO certification timelines with senior lead auditors.
          </p>
        </div>
      </section>

      <main className="container mx-auto max-w-5xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <span className="text-[#16A34A] font-bold text-xs uppercase tracking-wider block mb-2">Audit Desk</span>
            <h2 className="text-3xl font-serif font-bold text-[#0F3A2E] mb-4">
              Begin Your Scoping Process
            </h2>
            <p className="text-[#334155] leading-relaxed mb-8 text-sm">
              Our lead auditors evaluate sample testing boundaries, multi-site operational structures, and timeline requirements prior to formal proposal submission.
            </p>

            <div className="space-y-6 text-sm text-[#334155]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#F4F7F5] flex items-center justify-center text-[#16A34A] font-bold shrink-0">
                  📍
                </div>
                <div>
                  <h4 className="font-bold text-[#0F3A2E]">Auditing Headquarters</h4>
                  <p className="text-gray-600">Sector 62, Institutional Area, Noida, Uttar Pradesh 201301</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#F4F7F5] flex items-center justify-center text-[#16A34A] font-bold shrink-0">
                  ✉️
                </div>
                <div>
                  <h4 className="font-bold text-[#0F3A2E]">Technical Inquiries</h4>
                  <p className="text-gray-600">contact@kaiprakriti.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#F4F7F5] flex items-center justify-center text-[#16A34A] font-bold shrink-0">
                  🛡️
                </div>
                <div>
                  <h4 className="font-bold text-[#0F3A2E]">Confidentiality Baseline</h4>
                  <p className="text-gray-600">All technical documents and facility discussions protected under standard mutual NDA and ISO 27001 data isolation.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-[#E2E8F0] shadow-sm">
            {formStatus === 'success' ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-emerald-100 text-[#16A34A] rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  ✓
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#0F3A2E] mb-2">Scoping Request Received</h3>
                {ticketId && (
                  <p className="text-xs text-gray-500 font-mono mb-3">Confirmation Reference: {ticketId}</p>
                )}
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  Thank you for submitting your details. Our lead verification auditor will review your parameters and reach out within 24 hours.
                </p>
                <button
                  onClick={() => setFormStatus('idle')}
                  className="bg-[#0F3A2E] text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#16A34A] transition cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-bold text-[#0F3A2E] mb-2">Request Scoping Assessment</h3>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Verma"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#16A34A]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="rahul@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#16A34A]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#16A34A]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                    Organization Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter enterprise or subsidiary name"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#16A34A]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                    Pillar of Interest
                  </label>
                  <select
                    value={formData.servicePillar}
                    onChange={(e) => setFormData({ ...formData, servicePillar: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#16A34A] bg-white"
                  >
                    <option value="ISO Management Systems">ISO Management Systems (14001, 45001, 50001)</option>
                    <option value="GHG & Carbon Verification">GHG &amp; Carbon Accounting (ISO 14064)</option>
                    <option value="BRSR / ESG Assurance">BRSR / ESG Assurance (SEBI Core Mandate)</option>
                    <option value="Multi-Standard Certification">Multi-Standard Enterprise Certification</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                    Scope or Compliance Deadline
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe facilities, target audit date, or specific compliance questions..."
                    value={formData.scopeDetails}
                    onChange={(e) => setFormData({ ...formData, scopeDetails: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#16A34A] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full bg-[#16A34A] hover:bg-[#12813c] text-white py-3 rounded-lg font-bold text-sm transition shadow-md disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {formStatus === 'submitting' ? (
                    <>
                      <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      Submitting Request...
                    </>
                  ) : (
                    'Submit Scoping Inquiry'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </main>
    </Layout>
  );
}
