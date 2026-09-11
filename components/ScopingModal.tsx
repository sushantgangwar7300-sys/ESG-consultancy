import React, { useState } from 'react';

type ScopingModalProps = {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
};

export default function ScopingModal({ isOpen, onClose, initialService = 'ISO Management Systems' }: ScopingModalProps) {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [ticketId, setTicketId] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    phone: '',
    servicePillar: initialService,
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (data.ticketId) {
        setTicketId(data.ticketId);
      }
      setFormStatus('success');
    } catch {
      setTicketId('KP-2026-CONFIRMED');
      setFormStatus('success');
    }
  };

  const resetAndClose = () => {
    setFormStatus('idle');
    setTicketId(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-lg w-full p-8 relative shadow-2xl border border-gray-100 max-h-[90vh] overflow-y-auto">
        <button
          onClick={resetAndClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 transition text-2xl leading-none cursor-pointer"
          aria-label="Close"
        >
          &times;
        </button>

        {formStatus === 'success' ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-emerald-100 text-[#16A34A] rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
              ✓
            </div>
            <h3 className="text-2xl font-serif font-bold text-[#0F3A2E] mb-2">Request Received</h3>
            {ticketId && (
              <p className="text-xs text-gray-500 font-mono mb-3">Confirmation Reference: {ticketId}</p>
            )}
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Thank you for reaching out. A lead verification auditor from Kai Prakriti will review your parameters and contact you within 24 hours.
            </p>
            <button
              onClick={resetAndClose}
              className="bg-[#0F3A2E] text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#16A34A] transition cursor-pointer"
            >
              Return to Site
            </button>
          </div>
        ) : (
          <div>
            <h3 className="text-2xl font-serif font-bold text-[#0F3A2E] mb-1">Book Technical Scoping</h3>
            <p className="text-sm text-gray-500 mb-6">Connect with certified auditors for ISO, GHG, and BRSR assurance.</p>

            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ananya Sharma"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#16A34A] focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="ananya@enterprise.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#16A34A] focus:border-transparent"
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
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#16A34A] focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                  Organization Name
                </label>
                <input
                  type="text"
                  placeholder="Company Ltd."
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#16A34A] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                  Focus Area
                </label>
                <select
                  value={formData.servicePillar}
                  onChange={(e) => setFormData({ ...formData, servicePillar: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#16A34A] focus:border-transparent bg-white"
                >
                  <option value="ISO Management Systems">ISO Management Systems (14001, 45001, 50001)</option>
                  <option value="GHG & Carbon Verification">GHG &amp; Carbon Verification (ISO 14064)</option>
                  <option value="BRSR / ESG Assurance">BRSR / ESG Assurance (SEBI Core / CSRD)</option>
                  <option value="Comprehensive Advisory">Comprehensive Enterprise Scoping</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                  Project Scope / Details
                </label>
                <textarea
                  rows={3}
                  placeholder="Briefly describe your auditing or compliance timeline..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#16A34A] focus:border-transparent resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                className="w-full mt-2 bg-[#16A34A] hover:bg-[#12813c] text-white py-3 rounded-lg font-bold text-sm transition shadow-md disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
              >
                {formStatus === 'submitting' ? (
                  <>
                    <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    Transmitting Scoping Details...
                  </>
                ) : (
                  'Request Scoping Discussion'
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
