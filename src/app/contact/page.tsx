import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import InquiryForm from "@/components/InquiryForm";
import { contactHighlights } from "@/lib/icons";
import { site } from "@/lib/site";
import { Mail, MapPin, Phone } from "lucide-react";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Robotechs whether you are a staffing partner, enterprise client, or technology professional.",
};

export default function ContactPage() {
  const details = [
    {
      label: "Email",
      value: site.email,
      href: `mailto:${site.email}`,
      icon: Mail,
    },
    ...(site.phone
      ? [
          {
            label: "Phone",
            value: site.phone,
            href: `tel:${site.phone.replace(/[^\d+]/g, "")}`,
            icon: Phone,
          },
        ]
      : []),
    ...(site.address
      ? [
          {
            label: "Address",
            value: site.address,
            icon: MapPin,
          },
        ]
      : []),
  ];

  return (
    <>
      <PageHero
        title="Contact Us"
        description="Get in touch with Robotechs."
      />

      <section className={`section--tight ${styles.highlights}`}>
        <div className={`container ${styles.highlightGrid}`}>
          {contactHighlights.map(({ title, copy, icon: Icon }) => (
            <article key={title} className={styles.highlight}>
              <span className={styles.highlightIcon} aria-hidden="true">
                <Icon size={22} strokeWidth={1.7} />
              </span>
              <h2>{title}</h2>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className={`container ${styles.layout}`}>
          <div className={styles.formBlock}>
            <p className="eyebrow">General inquiries</p>
            <h2>Whether you are a partner, client, or professional</h2>
            <div className="accent-rule" />
            <p className="lead" style={{ marginBottom: "1rem" }}>
              Whether you&apos;re a staffing partner, enterprise client, or
              technology professional, we&apos;re glad to hear from you.
            </p>
            <p style={{ marginBottom: "0.75rem" }}>
              For staffing firms, recruiting partners, and MSPs looking to
              collaborate, use our <Link href="/partner">Partner With Us</Link>{" "}
              page for a dedicated inquiry form.
            </p>
            <p style={{ marginBottom: "1.75rem" }}>
              For job seekers, visit our <Link href="/careers">Careers</Link>{" "}
              page to submit your resume or sign up for job alerts.
            </p>
            <InquiryForm
              intent="contact"
              submitLabel="Send message"
              fields={[
                { name: "name", label: "Name", required: true, half: true },
                { name: "company", label: "Company", half: true },
                { name: "email", label: "Email", type: "email", required: true, half: true },
                { name: "phone", label: "Phone", type: "tel", half: true },
                {
                  name: "inquiryType",
                  label: "Inquiry type",
                  type: "select",
                  required: true,
                  options: ["Staffing Partnership", "Client Services", "General Inquiry"],
                },
                { name: "message", label: "Message", type: "textarea", required: true },
              ]}
            />
          </div>

          <aside className={styles.panel}>
            <div className={styles.panelHeader}>
              <p className="eyebrow">Reach us</p>
              <h2>Company contact</h2>
              <p className={styles.panelIntro}>
                Phone and office address will be added when they are confirmed.
              </p>
            </div>
            <ul className={styles.details}>
              {details.map(({ label, value, href, icon: Icon }) => (
                <li key={label}>
                  <span className={styles.detailIcon} aria-hidden="true">
                    <Icon size={18} strokeWidth={1.6} />
                  </span>
                  <div>
                    <strong>{label}</strong>
                    {href ? <a href={href}>{value}</a> : <span>{value}</span>}
                  </div>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}
