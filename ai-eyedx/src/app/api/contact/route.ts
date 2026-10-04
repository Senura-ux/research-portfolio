import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      );
    }

    // In production, this can forward to an email service (Resend, SendGrid, etc.)
    // or log/store in a database like MongoDB.
    console.log('Received academic contact message:', {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: 'Inquiry received successfully. Our research team will review it shortly.',
    });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred while submitting your message.' },
      { status: 500 }
    );
  }
}
