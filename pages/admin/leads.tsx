import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '@/components/Layout';

type Lead = {
  ticketId: string;
  fullName: string;
  email: string;
  company: string;
  phone: string;
  servicePillar: string;
  message: string;
  readinessScore?: number;
  submittedAt: string;
};

export default function AdminLeads() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterPillar, setFilterPillar] = useState('All');
  const [search, setSearch] = useState('');

  const fetchLeads = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/leads-list');
      const data = await res.json();
      setLeads(data.leads || []);
    } catch {
      setLeads([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const filteredLeads = leads.filter((l) => {
    const matchesPillar = filterPillar === 'All' || l.servicePillar.toLowerCase().includes(filterPillar.toLowerCase());
    const matchesSearch =
      l.fullName.toLowerCase().includes(search.toLowerCase()) ||
      l.email.toLowerCase().includes(search.toLowerCase()) ||
      (l.company && l.company.toLowerCase().includes(search.toLowerCase())) ||
      (l.ticketId && l.ticketId.toLowerCase().includes(search.toLowerCase()));
    return matchesPillar && matchesSearch;
  });

  return (
    <Layout>
      <Head>
        <title>Auditor Dispatch Portal &amp; Lead Inquiries | Kai Prakriti</title>
      </Head>

      <section className="bg-white border-b border-[#E2E8F0] py-8 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <span className="text-xs font-bold text-[#16A34A] uppercase tracking-wider">Internal Operations</span>
              <h1 className="text-2xl md:text-3xl font-serif font-bold text-[#0F3A2E]">
                Auditor Dispatch &amp; Lead Inquiries Desk
              </h1>
              <p className="text-sm text-gray-500">
                Review and dispatch incoming enterprise scoping inquiries and audit diagnostic submissions.
              </p>
            </div>
            <button
              onClick={fetchLeads}
              className="bg-[#0F3A2E] hover:bg-[#16A34A] text-white px-4 py-2 rounded-lg text-xs font-semibold transition cursor-pointer"
            >
              Refresh Dispatch Feed
            </button>
          </div>
        </div>
      </section>

      <section className="py-10 px-6 bg-[#FAFAFA]">
        <div className="container mx-auto max-w-6xl">
          {/* FILTER BAR */}
          <div className="bg-white p-4 rounded-xl border border-[#E2E8F0] mb-6 flex flex-col sm:flex-row gap-4 justify-between items-center">
            <div className="w-full sm:w-72">
              <input
                type="text"
                placeholder="Search ticket, company, contact..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg text-xs focus:ring-2 focus:ring-[#16A34A] focus:outline-none"
              />
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <span className="text-xs font-semibold text-gray-500">Pillar:</span>
              <select
                value={filterPillar}
                onChange={(e) => setFilterPillar(e.target.value)}
                className="px-3 py-2 border rounded-lg text-xs focus:ring-2 focus:ring-[#16A34A] focus:outline-none bg-white"
              >
                <option value="All">All Pillars</option>
                <option value="BRSR">BRSR / ESG Assurance</option>
                <option value="ISO">ISO Management Systems</option>
                <option value="GHG">GHG &amp; Carbon Verification</option>
                <option value="Diagnostic">Readiness Diagnostic</option>
              </select>
            </div>
          </div>

          {/* TABLE OF LEADS */}
          {loading ? (
            <div className="text-center py-16 text-gray-500 text-sm">
              <span className="inline-block w-6 h-6 border-2 border-[#16A34A] border-t-transparent rounded-full animate-spin mb-2"></span>
              <p>Fetching active lead inquiries...</p>
            </div>
          ) : filteredLeads.length === 0 ? (
            <div className="bg-white rounded-xl border border-[#E2E8F0] p-12 text-center text-gray-500">
              <p className="text-base font-semibold text-[#0F3A2E] mb-1">No Inquiries Found</p>
              <p className="text-xs">No leads currently match the specified filters or search terms.</p>
            </div>
          ) : (
            <div className="bg-white rounded-xl border border-[#E2E8F0] overflow-x-auto shadow-sm">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#F4F7F5] text-gray-600 uppercase font-semibold border-b border-[#E2E8F0]">
                  <tr>
                    <th className="px-4 py-3.5">Ticket Ref</th>
                    <th className="px-4 py-3.5">Client &amp; Company</th>
                    <th className="px-4 py-3.5">Contact Details</th>
                    <th className="px-4 py-3.5">Pillar / Scope</th>
                    <th className="px-4 py-3.5">Score / Details</th>
                    <th className="px-4 py-3.5">Timestamp</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredLeads.map((lead, idx) => (
                    <tr key={idx} className="hover:bg-gray-50 transition">
                      <td className="px-4 py-3 font-mono font-bold text-[#0F3A2E]">
                        {lead.ticketId || `KP-${idx + 1000}`}
                      </td>
                      <td className="px-4 py-3">
                        <p className="font-bold text-[#0F172A]">{lead.fullName}</p>
                        <p className="text-gray-500">{lead.company}</p>
                      </td>
                      <td className="px-4 py-3">
                        <p className="text-[#16A34A] font-medium">{lead.email}</p>
                        {lead.phone && lead.phone !== 'Not specified' && (
                          <p className="text-gray-400">{lead.phone}</p>
                        )}
                      </td>
                      <td className="px-4 py-3">
                        <span className="bg-[#F4F7F5] text-[#0F3A2E] px-2 py-0.5 rounded font-medium border border-gray-200">
                          {lead.servicePillar}
                        </span>
                      </td>
                      <td className="px-4 py-3 max-w-xs">
                        {lead.readinessScore !== undefined && (
                          <div className="mb-1">
                            <span className="font-bold text-[#16A34A]">Score: {lead.readinessScore}/100</span>
                          </div>
                        )}
                        <p className="text-gray-600 truncate" title={lead.message}>
                          {lead.message || 'Standard scoping inquiry'}
                        </p>
                      </td>
                      <td className="px-4 py-3 text-gray-400 whitespace-nowrap">
                        {lead.submittedAt ? new Date(lead.submittedAt).toLocaleDateString() : 'Recent'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
