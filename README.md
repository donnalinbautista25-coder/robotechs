# Robotech

Company profile website for **Robotech**, an IT staffing firm. Built with Next.js (App Router), React, and TypeScript.

## Pages

- `/` — Home
- `/about` — About Us
- `/services` — Services
- `/contact` — Contact Us
- `/terms` — Terms and Conditions

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Copy `.env.example` to `.env.local` and adjust values as needed.

## Environment variables

| Variable | Required | Description |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Recommended | Canonical site URL for metadata |
| `GMAIL_USER` | Yes (for the form) | Gmail address used to send mail over SMTP |
| `GMAIL_APP_PASSWORD` | Yes (for the form) | Google App Password for that Gmail account |
| `CONTACT_TO_EMAIL` | Optional | Inbox that receives inquiries (defaults to `GMAIL_USER`) |

### Gmail App Password

Gmail will not accept your normal account password over SMTP. Create an App Password:

1. Turn on [2-Step Verification](https://myaccount.google.com/signinoptions/two-step-verification).
2. Open [App passwords](https://myaccount.google.com/apppasswords) and create one for Mail / Other.
3. Paste the 16-character password into `GMAIL_APP_PASSWORD` (spaces are ignored).

On first send from a new host (including Vercel), Google may email you a security alert. Confirm it was you if delivery fails.

The contact form uses Gmail SMTP from a Node.js Route Handler (`/api/contact`). That works on Vercel’s free Hobby plan because the default runtime is Node.js (not Edge). Each submit sends two messages: an acknowledgment to the visitor’s work email, and the inquiry details to `CONTACT_TO_EMAIL`.

## Deploy on Vercel

1. Push this repo to GitHub / GitLab / Bitbucket.
2. Import the project in [Vercel](https://vercel.com/new).
3. In Project Settings → Environment Variables, add `GMAIL_USER`, `GMAIL_APP_PASSWORD`, and optionally `CONTACT_TO_EMAIL` and `NEXT_PUBLIC_SITE_URL`.
4. Deploy — framework preset is detected automatically (no `vercel.json` required).

To remove from Vercel later: delete the project in the Vercel dashboard. The app has no Vercel-specific lock-in.

## Deploy elsewhere

Any host that runs a Node.js Next.js app works:

```bash
npm ci
npm run build
npm run start
```

Examples: Railway, Render, Fly.io, a VPS, or Docker.

For a smaller container image, enable `output: "standalone"` in `next.config.ts`, then use the generated `.next/standalone` output.

Static export (`output: "export"`) is not used because the contact form relies on an API route — keeping the standard Node runtime makes moves between hosts straightforward.

## Project structure

```
src/app/          # Routes and global styles
src/components/   # Shared UI
src/lib/site.ts   # Company copy, nav, services
```

Update company details in `src/lib/site.ts`.
