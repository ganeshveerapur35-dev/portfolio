import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const settingsPath = path.join(process.cwd(), 'data', 'settings.json');

export async function GET() {
  try {
    if (!fs.existsSync(settingsPath)) {
      return NextResponse.json({ notifications: true, security: 'high', resumeLink: '#' });
    }
    const data = fs.readFileSync(settingsPath, 'utf8');
    return NextResponse.json(JSON.parse(data));
  } catch {
    return NextResponse.json({ error: 'Failed to load settings' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const newSettings = await req.json();
    
    const dataDir = path.dirname(settingsPath);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    
    let existingSettings = {};
    if (fs.existsSync(settingsPath)) {
      existingSettings = JSON.parse(fs.readFileSync(settingsPath, 'utf8'));
    }
    
    const updatedSettings = { ...existingSettings, ...newSettings };
    fs.writeFileSync(settingsPath, JSON.stringify(updatedSettings, null, 2), 'utf8');
    
    return NextResponse.json({ success: true, settings: updatedSettings });
  } catch {
    return NextResponse.json({ error: 'Failed to save settings' }, { status: 500 });
  }
}
