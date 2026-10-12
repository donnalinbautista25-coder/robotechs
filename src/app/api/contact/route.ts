import { NextResponse } from "next/server";
import { isMailConfigured, sendInquiryEmail } from "@/lib/mail";

export const runtime = "nodejs";
export const maxDuration = 15;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_FILE_BYTES = 4 * 1024 * 1024;
const ALLOWED_EXTENSIONS = new Set([".pdf", ".doc", ".docx"]);

const INTENTS = {
  contact: {
    label: "General inquiry",
    fields: ["name", "company", "email", "phone", "inquiryType", "message"],
    required: ["name", "email", "inquiryType", "message"],
    nameField: "name",
    emailField: "email",
  },
  partner: {
    label: "Partnership inquiry",
    fields: [
      "company",
      "name",
      "title",
      "email",
      "phone",
      "partnershipType",
      "message",
    ],
    required: ["company", "name", "email", "partnershipType", "message"],
    nameField: "name",
    emailField: "email",
  },
  talent: {
    label: "Consultant submission",
    fields: [
      "firm",
      "name",
      "email",
      "phone",
      "consultant",
      "role",
      "experience",
      "notes",
    ],
    required: ["firm", "name", "email", "consultant", "role"],
    nameField: "name",
    emailField: "email",
    fileField: "resume",
    fileRequired: true,
  },
  careers: {
    label: "Career submission",
    fields: ["name", "email", "phone", "expertise", "linkedin", "jobAlerts"],
    required: ["name", "email", "expertise"],
    nameField: "name",
    emailField: "email",
    fileField: "resume",
    fileRequired: true,
  },
} as const;

const LABELS: Record<string, string> = {
  name: "Name",
  company: "Company",
  email: "Email",
  phone: "Phone",
  inquiryType: "Inquiry type",
  message: "Message",
  title: "Title",
  partnershipType: "Type of partnership interest",
  firm: "Submitting firm",
  consultant: "Consultant name",
  role: "Role / specialization",
  experience: "Years of experience",
  notes: "Notes",
  expertise: "Area of expertise",
  linkedin: "LinkedIn",
  jobAlerts: "Job alerts",
};

const CHOICES: Record<string, Set<string>> = {
  inquiryType: new Set([
    "Staffing Partnership",
    "Client Services",
    "General Inquiry",
  ]),
  partnershipType: new Set([
    "Staffing Firm",
    "MSP",
    "Direct Client",
    "Other",
  ]),
};

type Intent = keyof typeof INTENTS;

function extensionOf(filename: string) {
  const match = filename.toLowerCase().match(/\.[a-z0-9]+$/);
  return match?.[0] ?? "";
}

function safeFilename(name: string) {
  const base = name.split(/[/\\]/).pop() ?? "resume";
  const cleaned = base.replace(/[^a-zA-Z0-9._-]/g, "_").slice(0, 120);
  return cleaned || "resume";
}

export async function POST(request: Request) {
  let form: FormData;

  try {
    form = await request.formData();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  const intentValue = String(form.get("intent") ?? "");
  if (!(intentValue in INTENTS)) {
    return NextResponse.json(
      { ok: false, error: "Unknown form type." },
      { status: 400 },
    );
  }

  const intent = INTENTS[intentValue as Intent];
  const values: Record<string, string> = {};

  for (const field of intent.fields) {
    const raw = form.get(field);
    values[field] = typeof raw === "string" ? raw.trim() : "";
    if (values[field].length > (field === "message" || field === "notes" ? 5000 : 300)) {
      return NextResponse.json(
        { ok: false, error: "One or more fields are too long." },
        { status: 400 },
      );
    }
  }

  for (const field of intent.required) {
    if (!values[field]) {
      return NextResponse.json(
        { ok: false, error: "Please complete all required fields." },
        { status: 400 },
      );
    }
  }

  const email = values[intent.emailField] ?? "";
  if (!EMAIL_PATTERN.test(email) || email.length > 254) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  for (const [field, allowed] of Object.entries(CHOICES)) {
    if (values[field] && !allowed.has(values[field])) {
      return NextResponse.json(
        { ok: false, error: "Please choose a valid option." },
        { status: 400 },
      );
    }
  }

  let attachment: { filename: string; content: Buffer; contentType: string } | undefined;
  const fileField = "fileField" in intent ? intent.fileField : undefined;

  if (fileField) {
    const file = form.get(fileField);
    const required = "fileRequired" in intent && intent.fileRequired;

    if (!(file instanceof File) || file.size === 0) {
      if (required) {
        return NextResponse.json(
          { ok: false, error: "Please attach a resume (PDF, DOC, or DOCX)." },
          { status: 400 },
        );
      }
    } else {
      if (file.size > MAX_FILE_BYTES) {
        return NextResponse.json(
          { ok: false, error: "Resume must be 4 MB or smaller." },
          { status: 400 },
        );
      }

      const filename = safeFilename(file.name);
      if (!ALLOWED_EXTENSIONS.has(extensionOf(filename))) {
        return NextResponse.json(
          { ok: false, error: "Resume must be a PDF, DOC, or DOCX file." },
          { status: 400 },
        );
      }

      attachment = {
        filename,
        content: Buffer.from(await file.arrayBuffer()),
        contentType: file.type || "application/octet-stream",
      };
    }
  }

  if (!isMailConfigured()) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "Email delivery is not configured yet. Please try again later or email us directly.",
      },
      { status: 503 },
    );
  }

  const fields = intent.fields
    .filter((field) => values[field])
    .map((field) => ({
      label: LABELS[field] ?? field,
      value: field === "jobAlerts" ? "Yes" : values[field],
    }));

  if (attachment) {
    fields.push({ label: "Resume", value: attachment.filename });
  }

  try {
    await sendInquiryEmail({
      intentLabel: intent.label,
      name: values[intent.nameField] || "Website visitor",
      email,
      fields,
      attachment,
    });
  } catch (error) {
    console.error("[contact] failed to send email", error);
    return NextResponse.json(
      { ok: false, error: "Unable to deliver your message right now." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
