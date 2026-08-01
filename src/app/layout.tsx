import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import "./globals.css";

const robotechSans = localFont({
  src: [
    {
      path: "../fonts/RobotechSans-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/RobotechSans-LightItalic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../fonts/RobotechSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/RobotechSans-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/RobotechSans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/RobotechSans-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
  ],
  variable: "--font-robotech",
  display: "swap",
  fallback: ["Helvetica Neue", "Arial", "sans-serif"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} | IT Staffing & Workforce Solutions`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={robotechSans.variable}>
      <body className={robotechSans.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
