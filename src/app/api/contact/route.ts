import { NextResponse } from "next/server";
import { isMailConfigured, sendContactEmails } from "@/lib/mail";

export const runtime = "nodejs";
export const maxDuration = 10;

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  audience?: string;
  message?: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const AUDIENCES = new Set(["employer", "candidate", "other"]);

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const company = body.company?.trim() ?? "";
  const message = body.message?.trim() ?? "";
  const audience = AUDIENCES.has(body.audience ?? "")
    ? (body.audience as string)
    : "other";

  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "Please complete all required fields." },
      { status: 400 },
    );
  }

  if (
    name.length > 120 ||
    email.length > 254 ||
    company.length > 160 ||
    message.length > 5000
  ) {
    return NextResponse.json(
      { ok: false, error: "One or more fields are too long." },
      { status: 400 },
    );
  }

  if (!EMAIL_PATTERN.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  if (!isMailConfigured()) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "Email delivery is not configured yet. Please try again later or use the contact details on this page.",
      },
      { status: 503 },
    );
  }

  try {
    await sendContactEmails({ name, email, company, audience, message });
  } catch (error) {
    console.error("[contact] failed to send email", error);
    return NextResponse.json(
      { ok: false, error: "Unable to deliver your message right now." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
