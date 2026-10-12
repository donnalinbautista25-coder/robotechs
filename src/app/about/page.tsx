import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import { employmentHandles, site } from "@/lib/site";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Robotechs connects skilled technology professionals with enterprise opportunities and manages the full employment relationship.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Us"
        description="Robotechs is an IT staffing and outsourcing company built to connect skilled technology professionals with enterprise-level opportunities."
      />

      <section className="section">
        <div className={`container ${styles.split}`}>
          <div>
            <p className="eyebrow">Overview</p>
            <h2>Talent placed through trusted workforce partners</h2>
            <div className="accent-rule" />
          </div>
          <div className={styles.prose}>
            <p>
              We work through established workforce and recruitment partners to
              place qualified talent, including software engineers, database
              administrators, cloud specialists, systems analysts, and
              cybersecurity professionals, into contract, contract-to-hire,
              project-based, and long-term assignments.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--grey">
        <div className="container">
          <p className="eyebrow">How we operate</p>
          <h2>Direct employment from onboarding through the assignment</h2>
          <div className="accent-rule" />
          <p className="lead">
            As a staffing and outsourcing provider, Robotechs identifies and
            evaluates qualified candidates, matches them to opportunities
            aligned with their skills and career objectives, and manages the
            full employment relationship from onboarding through the life of
            the assignment. Every professional placed through Robotechs is
            directly employed by our company. We handle:
          </p>
          <ul className={styles.handles}>
            {employmentHandles.map((item) => (
              <li key={item}>
                <CheckCircle2 size={16} aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className={`container ${styles.split}`}>
          <div>
            <p className="eyebrow">Our growth</p>
            <h2>An enterprise-ready foundation</h2>
            <div className="accent-rule" />
            <div className={styles.prose}>
              <p>
                Robotechs is a newly established company built with an
                enterprise-ready foundation. We currently support technology
                professionals assigned to enterprise-scale projects through
                strategic staffing partnerships, and we are actively expanding
                as new client opportunities and project demand grow.
              </p>
            </div>
          </div>
          <div>
            <p className="eyebrow">Our commitment</p>
            <h2>Reliable talent, supported people</h2>
            <div className="accent-rule" />
            <div className={styles.prose}>
              <p>
                We are committed to delivering reliable technology talent
                solutions while supporting the professional growth of our
                employees and the evolving workforce needs of our clients and
                partners.
              </p>
            </div>
            <div className={styles.womenOwned}>
              <p className={styles.womenOwnedLabel}>Proudly women-owned</p>
              <div className={styles.womenOwnedBadges}>
                <Image
                  src="/badges/women-owned-seal.png"
                  alt="Women Owned Business"
                  width={72}
                  height={72}
                  className={styles.womenOwnedSeal}
                />
                <Image
                  src="/badges/women-owned-logo.png"
                  alt="Women Owned"
                  width={90}
                  height={89}
                  className={styles.womenOwnedLogo}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--navy">
        <div className="container">
          <p className="eyebrow">Work with us</p>
          <h2>Talk with {site.shortName}</h2>
          <div className="accent-rule" />
          <div className={styles.ctaRow}>
            <Link href="/partner" className="btn btn--primary">
              Partner With Us <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link href="/careers" className="btn btn--outline">
              Careers
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
