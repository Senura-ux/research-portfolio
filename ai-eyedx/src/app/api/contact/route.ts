import { NextResponse } from "next/server";
import nodemailer, { type Transporter } from "nodemailer";

export const runtime = "nodejs";

interface ContactRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DEFAULT_CONTACT_TO_EMAIL = "senuradinilka5@gmail.com";

let transporter: Transporter | null = null;

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

function getTransporter(): Transporter | null {
  if (transporter) return transporter;

  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!user || !pass) return null;

  const port = Number(process.env.SMTP_PORT) || 465;
  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port,
    secure: process.env.SMTP_SECURE ? process.env.SMTP_SECURE === "true" : port === 465,
    auth: { user, pass },
  });
  return transporter;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  try {
    const contact = parseContactRequest(await request.json().catch(() => null));
    if (!contact) {
      return NextResponse.json(
        { error: "Please provide valid contact details and a message." },
        { status: 400 }
      );
    }

    const mailer = getTransporter();
    if (!mailer) {
      console.error("Contact delivery is not configured: set SMTP_USER and SMTP_PASS.");
      return NextResponse.json(
        { error: "Contact delivery is not configured." },
        { status: 503 }
      );
    }

    const to = process.env.CONTACT_TO_EMAIL || DEFAULT_CONTACT_TO_EMAIL;
    // Gmail and most SMTP providers reject or rewrite a From address that isn't
    // the authenticated account, so send as the site and reply to the visitor.
    const from = process.env.CONTACT_FROM_EMAIL || `"AI EyeDx Website" <${process.env.SMTP_USER}>`;

    try {
      await mailer.sendMail({
        from,
        to,
        replyTo: { name: contact.name, address: contact.email },
        subject: `[AI EyeDx] ${contact.subject}`,
        text: [
          `Name: ${contact.name}`,
          `Email: ${contact.email}`,
          `Subject: ${contact.subject}`,
          "",
          contact.message,
        ].join("\n"),
        html: `
          <h2>New AI EyeDx contact enquiry</h2>
          <p><strong>Name:</strong> ${escapeHtml(contact.name)}</p>
          <p><strong>Email:</strong> <a href="mailto:${escapeHtml(contact.email)}">${escapeHtml(contact.email)}</a></p>
          <p><strong>Subject:</strong> ${escapeHtml(contact.subject)}</p>
          <hr />
          <p style="white-space: pre-wrap">${escapeHtml(contact.message)}</p>
        `,
      });
    } catch (error) {
      console.error("Contact delivery failed:", error);
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
