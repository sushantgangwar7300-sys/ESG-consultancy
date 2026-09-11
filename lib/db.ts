import fs from 'fs';
import path from 'path';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

export type LeadRecord = {
  ticketId: string;
  fullName: string;
  email: string;
  company?: string;
  phone?: string;
  servicePillar: string;
  message?: string;
  readinessScore?: number;
  submittedAt: string;
};

// Supabase client initialization (if env vars provided)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_KEY;

let supabase: SupabaseClient | null = null;
if (supabaseUrl && supabaseKey) {
  supabase = createClient(supabaseUrl, supabaseKey);
}

// Fallback file path (supports serverless /tmp if deployed without database)
const getLocalDataDir = () => {
  if (process.env.NETLIFY || process.env.VERCEL) {
    return path.join('/tmp', 'kai-prakriti');
  }
  return path.join(process.cwd(), 'data');
};

export async function saveLead(lead: LeadRecord): Promise<{ success: boolean; storageType: 'supabase' | 'file' }> {
  // 1. Try Supabase cloud database first if configured
  if (supabase) {
    try {
      const { error } = await supabase.from('leads').insert([
        {
          ticket_id: lead.ticketId,
          full_name: lead.fullName,
          email: lead.email,
          company: lead.company,
          phone: lead.phone,
          service_pillar: lead.servicePillar,
          message: lead.message,
          readiness_score: lead.readinessScore,
          submitted_at: lead.submittedAt
        }
      ]);
      if (!error) {
        return { success: true, storageType: 'supabase' };
      }
      console.warn('Supabase insert warning (falling back to file):', error.message);
    } catch (err) {
      console.warn('Supabase connection error:', err);
    }
  }

  // 2. Fallback to file storage
  try {
    const dataDir = getLocalDataDir();
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    const filePath = path.join(dataDir, 'leads.json');
    let leads: LeadRecord[] = [];
    if (fs.existsSync(filePath)) {
      try {
        leads = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
      } catch {
        leads = [];
      }
    }
    leads.unshift(lead);
    fs.writeFileSync(filePath, JSON.stringify(leads, null, 2), 'utf-8');
    return { success: true, storageType: 'file' };
  } catch (fileErr) {
    console.error('File storage error:', fileErr);
    return { success: false, storageType: 'file' };
  }
}

export async function getLeads(): Promise<LeadRecord[]> {
  // 1. Try Supabase cloud database first if configured
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from('leads')
        .select('*')
        .order('submitted_at', { ascending: false });

      if (!error && data) {
        return data.map((row: any) => ({
          ticketId: row.ticket_id,
          fullName: row.full_name,
          email: row.email,
          company: row.company,
          phone: row.phone,
          servicePillar: row.service_pillar,
          message: row.message,
          readinessScore: row.readiness_score,
          submittedAt: row.submitted_at
        }));
      }
    } catch (err) {
      console.warn('Supabase fetch error:', err);
    }
  }

  // 2. Fallback to file storage
  try {
    const dataDir = getLocalDataDir();
    const filePath = path.join(dataDir, 'leads.json');
    if (fs.existsSync(filePath)) {
      return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    }
  } catch (fileErr) {
    console.error('File read error:', fileErr);
  }

  return [];
}
