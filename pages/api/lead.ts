import type { NextApiRequest, NextApiResponse } from 'next';
import { saveLead, LeadRecord } from '@/lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const { fullName, email, company, phone, servicePillar, message, readinessScore } = req.body;

    if (!fullName || !email) {
      return res.status(400).json({ message: 'Full name and email are required.' });
    }

    const ticketId = `KP-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    const newLead: LeadRecord = {
      ticketId,
      fullName,
      email,
      company: company || 'Not specified',
      phone: phone || 'Not specified',
      servicePillar: servicePillar || 'General Scoping',
      message: message || '',
      readinessScore: readinessScore ?? undefined,
      submittedAt: new Date().toISOString()
    };

    const { success, storageType } = await saveLead(newLead);

    return res.status(200).json({
      success,
      ticketId,
      storage: storageType,
      message: 'Scoping inquiry logged successfully. Lead auditor notified.'
    });
  } catch (error) {
    console.error('Lead submission error:', error);
    return res.status(500).json({ message: 'Internal Server Error processing request.' });
  }
}
