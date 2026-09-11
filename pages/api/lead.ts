import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

type LeadData = {
  fullName: string;
  email: string;
  company?: string;
  phone?: string;
  servicePillar: string;
  message?: string;
  readinessScore?: number;
  submittedAt?: string;
  ticketId?: string;
};

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
    const newLead: LeadData = {
      fullName,
      email,
      company: company || 'Not specified',
      phone: phone || 'Not specified',
      servicePillar: servicePillar || 'General Scoping',
      message: message || '',
      readinessScore: readinessScore ?? undefined,
      submittedAt: new Date().toISOString(),
      ticketId
    };

    const dataDir = path.join(process.cwd(), 'data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    const filePath = path.join(dataDir, 'leads.json');
    let leads: LeadData[] = [];
    if (fs.existsSync(filePath)) {
      const fileData = fs.readFileSync(filePath, 'utf-8');
      try {
        leads = JSON.parse(fileData);
      } catch {
        leads = [];
      }
    }

    leads.unshift(newLead);
    fs.writeFileSync(filePath, JSON.stringify(leads, null, 2), 'utf-8');

    return res.status(200).json({
      success: true,
      ticketId,
      message: 'Scoping inquiry logged successfully. Lead auditor notified.'
    });
  } catch (error) {
    console.error('Lead submission error:', error);
    return res.status(500).json({ message: 'Internal Server Error processing request.' });
  }
}
