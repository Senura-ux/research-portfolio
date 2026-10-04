import { NextResponse } from "next/server";

interface ContactRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function parseContactRequest(value: unknown): ContactRequest | null {
  if (!value || typeof value !== "object") return null;

  const input = value as Record<string, unknown>;
  const name = typeof input.name === "string" ? input.name.trim() : "";
  const email = typeof input.email === "string" ? input.email.trim() : "";
  const subject = typeof input.subject === "string" ? input.subject.trim() : "";
  const message = typeof input.message === "string" ? input.message.trim() : "";

  if (
    !name ||
    !EMAIL_PATTERN.test(email) ||
    !subject ||
    !message ||
    name.length > 100 ||
    email.length > 254 ||
    subject.length > 160 ||
    message.length > 5_000
  ) {
    return null;
  }

  return { name, email, subject, message };
}

export async function POST(request: Request) {
  try {
    const contact = parseContactRequest(await request.json());
    if (!contact) {
      return NextResponse.json(
        { error: "Please provide valid contact details and a message." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL;

    if (!apiKey || !to || !from) {
      return NextResponse.json(
        { error: "Contact delivery is not configured." },
        { status: 503 }
      );
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: contact.email,
        subject: `[AI EyeDx] ${contact.subject}`,
        text: [
          `Name: ${contact.name}`,
          `Email: ${contact.email}`,
          `Subject: ${contact.subject}`,
          "",
          contact.message,
        ].join("\n"),
      }),
      cache: "no-store",
    });

    if (!response.ok) {
      console.error("Contact delivery failed with status", response.status);
      return NextResponse.json(
        { error: "The message could not be delivered. Please try again later." },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Inquiry delivered successfully.",
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred while submitting your message." },
      { status: 500 }
    );
  }
}
