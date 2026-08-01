import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Users,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import { aboutProcess, aboutValues } from "@/lib/icons";
import { site } from "@/lib/site";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Robotechs Inc.—our mission, values, and approach to specialist IT staffing.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Us"
        description="Robotechs Inc. is a specialist IT staffing firm helping organizations and professionals make decisive, well-matched career and hiring moves."
      />

      <section className="section">
        <div className={`container ${styles.split}`}>
          <div>
            <p className="eyebrow">Our story</p>
            <h2>Built for technology hiring</h2>
            <div className="accent-rule" />
            <div className={styles.audienceRow}>
              <div className={styles.audienceChip}>
                <Building2 size={18} aria-hidden="true" />
                <span>For employers</span>
              </div>
              <div className={styles.audienceChip}>
                <Users size={18} aria-hidden="true" />
                <span>For professionals</span>
              </div>
            </div>
          </div>
          <div className={styles.prose}>
            <p>
              Robotechs Inc. was founded on a simple belief: technology teams deserve
              recruiters who understand their work. We specialize in connecting
              skilled IT professionals with organizations that need capability,
              reliability, and cultural fit—not just résumés.
            </p>
            <p>
              Today we support employers across software, infrastructure, data,
              security, and digital product organizations. Whether you are scaling
              a product team or searching for a technology leader, we bring
              structured search, market insight, and a human approach.
            </p>
            <p>
              For candidates, we offer thoughtful representation—roles that match
              your skills, compensation expectations, and career direction.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--grey">
        <div className="container">
          <p className="eyebrow">How we work</p>
          <h2>A clear, collaborative process</h2>
          <div className="accent-rule" />
          <ul className={styles.timeline}>
            {aboutProcess.map(({ title, copy, icon: Icon }) => (
              <li key={title}>
                <span className={styles.iconBadge} aria-hidden="true">
                  <Icon size={22} strokeWidth={1.7} />
                </span>
                <div>
                  <strong>{title}</strong>
                  <p>{copy}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Values</p>
          <h2>What guides every engagement</h2>
          <div className="accent-rule" />
          <ul className={styles.values}>
            {aboutValues.map(({ title, copy, icon: Icon }) => (
              <li key={title} className={styles.value}>
                <span className={styles.valueIcon} aria-hidden="true">
                  <Icon size={24} strokeWidth={1.6} />
                </span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--navy">
        <div className="container">
          <p className="eyebrow">Work with us</p>
          <h2>Let’s build your next chapter</h2>
          <div className="accent-rule" />
          <p className="lead" style={{ marginBottom: "1.5rem" }}>
            Whether you are hiring or exploring your next role, our team is ready
            to help.
          </p>
          <div className={styles.ctaRow}>
            <Link
              href="/contact?audience=employer"
              className="btn btn--primary"
            >
              Partner with us <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link
              href="/contact?audience=candidate"
              className="btn btn--outline"
            >
              Contact {site.name}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
