import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Robotech for IT staffing, recruitment support, or career opportunities.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        description="Whether you are hiring technology talent or exploring your next role, we would like to hear from you."
      />

      <section className="section">
        <div className={`container ${styles.layout}`}>
          <div>
            <p className="eyebrow">Send a message</p>
            <h2>How can Robotech help?</h2>
            <div className="gold-rule" />
            <p className="lead" style={{ marginBottom: "1.75rem" }}>
              Share a few details and a consultant will respond within one business day.
            </p>
            <ContactForm />
          </div>

          <aside className={styles.panel}>
            <h2>Direct contact</h2>
            <ul className={styles.details}>
              <li>
                <strong>Email</strong>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>
                <strong>Phone</strong>
                <a href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}>
                  {site.phone}
                </a>
              </li>
              <li>
                <strong>Office</strong>
                <span>{site.address}</span>
              </li>
              <li>
                <strong>Hours</strong>
                <span>{site.hours}</span>
              </li>
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}
