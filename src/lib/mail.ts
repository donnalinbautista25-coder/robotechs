import nodemailer from "nodemailer";
import { site } from "@/lib/site";

export type ContactInquiry = {
  name: string;
  email: string;
  company: string;
  audience: string;
  message: string;
};

const audienceLabels: Record<string, string> = {
  employer: "Employer hiring talent",
  candidate: "Candidate seeking roles",
  other: "Other",
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function formatAudience(audience: string) {
  return audienceLabels[audience] ?? audience;
}

function getSmtpConfig() {
  const user = process.env.GMAIL_USER?.trim();
  const pass = process.env.GMAIL_APP_PASSWORD?.replace(/[\s\u00A0]+/g, "");

  if (!user || !pass) {
    return null;
  }

  return {
    user,
    pass,
    to: process.env.CONTACT_TO_EMAIL?.trim() || user,
  };
}

export function isMailConfigured() {
  return getSmtpConfig() !== null;
}

function createTransporter(user: string, pass: string) {
  return nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: { user, pass },
    connectionTimeout: 8_000,
    greetingTimeout: 8_000,
    socketTimeout: 8_000,
  });
}

function brandedHtml(title: string, body: string) {
  return `<!DOCTYPE html>
<html>
  <body style="margin:0;padding:0;background:#f2f4f6;font-family:Helvetica,Arial,sans-serif;color:#1a1a1a;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f2f4f6;padding:24px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border:1px solid #e3e8eb;">
            <tr>
              <td style="background:#171b2e;color:#ffffff;padding:20px 28px;">
                <p style="margin:0;font-size:12px;letter-spacing:0.12em;text-transform:uppercase;color:#c9a84a;">${escapeHtml(site.name)}</p>
                <h1 style="margin:8px 0 0;font-size:20px;font-weight:500;">${escapeHtml(title)}</h1>
              </td>
            </tr>
            <tr>
              <td style="padding:28px;font-size:15px;line-height:1.6;color:#3d4a54;">
                ${body}
              </td>
            </tr>
            <tr>
              <td style="padding:16px 28px;border-top:1px solid #e3e8eb;font-size:12px;color:#6b7780;">
                ${escapeHtml(site.name)} · ${escapeHtml(site.tagline)}
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

function acknowledgmentContent(inquiry: ContactInquiry) {
  const firstName = inquiry.name.split(/\s+/)[0] || inquiry.name;
  const text = [
    `Hi ${firstName},`,
    "",
    `Thank you for contacting ${site.name}. We have received your message and a consultant will respond within one business day.`,
    "",
    "If you need to add anything, you can reply to this email.",
    "",
    `— ${site.name}`,
    site.tagline,
  ].join("\n");

  const html = brandedHtml(
    "We received your message",
    `<p style="margin:0 0 16px;">Hi ${escapeHtml(firstName)},</p>
     <p style="margin:0 0 16px;">Thank you for contacting ${escapeHtml(site.name)}. We have received your message and a consultant will respond within one business day.</p>
     <p style="margin:0;">If you need to add anything, you can reply to this email.</p>`,
  );

  return { text, html };
}

function notificationContent(inquiry: ContactInquiry) {
  const audience = formatAudience(inquiry.audience);
  const receivedAt = new Date().toUTCString();
  const rows = [
    ["Name", inquiry.name],
    ["Work email", inquiry.email],
    ["Company", inquiry.company || "—"],
    ["I am", audience],
    ["Received", receivedAt],
  ];

  const text = [
    `New website inquiry from ${inquiry.name}`,
    "",
    ...rows.map(([label, value]) => `${label}: ${value}`),
    "",
    "Message:",
    inquiry.message,
  ].join("\n");

  const htmlRows = rows
    .map(
      ([label, value]) =>
        `<tr>
          <td style="padding:8px 0;width:140px;color:#6b7780;vertical-align:top;">${escapeHtml(label)}</td>
          <td style="padding:8px 0;color:#1a1a1a;">${escapeHtml(value)}</td>
        </tr>`,
    )
    .join("");

  const html = brandedHtml(
    "New website inquiry",
    `<p style="margin:0 0 16px;">A new message was submitted from the ${escapeHtml(site.name)} website.</p>
     <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
       ${htmlRows}
     </table>
     <p style="margin:20px 0 8px;color:#6b7780;">Message</p>
     <p style="margin:0;white-space:pre-wrap;color:#1a1a1a;">${escapeHtml(inquiry.message)}</p>`,
  );

  return { text, html };
}

export async function sendContactEmails(inquiry: ContactInquiry) {
  const config = getSmtpConfig();

  if (!config) {
    throw new Error("Email is not configured.");
  }

  const transporter = createTransporter(config.user, config.pass);
  const from = { name: site.name, address: config.user };
  const ack = acknowledgmentContent(inquiry);
  const notice = notificationContent(inquiry);
  const audience = formatAudience(inquiry.audience);

  try {
    await Promise.all([
      transporter.sendMail({
        from,
        to: inquiry.email,
        replyTo: config.to,
        subject: `We received your message | ${site.name}`,
        text: ack.text,
        html: ack.html,
      }),
      transporter.sendMail({
        from,
        to: config.to,
        replyTo: inquiry.email,
        subject: `New inquiry from ${inquiry.name} (${audience})`,
        text: notice.text,
        html: notice.html,
      }),
    ]);
  } finally {
    transporter.close();
  }
}
