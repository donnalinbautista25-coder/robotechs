import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm, { type Audience } from "@/components/ContactForm";
import { contactHighlights } from "@/lib/icons";
import { site } from "@/lib/site";
import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Robotechs Inc. for IT staffing, recruitment support, or career opportunities.",
};

type ContactPageProps = {
  searchParams: Promise<{ audience?: string }>;
};

function resolveAudience(value?: string): Audience {
  if (value === "employer" || value === "candidate" || value === "other") {
    return value;
  }
  // Default for Contact Us (nav / bare /contact) = candidate seeking roles
  return "candidate";
}

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = await searchParams;
  const defaultAudience = resolveAudience(params.audience);

  const details = [
    {
      label: "Email",
      value: site.email,
      href: `mailto:${site.email}`,
      icon: Mail,
    },
    {
      label: "Phone",
      value: site.phone,
      href: `tel:${site.phone.replace(/[^\d+]/g, "")}`,
      icon: Phone,
    },
    {
      label: "Office",
      value: site.address,
      icon: MapPin,
    },
    {
      label: "Hours",
      value: site.hours,
      icon: Clock3,
    },
  ];

  return (
    <>
      <PageHero
        title="Contact Us"
        description="Whether you are hiring technology talent or exploring your next role, we would like to hear from you."
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
          <div>
            <p className="eyebrow">Send a message</p>
            <h2>How can Robotechs Inc. help?</h2>
            <div className="accent-rule" />
            <p className="lead" style={{ marginBottom: "1.75rem" }}>
              Share a few details and a consultant will respond within one business day.
            </p>
            <ContactForm defaultAudience={defaultAudience} />
          </div>

          <aside className={styles.panel}>
            <h2>Direct contact</h2>
            <ul className={styles.details}>
              {details.map(({ label, value, href, icon: Icon }) => (
                <li key={label}>
                  <span className={styles.detailIcon} aria-hidden="true">
                    <Icon size={18} strokeWidth={1.7} />
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
