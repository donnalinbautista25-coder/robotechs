import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  audience?: string;
  message?: string;
};

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
  const message = body.message?.trim() ?? "";

  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "Please complete all required fields." },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  // Portable webhook hook: set CONTACT_WEBHOOK_URL to forward submissions
  // to your email provider, CRM, or form backend on any host.
  const webhook = process.env.CONTACT_WEBHOOK_URL;

  if (webhook) {
    try {
      const response = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          company: body.company?.trim() ?? "",
          audience: body.audience ?? "employer",
          message,
          source: "robotech-website",
          receivedAt: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        return NextResponse.json(
          { ok: false, error: "Unable to deliver your message right now." },
          { status: 502 },
        );
      }
    } catch {
      return NextResponse.json(
        { ok: false, error: "Unable to deliver your message right now." },
        { status: 502 },
      );
    }
  } else if (process.env.NODE_ENV === "development") {
    console.info("[contact]", {
      name,
      email,
      company: body.company,
      audience: body.audience,
      message,
    });
  }

  return NextResponse.json({ ok: true });
}
