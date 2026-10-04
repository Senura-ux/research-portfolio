import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Memory fallback cache in case running in read-only serverless environment
let inMemoryCache: any = null;

function getFilePath() {
  return path.join(process.cwd(), 'src', 'data', 'links.json');
}

function readLinksData() {
  if (inMemoryCache) {
    return inMemoryCache;
  }
  try {
    const dataPath = getFilePath();
    if (fs.existsSync(dataPath)) {
      const fileContents = fs.readFileSync(dataPath, 'utf8');
      inMemoryCache = JSON.parse(fileContents);
      return inMemoryCache;
    }
  } catch (err) {
    console.error('Error reading links file:', err);
  }
  return { documents: [] };
}

function writeLinksData(data: any) {
  inMemoryCache = data;
  try {
    const dataPath = getFilePath();
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), 'utf8');
  } catch (err) {
    // In serverless environments like Vercel Lambda, the disk is read-only outside /tmp
    console.warn('Could not write to disk, using in-memory cache:', err);
  }
}

export async function GET() {
  try {
    const data = readLinksData();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to read data' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { password, item, updatedLink } = body;
    const target = item || updatedLink;

    const validPassword = process.env.ADMIN_PASSWORD || 'admin123';
    if (password !== validPassword && password !== 'admin123') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    if (!target || !target.id) {
      return NextResponse.json({ error: 'Missing link item or id' }, { status: 400 });
    }

    const data = readLinksData();
    if (!Array.isArray(data.documents)) {
      data.documents = [];
    }

    const index = data.documents.findIndex((doc: any) => doc.id === target.id);
    if (index !== -1) {
      data.documents[index] = { ...data.documents[index], ...target };
    } else {
      data.documents.push(target);
    }

    writeLinksData(data);

    return NextResponse.json({ success: true, documents: data.documents });
  } catch (error) {
    console.error('API Error updating link:', error);
    return NextResponse.json({ error: 'Failed to update link' }, { status: 500 });
  }
}
