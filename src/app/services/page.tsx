import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { services, specialties } from "@/lib/site";
import styles from "./services.module.css";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Robotech IT staffing services—permanent placement, contract staffing, leadership search, and more.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Services"
        description="Specialist recruitment and workforce solutions designed for technology organizations and IT professionals."
      />

      <section className="section">
        <div className="container">
          <p className="eyebrow">How we help</p>
          <h2>Recruitment built around your workforce goals</h2>
          <div className="gold-rule" />
          <p className="lead" style={{ marginBottom: "2rem" }}>
            Every engagement is tailored—whether you need one critical hire or a
            sustained hiring program across multiple teams.
          </p>

          <ul className={styles.list}>
            {services.map((service) => (
              <li key={service.slug} className={styles.item}>
                <h2>{service.title}</h2>
                <div>
                  <p style={{ marginBottom: "0.65rem", color: "var(--navy)", fontWeight: 600 }}>
                    {service.summary}
                  </p>
                  <p>{service.details}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--grey">
        <div className="container">
          <p className="eyebrow">Coverage</p>
          <h2>Technology disciplines we staff</h2>
          <div className="gold-rule" />
          <p className="lead">
            Our consultants work across core and emerging IT specialisms, giving
            you access to talent that matches today’s stacks and tomorrow’s roadmap.
          </p>
          <div className={styles.chips}>
            {specialties.map((item) => (
              <span key={item} className={styles.chip}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--navy">
        <div className="container">
          <p className="eyebrow">Start a search</p>
          <h2>Tell us about the roles you need to fill</h2>
          <div className="gold-rule" />
          <p className="lead" style={{ marginBottom: "1.5rem" }}>
            Share your requirements and we will recommend the right engagement model.
          </p>
          <Link href="/contact" className="btn btn--gold">
            Contact our team
          </Link>
        </div>
      </section>
    </>
  );
}
