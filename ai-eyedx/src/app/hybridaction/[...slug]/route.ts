import { NextResponse } from 'next/server';

// Silently handle browser extension tracker requests (e.g., translation/dictionary extensions)
export async function GET() {
  return new NextResponse(null, { status: 204 });
}

export async function POST() {
  return new NextResponse(null, { status: 204 });
}
