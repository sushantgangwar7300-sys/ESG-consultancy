import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const filePath = path.join(process.cwd(), 'data', 'leads.json');
    if (!fs.existsSync(filePath)) {
      return res.status(200).json({ leads: [] });
    }

    const data = fs.readFileSync(filePath, 'utf-8');
    const leads = JSON.parse(data);
    return res.status(200).json({ leads });
  } catch (error) {
    console.error('Error fetching leads:', error);
    return res.status(500).json({ leads: [] });
  }
}
