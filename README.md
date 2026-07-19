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
| `CONTACT_WEBHOOK_URL` | Optional | Forwards contact form POSTs to your webhook / CRM / email service |

Without `CONTACT_WEBHOOK_URL`, the contact API still validates submissions and returns success (messages are logged in development). Wire the webhook when you are ready to receive leads.

## Deploy on Vercel

1. Push this repo to GitHub / GitLab / Bitbucket.
2. Import the project in [Vercel](https://vercel.com/new).
3. Set env vars from `.env.example`.
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
