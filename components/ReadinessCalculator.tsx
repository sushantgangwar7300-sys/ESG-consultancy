import React, { useState } from 'react';

type StepAnswers = {
  regulatoryScope: string;
  ghgBoundary: string;
  internalControls: string;
  timeline: string;
};

export default function ReadinessCalculator() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<StepAnswers>({
    regulatoryScope: 'sebi_core',
    ghgBoundary: 'scope1_2_partial3',
    internalControls: 'internal_only',
    timeline: '3_months'
  });

  const [leadInfo, setLeadInfo] = useState({
    name: '',
    email: '',
    company: ''
  });

  const [submitting, setSubmitting] = useState(false);
  const [submittedTicket, setSubmittedTicket] = useState<string | null>(null);

  const calculateScore = () => {
    let score = 30;
    if (answers.regulatoryScope === 'voluntary') score += 15;
    else if (answers.regulatoryScope === 'iso_multisite') score += 20;
    else if (answers.regulatoryScope === 'sebi_core') score += 10;
    else score += 15;

    if (answers.ghgBoundary === 'comprehensive') score += 30;
    else if (answers.ghgBoundary === 'scope1_2_partial3') score += 20;
    else if (answers.ghgBoundary === 'scope1_2') score += 10;
    else score += 5;

    if (answers.internalControls === 'reasonable') score += 30;
    else if (answers.internalControls === 'limited') score += 25;
    else if (answers.internalControls === 'internal_only') score += 15;
    else score += 5;

    return Math.min(score, 98);
  };

  const score = calculateScore();

  const getRiskProfile = (sc: number) => {
    if (sc >= 80) return { label: 'Audit-Ready Baseline', color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-200' };
    if (sc >= 60) return { label: 'Moderate Assurance Gap', color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200' };
    return { label: 'High Material Vulnerability', color: 'text-rose-600', bg: 'bg-rose-50', border: 'border-rose-200' };
  };

  const risk = getRiskProfile(score);

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: leadInfo.name,
          email: leadInfo.email,
          company: leadInfo.company,
          servicePillar: 'ESG Readiness Diagnostic',
          message: `Calculated Score: ${score}/100. Mandate: ${answers.regulatoryScope}, Boundary: ${answers.ghgBoundary}, Controls: ${answers.internalControls}`,
          readinessScore: score
        })
      });
      const data = await res.json();
      if (data.ticketId) {
        setSubmittedTicket(data.ticketId);
      } else {
        setSubmittedTicket('KP-ASSESS-DONE');
      }
    } catch {
      setSubmittedTicket('KP-ASSESS-DONE');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="py-20 px-6 bg-white border-b border-[#E2E8F0]">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[#16A34A] font-bold text-xs uppercase tracking-widest block mb-2">
            Interactive Diagnostic
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0F3A2E] mb-4">
            ESG &amp; Carbon Audit Readiness Assessment
          </h2>
          <p className="text-[#334155] text-sm md:text-base">
            Evaluate your enterprise compliance readiness against SEBI BRSR Core, ISO 14064, and international assurance criteria in 60 seconds.
          </p>
        </div>

        <div className="bg-[#F4F7F5] rounded-2xl border border-[#E2E8F0] p-6 md:p-10 shadow-sm">
          {/* STEP INDICATOR */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#E2E8F0]">
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className="flex items-center gap-2">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition ${
                    step === s
                      ? 'bg-[#0F3A2E] text-white'
                      : step > s
                      ? 'bg-[#16A34A] text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {step > s ? '✓' : s}
                </div>
                <span className="hidden sm:inline text-xs font-semibold text-[#0F172A]">
                  {s === 1 && 'Mandate'}
                  {s === 2 && 'GHG Scope'}
                  {s === 3 && 'Controls'}
                  {s === 4 && 'Results'}
                </span>
              </div>
            ))}
          </div>

          {/* STEP 1: REGULATORY MANDATE */}
          {step === 1 && (
            <div>
              <h3 className="text-xl font-bold text-[#0F3A2E] mb-2">Select Your Primary Compliance Driver</h3>
              <p className="text-sm text-[#6B7280] mb-6">What standard or reporting mandate dictates your upcoming audit cycle?</p>

              <div className="space-y-3">
                {[
                  { id: 'sebi_core', label: 'SEBI BRSR Core Mandate (Top 250 / 1000 Listed NSE/BSE)' },
                  { id: 'iso_multisite', label: 'ISO 14001 / 45001 / 50001 Multi-Site Enterprise Certification' },
                  { id: 'ghg_protocol', label: 'ISO 14064 GHG Accounting (Scope 1, 2, & 3 Verification)' },
                  { id: 'voluntary', label: 'Voluntary ESG Disclosure / Global Supply Chain Requirement (CSRD/GRI)' }
                ].map((opt) => (
                  <label
                    key={opt.id}
                    onClick={() => setAnswers({ ...answers, regulatoryScope: opt.id })}
                    className={`flex items-center p-4 rounded-xl border transition cursor-pointer ${
                      answers.regulatoryScope === opt.id
                        ? 'bg-white border-[#16A34A] shadow-sm ring-1 ring-[#16A34A]'
                        : 'bg-white/60 border-[#E2E8F0] hover:bg-white'
                    }`}
                  >
                    <input
                      type="radio"
                      name="regulatoryScope"
                      checked={answers.regulatoryScope === opt.id}
                      onChange={() => {}}
                      className="text-[#16A34A] focus:ring-[#16A34A] mr-3"
                    />
                    <span className="text-sm font-medium text-[#0F172A]">{opt.label}</span>
                  </label>
                ))}
              </div>

              <div className="mt-8 flex justify-end">
                <button
                  onClick={() => setStep(2)}
                  className="bg-[#0F3A2E] hover:bg-[#16A34A] text-white px-6 py-2.5 rounded-lg font-semibold text-sm transition flex items-center gap-2"
                >
                  Next: GHG Scope &rarr;
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: GHG SCOPE BOUNDARY */}
          {step === 2 && (
            <div>
              <h3 className="text-xl font-bold text-[#0F3A2E] mb-2">Current Emissions Accounting Boundary</h3>
              <p className="text-sm text-[#6B7280] mb-6">How mature is your internal carbon data collection?</p>

              <div className="space-y-3">
                {[
                  { id: 'comprehensive', label: 'Full Scope 1, 2, and all material Scope 3 categories modeled with activity data' },
                  { id: 'scope1_2_partial3', label: 'Scope 1 & 2 fully measured; selected high-impact Scope 3 categories (Logistics/Travel)' },
                  { id: 'scope1_2', label: 'Scope 1 (Direct Fuel) and Scope 2 (Grid Electricity) only' },
                  { id: 'nascent', label: 'Estimations based on utility bills; no formal GHG protocol inventory established' }
                ].map((opt) => (
                  <label
                    key={opt.id}
                    onClick={() => setAnswers({ ...answers, ghgBoundary: opt.id })}
                    className={`flex items-center p-4 rounded-xl border transition cursor-pointer ${
                      answers.ghgBoundary === opt.id
                        ? 'bg-white border-[#16A34A] shadow-sm ring-1 ring-[#16A34A]'
                        : 'bg-white/60 border-[#E2E8F0] hover:bg-white'
                    }`}
                  >
                    <input
                      type="radio"
                      name="ghgBoundary"
                      checked={answers.ghgBoundary === opt.id}
                      onChange={() => {}}
                      className="text-[#16A34A] focus:ring-[#16A34A] mr-3"
                    />
                    <span className="text-sm font-medium text-[#0F172A]">{opt.label}</span>
                  </label>
                ))}
              </div>

              <div className="mt-8 flex justify-between items-center">
                <button
                  onClick={() => setStep(1)}
                  className="text-gray-600 hover:text-black text-sm font-medium"
                >
                  &larr; Back
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="bg-[#0F3A2E] hover:bg-[#16A34A] text-white px-6 py-2.5 rounded-lg font-semibold text-sm transition flex items-center gap-2"
                >
                  Next: Controls &rarr;
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: CONTROLS & ASSURANCE */}
          {step === 3 && (
            <div>
              <h3 className="text-xl font-bold text-[#0F3A2E] mb-2">Historical Verification &amp; Internal Controls</h3>
              <p className="text-sm text-[#6B7280] mb-6">What level of internal or external assurance have your ESG metrics undergone?</p>

              <div className="space-y-3">
                {[
                  { id: 'reasonable', label: 'Prior Reasonable Assurance statement under ISO 14065 or ISAE 3000' },
                  { id: 'limited', label: 'Limited Assurance obtained from accredited third-party verification body' },
                  { id: 'internal_only', label: 'Internal audit / ESG committee review only; no independent third-party opinion' },
                  { id: 'none', label: 'First-time disclosure cycle with no pre-existing assurance mechanisms' }
                ].map((opt) => (
                  <label
                    key={opt.id}
                    onClick={() => setAnswers({ ...answers, internalControls: opt.id })}
                    className={`flex items-center p-4 rounded-xl border transition cursor-pointer ${
                      answers.internalControls === opt.id
                        ? 'bg-white border-[#16A34A] shadow-sm ring-1 ring-[#16A34A]'
                        : 'bg-white/60 border-[#E2E8F0] hover:bg-white'
                    }`}
                  >
                    <input
                      type="radio"
                      name="internalControls"
                      checked={answers.internalControls === opt.id}
                      onChange={() => {}}
                      className="text-[#16A34A] focus:ring-[#16A34A] mr-3"
                    />
                    <span className="text-sm font-medium text-[#0F172A]">{opt.label}</span>
                  </label>
                ))}
              </div>

              <div className="mt-8 flex justify-between items-center">
                <button
                  onClick={() => setStep(2)}
                  className="text-gray-600 hover:text-black text-sm font-medium"
                >
                  &larr; Back
                </button>
                <button
                  onClick={() => setStep(4)}
                  className="bg-[#16A34A] hover:bg-[#0F3A2E] text-white px-6 py-2.5 rounded-lg font-semibold text-sm transition flex items-center gap-2 shadow-sm"
                >
                  Calculate Audit Readiness &rarr;
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: SCORE & LEAD CAPTURE */}
          {step === 4 && (
            <div>
              <div className="text-center py-4">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border mb-4 text-sm font-semibold tracking-wide" style={{ borderColor: 'inherit' }}>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${risk.bg} ${risk.color} ${risk.border} border`}>
                    {risk.label}
                  </span>
                </div>

                <div className="flex justify-center items-baseline gap-2 mb-2">
                  <span className="text-6xl font-serif font-extrabold text-[#0F3A2E]">{score}</span>
                  <span className="text-2xl text-gray-500 font-bold">/100</span>
                </div>
                <p className="text-sm text-[#334155] max-w-md mx-auto mb-8">
                  {score >= 80
                    ? 'Your operational data shows solid documentation rigor. Recommend conducting targeted pre-assurance to seal sample testing trails.'
                    : score >= 60
                    ? 'Viable baseline, but material gaps exist in Scope 3 allocation or internal control defensibility under SEBI Core audit rigor.'
                    : 'Substantial audit risk detected. Recommend executing an immediate gap scoping assessment before statutory filing deadlines.'}
                </p>
              </div>

              {/* LEAD MAGNET FORM */}
              <div className="bg-white p-6 md:p-8 rounded-xl border border-[#E2E8F0] shadow-sm">
                {submittedTicket ? (
                  <div className="text-center py-6">
                    <div className="w-12 h-12 bg-emerald-100 text-[#16A34A] rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                      ✓
                    </div>
                    <h4 className="text-xl font-bold text-[#0F3A2E] mb-1">Audit Scoping Report Requested</h4>
                    <p className="text-xs text-gray-500 mb-2 font-mono">Reference Ticket: {submittedTicket}</p>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      Our Lead Auditor has been notified with your readiness benchmark. Your detailed Gap Assessment Matrix will be dispatched to <strong>{leadInfo.email}</strong>.
                    </p>
                    <button
                      onClick={() => { setStep(1); setSubmittedTicket(null); }}
                      className="text-xs text-[#16A34A] font-bold hover:underline"
                    >
                      Re-take Assessment
                    </button>
                  </div>
                ) : (
                  <div>
                    <h4 className="text-lg font-bold text-[#0F3A2E] mb-1">
                      Request Your Pre-Assurance Scoping Matrix
                    </h4>
                    <p className="text-xs text-gray-500 mb-6">
                      Get a customized audit preparation checklist and milestone timeline delivered to your enterprise inbox.
                    </p>

                    <form onSubmit={handleLeadSubmit} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Your Name"
                          value={leadInfo.name}
                          onChange={(e) => setLeadInfo({ ...leadInfo, name: e.target.value })}
                          className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-[#16A34A] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                          Corporate Email *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="name@corp.com"
                          value={leadInfo.email}
                          onChange={(e) => setLeadInfo({ ...leadInfo, email: e.target.value })}
                          className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-[#16A34A] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                          Organization
                        </label>
                        <input
                          type="text"
                          placeholder="Enterprise Ltd."
                          value={leadInfo.company}
                          onChange={(e) => setLeadInfo({ ...leadInfo, company: e.target.value })}
                          className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-[#16A34A] focus:outline-none"
                        />
                      </div>
                      <div className="sm:col-span-3 mt-2">
                        <button
                          type="submit"
                          disabled={submitting}
                          className="w-full bg-[#16A34A] hover:bg-[#12813c] text-white py-2.5 rounded-lg font-bold text-sm transition shadow-sm disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
                        >
                          {submitting ? 'Generating Scoping Matrix...' : 'Send Detailed Scoping Matrix & Recommendations'}
                        </button>
                      </div>
                    </form>
                  </div>
                )}
              </div>

              <div className="mt-6 flex justify-start">
                <button
                  onClick={() => setStep(3)}
                  className="text-gray-500 hover:text-black text-xs font-medium"
                >
                  &larr; Adjust Parameters
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
